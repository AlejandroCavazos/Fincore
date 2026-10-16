import type { InteractiveLesson } from './types'

export const intL114: InteractiveLesson = {
  lessonId: 'L1-14',
  sections: [
    // Ingresos vs cobros
    [
      { text: 'No es lo mismo **ganar** que **cobrar**. El **ingreso** se anota cuando vendes; el **cobro** es cuando el dinero entra.' },
      {
        rush: {
          title: '¿Es ingreso de este mes?',
          seconds: 30,
          labels: ['Sí es ingreso', 'No es ingreso'],
          items: [
            { text: 'Vendes $3,000 de contado', ans: 0 },
            { text: 'El banco te presta $20,000', ans: 1 },
            { text: 'Vendes $5,000 a crédito (te pagan el otro mes)', ans: 0 },
            { text: 'El dueño mete $10,000 de sus ahorros', ans: 1 },
            { text: 'Te dan anticipo por un pastel que entregas el mes que viene', ans: 1 },
            { text: 'Prestas un servicio y lo cobras hasta el otro mes', ans: 0 },
          ],
        },
      },
      { tip: 'Venta a crédito: **ingreso hoy, cobro después**. Anticipo: **cobro hoy, ingreso después**. Préstamo o aportación: entra dinero, pero **no es ingreso**.' },
    ],
    // Gastos vs pagos
    [
      { text: 'Igual con los gastos: el **gasto** es cuando **usas** algo; el **pago** es cuando sale el dinero.' },
      {
        multi: {
          title: 'Un taller pagó esto en el mes. ¿Cuáles son gasto del mes?',
          items: [
            { text: 'Renta del local de este mes, $8,000', ok: true },
            { text: 'Una compresora nueva, $20,000', ok: false },
            { text: 'Pago de una deuda vieja al proveedor', ok: false },
            { text: 'Sueldo de este mes del ayudante', ok: true },
            { text: 'Abono al préstamo del banco', ok: false },
          ],
          why: 'La compresora es un **activo** que durará años. Pagar una deuda o un préstamo **no es gasto**: solo baja lo que debes.',
        },
      },
      {
        calc: {
          question: 'Si el taller pagó **$8,000** de renta del mes y **$20,000** por la compresora, ¿cuánto es el **gasto** del mes por esas dos cosas?',
          answer: 8000,
          hint: 'la compresora se usará varios años; no es gasto de este mes.',
          why: 'Solo la renta: **$8,000**. Pero salió **$28,000** de efectivo. Por eso utilidad y dinero no son lo mismo.',
        },
      },
    ],
    // Rentabilidad y liquidez
    [
      { text: '**Rentabilidad** = ganar dinero. **Liquidez** = tener efectivo para pagar a tiempo. Un negocio puede tener una sin la otra. Compruébalo:' },
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
            text: 'Haz que el negocio **gane** (utilidad positiva) pero que el efectivo quede **en negativo**. Pista: vende a crédito.',
            check: (x) => x.v - x.g > 0 && Math.round((x.v * x.k) / 100) - x.g < 0,
            done: '¡Eso es **rentable sin liquidez**! Vendiste bien, pero tus clientes no te han pagado y no te alcanza para la nómina.',
          },
        },
      },
      { tip: 'Revisa siempre **los dos**: el estado de resultados (¿gano?) y el de flujos de efectivo (¿tengo con qué pagar?).' },
    ],
  ],
}
