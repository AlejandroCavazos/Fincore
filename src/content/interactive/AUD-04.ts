import type { InteractiveLesson } from './types'

export const intAUD04: InteractiveLesson = {
  lessonId: 'AUD-04',
  sections: [
    // Evidencia suficiente y adecuada
    [
      { text: 'La **evidencia** es todo lo que usa el auditor para opinar. Debe ser **suficiente** (¿tengo bastante?) y **adecuada** (¿es relevante y confiable?).' },
      { text: 'Sofía, auditora junior, revisa una tortillería 🌮. ¿Qué evidencia pesa más?' },
      {
        sort: {
          title: '¿Más o menos confiable?',
          buckets: ['Más confiable', 'Menos confiable'],
          items: [
            { text: 'El banco confirma el saldo directo a Sofía', bucket: 0, why: 'Viene de un tercero independiente y llega directo al auditor.' },
            { text: 'La conciliación bancaria que hizo el contador', bucket: 1, why: 'La generó la propia empresa: pesa menos que la confirmación externa.' },
            { text: 'La factura original', bucket: 0, why: 'El original vale más que una copia.' },
            { text: 'Una fotocopia de la factura', bucket: 1, why: 'Una copia o escaneo vale menos que el original.' },
            { text: 'Un contrato firmado', bucket: 0, why: 'Lo documental vale más que lo verbal.' },
            { text: '«Sí, el contrato existe», dice el gerente', bucket: 1, why: 'Lo verbal pesa menos que un documento.' },
          ],
        },
      },
      {
        ask: 'Sofía ve un camión en el patio. ¿Qué prueba con eso?',
        options: [
          { text: 'Que existe y que es de la empresa', reply: 'Verlo prueba que existe, pero **no que sea de la empresa**.' },
          { text: 'Solo que existe; para saber si es de la empresa revisa la factura o la tarjeta de circulación', ok: true, reply: '¡Bien! La **relevancia** depende de lo que quieres probar.' },
          { text: 'Nada, ver no sirve como evidencia', reply: 'Sí sirve: prueba que el camión existe.' },
        ],
      },
      { tip: 'Mucha evidencia mala **no** sustituye a poca evidencia buena. La interna es más confiable cuando los controles son buenos.' },
    ],
    // Procedimientos para obtener evidencia y muestreo
    [
      { text: 'El auditor tiene una **caja de herramientas** 🧰 para conseguir evidencia.' },
      {
        match: {
          title: 'Une cada procedimiento con un ejemplo',
          pairs: [
            ['Inspección', 'Revisar una factura o un activo'],
            ['Observación', 'Ver el conteo de inventario mientras ocurre'],
            ['Indagación', 'Preguntarle al gerente'],
            ['Confirmación externa', 'Un cliente responde directo al auditor'],
            ['Recálculo', 'Rehacer la suma de una cuenta'],
            ['Reejecución', 'Repetir un control por su cuenta'],
          ],
        },
      },
      { text: 'Al **inspeccionar** pólizas, Sofía encuentra esta compra de mercancía pagada con transferencia:' },
      {
        spot: {
          title: '¿Cuál está mal?',
          story: 'La tortillería compró harina por **$8,000** y la pagó con transferencia bancaria.',
          lines: [
            { account: 'Inventario', side: 'D', amount: 8000 },
            { account: 'Bancos', side: 'D', amount: 8000 },
          ],
          wrong: 1,
          why: 'Si sale dinero del banco, Bancos se **abona** (Haber). Con dos cargos la póliza ni siquiera cuadra.',
        },
      },
      {
        calc: {
          question: 'Sofía revisa facturas por **$250,000** y encuentra **$5,000** de error. Las ventas del año son **$4,000,000**. ¿Cuál es el **error proyectado**?',
          answer: 80000,
          hint: '(error ÷ monto de la muestra) × monto de la población.',
          why: '5,000 ÷ 250,000 = 0.02 (2 %); 0.02 × 4,000,000 = **$80,000**. Lo que importa es el error en toda la población, no solo en la muestra.',
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
            text: 'La materialidad de ejecución es **$75,000**. Ajusta hasta que el error proyectado quede **por debajo**.',
            check: (x) => (x.e / 200000) * x.p < 75000,
            done: 'Por debajo de la materialidad de ejecución, la cuenta probablemente está bien. Por encima, hace falta más trabajo.',
          },
        },
      },
      { tip: 'La **indagación sola casi nunca basta**: lo que dice la administración se corrobora con otra evidencia.' },
    ],
    // Papeles de trabajo: documentar para que otro entienda
    [
      { text: 'Los **papeles de trabajo** registran lo que hizo el auditor. Regla de oro: un auditor experimentado que no participó debe entenderlos **sin preguntar**.' },
      {
        multi: {
          title: '¿Qué debe decir una cédula? Marca todas.',
          items: [
            { text: 'El objetivo de la prueba y el criterio de selección', ok: true },
            { text: 'Resultados, excepciones y conclusión', ok: true },
            { text: 'Quién la preparó, quién la revisó y fechas', ok: true },
            { text: 'El significado de cada marca de auditoría', ok: true },
            { text: 'Nada: si el auditor se acuerda, basta', ok: false },
          ],
          why: 'Si no está documentado, para efectos prácticos **no se hizo**.',
        },
      },
      {
        sort: {
          title: '¿A qué archivo va?',
          buckets: ['Archivo permanente', 'Archivo del ejercicio'],
          items: [
            { text: 'Escritura constitutiva', bucket: 0, why: 'Sirve año tras año: permanente.' },
            { text: 'Contrato de renta a 10 años', bucket: 0, why: 'Contrato de largo plazo: permanente.' },
            { text: 'Confirmaciones de clientes de este cierre', bucket: 1, why: 'Son del año auditado: ejercicio.' },
            { text: 'Cédula de la suma de clientes de este año', bucket: 1, why: 'Trabajo del año: ejercicio.' },
          ],
        },
      },
      {
        ask: 'El archivo ya se cerró y un gerente del despacho quiere agregar una nota. ¿Qué se hace?',
        options: [
          { text: 'Borrar la cédula vieja y poner una nueva', reply: 'Después del cierre **no se borra ni se cambia** nada.' },
          { text: 'Agregarla documentando quién lo hizo, cuándo y por qué', ok: true, reply: '¡Exacto! Todo agregado posterior queda documentado.' },
          { text: 'Pedirle al cliente que la guarde', reply: 'Los papeles son **propiedad del auditor** y son confidenciales.' },
        ],
      },
      { tip: 'Índice (A = efectivo, B = clientes), **referencias cruzadas** y **marcas** como ✓ = «cotejado contra factura».' },
    ],
  ],
}
