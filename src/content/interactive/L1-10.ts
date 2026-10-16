import type { InteractiveLesson } from './types'

export const intL110: InteractiveLesson = {
  lessonId: 'L1-10',
  sections: [
    // Principio de dualidad
    [
      { text: 'Cuando compras un pan pasan **dos cosas**: recibes el pan y entregas dinero. En contabilidad igual: **cada operación mueve al menos dos cuentas**.' },
      {
        ask: 'Una cafetería compra tazas por $1,200 en efectivo. ¿Qué dos cosas cambian?',
        options: [
          { text: 'Suben las tazas y baja la caja', ok: true, reply: '¡Eso! Entra un activo (tazas) y sale otro (efectivo). Dos cuentas, un solo hecho.' },
          { text: 'Solo baja la caja', reply: 'Falta la otra cara: el dinero no desaparece, se convirtió en **tazas**. Sube Mobiliario y baja Caja.' },
          { text: 'Sube la caja y sube un gasto', reply: 'La caja **baja**, porque pagaste. Y las tazas que durarán años son un activo: suben las tazas, baja la caja.' },
        ],
      },
      { tip: '**Partida doble:** todo lo que recibes tiene un origen. Por eso cada operación se anota en al menos **dos cuentas**.' },
    ],
    // Igualdad entre cargos y abonos
    [
      { text: 'La regla de oro: en toda póliza, **la suma de los cargos es igual a la suma de los abonos**. Si no cuadra, hay un error.' },
      { text: 'Ahora tú eres el auditor 🕵️. Encuentra la línea mala.' },
      {
        spot: {
          title: 'Compra de mercancía y papelería',
          story: 'La papelería compró mercancía por $6,000 y papel por $500. Pagó $2,500 en efectivo y quedó a deber $4,000 al proveedor.',
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
      { tip: 'Suma todos los cargos, suma todos los abonos y compara. Si no son iguales, **no sigas**: busca el error.' },
    ],
    // Operaciones sencillas
    [
      { text: 'Más casos para el detective. En cada póliza hay **una** línea mal. Tócala.' },
      {
        spot: {
          title: 'Venta en efectivo',
          story: 'La cafetería vendió $3,000 en efectivo.',
          lines: [
            { account: 'Caja', side: 'C', amount: 3000 },
            { account: 'Ventas', side: 'C', amount: 3000 },
          ],
          wrong: 0,
          why: 'Entró dinero a la caja: un activo que **aumenta se carga**. Debe ser **cargo** a Caja $3,000.',
        },
      },
      {
        spot: {
          title: 'Pago de renta',
          story: 'Pagaron la renta del local, $5,000, por transferencia.',
          lines: [
            { account: 'Renta', side: 'D', amount: 5000 },
            { account: 'Bancos', side: 'D', amount: 5000 },
          ],
          wrong: 1,
          why: 'Salió dinero del banco: un activo que **disminuye se abona**. Debe ser **abono** a Bancos $5,000.',
        },
      },
      { tip: 'Activo que **sube** → cargo. Activo que **baja** → abono. Ingresos → abono. Gastos → cargo.' },
    ],
  ],
}
