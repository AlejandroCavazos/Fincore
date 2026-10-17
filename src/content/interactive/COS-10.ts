import type { InteractiveLesson } from './types'

export const intCOS10: InteractiveLesson = {
  lessonId: 'COS-10',
  sections: [
    // ¿Por dónde empieza el plan?
    [
      { text: 'Don Ramón fabrica sillas 🪑. El año pasado hizo de más y se le llenó la bodega. Este año quiere hacer un **presupuesto**: un plan en dinero y cantidades para el futuro.' },
      {
        ask: '¿Con qué número debe empezar su plan?',
        options: [
          { text: 'Cuántas sillas espera vender', ok: true, reply: '¡Eso! Casi todo depende de las ventas: cuánto fabricar, cuánto material, cuánta gente.' },
          { text: 'Cuántas sillas puede fabricar', reply: 'Así le volvería a pasar lo del año pasado. Primero va **cuánto espera vender**; de ahí sale cuánto fabricar.' },
          { text: 'Cuánto dinero tiene en el banco', reply: 'El efectivo se planea después. Todo arranca con **cuánto espera vender**.' },
        ],
      },
      { text: 'El plan completo se llama **presupuesto maestro**. Es una cadena: cada paso usa el resultado del anterior.' },
      {
        order: {
          title: 'Ordena la cadena del presupuesto de Don Ramón',
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
      { text: 'Esa cadena forma los presupuestos **operativos**. Además hay **financieros**: flujo de efectivo, inversiones y estado de situación presupuestado.' },
      {
        sort: {
          title: '¿Es presupuesto operativo o financiero?',
          buckets: ['Operativo', 'Financiero'],
          items: [
            { text: 'Presupuesto de ventas', bucket: 0, why: 'Es el primero de los operativos.' },
            { text: 'Flujo de efectivo', bucket: 1, why: 'Dice cuánto dinero entra y sale: es financiero.' },
            { text: 'Presupuesto de producción', bucket: 0, why: 'Es parte de la operación de fabricar.' },
            { text: 'Estado de situación presupuestado', bucket: 1, why: 'Es uno de los financieros.' },
            { text: 'Gastos de venta y administración', bucket: 0, why: 'Son gastos de operación: operativo.' },
            { text: 'Inversiones en maquinaria', bucket: 1, why: 'Las inversiones van en la parte financiera.' },
          ],
        },
      },
      {
        calc: {
          question: 'Don Ramón espera vender **6,000** sillas a **$700** cada una. ¿Cuánto es su **presupuesto de ventas** en pesos?',
          answer: 4200000,
          hint: 'unidades × precio.',
          why: '6,000 × $700 = **$4,200,000**. De aquí parte todo lo demás.',
        },
      },
      { tip: 'Presupuesto maestro = **operativos** (empiezan con ventas) + **financieros** (efectivo, inversiones, estado de situación).' },
    ],
    // ¿Cuántas piezas fabricar?
    [
      { text: 'Don Ramón no fabrica justo lo que vende 📦. Quiere dejar sillas de reserva al final (**inventario final**) y puede usar las que ya tiene en bodega (**inventario inicial**).' },
      { text: '🧮 **Producción = ventas + inventario final deseado − inventario inicial**' },
      {
        calc: {
          question: 'Espera vender **6,000** sillas, tiene **500** en bodega y quiere terminar con **800**. ¿Cuántas debe **producir**?',
          answer: 6300, unit: 'sillas',
          hint: '6,000 + 800 − 500.',
          why: '6,000 + 800 − 500 = **6,300 sillas**. Quiere terminar con más de las que tiene, así que fabrica más de lo que vende.',
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
            text: 'Haz que Don Ramón **produzca menos sillas de las que vende**.',
            check: (x) => x.v + x.f - x.i < x.v,
            done: 'Si quieres terminar con **menos** inventario del que tienes hoy, fabricas menos de lo que vendes. Si quieres más, fabricas de más.',
          },
        },
      },
      {
        ask: 'Tiene **200** sillas en bodega y quiere terminar el año con **900**. ¿Qué pasa con la producción?',
        options: [
          { text: 'Produce más de lo que vende', ok: true, reply: '¡Exacto! Quiere subir su inventario de 200 a 900, así que fabrica 700 sillas extra además de las que vende.' },
          { text: 'Produce menos de lo que vende', reply: 'Al revés: quiere terminar con **más** inventario del que tiene, así que fabrica de más.' },
          { text: 'Produce exactamente lo que vende', reply: 'Eso pasa solo si el inventario inicial y el final son iguales. Aquí no lo son.' },
        ],
      },
      { tip: 'Inventario final mayor que el inicial → produces **más** de lo que vendes. Menor → produces **menos**.' },
    ],
    // ¿Cuánto material y trabajo necesitas?
    [
      { text: 'Este trimestre Don Ramón va a producir **3,000** sillas. Con ese número saca lo demás 👇\n👷 **Mano de obra directa** = sillas × horas por silla × pago por hora\n🪵 **Materiales** = lo que pide la producción + inventario final − inventario inicial' },
      {
        calc: {
          question: 'Cada silla lleva **2 horas** de trabajo y la hora se paga a **$90**. ¿Cuánto es el presupuesto de **mano de obra directa**?',
          answer: 540000,
          hint: '3,000 × 2 × 90.',
          why: '3,000 × 2 × $90 = **$540,000**.',
        },
      },
      {
        calc: {
          question: 'Cada silla lleva **4 tablas**. Tiene **1,500** tablas en bodega y quiere terminar con **1,000**. ¿Cuántas tablas debe **comprar**?',
          answer: 11500, unit: 'tablas',
          hint: 'Primero 3,000 × 4; luego + inventario final − inventario inicial.',
          why: 'Necesita: 3,000 × 4 = 12,000. Compras: 12,000 + 1,000 − 1,500 = **11,500 tablas**.',
        },
      },
      {
        calc: {
          question: 'Cada tabla cuesta **$40**. ¿Cuánto le costarán las **compras** de tablas?',
          answer: 460000,
          hint: 'tablas a comprar × precio por tabla.',
          why: '11,500 × $40 = **$460,000**.',
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
          why: 'Primero ventas, luego producción, luego materiales, mano de obra y gastos (con parte fija y variable). Todo termina en el estado de resultados presupuestado.',
        },
      },
      { tip: 'Para comprar material: primero cuánto **necesita** la producción, luego ajustas por inventarios, y al final multiplicas por el precio.' },
    ],
  ],
}
