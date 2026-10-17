import type { InteractiveLesson } from './types'

const AP = 'Sube el activo y sube el pasivo'
const AC = 'Sube el activo y sube el capital'
const CAMBIO = 'Un activo sube y otro baja'
const BAJA_P = 'Bajan el activo y el pasivo'
const BAJA_C = 'Bajan el activo y el capital (es gasto)'

export const intL115: InteractiveLesson = {
  lessonId: 'L1-15',
  sections: [
    // Clasificación de operaciones
    [
      { text: 'Sofía abre la cafetería **«Café Aroma»** ☕. Vas a llevar su primer mes completo. (Sin IVA ni depreciación, para simplificar.)' },
      { text: 'Antes de anotar cada operación, Sofía se pregunta:\n🔎 ¿Qué cuentas cambian?\n🏷️ ¿Son activo, pasivo, capital, ingreso o gasto?\n↕️ ¿Suben o bajan?' },
      {
        match: {
          title: '¿Qué cuentas cambian?',
          pairs: [
            ['(1) Sofía aporta $100,000', 'Bancos y Capital social'],
            ['(2) Compra cafetera y muebles', 'Mobiliario y equipo, y Bancos'],
            ['(3) Compra café y leche a crédito', 'Inventarios y Proveedores'],
            ['(4) Vende $30,000 de contado', 'Bancos y Ventas'],
            ['(5) Paga la renta', 'Renta (gasto) y Bancos'],
          ],
        },
      },
      {
        ask: 'En (3) Sofía compra café y leche a crédito. ¿Qué pasa en la ecuación?',
        options: [
          { text: 'Sube un activo y sube un pasivo', ok: true, reply: '¡Eso! Sube Inventarios (activo) y sube Proveedores (lo que debe).' },
          { text: 'Sube un activo y baja otro', reply: 'No sale dinero: queda a deber. Sube Inventarios (activo) y sube Proveedores (**pasivo**).' },
          { text: 'Sube el activo y sube el capital', reply: 'El café no es aportación de Sofía: se debe al proveedor. Suben activo y **pasivo**.' },
        ],
      },
      { tip: 'Si queda a deber, sube el **pasivo**. Si cambia dinero por otra cosa, **un activo sube y otro baja**.' },
    ],
    // Aplicación de la ecuación contable
    [
      { text: 'Ahora sigue el mes completo en la balanza. Predice cada operación: **activo = pasivo + capital** siempre debe cuadrar.' },
      {
        balance: {
          title: 'Café Aroma, primer mes',
          start: { a: 0, p: 0, c: 0 },
          ops: [
            { story: '(1) Sofía aporta **$100,000** al banco del negocio.', options: [{ text: AC, ok: true }, { text: AP }, { text: CAMBIO }], d: { a: 100000, p: 0, c: 100000 }, why: 'Entra dinero y es de Sofía.' },
            { story: '(2) Compra cafetera y muebles por **$45,000** con transferencia.', options: [{ text: BAJA_P }, { text: CAMBIO, ok: true }, { text: AP }], d: { a: 0, p: 0, c: 0 }, why: 'Cambia dinero por equipo: el activo total no cambia.' },
            { story: '(3) Compra café, leche y pan por **$12,000** a crédito.', options: [{ text: AC }, { text: CAMBIO }, { text: AP, ok: true }], d: { a: 12000, p: 12000, c: 0 }, why: 'Entra inventario y queda a deber.' },
            { story: '(4) Vende **$30,000** de contado; lo vendido le costó **$9,000**.', options: [{ text: AC, ok: true }, { text: AP }, { text: CAMBIO }], d: { a: 21000, p: 0, c: 21000 }, why: 'Entran 30,000 al banco y salen 9,000 de inventario: el activo sube 21,000, que es la ganancia de esa venta y aumenta el capital.' },
            { story: '(5) Paga la renta, **$7,000**.', options: [{ text: BAJA_P }, { text: BAJA_C, ok: true }, { text: CAMBIO }], d: { a: -7000, p: 0, c: -7000 }, why: 'Sale dinero y es gasto: baja la ganancia, o sea el capital.' },
            { story: '(6) Paga **$8,000** al proveedor.', options: [{ text: BAJA_P, ok: true }, { text: BAJA_C }, { text: CAMBIO }], d: { a: -8000, p: -8000, c: 0 }, why: 'Sale dinero y baja la deuda. No es gasto.' },
            { story: '(7) Paga el sueldo, **$6,000**.', options: [{ text: BAJA_P }, { text: CAMBIO }, { text: BAJA_C, ok: true }], d: { a: -6000, p: 0, c: -6000 }, why: 'Es gasto: bajan el activo y el capital.' },
          ],
        },
      },
      {
        calc: {
          question: 'Ventas $30,000 − costo $9,000 − renta $7,000 − sueldo $6,000. ¿Cuál fue la **utilidad** del mes?',
          answer: 8000,
          hint: 'el pago al proveedor no es gasto; no lo restes.',
          why: '30,000 − 9,000 − 7,000 − 6,000 = **$8,000**. Capital = 100,000 + 8,000 = 108,000. Y 112,000 = 4,000 + 108,000. **Cuadra.**',
        },
      },
    ],
    // Partida doble y cuentas T
    [
      { text: 'Cada operación lleva al menos un **cargo** y un **abono** por el mismo importe. Registra las operaciones clave de Sofía.' },
      {
        entry: {
          title: 'Operación (3)',
          story: 'Compra café, leche y pan por **$12,000** a crédito.',
          lines: [
            { account: 'Inventarios', side: 'D', amount: 12000, why: 'Activo que sube: cargo.' },
            { account: 'Proveedores', side: 'C', amount: 12000, why: 'Deuda que sube: abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Operación (4): la venta',
          story: 'Vende **$30,000** (depositados en el banco). Lo vendido le costó **$9,000**.',
          lines: [
            { account: 'Bancos', side: 'D', amount: 30000, why: 'Entra dinero: cargo.' },
            { account: 'Ventas', side: 'C', amount: 30000, why: 'Ingreso que sube: abono.' },
            { account: 'Costo de ventas', side: 'D', amount: 9000, why: 'Es un costo que sube: cargo.' },
            { account: 'Inventarios', side: 'C', amount: 9000, why: 'Sale mercancía: el activo baja con abono.' },
          ],
        },
      },
      {
        entry: {
          title: 'Practica: venta mitad y mitad',
          story: 'Otro día Sofía vende **$10,000**: **$8,000** de contado (al banco) y **$2,000** a crédito a una oficina vecina.',
          lines: [
            { account: 'Bancos', side: 'D', amount: 8000, why: 'Entra dinero al banco: cargo.' },
            { account: 'Clientes', side: 'D', amount: 2000, why: 'La oficina le debe: derecho que sube, cargo.' },
            { account: 'Ventas', side: 'C', amount: 10000, why: 'La venta completa es ingreso: abono por el total.' },
          ],
        },
      },
      { text: 'Ahora pasa todo lo de **Bancos** del primer mes a su cuenta T:' },
      {
        tacct: {
          title: 'La cuenta T de Bancos',
          account: 'Bancos',
          moves: [
            { story: '(1) Aportación de Sofía, **$100,000**', side: 'D', amount: 100000, why: 'Entra dinero: debe.' },
            { story: '(2) Cafetera y muebles, **$45,000**', side: 'C', amount: 45000, why: 'Sale dinero: haber.' },
            { story: '(4) Venta de contado, **$30,000**', side: 'D', amount: 30000, why: 'Entra dinero: debe.' },
            { story: '(5) Renta, **$7,000**', side: 'C', amount: 7000, why: 'Sale dinero: haber.' },
            { story: '(6) Pago al proveedor, **$8,000**', side: 'C', amount: 8000, why: 'Sale dinero: haber.' },
            { story: '(7) Sueldo, **$6,000**', side: 'C', amount: 6000, why: 'Sale dinero: haber.' },
          ],
        },
      },
      {
        calc: {
          question: '¿Cuánto suma el **debe** de Bancos?',
          answer: 130000,
          hint: 'Suma solo lo que entró: la aportación y la venta.',
          why: '100,000 + 30,000 = **$130,000**. El haber suma 45,000 + 7,000 + 8,000 + 6,000 = 66,000. Saldo: **$64,000 deudor**.',
        },
      },
      { tip: 'El saldo de Bancos en la T ($64,000) es el mismo que salió con la ecuación. **Dos caminos, el mismo resultado.**' },
    ],
    // Evaluación final
    [
      { text: 'Último paso: el flujo de efectivo de Café Aroma. Empezó en $0 y terminó con $64,000. ¿De dónde salió?' },
      {
        sort: {
          title: '¿Qué actividad es?',
          buckets: ['Operación', 'Inversión', 'Financiamiento'],
          items: [
            { text: 'Sofía aporta $100,000', bucket: 2, why: 'Dinero de la dueña: financiamiento.' },
            { text: 'Cafetera y muebles, $45,000', bucket: 1, why: 'Bienes duraderos: inversión.' },
            { text: 'Cobro de ventas, $30,000', bucket: 0, why: 'Día a día: operación.' },
            { text: 'Pago de renta, sueldo y proveedor', bucket: 0, why: 'Día a día: operación.' },
            { text: 'Si comprara un horno', bucket: 1, why: 'Bien duradero: inversión.' },
            { text: 'Si el banco le prestara dinero', bucket: 2, why: 'Préstamo: financiamiento.' },
          ],
        },
      },
      {
        calc: {
          question: 'Operación: cobró **$30,000** y pagó renta $7,000, proveedor $8,000 y sueldo $6,000. ¿Cuánto dejó la **operación**?',
          answer: 9000,
          hint: '30,000 menos los tres pagos.',
          why: '30,000 − 7,000 − 8,000 − 6,000 = **$9,000**. Inversión −45,000 y financiamiento +100,000. Total: **$64,000**.',
        },
      },
      {
        ask: 'La utilidad fue $8,000, pero la operación dejó $9,000 de efectivo. ¿Por qué no son iguales?',
        options: [
          { text: 'Al proveedor se le pagó $8,000 y lo vendido costó $9,000', ok: true, reply: '¡Exacto! Utilidad y efectivo miden cosas distintas. Ya estás listo para el reto con el **segundo mes** de Café Aroma.' },
          { text: 'Hay un error en las cuentas', reply: 'No hay error: la utilidad usa el **costo** de lo vendido ($9,000) y el efectivo usa lo **pagado** al proveedor ($8,000). Miden cosas distintas.' },
          { text: 'Porque Sofía aportó $100,000', reply: 'La aportación es financiamiento, no entra en la operación. La diferencia es que al proveedor se le pagaron **$8,000** y lo vendido costó **$9,000**.' },
        ],
      },
    ],
  ],
}
