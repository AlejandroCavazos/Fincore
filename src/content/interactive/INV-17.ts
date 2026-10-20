import type { InteractiveLesson } from './types'

export const intINV17: InteractiveLesson = {
  lessonId: 'INV-17',
  sections: [
    // ¿Qué puede salir mal?
    [
      { text: 'Julián es contador, tiene 45 años y **60 %** de sus ahorros en acciones de la empresa donde trabaja 🏢. "Es la que mejor conozco", dice.' },
      {
        ask: '¿Qué podría salir mal?',
        options: [
          { text: 'Si a la empresa le va mal, pierde empleo y ahorros a la vez', ok: true, reply: '¡Exacto! Eso es **riesgo de concentración**: demasiado en una sola apuesta.' },
          { text: 'Nada: conoce bien la empresa', reply: 'Conocerla no la protege de una mala racha. Si le va mal, Julián perdería **empleo y ahorros a la vez**.' },
          { text: 'Que paga muchas comisiones', reply: 'El problema mayor es otro: tiene **demasiado en una sola empresa**, la misma que le paga el sueldo.' },
        ],
      },
      { text: '**Riesgo** es la posibilidad de que el resultado sea distinto (sobre todo peor) de lo que esperabas. Gestionarlo no es eliminarlo: es decidir **cuánto** aceptas, de qué tipo y a cambio de qué rendimiento.' },
      { text: 'Los más comunes:\n📉 **Mercado:** caen los precios en general.\n🧾 **Crédito:** el emisor o deudor no paga.\n🚪 **Liquidez:** no puedes vender a tiempo sin rebajar el precio.\n🏦 **Tasa:** si suben las tasas, baja el precio de los bonos.\n🎈 **Inflación:** tu rendimiento no alcanza a cubrir el alza de precios.\n🎯 **Concentración:** demasiado en una sola apuesta.' },
      {
        match: {
          title: 'Une cada riesgo con su ejemplo',
          pairs: [
            ['Crédito', 'La empresa que emitió tu bono deja de pagar intereses'],
            ['Liquidez', 'Vendes un terreno urgente y solo te ofrecen 30 % menos'],
            ['Tasa', 'Suben las tasas y baja el precio de tu bono de largo plazo'],
            ['Concentración', 'Tienes 70 % de tus ahorros en una sola empresa'],
            ['Inflación', 'Tu inversión rinde menos de lo que suben los precios'],
          ],
        },
      },
      {
        rush: {
          title: '¿Crédito o liquidez?',
          seconds: 30,
          labels: ['🧾 Crédito', '🚪 Liquidez'],
          items: [
            { text: 'Un pagaré de una financiera vence y no te lo pagan', ans: 0 },
            { text: 'No encuentras comprador para tu terreno sin rebajarlo', ans: 1 },
            { text: 'La empresa de tu bono deja de pagar intereses', ans: 0 },
            { text: 'Necesitas vender tu casa en una semana y bajas mucho el precio', ans: 1 },
            { text: 'Un deudor deja de pagarte', ans: 0 },
            { text: 'Quieres vender una inversión hoy y nadie la compra a buen precio', ans: 1 },
          ],
        },
      },
    ],
    // ¿Cómo se mide el riesgo?
    [
      { text: 'El portafolio de Julián llegó a **$400,000** y luego bajó a **$300,000** 😬. ¿Cuánto cayó, en porcentaje?' },
      { text: '📏 **Volatilidad:** cuánto se mueven los precios alrededor de su promedio. Más volatilidad, sustos más grandes, hacia arriba y hacia abajo.\n🕳️ **Caída máxima (drawdown):** la peor caída desde un máximo hasta un mínimo.\n🧮 **Drawdown = (mínimo − máximo) ÷ máximo × 100**' },
      {
        calc: {
          question: 'Máximo **$400,000**, mínimo **$300,000**. ¿De qué porcentaje fue la caída máxima? (Escríbelo en positivo).',
          answer: 25,
          unit: '%',
          hint: '(300,000 − 400,000) ÷ 400,000 × 100.',
          why: '−100,000 ÷ 400,000 = −0.25 → caída de **25 %**. Se divide entre el **máximo**; si divides entre el mínimo te da 33.33 %.',
        },
      },
      {
        ask: 'Trampa matemática: si una inversión pierde **50 %**, ¿cuánto debe ganar después para volver a donde estaba?',
        options: [
          { text: '100 %', ok: true, reply: '¡Así es! $100 caen a $50; para volver a $100 hay que duplicar: **+100 %**. Pérdidas y ganancias no son simétricas.' },
          { text: '50 %', reply: '$50 × 1.5 = $75, no $100. Necesitas **100 %**: pérdidas y ganancias no son simétricas.' },
          { text: '25 %', reply: 'Con 25 % llegarías a $62.50. Para volver a $100 desde $50 necesitas **100 %**.' },
        ],
      },
      { text: '**Valor en riesgo (VaR):** con cierta confianza, lo máximo que podrías perder en un periodo **en condiciones normales**.\n🧮 **VaR = valor × z × volatilidad** (z ≈ 1.65 para 95 %, suponiendo rendimientos con distribución normal).\n⚠️ No es el peor caso: en crisis puedes perder más.' },
      {
        calc: {
          question: 'Julián tiene **$500,000** con volatilidad diaria de **1.2 %**. ¿Cuál es su VaR diario al 95 % (z = 1.65)?',
          answer: 9900,
          hint: '500,000 × 0.012 = 6,000. Luego × 1.65.',
          why: '6,000 × 1.65 = **$9,900**. Si olvidas el factor z, te da $6,000.',
        },
      },
      {
        ask: '¿Qué significa ese VaR de $9,900 al 95 %?',
        options: [
          { text: 'En 95 de cada 100 días normales, no debería perder más de $9,900', ok: true, reply: '¡Correcto! Y cerca de 1 día de cada 20 sí puede perder más; en crisis, mucho más.' },
          { text: 'Nunca perderá más de $9,900 en un día', reply: 'El VaR **no** es el peor caso. Cerca de 1 día de cada 20 la pérdida puede ser mayor.' },
          { text: 'Perderá $9,900 todos los días', reply: 'No es una pérdida segura: es un **límite** que en días normales no debería pasarse 95 de cada 100 veces.' },
        ],
      },
      {
        sim: {
          title: 'VaR diario al 95 % (z = 1.65)',
          inputs: [
            { key: 'v', label: 'Valor del portafolio', min: 100000, max: 1000000, step: 100000, value: 500000 },
            { key: 's', label: 'Volatilidad diaria (%)', min: 0.5, max: 3, step: 0.5, value: 1.5 },
          ],
          outputs: [
            { label: 'Movimiento típico en pesos', calc: (x) => (x.v * x.s) / 100 },
            { label: 'VaR diario al 95 %', calc: (x) => (x.v * 1.65 * x.s) / 100, main: true },
          ],
          goal: {
            text: 'Julián solo tolera perder **$5,000** en un día normal. Busca una combinación con VaR de **$5,000 o menos**.',
            check: (x) => (x.v * 1.65 * x.s) / 100 <= 5000,
            done: 'Menos dinero expuesto o activos menos volátiles bajan el VaR. Recuerda: en crisis la pérdida puede ser mayor.',
          },
        },
      },
    ],
    // ¿Cuánto arriesgar en cada compra?
    [
      {
        ask: 'Julián quiere comprar una acción. ¿Cuál es la herramienta más poderosa para controlar su riesgo?',
        options: [
          { text: 'Decidir el tamaño de la posición', ok: true, reply: '¡Exacto! Cuánto compras define cuánto puedes perder.' },
          { text: 'Adivinar el mejor día para comprar', reply: 'Nadie lo adivina siempre. La herramienta más poderosa es el **tamaño de la posición**.' },
          { text: 'Comprar la que más subió el mes pasado', reply: 'Eso no limita nada. Lo que controla el riesgo es el **tamaño de la posición**.' },
        ],
      },
      { text: 'Una regla común entre inversionistas activos: arriesgar solo un porcentaje pequeño del capital (por ejemplo, 1 % o 2 %) en cada operación.\n🧮 Riesgo máximo = capital × % de riesgo\n🧮 Riesgo por acción = precio de compra − precio de salida\n🧮 Acciones = riesgo máximo ÷ riesgo por acción' },
      {
        order: {
          title: 'Arma el cálculo del tamaño de la posición',
          steps: ['Calcula el riesgo máximo: capital × % de riesgo', 'Calcula el riesgo por acción: compra − salida', 'Divide: riesgo máximo ÷ riesgo por acción', 'Multiplica las acciones por el precio de compra'],
          done: '¡Listo! El último paso te dice cuánto inviertes, que es distinto de cuánto arriesgas.',
        },
      },
      {
        calc: {
          question: 'Julián tiene **$100,000** y arriesga **1 %** ($1,000). Compra a **$80** y saldría en **$76**. ¿Cuántas acciones compra?',
          answer: 250,
          unit: 'acciones',
          hint: 'Riesgo por acción: 80 − 76 = 4. Luego 1,000 ÷ 4.',
          why: '1,000 ÷ 4 = **250 acciones**.',
        },
      },
      {
        calc: {
          question: '¿Cuánto vale esa posición de 250 acciones a $80?',
          answer: 20000,
          hint: '250 × 80.',
          why: '250 × 80 = **$20,000**. Invierte $20,000, pero solo **arriesga** $1,000 si se activa la salida.',
        },
      },
      { text: 'Una **orden stop-loss** vende sola si el precio cae a cierto nivel. Ayuda a cortar pérdidas, pero **no garantiza el precio**: si el mercado abre con un salto a la baja, vende al siguiente precio disponible.' },
      {
        ask: 'Julián puso su stop-loss en **$76**. Sale una mala noticia y la acción **abre en $70**. ¿A cuánto vende?',
        options: [
          { text: 'Cerca de $70', ok: true, reply: '¡Correcto! Se activa y vende al siguiente precio disponible, que puede ser mucho menor.' },
          { text: 'Exactamente a $76', reply: 'El stop-loss no garantiza el precio. Con un salto, vende **cerca de $70**.' },
          { text: 'No vende', reply: 'Sí vende: la orden se activa. Pero al siguiente precio disponible, **cerca de $70**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué más ayuda a controlar el riesgo? Marca todo lo que sirve',
          items: [
            { text: 'Poner límites por emisor, sector o país', ok: true },
            { text: 'Cubrirse con derivados, como un put', ok: true },
            { text: 'Tener un colchón líquido para no vender en mal momento', ok: true },
            { text: 'Escribir antes qué harás si el portafolio cae 10 %, 20 % o 30 %', ok: true },
            { text: 'Decidir con miedo en el momento de la caída', ok: false },
          ],
          why: 'Límites, coberturas, colchón líquido y un plan escrito de antemano ayudan. Lo que se busca es **no decidir con miedo**.',
        },
      },
    ],
  ],
}
