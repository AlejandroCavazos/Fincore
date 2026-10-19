import type { InteractiveLesson } from './types'

export const intPER04: InteractiveLesson = {
  lessonId: 'PER-04',
  sections: [
    // Tu plan antes del mes
    [
      { text: 'Rocío y Beto viven con sus hijos Mateo (12) y Ana (7) 👨‍👩‍👧‍👦. Cada mes anotan en qué se les fue el dinero... y siempre llega alguna sorpresa.' },
      {
        ask: '¿Qué diferencia hay entre anotar gastos y hacer un presupuesto?',
        options: [
          { text: 'Anotar mira hacia atrás; el presupuesto planea hacia adelante', ok: true, reply: '¡Eso! El presupuesto se decide **antes** de que empiece el mes.' },
          { text: 'Son lo mismo', reply: 'Se parecen, pero anotar dice en qué **se fue** el dinero. El presupuesto decide **antes** a dónde irá.' },
          { text: 'El presupuesto es solo para empresas', reply: 'Cualquier familia puede hacerlo. Es un **plan hacia adelante** de a dónde irá cada peso.' },
        ],
      },
      { text: 'Se parte del **ingreso neto**: lo que de verdad llega después de descuentos. Luego los gastos:\n📌 **Fijos:** casi lo mismo cada mes (renta, internet, colegiatura).\n🔄 **Variables:** cambian según tu consumo (despensa, gasolina, luz).' },
      {
        sort: {
          title: '¿Fijo o variable?',
          buckets: ['Gasto fijo', 'Gasto variable'],
          items: [
            { text: 'Renta de la casa', bucket: 0, why: 'Cuesta lo mismo cada mes: fijo.' },
            { text: 'Despensa del súper', bucket: 1, why: 'Cambia según lo que compran: variable.' },
            { text: 'Colegiatura mensual de Mateo', bucket: 0, why: 'Mismo monto cada mes: fijo.' },
            { text: 'Gasolina del auto', bucket: 1, why: 'Depende de cuánto manejan: variable.' },
            { text: 'Internet con tarifa fija', bucket: 0, why: 'La tarifa no cambia: fijo.' },
            { text: 'Recibo de luz, que depende del consumo', bucket: 1, why: 'Llega siempre, pero su monto cambia: variable.' },
          ],
        },
      },
      { text: 'Ojo con los **gastos anuales**: predial, seguro del auto, inscripciones, regalos de diciembre 🎁. Para que no sorprendan, **prorratéalos**: divide el total del año entre 12 y aparta esa parte cada mes.' },
      {
        calc: {
          question: 'Los Pérez pagan **$6,000** de seguro del auto y **$1,200** de predial al año. ¿Cuánto deben apartar **cada mes** para ambos?',
          answer: 600,
          hint: 'Suma los dos pagos y divide entre 12: (6,000 + 1,200) ÷ 12.',
          why: '6,000 + 1,200 = $7,200. 7,200 ÷ 12 = **$600** al mes. Si prorrateas solo uno, te faltará para el otro.',
        },
      },
      { tip: '**Disponible** = ingreso neto − (fijos + variables + prorrateos).' },
    ],
    // ¿Cómo repartir tu ingreso?
    [
      { text: 'Los Pérez reciben **$20,000 netos** al mes. ¿Cómo repartirlos? Hay dos métodos sencillos.' },
      { text: '📊 **Regla 50/30/20:**\n🏠 50% para necesidades (vivienda, comida, transporte, servicios).\n🎉 30% para deseos (salidas, gustos).\n🐷 20% para ahorro y pago de deudas.\nEs un punto de partida, no una ley.' },
      {
        calc: {
          question: 'Con la regla 50/30/20 y **$20,000** netos, ¿cuánto les toca para **deseos**?',
          answer: 6000,
          hint: 'Deseos = 30%: 20,000 × 0.30.',
          why: '20,000 × 0.30 = **$6,000**. Necesidades serían $10,000 y ahorro y deudas $4,000. Suman 20,000.',
        },
      },
      {
        sim: {
          title: 'Reparte los $20,000 de los Pérez',
          inputs: [
            { key: 'n', label: '% para necesidades', min: 40, max: 70, step: 5, value: 60 },
            { key: 'd', label: '% para deseos', min: 10, max: 30, step: 5, value: 30 },
          ],
          outputs: [
            { label: 'Necesidades', calc: (x) => (20000 * x.n) / 100 },
            { label: 'Deseos', calc: (x) => (20000 * x.d) / 100 },
            { label: 'Ahorro y deudas', calc: (x) => (20000 * (100 - x.n - x.d)) / 100, main: true },
          ],
          goal: {
            text: 'Su renta es alta: deja las necesidades en **60% o más** y aun así logra **20%** para ahorro y deudas.',
            check: (x) => x.n >= 60 && 100 - x.n - x.d >= 20,
            done: 'Si las necesidades ocupan más, se ajustan los deseos antes que el ahorro.',
          },
        },
      },
      { text: '0️⃣ **Presupuesto base cero:** le das destino a **cada peso**, hasta que ingreso − asignaciones = **0**. No es gastarlo todo: el ahorro también es un destino.' },
      {
        ask: 'Los Pérez asignaron $19,000 de sus $20,000. ¿Qué harían en base cero?',
        options: [
          { text: 'Darle destino a los $1,000, por ejemplo al ahorro', ok: true, reply: '¡Eso! Ahora ningún peso queda suelto y el resultado es cero.' },
          { text: 'Gastarlos en algo para llegar a cero', reply: 'Cero no significa gastarlo todo. Basta con **darles destino**, y el ahorro es uno.' },
          { text: 'Dejarlos sueltos, por si acaso', reply: 'En base cero ningún peso queda sin plan. Si quieren un "por si acaso", **asígnenlo** como ahorro.' },
        ],
      },
    ],
    // ¿Cómo les fue este mes?
    [
      { text: 'Fin de mes. Los Pérez se sientan a la mesa con Mateo y Ana 🍽️ para comparar el plan con lo que de verdad pasó.' },
      { text: 'Comparan **presupuestado contra real**. La diferencia es la **desviación**:\n🧮 Desviación = real − presupuestado.\n🧮 Desviación % = desviación ÷ presupuestado × 100.' },
      {
        calc: {
          question: 'Presupuestaron **$1,200** de transporte y gastaron **$1,500**. ¿De cuántos pesos fue la desviación?',
          answer: 300,
          hint: 'Real − presupuestado: 1,500 − 1,200.',
          why: '1,500 − 1,200 = **$300** por encima de lo planeado.',
        },
      },
      {
        calc: {
          question: '¿Y en porcentaje, cuánto se pasaron en transporte?',
          answer: 25,
          unit: '%',
          hint: 'Desviación ÷ presupuestado × 100: 300 ÷ 1,200 × 100.',
          why: '300 ÷ 1,200 = 0.25. × 100 = **25%** por encima. Se divide entre lo **presupuestado**, no entre lo real.',
        },
      },
      {
        ask: 'Descubren que fueron los taxis de noche. ¿Qué hacen?',
        options: [
          { text: 'Ver la causa y acordar juntos: salir más temprano o recortar en otra categoría', ok: true, reply: '¡Bien! Entender la causa y decidir en familia es para lo que sirve el seguimiento.' },
          { text: 'Dejar el presupuesto porque "no funciona"', reply: 'La desviación es justo la información útil. Mejor **ver la causa y acordar un ajuste**.' },
          { text: 'Pagar la diferencia con tarjeta y no hablar del tema', reply: 'Eso esconde el problema y crea deuda. Mejor **ver la causa y decidir juntos**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué ayuda a que el presupuesto familiar funcione?',
          items: [
            { text: 'Armarlo en conjunto', ok: true },
            { text: 'Acordar quién aporta cuánto y qué gastos son compartidos', ok: true },
            { text: 'Involucrar a los hijos según su edad', ok: true },
            { text: 'Que una sola persona decida y no avise', ok: false },
            { text: 'Subir la cifra cada mes sin revisar por qué', ok: false },
          ],
          why: 'En familia funciona mejor si se arma juntos, con metas comunes. Subir la cifra sin revisar hace que el presupuesto deje de cuadrar.',
        },
      },
      { tip: 'Ante una desviación: **busca la causa** y decide: recortar en otra categoría, ajustar la cifra del próximo mes o cambiar un hábito.' },
    ],
  ],
}
