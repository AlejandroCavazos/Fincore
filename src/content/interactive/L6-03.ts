import type { InteractiveLesson } from './types'

export const intL603: InteractiveLesson = {
  lessonId: 'L6-03',
  sections: [
    // ¿Valor del negocio o del dueño?
    [
      { text: 'Lucía es analista junior 👩‍💻. Su jefa le pide valuar **Lavanderías Burbuja**, una empresa de ejemplo que cotiza en bolsa. Empieza con una casa.' },
      {
        ask: 'Una casa vale $2,000,000 y tiene una hipoteca pendiente de $500,000. ¿Cuánto es realmente **tuyo**?',
        options: [
          { text: '$1,500,000', ok: true, reply: '¡Eso! La casa completa vale $2,000,000, pero $500,000 son del banco. Lo tuyo es **$1,500,000**.' },
          { text: '$2,000,000', reply: 'Esa es la casa completa. Pero debes $500,000 al banco: lo tuyo es **$1,500,000**.' },
          { text: '$2,500,000', reply: 'La deuda no se suma a lo tuyo, se resta: 2,000,000 − 500,000 = **$1,500,000**.' },
        ],
      },
      { text: '🏠 **Enterprise Value (EV):** el negocio completo, para todos los que pusieron dinero (dueños y bancos). Como la casa entera.\n🔑 **Equity Value:** lo que es de los accionistas. En bolsa = acciones × precio (la **capitalización**).' },
      { text: 'Para pasar de uno a otro:\n**EV** = equity value ➕ deuda ➖ efectivo ➕ participación no controladora ➕ acciones preferentes.\nLa **participación no controladora** es la parte de una filial que es de otros socios; las **preferentes** son acciones con derechos especiales de cobro.' },
      {
        sort: {
          title: 'En el puente al EV, ¿qué pasa con cada cosa?',
          buckets: ['Se suma', 'Se resta', 'No entra'],
          items: [
            { text: 'Deuda con intereses (préstamos, bonos)', bucket: 0, why: 'Es dinero de los bancos: también es parte del negocio completo.' },
            { text: 'Efectivo y equivalentes', bucket: 1, why: 'No es parte de la operación: quien compra lo «recupera».' },
            { text: 'Participación no controladora', bucket: 0, why: 'Son otros socios con derechos sobre las filiales.' },
            { text: 'Acciones preferentes', bucket: 0, why: 'Son otros «dueños» además de los accionistas comunes.' },
            { text: 'Proveedores', bucket: 2, why: 'Es pasivo de la operación: ya está en el capital de trabajo, no en el puente.' },
          ],
        },
      },
      {
        calc: {
          question: 'Burbuja tiene 1,000,000 de acciones a $20, deuda de $8,000,000, efectivo de $3,000,000 y participación no controladora de $1,000,000. Sin preferentes. ¿Cuál es su EV?',
          answer: 26000000,
          hint: 'Capitalización: 1,000,000 × 20 = 20,000,000. Luego + 8,000,000 − 3,000,000 + 1,000,000.',
          why: '20,000,000 + 8,000,000 − 3,000,000 + 1,000,000 = **$26,000,000**. Si sumas el efectivo en vez de restarlo te sale 32,000,000.',
        },
      },
      {
        order: {
          title: 'Arma el puente del EV',
          steps: ['Acciones × precio = equity value', '➕ deuda', '➖ efectivo', '➕ participación no controladora y preferentes'],
          done: '¡Ese es el puente! Deuda − efectivo se llama **deuda neta**.',
        },
      },
    ],
    // ¿Por qué se resta el efectivo?
    [
      { text: 'Lucía no entiende por qué el efectivo **se resta**. Su jefa le pone un ejemplo con una tienda 🏪.' },
      {
        ask: 'Compras una tienda en $100,000 y en su caja hay $10,000 que ahora son tuyos. ¿Cuánto te costó en realidad el negocio?',
        options: [
          { text: '$90,000', ok: true, reply: '¡Exacto! Recuperas los $10,000 de la caja. El negocio en sí te costó **$90,000**.' },
          { text: '$100,000', reply: 'Pagaste 100,000, pero te quedas con 10,000 de la caja. El negocio te costó **$90,000**.' },
          { text: '$110,000', reply: 'El efectivo no se suma al costo: lo recuperas. Te costó **$90,000**.' },
        ],
      },
      { text: 'El efectivo extra **no es parte de la operación**: quien compra la empresa lo recupera. Por eso se usa la **deuda neta** = deuda − efectivo.' },
      {
        calc: {
          question: 'Burbuja debe $5,000,000 y tiene $2,000,000 en efectivo. ¿Cuál es su deuda neta?',
          answer: 3000000,
          hint: 'Deuda − efectivo: 5,000,000 − 2,000,000.',
          why: '5,000,000 − 2,000,000 = **$3,000,000** de deuda neta.',
        },
      },
      {
        multi: {
          title: 'Burbuja usa $1,000,000 de efectivo para pagar deuda. Marca lo que es cierto',
          items: [
            { text: 'La deuda baja $1,000,000', ok: true },
            { text: 'El efectivo baja $1,000,000', ok: true },
            { text: 'La deuda neta sigue en $3,000,000', ok: true },
            { text: 'El EV sube', ok: false },
            { text: 'El equity value baja', ok: false },
          ],
          why: 'Bajan la deuda y el efectivo en la misma cantidad: la deuda neta no cambia, así que **ni el EV ni el equity value cambian**. El negocio operativo es el mismo.',
        },
      },
      { tip: 'Pagar deuda con efectivo **no cambia el EV**: (deuda − 1) − (efectivo − 1) = la misma deuda neta.' },
    ],
    // ¿Cuánto valen las parecidas?
    [
      { text: 'Para valuar tu casa, ves a cuánto se vendieron **casas parecidas** de tu colonia 🏘️. Con empresas es igual: se comparan con **comparables** del mismo sector, tamaño y crecimiento.' },
      { text: '✖️ Un **múltiplo** dice «cuántas veces» una medida vale la empresa: 7x EBITDA = 7 veces su EBITDA.\n📊 **EBITDA** = utilidad de operación antes de intereses, impuestos, depreciación y amortización.\n🎯 Se usa la **mediana**: el valor de en medio al ordenar de menor a mayor.' },
      {
        calc: {
          question: 'Cinco lavanderías comparables cotizan a 8x, 5x, 7x, 10x y 6x EV/EBITDA. ¿Cuál es la mediana?',
          answer: 7,
          unit: 'veces',
          hint: 'Ordénalas: 5, 6, 7, 8, 10. Toma la de en medio.',
          why: 'Ordenadas: 5, 6, **7**, 8, 10. La mediana es **7x**.',
        },
      },
      { text: '⚖️ **Regla de oro: consistencia.**\nSi arriba va el **EV** (todos los inversionistas), abajo va algo antes de intereses: ventas, EBITDA, EBIT.\nSi arriba va el **precio** o equity, abajo va algo del accionista: utilidad neta, valor en libros.' },
      {
        sort: {
          title: '¿Múltiplo de EV o de equity?',
          buckets: ['Múltiplo de EV', 'Múltiplo de equity (precio)'],
          items: [
            { text: 'EV/EBITDA', bucket: 0, why: 'EBITDA es antes de intereses: va con EV.' },
            { text: 'P/E (precio/utilidad)', bucket: 1, why: 'La utilidad neta es del accionista: va con el precio.' },
            { text: 'EV/Ventas', bucket: 0, why: 'Las ventas son de todo el negocio.' },
            { text: 'P/VL (precio/valor en libros)', bucket: 1, why: 'El valor en libros del capital es del accionista.' },
            { text: 'EV/EBIT', bucket: 0, why: 'EBIT es antes de intereses.' },
          ],
        },
      },
      {
        calc: {
          question: 'Burbuja tiene EBITDA de $10,000,000, deuda neta de $20,000,000 y 5,000,000 de acciones. Con la mediana de 7x EV/EBITDA, ¿cuánto vale cada acción?',
          answer: 10,
          hint: 'EV = 7 × 10,000,000 = 70,000,000. Resta la deuda neta y divide entre 5,000,000 acciones.',
          why: '70,000,000 − 20,000,000 = 50,000,000 de equity. ÷ 5,000,000 = **$10 por acción**. Si no restas la deuda neta te da $14: la deuda es de los bancos, no de los accionistas.',
        },
      },
      {
        ask: 'Burbuja casi no tiene deuda y su rival debe mucho. ¿Por qué Lucía prefiere EV/EBITDA y no P/E para compararlas?',
        options: [
          { text: 'Porque EBITDA es antes de intereses y no lo cambia la deuda', ok: true, reply: '¡Eso! EV y EBITDA incluyen a todos los que pusieron dinero, así que la forma de financiarse no ensucia la comparación.' },
          { text: 'Porque el EBITDA siempre es más grande', reply: 'Que sea más grande no es la razón. Es que el EBITDA es **antes de intereses**: la deuda no lo afecta.' },
          { text: 'Porque las NIF obligan a usar EBITDA', reply: 'El EBITDA no es una medida obligatoria de las NIF. La razón es que es **antes de intereses** y la deuda no lo afecta.' },
        ],
      },
    ],
  ],
}
