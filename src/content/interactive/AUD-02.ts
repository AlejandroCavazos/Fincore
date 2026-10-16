import type { InteractiveLesson } from './types'

export const intAUD02: InteractiveLesson = {
  lessonId: 'AUD-02',
  sections: [
    // ¿Qué son las NIA y quién las emite?
    [
      { text: 'Las **NIA** (Normas Internacionales de Auditoría) son el «reglamento» del auditor externo: qué lograr, qué hacer sí o sí y cómo documentarlo.' },
      {
        match: {
          title: 'Une cada sigla con lo que hace',
          pairs: [
            ['IAASB', 'Emite las NIA a nivel internacional'],
            ['IFAC', 'Federación mundial de organismos contables que respalda al IAASB'],
            ['IMCP', 'Adopta, traduce y difunde las NIA en México'],
            ['NIF', 'Dicen cómo preparar los estados financieros'],
            ['NIA', 'Dicen cómo auditar los estados financieros'],
          ],
        },
      },
      { text: 'En un despacho, Beto (auditor junior) siempre confunde NIF y NIA. Ayúdale rápido 👟:' },
      {
        rush: {
          title: '¿NIF o NIA?',
          seconds: 40,
          labels: ['NIF (preparar)', 'NIA (auditar)'],
          items: [
            { text: 'Cómo valuar el inventario de una zapatería', ans: 0 },
            { text: 'Cómo el auditor verifica la valuación del inventario', ans: 1 },
            { text: 'Cómo presentar el estado de resultados', ans: 0 },
            { text: 'Cómo elegir una muestra de facturas para revisar', ans: 1 },
            { text: 'Cómo emitir la opinión del auditor', ans: 1 },
            { text: 'Cómo registrar una venta en los estados', ans: 0 },
          ],
        },
      },
      { tip: '**NIF = preparar. NIA = auditar.** Gracias a las NIA, una auditoría en México se compara con una de España o Colombia.' },
    ],
    // El mapa de las NIA por número
    [
      { text: 'Las NIA se agrupan por centenas, como los **pasillos de un súper** 🛒. Si sabes el pasillo, sabes de qué trata la norma.' },
      {
        sort: {
          title: '¿En qué grupo buscarías?',
          buckets: ['200-299 Principios', '300-499 Riesgos', '500-599 Evidencia', '600-699 Trabajo de otros', '700-799 Informe'],
          items: [
            { text: 'Objetivos generales del auditor', bucket: 0, why: 'Es un principio general: grupo 200.' },
            { text: 'Identificar y valorar riesgos', bucket: 1, why: 'Valoración de riesgos: grupo 300-499.' },
            { text: 'Cómo elegir una muestra', bucket: 2, why: 'El muestreo es una forma de obtener evidencia: grupo 500.' },
            { text: 'Usar el trabajo de un experto', bucket: 3, why: 'Uso del trabajo de otros: grupo 600.' },
            { text: 'La opinión y el informe del auditor', bucket: 4, why: 'Conclusiones e informe: grupo 700.' },
            { text: 'Respuestas a los riesgos valorados', bucket: 1, why: 'Respuesta a los riesgos también va en 300-499.' },
          ],
        },
      },
      {
        match: {
          title: 'Une cada NIA con su tema',
          pairs: [
            ['NIA 210', 'Acuerdo de los términos del encargo'],
            ['NIA 230', 'Documentación'],
            ['NIA 240', 'Fraude'],
            ['NIA 300', 'Planeación'],
            ['NIA 320', 'Materialidad'],
            ['NIA 580', 'Manifestaciones escritas'],
          ],
        },
      },
      {
        ask: 'Beto duda cómo elegir una muestra de facturas. ¿Qué NIA busca?',
        options: [
          { text: 'NIA 320', reply: 'La 320 es materialidad. El muestreo está en el grupo de evidencia (500).' },
          { text: 'NIA 530', ok: true, reply: '¡Eso! Muestreo = forma de obtener evidencia → grupo 500 → **NIA 530**.' },
          { text: 'NIA 700', reply: 'La 700 es opinión e informe, el final de la auditoría.' },
        ],
      },
      { tip: 'Los grupos siguen el **orden de una auditoría**: principios → riesgos → evidencia → trabajo de otros → informe.' },
    ],
    // Cómo se lee una NIA y sus principios generales
    [
      { text: 'Cada NIA tiene las mismas partes, siempre en el mismo orden.' },
      {
        order: {
          title: 'Ordena las partes de una NIA',
          steps: [
            'Introducción',
            'Objetivo (lo que el auditor debe lograr)',
            'Definiciones',
            'Requisitos (lo que el auditor «deberá» hacer)',
            'Guía de aplicación y otras anotaciones explicativas',
          ],
          done: 'Así está armada cada NIA. Ubicar la parte te ahorra mucho tiempo.',
        },
      },
      {
        ask: '¿Qué parte de una NIA es **obligatoria**?',
        options: [
          { text: 'La guía de aplicación', reply: 'La guía ayuda a entender, pero lo obligatorio son los **requisitos**.' },
          { text: 'Los requisitos', ok: true, reply: '¡Bien! Suelen decir «deberá». La guía es necesaria para entenderlos bien.' },
          { text: 'Las definiciones', reply: 'Explican términos, pero lo obligatorio son los **requisitos**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué pide la NIA 200? Marca todas.',
          items: [
            { text: 'Obtener seguridad razonable de que no hay incorrecciones materiales', ok: true },
            { text: 'Cumplir requisitos de ética, incluida la independencia', ok: true },
            { text: 'Aplicar escepticismo y juicio profesional', ok: true },
            { text: 'Obtener evidencia suficiente y adecuada', ok: true },
            { text: 'Cumplir solo las NIA que el auditor prefiera', ok: false },
          ],
          why: 'La NIA 200 es la base de todo, y el auditor debe cumplir **todas** las NIA relevantes para su encargo.',
        },
      },
      { tip: 'Cada despacho necesita **gestión de la calidad** (normas ISQM y, en cada auditoría, la NIA 220). Por ejemplo, que un socio que no participó revise los encargos de mayor riesgo.' },
    ],
  ],
}
