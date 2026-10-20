import type { InteractiveLesson } from './types'

export const intFIN12: InteractiveLesson = {
  lessonId: 'FIN-12',
  sections: [
    // ¿Pido prestado o busco socio?
    [
      { text: 'Jorge tiene una purificadora de agua en Mérida 💧. Quiere una nueva ruta de reparto y le faltan $400,000. ¿Pide prestado o busca un socio?\nEs como comprar una casa 🏠: una parte la pones tú (enganche) y otra la pides al banco (hipoteca). La proporción de **deuda** y **capital propio** de una empresa es su **estructura de capital**.' },
      {
        text: '🏦 **Deuda:** pagas intereses y devuelves en fechas fijas. No cedes el control. (Créditos, bonos o certificados bursátiles, arrendamientos.)\n👥 **Capital propio:** sin fecha de pago, pero los nuevos socios comparten ganancias y control. (Aportaciones, **utilidades retenidas**: ganancias que no se reparten, y acciones.)',
      },
      {
        ask: 'Si Jorge pide el crédito al banco, ¿a qué se compromete?',
        options: [
          { text: 'A pagar intereses y devolver en fechas fijas', ok: true, reply: '¡Eso! Y a cambio no comparte el control de su purificadora.' },
          { text: 'A darle al banco parte de las ganancias y del control', reply: 'Eso pasa con un **socio**. Con el banco se compromete a **pagar intereses y devolver en fechas fijas**.' },
          { text: 'A nada, si le va mal no paga', reply: 'La deuda se paga aunque le vaya mal: **intereses y fechas fijas**.' },
        ],
      },
      {
        sort: {
          title: '¿Deuda o capital propio?',
          buckets: ['🏦 Deuda', '👥 Capital propio'],
          items: [
            { text: 'Crédito bancario a 3 años', bucket: 0, why: 'Hay que devolverlo con intereses.' },
            { text: 'Ganancias del año que Jorge no se repartió', bucket: 1, why: 'Son utilidades retenidas: dinero de los dueños.' },
            { text: 'Arrendamiento financiero de una camioneta', bucket: 0, why: 'Pagos fijos obligatorios: es deuda.' },
            { text: 'Su hermana aporta dinero a cambio de una parte del negocio', bucket: 1, why: 'Es una nueva socia: capital propio.' },
            { text: 'Certificados bursátiles que pagan intereses', bucket: 0, why: 'Pagan intereses y tienen fecha: deuda.' },
            { text: 'Venta de acciones en la bolsa', bucket: 1, why: 'Los compradores se vuelven dueños: capital propio.' },
          ],
        },
      },
      { text: 'Además, el dinero puede ser **interno** (lo genera la propia empresa, como las utilidades retenidas) o **externo** (de terceros, como un banco o nuevos inversionistas).' },
      {
        ask: 'Jorge paga la ruta con las ganancias que no se repartió. ¿Cómo se financia?',
        options: [
          { text: 'Con capital propio interno', ok: true, reply: '¡Bien! Lo generó la propia purificadora y es dinero de los dueños.' },
          { text: 'Con deuda externa', reply: 'No le debe a nadie: son sus propias ganancias guardadas. Es **capital propio interno**.' },
          { text: 'Con capital propio externo', reply: 'Es capital propio, pero no viene de terceros: lo generó la empresa. Es **interno**.' },
        ],
      },
    ],
    // ¿La deuda ayuda o estorba?
    [
      { text: 'Usar deuda para comprar activos se llama **apalancamiento financiero**. Funciona como una **lupa** 🔍: agranda lo bueno y lo malo para los dueños.' },
      {
        text: 'Se mide con el **ROE** = utilidad neta ÷ capital propio (lo que ganan los dueños por cada peso que pusieron).\n1️⃣ Intereses = deuda × tasa.\n2️⃣ Utilidad neta = (utilidad de operación − intereses) × (1 − t).\n3️⃣ Capital propio = activos − deuda.',
      },
      {
        sim: {
          title: 'Purificadora con activos de $1,000,000 (deuda al 10% e impuestos de 30%, de ejemplo)',
          inputs: [
            { key: 'u', label: 'Utilidad de operación', min: 60000, max: 200000, step: 20000, value: 100000 },
            { key: 'd', label: 'Deuda', min: 0, max: 500000, step: 100000, value: 0 },
          ],
          outputs: [
            { label: 'ROE sin deuda', calc: (x) => Math.round(((x.u * 0.7) / 1000000) * 1000) / 10, unit: '%' },
            { label: 'Utilidad neta', calc: (x) => Math.round((x.u - x.d * 0.1) * 0.7) },
            { label: 'ROE con esta deuda', calc: (x) => Math.round((((x.u - x.d * 0.1) * 0.7) / (1000000 - x.d)) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Lleva el ROE a **12% o más**.',
            check: (x) => ((x.u - x.d * 0.1) * 0.7) / (1000000 - x.d) >= 0.12,
            done: 'La deuda sube el ROE cuando los activos rinden más que el 10% que cuesta. Ahora baja la utilidad a $60,000 con $500,000 de deuda: el ROE cae a 1.4%, peor que el 4.2% sin deuda.',
          },
        },
      },
      {
        calc: {
          question: 'Jorge tiene utilidad de operación de $150,000 y deuda de $500,000 al 10%. Con impuestos de 30% (de ejemplo), ¿cuál es su utilidad neta?',
          answer: 70000,
          hint: 'Intereses: 500,000 × 0.10 = 50,000. Luego (150,000 − 50,000) × 0.70.',
          why: '150,000 − 50,000 = 100,000. Por 0.70 = **$70,000**.',
        },
      },
      {
        calc: {
          question: 'Con activos de $1,000,000 y esa deuda de $500,000, ¿cuál es el ROE de Jorge, en porcentaje?',
          answer: 14,
          unit: '%',
          hint: 'Capital propio = 1,000,000 − 500,000. Divide 70,000 entre eso.',
          why: '70,000 ÷ 500,000 = 0.14 = **14%**. Sin deuda sería 105,000 ÷ 1,000,000 = 10.5%. Si divides entre los activos, te da 7%, y eso está mal.',
        },
      },
      { text: 'Los intereses además dan un **escudo fiscal**: como son deducibles, bajan los impuestos.\n**Escudo fiscal = intereses × t.**' },
      {
        calc: {
          question: 'Jorge paga $80,000 de intereses al año. Con impuestos de 30% (de ejemplo), ¿cuánto se ahorra en impuestos?',
          answer: 24000,
          hint: '80,000 × 0.30.',
          why: '80,000 × 0.30 = **$24,000** de ahorro. Su costo neto de intereses sería 80,000 − 24,000 = 56,000.',
        },
      },
      { tip: 'La deuda amplifica **en ambos sentidos**. Y si no hay utilidades, no hay impuestos que reducir: el escudo fiscal no ayuda.' },
    ],
    // ¿Existe la mezcla perfecta?
    [
      { text: 'Un amigo le dice a Jorge: "Pide todo prestado, así ahorras más impuestos". 🤔' },
      {
        ask: '¿Le conviene financiarse casi 100% con deuda?',
        options: [
          { text: 'No: más deuda también trae más riesgo de no poder pagar', ok: true, reply: '¡Exacto! El escudo fiscal ayuda, pero el riesgo de **dificultades financieras** crece.' },
          { text: 'Sí: más escudo fiscal siempre gana', reply: 'El escudo crece, pero también el riesgo de **no poder pagar**, perder clientes y proveedores o quebrar.' },
          { text: 'Da lo mismo cuánta deuda tenga', reply: 'Eso solo pasa en un mundo ideal, sin impuestos ni quiebras. En la realidad, más deuda trae **más riesgo**.' },
        ],
      },
      {
        text: 'Tres ideas famosas:\n🧪 **Modigliani y Miller:** en un mundo ideal sin impuestos ni quiebras, la mezcla no cambia el valor. Con impuestos, la deuda agrega valor por el escudo fiscal.\n⚖️ **Equilibrio (trade-off):** escudo fiscal contra riesgo de dificultades financieras. El óptimo está donde se equilibran.\n🪜 **Orden jerárquico (pecking order):** primero fondos internos, luego deuda y al final acciones.',
      },
      {
        match: {
          title: 'Une cada idea con lo que dice',
          pairs: [
            ['MM sin impuestos', 'La mezcla de deuda y capital no cambia el valor'],
            ['Trade-off', 'Equilibrar escudo fiscal contra riesgo de quiebra'],
            ['Pecking order', 'Internos, luego deuda, al final acciones'],
            ['Dificultades financieras', 'No poder pagar, perder clientes y proveedores'],
          ],
        },
      },
      {
        order: {
          title: 'Arma el orden jerárquico para Jorge',
          steps: ['Usar las ganancias que no se repartió', 'Pedir un crédito', 'Vender acciones a nuevos socios'],
          done: 'Emitir acciones va al final porque puede mandar la señal de que los dueños creen que la acción está cara.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto?',
          items: [
            { text: 'Una empresa con flujos estables puede cargar más deuda que una startup de ingresos inciertos', ok: true },
            { text: 'Más deuda da más escudo fiscal, pero más riesgo', ok: true },
            { text: 'El trade-off dice que siempre conviene casi 100% deuda', ok: false },
            { text: 'Según el pecking order, lo primero es emitir acciones', ok: false },
          ],
          why: 'Una distribuidora de gas, con flujos estables, aguanta más deuda que una startup. El trade-off busca un **equilibrio**, y el pecking order deja las acciones al **final**.',
        },
      },
      { tip: 'No hay una mezcla mágica igual para todos: depende de qué tan estables sean los flujos de cada negocio.' },
    ],
  ],
}
