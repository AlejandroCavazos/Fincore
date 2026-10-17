import type { InteractiveLesson } from './types'

export const intAUD06: InteractiveLesson = {
  lessonId: 'AUD-06',
  sections: [
    // ¿Qué es el cubo COSO?
    [
      { text: 'Irma dirige Gimnasios Fuerza 🏋️, con varias sucursales. Busca un «mapa» para ordenar sus controles.' },
      { text: 'Ese mapa es **COSO**: un comité de asociaciones profesionales de Estados Unidos que publicó el **Marco Integrado de Control Interno**. Es el más usado en el mundo, también en México. Su versión actualizada es de **2013**.' },
      { text: 'COSO se dibuja como un **cubo** 🧊:\n🎯 Una cara: **3 objetivos**. Operativos (usar bien los recursos), de información (reportes confiables) y de cumplimiento (seguir leyes).\n🧩 Otra cara: los **5 componentes**.\n🏢 La tercera: la **estructura**. Entidad, división, unidad, función.' },
      {
        sort: {
          title: '¿Qué tipo de objetivo es?',
          buckets: ['Operativo', 'De información', 'De cumplimiento'],
          items: [
            { text: 'Cobrar todas las membresías', bucket: 0, why: 'Usar bien los recursos: operativo.' },
            { text: 'Reportar bien los ingresos del mes', bucket: 1, why: 'Reporte confiable: información.' },
            { text: 'Respetar la ley de protección de datos de los socios', bucket: 2, why: 'Seguir una ley: cumplimiento.' },
            { text: 'Que el reporte interno de asistencia llegue sin errores', bucket: 1, why: 'Los reportes internos o no financieros también son de información.' },
            { text: 'Cumplir las regulaciones del local', bucket: 2, why: 'Apego a regulaciones: cumplimiento.' },
          ],
        },
      },
      {
        ask: '¿Qué dice el cubo sobre los 5 componentes?',
        options: [
          { text: 'Que solo aplican a la oficina central', reply: 'Aplican a **cada objetivo y a cada nivel**: entidad, división, unidad y función.' },
          { text: 'Que aplican a cada objetivo y a cada nivel de la empresa', ok: true, reply: '¡Exacto! Por eso se dibuja como cubo: todo se cruza con todo.' },
          { text: 'Que solo aplican a los objetivos de información', reply: 'Aplican a los **tres** objetivos y a cada nivel de la empresa.' },
        ],
      },
      { tip: 'Tres objetivos: **operativos**, **de información** y **de cumplimiento**.' },
    ],
    // Las cinco piezas de COSO
    [
      { text: 'En una sucursal de Irma se pierden suplementos 💊. Así responde con las **5 piezas** de COSO:' },
      { text: '🧭 **Entorno de control:** el «tono desde arriba»: integridad y valores.\n⚠️ **Evaluación de riesgos:** ¿qué podría salir mal?\n🛠️ **Actividades de control:** lo que hacemos para evitarlo.\n📣 **Información y comunicación:** que se entere quien debe, a tiempo.\n🔁 **Supervisión:** ¿todo sigue funcionando?' },
      {
        match: {
          title: 'Une cada pieza con lo que hizo Irma',
          pairs: [
            ['Entorno de control', 'Despide a un gerente que maquillaba cortes de caja'],
            ['Evaluación de riesgos', 'Detecta que la pérdida de suplementos es su mayor riesgo'],
            ['Actividades de control', 'Exige un conteo diario de suplementos'],
            ['Información y comunicación', 'El sistema manda un reporte de faltantes cada noche'],
            ['Supervisión', 'Cada mes un contador externo revisa que los conteos sí se hagan'],
          ],
        },
      },
      {
        ask: 'Irma da el ejemplo: cumple el código de ética antes que nadie. ¿Qué pieza es ese «tono desde arriba»?',
        options: [
          { text: 'Actividades de control', reply: 'Esas son acciones concretas como conciliaciones. El tono desde arriba es **entorno de control**.' },
          { text: 'Entorno de control', ok: true, reply: '¡Bien! Es la base de todo.' },
          { text: 'Supervisión', reply: 'Supervisión revisa que todo siga funcionando. El tono desde arriba es **entorno de control**.' },
        ],
      },
      {
        ask: 'Gimnasios Fuerza tenía un buen control de altas de empleados, pero dejó de hacerse y en un año **nadie lo notó**. ¿Qué pieza falló?',
        options: [
          { text: 'Evaluación de riesgos', reply: 'El control existía. Lo que faltó fue **revisar que siguiera funcionando**: supervisión.' },
          { text: 'Supervisión', ok: true, reply: '¡Exacto! Nadie revisó que el control se siguiera aplicando.' },
          { text: 'Información y comunicación', reply: 'El problema es que nadie **revisó** que el control siguiera vivo: supervisión.' },
        ],
      },
      {
        sort: {
          title: '¿Qué pieza es?',
          buckets: ['Entorno de control', 'Actividades de control', 'Supervisión'],
          items: [
            { text: 'El consejo aprueba un código de ética y lo aplica a los directivos', bucket: 0, why: 'Integridad desde arriba: entorno.' },
            { text: 'El encargado concilia cada día las ventas contra el efectivo', bucket: 1, why: 'Acción concreta que reduce un riesgo.' },
            { text: 'Los pagos grandes necesitan autorización', bucket: 1, why: 'Una autorización es una actividad de control.' },
            { text: 'Auditoría interna visita sucursales para ver que se concilie', bucket: 2, why: 'Revisa que el control siga funcionando: supervisión.' },
          ],
        },
      },
    ],
    // ¿Cuándo funciona el control interno?
    [
      { text: 'Irma pregunta: «¿Cómo sé que mi control interno **sí funciona**?» 🤔' },
      { text: 'COSO 2013 baja las 5 piezas a **17 principios**, repartidos **5-4-3-3-2** (entorno, riesgos, actividades, información, supervisión).' },
      {
        calc: {
          question: '¿Cuántos principios suman evaluación de riesgos y actividades de control juntos?',
          answer: 7,
          unit: 'principios',
          hint: 'el reparto es 5-4-3-3-2, en el orden de las piezas.',
          why: 'Riesgos tiene 4 y actividades 3: 4 + 3 = **7**.',
        },
      },
      { text: 'Es **eficaz** cuando las 5 piezas y sus principios:\n✅ están **presentes** (existen en el diseño),\n⚙️ **funcionan** en la práctica y\n🔗 **operan juntos**.' },
      {
        ask: 'Cuatro piezas funcionan muy bien, pero una tiene una **deficiencia grave**. ¿Es eficaz?',
        options: [
          { text: 'Sí, cuatro de cinco es suficiente', reply: 'Con una deficiencia grave en una pieza, el sistema **no** es eficaz, aunque las demás estén muy bien.' },
          { text: 'No, una deficiencia grave basta para que no lo sea', ok: true, reply: '¡Correcto! Las cinco deben estar presentes, funcionar y operar juntas.' },
          { text: 'Depende de cuál pieza sea', reply: 'Cualquier pieza con deficiencia grave impide que el sistema sea eficaz.' },
        ],
      },
      {
        ask: 'Otra empresa hace conciliaciones excelentes, pero su director ordena registrar **ventas falsas**. ¿Qué pieza falla?',
        options: [
          { text: 'Actividades de control', reply: 'Las conciliaciones están bien. Lo que está roto es el tono desde arriba: **entorno de control**.' },
          { text: 'Entorno de control', ok: true, reply: '¡Exacto! Y por eso su control interno no es eficaz.' },
          { text: 'Ninguna, las conciliaciones lo compensan', reply: 'Nada compensa una deficiencia grave del **entorno de control**.' },
        ],
      },
      { tip: 'No lo confundas con **COSO ERM**: otro marco del mismo comité, sobre gestión de riesgos ligada a la estrategia.' },
    ],
  ],
}
