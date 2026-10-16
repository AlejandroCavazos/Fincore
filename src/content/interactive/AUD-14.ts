import type { InteractiveLesson } from './types'

export const intAUD14: InteractiveLesson = {
  lessonId: 'AUD-14',
  sections: [
    // Qué es cumplimiento y cómo se arma un programa
    [
      { text: '**Cumplimiento** (compliance) es asegurarte de que la empresa respeta sus **obligaciones**: leyes, reglas de las autoridades, contratos y sus propias políticas.' },
      {
        order: {
          title: 'Ordena cómo se arma un programa de cumplimiento',
          steps: [
            'Hacer el inventario de obligaciones: qué normas te aplican y qué exigen',
            'Evaluar los riesgos de incumplimiento: dónde es más probable fallar y qué tan grave sería',
            'Poner controles y dar capacitación',
            'Vigilar de forma continua y mejorar',
          ],
          done: 'Un programa de cumplimiento **no es un manual en un cajón**: se vive y se vigila.',
        },
      },
      {
        ask: '¿Qué necesita el **oficial de cumplimiento** para hacer bien su trabajo?',
        options: [
          { text: 'Depender del área de ventas para no estorbar', reply: 'Así perdería independencia frente a quienes debe vigilar.' },
          { text: 'Autoridad, independencia, recursos suficientes y reporte directo al consejo o al comité de auditoría', ok: true, reply: '¡Exacto! Es la lógica que describen normas como la ISO 37301.' },
          { text: 'Solo un buen manual impreso', reply: 'Un manual solo no basta: hacen falta autoridad, recursos y vigilancia.' },
        ],
      },
      {
        multi: {
          title: '¿Qué forma parte de un programa de cumplimiento? Marca todas.',
          items: [
            { text: 'Compromiso de la dirección', ok: true },
            { text: 'Políticas, controles y capacitación según el riesgo de cada área', ok: true },
            { text: 'Canal de denuncia, investigación y consecuencias disciplinarias', ok: true },
            { text: 'Seguimiento a cambios regulatorios', ok: true },
            { text: 'Revisarlo una sola vez y guardarlo', ok: false },
          ],
          why: 'El cumplimiento es continuo: monitoreo, pruebas y mejora, porque las reglas cambian.',
        },
      },
      { tip: 'Para cada obligación del inventario: **un dueño, sus controles y una fecha de revisión**.' },
    ],
    // El modelo de las tres líneas
    [
      { text: 'El **modelo de las tres líneas** del IIA ordena quién hace qué con los riesgos. Piénsalo en un banco 🏦.' },
      {
        sort: {
          title: '¿Quién es quién en el banco?',
          buckets: ['Órgano de gobierno', 'Primera línea', 'Segunda línea', 'Tercera línea'],
          items: [
            { text: 'El consejo fija el apetito de riesgo y supervisa', bucket: 0, why: 'Fija la dirección y supervisa: **órgano de gobierno**.' },
            { text: 'La sucursal integra los expedientes de los clientes', bucket: 1, why: 'Opera y es dueña del riesgo: **primera línea**.' },
            { text: 'El ejecutivo pide identificación al cliente', bucket: 1, why: 'Ejecuta el control día a día: **primera línea**.' },
            { text: 'Cumplimiento revisa cada mes una muestra y emite alertas', bucket: 2, why: 'Vigila, asesora y reta: **segunda línea**.' },
            { text: 'Gestión de riesgos diseña la metodología', bucket: 2, why: 'Función especializada: **segunda línea**.' },
            { text: 'Auditoría interna evalúa una vez al año si todo el proceso es eficaz', bucket: 3, why: 'Aseguramiento independiente: **tercera línea**.' },
          ],
        },
      },
      {
        ask: 'El director pide que **auditoría interna** diseñe y opere los controles de un proceso nuevo, y luego los evalúe. ¿Qué problema hay?',
        options: [
          { text: 'Ninguno: así ahorran gente', reply: 'Sí hay problema: perdería su independencia.' },
          { text: 'Se estaría auditando a sí misma y perdería su independencia', ok: true, reply: '¡Bien! La tercera línea no debe diseñar ni operar lo que luego evaluará.' },
          { text: 'Que eso le toca al consejo', reply: 'El consejo supervisa, pero no opera los controles. El punto aquí es la independencia de auditoría.' },
        ],
      },
      { tip: 'Primera línea **opera**, segunda **vigila y reta**, tercera **asegura de forma independiente**, y el órgano de gobierno **supervisa**.' },
    ],
    // Apetito de riesgo, indicadores y pruebas de cumplimiento
    [
      { text: 'El **apetito de riesgo** es cuánto riesgo acepta la empresa; la **tolerancia** es el margen concreto en una métrica, como «máximo 2% de expedientes incompletos».' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Apetito de riesgo', 'Cuánto riesgo acepta la empresa para lograr sus metas'],
            ['Tolerancia', 'Margen concreto de variación aceptable en una métrica'],
            ['KRI', 'Métrica que avisa antes de que el riesgo pase, con semáforo'],
            ['Riesgo inherente', 'El riesgo que habría sin ningún control'],
            ['Riesgo residual', 'Lo que queda del riesgo después de los controles'],
          ],
        },
      },
      {
        calc: {
          question: 'Revisas **120** expedientes de clientes y **6** están incompletos. ¿Cuál es la **tasa de excepción**?',
          answer: 5,
          unit: '%',
          hint: 'casos que no cumplen ÷ casos revisados × 100.',
          why: '6 ÷ 120 = 0.05 → **5%**. La tasa de cumplimiento sería 100 − 5 = 95%.',
        },
      },
      {
        calc: {
          question: 'Esa tasa de excepción es **5%** y la tolerancia es **2%**. ¿Por cuántos **puntos porcentuales** se rebasó?',
          answer: 3,
          unit: 'puntos porcentuales',
          hint: 'resta, no dividas: tasa − tolerancia.',
          why: '5 − 2 = **3 puntos porcentuales** por encima: hay que buscar la causa, corregir y reportar.',
        },
      },
      {
        sim: {
          title: 'El paraguas con agujeros ☂️',
          inputs: [
            { key: 'i', label: 'Riesgo inherente (escala 1 a 25)', min: 1, max: 25, step: 1, value: 20 },
            { key: 'e', label: 'Efectividad del control (%)', min: 0, max: 90, step: 10, value: 30 },
          ],
          outputs: [
            { label: 'Parte que el control no cubre (%)', calc: (x) => 100 - x.e, unit: '%' },
            { label: 'Riesgo residual', calc: (x) => Math.round(x.i * (100 - x.e)) / 100, main: true, unit: 'puntos' },
          ],
          goal: {
            text: 'El apetito máximo es **8**. Mejora los controles hasta que el riesgo residual quede en **8 o menos**.',
            check: (x) => x.i * (100 - x.e) <= 800,
            done: 'Riesgo residual = riesgo inherente × (1 − efectividad del control). Si multiplicas por la efectividad, obtienes lo que el control **quita**, no lo que **queda**.',
          },
        },
      },
      { tip: 'Si la tasa de excepción **supera la tolerancia**: se analiza la causa, se corrige y se reporta.' },
    ],
  ],
}
