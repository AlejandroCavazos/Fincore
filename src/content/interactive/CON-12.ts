import type { InteractiveLesson } from './types'

export const intCON12: InteractiveLesson = {
  lessonId: 'CON-12',
  sections: [
    // Componentes de un sistema de información contable
    [
      { text: 'Un **sistema de información contable** convierte papeles y facturas en reportes. Funciona en tres fases: **entrada**, **proceso** y **salida**.' },
      {
        sort: {
          title: 'En la ferretería: ¿qué fase es?',
          buckets: ['Entrada', 'Proceso', 'Salida'],
          items: [
            { text: 'Llega la factura electrónica (CFDI) de un proveedor', bucket: 0, why: 'Es un documento fuente que entra al sistema.' },
            { text: 'Se registra la póliza de la compra', bucket: 1, why: 'Registrar pólizas es el proceso.' },
            { text: 'Se genera la balanza de comprobación', bucket: 2, why: 'Es un reporte que sale del sistema.' },
            { text: 'Llega el ticket de la gasolina', bucket: 0, why: 'Otro documento fuente: entrada.' },
            { text: 'El sistema pasa las pólizas al mayor', bucket: 1, why: 'Pasar al mayor es parte del proceso.' },
            { text: 'Reporte de antigüedad de saldos de clientes', bucket: 2, why: 'Es un reporte: salida.' },
          ],
        },
      },
      { text: 'Ojo: el sistema **no es solo el programa**. ¿Qué más lo forma?' },
      {
        multi: {
          title: 'Marca todo lo que forma parte del sistema',
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
    // Controles y contabilidad electrónica
    [
      { text: 'En una distribuidora 🚚, Rosa cobra en caja. ¿Quién debería registrar esos cobros y conciliar el banco?' },
      {
        ask: '¿Qué es lo más seguro?',
        options: [
          { text: 'Otra persona distinta de Rosa', ok: true, reply: '¡Bien! Eso es **segregación de funciones**: si falta dinero, la diferencia aparece en la conciliación.' },
          { text: 'Rosa misma, porque conoce mejor los cobros', reply: 'Riesgoso: quien cobra, registra y concilia podría **esconder un error o un fraude**.' },
          { text: 'Nadie, el banco ya lo revisa', reply: 'No. La conciliación es tu control: compara **tus** registros contra el banco.' },
        ],
      },
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
      { tip: 'Con la **contabilidad electrónica** envías al SAT tu catálogo de cuentas y tu balanza, y entregas pólizas si te las piden. Por eso conviene que **cada póliza esté ligada a su CFDI**.' },
    ],
    // El cierre contable paso a paso
    [
      { text: 'La tiendita de Lupe cierra su mes 🧾. El **cierre** deja el periodo completo y correcto antes de sacar reportes.' },
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
      { text: 'Tu saldo y el del banco casi nunca coinciden por los **tiempos**. Un **depósito en tránsito** ya lo anotaste pero el banco aún no; un **cheque en tránsito** ya lo diste pero no lo cobran.' },
      {
        calc: {
          question: 'El banco dice **$48,000**. Hay un depósito en tránsito de **$5,000** y un cheque en tránsito de **$3,000**. ¿Cuál es el saldo ajustado según el banco?',
          answer: 50000,
          hint: 'suma lo que el banco no ha recibido y resta lo que aún no te cobran.',
          why: '48,000 + 5,000 − 3,000 = **$50,000**. Si en libros tenías $50,300 y el banco cobró una comisión de $300 que no anotaste: 50,300 − 300 = $50,000. **Cuadra.**',
        },
      },
      { text: 'En el **cierre anual** se cancelan las cuentas de resultados contra la **utilidad del ejercicio**, para que empiecen el año en cero.' },
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
      { tip: 'Bancos, clientes y proveedores **no** se cancelan: son cuentas de balance y sus saldos pasan al siguiente año.' },
    ],
  ],
}
