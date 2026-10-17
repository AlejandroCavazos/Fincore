import type { InteractiveLesson } from './types'

export const intAUD02: InteractiveLesson = {
  lessonId: 'AUD-02',
  sections: [
    // ¿Qué reglas sigue el auditor?
    [
      { text: 'Beto empieza como auditor junior. Su jefa le dice: «Aquí todo se hace según las **NIA**» 📘.' },
      {
        ask: '¿Qué crees que son las NIA?',
        options: [
          { text: 'Las reglas para preparar los estados financieros', reply: 'Esas son las **NIF**. Las NIA son las reglas para **auditar**.' },
          { text: 'Las reglas que sigue el auditor para auditar', ok: true, reply: '¡Exacto! Normas Internacionales de Auditoría: qué lograr, qué hacer sí o sí y cómo documentarlo.' },
          { text: 'Las leyes de impuestos', reply: 'No. Las NIA son el «reglamento» del auditor externo para **auditar** estados financieros.' },
        ],
      },
      { text: '¿Quién las hace?\n🌎 **IAASB:** las emite. Está ligado a la **IFAC** (Federación Internacional de Contadores).\n🇲🇽 **IMCP:** las adopta, traduce y difunde en México.' },
      {
        match: {
          title: 'Une cada sigla con lo que hace',
          pairs: [
            ['IAASB', 'Emite las NIA'],
            ['IFAC', 'Federación internacional a la que está ligado el IAASB'],
            ['IMCP', 'Adopta, traduce y difunde las NIA en México'],
          ],
        },
      },
      { text: 'Ojo, Beto siempre las confunde:\n📊 **NIF:** cómo **preparar** los estados.\n🔍 **NIA:** cómo **auditarlos**.' },
      {
        rush: {
          title: '¿NIF o NIA?',
          seconds: 40,
          labels: ['NIF (preparar)', 'NIA (auditar)'],
          items: [
            { text: 'Cómo valuar el inventario de una zapatería', ans: 0 },
            { text: 'Cómo el auditor verifica esa valuación', ans: 1 },
            { text: 'Cómo presentar el estado de resultados', ans: 0 },
            { text: 'Cómo elegir una muestra de facturas', ans: 1 },
            { text: 'Cómo emitir la opinión del auditor', ans: 1 },
          ],
        },
      },
      {
        ask: 'Un compañero dice: «Como auditamos con las NIA, el cliente debe preparar sus estados con las NIA». ¿Qué le corriges?',
        options: [
          { text: 'Nada, las NIA sirven para las dos cosas', reply: 'Las NIA solo dicen cómo **auditar**. El cliente prepara con un marco contable, como las **NIF**.' },
          { text: 'El cliente prepara con las NIF y el auditor audita con las NIA', ok: true, reply: '¡Bien! Cada quien con su regla.' },
          { text: 'En México no se usan las NIA', reply: 'Sí se usan: el **IMCP** las adopta y difunde. El cliente prepara con NIF; el auditor audita con NIA.' },
        ],
      },
    ],
    // ¿Cómo se ordenan las NIA?
    [
      { text: 'Las NIA se agrupan por centenas, como los **pasillos de un súper** 🛒. Si sabes el pasillo, sabes de qué trata la norma.' },
      { text: 'Los pasillos siguen el orden de una auditoría:\n🧭 **200:** principios generales\n⚠️ **300-400:** riesgos y respuesta\n🔎 **500:** evidencia\n🤝 **600:** uso del trabajo de otros\n📝 **700:** conclusiones e informe' },
      {
        order: {
          title: 'Ordena los pasillos',
          steps: ['200 · Principios generales', '300-400 · Riesgos y respuesta', '500 · Evidencia', '600 · Trabajo de otros', '700 · Conclusiones e informe'],
          done: 'Del principio al informe, como avanza una auditoría.',
        },
      },
      {
        sort: {
          title: '¿En qué pasillo está?',
          buckets: ['200 Principios', '300-400 Riesgos', '500 Evidencia'],
          items: [
            { text: 'NIA 230: documentación', bucket: 0, why: 'Documentar es un principio general: pasillo 200.' },
            { text: 'NIA 240: fraude', bucket: 0, why: 'Las responsabilidades ante el fraude están en el pasillo 200.' },
            { text: 'NIA 315: identificar y valorar riesgos', bucket: 1, why: 'Riesgos: pasillo 300-400.' },
            { text: 'NIA 320: materialidad', bucket: 1, why: 'La materialidad se fija al planear y responder a riesgos: 300-400.' },
            { text: 'NIA 530: muestreo', bucket: 2, why: 'El muestreo es una forma de obtener evidencia: pasillo 500.' },
            { text: 'NIA 505: confirmaciones externas', bucket: 2, why: 'Una confirmación es evidencia: pasillo 500.' },
          ],
        },
      },
      {
        ask: 'Beto busca cómo formar la **opinión** y redactar el informe. ¿Qué pasillo?',
        options: [
          { text: '200', reply: 'El 200 son principios generales. La opinión y el informe están al final: pasillo **700** (NIA 700).' },
          { text: '500', reply: 'El 500 es evidencia. La opinión y el informe están en el **700**.' },
          { text: '700', ok: true, reply: '¡Eso! Conclusiones e informe: **NIA 700**.' },
        ],
      },
      { tip: 'Truco: no memorices cada número. Recuerda el **pasillo** y encontrarás la norma.' },
    ],
    // ¿Qué parte de una NIA obliga?
    [
      { text: 'Beto abre una NIA y ve muchas páginas 😵. ¿Todo es obligatorio?' },
      {
        ask: '¿Qué crees?',
        options: [
          { text: 'Sí, cada línea obliga', reply: 'No todo. Solo los **requisitos** obligan; lo demás ayuda a entenderlos.' },
          { text: 'Solo los requisitos', ok: true, reply: '¡Bien! Suelen decir «deberá».' },
          { text: 'Nada, son sugerencias', reply: 'Los **requisitos** sí son obligatorios.' },
        ],
      },
      { text: 'Cada NIA tiene las mismas partes:\n📖 Introducción\n🎯 Objetivo: lo que el auditor debe lograr\n🔤 Definiciones\n✅ **Requisitos:** lo que **deberá** hacer (obligatorio)\n💡 **Guía de aplicación:** ejemplos para cumplir los requisitos. No agrega obligaciones, pero hace falta para entenderlos.' },
      {
        order: {
          title: 'Ordena las partes de una NIA',
          steps: ['Introducción', 'Objetivo', 'Definiciones', 'Requisitos', 'Guía de aplicación y otras anotaciones explicativas'],
          done: 'Así está armada cada NIA.',
        },
      },
      { text: 'La **NIA 200** es la base de todo: buscar **seguridad razonable** de que no hay errores importantes (incorrecciones materiales), por fraude o error.' },
      {
        multi: {
          title: '¿Qué pide la NIA 200? Marca todas.',
          items: [
            { text: 'Cumplir la ética, incluida la independencia', ok: true },
            { text: 'Aplicar escepticismo y juicio profesional', ok: true },
            { text: 'Obtener evidencia suficiente y adecuada', ok: true },
            { text: 'Revisar el 100 % de las operaciones', ok: false },
            { text: 'Dar seguridad absoluta de que no hay fraude', ok: false },
          ],
          why: 'Ética, escepticismo, juicio y evidencia suficiente y adecuada. La seguridad es **razonable**, no absoluta. Y se cumplen **todas** las NIA relevantes del encargo.',
        },
      },
      { tip: 'Cada despacho necesita **gestión de la calidad**. Ejemplo: un socio que no participó revisa los encargos de mayor riesgo antes de firmar.' },
    ],
  ],
}
