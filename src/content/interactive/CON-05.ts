import type { InteractiveLesson } from './types'

export const intCON05: InteractiveLesson = {
  lessonId: 'CON-05',
  sections: [
    // Qué son las NIF y quién las emite
    [
      { text: 'Imagina que cada negocio midiera sus ganancias a su manera: sería imposible compararlos. Por eso existen las **NIF** (Normas de Información Financiera): un reglamento común en México.' },
      {
        ask: '¿Quién emite las NIF?',
        options: [
          { text: 'El SAT', reply: 'No. El SAT cobra impuestos, pero **no** emite las NIF.' },
          { text: 'El CINIF, un organismo independiente y privado', ok: true, reply: '¡Exacto! El **CINIF** (Consejo Mexicano de Normas de Información Financiera) no es parte del gobierno.' },
          { text: 'Cada empresa escribe las suyas', reply: 'Justo eso es lo que se quiere evitar: las NIF son **las mismas para todos**.' },
        ],
      },
      {
        multi: {
          title: 'Marca todo lo que es cierto',
          items: [
            { text: 'Antes del CINIF, las reglas las emitía el Instituto Mexicano de Contadores Públicos', ok: true },
            { text: 'Las NIF buscan acercarse (converger) a las normas internacionales NIIF', ok: true },
            { text: 'Las NIF son idénticas a las NIIF, sin ninguna diferencia', ok: false },
            { text: 'Si una NIF no resuelve un caso, se usa otra norma reconocida, primero las NIIF', ok: true },
          ],
          why: 'Las NIF convergen con las NIIF pero **conservan diferencias**. Usar otra norma cuando la NIF no alcanza se llama **supletoriedad**.',
        },
      },
      { tip: 'Una farmacia en Puebla y otra en Monterrey con las mismas NIF: un banco puede **comparar** sus utilidades con la misma regla.' },
    ],
    // Cómo se organizan: las series
    [
      { text: 'Las NIF se agrupan en **series** con letras, como los capítulos de un manual: primero las ideas generales y luego los temas específicos.' },
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
      { text: 'Tienes una duda en la cafetería ☕. ¿En qué serie buscas?' },
      {
        sort: {
          title: '¿Qué serie consulto?',
          buckets: ['A', 'B', 'C', 'D', 'E'],
          items: [
            { text: 'Cómo valuar mis inventarios de café', bucket: 2, why: 'Inventarios es una partida específica: serie C.' },
            { text: 'Cómo presentar el estado de flujos de efectivo', bucket: 1, why: 'Estados en conjunto: serie B.' },
            { text: 'Las ideas base de todas las normas', bucket: 0, why: 'Marco conceptual: serie A.' },
            { text: 'Cómo tratar los impuestos a la utilidad', bucket: 3, why: 'Determinar resultados: serie D.' },
            { text: 'Reglas para un rancho agrícola', bucket: 4, why: 'Agricultura es actividad especializada: serie E.' },
            { text: 'Beneficios a empleados', bucket: 3, why: 'También es serie D.' },
          ],
        },
      },
      { tip: 'Además de normas, el CINIF publica **INIF** (interpretaciones para aclarar dudas) y **ONIF** (orientaciones para temas nuevos).' },
    ],
    // Marco conceptual y postulados básicos
    [
      { text: 'Los **postulados básicos** son ideas que se dan por ciertas al registrar. Están en el **marco conceptual** (serie A).' },
      {
        match: {
          title: 'Tres postulados muy usados',
          pairs: [
            ['Entidad económica', 'El negocio es distinto de su dueño'],
            ['Negocio en marcha', 'Se supone que seguirá operando'],
            ['Devengación contable', 'Se registra cuando ocurre, no cuando se cobra o paga'],
          ],
        },
      },
      { text: 'Un gimnasio 🏋️ cobra **por adelantado** seis meses. Cada mes que da el servicio, "gana" una parte. Lo que falta sigue siendo un **pasivo**: le debe el servicio al cliente.' },
      {
        sim: {
          title: 'El cobro adelantado del gimnasio',
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
          question: 'Una escuela de inglés cobra **$12,000** por 12 meses. Ya pasaron **3 meses**. ¿Cuánto ingreso ya ganó?',
          answer: 3000,
          hint: '12,000 × (3 ÷ 12).',
          why: '12,000 × 3 ÷ 12 = **$3,000**. Los otros $9,000 siguen siendo pasivo.',
        },
      },
      { tip: 'La información debe ser **confiable, relevante, comprensible y comparable**.' },
    ],
  ],
}
