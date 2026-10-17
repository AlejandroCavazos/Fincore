import type { InteractiveLesson } from './types'

export const intCON12: InteractiveLesson = {
  lessonId: 'CON-12',
  sections: [
    // De papeles a reportes
    [
      { text: 'Beto tiene una ferretería 🔧. Cada día llegan facturas y tickets, y a fin de mes su contador le entrega reportes. ¿Cómo pasan los papeles a reportes?' },
      {
        ask: '¿Qué crees que forma el "sistema contable" de Beto?',
        options: [
          { text: 'Solo el programa de computadora', reply: 'El programa es una parte. También cuentan las **personas**, los **procedimientos**, los **datos** y los **controles**.' },
          { text: 'El programa, más personas, procedimientos, datos y controles', ok: true, reply: '¡Eso! El sistema es **todo** lo que se usa para convertir operaciones en reportes.' },
          { text: 'Solo el contador', reply: 'El contador es parte, pero también el programa, los **procedimientos**, los **datos** y los **controles**.' },
        ],
      },
      { text: 'El sistema trabaja en **tres fases**:\n📥 **Entrada:** llegan documentos fuente (CFDI, tickets).\n⚙️ **Proceso:** se registran pólizas y pasan al mayor.\n📤 **Salida:** balanza, estados financieros y otros reportes.' },
      {
        sort: {
          title: 'En la ferretería: ¿qué fase es?',
          buckets: ['Entrada', 'Proceso', 'Salida'],
          items: [
            { text: 'Llega la factura electrónica (CFDI) de un proveedor', bucket: 0, why: 'Es un documento fuente que entra al sistema.' },
            { text: 'Se captura la póliza de la compra', bucket: 1, why: 'Registrar pólizas es el proceso.' },
            { text: 'Se genera la balanza de comprobación', bucket: 2, why: 'Es un reporte que sale del sistema.' },
            { text: 'Llega el ticket de una compra con caja chica', bucket: 0, why: 'Otro documento fuente: entrada.' },
            { text: 'El sistema pasa las pólizas al mayor', bucket: 1, why: 'Pasar al mayor es parte del proceso.' },
            { text: 'Reporte de antigüedad de saldos de clientes', bucket: 2, why: 'Es un reporte: salida.' },
          ],
        },
      },
      {
        multi: {
          title: 'Marca todo lo que forma parte del sistema de Beto',
          items: [
            { text: 'Las personas que capturan, revisan y autorizan', ok: true },
            { text: 'Los procedimientos: quién hace qué y cuándo', ok: true },
            { text: 'Los datos: catálogo de cuentas, clientes, proveedores', ok: true },
            { text: 'El software contable o ERP', ok: true },
            { text: 'Los controles: permisos, revisiones y respaldos', ok: true },
            { text: 'El precio de las acciones en la bolsa', ok: false },
          ],
          why: 'Personas, procedimientos, datos, software y controles. El precio de la bolsa no tiene nada que ver.',
        },
      },
      { tip: 'En un **ERP** (sistema integral), al facturar una venta se baja el inventario y se registra la póliza **sin que nadie la capture**.' },
    ],
    // ¿Quién vigila el dinero?
    [
      { text: 'En la ferretería, Rosa cobra en caja 💵. ¿Quién debería registrar esos cobros y conciliar el banco?' },
      {
        ask: '¿Qué es lo más seguro?',
        options: [
          { text: 'Otra persona distinta de Rosa', ok: true, reply: '¡Bien! Así, si falta dinero, la diferencia aparece en la conciliación.' },
          { text: 'Rosa misma, porque conoce mejor los cobros', reply: 'Riesgoso: quien cobra, registra y concilia podría **esconder un error o un fraude**. Mejor otra persona.' },
          { text: 'Nadie, el banco ya lo revisa', reply: 'La conciliación es tu control: compara **tus** registros contra el banco. Debe hacerla otra persona.' },
        ],
      },
      { text: 'Eso es **segregación de funciones**: la misma persona no autoriza un pago, lo registra y concilia el banco. Otros controles: **permisos por usuario**, **bitácora**, **respaldos** y **bloqueo de periodos**.' },
      {
        match: {
          title: 'Une cada control con lo que hace',
          pairs: [
            ['Segregación de funciones', 'Una sola persona no autoriza, registra y concilia'],
            ['Permisos por usuario', 'Cada quien solo entra a lo que le toca'],
            ['Bitácora', 'Registro de quién cambió qué'],
            ['Respaldos', 'Copias para no perder la información'],
            ['Bloqueo de periodos', 'Nadie puede modificar un mes ya cerrado'],
          ],
        },
      },
      {
        ask: 'En otra ferretería, Memo autoriza los pagos, los registra y además concilia el banco. ¿Qué control falla?',
        options: [
          { text: 'La segregación de funciones', ok: true, reply: '¡Exacto! Memo hace las tres cosas: nadie podría detectar un error o un fraude.' },
          { text: 'Los respaldos', reply: 'Los respaldos evitan perder información. Aquí el problema es que **una sola persona** hace todo: segregación de funciones.' },
          { text: 'El bloqueo de periodos', reply: 'Eso protege meses cerrados. Aquí falla la **segregación de funciones**.' },
        ],
      },
      { tip: 'Con la **contabilidad electrónica** envías al SAT tu catálogo de cuentas y tu balanza, y entregas pólizas si te las piden. Por eso conviene que **cada póliza esté ligada a su CFDI**.' },
    ],
    // Cerrar el mes sin errores
    [
      { text: 'Es 31 y Beto quiere sus reportes 🧾. Antes hay que hacer el **cierre**: dejar el mes completo y correcto. Empieza con el **corte documental**: todo lo del mes, y nada del siguiente.' },
      {
        order: {
          title: 'Ordena los pasos del cierre',
          steps: [
            'Corte documental: todo lo del mes, y nada del siguiente',
            'Conciliaciones: comparar tus registros contra el banco',
            'Ajustes: sueldos devengados, depreciación, estimaciones',
            'Balanza de comprobación y estados financieros',
            'Bloquear el periodo para que nadie lo cambie',
          ],
          done: 'Corte → conciliar → ajustar → reportes → bloquear.',
        },
      },
      { text: 'Tu saldo y el del banco casi nunca coinciden, por los **tiempos**:\n📥 **Depósito en tránsito:** tú ya lo anotaste, el banco aún no. Se suma al banco.\n✍️ **Cheque en tránsito:** ya lo diste, pero no lo cobran. Se resta al banco.\n🏦 **Comisión:** el banco ya la cobró y tú no la anotaste. Se resta en libros.' },
      {
        calc: {
          question: 'El banco dice **$48,000**. Hay un depósito en tránsito de **$5,000** y un cheque en tránsito de **$3,000**. ¿Cuál es el saldo ajustado según el banco?',
          answer: 50000,
          hint: 'Suma lo que el banco no ha recibido y resta lo que aún no te cobran.',
          why: '48,000 + 5,000 − 3,000 = **$50,000**.',
        },
      },
      {
        calc: {
          question: 'En los libros de Beto el saldo es **$50,300** y falta anotar una comisión bancaria de **$300**. ¿Cuál es el saldo ajustado según libros?',
          answer: 50000,
          hint: 'Resta la comisión que el banco ya cobró.',
          why: '50,300 − 300 = **$50,000**. Igual que el saldo ajustado del banco: **cuadra**.',
        },
      },
      { text: 'En el **cierre anual** se cancelan las **cuentas de resultados** (ingresos, costos y gastos) contra la **utilidad del ejercicio**, para que empiecen el año en cero. Las de **balance** no: sus saldos pasan al año siguiente.' },
      {
        sort: {
          title: '¿Se cancela o pasa al siguiente año?',
          buckets: ['Se cancela al cierre anual', 'Pasa al siguiente año'],
          items: [
            { text: 'Ventas', bucket: 0, why: 'Es de resultados: empieza el año en cero.' },
            { text: 'Bancos', bucket: 1, why: 'Es de balance: su saldo sigue.' },
            { text: 'Costo de ventas', bucket: 0, why: 'Es de resultados: se cancela.' },
            { text: 'Clientes', bucket: 1, why: 'Los clientes siguen debiendo: es de balance.' },
            { text: 'Gastos de renta', bucket: 0, why: 'Es un gasto: se cancela.' },
            { text: 'Proveedores', bucket: 1, why: 'La deuda sigue: es de balance.' },
          ],
        },
      },
      {
        entry: {
          title: 'Póliza de cierre anual',
          story: 'Al 31 de diciembre: ventas **$500,000**, costo de ventas **$300,000** y gastos **$120,000**. Déjalas en cero.',
          lines: [
            { account: 'Ventas', side: 'D', amount: 500000, why: 'Tiene saldo acreedor: se carga para dejarla en cero.' },
            { account: 'Costo de ventas', side: 'C', amount: 300000, why: 'Tiene saldo deudor: se abona para dejarla en cero.' },
            { account: 'Gastos de operación', side: 'C', amount: 120000, why: 'Saldo deudor: se abona para cancelarla.' },
            { account: 'Utilidad del ejercicio', side: 'C', amount: 80000, why: '500,000 − (300,000 + 120,000) = 80,000. Es el abono que cuadra la póliza.' },
          ],
        },
      },
    ],
  ],
}
