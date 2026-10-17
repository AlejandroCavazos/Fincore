import type { InteractiveLesson } from './types'

export const intL505: InteractiveLesson = {
  lessonId: 'L5-05',
  sections: [
    // ¿Qué empuja a alguien al fraude?
    [
      { text: 'Repaso integrador 🔎: un año después, **Sofía** apoya al área forense del despacho. **La Norteña** sospecha que algo raro pasa en **compras**.' },
      {
        ask: 'El encargado de compras lleva 10 años sin problemas. ¿Puede una persona honesta caer en fraude?',
        options: [
          { text: 'Sí, cuando se juntan ciertas condiciones', ok: true, reply: '¡Así es! El modelo de Cressey explica cuáles son esas condiciones.' },
          { text: 'No, nunca', reply: 'Sí puede pasar: cuando se juntan **presión, oportunidad y racionalización**.' },
          { text: 'Solo si gana poco', reply: 'El sueldo no lo decide todo. Pasa cuando se juntan **presión, oportunidad y racionalización**.' },
        ],
      },
      {
        text: 'Según **Cressey**, el fraude suele aparecer cuando se juntan:\n😰 **Presión o incentivo:** deudas, metas agresivas.\n🚪 **Oportunidad:** controles débiles, nadie supervisa.\n🗣️ **Racionalización:** la excusa: «lo devolveré».',
      },
      {
        sort: {
          title: '¿Qué lado del triángulo es?',
          buckets: ['Presión o incentivo', 'Oportunidad', 'Racionalización'],
          items: [
            { text: 'El encargado de compras tiene muchas deudas personales', bucket: 0, why: 'Una necesidad de dinero empuja: presión.' },
            { text: 'Nadie revisa a qué proveedores les compra', bucket: 1, why: 'Falta de supervisión: oportunidad.' },
            { text: '«Solo es un préstamo, lo devuelvo con mi aguinaldo»', bucket: 2, why: 'Es una excusa: racionalización.' },
            { text: 'Le exigen metas muy agresivas', bucket: 0, why: 'Metas agresivas presionan: incentivo.' },
            { text: '«La empresa me debe horas extra»', bucket: 2, why: 'Se justifica: racionalización.' },
            { text: 'La misma persona autoriza y paga a los proveedores', bucket: 1, why: 'Controles débiles: oportunidad.' },
          ],
        },
      },
      {
        ask: '¿Sobre qué lado puede influir **más** La Norteña?',
        options: [
          { text: 'La presión: las deudas de cada empleado', reply: 'La empresa casi no controla la vida personal de su gente. Donde más actúa es en la **oportunidad**.' },
          { text: 'La oportunidad, con buen control interno', ok: true, reply: '¡Exacto! Segregación, autorizaciones y supervisión le cierran la puerta al fraude.' },
          { text: 'La racionalización: lo que piensa cada quien', reply: 'Difícil de controlar. Donde más se puede actuar es en la **oportunidad**.' },
        ],
      },
      {
        text: 'Tres tipos de fraude:\n📊 **Información financiera fraudulenta:** maquillar los estados financieros.\n📦 **Apropiación indebida de activos:** quedarse con dinero o bienes.\n🤝 **Corrupción:** sobornos y conflictos de interés.',
      },
      {
        sort: {
          title: '¿Qué tipo de fraude es?',
          buckets: ['Información financiera fraudulenta', 'Apropiación indebida de activos', 'Corrupción'],
          items: [
            { text: 'Registrar ventas ficticias al cierre para llegar a la meta', bucket: 0, why: 'Se falsean los estados financieros.' },
            { text: 'Quedarse con cobros en efectivo antes de registrarlos', bucket: 1, why: 'Se roba un activo: efectivo.' },
            { text: 'Un proveedor le da una comisión «por debajo» al de compras', bucket: 2, why: 'Es un soborno: corrupción.' },
            { text: 'Pagar nómina a «empleados fantasma»', bucket: 1, why: 'Sale dinero hacia alguien que no trabaja: apropiación indebida.' },
            { text: 'Omitir pasivos para aparentar menos deuda', bucket: 0, why: 'Se esconden deudas en los estados financieros.' },
          ],
        },
      },
      { tip: 'La NIA 240 se fija en **información financiera fraudulenta** y **apropiación indebida de activos**. La ACFE añade la **corrupción**.' },
    ],
    // Una señal no es prueba
    [
      { text: 'Sofía revisa los proveedores de La Norteña y algo le brinca 🚩.' },
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
        ask: 'Un proveedor tiene **la misma dirección** que el encargado de compras. ¿Qué hace Sofía?',
        options: [
          { text: 'Lo acusa de fraude en su reporte', reply: 'Una señal no es prueba y puede tener una explicación legítima. Toca **investigar** y reportar hechos.' },
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
    // Cuidar la evidencia
    [
      { text: 'La Norteña quiere llevar el caso a juicio ⚖️. Para eso, Sofía hace una **auditoría forense**: técnicas contables, de auditoría e informáticas para que la evidencia **sirva en un proceso legal**.' },
      {
        text: '🔗 **Cadena de custodia:** anotar quién obtuvo cada evidencia, cuándo, cómo se guardó y quién la tocó.\n💽 **Copia forense:** copia exacta para no tocar el original.\n🔑 **Valor hash:** una «huella digital» que cambia si el archivo se altera.',
      },
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
      {
        order: {
          title: 'Sofía recibe la laptop de compras: ordena sus pasos',
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
          { text: 'Nada, los hash cambian solos', reply: 'Si el archivo no cambia, el hash tampoco. Si cambió, el archivo **pudo ser alterado**.' },
          { text: 'El archivo pudo ser alterado y la integridad está en duda', ok: true, reply: '¡Exacto! Para eso sirve el hash: verificar integridad.' },
          { text: 'Que el fraude quedó probado', reply: 'No prueba fraude; dice que esa evidencia **pudo ser alterada** y ya no es confiable.' },
        ],
      },
      { tip: 'Sin **cadena de custodia**, una buena evidencia puede no servir: nadie puede asegurar que no se tocó.' },
    ],
    // Números que delatan
    [
      { text: 'Sofía tiene miles de pagos de La Norteña. No puede verlos uno por uno… pero los números mismos pueden delatar algo 🔢.' },
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
          question: 'La Norteña hizo **2,000** pagos. Si P(1) = log10(2) ≈ 0.30103, ¿cuántos **deberían** empezar con 1?',
          answer: 602,
          unit: 'pagos',
          hint: 'Esperados = N × P(d), y redondea al entero.',
          why: '2,000 × 0.30103 = 602.06 ≈ **602 pagos**. Si salen muchos más o muchos menos, es señal para revisar, no prueba.',
        },
      },
      { text: '**Pago duplicado:** mismo proveedor, mismo monto y **mismo número de factura**. El primero es el original.\n#1 Abarrotera $4,500 F-12 · #2 Fletes $1,800 F-30 · #3 Abarrotera $4,500 F-12 · #4 Fletes $1,800 F-31 · #5 Abarrotera $4,500 F-12' },
      {
        ask: '¿Cuántos pagos **duplicados** hay?',
        options: [
          { text: '2', ok: true, reply: '¡Bien! #3 y #5 repiten a #1. El #1 es el original.' },
          { text: '3', reply: 'El #1 es el **original**, no cuenta. Y #4 tiene otra factura (F-31). Duplicados: #3 y #5 = **2**.' },
          { text: '4', reply: '#2 y #4 tienen facturas distintas (F-30 y F-31): no son duplicados. Solo #3 y #5 = **2**.' },
        ],
      },
      {
        calc: {
          question: '¿Cuál es el **importe por recuperar**?',
          answer: 9000,
          hint: 'Solo suman los pagos repetidos, no el original.',
          why: '#3 y #5 repiten a #1: $4,500 + $4,500 = **$9,000**. #4 tiene otra factura (F-31), así que no cuenta.',
        },
      },
      { tip: 'Benford es una prueba **exploratoria**: señala dónde mirar, **no prueba fraude**. Mismo monto con **factura distinta** no siempre es duplicado.' },
    ],
  ],
}
