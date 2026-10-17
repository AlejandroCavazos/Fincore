import type { InteractiveLesson } from './types'

export const intL109: InteractiveLesson = {
  lessonId: 'L1-09',
  sections: [
    // Los dos lados de una cuenta
    [
      { text: 'Mario tiene una cafetería ☕. Su banco le avisa: "te hicimos un abono". Él piensa: ¡me depositaron!' },
      {
        ask: 'En contabilidad, ¿"abono" significa que entró dinero?',
        options: [
          { text: 'No, solo dice de qué lado se anota', ok: true, reply: '¡Bien! En contabilidad, abono solo indica **el lado derecho** de la cuenta.' },
          { text: 'Sí, siempre', reply: 'Eso es en el banco. En contabilidad, abono solo indica **el lado derecho**, sin decir si entra o sale.' },
          { text: 'Significa pagar en partes', reply: 'Eso es en una tienda. En contabilidad, abono solo indica **el lado derecho**.' },
        ],
      },
      { text: 'Toda cuenta tiene dos lados:\n👈 **Debe** = lado izquierdo. Anotar ahí es **cargar**.\n👉 **Haber** = lado derecho. Anotar ahí es **abonar**.' },
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
            { text: 'En contabilidad, "abono" significa que entró dinero.', bucket: 0, why: 'Eso es en el banco. **En contabilidad solo indica el lado derecho.**' },
            { text: 'Un cargo siempre es algo malo.', bucket: 0, why: 'Cargo no es bueno ni malo: solo es el **lado izquierdo**.' },
            { text: 'Cargar o abonar, por sí solo, no dice si la cuenta sube o baja.', bucket: 1, why: 'Depende de la **naturaleza** de la cuenta. Lo ves en la siguiente lección.' },
          ],
        },
      },
      { tip: 'Cargo y abono **solo dicen el lado**. No son bueno o malo, ni "entra" o "sale".' },
    ],
    // ¿Cuándo cargo y cuándo abono?
    [
      { text: 'Mario vende un café y entra dinero a Caja. ¿Cargo o abono? Depende de la **naturaleza** de la cuenta.' },
      {
        text: '**Una cuenta sube del lado de su naturaleza y baja del lado contrario.**\n👈 Deudoras (activo, costos, gastos): suben con **cargo**, bajan con **abono**.\n👉 Acreedoras (pasivo, capital, ingresos): suben con **abono**, bajan con **cargo**.',
      },
      {
        ask: 'Mario le paga $2,000 a su proveedor y su deuda baja. ¿Qué se le hace a Proveedores?',
        options: [
          { text: 'Un cargo', ok: true, reply: '¡Exacto! Proveedores es acreedora; para **bajar** se carga.' },
          { text: 'Un abono', reply: 'Proveedores es acreedora: el abono la haría **subir**. Para bajarla se **carga**.' },
          { text: 'Nada, solo se mueve Caja', reply: 'La deuda sí cambia: baja. Proveedores es acreedora, así que se **carga**.' },
        ],
      },
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
      {
        multi: {
          title: '¿Cuáles se anotan con ABONO? Marca todas',
          items: [
            { text: 'Sube Capital social', ok: true },
            { text: 'Baja Caja', ok: true },
            { text: 'Sube Renta (gasto)', ok: false },
            { text: 'Sube Ingresos por servicios', ok: true },
            { text: 'Baja Documentos por pagar', ok: false },
          ],
          why: 'Capital e ingresos son acreedoras: **suben con abono**. Caja es deudora: **baja con abono**. Renta (gasto) sube con cargo, y Documentos por pagar (pasivo) baja con cargo.',
        },
      },
      { tip: 'Primero piensa la **naturaleza**. Luego: ¿sube? → su lado. ¿Baja? → el lado contrario.' },
    ],
    // Tres pasos para decidir
    [
      { text: 'Para cada movimiento, Mario sigue **3 pasos**:\n1️⃣ ¿Qué cuenta se mueve?\n2️⃣ ¿Es deudora o acreedora?\n3️⃣ ¿Sube o baja? Con eso, la regla le da el lado.' },
      {
        order: {
          title: 'Ordena los 3 pasos',
          steps: ['Identifica la cuenta', 'Recuerda su naturaleza', 'Ve si sube o baja y aplica la regla'],
          done: '¡Listo! Con esos 3 pasos decides cualquier cargo o abono.',
        },
      },
      {
        entry: {
          title: 'Caso 1: venta en efectivo',
          story: 'Mario vende **$1,500** de café y cobra en efectivo.',
          lines: [
            { account: 'Caja', side: 'D', amount: 1500, why: 'Caja es deudora y **sube**: cargo.' },
            { account: 'Ventas', side: 'C', amount: 1500, why: 'Ventas es acreedora y **sube**: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Caso 2: pago de luz',
          story: 'Mario paga la luz, **$900**, en efectivo.',
          lines: [
            { account: 'Luz (gasto)', side: 'D', amount: 900, why: 'Es gasto (deudor) y **sube**: cargo.' },
            { account: 'Caja', side: 'C', amount: 900, why: 'Caja es deudora y **baja**: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Caso 3: pago de préstamo',
          story: 'Mario liquida un préstamo bancario de **$5,000** con transferencia.',
          lines: [
            { account: 'Préstamos bancarios', side: 'D', amount: 5000, why: 'Es acreedora y **baja**: cargo.' },
            { account: 'Bancos', side: 'C', amount: 5000, why: 'Es deudora y **baja**: abono.' },
          ],
        },
      },
      { tip: 'Fíjate: en cada caso hubo **un cargo y un abono**. Eso es la partida doble, el siguiente tema.' },
    ],
  ],
}
