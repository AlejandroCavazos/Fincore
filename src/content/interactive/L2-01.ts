import type { InteractiveLesson } from './types'

const SUBE_AC = 'Suben el activo y el capital'
const BAJA_AC = 'Bajan el activo y el capital'
const SUBE_AP = 'Suben el activo y el pasivo'

export const intL201: InteractiveLesson = {
  lessonId: 'L2-01',
  sections: [
    // Estado de situación financiera
    [
      { text: 'El **estado de situación financiera** es una **foto** 📸 de un día concreto: lo que el negocio **tiene** (activos), lo que **debe** (pasivos) y lo que es de los dueños (**capital contable**).' },
      {
        sim: {
          title: 'La foto de la tiendita',
          inputs: [
            { key: 'a', label: 'Activos (lo que tiene)', min: 100000, max: 500000, step: 25000, value: 200000 },
            { key: 'p', label: 'Pasivos (lo que debe)', min: 50000, max: 300000, step: 25000, value: 250000 },
          ],
          outputs: [{ label: 'Capital contable (lo de los dueños)', calc: (x) => x.a - x.p, main: true }],
          goal: {
            text: 'El capital sale negativo: ¡debe más de lo que tiene! Ajusta hasta que el capital sea **$150,000 o más**.',
            check: (x) => x.a - x.p >= 150000,
            done: 'Capital contable = Activo − Pasivo. Si sale negativo, es una **señal de alerta**.',
          },
        },
      },
      { text: 'Se separa en **corto plazo** (circulante: se cobra, usa o paga en 12 meses o en el ciclo normal) y **largo plazo** (no circulante).' },
      {
        sort: {
          title: '¿Dónde va cada renglón?',
          buckets: ['Activo circulante', 'Activo no circulante', 'Pasivo a corto plazo', 'Pasivo a largo plazo'],
          items: [
            { text: 'Clientes que pagan en 30 días', bucket: 0, why: 'Se cobra dentro de 12 meses.' },
            { text: 'Maquinaria del taller', bucket: 1, why: 'Se usa varios años.' },
            { text: 'Proveedores', bucket: 2, why: 'Se paga en meses.' },
            { text: 'Préstamo bancario a 5 años (parte que vence después del próximo año)', bucket: 3, why: 'Se paga después de 12 meses.' },
            { text: 'Inventario de mercancía', bucket: 0, why: 'Se vende dentro del ciclo normal.' },
            { text: 'La parte del préstamo de largo plazo que vence en los próximos 12 meses', bucket: 2, why: 'Lo que vence en el año se presenta como **pasivo a corto plazo**.' },
          ],
        },
      },
      {
        calc: {
          question: 'Caja **$25,000**, clientes **$35,000**, inventarios **$40,000**. Proveedores **$30,000**, impuestos por pagar **$8,000** y un préstamo a 5 años de **$90,000**. ¿Cuál es el **capital de trabajo**?',
          answer: 62000,
          hint: 'activo circulante − pasivo a corto plazo. El préstamo a 5 años no entra.',
          why: '$100,000 − $38,000 = **$62,000**. Es el «colchón» que queda tras cubrir las deudas del próximo año.',
        },
      },
      {
        calc: {
          question: 'Un préstamo de **$500,000**; en los próximos 12 meses se pagarán **$80,000**. ¿Cuánto va en **pasivo a largo plazo**?',
          answer: 420000,
          hint: 'saldo total − lo que vence en 12 meses.',
          why: '$500,000 − $80,000 = **$420,000** a largo plazo; los $80,000 van a corto plazo.',
        },
      },
      { tip: 'En México lo regula la **NIF B-6**. Foto a una **fecha**: «al 31 de diciembre».' },
    ],
    // Estado de resultados
    [
      { text: 'El **estado de resultados** es la **película** 🎬 de un periodo: ¿cuánto vendí, cuánto me costó y cuánto gané? Se lee como una **escalera** que baja hasta la utilidad neta.' },
      {
        order: {
          title: 'Ordena los escalones, de arriba hacia abajo',
          steps: [
            'Ventas netas (ventas − devoluciones y descuentos)',
            'Utilidad bruta (− costo de ventas)',
            'Utilidad de operación (− gastos de operación)',
            'Utilidad antes de impuestos (± intereses)',
            'Utilidad neta (− ISR)',
          ],
          done: 'En cada escalón restas un tipo de costo o gasto hasta llegar a lo que quedó para los dueños.',
        },
      },
      { text: 'Ahora bájala con números de **Grupo Tacos Felices** 🌮 (tasa de ISR 30%, solo como supuesto de práctica).' },
      {
        calc: {
          question: 'Ventas **$300,000**; devoluciones **$10,000**; costo de ventas **$170,000**; gastos de operación **$50,000**; intereses pagados **$6,000**; ISR 30%. ¿Cuál es la **utilidad neta**?',
          answer: 44800,
          hint: '290,000 → 120,000 → 70,000 → 64,000; luego quita el 30%.',
          why: 'Antes de impuestos $64,000. ISR = 64,000 × 0.30 = $19,200. Utilidad neta = 64,000 − 19,200 = **$44,800**.',
        },
      },
      {
        ask: 'Un compañero calculó el ISR sobre la **utilidad de operación** ($70,000). ¿Qué opinas?',
        options: [
          { text: 'Está bien, da casi lo mismo', reply: 'No: el ISR se calcula sobre la utilidad **antes de impuestos**, ya restados los intereses.' },
          { text: 'Error: va sobre la utilidad antes de impuestos ($64,000)', ok: true, reply: '¡Correcto! Primero se restan los intereses y luego se calcula el impuesto.' },
          { text: 'Error: va sobre las ventas', reply: 'El ISR es un impuesto a la **utilidad**, no a las ventas.' },
        ],
      },
      { tip: 'Utilidad bruta: ¿vendes arriba de lo que te cuesta? De operación: ¿el negocio es rentable? Neta: ¿cuánto ganaron los dueños?' },
    ],
    // Relación entre ambos estados
    [
      { text: 'La película termina en la foto: la **utilidad neta** del estado de resultados se suma al **capital ganado** del estado de situación financiera.' },
      {
        balance: {
          title: 'Fin de año en la cafetería ☕',
          start: { a: 300000, p: 100000, c: 200000 },
          ops: [
            { story: 'El año cierra con **$40,000** de utilidad neta, que quedó en el banco.', options: [{ text: SUBE_AP }, { text: SUBE_AC, ok: true }, { text: BAJA_AC }], d: { a: 40000, p: 0, c: 40000 }, why: 'La utilidad aumenta el capital ganado; el dinero está en el activo.' },
            { story: 'Al año siguiente hay una **pérdida** de **$15,000**: salió más dinero del que entró.', options: [{ text: SUBE_AC }, { text: SUBE_AP }, { text: BAJA_AC, ok: true }], d: { a: -15000, p: 0, c: -15000 }, why: 'Una pérdida **reduce** el capital contable.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Foto o película?',
          seconds: 35,
          labels: ['Situación financiera (foto)', 'Resultados (película)'],
          items: [
            { text: 'Saldo de Bancos al 31 de diciembre', ans: 0 },
            { text: 'Ventas de enero a diciembre', ans: 1 },
            { text: 'Proveedores por pagar', ans: 0 },
            { text: 'Costo de ventas del año', ans: 1 },
            { text: 'Maquinaria', ans: 0 },
            { text: 'Gastos de operación del mes', ans: 1 },
            { text: 'Capital social', ans: 0 },
          ],
        },
      },
      { tip: 'Al cerrar el ejercicio, las cuentas de resultados se «cierran» y su saldo pasa a **Utilidad del ejercicio**, dentro del capital.' },
    ],
  ],
}
