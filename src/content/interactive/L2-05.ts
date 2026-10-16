import type { InteractiveLesson } from './types'

export const intL205: InteractiveLesson = {
  lessonId: 'L2-05',
  sections: [
    // NIF e IFRS: quién emite las normas
    [
      { text: 'Para que todos los contadores hagan las cuentas igual, existen **reglas del juego**. En México son las **NIF**; en buena parte del mundo, las **IFRS**.' },
      {
        match: {
          title: 'Une cada sigla con lo que es',
          pairs: [
            ['NIF', 'Normas de Información Financiera de México'],
            ['CINIF', 'Organismo independiente que emite las NIF'],
            ['IFRS', 'Normas Internacionales de Información Financiera'],
            ['IASB', 'Organismo que emite las IFRS, bajo la IFRS Foundation'],
          ],
        },
      },
      {
        ask: 'Una empresa mexicana **cotiza en bolsa** (la regula la CNBV). ¿Con qué normas suele reportar?',
        options: [
          { text: 'Con NIF, porque es mexicana', reply: 'La mayoría de las empresas en México usan NIF, pero las que cotizan en bolsa **por lo general reportan con IFRS**.' },
          { text: 'Con IFRS, por lo general', ok: true, reply: '¡Exacto! Las que cotizan en bolsa, reguladas por la CNBV, por lo general usan **IFRS**.' },
          { text: 'Con las reglas que elija el dueño', reply: 'No: hay normas que seguir. Si cotiza en bolsa, por lo general son las **IFRS**.' },
        ],
      },
      { text: 'Las NIF están ordenadas en **series**, como los cajones de un archivero 🗄️.' },
      {
        match: {
          title: 'Une cada serie con su contenido',
          pairs: [
            ['Serie A', 'Marco Conceptual'],
            ['Serie B', 'Normas para los estados financieros en su conjunto'],
            ['Serie C', 'Normas para conceptos específicos de los estados financieros'],
            ['Serie D', 'Problemas de determinación de resultados'],
            ['Serie E', 'Actividades especializadas de distintos sectores'],
          ],
        },
      },
      { tip: 'NIF → las emite el **CINIF**. IFRS → las emite el **IASB**. El CINIF busca acercar las NIF a las IFRS, aunque todavía hay diferencias.' },
    ],
    // Provisiones
    [
      { text: 'Una **provisión** es una deuda que **seguro** tienes, pero no sabes exactamente cuánto ni cuándo la pagarás. Ejemplo: vendiste licuadoras con garantía y algunas van a regresar 🔧.' },
      {
        multi: {
          title: '¿Qué se necesita para registrar una provisión? Marca todas.',
          items: [
            { text: 'Una obligación presente que viene de algo que ya pasó', ok: true },
            { text: 'Que sea probable que salga dinero (más de 50 %)', ok: true },
            { text: 'Poder estimar el monto de forma confiable', ok: true },
            { text: 'Conocer la fecha exacta del pago', ok: false },
            { text: 'Que se trate de pérdidas de operación futuras', ok: false },
          ],
          why: 'Son **tres criterios**: obligación presente, salida probable y estimación confiable. No necesitas la fecha exacta (por eso es incierta), y las pérdidas de operación futuras **no** se provisionan.',
        },
      },
      { text: 'Si vendes **muchas** licuadoras, la provisión se calcula con el **valor esperado**: cada escenario por su probabilidad, y luego sumas.' },
      {
        sim: {
          title: 'Garantías de la tienda de licuadoras',
          inputs: [
            { key: 'm', label: '% con falla menor (costaría $50,000 si todo fallara así)', min: 0, max: 20, step: 1, value: 8 },
            { key: 'g', label: '% con falla mayor (costaría $300,000 si todo fallara así)', min: 0, max: 10, step: 1, value: 2 },
          ],
          outputs: [
            { label: '% sin falla', calc: (x) => 100 - x.m - x.g },
            { label: 'Provisión (valor esperado)', calc: (x) => (x.m / 100) * 50000 + (x.g / 100) * 300000, main: true },
          ],
          goal: {
            text: 'Imagina un lote con más fallas: mueve los porcentajes hasta que la provisión llegue a **$25,000 o más**.',
            check: (x) => (x.m / 100) * 50000 + (x.g / 100) * 300000 >= 25000,
            done: 'Valor esperado = suma de (probabilidad × monto). Entre más probables las fallas caras, más grande la provisión.',
          },
        },
      },
      {
        calc: {
          question: 'Se espera que **90 %** no falle, **8 %** tenga falla menor (**$50,000**) y **2 %** falla mayor (**$300,000**). ¿Cuánto es la provisión?',
          answer: 10000,
          hint: 'multiplica cada probabilidad en decimal por su monto y suma.',
          why: '0.90 × 0 + 0.08 × 50,000 + 0.02 × 300,000 = 0 + 4,000 + 6,000 = **$10,000**.',
        },
      },
      {
        ask: 'Al taller le pusieron **un solo juicio**. Lo más probable es pagar $80,000. ¿Cómo se mide la provisión?',
        options: [
          { text: 'Con el valor esperado de todos los escenarios', reply: 'El valor esperado es para **muchas partidas parecidas**, como garantías. Para una obligación única se usa otra cosa.' },
          { text: 'Normalmente con el resultado más probable: $80,000', ok: true, reply: '¡Bien! Para una obligación única, normalmente se usa el **resultado individual más probable**.' },
          { text: 'No se registra hasta que haya sentencia', reply: 'Si hay obligación presente, salida probable y estimación confiable, **sí** se reconoce la provisión.' },
        ],
      },
      {
        entry: {
          title: 'Registra la provisión de garantías',
          story: 'Al cierre, la tienda reconoce la provisión de **$10,000** por las garantías de lo que ya vendió.',
          lines: [
            { account: 'Gasto por garantías', side: 'D', amount: 10000, why: 'Es un gasto de este periodo: las ventas con garantía ya ocurrieron.' },
            { account: 'Provisión para garantías', side: 'C', amount: 10000, why: 'Es un pasivo (una deuda que tienes): nace con abono.' },
          ],
        },
      },
      { tip: 'Muchas partidas parecidas → **valor esperado**. Una sola obligación → **resultado más probable**. Si el tiempo pesa mucho, se trae a **valor presente**.' },
    ],
    // Pasivos y activos contingentes
    [
      { text: 'Un **pasivo contingente** es una deuda que **quizá** exista (depende de algo futuro e incierto), o una que sí existe pero no cumple los tres criterios. **No se registra**: se cuenta en las **notas** de los estados financieros.' },
      {
        order: {
          title: 'Ordena las preguntas para decidir qué hacer',
          steps: [
            '¿Existe una obligación presente por algo que ya pasó?',
            '¿Es probable que salga dinero para pagarla?',
            '¿Se puede estimar el monto de forma confiable?',
            'Si las tres son sí: se reconoce una provisión',
            'Si falta alguna: se revela en notas, salvo que la salida sea remota',
          ],
          done: 'Primero revisas los tres criterios. Si se cumplen, **reconoces**; si no, **revelas** (o nada, si es remoto).',
        },
      },
      {
        sort: {
          title: '¿Qué hace el despacho contable con cada caso?',
          buckets: ['Se reconoce provisión', 'Se revela en notas', 'Ni se registra ni se revela'],
          items: [
            { text: 'Garantías de licuadoras vendidas: se sabe que algunas regresarán y se puede estimar el costo', bucket: 0, why: 'Obligación presente, salida probable y estimación confiable: provisión.' },
            { text: 'Una demanda que quizá se pierda; hoy no es probable que haya que pagar', bucket: 1, why: 'Es una obligación posible que no cumple los criterios: pasivo contingente, va en notas.' },
            { text: 'Una demanda casi imposible de perder (salida remota)', bucket: 2, why: 'Si la salida de recursos es **remota**, ni siquiera se revela.' },
            { text: 'La cafetería probablemente ganará un juicio y cobrará una indemnización', bucket: 1, why: 'Es un **activo contingente**: no se reconoce, pero se revela porque la entrada es probable.' },
            { text: 'Pérdidas de operación que se esperan el próximo año', bucket: 2, why: 'No se reconocen provisiones por pérdidas de operación futuras.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Se registra en el balance?',
          seconds: 40,
          labels: ['Se reconoce', 'No se reconoce'],
          items: [
            { text: 'Provisión que cumple los tres criterios', ans: 0 },
            { text: 'Pasivo contingente', ans: 1 },
            { text: 'Activo contingente', ans: 1 },
            { text: 'Garantías probables y estimables', ans: 0 },
            { text: 'Obligación posible que depende de un hecho futuro incierto', ans: 1 },
            { text: 'Juicio con pago probable y monto estimable', ans: 0 },
          ],
        },
      },
      { tip: 'Pasivo contingente → **notas** (si es remoto, nada). Activo contingente → **nunca** se registra; se revela si la entrada es probable.' },
    ],
  ],
}
