import type { InteractiveLesson } from './types'

export const intFIN03: InteractiveLesson = {
  lessonId: 'FIN-03',
  sections: [
    // ¿Hoy o dentro de un año?
    [
      { text: 'Iván es fotógrafo independiente 📷. Un cliente le dice: "Te pago **$10,000 hoy** o **$10,000 dentro de un año**, tú eliges".' },
      {
        ask: '¿Qué le conviene a Iván?',
        options: [
          { text: 'Hoy', ok: true, reply: '¡Eso! Casi todos elegimos hoy, y hay buenas razones. Veámoslas.' },
          { text: 'Dentro de un año', reply: 'Es la misma cantidad, pero llega después. El dinero de **hoy** vale más: lo puede invertir, y los precios suben.' },
          { text: 'Da exactamente igual', reply: 'No da igual: $10,000 de hoy valen más que $10,000 en un año. A eso se le llama **valor del dinero en el tiempo**.' },
        ],
      },
      { text: 'Se llama **valor del dinero en el tiempo**. Hay tres razones:\n📈 **Costo de oportunidad:** hoy lo puedes invertir y tener más.\n🛒 **Inflación:** los precios suben y el billete compra menos.\n⚠️ **Riesgo:** la promesa de pago podría no cumplirse.' },
      {
        match: {
          title: 'Une cada razón con su ejemplo',
          pairs: [
            ['Costo de oportunidad', 'Lo que Iván deja de ganar por no invertir hoy'],
            ['Inflación', 'El mismo billete compra menos tortillas'],
            ['Riesgo', 'El cliente podría no pagar'],
          ],
        },
      },
      {
        multi: {
          title: '¿Por qué $10,000 hoy valen más que en un año? Marca todas',
          items: [
            { text: 'Puedes invertirlos hoy y tener más después', ok: true },
            { text: 'Con el tiempo los precios suben', ok: true },
            { text: 'El pago futuro podría no llegar', ok: true },
            { text: 'Los billetes caducan cada año', ok: false },
          ],
          why: 'Son las tres razones: **costo de oportunidad, inflación y riesgo**. Los billetes no caducan cada año.',
        },
      },
      { text: 'Por eso **no se suman ni se comparan directo** pesos de fechas distintas. Primero se llevan a la misma fecha con una **tasa de descuento** (tu costo de oportunidad).' },
      {
        calc: {
          question: 'Si Iván puede ganar **10 % anual** (ejemplo), ¿a cuánto equivalen sus $10,000 de hoy dentro de un año?',
          answer: 11000,
          hint: '10,000 + 10 % de 10,000.',
          why: '10,000 × 1.10 = **$11,000**. Así que $10,000 hoy y $11,000 en un año valen lo mismo para Iván.',
        },
      },
    ],
    // Llevar y traer dinero
    [
      { text: 'Otro cliente le promete a Iván **$24,200 dentro de 2 años** por un paquete de fotos. Su tasa de descuento es **10 % anual** (ejemplo). ¿Cuánto vale esa promesa **hoy**?' },
      { text: '⏩ **Valor futuro (VF):** si invierto hoy, ¿cuánto tendré? VF = VP × (1 + i)ⁿ. Llevar dinero adelante es **capitalizar**.\n⏪ **Valor presente (VP):** ¿cuánto vale hoy algo futuro? Se **divide**: VP = VF ÷ (1 + i)ⁿ. Traer dinero a hoy es **descontar**.' },
      {
        order: {
          title: 'Arma la fórmula del valor presente',
          steps: ['VP =', 'VF (monto futuro)', '÷', '(1 + i) elevado a n (número de periodos)'],
          done: '¡Lista! Para traer dinero a hoy, divides entre (1 + i)ⁿ.',
        },
      },
      {
        calc: {
          question: '¿Cuánto valen hoy los $24,200 que recibirá en 2 años, a 10 %?',
          answer: 20000,
          hint: '1.10 × 1.10 = 1.21. Luego 24,200 ÷ 1.21.',
          why: '24,200 ÷ 1.21 = **$20,000**. Esa promesa vale hoy $20,000, no $24,200.',
        },
      },
      {
        calc: {
          question: 'Al revés: Iván invierte **$10,000 hoy** a 10 % anual compuesto (ejemplo) por **2 años**. ¿Cuánto tendrá?',
          answer: 12100,
          hint: 'VF = 10,000 × 1.10 × 1.10.',
          why: '10,000 × 1.21 = **$12,100**. Capitalizar multiplica; descontar divide.',
        },
      },
      {
        sim: {
          title: 'La promesa de $24,200',
          inputs: [
            { key: 'i', label: 'Tasa de descuento (% anual)', min: 4, max: 20, step: 2, value: 10 },
            { key: 'n', label: 'Años de espera', min: 1, max: 6, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'Monto prometido', calc: () => 24200 },
            { label: 'Valor presente', calc: (x) => Math.round(24200 / (1 + x.i / 100) ** x.n), main: true },
          ],
          goal: {
            text: 'Haz que la promesa valga **menos de $15,000** hoy.',
            check: (x) => 24200 / (1 + x.i / 100) ** x.n < 15000,
            done: 'Dos reglas: **más tasa** de descuento o **más años** de espera = **menor** valor presente.',
          },
        },
      },
      {
        ask: 'Si sube la tasa de descuento, ¿qué pasa con el valor presente de un pago futuro fijo?',
        options: [
          { text: 'Baja', ok: true, reply: '¡Exacto! Divides entre un número más grande, así que el VP es menor.' },
          { text: 'Sube', reply: 'Al revés: con más tasa divides entre un número más grande. El VP **baja**.' },
          { text: 'No cambia', reply: 'Sí cambia: la tasa está en la fórmula. Si sube, el VP **baja**.' },
        ],
      },
    ],
    // Pagos iguales cada periodo
    [
      { text: 'Iván renta su estudio a una escuela: recibirá **3 pagos de $10,000**, al final de cada año. Su tasa es **10 %** (ejemplo).' },
      {
        ask: '¿Cuánto valen hoy esos 3 pagos?',
        options: [
          { text: 'Exactamente $30,000', reply: 'Esa es la suma sin descontar. Como llegan en el futuro, hoy valen **menos de $30,000**.' },
          { text: 'Menos de $30,000', ok: true, reply: '¡Bien pensado! Cada pago futuro vale menos hoy. Vamos a calcular cuánto.' },
          { text: 'Más de $30,000', reply: 'El dinero futuro vale **menos** hoy, no más. La serie vale **menos de $30,000**.' },
        ],
      },
      { text: 'Una **anualidad** es una serie de pagos **iguales** cada periodo, durante un plazo fijo: mensualidades del auto, renta de un local, ahorro fijo. El periodo puede ser mes, bimestre o año.' },
      {
        sort: {
          title: '¿Es una anualidad?',
          buckets: ['Sí es anualidad', 'No es anualidad'],
          items: [
            { text: 'Mensualidades iguales de un auto', bucket: 0, why: 'Pagos iguales cada mes por un plazo fijo.' },
            { text: 'La misma renta del local cada mes, por un año', bucket: 0, why: 'Pagos iguales y periódicos: anualidad.' },
            { text: 'Un solo pago dentro de 2 años', bucket: 1, why: 'Es un solo pago, no una serie.' },
            { text: 'Pagos que cambian cada mes según las ventas', bucket: 1, why: 'No son iguales, así que no es anualidad.' },
            { text: 'Ahorrar la misma cantidad cada bimestre por 2 años', bucket: 0, why: 'Iguales y periódicos: el periodo puede ser bimestre.' },
          ],
        },
      },
      { text: 'Para valuar los pagos de Iván, descuenta cada uno y suma:\n1️⃣ 10,000 ÷ 1.10 = 9,090.91\n2️⃣ 10,000 ÷ 1.10² = 8,264.46\n3️⃣ 10,000 ÷ 1.10³ = 7,513.15' },
      {
        calc: {
          question: '¿Cuánto vale hoy toda la renta? Suma los tres valores presentes.',
          answer: 24868.52,
          hint: '9,090.91 + 8,264.46 + 7,513.15.',
          why: 'La suma da **$24,868.52**: menos que los $30,000 que suman los pagos sin descontar.',
        },
      },
      { tip: 'La fórmula de la anualidad hace esa suma de un solo golpe (para pagos al **final** de cada periodo, el caso más común).' },
    ],
  ],
}
