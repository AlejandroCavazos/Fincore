import type { InteractiveLesson } from './types'

export const intL109: InteractiveLesson = {
  lessonId: 'L1-09',
  sections: [
    // Debe y haber
    [
      { text: 'Toda cuenta tiene dos lados. **Izquierdo = Debe** (anotar ahí es **cargar**). **Derecho = Haber** (anotar ahí es **abonar**).' },
      {
        match: {
          title: 'Une las parejas',
          pairs: [
            ['Debe', 'Lado izquierdo'],
            ['Haber', 'Lado derecho'],
            ['Cargo', 'Anotar en el debe'],
            ['Abono', 'Anotar en el haber'],
          ],
        },
      },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'En contabilidad, "abono" significa que te depositaron dinero.', bucket: 0, why: 'Eso es en el banco o en la tienda. **En contabilidad solo indica el lado derecho.**' },
            { text: 'Un cargo siempre es algo malo.', bucket: 0, why: 'Cargo no es bueno ni malo: solo es el **lado izquierdo**.' },
            { text: 'Cargar o abonar, por sí solo, no dice si la cuenta sube o baja.', bucket: 1, why: 'Depende de la **naturaleza** de la cuenta. Lo ves en el siguiente subtema.' },
          ],
        },
      },
    ],
    // Reglas de cargos y abonos
    [
      { tip: '**Una cuenta sube del lado de su naturaleza y baja del lado contrario.** Deudoras (activo, gastos): suben con cargo. Acreedoras (pasivo, capital, ingresos): suben con abono.' },
      { text: 'Ponlo a prueba a toda velocidad 👇' },
      {
        rush: {
          title: '¿Cargo o abono?',
          seconds: 40,
          labels: ['Cargo', 'Abono'],
          items: [
            { text: 'Entra dinero a **Caja**', ans: 0 },
            { text: 'Sube lo que debes a **Proveedores**', ans: 1 },
            { text: 'Le pagas al **proveedor** (baja la deuda)', ans: 0 },
            { text: 'Nace una **venta**', ans: 1 },
            { text: 'Sale dinero de **Bancos**', ans: 1 },
            { text: 'Gastas en **luz**', ans: 0 },
            { text: 'El dueño **aporta capital**', ans: 1 },
            { text: 'Compras **mercancía** (sube Inventarios)', ans: 0 },
            { text: 'Pides un **préstamo** (sube la deuda)', ans: 1 },
            { text: 'Pagas el **préstamo** (baja la deuda)', ans: 0 },
          ],
        },
      },
    ],
    // Ejercicios guiados
    [
      { text: 'Siempre 3 pasos: **¿qué cuenta?, ¿de qué naturaleza?, ¿sube o baja?** Ahora arma tú las pólizas.' },
      {
        entry: {
          title: 'Caso 1: venta en efectivo',
          story: 'Una cafetería vende **$1,500** y cobra en efectivo.',
          lines: [
            { account: 'Caja', side: 'D', amount: 1500, why: 'Caja es deudora y **sube**: cargo.' },
            { account: 'Ventas', side: 'C', amount: 1500, why: 'Ventas es acreedora y **sube**: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Caso 2: pago de luz',
          story: 'Paga la luz, **$900**, con transferencia.',
          lines: [
            { account: 'Luz (gasto)', side: 'D', amount: 900, why: 'Es gasto (deudor) y **sube**: cargo.' },
            { account: 'Bancos', side: 'C', amount: 900, why: 'Bancos es deudora y **baja**: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Caso 3: pago de préstamo',
          story: 'Liquida un préstamo bancario de **$5,000** con dinero del banco.',
          lines: [
            { account: 'Préstamos bancarios', side: 'D', amount: 5000, why: 'Es acreedora y **baja**: cargo.' },
            { account: 'Bancos', side: 'C', amount: 5000, why: 'Es deudora y **baja**: abono.' },
          ],
        },
      },
    ],
  ],
}
