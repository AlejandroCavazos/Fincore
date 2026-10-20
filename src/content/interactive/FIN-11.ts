import type { InteractiveLesson } from './types'

export const intFIN11: InteractiveLesson = {
  lessonId: 'FIN-11',
  sections: [
    // ¿Cuánto cuesta el dinero?
    [
      { text: 'Daniela entra como analista junior a una cadena de ferreterías 🔨. Su jefa le pide: "Averigua cuánto nos **cuesta** el dinero con que trabajamos".' },
      {
        ask: 'El dinero que pusieron los dueños, ¿le cuesta algo a la empresa?',
        options: [
          { text: 'Sí: los dueños esperan un rendimiento', ok: true, reply: '¡Exacto! Ningún dinero es gratis: el banco cobra intereses y los dueños esperan ganar.' },
          { text: 'No, porque es de ellos mismos', reply: 'Los dueños pudieron invertir en otra cosa, así que **esperan un rendimiento**. Ese dinero también cuesta.' },
          { text: 'Solo cuesta el dinero del banco', reply: 'El banco cobra intereses, pero los dueños también **esperan un rendimiento**. Los dos cuestan.' },
        ],
      },
      { text: 'La empresa se financia con dos tipos de dinero:\n🏦 **Acreedores** (bancos, tenedores de bonos): prestan y cobran intereses.\n👥 **Accionistas** (dueños): ponen capital y esperan un rendimiento.' },
      {
        sort: {
          title: '¿Acreedor o accionista?',
          buckets: ['🏦 Acreedor', '👥 Accionista'],
          items: [
            { text: 'El banco que dio un crédito', bucket: 0, why: 'Presta y cobra intereses.' },
            { text: 'El fundador de la cadena', bucket: 1, why: 'Es dueño: puso capital y espera rendimiento.' },
            { text: 'Quien compró bonos de la empresa', bucket: 0, why: 'Le prestó a la empresa a cambio de intereses.' },
            { text: 'Una socia que compró acciones nuevas', bucket: 1, why: 'Ahora es dueña de una parte: es accionista.' },
          ],
        },
      },
      { text: 'Como hay una mezcla, se saca un **promedio ponderado**: cada costo pesa según su proporción. Es como tu calificación final cuando el examen vale 60% y las tareas 40%.' },
      {
        calc: {
          question: 'Daniela sacó 9 en el examen (vale 60%) y 6 en tareas (valen 40%). ¿Cuál es su calificación final?',
          answer: 7.8,
          unit: 'puntos',
          hint: '0.60 × 9 + 0.40 × 6.',
          why: '0.60 × 9 = 5.4 y 0.40 × 6 = 2.4. Suma: **7.8**. No es 7.5 (el promedio simple), porque el examen pesa más.',
        },
      },
      { text: 'Ese promedio del costo del dinero es el **WACC** (siglas en inglés; en español, **CPPC**: costo promedio ponderado de capital). Es la tasa **mínima** que debe rendir un proyecto de riesgo parecido al de la empresa.' },
      {
        ask: 'El WACC de la ferretería es 12% y un proyecto rinde 10%. ¿Alcanza?',
        options: [
          { text: 'No: no paga a quienes lo financian', ok: true, reply: '¡Bien! Rinde menos que lo que cuesta el dinero.' },
          { text: 'Sí, porque rinde algo', reply: 'Rinde 10%, pero el dinero cuesta 12%. **No alcanza** a pagar a bancos y dueños.' },
          { text: 'Sí, porque 10% es buena tasa', reply: 'Lo que importa es compararlo con el WACC: 10% es menos que 12%, así que **no alcanza**.' },
        ],
      },
    ],
    // ¿Cuánto cuesta cada fuente?
    [
      { text: '🏦 **Deuda (kd):** la tasa que cobra el banco. Como los intereses en general son **deducibles de impuestos**, el costo real es menor:\n**kd × (1 − t)**, donde t es la tasa de impuestos.' },
      {
        calc: {
          question: 'El crédito de la ferretería cobra 12% anual y la tasa de impuestos es 30% (de ejemplo). ¿Cuál es el costo de la deuda después de impuestos, en porcentaje?',
          answer: 8.4,
          unit: '%',
          hint: '1 − 0.30 = 0.70. Multiplica 12% × 0.70.',
          why: '12% × 0.70 = **8.4%**. No es 12% − 30%, ni 12% × 0.30 = 3.6% (eso es solo el ahorro).',
        },
      },
      { text: '👥 **Capital propio (ke):** lo que esperan los dueños no está en ningún contrato, así que se estima. Lo más usado es el **CAPM**:\n**ke = rf + β × (rm − rf)**' },
      {
        match: {
          title: 'Une cada pieza del CAPM',
          pairs: [
            ['rf', 'Lo que paga algo casi seguro, como un bono del gobierno'],
            ['rm − rf', 'Prima de riesgo: lo extra que paga el mercado de acciones'],
            ['β (beta)', 'Qué tanto se mueve la acción frente al mercado'],
            ['ke', 'Rendimiento que exigen los accionistas'],
          ],
        },
      },
      {
        calc: {
          question: 'Datos de ejemplo: rf = 6%, beta = 1.5 y prima de mercado (rm − rf) = 4%. ¿Cuál es ke, en porcentaje?',
          answer: 12,
          unit: '%',
          hint: 'Primero beta × prima: 1.5 × 4%. Luego súmale rf.',
          why: '1.5 × 4% = 6%. 6% + 6% = **12%**. Ojo: la beta multiplica **solo la prima**, no todo rm.',
        },
      },
      {
        ask: '¿Por qué el capital propio suele costar **más** que la deuda?',
        options: [
          { text: 'El accionista cobra al último y sus dividendos no son deducibles', ok: true, reply: '¡Exacto! Arriesga más (cobra después de los acreedores) y no da ahorro de impuestos.' },
          { text: 'La ley obliga a pagarle más al accionista', reply: 'No hay una ley así. Cuesta más porque el accionista **cobra al último** y sus dividendos **no son deducibles**.' },
          { text: 'Porque los bancos nunca cobran caro', reply: 'Un banco puede cobrar caro. La razón es que el accionista **cobra al último** y sus dividendos **no son deducibles**.' },
        ],
      },
      { tip: 'Solo la **deuda** lleva el (1 − t). Al capital propio no se le aplica, porque no tiene ahorro de impuestos.' },
    ],
    // ¿Cómo se junta todo?
    [
      { text: 'Daniela ya tiene los dos costos. Ahora necesita los **pesos**:\n🏦 Deuda: D ÷ (D + E)\n👥 Capital: E ÷ (D + E)\nD es la deuda y E el capital propio, a **valor de mercado** (lo que valen hoy).' },
      {
        calc: {
          question: 'La ferretería tiene deuda de $3,000,000 y capital de $7,000,000 a valor de mercado. ¿Qué porcentaje pesa la deuda?',
          answer: 30,
          unit: '%',
          hint: 'Divide la deuda entre el total: 3,000,000 ÷ 10,000,000.',
          why: '3,000,000 ÷ (3,000,000 + 7,000,000) = 0.30 = **30%**. Si divides D ÷ E (3 ÷ 7) te da 43%, y eso está mal.',
        },
      },
      {
        ask: 'En libros, el capital vale $2,000,000, pero en el mercado vale $7,000,000. ¿Cuál usa Daniela?',
        options: [
          { text: 'El de mercado: lo que vale hoy', ok: true, reply: '¡Bien! Lo ideal es usar **valores de mercado**, no en libros.' },
          { text: 'El de libros, porque está en la contabilidad', reply: 'El valor en libros puede ser muy viejo. Lo ideal es usar **valores de mercado**: lo que vale hoy.' },
          { text: 'El que dé el WACC más bajo', reply: 'No se escoge por conveniencia. Lo ideal es usar **valores de mercado**.' },
        ],
      },
      {
        order: {
          title: 'Arma el WACC paso a paso',
          steps: ['Calcula los pesos de deuda y capital', 'Calcula la deuda después de impuestos: kd × (1 − t)', 'Multiplica cada costo por su peso', 'Suma los dos resultados'],
          done: '¡Ese es el WACC!',
        },
      },
      {
        calc: {
          question: 'Deuda 30% a 8.4% (ya después de impuestos) y capital 70% a 12%. ¿Cuál es el WACC, en porcentaje?',
          answer: 10.92,
          unit: '%',
          hint: '0.30 × 8.4% + 0.70 × 12%.',
          why: '0.30 × 8.4 = 2.52. 0.70 × 12 = 8.4. Suma: **10.92%**.',
        },
      },
      {
        sim: {
          title: 'Mueve la mezcla de la ferretería (impuestos de 30%, de ejemplo)',
          inputs: [
            { key: 'w', label: 'Peso de la deuda (%)', min: 10, max: 60, step: 10, value: 30 },
            { key: 'kd', label: 'Tasa de la deuda, antes de impuestos (%)', min: 8, max: 14, step: 2, value: 12 },
            { key: 'ke', label: 'Costo del capital propio, ke (%)', min: 10, max: 16, step: 2, value: 14 },
          ],
          outputs: [
            { label: 'Deuda después de impuestos', calc: (x) => Math.round(x.kd * 0.7 * 100) / 100, unit: '%' },
            { label: 'WACC', calc: (x) => Math.round(((x.w / 100) * x.kd * 0.7 + (1 - x.w / 100) * x.ke) * 100) / 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Baja el WACC a **10% o menos**.',
            check: (x) => (x.w / 100) * x.kd * 0.7 + (1 - x.w / 100) * x.ke <= 10,
            done: 'Un dinero más barato baja el WACC. Ojo: más deuda también trae más riesgo de no poder pagar; lo verás en el siguiente tema.',
          },
        },
      },
      { tip: 'El WACC es la **tasa de descuento** para el VPN de proyectos de riesgo promedio. Si un proyecto es mucho más riesgoso, conviene usar una tasa más alta.' },
    ],
  ],
}
