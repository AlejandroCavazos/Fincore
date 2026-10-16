import type { InteractiveLesson } from './types'

const peso = (n: number) => n

export const intL105: InteractiveLesson = {
  lessonId: 'L1-05',
  sections: [
    // Diferencias fundamentales
    [
      { text: 'Lupita tiene una cafetería ☕. Para saber si le va bien, separa su dinero en 3 cajones:' },
      { tip: '**Ingreso:** lo que gana por vender. **Costo:** lo que le costó lo que vendió. **Gasto:** lo que paga para operar (renta, luz, sueldos).' },
      {
        ask: 'Vendió 100 cafés a $40. ¿Qué es eso?',
        options: [
          { text: 'Ingreso', ok: true, reply: '¡Eso! Es lo que gana vendiendo: $4,000 de ingreso.' },
          { text: 'Gasto', reply: 'No, un gasto es lo que paga para operar. Vender café es **ingreso**.' },
        ],
      },
      {
        ask: 'El café y la leche de esos 100 cafés le costaron $1,200. ¿Qué es?',
        options: [
          { text: 'Costo', ok: true, reply: '¡Bien! Es lo que costó **lo que vendió**: costo de ventas.' },
          { text: 'Gasto', reply: 'Casi. Como está ligado directo a lo que vendió, es **costo** de ventas.' },
        ],
      },
      {
        ask: 'El banco le prestó $20,000. ¿Es ingreso?',
        options: [
          { text: 'No', ok: true, reply: '¡Correcto! Entra dinero, pero no lo ganó vendiendo: es una **deuda**, no ingreso.' },
          { text: 'Sí', reply: 'Ojo, error muy común: un préstamo entra a la caja pero **hay que devolverlo**. Es deuda, no ingreso.' },
        ],
      },
    ],
    // Utilidad y pérdida
    [
      { text: 'La **utilidad** es lo que le queda a Lupita después de restar costos y gastos. Si no alcanza, hay **pérdida**.' },
      {
        sim: {
          title: 'El mes de Lupita',
          inputs: [
            { key: 'v', label: 'Ventas del mes', min: 0, max: 100000, step: 1000, value: 40000 },
            { key: 'c', label: 'Costo de lo vendido', min: 0, max: 60000, step: 1000, value: 24000 },
            { key: 'g', label: 'Gastos (renta, luz, sueldos)', min: 0, max: 40000, step: 1000, value: 20000 },
          ],
          outputs: [
            { label: 'Utilidad bruta (ventas − costo)', calc: (x) => peso(x.v - x.c) },
            { label: 'Utilidad del mes (bruta − gastos)', calc: (x) => x.v - x.c - x.g, main: true },
          ],
          goal: {
            text: 'Lupita quiere ganar **al menos $10,000** este mes. Mueve los números hasta lograrlo.',
            check: (x) => x.v - x.c - x.g >= 10000,
            done: '¡Lo lograste! Para ganar más hay 3 caminos: vender más, que lo vendido cueste menos o gastar menos.',
          },
        },
      },
      { tip: '**Utilidad bruta** = Ingresos − Costo de ventas. **Utilidad del periodo** = Utilidad bruta − Gastos. Si sale negativa, es **pérdida**.' },
    ],
    // Ejemplos prácticos
    [
      { text: 'Ahora piensa por taza. Cada café tiene un precio y un costo, y la renta y los sueldos se pagan aunque no vendas nada.' },
      {
        sim: {
          title: '¿Cuántos cafés necesita vender?',
          inputs: [
            { key: 'n', label: 'Cafés vendidos en el mes', min: 0, max: 2000, step: 10, value: 300 },
            { key: 'p', label: 'Precio por café', min: 20, max: 80, step: 1, value: 40 },
            { key: 'u', label: 'Costo por café', min: 5, max: 30, step: 1, value: 12 },
          ],
          outputs: [
            { label: 'Ingresos (cafés × precio)', calc: (x) => x.n * x.p },
            { label: 'Costo de ventas (cafés × costo)', calc: (x) => x.n * x.u },
            { label: 'Gastos fijos (renta y sueldos)', calc: () => 14000 },
            { label: 'Utilidad del mes', calc: (x) => x.n * (x.p - x.u) - 14000, main: true },
          ],
          goal: {
            text: 'Con gastos fijos de $14,000, encuentra cuántos cafés necesita vender para **dejar de perder** (utilidad de $0 o más).',
            check: (x) => x.n * (x.p - x.u) - 14000 >= 0,
            done: '¡Eso! A partir de ahí cada café extra ya es ganancia. A ese punto se le llama **punto de equilibrio**.',
          },
        },
      },
      {
        ask: 'Si Lupita sube el precio del café, ¿qué pasa con los cafés que necesita vender para no perder?',
        options: [
          { text: 'Necesita vender menos', ok: true, reply: '¡Exacto! Cada café le deja más, así que con menos cafés cubre sus gastos.' },
          { text: 'Necesita vender más', reply: 'Al revés: si cada café le deja más dinero, necesita **menos** cafés para cubrir sus gastos. Pruébalo moviendo el precio.' },
        ],
      },
    ],
  ],
}
