import type { InteractiveLesson } from './types'

export const intINV03: InteractiveLesson = {
  lessonId: 'INV-03',
  sections: [
    // ¿Para qué sirve un mercado?
    [
      { text: 'Toño tiene 22 años y estudia economía 🎓. Lee que una cadena de restaurantes quiere abrir **50 sucursales**, pero no quiere pedirle todo al banco.' },
      {
        ask: '¿De dónde más puede sacar el dinero la cadena?',
        options: [
          { text: 'Vendiendo acciones o bonos a muchos inversionistas', ok: true, reply: '¡Exacto! En el mercado financiero miles de personas pueden ponerle dinero.' },
          { text: 'Subiendo mucho el precio de los tacos', reply: 'Eso no junta el dinero de golpe y podría espantar clientes. Puede **vender acciones o bonos** a inversionistas.' },
          { text: 'De ningún lado: solo el banco presta', reply: 'También existe el mercado financiero: puede **vender acciones o bonos** a miles de inversionistas.' },
        ],
      },
      { text: 'Un **mercado** es donde se encuentran compradores y vendedores. En un tianguis se cambian jitomates 🍅; en un **mercado financiero**, acciones, bonos, divisas (monedas de otros países) o contratos.' },
      { text: 'Sirve para 3 cosas:\n💰 **Financiar:** empresas y gobiernos consiguen dinero.\n🔄 **Dar liquidez:** lo que compraste lo puedes vender después.\n🏷️ **Descubrir precios:** muchas compras y ventas dicen cuánto vale algo.' },
      {
        match: {
          title: 'Une cada función con su ejemplo',
          pairs: [
            ['Financiar', 'La cadena junta dinero para sus sucursales'],
            ['Dar liquidez', 'Toño vende sus acciones a otra persona'],
            ['Descubrir precios', 'Miles de compras y ventas fijan cuánto vale una acción'],
          ],
        },
      },
      {
        multi: {
          title: '¿Qué hacen los mercados financieros? Marca todas',
          items: [
            { text: 'Financiar a empresas y gobiernos', ok: true },
            { text: 'Dar liquidez a quien quiere vender', ok: true },
            { text: 'Formar precios con oferta y demanda', ok: true },
            { text: 'Garantizar que todas las inversiones ganen', ok: false },
          ],
          why: 'Financian, dan liquidez y forman precios. **Nadie** garantiza que todas las inversiones ganen.',
        },
      },
    ],
    // ¿Nuevo o de segunda mano?
    [
      { text: 'Toño compra un celular: puede ser **nuevo** en la tienda o **de segunda mano** a otra persona 📱. Con los títulos financieros pasa igual.' },
      { text: '🆕 **Mercado primario:** el título se vende por primera vez y el dinero va al emisor (empresa o gobierno).\n♻️ **Mercado secundario:** los inversionistas se lo revenden entre ellos; el emisor ya no recibe dinero.' },
      {
        sort: {
          title: '¿Primario o secundario?',
          buckets: ['Primario', 'Secundario'],
          items: [
            { text: 'La cadena vende acciones al público por primera vez', bucket: 0, why: 'Es su oferta pública inicial: el dinero va a la cadena.' },
            { text: 'Toño revende en bolsa acciones que compró el año pasado', bucket: 1, why: 'Se las vende a otro inversionista; la empresa no recibe nada.' },
            { text: 'El gobierno coloca CETES nuevos en su subasta', bucket: 0, why: 'Son títulos nuevos: el dinero va al gobierno.' },
            { text: 'Un fondo le compra a otra persona bonos ya emitidos', bucket: 1, why: 'Los bonos ya existían: es reventa entre inversionistas.' },
            { text: 'Una empresa emite por primera vez deuda para una planta', bucket: 0, why: 'Primera venta: el dinero va directo a la empresa.' },
          ],
        },
      },
      { text: 'La **bolsa de valores** es un mercado organizado y regulado. En México están la **BMV** y la **BIVA**. Toño no compra directo ahí: lo hace con un **intermediario**, como una casa de bolsa.' },
      {
        order: {
          title: 'Sigue la compra de Toño',
          steps: ['Toño le da su orden a su casa de bolsa', 'La casa de bolsa la manda a la bolsa', 'La orden se junta con la de un vendedor', 'Las acciones quedan en custodia en el Indeval'],
          done: '¡Bien! El **Indeval** es el depósito central donde se guardan los títulos.',
        },
      },
      {
        ask: 'El primo de Toño dice: "Yo le compro acciones directo a la bolsa, sin nadie en medio". ¿Es cierto?',
        options: [
          { text: 'No, en México se compra a través de un intermediario', ok: true, reply: '¡Correcto! Se usa un intermediario, como una casa de bolsa.' },
          { text: 'Sí, cualquiera puede ir a la bolsa a comprar', reply: 'No. Las personas compran **a través de un intermediario**, como una casa de bolsa.' },
          { text: 'Solo si compra muchas acciones', reply: 'Da igual cuántas compre: siempre es **a través de un intermediario**.' },
        ],
      },
      { tip: 'Lo que se negocia fuera de la bolsa, directo entre las partes, es **extrabursátil** u **OTC**. Ejemplo: cambiar dólares en una casa de cambio.' },
    ],
    // ¿Cómo se pone un precio?
    [
      { text: 'Toño abre la app de su casa de bolsa. La acción de ejemplo "X" muestra:\n🟢 **Mejor compra:** $40.10 (lo más alto que alguien ofrece)\n🔴 **Mejor venta:** $40.25 (lo más bajo que alguien acepta)' },
      {
        ask: 'Toño quiere comprar **ya mismo**. ¿A qué precio compra?',
        options: [
          { text: 'A $40.25, la mejor venta', ok: true, reply: '¡Eso! Para comprar ya, pagas lo que pide el vendedor más barato: **la mejor venta**.' },
          { text: 'A $40.10, la mejor compra', reply: 'Ese es lo que **ofrecen otros compradores**. Si tú compras ya, pagas la mejor venta: **$40.25**.' },
          { text: 'A $40.175, el promedio', reply: 'No se promedia. Para comprar ya, pagas la mejor venta: **$40.25**.' },
        ],
      },
      { text: 'La diferencia entre la mejor venta y la mejor compra se llama **spread** (diferencial). Un spread pequeño suele indicar que la acción es **muy líquida**.' },
      {
        calc: {
          question: '¿De cuántos centavos es el spread de la acción X?',
          answer: 15,
          unit: 'centavos',
          hint: 'Mejor venta − mejor compra: 40.25 − 40.10.',
          why: '40.25 − 40.10 = $0.15, o sea **15 centavos** por acción.',
        },
      },
      {
        calc: {
          question: 'Toño compra 200 acciones X ya mismo. ¿Cuánto paga antes de comisiones?',
          answer: 8050,
          hint: 'Acciones × mejor venta: 200 × 40.25.',
          why: '200 × 40.25 = **$8,050**. Si usaras la mejor compra ($40.10) te daría $8,020, pero comprando ya pagas la mejor venta.',
        },
      },
      { text: '⚡ **Orden de mercado:** se ejecuta ya, al mejor precio disponible.\n🎯 **Orden limitada:** tú pones el precio máximo para comprar o el mínimo para vender. Puede tardar o no ejecutarse.' },
      {
        sort: {
          title: '¿Orden de mercado o limitada?',
          buckets: ['De mercado', 'Limitada'],
          items: [
            { text: 'Quiero comprar ya, al mejor precio que haya', bucket: 0, why: 'Se ejecuta de inmediato: orden de mercado.' },
            { text: 'Vendo solo si me dan $45 o más por acción', bucket: 1, why: 'Fijas un mínimo para vender: orden limitada.' },
            { text: 'Compro solo si baja a $38', bucket: 1, why: 'Fijas un máximo para comprar: orden limitada.' },
            { text: 'Necesito vender hoy mismo, al precio que haya', bucket: 0, why: 'Quieres que se ejecute ya: orden de mercado.' },
          ],
        },
      },
      {
        ask: 'Dos acciones de precio parecido: A tiene spread de **$0.02** y B de **$1.50**. ¿Qué indica eso normalmente?',
        options: [
          { text: 'A es más líquida: hay muchos compradores y vendedores', ok: true, reply: '¡Bien! Spread pequeño = mucha gente comprando y vendiendo.' },
          { text: 'B es más segura', reply: 'El spread no mide seguridad. Un spread pequeño indica que **A es más líquida**.' },
          { text: 'A va a subir de precio', reply: 'El spread no predice el precio. Indica que **A es más líquida**.' },
        ],
      },
    ],
  ],
}
