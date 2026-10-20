import type { InteractiveLesson } from './types'

export const intL403: InteractiveLesson = {
  lessonId: 'L4-03',
  sections: [
    // El mismo pago, muchas veces
    [
      { text: 'Ana tiene una cafetería ☕ y le renta una bodega a un vecino. El vecino le pagará **$12,100 al final de cada año** durante **2 años**.' },
      {
        ask: 'Con una tasa de ejemplo de 10 %, ¿cuánto valen **hoy** esos dos pagos?',
        options: [
          { text: 'Menos de $24,200', ok: true, reply: '¡Bien! Cada pago llega después, así que hoy vale menos. Ahorita lo calculamos.' },
          { text: 'Exactamente $24,200', reply: 'Eso es sumar sin descontar. El dinero futuro vale menos hoy: es **menos de $24,200**.' },
          { text: 'Más de $24,200', reply: 'Al revés: por esperar, hoy valen **menos**.' },
        ],
      },
      { text: 'Una **anualidad** es una serie de pagos **iguales**, cada **mismo tiempo** y con la **misma tasa**. El periodo puede ser un mes o un trimestre, si la tasa es del mismo periodo.' },
      {
        multi: {
          title: '¿Cuáles son anualidades?',
          items: [
            { text: 'La renta de $8,000 cada mes durante un año', ok: true },
            { text: 'La mensualidad fija de un coche por 3 años', ok: true },
            { text: 'Ahorrar $1,000 cada quincena a la misma tasa', ok: true },
            { text: 'Pagos de $500, luego $2,000, luego $900', ok: false },
            { text: 'Un solo pago dentro de 5 años', ok: false },
          ],
          why: 'Una anualidad necesita **varios** pagos **iguales**, a intervalos **iguales**. Pagos distintos o un pago único no lo son.',
        },
      },
      { text: 'Una sola fórmula descuenta todos los pagos de golpe:\n**VP = PMT × [1 − (1 + r)^−n] ÷ r**\nPMT es el pago de cada periodo y n el número de pagos. (1 + r)^−n es lo mismo que 1 ÷ (1 + r)^n.' },
      {
        order: {
          title: 'Arma la fórmula del VP de una anualidad',
          steps: ['VP =', 'PMT ×', '[1 − (1 + r)^−n]', '÷ r'],
          done: '¡La armaste! Es el valor presente de una anualidad **vencida** (pagos al final).',
        },
      },
      {
        calc: {
          question: '¿Cuánto valen hoy los 2 pagos de $12,100 que recibirá Ana, con 10 %?',
          answer: 21000,
          hint: 'Descuenta cada uno: 12,100 ÷ 1.10 + 12,100 ÷ 1.21. (O usa el factor 1.735537 × 12,100.)',
          why: '12,100 ÷ 1.10 = 11,000 y 12,100 ÷ 1.21 = 10,000. Total = **$21,000**, no $24,200.',
        },
      },
      {
        ask: 'Si el vecino pagara al **inicio** de cada año (anualidad **anticipada**), ¿cuánto valdría hoy?',
        options: [
          { text: '$21,000 × 1.10 = $23,100', ok: true, reply: '¡Exacto! Cada pago llega un periodo antes, así que se multiplica por (1 + r). La anticipada siempre vale más.' },
          { text: 'Lo mismo: $21,000', reply: 'Los pagos son iguales, pero llegan antes. Por eso vale más: **vencida × (1 + r)** = $23,100.' },
          { text: 'Menos: $21,000 ÷ 1.10', reply: 'Al revés: si llegan antes, valen **más**. Se multiplica: 21,000 × 1.10 = $23,100.' },
        ],
      },
    ],
    // ¿Cuánto pagaré cada mes?
    [
      { text: 'Ana quiere una máquina de espresso y pide un **crédito de $80,000 a 24 meses** 🏦.' },
      {
        ask: '¿Su mensualidad será 80,000 ÷ 24 = $3,333?',
        options: [
          { text: 'No, será más porque hay intereses', ok: true, reply: '¡Sí! Dividir entre los pagos ignora los intereses. Con 18 % anual de ejemplo, sale cerca de $3,994.' },
          { text: 'Sí, exactamente', reply: 'Eso sería un crédito sin intereses. Con intereses, la mensualidad es **mayor**.' },
          { text: 'No, será menos', reply: 'Los intereses suben el pago, no lo bajan. Es **más** de $3,333.' },
        ],
      },
      { text: 'Un crédito con pagos fijos es una anualidad: su VP es lo que te prestan. Despejando:\n**PMT = préstamo × r ÷ [1 − (1 + r)^−n]**\n⚠️ Usa la tasa **del periodo de pago** (anual ÷ 12 si pagas cada mes) y el **total de pagos** (años × 12).' },
      {
        rush: {
          title: '¿Tasa y número de pagos bien puestos?',
          seconds: 40,
          labels: ['Bien', 'Mal'],
          items: [
            { text: '18 % anual, pagos mensuales → r = 1.5 % al mes', ans: 0 },
            { text: '2 años de mensualidades → n = 24', ans: 0 },
            { text: '12 % anual, pagos mensuales → r = 12 % al mes', ans: 1 },
            { text: '3 años de mensualidades → n = 3', ans: 1 },
            { text: '24 % anual, pagos mensuales → r = 2 % al mes', ans: 0 },
            { text: '5 años de pagos anuales → n = 60', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Ana pide **$21,000** a pagar en **2 pagos anuales** al **10 %**. ¿De cuánto es cada pago?',
          answer: 12100,
          hint: '21,000 × 0.10 = 2,100. 1 − 1 ÷ 1.21 = 0.173554. Divide 2,100 ÷ 0.173554.',
          why: '2,100 ÷ 0.173554 ≈ **$12,100**. Es el caso de la bodega, pero al revés: 2 pagos de $12,100 valen hoy $21,000.',
        },
      },
      {
        calc: {
          question: 'Ana paga 2 × $12,100. ¿Cuánto paga **de intereses** en total por los $21,000?',
          answer: 3200,
          hint: 'Pagos totales − préstamo.',
          why: '2 × 12,100 = $24,200. Menos 21,000 = **$3,200** de intereses.',
        },
      },
      { tip: 'Error común: dividir el préstamo entre el número de pagos. Eso olvida los intereses.' },
    ],
    // ¿A dónde va cada pago?
    [
      {
        ask: 'Ana hace su primer pago de $12,100 por el crédito de $21,000. ¿Toda esa cantidad baja su deuda?',
        options: [
          { text: 'No: una parte paga intereses', ok: true, reply: '¡Exacto! Primero se cubre el interés; lo que sobra baja la deuda.' },
          { text: 'Sí, toda', reply: 'Una parte del pago es interés y no reduce la deuda. Solo el resto la baja.' },
          { text: 'No: todo se va a intereses', reply: 'Solo una parte es interés. El resto sí baja la deuda.' },
        ],
      },
      { text: 'Cada pago se parte en dos:\n💸 **Interés** = saldo anterior × tasa\n🧱 **Abono a capital** = pago − interés\n📉 **Saldo nuevo** = saldo anterior − abono a capital\nEl **saldo insoluto** es lo que todavía debes.' },
      {
        order: {
          title: 'Arma una fila de la tabla de amortización',
          steps: ['Calcula el interés: saldo anterior × tasa', 'Resta el interés al pago: abono a capital', 'Resta el abono al saldo: saldo nuevo'],
          done: '¡Eso! Se repite fila por fila hasta que el saldo queda en cero.',
        },
      },
      {
        calc: {
          question: 'Año 1: ¿cuánto **interés** paga Ana? (Saldo $21,000, tasa 10 %)',
          answer: 2100,
          hint: '21,000 × 0.10',
          why: '21,000 × 0.10 = **$2,100** de interés.',
        },
      },
      {
        calc: {
          question: 'Año 1: ¿cuánto es el **abono a capital**? (Pago $12,100, interés $2,100)',
          answer: 10000,
          hint: 'Pago − interés.',
          why: '12,100 − 2,100 = **$10,000** bajan la deuda.',
        },
      },
      {
        calc: {
          question: '¿Cuál es el **saldo** al final del año 1?',
          answer: 11000,
          hint: 'Saldo anterior − abono a capital.',
          why: '21,000 − 10,000 = **$11,000**. En el año 2: interés 1,100, abono 11,000 y el saldo queda en **$0**.',
        },
      },
      {
        ask: 'El interés fue $2,100 en el año 1 y $1,100 en el año 2. ¿Por qué bajó?',
        options: [
          { text: 'Porque el saldo que se debe es menor', ok: true, reply: '¡Bien! Con pagos fijos, el interés baja y el abono a capital sube con cada pago.' },
          { text: 'Porque el banco bajó la tasa', reply: 'La tasa sigue en 10 %. Baja porque se calcula sobre un **saldo menor**.' },
          { text: 'Porque el pago fue más chico', reply: 'El pago es fijo: $12,100. El interés baja porque el **saldo es menor**.' },
        ],
      },
      { tip: 'Al inicio de un crédito largo, casi todo el pago se va a intereses; al final, casi todo a capital. En México, al comparar créditos al consumo, revisa también el **CAT**, que incluye comisiones.' },
    ],
  ],
}
