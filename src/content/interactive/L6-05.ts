import type { InteractiveLesson } from './types'

export const intL605: InteractiveLesson = {
  lessonId: 'L6-05',
  sections: [
    // ¿Cuánto pagar hoy por un bono?
    [
      { text: 'Andrea lleva las finanzas de **Rodada**, una importadora de bicis 🚲. Tiene dinero extra y ve un **bono** de ejemplo. ¿Qué es eso?' },
      {
        ask: 'Si Andrea compra un bono, ¿qué está haciendo?',
        options: [
          { text: 'Prestándole dinero a una empresa o al gobierno', ok: true, reply: '¡Eso! Un bono es un préstamo que **tú haces**. A cambio te pagan intereses y al final te devuelven lo prestado.' },
          { text: 'Comprando una parte de la empresa', reply: 'Eso sería una acción. Con un bono **prestas** dinero: te pagan intereses y te lo devuelven al final.' },
          { text: 'Pidiendo un préstamo', reply: 'Al revés: con un bono **tú prestas**. Quien emite el bono es quien pide prestado.' },
        ],
      },
      { text: '🎟️ **Cupón:** el interés fijo de cada año = tasa cupón × valor nominal.\n💵 **Valor nominal:** lo que te devuelven al final.\n🏷️ **Precio:** la suma de cada pago traído a pesos de hoy, descontado al **rendimiento que exige el mercado** (no a la tasa cupón).' },
      {
        calc: {
          question: 'Un bono de valor nominal $1,000 paga cupón de 8 % al año. ¿De cuánto es cada cupón?',
          answer: 80,
          hint: 'Tasa cupón × valor nominal: 0.08 × 1,000.',
          why: '0.08 × 1,000 = **$80** cada año.',
        },
      },
      {
        calc: {
          question: 'Ese bono vence en 1 año: te paga $80 de cupón + $1,000 de nominal. Si el mercado exige 8 % (de ejemplo), ¿cuánto vale hoy?',
          answer: 1000,
          hint: 'Descuenta el pago final: (80 + 1,000) ÷ 1.08.',
          why: '1,080 ÷ 1.08 = **$1,000**. Cuando cupón = rendimiento del mercado, el precio es igual al nominal: cotiza **a la par**.',
        },
      },
      {
        order: {
          title: 'Arma el precio de un bono de varios años',
          steps: ['Calcula el cupón: tasa cupón × valor nominal', 'Descuenta cada cupón: cupón ÷ (1 + y) elevado al año', 'En el último año suma cupón + nominal y descuéntalo', 'Suma todos los valores de hoy'],
          done: '¡Así se valúa! **y** es el rendimiento que exige el mercado.',
        },
      },
      { tip: 'Si descuentas con la **tasa cupón** en lugar del rendimiento de mercado, siempre te dará el valor nominal: es el error más frecuente.' },
    ],
    // Tasas suben, precio baja
    [
      { text: 'Andrea compró un bono que paga **6 %**. Hoy salen bonos nuevos parecidos que pagan **8 %** (tasas de ejemplo). Quiere vender el suyo.' },
      {
        ask: '¿Alguien le pagará el precio completo por su bono de 6 %?',
        options: [
          { text: 'No: tendrá que bajarle el precio', ok: true, reply: '¡Exacto! Nadie quiere 6 % si hay 8 %. Baja el precio hasta que rinda lo mismo que los nuevos.' },
          { text: 'Sí, el cupón está fijo en el contrato', reply: 'Justo porque el cupón está fijo, lo que se ajusta es el **precio**: tiene que bajar.' },
          { text: 'Sí, y hasta más caro', reply: 'Al revés: paga menos que los nuevos, así que vale **menos**. El precio baja.' },
        ],
      },
      { text: '↕️ **Precio y tasa se mueven al revés:** si las tasas suben, el precio baja.\nEl **YTM** (rendimiento al vencimiento) es lo que rinde el bono si lo guardas hasta el final.\n**A la par** = precio igual al nominal.' },
      {
        sim: {
          title: 'Bono de $1,000 a 2 años: mueve el cupón y la tasa del mercado (de ejemplo)',
          inputs: [
            { key: 'c', label: 'Tasa cupón (%)', min: 4, max: 10, step: 1, value: 6 },
            { key: 'y', label: 'Rendimiento que exige el mercado (%)', min: 4, max: 10, step: 1, value: 6 },
          ],
          outputs: [
            { label: 'Cupón de cada año', calc: (v) => v.c * 10 },
            {
              label: 'Precio del bono hoy',
              calc: (v) => Math.round((v.c * 10) / (1 + v.y / 100) + (1000 + v.c * 10) / (1 + v.y / 100) ** 2),
              main: true,
            },
          ],
          goal: {
            text: 'Haz que el bono cotice **bajo la par**: precio menor a **$990**.',
            check: (v) => (v.c * 10) / (1 + v.y / 100) + (1000 + v.c * 10) / (1 + v.y / 100) ** 2 < 990,
            done: 'Cupón menor que el rendimiento del mercado → precio bajo la par. Si las tasas suben, tu bono vale menos.',
          },
        },
      },
      {
        sort: {
          title: '¿Cómo cotiza el bono?',
          buckets: ['Bajo la par', 'A la par', 'Sobre la par'],
          items: [
            { text: 'Cupón 6 %, mercado exige 8 %', bucket: 0, why: 'Paga menos que el mercado: precio menor al nominal.' },
            { text: 'Cupón 7 %, mercado exige 7 %', bucket: 1, why: 'Paga justo lo que exige el mercado: precio = nominal.' },
            { text: 'Cupón 9 %, mercado exige 5 %', bucket: 2, why: 'Paga más que el mercado: vale más que el nominal.' },
            { text: 'Cupón 5 %, mercado exige 10 %', bucket: 0, why: 'Cupón menor que el rendimiento: con descuento.' },
            { text: 'Cupón 8 %, mercado exige 4 %', bucket: 2, why: 'Cupón mayor que el rendimiento: con prima.' },
          ],
        },
      },
      { tip: 'Cupón < YTM → bajo la par. Cupón = YTM → a la par. Cupón > YTM → sobre la par. Los bonos de **más años** se mueven más con las tasas.' },
    ],
    // Apartar hoy el precio del dólar
    [
      { text: 'Rodada tiene que pagar **USD 10,000** de bicis dentro de 3 meses. Andrea teme que el dólar suba 😬.' },
      { text: '📝 Un **forward** es como apartar hoy el precio del dólar para comprarlo en 3 meses.\n🟢 **Largo** = te comprometes a comprar.\n🔴 **Corto** = te comprometes a vender.\nAl vencimiento: **largo** gana (spot − pactado) × cantidad.' },
      {
        calc: {
          question: 'Andrea pacta un forward largo por USD 10,000 a 18.00 pesos por dólar (de ejemplo). Al vencimiento el dólar está en 18.50. ¿Cuál es su resultado en pesos?',
          answer: 5000,
          hint: '(Spot − pactado) × cantidad: (18.50 − 18.00) × 10,000.',
          why: '0.50 × 10,000 = **$5,000** de ganancia: compra dólares 50 centavos más baratos que en el mercado.',
        },
      },
      {
        ask: '¿Y si al vencimiento el dólar está en **17.50**?',
        options: [
          { text: 'Pierde $5,000: está obligada a pagar 18.00', ok: true, reply: '¡Bien! (17.50 − 18.00) × 10,000 = **−$5,000**. Pero ya sabía cuánto pagaría: eso buscaba.' },
          { text: 'Gana $5,000', reply: 'Al ser larga, gana si el dólar **sube**. Aquí bajó: (17.50 − 18.00) × 10,000 = **−$5,000**.' },
          { text: 'No pasa nada, puede no comprar', reply: 'El forward es una **obligación**: tiene que comprar a 18.00. Resultado: **−$5,000**.' },
        ],
      },
      { text: '🏛️ Un **futuro** es parecido, pero **estandarizado**, se negocia en bolsa (en México, MexDer), pasa por una cámara de compensación y se **liquida cada día** con márgenes.' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['OTC', 'Se negocia directo entre las partes, fuera de bolsa'],
            ['Riesgo de contraparte', 'Que la otra parte no cumpla'],
            ['Marcado a mercado', 'Pérdidas y ganancias se liquidan cada día'],
            ['Spot', 'Precio del mercado ese día'],
          ],
        },
      },
      {
        sort: {
          title: '¿Forward o futuro?',
          buckets: ['Forward', 'Futuro'],
          items: [
            { text: 'Contrato privado con monto y fecha a la medida', bucket: 0, why: 'El forward se hace a la medida entre las partes.' },
            { text: 'Estandarizado y en bolsa con cámara de compensación', bucket: 1, why: 'Así funcionan los futuros.' },
            { text: 'Liquidación diaria con márgenes', bucket: 1, why: 'El futuro se marca a mercado cada día.' },
            { text: 'Más riesgo de contraparte: se liquida solo al vencimiento', bucket: 0, why: 'En el forward nadie garantiza que la otra parte cumpla.' },
          ],
        },
      },
    ],
    // Un derecho, no una obligación
    [
      { text: 'Andrea quiere protegerse **sin quedar obligada**. Su colega le cuenta de las **opciones**: como dejar un anticipo no reembolsable para apartar un coche a precio fijo 🚗.' },
      {
        ask: 'Apartas un coche en $100,000 con un anticipo de $5,000. Al final el coche baja a $90,000. ¿Qué haces?',
        options: [
          { text: 'No lo compras a $100,000 y solo pierdes el anticipo', ok: true, reply: '¡Eso! Tienes el **derecho**, no la obligación. Lo peor que te pasa es perder el anticipo (la **prima**).' },
          { text: 'Lo compras a $100,000 a fuerza', reply: 'No estás obligado: tienes un **derecho**. No lo compras y solo pierdes los $5,000.' },
          { text: 'Pierdes $10,000', reply: 'Como no estás obligado, no pagas la diferencia. Solo pierdes el anticipo: **$5,000**.' },
        ],
      },
      { text: '📞 **Call:** derecho a **comprar** a un precio de ejercicio K.\n📤 **Put:** derecho a **vender** a K.\n💸 **Prima:** lo que pagas al inicio por ese derecho.\nPago call = máx(precio final − K, 0). Pago put = máx(K − precio final, 0). **Utilidad = pago − prima.**' },
      {
        rush: {
          title: '¿Ejerces la opción?',
          seconds: 30,
          labels: ['✅ Ejerzo', '❌ No ejerzo'],
          items: [
            { text: 'Call con K $100, la acción vale $120', ans: 0 },
            { text: 'Call con K $100, la acción vale $90', ans: 1 },
            { text: 'Put con K $100, la acción vale $80', ans: 0 },
            { text: 'Put con K $100, la acción vale $110', ans: 1 },
            { text: 'Call con K $50, la acción vale $65', ans: 0 },
            { text: 'Put con K $50, la acción vale $70', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Andrea compra un call con K = $100 y prima de $10. Al vencimiento la acción vale $130. ¿Cuál es su utilidad por acción?',
          answer: 20,
          hint: 'Pago: máx(130 − 100, 0) = 30. Utilidad = pago − prima.',
          why: '30 − 10 = **$20**. El pago es 30, pero hay que restar lo que pagó por el derecho.',
        },
      },
      {
        calc: {
          question: 'También compró un put con K = $100 y prima de $6. Con la acción en $130, ¿cuál es su utilidad? (Si es pérdida, escríbela con signo menos.)',
          answer: -6,
          hint: 'Pago: máx(100 − 130, 0) = 0. No lo ejerce. Utilidad = 0 − 6.',
          why: 'No le conviene vender a 100 si vale 130: pago **0**. Utilidad = 0 − 6 = **−$6**. El pago nunca es negativo; la peor pérdida es la prima.',
        },
      },
      {
        sort: {
          title: '¿Forward, futuro u opción?',
          buckets: ['Forward', 'Futuro', 'Opción'],
          items: [
            { text: 'Contrato privado a la medida', bucket: 0, why: 'Forward: OTC y a la medida.' },
            { text: 'Se liquida cada día con márgenes', bucket: 1, why: 'Futuro: marcado a mercado diario.' },
            { text: 'Pagas una prima por un derecho, no una obligación', bucket: 2, why: 'Opción: derecho a cambio de prima.' },
            { text: 'Tu pérdida máxima es lo que pagaste al inicio', bucket: 2, why: 'En la opción comprada lo peor es perder la prima.' },
            { text: 'Estandarizado, en bolsa', bucket: 1, why: 'Futuro: estandarizado y con cámara de compensación.' },
          ],
        },
      },
    ],
  ],
}
