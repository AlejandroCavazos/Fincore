import type { InteractiveLesson } from './types'

export const intAUD05: InteractiveLesson = {
  lessonId: 'AUD-05',
  sections: [
    // ¿Cómo cuida Marta su negocio?
    [
      { text: 'Marta abrió una cafetería ☕. No puede estar en la caja todo el día. ¿Cómo sabe que no se pierde dinero?' },
      { text: 'Con **control interno**: lo que **toda la gente** hace a diario para que el negocio opere bien, tenga información confiable y cumpla leyes. No es un manual guardado en un cajón.' },
      { text: 'Primero piensas en el **riesgo** (lo que podría salir mal) y luego en el **control** (la acción que lo reduce).' },
      {
        sort: {
          title: '¿Riesgo o control?',
          buckets: ['Riesgo', 'Control'],
          items: [
            { text: 'Que el cajero se quede con efectivo', bucket: 0, why: 'Algo que podría salir mal.' },
            { text: 'Registrar cada venta en la caja', bucket: 1, why: 'Acción que reduce el riesgo.' },
            { text: 'Que otra persona cuente el efectivo al cierre contra el reporte', bucket: 1, why: 'Acción concreta: control.' },
            { text: 'Que se pierda café del almacén', bucket: 0, why: 'Algo que podría pasar: riesgo.' },
            { text: 'Guardar el café con llave', bucket: 1, why: 'Resguardo físico: control.' },
          ],
        },
      },
      { text: 'Pero ningún control es perfecto:\n😓 La gente se **equivoca** o se cansa.\n🤝 Dos empleados se ponen de acuerdo (**colusión**).\n👔 Un directivo lo ignora (**elusión por la dirección**).\n💸 Algunos controles **cuestan más** de lo que protegen.' },
      {
        multi: {
          title: '¿Cuáles son límites de cualquier control interno? Marca todas.',
          items: [
            { text: 'El cajero y el barista se ponen de acuerdo para saltarse un control', ok: true },
            { text: 'El gerente ordena ignorar un control', ok: true },
            { text: 'Alguien cansado cuenta mal la caja', ok: true },
            { text: 'Un control cuesta más de lo que protege', ok: true },
            { text: 'Un buen control interno garantiza que nunca habrá pérdidas', ok: false },
          ],
          why: 'Por esos límites, el control interno da **seguridad razonable**, nunca absoluta.',
        },
      },
    ],
    // ¿Evitar, detectar o reparar?
    [
      { text: 'Marta quiere **evitar** errores, **encontrarlos** si pasan y **repararlos**.' },
      { text: 'Según cuándo actúa, un control es:\n🛑 **Preventivo:** evita el error. Ej. dos firmas para un pago grande.\n🔦 **Detectivo:** lo descubre después. Ej. la conciliación bancaria.\n🩹 **Correctivo:** repara el daño. Ej. restaurar datos de un respaldo.' },
      {
        sort: {
          title: '¿Qué tipo de control es?',
          buckets: ['Preventivo', 'Detectivo', 'Correctivo'],
          items: [
            { text: 'El sistema no deja registrar dos veces el mismo folio', bucket: 0, why: 'Evita el error antes de que pase.' },
            { text: 'Conteo sorpresa del inventario contra el kárdex', bucket: 1, why: 'Descubre faltantes después.' },
            { text: 'Restaurar la lista de clientes desde el respaldo', bucket: 2, why: 'Repara el daño.' },
            { text: 'Dos firmas para pagos grandes', bucket: 0, why: 'Frena el pago antes.' },
            { text: 'Conciliación bancaria mensual', bucket: 1, why: 'Encuentra diferencias después.' },
            { text: 'Nota de crédito para reponer un cobro de más', bucket: 2, why: 'Corrige el error ya hecho.' },
          ],
        },
      },
      { text: 'El control más importante en un negocio chico: **segregación de funciones**. Que no sea la misma persona quien **autoriza**, **registra** y **custodia**.' },
      {
        match: {
          title: '¿Quién hace qué en la cafetería?',
          pairs: [
            ['Autorizar', 'Marta aprueba la compra de café'],
            ['Registrar', 'La contadora captura la compra'],
            ['Custodiar', 'El almacenista guarda los costales con llave'],
          ],
        },
      },
      {
        ask: 'En una clínica veterinaria, la recepcionista cobra, registra los cobros y prepara el depósito. Nadie revisa. ¿Cuál es el problema?',
        options: [
          { text: 'El sistema de cobro es viejo', reply: 'El problema de fondo es que **una sola persona** custodia y registra el efectivo: falta segregación.' },
          { text: 'Falta segregación: una persona custodia y registra el efectivo', ok: true, reply: '¡Eso! Podría tomar dinero y esconderlo en el registro sin que nadie lo note.' },
          { text: 'La recepcionista tiene pocas tareas', reply: 'Al revés: tiene tareas que deberían estar **separadas**.' },
        ],
      },
      { tip: 'Otros controles clave: autorizaciones con límites, conciliaciones, resguardo físico, documentos prenumerados y conteos físicos.' },
    ],
    // ¿El control sí se cumple?
    [
      { text: 'El manual de Marta dice: «toda compra lleva mi firma» ✍️. ¿Pero de verdad se cumple?' },
      { text: 'Un control se revisa en dos pasos:\n📐 **Diseño:** si funcionara como está escrito, ¿reduciría el riesgo?\n⚙️ **Operación:** ¿de verdad se aplica siempre, por la persona correcta y a tiempo?' },
      {
        ask: 'El control está bien escrito, pero casi nunca se firma. ¿Puede el auditor confiar en él?',
        options: [
          { text: 'Sí, está en el manual', reply: 'Estar escrito no basta: hay que probar que **opera**. Aquí hay una **deficiencia de control**.' },
          { text: 'No: está bien diseñado pero no opera', ok: true, reply: '¡Bien! Es una **deficiencia de control**: se ve perfecto en el papel, pero no se aplica.' },
          { text: 'Sí, si Marta lo promete', reply: 'Hay que **probar** que opera, no basta la palabra.' },
        ],
      },
      { text: 'Para probarlo, se revisa una muestra y se cuentan las **desviaciones** (veces que no se aplicó):\n**Tasa de desviación = desviaciones ÷ casos revisados**\nLuego se compara con una **tasa tolerable** fijada antes.' },
      {
        order: {
          title: 'Ordena la prueba del control',
          steps: ['Fijar la tasa tolerable', 'Revisar una muestra de casos', 'Contar las desviaciones', 'Calcular la tasa de desviación', 'Comparar y concluir'],
          done: 'Si la tasa rebasa la tolerable, el control **no es confiable**.',
        },
      },
      {
        calc: {
          question: 'De **75** compras revisadas, **6** no tienen la firma de Marta. ¿Cuál es la tasa de desviación, en %?',
          answer: 8,
          unit: '%',
          hint: '6 ÷ 75 × 100.',
          why: '6 ÷ 75 = 0.08 → **8 %**. Divide entre **todos** los casos revisados.',
        },
      },
      {
        ask: 'La tasa tolerable era **5 %** y salió **8 %**. ¿Qué concluye el auditor?',
        options: [
          { text: 'El control es confiable', reply: '8 % rebasa el 5 % tolerable: **no** es confiable.' },
          { text: 'El control no es confiable', ok: true, reply: '¡Correcto! Hay una deficiencia de control.' },
          { text: 'Repite la muestra hasta que salga menos de 5 %', reply: 'Eso sería maquillar el resultado. Con 8 % el control **no es confiable**.' },
        ],
      },
      { tip: 'Las deficiencias más graves (**significativas**) se comunican por escrito al gobierno de la entidad.' },
    ],
  ],
}
