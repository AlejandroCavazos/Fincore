import type { InteractiveLesson } from './types'

export const intPER12: InteractiveLesson = {
  lessonId: 'PER-12',
  sections: [
    // ¿Guardar o poner a trabajar?
    [
      { text: 'Diego tiene 19 años, estudia ingeniería y los fines de semana trabaja en una cafetería ☕. Juntó **$10,000** y los tiene en una alcancía.' },
      {
        ask: 'Si los deja ahí 5 años, ¿qué pasa con lo que puede comprar con ellos?',
        options: [
          { text: 'Compra menos, por la inflación', ok: true, reply: '¡Exacto! Siguen siendo $10,000, pero la **inflación** se come poco a poco su poder de compra.' },
          { text: 'Compra lo mismo', reply: 'Los billetes son los mismos, pero los precios suben: la **inflación** hace que compre menos.' },
          { text: 'Compra más', reply: 'Guardado no crece. Con la **inflación**, compra menos.' },
        ],
      },
      { text: '💵 **Ahorrar:** guardar una parte de tu ingreso.\n🌱 **Invertir:** poner ese dinero en algo que pueda generar más: prestarlo al gobierno o a una empresa a cambio de intereses, o ser dueño de una parte de un negocio.' },
      { text: 'Lo que gana tu inversión es el **rendimiento**:\n**Rendimiento (%) = ganancia ÷ valor inicial × 100**\nEl **rendimiento real** descuenta la inflación: real ≈ rendimiento − inflación.' },
      {
        match: {
          title: 'Une cada palabra',
          pairs: [
            ['Ahorrar', 'Guardar una parte de tu ingreso'],
            ['Invertir', 'Poner el dinero en algo que pueda generar más'],
            ['Rendimiento', 'Lo que gana tu inversión, en porcentaje'],
            ['Rendimiento real', 'Lo que gana descontando la inflación'],
          ],
        },
      },
      {
        calc: {
          question: 'Diego invierte $10,000 y al año tiene $10,700, sin depósitos ni retiros. ¿Cuál fue su rendimiento, en porcentaje?',
          answer: 7,
          unit: '%',
          hint: 'Ganancia = 10,700 − 10,000. Divide entre el valor inicial y × 100.',
          why: 'Ganancia: $700. 700 ÷ 10,000 × 100 = **7%**. Se divide entre lo que puso al inicio, no entre el valor final.',
        },
      },
      {
        calc: {
          question: 'Si la inflación de ese año fue de 4% (ejemplo), ¿cuál fue su rendimiento real aproximado, en porcentaje?',
          answer: 3,
          unit: '%',
          hint: 'Real ≈ rendimiento − inflación.',
          why: '7% − 4% ≈ **3%**. Eso es lo que de verdad creció su poder de compra.',
        },
      },
    ],
    // ¿Cuánto riesgo aguantas?
    [
      { text: 'Un conocido le escribe a Diego: "Te **garantizo** 50% en 3 meses, sin riesgo" 🤑.' },
      {
        ask: '¿Qué debería pensar Diego?',
        options: [
          { text: 'Desconfiar: más rendimiento trae más riesgo', ok: true, reply: '¡Bien! Nadie regala rendimientos altos sin riesgo. Si te los "garantizan", desconfía.' },
          { text: '¡Aprovechar ya!', reply: 'Cuidado. A mayor rendimiento esperado, **mayor riesgo**. Una garantía así es señal de alerta.' },
          { text: 'Que es normal ganar mucho sin riesgo', reply: 'No lo es. La regla de oro: **a mayor rendimiento esperado, mayor riesgo**.' },
        ],
      },
      { text: '⚠️ **Riesgo:** posibilidad de ganar menos o perder.\n📈 **Rendimiento:** lo que gana tu dinero, en %.\n💧 **Liquidez:** qué tan rápido lo vuelves efectivo sin perder valor.\n⏳ **Plazo:** cuánto tiempo lo dejarás.' },
      { text: 'Metas **cercanas** (menos de un año): poco riesgo y buena liquidez. Metas **lejanas** (como el retiro): puedes aguantar más altibajos, porque hay tiempo para recuperarse.' },
      {
        sort: {
          title: '¿Qué le va a cada meta de Diego?',
          buckets: ['Poco riesgo y buena liquidez', 'Puede aguantar altibajos'],
          items: [
            { text: 'La inscripción del semestre, en 5 meses', bucket: 0, why: 'Meta cercana: no puede arriesgarse a tener menos.' },
            { text: 'Su retiro, dentro de 40 años', bucket: 1, why: 'Meta lejana: hay tiempo para recuperarse de caídas.' },
            { text: 'El enganche de una moto, en 8 meses', bucket: 0, why: 'Menos de un año: poco riesgo.' },
            { text: 'Una meta a 15 años', bucket: 1, why: 'Plazo largo: puede tolerar más altibajos.' },
          ],
        },
      },
      { text: 'Tu **perfil** dice cuánto riesgo aceptas: **conservador** (prefiere no perder), **moderado** o **agresivo** (acepta caídas para buscar más).' },
      {
        ask: 'Diego es agresivo, pero juntó $20,000 para la inscripción de dentro de 6 meses y no quiere tener menos. ¿Qué le va mejor?',
        options: [
          { text: 'Un instrumento de deuda de corto plazo en una institución autorizada', ok: true, reply: '¡Exacto! Para una meta cercana manda el **plazo**: poco riesgo y buena liquidez, aunque su perfil sea agresivo.' },
          { text: 'Acciones de una sola empresa que subió mucho el año pasado', reply: 'Pueden caer justo antes de pagar. Y lo que subió antes no garantiza el futuro. Mejor **deuda de corto plazo**.' },
          { text: 'Un esquema que promete duplicar su dinero en 6 meses', reply: 'Esa promesa es señal típica de fraude. Para 6 meses: **deuda de corto plazo** en una institución autorizada.' },
        ],
      },
    ],
    // No todo en una canasta
    [
      { text: 'Años después, Diego ya trabaja de ingeniero y tiene **$40,000** para invertir a largo plazo. Ve muchos nombres: Cetes, bonos, acciones, ETF…' },
      { text: 'Dos grandes familias:\n🤝 **Deuda (renta fija):** tú prestas y te prometen un interés. **Cetes** (gobierno, corto plazo), **pagarés** (banco), **bonos** (empresas).\n🏢 **Renta variable:** eres **dueño** de una parte. **Acciones**, **ETF** (canastas de acciones) y fondos de acciones. Su valor sube y baja.' },
      {
        sort: {
          title: '¿Deuda o renta variable?',
          buckets: ['Deuda (renta fija)', 'Renta variable'],
          items: [
            { text: 'Cetes', bucket: 0, why: 'Le prestas al gobierno a corto plazo.' },
            { text: 'Pagaré bancario a 28 días', bucket: 0, why: 'Le prestas al banco.' },
            { text: 'Bono de una empresa', bucket: 0, why: 'Aunque lo emite una empresa, le estás prestando: es deuda.' },
            { text: 'Acciones de una empresa en bolsa', bucket: 1, why: 'Eres dueño de una parte; no hay rendimiento prometido.' },
            { text: 'ETF que replica un índice de acciones', bucket: 1, why: 'Es una canasta de acciones: renta variable.' },
            { text: 'Fondo de inversión que compra acciones', bucket: 1, why: 'Lo que tiene son acciones: renta variable.' },
          ],
        },
      },
      {
        ask: 'Si Diego pone todo en **una sola acción** y esa empresa quiebra, ¿qué pasa?',
        options: [
          { text: 'Pierde todo lo invertido', ok: true, reply: 'Así es. Por eso conviene **diversificar**: no poner todos los huevos en la misma canasta 🧺.' },
          { text: 'No pasa nada, el banco se lo regresa', reply: 'Una acción no tiene esa promesa. Si la empresa quiebra, **pierde todo**. Por eso se **diversifica**.' },
          { text: 'Pierde solo un poco', reply: 'Si todo está en esa acción, **pierde todo**. Con muchas empresas, una quiebra pesaría mucho menos.' },
        ],
      },
      {
        sim: {
          title: 'Reparte los $40,000 de Diego (un año de ejemplo)',
          inputs: [
            { key: 'd', label: 'En deuda (gana 6%)', min: 0, max: 20000, step: 5000, value: 0 },
            { key: 'f', label: 'En un fondo de muchas acciones (gana 12%)', min: 0, max: 20000, step: 5000, value: 0 },
          ],
          outputs: [
            { label: 'Lo que queda en una sola acción (pierde 8%)', calc: (x) => 40000 - x.d - x.f },
            { label: 'Ganancia del año', calc: (x) => Math.round(x.d * 0.06 + x.f * 0.12 - (40000 - x.d - x.f) * 0.08), main: true },
            { label: 'Rendimiento del total', calc: (x) => Math.round(((x.d * 0.06 + x.f * 0.12 - (40000 - x.d - x.f) * 0.08) / 40000) * 1000) / 10, unit: '%' },
          ],
          goal: {
            text: 'Que **ninguna parte pase de $20,000** y que el año cierre con **ganancia**.',
            check: (x) => 40000 - x.d - x.f <= 20000 && x.d * 0.06 + x.f * 0.12 - (40000 - x.d - x.f) * 0.08 > 0,
            done: 'Repartido, la caída de una parte pesa mucho menos en el total.',
          },
        },
      },
      {
        ask: 'Con su dinero repartido en muchas inversiones, ¿Diego ya no puede perder?',
        options: [
          { text: 'Sí puede: diversificar reduce el riesgo, no lo elimina', ok: true, reply: '¡Correcto! Todo el mercado puede caer al mismo tiempo. "Diversificado" no significa "garantizado".' },
          { text: 'Ya no puede perder nada', reply: 'Diversificar **reduce** el riesgo, pero **no lo elimina**: todo el mercado puede caer a la vez.' },
          { text: 'Ahora pierde más seguido', reply: 'Al contrario: una caída pesa menos. Aun así, el riesgo **no desaparece**.' },
        ],
      },
      { tip: 'Diversificar es repartir entre instrumentos, empresas y plazos. **Reduce** el riesgo, pero **no lo elimina**.' },
    ],
  ],
}
