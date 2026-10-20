import type { InteractiveLesson } from './types'

/** VaR paramétrico de 1 día al 95%: valor × 1.645 × volatilidad diaria. */
const var95 = (millones: number, volPct: number) => millones * 1000000 * 1.645 * (volPct / 100)

export const intCUA11: InteractiveLesson = {
  lessonId: 'CUA-11',
  sections: [
    // ¿Cuánto podrías perder en un día?
    [
      { text: 'Ricardo cuida el riesgo de una mesa de operación en una casa de bolsa 📊. Su jefa le pregunta: "¿cuánto podríamos perder mañana, en un día normal?".' },
      {
        text: 'El **VaR** (Value at Risk, valor en riesgo) responde con 3 datos:\n💰 Un **monto**.\n⏱️ Un **horizonte**: 1 día, 10 días…\n🎯 Un **nivel de confianza**: 95%, 99%…',
      },
      {
        ask: 'El VaR de 1 día al 95% de la mesa es **$100,000**. ¿Cómo se lee?',
        options: [
          { text: 'En 95 de cada 100 días la pérdida no debería pasar de $100,000; en los otros 5 puede ser mayor', ok: true, reply: '¡Exacto! Es un **umbral**: casi siempre no se pasa, pero en los días malos sí puede pasarse.' },
          { text: 'La mesa nunca perderá más de $100,000', reply: 'El VaR no es la peor pérdida posible: en 5 de cada 100 días la pérdida **puede ser mayor**.' },
          { text: 'La mesa perderá exactamente $100,000 cinco días de cada 100', reply: 'No dice cuánto se pierde esos días. Dice que en 95 de cada 100 días la pérdida **no debería pasar** de $100,000.' },
        ],
      },
      {
        rush: {
          title: '¿El VaR te dice esto?',
          seconds: 30,
          labels: ['✅ Sí', '❌ No'],
          items: [
            { text: 'Un umbral de pérdida para días normales', ans: 0 },
            { text: 'La peor pérdida posible', ans: 1 },
            { text: 'Cuánto se pierde en promedio en los días malos', ans: 1 },
            { text: 'Se da con monto, horizonte y confianza', ans: 0 },
            { text: 'Sirve para poner límites de riesgo', ans: 0 },
            { text: 'Una pérdida que jamás se supera', ans: 1 },
          ],
        },
      },
      { text: 'Bancos, casas de bolsa y fondos lo usan para poner **límites de riesgo** a sus mesas y para comunicar el riesgo en un solo número.' },
      {
        ask: 'El límite de VaR diario de la mesa es $500,000 y su VaR calculado sube a **$650,000**. ¿Qué toca hacer?',
        options: [
          { text: 'Reducir posiciones', ok: true, reply: '¡Sí! Se pasó del límite, así que debe bajar su riesgo.' },
          { text: 'Nada, es solo un número', reply: 'Para eso es el límite: si el VaR lo pasa, la mesa debe **reducir posiciones**.' },
          { text: 'Comprar más para recuperarse', reply: 'Eso subiría todavía más el riesgo. Toca **reducir posiciones**.' },
        ],
      },
      { tip: 'El VaR marca **dónde empiezan** los días malos. No es la peor pérdida ni dice cuánto se pierde en ellos.' },
    ],
    // Tres formas de medirlo
    [
      {
        text: 'Ricardo tiene 3 maneras de calcular el VaR 🧰:\n📐 **Paramétrico:** supone rendimientos con forma de campana (distribución normal) y usa una fórmula.\n📜 **Histórico:** ve qué habría ganado o perdido el portafolio actual en cada día del pasado.\n🎲 **Monte Carlo:** simula miles de escenarios al azar con un modelo.',
      },
      { text: 'El paramétrico:\n**VaR = valor × z × volatilidad diaria** (en decimal)\n**z** dice cuántas volatilidades alejarte del promedio para dejar fuera solo los días más malos: **1.645** para 95% y **2.326** para 99%.' },
      {
        calc: {
          question: 'Posición de **$1,000,000**, volatilidad diaria de **1%**. ¿Cuál es el VaR de 1 día al **99%**?',
          answer: 23260,
          hint: '1,000,000 × 2.326 × 0.01.',
          why: '1,000,000 × 2.326 = 2,326,000, y × 0.01 = **$23,260**. Con la z de 95% (1.645) te daría $16,450: revisa siempre qué confianza te piden.',
        },
      },
      {
        sim: {
          title: 'VaR de 1 día al 95% de la mesa de Ricardo (datos de ejemplo)',
          inputs: [
            { key: 'v', label: 'Posición (millones de pesos)', min: 1, max: 10, step: 1, value: 10 },
            { key: 's', label: 'Volatilidad diaria (%)', min: 1, max: 3, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'Valor de la posición', calc: (x) => x.v * 1000000 },
            { label: 'VaR de 1 día al 95%', calc: (x) => var95(x.v, x.s), main: true },
          ],
          goal: {
            text: 'La mesa tiene un límite de **$250,000**. Deja el VaR dentro del límite.',
            check: (x) => var95(x.v, x.s) <= 250000,
            done: 'Para bajar el VaR hay dos caminos: una posición más chica o activos menos volátiles.',
          },
        },
      },
      {
        sort: {
          title: '¿Qué método es?',
          buckets: ['Paramétrico', 'Histórico', 'Monte Carlo'],
          items: [
            { text: 'Usa la volatilidad y un factor z', bucket: 0, why: 'Es la fórmula valor × z × volatilidad.' },
            { text: 'Ordena las pérdidas que habría tenido en días reales pasados', bucket: 1, why: 'Usa el pasado tal cual, sin suponer campana.' },
            { text: 'Simula miles de escenarios al azar', bucket: 2, why: 'Eso es Monte Carlo.' },
            { text: 'Se queda corto si los días extremos son más comunes que en la campana', bucket: 0, why: 'Depende del supuesto de normalidad: subestima las "colas pesadas".' },
            { text: 'Supone que el pasado reciente representa el futuro', bucket: 1, why: 'No supone campana, pero sí que el pasado se repite.' },
            { text: 'El más flexible para opciones, pero el más costoso de calcular', bucket: 2, why: 'Monte Carlo sirve para relaciones no lineales, a cambio de mucho cálculo.' },
          ],
        },
      },
      { text: 'Para pasar de 1 día a T días se usa otra vez la **raíz del tiempo**: **VaR a T días = VaR de 1 día × √T**.' },
      {
        calc: {
          question: 'El VaR de 1 día es **$50,000**. ¿Cuál es el VaR a **4 días**?',
          answer: 100000,
          hint: '√4 = 2.',
          why: '50,000 × 2 = **$100,000**. Si multiplicas por 4 te da $200,000: el riesgo crece con la **raíz** del tiempo.',
        },
      },
    ],
    // ¿Y en los días muy malos?
    [
      { text: 'Dos mesas tienen el mismo VaR. Pero en sus peores días, una pierde un poco más y la otra muchísimo más 😬. El VaR **no ve** lo que pasa más allá del umbral.' },
      {
        ask: '¿Qué número le falta a Ricardo para ver la diferencia?',
        options: [
          { text: 'Cuánto se pierde en promedio en los días malos', ok: true, reply: '¡Exacto! Ese número existe y se llama **Expected Shortfall**.' },
          { text: 'Un VaR con más decimales', reply: 'Más decimales no ayudan: el VaR no mira más allá del umbral. Falta **cuánto se pierde en promedio en los días malos**.' },
          { text: 'Nada, el VaR basta', reply: 'Con el mismo VaR pueden tener pérdidas extremas muy distintas. Falta **el promedio de los días malos**.' },
        ],
      },
      { text: 'El **Expected Shortfall (ES)**, o CVaR, es el **promedio de las pérdidas en la cola**, más allá del VaR. Siempre es **igual o mayor** que el VaR. El Comité de Basilea lo adoptó para medir el riesgo de mercado de los bancos.' },
      {
        order: {
          title: 'Arma el VaR histórico al 95% con 100 días',
          steps: ['Calcula los días de la cola: 5% de 100 = 5', 'Ordena las pérdidas de mayor a menor', 'VaR: toma la 5.ª mayor pérdida', 'ES: promedia las 5 mayores pérdidas'],
          done: '¡Listo! Esa es la convención de esta lección para 100 días.',
        },
      },
      {
        calc: {
          question: 'En 100 días, las 6 mayores pérdidas fueron: **$100,000; $90,000; $80,000; $70,000; $60,000 y $50,000**. ¿Cuál es el VaR histórico al 95%?',
          answer: 60000,
          hint: 'La 5.ª mayor pérdida.',
          why: 'La 5.ª es **$60,000**. La peor ($100,000) no es el VaR, y la 6.ª ($50,000) ya queda fuera de la cola.',
        },
      },
      {
        calc: {
          question: '¿Y el Expected Shortfall al 95%?',
          answer: 80000,
          hint: 'Promedia solo las 5 mayores: (100 + 90 + 80 + 70 + 60) mil ÷ 5.',
          why: '100 + 90 + 80 + 70 + 60 = 400 mil, y ÷ 5 = **$80,000**. Es mayor que el VaR ($60,000), como debe ser. No metas la 6.ª pérdida.',
        },
      },
      {
        ask: 'Ricardo revisa su modelo: con un VaR al 99%, en 100 días hubo **6 días** con pérdidas mayores al VaR. ¿Qué indica?',
        options: [
          { text: 'Que el modelo subestima el riesgo', ok: true, reply: '¡Sí! Al 99% se esperaría alrededor de 1 de cada 100 días. Con 6, el modelo se queda corto.' },
          { text: 'Que el modelo funciona perfecto', reply: 'Al 99% se esperaría alrededor de **1** día de cada 100. Con 6, el modelo **subestima** el riesgo.' },
          { text: 'Que el modelo exagera el riesgo', reply: 'Si exagerara, casi no habría días por encima. Con 6 de 100, **subestima** el riesgo.' },
        ],
      },
      { tip: 'VaR: dónde **empieza** la zona de días malos. ES: cuánto pierdes **en promedio** cuando caes en ella.' },
    ],
  ],
}
