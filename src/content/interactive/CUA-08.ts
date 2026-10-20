import type { InteractiveLesson } from './types'

export const intCUA08: InteractiveLesson = {
  lessonId: 'CUA-08',
  sections: [
    // ¿Qué tan brincón es un precio?
    [
      { text: 'Toño compra refacciones en dólares para su taller 🔧, así que vigila el tipo de cambio cada mañana. Hay meses en que casi no se mueve y meses en que brinca mucho.' },
      {
        ask: 'Toño lee: "volatilidad diaria de 2%". ¿Qué crees que significa?',
        options: [
          { text: 'Que en un día típico se mueve alrededor de ±2%', ok: true, reply: '¡Exacto! Dice **qué tan fuerte** se mueve, no hacia dónde.' },
          { text: 'Que mañana subirá 2%', reply: 'La volatilidad no dice hacia dónde. Dice que en un día típico se mueve alrededor de **±2%**, para arriba o para abajo.' },
          { text: 'Que mañana bajará 2%', reply: 'Tampoco dice que baje. Mide **qué tan fuerte** se mueve: alrededor de ±2% en un día típico.' },
        ],
      },
      { text: 'La **volatilidad** es la **desviación estándar** de los rendimientos: qué tanto se alejan, en promedio, de su media. Su cuadrado se llama **varianza**. La **histórica** se calcula con rendimientos pasados, por ejemplo de los últimos 60 días.' },
      {
        text: 'Para pasar de 1 día a varios: **regla de la raíz del tiempo**.\n**Volatilidad a T días = volatilidad diaria × √T**\n📅 Para un año se usan unos **252 días hábiles**: × √252 ≈ × 15.87.\n⚠️ Supone que los rendimientos de un día y otro son independientes.',
      },
      {
        calc: {
          question: 'La volatilidad diaria del tipo de cambio es **2%**. ¿Cuál es la volatilidad a **25 días**, en %?',
          answer: 10,
          unit: '%',
          hint: '√25 = 5. Multiplica 2% × 5.',
          why: '2% × √25 = 2% × 5 = **10%**. Si multiplicas por 25 te da 50%: lo que crece en proporción a los días es la **varianza**, no la volatilidad.',
        },
      },
      {
        ask: 'Para anualizar una volatilidad diaria de 1%, Toño multiplicó por 252 y le salió **252%**. ¿Qué pasó?',
        options: [
          { text: 'Debió multiplicar por √252 ≈ 15.87: unos 15.87%', ok: true, reply: '¡Bien! 1% × 15.87 ≈ **15.87%** anual. Multiplicar por 252 infla muchísimo el resultado.' },
          { text: 'Está bien así', reply: 'Un 252% sería absurdo para algo que se mueve 1% al día. Se multiplica por **√252 ≈ 15.87**.' },
          { text: 'Debió dividir entre 252', reply: 'Dividir la haría más chica que la diaria. Se multiplica por **√252 ≈ 15.87**.' },
        ],
      },
      {
        multi: {
          title: 'Marca todo lo que es cierto',
          items: [
            { text: 'La volatilidad histórica se calcula con rendimientos pasados', ok: true },
            { text: 'La volatilidad mide qué tan fuerte se mueve un precio', ok: true },
            { text: 'Una volatilidad alta indica que el precio va a subir', ok: false },
            { text: 'La raíz del tiempo supone rendimientos independientes de un día a otro', ok: true },
          ],
          why: 'La volatilidad mide **intensidad, no dirección**: alta significa movimientos fuertes, hacia arriba o hacia abajo.',
        },
      },
      { tip: 'Volatilidad = qué tan fuerte, no hacia dónde. Para más días: × **√T**, nunca × T.' },
    ],
    // ¿Por qué hay rachas agitadas?
    [
      { text: 'Toño nota un patrón: después de una semana de noticias económicas fuertes, el dólar se mueve mucho **varios días seguidos** 📰.' },
      {
        ask: 'Ayer el dólar dio un brinco grande. ¿Qué es más probable para los próximos días?',
        options: [
          { text: 'Más días con movimientos grandes, al alza o a la baja', ok: true, reply: '¡Sí! La **fuerza** de los movimientos tiene memoria, aunque la dirección no se pueda adivinar.' },
          { text: 'Que el dólar siga subiendo seguro', reply: 'La dirección es impredecible. Lo que suele repetirse es la **fuerza**: más días movidos, al alza o a la baja.' },
          { text: 'Que mañana todo esté tranquilo seguro', reply: 'Tras días agitados suelen venir **más días agitados**. La calma llega, pero poco a poco.' },
        ],
      },
      { text: 'Se llama **agrupamiento de volatilidad**: hay rachas tranquilas y rachas agitadas. Por eso la volatilidad **no es constante**.' },
      {
        text: 'El modelo **EWMA** da más peso a lo reciente:\n**Varianza de hoy = λ × varianza de ayer + (1 − λ) × rendimiento de ayer²**\n🧠 **λ (lambda):** la memoria. Cerca de 1, reacciona lento.\n📰 **1 − λ:** el peso de la noticia de ayer.',
      },
      {
        sim: {
          title: 'Ayer la volatilidad de Toño era 1%',
          inputs: [
            { key: 'l', label: 'Memoria λ (94 = 0.94)', min: 80, max: 98, step: 2, value: 94 },
            { key: 'r', label: 'Movimiento de ayer (%)', min: 0, max: 5, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'Peso de la noticia de ayer (1 − λ)', calc: (x) => 100 - x.l, unit: '%' },
            { label: 'Volatilidad de hoy', calc: (x) => Math.sqrt((x.l / 100) * 0.0001 + (1 - x.l / 100) * (x.r / 100) ** 2) * 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Haz que la volatilidad de hoy llegue a **1.5% o más**.',
            check: (x) => Math.sqrt((x.l / 100) * 0.0001 + (1 - x.l / 100) * (x.r / 100) ** 2) * 100 >= 1.5,
            done: 'Un día muy movido y un λ más bajo hacen que la estimación reaccione rápido. Con λ alto, cambia más lento.',
          },
        },
      },
      {
        ask: 'Si Toño sube λ de 0.90 a 0.97, ¿cómo reacciona su volatilidad a las noticias del día?',
        options: [
          { text: 'Más lento', ok: true, reply: '¡Exacto! λ es la memoria: más alto, más peso al pasado y solo (1 − λ) = 3% a la noticia nueva.' },
          { text: 'Más rápido', reply: 'Es al revés: λ es el peso de lo viejo. Subirlo deja menos peso a la noticia, así que reacciona **más lento**.' },
          { text: 'Igual', reply: 'Sí cambia: con λ más alto, la noticia de ayer pesa menos y la estimación reacciona **más lento**.' },
        ],
      },
      {
        rush: {
          title: '¿Qué hace la volatilidad estimada?',
          seconds: 30,
          labels: ['⬆️ Sube', '⬇️ Baja poco a poco'],
          items: [
            { text: 'Ayer el dólar brincó 3%', ans: 0 },
            { text: 'Ayer casi no se movió', ans: 1 },
            { text: 'Ayer cayó 4%', ans: 0 },
            { text: 'Varios días tranquilos seguidos', ans: 1 },
            { text: 'Una noticia fuerte movió mucho el precio', ans: 0 },
            { text: 'Ayer se movió 0%', ans: 1 },
          ],
        },
      },
      { tip: 'Un movimiento grande, **en cualquier dirección**, sube la volatilidad estimada. λ alto = mucha memoria y reacción lenta.' },
    ],
    // Volatilidad que regresa a lo normal
    [
      { text: 'Después de la tormenta, el dólar de Toño suele calmarse 🌤️. El modelo **GARCH(1,1)** es como EWMA, pero con un "resorte" que jala la volatilidad hacia un **nivel normal**.' },
      {
        text: '**Varianza de hoy = ω + α × rendimiento de ayer² + β × varianza de ayer**\n⚓ **ω (omega):** constante que ancla el nivel normal.\n📰 **α (alfa):** cuánto reacciona a la noticia de ayer.\n🧠 **β (beta):** cuánto recuerda la varianza de ayer.',
      },
      {
        order: {
          title: 'Arma la fórmula de GARCH(1,1)',
          steps: ['Varianza de hoy =', 'ω (la constante)', '+ α × rendimiento de ayer al cuadrado', '+ β × varianza de ayer'],
          done: '¡La armaste! El rendimiento va **al cuadrado**: así un movimiento a la baja también sube la varianza.',
        },
      },
      {
        match: {
          title: 'Une cada pieza con lo que mide',
          pairs: [
            ['ω', 'Ancla el nivel normal de largo plazo'],
            ['α', 'La reacción a la noticia de ayer'],
            ['β', 'La memoria de la varianza de ayer'],
            ['α + β', 'La persistencia: cuánto dura un choque'],
          ],
        },
      },
      {
        ask: 'El GARCH de Toño tiene α = 0.08 y β = 0.90, así que α + β = 0.98. ¿Qué significa?',
        options: [
          { text: 'Que las rachas agitadas tardan mucho en calmarse', ok: true, reply: '¡Sí! Una persistencia cerca de 1 hace que los choques duren. Mientras sea menor que 1, la varianza sí regresa a su nivel normal.' },
          { text: 'Que la volatilidad es de 98%', reply: 'α + β no es la volatilidad: es la **persistencia**. Cerca de 1, las rachas agitadas tardan en calmarse.' },
          { text: 'Que la volatilidad ya nunca cambia', reply: 'Sí cambia cada día. 0.98 dice que los choques **tardan mucho en disiparse**.' },
        ],
      },
      { text: 'Todo esto mira **hacia atrás**. La **volatilidad implícita** se despeja del **precio de mercado de una opción** (un contrato financiero): es la volatilidad que el mercado "cobra" hoy para el futuro.' },
      {
        sort: {
          title: '¿Mira al pasado o al futuro?',
          buckets: ['Pasado (histórica, EWMA, GARCH)', 'Futuro (implícita)'],
          items: [
            { text: 'Se calcula con los rendimientos de los últimos 60 días', bucket: 0, why: 'Usa datos que ya pasaron: es histórica.' },
            { text: 'Se despeja del precio de una opción', bucket: 1, why: 'Sale de lo que el mercado cobra hoy: implícita.' },
            { text: 'Un GARCH estimado con datos de años anteriores', bucket: 0, why: 'GARCH y EWMA se alimentan de datos pasados.' },
            { text: 'Lo que el mercado espera que se mueva de aquí en adelante', bucket: 1, why: 'Es la mirada hacia adelante: implícita.' },
          ],
        },
      },
      { tip: 'Una volatilidad implícita alta dice que el mercado espera movimientos fuertes, **hacia arriba o hacia abajo**. No garantiza que el precio suba.' },
    ],
  ],
}
