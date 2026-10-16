import type { InteractiveLesson } from './types'

export const intAUD09: InteractiveLesson = {
  lessonId: 'AUD-09',
  sections: [
    // ¿Qué es la auditoría interna?
    [
      { text: 'La **auditoría interna** es un área de la propia empresa. Da **aseguramiento** (dice al consejo y a la dirección si los procesos funcionan) y **asesoría** (ayuda a mejorar sin decidir por la administración). Su guía son las normas del **IIA** (Instituto de Auditores Internos).' },
      {
        sort: {
          title: '¿Interna o externa?',
          buckets: ['Auditoría interna', 'Auditoría externa'],
          items: [
            { text: 'Un despacho ajeno a la empresa', bucket: 1, why: 'El externo es independiente de la empresa.' },
            { text: 'Trabaja todo el año para la empresa', bucket: 0, why: 'La interna es parte de la empresa.' },
            { text: 'Opina sobre los estados financieros una vez al año', bucket: 1, why: 'Esa es la tarea del auditor externo.' },
            { text: 'Revisa cualquier proceso: compras, nómina, sistemas, sucursales', bucket: 0, why: 'La interna evalúa riesgos, controles y procesos de todo tipo.' },
            { text: 'Sus usuarios son accionistas y bancos', bucket: 1, why: 'Usuarios externos: auditoría externa.' },
            { text: 'Reporta al consejo y a la dirección', bucket: 0, why: 'Sus usuarios son internos.' },
          ],
        },
      },
      {
        ask: 'Un supermercado tiene 200 sucursales. ¿Qué hace razonablemente auditoría interna?',
        options: [
          { text: 'Visitar cada año las sucursales de mayor riesgo y reportar al comité de auditoría', ok: true, reply: '¡Así es! Revisa arqueos, mermas y descuentos donde hay más riesgo.' },
          { text: 'Firmar la opinión sobre los estados financieros', reply: 'Eso lo hace el auditor externo.' },
          { text: 'Decidir los precios de cada sucursal', reply: 'Asesora, pero **no toma decisiones** por la administración.' },
        ],
      },
      { tip: 'Interna y externa **se coordinan** para no duplicar trabajo.' },
    ],
    // Independencia y el Modelo de las Tres Líneas
    [
      { text: 'El **Modelo de las Tres Líneas** del IIA ordena quién hace qué con los riesgos en Grupo Tacos Felices 🌮.' },
      {
        sort: {
          title: '¿En qué línea está cada quien?',
          buckets: ['Primera línea', 'Segunda línea', 'Tercera línea'],
          items: [
            { text: 'El gerente de ventas que revisa los descuentos del día', bucket: 0, why: 'Áreas operativas que manejan sus riesgos día a día.' },
            { text: 'El encargado de sucursal que hace el corte de caja', bucket: 0, why: 'Opera el proceso: primera línea.' },
            { text: 'El área de administración de riesgos', bucket: 1, why: 'Apoya y vigila: segunda línea.' },
            { text: 'El área de cumplimiento', bucket: 1, why: 'Apoya y vigila: segunda línea.' },
            { text: 'Auditoría interna', bucket: 2, why: 'Evalúa de forma independiente a las dos primeras.' },
          ],
        },
      },
      { text: 'Para ser objetiva, auditoría interna reporta **funcionalmente al comité de auditoría** y solo **administrativamente** a la dirección general.' },
      {
        rush: {
          title: '¿A quién le toca?',
          seconds: 35,
          labels: ['Comité de auditoría', 'Dirección general'],
          items: [
            { text: 'Aprobar el plan de auditoría interna', ans: 0 },
            { text: 'Autorizar las vacaciones del director de auditoría', ans: 1 },
            { text: 'Recibir los informes de auditoría', ans: 0 },
            { text: 'Aprobar el presupuesto de auditoría interna', ans: 0 },
            { text: 'Asignar oficina y trámites', ans: 1 },
          ],
        },
      },
      {
        ask: 'Laura acaba de pasar de **Tesorería** a Auditoría Interna. ¿Debe auditar Tesorería ya?',
        options: [
          { text: 'Sí, nadie conoce mejor el área', reply: 'Conocerla no basta: revisaría su propio trabajo y perdería objetividad.' },
          { text: 'No, durante un tiempo razonable no debería', ok: true, reply: '¡Correcto! Un auditor no debe revisar un proceso que operó hace poco.' },
        ],
      },
      { tip: 'Con ese reporte al comité, **nadie a quien audita** puede frenar un hallazgo incómodo.' },
    ],
    // Plan basado en riesgos, hallazgos y seguimiento
    [
      { text: 'No se puede revisar todo, así que se arma un **plan anual basado en riesgos**.' },
      {
        order: {
          title: 'Ordena el ciclo de auditoría interna',
          steps: [
            'Listar los procesos de la empresa (universo auditable)',
            'Calificar el riesgo de cada proceso',
            'Asignar más horas a los de mayor riesgo y que el comité apruebe el plan',
            'Hacer la revisión y redactar los hallazgos',
            'Acordar un plan de acción con responsable y fecha',
            'Dar seguimiento y reportar al comité los vencidos',
          ],
          done: 'El trabajo **no acaba con el informe**: el seguimiento verifica que las correcciones sí se hagan.',
        },
      },
      {
        calc: {
          question: 'El equipo tiene **1,500 horas**. Riesgos: Compras 40, Nómina 35 y Sistemas 25. ¿Cuántas horas le tocan a **Compras**?',
          answer: 600,
          unit: 'horas',
          hint: 'divide 40 entre la suma de riesgos y multiplica por las horas.',
          why: '40 + 35 + 25 = 100. 40 ÷ 100 = 0.40; 0.40 × 1,500 = **600 horas**.',
        },
      },
      { text: 'Un buen hallazgo tiene cuatro partes. Ejemplo en una cafetería ☕:' },
      {
        match: {
          title: 'Une cada parte del hallazgo',
          pairs: [
            ['Condición', '12 descuentos sin firma del gerente'],
            ['Criterio', 'La política dice que todo descuento lleva firma del gerente'],
            ['Causa', 'El gerente no estaba y nadie lo suplía'],
            ['Efecto', 'Se pueden dar descuentos indebidos y perder dinero'],
          ],
        },
      },
      {
        calc: {
          question: 'De **30** observaciones vencidas, se atendieron y verificaron **24**. ¿Qué porcentaje está atendido?',
          answer: 80,
          unit: '%',
          hint: 'atendidas ÷ totales × 100.',
          why: '24 ÷ 30 = 0.80 → **80%**. Quedan 6 pendientes que se reportan al comité.',
        },
      },
      { tip: 'Una observación cuenta como atendida solo cuando **auditoría la verifica**, no porque el área diga que ya la corrigió.' },
    ],
  ],
}
