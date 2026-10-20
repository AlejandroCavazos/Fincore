import type { InteractiveLesson } from './types'

export const intINV07: InteractiveLesson = {
  lessonId: 'INV-07',
  sections: [
    // ¿Qué compras con una acción?
    [
      { text: 'Mariana es enfermera en Puebla ☕. Su cafetería favorita, **Café Altura** (una empresa de ejemplo), vende acciones para abrir 50 sucursales nuevas. Ella tiene $2,000 ahorrados.' },
      {
        ask: 'Si Mariana compra acciones de Café Altura, ¿qué es ella para la empresa?',
        options: [
          { text: 'Una socia: dueña de una parte', ok: true, reply: '¡Exacto! Con una acción compras **una parte del capital** de la empresa. Te vuelves socia.' },
          { text: 'Alguien que le presta dinero con interés fijo', reply: 'Eso sería un préstamo o un bono. Con una acción **no prestas**: compras una parte de la empresa y te vuelves **socia**.' },
          { text: 'Una clienta con café gratis', reply: 'Una acción no da productos gratis. Te hace **socia**: dueña de una parte de la empresa.' },
        ],
      },
      { text: 'Una **acción** es una parte del capital de una empresa. Si a la empresa le va bien, a ti también; si le va mal, tu inversión pierde valor.' },
      {
        calc: {
          question: 'Café Altura tiene 1,000 acciones en total (ejemplo) y Mariana compra 50. ¿Qué porcentaje de la empresa es suyo?',
          answer: 5,
          unit: '%',
          hint: 'Sus acciones entre el total, por 100: 50 ÷ 1,000 × 100.',
          why: '50 ÷ 1,000 = 0.05; × 100 = **5 %**. Mariana es dueña del 5 % de Café Altura.',
        },
      },
      { text: 'Se llama **renta variable** porque nadie te promete cuánto vas a ganar. En un bono o en CETES sabes la tasa de antemano; en una acción, depende de las ganancias de la empresa y de lo que otros paguen por ella cada día.' },
      {
        sort: {
          title: '¿Sabes de antemano cuánto ganarás?',
          buckets: ['Sí: sabes la tasa', 'No: renta variable'],
          items: [
            { text: 'Acciones de Café Altura', bucket: 1, why: 'Depende de cómo le vaya a la empresa: renta variable.' },
            { text: 'CETES', bucket: 0, why: 'Sabes la tasa desde que inviertes.' },
            { text: 'Un bono con tasa ya pactada', bucket: 0, why: 'La tasa se conoce de antemano.' },
            { text: 'Acciones de una empresa minera', bucket: 1, why: 'Nadie promete cuánto ganarás: renta variable.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué derechos tiene Mariana como accionista? Marca todos',
          items: [
            { text: 'Recibir dividendos si la asamblea decide repartir utilidades', ok: true },
            { text: 'Votar en asambleas (según el tipo de acción)', ok: true },
            { text: 'Una parte de lo que quede si la empresa se liquida, después de pagar a los acreedores', ok: true },
            { text: 'Cobrar un interés fijo cada mes', ok: false },
            { text: 'Tomar café gratis en cualquier sucursal', ok: false },
          ],
          why: 'Dividendos (si se reparten), voto y una parte de lo que quede al liquidar. Un interés fijo es cosa de préstamos, no de acciones.',
        },
      },
      { tip: '**Responsabilidad limitada:** lo más que Mariana puede perder es lo que invirtió, sus $2,000. Nunca más.' },
    ],
    // ¿Cómo ganas o pierdes?
    [
      {
        ask: 'Mariana compró una acción en $100. Recibió $3 de dividendo y la vendió en $108. ¿Cuánto ganó en total?',
        options: [
          { text: '$8', reply: 'Esa es solo la ganancia por precio. Falta sumar los **$3 de dividendo**: en total ganó **$11**.' },
          { text: '$11', ok: true, reply: '¡Bien! $8 por precio + $3 de dividendo = **$11**. Sobre $100 es un **11 %**.' },
          { text: '$3', reply: 'Ese es solo el dividendo. También ganó $8 porque vendió más caro: en total **$11**.' },
        ],
      },
      { text: 'Con acciones hay dos fuentes de ganancia:\n📈 **Ganancia de capital:** vendes más caro de lo que compraste.\n💵 **Dividendo:** la empresa reparte en efectivo parte de su utilidad.\n📉 Si vendes más barato, tienes una **minusvalía** (pérdida).' },
      {
        sort: {
          title: '¿De dónde viene el resultado?',
          buckets: ['Ganancia de capital', 'Dividendo', 'Minusvalía'],
          items: [
            { text: 'Compró en $60 y vendió en $75', bucket: 0, why: 'Vendió más caro: ganancia de capital.' },
            { text: 'La empresa le depositó $1 por acción de sus utilidades', bucket: 1, why: 'Es parte de la utilidad repartida: dividendo.' },
            { text: 'Compró en $90 y vendió en $70', bucket: 2, why: 'Vendió más barato: minusvalía.' },
            { text: 'La asamblea decidió repartir utilidades entre los accionistas', bucket: 1, why: 'Repartir utilidades es pagar dividendos.' },
            { text: 'Vendió en plena caída, abajo de su precio de compra', bucket: 2, why: 'Por debajo de su compra: minusvalía.' },
          ],
        },
      },
      {
        ask: 'Café Altura tuvo un buen año, pero no repartió dividendos. ¿Hizo algo mal?',
        options: [
          { text: 'No: puede reinvertir sus utilidades para crecer', ok: true, reply: '¡Así es! Muchas empresas que crecen rápido prefieren **reinvertir**. No todas pagan dividendos.' },
          { text: 'Sí: toda empresa en bolsa debe pagar dividendos cada año', reply: 'No es así. La asamblea decide si reparte; muchas empresas **reinvierten** sus utilidades.' },
          { text: 'Sí: entonces las acciones ya no valen nada', reply: 'No repartir no hace que las acciones valgan cero. La empresa puede **reinvertir** para crecer.' },
        ],
      },
      { text: '**Rendimiento total** = (precio de venta − precio de compra + dividendos) ÷ precio de compra × 100.' },
      {
        order: {
          title: 'Arma el cálculo del rendimiento total',
          steps: ['Resta: precio de venta − precio de compra', 'Súmale los dividendos', 'Divide entre el precio de compra', 'Multiplica por 100'],
          done: '¡Listo! Ese es el orden para sacar el rendimiento total.',
        },
      },
      {
        calc: {
          question: 'Mariana compró acciones a $50, recibió $1 de dividendo por acción y las vendió a $54. ¿Cuál fue su rendimiento total en porcentaje?',
          answer: 10,
          unit: '%',
          hint: '(54 − 50 + 1) ÷ 50 × 100.',
          why: '54 − 50 = 4; 4 + 1 = 5. 5 ÷ 50 = 0.10; × 100 = **10 %**. Si olvidas el dividendo, te da 8 %.',
        },
      },
      { tip: 'Una pérdida solo se vuelve real cuando vendes, pero eso no la hace menos importante. Y los rendimientos de ejemplo **no están garantizados**.' },
    ],
    // ¿Cómo compras acciones en México?
    [
      { text: 'Mariana ya decidió probar. Pero no puede ir a la bolsa en persona a comprar 🏛️.' },
      {
        ask: '¿Con quién abre una cuenta para comprar acciones?',
        options: [
          { text: 'Con una casa de bolsa autorizada y supervisada por la CNBV', ok: true, reply: '¡Eso! La casa de bolsa es el **intermediario** que envía sus órdenes a la bolsa.' },
          { text: 'Directo en la caja de la cafetería', reply: 'Las acciones en bolsa no se compran en la tienda. Se necesita un **intermediario**: una casa de bolsa.' },
          { text: 'Con el SAT', reply: 'El SAT cobra impuestos, no vende acciones. Se abre cuenta con una **casa de bolsa**.' },
        ],
      },
      { text: 'Las acciones de empresas mexicanas cotizan en la **BMV** o en **BIVA**. Las extranjeras se compran por el **SIC**. Al comprar eliges una orden:\n⚡ **A mercado:** se hace ya, al mejor precio disponible, aunque no sepas cuál será exacto.\n🎯 **Limitada:** fijas tu precio máximo de compra (o mínimo de venta). Te protege, pero puede no ejecutarse.' },
      {
        match: {
          title: 'Une cada palabra con lo que significa',
          pairs: [
            ['BMV y BIVA', 'Bolsas donde cotizan empresas mexicanas'],
            ['SIC', 'Vía para comprar acciones extranjeras'],
            ['Casa de bolsa', 'Intermediario que envía tus órdenes'],
            ['Orden a mercado', 'Se ejecuta ya, al mejor precio disponible'],
            ['Orden limitada', 'Fija tu precio, pero puede no ejecutarse'],
          ],
        },
      },
      {
        rush: {
          title: '¿Qué orden le conviene a Mariana?',
          seconds: 30,
          labels: ['A mercado', 'Limitada'],
          items: [
            { text: 'Quiere comprar ya, sin esperar', ans: 0 },
            { text: 'No quiere pagar más de $50 por acción', ans: 1 },
            { text: 'No le importa el precio exacto, quiere que se haga hoy', ans: 0 },
            { text: 'Solo vende si llega a $60 o más', ans: 1 },
            { text: 'Tiene un tope de presupuesto y no tiene prisa', ans: 1 },
          ],
        },
      },
      { text: '¿Qué tan grande es una empresa? Se usa la **capitalización de mercado** = precio por acción × número de acciones. Y para ver cómo va el mercado mexicano en conjunto se sigue un **índice**, como el S&P/BMV IPC.' },
      {
        calc: {
          question: 'Otra empresa de ejemplo tiene 2,000,000 de acciones a $30 cada una. ¿Cuál es su capitalización de mercado?',
          answer: 60000000,
          hint: 'Precio por acción × número de acciones: 30 × 2,000,000.',
          why: '30 × 2,000,000 = **$60,000,000**. Eso vale en bolsa toda la empresa.',
        },
      },
      { tip: 'Para comprar: abres cuenta en una **casa de bolsa** y eliges orden **a mercado** (rápida) o **limitada** (con tu precio).' },
    ],
  ],
}
