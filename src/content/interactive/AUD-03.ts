import type { InteractiveLesson } from './types'

export const intAUD03: InteractiveLesson = {
  lessonId: 'AUD-03',
  sections: [
    // Las etapas de una auditoría
    [
      { text: 'Un despacho recibe una llamada: una distribuidora de refrescos quiere que la auditen 🥤. ¿Por dónde empieza?' },
      {
        order: {
          title: 'Ordena las etapas de la auditoría',
          steps: [
            'Aceptar el encargo: ¿somos independientes, tenemos gente capaz, la administración es íntegra?',
            'Firmar la carta convenio con objetivo, responsabilidades e informe',
            'Planeación: conocer el negocio, fijar materialidad, ver riesgos y diseñar el plan',
            'Ejecución: aplicar las pruebas planeadas',
            'Conclusión: evaluar diferencias, pedir manifestaciones escritas y emitir el informe',
          ],
          done: 'Aceptación → planeación → ejecución → conclusión.',
        },
      },
      {
        sort: {
          title: '¿En qué etapa pasa?',
          buckets: ['Aceptación', 'Planeación', 'Ejecución', 'Conclusión'],
          items: [
            { text: 'Revisar si el despacho es independiente del cliente', bucket: 0, why: 'Antes de aceptar se revisa la independencia.' },
            { text: 'Fijar la materialidad', bucket: 1, why: 'La materialidad se fija al planear.' },
            { text: 'Aplicar las pruebas a las ventas', bucket: 2, why: 'Aplicar pruebas es ejecución.' },
            { text: 'Pedir manifestaciones escritas a la administración', bucket: 3, why: 'Se piden al final, en la conclusión.' },
            { text: 'Conocer el negocio y su entorno', bucket: 1, why: 'Entender el negocio es parte de la planeación.' },
            { text: 'Emitir el informe', bucket: 3, why: 'El informe cierra la auditoría.' },
          ],
        },
      },
      {
        ask: 'A mitad de las pruebas, la auditora descubre que la distribuidora empezó a **exportar** y cobra en dólares. ¿Qué hace?',
        options: [
          { text: 'Nada: el plan ya estaba hecho', reply: 'La planeación **no es un paso único**. Si aparece algo nuevo, el plan se ajusta.' },
          { text: 'Actualiza el plan y agrega pruebas sobre ventas en dólares', ok: true, reply: '¡Así es! El plan se actualiza cuando aparece algo nuevo.' },
          { text: 'Renuncia al encargo', reply: 'No hace falta: basta con ajustar el plan.' },
        ],
      },
      { tip: 'La **carta convenio** (carta de encargo) deja por escrito el objetivo, quién hace qué y qué informe se entrega.' },
    ],
    // Materialidad: ¿qué tanto es importante?
    [
      { text: 'Un error es **material** si podría cambiar la decisión de quien lee los estados. Se calcula: **Materialidad = Base × % elegido**.' },
      {
        calc: {
          question: 'La distribuidora tiene utilidad antes de impuestos de **$3,000,000**. Con una referencia de **5 %**, ¿cuánto es la **materialidad**?',
          answer: 150000,
          hint: 'convierte 5 % a 0.05 y multiplica por la utilidad.',
          why: '3,000,000 × 0.05 = **$150,000**. Errores de ese tamaño o más podrían cambiar decisiones.',
        },
      },
      {
        sim: {
          title: 'Materialidad de la distribuidora (5 % de la utilidad)',
          inputs: [{ key: 'u', label: 'Utilidad antes de impuestos', min: 1000000, max: 4000000, step: 200000, value: 2400000 }],
          outputs: [
            { label: 'Materialidad (5 %)', calc: (x) => x.u * 0.05, main: true },
            { label: 'Materialidad de ejecución (75 %)', calc: (x) => x.u * 0.05 * 0.75 },
          ],
          goal: {
            text: 'Se encontró un error de **$90,000**. Mueve la utilidad hasta que ese error **sí sea material**.',
            check: (x) => x.u * 0.05 <= 90000,
            done: 'Entre más chica la base, más chica la materialidad y más errores «importan». El mismo error pesa distinto en cada empresa.',
          },
        },
      },
      {
        calc: {
          question: 'Con una materialidad de **$60,000** y un **75 %**, ¿cuánto es la **materialidad de ejecución**?',
          answer: 45000,
          hint: 'multiplica la materialidad (no la utilidad) por 0.75.',
          why: '60,000 × 0.75 = **$45,000**. Es un colchón: errores pequeños no detectados pueden sumar.',
        },
      },
      {
        rush: {
          title: 'Materialidad de $100,000: ¿material o no?',
          seconds: 40,
          labels: ['Material', 'No material'],
          items: [
            { text: 'Error de $150,000 en ventas', ans: 0 },
            { text: 'Error de $800 en papelería', ans: 1 },
            { text: 'Error de $230,000 en inventario', ans: 0 },
            { text: 'Error de $2,000 en viáticos', ans: 1 },
            { text: 'Error de $120,000 en clientes', ans: 0 },
            { text: 'Error de $5,000 en luz', ans: 1 },
          ],
        },
      },
      { tip: 'Las NIA **no fijan porcentajes obligatorios**. El 5 % es una referencia; el auditor elige y justifica con juicio.' },
    ],
    // Riesgo de auditoría y tipos de pruebas
    [
      { text: 'El **riesgo de auditoría** es dar una opinión limpia cuando sí hay un error material. Se parte en tres:' },
      {
        match: {
          title: 'Une cada riesgo con su significado',
          pairs: [
            ['Riesgo inherente', 'Qué tan propensa a errores es la cuenta, antes de controles'],
            ['Riesgo de control', 'Que los controles de la empresa no prevengan ni detecten el error'],
            ['Riesgo de detección', 'Que las pruebas del auditor no encuentren el error'],
            ['Riesgo de auditoría', 'Dar una opinión limpia cuando sí hay un error material'],
          ],
        },
      },
      {
        ask: 'En una joyería 💍 el riesgo inherente y el de control son **altos**. ¿Qué hace el auditor?',
        options: [
          { text: 'Acepta un riesgo de detección bajo: hace más pruebas', ok: true, reply: '¡Correcto! Solo controla el riesgo de detección; si los otros son altos, debe **probar más**.' },
          { text: 'Baja el riesgo inherente', reply: 'El auditor no controla el inherente ni el de control: solo los **evalúa**.' },
          { text: 'Hace menos pruebas porque ya sabe que hay riesgo', reply: 'Al revés: más riesgo → **más pruebas**, más grandes o más cerca del cierre.' },
        ],
      },
      {
        calc: {
          question: 'El auditor quiere **RA = 6 %** y evalúa **RI = 60 %** y **RC = 50 %**. Con RD = RA ÷ (RI × RC), ¿cuánto es el **riesgo de detección** aceptable?',
          answer: 20,
          unit: '%',
          hint: 'pasa todo a decimal: 0.06 ÷ (0.60 × 0.50).',
          why: '0.60 × 0.50 = 0.30; 0.06 ÷ 0.30 = 0.20 → **20 %**. Entre más bajo el RD, más pruebas hacen falta.',
        },
      },
      {
        sort: {
          title: '¿Qué tipo de prueba es?',
          buckets: ['Prueba de controles', 'Prueba de detalle', 'Procedimiento analítico'],
          items: [
            { text: 'Ver si el gerente sí firmó las órdenes de compra', bucket: 0, why: 'Verifica que un control funcione.' },
            { text: 'Revisar las facturas de ventas grandes', bucket: 1, why: 'Revisar documentos de una cifra: detalle.' },
            { text: 'Comparar ventas de este año contra el anterior', bucket: 2, why: 'Comparar tendencias: analítico.' },
            { text: 'Pedir a clientes que confirmen su saldo', bucket: 1, why: 'Confirmar saldos es prueba de detalle.' },
            { text: 'Las ventas subieron 40 % pero los clientes no crecieron: investigar', bucket: 2, why: 'Detectar algo raro en tendencias: analítico.' },
          ],
        },
      },
      { tip: 'Pruebas de **controles** revisan que el control funcione; procedimientos **sustantivos** buscan errores en las cifras.' },
    ],
  ],
}
