import type { InteractiveLesson } from './types'

export const intAUD09: InteractiveLesson = {
  lessonId: 'AUD-09',
  sections: [
    // ¿Quién revisa por dentro?
    [
      { text: 'Súper La Canasta 🛒 tiene **200 sucursales**. Una vez al año llega un despacho externo a revisar sus estados financieros. ¿Y el resto del año?' },
      {
        ask: '¿Quién revisa las sucursales todo el año?',
        options: [
          { text: 'Auditoría interna, un área de la propia empresa', ok: true, reply: '¡Eso! Trabaja todo el año para la empresa y puede revisar cualquier proceso.' },
          { text: 'El despacho externo, cada semana', reply: 'El externo viene a opinar sobre los estados financieros, no a revisar todo el año. Eso lo hace **auditoría interna**.' },
          { text: 'Nadie, con la auditoría externa basta', reply: 'La externa solo opina sobre los estados. Para revisar procesos todo el año está **auditoría interna**.' },
        ],
      },
      { text: 'Auditoría interna da dos cosas:\n🔍 **Aseguramiento:** dice al consejo y a la dirección si los procesos funcionan como deben.\n💡 **Asesoría:** ayuda a mejorar, sin decidir por la administración.' },
      {
        sort: {
          title: '¿Interna o externa?',
          buckets: ['Auditoría interna', 'Auditoría externa'],
          items: [
            { text: 'Un despacho ajeno a la empresa', bucket: 1, why: 'El externo es independiente de la empresa.' },
            { text: 'Trabaja todo el año para La Canasta', bucket: 0, why: 'La interna es parte de la empresa.' },
            { text: 'Opina sobre los estados financieros una vez al año', bucket: 1, why: 'Esa es la tarea del auditor externo.' },
            { text: 'Revisa compras, nómina, sistemas y sucursales', bucket: 0, why: 'La interna revisa cualquier proceso.' },
            { text: 'Sus usuarios son accionistas y bancos', bucket: 1, why: 'Usuarios externos: auditoría externa.' },
            { text: 'Reporta al consejo y a la dirección', bucket: 0, why: 'Sus usuarios son internos.' },
          ],
        },
      },
      {
        ask: '¿Qué haría auditoría interna en La Canasta?',
        options: [
          { text: 'Visitar las sucursales de mayor riesgo y revisar cortes de caja, mermas y descuentos', ok: true, reply: '¡Así es! Y reporta lo que encuentra al comité de auditoría.' },
          { text: 'Firmar la opinión sobre los estados financieros', reply: 'Eso lo hace el auditor **externo**.' },
          { text: 'Decidir los precios de cada sucursal', reply: 'Asesora, pero **no decide** por la administración.' },
        ],
      },
      { tip: 'Interna y externa **se coordinan** para no duplicar trabajo.' },
    ],
    // ¿Por qué debe ser independiente?
    [
      {
        text: 'En La Canasta todos cuidan riesgos, cada quien en su lugar. Es el **Modelo de las Tres Líneas**:\n1️⃣ **Primera:** quienes operan y manejan sus riesgos a diario.\n2️⃣ **Segunda:** quienes apoyan y vigilan (riesgos, cumplimiento, control interno).\n3️⃣ **Tercera:** auditoría interna, que evalúa a las otras dos.',
      },
      {
        sort: {
          title: '¿En qué línea está cada quien?',
          buckets: ['Primera línea', 'Segunda línea', 'Tercera línea'],
          items: [
            { text: 'El gerente de ventas que revisa los descuentos del día', bucket: 0, why: 'Opera y maneja su riesgo a diario.' },
            { text: 'La cajera que cuadra su caja al cerrar el turno', bucket: 0, why: 'Opera el proceso: primera línea.' },
            { text: 'El área de administración de riesgos', bucket: 1, why: 'Define cómo calificar y vigila, pero no es independiente: segunda línea.' },
            { text: 'El área de cumplimiento', bucket: 1, why: 'Apoya y vigila: segunda línea.' },
            { text: 'Auditoría interna revisando los controles de sistemas', bucket: 2, why: 'Evalúa de forma independiente a las otras dos.' },
          ],
        },
      },
      {
        ask: 'Laura, de auditoría interna, encuentra un problema grave en Finanzas. Si le reportara **solo al director de Finanzas**, ¿qué podría pasar?',
        options: [
          { text: 'Que él frene el hallazgo incómodo', ok: true, reply: '¡Exacto! Por eso auditoría interna no reporta a quien audita.' },
          { text: 'Nada, todos quieren lo mismo', reply: 'El área auditada podría frenar el hallazgo. Por eso auditoría interna necesita **independencia**.' },
          { text: 'Se arreglaría más rápido', reply: 'Quizá, o quizá se escondería. Para no depender de eso, auditoría interna necesita **independencia**.' },
        ],
      },
      { text: 'Por eso su director reporta **funcionalmente al comité de auditoría** del consejo (aprueba su plan y presupuesto, recibe sus informes) y solo **administrativamente** a la dirección general (vacaciones, oficina, trámites).' },
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
        multi: {
          title: '¿Qué le quita objetividad a un auditor interno? Marca todas.',
          items: [
            { text: 'Auditar Tesorería justo después de trabajar ahí', ok: true },
            { text: 'Auditar los controles que él mismo diseñó e implantó', ok: true },
            { text: 'Tomar decisiones que le tocan a la administración', ok: true },
            { text: 'Recomendar mejoras al área (asesorar)', ok: false },
            { text: 'Reportar sus hallazgos al comité de auditoría', ok: false },
          ],
          why: 'Nadie debe revisar su propio trabajo ni decidir por la administración. Recomendar mejoras sí se vale: la decisión y la implantación son del área.',
        },
      },
    ],
    // ¿Qué revisa y cómo reporta?
    [
      {
        ask: 'Laura no puede revisar todo en 200 sucursales. ¿Cómo reparte su tiempo?',
        options: [
          { text: 'Más horas donde hay más riesgo', ok: true, reply: '¡Eso! Es un **plan anual basado en riesgos**.' },
          { text: 'Igual para todos los procesos', reply: 'Repartir igual ignora que unos procesos son más riesgosos. Se dan **más horas donde hay más riesgo**.' },
          { text: 'Al azar, para que nadie se prepare', reply: 'El azar no mira el riesgo. Se dan **más horas donde hay más riesgo**.' },
        ],
      },
      { text: 'El plan: lista todos los procesos (el **universo auditable**), califica el riesgo de cada uno y reparte las horas **en proporción al riesgo**. El comité de auditoría lo aprueba.' },
      {
        calc: {
          question: 'Laura tiene **1,500 horas**. Riesgos: Compras 40, Nómina 35 y Sistemas 25. ¿Cuántas horas le tocan a **Compras**?',
          answer: 600,
          unit: 'horas',
          hint: 'Suma los riesgos; Compras recibe 40 de esa suma.',
          why: '40 + 35 + 25 = 100. 40 ÷ 100 = 0.40, y 0.40 × 1,500 = **600 horas**. Dividir 1,500 entre 3 (500) ignora el riesgo.',
        },
      },
      { text: 'Cada revisión termina en **hallazgos**. Uno bien escrito tiene 4 partes:\n👀 **Condición:** lo que encontraste.\n📏 **Criterio:** lo que debería ser.\n❓ **Causa:** por qué pasó.\n⚠️ **Efecto:** qué riesgo o pérdida provoca.' },
      {
        match: {
          title: 'Arma el hallazgo de la sucursal Centro',
          pairs: [
            ['Condición', '12 descuentos sin firma del gerente'],
            ['Criterio', 'La política pide firma del gerente en todo descuento'],
            ['Causa', 'El gerente no estaba y nadie lo suplía'],
            ['Efecto', 'Se pueden dar descuentos indebidos y perder dinero'],
          ],
        },
      },
      { text: 'Con cada hallazgo se acuerda un **plan de acción** con responsable y fecha. El trabajo no acaba con el informe: Laura da **seguimiento**.' },
      {
        order: {
          title: 'Ordena el trabajo de Laura',
          steps: [
            'Califica el riesgo de cada proceso y arma el plan',
            'Hace la revisión y escribe los hallazgos',
            'Acuerda un plan de acción con responsable y fecha',
            'Verifica que se cumpla y reporta al comité los vencidos',
          ],
          done: 'Una observación se cierra cuando **auditoría la verifica**, no solo porque el área diga que ya la corrigió.',
        },
      },
    ],
  ],
}
