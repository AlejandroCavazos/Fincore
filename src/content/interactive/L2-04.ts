import type { InteractiveLesson } from './types'

export const intL204: InteractiveLesson = {
  lessonId: 'L2-04',
  sections: [
    // Costo de los inventarios
    [
      { text: 'El **costo** de tu mercancía no es solo el precio: incluye todo lo necesario para dejarla lista en tu bodega o anaquel 📦.' },
      {
        sort: {
          title: 'La tiendita compra refrescos. ¿Qué pasa con cada cosa?',
          buckets: ['Se suma al costo', 'Se resta del costo', 'No entra al costo'],
          items: [
            { text: 'El precio de compra de los refrescos', bucket: 0, why: 'Es la base del costo.' },
            { text: 'El flete para traerlos a la tiendita', bucket: 0, why: 'Es necesario para dejar la mercancía donde está.' },
            { text: 'Aranceles e impuestos que no se recuperan', bucket: 0, why: 'Si no los recuperas, son parte del costo.' },
            { text: 'Un descuento que te dio el proveedor', bucket: 1, why: 'Los descuentos y rebajas bajan el costo.' },
            { text: 'El IVA acreditable de la factura', bucket: 2, why: 'Es recuperable, así que no es costo.' },
            { text: 'Publicidad para venderlos (gasto de venta)', bucket: 2, why: 'Los gastos de venta no son costo del inventario.' },
            { text: 'Refrescos que se rompieron por un descuido fuera de lo normal', bucket: 2, why: 'Las mermas anormales no se incluyen en el costo.' },
          ],
        },
      },
      {
        calc: {
          question: 'El taller compra refacciones: precio **$50,000**, flete **$3,000**, arancel no recuperable **$2,000**, descuento **$5,000** e IVA acreditable **$8,000**. ¿Cuál es el **costo** del inventario?',
          answer: 50000,
          hint: 'suma precio, flete y arancel; resta el descuento; el IVA acreditable no entra.',
          why: '50,000 + 3,000 + 2,000 − 5,000 = **$50,000**. El IVA acreditable se recupera, por eso queda fuera.',
        },
      },
      { text: 'Al cierre revisas: ¿todavía vale lo que costó? El **valor neto de realización** es, en palabras simples, lo que esperas sacar al venderla menos lo que te cuesta venderla.' },
      {
        ask: 'Unos pasteles costaron **$10,000**, pero ya se están pasando y solo podrás sacar **$8,000** netos al venderlos. ¿A cuánto los valúas al cierre?',
        options: [
          { text: 'A $10,000, porque eso costaron', reply: 'Se usa el **menor** entre costo y valor neto de realización.' },
          { text: 'A $8,000', ok: true, reply: '¡Bien! Se valúan al **menor** entre su costo y su valor neto de realización.' },
          { text: 'A $9,000, el promedio de los dos', reply: 'No se promedia: se toma el menor de los dos.' },
        ],
      },
      { tip: 'Inventarios al cierre: **el menor entre costo y valor neto de realización** (NIF C-4 / IAS 2).' },
    ],
    // Fórmulas de asignación del costo
    [
      { text: 'Compraste la misma mercancía a precios distintos y vendiste una parte. ¿A qué precio la sacas? **PEPS** es como el anaquel de leche 🥛: sale primero lo que llegó primero.' },
      {
        match: {
          title: 'Une cada fórmula con lo que hace',
          pairs: [
            ['PEPS', 'Salen primero las unidades más antiguas'],
            ['Costo promedio', 'Mezcla todo en una «olla» y usa el promedio ponderado'],
            ['Costo identificado', 'Para artículos que no se pueden intercambiar'],
            ['UEPS', 'No está permitido por la NIF C-4 ni por IAS 2'],
          ],
        },
      },
      {
        order: {
          title: 'Ordena los pasos de PEPS',
          steps: [
            'Ordena los lotes del más antiguo al más reciente',
            'Saca las unidades vendidas empezando por el lote más antiguo',
            'Multiplica lo que salió de cada lote por su costo y suma: costo de ventas',
            'Lo que quedó (lo más reciente) × su costo = inventario final',
            'Comprueba: costo de ventas + inventario final = costo disponible',
          ],
          done: 'Así el inventario final queda a los **costos más recientes**.',
        },
      },
      {
        calc: {
          question: 'Inventario inicial: **100** piezas a **$8**. Compra: **50** a **$10**. Vendes **120**. Con **PEPS**, ¿cuál es el costo de ventas?',
          answer: 1000,
          hint: 'primero salen las 100 de $8; las 20 que faltan, del lote de $10.',
          why: '100 × 8 = $800 y 20 × 10 = $200 → **$1,000**. Quedan 30 × 10 = $300 de inventario final.',
        },
      },
      {
        ask: 'La cafetería tiene **50** bolsas de café a **$10** y **150** a **$14**. ¿Cuál es el **costo promedio** por bolsa?',
        options: [
          { text: '$12', reply: 'Eso es (10 + 14) ÷ 2: promediaste solo precios. Hay que **ponderar** por cuántas bolsas hay de cada lote.' },
          { text: '$13', ok: true, reply: '¡Exacto! (500 + 2,100) ÷ 200 bolsas = **$13**.' },
          { text: '$14', reply: 'Ese es solo el precio del último lote.' },
        ],
      },
      { text: 'Ahora compara los dos métodos con precios que suben. Inicial: 40 unidades a $20; compra: 60 unidades a un precio que tú eliges.' },
      {
        sim: {
          title: 'PEPS contra costo promedio',
          inputs: [
            { key: 'p', label: 'Precio de la compra (60 unidades)', min: 20, max: 40, step: 1, value: 25 },
            { key: 's', label: 'Unidades vendidas', min: 10, max: 70, step: 5, value: 70 },
          ],
          outputs: [
            { label: 'Costo de ventas PEPS', calc: (x) => Math.min(x.s, 40) * 20 + Math.max(0, x.s - 40) * x.p },
            { label: 'Costo de ventas promedio', calc: (x) => (x.s * (800 + 60 * x.p)) / 100 },
            { label: 'Diferencia (promedio − PEPS)', calc: (x) => (x.s * (800 + 60 * x.p)) / 100 - (Math.min(x.s, 40) * 20 + Math.max(0, x.s - 40) * x.p), main: true },
          ],
          goal: {
            text: 'Haz que el promedio dé **$200 o más** de costo de ventas que PEPS.',
            check: (x) => (x.s * (800 + 60 * x.p)) / 100 - (Math.min(x.s, 40) * 20 + Math.max(0, x.s - 40) * x.p) >= 200,
            done: 'Con precios al alza, el promedio da **más costo de ventas** que PEPS (y menos utilidad bruta). PEPS deja el inventario final a los costos más recientes.',
          },
        },
      },
      { tip: 'Sin importar el método: **costo de ventas + inventario final = costo total disponible**.' },
    ],
    // Cuentas por cobrar e incobrables
    [
      { text: 'Si vendes fiado, sabes que algunos clientes nunca pagarán, aunque no sepas cuáles. La **estimación para cuentas incobrables** es un «apartado» para esa pérdida esperada.' },
      { text: 'Es como una alcancía 🐷: al cierre solo pones **lo que falta** para llegar a la cantidad que debe tener.' },
      {
        sim: {
          title: 'La alcancía de incobrables del despacho',
          inputs: [
            { key: 'cl', label: 'Saldo de Clientes', min: 50000, max: 200000, step: 10000, value: 100000 },
            { key: 'pc', label: '% que esperas no cobrar', min: 1, max: 10, step: 1, value: 2 },
            { key: 'e', label: 'Lo que la estimación ya tiene', min: 0, max: 5000, step: 500, value: 1000 },
          ],
          outputs: [
            { label: 'Saldo requerido', calc: (x) => (x.cl * x.pc) / 100 },
            { label: 'Ajuste (gasto del periodo)', calc: (x) => (x.cl * x.pc) / 100 - x.e, main: true },
            { label: 'Clientes neto', calc: (x) => x.cl - (x.cl * x.pc) / 100, unit: 'clientes' },
          ],
          goal: {
            text: 'Mueve los datos hasta que el ajuste sea de **$10,000 o más**.',
            check: (x) => (x.cl * x.pc) / 100 - x.e >= 10000,
            done: 'Ajuste = saldo requerido − lo que ya tenía la estimación. Nunca registres el requerido completo como gasto.',
          },
        },
      },
      {
        entry: {
          title: 'Registra el ajuste al cierre',
          story: 'Clientes **$120,000**; se estima incobrable el **3 %**; la estimación ya tiene **$1,000**. Requerido: $3,600. Ajuste: **$2,600**.',
          lines: [
            { account: 'Gasto por cuentas incobrables', side: 'D', amount: 2600, why: 'Solo lo que faltaba: 3,600 − 1,000. Se carga el gasto.' },
            { account: 'Estimación para cuentas incobrables', side: 'C', amount: 2600, why: 'La estimación crece con abonos y queda en $3,600.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el error',
          story: 'Un cliente que debía **$1,500** cerró su negocio y ya es definitivamente incobrable. El auxiliar lo cancela así:',
          lines: [
            { account: 'Gasto por cuentas incobrables', side: 'D', amount: 1500 },
            { account: 'Clientes', side: 'C', amount: 1500 },
          ],
          wrong: 0,
          why: 'El gasto ya se reconoció al crear la estimación. La cancelación se **carga a la Estimación**, no al gasto, y no afecta resultados.',
        },
      },
      { tip: 'Al cierre: **ajuste = requerido − existente**. Al cancelar un cliente: cargo a Estimación, abono a Clientes.' },
    ],
  ],
}
