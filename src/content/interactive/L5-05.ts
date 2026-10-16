import type { InteractiveLesson } from './types'

export const intL505: InteractiveLesson = {
  lessonId: 'L5-05',
  sections: [
    // El triángulo del fraude
    [
      { text: 'Repaso integrador 🔎: un año después, **Sofía** apoya al área forense del despacho. **Distribuidora La Norteña** sospecha que algo raro pasa en **compras**.' },
      { text: 'Según el modelo de **Cressey**, el fraude suele aparecer cuando se juntan tres cosas: **presión**, **oportunidad** y **racionalización** (la excusa que se dice uno mismo).' },
      {
        sort: {
          title: '¿Qué lado del triángulo es?',
          buckets: ['Presión o incentivo', 'Oportunidad', 'Racionalización'],
          items: [
            { text: 'El encargado de compras tiene muchas deudas personales', bucket: 0, why: 'Una necesidad de dinero empuja: presión.' },
            { text: 'Nadie revisa a qué proveedores les compra', bucket: 1, why: 'Falta de supervisión: oportunidad.' },
            { text: '«Lo devuelvo el mes que entra»', bucket: 2, why: 'Es una excusa: racionalización.' },
            { text: 'Le exigen metas de ventas muy agresivas', bucket: 0, why: 'Metas agresivas presionan: incentivo.' },
            { text: '«La empresa me lo debe, nunca me suben el sueldo»', bucket: 2, why: 'Se justifica: racionalización.' },
            { text: 'La misma persona autoriza y paga a los proveedores', bucket: 1, why: 'Controles débiles: oportunidad.' },
          ],
        },
      },
      {
        ask: '¿Sobre qué lado del triángulo puede influir **más** La Norteña?',
        options: [
          { text: 'La presión: las deudas personales de cada empleado', reply: 'La empresa casi no controla la vida personal de su gente.' },
          { text: 'La oportunidad, con buen control interno', ok: true, reply: '¡Exacto! Segregación, autorizaciones y supervisión le cierran la puerta al fraude.' },
          { text: 'La racionalización: lo que piensa cada quien', reply: 'Difícil de controlar. Donde más se puede actuar es en la oportunidad.' },
        ],
      },
      {
        sort: {
          title: '¿Qué tipo de fraude es?',
          buckets: ['Información financiera fraudulenta', 'Apropiación indebida de activos', 'Corrupción'],
          items: [
            { text: 'Inflar las ventas del año para que el banco preste más', bucket: 0, why: 'Se falsean los estados financieros.' },
            { text: 'Un empleado se lleva mercancía del almacén', bucket: 1, why: 'Se roba un activo de la empresa.' },
            { text: 'Un proveedor le da una comisión «por debajo» al de compras', bucket: 2, why: 'Es un soborno: corrupción.' },
            { text: 'El cajero toma dinero de la caja chica', bucket: 1, why: 'Se apropia de efectivo: apropiación indebida.' },
          ],
        },
      },
      { tip: 'La NIA 240 se fija en dos tipos: **información financiera fraudulenta** y **apropiación indebida de activos**. La ACFE añade la **corrupción**.' },
    ],
    // Señales de alerta no son pruebas
    [
      { text: 'Una **señal de alerta** (red flag) es algo raro que sube la probabilidad de fraude. **Justifica investigar**, pero **no prueba nada** por sí sola.' },
      {
        rush: {
          title: '¿Señal de alerta o algo normal?',
          seconds: 40,
          labels: ['Señal de alerta', 'Normal'],
          items: [
            { text: 'Asientos manuales de montos redondos justo al cierre', ans: 0 },
            { text: 'Conciliaciones bancarias al día y revisadas', ans: 1 },
            { text: 'Un proveedor con la misma dirección que un empleado', ans: 0 },
            { text: 'El encargado de compras toma sus vacaciones cada año', ans: 1 },
            { text: 'Una empleada que nunca toma vacaciones', ans: 0 },
            { text: 'Conciliaciones atrasadas varios meses', ans: 0 },
          ],
        },
      },
      {
        ask: 'Sofía ve que un proveedor tiene **la misma dirección** que el encargado de compras. ¿Qué hace?',
        options: [
          { text: 'Lo acusa de fraude en su reporte', reply: 'No. Una señal no es prueba y puede tener una explicación legítima.' },
          { text: 'Investiga, reúne evidencia y reporta solo los hechos', ok: true, reply: '¡Bien! El auditor forense reporta **hechos**, sin acusar sin sustento.' },
          { text: 'Lo ignora porque no es prueba', reply: 'Tampoco: una señal **sí justifica investigar**.' },
        ],
      },
      {
        multi: {
          title: 'Marca lo que SÍ es cierto',
          items: [
            { text: 'Una señal de alerta puede tener una explicación legítima', ok: true },
            { text: 'Si hay una señal, ya hay fraude', ok: false },
            { text: 'Decidir si hubo fraude y quién es responsable corresponde, al final, a las autoridades competentes', ok: true },
            { text: 'El auditor forense reúne y analiza evidencia', ok: true },
          ],
          why: 'La señal abre la investigación; las autoridades competentes deciden al final. El forense aporta hechos y evidencia.',
        },
      },
      { tip: 'Señal → **investigar**. Nunca señal → **acusar**.' },
    ],
    // Auditoría forense y cadena de custodia
    [
      { text: 'La **auditoría forense** usa técnicas contables, de auditoría e informáticas para que la evidencia **sirva en un proceso legal**.' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Cadena de custodia', 'Registro de quién obtuvo la evidencia, cuándo, cómo se guardó y quién la tocó'],
            ['Copia forense', 'Copia exacta de un archivo o disco para trabajar sin tocar el original'],
            ['Valor hash', 'Una «huella digital» que cambia si el archivo se altera'],
            ['Auditoría forense', 'Revisión pensada para que la evidencia sirva en un proceso legal'],
          ],
        },
      },
      { text: 'Sofía recibe la laptop del encargado de compras. Ordena lo que hace para que la evidencia no pierda valor:' },
      {
        order: {
          title: 'Cuidando la evidencia digital',
          steps: [
            'Anotar quién recibe la laptop, cuándo y de quién',
            'Hacer una copia forense y calcular su valor hash',
            'Guardar el original registrando dónde está y quién tiene acceso',
            'Trabajar sobre la copia y volver a calcular el hash para verificar que no cambió',
          ],
          done: 'Cada paso queda documentado: así se demuestra que la evidencia **no fue alterada**.',
        },
      },
      {
        ask: 'El hash del archivo hoy es **distinto** al que se calculó al recibirlo. ¿Qué significa?',
        options: [
          { text: 'Nada, los hash cambian solos', reply: 'No. Si el archivo no cambia, el hash tampoco.' },
          { text: 'El archivo pudo ser alterado y la integridad está en duda', ok: true, reply: '¡Exacto! Para eso sirve el hash: verificar integridad.' },
          { text: 'Que el fraude quedó probado', reply: 'No prueba fraude; dice que esa evidencia ya no es confiable.' },
        ],
      },
      { tip: 'Sin **cadena de custodia**, una buena evidencia puede no servir: nadie puede asegurar que no se tocó.' },
    ],
    // Pruebas analíticas forenses: Benford y duplicados
    [
      { text: 'La **ley de Benford**: en muchos datos naturales (facturas, pagos) el primer dígito **no** sale parejo. El **1** sale cerca del **30.1%** de las veces y el **9** solo cerca del **4.6%**.' },
      {
        sort: {
          title: '¿Tiene sentido aplicar Benford?',
          buckets: ['Sí aplica', 'No aplica'],
          items: [
            { text: 'Montos de las facturas de proveedores', bucket: 0, why: 'Son datos naturales: buen candidato.' },
            { text: 'Folios de las facturas', bucket: 1, why: 'Son números asignados en orden, no naturales.' },
            { text: 'Montos de los pagos del año', bucket: 0, why: 'Datos naturales: sí aplica.' },
            { text: 'Precios fijos de una lista de productos', bucket: 1, why: 'Son precios fijos: no aplica.' },
          ],
        },
      },
      {
        calc: {
          question: 'La Norteña hizo **2,000** pagos. Si P(1) = log10(2) ≈ 0.30103, ¿cuántos pagos **deberían** empezar con 1?',
          answer: 602,
          unit: 'pagos',
          hint: 'Esperados = N × P(d), y redondea al entero.',
          why: '2,000 × 0.30103 = 602.06 ≈ **602 pagos**. Si salen muchos más o muchos menos, es señal para revisar, no prueba.',
        },
      },
      { text: 'Ahora los **duplicados**: mismo proveedor, mismo monto y **mismo número de factura**. Pagos de compras: #1 Abarrotera $4,500 F-12 · #2 Fletes $1,800 F-30 · #3 Abarrotera $4,500 F-12 · #4 Fletes $1,800 F-31 · #5 Abarrotera $4,500 F-12.' },
      {
        calc: {
          question: '¿Cuál es el **importe por recuperar**?',
          answer: 9000,
          hint: 'El primer pago de cada grupo es el original; solo suman los repetidos.',
          why: '#3 y #5 repiten a #1: $4,500 + $4,500 = **$9,000**. #4 tiene otra factura (F-31), así que no cuenta.',
        },
      },
      {
        entry: {
          title: 'Reclamar el pago duplicado',
          story: 'Los pagos repetidos se habían cargado a Proveedores. La Norteña reclasifica los **$9,000** como una cuenta por cobrar a la Abarrotera hasta que los devuelva.',
          lines: [
            { account: 'Deudores diversos', side: 'D', amount: 9000, why: 'La Abarrotera debe devolver el dinero: sube un activo, se carga.' },
            { account: 'Proveedores', side: 'C', amount: 9000, why: 'Se corrige el cargo de más que se hizo a Proveedores: se abona.' },
          ],
        },
      },
      { tip: 'Benford es una prueba **exploratoria**: señala dónde mirar, **no prueba fraude**. Mismo monto con **factura distinta** no siempre es duplicado.' },
    ],
  ],
}
