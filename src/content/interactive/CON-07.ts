import type { InteractiveLesson } from './types'

export const intCON07: InteractiveLesson = {
  lessonId: 'CON-07',
  sections: [
    // El juego completo de estados financieros
    [
      { text: 'Como un chequeo médico con varios estudios 🩺, la empresa tiene varios **estados financieros** que juntos dan el diagnóstico completo.' },
      { text: 'El balance es una **foto en una fecha**. Los demás son una **película de un periodo**.' },
      {
        sort: {
          title: '¿Foto o película?',
          buckets: ['En una fecha (foto)', 'Por un periodo (película)'],
          items: [
            { text: 'Estado de situación financiera (balance general)', bucket: 0, why: 'Muestra lo que se tiene y se debe en un día.' },
            { text: 'Estado de resultado integral', bucket: 1, why: 'Junta ingresos y gastos de todo el periodo.' },
            { text: 'Estado de cambios en el capital contable', bucket: 1, why: 'Muestra cómo cambió el capital durante el periodo.' },
            { text: 'Estado de flujos de efectivo', bucket: 1, why: 'Cuenta el dinero que entró y salió en el periodo.' },
            { text: '"Al 31 de diciembre"', bucket: 0, why: 'Una sola fecha: va en el balance.' },
            { text: '"Del 1 de enero al 31 de diciembre"', bucket: 1, why: 'Un periodo: va en el estado de resultados.' },
          ],
        },
      },
      {
        match: {
          title: '¿Qué estado responde la pregunta?',
          pairs: [
            ['¿Qué tengo y qué debo hoy?', 'Situación financiera'],
            ['¿Gané o perdí este año?', 'Resultado integral'],
            ['¿Cómo cambió lo de los dueños?', 'Cambios en el capital contable'],
            ['¿De dónde vino y a dónde fue el dinero?', 'Flujos de efectivo'],
          ],
        },
      },
      {
        ask: '¿Las **notas** son parte de los estados financieros?',
        options: [
          { text: 'Sí, son parte integral: explican políticas, detalles y riesgos', ok: true, reply: '¡Así es! Sin notas, los números quedan **incompletos**.' },
          { text: 'No, son un anexo opcional', reply: 'Las notas **sí** forman parte de los estados. Sin ellas, los números quedan incompletos.' },
        ],
      },
    ],
    // De los saldos al estado de resultados
    [
      { text: 'Se parte de la **balanza de comprobación** ya ajustada: la lista de cuentas con su saldo final. Cada cuenta se va a su estado.' },
      {
        sort: {
          title: '¿A qué estado va cada cuenta?',
          buckets: ['Balance', 'Estado de resultados'],
          items: [
            { text: 'Bancos', bucket: 0, why: 'Es un activo: va al balance.' },
            { text: 'Ventas', bucket: 1, why: 'Es un ingreso: va a resultados.' },
            { text: 'Proveedores', bucket: 0, why: 'Es un pasivo: va al balance.' },
            { text: 'Costo de ventas', bucket: 1, why: 'Es un costo: va a resultados.' },
            { text: 'Capital social', bucket: 0, why: 'Es capital: va al balance.' },
            { text: 'Sueldos de administración', bucket: 1, why: 'Es un gasto: va a resultados.' },
          ],
        },
      },
      { text: 'El estado de resultados resta **por niveles**, para ver dónde se gana o se pierde. Juega con la tortillería 🌽:' },
      {
        sim: {
          title: 'Los niveles de la tortillería',
          inputs: [
            { key: 'v', label: 'Ventas', min: 50000, max: 150000, step: 10000, value: 100000 },
            { key: 'c', label: 'Costo de ventas', min: 30000, max: 90000, step: 5000, value: 60000 },
            { key: 'g', label: 'Gastos de operación', min: 10000, max: 40000, step: 5000, value: 25000 },
          ],
          outputs: [
            { label: 'Utilidad bruta', calc: (x) => x.v - x.c },
            { label: 'Utilidad de operación', calc: (x) => x.v - x.c - x.g, main: true },
          ],
          goal: {
            text: 'Lleva la **utilidad de operación** a **$40,000 o más**.',
            check: (x) => x.v - x.c - x.g >= 40000,
            done: 'Ves de inmediato si el problema está en el **costo** del producto o en los **gastos**.',
          },
        },
      },
      {
        calc: {
          question: 'Utilidad de operación **$30,000**, gastos financieros **$5,000** e impuestos **$7,500**. ¿Cuál es la **utilidad neta**?',
          answer: 17500,
          hint: 'primero resta los gastos financieros, luego los impuestos.',
          why: '30,000 − 5,000 = 25,000 antes de impuestos. 25,000 − 7,500 = **$17,500** de utilidad neta.',
        },
      },
      { tip: 'Niveles: **bruta → de operación → antes de impuestos → neta**.' },
    ],
    // Balance clasificado y flujo de efectivo
    [
      { text: 'En el balance se separa lo **circulante** (corto plazo: dentro de un año o del ciclo normal) de lo **no circulante** (largo plazo). Así un banco ve si puedes pagar tus deudas próximas.' },
      {
        sort: {
          title: 'Las cuentas de Grupo Tacos Felices 🌮',
          buckets: ['Circulante', 'No circulante'],
          items: [
            { text: 'Clientes que pagan en 30 días', bucket: 0, why: 'Se cobra en menos de un año.' },
            { text: 'Local comprado para la taquería', bucket: 1, why: 'Se usa muchos años: largo plazo.' },
            { text: 'Tortillas y carne en inventario', bucket: 0, why: 'Se venden pronto.' },
            { text: 'Préstamo bancario a 5 años', bucket: 1, why: 'Se paga en más de un año.' },
            { text: 'Proveedores a 15 días', bucket: 0, why: 'Deuda de corto plazo.' },
          ],
        },
      },
      { text: 'El flujo de efectivo separa el dinero en tres actividades. Recuerda: **ganar no es lo mismo que tener efectivo**.' },
      {
        match: {
          title: 'Las tres actividades',
          pairs: [
            ['Operación', 'El día a día del negocio'],
            ['Inversión', 'Comprar o vender activos de largo plazo'],
            ['Financiamiento', 'Préstamos y aportaciones de dueños'],
          ],
        },
      },
      { text: 'Con el **método indirecto** partes de la utilidad (lo ganado "en papel") y la conviertes en efectivo real.' },
      {
        multi: {
          title: '¿Qué se **suma** a la utilidad?',
          items: [
            { text: 'La depreciación', ok: true },
            { text: 'Una disminución en inventarios', ok: true },
            { text: 'Un aumento en proveedores', ok: true },
            { text: 'Un aumento en clientes', ok: false },
          ],
          why: 'La depreciación fue gasto sin salida de dinero. Si quedaste a deber al proveedor, el dinero sigue en tu caja. Pero si vendiste a crédito (clientes sube), el dinero **aún no llega**: se resta.',
        },
      },
      {
        calc: {
          question: 'Utilidad neta **$40,000**, depreciación **$5,000**, aumento en inventarios **$6,000** y aumento en proveedores **$3,000**. ¿Cuál es el **flujo de operación**?',
          answer: 42000,
          hint: 'suma depreciación y proveedores; resta inventarios.',
          why: '40,000 + 5,000 − 6,000 + 3,000 = **$42,000**.',
        },
      },
      { tip: 'Activo circulante que **sube** → resta. Pasivo circulante que **sube** → suma.' },
    ],
  ],
}
