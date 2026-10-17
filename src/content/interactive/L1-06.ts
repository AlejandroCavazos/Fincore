import type { InteractiveLesson } from './types'

const SUBE_AP = 'Sube el activo y sube el pasivo'
const SUBE_AC = 'Sube el activo y sube el capital'
const BAJAN = 'Bajan el activo y el pasivo'
const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'

export const intL106: InteractiveLesson = {
  lessonId: 'L1-06',
  sections: [
    // Lo que tienes, ¿de dónde salió?
    [
      { text: 'Ana tiene una cafetería ☕ con cafetera, café y algo de efectivo. Todo eso **salió de algún lado**.' },
      {
        ask: '¿De dónde crees que salió lo que tiene Ana?',
        options: [
          { text: 'De sus ahorros o de lo que le prestaron', ok: true, reply: '¡Eso! Todo lo que tiene un negocio **lo pusieron los dueños o lo prestó alguien**.' },
          { text: 'Se lo regaló el proveedor', reply: 'Los proveedores venden, no regalan. Lo que tiene Ana salió **de sus ahorros o de lo que le prestaron**.' },
          { text: 'No importa de dónde salió', reply: 'Sí importa: no es lo mismo algo tuyo que algo que debes. Salió **de sus ahorros o de lo que le prestaron**.' },
        ],
      },
      {
        text: 'Por eso hay tres partes:\n🧺 **Activo:** lo que el negocio tiene.\n🧾 **Pasivo:** lo que debe a otros.\n👛 **Capital:** la parte que es de los dueños.\nY siempre: **Activo = Pasivo + Capital**.',
      },
      {
        order: {
          title: 'Arma la ecuación',
          steps: ['Lo que tienes (activo)', 'es igual a', 'lo que debes (pasivo)', 'más lo que es tuyo (capital)'],
          done: '¡La armaste! Esa es la ecuación contable.',
        },
      },
      {
        sim: {
          title: 'Tu coche a crédito 🚗',
          inputs: [
            { key: 'v', label: 'Valor del coche (activo)', min: 50000, max: 400000, step: 10000, value: 200000 },
            { key: 'd', label: 'Lo que aún debes del crédito (pasivo)', min: 0, max: 200000, step: 10000, value: 120000 },
          ],
          outputs: [{ label: 'Lo que de verdad es tuyo (capital)', calc: (x) => x.v - x.d, main: true }],
          goal: {
            text: 'Paga el crédito (baja la deuda) hasta que **$150,000 o más** del coche sean tuyos.',
            check: (x) => x.v - x.d >= 150000,
            done: 'Cada peso que pagas de deuda se vuelve tuyo. Si conoces dos datos, el tercero sale solo.',
          },
        },
      },
      {
        calc: {
          question: 'La cafetería de Ana tiene activos por $120,000 y debe $45,000. ¿Cuánto es su capital?',
          answer: 75000,
          hint: 'Capital = Activo − Pasivo: 120,000 − 45,000.',
          why: '120,000 − 45,000 = **$75,000**. Comprueba: 45,000 + 75,000 = 120,000.',
        },
      },
      { tip: 'Si conoces dos datos, sacas el tercero. **Capital = Activo − Pasivo.**' },
    ],
    // ¿Por qué siempre cuadra?
    [
      { text: 'La ecuación es una **balanza** ⚖️: activo de un lado, pasivo + capital del otro.' },
      {
        ask: 'Una tiendita pide un préstamo de $10,000. ¿Qué crees que pasa con la balanza?',
        options: [
          { text: 'Suben los dos lados y sigue nivelada', ok: true, reply: '¡Sí! Entra dinero (activo) y nace una deuda (pasivo) por lo mismo.' },
          { text: 'Solo sube el activo y se desnivela', reply: 'Falta la otra mitad: también **nace una deuda** (pasivo). Suben los dos lados y sigue nivelada.' },
          { text: 'No se mueve', reply: 'Sí se mueve: entra dinero y nace una deuda. **Suben los dos lados** por igual.' },
        ],
      },
      {
        text: 'Cada operación tiene **dos efectos** que se compensan:\n⬆️ **Suben los dos lados:** pides un préstamo.\n⬇️ **Bajan los dos lados:** pagas una deuda.\n🔄 **Cambio dentro del activo:** compras algo de contado.',
      },
      {
        balance: {
          title: 'La balanza de la tiendita',
          start: { a: 80000, p: 20000, c: 60000 },
          ops: [
            { story: 'Compra mercancía **a crédito** por **$5,000**.', options: [{ text: SUBE_AP, ok: true }, { text: CAMBIO }, { text: BAJAN }], d: { a: 5000, p: 5000, c: 0 }, why: 'Entra mercancía (activo) y queda a deber (pasivo): 85,000 = 25,000 + 60,000.' },
            { story: 'Compra una vitrina de **$5,000** en efectivo.', options: [{ text: SUBE_AP }, { text: CAMBIO, ok: true }, { text: BAJAN }], d: { a: 0, p: 0, c: 0 }, why: 'Sube el equipo y baja el efectivo por lo mismo. El total de activo no cambia.' },
            { story: 'Paga **$4,000** que debía al proveedor.', options: [{ text: SUBE_AC }, { text: CAMBIO }, { text: BAJAN, ok: true }], d: { a: -4000, p: -4000, c: 0 }, why: 'Sale dinero (baja activo) y baja la deuda (baja pasivo). Bajan los dos lados.' },
            { story: 'La dueña mete **$6,000** de sus ahorros al negocio.', options: [{ text: SUBE_AP }, { text: SUBE_AC, ok: true }, { text: CAMBIO }], d: { a: 6000, p: 0, c: 6000 }, why: 'Entra dinero y es de la dueña: suben activo y capital.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Cuáles hacen crecer el activo TOTAL? Marca todas',
          items: [
            { text: 'La dueña mete $6,000 de sus ahorros', ok: true },
            { text: 'Recibe un préstamo del banco', ok: true },
            { text: 'Compra mercancía a crédito', ok: true },
            { text: 'Paga lo que debía al proveedor', ok: false },
            { text: 'Compra una vitrina en efectivo', ok: false },
          ],
          why: 'Aportar, pedir prestado o comprar a crédito **meten** algo nuevo. Pagar una deuda saca dinero (baja). Comprar de contado solo **cambia** efectivo por otra cosa: el total no se mueve.',
        },
      },
      { tip: 'Ninguna operación válida desnivela la balanza. Si no queda igual, **hay un error**.' },
    ],
    // La cafetería de Ana, paso a paso
    [
      { text: 'Ana abre su cafetería desde cero ☕. En cada operación pregúntate:\n1️⃣ ¿Qué cambia?\n2️⃣ ¿Sube o baja?\n3️⃣ ¿Sigue nivelada?' },
      {
        balance: {
          title: 'La cafetería de Ana',
          start: { a: 0, p: 0, c: 0 },
          ops: [
            { story: 'Ana aporta **$100,000** de sus ahorros.', options: [{ text: SUBE_AP }, { text: SUBE_AC, ok: true }, { text: CAMBIO }], d: { a: 100000, p: 0, c: 100000 }, why: 'Entra efectivo (activo) y es de Ana (capital): 100,000 = 0 + 100,000.' },
            { story: 'Compra una cafetera de **$30,000** en efectivo.', options: [{ text: CAMBIO, ok: true }, { text: BAJAN }, { text: SUBE_AP }], d: { a: 0, p: 0, c: 0 }, why: 'Cambia efectivo por cafetera. Todo sigue en 100,000 = 0 + 100,000.' },
            { story: 'Compra café y leche **a crédito** por **$8,000**.', options: [{ text: SUBE_AC }, { text: SUBE_AP, ok: true }, { text: CAMBIO }], d: { a: 8000, p: 8000, c: 0 }, why: 'Entra inventario (activo) y queda a deber (pasivo): 108,000 = 8,000 + 100,000.' },
            { story: 'Paga **$3,000** al proveedor.', options: [{ text: BAJAN, ok: true }, { text: CAMBIO }, { text: SUBE_AP }], d: { a: -3000, p: -3000, c: 0 }, why: 'Sale efectivo y baja la deuda: 105,000 = 5,000 + 100,000.' },
          ],
        },
      },
      {
        calc: {
          question: 'Ana queda en Activo $105,000 = Pasivo $5,000 + Capital $100,000. Luego mete **$20,000** más de sus ahorros y paga los **$5,000** que debe. ¿Cuánto es su activo ahora?',
          answer: 120000,
          hint: 'La aportación suma al activo; el pago le resta: 105,000 + 20,000 − 5,000.',
          why: '105,000 + 20,000 = 125,000. Menos 5,000 que pagó = **$120,000**.',
        },
      },
      {
        ask: '¿Y cómo quedan el pasivo y el capital?',
        options: [
          { text: 'Pasivo $0 y capital $120,000', ok: true, reply: '¡Perfecto! Pagó toda su deuda y su capital subió con la aportación: 120,000 = 0 + 120,000.' },
          { text: 'Pasivo $5,000 y capital $120,000', reply: 'Ana ya pagó los $5,000: el pasivo queda en **$0**. Así: 120,000 = 0 + 120,000.' },
          { text: 'Pasivo $0 y capital $100,000', reply: 'Falta la aportación: 100,000 + 20,000 = **$120,000** de capital. Así la balanza queda nivelada.' },
        ],
      },
      { tip: 'Activo, pasivo y capital cambian con cada operación, pero los dos lados **siempre** terminan iguales.' },
    ],
  ],
}
