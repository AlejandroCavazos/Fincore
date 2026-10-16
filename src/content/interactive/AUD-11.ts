import type { InteractiveLesson } from './types'

export const intAUD11: InteractiveLesson = {
  lessonId: 'AUD-11',
  sections: [
    // Controles generales de TI
    [
      { text: 'Los **controles generales de TI** (ITGC) no revisan una venta o un pago en particular: cuidan el **ambiente** donde corren todos los sistemas. Son los cimientos de la casa 🏠.' },
      {
        sort: {
          title: '¿A qué dominio pertenece cada control?',
          buckets: ['Acceso a programas y datos', 'Cambios a programas', 'Operaciones de cómputo'],
          items: [
            { text: 'Decidir quién puede entrar al sistema de nómina y qué puede hacer', bucket: 0, why: 'Quién entra y qué hace es **acceso**.' },
            { text: 'Aprobar y probar una modificación al cálculo de intereses', bucket: 1, why: 'Modificar un sistema es un **cambio a programas**.' },
            { text: 'Hacer el respaldo de la información cada noche', bucket: 2, why: 'Respaldos y procesos automáticos son **operaciones de cómputo**.' },
            { text: 'Atender una falla del cierre nocturno', bucket: 2, why: 'Atender fallas es parte de **operaciones**.' },
            { text: 'Quitarle la cuenta a un empleado que renunció', bucket: 0, why: 'Dar y quitar usuarios es **acceso**.' },
            { text: 'Subir una nueva versión del sistema de facturación', bucket: 1, why: 'Una nueva versión es un **cambio a programas**.' },
          ],
        },
      },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['ITGC', 'Controles que protegen el ambiente donde corren todos los sistemas'],
            ['COBIT', 'Marco de ISACA para el gobierno y la gestión de TI'],
            ['ISO/IEC 27001', 'Norma para sistemas de gestión de seguridad de la información'],
            ['Control automático del ERP', 'Un cálculo o validación que hace el sistema solo'],
          ],
        },
      },
      {
        ask: 'En un despacho contable revisan una empresa donde **cualquier programador** puede cambiar el cálculo de intereses en producción sin aprobación. ¿Qué concluye el auditor?',
        options: [
          { text: 'Nada grave: el cálculo es automático, así que siempre está bien', reply: 'Justo al revés: si cualquiera puede cambiarlo, no sabes si funcionó igual todo el año.' },
          { text: 'No puede confiar en que el cálculo automático funcionó igual todo el año', ok: true, reply: '¡Exacto! Si fallan los cimientos (el control de cambios), no puedes confiar en lo de arriba.' },
          { text: 'Solo debe revisar las transacciones de diciembre', reply: 'El problema es del **ambiente**, no de un mes: el cálculo pudo cambiar en cualquier momento.' },
        ],
      },
      { tip: 'Si los controles generales de TI fallan, tampoco puedes confiar en los **controles automáticos** que dependen de ellos.' },
    ],
    // Accesos y administración de cambios
    [
      { text: 'En **cambios**, la regla de oro: el programador **no** sube él solo su propio código. Ordena cómo debe pasar un cambio.' },
      {
        order: {
          title: 'Ordena el camino de un cambio a un programa',
          steps: [
            'Solicitud del cambio aprobada',
            'Pruebas en un ambiente separado',
            'Aprobación del usuario',
            'Paso a producción por alguien distinto al programador',
          ],
          done: 'Así nadie mete algo indebido sin que otra persona lo note.',
        },
      },
      { text: 'Prueba de **bajas**: tomas a los empleados que salieron según Recursos Humanos y comparas su **fecha de salida** con la fecha en que se **desactivó** su cuenta.' },
      {
        calc: {
          question: 'Revisas **25** bajas de Grupo Tacos Felices 🌮 y en **4** la cuenta se desactivó tarde. ¿Cuál es la **tasa de excepción**?',
          answer: 16,
          unit: '%',
          hint: 'excepciones ÷ tamaño de la muestra × 100.',
          why: '4 ÷ 25 = 0.16 → 0.16 × 100 = **16%**. Divide entre **toda** la muestra, no entre los que cumplieron.',
        },
      },
      {
        calc: {
          question: 'Con esa misma muestra de **25** bajas y **4** excepciones, ¿cuántos casos **cumplieron**?',
          answer: 21,
          unit: 'casos',
          hint: 'muestra − excepciones.',
          why: '25 − 4 = **21** casos cumplieron.',
        },
      },
      {
        multi: {
          title: '¿Qué son buenas prácticas de accesos y cambios? Marca todas.',
          items: [
            { text: 'Dar de alta usuarios con solicitud y aprobación del jefe', ok: true },
            { text: 'Quitar la cuenta el mismo día en que la persona se va', ok: true },
            { text: 'Que cada jefe revise de vez en cuando los permisos de su equipo', ok: true },
            { text: 'Dar permisos de administrador a todos para no batallar', ok: false },
            { text: 'Que el programador pase sus propios cambios a producción', ok: false },
            { text: 'Tener ambientes separados de desarrollo, pruebas y producción', ok: true },
          ],
          why: '**Mínimo privilegio**: cada quien solo con lo necesario y pocas cuentas de administrador. Y quien programa no pasa sus cambios a producción.',
        },
      },
      { tip: 'Si alguien **siguió entrando** al sistema después de irse, es una excepción grave que hay que investigar.' },
    ],
    // Operaciones, respaldos, continuidad y ciberseguridad
    [
      { text: 'La **disponibilidad** dice qué porcentaje del tiempo el sistema sí funcionó. Un mes de 30 días tiene **720 horas**.' },
      {
        sim: {
          title: 'El sistema de ventas de la cafetería ☕',
          inputs: [
            { key: 'h', label: 'Horas caído en el mes', min: 0, max: 72, step: 6, value: 36 },
          ],
          outputs: [
            { label: 'Horas que sí funcionó', calc: (x) => 720 - x.h, unit: 'horas' },
            { label: 'Disponibilidad (%)', calc: (x) => Math.round(((720 - x.h) / 720) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Baja las horas caído hasta lograr una disponibilidad de **99% o más**.',
            check: (x) => (720 - x.h) / 720 >= 0.99,
            done: 'Disponibilidad = (horas totales − horas caído) ÷ horas totales × 100. Se compara con el nivel de servicio prometido.',
          },
        },
      },
      { text: 'El **RPO** es cuántos datos (en tiempo) aceptas perder. El **RTO** es en cuánto tiempo debes volver a operar.' },
      {
        calc: {
          question: 'El taller acepta perder como máximo **4 horas** de datos (RPO), pero respalda cada **24 horas**. ¿Cuál es la **brecha del RPO**?',
          answer: 20,
          unit: 'horas',
          hint: 'horas entre respaldos − RPO.',
          why: '24 − 4 = **20 horas** de brecha. Es mayor que cero: la meta no se cumple y hay que respaldar más seguido.',
        },
      },
      {
        ask: 'La empresa respalda todo cada noche y guarda las copias en otro lugar, pero **nunca ha probado restaurarlas**. ¿Qué opina el auditor?',
        options: [
          { text: 'Todo bien: hay respaldo diario y fuera del sitio', reply: 'Falta lo más importante: un respaldo que nunca se ha probado **puede no servir**.' },
          { text: 'Es un riesgo: hay que probar que los respaldos se pueden restaurar', ok: true, reply: '¡Eso! Lo que más importa de un respaldo es que **se pruebe restaurarlo**.' },
          { text: 'Sobra el respaldo si hay antivirus', reply: 'El antivirus no sustituye al respaldo. Son medidas distintas.' },
        ],
      },
      { tip: 'Ciberseguridad básica: **parches al día, antivirus, dos factores, capacitación contra phishing y plan de respuesta a incidentes**.' },
    ],
  ],
}
