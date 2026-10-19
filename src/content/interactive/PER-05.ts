import type { InteractiveLesson } from './types'

export const intPER05: InteractiveLesson = {
  lessonId: 'PER-05',
  sections: [
    // ¿Cuánto ganas de verdad?
    [
      { text: 'Lucía, de 20 años, estudia y trabaja de mesera los fines de semana ☕. Su recibo dice **$8,000**, pero a su cuenta llega menos.' },
      {
        ask: '¿Con qué cantidad debe planear sus gastos?',
        options: [
          { text: 'Con lo que de verdad le llega a la cuenta', ok: true, reply: '¡Eso! Es el dinero con el que realmente cuenta.' },
          { text: 'Con los $8,000 del recibo', reply: 'Esos son antes de descuentos. Si planea con ellos, le faltará dinero cada mes. Debe usar **lo que de verdad le llega**.' },
          { text: 'Con lo que espera ganar el próximo año', reply: 'Eso todavía no pasa. Debe planear con **lo que de verdad le llega hoy**.' },
        ],
      },
      { text: '💵 **Ingreso bruto:** lo que ganas antes de descuentos.\n👛 **Ingreso neto:** lo que recibes después de retenciones (impuestos, seguridad social).\n🧮 Neto = bruto − retenciones.' },
      {
        calc: {
          question: 'Recibo de Lucía (cifras de ejemplo): bruto **$8,000**, impuestos **$520** y seguridad social **$180**. ¿Cuál es su ingreso **neto**?',
          answer: 7300,
          hint: '8,000 − 520 − 180.',
          why: '8,000 − 520 − 180 = **$7,300**. Con esa cifra debe planear.',
        },
      },
      { text: 'Según de dónde viene, el ingreso es:\n💪 **Activo:** lo ganas con tu trabajo y tu tiempo (sueldo, propinas, honorarios, ventas).\n🌱 **Pasivo:** llega sin trabajar cada hora por él (la renta de un cuarto, los rendimientos de tus ahorros).\nY puede ser **fijo** o **variable**.' },
      {
        sort: {
          title: '¿Activo o pasivo?',
          buckets: ['Ingreso activo', 'Ingreso pasivo'],
          items: [
            { text: 'El sueldo de Lucía como mesera', bucket: 0, why: 'Depende de su trabajo y su tiempo: activo.' },
            { text: 'Sus propinas', bucket: 0, why: 'Las gana trabajando: activo.' },
            { text: 'Honorarios por diseñar el menú de una cafetería', bucket: 0, why: 'No hay patrón, pero es su trabajo: activo.' },
            { text: 'La renta que un inquilino paga por un cuarto', bucket: 1, why: 'Llega por un bien, sin trabajar cada hora: pasivo.' },
            { text: 'Los rendimientos de una cuenta de ahorro', bucket: 1, why: 'Los genera su dinero, no su tiempo: pasivo.' },
          ],
        },
      },
      {
        ask: 'Las propinas de Lucía cambian cada fin de semana. ¿Qué tipo de ingreso son?',
        options: [
          { text: 'Activo y variable', ok: true, reply: '¡Bien! Las gana trabajando y no son iguales cada vez.' },
          { text: 'Pasivo y fijo', reply: 'Las gana con su trabajo (activo) y cambian (variable): **activo y variable**.' },
          { text: 'Pasivo y variable', reply: 'Sí son variables, pero las gana trabajando: **activo y variable**.' },
        ],
      },
    ],
    // ¿Qué gasto puedes recortar?
    [
      { text: 'Lucía quiere ahorrar, pero dice que "no le sobra nada" 🤷‍♀️. Revisa sus gastos de otra forma.' },
      { text: '🧱 **Necesarios:** mantienen tu vida y tu trabajo (vivienda, comida básica, transporte, salud).\n✂️ **Discrecionales:** los eliges y puedes reducirlos sin poner en riesgo lo básico (comer fuera, ropa extra, suscripciones).' },
      {
        rush: {
          title: '¿Necesario o discrecional?',
          seconds: 30,
          labels: ['🧱 Necesario', '✂️ Discrecional'],
          items: [
            { text: 'Camión a la universidad', ans: 0 },
            { text: 'Comida a domicilio casi cada noche', ans: 1 },
            { text: 'Medicina para la gripa', ans: 0 },
            { text: 'Una tercera suscripción de videos', ans: 1 },
            { text: 'Despensa básica', ans: 0 },
            { text: 'Ropa extra de temporada', ans: 1 },
          ],
        },
      },
      {
        ask: 'Lo que Lucía gasta en despensa cambia cada mes. ¿Entonces es discrecional?',
        options: [
          { text: 'No: varía, pero es necesaria', ok: true, reply: '¡Exacto! Que un gasto cambie no lo hace discrecional. Se puede abaratar, pero no eliminar.' },
          { text: 'Sí: todo gasto que cambia es discrecional', reply: 'Variable no es lo mismo que discrecional. La despensa varía, pero **es necesaria**.' },
          { text: 'Sí, porque puede dejar de comer', reply: 'La comida básica no se elimina. Es **necesaria**, aunque cambie cada mes.' },
        ],
      },
      { text: 'El margen para ahorrar casi siempre sale de los **discrecionales**. Un necesario se puede **abaratar** (otro plan de celular, comprar en el mercado), pero no eliminar.' },
      {
        calc: {
          question: 'Lucía gasta **$1,200** al mes en comida a domicilio. Si pide **la mitad de veces** y cocina el resto, ¿cuánto deja de gastar al mes?',
          answer: 600,
          hint: 'La mitad de 1,200.',
          why: '1,200 ÷ 2 = **$600** al mes que puede ahorrar, sin dejar de comer.',
        },
      },
    ],
    // ¿Cuánto ahorrar y dónde?
    [
      { text: 'Con lo que liberó, Lucía empieza a ahorrar 🐷.\n🧮 **Ahorro** = ingreso neto − gastos.\n🧮 **Tasa de ahorro** = ahorro ÷ ingreso neto × 100.' },
      {
        calc: {
          question: 'Mes de ejemplo: Lucía tiene un neto de **$8,000** y gasta **$7,200**. ¿Cuál es su tasa de ahorro en porcentaje?',
          answer: 10,
          unit: '%',
          hint: 'Ahorro: 8,000 − 7,200. Luego ÷ 8,000 × 100.',
          why: 'Ahorro: $800. 800 ÷ 8,000 × 100 = **10%**. Se divide entre el **ingreso**, no entre los gastos.',
        },
      },
      {
        sim: {
          title: 'Las cuentas de Lucía',
          inputs: [
            { key: 'n', label: 'Ingreso neto del mes ($)', min: 6000, max: 9000, step: 500, value: 7000 },
            { key: 'g', label: 'Gastos del mes ($)', min: 5000, max: 8500, step: 250, value: 6750 },
          ],
          outputs: [
            { label: 'Ahorro', calc: (x) => x.n - x.g },
            { label: 'Tasa de ahorro', calc: (x) => Math.round(((x.n - x.g) / x.n) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Muchas guías sugieren empezar con **al menos 10%**. Llévala ahí.',
            check: (x) => (x.n - x.g) / x.n >= 0.1,
            done: 'Si no llegas a 10%, empieza con algo y sube poco a poco: empezar es mejor que no empezar.',
          },
        },
      },
      { text: '¿Dónde guardarlo?\n🫙 **Informal** (alcancía, "debajo del colchón", tandas): fácil, pero puede perderse, robarse o depender de que otros cumplan.\n🏦 **Formal:** en instituciones autorizadas y supervisadas. En los bancos, los depósitos tienen un seguro del **IPAB** hasta cierto límite.' },
      {
        sort: {
          title: '¿Formal o informal?',
          buckets: ['Ahorro formal', 'Ahorro informal'],
          items: [
            { text: 'Una cuenta de ahorro en un banco', bucket: 0, why: 'Institución autorizada y supervisada: formal.' },
            { text: 'La alcancía de su cuarto', bucket: 1, why: 'Sin protección si se pierde o la roban: informal.' },
            { text: 'Una tanda con sus compañeras', bucket: 1, why: 'Depende de que todas cumplan: informal.' },
            { text: 'Billetes debajo del colchón', bucket: 1, why: 'Fácil, pero sin ninguna protección: informal.' },
          ],
        },
      },
      {
        ask: '¿Qué ventaja tiene la cuenta del banco frente a la alcancía?',
        options: [
          { text: 'Está supervisada y sus depósitos tienen seguro del IPAB hasta cierto límite', ok: true, reply: '¡Bien! Eso la protege si algo sale mal.' },
          { text: 'El dinero se duplica solo cada año', reply: 'Nadie duplica tu dinero solo. La ventaja es la **supervisión** y el **seguro del IPAB** con límite.' },
          { text: 'Nunca cobra comisiones', reply: 'Algunas cuentas sí cobran: por eso hay que leer el contrato. La ventaja es la **supervisión** y el **seguro del IPAB**.' },
        ],
      },
      { tip: 'Ahorra **con un propósito**: una meta con monto y fecha te dice cuánto separar cada mes.' },
    ],
  ],
}
