import type { InteractiveLesson } from './types'

export const intAUD08: InteractiveLesson = {
  lessonId: 'AUD-08',
  sections: [
    // Objetivo y aseveraciones
    [
      { text: 'En una **auditoría de estados financieros**, un contador público **independiente** (externo) opina si los estados presentan **razonablemente** la situación de la empresa conforme al marco aplicable (en México, normalmente las **NIF**).' },
      {
        ask: '¿Qué significa que los estados estén **razonablemente** presentados?',
        options: [
          { text: 'Que están perfectos hasta el último peso', reply: 'No se busca la perfección: se busca que no haya errores importantes.' },
          { text: 'Que no tienen errores importantes', ok: true, reply: '¡Exacto! Razonable = sin errores importantes, no perfecto al último peso.' },
          { text: 'Que la empresa ganó dinero', reply: 'Una empresa con pérdidas también puede tener estados razonables.' },
        ],
      },
      { text: 'Cuando el balance dice «Clientes $500,000», la empresa está **afirmando** cosas en silencio. Esas afirmaciones son las **aseveraciones**.' },
      {
        match: {
          title: 'Une cada aseveración con su pregunta',
          pairs: [
            ['Existencia u ocurrencia', '¿Lo registrado sí existe o sí pasó?'],
            ['Integridad', '¿No falta nada por registrar?'],
            ['Valuación y exactitud', '¿Los montos son correctos?'],
            ['Derechos y obligaciones', '¿Los activos y pasivos son de la empresa?'],
            ['Corte', '¿Cada operación quedó en el periodo correcto?'],
            ['Presentación', '¿Se clasifica y revela bien?'],
          ],
        },
      },
      {
        sort: {
          title: 'Inventarios de $1 millón: ¿qué aseveración prueba?',
          buckets: ['Existencia', 'Valuación'],
          items: [
            { text: 'El auditor observa el conteo físico en la bodega', bucket: 0, why: 'Ver la mercancía contesta: ¿existe?' },
            { text: 'Compara el costo con precios de venta recientes', bucket: 1, why: 'Contesta: ¿está bien valuado?' },
            { text: 'Hace conteos de prueba de algunas cajas', bucket: 0, why: 'Contar confirma que lo registrado sí está.' },
          ],
        },
      },
      { tip: 'Las pruebas sobre las cifras se llaman **procedimientos sustantivos**. Cada una busca evidencia sobre una aseveración.' },
    ],
    // Pruebas típicas por rubro
    [
      { text: 'Para cada cuenta el auditor elige la prueba que mejor contesta su duda. ¿El dinero existe? Le pregunta al banco. ¿Los clientes deben eso? Les pregunta a los clientes.' },
      {
        sort: {
          title: '¿De qué rubro es cada prueba?',
          buckets: ['Efectivo y bancos', 'Clientes', 'Inventarios', 'Pasivos', 'Ventas'],
          items: [
            { text: 'Confirmar saldos directamente con el banco', bucket: 0, why: 'El banco contesta al auditor cuánto hay.' },
            { text: 'Enviar confirmaciones a una muestra de clientes (NIA 505)', bucket: 1, why: 'Los clientes responden directo al auditor cuánto deben.' },
            { text: 'Revisar la antigüedad de saldos y los cobros posteriores', bucket: 1, why: 'Sirve para juzgar si la estimación de incobrables alcanza.' },
            { text: 'Observar el conteo físico (NIA 501)', bucket: 2, why: 'Ver la mercancía en persona.' },
            { text: 'Buscar facturas recibidas y pagos hechos después del cierre', bucket: 3, why: 'Es la búsqueda de pasivos no registrados: el riesgo es que falten.' },
            { text: 'Comparar la fecha de las últimas facturas del año con la fecha real de entrega', bucket: 4, why: 'Es la prueba de corte de ventas.' },
          ],
        },
      },
      { text: 'Una **conciliación bancaria** explica por qué el saldo del banco y el de tus libros no son iguales. Ordena cómo se arma:' },
      {
        order: {
          title: 'Ordena los pasos de la conciliación',
          steps: [
            'Parte del saldo del estado de cuenta del banco',
            'Suma los depósitos en tránsito',
            'Resta los cheques en circulación: es el saldo conciliado',
            'Compara el saldo conciliado contra el saldo en libros e investiga la diferencia',
          ],
          done: 'Depósitos en tránsito se **suman**; cheques en circulación se **restan**. Hacerlo al revés es el error típico.',
        },
      },
      {
        calc: {
          question: 'Estado de cuenta de la tiendita: **$50,000**. Depósito en tránsito: **$8,000**. Cheques en circulación: **$5,000**. ¿Cuál es el **saldo conciliado**?',
          answer: 53000,
          hint: 'banco + depósitos en tránsito − cheques en circulación.',
          why: '$50,000 + $8,000 − $5,000 = **$53,000**. Si los libros dicen otra cifra, la diferencia se investiga.',
        },
      },
      {
        ask: 'Una factura del **31 de diciembre** amparó mercancía que salió el **3 de enero**. ¿De qué mes es la venta?',
        options: [
          { text: 'De diciembre, por la fecha de la factura', reply: 'La prueba de corte mira la **entrega real**, no solo la fecha de la factura.' },
          { text: 'De enero, porque se entregó en enero', ok: true, reply: '¡Correcto! Es venta de enero. Por eso se hacen pruebas de corte al cierre.' },
        ],
      },
      { tip: 'En pasivos el riesgo típico es que **falten**: subestimarlos hace ver mejor las cifras.' },
    ],
    // Diferencias, ajustes y materialidad
    [
      { text: 'Si el auditor encuentra un error, propone un **ajuste de auditoría**: un asiento que la empresa debería registrar para corregir.' },
      {
        entry: {
          title: 'Arma el ajuste',
          story: 'En enero llega un recibo de luz por **$4,500** del consumo de **diciembre** que no se registró. Haz el ajuste al 31 de diciembre.',
          lines: [
            { account: 'Luz, agua y teléfono', side: 'D', amount: 4500, why: 'El gasto de diciembre faltaba: el cargo lo aumenta.' },
            { account: 'Acreedores diversos', side: 'C', amount: 4500, why: 'Al cierre se debía y no se había pagado: el abono aumenta la deuda. No es Bancos.' },
          ],
        },
      },
      { text: 'Todas las diferencias van a una **cédula de diferencias** (NIA 450). Unas **inflan** la utilidad y otras la **reducen**.' },
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
            { text: 'Una factura de compra de gasto duplicada', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Materialidad: **$100,000**. Diferencias: ingresos de más **$40,000**, gastos omitidos **$25,000** y un gasto duplicado **$15,000**. ¿Cuál es el **efecto neto** en la utilidad?',
          answer: 50000,
          hint: 'suma lo que infla y resta lo que reduce.',
          why: '$40,000 + $25,000 − $15,000 = **$50,000** de sobrestimación. Es menor que $100,000: en conjunto no es material, pero se comunica a la dirección.',
        },
      },
      { tip: 'La **materialidad** es el monto a partir del cual un error podría cambiar la decisión de quien lee los estados. Las diferencias no corregidas y materiales afectan el tipo de opinión.' },
    ],
  ],
}
