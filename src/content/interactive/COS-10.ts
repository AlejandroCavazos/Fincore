import type { InteractiveLesson } from './types'

export const intCOS10: InteractiveLesson = {
  lessonId: 'COS-10',
  sections: [
    // El presupuesto maestro y su cadena
    [
      { text: 'Un **presupuesto** es un plan en dinero y cantidades para el futuro, por ejemplo el próximo año. Sirve para que todas las áreas jalen parejo y luego comparar lo real contra lo planeado.' },
      { text: 'Todo el plan junto se llama **presupuesto maestro**, y es una cadena: cada paso usa el resultado del anterior.' },
      {
        order: {
          title: 'Ordena la cadena del presupuesto en una fábrica de sillas 🪑',
          steps: [
            'Ventas: cuántas sillas y cuántos pesos',
            'Producción: cuántas sillas fabricar',
            'Materiales, mano de obra directa y gastos indirectos',
            'Costo de ventas y gastos de operación',
            'Estado de resultados presupuestado',
          ],
          done: 'Todo arranca con **ventas**. Si el pronóstico de ventas está inflado, contamina toda la cadena.',
        },
      },
      {
        sort: {
          title: '¿Es presupuesto operativo o financiero?',
          buckets: ['Operativo', 'Financiero'],
          items: [
            { text: 'Presupuesto de ventas', bucket: 0, why: 'Es el primero de los operativos.' },
            { text: 'Flujo de efectivo', bucket: 1, why: 'Dice cuánto dinero entra y sale: es financiero.' },
            { text: 'Mano de obra directa', bucket: 0, why: 'Es parte de la operación de fabricar.' },
            { text: 'Estado de situación presupuestado', bucket: 1, why: 'Es uno de los financieros.' },
            { text: 'Gastos de operación', bucket: 0, why: 'Es operativo, junto con el costo de ventas.' },
            { text: 'Presupuesto de inversiones', bucket: 1, why: 'Las inversiones van en la parte financiera.' },
          ],
        },
      },
      {
        calc: {
          question: 'Una cafetería ☕ espera vender **12,000** cafés el próximo año a **$45** cada uno. ¿Cuánto es su **presupuesto de ventas** en pesos?',
          answer: 540000,
          hint: 'unidades × precio.',
          why: '12,000 × $45 = **$540,000**. De aquí parte todo lo demás.',
        },
      },
      { tip: 'Presupuesto maestro = **operativos** (ventas, producción, costos, gastos, resultados) + **financieros** (efectivo, inversiones, estado de situación).' },
    ],
    // Presupuesto de producción
    [
      { text: 'La fábrica no hace justo lo que vende: quiere dejar un **inventario final** de reserva y puede usar el **inventario inicial** que ya tiene en bodega.' },
      { tip: '**Producción = ventas + inventario final deseado − inventario inicial.**' },
      {
        calc: {
          question: 'Una fábrica de piñatas 🪅 espera vender **4,000**. Tiene **500** en bodega y quiere terminar con **300**. ¿Cuántas debe **producir**?',
          answer: 3800, unit: 'piñatas',
          hint: 'ventas + inventario final − inventario inicial.',
          why: '4,000 + 300 − 500 = **3,800 piñatas**. Como quiere terminar con menos inventario del que tiene, fabrica menos de lo que vende.',
        },
      },
      {
        sim: {
          title: 'Plan de producción de sillas',
          inputs: [
            { key: 'v', label: 'Ventas esperadas (sillas)', min: 3000, max: 6000, step: 500, value: 5000 },
            { key: 'f', label: 'Inventario final deseado', min: 0, max: 1500, step: 100, value: 800 },
            { key: 'i', label: 'Inventario inicial en bodega', min: 0, max: 1500, step: 100, value: 600 },
          ],
          outputs: [
            { label: 'Necesidades totales (ventas + inv. final)', calc: (x) => x.v + x.f },
            { label: 'Sillas a producir', calc: (x) => x.v + x.f - x.i, main: true },
          ],
          goal: {
            text: 'Haz que la fábrica **produzca menos sillas de las que vende**.',
            check: (x) => x.v + x.f - x.i < x.v,
            done: 'Si quieres terminar con **menos** inventario del que tienes hoy, fabricas menos de lo que vendes. Si quieres más, fabricas de más.',
          },
        },
      },
      {
        ask: 'La fábrica tiene **200** sillas en bodega y quiere terminar el año con **900**. ¿Qué pasa con la producción?',
        options: [
          { text: 'Produce más de lo que vende', ok: true, reply: '¡Exacto! Quiere subir su inventario de 200 a 900, así que debe fabricar 700 sillas extra además de las que vende.' },
          { text: 'Produce menos de lo que vende', reply: 'Al revés: quiere terminar con **más** inventario del que tiene, así que debe fabricar de más.' },
          { text: 'Produce exactamente lo que vende', reply: 'Eso pasa solo si el inventario inicial y el final son iguales. Aquí no lo son.' },
        ],
      },
    ],
    // Materiales, mano de obra y gastos
    [
      { text: 'Con las unidades a producir ya puedes calcular lo demás. La **mano de obra directa** (MOD) son los sueldos de quienes fabrican.' },
      {
        calc: {
          question: 'Un taller 🔧 va a producir **3,000** mesas. Cada una lleva **2 horas** de trabajo y la hora se paga a **$90**. ¿Cuánto es el presupuesto de **mano de obra directa**?',
          answer: 540000,
          hint: 'unidades × horas por unidad × tarifa por hora.',
          why: '3,000 × 2 × $90 = **$540,000**.',
        },
      },
      { text: 'Para los **materiales** primero sacas cuánto necesita la producción y luego ajustas por los inventarios de material para saber cuánto **comprar**.' },
      {
        calc: {
          question: 'Las 3,000 mesas necesitan **4 tablas** cada una. Quieres terminar con **1,000** tablas en bodega y hoy tienes **1,500**. ¿Cuántas tablas debes **comprar**?',
          answer: 11500, unit: 'tablas',
          hint: 'primero 3,000 × 4; luego + inventario final − inventario inicial de tablas.',
          why: 'Material requerido: 3,000 × 4 = 12,000. Compras: 12,000 + 1,000 − 1,500 = **11,500 tablas**.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Las compras de material se ajustan por el inventario inicial y final de material', ok: true },
            { text: 'Los gastos indirectos suelen presupuestarse con una parte fija y una variable', ok: true },
            { text: 'Todo desemboca en el estado de resultados presupuestado', ok: true },
            { text: 'El presupuesto de mano de obra se hace antes que el de ventas', ok: false },
          ],
          why: 'Primero ventas, luego producción, luego materiales, MOD y gastos (con parte fija y variable). Todo termina en el estado de resultados presupuestado.',
        },
      },
      { tip: 'MOD = unidades a producir × horas por unidad × tarifa por hora.' },
    ],
  ],
}
