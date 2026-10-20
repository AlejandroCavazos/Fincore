import type { InteractiveLesson } from './types'

/** Portafolio de dos fondos de ejemplo: A (acciones) espera 12% con volatilidad 20%; B (deuda) espera 4% con volatilidad 10%. */
const volP = (w: number, rho: number) => {
  const a = w / 100
  const b = 1 - a
  return Math.sqrt(a * a * 0.04 + b * b * 0.01 + 2 * a * b * rho * 0.2 * 0.1) * 100
}
const retP = (w: number) => (w / 100) * 12 + (1 - w / 100) * 4

export const intCUA09: InteractiveLesson = {
  lessonId: 'CUA-09',
  sections: [
    // ¿Cuánto rinde tu mezcla?
    [
      { text: 'Mariana tiene 24 años y juntó sus primeros ahorros 💼. Quiere repartirlos entre dos fondos **de ejemplo**: uno de acciones y uno de deuda.' },
      {
        ask: 'En 1952, Harry Markowitz propuso una idea que cambió la inversión. ¿Cuál crees que fue?',
        options: [
          { text: 'Ver el portafolio completo, no cada inversión sola', ok: true, reply: '¡Exacto! Lo que importa es cómo se comporta **la mezcla** completa.' },
          { text: 'Elegir siempre la inversión que más rinde', reply: 'Eso ignora el riesgo. Markowitz propuso ver **el portafolio completo**: cómo se comportan todas juntas.' },
          { text: 'Poner todo en un solo fondo para no complicarse', reply: 'Fue casi lo contrario: hay que ver **el portafolio completo** y cómo se combinan las inversiones.' },
        ],
      },
      {
        text: 'A cada inversión se le miden dos números:\n🎯 **Rendimiento esperado:** lo que en promedio esperas ganar.\n🎢 **Riesgo:** su volatilidad, qué tanto varía.\nEl conjunto de tus inversiones es tu **portafolio**.',
      },
      { text: 'El rendimiento esperado del portafolio es un **promedio ponderado**: cada rendimiento × la parte de tu dinero que pusiste ahí (su **peso**). Los pesos suman 100%.' },
      {
        calc: {
          question: 'Mariana pone **50%** en acciones (esperan 12%) y **50%** en deuda (espera 4%). ¿Qué rendimiento esperado tiene su portafolio, en %?',
          answer: 8,
          unit: '%',
          hint: '0.5 × 12 + 0.5 × 4.',
          why: '0.5 × 12 = 6 y 0.5 × 4 = 2. Total: **8%**. Es un ejemplo: ningún rendimiento esperado está garantizado.',
        },
      },
      {
        calc: {
          question: '¿Y si pone **75%** en acciones y **25%** en deuda? Responde en %.',
          answer: 10,
          unit: '%',
          hint: '0.75 × 12 + 0.25 × 4.',
          why: '0.75 × 12 = 9 y 0.25 × 4 = 1. Total: **10%**. Más peso en lo que más espera rendir sube el promedio.',
        },
      },
      {
        ask: 'Las volatilidades son 20% (acciones) y 10% (deuda). Con 50 y 50, ¿el riesgo del portafolio es 15% seguro?',
        options: [
          { text: 'No necesariamente: depende de cómo se mueven juntos', ok: true, reply: '¡Bien! El riesgo **no** es el promedio ponderado. Si los fondos no se mueven igual, el riesgo queda **por debajo** de 15%.' },
          { text: 'Sí, es el promedio de 20% y 10%', reply: 'El promedio sirve para el rendimiento, no para el riesgo. Depende de **cómo se mueven juntos**; puede quedar por debajo de 15%.' },
          { text: 'Es la suma: 30%', reply: 'No se suman. El riesgo depende de **cómo se mueven juntos**, y a lo mucho llega al promedio ponderado (15%).' },
        ],
      },
      { tip: 'Rendimiento esperado: **sí** es promedio ponderado. Riesgo: **no**, depende de cómo se mueven juntas las inversiones.' },
    ],
    // ¿Por qué conviene combinar inversiones?
    [
      { text: 'El tío de Mariana vende **paraguas** ☂️ y **lentes de sol** 😎. Cuando llueve gana con uno; cuando hace sol, con el otro. Sus ingresos se mueven menos.' },
      {
        text: 'La **correlación (ρ, rho)** mide si dos inversiones se mueven juntas. Va de −1 a +1:\n➕ **+1:** siempre en la misma dirección.\n0️⃣ **0:** sin relación.\n➖ **−1:** una sube justo cuando la otra baja (como los paraguas y los lentes).',
      },
      {
        sim: {
          title: 'Mezcla los fondos de Mariana (datos de ejemplo)',
          inputs: [
            { key: 'w', label: 'Parte en acciones (%)', min: 20, max: 80, step: 10, value: 80 },
            { key: 'r', label: 'Correlación ρ (−1, 0 o +1)', min: -1, max: 1, step: 1, value: 1 },
          ],
          outputs: [
            { label: 'Rendimiento esperado', calc: (x) => retP(x.w), unit: '%' },
            { label: 'Promedio ponderado de volatilidades', calc: (x) => (x.w / 100) * 20 + (1 - x.w / 100) * 10, unit: '%' },
            { label: 'Volatilidad del portafolio', calc: (x) => volP(x.w, x.r), main: true, unit: '%' },
          ],
          goal: {
            text: 'Arma una mezcla con volatilidad de **10% o menos** y rendimiento esperado de **5% o más**.',
            check: (x) => volP(x.w, x.r) <= 10 && retP(x.w) >= 5,
            done: 'Con correlación +1 no se puede. Al bajarla, la volatilidad queda por debajo del promedio: eso es **diversificar**.',
          },
        },
      },
      {
        ask: 'En el simulador, ¿qué pasó al bajar la correlación sin mover la mezcla?',
        options: [
          { text: 'Bajó el riesgo y el rendimiento quedó igual', ok: true, reply: '¡Exacto! El rendimiento solo depende de los pesos; el riesgo baja cuando los fondos no se mueven igual.' },
          { text: 'Subió el rendimiento', reply: 'El rendimiento esperado no cambió: solo depende de los pesos. Lo que bajó fue el **riesgo**.' },
          { text: 'No pasó nada', reply: 'Mira la volatilidad: bajó. Con correlación menor que +1, el riesgo queda **por debajo** del promedio.' },
        ],
      },
      { text: 'Ese ahorro de riesgo es la **diversificación**. Con ρ = −1 y los pesos justos, en teoría el riesgo puede llegar a **cero**. Pero diversificar quita el riesgo **específico** de cada empresa, no el **sistemático**, el que pega a todo el mercado.' },
      {
        sort: {
          title: '¿Se puede quitar diversificando?',
          buckets: ['Específico (sí se diversifica)', 'Sistemático (no se diversifica)'],
          items: [
            { text: 'Una huelga en la fábrica de una empresa', bucket: 0, why: 'Le pega a una sola empresa: otras la compensan.' },
            { text: 'Una recesión en todo el país', bucket: 1, why: 'Afecta a casi todos a la vez: no se diversifica.' },
            { text: 'Un producto fallido de una marca', bucket: 0, why: 'Es de una sola empresa: específico.' },
            { text: 'Un alza general de las tasas de interés', bucket: 1, why: 'Mueve a todo el mercado: sistemático.' },
            { text: 'Un incendio en la bodega de una empresa', bucket: 0, why: 'Solo le pasa a esa empresa: específico.' },
          ],
        },
      },
      { text: 'La **covarianza** también mide si se mueven juntos. Se saca de la correlación:\n**Covarianza = ρ × volatilidad A × volatilidad B**, todo en decimal (20% = 0.20).' },
      {
        calc: {
          question: 'Con ρ = 0.5, volatilidad A = 20% y volatilidad B = 10%, ¿cuál es la covarianza?',
          answer: 0.01,
          unit: 'en decimal',
          hint: '0.5 × 0.20 × 0.10.',
          why: '0.5 × 0.20 = 0.10, y 0.10 × 0.10 = **0.01**. Si usas los números en porcentaje (0.5 × 20 × 10 = 100) sale absurdo: trabaja en decimales.',
        },
      },
    ],
    // ¿Cuál mezcla paga mejor el riesgo?
    [
      { text: 'Mariana prueba muchas mezclas y las dibuja: el **riesgo** en el eje horizontal y el **rendimiento esperado** en el vertical. Le sale una nube de puntos ☁️.' },
      { text: 'El borde de arriba a la izquierda es la **frontera eficiente**: el **mayor rendimiento esperado para cada nivel de riesgo**. Las mezclas debajo de ella son **ineficientes**.' },
      {
        ask: 'Mezcla X: riesgo 12% y rendimiento esperado 7%. Mezcla Y: riesgo 12% y rendimiento esperado 9%. ¿Cuál es ineficiente?',
        options: [
          { text: 'La X', ok: true, reply: '¡Sí! Con el mismo riesgo, Y espera más. X queda **debajo** de la frontera.' },
          { text: 'La Y', reply: 'Y espera más con el mismo riesgo: es mejor. La ineficiente es **X**.' },
          { text: 'Las dos son iguales', reply: 'Tienen el mismo riesgo, pero Y espera 9% y X 7%. **X** es ineficiente.' },
        ],
      },
      { text: 'Para comparar mezclas con riesgos distintos se usa el **índice de Sharpe**:\n**(rendimiento esperado − tasa libre de riesgo) ÷ volatilidad**\n🛡️ La **tasa libre de riesgo** es lo que darías en algo muy seguro y de corto plazo. Más alto = mejor pago por cada punto de riesgo.' },
      {
        calc: {
          question: 'Con una tasa libre de riesgo **de ejemplo** de 3%, una mezcla espera **11%** con volatilidad de **16%**. ¿Cuál es su índice de Sharpe?',
          answer: 0.5,
          unit: 'de Sharpe',
          hint: 'Primero 11 − 3. Luego divide entre 16.',
          why: '11 − 3 = 8 es el premio por arriesgar. 8 ÷ 16 = **0.5**. Si no restas la tasa libre de riesgo (11 ÷ 16) te sale de más.',
        },
      },
      {
        calc: {
          question: 'Otra mezcla espera **9%** con volatilidad de **20%** (misma tasa libre de 3%). ¿Su Sharpe?',
          answer: 0.3,
          unit: 'de Sharpe',
          hint: '(9 − 3) ÷ 20.',
          why: '9 − 3 = 6, y 6 ÷ 20 = **0.3**. La primera (0.5) paga más por cada punto de riesgo.',
        },
      },
      {
        match: {
          title: 'Une cada término con su idea',
          pairs: [
            ['Frontera eficiente', 'El mayor rendimiento esperado para cada riesgo'],
            ['Mínima varianza', 'El punto de menor riesgo de la frontera'],
            ['Portafolio tangente', 'El de mayor índice de Sharpe'],
            ['Tasa libre de riesgo', 'Lo que da algo muy seguro y de corto plazo'],
          ],
        },
      },
      { tip: 'Los rendimientos, volatilidades y correlaciones son **estimaciones**, no certezas: ninguna mezcla garantiza su rendimiento.' },
    ],
  ],
}
