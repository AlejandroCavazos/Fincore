import type { InteractiveLesson } from './types'

export const intAUD08: InteractiveLesson = {
  lessonId: 'AUD-08',
  sections: [
    // ¿Qué afirman los números?
    [
      { text: 'Muebles Robles 🪑 presenta su balance. Dice: «Clientes **$500,000**». Sofía, contadora pública **independiente**, lo va a auditar.' },
      {
        ask: 'Al escribir «Clientes $500,000», ¿qué afirma la empresa sin decirlo?',
        options: [
          { text: 'Que esos clientes existen y se les va a cobrar', ok: true, reply: '¡Eso! Cada cifra trae afirmaciones escondidas. Sofía las revisa una por una.' },
          { text: 'Nada, es solo un número', reply: 'Cada cifra afirma algo: que esos clientes **existen**, que son todos y que se podrán cobrar.' },
          { text: 'Que ya cobró los $500,000', reply: 'Si ya los hubiera cobrado, estarían en Bancos, no en Clientes. Afirma que esos clientes **existen** y se les va a cobrar.' },
        ],
      },
      {
        text: 'Esas afirmaciones se llaman **aseveraciones**. Las clave:\n✅ **Existencia:** lo registrado sí existe o sí pasó.\n🧩 **Integridad:** no falta nada por registrar.\n💲 **Valuación:** los montos son correctos.\n📅 **Corte:** cada operación quedó en el periodo correcto.',
      },
      { text: 'Hay dos más: **derechos** (¿los activos son de la empresa?) y **presentación** (¿se clasifica y revela bien?).' },
      {
        match: {
          title: 'Une cada aseveración con la duda de Sofía',
          pairs: [
            ['Existencia', '¿Estos clientes de verdad existen?'],
            ['Integridad', '¿Falta alguna deuda por anotar?'],
            ['Valuación', '¿De verdad se podrá cobrar todo eso?'],
            ['Corte', '¿Esta venta es de diciembre o de enero?'],
            ['Derechos', '¿Esta mercancía es de Muebles Robles?'],
          ],
        },
      },
      {
        sort: {
          title: 'Inventario de $1 millón: ¿qué prueba cada cosa?',
          buckets: ['Existencia', 'Valuación', 'Derechos'],
          items: [
            { text: 'Sofía observa el conteo físico en la bodega', bucket: 0, why: 'Ver la mercancía contesta: ¿existe?' },
            { text: 'Compara el costo con precios de venta recientes', bucket: 1, why: 'Contesta: ¿está bien valuado?' },
            { text: 'Revisa facturas de compra y contratos de la mercancía', bucket: 2, why: 'Contesta: ¿es de la empresa o es de otro, por ejemplo en consignación?' },
            { text: 'Hace conteos de prueba de algunas cajas', bucket: 0, why: 'Contar confirma que lo registrado sí está.' },
          ],
        },
      },
      {
        ask: 'Sofía vio **300 sillas** en la bodega. ¿Con eso ya sabe que son de Muebles Robles y cuánto valen?',
        options: [
          { text: 'No: solo prueba que existen', ok: true, reply: '¡Bien! Podrían ser de otro o estar dañadas. Para derechos y valuación hacen falta otras pruebas.' },
          { text: 'Sí, si las vio, todo está probado', reply: 'Verlas prueba **existencia**. Podrían ser de otro (consignación) o valer menos. Una prueba no cubre todo.' },
          { text: 'Solo le falta contarlas otra vez', reply: 'Contar de nuevo vuelve a probar **existencia**. Para saber de quién son y cuánto valen necesita otras pruebas.' },
        ],
      },
    ],
    // ¿Cómo se prueba cada cifra?
    [
      {
        text: 'Para cada cuenta, Sofía elige la prueba que contesta su duda:\n🏦 **Bancos:** confirma el saldo con el banco.\n🧾 **Clientes:** les pide confirmar cuánto deben.\n📉 **Pasivos:** busca deudas que no se anotaron.\n📅 **Ventas:** prueba de corte.',
      },
      {
        ask: 'En los **pasivos** (lo que se debe), ¿qué riesgo preocupa más?',
        options: [
          { text: 'Que falten deudas por registrar', ok: true, reply: '¡Exacto! Omitir deudas hace ver mejores las cifras. Por eso Sofía revisa facturas y pagos **después del cierre**: busca **integridad**.' },
          { text: 'Que haya deudas de más', reply: 'Puede pasar, pero el riesgo típico es que **falten**: omitirlas hace ver mejor a la empresa. Eso es **integridad**.' },
          { text: 'Que estén en otra moneda', reply: 'Eso no es lo central. El riesgo típico es que **falten** deudas: se prueba la **integridad**.' },
        ],
      },
      {
        sort: {
          title: '¿Qué aseveración prueba?',
          buckets: ['Existencia', 'Integridad', 'Corte'],
          items: [
            { text: 'Enviar confirmaciones de saldo a una muestra de clientes', bucket: 0, why: 'El cliente confirma que la deuda registrada sí existe.' },
            { text: 'Revisar facturas de enero por servicios de diciembre', bucket: 1, why: 'Busca deudas del año que faltan: integridad.' },
            { text: 'Comparar fechas de entrega de las últimas ventas de diciembre y las primeras de enero', bucket: 2, why: 'Revisa que cada venta quede en su mes: corte.' },
            { text: 'Confirmar el saldo directamente con el banco', bucket: 0, why: 'El banco confirma que el dinero sí está.' },
            { text: 'Revisar pagos hechos en enero de deudas de diciembre', bucket: 1, why: 'Si la deuda era de diciembre y no estaba anotada, faltaba: integridad.' },
          ],
        },
      },
      { text: 'La **conciliación bancaria** explica por qué el saldo del banco y el de los libros no coinciden: al saldo del banco se le **suman** los depósitos en tránsito (el banco aún no los ve) y se le **restan** los cheques en circulación (aún no se cobran).' },
      {
        calc: {
          question: 'El estado de cuenta de Muebles Robles dice **$80,000**. Hay un depósito en tránsito de **$12,000** y cheques en circulación por **$20,000**. ¿Cuál es el **saldo conciliado**?',
          answer: 72000,
          hint: 'Banco + depósitos en tránsito − cheques en circulación.',
          why: '$80,000 + $12,000 − $20,000 = **$72,000**. Restar el depósito y sumar los cheques, al revés, es el error típico.',
        },
      },
      {
        calc: {
          question: 'Los libros de la empresa dicen **$75,000** en Bancos. Contra el saldo conciliado de $72,000, ¿cuánto hay **sin explicar**?',
          answer: 3000,
          hint: 'Libros − saldo conciliado.',
          why: '$75,000 − $72,000 = **$3,000** de más en libros. Sofía lo investiga; por ejemplo, podría ser una comisión bancaria no registrada.',
        },
      },
    ],
    // ¿Y si el auditor halla errores?
    [
      { text: 'En enero llega un recibo de luz de **diciembre** por **$4,500** que nadie registró. Sofía propone un **ajuste de auditoría**: el asiento que corrige el error.' },
      {
        entry: {
          title: 'Arma el ajuste al 31 de diciembre',
          story: 'Recibo de luz de diciembre por **$4,500**, sin registrar y pagado hasta enero.',
          lines: [
            { account: 'Luz, agua y teléfono', side: 'D', amount: 4500, why: 'El gasto de diciembre faltaba: el cargo lo registra.' },
            { account: 'Acreedores diversos', side: 'C', amount: 4500, why: 'Al cierre se debía: el abono registra la deuda. No es Bancos, porque se pagó hasta enero.' },
          ],
        },
      },
      { text: 'Todos los errores van a una **cédula de diferencias**. Unos **inflan** la utilidad y otros la **reducen**; se compensan para ver el efecto neto.' },
      {
        rush: {
          title: '¿Infla o reduce la utilidad?',
          seconds: 40,
          labels: ['La infla', 'La reduce'],
          items: [
            { text: 'Ventas registradas de más', ans: 0 },
            { text: 'Un gasto que no se registró', ans: 0 },
            { text: 'Un gasto registrado dos veces', ans: 1 },
            { text: 'Una venta que faltó registrar', ans: 1 },
            { text: 'Un recibo de luz de diciembre olvidado', ans: 0 },
          ],
        },
      },
      {
        calc: {
          question: 'Diferencias de Muebles Robles: ventas de más **$40,000**, gastos omitidos **$25,000** y un gasto duplicado **$15,000**. ¿En cuánto está **inflada** la utilidad, en neto?',
          answer: 50000,
          hint: 'Suma lo que infla y resta lo que reduce.',
          why: '$40,000 + $25,000 − $15,000 = **$50,000**. Sumar las tres ($80,000) es el error típico: el gasto duplicado va en sentido contrario.',
        },
      },
      { text: 'Ese neto se compara con la **materialidad**: el monto a partir del cual un error podría cambiar la decisión de quien lee los estados.' },
      {
        ask: 'La materialidad es **$100,000** y la empresa no corrige los **$50,000**. ¿Qué pasa?',
        options: [
          { text: 'En principio no cambia la opinión, pero Sofía lo comunica a la dirección', ok: true, reply: '¡Bien! Es menor que la materialidad. Si fuera material, sí afectaría el tipo de opinión.' },
          { text: 'La opinión cambia sí o sí', reply: 'Solo las diferencias **materiales** no corregidas afectan la opinión. $50,000 es menor que $100,000.' },
          { text: 'Se olvida, nadie se entera', reply: 'Aunque no sea material, se **comunica a la dirección**.' },
        ],
      },
    ],
  ],
}
