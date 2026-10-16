import type { InteractiveLesson } from './types'

export const intCOS02: InteractiveLesson = {
  lessonId: 'COS-02',
  sections: [
    // Objeto de costo: directos e indirectos
    [
      { text: 'Un **objeto de costo** es aquello cuyo costo quieres conocer: un producto, un pedido, un cliente o una sucursal. Antes de decir "directo" pregunta: **¿directo respecto a qué?**' },
      {
        sort: {
          title: 'Objeto de costo: un kilo de tortillas 🌮',
          buckets: ['Directo', 'Indirecto'],
          items: [
            { text: 'La masa de ese kilo', bucket: 0, why: 'Se liga de forma clara al kilo: directo.' },
            { text: 'El papel en que se envuelve ese kilo', bucket: 0, why: 'Se puede medir por kilo de forma fácil y barata: directo.' },
            { text: 'La renta del local', bucket: 1, why: 'Se comparte entre todos los kilos: hay que repartirla.' },
            { text: 'El sueldo del encargado de la tortillería', bucket: 1, why: 'Atiende todo el negocio, no un kilo: indirecto.' },
            { text: 'La luz de todo el local', bucket: 1, why: 'Se comparte entre toda la producción: indirecto.' },
          ],
        },
      },
      {
        ask: 'Tortillerías Lupe tiene 3 sucursales. El sueldo del **gerente de la sucursal Centro**, ¿qué es si el objeto de costo es **la sucursal Centro completa**?',
        options: [
          { text: 'Indirecto, porque no se liga a ningún kilo', reply: 'Eso sería si el objeto fuera el kilo. Aquí el objeto es la sucursal.' },
          { text: 'Directo, porque es solo de esa sucursal', ok: true, reply: '¡Eso! El mismo costo cambia de etiqueta según el objeto.' },
          { text: 'No es costo', reply: 'Sí es costo; la pregunta es si es directo o indirecto respecto a la sucursal.' },
        ],
      },
      { tip: 'No hay costos "directos" a secas: siempre son directos **respecto a un objeto**.' },
    ],
    // Por función: costos del producto y del periodo
    [
      { text: 'Por **función**: producción, venta y administración. Lo de **producción** se queda en el inventario (**costo del producto**). Lo de venta y administración se resta en el mes (**costo del periodo**).' },
      {
        sort: {
          title: 'Una carpintería: ¿cada costo a dónde va?',
          buckets: ['Producción (costo del producto)', 'Venta (periodo)', 'Administración (periodo)'],
          items: [
            { text: 'La luz de las máquinas del taller', bucket: 0, why: 'Es de la fábrica: CIF, va al inventario.' },
            { text: 'La madera de los roperos', bucket: 0, why: 'Material directo: costo del producto.' },
            { text: 'El flete para llevar un ropero al cliente', bucket: 1, why: 'Los fletes a clientes son de venta.' },
            { text: 'La publicidad en el periódico', bucket: 1, why: 'Ayuda a vender: gasto de venta.' },
            { text: 'El despacho contable que lleva la contabilidad', bucket: 2, why: 'La contabilidad es administración.' },
            { text: 'La luz de las oficinas', bucket: 2, why: 'Es de la oficina, no del taller: gasto de administración.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Producto o periodo?',
          seconds: 40,
          labels: ['Costo del producto', 'Costo del periodo'],
          items: [
            { text: 'Sueldo del carpintero', ans: 0 },
            { text: 'Comisión del vendedor', ans: 1 },
            { text: 'Renta de la nave de producción', ans: 0 },
            { text: 'Sueldo del director general', ans: 1 },
            { text: 'Pegamento para los muebles', ans: 0 },
            { text: 'Anuncio en redes', ans: 1 },
            { text: 'Sueldo del supervisor del taller', ans: 0 },
          ],
        },
      },
      { tip: 'Producción → **inventario** hasta que vendes. Venta y administración → **se restan en el mes**, vendas o no.' },
    ],
    // Comportamiento: fijos, variables y mixtos
    [
      { text: 'Ahora mira qué pasa al **producir más**. El **variable** sube con el volumen (más tortas, más bolillos). El **fijo** queda igual en total (la renta).' },
      {
        sort: {
          title: '¿Fijo, variable o mixto?',
          buckets: ['Fijo', 'Variable', 'Mixto'],
          items: [
            { text: 'Renta del local de tortas', bucket: 0, why: 'Es la misma si vendes 100 o 300 tortas.' },
            { text: 'Los bolillos de cada torta', bucket: 1, why: 'El doble de tortas, el doble de bolillos.' },
            { text: 'El recibo del celular: renta mensual más consumo extra', bucket: 2, why: 'Tiene una parte fija y otra variable.' },
            { text: 'El jamón de cada torta', bucket: 1, why: 'Sube en proporción a las tortas.' },
            { text: 'El sueldo mensual del encargado', bucket: 0, why: 'No cambia si vendes más o menos tortas.' },
          ],
        },
      },
      { text: 'Lo curioso: **por unidad** es al revés. El fijo se reparte entre más piezas y **baja**; el variable se queda igual por pieza. Juega con los números:' },
      {
        sim: {
          title: 'El taller de tazas ☕',
          inputs: [
            { key: 'f', label: 'Costo fijo del mes (renta)', min: 10000, max: 40000, step: 2000, value: 30000 },
            { key: 'v', label: 'Costo variable por taza', min: 20, max: 60, step: 5, value: 50 },
            { key: 'u', label: 'Tazas producidas', min: 500, max: 3000, step: 250, value: 1000 },
          ],
          outputs: [
            { label: 'Costo total', calc: (x) => x.f + x.v * x.u },
            { label: 'Costo unitario', calc: (x) => Math.round(((x.f + x.v * x.u) / x.u) * 100) / 100, main: true },
          ],
          goal: {
            text: 'Baja el **costo unitario a $65 o menos**.',
            check: (x) => (x.f + x.v * x.u) / x.u <= 65,
            done: 'Producir más reparte el fijo entre más tazas. El variable por taza no cambia con el volumen.',
          },
        },
      },
      {
        calc: {
          question: 'Fijo **$20,000** y variable **$40** por pieza. Con **2,000** piezas, ¿cuál es el **costo unitario**?',
          answer: 50,
          hint: 'costo total = fijo + variable × unidades; luego divide entre unidades.',
          why: '40 × 2,000 = 80,000; 20,000 + 80,000 = 100,000; 100,000 ÷ 2,000 = **$50** ($10 de fijo + $40 de variable).',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'El costo variable es constante por unidad', ok: true },
            { text: 'El costo fijo por unidad baja cuando produces más', ok: true },
            { text: 'Si rentas otro local, el costo fijo da un salto', ok: true },
            { text: 'Si el volumen se duplica, el costo total también se duplica', ok: false },
          ],
          why: 'Solo la parte variable se duplica; el fijo se queda igual dentro del **rango relevante**. Fuera de él (otro local), el fijo salta.',
        },
      },
      { tip: '**Costo total = Fijo + (Variable por unidad × Unidades).** Costo unitario = Costo total ÷ Unidades.' },
    ],
  ],
}
