import type { InteractiveLesson } from './types'

export const intCOS03: InteractiveLesson = {
  lessonId: 'COS-03',
  sections: [
    // ¿Cada pedido es distinto?
    [
      { text: 'Don Beto tiene una **carpintería** 🪚. Hoy un cliente pide una cocina, otro un ropero y otro 10 mesas.' },
      {
        ask: '¿Puede Beto usar el mismo costo para la cocina que para el ropero?',
        options: [
          { text: 'No: cada pedido lleva material y horas distintas', ok: true, reply: '¡Exacto! Por eso costea **cada pedido por separado**.' },
          { text: 'Sí: todo es madera', reply: 'Una cocina lleva mucha más madera y horas que un ropero. Cada pedido se costea **por separado**.' },
          { text: 'Sí: saca un promedio del mes', reply: 'Un promedio sirve si todo sale igual. Aquí cada pedido es distinto: se costea **por separado**.' },
        ],
      },
      { text: 'Eso es **costeo por órdenes**: cada pedido es una **orden de producción** con su número. Sirve cuando **cada pedido es distinto**.' },
      {
        multi: {
          title: '¿Quién debería usar costeo por órdenes? Marca todos.',
          items: [
            { text: 'Una imprenta de invitaciones de boda personalizadas', ok: true },
            { text: 'Un taller de cocinas integrales a la medida', ok: true },
            { text: 'Una constructora que hace una casa por encargo', ok: true },
            { text: 'Una refresquera que llena miles de botellas iguales', ok: false },
          ],
          why: 'Órdenes sirve cuando **cada pedido es distinto**. Si todo sale igual y la línea no para, se usa otro método.',
        },
      },
      { text: 'Cada orden tiene su **hoja de costos** 📋:\n🪵 el material que salió del almacén para ella,\n👷 las horas de mano de obra que se le dedicaron,\n💡 los CIF que le tocan.' },
      {
        calc: {
          question: 'Orden #12: **10 mesas**. Madera **$9,000**, **40 horas** de carpintero a **$150** y CIF a **$50 por hora**. ¿Cuál es el **costo total de la orden**?',
          answer: 17000,
          hint: 'MOD = 40 × 150; CIF = 40 × 50; suma todo con la madera.',
          why: 'MOD = 6,000. CIF = 2,000. Total = 9,000 + 6,000 + 2,000 = **$17,000**.',
        },
      },
      {
        calc: {
          question: 'La orden #12 costó **$17,000** y son **10 mesas**. ¿Cuánto cuesta **cada mesa**?',
          answer: 1700,
          hint: 'Costo de la orden ÷ piezas de la orden.',
          why: '17,000 ÷ 10 = **$1,700** por mesa. Si la vende por menos, pierde.',
        },
      },
      { tip: 'Hoja de costos = **material + mano de obra + CIF**. Si olvidas los CIF, cotizas demasiado barato.' },
    ],
    // ¿Cómo cotizar sin saber la luz?
    [
      { text: 'Un cliente quiere su cotización **hoy**. Pero Beto sabrá cuánto pagó de luz y renta hasta fin de mes 🤔.' },
      {
        ask: '¿Cómo le pone CIF a la orden hoy?',
        options: [
          { text: 'Con una tasa calculada con lo que espera gastar', ok: true, reply: '¡Eso! Se llama **tasa predeterminada**: se calcula al inicio del año con datos presupuestados.' },
          { text: 'Espera a fin de año para cotizar', reply: 'El cliente se iría. Se usa una **tasa predeterminada**, calculada con lo que espera gastar.' },
          { text: 'No le pone CIF', reply: 'Entonces cotizaría muy barato. Se usa una **tasa predeterminada** con lo que espera gastar.' },
        ],
      },
      { text: '📐 **Tasa** = CIF presupuestados ÷ base presupuestada (por ejemplo, horas de MOD).\n📌 **CIF aplicados** a una orden = tasa × base **real** que usó.' },
      {
        calc: {
          question: 'Beto espera CIF de **$480,000** en el año y **16,000 horas** de MOD. ¿Cuál es la **tasa** por hora?',
          answer: 30,
          hint: 'CIF presupuestados ÷ horas presupuestadas.',
          why: '480,000 ÷ 16,000 = **$30 por hora**. Pesos entre horas, no al revés.',
        },
      },
      {
        calc: {
          question: 'Con la tasa de **$30 por hora**, la orden de un ropero usó **25 horas reales**. ¿Cuántos **CIF aplicados** recibe?',
          answer: 750,
          hint: 'Tasa × horas reales de la orden.',
          why: '25 × 30 = **$750**. Se usan las horas **reales** de la orden, no las del presupuesto.',
        },
      },
      {
        ask: 'Una fábrica de muebles trabaja casi todo con **máquinas automáticas** y poca gente. ¿Qué base le conviene?',
        options: [
          { text: 'Horas máquina', ok: true, reply: '¡Bien! Si es muy automatizada, las horas máquina explican mejor la luz y el mantenimiento.' },
          { text: 'Horas de mano de obra directa', reply: 'Con poca gente, esas horas casi no explican la luz ni el mantenimiento. Conviene usar **horas máquina**.' },
          { text: 'Los pesos de madera usados', reply: 'La madera no es lo que mueve la luz de las máquinas. Conviene usar **horas máquina**.' },
        ],
      },
      { tip: 'Elige la base que de verdad **"mueve"** los indirectos.' },
    ],
    // ¿A dónde va el costo?
    [
      { text: 'El costo viaja con la orden 🚚: mientras se trabaja está en **producción en proceso**, al terminar pasa a **producto terminado** y al venderse se vuelve **costo de ventas**.' },
      {
        tacct: {
          title: 'Llena la cuenta de la orden #12',
          account: 'Producción en proceso',
          moves: [
            { story: 'Entra la madera de la orden: **$9,000**.', side: 'D', amount: 9000, why: 'El costo se acumula en proceso: cargo.' },
            { story: 'Se cargan 40 horas de carpintero: **$6,000**.', side: 'D', amount: 6000, why: 'La MOD también se acumula: cargo.' },
            { story: 'Se aplican los CIF: **$2,000**.', side: 'D', amount: 2000, why: 'Los CIF aplicados se suman a la orden: cargo.' },
            { story: 'Se terminan las 10 mesas y pasan a producto terminado: **$17,000**.', side: 'C', amount: 17000, why: 'El costo sale de proceso: abono. La cuenta queda en cero.' },
          ],
        },
      },
      {
        entry: {
          title: 'Registra el costo de las mesas vendidas',
          story: 'Beto entrega y vende las 10 mesas. Su costo era **$17,000**. Registra solo el costo:',
          lines: [
            { account: 'Costo de ventas', side: 'D', amount: 17000, why: 'Nace el costo de lo vendido: cargo.' },
            { account: 'Inventarios (producto terminado)', side: 'C', amount: 17000, why: 'Las mesas salen del inventario: abono.' },
          ],
        },
      },
      { text: 'Al cierre del año comparas los CIF **aplicados** contra los **reales**:\n⬇️ Aplicaste **menos** → **subaplicados**.\n⬆️ Aplicaste **más** → **sobreaplicados**.' },
      {
        sort: {
          title: '¿Subaplicados o sobreaplicados?',
          buckets: ['Subaplicados', 'Sobreaplicados'],
          items: [
            { text: 'Aplicados $50,000; reales $55,000', bucket: 0, why: 'Aplicaste menos de lo que gastaste: subaplicados.' },
            { text: 'Aplicados $80,000; reales $72,000', bucket: 1, why: 'Aplicaste más de lo que gastaste: sobreaplicados.' },
            { text: 'Aplicados $30,000; reales $31,000', bucket: 0, why: 'Te quedaste $1,000 corto: subaplicados.' },
            { text: 'Aplicados $64,000; reales $60,000', bucket: 1, why: 'Te pasaste $4,000: sobreaplicados.' },
          ],
        },
      },
      {
        calc: {
          question: 'Beto aplica CIF a **$40** por hora. En el año usó **6,000 horas** y los CIF reales fueron **$250,000**. ¿De cuánto es la diferencia? (solo el número)',
          answer: 10000,
          hint: 'Aplicados = 40 × 6,000. Luego compara con los reales.',
          why: 'Aplicados = **$240,000**. Reales $250,000. Aplicó $10,000 de menos: **$10,000 subaplicados**.',
        },
      },
      { tip: 'Si la diferencia es pequeña, lo común es ajustarla contra el **costo de ventas**.' },
    ],
  ],
}
