import type { InteractiveLesson } from './types'

export const intAUD03: InteractiveLesson = {
  lessonId: 'AUD-03',
  sections: [
    // ¿En qué pasos va una auditoría?
    [
      { text: 'Refrescos del Norte 🥤 llama al despacho de Mónica: quiere que la auditen.' },
      {
        ask: '¿Qué hace primero el despacho?',
        options: [
          { text: 'Empieza a revisar facturas', reply: 'Todavía no. Primero decide si **acepta el encargo**.' },
          { text: 'Decide si acepta el encargo', ok: true, reply: '¡Bien! Revisa si es independiente, si tiene gente capaz y si la administración es íntegra.' },
          { text: 'Emite su opinión', reply: 'La opinión va al final. Primero decide si **acepta el encargo**.' },
        ],
      },
      { text: 'Las etapas:\n🤝 **Aceptación:** decide si acepta y firma la **carta convenio** (objetivo, responsabilidades e informe).\n🗺️ **Planeación:** conoce el negocio, fija la materialidad, ve dónde podría haber errores importantes y arma el plan.\n🔍 **Ejecución:** aplica las pruebas.\n✅ **Conclusión:** evalúa diferencias, pide manifestaciones escritas y emite el informe.' },
      {
        order: {
          title: 'Ordena las etapas',
          steps: ['Aceptar el encargo y firmar la carta convenio', 'Planear', 'Ejecutar las pruebas', 'Concluir y emitir el informe'],
          done: 'Aceptación → planeación → ejecución → conclusión.',
        },
      },
      {
        sort: {
          title: '¿En qué etapa pasa?',
          buckets: ['Planeación', 'Ejecución', 'Conclusión'],
          items: [
            { text: 'Fijar la materialidad y entender el negocio', bucket: 0, why: 'Se hace al planear.' },
            { text: 'Identificar las cuentas con más riesgo de error', bucket: 0, why: 'Ver dónde puede haber errores es planeación.' },
            { text: 'Observar el conteo de inventario al cierre', bucket: 1, why: 'Es aplicar una prueba: ejecución.' },
            { text: 'Enviar confirmaciones de saldo a clientes', bucket: 1, why: 'Otra prueba: ejecución.' },
            { text: 'Pedir la carta de manifestaciones y emitir el informe', bucket: 2, why: 'Cierra la auditoría: conclusión.' },
          ],
        },
      },
      {
        ask: 'A mitad de las pruebas, Mónica descubre que Refrescos del Norte empezó a **exportar** y cobra en dólares. ¿Qué hace?',
        options: [
          { text: 'Nada: el plan ya está aprobado', reply: 'La planeación **no es un paso único**. Si aparece algo nuevo, el plan se actualiza.' },
          { text: 'Actualiza el plan y agrega pruebas a las ventas en dólares', ok: true, reply: '¡Así es! El plan cambia cuando aparecen hechos nuevos.' },
          { text: 'Renuncia al encargo', reply: 'No hace falta: basta con **actualizar el plan**.' },
        ],
      },
    ],
    // ¿Qué error sí importa?
    [
      { text: 'Mónica encuentra un error de **$800** en papelería. ¿Vale la pena perseguirlo? 🤔' },
      { text: 'Un error es **material** si podría cambiar la decisión de quien lee los estados. Para saber cuál importa: **Materialidad = Base × %**. Una referencia común es **5 %** de la utilidad antes de impuestos.' },
      {
        calc: {
          question: 'Refrescos del Norte tiene utilidad antes de impuestos de **$3,000,000**. Con **5 %**, ¿cuánto es la materialidad?',
          answer: 150000,
          hint: '3,000,000 × 0.05.',
          why: '3,000,000 × 0.05 = **$150,000**. Errores de ese tamaño o más podrían cambiar decisiones.',
        },
      },
      { text: 'Luego dos montos más chicos:\n🛟 **Materialidad de ejecución:** un colchón, por ejemplo 75 % de la materialidad, porque errores pequeños pueden sumar.\n🪶 **Umbral claramente insignificante:** debajo de él, los errores ni se acumulan.' },
      {
        calc: {
          question: 'La materialidad es **$150,000**. Con **75 %**, ¿cuánto es la materialidad de ejecución?',
          answer: 112500,
          hint: 'multiplica la materialidad (no la utilidad) por 0.75.',
          why: '150,000 × 0.75 = **$112,500**.',
        },
      },
      {
        calc: {
          question: 'Mónica fija el umbral claramente insignificante en **4 %** de la materialidad de **$150,000**. ¿Cuánto es?',
          answer: 6000,
          hint: '150,000 × 0.04.',
          why: '150,000 × 0.04 = **$6,000**. El error de $800 queda debajo: ni se acumula.',
        },
      },
      {
        rush: {
          title: 'Materialidad de $150,000: ¿material o no?',
          seconds: 40,
          labels: ['Material', 'No material'],
          items: [
            { text: 'Error de $200,000 en ventas', ans: 0 },
            { text: 'Error de $800 en papelería', ans: 1 },
            { text: 'Error de $230,000 en inventario', ans: 0 },
            { text: 'Error de $2,000 en viáticos', ans: 1 },
            { text: 'Error de $160,000 en clientes', ans: 0 },
          ],
        },
      },
      { tip: 'Las NIA **no fijan porcentajes obligatorios**. El 5 % y el 75 % son referencias; el auditor decide con juicio.' },
    ],
    // ¿Cuánto debe probar el auditor?
    [
      { text: 'Mónica nunca está 100 % segura. Decide cuánto riesgo de equivocarse acepta y, con eso, **cuánto probar**.' },
      { text: 'El **riesgo de auditoría** es dar una opinión limpia cuando sí hay un error material. Se parte en tres:\n💎 **Inherente:** qué tan propensa a errores es la cuenta, antes de controles.\n🔒 **De control:** que los controles de la empresa no lo eviten ni lo detecten.\n🔍 **De detección:** que las pruebas del auditor no lo encuentren.' },
      {
        ask: '¿Cuál de los tres puede **controlar** Mónica?',
        options: [
          { text: 'El inherente', reply: 'Ese depende de la cuenta; solo lo evalúa. Controla el **de detección**, decidiendo cuánto y cómo prueba.' },
          { text: 'El de control', reply: 'Depende de la empresa; solo lo evalúa. Controla el **de detección**.' },
          { text: 'El de detección', ok: true, reply: '¡Exacto! Lo ajusta con más o menos pruebas.' },
        ],
      },
      {
        calc: {
          question: 'Mónica quiere un riesgo de auditoría de **6 %** y evalúa inherente **60 %** y de control **50 %**. Con RD = RA ÷ (RI × RC), ¿cuál es el riesgo de detección aceptable, en %?',
          answer: 20,
          unit: '%',
          hint: 'en decimales: 0.06 ÷ (0.60 × 0.50).',
          why: '0.60 × 0.50 = 0.30; 0.06 ÷ 0.30 = 0.20 → **20 %**.',
        },
      },
      {
        ask: 'En las cuentas de inventario, el riesgo inherente y el de control **suben**. ¿Qué hace Mónica con sus pruebas?',
        options: [
          { text: 'Las reduce, porque ya sabe que hay riesgo', reply: 'Al revés: el riesgo de detección aceptable baja, así que debe **probar más**.' },
          { text: 'Las amplía: más partidas, más fuertes o más cerca del cierre', ok: true, reply: '¡Correcto! Más riesgo → **más pruebas**.' },
          { text: 'Las deja igual', reply: 'El riesgo sí cambia las pruebas: debe **ampliarlas**.' },
        ],
      },
      { text: 'Dos familias de pruebas:\n🔒 **De controles:** ¿el control sí funciona?\n🔎 **Sustantivas:** buscan errores en las cifras, con **pruebas de detalle** o **procedimientos analíticos** (comparar tendencias).' },
      {
        sort: {
          title: '¿Qué tipo de prueba es?',
          buckets: ['Prueba de controles', 'Prueba de detalle', 'Procedimiento analítico'],
          items: [
            { text: 'Ver si el gerente sí firmó las órdenes de compra', bucket: 0, why: 'Verifica que un control funcione.' },
            { text: 'Revisar las facturas de las ventas grandes', bucket: 1, why: 'Revisar documentos de una cifra: detalle.' },
            { text: 'Pedir a clientes que confirmen su saldo', bucket: 1, why: 'Confirmar saldos es detalle.' },
            { text: 'Las ventas subieron 40 % pero los clientes no: investigar', bucket: 2, why: 'Comparar tendencias: analítico.' },
          ],
        },
      },
    ],
  ],
}
