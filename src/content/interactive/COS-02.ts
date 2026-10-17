import type { InteractiveLesson } from './types'

export const intCOS02: InteractiveLesson = {
  lessonId: 'COS-02',
  sections: [
    // ¿Directo respecto a qué?
    [
      { text: 'Don Chema tiene **Tortas Chema** 🥪, con dos sucursales. Quiere saber cuánto le cuesta **una torta**.' },
      { text: 'Lo que quieres costear se llama **objeto de costo**: una torta, un pedido, un cliente o una sucursal.' },
      { text: '🎯 **Directo:** se liga claro y barato al objeto (el pan de esa torta).\n🧩 **Indirecto:** se comparte entre varios y hay que repartirlo (la renta del local).' },
      {
        sort: {
          title: 'Objeto de costo: una torta',
          buckets: ['Directo', 'Indirecto'],
          items: [
            { text: 'El bolillo de esa torta', bucket: 0, why: 'Se liga claro a esa torta: directo.' },
            { text: 'El jamón de esa torta', bucket: 0, why: 'Se mide fácil por torta: directo.' },
            { text: 'La renta del local', bucket: 1, why: 'Se comparte entre todas las tortas: indirecto.' },
            { text: 'El gas de la plancha que hace todas las tortas', bucket: 1, why: 'Lo usan muchas tortas a la vez: indirecto.' },
            { text: 'El sueldo del gerente de la sucursal', bucket: 1, why: 'Atiende todo el local, no una torta: indirecto.' },
          ],
        },
      },
      {
        ask: 'Ahora el objeto de costo es **la sucursal Centro completa**. El sueldo de su gerente, ¿qué es?',
        options: [
          { text: 'Directo, porque es solo de esa sucursal', ok: true, reply: '¡Eso! El mismo costo cambia de etiqueta según el objeto.' },
          { text: 'Indirecto, como antes', reply: 'Era indirecto para **una torta**. Para la sucursal completa se liga claro: es **directo**.' },
          { text: 'No es costo', reply: 'Sí es costo. La pregunta es si es directo o indirecto respecto a la sucursal: es **directo**.' },
        ],
      },
      { tip: 'Antes de decir "directo", pregunta: **¿directo respecto a qué?**' },
    ],
    // ¿Se guarda o se resta?
    [
      { text: 'Chema pagó **$8,000** de luz de la cocina y **$3,000** de luz de la oficina. ¿Son lo mismo?' },
      {
        ask: '¿En qué se diferencian esas dos luces?',
        options: [
          { text: 'Una es para producir y otra para administrar', ok: true, reply: '¡Exacto! La de la cocina es para hacer tortas; la de la oficina, para administrar.' },
          { text: 'En nada, las dos son luz', reply: 'Las dos son luz, pero tienen distinta **función**: una es para producir y otra para administrar.' },
          { text: 'Solo en el monto', reply: 'El monto no importa aquí. Importa la **función**: producir o administrar.' },
        ],
      },
      { text: 'Por **función** hay tres grupos:\n🍳 **Producción:** todo lo de la cocina o fábrica.\n📣 **Venta:** publicidad, comisiones, envíos a clientes.\n🗂️ **Administración:** oficina, contabilidad, dirección.' },
      { text: '📦 **Costo del producto** (producción): se guarda en el inventario hasta que vendes.\n📅 **Costo del periodo** (venta y administración): se resta en el mes, vendas o no.' },
      {
        sort: {
          title: 'En Tortas Chema, ¿a qué grupo va?',
          buckets: ['Producción (producto)', 'Venta (periodo)', 'Administración (periodo)'],
          items: [
            { text: 'La luz de la cocina', bucket: 0, why: 'Es para producir: costo del producto.' },
            { text: 'El sueldo del tortero', bucket: 0, why: 'Hace las tortas: costo del producto.' },
            { text: 'La comisión del repartidor', bucket: 1, why: 'Se paga por vender: periodo.' },
            { text: 'El anuncio en redes', bucket: 1, why: 'Ayuda a vender: periodo.' },
            { text: 'El sueldo de la contadora de la oficina', bucket: 2, why: 'Es administración: se resta en el mes.' },
            { text: 'La luz de la oficina', bucket: 2, why: 'No es de la cocina: gasto de administración.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Producto o periodo?',
          seconds: 40,
          labels: ['Costo del producto', 'Costo del periodo'],
          items: [
            { text: 'El jamón de las tortas', ans: 0 },
            { text: 'Comisión del vendedor', ans: 1 },
            { text: 'Renta de la cocina', ans: 0 },
            { text: 'Sueldo del director', ans: 1 },
            { text: 'Gas de la plancha', ans: 0 },
            { text: 'Volantes de publicidad', ans: 1 },
          ],
        },
      },
      { tip: 'Producción → **inventario** hasta vender. Venta y administración → **se restan en el mes**.' },
    ],
    // ¿Qué cambia al producir más?
    [
      {
        ask: 'Si Chema vende **el doble** de tortas, ¿qué pasa con la **renta** del local?',
        options: [
          { text: 'Se queda igual', ok: true, reply: '¡Bien! La renta es **fija**: no cambia si vende 100 o 300 tortas.' },
          { text: 'Se duplica', reply: 'Lo que se duplica son los bolillos. La renta es **fija**: se queda igual.' },
          { text: 'Baja a la mitad', reply: 'La renta total no baja. Se queda igual: es un costo **fijo**.' },
        ],
      },
      { text: '📈 **Variable:** sube con el volumen (más tortas, más bolillos).\n🏠 **Fijo:** igual en total (la renta).\n📱 **Mixto:** una parte fija y otra variable (celular con renta más consumo extra).' },
      {
        sort: {
          title: '¿Fijo, variable o mixto?',
          buckets: ['Fijo', 'Variable', 'Mixto'],
          items: [
            { text: 'Renta del local', bucket: 0, why: 'Es la misma si vende 100 o 300 tortas.' },
            { text: 'Los bolillos de cada torta', bucket: 1, why: 'El doble de tortas, el doble de bolillos.' },
            { text: 'Sueldo del vendedor: base fija más comisión', bucket: 2, why: 'Tiene una parte fija y otra que sube con las ventas.' },
            { text: 'Camioneta rentada: cuota mensual más cargo por kilómetro', bucket: 2, why: 'Cuota fija más una parte que sube con los kilómetros.' },
            { text: 'Sueldo mensual del encargado', bucket: 0, why: 'No cambia si vende más o menos tortas.' },
          ],
        },
      },
      { text: 'Lo curioso: **por torta** es al revés. El fijo se reparte entre más tortas y **baja**. El variable se queda igual por torta. Pruébalo:' },
      {
        sim: {
          title: 'El costo de cada torta 🥪',
          inputs: [
            { key: 'f', label: 'Costo fijo del mes (renta)', min: 10000, max: 40000, step: 2000, value: 30000 },
            { key: 'v', label: 'Costo variable por torta', min: 15, max: 40, step: 5, value: 25 },
            { key: 'u', label: 'Tortas del mes', min: 500, max: 3000, step: 250, value: 1000 },
          ],
          outputs: [
            { label: 'Costo total', calc: (x) => x.f + x.v * x.u },
            { label: 'Costo por torta', calc: (x) => Math.round(((x.f + x.v * x.u) / x.u) * 100) / 100, main: true },
          ],
          goal: {
            text: 'Baja el **costo por torta a $40 o menos**.',
            check: (x) => (x.f + x.v * x.u) / x.u <= 40,
            done: 'Hacer más tortas reparte el fijo entre más piezas. El variable por torta no cambia.',
          },
        },
      },
      {
        calc: {
          question: 'Fijo **$24,000** al mes y **$30** variables por torta. Con **1,200** tortas, ¿cuál es el **costo por torta**?',
          answer: 50,
          hint: 'Costo total = fijo + variable × tortas. Luego divide entre las tortas.',
          why: '30 × 1,200 = 36,000. 24,000 + 36,000 = 60,000. 60,000 ÷ 1,200 = **$50**. Con 2,400 tortas sería 96,000 ÷ 2,400 = $40.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'El costo variable es igual por unidad', ok: true },
            { text: 'El costo fijo por unidad baja al producir más', ok: true },
            { text: 'Si renta otro local, el costo fijo da un salto', ok: true },
            { text: 'Si las tortas se duplican, el costo total se duplica', ok: false },
          ],
          why: 'Solo la parte variable se duplica; el fijo se queda igual dentro del **rango relevante**. Fuera de él (otro local), el fijo salta.',
        },
      },
      { tip: '**Costo total = Fijo + (Variable × Unidades).** Costo unitario = Costo total ÷ Unidades.' },
    ],
  ],
}
