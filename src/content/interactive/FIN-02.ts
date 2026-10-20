import type { InteractiveLesson } from './types'

export const intFIN02: InteractiveLesson = {
  lessonId: 'FIN-02',
  sections: [
    // ¿Cuánto cuesta usar dinero ajeno?
    [
      { text: 'Marta tiene una ferretería 🔧. Un cliente le pide prestados **$10,000** y promete devolverle **$11,200** en un año (ejemplo).' },
      {
        ask: '¿Qué son esos $1,200 de más?',
        options: [
          { text: 'Un regalo del cliente', reply: 'No es regalo: es el **interés**, el precio de usar el dinero de Marta.' },
          { text: 'El interés: el precio de usar dinero ajeno', ok: true, reply: '¡Eso! Quien pide prestado paga interés; quien presta, lo cobra.' },
          { text: 'Un impuesto', reply: 'No va al gobierno. Es el **interés** que cobra Marta por prestar.' },
        ],
      },
      { text: 'Tres palabras clave:\n💰 **Capital (P):** el dinero que se presta.\n📈 **Tasa (i):** cuánto se paga por cada $100 en un periodo.\n⏳ **Plazo (t o n):** cuántos periodos dura.' },
      { text: '"12 % anual" = $12 por cada $100 en un año. Para calcular, el % va en decimal: 12 % = **0.12**.' },
      {
        match: {
          title: 'Une cada porcentaje con su decimal',
          pairs: [
            ['12 %', '0.12'],
            ['5 %', '0.05'],
            ['25 %', '0.25'],
            ['1 %', '0.01'],
          ],
        },
      },
      { tip: 'Regla de oro: **tasa y plazo en la misma unidad**. Tasa anual y plazo de 6 meses → t = 6 ÷ 12 = **0.5** años.' },
      {
        calc: {
          question: 'La tasa es anual y el plazo es de **3 meses**. ¿Cuánto vale t, en años? (escribe el decimal)',
          answer: 0.25,
          unit: 'años',
          hint: 'Meses ÷ 12: 3 ÷ 12.',
          why: '3 ÷ 12 = **0.25** años. Si pusieras 3, estarías cobrando como si fueran 3 años.',
        },
      },
      {
        ask: 'Una tasa de **2 % mensual** durante 1 año. ¿Cuántos periodos son?',
        options: [
          { text: '1', reply: 'La tasa es **mensual**, así que se cuentan meses: un año son **12 periodos**.' },
          { text: '12', ok: true, reply: '¡Bien! Tasa mensual → periodos mensuales: 12 en un año.' },
          { text: '2', reply: 'El 2 es la tasa, no el plazo. Un año tiene **12 periodos mensuales**.' },
        ],
      },
    ],
    // Interés simple: siempre igual
    [
      { text: 'Un cliente de confianza le pide a Marta **$50,000** a **12 % anual** (ejemplo). Ella cobrará **interés simple**.' },
      {
        ask: 'Un año genera $6,000 de interés. ¿Cuánto generan 2 años?',
        options: [
          { text: '$6,000', reply: 'Cada año vuelve a generar interés. En simple, 2 años = 2 × $6,000 = **$12,000**.' },
          { text: '$12,000', ok: true, reply: '¡Sí! En interés simple, crece en **línea recta**: el doble de tiempo, el doble de interés.' },
          { text: '$12,720', reply: 'Eso pasaría si el interés ganara interés (compuesto). En simple son **$12,000**.' },
        ],
      },
      { text: 'En el **interés simple**, el interés se calcula **siempre sobre el capital original**. Al final te devuelven el capital más el interés: **M = P + I**.' },
      {
        order: {
          title: 'Arma la fórmula del interés simple',
          steps: ['I =', 'capital (P)', '× tasa en decimal (i)', '× tiempo en la misma unidad (t)'],
          done: '¡Lista! I = P × i × t. Se usa en préstamos cortos, pagarés y créditos entre comercios.',
        },
      },
      {
        calc: {
          question: 'Marta presta **$40,000** a **15 % anual simple** por **6 meses**. ¿Cuánto interés cobra?',
          answer: 3000,
          hint: 'I = 40,000 × 0.15 × (6 ÷ 12).',
          why: '40,000 × 0.15 = 6,000 por un año. Por medio año (0.5): **$3,000**.',
        },
      },
      {
        ask: '¿Cuánto le devuelven en total a Marta?',
        options: [
          { text: '$43,000', ok: true, reply: '¡Exacto! M = P + I = 40,000 + 3,000.' },
          { text: '$3,000', reply: 'Eso es solo el interés. El total es capital + interés: **$43,000**.' },
          { text: '$46,000', reply: 'Eso sería un año completo de interés. Por 6 meses: 40,000 + 3,000 = **$43,000**.' },
        ],
      },
      { tip: 'Interés simple: **I = P × i × t**, siempre sobre el capital original. Monto final: **M = P + I**.' },
    ],
    // Interés sobre interés
    [
      { text: 'Marta ahorra **$30,000** por 2 años a una tasa de ejemplo de **12 % anual**. Le ofrecen interés simple o compuesto. ¿Cuál le conviene?' },
      { text: 'En el **interés compuesto**, al final de cada periodo el interés **se suma al capital** y el siguiente periodo también gana. Es "interés sobre interés": **M = P × (1 + i)ⁿ**.' },
      {
        calc: {
          question: 'Año 1: 30,000 × 1.12 = $33,600. En el año 2, esos $33,600 vuelven a ganar 12 %. ¿Cuánto tiene al final del año 2?',
          answer: 37632,
          hint: '33,600 × 1.12.',
          why: '33,600 × 1.12 = **$37,632**. Es lo mismo que 30,000 × 1.12².',
        },
      },
      {
        ask: 'Con interés simple tendría $37,200 (30,000 + 2 × 3,600). ¿Cuánto más le da el compuesto?',
        options: [
          { text: '$432', ok: true, reply: '¡Bien! 37,632 − 37,200 = $432. Es el interés que ganó el interés del primer año.' },
          { text: '$3,600', reply: 'Eso es el interés de un año en simple. La diferencia es 37,632 − 37,200 = **$432**.' },
          { text: 'Nada, dan lo mismo', reply: 'En el año 2 el compuesto gana sobre $33,600, no sobre $30,000. Diferencia: **$432**.' },
        ],
      },
      {
        sim: {
          title: '$10,000 con tasas de ejemplo',
          inputs: [
            { key: 'i', label: 'Tasa de ejemplo (% anual)', min: 4, max: 16, step: 2, value: 8 },
            { key: 'n', label: 'Años', min: 1, max: 20, step: 1, value: 5 },
          ],
          outputs: [
            { label: 'Con interés simple', calc: (x) => Math.round(10000 * (1 + (x.i / 100) * x.n)) },
            { label: 'Diferencia a favor del compuesto', calc: (x) => Math.round(10000 * (1 + x.i / 100) ** x.n - 10000 * (1 + (x.i / 100) * x.n)) },
            { label: 'Con interés compuesto', calc: (x) => Math.round(10000 * (1 + x.i / 100) ** x.n), main: true },
          ],
          goal: {
            text: 'Haz que los $10,000 se **dupliquen** (lleguen a $20,000 o más) con interés compuesto.',
            check: (x) => 10000 * (1 + x.i / 100) ** x.n >= 20000,
            done: 'Con más tasa o más años, el compuesto crece cada vez más rápido. Son tasas de ejemplo, no rendimientos garantizados.',
          },
        },
      },
      { text: 'Ojo con el anuncio: **12 % anual capitalizable mensualmente** cobra 1 % cada mes. La **tasa efectiva** (lo que de verdad pagas o ganas en el año) es (1.01)¹² − 1 ≈ **12.68 %**.' },
      {
        ask: 'Un crédito anuncia **18 % anual capitalizable mensualmente** (ejemplo). ¿Cómo es su tasa efectiva anual?',
        options: [
          { text: 'Exactamente 18 %', reply: 'Al capitalizar cada mes, el interés gana interés: la efectiva es **mayor que 18 %**.' },
          { text: 'Mayor que 18 %', ok: true, reply: '¡Sí! Cuando se capitaliza más de una vez al año, la efectiva supera a la nominal.' },
          { text: '1.5 %', reply: 'Eso es lo que cobra **cada mes** (18 ÷ 12). En el año, la efectiva es **mayor que 18 %**.' },
        ],
      },
      { tip: 'Para comparar productos, en México los bancos informan indicadores anuales: el **CAT** en créditos y la **GAT** en ahorros.' },
    ],
  ],
}
