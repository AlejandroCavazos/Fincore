import type { InteractiveLesson } from './types'

export const intCON05: InteractiveLesson = {
  lessonId: 'CON-05',
  sections: [
    // ¿Quién pone las reglas?
    [
      { text: 'Don Beto tiene una cafetería ☕ en Puebla y pide un préstamo. El banco compara sus números con los de otra cafetería en Monterrey.' },
      {
        ask: '¿Qué necesita el banco para poder compararlas?',
        options: [
          { text: 'Que las dos usen las mismas reglas para contar', ok: true, reply: '¡Exacto! Si cada una contara a su manera, sería imposible compararlas.' },
          { text: 'Que vendan los mismos productos', reply: 'Pueden vender cosas distintas. Lo que importa es que **cuenten con las mismas reglas**.' },
          { text: 'Que estén en la misma ciudad', reply: 'La ciudad no importa. Lo que importa es que **cuenten con las mismas reglas**.' },
        ],
      },
      { text: 'En México esas reglas son las **NIF** (Normas de Información Financiera): un reglamento común para preparar estados financieros.' },
      {
        ask: '¿Quién emite las NIF?',
        options: [
          { text: 'El SAT', reply: 'No. El SAT cobra impuestos, pero **no** emite las NIF.' },
          { text: 'El CINIF, un organismo independiente y privado', ok: true, reply: '¡Exacto! El **CINIF** (Consejo Mexicano de Normas de Información Financiera) no es parte del gobierno.' },
          { text: 'Cada empresa escribe las suyas', reply: 'Justo eso es lo que se quiere evitar: las NIF son **las mismas para todos**.' },
        ],
      },
      { text: 'Las NIF se parecen a las normas internacionales (**NIIF**), aunque no son iguales. Si una NIF no resuelve un caso, se usa otra norma reconocida, primero las NIIF: eso es la **supletoriedad**.' },
      {
        multi: {
          title: 'Marca todo lo que es cierto',
          items: [
            { text: 'Antes del CINIF, las reglas las emitía el Instituto Mexicano de Contadores Públicos', ok: true },
            { text: 'Las NIF buscan acercarse (converger) a las NIIF', ok: true },
            { text: 'Las NIF son idénticas a las NIIF, sin ninguna diferencia', ok: false },
            { text: 'Si ninguna NIF resuelve un caso, se puede usar otra norma, empezando por las NIIF', ok: true },
          ],
          why: 'Las NIF convergen con las NIIF pero **conservan diferencias**. Usar otra norma cuando la NIF no alcanza se llama **supletoriedad**.',
        },
      },
      { tip: 'NIF = las reglas comunes en México. Las emite el **CINIF**, no el gobierno.' },
    ],
    // ¿Dónde busco cada regla?
    [
      { text: 'Don Beto tiene una duda: ¿cómo valúa los costales de café de su inventario? Las NIF son como un manual con capítulos 📚.' },
      {
        text: 'Los capítulos se llaman **series** y van por letras:\n📘 **A:** las ideas base (marco conceptual).\n📗 **B:** los estados financieros en conjunto.\n📙 **C:** partidas específicas (efectivo, inventarios).\n📕 **D** y **E:** cómo determinar resultados y actividades especializadas.',
      },
      {
        ask: '¿En qué serie busca Don Beto cómo valuar su inventario?',
        options: [
          { text: 'Serie C', ok: true, reply: '¡Bien! Inventarios es una **partida específica**: serie C.' },
          { text: 'Serie A', reply: 'La A tiene las ideas base de todo. Inventarios es una partida específica: **serie C**.' },
          { text: 'Serie B', reply: 'La B ve los estados financieros en conjunto. Inventarios es una partida específica: **serie C**.' },
        ],
      },
      {
        match: {
          title: 'Cada serie y su tema',
          pairs: [
            ['Serie A', 'Marco conceptual: las ideas base'],
            ['Serie B', 'Los estados financieros en conjunto'],
            ['Serie C', 'Partidas específicas (efectivo, inventarios)'],
            ['Serie D', 'Problemas para determinar resultados'],
            ['Serie E', 'Actividades especializadas'],
          ],
        },
      },
      {
        sort: {
          title: '¿Qué serie consulta Don Beto?',
          buckets: ['Serie A', 'Serie B', 'Serie C'],
          items: [
            { text: 'Cómo valuar sus costales de café', bucket: 2, why: 'Inventarios es una partida específica: serie C.' },
            { text: 'Cómo presentar el estado de flujos de efectivo', bucket: 1, why: 'Estados en conjunto: serie B.' },
            { text: 'Las ideas base de todas las normas', bucket: 0, why: 'Marco conceptual: serie A.' },
            { text: 'Cómo presentar el efectivo de la caja', bucket: 2, why: 'El efectivo es una partida específica: serie C.' },
            { text: 'Cómo mostrar los cambios en el capital', bucket: 1, why: 'Es uno de los estados en conjunto: serie B.' },
          ],
        },
      },
      { tip: 'Además de normas, el CINIF publica **INIF** (interpretaciones para aclarar dudas) y **ONIF** (orientaciones para temas nuevos).' },
    ],
    // Las ideas que todos suponen
    [
      { text: 'En noviembre, Don Beto cobra **$6,000** por adelantado: café diario durante 6 meses ☕.' },
      {
        ask: 'Al terminar diciembre, ¿cuánto ha ganado de verdad?',
        options: [
          { text: '$2,000: ya dio dos meses de servicio', ok: true, reply: '¡Eso! Se gana mes a mes. Los otros $4,000 siguen siendo un **pasivo**: le debe el café al cliente.' },
          { text: '$6,000: ya tiene el dinero', reply: 'Tiene el dinero, pero aún debe 4 meses de café. Solo ha ganado los 2 meses que ya dio: **$2,000**.' },
          { text: '$0: hasta terminar los 6 meses', reply: 'No hay que esperar al final: cada mes de servicio ya se ganó. Lleva 2 meses: **$2,000**.' },
        ],
      },
      {
        text: 'Eso es un **postulado básico**: una idea que se da por cierta al registrar. Tres muy usados:\n🏢 **Entidad económica:** el negocio es distinto de su dueño.\n🔄 **Negocio en marcha:** se supone que seguirá operando.\n📅 **Devengación contable:** se registra cuando ocurre, no cuando se cobra o paga.',
      },
      {
        sort: {
          title: '¿Qué postulado aplica?',
          buckets: ['Entidad económica', 'Negocio en marcha', 'Devengación contable'],
          items: [
            { text: 'Don Beto paga sus vacaciones con dinero de la cafetería y no se anota como gasto del negocio', bucket: 0, why: 'Es un gasto del dueño, no del negocio: son distintos.' },
            { text: 'La casa de Don Beto no aparece en los activos de la cafetería', bucket: 0, why: 'La casa es del dueño, no del negocio.' },
            { text: 'La cafetera se deprecia en varios años porque se supone que la cafetería seguirá abierta', bucket: 1, why: 'Se da por hecho que el negocio seguirá operando.' },
            { text: 'Los sueldos de diciembre se anotan en diciembre aunque se paguen en enero', bucket: 2, why: 'Se registra cuando ocurre, no cuando se paga.' },
            { text: 'Una venta a crédito se anota al entregar, no al cobrar', bucket: 2, why: 'Se registra cuando ocurre, no cuando se cobra.' },
          ],
        },
      },
      {
        sim: {
          title: 'El cobro adelantado de Don Beto',
          inputs: [
            { key: 'c', label: 'Cobro por 6 meses', min: 3000, max: 12000, step: 1000, value: 6000 },
            { key: 'm', label: 'Meses de servicio ya dados', min: 0, max: 6, step: 1, value: 1 },
          ],
          outputs: [
            { label: 'Ingreso ya ganado', calc: (x) => (x.c * x.m) / 6, main: true },
            { label: 'Aún es pasivo', calc: (x) => (x.c * (6 - x.m)) / 6 },
          ],
          goal: {
            text: 'Avanza los meses hasta que lo ganado sea **mayor** que lo que aún se debe.',
            check: (x) => x.m > 3,
            done: 'Eso es devengación: el ingreso se gana mes a mes, **aunque el dinero llegó todo junto**.',
          },
        },
      },
      {
        calc: {
          question: 'El 1 de octubre, Don Beto cobra **$12,000** por 12 meses de café. ¿Cuánto ingreso ya ganó al **31 de diciembre**?',
          answer: 3000,
          hint: 'Cuenta los meses: octubre, noviembre y diciembre. Luego 12,000 × (meses ÷ 12).',
          why: 'Van 3 meses: 12,000 × 3 ÷ 12 = **$3,000**. Los otros $9,000 siguen siendo pasivo.',
        },
      },
      { text: 'Además, la información debe ser **confiable, relevante, comprensible y comparable**.' },
      {
        multi: {
          title: '¿Qué debe tener la información de Don Beto para ser útil?',
          items: [
            { text: 'Ser confiable', ok: true },
            { text: 'Ser relevante', ok: true },
            { text: 'Ser comprensible', ok: true },
            { text: 'Ser comparable', ok: true },
            { text: 'Mostrar siempre utilidades', ok: false },
          ],
          why: 'Las cuatro características son **confiable, relevante, comprensible y comparable**. La información debe decir la verdad, aunque haya pérdidas.',
        },
      },
    ],
  ],
}
