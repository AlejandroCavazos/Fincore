import type { InteractiveLesson } from './types'

export const intL204: InteractiveLesson = {
  lessonId: 'L2-04',
  sections: [
    // ¿Cuánto costó tu mercancía?
    [
      { text: 'Don Toño tiene unos abarrotes 🛒. Compró refrescos: pagó el precio, el flete para traerlos y le hicieron un descuento. ¿Cuánto le costaron de verdad?' },
      {
        ask: 'El **flete** para traer los refrescos a la tienda, ¿es parte de su costo?',
        options: [
          { text: 'Sí: sin flete no estarían en la tienda', ok: true, reply: '¡Bien! Todo lo necesario para dejar la mercancía en su lugar es parte del costo.' },
          { text: 'No: es un gasto de venta', reply: 'El flete de **compra** sirve para traer la mercancía: sí es costo. Gasto de venta sería, por ejemplo, la publicidad.' },
          { text: 'Solo si es caro', reply: 'No depende del monto: el flete para traerla **siempre** es parte del costo.' },
        ],
      },
      { text: 'El costo incluye todo lo necesario para dejarla lista:\n➕ Precio, fletes, aranceles e impuestos **no recuperables**\n➖ Descuentos y rebajas\n🚫 No entran: IVA acreditable (se recupera), gastos de venta y mermas anormales' },
      {
        sort: {
          title: '¿Qué pasa con cada cosa?',
          buckets: ['Se suma al costo', 'Se resta del costo', 'No entra al costo'],
          items: [
            { text: 'El precio de compra', bucket: 0, why: 'Es la base del costo.' },
            { text: 'El flete para traerlos', bucket: 0, why: 'Es necesario para dejar la mercancía donde está.' },
            { text: 'Aranceles que no se recuperan', bucket: 0, why: 'Si no los recuperas, son parte del costo.' },
            { text: 'Un descuento del proveedor', bucket: 1, why: 'Los descuentos bajan el costo.' },
            { text: 'El IVA acreditable de la factura', bucket: 2, why: 'Es recuperable, así que no es costo.' },
            { text: 'Comisiones a vendedores por venderlos', bucket: 2, why: 'Es un gasto de venta, no costo del inventario.' },
            { text: 'Refrescos rotos por un descuido fuera de lo normal', bucket: 2, why: 'Las mermas anormales son gasto del periodo.' },
          ],
        },
      },
      {
        calc: {
          question: 'Precio **$50,000**, flete **$3,000**, arancel no recuperable **$2,000**, descuento **$5,000** e IVA acreditable **$8,000**. ¿Cuál es el **costo** del inventario?',
          answer: 50000,
          hint: 'Suma precio, flete y arancel; resta el descuento; el IVA acreditable no entra.',
          why: '50,000 + 3,000 + 2,000 − 5,000 = **$50,000**. El IVA acreditable queda fuera.',
        },
      },
      { text: 'Al cierre se revisa si todavía vale lo que costó. **Valor neto de realización:** lo que esperas sacar al venderla menos lo que cuesta venderla. Se usa **el menor** de los dos.' },
      {
        ask: 'Unas galletas costaron **$10,000**, pero ya están por caducar y solo sacarás **$8,000** netos. ¿A cuánto las valúas al cierre?',
        options: [
          { text: 'A $8,000', ok: true, reply: '¡Bien! Se usa el **menor** entre costo y valor neto de realización.' },
          { text: 'A $10,000, porque eso costaron', reply: 'Se usa el **menor** de los dos: $8,000.' },
          { text: 'A $9,000, el promedio', reply: 'No se promedia: se toma **el menor**, $8,000.' },
        ],
      },
      { tip: 'Costo = todo lo necesario para dejarla lista. Al cierre: **el menor entre costo y valor neto de realización** (NIF C-4).' },
    ],
    // ¿Qué mercancía sale primero?
    [
      { text: 'Don Toño compró leche a **$8** y luego a **$10**. Vendió una parte. ¿A qué precio la saca de sus números? 🥛' },
      { text: 'Hay reglas permitidas para decidirlo:\n🥛 **PEPS:** sale primero lo que llegó primero\n🍲 **Costo promedio:** todo en una «olla», precio promedio ponderado\n🏷️ **Costo identificado:** para artículos que no son iguales entre sí\n🚫 **UEPS** (sale primero lo último): **no está permitido** por la NIF C-4 ni por IAS 2' },
      {
        match: {
          title: 'Une cada regla con lo que hace',
          pairs: [
            ['PEPS', 'Salen primero las unidades más antiguas'],
            ['Costo promedio', 'Usa el promedio ponderado de todo lo disponible'],
            ['Costo identificado', 'Para artículos que no se pueden intercambiar'],
            ['UEPS', 'No permitido por la NIF C-4 ni por IAS 2'],
          ],
        },
      },
      {
        order: {
          title: 'Ordena los pasos de PEPS',
          steps: [
            'Ordena los lotes del más antiguo al más reciente',
            'Saca lo vendido empezando por el lote más antiguo',
            'Multiplica y suma: costo de ventas',
            'Lo que quedó × su costo: inventario final',
          ],
          done: 'Con PEPS, el inventario final queda a los **costos más recientes**.',
        },
      },
      {
        calc: {
          question: 'Inicial: **100** litros a **$8**. Compra: **50** a **$10**. Vende **120**. Con **PEPS**, ¿cuál es el **costo de ventas**?',
          answer: 1000,
          hint: 'Primero salen los 100 de $8; los 20 que faltan, del lote de $10.',
          why: '100 × 8 = 800 y 20 × 10 = 200 → **$1,000**.',
        },
      },
      {
        calc: {
          question: 'Mismo ejemplo: el costo disponible es 800 + 500 = **$1,300**. ¿Cuál es el **inventario final** con PEPS?',
          answer: 300,
          hint: 'Costo disponible − costo de ventas. O bien: los 30 litros que quedan × $10.',
          why: '1,300 − 1,000 = **$300** (30 × $10). Costo de ventas + inventario final = costo disponible.',
        },
      },
      {
        ask: 'Don Toño tiene **50** bolsas de café a **$10** y **150** a **$14**. ¿Cuál es el **costo promedio** por bolsa?',
        options: [
          { text: '$12', reply: 'Eso es (10 + 14) ÷ 2: promediaste solo precios. Hay que **ponderar** por cuántas bolsas hay.' },
          { text: '$13', ok: true, reply: '¡Exacto! (500 + 2,100) ÷ 200 bolsas = **$13**.' },
          { text: '$14', reply: 'Ese es solo el precio del último lote. Pondera: (500 + 2,100) ÷ 200 = **$13**.' },
        ],
      },
      { tip: 'Con cualquier regla: **costo de ventas + inventario final = costo disponible**.' },
    ],
    // Clientes que no pagarán
    [
      { text: 'Don Toño fía a sus vecinos 📒. Sabe por experiencia que algunos **nunca pagarán**, aunque no sabe cuáles. Para eso aparta una **estimación para cuentas incobrables**.' },
      {
        ask: 'Es como una alcancía 🐷: al cierre debe tener **$3,000** y ya tiene **$1,000**. ¿Cuánto le pones?',
        options: [
          { text: '$2,000', ok: true, reply: '¡Eso! Solo **lo que falta** para llegar a lo que debe tener.' },
          { text: '$3,000', reply: 'Quedaría en $4,000, más de lo necesario. Solo pones **lo que falta**: $2,000.' },
          { text: '$4,000', reply: 'Solo pones **lo que falta**: 3,000 − 1,000 = $2,000.' },
        ],
      },
      { text: 'Al cierre:\n🎯 **Requerido** = saldo de Clientes × % que no esperas cobrar\n➕ **Ajuste (gasto)** = requerido − lo que ya tiene la estimación' },
      {
        calc: {
          question: 'Clientes **$80,000**; se estima incobrable el **5 %**; la estimación ya tiene **$1,500**. ¿Cuánto **gasto** por incobrables se registra?',
          answer: 2500,
          hint: 'Requerido = 80,000 × 5 %; luego resta lo que ya tiene.',
          why: 'Requerido = 4,000. Ajuste = 4,000 − 1,500 = **$2,500**. Error común: registrar los $4,000 completos.',
        },
      },
      {
        entry: {
          title: 'Registra el ajuste al cierre',
          story: 'El ajuste de Don Toño es de **$2,500**.',
          lines: [
            { account: 'Gasto por cuentas incobrables', side: 'D', amount: 2500, why: 'Es la pérdida esperada del periodo: gasto, se carga.' },
            { account: 'Estimación para cuentas incobrables', side: 'C', amount: 2500, why: 'Resta a Clientes y crece con abonos. Aún no se toca Clientes: no se sabe quién no pagará.' },
          ],
        },
      },
      { text: 'Cuando un cliente **ya seguro** no pagará, se **cancela contra la estimación**: cargo a Estimación, abono a Clientes. No hay gasto nuevo: ya se reconoció al crear la estimación.' },
      {
        spot: {
          title: 'Encuentra el error',
          story: 'Un vecino que debía **$1,500** se mudó sin dejar rastro y ya es incobrable. El auxiliar lo cancela así:',
          lines: [
            { account: 'Gasto por cuentas incobrables', side: 'D', amount: 1500 },
            { account: 'Clientes', side: 'C', amount: 1500 },
          ],
          wrong: 0,
          why: 'El gasto ya se reconoció al crear la estimación. Se **carga a la Estimación**; si cargas el gasto otra vez, duplicas la pérdida.',
        },
      },
      { tip: 'Cierre: **ajuste = requerido − existente**. Cancelar un cliente: cargo a **Estimación**, abono a **Clientes**.' },
    ],
  ],
}
