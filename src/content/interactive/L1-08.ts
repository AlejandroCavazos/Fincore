import type { InteractiveLesson } from './types'

export const intL108: InteractiveLesson = {
  lessonId: 'L1-08',
  sections: [
    // ¿Dónde se anota cada cosa?
    [
      { text: 'Lola abre una papelería ✏️. Cada día vende, compra y paga. ¿Dónde anota todo sin hacerse bolas?' },
      {
        ask: 'Lola le debe $3,000 a quien le vende cuadernos. ¿Dónde lo anota?',
        options: [
          { text: 'En un apartado solo para lo que debe a proveedores', ok: true, reply: '¡Eso! Cada cosa va en su propio apartado. Ese se llama **Proveedores**.' },
          { text: 'En la misma hoja que sus ventas', reply: 'Si mezcla todo, no sabrá cuánto vende ni cuánto debe. Va en su propio apartado: **Proveedores**.' },
          { text: 'En ningún lado, se acuerda', reply: 'Con tantos movimientos, se le olvidaría. Va en su propio apartado: **Proveedores**.' },
        ],
      },
      { text: 'Ese apartado es una **cuenta**: un **cajón con etiqueta** 🗄️ donde guardas los movimientos de una misma cosa.' },
      {
        text: 'Los cajones se juntan en grupos:\n🧺 **Activo:** Caja, Bancos, Clientes, Inventarios.\n🧾 **Pasivo:** Proveedores, Préstamos bancarios.\n👛 **Capital:** Capital social.\n💰 **Ingresos:** Ventas.\n💸 **Gastos:** Sueldos, Renta, Luz.',
      },
      {
        sort: {
          title: 'Lo que tiene, lo que debe o lo de los dueños',
          buckets: ['Activo', 'Pasivo', 'Capital'],
          items: [
            { text: 'Bancos', bucket: 0, why: 'Es dinero del negocio: activo.' },
            { text: 'Proveedores', bucket: 1, why: 'Es lo que debe a quien le vende mercancía: pasivo.' },
            { text: 'Capital social', bucket: 2, why: 'Es lo que pusieron los dueños: capital.' },
            { text: 'Clientes', bucket: 0, why: 'Es lo que **le deben** a Lola: un derecho de cobro, activo.' },
            { text: 'Inventarios', bucket: 0, why: 'Es la mercancía que tiene para vender: activo.' },
            { text: 'Préstamos bancarios', bucket: 1, why: 'Es una deuda con el banco: pasivo.' },
          ],
        },
      },
      {
        sort: {
          title: '¿Ingreso o gasto?',
          buckets: ['Ingreso', 'Gasto'],
          items: [
            { text: 'Ventas', bucket: 0, why: 'Es lo que gana por vender: ingreso.' },
            { text: 'Renta', bucket: 1, why: 'Es lo que paga por usar el local: gasto.' },
            { text: 'Sueldos', bucket: 1, why: 'Es lo que paga a sus empleados: gasto.' },
            { text: 'Luz', bucket: 1, why: 'Es un servicio que consume: gasto.' },
          ],
        },
      },
      { tip: 'La lista de todos los cajones con su código es el **catálogo de cuentas**. Normalmente el primer número dice el grupo: **1** activo, **2** pasivo, **3** capital, **4** ingresos, **5 en adelante** costos y gastos.' },
    ],
    // ¿De qué lado crece?
    [
      { text: 'Cada cajón tiene un **lado favorito** donde crece. Eso es su **naturaleza**.' },
      {
        ask: 'Recuerda: Activo = Pasivo + Capital. El activo está a la izquierda. ¿De qué lado crees que crece?',
        options: [
          { text: 'Del izquierdo', ok: true, reply: '¡Bien! El activo crece del lado izquierdo: es de naturaleza **deudora**.' },
          { text: 'Del derecho', reply: 'El derecho es el lado del pasivo y el capital. El activo crece del **izquierdo**: es **deudor**.' },
          { text: 'De ninguno, no crece', reply: 'Sí crece, por ejemplo cuando entra dinero. Crece del lado **izquierdo**: es **deudor**.' },
        ],
      },
      {
        text: '👈 **Deudoras** (crecen con cargo, lado izquierdo): activos, costos y gastos.\n👉 **Acreedoras** (crecen con abono, lado derecho): pasivos, capital e ingresos.',
      },
      { text: 'Truco: los **gastos** bajan tu ganancia, por eso van del lado del activo. Los **ingresos** la suben, por eso van del lado del capital.' },
      {
        rush: {
          title: '¿Deudora o acreedora?',
          seconds: 30,
          labels: ['Deudora', 'Acreedora'],
          items: [
            { text: 'Caja', ans: 0 },
            { text: 'Ventas', ans: 1 },
            { text: 'Proveedores', ans: 1 },
            { text: 'Sueldos', ans: 0 },
            { text: 'Capital social', ans: 1 },
            { text: 'Maquinaria', ans: 0 },
            { text: 'Renta (gasto)', ans: 0 },
            { text: 'Préstamos bancarios', ans: 1 },
            { text: 'Bancos', ans: 0 },
            { text: 'Ingresos por servicios', ans: 1 },
          ],
        },
      },
      { tip: '**Deudoras:** activos, costos y gastos. **Acreedoras:** pasivos, capital e ingresos.' },
    ],
    // ¿Cuánto queda en el cajón?
    [
      { text: 'Al cerrar el mes, Lola quiere saber cuánto quedó en cada cajón. Eso es el **saldo**.' },
      {
        text: 'El saldo es la diferencia entre los dos lados:\n👈 Más cargos → saldo **deudor** = cargos − abonos.\n👉 Más abonos → saldo **acreedor** = abonos − cargos.\n0️⃣ Iguales → cuenta **saldada** (en cero).',
      },
      {
        calc: {
          question: 'En la Caja de Lola hubo cargos (entradas) de $5,000 y $3,000, y un abono (salida) de $2,500. ¿Cuál es el saldo?',
          answer: 5500,
          hint: 'Suma los cargos y réstale el abono.',
          why: '5,000 + 3,000 = 8,000; menos 2,500 = **$5,500 deudor**.',
        },
      },
      {
        order: {
          title: 'Arma la fórmula del saldo acreedor',
          steps: ['Saldo acreedor', '= suma de abonos', '− suma de cargos'],
          done: '¡Eso! En las cuentas acreedoras, los abonos van primero.',
        },
      },
      {
        calc: {
          question: 'Proveedores de Lola tiene abonos (compras a crédito) de $20,000 y $8,000, y un cargo (pago) de $10,000. ¿Cuál es su saldo?',
          answer: 18000,
          hint: 'Saldo acreedor = abonos − cargos: 20,000 + 8,000 − 10,000.',
          why: '20,000 + 8,000 = 28,000; menos 10,000 = **$18,000 acreedor**. Es lo que Lola aún debe.',
        },
      },
      {
        ask: 'La Caja de Lola sale con saldo **acreedor**. ¿Qué significa?',
        options: [
          { text: 'Que hay un error', ok: true, reply: '¡Exacto! No puedes sacar de la caja más billetes de los que hay. Cada cuenta suele tener saldo de su misma naturaleza.' },
          { text: 'Que fue un buen mes', reply: 'No. Caja es deudora; si sale acreedora, **algo está mal** en el registro.' },
          { text: 'Que la caja está en cero', reply: 'En cero sería **saldada**. Acreedora significa que salió más de lo que entró: **hay un error**.' },
        ],
      },
      { tip: 'Lo normal es que cada cuenta tenga saldo de **su misma naturaleza**: Caja deudor, Proveedores acreedor.' },
    ],
  ],
}
