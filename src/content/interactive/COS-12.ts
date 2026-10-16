import type { InteractiveLesson } from './types'

export const intCOS12: InteractiveLesson = {
  lessonId: 'COS-12',
  sections: [
    // El ciclo de control y las variaciones
    [
      { text: 'Hacer un presupuesto y guardarlo en un cajón no sirve. El **control presupuestal** es un ciclo que se repite.' },
      {
        order: {
          title: 'Ordena el ciclo de control',
          steps: ['Planear', 'Ejecutar', 'Medir lo que pasó', 'Comparar contra el plan', 'Corregir'],
          done: 'Y luego el ciclo **vuelve a empezar**.',
        },
      },
      { text: 'La diferencia entre lo real y lo presupuestado es una **variación**. **Favorable** si mejora la utilidad; **desfavorable** si la empeora.' },
      {
        rush: {
          title: '¿Favorable o desfavorable?',
          seconds: 40,
          labels: ['Favorable', 'Desfavorable'],
          items: [
            { text: 'Ventas reales mayores que las planeadas', ans: 0 },
            { text: 'Gasto de luz mayor que el planeado', ans: 1 },
            { text: 'Costo de materiales menor que el planeado', ans: 0 },
            { text: 'Ventas reales menores que las planeadas', ans: 1 },
            { text: 'Papelería: presupuesto $8,000, real $9,200', ans: 1 },
            { text: 'Sueldos: presupuesto $50,000, real $47,000', ans: 0 },
          ],
        },
      },
      {
        ask: 'El taller gastó **$6,000 menos** de lo planeado en mantenimiento. ¿Qué haces?',
        options: [
          { text: 'Nada, es favorable y eso siempre es bueno', reply: 'Cuidado: ahorrar en mantenimiento hoy puede ser una descompostura mañana.' },
          { text: 'Investigarla: toda variación grande se revisa, sea del signo que sea', ok: true, reply: '¡Bien! Favorable no siempre es bueno. Las variaciones grandes se investigan siempre.' },
          { text: 'Bajar el presupuesto de mantenimiento para siempre', reply: 'Primero hay que saber **por qué** se gastó menos. Puede que falte mantenimiento.' },
        ],
      },
      { tip: 'Variación = real − presupuesto. En **costos**, si sale positiva es desfavorable; en **ingresos**, es favorable.' },
    ],
    // Presupuesto estático y presupuesto flexible
    [
      { text: 'El **presupuesto estático** se hizo para un solo volumen, el planeado. El **flexible** responde: «¿cuánto **debí** gastar para lo que **de verdad** hice?»' },
      {
        ask: 'Se planeó hacer 3,000 panes y se hicieron 4,000. El panadero gastó más harina que en el presupuesto estático. ¿Es justo regañarlo solo por eso?',
        options: [
          { text: 'Sí, se pasó del presupuesto', reply: 'Hizo **más panes**: claro que usó más harina. Hay que compararlo contra lo que debió gastar para 4,000.' },
          { text: 'No: hay que compararlo contra el presupuesto flexible de 4,000 panes', ok: true, reply: '¡Exacto! El flexible ajusta el plan al volumen real para medir con la vara correcta.' },
          { text: 'No, porque los presupuestos nunca se comparan', reply: 'Sí se comparan; solo que contra el presupuesto correcto: el flexible.' },
        ],
      },
      {
        sim: {
          title: 'Material: real contra flexible',
          inputs: [
            { key: 'u', label: 'Unidades hechas de verdad', min: 2000, max: 5000, step: 500, value: 3000 },
            { key: 'r', label: 'Gasto real de material', min: 30000, max: 60000, step: 2000, value: 40000 },
          ],
          outputs: [
            { label: 'Presupuesto flexible ($12 por unidad × unidades reales)', calc: (x) => 12 * x.u },
            { label: 'Variación (real − flexible)', calc: (x) => x.r - 12 * x.u, main: true },
          ],
          goal: {
            text: 'Logra que el gasto real quede **por debajo** del presupuesto flexible (variación favorable).',
            check: (x) => x.r < 12 * x.u,
            done: 'Ahora sí comparas parejo: lo que gastaste contra lo que **debías** gastar para lo que hiciste.',
          },
        },
      },
      {
        calc: {
          question: 'El plan era gastar **$8** de empaque por unidad, más **$5,000** fijos. Se hicieron **4,000** unidades. ¿Cuánto es el **presupuesto flexible** de empaque?',
          answer: 37000,
          hint: 'fijos + costo variable por unidad × volumen real.',
          why: '$5,000 + $8 × 4,000 = **$37,000**.',
        },
      },
      {
        match: {
          title: 'Une cada variación con lo que mide',
          pairs: [
            ['Variación por volumen', 'Flexible − estático: efecto de vender más o menos'],
            ['Variación de presupuesto flexible', 'Real − flexible: qué tan bien se manejaron precios y costos'],
            ['Presupuesto estático', 'Hecho para un solo nivel de actividad, el planeado'],
          ],
        },
      },
      { tip: 'Flexible = mismos precios, costos variables por unidad y fijos del plan, pero con el **volumen real**.' },
    ],
    // Centros de responsabilidad y gestión por excepción
    [
      { text: 'Cada resultado se asigna a quien **puede controlarlo**. Un **centro de responsabilidad** es un área cuyo jefe responde por ciertos números.' },
      {
        match: {
          title: 'Une cada centro con un ejemplo',
          pairs: [
            ['Centro de costos', 'Mantenimiento: controla gastos'],
            ['Centro de ingresos', 'El departamento comercial: responde por ventas'],
            ['Centro de utilidades', 'Una sucursal: ingresos y costos'],
            ['Centro de inversión', 'Una división: además decide en qué invertir'],
          ],
        },
      },
      { text: 'Revisar cada renglón cansa. Con la **gestión por excepción** solo investigas lo que rebasa un umbral, por ejemplo 5 %.' },
      {
        calc: {
          question: 'Gas: presupuesto **$40,000**, real **$44,000**. ¿Cuál es la variación en **porcentaje**?',
          answer: 10, unit: '%',
          hint: '(real − presupuesto) ÷ presupuesto × 100.',
          why: '($44,000 − $40,000) ÷ $40,000 × 100 = **10 %**. Con umbral de 5 %, se investiga.',
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
          ],
        },
      },
      { tip: 'Por excepción se revisan las variaciones que rebasan el umbral, **favorables o desfavorables**.' },
    ],
  ],
}
