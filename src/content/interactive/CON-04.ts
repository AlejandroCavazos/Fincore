import type { InteractiveLesson } from './types'

const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'
const SUBE_AP = 'Sube el activo y sube el pasivo'
const SUBE_AC = 'Sube el activo y sube el capital'
const BAJAN = 'Bajan el activo y el pasivo'

export const intCON04: InteractiveLesson = {
  lessonId: 'CON-04',
  sections: [
    // Básica: registrar y resumir
    [
      { text: 'La **contabilidad financiera** hace reportes para gente de fuera: bancos, socios, inversionistas. Se aprende en tres capas, como las mates: sumas, ecuaciones, cálculo.' },
      { text: 'La capa **básica** es el lenguaje: **Activo = Pasivo + Capital**, cargos (izquierda) y abonos (derecha). Practícalo con la paletería de Lupita 🍦.' },
      {
        balance: {
          title: 'La paletería de Lupita',
          start: { a: 50000, p: 10000, c: 40000 },
          ops: [
            { story: 'Compra un congelador de **$15,000** en efectivo.', options: [{ text: CAMBIO, ok: true }, { text: SUBE_AP }, { text: BAJAN }], d: { a: 0, p: 0, c: 0 }, why: 'Sube Mobiliario y equipo y baja Caja por lo mismo. El total de activos no cambia.' },
            { story: 'Compra fruta y leche **a crédito** por **$4,000**.', options: [{ text: SUBE_AC }, { text: SUBE_AP, ok: true }, { text: CAMBIO }], d: { a: 4000, p: 4000, c: 0 }, why: 'Entra mercancía (activo) y queda a deber (pasivo).' },
            { story: 'Paga **$3,000** al proveedor.', options: [{ text: BAJAN, ok: true }, { text: CAMBIO }, { text: SUBE_AP }], d: { a: -3000, p: -3000, c: 0 }, why: 'Sale dinero y baja la deuda: bajan los dos lados.' },
          ],
        },
      },
      {
        entry: {
          title: 'La póliza del congelador',
          story: 'La paletería compra un congelador de **$15,000** y paga en efectivo.',
          lines: [
            { account: 'Mobiliario y equipo', side: 'D', amount: 15000, why: 'Un activo que sube se carga.' },
            { account: 'Caja', side: 'C', amount: 15000, why: 'Sale efectivo: el activo baja con abono.' },
          ],
        },
      },
      { tip: 'La meta de la capa básica: que **cada operación quede anotada y cuadrada**.' },
    ],
    // Intermedia: valuar cada partida con detalle
    [
      { text: 'En la capa **intermedia** ya no basta con anotar: hay que decidir **cuánto vale** cada cosa. A eso se le llama **valuación**.' },
      {
        match: {
          title: 'Temas de la capa intermedia',
          pairs: [
            ['PEPS', 'Primeras entradas, primeras salidas'],
            ['Depreciación', 'El desgaste de máquinas y edificios'],
            ['Estimación de incobrables', 'Clientes que tal vez no paguen'],
            ['Costo promedio', 'Otro método para costear inventarios'],
          ],
        },
      },
      { text: 'Ferretería 🔨: tiene 10 martillos de **$100** y luego compra 10 de **$120**. Con PEPS salen primero los más viejos.' },
      {
        sim: {
          title: 'Vende martillos con PEPS',
          inputs: [{ key: 'n', label: 'Martillos vendidos', min: 1, max: 20, step: 1, value: 5 }],
          outputs: [
            { label: 'Costo de ventas (PEPS)', calc: (x) => (x.n <= 10 ? x.n * 100 : 1000 + (x.n - 10) * 120), main: true },
            { label: 'Inventario final', calc: (x) => 2200 - (x.n <= 10 ? x.n * 100 : 1000 + (x.n - 10) * 120) },
          ],
          goal: {
            text: 'Vende martillos hasta que el costo de ventas llegue a **$1,500 o más**.',
            check: (x) => (x.n <= 10 ? x.n * 100 : 1000 + (x.n - 10) * 120) >= 1500,
            done: 'Al pasar de 10 martillos ya salen los de $120: cada uno cuesta más.',
          },
        },
      },
      {
        calc: {
          question: 'Con los mismos martillos, la ferretería vende **12**. ¿Cuál es el **costo de ventas** con PEPS?',
          answer: 1240,
          hint: 'primero los 10 de $100, luego 2 de $120.',
          why: '10 × $100 = $1,000 y 2 × $120 = $240. Total: **$1,240**.',
        },
      },
      { tip: 'Intermedia = **valuar**: inventarios, activo fijo, cuentas por cobrar y pasivos con intereses.' },
    ],
    // Avanzada: casos complejos
    [
      { text: 'La capa **avanzada** ve casos que no caben en una empresa sencilla. Por ejemplo, **Grupo Tacos Felices** 🌮, con varias empresas que se presentan como una sola.' },
      {
        sort: {
          title: '¿Qué capa es?',
          buckets: ['Básica', 'Intermedia', 'Avanzada'],
          items: [
            { text: 'Registrar una venta de contado', bucket: 0, why: 'Anotar compras y ventas es la capa básica.' },
            { text: 'Calcular la depreciación de un horno', bucket: 1, why: 'Valuar el activo fijo es capa intermedia.' },
            { text: 'Presentar un grupo de empresas como una sola', bucket: 2, why: 'Eso es consolidación: capa avanzada.' },
            { text: 'Hacer la balanza de comprobación', bucket: 0, why: 'Es parte de la capa básica.' },
            { text: 'Costear el inventario con PEPS', bucket: 1, why: 'Métodos de inventario: capa intermedia.' },
            { text: 'Pagar a un proveedor en dólares', bucket: 2, why: 'Moneda extranjera: capa avanzada.' },
          ],
        },
      },
      { text: 'Si debes **dólares**, la deuda se anota en pesos con el **tipo de cambio** del día (cuántos pesos cuesta un dólar). Aquí la registraste a **$18.00**.' },
      {
        sim: {
          title: 'Tu deuda en dólares',
          inputs: [
            { key: 'u', label: 'Dólares que debes (USD)', min: 500, max: 5000, step: 500, value: 1000 },
            { key: 't', label: 'Tipo de cambio el día que pagas', min: 17, max: 19.5, step: 0.25, value: 18 },
          ],
          outputs: [
            { label: 'Pesos que entregas', calc: (x) => x.u * x.t },
            { label: 'Pérdida cambiaria', calc: (x) => Math.max(0, x.u * (x.t - 18)) },
            { label: 'Utilidad cambiaria', calc: (x) => Math.max(0, x.u * (18 - x.t)), main: true },
          ],
          goal: {
            text: 'Busca una combinación que te dé una **utilidad cambiaria de $500 o más**.',
            check: (x) => x.u * (18 - x.t) >= 500,
            done: 'Si al pagar el dólar está más barato que cuando anotaste la deuda, pagas menos pesos: **utilidad cambiaria**.',
          },
        },
      },
      {
        ask: 'Debes USD 1,000 registrados a $18.00. Pagas con el dólar a **$18.50**. ¿Qué pasa?',
        options: [
          { text: 'Pérdida cambiaria de $500', ok: true, reply: '¡Bien! Entregas $18,500 en vez de $18,000: pierdes **$500**.' },
          { text: 'Utilidad cambiaria de $500', reply: 'Al revés: el dólar está más caro, así que pagas **más** pesos. Es pérdida.' },
          { text: 'No pasa nada, es la misma deuda', reply: 'Debes los mismos dólares, pero en pesos pagas $500 más: es una **pérdida cambiaria**.' },
        ],
      },
      { tip: 'Cada capa usa todo lo de la anterior: **no se salta ninguna**.' },
    ],
  ],
}
