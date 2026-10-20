import type { InteractiveLesson } from './types'

export const intL401: InteractiveLesson = {
  lessonId: 'L4-01',
  sections: [
    // ¿Hoy o dentro de un año?
    [
      { text: 'Marisol tiene un taller de costura 🧵. Una clienta le dice: "Te pago **$1,000 hoy** o **$1,000 dentro de un año**, tú escoges".' },
      {
        ask: '¿Qué le conviene a Marisol?',
        options: [
          { text: 'Cobrar hoy', ok: true, reply: '¡Exacto! $1,000 hoy valen más que $1,000 dentro de un año. Ahorita te digo por qué.' },
          { text: 'Cobrar en un año', reply: 'Es la misma cantidad, pero llega después. Mientras, Marisol no la puede usar ni invertir. Conviene **cobrar hoy**.' },
          { text: 'Da igual, son $1,000', reply: 'Parecen iguales, pero no lo son: el dinero de hoy puede ponerse a trabajar. Conviene **cobrar hoy**.' },
        ],
      },
      {
        text: 'Tres razones:\n💰 **Costo de oportunidad:** hoy lo puede invertir y ganar un rendimiento. Si espera, renuncia a esa ganancia.\n📈 **Inflación:** con el tiempo, el dinero compra menos.\n⚠️ **Riesgo:** un cobro futuro puede no llegar.',
      },
      {
        sort: {
          title: '¿Qué razón es?',
          buckets: ['Costo de oportunidad', 'Inflación', 'Riesgo'],
          items: [
            { text: 'Con $1,000 hoy, Marisol podría comprar tela y venderla con ganancia', bucket: 0, why: 'Es la ganancia a la que renuncia si espera: costo de oportunidad.' },
            { text: 'En un año, los mismos $1,000 alcanzan para menos hilo', bucket: 1, why: 'Los precios subieron: eso es inflación.' },
            { text: 'La clienta podría cambiarse de ciudad y no pagar', bucket: 2, why: 'El cobro futuro podría no llegar: riesgo.' },
            { text: 'Si lo deja en una cuenta, hoy ya empieza a ganar intereses', bucket: 0, why: 'Esperar significa perder esos intereses: costo de oportunidad.' },
            { text: 'El pagaré de un cliente con muchas deudas', bucket: 2, why: 'Hay duda de que pague: riesgo.' },
          ],
        },
      },
      {
        ask: 'Imagina que no hay inflación ni riesgo. ¿Aún así conviene cobrar hoy?',
        options: [
          { text: 'Sí, porque hoy se puede invertir y ganar un rendimiento', ok: true, reply: '¡Eso! Es el **costo de oportunidad**: queda aunque no haya inflación ni riesgo.' },
          { text: 'No, entonces da igual', reply: 'Todavía queda una razón: hoy se puede invertir y ganar. Es el **costo de oportunidad**.' },
          { text: 'Sí, porque los billetes se gastan', reply: 'El billete no es el punto. Lo importante es que hoy se puede **invertir y ganar un rendimiento**.' },
        ],
      },
      { text: 'Por eso solo se suman o comparan pesos **del mismo momento**. La tasa de interés es como un "tipo de cambio" entre pesos de distintas fechas.' },
      { tip: 'No sumes pesos de hoy con pesos de 2030, igual que no sumas dólares con pesos sin convertirlos. Primero se ajustan con la tasa.' },
    ],
    // ¿Cuánto gana un préstamo simple?
    [
      { text: 'Marisol le presta **$30,000** a una clienta por **6 meses** al **8 % anual** (tasa de ejemplo). Lo firman en un **pagaré**: un papel donde la clienta promete pagar en una fecha.' },
      {
        text: 'Tres palabras clave:\n🏦 **Capital:** lo que prestas al principio.\n💵 **Interés:** lo que te pagan por prestarlo.\n🎯 **Monto:** lo que recibes al final (capital + interés).',
      },
      {
        match: {
          title: 'Une cada palabra con el caso de Marisol',
          pairs: [
            ['Capital', 'Los $30,000 que prestó'],
            ['Interés', 'Lo extra que le pagarán por prestar'],
            ['Monto', 'Todo lo que cobrará al final'],
            ['Pagaré', 'El papel firmado con la fecha de pago'],
          ],
        },
      },
      { text: 'En el **interés simple**, el interés siempre se calcula sobre el capital original:\n**Interés = capital × tasa × tiempo**\nEl tiempo va en la misma unidad que la tasa: si la tasa es anual, 6 meses = 6/12 = 0.5 años.' },
      {
        ask: 'La tasa es anual y el plazo es de 6 meses. ¿Qué tiempo usas en la fórmula?',
        options: [
          { text: '0.5 (años)', ok: true, reply: '¡Bien! 6 ÷ 12 = 0.5 años, igual que la tasa anual.' },
          { text: '6', reply: 'Con 6 estarías diciendo "6 años". Tasa anual → tiempo en años: 6 ÷ 12 = **0.5**.' },
          { text: '12', reply: '12 son los meses de un año, no el plazo. El plazo es 6 ÷ 12 = **0.5** años.' },
        ],
      },
      {
        calc: {
          question: '¿Cuánto **interés** gana Marisol? $30,000 a 6 meses al 8 % anual simple.',
          answer: 1200,
          hint: '30,000 × 0.08 × 0.5',
          why: '30,000 × 0.08 = 2,400 por un año completo. Por medio año: 2,400 × 0.5 = **$1,200**. El monto será $31,200.',
        },
      },
      {
        calc: {
          question: 'Otra clienta le pide **$40,000** a **9 meses** al **10 % anual** simple. ¿Qué **monto** cobrará Marisol al final?',
          answer: 43000,
          hint: 'Tiempo: 9 ÷ 12 = 0.75. Interés = 40,000 × 0.10 × 0.75. Luego súmale el capital.',
          why: 'Interés = 40,000 × 0.10 × 0.75 = $3,000. Monto = 40,000 + 3,000 = **$43,000**.',
        },
      },
      { tip: 'Error común: usar los meses con una tasa anual. Con n = 6 en lugar de 0.5, el interés de medio año saldría 12 veces más grande.' },
    ],
    // La bola de nieve del interés
    [
      {
        ask: 'Marisol ahorra $10,000 al 10 % anual (de ejemplo). Cada año los intereses **se suman** a su dinero. ¿Cómo serán los intereses del año 2?',
        options: [
          { text: 'Más grandes que los del año 1', ok: true, reply: '¡Exacto! En el año 2 gana intereses sobre $11,000, no sobre $10,000.' },
          { text: 'Iguales que los del año 1', reply: 'Eso pasa en el interés simple. Aquí los intereses se suman al dinero, así que el año 2 gana sobre $11,000: **son más grandes**.' },
          { text: 'Más chicos que los del año 1', reply: 'Su dinero creció, así que los intereses también crecen. Son **más grandes**.' },
        ],
      },
      { text: 'Eso es el **interés compuesto**: interés sobre interés, como una bola de nieve ⛄. **Capitalizar** es sumar los intereses al capital para que también ganen.' },
      {
        calc: {
          question: 'Año 1: $10,000 × 1.10 = $11,000. ¿Cuánto tendrá Marisol al final del **año 2** con interés compuesto?',
          answer: 12100,
          hint: 'Multiplica lo que tiene al final del año 1 por 1.10.',
          why: '11,000 × 1.10 = **$12,100**. Con interés simple serían $12,000: los $100 extra son interés sobre interés.',
        },
      },
      {
        sim: {
          title: 'Simple contra compuesto ($10,000 de ejemplo)',
          inputs: [
            { key: 'i', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 1, value: 5 },
            { key: 'n', label: 'Años', min: 1, max: 30, step: 1, value: 5 },
          ],
          outputs: [
            { label: 'Monto con interés simple', calc: (x) => 10000 * (1 + (x.i / 100) * x.n) },
            { label: 'Monto con interés compuesto', calc: (x) => 10000 * (1 + x.i / 100) ** x.n },
            { label: 'Diferencia (interés sobre interés)', calc: (x) => 10000 * (1 + x.i / 100) ** x.n - 10000 * (1 + (x.i / 100) * x.n), main: true },
          ],
          goal: {
            text: 'Haz que la diferencia pase de **$10,000**.',
            check: (x) => 10000 * (1 + x.i / 100) ** x.n - 10000 * (1 + (x.i / 100) * x.n) >= 10000,
            done: 'Con más años la bola de nieve crece mucho: la diferencia aumenta con el plazo.',
          },
        },
      },
      {
        calc: {
          question: 'Con interés **simple**, ¿cuánto tendría Marisol en **3 años**? ($10,000 al 10 % anual)',
          answer: 13000,
          hint: '10,000 × (1 + 0.10 × 3)',
          why: 'Interés = 10,000 × 0.10 × 3 = $3,000. Monto = **$13,000**.',
        },
      },
      {
        calc: {
          question: 'Con interés **compuesto**, en 3 años tiene $12,100 × 1.10 = **$13,310**. ¿Cuánto más que con el simple?',
          answer: 310,
          hint: 'Monto compuesto − monto simple.',
          why: '13,310 − 13,000 = **$310**. Eso es lo que aporta el interés sobre interés en 3 años.',
        },
      },
      { tip: 'Fórmula: **Monto = capital × (1 + tasa)^años**. El "^" significa "elevado a": multiplicar el paréntesis por sí mismo esa cantidad de veces.' },
    ],
    // ¿Cuánto cobra de verdad?
    [
      { text: 'Marisol quiere una máquina de coser nueva. Una tarjeta anuncia **18 % anual**, pero cobra intereses **cada mes** 💳.' },
      {
        ask: '¿En realidad le cuesta 18 % al año?',
        options: [
          { text: 'Más de 18 %', ok: true, reply: '¡Sí! Cada mes le cobran intereses también sobre los intereses del mes anterior.' },
          { text: 'Exactamente 18 %', reply: 'Como cobran cada mes, hay interés sobre interés. Le cuesta **más de 18 %**.' },
          { text: 'Menos de 18 %', reply: 'Al contrario: cobrar cada mes suma interés sobre interés. Le cuesta **más de 18 %**.' },
        ],
      },
      {
        text: 'La **tasa nominal** es la que se anuncia. La **tasa efectiva anual (TEA)** es lo que de verdad pagas o ganas en un año.\nSi la nominal se capitaliza **m** veces al año, la tasa por periodo es nominal ÷ m. Ejemplo: 12 % anual mensual = 1 % al mes.',
      },
      {
        match: {
          title: '¿Cuánto vale m?',
          pairs: [
            ['Anual', 'm = 1'],
            ['Semestral', 'm = 2'],
            ['Trimestral', 'm = 4'],
            ['Mensual', 'm = 12'],
          ],
        },
      },
      {
        order: {
          title: 'Arma el cálculo de la TEA',
          steps: ['Divide la tasa nominal (en decimal) entre m', 'Súmale 1', 'Eleva el resultado a la m', 'Réstale 1 y pásalo a %'],
          done: '¡Listo! Es la fórmula TEA = (1 + j/m)^m − 1, donde j es la tasa nominal.',
        },
      },
      {
        calc: {
          question: 'Una cuenta de ejemplo paga **20 % anual capitalizable semestralmente**. ¿Cuál es su TEA, en %?',
          answer: 21,
          unit: '%',
          hint: '0.20 ÷ 2 = 0.10. Luego (1.10)² − 1.',
          why: '1.10 × 1.10 = 1.21. Menos 1 = 0.21 = **21 %**. Más que el 20 % anunciado.',
        },
      },
      {
        sim: {
          title: 'Misma tasa nominal (12 % de ejemplo), distinta frecuencia',
          inputs: [{ key: 'm', label: 'Veces al año que se suman los intereses (m)', min: 1, max: 12, step: 1, value: 1 }],
          outputs: [
            { label: 'Tasa por periodo', calc: (x) => Math.round((12 / x.m) * 100) / 100, unit: '%' },
            { label: 'TEA', calc: (x) => Math.round(((1 + 0.12 / x.m) ** x.m - 1) * 10000) / 100, unit: '%', main: true },
          ],
          goal: {
            text: 'Haz que la TEA pase de **12.6 %**.',
            check: (x) => (1 + 0.12 / x.m) ** x.m - 1 > 0.126,
            done: 'A más frecuencia de capitalización, **mayor** TEA con la misma tasa nominal.',
          },
        },
      },
      { tip: 'Para comparar, usa siempre la **TEA**: en ahorro gana la más alta; en créditos conviene la más baja.' },
    ],
  ],
}
