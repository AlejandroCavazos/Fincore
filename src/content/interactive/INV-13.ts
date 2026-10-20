import type { InteractiveLesson } from './types'

export const intINV13: InteractiveLesson = {
  lessonId: 'INV-13',
  sections: [
    // ¿Qué es un derivado?
    [
      { text: 'Marisol importa refacciones en Monterrey 🔧. En 3 meses pagará **USD 20,000** a su proveedor y le preocupa que el dólar suba.' },
      {
        ask: '¿Qué podría hacer **hoy** para no llevarse sorpresas?',
        options: [
          { text: 'Fijar hoy el precio al que comprará esos dólares', ok: true, reply: '¡Eso! Puede pactar hoy con su banco el precio del dólar para dentro de 3 meses.' },
          { text: 'Esperar y ver qué pasa', reply: 'Si el dólar sube, pagará más pesos. Puede **fijar hoy el precio** con un contrato.' },
          { text: 'Nada: el precio del dólar no cambia', reply: 'El tipo de cambio sí se mueve. Por eso le sirve **fijar hoy el precio**.' },
        ],
      },
      { text: 'Ese acuerdo es un **derivado**: un contrato cuyo valor **se deriva** de otra cosa, el **activo subyacente** (aquí, el dólar). El contrato no es el dólar: es un acuerdo sobre el dólar.' },
      {
        text: 'Dos primos muy parecidos:\n🤝 **Forward:** acuerdo privado, a la medida, fuera de bolsa.\n🏛️ **Futuro:** lo mismo, pero **estandarizado** (tamaño, fecha, calidad) y en un mercado organizado; en México, el **MexDer**.\n🛡️ En el futuro, una **cámara de compensación** se pone en medio, pide un **margen** (garantía) y liquida ganancias y pérdidas **cada día**.',
      },
      {
        sort: {
          title: '¿Forward o futuro?',
          buckets: ['Forward', 'Futuro'],
          items: [
            { text: 'Marisol y su banco pactan a su medida la cantidad y la fecha', bucket: 0, why: 'Es privado y a la medida: forward.' },
            { text: 'Se negocia en el MexDer', bucket: 1, why: 'Se negocia en un mercado organizado: futuro.' },
            { text: 'Tamaño y fecha ya vienen fijos', bucket: 1, why: 'Estandarizado: futuro.' },
            { text: 'Una cámara de compensación reduce el riesgo de que el otro no cumpla', bucket: 1, why: 'La cámara de compensación es propia del futuro.' },
            { text: 'Si el otro no cumple, Marisol se queda sin protección', bucket: 0, why: 'El forward tiene **riesgo de contraparte**: no hay cámara en medio.' },
            { text: 'Pide margen y liquida ganancias y pérdidas a diario', bucket: 1, why: 'Margen y liquidación diaria: futuro.' },
          ],
        },
      },
      { text: 'Si te comprometes a **comprar**, tu posición es **larga**: ganas si el precio sube. Si te comprometes a **vender**, es **corta**: ganas si baja.\n🧮 **Larga = (precio final − precio pactado) × tamaño**' },
      {
        calc: {
          question: 'Marisol pactó comprar **USD 20,000** a **$18.00** (tipo de ejemplo). Al vencer, el dólar está en **$19.00**. ¿Cuántos pesos se ahorró frente a comprar ese día?',
          answer: 20000,
          hint: '(19.00 − 18.00) × 20,000.',
          why: 'Diferencia de $1.00 por dólar × 20,000 = **$20,000**. Su posición larga ganó porque el precio subió.',
        },
      },
      {
        ask: '¿Y el banco, que quedó en la posición **corta** (se comprometió a vender)?',
        options: [
          { text: 'Perdió $20,000', ok: true, reply: '¡Exacto! Lo que gana una parte lo pierde la otra.' },
          { text: 'También ganó $20,000', reply: 'No pueden ganar los dos: el banco vendió a $18.00 algo que valía $19.00. **Perdió $20,000**.' },
          { text: 'No le pasa nada', reply: 'Sí le pasa: tuvo que vender a $18.00 dólares que valían $19.00. **Perdió $20,000**.' },
        ],
      },
    ],
    // Opciones: derecho, no obligación
    [
      { text: 'Marisol paga el seguro de su camioneta 🚚. Si no choca, solo perdió lo que pagó. Las **opciones** funcionan parecido.' },
      {
        text: 'Una **opción** da a quien la compra el **derecho, pero no la obligación**, de comprar o vender a un precio fijo (**strike** o precio de ejercicio). Por ese derecho paga una **prima**.\n📈 **Call:** derecho a **comprar**. Conviene si el precio sube arriba del strike.\n📉 **Put:** derecho a **vender**. Conviene si el precio baja del strike.',
      },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Call', 'Derecho a comprar a un precio fijo'],
            ['Put', 'Derecho a vender a un precio fijo'],
            ['Strike', 'El precio fijo pactado'],
            ['Prima', 'Lo que pagas por tener el derecho'],
            ['Vendedor de la opción', 'Cobra la prima y queda obligado si el otro ejerce'],
          ],
        },
      },
      {
        ask: 'Marisol compró un **put** con strike de $80. Al vencer, la acción vale **$90**. ¿Tiene que vender a $80?',
        options: [
          { text: 'No: deja vencer la opción y pierde solo la prima', ok: true, reply: '¡Bien! Quien **compra** la opción tiene el derecho, no la obligación. No le conviene vender a $80 algo que vale $90.' },
          { text: 'Sí: el contrato la obliga', reply: 'Eso pasa en los futuros. En una opción, el comprador **puede no ejercer** y solo pierde la prima.' },
          { text: 'Sí, y además paga la diferencia', reply: 'No. El comprador del put no está obligado: lo deja vencer y pierde **solo la prima**.' },
        ],
      },
      { text: '🧮 **Ganancia del call = máx(precio final − strike, 0) − prima**\n"máx( , 0)" quiere decir: si la resta sale negativa, vale 0, porque no ejerces.' },
      {
        sim: {
          title: 'Call con strike de $100 y prima de $5 (ejemplo)',
          inputs: [{ key: 'p', label: 'Precio de la acción al vencer', min: 80, max: 140, step: 1, value: 95 }],
          outputs: [
            { label: 'Lo que vale ejercer (por acción)', calc: (x) => Math.max(x.p - 100, 0) },
            { label: 'Ganancia neta por acción', calc: (x) => Math.max(x.p - 100, 0) - 5, main: true },
          ],
          goal: {
            text: 'Busca un precio final con el que Marisol **gane dinero neto**.',
            check: (x) => Math.max(x.p - 100, 0) - 5 > 0,
            done: 'Arriba de **$105** (strike + prima) ganas. Abajo, lo más que pierdes es la prima: $5.',
          },
        },
      },
      {
        calc: {
          question: 'Call con strike **$50** y prima **$3**. Al vencer, la acción vale **$58**. Marisol tiene **200** acciones con este call. ¿Cuál es su ganancia neta total?',
          answer: 1000,
          hint: 'Por acción: máx(58 − 50, 0) − 3. Luego × 200.',
          why: '58 − 50 = 8. Menos la prima: 8 − 3 = $5 por acción. × 200 = **$1,000**. Si olvidas la prima, te da $1,600.',
        },
      },
      { tip: '**Comprador:** tiene el derecho; lo más que pierde es la prima. **Vendedor:** cobra la prima, pero queda **obligado** y su pérdida puede ser muy grande.' },
    ],
    // ¿Protegerte o apostar?
    [
      {
        ask: 'Un productor de maíz vende futuros para asegurar el precio de su cosecha 🌽. ¿Para qué lo hace?',
        options: [
          { text: 'Para reducir un riesgo que ya tiene', ok: true, reply: '¡Exacto! Ya tiene la cosecha; el futuro lo protege si el precio baja.' },
          { text: 'Para apostar a que el maíz sube', reply: 'Al **vender** futuros ganaría si el precio **baja**. Y no apuesta: protege una cosecha que ya tiene.' },
          { text: 'Para no tener que vender su cosecha', reply: 'Sí la vende: el futuro solo **fija el precio**. Es para reducir un riesgo que ya tiene.' },
        ],
      },
      { text: '🛡️ **Cubrirse:** usar un derivado para reducir un riesgo que **ya tienes**.\n🎲 **Especular:** tomar un riesgo **nuevo** para intentar ganar con el precio.\n🔄 **Swap:** intercambiar flujos. El más común: cambiar pagos a tasa variable por pagos a tasa fija, para saber cuánto pagarás.' },
      {
        sort: {
          title: '¿Cobertura o especulación?',
          buckets: ['Cobertura', 'Especulación'],
          items: [
            { text: 'Marisol fija el dólar porque pagará USD en 3 meses', bucket: 0, why: 'Ya tiene el riesgo del dólar: se cubre.' },
            { text: 'Alguien sin negocios en dólares compra futuros porque cree que subirá', bucket: 1, why: 'No tenía ese riesgo: lo toma para intentar ganar.' },
            { text: 'Una empresa con crédito a tasa variable contrata un swap para pagar tasa fija', bucket: 0, why: 'Reduce el riesgo de que suba su tasa: cobertura.' },
            { text: 'Un inversionista que ya tiene acciones compra puts para limitar su pérdida', bucket: 0, why: 'Si ya tienes las acciones, el put funciona como seguro.' },
            { text: 'Un operador compra calls de una acción que no tiene, apostando a un alza rápida', bucket: 1, why: 'Riesgo nuevo para ganar con el precio: especulación.' },
          ],
        },
      },
      { text: 'Los derivados tienen **apalancamiento**: con poco dinero (el margen) controlas un valor mucho mayor, el **nocional**.\n🧮 Nocional = unidades × precio pactado\n🔒 Margen = nocional × % de margen\n📊 Rendimiento sobre margen = ganancia ÷ margen × 100' },
      {
        calc: {
          question: 'Marisol abre un futuro largo de **USD 10,000** a **$18.00** (ejemplo). ¿Cuál es el **nocional**?',
          answer: 180000,
          hint: '10,000 × 18.00.',
          why: '10,000 × 18 = **$180,000**: es todo el valor que controla.',
        },
      },
      {
        calc: {
          question: 'El margen es de **10 %** del nocional. ¿Cuánto deposita de garantía?',
          answer: 18000,
          hint: '180,000 × 0.10.',
          why: '180,000 × 10 % = **$18,000**. Con eso controla $180,000.',
        },
      },
      {
        calc: {
          question: 'El dólar sube a **$18.36** y gana (18.36 − 18.00) × 10,000 = $3,600. ¿Cuál es su rendimiento sobre el margen, en porcentaje?',
          answer: 20,
          unit: '%',
          hint: '3,600 ÷ 18,000 × 100.',
          why: '3,600 ÷ 18,000 = 0.20 → **20 %**, aunque el dólar solo subió 2 %. Si lo mides contra el nocional (2 %), te equivocas: se mide contra el **margen**.',
        },
      },
      {
        sim: {
          title: 'El apalancamiento corta en los dos sentidos',
          inputs: [
            { key: 'm', label: '% de margen', min: 5, max: 20, step: 1, value: 10 },
            { key: 'c', label: 'Cambio del precio (%)', min: -10, max: 10, step: 1, value: 0 },
          ],
          outputs: [
            { label: 'Veces de apalancamiento', calc: (x) => Math.round((100 / x.m) * 10) / 10, unit: 'veces' },
            { label: 'Rendimiento sobre tu margen', calc: (x) => Math.round((x.c / x.m) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Encuentra un caso en que Marisol **pierda todo su margen** (−100 % o peor).',
            check: (x) => x.c / x.m <= -1,
            done: 'Con poco margen, una caída pequeña borra la garantía. Entonces piden depositar más (**llamada de margen**) o cierran la posición. Multiplica ganancias **y pérdidas**.',
          },
        },
      },
    ],
  ],
}
