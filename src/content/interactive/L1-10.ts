import type { InteractiveLesson } from './types'

export const intL110: InteractiveLesson = {
  lessonId: 'L1-10',
  sections: [
    // Todo tiene dos caras
    [
      { text: 'Juan va por pan 🥖: recibe el pan y entrega dinero. En un solo intercambio pasan **dos cosas**.' },
      {
        ask: 'El taller de Juan compra una herramienta de $1,200 en efectivo. ¿Qué cambia?',
        options: [
          { text: 'Sube la herramienta y baja la caja', ok: true, reply: '¡Eso! Entra algo que el taller tiene y sale efectivo. Dos cuentas, un solo hecho.' },
          { text: 'Solo baja la caja', reply: 'Falta la otra cara: el dinero no desaparece, se volvió **herramienta**. Sube la herramienta y baja la caja.' },
          { text: 'Sube la caja', reply: 'La caja **baja**, porque Juan pagó. A cambio, **sube la herramienta**.' },
        ],
      },
      {
        text: 'Eso es la **partida doble**: cada operación tiene al menos dos efectos y se anota en **al menos dos cuentas**.\n📜 La difundió Luca Pacioli en 1494.\n⚖️ En las NIF es la **dualidad económica**: cada recurso tiene una fuente.',
      },
      {
        match: {
          title: '¿Qué dos cuentas se mueven?',
          pairs: [
            ['Juan aporta $40,000 en efectivo', 'Caja y Capital social'],
            ['Cobra un servicio en efectivo', 'Caja e Ingresos por servicios'],
            ['Compra mercancía a crédito', 'Inventarios y Proveedores'],
            ['Paga la luz por transferencia', 'Luz y Bancos'],
          ],
        },
      },
      { tip: 'Si solo ves una cuenta moverse, **te falta la otra cara**. Toda operación mueve al menos dos.' },
    ],
    // Cargos y abonos siempre cuadran
    [
      { text: 'Juan anota cada operación en una **póliza** (o asiento): qué cuentas se cargan, cuáles se abonan y por cuánto.' },
      {
        ask: 'Juan compra herramientas por $10,000: paga $4,000 en efectivo y queda a deber $6,000. ¿Cuántas cuentas se mueven?',
        options: [
          { text: 'Tres', ok: true, reply: '¡Bien! Sube Maquinaria, baja Caja y nace una deuda con Acreedores diversos.' },
          { text: 'Dos', reply: 'Son tres: Maquinaria sube, Caja baja **y** nace una deuda (Acreedores diversos).' },
          { text: 'Una', reply: 'Toda operación mueve al menos dos. Aquí son tres: Maquinaria, Caja y Acreedores diversos.' },
        ],
      },
      { text: 'Regla de oro: **suma de cargos = suma de abonos**. Puede haber más de dos líneas (asiento **compuesto**): Maquinaria 10,000 = Caja 4,000 + Acreedores 6,000.' },
      {
        spot: {
          title: 'Compra de mercancía y papelería',
          story: 'Juan compró mercancía por $6,000 y papelería por $500. Pagó $2,500 en efectivo y quedó a deber $4,000 al proveedor.',
          lines: [
            { account: 'Inventarios', side: 'D', amount: 6000 },
            { account: 'Papelería', side: 'D', amount: 500 },
            { account: 'Caja', side: 'C', amount: 2500 },
            { account: 'Proveedores', side: 'C', amount: 3500 },
          ],
          wrong: 3,
          why: 'Quedó a deber **$4,000**, no $3,500. Cargos: 6,000 + 500 = 6,500. Abonos: 2,500 + 4,000 = 6,500. Ahora sí cuadra.',
        },
      },
      {
        multi: {
          title: '¿Cuáles pólizas cuadran? Marca todas',
          items: [
            { text: 'Cargo Maquinaria 10,000 / abono Caja 4,000 y Acreedores 6,000', ok: true },
            { text: 'Cargo Luz 900 / abono Bancos 1,000', ok: false },
            { text: 'Cargo Caja 1,500 y Clientes 2,500 / abono Ventas 4,000', ok: true },
            { text: 'Cargo Inventarios 6,000 / abono Caja 2,000 y Proveedores 3,000', ok: false },
          ],
          why: 'Suma cada lado: 10,000 = 4,000 + 6,000 ✔. 900 ≠ 1,000 ✘. 1,500 + 2,500 = 4,000 ✔. 6,000 ≠ 2,000 + 3,000 = 5,000 ✘.',
        },
      },
      {
        calc: {
          question: 'Juan carga Maquinaria $12,000 y Papelería $1,000. Abona Bancos $7,000 y el resto a Acreedores diversos. ¿Cuánto abona a Acreedores?',
          answer: 6000,
          hint: 'Cargos: 12,000 + 1,000. Los abonos deben sumar lo mismo.',
          why: 'Cargos = 13,000. Abonos: 7,000 + ? = 13,000 → **$6,000**.',
        },
      },
      { tip: 'Ojo: que una póliza cuadre **no garantiza** que usaste las cuentas correctas.' },
    ],
    // Tus primeras pólizas
    [
      { text: 'Para cualquier operación, 4 pasos:\n1️⃣ ¿Qué cuentas se mueven?\n2️⃣ ¿Suben o bajan?\n3️⃣ ¿Cargo o abono?\n4️⃣ ¿Cargos = abonos?' },
      {
        entry: {
          title: 'Juan abre su taller',
          story: 'Juan aporta **$40,000** en efectivo para abrir su taller.',
          lines: [
            { account: 'Caja', side: 'D', amount: 40000, why: 'Entra efectivo: activo que **sube**, cargo.' },
            { account: 'Capital social', side: 'C', amount: 40000, why: 'Es lo que pone el dueño: capital que **sube**, abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Primer servicio',
          story: 'Juan cobra **$2,500** en efectivo por un servicio.',
          lines: [
            { account: 'Caja', side: 'D', amount: 2500, why: 'Entra efectivo: cargo a Caja.' },
            { account: 'Ingresos por servicios', side: 'C', amount: 2500, why: 'Es un ingreso que **sube**: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Compra de herramientas',
          story: 'Compra herramientas por **$10,000**: paga **$4,000** en efectivo y queda a deber **$6,000**.',
          lines: [
            { account: 'Maquinaria', side: 'D', amount: 10000, why: 'Entran herramientas: activo que **sube**, cargo.' },
            { account: 'Caja', side: 'C', amount: 4000, why: 'Sale efectivo: activo que **baja**, abono.' },
            { account: 'Acreedores diversos', side: 'C', amount: 6000, why: 'Nace una deuda: pasivo que **sube**, abono.' },
          ],
        },
      },
      {
        spot: {
          title: 'Pago de renta',
          story: 'Juan paga la renta del local, $5,000, por transferencia.',
          lines: [
            { account: 'Renta', side: 'D', amount: 5000 },
            { account: 'Bancos', side: 'D', amount: 5000 },
          ],
          wrong: 1,
          why: 'Salió dinero del banco: un activo que **baja se abona**. Debe ser **abono** a Bancos $5,000.',
        },
      },
      { tip: 'Activo que **sube** → cargo. Activo que **baja** → abono. Ingresos → abono. Gastos → cargo.' },
    ],
  ],
}
