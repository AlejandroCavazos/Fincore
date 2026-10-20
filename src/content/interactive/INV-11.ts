import type { InteractiveLesson } from './types'

export const intINV11: InteractiveLesson = {
  lessonId: 'INV-11',
  sections: [
    // ¿Precio o valor?
    [
      { text: 'Paola, de 24 años, acaba de entrar como **analista junior** 💼. Su jefa le enseña una acción que cuesta $40 y le pregunta: "¿Vale eso?"' },
      {
        ask: 'Los $40 que se pagan hoy en bolsa son…',
        options: [
          { text: 'El precio', ok: true, reply: '¡Sí! El **precio** es lo que pagas hoy. El **valor** es lo que, según tu análisis, vale la empresa. Pueden ser distintos.' },
          { text: 'El valor real de la empresa, seguro', reply: 'Eso es el **precio**: lo que pagas hoy. El valor lo estimas tú con tu análisis, y puede ser distinto.' },
          { text: 'La utilidad del año', reply: 'La utilidad es lo que ganó la empresa. Los $40 son el **precio**: lo que pagas hoy en bolsa.' },
        ],
      },
      { text: 'El **análisis fundamental** busca responder: ¿cuánto vale realmente esta empresa? Estudia su **negocio** (qué vende, a quién, qué ventaja tiene), su **administración** y sus **números** (ventas, utilidades, deudas, flujo de efectivo).' },
      {
        sort: {
          title: '¿Es un número o una característica del negocio?',
          buckets: ['Número (cuantitativo)', 'Negocio (cualitativo)'],
          items: [
            { text: 'Margen neto de los últimos cinco años', bucket: 0, why: 'Sale de los estados financieros: es un número.' },
            { text: 'Experiencia y honestidad de los directivos', bucket: 1, why: 'Es una característica de la administración.' },
            { text: 'Crecimiento anual de las ventas', bucket: 0, why: 'Es un dato numérico.' },
            { text: 'Fuerza de su marca frente a la competencia', bucket: 1, why: 'Es una ventaja del negocio, no un número.' },
            { text: 'Depende de un solo cliente', bucket: 1, why: 'Es un rasgo del negocio, y un riesgo.' },
          ],
        },
      },
      { text: 'Hay dos rutas que se complementan:\n⬇️ **De arriba hacia abajo:** empiezas por la economía, luego el sector, al final la empresa.\n⬆️ **De abajo hacia arriba:** empiezas por la empresa y sus números.\nLa materia prima son los **estados financieros**: resultados, balance y flujo de efectivo.' },
      {
        order: {
          title: 'Ordena la ruta de arriba hacia abajo',
          steps: ['La economía: crecimiento, tasas, tipo de cambio', 'El sector', 'La empresa'],
          done: '¡Así es! De lo general a lo particular.',
        },
      },
      {
        ask: 'Entonces, ¿qué busca principalmente el análisis fundamental?',
        options: [
          { text: 'Estimar cuánto vale la empresa y compararlo con su precio', ok: true, reply: '¡Exacto! Negocio y números para estimar el valor, y luego compararlo con el precio.' },
          { text: 'Predecir el precio de mañana con patrones de la gráfica', reply: 'Eso es otra cosa: el **análisis técnico**. El fundamental estima **cuánto vale** la empresa y lo compara con su precio.' },
          { text: 'Saber qué acciones están de moda en redes', reply: 'La moda no dice cuánto vale una empresa. El fundamental estima **su valor** con su negocio y sus números.' },
        ],
      },
    ],
    // ¿Cómo comparas empresas?
    [
      { text: 'Una utilidad de $1 millón es mucho para una tiendita y poco para una cadena nacional. Por eso Paola compara en **proporción**: divide un dato entre otro. Eso es una **razón financiera**.' },
      { text: 'Las razones clave:\n🔹 **UPA** = utilidad neta ÷ acciones.\n🔹 **P/U** = precio por acción ÷ UPA.\n🔹 **ROE** = utilidad neta ÷ capital contable × 100.\n🔹 **Margen neto** = utilidad neta ÷ ventas × 100.\nEl **capital contable** es lo que la empresa tiene menos lo que debe: el dinero de los dueños.' },
      {
        match: {
          title: 'Une cada razón con lo que te dice',
          pairs: [
            ['UPA', 'Cuánto ganó la empresa por cada acción'],
            ['P/U', 'Cuántos pesos pagas por cada peso de utilidad anual'],
            ['ROE', 'Cuánta utilidad genera con el dinero de los accionistas'],
            ['Margen neto', 'Cuántos centavos de cada peso vendido quedan de utilidad'],
            ['Deuda/capital', 'Qué tan endeudada está'],
          ],
        },
      },
      {
        calc: {
          question: 'Una cadena de ejemplo ganó $40,000,000 y tiene 20,000,000 de acciones. ¿Cuál es su UPA (pesos por acción)?',
          answer: 2,
          hint: 'Utilidad neta ÷ acciones: 40,000,000 ÷ 20,000,000.',
          why: '40,000,000 ÷ 20,000,000 = **$2** por acción.',
        },
      },
      {
        calc: {
          question: 'Esa acción cotiza en $30 y su UPA es $2. ¿Cuál es su P/U?',
          answer: 15,
          unit: 'veces',
          hint: 'Precio ÷ UPA: 30 ÷ 2.',
          why: '30 ÷ 2 = **15 veces**: pagas $15 por cada $1 de utilidad anual.',
        },
      },
      {
        calc: {
          question: 'Otra empresa de ejemplo ganó $10,000,000 y su capital contable es de $50,000,000. ¿Cuál es su ROE en porcentaje?',
          answer: 20,
          unit: '%',
          hint: '10,000,000 ÷ 50,000,000 × 100.',
          why: '10,000,000 ÷ 50,000,000 = 0.20; × 100 = **20 %**.',
        },
      },
      {
        ask: 'Un banco maduro tiene P/U de 10 y una empresa de tecnología que crece rápido tiene P/U de 25. ¿Basta eso para decir que el banco es mejor compra?',
        options: [
          { text: 'No: hay que comparar con empresas del mismo sector y con su historia', ok: true, reply: '¡Bien! Ninguna razón sirve sola. Un P/U de 25 puede ser normal en tecnología y caro en un banco.' },
          { text: 'Sí: el P/U más bajo siempre es mejor compra', reply: 'Son sectores distintos. Hay que comparar con empresas **del mismo sector** y con la **historia** de cada una.' },
          { text: 'Sí: la de P/U 25 seguro está cara', reply: 'Para una empresa que crece rápido, 25 puede ser normal. Compara con **su sector** y su **historia**.' },
        ],
      },
    ],
    // ¿Cuánto vale de verdad?
    [
      { text: 'Paola quiere comprar un coche usado 🚗. El vendedor dice que vale $150,000.' },
      {
        ask: '¿Por qué Paola ofrecería menos?',
        options: [
          { text: 'Para cubrir fallas que no puede ver', ok: true, reply: '¡Exacto! Si se equivoca sobre el coche, ese "colchón" la protege. En acciones se llama **margen de seguridad**.' },
          { text: 'Porque todo vale siempre la mitad', reply: 'No hay una regla así. Ofrece menos para **cubrir fallas que no ve**: su estimación puede estar mal.' },
          { text: 'Para no comprar nunca', reply: 'Sí quiere comprar, pero con un colchón por si hay **fallas que no ve**.' },
        ],
      },
      { text: 'El **valor intrínseco** es tu estimación de lo que vale una acción. Una forma sencilla, con **múltiplos**:\n**Valor estimado = UPA esperada × P/U de empresas parecidas.**\nEjemplo: P/U de 14 y UPA de $3 → 14 × 3 = $42.' },
      {
        calc: {
          question: 'Paola espera una UPA de $2 y las empresas parecidas cotizan a un P/U de 15. ¿Cuál es el valor estimado por acción?',
          answer: 30,
          hint: 'UPA esperada × P/U de referencia: 2 × 15.',
          why: '2 × 15 = **$30** por acción. Recuerda: depende de supuestos y puede fallar.',
        },
      },
      { text: '**Margen de seguridad** = (valor estimado − precio) ÷ valor estimado × 100. Comprar solo si el precio está suficientemente por debajo del valor.' },
      {
        sim: {
          title: 'Juega con el valor estimado y el precio',
          inputs: [
            { key: 'v', label: 'Valor estimado por acción', min: 40, max: 60, step: 5, value: 50 },
            { key: 'p', label: 'Precio en bolsa', min: 25, max: 50, step: 5, value: 45 },
          ],
          outputs: [
            { label: 'Diferencia', calc: (x) => x.v - x.p },
            { label: 'Margen de seguridad', calc: (x) => Math.round(((x.v - x.p) / x.v) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Consigue un margen de seguridad de **25 % o más**.',
            check: (x) => (x.v - x.p) / x.v >= 0.25,
            done: 'Entre más abajo esté el precio frente a tu valor estimado, más colchón tienes si tu análisis falla.',
          },
        },
      },
      {
        calc: {
          question: 'Paola estima que una acción vale $40 y hoy cotiza en $30. ¿Cuál es el margen de seguridad en porcentaje?',
          answer: 25,
          unit: '%',
          hint: '(40 − 30) ÷ 40 × 100.',
          why: '40 − 30 = 10. 10 ÷ 40 = 0.25; × 100 = **25 %**. Ojo: se divide entre el **valor**, no entre el precio (eso daría 33 %).',
        },
      },
      { tip: 'Todo valor estimado **depende de supuestos**. El margen de seguridad es un colchón, no una promesa de ganancia.' },
    ],
  ],
}
