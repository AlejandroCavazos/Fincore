import type { InteractiveLesson } from './types'

export const intFIN06: InteractiveLesson = {
  lessonId: 'FIN-06',
  sections: [
    // El colchón del día a día
    [
      { text: 'Beto tiene una tienda de ropa 👕. Vende bien, pero cada quincena se pregunta: "¿Me alcanzará para pagar?".' },
      { text: 'El **capital de trabajo** son los recursos de corto plazo para operar: efectivo, clientes por cobrar e inventario, menos lo que debes pagar pronto (proveedores, sueldos).\n**Capital de trabajo neto** = activo circulante − pasivo circulante.' },
      {
        sort: {
          title: '¿Suma o resta en el capital de trabajo de Beto?',
          buckets: ['Activo circulante (suma)', 'Pasivo circulante (resta)'],
          items: [
            { text: 'Efectivo en la caja', bucket: 0, why: 'Es dinero disponible: activo circulante.' },
            { text: 'Ropa en la bodega', bucket: 0, why: 'El inventario es activo circulante.' },
            { text: 'Clientes que le deben', bucket: 0, why: 'Cuentas por cobrar: activo circulante.' },
            { text: 'Lo que debe al proveedor de playeras', bucket: 1, why: 'Lo que paga pronto: pasivo circulante.' },
            { text: 'Sueldos por pagar', bucket: 1, why: 'Se pagan pronto: pasivo circulante.' },
          ],
        },
      },
      {
        calc: {
          question: 'Beto tiene activo circulante de **$500,000** y pasivo circulante de **$320,000**. ¿Cuál es su capital de trabajo neto?',
          answer: 180000,
          hint: 'Activo circulante − pasivo circulante.',
          why: '500,000 − 320,000 = **$180,000** de colchón para operar.',
        },
      },
      {
        ask: 'El capital de trabajo de Beto es positivo. ¿Ya nunca tendrá problemas para pagar?',
        options: [
          { text: 'Sí, nunca', reply: 'No es garantía. Ese colchón puede ser ropa que no se vende o clientes que no pagan.' },
          { text: 'No: puede ser ropa que no se vende o clientes que no pagan', ok: true, reply: '¡Exacto! Es un colchón, pero si está "dormido" no sirve para pagar a tiempo.' },
          { text: 'Solo tendría problemas si vende mucho', reply: 'Vender mucho no es el problema. El colchón puede estar en inventario que no se vende o en clientes que no pagan.' },
        ],
      },
      { tip: '**Positivo:** hay colchón. **Negativo:** dependes de cobrar o vender muy rápido, o de financiamiento. Y **más no siempre es mejor**: puede ser dinero "dormido" que no rinde.' },
    ],
    // Los días del dinero atrapado
    [
      { text: 'Beto compra ropa, la tiene unos días en el aparador, la vende a crédito y después cobra. Mientras tanto, también debe pagarle al proveedor ⏳.' },
      {
        ask: 'Mientras la ropa espera en el aparador, ¿qué pasa con el dinero que Beto pagó por ella?',
        options: [
          { text: 'Está atrapado: aún no regresa a la caja', ok: true, reply: '¡Eso! Y sigue atrapado hasta que el cliente pague.' },
          { text: 'Ya regresó a la caja', reply: 'Todavía no: regresa hasta que vende **y cobra**. Mientras, está atrapado.' },
          { text: 'Está ganando intereses', reply: 'La ropa en el aparador no gana intereses. Ese dinero está **atrapado** en la operación.' },
        ],
      },
      { text: 'El **ciclo de conversión del efectivo (CCE)** mide cuántos días está atrapado el dinero:\n📦 + días de inventario (cuánto tarda en venderse)\n🧾 + días de cobro (cuánto tardan en pagar los clientes)\n🤝 − días de pago (lo que el proveedor te da es financiamiento gratuito)' },
      {
        order: {
          title: 'Arma la fórmula del CCE',
          steps: ['CCE =', 'días de inventario', '+ días de cobro a clientes', '− días de pago a proveedores'],
          done: '¡Lista! Entre más corto el ciclo, menos dinero necesitas para operar.',
        },
      },
      {
        calc: {
          question: 'La ropa de Beto tarda **60 días** en venderse, sus clientes pagan en **45 días** y él paga al proveedor en **30 días**. ¿Cuántos días dura su ciclo?',
          answer: 75,
          unit: 'días',
          hint: '60 + 45 − 30.',
          why: '60 + 45 − 30 = **75 días** que Beto debe financiar con su propio dinero o con préstamos.',
        },
      },
      {
        sim: {
          title: 'El ciclo de la tienda de Beto',
          inputs: [
            { key: 'inv', label: 'Días de inventario', min: 30, max: 90, step: 5, value: 60 },
            { key: 'cob', label: 'Días de cobro', min: 15, max: 60, step: 5, value: 45 },
            { key: 'pag', label: 'Días de pago a proveedores', min: 15, max: 45, step: 5, value: 30 },
          ],
          outputs: [{ label: 'Ciclo de conversión del efectivo', calc: (x) => x.inv + x.cob - x.pag, main: true, unit: 'días' }],
          goal: {
            text: 'Acorta el ciclo a **40 días o menos**.',
            check: (x) => x.inv + x.cob - x.pag <= 40,
            done: 'Menos días de inventario y de cobro, o más días para pagar, acortan el ciclo.',
          },
        },
      },
      {
        ask: '¿Cuál de estas acciones **acorta** el ciclo de Beto?',
        options: [
          { text: 'Negociar con el proveedor pagar a 45 días en lugar de 30', ok: true, reply: '¡Bien! Más días de pago se restan: el ciclo baja 15 días.' },
          { text: 'Dar a los clientes 60 días para pagar en lugar de 30', reply: 'Eso sube los días de cobro y **alarga** el ciclo.' },
          { text: 'Comprar el doble de ropa "por si acaso"', reply: 'Más inventario tarda más en venderse: **alarga** el ciclo.' },
        ],
      },
    ],
    // Palancas para liberar efectivo
    [
      { text: 'Beto vende bien, pero a fin de mes le falta efectivo para la nómina 😟. Cada parte del ciclo tiene **palancas**:' },
      { text: '🧾 **Cobranza:** decidir a quién dar crédito, recordar pagos antes del vencimiento, descuento por pronto pago.\n📦 **Inventario:** comprar según lo que de verdad se vende y liquidar lo que no se mueve.\n🤝 **Proveedores:** negociar plazos más largos sin dañar la relación.\n💵 **Efectivo:** presupuesto de caja semanal y saldo mínimo para imprevistos.' },
      {
        match: {
          title: 'Une cada palanca con una acción de Beto',
          pairs: [
            ['Cobranza', 'Recordar el pago al cliente antes del vencimiento'],
            ['Inventario', 'Liquidar las chamarras que no se venden'],
            ['Proveedores', 'Negociar pagar a más días'],
            ['Efectivo', 'Hacer un presupuesto de caja semanal'],
          ],
        },
      },
      {
        multi: {
          title: '¿Qué le ayuda a Beto a liberar efectivo? Marca todas',
          items: [
            { text: 'Enviar recordatorios de pago antes del vencimiento', ok: true },
            { text: 'Liquidar con descuento la ropa que casi no se vende', ok: true },
            { text: 'Dar más crédito a clientes que ya pagan tarde', ok: false },
            { text: 'Hacer un presupuesto de efectivo semanal', ok: true },
            { text: 'Comprar ropa para seis meses de una vez', ok: false },
          ],
          why: 'Cobrar antes, mover el inventario y planear el efectivo liberan dinero. Dar más crédito a quien paga tarde y comprar de más lo **atrapan**.',
        },
      },
      {
        calc: {
          question: 'Beto vende a crédito **$2,000 al día** (ejemplo). Si baja sus días de cobro de **45 a 30**, ¿cuánto dinero libera?',
          answer: 30000,
          hint: 'Días que baja × ventas a crédito por día: (45 − 30) × 2,000.',
          why: '15 días × $2,000 = **$30,000** que ya no esperan en manos de los clientes.',
        },
      },
      {
        ask: 'Beto piensa tener muchísimo efectivo e inventario "por si acaso". ¿Qué pasa?',
        options: [
          { text: 'Le da seguridad, pero rinde poco', ok: true, reply: '¡Exacto! Es el equilibrio entre liquidez y rentabilidad.' },
          { text: 'Siempre es lo mejor', reply: 'Da seguridad, pero ese dinero rinde poco. Hay que buscar el **equilibrio**.' },
          { text: 'Hace que gane más', reply: 'Al revés: el dinero parado rinde poco. Muy poco tampoco sirve: te puedes quedar sin mercancía. Busca el **equilibrio**.' },
        ],
      },
      { tip: 'El reto es el **equilibrio entre liquidez y rentabilidad**: ni tanto que el dinero duerma, ni tan poco que no alcance para pagar.' },
    ],
  ],
}
