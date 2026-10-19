import type { InteractiveLesson } from './types'

export const intPER11: InteractiveLesson = {
  lessonId: 'PER-11',
  sections: [
    // ¿Esto es una emergencia?
    [
      { text: 'Luis tiene 26 años y es fotógrafo de bodas 📷. Trabaja por su cuenta. En plena temporada, **se le descompone la cámara** con la que trabaja.' },
      {
        ask: 'Si Luis no tiene dinero apartado, ¿qué suele pasar?',
        options: [
          { text: 'La paga con tarjeta y carga intereses por meses', ok: true, reply: 'Así es. Por eso existe el **fondo de emergencia**: para no endeudarte cuando llega el golpe.' },
          { text: 'Nada, siempre aparece el dinero', reply: 'Ojalá. Sin dinero apartado, lo común es **endeudarse** y pagar intereses.' },
          { text: 'Espera a que se arregle sola', reply: 'Sin cámara no trabaja. Sin dinero apartado, suele **endeudarse** para repararla.' },
        ],
      },
      { text: 'Un **fondo de emergencia** es dinero apartado **solo** para imprevistos importantes. No es el ahorro para **metas** (vacaciones, un celular): esas se planean.' },
      {
        rush: {
          title: '¿Emergencia o no?',
          seconds: 30,
          labels: ['🚨 Emergencia', '🎉 No es emergencia'],
          items: [
            { text: 'Te quedas sin trabajo', ans: 0 },
            { text: 'Una oferta del Buen Fin', ans: 1 },
            { text: 'Un gasto médico urgente', ans: 0 },
            { text: 'Boletos para un concierto', ans: 1 },
            { text: 'Reparar el auto que usas para trabajar', ans: 0 },
            { text: 'Las vacaciones que planeaste desde enero', ans: 1 },
            { text: 'Un regalo de cumpleaños', ans: 1 },
          ],
        },
      },
      {
        ask: 'Luis usó $8,000 del fondo para la cámara. ¿Qué sigue?',
        options: [
          { text: 'Reponer lo que usó', ok: true, reply: '¡Eso! Si lo usas, tu prioridad es **reponerlo** para el siguiente golpe.' },
          { text: 'Nada, ya cumplió su función', reply: 'Cumplió, pero quedó más chico. La prioridad es **reponerlo**.' },
          { text: 'Usar el resto en unas vacaciones', reply: 'Las vacaciones son una meta, no una emergencia. Lo que sigue es **reponer** el fondo.' },
        ],
      },
      { tip: 'Una oferta o un concierto **no son emergencias**, aunque se sientan urgentes. Para eso está el ahorro para metas.' },
    ],
    // ¿Cuánto necesitas guardar?
    [
      { text: 'Luis quiere saber cuánto juntar. La meta se calcula con sus **gastos esenciales**: lo que no puede dejar de pagar aunque no tenga ingreso.' },
      {
        ask: '¿Cuál de estos **no** cuenta como gasto esencial?',
        options: [
          { text: 'La plataforma de streaming', ok: true, reply: '¡Bien! Se puede pausar en una emergencia. No cuenta.' },
          { text: 'La renta', reply: 'La renta sí es esencial: hay que pagarla aunque no haya ingreso. La que no cuenta es el **streaming**.' },
          { text: 'El pago mínimo de su tarjeta', reply: 'Sí cuenta: los pagos de deuda no se detienen si dejas de ganar. El que no cuenta es el **streaming**.' },
        ],
      },
      { text: 'Gastos esenciales:\n🏠 Renta o hipoteca 🍲 Comida\n💡 Luz, agua y gas 🚌 Transporte al trabajo\n💳 Pagos mínimos de deudas\n❌ No entran: restaurantes, streaming, compras por gusto.' },
      {
        sort: {
          title: '¿Entra en la meta del fondo?',
          buckets: ['Esencial', 'No esencial'],
          items: [
            { text: 'Renta del departamento', bucket: 0, why: 'Vivienda: no se puede dejar de pagar.' },
            { text: 'Despensa básica', bucket: 0, why: 'Comida: esencial.' },
            { text: 'Recibo de luz y agua', bucket: 0, why: 'Servicios básicos: esencial.' },
            { text: 'Pago mínimo del préstamo', bucket: 0, why: 'Si no lo pagas, la deuda se agrava.' },
            { text: 'Cenas en restaurantes', bucket: 1, why: 'Se puede recortar en una emergencia.' },
            { text: 'Suscripción de videojuegos', bucket: 1, why: 'Es un gusto: se puede pausar.' },
          ],
        },
      },
      {
        calc: {
          question: 'Luis paga al mes: renta $4,000, comida $3,200, servicios $700, transporte $1,100, mínimo de tarjeta $1,000 y streaming $300. ¿Cuánto suman sus gastos esenciales?',
          answer: 10000,
          hint: 'Suma todo menos el streaming.',
          why: '4,000 + 3,200 + 700 + 1,100 + 1,000 = **$10,000**. Si sumas el streaming te da 10,300.',
        },
      },
      { text: 'Una **guía práctica común**: juntar de **3 a 6 meses** de gastos esenciales. Apunta a más si tus ingresos son **variables**, si alguien depende de ti o si tu trabajo es inestable.' },
      {
        ask: 'Luis trabaja por su cuenta y hay meses sin bodas. ¿A cuántos meses le conviene apuntar?',
        options: [
          { text: '6 meses o más', ok: true, reply: '¡Sí! Con ingreso variable conviene un colchón más grande.' },
          { text: '3 meses, seguro le bastan', reply: '3 meses puede bastar al inicio con empleo estable. Con ingreso variable conviene **6 o más**.' },
          { text: '1 mes', reply: 'Es buen primer escalón, pero con ingreso variable la meta es **6 meses o más**.' },
        ],
      },
      {
        calc: {
          question: 'Con gastos esenciales de $10,000, ¿cuál es la meta de Luis para 6 meses?',
          answer: 60000,
          hint: 'Gastos esenciales × número de meses.',
          why: '10,000 × 6 = **$60,000**. Para 3 meses serían $30,000.',
        },
      },
    ],
    // ¿Dónde lo guardas y cómo?
    [
      { text: 'La meta de Luis es **$60,000**. Ahora: ¿dónde lo guarda?' },
      { text: 'El fondo cumple 3 reglas:\n💧 **Liquidez:** sacarlo rápido, idealmente el mismo día o al siguiente.\n🛡️ **Seguridad:** que no pierda valor de golpe.\n📦 **Separado** de tu cuenta de gastos diarios.' },
      {
        ask: 'Su primo le dice: "Mételo en **acciones**, ganan más". ¿Qué le conviene a Luis?',
        options: [
          { text: 'Mejor no: pueden caer justo cuando lo necesite', ok: true, reply: '¡Exacto! Tendría que vender con pérdida. Para el fondo, **la disponibilidad pesa más que el rendimiento**.' },
          { text: 'Sí, porque lo importante es ganar más', reply: 'Para el fondo, lo principal es que **esté disponible y seguro**. Las acciones pueden caer justo en la emergencia.' },
          { text: 'Sí, pero solo la mitad', reply: 'Aun así, esa mitad podría valer menos justo cuando la necesite. El fondo va **líquido y seguro**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué lugares cumplen las 3 reglas?',
          items: [
            { text: 'Cuenta de ahorro separada, con disponibilidad diaria, en una institución autorizada', ok: true },
            { text: 'Instrumento de deuda con disponibilidad diaria en una institución autorizada', ok: true },
            { text: 'Inversión a plazo fijo de 3 años', ok: false },
            { text: 'Debajo del colchón', ok: false },
          ],
          why: 'El plazo fijo largo no está disponible cuando lo necesitas, y el efectivo en casa corre riesgo de robo y lo erosiona la inflación.',
        },
      },
      { text: 'Para construirlo: empieza con una meta pequeña (un mes de gastos) y **automatiza** un depósito cada quincena.\n**Meses para completarlo = (meta − lo que ya tienes) ÷ ahorro mensual.**' },
      {
        sim: {
          title: 'El plan de Luis para llegar a $60,000',
          inputs: [
            { key: 'ya', label: 'Lo que ya tiene apartado', min: 0, max: 20000, step: 2000, value: 6000 },
            { key: 'ah', label: 'Lo que ahorra al mes', min: 1000, max: 6000, step: 500, value: 2000 },
          ],
          outputs: [
            { label: 'Lo que le falta', calc: (x) => 60000 - x.ya },
            { label: 'Meses para completarlo', calc: (x) => Math.ceil((60000 - x.ya) / x.ah), main: true, unit: 'meses' },
          ],
          goal: {
            text: 'Completa el fondo en **12 meses o menos**.',
            check: (x) => Math.ceil((60000 - x.ya) / x.ah) <= 12,
            done: 'Con ingreso variable, apartar más en los meses buenos acelera el fondo.',
          },
        },
      },
      {
        calc: {
          question: 'Otra meta: $30,000. Luis ya tiene $6,000 y ahorra $3,000 al mes. ¿En cuántos meses lo completa?',
          answer: 8,
          unit: 'meses',
          hint: 'Primero resta lo que ya tiene: 30,000 − 6,000. Luego divide entre 3,000.',
          why: 'Le faltan 24,000. 24,000 ÷ 3,000 = **8 meses**. Si olvidas lo que ya tiene, te salen 10.',
        },
      },
      { tip: 'Ganar algo de rendimiento es un extra. **Lo principal es que esté disponible.**' },
    ],
  ],
}
