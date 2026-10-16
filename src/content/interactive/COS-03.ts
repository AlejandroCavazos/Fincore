import type { InteractiveLesson } from './types'

export const intCOS03: InteractiveLesson = {
  lessonId: 'COS-03',
  sections: [
    // Cuándo se usa y la hoja de costos
    [
      { text: 'Don Beto tiene una **carpintería** 🪚. Cada cliente pide algo distinto: una cocina, un ropero, 10 mesas. Por eso usa **costeo por órdenes**: cada pedido es una **orden de producción** con su número.' },
      {
        multi: {
          title: '¿Quién debería usar costeo por órdenes? Marca todos.',
          items: [
            { text: 'Una imprenta que hace invitaciones de boda personalizadas', ok: true },
            { text: 'Un taller de cocinas integrales a la medida', ok: true },
            { text: 'Una constructora que hace una casa por encargo', ok: true },
            { text: 'Una embotelladora de agua donde todas las botellas son iguales', ok: false },
          ],
          why: 'Órdenes sirve cuando **cada pedido es distinto**. Si todo sale igual y la línea no para, se usa otro método.',
        },
      },
      { text: 'Cada orden tiene su **hoja de costos**: ahí se anota el material, las horas de mano de obra y los CIF que le tocan.' },
      {
        calc: {
          question: 'Orden #12: **10 mesas**. Madera **$9,000**, **40 horas** de carpintero a **$150** y CIF aplicados a **$50 por hora**. ¿Cuál es el **costo total de la orden**?',
          answer: 17000,
          hint: 'MOD = 40 × 150; CIF = 40 × 50; suma todo con la madera.',
          why: 'MOD = 6,000. CIF = 2,000. Total = 9,000 + 6,000 + 2,000 = **$17,000**.',
        },
      },
      {
        calc: {
          question: 'La orden #12 costó **$17,000** y son **10 mesas**. ¿Cuánto cuesta **cada mesa**?',
          answer: 1700,
          hint: 'costo de la orden ÷ unidades de la orden.',
          why: '17,000 ÷ 10 = **$1,700**. Ese es el piso: si vende cada mesa por menos, pierde.',
        },
      },
      { tip: 'Si olvidas los **CIF**, la orden queda subcosteada y la cotizas demasiado barata.' },
    ],
    // La tasa predeterminada de indirectos
    [
      { text: 'Problema: la luz y la renta reales se conocen hasta fin de mes, pero el cliente quiere su cotización **hoy**. Solución: una **tasa predeterminada** calculada con datos **presupuestados**.' },
      {
        calc: {
          question: 'La carpintería espera CIF de **$480,000** en el año y **16,000 horas** de MOD. ¿Cuál es la **tasa predeterminada** por hora?',
          answer: 30,
          hint: 'CIF presupuestados ÷ base presupuestada.',
          why: '480,000 ÷ 16,000 = **$30 por hora de MOD**. Pesos entre horas, no al revés.',
        },
      },
      {
        calc: {
          question: 'Con la tasa de **$30 por hora**, la orden de un ropero usó **25 horas reales**. ¿Cuántos **CIF aplicados** recibe?',
          answer: 750,
          hint: 'tasa × base real de la orden.',
          why: '25 × 30 = **$750**. Se usan las horas **reales** de la orden, no las presupuestadas del año.',
        },
      },
      {
        ask: 'Una fábrica de muebles casi todo lo hace con **máquinas automáticas**; trabaja poca gente. ¿Qué base conviene para la tasa?',
        options: [
          { text: 'Horas de mano de obra directa', reply: 'Con poca gente, las horas de MOD casi no explican la luz ni el mantenimiento.' },
          { text: 'Horas máquina', ok: true, reply: '¡Bien! Si es muy automatizada, las horas máquina explican mejor la luz y el mantenimiento.' },
          { text: 'Los pesos de madera usados', reply: 'La madera no es lo que mueve la luz y el mantenimiento de las máquinas.' },
        ],
      },
      { tip: 'Elige la base que de verdad **"mueve"** los indirectos.' },
    ],
    // Flujo del costo y ajuste de indirectos
    [
      { text: 'Mientras se trabaja, la orden está en **producción en proceso**. Al terminar pasa a **producto terminado**. Al venderse, se vuelve **costo de ventas**.' },
      {
        order: {
          title: 'Ordena el camino de la orden #12',
          steps: [
            'Sale la madera del almacén para la orden',
            'Se trabaja la orden: está en producción en proceso',
            'Se termina: pasa a producto terminado',
            'Se entrega y se vende: pasa a costo de ventas',
          ],
          done: 'Proceso → terminado → vendido. El costo viaja con la orden.',
        },
      },
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
          title: 'Registra la venta de las mesas',
          story: 'Don Beto entrega y vende las 10 mesas. Su costo era **$17,000**. Registra el costo de lo vendido:',
          lines: [
            { account: 'Costo de ventas', side: 'D', amount: 17000, why: 'Nace el costo de lo vendido: cargo.' },
            { account: 'Inventarios (producto terminado)', side: 'C', amount: 17000, why: 'Las mesas salen del inventario: abono.' },
          ],
        },
      },
      { text: 'Al cierre comparas CIF **aplicados** contra **reales**. Aplicaste menos → **subaplicados**. Aplicaste más → **sobreaplicados**.' },
      {
        calc: {
          question: 'Aplicaste **$300,000** de CIF y los reales fueron **$312,000**. ¿De cuánto es la diferencia? (escribe solo el número)',
          answer: 12000,
          hint: 'CIF reales − CIF aplicados.',
          why: '312,000 − 300,000 = **$12,000 subaplicados**: aplicaste menos de lo que gastaste y el costo quedó bajo.',
        },
      },
      { tip: 'Si la diferencia es pequeña, lo común es ajustarla contra el **costo de ventas**.' },
    ],
  ],
}
