import type { InteractiveLesson } from './types'

export const intL402: InteractiveLesson = {
  lessonId: 'L4-02',
  sections: [
    // ¿Cuánto tendré después?
    [
      { text: 'Daniel tiene 22 años, estudia y junta para el enganche de una moto 🏍️. Tiene **$10,000** y un fondo de ejemplo le da **10 % anual compuesto**.' },
      {
        ask: '¿Cuánto crees que tendrá en 2 años?',
        options: [
          { text: '$12,100', ok: true, reply: '¡Bien! Año 1: 11,000. Año 2: 11,000 × 1.10 = 12,100. Los intereses también ganan intereses.' },
          { text: '$12,000', reply: 'Eso sería con interés simple. Con compuesto, el año 2 gana sobre $11,000: **$12,100**.' },
          { text: '$10,200', reply: 'El 10 % de $10,000 son $1,000 por año, no $100. Con compuesto llega a **$12,100**.' },
        ],
      },
      { text: 'Eso es el **valor futuro (VF)**: cuánto tendrás después si guardas el dinero hoy.\n**VF = VP × (1 + r)^n**\nVP es el dinero de hoy, r la tasa por periodo y n los periodos. (1 + r)^n es el **factor de capitalización**.' },
      {
        order: {
          title: 'Arma el cálculo del VF',
          steps: ['Pasa la tasa a decimal y súmale 1', 'Eleva ese número a n', 'Multiplica el resultado por el dinero de hoy (VP)'],
          done: '¡Eso! Con esos tres pasos sacas cualquier valor futuro.',
        },
      },
      {
        calc: {
          question: 'Daniel recibe **$20,000** de su beca y los deja a **5 % anual compuesto** (de ejemplo) por **2 años**. ¿Cuánto tendrá?',
          answer: 22050,
          hint: 'Factor: 1.05 × 1.05 = 1.1025. Luego 20,000 × 1.1025.',
          why: '1.05² = 1.1025. VF = 20,000 × 1.1025 = **$22,050**. Ganó $2,050 de intereses.',
        },
      },
      {
        sim: {
          title: 'Juntar $40,000 para el enganche',
          inputs: [
            { key: 'vp', label: 'Dinero de hoy', min: 5000, max: 30000, step: 5000, value: 10000 },
            { key: 'r', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 1, value: 4 },
            { key: 'n', label: 'Años', min: 1, max: 10, step: 1, value: 3 },
          ],
          outputs: [
            { label: 'Intereses ganados', calc: (x) => x.vp * (1 + x.r / 100) ** x.n - x.vp },
            { label: 'Valor futuro', calc: (x) => x.vp * (1 + x.r / 100) ** x.n, main: true },
          ],
          goal: {
            text: 'Llega a **$40,000 o más** de valor futuro.',
            check: (x) => x.vp * (1 + x.r / 100) ** x.n >= 40000,
            done: 'Más dinero inicial, más tasa o más años: los tres hacen crecer el VF. Recuerda que las tasas de ejemplo no están garantizadas.',
          },
        },
      },
      { tip: 'Error común: usar interés simple para el VF. Olvida que los intereses también ganan intereses.' },
    ],
    // ¿Cuánto vale hoy?
    [
      { text: 'La abuela de Daniel le dice: "Te doy **$48,400 dentro de 2 años**, o **$38,000 hoy**" 👵.' },
      {
        ask: 'Los $48,400 de dentro de 2 años, ¿cuánto valen **hoy**?',
        options: [
          { text: 'Menos de $48,400', ok: true, reply: '¡Exacto! Un dinero que llega después vale menos hoy.' },
          { text: 'Exactamente $48,400', reply: 'Recuerda: el dinero de hoy vale más que el de mañana. Hoy valen **menos** de $48,400.' },
          { text: 'Más de $48,400', reply: 'Al revés: por esperar, hoy valen **menos**.' },
        ],
      },
      { text: '**Descontar** es el camino de regreso del VF:\n**VP = VF ÷ (1 + r)^n**\nLa tasa se llama **tasa de descuento**: el rendimiento que tú exiges. Si la tasa sube o el plazo se alarga, el VP **baja**.' },
      {
        calc: {
          question: 'Daniel exige **10 % anual** (de ejemplo). ¿Cuánto valen hoy los $48,400 de dentro de 2 años?',
          answer: 40000,
          hint: '1.10² = 1.21. Divide 48,400 ÷ 1.21.',
          why: '48,400 ÷ 1.21 = **$40,000**. Ese es el valor presente.',
        },
      },
      {
        ask: 'Hoy le ofrecen **$38,000** y el VP de esperar es **$40,000**. ¿Qué le conviene?',
        options: [
          { text: 'Esperar los 2 años', ok: true, reply: '¡Bien! Lo que ofrecen hoy ($38,000) es menos que el VP ($40,000). Si ofrecieran más que el VP, convendría aceptar hoy.' },
          { text: 'Aceptar hoy', reply: 'Hoy ofrecen $38,000, menos que el VP de $40,000. Conviene **esperar**. Aceptarías hoy si te dieran más que el VP.' },
          { text: 'Da igual', reply: 'No da igual: hay $2,000 de diferencia en pesos de hoy. Conviene **esperar**.' },
        ],
      },
      {
        sort: {
          title: '¿El VP de un cobro futuro sube o baja?',
          buckets: ['Sube', 'Baja'],
          items: [
            { text: 'La tasa de descuento sube', bucket: 1, why: 'Divides entre un número más grande: el VP baja.' },
            { text: 'El cobro se retrasa un año más', bucket: 1, why: 'Más años, más descuento: el VP baja.' },
            { text: 'La tasa de descuento baja', bucket: 0, why: 'Divides entre un número más chico: el VP sube.' },
            { text: 'El cobro se vuelve más riesgoso', bucket: 1, why: 'Más riesgo hace exigir una tasa mayor: el VP baja.' },
            { text: 'El cobro llega antes', bucket: 0, why: 'Menos espera, menos descuento: el VP sube.' },
          ],
        },
      },
      { text: 'Si hay **varios cobros**, descuenta cada uno con **su propio año** y luego suma.' },
      {
        calc: {
          question: 'Daniel cobrará **$11,000** al final del año 1 y **$12,100** al final del año 2. Con 10 %, ¿cuánto vale todo hoy?',
          answer: 20000,
          hint: '11,000 ÷ 1.10 + 12,100 ÷ 1.21',
          why: '11,000 ÷ 1.10 = $10,000. 12,100 ÷ 1.21 = $10,000. Total = **$20,000**.',
        },
      },
    ],
    // ¿Qué tasa ganó? ¿Cuántos años?
    [
      {
        ask: 'El tío de Daniel invirtió **$10,000** y a los **2 años** tenía **$12,100**. ¿Cuánto rindió al año?',
        options: [
          { text: '10 % anual', ok: true, reply: '¡Exacto! 10,000 × 1.10 × 1.10 = 12,100.' },
          { text: '10.5 % anual', reply: 'Eso sale de dividir 21 % entre 2 años, pero ignora el interés sobre interés. Es **10 %**.' },
          { text: '21 % anual', reply: '21 % es lo que ganó en los 2 años juntos. Por año, compuesto, es **10 %**.' },
        ],
      },
      { text: 'Para despejar la tasa:\n**r = (VF ÷ VP)^(1/n) − 1**\nCon 2 años, elevar a 1/2 es sacar raíz cuadrada. Error común: dividir la ganancia total entre los años; exagera el rendimiento.' },
      {
        calc: {
          question: 'Una inversión de ejemplo pasó de **$20,000** a **$28,800** en **2 años**. ¿Cuál fue su rendimiento anual compuesto, en %?',
          answer: 20,
          unit: '%',
          hint: '28,800 ÷ 20,000 = 1.44. La raíz cuadrada de 1.44 es 1.2.',
          why: '√1.44 = 1.2. Menos 1 = 0.20 = **20 %** anual. Si divides 44 % entre 2 te da 22 %, que exagera.',
        },
      },
      { text: '¿Y cuántos años tarda en **duplicarse**? Atajo: la **regla del 72**.\n**Años ≈ 72 ÷ tasa en %**\nAl 10 %: 72 ÷ 10 = 7.2 años (el valor exacto es 7.27).' },
      {
        calc: {
          question: 'Con una tasa de ejemplo de **8 % anual**, ¿cuántos años tarda en duplicarse el dinero, aproximadamente?',
          answer: 9,
          unit: 'años',
          hint: '72 ÷ 8',
          why: '72 ÷ 8 = **9 años**, aproximadamente.',
        },
      },
      {
        match: {
          title: 'Une cada pregunta con su fórmula',
          pairs: [
            ['¿Cuánto tendré?', 'VF = VP × (1 + r)^n'],
            ['¿Cuánto vale hoy?', 'VP = VF ÷ (1 + r)^n'],
            ['¿Qué tasa ganó?', 'r = (VF ÷ VP)^(1/n) − 1'],
            ['¿En cuántos años se duplica?', 'Aprox. 72 ÷ tasa en %'],
          ],
        },
      },
      { tip: 'Para el plazo exacto se usan logaritmos: n = ln(VF ÷ VP) ÷ ln(1 + r). La regla del 72 es solo un atajo para duplicar.' },
    ],
  ],
}
