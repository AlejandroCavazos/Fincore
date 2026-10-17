import type { InteractiveLesson } from './types'

const SUBE_AC = 'Suben el activo y el capital'
const BAJA_AC = 'Bajan el activo y el capital'
const SUBE_AP = 'Suben el activo y el pasivo'

export const intL201: InteractiveLesson = {
  lessonId: 'L2-01',
  sections: [
    // ¿Qué tiene y qué debe?
    [
      { text: 'Don Beto tiene una ferretería 🔧 y va al banco por un préstamo. El banco le pide una **foto** de su negocio: lo que **tiene** y lo que **debe** hoy.' },
      {
        ask: 'La ferretería tiene **$300,000** en cosas y debe **$100,000**. ¿Cuánto es realmente de Don Beto?',
        options: [
          { text: '$200,000', ok: true, reply: '¡Eso! Lo que tiene menos lo que debe: 300,000 − 100,000 = **$200,000**.' },
          { text: '$300,000', reply: 'Eso es todo lo que tiene, pero $100,000 son deuda. Lo suyo es 300,000 − 100,000 = **$200,000**.' },
          { text: '$400,000', reply: 'Las deudas no se suman, se restan: 300,000 − 100,000 = **$200,000**.' },
        ],
      },
      { text: 'Esa foto es el **estado de situación financiera**, siempre a una fecha («al 31 de diciembre»):\n📦 **Activos:** lo que tiene\n🧾 **Pasivos:** lo que debe\n👤 **Capital contable:** lo de los dueños = Activo − Pasivo' },
      { text: 'Se separa en **corto plazo** (se cobra o se paga en los próximos 12 meses) y **largo plazo**. Si un préstamo se paga en partes, lo que vence en los próximos 12 meses va a **corto plazo**.' },
      {
        calc: {
          question: 'Don Beto debe un préstamo de **$200,000**. En los próximos 12 meses pagará **$50,000** y el resto en años siguientes. ¿Cuánto va en **pasivo a largo plazo**?',
          answer: 150000,
          hint: 'Saldo total − lo que vence en 12 meses.',
          why: '200,000 − 50,000 = **$150,000** a largo plazo. Los $50,000 van a corto plazo.',
        },
      },
      { text: '¿Para qué separar? Para ver si alcanza para lo que vence pronto. **Capital de trabajo** = activo circulante − pasivo a corto plazo: el «colchón» que queda.' },
      {
        calc: {
          question: 'Bancos **$20,000**, clientes **$30,000** e inventario **$50,000**. Proveedores **$25,000**, sueldos por pagar **$5,000** y un préstamo a largo plazo de **$80,000**. ¿Cuál es el **capital de trabajo**?',
          answer: 70000,
          hint: 'Suma lo de corto plazo de cada lado. El préstamo a largo plazo no entra.',
          why: 'Activo circulante 20,000 + 30,000 + 50,000 = 100,000. Pasivo a corto plazo 25,000 + 5,000 = 30,000. Capital de trabajo = **$70,000**. Si metes el préstamo te daría −10,000.',
        },
      },
      { tip: 'Foto a una **fecha**: Activo = Pasivo + Capital. Lo que vence en 12 meses es **corto plazo**.' },
    ],
    // ¿Ganaste o perdiste?
    [
      { text: 'La foto no dice si Don Beto **ganó** en el año. Para eso está la **película** 🎬: el **estado de resultados**, que cubre un periodo (del 1 de enero al 31 de diciembre).' },
      {
        ask: 'Don Beto vendió **$100,000** y la mercancía le costó **$60,000**. ¿Ya sabe cuánto ganó?',
        options: [
          { text: 'Sí: ganó $100,000', reply: 'Eso es lo que vendió, no lo que ganó. Y aún faltan gastos, intereses e impuestos.' },
          { text: 'Sí: ganó $40,000', reply: 'Esa es solo la **utilidad bruta**. Todavía faltan gastos, intereses e impuestos.' },
          { text: 'Aún no: faltan gastos, intereses e impuestos', ok: true, reply: '¡Bien! Los $40,000 son el primer escalón. Hay que seguir bajando.' },
        ],
      },
      { text: 'Se lee como una **escalera** 🪜. En cada escalón restas algo:\n➖ Devoluciones → **Ventas netas**\n➖ Costo de ventas → **Utilidad bruta**\n➖ Gastos de operación → **Utilidad de operación**\n➖ Intereses → **Utilidad antes de impuestos**\n➖ ISR → **Utilidad neta**' },
      {
        order: {
          title: 'Ordena los escalones, de arriba hacia abajo',
          steps: ['Ventas netas', 'Utilidad bruta', 'Utilidad de operación', 'Utilidad antes de impuestos', 'Utilidad neta'],
          done: 'Así llegas a lo que de verdad quedó para los dueños.',
        },
      },
      {
        calc: {
          question: 'La ferretería: ventas **$300,000**; devoluciones **$10,000**; costo de ventas **$170,000**; gastos de operación **$50,000**; intereses pagados **$6,000**; ISR 30 % (solo supuesto de práctica). ¿Cuál es la **utilidad neta**?',
          answer: 44800,
          hint: '290,000 → 120,000 → 70,000 → 64,000; luego quita el 30 %.',
          why: 'Ventas netas 290,000 − 170,000 = 120,000 − 50,000 = 70,000 − 6,000 = 64,000. ISR = 64,000 × 0.30 = 19,200. Utilidad neta = **$44,800**.',
        },
      },
      {
        ask: 'Un compañero calculó el ISR sobre la **utilidad de operación** ($70,000). ¿Qué opinas?',
        options: [
          { text: 'Está bien, da casi lo mismo', reply: 'No: el ISR se calcula sobre la utilidad **antes de impuestos**, ya restados los intereses ($64,000).' },
          { text: 'Error: va sobre la utilidad antes de impuestos ($64,000)', ok: true, reply: '¡Correcto! Primero se restan los intereses y luego se calcula el impuesto.' },
          { text: 'Error: va sobre las ventas', reply: 'El ISR de este estado va sobre la **utilidad antes de impuestos**, no sobre las ventas.' },
        ],
      },
      { tip: 'Película de un **periodo**. Error común: olvidar restar las devoluciones antes del costo de ventas.' },
    ],
    // ¿Cómo se unen foto y película?
    [
      { text: 'Al cerrar el año, la película termina en la foto: la **utilidad neta** se suma al **capital ganado** del estado de situación financiera.' },
      {
        balance: {
          title: 'Fin de año en la ferretería 🔧',
          start: { a: 300000, p: 100000, c: 200000 },
          ops: [
            { story: 'El año cierra con **$40,000** de utilidad neta, que quedó en el banco.', options: [{ text: SUBE_AP }, { text: SUBE_AC, ok: true }, { text: BAJA_AC }], d: { a: 40000, p: 0, c: 40000 }, why: 'La utilidad aumenta el capital ganado; el dinero está en el activo.' },
            { story: 'Al año siguiente hay una **pérdida** de **$15,000**: salió más dinero del que entró.', options: [{ text: SUBE_AC }, { text: SUBE_AP }, { text: BAJA_AC, ok: true }], d: { a: -15000, p: 0, c: -15000 }, why: 'Una pérdida **reduce** el capital contable.' },
          ],
        },
      },
      { text: '¿Foto o película? Pregunta: ¿es un **saldo** a una fecha o algo que **pasó en el periodo**?\n📸 Foto: proveedores, inventarios, **anticipos de clientes** (mercancía que aún debes entregar) y la **estimación para cuentas incobrables** (resta a clientes)\n🎬 Película: ventas, costo de ventas, **gasto por depreciación** e **ISR del ejercicio**' },
      {
        rush: {
          title: '¿Foto o película?',
          seconds: 40,
          labels: ['Situación financiera (foto)', 'Resultados (película)'],
          items: [
            { text: 'Proveedores', ans: 0 },
            { text: 'Ventas del año', ans: 1 },
            { text: 'Anticipos de clientes', ans: 0 },
            { text: 'Gasto por depreciación', ans: 1 },
            { text: 'Estimación para cuentas incobrables', ans: 0 },
            { text: 'ISR del ejercicio', ans: 1 },
            { text: 'Inventarios', ans: 0 },
            { text: 'Costo de ventas', ans: 1 },
          ],
        },
      },
      {
        ask: 'Un compañero dice: «El estado de situación financiera muestra lo que pasó **del 1 de enero al 31 de diciembre**». ¿Tiene razón?',
        options: [
          { text: 'No: muestra saldos a una fecha', ok: true, reply: '¡Exacto! Es la foto «al 31 de diciembre». Lo del periodo lo cuenta el estado de resultados.' },
          { text: 'Sí, es lo mismo que el estado de resultados', reply: 'Son distintos: el de situación financiera es la **foto a una fecha**; el de resultados, la película del periodo.' },
          { text: 'Sí, pero solo en diciembre', reply: 'No depende del mes: siempre muestra saldos **a una fecha**. Lo del periodo va en el estado de resultados.' },
        ],
      },
      { tip: 'Utilidad → **sube** el capital. Pérdida → lo **baja**. Al cerrar el año, las cuentas de resultados pasan a **Utilidad del ejercicio**.' },
    ],
  ],
}
