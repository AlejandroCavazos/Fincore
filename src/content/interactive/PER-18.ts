import type { InteractiveLesson } from './types'

export const intPER18: InteractiveLesson = {
  lessonId: 'PER-18',
  sections: [
    // ¿El negocio eres tú?
    [
      { text: 'Don Toño tiene 45 años y una taquería 🌮. Vende **$60,000 al mes**, pero en la cuenta solo ve **$8,000**. "¿Estaré perdiendo?", se pregunta.' },
      {
        ask: '¿Qué crees que pasa?',
        options: [
          { text: 'Los tacos ya no se venden', reply: 'Sí se venden: $60,000 al mes. Lo más probable es que **pagó cosas de su casa** con la cuenta del negocio.' },
          { text: 'Pagó gastos de su casa con la cuenta del negocio', ok: true, reply: '¡Eso! Cuando todo se mezcla, el negocio **parece** ganar menos de lo que gana.' },
          { text: 'El banco le quita dinero cada mes', reply: 'No es eso. El problema es que **mezcla** su dinero personal con el del negocio.' },
        ],
      },
      { text: 'En contabilidad, el **negocio es distinto de su dueño** (las NIF lo llaman **entidad económica**). Si mezclas: no sabes si ganas, se complican los impuestos y te cuesta conseguir crédito.' },
      {
        sort: {
          title: '¿Es del negocio o de Toño?',
          buckets: ['Gasto del negocio', 'Gasto personal (retiro del dueño)'],
          items: [
            { text: 'Carne y tortillas para los tacos', bucket: 0, why: 'Son insumos para operar: gasto del negocio.' },
            { text: 'La renta del local', bucket: 0, why: 'Sirve para operar la taquería.' },
            { text: 'La colegiatura de su hijo', bucket: 1, why: 'Es de su vida personal: si sale del negocio, es un retiro.' },
            { text: 'El sueldo del taquero que le ayuda', bucket: 0, why: 'Personal del negocio: gasto del negocio.' },
            { text: 'El súper de su casa', bucket: 1, why: 'Gasto personal: retiro del dueño.' },
            { text: 'Las vacaciones familiares', bucket: 1, why: 'Personal: retiro del dueño.' },
          ],
        },
      },
      { text: '**Utilidad real = ventas − gastos del negocio.** Lo personal no se resta como gasto: se anota aparte como **retiro del dueño**.' },
      {
        calc: {
          question: 'Toño vendió $60,000. Pagó $35,000 de la taquería y $12,000 de su casa, todo desde la misma cuenta. ¿Cuál fue la utilidad real del negocio?',
          answer: 25000,
          hint: 'Resta solo los gastos de la taquería: 60,000 − 35,000.',
          why: '60,000 − 35,000 = **$25,000**. Los $12,000 de la casa son retiros. Si también los restas, crees que solo ganó $13,000.',
        },
      },
      { tip: 'Aunque seas el único dueño, **el dinero del negocio no es tu cartera**.' },
    ],
    // ¿Cómo separas las cuentas?
    [
      { text: 'Toño decide poner orden 🗂️: una **cuenta bancaria solo del negocio**, una **tarjeta** para sus gastos y **comprobantes** (facturas electrónicas o CFDI) de todo lo que paga el negocio. Y cada mes revisa ventas, gastos y utilidad.' },
      {
        multi: {
          title: '¿Qué le ayuda a separar?',
          items: [
            { text: 'Que todo lo que cobra la taquería entre a su cuenta', ok: true },
            { text: 'Pedir CFDI de los gastos del negocio', ok: true },
            { text: 'Revisar cada mes ventas, gastos y utilidad', ok: true },
            { text: 'Pagar el súper con la tarjeta del negocio', ok: false },
            { text: 'Guardar las ventas en su cartera personal', ok: false },
          ],
          why: 'Lo que el negocio cobra entra a su cuenta y lo que paga sale de ahí, con comprobante. Lo personal va por otro lado.',
        },
      },
      { text: 'También importa la **forma legal**:\n👤 **Persona física con actividad empresarial:** el negocio está a tu nombre y respondes con tus bienes.\n🏢 **Persona moral** (sociedad): tiene patrimonio propio.\nCada una tiene costos y obligaciones: consúltalo con un contador.' },
      {
        ask: '¿Con cuál forma legal quedan más separados los bienes personales de Toño?',
        options: [
          { text: 'Persona moral', ok: true, reply: '¡Sí! Una sociedad tiene patrimonio propio. Aun así, conviene decidirlo con un contador.' },
          { text: 'Persona física con actividad empresarial', reply: 'Ahí el negocio está a su nombre y **responde con sus bienes personales**. La que separa más es la **persona moral**.' },
          { text: 'Da igual, es lo mismo', reply: 'No es lo mismo: la **persona moral** tiene patrimonio propio y separa más tus bienes.' },
        ],
      },
      { text: 'Cuando pones dinero tuyo en el negocio es una **aportación de capital**: cargo a **Bancos** (entra dinero) y abono a **Capital** (sube tu inversión).' },
      {
        entry: {
          title: 'Registra la aportación',
          story: 'Toño pasa **$25,000** de sus ahorros a la cuenta de la taquería para comprar un trompo nuevo.',
          lines: [
            { account: 'Bancos', side: 'D', amount: 25000, why: 'Entra dinero a la cuenta del negocio: cargo.' },
            { account: 'Capital social', side: 'C', amount: 25000, why: 'Sube lo que el dueño ha invertido: abono.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el error',
          story: 'El sobrino de Toño registró la misma aportación de **$25,000** así:',
          lines: [
            { account: 'Bancos', side: 'D', amount: 25000 },
            { account: 'Ventas', side: 'C', amount: 25000 },
          ],
          wrong: 1,
          why: 'No es una venta: el negocio no la ganó. Va a **Capital social**. Si la anotas como venta, **inflas la utilidad**.',
        },
      },
      { tip: 'Dinero que **pones**: aportación de capital. Dinero que **sacas** para ti fuera de tu sueldo: retiro del dueño.' },
    ],
    // Págate un sueldo fijo
    [
      { text: 'Toño saca dinero de la caja cada vez que lo necesita. Algunos meses **no le alcanza para la carne** 😬.' },
      {
        ask: 'Sus utilidades varían mucho de un mes a otro. ¿Qué le conviene?',
        options: [
          { text: 'Seguir sacando lo que necesite: el negocio es suyo', reply: 'Así deja al negocio sin dinero para insumos e impuestos. Mejor un **sueldo fijo** que el negocio aguante.' },
          { text: 'Un sueldo fijo que el negocio pueda pagar aun en meses flojos', ok: true, reply: '¡Eso! Su presupuesto personal se vuelve estable y el negocio puede crecer.' },
          { text: 'Pagarse siempre lo que gana en su mejor mes', reply: 'En los meses flojos no alcanzaría y descapitaliza el negocio. Mejor un sueldo que aguante **los meses flojos**.' },
        ],
      },
      { text: 'Cómo calcularlo: saca la **utilidad promedio** de varios meses, aparta una **reserva para impuestos** y otra para **reinvertir**. Lo que queda es tu **sueldo máximo**. En esta lección usamos de ejemplo 20 % y 10 %.' },
      {
        order: {
          title: 'Arma el cálculo del sueldo',
          steps: ['Suma la utilidad de varios meses y divide entre los meses', 'Aparta la reserva para impuestos', 'Aparta la reinversión', 'Lo que queda es tu sueldo máximo'],
          done: '¡Listo! Es un tope: en meses flojos, mejor pagarte algo menos.',
        },
      },
      {
        calc: {
          question: 'La taquería ganó $22,000, $28,000 y $25,000 en 3 meses. Con 20 % para impuestos y 10 % para reinvertir, ¿cuál es el sueldo máximo de Toño?',
          answer: 17500,
          hint: 'Promedio: 75,000 ÷ 3 = 25,000. Réstale el 20 % y el 10 % de 25,000.',
          why: 'Promedio $25,000. Impuestos: $5,000. Reinversión: $2,500. Sueldo: 25,000 − 5,000 − 2,500 = **$17,500**.',
        },
      },
      {
        sim: {
          title: 'El sueldo de Toño (20 % para impuestos)',
          inputs: [
            { key: 'u', label: 'Utilidad promedio al mes', min: 15000, max: 60000, step: 5000, value: 30000 },
            { key: 'r', label: 'Reinversión (%)', min: 0, max: 30, step: 5, value: 10 },
          ],
          outputs: [
            { label: 'Reserva de impuestos', calc: (x) => 0.2 * x.u },
            { label: 'Reinversión', calc: (x) => (x.r / 100) * x.u },
            { label: 'Sueldo máximo', calc: (x) => x.u - 0.2 * x.u - (x.r / 100) * x.u, main: true },
          ],
          goal: {
            text: 'Págate **$25,000 o más** sin bajar la reinversión de **10 %**.',
            check: (x) => x.r >= 10 && x.u - 0.2 * x.u - (x.r / 100) * x.u >= 25000,
            done: 'Para pagarte más sin descuidar el negocio, el camino es que **el negocio gane más**, no dejar de reinvertir.',
          },
        },
      },
      { tip: 'Si un mes va muy bien, el excedente **se queda en el negocio** o se reparte con plan. Y el negocio necesita **su propio fondo de emergencia**.' },
    ],
  ],
}
