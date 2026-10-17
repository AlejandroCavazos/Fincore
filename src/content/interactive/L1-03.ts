import type { InteractiveLesson } from './types'

export const intL103: InteractiveLesson = {
  lessonId: 'L1-03',
  sections: [
    // ¿Por qué inventamos el dinero?
    [
      { text: 'Imagina que tienes maíz 🌽 y quieres una gallina 🐔. Sin dinero, necesitas a alguien que tenga gallina **y además** quiera maíz.' },
      {
        ask: 'El señor de la gallina quiere zapatos, no maíz. ¿Qué pasa en un trueque?',
        options: [
          { text: 'No hay cambio', ok: true, reply: 'Exacto. Ese es el gran problema del trueque: necesitas la **doble coincidencia**. El dinero lo resuelve.' },
          { text: 'Te da la gallina igual', reply: 'En el trueque solo cambias si **los dos** quieren lo del otro. Por eso se inventó el dinero.' },
          { text: 'Le ofreces el doble de maíz y listo', reply: 'Él no quiere maíz, ni poco ni mucho. Sin **doble coincidencia** no hay trueque.' },
        ],
      },
      { text: 'Para no batallar, la gente eligió cosas que **todos aceptaban**: el dinero mercancía. Los mexicas pagaban con **granos de cacao** 🍫. Luego llegaron las **monedas** de metal y después los **billetes**.' },
      {
        order: {
          title: 'Del trueque al billete',
          steps: ['Trueque: cosa por cosa', 'Dinero mercancía: cacao, conchas, metales', 'Monedas de metal', 'Papel moneda (billetes)'],
          done: 'Cada paso hizo más fácil comprar y vender.',
        },
      },
      { text: 'El dinero hace 3 trabajos:\n🛒 **Medio de cambio:** sirve para comprar y vender.\n📏 **Unidad de cuenta:** pone precio a todo con la misma medida.\n🐷 **Depósito de valor:** lo guardas y lo usas después.' },
      {
        sort: {
          title: '¿Qué trabajo está haciendo el dinero?',
          buckets: ['Medio de cambio', 'Unidad de cuenta', 'Depósito de valor'],
          items: [
            { text: 'Pagas $25 por un pan', bucket: 0, why: 'Lo usas para **comprar**.' },
            { text: 'Guardas $500 para el próximo mes', bucket: 2, why: 'Lo **guardas** y lo usas después.' },
            { text: 'Ves que una tele cuesta lo mismo que 40 pizzas', bucket: 1, why: 'El dinero pone precio a todo con **la misma medida**.' },
            { text: 'Vendes tu bici y te pagan $1,500', bucket: 0, why: 'Lo usas para **vender**: medio de cambio.' },
          ],
        },
      },
      {
        calc: {
          question: 'Unidad de cuenta en acción: una cobija cuesta **$450** y un kilo de frijol **$30**. ¿Cuántos kilos de frijol valen lo mismo que la cobija?',
          answer: 15,
          unit: 'kilos',
          hint: 'Divide el precio de la cobija entre el precio del kilo: 450 ÷ 30.',
          why: '450 ÷ 30 = **15 kilos**. Sin trueque, una división te dice cuánto vale una cosa en otra. Ojo: se divide, no se multiplica.',
        },
      },
    ],
    // ¿Por qué vale un billete?
    [
      { text: 'Antes, guardar oro en casa era riesgoso 😬. La gente lo dejaba en una bóveda segura y recibía un **recibo**. Esos recibos empezaron a circular como dinero: así nacieron, en parte, los **bancos**.' },
      {
        ask: 'Hoy, ¿qué hace el banco con el dinero que depositas?',
        options: [
          { text: 'Guarda y presta una parte, cobrando intereses', ok: true, reply: '¡Eso! El **interés** es el "precio" de prestar dinero.' },
          { text: 'Lo guarda todo sin tocarlo', reply: 'No. El banco **presta una parte** a otros y les cobra intereses.' },
          { text: 'Se lo entrega al SAT', reply: 'No. El banco **presta una parte** a otras personas o empresas y les cobra intereses.' },
        ],
      },
      {
        sim: {
          title: 'Tu dinero en el banco',
          inputs: [
            { key: 'm', label: 'Lo que ahorras', min: 1000, max: 50000, step: 1000, value: 5000 },
            { key: 't', label: 'Interés al año (%)', min: 1, max: 12, step: 1, value: 5 },
          ],
          outputs: [
            { label: 'Interés que te pagan en un año', calc: (x) => (x.m * x.t) / 100, main: true },
            { label: 'Tendrás al final del año', calc: (x) => x.m + (x.m * x.t) / 100 },
          ],
          goal: {
            text: 'Mueve las barras hasta que el banco te pague **al menos $1,000** de interés en un año.',
            check: (x) => (x.m * x.t) / 100 >= 1000,
            done: '¡Listo! Entre más ahorras o más alta la tasa, más interés. Y el banco cobra un interés **más alto** a quien le presta: de ahí gana.',
          },
        },
      },
      {
        calc: {
          question: 'Un banco cobra **$20,000** de intereses por sus préstamos y paga **$6,000** de intereses a sus ahorradores. ¿Cuánto le queda de diferencia?',
          answer: 14000,
          hint: 'Intereses cobrados − intereses pagados.',
          why: '20,000 − 6,000 = **$14,000**. Con eso cubre sus gastos y gana. Solo se restan los intereses, no el dinero prestado.',
        },
      },
      {
        ask: 'Un billete de $500 vale $500 porque…',
        options: [
          { text: 'Confiamos en él y la ley obliga a aceptarlo', ok: true, reply: '¡Eso es el **dinero fiduciario**! "Fiduciario" viene de **fe** o confianza.' },
          { text: 'El papel es muy caro', reply: 'El papel vale muy poco. Vale $500 porque **confiamos** en él y la ley obliga a aceptarlo.' },
          { text: 'Lo puedes cambiar por oro en el banco', reply: 'Eso fue hace mucho: terminó en 1971. Hoy vale por **confianza** y porque la ley obliga a aceptarlo.' },
        ],
      },
      { tip: '**Dinero fiduciario:** vale por confianza y por ley. En México, el **Banco de México** emite los billetes y monedas.' },
    ],
    // Dinero digital y cripto
    [
      {
        ask: 'Le pagas a tu proveedor con una transferencia desde tu app 📱. ¿Qué le mandaste?',
        options: [
          { text: 'Pesos mexicanos', ok: true, reply: '¡Sí! Es **dinero digital**: el saldo de tu cuenta. Solo cambia la forma de moverlo.' },
          { text: 'Una criptomoneda', reply: 'No. Una transferencia mueve **pesos** de tu cuenta. Las criptomonedas son otra cosa.' },
          { text: 'Puntos de la app, no dinero', reply: 'Es dinero de verdad: **pesos** de tu cuenta, solo que en forma digital.' },
        ],
      },
      {
        text: 'Las **criptomonedas**, como bitcoin, son otra cosa:\n🚫 No las emite ningún banco central.\n🔗 Se registran en una **blockchain**.\n🎢 Su precio sube y baja muchísimo.\n⚖️ En México **no son moneda de curso legal**: nadie está obligado a aceptarlas.',
      },
      {
        rush: {
          title: '¿Peso o criptomoneda?',
          seconds: 30,
          labels: ['Peso mexicano', 'Criptomoneda'],
          items: [
            { text: 'Lo emite el Banco de México', ans: 0 },
            { text: 'Se registra en una blockchain', ans: 1 },
            { text: 'El saldo de tu tarjeta de débito', ans: 0 },
            { text: 'Nadie está obligado a aceptarlo', ans: 1 },
            { text: 'Una transferencia SPEI', ans: 0 },
            { text: 'Ningún banco central lo emite', ans: 1 },
          ],
        },
      },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Una transferencia por app sigue siendo pesos mexicanos.', bucket: 1, why: 'Solo cambia la forma de mover el dinero.' },
            { text: 'En México todos están obligados a aceptar bitcoin.', bucket: 0, why: 'Las criptomonedas **no son moneda de curso legal** en México. Nadie está obligado a aceptarlas.' },
            { text: 'El precio de una criptomoneda puede cambiar muchísimo en poco tiempo.', bucket: 1, why: 'Ese es su riesgo principal: es muy **volátil**.' },
          ],
        },
      },
      { tip: 'Para la contabilidad, el dinero es la **unidad de medida**: todo se registra en **pesos**.' },
    ],
  ],
}
