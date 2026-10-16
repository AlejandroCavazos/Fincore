import type { InteractiveLesson } from './types'

const SUBE_AP = 'Sube el activo y sube el pasivo'
const SUBE_AC = 'Sube el activo y sube el capital'
const BAJAN = 'Bajan el activo y el pasivo'
const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'

export const intL106: InteractiveLesson = {
  lessonId: 'L1-06',
  sections: [
    // Activo = Pasivo + Capital
    [
      { text: 'Todo lo que un negocio tiene salió de algún lado: **o lo prestó alguien, o lo pusieron los dueños.**' },
      { tip: '**Activo = Pasivo + Capital.** Lo que tienes = lo que debes + lo que es tuyo.' },
      { text: 'Piénsalo con un coche 🚗 comprado a crédito:' },
      {
        sim: {
          title: 'Tu coche',
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
    ],
    // El equilibrio contable
    [
      { text: 'La ecuación es una **balanza**: activo de un lado, pasivo + capital del otro. Cada operación la mueve, pero **siempre queda nivelada**.' },
      {
        balance: {
          title: 'La balanza de la tiendita',
          start: { a: 80000, p: 20000, c: 60000 },
          ops: [
            { story: 'Pide un préstamo de **$10,000** al banco.', options: [{ text: SUBE_AP, ok: true }, { text: CAMBIO }, { text: BAJAN }], d: { a: 10000, p: 10000, c: 0 }, why: 'Entra dinero (activo) y nace una deuda (pasivo). Suben los dos lados.' },
            { story: 'Compra una vitrina de **$5,000** en efectivo.', options: [{ text: SUBE_AP }, { text: CAMBIO, ok: true }, { text: BAJAN }], d: { a: 0, p: 0, c: 0 }, why: 'Sube el equipo y baja el efectivo por lo mismo. El total de activo no cambia.' },
            { story: 'Paga **$4,000** que debía al proveedor.', options: [{ text: SUBE_AC }, { text: CAMBIO }, { text: BAJAN, ok: true }], d: { a: -4000, p: -4000, c: 0 }, why: 'Sale dinero (baja activo) y baja la deuda (baja pasivo). Bajan los dos lados.' },
            { story: 'La dueña mete **$6,000** de sus ahorros al negocio.', options: [{ text: SUBE_AP }, { text: SUBE_AC, ok: true }, { text: CAMBIO }], d: { a: 6000, p: 0, c: 6000 }, why: 'Entra dinero y es de la dueña: suben activo y capital.' },
          ],
        },
      },
      { tip: 'Si después de una operación la balanza no queda igual, **hay un error**. Ninguna operación válida la desnivela.' },
    ],
    // Ejercicio interactivo
    [
      { text: 'Ahora acompaña a Ana, que abre una cafetería desde cero ☕. Predice qué pasa en cada operación.' },
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
      { tip: 'En cada operación pregúntate: **¿qué cambia?, ¿sube o baja?, ¿sigue nivelada?**' },
    ],
  ],
}
