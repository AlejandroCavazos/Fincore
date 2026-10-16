import type { InteractiveLesson } from './types'

export const intL108: InteractiveLesson = {
  lessonId: 'L1-08',
  sections: [
    // Clasificación de cuentas
    [
      { text: 'Una **cuenta** es un **cajón con etiqueta** 🗄️: ahí guardas todos los movimientos de una misma cosa. Un cajón para el efectivo (Caja), otro para lo que debes al proveedor (Proveedores), y así.' },
      { tip: 'La lista de todos los cajones, cada uno con su código, es el **catálogo de cuentas**. El primer número dice el grupo: **1** activo, **2** pasivo, **3** capital, **4** ingresos, **5 en adelante** costos y gastos.' },
      {
        sort: {
          title: '¿A qué cajón va?',
          buckets: ['Activo', 'Pasivo', 'Capital', 'Ingreso', 'Gasto'],
          items: [
            { text: 'Bancos', bucket: 0, why: 'Es dinero del negocio: activo (código 1…).' },
            { text: 'Proveedores', bucket: 1, why: 'Es lo que debes a quien te vende mercancía: pasivo.' },
            { text: 'Ventas', bucket: 3, why: 'Es lo que ganas por vender: ingreso.' },
            { text: 'Renta', bucket: 4, why: 'Es lo que pagas por usar el local: gasto.' },
            { text: 'Capital social', bucket: 2, why: 'Es lo que pusieron los dueños: capital.' },
            { text: 'Clientes', bucket: 0, why: 'Es lo que **te deben**: un derecho de cobro, activo.' },
            { text: 'Préstamos bancarios', bucket: 1, why: 'Es una deuda con el banco: pasivo.' },
          ],
        },
      },
    ],
    // Naturaleza deudora y acreedora
    [
      { text: 'Cada cuenta tiene un **lado favorito** donde crece. Eso es su **naturaleza**.' },
      { tip: '**Deudoras** (crecen con cargo, lado izquierdo): activos, costos y gastos. **Acreedoras** (crecen con abono, lado derecho): pasivos, capital e ingresos.' },
      { text: 'Truco: piensa en la ecuación. Lo que está a la **izquierda** (activo) y lo que **baja** tu ganancia (gastos) es deudor. Lo de la **derecha** (pasivo, capital) y lo que **sube** tu ganancia (ingresos) es acreedor.' },
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
            { text: 'Inventarios', ans: 0 },
            { text: 'Luz', ans: 0 },
            { text: 'Préstamos bancarios', ans: 1 },
            { text: 'Mobiliario y equipo', ans: 0 },
            { text: 'Ingresos por servicios', ans: 1 },
          ],
        },
      },
    ],
    // Saldos contables
    [
      { text: 'El **saldo** es lo que queda en el cajón después de todos los movimientos: lo que entró menos lo que salió.' },
      {
        calc: {
          question: 'En Caja entraron **$5,000** y **$3,000**, y salieron **$2,500**. ¿Cuál es el saldo?',
          answer: 5500,
          hint: 'suma lo que entró y réstale lo que salió.',
          why: '5,000 + 3,000 = 8,000; menos 2,500 = **$5,500 deudor**.',
        },
      },
      {
        ask: 'La cuenta Caja te sale con saldo **acreedor** (como si hubieras sacado más billetes de los que había). ¿Qué significa?',
        options: [
          { text: 'Hay un error', ok: true, reply: '¡Exacto! No puedes sacar de la caja más billetes de los que hay. Cada cuenta suele tener saldo de su misma naturaleza.' },
          { text: 'Que fue un buen mes', reply: 'No. Caja es deudora; si sale acreedora, **algo está mal** en el registro.' },
        ],
      },
      { tip: 'Más cargos → saldo **deudor**. Más abonos → saldo **acreedor**. Iguales → cuenta **saldada** (en cero).' },
    ],
  ],
}
