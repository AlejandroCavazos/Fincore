import type { InteractiveLesson } from './types'

export const intCOS06: InteractiveLesson = {
  lessonId: 'COS-06',
  sections: [
    // ¿Qué es un costo estándar?
    [
      { text: 'Un **costo estándar** es lo que un producto **debería** costar si todo sale como se planeó. Es como la receta de la abuela: cantidades y precios exactos, fijados **antes** de producir.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Cantidad estándar', 'Cuánto material u horas debería llevar una unidad'],
            ['Precio estándar', 'Cuánto debería costar cada kilo u hora'],
            ['Hoja de costo estándar', 'Todo el estándar del producto junto, en una sola hoja'],
            ['Variación', 'La diferencia entre lo real y el estándar'],
          ],
        },
      },
      { text: 'La cafetería de **Grupo Tacos Felices** ☕ también vende tamales. Arma su estándar:' },
      {
        calc: {
          question: 'Un tamal lleva **0.1 kg** de masa a **$30** el kilo y **0.05 horas** de trabajo a **$100** la hora. ¿Cuál es su **costo estándar** por tamal?',
          answer: 8,
          hint: 'multiplica cantidad × precio en cada elemento y suma.',
          why: 'Masa: 0.1 × 30 = 3. Mano de obra: 0.05 × 100 = 5. Estándar = 3 + 5 = **$8 por tamal**.',
        },
      },
      {
        sort: {
          title: '¿Estándar ideal o alcanzable?',
          buckets: ['Ideal (perfección)', 'Alcanzable (realista)'],
          items: [
            { text: 'Cero desperdicio y máquinas que nunca se paran', bucket: 0, why: 'Eso es perfección: casi imposible de lograr.' },
            { text: 'Considera un poco de merma normal y los descansos', bucket: 1, why: 'Es exigente, pero el equipo sí lo puede cumplir.' },
            { text: 'Nadie se equivoca nunca', bucket: 0, why: 'Suena bonito, pero no es realista: es un estándar ideal.' },
            { text: 'Exigente, pero el equipo lo logra si trabaja bien', bucket: 1, why: 'Justo eso es un estándar alcanzable, y motiva más.' },
          ],
        },
      },
      {
        ask: 'El estándar de una barra de chocolate es **$20** y en realidad costó **$18**. ¿Cómo es la variación?',
        options: [
          { text: 'Favorable (F)', ok: true, reply: '¡Exacto! Gastaste **menos** de lo que debías: es favorable.' },
          { text: 'Desfavorable (D)', reply: 'Desfavorable sería gastar **más** que el estándar. Aquí gastaste menos.' },
        ],
      },
      { tip: 'Gastaste **menos** que el estándar → **F**. Gastaste **más** → **D**. Y así revisas solo las variaciones grandes: **administración por excepción**.' },
    ],
    // Variaciones de materia prima
    [
      { text: 'La variación de materiales se parte en dos: **precio** (¿compraste caro o barato?) y **cantidad** (¿usaste más o menos de lo permitido?).' },
      { text: 'Haces 1,000 barras de chocolate 🍫. El estándar permite **200 kg** de cacao a **$100** el kilo. Mueve lo real:' },
      {
        sim: {
          title: 'Variaciones del cacao',
          inputs: [
            { key: 'p', label: 'Precio real por kilo', min: 85, max: 115, step: 1, value: 105 },
            { key: 'q', label: 'Kilos realmente usados', min: 180, max: 230, step: 5, value: 210 },
          ],
          outputs: [
            { label: 'Variación en precio (+ es D, − es F)', calc: (x) => (x.p - 100) * x.q },
            { label: 'Variación en cantidad (+ es D, − es F)', calc: (x) => (x.q - 200) * 100 },
            { label: 'Variación total', calc: (x) => (x.p - 100) * x.q + (x.q - 200) * 100, main: true },
          ],
          goal: {
            text: 'Logra que **las dos** variaciones salgan **favorables** (números negativos).',
            check: (x) => x.p < 100 && x.q < 200,
            done: 'Precio: (real − estándar) × cantidad **real**. Cantidad: (real − permitida) × precio **estándar**. Negativo = favorable.',
          },
        },
      },
      { text: 'Ahora una mermelada 🍓: el estándar es **0.3 kg** de fruta por frasco a **$40** el kilo.' },
      {
        calc: {
          question: 'Se hicieron **2,000 frascos**. ¿Cuál es la **cantidad estándar permitida** de fruta, en kilos?',
          answer: 600, unit: 'kg',
          hint: 'estándar por unidad × unidades realmente producidas.',
          why: '0.3 × 2,000 = **600 kg**. Es lo que debiste usar para lo que de verdad produjiste.',
        },
      },
      {
        calc: {
          question: 'Se usaron **650 kg** de fruta. ¿De cuánto es la **variación en cantidad**, en pesos?',
          answer: 2000,
          hint: '(cantidad real − permitida) × precio estándar.',
          why: '(650 − 600) × 40 = 50 × 40 = **$2,000 D**. Sale positiva: hubo desperdicio.',
        },
      },
      {
        ask: 'Esos 650 kg se compraron a **$38** el kilo (estándar $40). ¿Cuál es la **variación en precio**?',
        options: [
          { text: '$1,200 F, porque (38 − 40) × 600', reply: 'Casi: en la variación en precio se multiplica por la cantidad **real** (650), no por la permitida.' },
          { text: '$1,300 F, porque (38 − 40) × 650', ok: true, reply: '¡Bien! (38 − 40) × 650 = −1,300 → **$1,300 F**: compraste más barato.' },
          { text: '$1,300 D, porque compraste 650 kg', reply: 'El signo sale negativo: compraste más barato que el estándar. Eso es **favorable**.' },
        ],
      },
      { tip: 'Precio → por la cantidad **real**. Cantidad → por el precio **estándar**. Positivo = **D**, negativo = **F**.' },
    ],
    // Variaciones de mano de obra y su interpretación
    [
      { text: 'Con la mano de obra es igual, solo cambian los nombres: **tarifa** (lo que pagaste por hora) y **eficiencia** (cuántas horas usaste).' },
      { text: 'En el taller de Grupo Tacos Felices 🔧 el estándar es **0.25 h** por pieza a **$100** la hora. Hicieron **1,600 piezas** en **380 horas**, pagadas a **$110**.' },
      {
        calc: {
          question: '¿De cuánto es la **variación en tarifa**, en pesos?',
          answer: 3800,
          hint: '(tarifa real − tarifa estándar) × horas reales.',
          why: '(110 − 100) × 380 = **$3,800 D**. Se pagó más caro por hora.',
        },
      },
      {
        calc: {
          question: 'Se permitían 0.25 × 1,600 = 400 horas. ¿De cuánto es la **variación en eficiencia**, en pesos (sin signo)?',
          answer: 2000,
          hint: '(horas reales − horas permitidas) × tarifa estándar.',
          why: '(380 − 400) × 100 = −2,000 → **$2,000 F**. Trabajaron más rápido de lo esperado.',
        },
      },
      {
        match: {
          title: '¿Quién suele ser el responsable?',
          pairs: [
            ['Precio de materiales', 'Compras'],
            ['Cantidad de materiales', 'Producción (desperdicio)'],
            ['Eficiencia de mano de obra', 'Producción (horas de más o de menos)'],
            ['Tarifa de mano de obra', 'Recursos humanos o quien asigna personal'],
          ],
        },
      },
      {
        rush: {
          title: '¿Favorable o desfavorable?',
          seconds: 40,
          labels: ['Favorable (F)', 'Desfavorable (D)'],
          items: [
            { text: 'Compraste la harina a $18; el estándar es $20', ans: 0 },
            { text: 'Usaste 520 kg y se permitían 500', ans: 1 },
            { text: 'Pagaste la hora a $130; el estándar es $120', ans: 1 },
            { text: 'Trabajaron 380 h y se permitían 400', ans: 0 },
            { text: 'La fórmula dio +$1,500', ans: 1 },
            { text: 'La fórmula dio −$900', ans: 0 },
          ],
        },
      },
      {
        multi: {
          title: 'Compras consiguió cacao más barato, pero venía de mala calidad. ¿Qué puede pasar? Marca todas.',
          items: [
            { text: 'Variación en precio favorable', ok: true },
            { text: 'Variación en cantidad desfavorable (más desperdicio)', ok: true },
            { text: 'Que el ahorro en precio se coma con el desperdicio', ok: true },
            { text: 'Las variaciones nunca se conectan entre sí', ok: false },
          ],
          why: 'Las variaciones **se conectan**: comprar barato (precio F) puede traer más desperdicio (cantidad D). Por eso se revisan juntas.',
        },
      },
      { tip: 'Tarifa → por las horas **reales**. Eficiencia → por la tarifa **estándar**. Antes de culpar a alguien, mira cómo se conectan las variaciones.' },
    ],
  ],
}
