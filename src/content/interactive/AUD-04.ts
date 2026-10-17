import type { InteractiveLesson } from './types'

export const intAUD04: InteractiveLesson = {
  lessonId: 'AUD-04',
  sections: [
    // ¿Qué prueba sirve de verdad?
    [
      { text: 'Sofía audita la Tortillería La Güera 🌮. Debe comprobar que en el banco hay lo que dicen los libros.' },
      {
        ask: '¿Qué le da más confianza?',
        options: [
          { text: 'Lo que dice la tesorera en una entrevista', reply: 'Solo preguntar casi nunca basta. Pesa más que el **banco confirme el saldo directo** a Sofía.' },
          { text: 'La conciliación que hizo el contador', reply: 'Sirve, pero la hizo la propia empresa. Pesa más que el **banco confirme directo** a Sofía.' },
          { text: 'Que el banco le confirme el saldo directo a ella', ok: true, reply: '¡Bien! Viene de un **tercero independiente**: pesa más.' },
        ],
      },
      { text: '**Evidencia** es todo lo que usa el auditor para opinar. Debe ser:\n📦 **Suficiente:** cantidad. ¿Tengo bastante?\n💎 **Adecuada:** calidad. ¿Es relevante y confiable?' },
      {
        sort: {
          title: '¿Más o menos confiable?',
          buckets: ['Más confiable', 'Menos confiable'],
          items: [
            { text: 'El banco confirma el saldo directo a Sofía', bucket: 0, why: 'Tercero independiente que responde directo al auditor.' },
            { text: 'Un proveedor responde directo a Sofía cuánto se le debe', bucket: 0, why: 'También es un tercero: confirmación externa.' },
            { text: 'La conciliación bancaria del contador', bucket: 1, why: 'La preparó la propia empresa: pesa menos que la confirmación.' },
            { text: '«Sí, todo cuadra», dice el gerente', bucket: 1, why: 'Lo que dice la administración se corrobora con otra evidencia.' },
          ],
        },
      },
      { text: 'Ojo: **mucha evidencia mala no sustituye** a poca evidencia buena.' },
      {
        ask: 'Sofía ve el camión de reparto en el patio 🚚. ¿Qué prueba con eso?',
        options: [
          { text: 'Que existe y que es de la tortillería', reply: 'Verlo prueba que **existe**, pero no que sea de la empresa. Para eso revisa la factura o la tarjeta de circulación.' },
          { text: 'Solo que existe', ok: true, reply: '¡Bien! Para saber si es de la empresa revisa la factura o la tarjeta de circulación. La **relevancia** depende de lo que quieres probar.' },
          { text: 'Nada, ver no sirve', reply: 'Sí sirve: prueba que el camión **existe**.' },
        ],
      },
    ],
    // ¿Cómo junta pruebas el auditor?
    [
      { text: 'Sofía tiene una **caja de herramientas** 🧰:\n🔎 **Inspección:** revisar documentos o activos.\n👀 **Observación:** ver un proceso mientras ocurre.\n💬 **Indagación:** preguntar.\n📨 **Confirmación externa:** un tercero responde directo al auditor.\n🧮 **Recálculo:** rehacer una cuenta.' },
      {
        match: {
          title: 'Une cada herramienta con lo que hizo Sofía',
          pairs: [
            ['Inspección', 'Revisa el contrato de renta firmado'],
            ['Observación', 'Presencia el conteo del inventario'],
            ['Indagación', 'Le pregunta al gerente cómo se cobra'],
            ['Confirmación externa', 'Un proveedor le responde cuánto se le debe'],
            ['Recálculo', 'Vuelve a sumar la lista de clientes'],
          ],
        },
      },
      {
        ask: 'El gerente asegura que hay **$1,200,000** de mercancía en almacén. Sofía solo le preguntó. ¿Basta?',
        options: [
          { text: 'Sí, si el gerente es de confianza', reply: 'La **indagación sola** casi nunca basta. Sofía debe observar el conteo y hacer conteos de prueba.' },
          { text: 'No: debe observar el conteo y hacer conteos de prueba', ok: true, reply: '¡Exacto! Lo que dice la administración se corrobora con otra evidencia.' },
          { text: 'Sí, si lo pone por escrito', reply: 'Por escrito sigue siendo su palabra. Sofía debe **observar el conteo** y contar por su cuenta.' },
        ],
      },
      { text: 'No se puede revisar todo: se usa el **muestreo**. Se elige una parte (ej. 60 de 5,000 facturas) y se **proyecta** el error:\n**Error proyectado = (error ÷ muestra) × población**' },
      {
        calc: {
          question: 'Sofía revisa facturas por **$250,000** y encuentra **$5,000** de error. Las ventas del año son **$4,000,000**. ¿Cuál es el error proyectado?',
          answer: 80000,
          hint: '5,000 ÷ 250,000 = 0.02; luego × 4,000,000.',
          why: '0.02 × 4,000,000 = **$80,000**. Importa el error en toda la población, no solo en la muestra.',
        },
      },
      {
        sim: {
          title: 'Proyectando el error (muestra de $200,000)',
          inputs: [
            { key: 'e', label: 'Error encontrado en la muestra', min: 1000, max: 8000, step: 1000, value: 4000 },
            { key: 'p', label: 'Ventas del año (población)', min: 2000000, max: 8000000, step: 500000, value: 5000000 },
          ],
          outputs: [{ label: 'Error proyectado', calc: (x) => (x.e / 200000) * x.p, main: true }],
          goal: {
            text: 'Mueve los valores hasta que el error proyectado quede **por debajo de $75,000**.',
            check: (x) => (x.e / 200000) * x.p < 75000,
            done: 'Un error chico en la muestra puede volverse grande en toda la población. Por eso se proyecta.',
          },
        },
      },
      { tip: 'Proyectar = llevar el % de error de la muestra a todo el total.' },
    ],
    // Si no se anota, no pasó
    [
      { text: 'Sofía se va de vacaciones 🏖️ y otro auditor sigue su trabajo. ¿Lo entendería sin llamarle?' },
      { text: 'Los **papeles de trabajo** registran qué hizo el auditor. Regla de oro: un auditor experimentado que **no participó** debe entenderlos sin preguntar. Si no está documentado, **no se hizo**.' },
      {
        multi: {
          title: '¿Qué debe decir una cédula? Marca todas.',
          items: [
            { text: 'El objetivo de la prueba y cómo se eligieron las partidas', ok: true },
            { text: 'Quién la preparó, quién la revisó y en qué fechas', ok: true },
            { text: 'Qué significa cada marca, como ✓', ok: true },
            { text: 'La conclusión', ok: true },
            { text: 'Solo los números finales', ok: false },
          ],
          why: 'Con eso otro auditor entiende qué se hizo y qué se concluyó, sin preguntar.',
        },
      },
      { text: 'Se ordenan con un **índice** (A = efectivo, B = clientes) y **referencias cruzadas**. Hay dos archivos:\n🗄️ **Permanente:** lo que sirve año tras año.\n📁 **Del ejercicio:** el trabajo de este año.' },
      {
        sort: {
          title: '¿A qué archivo va?',
          buckets: ['Permanente', 'Del ejercicio'],
          items: [
            { text: 'Escritura de la empresa', bucket: 0, why: 'Sirve año tras año: permanente.' },
            { text: 'Contrato de renta a largo plazo', bucket: 0, why: 'Contrato de largo plazo: permanente.' },
            { text: 'Confirmaciones de clientes de este cierre', bucket: 1, why: 'Son del año auditado.' },
            { text: 'Cédula B-1 con los saldos de clientes de este año', bucket: 1, why: 'Trabajo del año.' },
          ],
        },
      },
      {
        ask: 'Al terminar, el dueño de la tortillería pide que le entreguen los papeles de trabajo. ¿Qué hace Sofía?',
        options: [
          { text: 'Se los entrega: son del cliente', reply: 'Son **propiedad del auditor** y son confidenciales. Sofía los conserva.' },
          { text: 'Los conserva: son del auditor y confidenciales', ok: true, reply: '¡Correcto! Se cierran y se guardan el plazo que piden las normas, la firma y la ley.' },
          { text: 'Los tira, ya no sirven', reply: 'Se deben **conservar**: son del auditor y se guardan por el plazo requerido.' },
        ],
      },
      {
        ask: 'El archivo ya se cerró y hay que agregar una nota. ¿Cómo?',
        options: [
          { text: 'Cambiar la cédula vieja sin decir nada', reply: 'Después del cierre **no se borra ni se cambia** nada. Se agrega documentando quién, cuándo y por qué.' },
          { text: 'Agregarla diciendo quién, cuándo y por qué', ok: true, reply: '¡Exacto! Todo agregado posterior queda documentado.' },
          { text: 'No se puede agregar nada nunca', reply: 'Sí se puede, pero se documenta **quién, cuándo y por qué**.' },
        ],
      },
    ],
  ],
}
