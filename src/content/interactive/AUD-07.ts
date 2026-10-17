import type { InteractiveLesson } from './types'

export const intAUD07: InteractiveLesson = {
  lessonId: 'AUD-07',
  sections: [
    // ¿Qué puede salir mal?
    [
      { text: 'Don Beto tiene una panadería 🥐 y quiere vender **1,000 conchas al día**. Una mañana se descompone el horno y no vende ni la mitad.' },
      {
        ask: 'Para su meta, ¿qué fue lo del horno?',
        options: [
          { text: 'Un riesgo que se hizo realidad', ok: true, reply: '¡Eso! Algo pasó y afectó lo que quería lograr. Eso es un **riesgo**.' },
          { text: 'Pura mala suerte que nadie podía prever', reply: 'Un horno que se descompone sí se puede prever. Era un **riesgo**: algo que podía pasar y afectar su meta.' },
          { text: 'Un problema de contabilidad', reply: 'Los números lo reflejan, pero el problema fue de operación. Era un **riesgo** para su meta de ventas.' },
        ],
      },
      { text: 'Un **riesgo** es la posibilidad de que algo pase y afecte lo que quieres lograr. Por eso se mide **contra un objetivo**, como vender 1,000 conchas.' },
      {
        text: 'Hay cinco tipos:\n🧭 **Estratégico:** cambios del mercado (llega un competidor).\n⚙️ **Operativo:** fallas en procesos, personas o sistemas.\n💰 **Financiero:** tipo de cambio, tasas, clientes que no pagan.\n📜 **Cumplimiento** y 📣 **reputacional:** multas o perder la confianza de los clientes.',
      },
      {
        match: {
          title: 'Une cada tipo con un riesgo de Don Beto',
          pairs: [
            ['Estratégico', 'Abren otra panadería en la misma cuadra'],
            ['Operativo', 'Se descompone el horno'],
            ['Financiero', 'Las cafeterías que le compran a crédito no le pagan'],
            ['Cumplimiento', 'Le ponen una multa sanitaria'],
            ['Reputacional', 'Una queja viral en redes sobre pan duro'],
          ],
        },
      },
      { text: 'Para encontrar riesgos **antes** de que pasen se usan talleres con los responsables, pérdidas pasadas, escenarios ("¿qué pasa si…?") y comparación con negocios del mismo giro.' },
      {
        multi: {
          title: 'Don Beto quiere adelantarse. ¿Qué le sirve? Marca todas.',
          items: [
            { text: 'Platicar con su panadero y su cajera sobre qué puede fallar', ok: true },
            { text: 'Revisar qué pérdidas tuvo el año pasado', ok: true },
            { text: 'Preguntarse "¿qué pasa si sube mucho la harina?"', ok: true },
            { text: 'Esperar a que algo pase para anotarlo', ok: false },
            { text: 'Ignorar lo que casi nunca pasa aunque sea muy grave', ok: false },
          ],
          why: 'Talleres, pérdidas pasadas y escenarios ayudan a adelantarse. Esperar es reaccionar, y lo raro pero muy grave puede ser lo más dañino.',
        },
      },
      { tip: 'La administración de riesgos empresariales (**ERM**) mira **todos** los riesgos del negocio juntos, no cada área por separado.' },
    ],
    // ¿Qué tan grave es un riesgo?
    [
      { text: 'Don Beto tiene muchos riesgos. ¿Cuál atiende primero? Califica cada uno de 1 a 5 en **probabilidad** (¿qué tan probable?) y en **impacto** (¿qué tan grave?), y los **multiplica**.' },
      {
        calc: {
          question: 'Que se descomponga el horno: probabilidad **3** e impacto **4**. ¿Cuál es su calificación?',
          answer: 12,
          unit: 'puntos',
          hint: 'Multiplica, no sumes: 3 × 4.',
          why: '3 × 4 = **12**, de un máximo de 25. Sumar (3 + 4 = 7) es el error típico.',
        },
      },
      { text: 'Con las calificaciones se arma un **mapa de calor** 🔥: los riesgos rojos (altos) se atienden primero.' },
      { text: 'La caja de Don Beto maneja mucho efectivo. Sin ningún control, el robo tiene probabilidad 4 e impacto 5: **20**. Ese es el riesgo **inherente**. Ponle controles y mira lo que queda: el riesgo **residual**.' },
      {
        sim: {
          title: 'Mapa de calor: robo de efectivo',
          inputs: [
            { key: 'c', label: 'Controles que hacen que pase menos (cámaras, cortes de caja, …)', min: 0, max: 3, step: 1, value: 0 },
            { key: 'd', label: 'Depósitos al banco al día (deja menos efectivo en caja)', min: 0, max: 2, step: 1, value: 0 },
          ],
          outputs: [
            { label: 'Probabilidad residual (1 a 5)', calc: (x) => Math.max(1, 4 - x.c), unit: 'puntos' },
            { label: 'Impacto residual (1 a 5)', calc: (x) => 5 - x.d, unit: 'puntos' },
            { label: 'Calificación residual', calc: (x) => Math.max(1, 4 - x.c) * (5 - x.d), main: true, unit: 'puntos' },
          ],
          goal: {
            text: 'Lleva el riesgo a **bajo**: una calificación de **5 o menos**.',
            check: (x) => Math.max(1, 4 - x.c) * (5 - x.d) <= 5,
            done: 'Los controles bajan la probabilidad o el impacto. Lo que queda después de ellos es el **riesgo residual**.',
          },
        },
      },
      {
        ask: 'Riesgo **inherente** y riesgo **residual**: ¿cuál es cuál?',
        options: [
          { text: 'Inherente: antes de controles. Residual: lo que queda después', ok: true, reply: '¡Bien! El inherente es como si nadie hiciera nada; el residual queda con los controles que ya existen.' },
          { text: 'Inherente: después de controles. Residual: antes', reply: 'Al revés: **residual** es lo que «resta» después de los controles; el inherente es antes de cualquier control.' },
          { text: 'Residual es el riesgo que ya pasó y causó una pérdida', reply: 'Un riesgo que ya pasó es un incidente. El **residual** es lo que queda después de los controles.' },
        ],
      },
      { text: 'Si hay datos, el riesgo también se mide en pesos: **pérdida esperada = probabilidad × impacto**.' },
      {
        calc: {
          question: 'Hay **15%** de probabilidad al año de que una inundación le cueste a Don Beto **$400,000**. ¿Cuál es la **pérdida esperada** al año?',
          answer: 60000,
          hint: '15% = 0.15. Multiplícalo por $400,000.',
          why: '0.15 × $400,000 = **$60,000** al año. Es un promedio para comparar, no lo que perderá seguro. Multiplicar por 15 en vez de 0.15 es el error típico.',
        },
      },
    ],
    // ¿Qué hacemos con cada riesgo?
    [
      {
        text: 'Don Beto ya sabe qué riesgos pesan más. Ahora elige qué hacer con cada uno:\n🚫 **Evitar:** dejar la actividad que causa el riesgo.\n🛡️ **Reducir:** poner controles.\n🤝 **Compartir o transferir:** seguros, contratos, subcontratar.\n👌 **Aceptar:** vivir con él, porque controlarlo cuesta más.',
      },
      {
        match: {
          title: 'Une cada respuesta con lo que hizo Don Beto',
          pairs: [
            ['Evitar', 'No abre sucursal en una zona muy insegura'],
            ['Reducir', 'Da mantenimiento al horno cada mes'],
            ['Compartir o transferir', 'Contrata un seguro contra incendio'],
            ['Aceptar', 'Asume que a veces se rompe una charola barata'],
          ],
        },
      },
      {
        sort: {
          title: '¿Reduce o comparte el riesgo?',
          buckets: ['Reducir', 'Compartir o transferir'],
          items: [
            { text: 'Pide doble firma para pagos grandes', bucket: 0, why: 'Es un control: hace que el problema pase menos. Reduce.' },
            { text: 'Contrata un seguro de daños para la bodega', bucket: 1, why: 'El seguro no hace que pase menos: pasa parte del golpe a la aseguradora. Comparte.' },
            { text: 'Instala cámaras en la caja', bucket: 0, why: 'Otro control: reduce.' },
            { text: 'Contrata un repartidor que responde por daños al pan', bucket: 1, why: 'Subcontratar con responsabilidad es compartir o transferir.' },
          ],
        },
      },
      { text: 'Un control conviene si lo que **ahorra en pérdida esperada** es mayor que lo que cuesta.' },
      {
        calc: {
          question: 'La bodega de harina tiene **20%** de probabilidad al año de perder **$500,000**. Unas alarmas cuestan **$30,000** al año y bajan la probabilidad a **4%**. ¿Cuál es el **beneficio neto** del control?',
          answer: 50000,
          hint: 'Pérdida esperada sin control − pérdida esperada con control − costo del control.',
          why: 'Sin control: 0.20 × $500,000 = $100,000. Con control: 0.04 × $500,000 = $20,000. Ahorro $80,000 − costo $30,000 = **$50,000**. Es positivo: conviene.',
        },
      },
      { text: 'El **apetito de riesgo** es cuánto riesgo acepta el negocio para lograr sus metas. Lo aprueban los dueños o el consejo.' },
      {
        ask: 'El riesgo de robo quedó **por encima** del apetito que aprobaron los dueños. ¿Qué toca?',
        options: [
          { text: 'Actuar más o llevarlo a los dueños para que decidan', ok: true, reply: '¡Exacto! Se refuerza la respuesta (reducir, compartir o evitar) o se escala.' },
          { text: 'Anotarlo en la lista de riesgos y ya', reply: 'Anotarlo no basta. Si supera el apetito, hay que **actuar o escalarlo**.' },
          { text: 'Esperar a ver si pasa', reply: 'Esperar es dejar el riesgo arriba de lo aceptado. Hay que **actuar o escalarlo**.' },
        ],
      },
      { tip: 'Todo va a un **registro de riesgos** (dueño, calificación, respuesta, fecha de revisión), y unos **indicadores clave (KRI)** avisan cuando un riesgo empieza a crecer.' },
    ],
  ],
}
