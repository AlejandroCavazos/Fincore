import type { InteractiveLesson } from './types'

export const intL205: InteractiveLesson = {
  lessonId: 'L2-05',
  sections: [
    // ¿Quién pone las reglas?
    [
      { text: 'En el futbol todos juegan con las mismas reglas ⚽. En contabilidad también: así los números de una empresa se pueden comparar con los de otra.' },
      {
        ask: '¿Quién crees que escribe las reglas contables en México?',
        options: [
          { text: 'El SAT', reply: 'El SAT administra los impuestos. Las reglas contables (NIF) las emite el **CINIF**.' },
          { text: 'El CINIF', ok: true, reply: '¡Bien! El CINIF es un organismo independiente del sector privado que emite las **NIF**.' },
          { text: 'La CNBV', reply: 'La CNBV regula al sector financiero y a las empresas en bolsa, pero no emite las NIF. Las emite el **CINIF**.' },
        ],
      },
      { text: 'Dos juegos de reglas:\n🇲🇽 **NIF** → las emite el **CINIF**\n🌎 **IFRS** (internacionales) → las emite el **IASB**\nEl CINIF busca acercar las NIF a las IFRS, aunque aún hay diferencias.' },
      {
        match: {
          title: 'Une cada sigla con lo que es',
          pairs: [
            ['NIF', 'Normas de Información Financiera de México'],
            ['CINIF', 'Emite las NIF'],
            ['IFRS', 'Normas Internacionales de Información Financiera'],
            ['IASB', 'Emite las IFRS'],
          ],
        },
      },
      {
        ask: 'Una empresa mexicana **cotiza en bolsa** (la regula la CNBV). ¿Con qué normas suele reportar?',
        options: [
          { text: 'Con NIF, porque es mexicana', reply: 'La mayoría usa NIF, pero las que cotizan en bolsa **por lo general reportan con IFRS**.' },
          { text: 'Con IFRS, por lo general', ok: true, reply: '¡Exacto! Las que cotizan en bolsa por lo general usan **IFRS**; la mayoría de las demás, NIF.' },
          { text: 'Con las reglas que elija el dueño', reply: 'Hay normas que seguir. Si cotiza en bolsa, por lo general son las **IFRS**.' },
        ],
      },
      { text: 'Las NIF se ordenan en **series**, como cajones de un archivero 🗄️:\n**A:** Marco Conceptual\n**B:** estados financieros en su conjunto\n**C:** conceptos específicos\n**D:** problemas de determinación de resultados\n**E:** actividades especializadas' },
      {
        match: {
          title: 'Une cada serie con su contenido',
          pairs: [
            ['Serie A', 'Marco Conceptual'],
            ['Serie B', 'Estados financieros en su conjunto'],
            ['Serie C', 'Conceptos específicos de los estados'],
            ['Serie E', 'Actividades especializadas de sectores'],
          ],
        },
      },
      { tip: 'NIF → **CINIF**. IFRS → **IASB**.' },
    ],
    // Deudas seguras de monto incierto
    [
      { text: 'Paty vende licuadoras con garantía 🔧. Sabe que algunas van a regresar a reparación, pero no cuántas. Esa deuda que **seguro** tiene, pero de monto o fecha **incierta**, es una **provisión**.' },
      { text: 'Se registra solo si se cumplen **tres criterios**:\n1️⃣ Hay una **obligación presente** por algo que ya pasó\n2️⃣ Es **probable** que salga dinero (más fácil que pase a que no)\n3️⃣ El monto se puede **estimar de forma confiable**' },
      {
        multi: {
          title: '¿Qué se necesita para registrar una provisión? Marca todas.',
          items: [
            { text: 'Una obligación presente por algo que ya pasó', ok: true },
            { text: 'Que sea probable que salga dinero', ok: true },
            { text: 'Poder estimar el monto de forma confiable', ok: true },
            { text: 'Un contrato firmado con el acreedor', ok: false },
            { text: 'Conocer el monto exacto', ok: false },
          ],
          why: 'Son **tres criterios**. No hace falta contrato (la obligación puede ser asumida) ni monto exacto: si se conociera exacto, sería un pasivo normal.',
        },
      },
      { text: 'Con **muchas** licuadoras, se usa el **valor esperado**: cada escenario × su probabilidad, y luego sumas. Con **una sola** obligación (un juicio), normalmente el resultado más probable.' },
      {
        sim: {
          title: 'Garantías de las licuadoras de Paty',
          inputs: [
            { key: 'm', label: '% con falla menor (costaría $50,000 si todo fallara así)', min: 0, max: 20, step: 1, value: 8 },
            { key: 'g', label: '% con falla mayor (costaría $300,000 si todo fallara así)', min: 0, max: 10, step: 1, value: 2 },
          ],
          outputs: [
            { label: '% sin falla', calc: (x) => 100 - x.m - x.g, unit: '%' },
            { label: 'Provisión (valor esperado)', calc: (x) => (x.m / 100) * 50000 + (x.g / 100) * 300000, main: true },
          ],
          goal: {
            text: 'Imagina un lote con más fallas: mueve los porcentajes hasta que la provisión llegue a **$25,000 o más**.',
            check: (x) => (x.m / 100) * 50000 + (x.g / 100) * 300000 >= 25000,
            done: 'Valor esperado = suma de (probabilidad × monto).',
          },
        },
      },
      {
        calc: {
          question: 'Paty espera que **90 %** no falle, **8 %** tenga falla menor (**$50,000**) y **2 %** falla mayor (**$300,000**). ¿Cuánto es la provisión?',
          answer: 10000,
          hint: 'Cada probabilidad en decimal × su monto, y suma.',
          why: '0.90 × 0 + 0.08 × 50,000 + 0.02 × 300,000 = 0 + 4,000 + 6,000 = **$10,000**. Error común: tomar solo el escenario más probable (sin falla = 0).',
        },
      },
      {
        entry: {
          title: 'Registra la provisión de garantías',
          story: 'Al cierre, Paty reconoce **$10,000** por las garantías de lo que ya vendió.',
          lines: [
            { account: 'Gasto por provisiones', side: 'D', amount: 10000, why: 'Es gasto de este periodo: las ventas con garantía ya ocurrieron.' },
            { account: 'Provisiones', side: 'C', amount: 10000, why: 'Es un pasivo (una deuda): nace con abono.' },
          ],
        },
      },
      { tip: 'Provisión = **obligación presente + salida probable + estimación confiable**. Las pérdidas de operación futuras **no** se provisionan.' },
    ],
    // Deudas que quizá existan
    [
      {
        ask: 'Un cliente demandó a Paty. Su abogado dice que **quizá** pierda, pero **no es probable**. ¿La registra como deuda?',
        options: [
          { text: 'No, pero lo cuenta en las notas', ok: true, reply: '¡Bien! No cumple «salida probable», así que no se registra; se **revela** en notas.' },
          { text: 'Sí, por si acaso', reply: 'Sin salida **probable** no se reconoce provisión. Como es posible, se **revela en notas**.' },
          { text: 'No, y no dice nada a nadie', reply: 'Solo se calla si es **remota**. Si es posible, se **revela en notas**.' },
        ],
      },
      { text: 'Eso es un **pasivo contingente**: una deuda **posible**, o una que no cumple los tres criterios. **No se registra**: se revela en las **notas**, salvo que la salida sea **remota** (casi imposible).\nUn **activo contingente** (un posible cobro) tampoco se registra; se revela si la entrada es probable.' },
      {
        order: {
          title: 'Ordena las preguntas para decidir',
          steps: [
            '¿Hay una obligación presente por algo que ya pasó?',
            '¿Es probable que salga dinero?',
            '¿Se puede estimar el monto?',
            'Si todo es sí: provisión. Si no: notas, salvo que sea remota',
          ],
          done: 'Si se cumplen los tres criterios **reconoces**; si no, **revelas** (o nada, si es remoto).',
        },
      },
      {
        sort: {
          title: '¿Qué hace Paty con cada caso?',
          buckets: ['Reconocer provisión', 'Revelar en notas', 'Ni reconocer ni revelar'],
          items: [
            { text: 'Demanda con pérdida probable y monto estimable', bucket: 0, why: 'Cumple los tres criterios: provisión.' },
            { text: 'Garantías de licuadoras vendidas, con historial de reclamos', bucket: 0, why: 'Obligación presente, salida probable y estimable: provisión.' },
            { text: 'Demanda con pérdida posible, pero no probable', bucket: 1, why: 'Pasivo contingente: va en notas.' },
            { text: 'Reclamación con pérdida remota', bucket: 2, why: 'Si es **remota**, ni se revela.' },
            { text: 'Pérdidas de operación que espera el próximo año', bucket: 2, why: 'No hay evento pasado ni obligación presente: no se provisiona.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Se registra en el balance?',
          seconds: 30,
          labels: ['Se reconoce', 'No se reconoce'],
          items: [
            { text: 'Provisión con los tres criterios', ans: 0 },
            { text: 'Pasivo contingente', ans: 1 },
            { text: 'Activo contingente', ans: 1 },
            { text: 'Garantías probables y estimables', ans: 0 },
            { text: 'Juicio con pérdida posible', ans: 1 },
          ],
        },
      },
      { tip: 'Probable → **provisión**. Posible → **notas**. Remota → **nada**.' },
    ],
  ],
}
