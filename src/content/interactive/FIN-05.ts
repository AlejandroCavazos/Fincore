import type { InteractiveLesson } from './types'

export const intFIN05: InteractiveLesson = {
  lessonId: 'FIN-05',
  sections: [
    // ¿Alcanza para pagar pronto?
    [
      { text: 'Daniela tiene tres gimnasios 🏋️ y pide un crédito. El banco le dice: "Debes $150,000 este año. ¿Con qué los vas a pagar?".' },
      { text: 'Una **razón financiera** divide dos cifras de los estados financieros para que digan algo útil. La **liquidez** es la capacidad de pagar lo que vence pronto.' },
      { text: '🟢 **Razón circulante** = activo circulante ÷ pasivo circulante.\n• Activo circulante: efectivo, clientes, inventarios (se vuelve dinero en menos de un año).\n• Pasivo circulante: lo que se paga en menos de un año.\n🧪 **Prueba ácida** = (activo circulante − inventarios) ÷ pasivo circulante. Quita el inventario porque venderlo puede tardar.' },
      {
        calc: {
          question: 'Daniela tiene activo circulante de **$300,000** y pasivo circulante de **$150,000**. ¿Cuál es su razón circulante?',
          answer: 2,
          unit: 'veces',
          hint: '300,000 ÷ 150,000.',
          why: '300,000 ÷ 150,000 = **2**: hay $2 disponibles por cada $1 que vence.',
        },
      },
      {
        calc: {
          question: 'De ese activo circulante, **$120,000** son inventario (suplementos y ropa deportiva). ¿Cuál es su prueba ácida?',
          answer: 1.2,
          unit: 'veces',
          hint: '(300,000 − 120,000) ÷ 150,000.',
          why: '180,000 ÷ 150,000 = **1.2**. Sin contar inventario, sigue habiendo $1.20 por cada $1 que vence.',
        },
      },
      {
        sim: {
          title: 'Pasivo circulante fijo: $250,000',
          inputs: [
            { key: 'ac', label: 'Activo circulante', min: 200000, max: 600000, step: 50000, value: 300000 },
            { key: 'inv', label: 'Inventario (dentro del activo circulante)', min: 50000, max: 200000, step: 10000, value: 200000 },
          ],
          outputs: [
            { label: 'Razón circulante', calc: (x) => Math.round((x.ac / 250000) * 100) / 100, unit: 'veces' },
            { label: 'Prueba ácida', calc: (x) => Math.round(((x.ac - x.inv) / 250000) * 100) / 100, unit: 'veces', main: true },
          ],
          goal: {
            text: 'Lleva la **prueba ácida** a **1 o más**.',
            check: (x) => (x.ac - x.inv) / 250000 >= 1,
            done: 'Con 1 o más, por cada $1 que vence hay al menos $1 sin contar el inventario.',
          },
        },
      },
      {
        ask: 'Otro año, la razón circulante de Daniela es **1.5**. ¿Qué significa?',
        options: [
          { text: 'Hay $1.50 disponibles por cada $1 que vence pronto', ok: true, reply: '¡Exacto! Activo circulante ÷ pasivo circulante = 1.5.' },
          { text: 'Ganó 1.5 % en el año', reply: 'Es una razón de liquidez, no de ganancia: **$1.50 disponibles por cada $1 que vence**.' },
          { text: 'Debe 1.5 veces lo que tiene', reply: 'Al revés: tiene 1.5 veces lo que vence. **$1.50 por cada $1**.' },
        ],
      },
    ],
    // ¿Quién pagó lo que tienes?
    [
      {
        ask: 'Los gimnasios de Daniela tienen activos por **$800,000** (aparatos, local, efectivo) y deben **$320,000**. De cada $100 de activos, ¿cuántos se pagaron con deuda?',
        options: [
          { text: '$40', ok: true, reply: '¡Bien! 320,000 ÷ 800,000 = 0.40: $40 de cada $100.' },
          { text: '$32', reply: 'Hay que dividir la deuda entre los activos: 320,000 ÷ 800,000 = **$40** de cada $100.' },
          { text: '$60', reply: 'Esos $60 son lo que pusieron los dueños. Con deuda se pagaron **$40**.' },
        ],
      },
      { text: 'Eso es la **razón de endeudamiento** = pasivo total ÷ activo total = **40 %**. Los otros $60 de cada $100 son de los dueños (capital contable).' },
      { text: 'Otra forma: **pasivo total ÷ capital contable** compara acreedores contra dueños. Aquí: 320,000 ÷ 480,000 ≈ **0.67**.' },
      {
        calc: {
          question: 'Un gimnasio de la competencia tiene activo total de **$500,000** y pasivo total de **$150,000**. ¿Cuál es su endeudamiento, en porcentaje?',
          answer: 30,
          unit: '%',
          hint: '150,000 ÷ 500,000 × 100.',
          why: '150,000 ÷ 500,000 = 0.30 = **30 %**: de cada $100 de activos, $30 se pagaron con deuda.',
        },
      },
      {
        sort: {
          title: '¿Sube o baja el riesgo de Daniela?',
          buckets: ['Más riesgo', 'Menos riesgo'],
          items: [
            { text: 'Su endeudamiento pasa de 30 % a 60 %', bucket: 0, why: 'Más deuda = más pagos que cubrir aunque bajen las ventas.' },
            { text: 'Pide otro préstamo grande para un cuarto gimnasio', bucket: 0, why: 'Más deuda puede impulsar el crecimiento, pero sube el riesgo.' },
            { text: 'Un socio aporta capital nuevo en vez de pedir prestado', bucket: 1, why: 'Se financia con dinero de dueños, no con deuda.' },
            { text: 'Su endeudamiento baja de 50 % a 35 %', bucket: 1, why: 'Menos parte de la empresa pagada con deuda: menos riesgo.' },
          ],
        },
      },
      { tip: 'La deuda **no es mala en sí**: puede impulsar el crecimiento. Pero **más deuda = más riesgo**, porque los pagos se deben cubrir aunque las ventas bajen.' },
    ],
    // ¿Cuánto gana y qué tan rápido?
    [
      { text: 'Un año de Daniela (ejemplo): utilidad neta **$60,000**, ventas **$600,000**, activo total **$500,000**, capital contable **$300,000**.' },
      { text: '📊 **Margen neto** = utilidad neta ÷ ventas.\n🏢 **ROA** (rendimiento sobre activos) = utilidad neta ÷ activo total.\n👥 **ROE** (rendimiento sobre capital) = utilidad neta ÷ capital contable: lo que ganan los dueños por cada peso que invirtieron.' },
      {
        calc: {
          question: '¿Cuál es el margen neto de Daniela, en porcentaje?',
          answer: 10,
          unit: '%',
          hint: '60,000 ÷ 600,000 × 100.',
          why: '60,000 ÷ 600,000 = **10 %**: de cada peso vendido le quedan 10 centavos. El ROA sería 60,000 ÷ 500,000 = 12 %.',
        },
      },
      {
        calc: {
          question: '¿Y su ROE, en porcentaje?',
          answer: 20,
          unit: '%',
          hint: 'Utilidad neta ÷ capital contable: 60,000 ÷ 300,000 × 100.',
          why: '60,000 ÷ 300,000 = **20 %**: los dueños ganan 20 centavos por cada peso que tienen invertido.',
        },
      },
      { text: 'Las razones de **actividad** miden qué tan rápido se mueven los recursos:\n⏱️ **Días de cobro** = cuentas por cobrar ÷ ventas a crédito × 360.\n🔄 **Rotación de inventario** = costo de ventas ÷ inventario.' },
      {
        calc: {
          question: 'Empresas le deben a Daniela **$60,000** por membresías, y sus ventas a crédito del año fueron **$360,000**. Con un año de 360 días, ¿cuántos días tardan en pagarle?',
          answer: 60,
          unit: 'días',
          hint: '60,000 ÷ 360,000 × 360.',
          why: '60,000 ÷ 360,000 = 1/6. Por 360 = **60 días** en promedio.',
        },
      },
      {
        match: {
          title: 'Une cada razón con su grupo',
          pairs: [
            ['Prueba ácida', 'Liquidez'],
            ['Pasivo total ÷ activo total', 'Endeudamiento'],
            ['ROE', 'Rentabilidad'],
            ['Días de cobro', 'Actividad'],
          ],
        },
      },
      { tip: 'Una razón sola no basta: compárala con **años anteriores** y con **empresas del mismo giro**.' },
    ],
  ],
}
