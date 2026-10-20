import type { InteractiveLesson } from './types'

export const intCUA01: InteractiveLesson = {
  lessonId: 'CUA-01',
  sections: [
    // ¿Cuánto creció tu dinero?
    [
      { text: 'Valeria estudia actuaría y sigue una acción **de ejemplo** 📈. Ayer valía $100 y hoy vale $110.' },
      {
        ask: '¿Cuál es su rendimiento simple del día?',
        options: [
          { text: '10 %', ok: true, reply: '¡Eso! Ganó $10 sobre $100: 10 / 100 = **10 %**.' },
          { text: '$10', reply: 'Esa es la ganancia en pesos. El rendimiento es **en proporción** a lo que pusiste: 10 / 100 = **10 %**.' },
          { text: '110 %', reply: 'Eso es el precio nuevo entre el viejo (1.10). El cambio es solo la parte que creció: **10 %**.' },
        ],
      },
      {
        text: '**Rendimiento simple** = (precio nuevo − precio viejo) / precio viejo.\nLos modelos usan también el **logarítmico**: ln(110 / 100) ≈ **9.53 %**. Casi igual, un poco menor.',
      },
      {
        calc: {
          question: 'Otra acción de ejemplo pasa de $200 a $210. ¿Cuál es su rendimiento simple, en porcentaje?',
          answer: 5,
          unit: '%',
          hint: '(210 − 200) / 200, y luego por 100.',
          why: '10 / 200 = 0.05, o sea **5 %**.',
        },
      },
      {
        ask: 'La acción sube 20 % un día y baja 20 % al siguiente. ¿Regresa a su precio?',
        options: [
          { text: 'Sí, queda igual', reply: 'Parece, pero no: $100 → $120 → $96. La bajada de 20 % es sobre $120, un número más grande. Queda **4 % abajo**.' },
          { text: 'No, queda 4 % abajo', ok: true, reply: '¡Bien! 1.20 × 0.80 = 0.96: pierde **4 %**. Los rendimientos simples se **multiplican**, no se suman.' },
          { text: 'No, queda arriba', reply: 'Queda abajo: $100 → $120 → $96. Pierde **4 %**.' },
        ],
      },
      {
        text: 'Por eso los simples se combinan **multiplicando**: (1 + R1)(1 + R2) − 1.\nLos logarítmicos **se suman**: el de la semana es la suma de los cinco días. Por eso los modelos los prefieren.',
      },
      {
        rush: {
          title: '¿Simple o logarítmico?',
          seconds: 30,
          labels: ['Simple', 'Logarítmico'],
          items: [
            { text: 'Se combina multiplicando (1 + R)', ans: 0 },
            { text: 'El de varios días es la suma de los diarios', ans: 1 },
            { text: 'El fácil de explicar en un reporte', ans: 0 },
            { text: 'Se calcula con ln(P1 / P0)', ans: 1 },
            { text: 'Nunca baja de −100 %', ans: 0 },
            { text: 'Puede ir de menos infinito a más infinito', ans: 1 },
          ],
        },
      },
      { tip: '**Simple:** fácil de explicar, se multiplica. **Log:** se suma en el tiempo, cómodo para modelos. Con movimientos pequeños (±1 %) casi coinciden.' },
    ],
    // Intereses que crecen sin parar
    [
      { text: 'Valeria mete $10,000 a una tasa **de ejemplo** de 8 % anual. El banco puede sumar los intereses cada año, cada mes, cada día… ¿y si lo hace **todo el tiempo**?' },
      {
        ask: '¿Qué crees que pasa si capitaliza cada vez más seguido?',
        options: [
          { text: 'Crece un poco más, pero hasta un tope', ok: true, reply: '¡Exacto! Cada vez da un poquito más, y en el límite llegas a la **capitalización continua**.' },
          { text: 'Crece sin límite', reply: 'Crece un poco más, pero se acerca a un tope: la **capitalización continua**.' },
          { text: 'Da exactamente lo mismo', reply: 'No da lo mismo: si los intereses se suman antes, empiezan antes a ganar intereses. Da **un poco más**, hasta un tope.' },
        ],
      },
      {
        text: '**Capitalizar** = sumar los intereses al capital para que también ganen intereses.\n📈 **e^x** (e ≈ 2.71828): algo que crece en proporción a su tamaño.\n🔁 **ln(x)**: lo inverso. Responde "¿a qué potencia elevo e para llegar a x?".\n♾️ Continua: **M = C × e^(i·t)**.',
      },
      {
        sim: {
          title: 'Valeria compara anual contra continua con $10,000',
          inputs: [
            { key: 'i', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 2, value: 8 },
            { key: 't', label: 'Años', min: 1, max: 10, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'Con capitalización anual', calc: (x) => 10000 * (1 + x.i / 100) ** x.t },
            { label: 'Con capitalización continua', calc: (x) => 10000 * Math.exp((x.i / 100) * x.t) },
            { label: 'Diferencia a favor de la continua', calc: (x) => 10000 * Math.exp((x.i / 100) * x.t) - 10000 * (1 + x.i / 100) ** x.t, main: true },
          ],
          goal: {
            text: 'Haz que la continua le gane a la anual por **$500 o más**.',
            check: (x) => 10000 * Math.exp((x.i / 100) * x.t) - 10000 * (1 + x.i / 100) ** x.t >= 500,
            done: 'La continua siempre da un poco más, y la brecha crece con la tasa y el tiempo. Las tasas son de ejemplo.',
          },
        },
      },
      {
        match: {
          title: 'Une cada idea con lo que significa',
          pairs: [
            ['ln(a × b)', 'ln a + ln b (por eso los log se suman)'],
            ['ln(a^n)', 'n × ln a (sirve para despejar el tiempo)'],
            ['e^x', 'Crece en proporción a su tamaño'],
            ['ln(x)', 'La operación inversa de e^x'],
          ],
        },
      },
      { tip: 'Ejemplo: $10,000 al 8 % por 2 años dan **$11,735.11** con capitalización continua y $11,664 con anual. Es la convención de muchos modelos, como la valuación de opciones.' },
    ],
    // Sumar muchos términos rápido
    [
      { text: 'En su libro, Valeria ve un símbolo raro: **Σ**. Tranquila: solo significa "suma todos estos términos".' },
      {
        calc: {
          question: 'Si x1 = 2, x2 = 5 y x3 = 3, ¿cuánto vale Σ x_k (de k = 1 a 3)?',
          answer: 10,
          unit: 'unidades',
          hint: 'Solo suma: x1 + x2 + x3.',
          why: '2 + 5 + 3 = **10**. La verás en promedios, varianzas y valores presentes.',
        },
      },
      {
        text: 'Una **serie geométrica** multiplica cada término por la misma **razón r**: a + a·r + a·r² + …\nEjemplo: 1 + 2 + 4 + 8 tiene a = 1, r = 2 y n = 4 términos. Los factores de descuento 1/(1+i), 1/(1+i)², … forman una así.',
      },
      {
        ask: 'En 100 + 50 + 25 + 12.5, ¿cuál es la razón r?',
        options: [
          { text: '0.5', ok: true, reply: '¡Sí! Cada término es la mitad del anterior: 50 / 100 = **0.5**.' },
          { text: '50', reply: 'Esa es la diferencia entre los dos primeros. Aquí se **multiplica**, no se resta: 50 / 100 = **0.5**.' },
          { text: '2', reply: 'Al revés: cada término es la **mitad** del anterior, así que r = **0.5**.' },
        ],
      },
      { text: 'En vez de sumar uno por uno, usa la fórmula cerrada: **S = a × (1 − r^n) / (1 − r)**.' },
      {
        order: {
          title: 'Arma la fórmula de la serie geométrica',
          steps: ['S =', 'a (primer término)', '× (1 − r^n)', '/ (1 − r)'],
          done: '¡La armaste tú! a es el primer término, r la razón y n el número de términos.',
        },
      },
      {
        calc: {
          question: 'Usa la fórmula con 1 + 2 + 4 + 8 (a = 1, r = 2, n = 4). ¿Cuánto da S?',
          answer: 15,
          unit: 'unidades',
          hint: '1 × (1 − 2⁴) / (1 − 2) = (1 − 16) / (−1).',
          why: '−15 / −1 = **15**. Compruébalo sumando: 1 + 2 + 4 + 8 = 15.',
        },
      },
      {
        ask: 'Si sumas 1 + 0.5 + 0.25 + … para siempre, ¿a qué te acercas?',
        options: [
          { text: 'A 2', ok: true, reply: '¡Exacto! Si |r| < 1, la suma se acerca a a / (1 − r) = 1 / 0.5 = **2**.' },
          { text: 'A infinito', reply: 'Como r < 1, cada término es más chico y la suma se frena: se acerca a a / (1 − r) = **2**.' },
          { text: 'A 1.5', reply: 'Con solo tres términos ya llevas 1.75. La suma se acerca a a / (1 − r) = **2**.' },
        ],
      },
    ],
  ],
}
