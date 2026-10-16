import type { InteractiveLesson } from './types'

export const intAUD07: InteractiveLesson = {
  lessonId: 'AUD-07',
  sections: [
    // ¿Qué es un riesgo empresarial?
    [
      { text: 'Un **riesgo** es la posibilidad de que algo pase y afecte lo que quieres lograr. Si una panadería 🥐 quiere vender 1,000 conchas al día, un riesgo es que se descomponga el horno.' },
      {
        ask: '¿Contra qué se evalúan los riesgos?',
        options: [
          { text: 'Contra los objetivos del negocio', ok: true, reply: '¡Eso! No se evalúan en el aire: siempre contra una meta concreta, como crecer en ventas o abrir sucursales.' },
          { text: 'Contra lo que hace la competencia', reply: 'Compararse con empresas del giro ayuda a encontrar riesgos, pero el punto de partida son los **objetivos**.' },
          { text: 'Contra el saldo de Bancos', reply: 'No. El punto de partida son los objetivos de la empresa.' },
        ],
      },
      { text: 'Una cadena de farmacias 💊 quiere abrir 10 sucursales. Clasifica sus riesgos:' },
      {
        sort: {
          title: '¿Qué tipo de riesgo es?',
          buckets: ['Estratégico', 'Operativo', 'Financiero', 'Cumplimiento', 'Reputacional'],
          items: [
            { text: 'No conseguir locales bien ubicados', bucket: 0, why: 'Afecta el rumbo del plan de crecimiento: estratégico.' },
            { text: 'Que falle el sistema de inventarios', bucket: 1, why: 'Falla en procesos o sistemas: operativo.' },
            { text: 'Recibir una multa sanitaria', bucket: 3, why: 'Incumplir una norma: cumplimiento.' },
            { text: 'Que suba el tipo de cambio de medicinas importadas', bucket: 2, why: 'Tipo de cambio: financiero.' },
            { text: 'Una queja viral en redes sobre mala atención', bucket: 4, why: 'Pierdes la confianza de los clientes: reputacional.' },
            { text: 'Llega un competidor nuevo a la zona', bucket: 0, why: 'Cambio del mercado que afecta el rumbo: estratégico.' },
            { text: 'Clientes de crédito que no pagan', bucket: 2, why: 'Riesgo de cobranza: financiero.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué sirve para encontrar riesgos? Marca todas.',
          items: [
            { text: 'Talleres con los responsables de cada proceso', ok: true },
            { text: 'Revisar pérdidas e incidentes pasados', ok: true },
            { text: 'Análisis de escenarios (¿qué pasa si…?)', ok: true },
            { text: 'Compararse con empresas del mismo giro', ok: true },
            { text: 'Esperar a que el riesgo pase para anotarlo', ok: false },
          ],
          why: 'Talleres, incidentes pasados, escenarios y comparación con el giro. La idea es adelantarse, no esperar.',
        },
      },
      { tip: 'La administración de riesgos empresariales (**ERM**) mira **todos** los riesgos juntos, no cada área por separado.' },
    ],
    // Medir el riesgo: probabilidad, impacto y mapa de calor
    [
      { text: 'Cada riesgo se califica de 1 a 5 en **probabilidad** (¿qué tan seguido?) y en **impacto** (¿qué tan grave?). Se **multiplican**: sale una calificación de 1 a 25 para el **mapa de calor** 🔥.' },
      {
        calc: {
          question: 'Un taller mecánico 🔧 califica el riesgo de que se roben herramientas: probabilidad **3** e impacto **4**. ¿Cuál es su calificación?',
          answer: 12,
          unit: 'puntos',
          hint: 'multiplica, no sumes.',
          why: '3 × 4 = **12**. Sumar (3 + 4 = 7) es el error típico.',
        },
      },
      { text: 'La tiendita de Doña Lupe maneja mucho efectivo: riesgo de robo con probabilidad 4 e impacto 5 (**inherente**: sin controles). Ponle controles y mira el **residual**.' },
      {
        sim: {
          title: 'Mapa de calor: robo de efectivo',
          inputs: [
            { key: 'c', label: 'Controles que hacen que pase menos (cámaras, cortes de caja, …)', min: 0, max: 3, step: 1, value: 0 },
            { key: 'd', label: 'Depósitos al banco al día (deja menos efectivo en caja)', min: 0, max: 2, step: 1, value: 0 },
          ],
          outputs: [
            { label: 'Probabilidad residual (1 a 5)', calc: (x) => Math.max(1, 4 - x.c) },
            { label: 'Impacto residual (1 a 5)', calc: (x) => 5 - x.d },
            { label: 'Calificación residual', calc: (x) => Math.max(1, 4 - x.c) * (5 - x.d), main: true },
          ],
          goal: {
            text: 'Lleva el riesgo a **bajo**: una calificación de **5 o menos**.',
            check: (x) => Math.max(1, 4 - x.c) * (5 - x.d) <= 5,
            done: 'Los controles bajan la probabilidad o el impacto, y con eso la calificación. Lo que queda es el **riesgo residual**.',
          },
        },
      },
      {
        ask: 'Riesgo **inherente** y riesgo **residual**: ¿cuál es cuál?',
        options: [
          { text: 'Inherente: antes de controles. Residual: lo que queda después', ok: true, reply: '¡Bien! El inherente es como si nadie hiciera nada; el residual queda con los controles que ya existen.' },
          { text: 'Inherente: después de controles. Residual: antes', reply: 'Al revés: **residual** es lo que «resta» después de los controles.' },
          { text: 'Son lo mismo con otro nombre', reply: 'No. Se miden en dos momentos distintos: antes y después de los controles.' },
        ],
      },
      {
        calc: {
          question: 'Hay **15%** de probabilidad al año de perder **$400,000** por una inundación. ¿Cuál es la **pérdida esperada** al año?',
          answer: 60000,
          hint: '15% = 0.15; multiplícalo por el impacto en pesos.',
          why: '0.15 × $400,000 = **$60,000** al año. Es un promedio, no lo que perderás seguro.',
        },
      },
      { tip: 'Revisa también los riesgos con **impacto 5** aunque su calificación sea media: si pasan, pueden ser muy dañinos.' },
    ],
    // Responder y dar seguimiento
    [
      { text: 'Hay cuatro respuestas: **evitar** (dejar la actividad), **reducir** (poner controles), **compartir** (seguros, contratos) y **aceptar** (vivir con él).' },
      {
        sort: {
          title: '¿Qué respuesta eligió la cafetería ☕?',
          buckets: ['Evitar', 'Reducir', 'Compartir o transferir', 'Aceptar'],
          items: [
            { text: 'Decide no abrir sucursal en una zona muy insegura', bucket: 0, why: 'Deja la actividad que causa el riesgo: evitar.' },
            { text: 'Pide doble firma para pagos grandes', bucket: 1, why: 'Pone un control: reducir.' },
            { text: 'Contrata un seguro de daños', bucket: 2, why: 'Pasa parte del golpe a la aseguradora: compartir.' },
            { text: 'Asume que de vez en cuando se rompe una taza', bucket: 3, why: 'Controlarlo cuesta más de lo que protege: aceptar.' },
            { text: 'Subcontrata el reparto a domicilio', bucket: 2, why: 'Subcontratar es una forma de compartir o transferir.' },
            { text: 'Instala cámaras en la caja', bucket: 1, why: 'Un control más: reducir.' },
          ],
        },
      },
      { text: 'Un control conviene si lo que **ahorra en pérdida esperada** es mayor que lo que cuesta.' },
      {
        calc: {
          question: 'Una bodega tiene **20%** de probabilidad al año de perder **$500,000**. Unas alarmas cuestan **$30,000** al año y bajan la probabilidad a **4%**. ¿Cuál es el **beneficio neto** del control?',
          answer: 50000,
          hint: 'pérdida sin control − pérdida con control − costo del control.',
          why: 'Sin control: 0.20 × $500,000 = $100,000. Con control: 0.04 × $500,000 = $20,000. Ahorro $80,000 − costo $30,000 = **$50,000**. Positivo: conviene.',
        },
      },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Apetito de riesgo', 'Cuánto riesgo acepta la empresa para lograr sus metas; lo aprueba el consejo o los dueños'],
            ['Tolerancia', 'El margen aceptable alrededor de una meta concreta'],
            ['Registro de riesgos', 'Lista con descripción, dueño, calificaciones, respuesta y fecha de revisión'],
            ['Indicador clave de riesgo (KRI)', 'Señal temprana que avisa que un riesgo está creciendo'],
          ],
        },
      },
      { tip: 'Si el riesgo residual queda **por encima del apetito**, hay que actuar o escalarlo.' },
    ],
  ],
}
