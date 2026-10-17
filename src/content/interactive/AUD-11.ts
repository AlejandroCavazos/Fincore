import type { InteractiveLesson } from './types'

export const intAUD11: InteractiveLesson = {
  lessonId: 'AUD-11',
  sections: [
    // Los cimientos de los sistemas
    [
      { text: 'La Librería Hojas 📚 vende en línea. Su sistema calcula solo los descuentos. ¿Puede el auditor confiar en ese cálculo?' },
      {
        ask: '¿De qué depende?',
        options: [
          { text: 'De que nadie pueda cambiarlo sin control', ok: true, reply: '¡Eso! Si cualquiera puede cambiarlo, no sabes si funcionó igual todo el año.' },
          { text: 'De que la computadora sea nueva', reply: 'Lo nuevo no garantiza nada. Depende de que **nadie pueda cambiar** el cálculo sin control.' },
          { text: 'De nada: lo automático siempre está bien', reply: 'Lo automático hace lo que le programan. Depende de que **nadie pueda cambiarlo** sin control.' },
        ],
      },
      {
        text: 'Eso lo cuidan los **controles generales de TI** (ITGC): protegen el **ambiente** donde corren todos los sistemas, como los cimientos de una casa 🏠. Tres dominios:\n🔑 **Acceso:** quién entra y qué puede hacer.\n🛠️ **Cambios:** cómo se modifican los programas.\n⚙️ **Operaciones:** procesos automáticos, respaldos y fallas.',
      },
      {
        sort: {
          title: '¿A qué dominio pertenece cada control?',
          buckets: ['Acceso a programas y datos', 'Cambios a programas', 'Operaciones de cómputo'],
          items: [
            { text: 'Cada jefe revisa cada trimestre los permisos de su equipo', bucket: 0, why: 'Quién entra y con qué permisos es **acceso**.' },
            { text: 'El usuario aprueba las pruebas antes de pasar un cambio', bucket: 1, why: 'Modificar un programa es **cambio**.' },
            { text: 'Vigilar el cierre nocturno y atender sus fallas', bucket: 2, why: 'Procesos automáticos: **operaciones**.' },
            { text: 'Desactivar la cuenta de quien renunció, el mismo día', bucket: 0, why: 'Dar y quitar usuarios es **acceso**.' },
            { text: 'Separar los ambientes de desarrollo y producción', bucket: 1, why: 'Sirve para que ningún cambio llegue a producción sin probarse: **cambios**.' },
            { text: 'Probar cada cierto tiempo que los respaldos se restauran', bucket: 2, why: 'Respaldos: **operaciones**.' },
          ],
        },
      },
      {
        ask: 'En Hojas, **cualquier programador** puede cambiar el cálculo de descuentos sin aprobación. ¿Qué concluye el auditor?',
        options: [
          { text: 'No puede confiar en que el cálculo funcionó igual todo el año', ok: true, reply: '¡Exacto! Si fallan los cimientos (cambios), no puedes confiar en lo de arriba.' },
          { text: 'Nada grave: es automático, así que está bien', reply: 'Si cualquiera puede cambiarlo, **no sabes** si funcionó igual todo el año.' },
          { text: 'Solo revisa las ventas de diciembre', reply: 'El problema es del **ambiente**, no de un mes: el cálculo pudo cambiar en cualquier momento.' },
        ],
      },
      { tip: 'Para ordenar el trabajo, los auditores de TI usan marcos como **COBIT** (gobierno y gestión de TI) e **ISO/IEC 27001** (seguridad de la información).' },
    ],
    // ¿Quién entra y quién cambia?
    [
      { text: 'Un vendedor de Hojas renunció el viernes. El lunes alguien **entró al sistema con su usuario**.' },
      {
        ask: '¿Qué falló?',
        options: [
          { text: 'No se desactivó su cuenta a tiempo', ok: true, reply: '¡Eso! La cuenta debe quitarse **el mismo día** de la salida.' },
          { text: 'Nada, es normal', reply: 'No es normal: la cuenta debió **desactivarse el mismo día** en que se fue.' },
          { text: 'Su contraseña era corta', reply: 'Aunque fuera larga, la cuenta **seguía activa**. Debió quitarse el mismo día.' },
        ],
      },
      { text: 'El auditor revisa la vida de cada usuario:\n➕ **Alta** con aprobación del jefe.\n➖ **Baja** el mismo día de la salida.\n👀 **Revisión periódica:** cada quien solo con lo necesario (**mínimo privilegio**).' },
      { text: 'Prueba de **bajas**: toma una muestra de quienes salieron según Recursos Humanos y compara su **fecha de salida** con la fecha en que se **desactivó** su cuenta.' },
      {
        calc: {
          question: 'El auditor revisa **25** bajas de Hojas y en **4** la cuenta se desactivó tarde. ¿Cuál es la **tasa de excepción**, en porcentaje?',
          answer: 16,
          unit: '%',
          hint: 'Excepciones ÷ muestra × 100.',
          why: '4 ÷ 25 = 0.16 → **16%**, y cumplieron 25 − 4 = 21. Divide entre **toda** la muestra, no entre los que cumplieron (4 ÷ 21).',
        },
      },
      {
        ask: 'La cuenta de un excontador **siguió entrando** al sistema contable dos semanas después de su salida. ¿Qué hace el auditor?',
        options: [
          { text: 'Lo reporta como deficiencia, pide desactivarla ya e investigar qué se hizo con ella', ok: true, reply: '¡Bien! Es una excepción grave: hay que ver qué operaciones se hicieron con esos accesos.' },
          { text: 'La desactiva él mismo y listo', reply: 'Eso le toca a la administración; el auditor no ejecuta controles por ella. Lo **reporta** y pide **investigar** qué se hizo.' },
          { text: 'Nada, solo fue un retraso administrativo', reply: 'Alguien entró después de irse: es grave. Se **reporta** y se **investiga** qué se hizo.' },
        ],
      },
      { text: 'En **cambios**, la regla de oro: quien programa **no** sube su propio código a producción. Así otra persona verifica que no haya nada indebido.' },
      {
        order: {
          title: 'Ordena el camino de un cambio',
          steps: [
            'Solicitud del cambio aprobada',
            'Pruebas en un ambiente separado',
            'Aprobación del usuario',
            'Paso a producción por alguien distinto al programador',
          ],
          done: 'Aunque sea **urgente**, el programador no lo sube solo: los cambios de emergencia también se registran y se aprueban.',
        },
      },
    ],
    // ¿Y si el sistema falla?
    [
      { text: 'La tienda en línea de Hojas se cayó varias veces este mes. La **disponibilidad** dice qué parte del tiempo **sí funcionó**. Un mes de 30 días tiene **720 horas**.' },
      {
        sim: {
          title: 'La tienda en línea de Hojas',
          inputs: [{ key: 'h', label: 'Horas caída en el mes', min: 0, max: 72, step: 6, value: 36 }],
          outputs: [
            { label: 'Horas que sí funcionó', calc: (x) => 720 - x.h, unit: 'horas' },
            { label: 'Disponibilidad', calc: (x) => Math.round(((720 - x.h) / 720) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Baja las horas caída hasta lograr una disponibilidad de **99% o más**.',
            check: (x) => (720 - x.h) / 720 >= 0.99,
            done: 'Disponibilidad = (horas totales − horas caída) ÷ horas totales. El auditor la compara con el nivel de servicio prometido.',
          },
        },
      },
      {
        calc: {
          question: 'Otro mes, la tienda estuvo caída **72 horas** de 720. ¿Cuál fue su disponibilidad, en porcentaje?',
          answer: 90,
          unit: '%',
          hint: '(720 − 72) ÷ 720 × 100.',
          why: '720 − 72 = 648. 648 ÷ 720 = 0.90 → **90%**. Ojo: 72 ÷ 720 = 10% es el tiempo **caído**, no la disponibilidad.',
        },
      },
      { text: 'Para la **continuidad** hay dos medidas:\n💾 **RPO:** cuántos datos (en tiempo) puedes perder. Si respaldas cada 4 horas, podrías perder hasta 4 horas.\n⏱️ **RTO:** en cuánto tiempo debes volver a operar.' },
      {
        calc: {
          question: 'Hojas respalda cada **24 horas**. Si el sistema falla justo antes del siguiente respaldo, ¿cuántas horas de datos podría perder como máximo?',
          answer: 24,
          unit: 'horas',
          hint: 'Lo que pasa entre un respaldo y otro.',
          why: 'Hasta **24 horas**. Si el negocio solo aguanta perder 4 horas, no cumple: tendría que respaldar más seguido.',
        },
      },
      {
        ask: 'Hojas respalda cada noche y guarda las copias en otro lugar, pero **nunca ha probado restaurarlas**. ¿Qué opina el auditor?',
        options: [
          { text: 'Es un riesgo: hay que probar que se pueden restaurar', ok: true, reply: '¡Eso! Un respaldo que nunca se ha probado **puede no servir**.' },
          { text: 'Todo bien: hay respaldo diario y fuera del sitio', reply: 'Falta lo más importante: un respaldo que nunca se ha probado **puede no servir**.' },
          { text: 'Sobra el respaldo si hay antivirus', reply: 'El antivirus no sustituye al respaldo. Y el respaldo hay que **probarlo**.' },
        ],
      },
      { tip: 'Ciberseguridad básica: **parches al día, antivirus, dos factores, capacitación contra correos falsos (phishing) y plan de respuesta a incidentes**.' },
    ],
  ],
}
