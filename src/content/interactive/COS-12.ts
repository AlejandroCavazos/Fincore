import type { InteractiveLesson } from './types'

export const intCOS12: InteractiveLesson = {
  lessonId: 'COS-12',
  sections: [
    // ¿Vas como planeaste?
    [
      { text: 'Marisol hace galletas 🍪. En enero hizo su presupuesto y lo guardó en un cajón. En diciembre no sabe si le fue bien o mal.' },
      {
        ask: '¿Qué le faltó?',
        options: [
          { text: 'Comparar cada mes lo real contra el plan', ok: true, reply: '¡Eso! Un presupuesto sirve cuando lo comparas con lo que de verdad pasa y corriges.' },
          { text: 'Hacer un presupuesto más grande', reply: 'El tamaño no importa si nadie lo revisa. Le faltó **comparar lo real contra el plan**.' },
          { text: 'No hacer presupuesto', reply: 'Sin plan no tendría contra qué comparar. Le faltó **comparar lo real contra el plan** cada mes.' },
        ],
      },
      { text: 'Eso es el **control presupuestal**: un ciclo que se repite. Planear, ejecutar, medir, comparar y corregir.' },
      {
        order: {
          title: 'Ordena el ciclo de control',
          steps: ['Planear', 'Ejecutar', 'Medir lo que pasó', 'Comparar contra el plan', 'Corregir'],
          done: 'Y luego el ciclo **vuelve a empezar**.',
        },
      },
      { text: 'La diferencia entre lo real y el plan es una **variación**.\n✅ **Favorable:** mejora la utilidad (más ingresos o menos costos).\n⚠️ **Desfavorable:** la empeora (menos ingresos o más costos).' },
      {
        rush: {
          title: '¿Favorable o desfavorable?',
          seconds: 40,
          labels: ['Favorable', 'Desfavorable'],
          items: [
            { text: 'Ventas reales mayores que las planeadas', ans: 0 },
            { text: 'Gasto de luz mayor que el planeado', ans: 1 },
            { text: 'Costo de harina menor que el planeado', ans: 0 },
            { text: 'Ventas reales menores que las planeadas', ans: 1 },
            { text: 'Papelería: presupuesto $8,000, real $9,200', ans: 1 },
            { text: 'Sueldos: presupuesto $50,000, real $47,000', ans: 0 },
          ],
        },
      },
      {
        ask: 'Marisol gastó **$6,000 menos** de lo planeado en mantenimiento. ¿Qué hace?',
        options: [
          { text: 'Nada: es favorable y eso siempre es bueno', reply: 'Cuidado: ahorrar en mantenimiento hoy puede ser una descompostura mañana. Hay que **investigarla**.' },
          { text: 'Investigarla: las variaciones grandes se revisan, sean del signo que sean', ok: true, reply: '¡Bien! Favorable no siempre es bueno. Las variaciones grandes se investigan siempre.' },
          { text: 'Bajar el presupuesto de mantenimiento para siempre', reply: 'Primero hay que saber **por qué** gastó menos. Puede que falte mantenimiento.' },
        ],
      },
      { tip: 'En **costos**, gastar menos que el plan es favorable. En **ingresos**, vender más que el plan es favorable.' },
    ],
    // ¿Cuánto debiste gastar?
    [
      {
        ask: 'Marisol planeó **3,000** cajas y hizo **3,500**. Gastó más harina que en el plan. ¿Lo hizo mal?',
        options: [
          { text: 'Sí, se pasó del presupuesto', reply: 'Hizo **más cajas**: claro que usó más harina. Hay que compararla contra lo que **debía** gastar para 3,500.' },
          { text: 'No se sabe: hay que ver cuánto debía gastar para 3,500', ok: true, reply: '¡Exacto! Eso es el presupuesto **flexible**.' },
          { text: 'No, porque los presupuestos nunca se comparan', reply: 'Sí se comparan, pero contra el presupuesto correcto: lo que debía gastar para **3,500**.' },
        ],
      },
      { text: '📌 **Estático:** el plan para el volumen planeado (3,000).\n🔄 **Flexible:** el mismo plan (precios, variables por unidad y fijos) pero con el **volumen real** (3,500).\nFlexible = fijos + variable por unidad × volumen real.' },
      {
        calc: {
          question: 'Plan de gastos de fábrica: **$30,000** fijos + **$10** por caja. Hizo **3,500** cajas. ¿Cuál es el **presupuesto flexible**?',
          answer: 65000,
          hint: '30,000 + 10 × 3,500.',
          why: '30,000 + 35,000 = **$65,000**. Eso es lo que debía gastar para lo que de verdad hizo.',
        },
      },
      { text: 'Con la utilidad salen dos variaciones:\n📦 **Por volumen** = flexible − estático: efecto de vender más o menos.\n🎯 **De presupuesto flexible** = real − flexible: qué tan bien manejó precios y costos.' },
      {
        calc: {
          question: 'Cada caja se vende a **$150** con variable de **$90**; fijos **$120,000**. Planeó una utilidad de **$60,000** (3,000 cajas). ¿Cuál es la utilidad del **presupuesto flexible** para **3,500** cajas?',
          answer: 90000,
          hint: '3,500 × (150 − 90) − 120,000.',
          why: '3,500 × 60 = 210,000. Menos 120,000 = **$90,000**.',
        },
      },
      {
        calc: {
          question: '¿Cuál es la **variación por volumen**? (flexible − estático)',
          answer: 30000,
          hint: '90,000 − 60,000.',
          why: '90,000 − 60,000 = **$30,000 favorable**: vendió más de lo planeado.',
        },
      },
      {
        calc: {
          question: 'Su utilidad real fue **$75,000**. ¿De cuánto es la **variación de presupuesto flexible**? (escribe el número sin signo)',
          answer: 15000,
          hint: 'real − flexible: 75,000 − 90,000.',
          why: '75,000 − 90,000 = −15,000: **$15,000 desfavorable**. Vendió más, pero manejó peor precios o costos.',
        },
      },
      { tip: 'Para evaluar a alguien que hizo más o menos de lo planeado, compara contra el **flexible**, no contra el estático.' },
    ],
    // ¿Quién responde por cada número?
    [
      { text: 'Marisol ya tiene una planta y varias sucursales 🏭. Cada número se asigna a quien **puede controlarlo**: eso es un **centro de responsabilidad**.\n🔧 **Costos:** controla gastos (la planta, mantenimiento).\n💰 **Ingresos:** responde por ventas (el área comercial).\n🏪 **Utilidades:** ingresos y costos (una sucursal).\n🏗️ **Inversión:** además decide en qué invertir (una división).' },
      {
        match: {
          title: 'Une cada centro con un ejemplo',
          pairs: [
            ['Centro de costos', 'Mantenimiento: controla gastos'],
            ['Centro de ingresos', 'El área comercial: responde por cuánto vende'],
            ['Centro de utilidades', 'Una sucursal con su propio estado de resultados'],
            ['Centro de inversión', 'Una división que decide comprar maquinaria'],
          ],
        },
      },
      {
        ask: 'La tienda en línea de Marisol fija sus precios y controla sus costos. ¿Qué centro es?',
        options: [
          { text: 'De utilidades', ok: true, reply: '¡Eso! Responde por ingresos **y** costos.' },
          { text: 'De costos', reply: 'También fija precios, o sea, responde por ingresos. Con ingresos y costos es de **utilidades**.' },
          { text: 'De inversión', reply: 'No decide en qué invertir (maquinaria, plantas). Con ingresos y costos es de **utilidades**.' },
        ],
      },
      { text: 'Revisar cada renglón cansa. Con la **gestión por excepción** solo investigas lo que rebasa un umbral, por ejemplo 5 %, **favorable o desfavorable**.\nVariación % = (real − presupuesto) ÷ presupuesto × 100.' },
      {
        calc: {
          question: 'Gas: presupuesto **$40,000**, real **$44,000**. ¿Cuál es la variación en **porcentaje**?',
          answer: 10, unit: '%',
          hint: '(44,000 − 40,000) ÷ 40,000 × 100.',
          why: '4,000 ÷ 40,000 × 100 = **10 %**. Con umbral de 5 %, se investiga.',
        },
      },
      {
        sort: {
          title: 'Umbral de 5 %: ¿se investiga?',
          buckets: ['Se investiga', 'No se investiga'],
          items: [
            { text: 'Materiales: $214,000 real vs. $200,000 plan (7 % arriba)', bucket: 0, why: 'Rebasa el 5 %.' },
            { text: 'Luz: $31,000 real vs. $30,000 plan (3.3 % arriba)', bucket: 1, why: 'No llega al 5 %.' },
            { text: 'Mantenimiento: $45,000 real vs. $50,000 plan (10 % abajo)', bucket: 0, why: 'Es favorable, pero rebasa el umbral: también se investiga.' },
            { text: 'Papelería: $10,200 real vs. $10,000 plan (2 % arriba)', bucket: 1, why: 'Está dentro del umbral.' },
            { text: 'Fletes: $11,000 real vs. $10,000 plan', bucket: 0, why: '1,000 ÷ 10,000 = 10 %: rebasa el umbral.' },
          ],
        },
      },
      { tip: 'Por excepción se revisan las variaciones que rebasan el umbral, **favorables o desfavorables**.' },
    ],
  ],
}
