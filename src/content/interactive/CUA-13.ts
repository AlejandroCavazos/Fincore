import type { InteractiveLesson } from './types'

export const intCUA13: InteractiveLesson = {
  lessonId: 'CUA-13',
  sections: [
    // Pactar hoy, comprar después
    [
      { text: 'Iván es analista junior en una casa de bolsa 📈. Una importadora le pide **fijar hoy** el tipo de cambio al que comprará dólares en seis meses.' },
      {
        text: 'Eso es un **derivado**: un contrato cuyo valor depende de otro activo, el **subyacente** (una acción, el dólar, el maíz).\n🤝 Un **forward** es acordar **hoy** comprar o vender ese activo en una **fecha futura** a un precio fijado hoy.',
      },
      {
        ask: 'Una acción vale $100. Pides prestado al 10% anual (tasa de ejemplo), la compras y la guardas un año. ¿Cuánto te costó en total?',
        options: [
          { text: '$100', reply: 'Falta el costo del préstamo: debes $100 más 10% de intereses. En total, **$110**.' },
          { text: '$110', ok: true, reply: '¡Eso! $100 de la acción + $10 de intereses. Por eso un forward a un año debe valer **$110**.' },
          { text: '$90', reply: 'El préstamo no te descuenta, te cobra: $100 + $10 de intereses = **$110**.' },
        ],
      },
      {
        text: 'La regla es el **no arbitraje**: no puede haber ganancia segura sin poner dinero. Por eso:\n🧮 **Forward justo = precio de hoy × (1 + tasa × plazo en años)**\n⚠️ El plazo va en años: 6 meses = 0.5.',
      },
      {
        sim: {
          title: 'Un banco cotiza un forward en $530',
          inputs: [
            { key: 's', label: 'Precio de hoy de la acción', min: 400, max: 600, step: 50, value: 400 },
            { key: 'r', label: 'Tasa anual de ejemplo (%)', min: 4, max: 10, step: 2, value: 4 },
            { key: 'm', label: 'Plazo (meses)', min: 3, max: 12, step: 3, value: 3 },
          ],
          outputs: [
            { label: 'Plazo en años', calc: (x) => x.m / 12, unit: 'años' },
            { label: 'Forward justo', calc: (x) => x.s * (1 + (x.r / 100) * (x.m / 12)), main: true },
            { label: 'Ganancia sin riesgo contra $530', calc: (x) => 530 - x.s * (1 + (x.r / 100) * (x.m / 12)) },
          ],
          goal: {
            text: 'Haz que el forward justo sea **$520**: así la cotización de $530 deja **$10** de ganancia sin riesgo.',
            check: (x) => Math.abs(x.s * (1 + (x.r / 100) * (x.m / 12)) - 520) < 0.01,
            done: 'Por ejemplo: $500 al 8% por 6 meses = 500 × 1.04 = $520. El forward de $530 está caro por $10.',
          },
        },
      },
      {
        calc: {
          question: 'Una acción vale **$400**, no paga dividendos, la tasa de ejemplo es **6% anual simple** y el plazo es **6 meses**. ¿Cuál es el forward justo?',
          answer: 412,
          hint: 'Plazo = 6 ÷ 12 = 0.5. Factor: 1 + 0.06 × 0.5.',
          why: '0.06 × 0.5 = 0.03. Factor 1.03. 400 × 1.03 = **$412**. Si usas T = 6 en vez de 0.5, te da un número enorme.',
        },
      },
      {
        ask: 'El mercado cotiza ese forward en **$420**, más caro que los $412 justos. ¿Qué hace Iván?',
        options: [
          { text: 'Vende el forward, pide prestado y compra la acción hoy', ok: true, reply: '¡Exacto! Al vencer entrega la acción por $420 y paga $412 del préstamo: gana **$8** sin riesgo.' },
          { text: 'Compra el forward caro', reply: 'Comprar caro le haría perder. Lo que conviene es **vender** el forward caro y comprar la acción con dinero prestado.' },
          { text: 'Nada: $420 solo predice que la acción subirá', reply: 'El forward no es una predicción. Si está más caro que el justo, hay **ganancia segura**: vender el forward y comprar la acción con préstamo.' },
        ],
      },
      { tip: 'Un forward mayor que el precio de hoy **no** predice que subirá: solo refleja el costo de pedir prestado y guardar el activo.' },
    ],
    // ¿Cuánto vale una opción?
    [
      {
        text: 'Ahora Iván vende **opciones** 🎟️.\n📞 Una **call** da el **derecho, no la obligación**, de comprar a un precio fijo, el **precio de ejercicio** (K).\n📤 Una **put** es el derecho a vender.\nSi al vencer la acción vale más que K, la call paga **precio − K**; si no, vale **0**.',
      },
      {
        sort: {
          title: 'Call con K = $100: ¿qué pasa al vencer?',
          buckets: ['Paga (precio − K)', 'Vale $0'],
          items: [
            { text: 'La acción termina en $120', bucket: 0, why: 'La ejerces: 120 − 100 = $20.' },
            { text: 'La acción termina en $90', bucket: 1, why: 'Comprar a $100 algo que vale $90 no conviene: no la ejerces.' },
            { text: 'La acción termina en $105', bucket: 0, why: 'Paga 105 − 100 = $5.' },
            { text: 'La acción termina en $70', bucket: 1, why: 'No la ejerces. Es un derecho, no una obligación: no pierdes más.' },
          ],
        },
      },
      {
        text: 'El **árbol binomial** simplifica el futuro: en un periodo el precio solo puede **subir** (× u) o **bajar** (× d) 🌳. Con esos dos caminos se calcula un peso llamado **probabilidad neutral al riesgo**, p:\n🧮 **p = (1 + r − d) ÷ (u − d)**',
      },
      {
        ask: '¿Qué es esa p?',
        options: [
          { text: 'La probabilidad real de que suba, sacada de datos históricos', reply: 'No es la real. Es un **peso** que hace que el activo rinda la tasa libre de riesgo, para poder valuar descontando a esa tasa.' },
          { text: 'Un peso que hace que el activo rinda la tasa libre de riesgo', ok: true, reply: '¡Sí! No es la probabilidad real: es una herramienta para valuar. Siempre debe quedar entre 0 y 1.' },
          { text: 'Siempre 50%, porque solo puede subir o bajar', reply: 'Solo da 50% con ciertos u, d y r. Hay que **calcularla**: es un peso que hace que el activo rinda la tasa libre de riesgo.' },
        ],
      },
      {
        calc: {
          question: 'Acción de $100, sube a × **1.2** o baja a × **0.9**; la tasa del periodo es **5%**. ¿Cuánto es p en porcentaje?',
          answer: 50,
          unit: '%',
          hint: '(1 + 0.05 − 0.9) ÷ (1.2 − 0.9) = 0.15 ÷ 0.30.',
          why: '1.05 − 0.9 = 0.15. 1.2 − 0.9 = 0.30. 0.15 ÷ 0.30 = 0.5 = **50%**. Aquí salió 50% por estos números, no siempre.',
        },
      },
      {
        text: 'Con p, la call con K = $100 vale: (0.5 × $20 + 0.5 × $0) ÷ 1.05 ≈ **$9.52**. Se promedian los pagos y se traen a hoy.',
      },
      {
        order: {
          title: 'Arma el valor de la opción',
          steps: [
            'Calcula los dos precios futuros (× u y × d)',
            'Calcula el pago de la opción en cada uno',
            'Calcula p = (1 + r − d) ÷ (u − d)',
            'Promedia los pagos con p y 1 − p',
            'Trae el promedio a hoy: divide entre (1 + r)',
          ],
          done: '¡Lo armaste! El error típico es olvidar el último paso: dividir entre (1 + r).',
        },
      },
    ],
    // La calculadora de opciones
    [
      {
        text: 'Si el árbol tiene muchísimos pasos muy cortos, sale **Black-Scholes** 🧮: una "calculadora" del precio justo de una opción europea (solo se ejerce al vencer). Usa **cinco datos**:\n💲 precio de hoy (S)\n🎯 precio de ejercicio (K)\n⏳ plazo (T)\n🏦 tasa libre de riesgo (r)\n🌊 volatilidad (σ): qué tanto se mueve el precio',
      },
      {
        ask: 'Iván cree que la acción va a subir mucho. ¿Black-Scholes necesita ese rendimiento esperado?',
        options: [
          { text: 'Sí, es el dato más importante', reply: 'Curiosamente, **no** lo usa. La opción se puede copiar con la acción y un préstamo, y el no arbitraje elimina el rendimiento esperado.' },
          { text: 'No, solo usa S, K, T, r y σ', ok: true, reply: '¡Exacto! El rendimiento esperado no aparece. Una acción "con buena perspectiva" no tiene calls más caras según el modelo.' },
          { text: 'Solo si la acción paga dividendos', reply: 'Los dividendos sí afectan, pero el **rendimiento esperado** nunca entra: solo S, K, T, r y σ.' },
        ],
      },
      {
        text: 'Qué mueve el precio de una **call**:\n⬆️ Sube S → vale **más**\n🌊 Sube σ → vale **más** (más chance de un pago grande)\n🎯 Sube K → vale **menos**\n💸 Dividendos más altos → vale **menos**\nLa **put** se mueve al revés con S y con K.',
      },
      {
        sort: {
          title: '¿La opción vale más o menos?',
          buckets: ['Vale más', 'Vale menos'],
          items: [
            { text: 'Call: sube el precio de la acción', bucket: 0, why: 'Se acerca más a pagar precio − K.' },
            { text: 'Call: sube la volatilidad', bucket: 0, why: 'Más chance de terminar muy arriba, y la pérdida máxima sigue siendo lo que pagaste.' },
            { text: 'Call: sube el precio de ejercicio K', bucket: 1, why: 'El pago (precio − K) se hace más chico.' },
            { text: 'Call: anuncian dividendos más altos', bucket: 1, why: 'Al pagarse, el precio de la acción baja, y eso perjudica a la call.' },
            { text: 'Put: sube el precio de la acción', bucket: 1, why: 'La put es el derecho a vender: vale menos si la acción sube.' },
            { text: 'Put: sube la volatilidad', bucket: 0, why: 'Más volatilidad hace valer más a calls **y** puts.' },
          ],
        },
      },
      {
        text: 'Call y put con el mismo K y plazo están ligadas por la **paridad put-call**:\n⚖️ **C − P = S − VP(K)**\nVP(K) es lo que vale **hoy** pagar K al vencimiento (K descontado).',
      },
      {
        order: {
          title: 'Arma la paridad put-call',
          steps: ['C (precio de la call)', '− P (precio de la put)', '= S (precio de hoy)', '− VP(K) (K traído a hoy)'],
          done: '¡Eso! C − P = S − VP(K). Ojo: K va **descontado**, no tal cual.',
        },
      },
      {
        calc: {
          question: 'La call vale **$8**, la acción **$50** y VP(K) = **$48**. Despeja: P = C − S + VP(K). ¿Cuánto vale la put?',
          answer: 6,
          hint: '8 − 50 + 48.',
          why: '8 − 50 = −42. −42 + 48 = **$6**. Si la put cotizara en $7, habría arbitraje.',
        },
      },
      { tip: 'Black-Scholes supone volatilidad y tasa constantes y sin costos; por eso en la práctica se ajusta. Si la paridad no se cumple, hay arbitraje.' },
    ],
  ],
}
