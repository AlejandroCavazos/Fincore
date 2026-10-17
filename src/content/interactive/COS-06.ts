import type { InteractiveLesson } from './types'

export const intCOS06: InteractiveLesson = {
  lessonId: 'COS-06',
  sections: [
    // ¿Cuánto debería costar?
    [
      { text: 'Doña Mari hace **barras de chocolate** 🍫. Su receta dice: "0.2 kg de cacao a $100 el kilo". Eso es lo que **debería** costar cada barra.' },
      {
        ask: 'Lo que un producto **debería** costar si todo sale como se planeó, ¿cuándo se fija?',
        options: [
          { text: 'Antes de producir', ok: true, reply: '¡Eso! Se fija antes, con estudios, experiencia y precios esperados. Se llama **costo estándar**.' },
          { text: 'Después de vender', reply: 'Entonces ya no serviría para comparar. El **costo estándar** se fija **antes** de producir.' },
          { text: 'Nunca, se adivina', reply: 'No se adivina: se fija **antes** de producir, con estudios, experiencia y precios esperados.' },
        ],
      },
      { text: 'Cada estándar tiene dos partes:\n⚖️ **Cantidad:** cuánto material u horas lleva una pieza.\n💲 **Precio:** cuánto cuesta cada kilo u hora.\nTodo junto forma la **hoja de costo estándar**.' },
      {
        calc: {
          question: 'Una barra lleva **0.2 kg** de cacao a **$100** el kilo y **0.05 horas** de trabajo a **$120** la hora. ¿Cuál es su **costo estándar**?',
          answer: 26,
          hint: 'Cantidad × precio en cada parte, y suma.',
          why: 'Cacao: 0.2 × 100 = 20. Trabajo: 0.05 × 120 = 6. Estándar = **$26 por barra**.',
        },
      },
      {
        sort: {
          title: '¿Estándar ideal o alcanzable?',
          buckets: ['Ideal (perfección)', 'Alcanzable (realista)'],
          items: [
            { text: 'Cero desperdicio y máquinas que nunca paran', bucket: 0, why: 'Eso es perfección: casi imposible.' },
            { text: 'Considera un poco de merma normal y descansos', bucket: 1, why: 'Es exigente, pero el equipo sí lo cumple.' },
            { text: 'Nadie se equivoca nunca', bucket: 0, why: 'Suena bonito, pero no es realista.' },
            { text: 'Exigente, pero se logra si se trabaja bien', bucket: 1, why: 'Eso es alcanzable, y motiva más.' },
          ],
        },
      },
      {
        ask: 'El estándar de la barra es **$26** y en realidad costó **$24**. ¿Cómo es la **variación**?',
        options: [
          { text: 'Favorable (F)', ok: true, reply: '¡Exacto! Gastaste **menos** de lo que debías: es favorable.' },
          { text: 'Desfavorable (D)', reply: 'Desfavorable sería gastar **más** que el estándar. Aquí gastaste menos: es **favorable**.' },
          { text: 'No hay variación', reply: 'Sí la hay: $2 de diferencia. Como gastaste menos, es **favorable**.' },
        ],
      },
      { tip: '**Variación** = real contra estándar. Gastaste **menos** → **F**. Gastaste **más** → **D**.' },
    ],
    // ¿Compraste caro o usaste de más?
    [
      { text: 'Mari hizo 1,000 barras. Se permitían **200 kg** de cacao a **$100**. La variación de material se parte en dos:\n💲 **Precio:** ¿compró caro o barato?\n⚖️ **Cantidad:** ¿usó más o menos de lo permitido?' },
      {
        order: {
          title: 'Arma la fórmula de la variación en precio',
          steps: ['(Precio real', '− Precio estándar)', '× Cantidad real'],
          done: 'Variación en precio = (precio real − precio estándar) × cantidad **real**.',
        },
      },
      { text: '📏 Variación en cantidad = (cantidad real − cantidad **permitida**) × precio estándar.\n➕ Si sale positiva es **D**; si sale negativa es **F**.' },
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
            done: 'Compra más barato que el estándar y usa menos de lo permitido: las dos salen F.',
          },
        },
      },
      {
        calc: {
          question: 'Ahora bombones: el estándar es **0.3 kg** de chocolate por caja. Mari hizo **2,000 cajas**. ¿Cuál es la **cantidad estándar permitida**, en kilos?',
          answer: 600, unit: 'kg',
          hint: 'Estándar por pieza × piezas realmente producidas.',
          why: '0.3 × 2,000 = **600 kg**. Es lo que debió usar para lo que de verdad produjo.',
        },
      },
      {
        calc: {
          question: 'El kilo estándar cuesta **$40** y usó **650 kg**. ¿De cuánto es la **variación en cantidad**?',
          answer: 2000,
          hint: '(cantidad real − permitida) × precio estándar.',
          why: '(650 − 600) × 40 = **$2,000 D**. Sale positiva: hubo desperdicio.',
        },
      },
      {
        ask: 'Esos 650 kg los compró a **$38** el kilo (estándar $40). ¿Cuál es la **variación en precio**?',
        options: [
          { text: '$1,300 F', ok: true, reply: '¡Bien! (38 − 40) × 650 = −1,300 → **$1,300 F**: compró más barato.' },
          { text: '$1,200 F', reply: 'Casi: se multiplica por la cantidad **real** (650), no por la permitida (600). Es **$1,300 F**.' },
          { text: '$1,300 D', reply: 'Sale negativa: compró más barato que el estándar. Eso es **favorable**: $1,300 F.' },
        ],
      },
      { tip: 'Precio → por la cantidad **real**. Cantidad → por el precio **estándar**. Positivo = **D**, negativo = **F**.' },
    ],
    // ¿Horas caras u horas de más?
    [
      { text: 'Con la mano de obra es igual, solo cambian los nombres 👷:\n💲 **Tarifa:** ¿pagaste la hora más cara o más barata?\n⏱️ **Eficiencia:** ¿usaste más o menos horas de las permitidas?' },
      { text: 'En la chocolatería el estándar es **0.25 h** por caja a **$100** la hora. Hicieron **1,600 cajas** en **380 horas**, pagadas a **$110**.' },
      {
        calc: {
          question: '¿De cuánto es la **variación en tarifa**?',
          answer: 3800,
          hint: '(tarifa real − tarifa estándar) × horas reales.',
          why: '(110 − 100) × 380 = **$3,800 D**. Se pagó más cara la hora.',
        },
      },
      {
        calc: {
          question: 'Se permitían 0.25 × 1,600 = 400 horas. ¿De cuánto es la **variación en eficiencia** (sin signo)?',
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
            { text: 'Compró el cacao a $95; el estándar es $100', ans: 0 },
            { text: 'Usó 520 kg y se permitían 500', ans: 1 },
            { text: 'Pagó la hora a $130; el estándar es $120', ans: 1 },
            { text: 'Trabajaron 380 h y se permitían 400', ans: 0 },
            { text: 'El proveedor subió el precio por encima del estándar', ans: 1 },
            { text: 'La fórmula dio −$900', ans: 0 },
          ],
        },
      },
      {
        multi: {
          title: 'Compras consiguió cacao más barato, pero de mala calidad. ¿Qué puede pasar? Marca todas.',
          items: [
            { text: 'Variación en precio favorable', ok: true },
            { text: 'Variación en cantidad desfavorable (más desperdicio)', ok: true },
            { text: 'Que el ahorro en precio se coma con el desperdicio', ok: true },
            { text: 'Las variaciones nunca se conectan entre sí', ok: false },
          ],
          why: 'Las variaciones **se conectan**: comprar barato (precio F) puede traer más desperdicio (cantidad D). Por eso se revisan juntas.',
        },
      },
      { tip: 'Tarifa → por las horas **reales**. Eficiencia → por la tarifa **estándar**. Antes de culpar a alguien, mira cómo se conectan.' },
    ],
  ],
}
