import type { InteractiveLesson } from './types'

export const intL103: InteractiveLesson = {
  lessonId: 'L1-03',
  sections: [
    // Del trueque al dinero moderno
    [
      { text: 'Imagina que tienes maíz 🌽 y quieres una gallina 🐔. Sin dinero, necesitas a alguien que tenga gallina **y además** quiera maíz. Difícil, ¿no?' },
      {
        ask: 'El señor de la gallina quiere zapatos, no maíz. ¿Qué pasa en un trueque?',
        options: [
          { text: 'No hay cambio', ok: true, reply: 'Exacto. Ese es el gran problema del trueque: necesitas la **doble coincidencia**. El dinero lo resuelve.' },
          { text: 'Te da la gallina igual', reply: 'En el trueque solo cambias si **los dos** quieren lo del otro. Por eso se inventó el dinero.' },
        ],
      },
      {
        order: {
          title: 'Del trueque al billete',
          steps: ['Trueque: cosa por cosa', 'Dinero mercancía: cacao, conchas, metales', 'Monedas de metal', 'Papel moneda (billetes)'],
          done: 'Cada paso hizo más fácil comprar y vender. Los mexicas, por ejemplo, pagaban con **granos de cacao**.',
        },
      },
      {
        sort: {
          title: '¿Qué función del dinero es?',
          buckets: ['Medio de cambio', 'Unidad de cuenta', 'Depósito de valor'],
          items: [
            { text: 'Pagas $25 por un pan', bucket: 0, why: 'Lo usas para **comprar**.' },
            { text: 'Guardas $500 para el próximo mes', bucket: 2, why: 'Lo **guardas** y lo usas después.' },
            { text: 'Ves que una tele cuesta lo mismo que 40 pizzas', bucket: 1, why: 'El dinero pone precio a todo con **la misma medida**.' },
          ],
        },
      },
    ],
    // Bancos y dinero fiduciario
    [
      { text: 'Un **banco** guarda el dinero de unos y se lo presta a otros. El "precio" de prestar dinero se llama **interés**.' },
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
        ask: 'Un billete de $500 vale $500 porque…',
        options: [
          { text: 'Confiamos en él y la ley obliga a aceptarlo', ok: true, reply: '¡Eso es el **dinero fiduciario**! "Fiduciario" viene de **fe** o confianza.' },
          { text: 'El papel es muy caro', reply: 'El papel vale muy poco. Vale $500 porque **confiamos** en él y la ley obliga a aceptarlo.' },
        ],
      },
    ],
    // Dinero digital y criptomonedas
    [
      { text: 'Hoy casi todo el dinero es **digital**: el saldo de tu cuenta, que mueves con tarjeta o con una app. Siguen siendo pesos.' },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Una transferencia por app sigue siendo pesos mexicanos.', bucket: 1, why: 'Solo cambia la forma de mover el dinero.' },
            { text: 'En México todos están obligados a aceptar bitcoin.', bucket: 0, why: 'Las criptomonedas **no son moneda de curso legal** en México. Nadie está obligado a aceptarlas.' },
            { text: 'Bitcoin lo emite un banco central.', bucket: 0, why: 'Ningún banco central lo emite; se registra en una **blockchain**.' },
            { text: 'El precio de una criptomoneda puede cambiar muchísimo en poco tiempo.', bucket: 1, why: 'Ese es su riesgo principal: es muy **volátil**.' },
          ],
        },
      },
      { tip: '**Dinero digital** = pesos en tu cuenta. **Criptomoneda** = activo digital sin banco central detrás, con precio muy variable.' },
    ],
  ],
}
