import type { ChatLesson } from './types'

export const chatL116: ChatLesson = {
  lessonId: 'L1-16',
  character: { name: 'Don Memo', emoji: '🧔', role: 'Dueño de una carpintería' },
  sections: [
    // 1. Los 3 tipos de póliza
    [
      { say: '¡Qué tal! Soy Don Memo, tengo una carpintería. Hoy pasaron 3 cosas y no sé cómo anotarlas 😅' },
      { say: 'En contabilidad cada operación se anota en una **póliza**: la hoja con sus cargos y abonos.' },
      { say: 'Hay 3 tipos y se escogen con una sola pregunta: **¿se mueve dinero?**' },
      {
        ask: 'Primero: un cliente me pagó una mesa en efectivo. ¿Qué póliza es?',
        options: [
          { text: 'Ingreso', ok: true, reply: '¡Exacto! Entró dinero a la caja, entonces es póliza de **Ingreso**.' },
          { text: 'Egreso', reply: 'Mmm, no. Egreso es cuando **sale** dinero. Aquí me entró, así que es de **Ingreso**.' },
          { text: 'Diario', reply: 'Casi. Diario es cuando no se mueve dinero. Aquí sí entró a la caja: es de **Ingreso**.' },
        ],
      },
      {
        ask: 'Luego pagué la luz con transferencia. ¿Y ahora?',
        options: [
          { text: 'Egreso', ok: true, reply: '¡Eso! Salió dinero del banco: póliza de **Egreso**.' },
          { text: 'Ingreso', reply: 'No, al revés: el dinero **salió** de mi banco. Es de **Egreso**.' },
          { text: 'Diario', reply: 'Sí se movió dinero, salió del banco. Por eso es de **Egreso**.' },
        ],
      },
      {
        ask: 'Y vendí un librero, pero me lo pagan el mes que entra.',
        options: [
          { text: 'Diario', ok: true, reply: '¡Muy bien! Todavía no se mueve dinero, así que va en póliza de **Diario**.' },
          { text: 'Ingreso', reply: 'Todavía no me pagan, así que no ha entrado dinero. Va en póliza de **Diario**.' },
        ],
      },
      { tip: 'Entra dinero → **Ingreso**. Sale dinero → **Egreso**. No se mueve dinero → **Diario**.' },
    ],
    // 2. Cómo leer una factura (CFDI)
    [
      { say: 'Ahora me llegó una factura y me revuelvo con tantos datos 🤯' },
      { say: 'La factura electrónica se llama **CFDI**. No hay que leerla toda, solo 5 cosas.' },
      {
        ask: 'En esta factura el **emisor** soy yo, Carpintería Memo. ¿Qué significa?',
        options: [
          { text: 'Que yo vendí', ok: true, reply: '¡Así es! Si tú la emites, es una **venta tuya**. Si tú eres el receptor, es una compra o un gasto.' },
          { text: 'Que yo compré', reply: 'Al revés: quien emite la factura es quien **vende**. Si el receptor eres tú, entonces compraste.' },
        ],
      },
      { say: 'Los **conceptos** dicen qué se vendió o compró, y eso te dice qué cuenta usar: madera para vender va a Inventarios y la luz a Gastos.' },
      { say: 'El **subtotal** es el precio sin IVA y el **total** es lo que de verdad se paga.' },
      {
        ask: 'Dice "Método de pago: **PPD**". ¿Qué quiere decir?',
        options: [
          { text: 'Que se pagará después', ok: true, reply: '¡Eso! PPD = se paga después. **PUE** = ya se pagó completo.' },
          { text: 'Que ya se pagó', reply: 'Ese es PUE (pago en una sola exhibición). **PPD** quiere decir que se pagará después.' },
        ],
      },
      { tip: 'Fíjate en 5 datos: **emisor/receptor**, **conceptos**, **subtotal, IVA y total**, **método** (PUE ya pagado, PPD después) y **forma de pago** (01 efectivo = Caja; 03 transferencia o 04 tarjeta = Bancos).' },
    ],
    // 3. IVA trasladado e IVA acreditable
    [
      { say: 'Vendí una mesa en **$1,160** con IVA incluido, y el SAT dice que no todo es mío 🤔' },
      {
        ask: '¿Cuánto de esos $1,160 crees que es IVA?',
        options: [
          { text: '$160', ok: true, reply: '¡Eso! El precio ya traía el 16% adentro: **$1,000** son míos y **$160** son del SAT.' },
          { text: '$185.60', reply: 'Ese sería el 16% de $1,160, pero el IVA ya venía incluido. El precio sin IVA es $1,000, y 16% de $1,000 = **$160**.' },
          { text: '$116', reply: 'Eso sería el 10%. El IVA general es 16% sobre el precio sin IVA: 16% de $1,000 = **$160**.' },
        ],
      },
      { say: 'Ese IVA **no es ganancia**: yo solo se lo cobro al cliente y se lo entrego al SAT. Se llama **IVA trasladado** y es una deuda.' },
      { say: 'Pero cuando yo compro madera, también **pago** IVA. Ese se llama **IVA acreditable** y lo puedo restar.' },
      {
        ask: 'Este mes cobré $1,200 de IVA en ventas y pagué $700 de IVA en compras. ¿Cuánto le pago al SAT?',
        options: [
          { text: '$500', ok: true, reply: '¡Exacto! 1,200 − 700 = **$500**. Solo se paga la diferencia.' },
          { text: '$1,200', reply: 'Casi, pero puedes restar el IVA que pagaste en tus compras: 1,200 − 700 = **$500**.' },
          { text: '$1,900', reply: 'No se suman, se restan: lo que cobraste menos lo que pagaste. 1,200 − 700 = **$500**.' },
        ],
      },
      { tip: 'IVA **trasladado** = el que cobras (le debes al SAT, se abona). IVA **acreditable** = el que pagas (lo restas, se carga). Pagas solo la **diferencia**.' },
    ],
    // 4. Tu primera póliza con factura
    [
      { say: 'Ahora sí, vamos a registrar una de verdad. Vendí un servicio en **$1,000 + IVA** y me pagaron por transferencia.' },
      {
        ask: 'Paso 1: ¿entra o sale dinero? ¿A qué cuenta va y por cuánto?',
        options: [
          { text: 'Cargo a Bancos $1,160', ok: true, reply: '¡Bien! Entró el total al banco: póliza de Ingreso con **cargo a Bancos $1,160**.' },
          { text: 'Cargo a Bancos $1,000', reply: 'Al banco entra **todo** lo que te pagaron, IVA incluido: $1,160.' },
          { text: 'Abono a Bancos $1,160', reply: 'Cuando el banco **aumenta** es cargo, no abono. Entonces: cargo a Bancos $1,160.' },
        ],
      },
      {
        ask: 'Paso 2: ¿por cuánto va la venta (Ingresos por servicios)?',
        options: [
          { text: '$1,000, sin IVA', ok: true, reply: '¡Eso! La venta va por el **subtotal**: abono a Ingresos por servicios $1,000.' },
          { text: '$1,160, con IVA', reply: 'Ojo, error muy común: el IVA no es tu venta. La venta va por el subtotal, **$1,000**.' },
        ],
      },
      { say: 'Paso 3: el IVA va en su propia cuenta. Como lo cobré, es **abono a IVA trasladado $160**.' },
      {
        ask: 'Paso 4: revisa que cuadre. ¿Cargos = abonos?',
        options: [
          { text: 'Sí: 1,160 = 1,000 + 160', ok: true, reply: '¡Cuadra! Ya hiciste tu primera póliza con factura 🎉' },
          { text: 'No cuadra', reply: 'Revisa: cargos $1,160; abonos $1,000 + $160 = $1,160. Sí cuadra 😉' },
        ],
      },
      { tip: 'Siempre en este orden: **1)** ¿entra o sale dinero? **2)** ¿qué recibes o entregas? (por el subtotal) **3)** el IVA en su cuenta **4)** cargos = abonos.' },
      { say: 'Cuando termines, practica en **Laboratorio contable → Práctica → Básico**. Ahí te llegan facturas como esta.' },
    ],
  ],
}
