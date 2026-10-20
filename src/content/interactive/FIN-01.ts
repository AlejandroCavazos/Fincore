import type { InteractiveLesson } from './types'

export const intFIN01: InteractiveLesson = {
  lessonId: 'FIN-01',
  sections: [
    // ¿Para qué sirven las finanzas?
    [
      { text: 'Don Ernesto tiene la panadería **La Espiga** 🥖. Este año ganó **$200,000**. Él y sus socios pusieron **$2,000,000** para abrirla (cifras de ejemplo).' },
      {
        ask: '¿Le está yendo bien a la panadería?',
        options: [
          { text: 'Sí, porque ganó dinero', reply: 'Ganar ayuda, pero no basta. Hay que ver cuánto ganarían los socios **en otra opción igual de segura**.' },
          { text: 'Depende de cuánto ganarían en otra opción igual de segura', ok: true, reply: '¡Exacto! Su dinero podría estar en otro lado. La pregunta es si la panadería gana **más** que esa otra opción.' },
          { text: 'No, una panadería nunca deja ganancia', reply: 'Claro que puede dejar ganancia. Lo que importa es compararla con **otra opción igual de segura**.' },
        ],
      },
      { text: 'Las **finanzas** estudian cómo se consigue, se usa y se cuida el dinero. Las **finanzas corporativas** aplican eso a una empresa, de una taquería a una cadena de tiendas.' },
      { text: 'Su meta es **crear valor**: que el negocio valga más con el tiempo para sus dueños. Para eso hay que ganar **más** de lo que cuesta el dinero que se usa.' },
      {
        calc: {
          question: 'Con ese mismo dinero, en otra opción igual de segura los socios ganarían **$240,000**. La panadería ganó $200,000. ¿Cuántos pesos menos ganan con la panadería?',
          answer: 40000,
          hint: 'Lo que ganarían en la otra opción − lo que ganó la panadería: 240,000 − 200,000.',
          why: '240,000 − 200,000 = **$40,000**. Aunque tiene utilidad, la panadería **no está creando valor**: sus dueños estarían mejor en la otra opción.',
        },
      },
      {
        sort: {
          title: 'Otra opción igual de segura daría $240,000. ¿Crea valor?',
          buckets: ['Crea valor', 'No crea valor'],
          items: [
            { text: 'La panadería gana $300,000', bucket: 0, why: 'Gana más que la otra opción ($240,000): crea valor.' },
            { text: 'La panadería gana $150,000', bucket: 1, why: 'Gana menos que la otra opción: no crea valor, aunque tenga utilidad.' },
            { text: 'Vende muchísimo, pero gana $180,000', bucket: 1, why: 'Vender mucho no basta: gana menos que los $240,000 de la otra opción.' },
            { text: 'La panadería gana $260,000', bucket: 0, why: 'Supera los $240,000 de la otra opción: crea valor.' },
          ],
        },
      },
      {
        ask: 'Entonces, ¿cuál es el objetivo principal de las finanzas corporativas?',
        options: [
          { text: 'Vender lo más posible cada año', reply: 'Vender mucho no garantiza nada. El objetivo es **crear valor para los dueños de forma sostenible**.' },
          { text: 'Crear valor para los dueños de forma sostenible', ok: true, reply: '¡Eso! Que el negocio valga más con el tiempo, ganando más de lo que cuesta su dinero.' },
          { text: 'No usar nunca deuda', reply: 'La deuda es solo una forma de conseguir dinero. La meta es **crear valor para los dueños**.' },
        ],
      },
      {
        order: {
          title: 'Arma la idea',
          steps: ['Las finanzas corporativas buscan', 'crear valor', 'para los dueños', 'de forma sostenible'],
          done: '¡La armaste! Esa es la brújula de todas las decisiones de dinero de una empresa.',
        },
      },
    ],
    // Tres preguntas sobre el dinero
    [
      { text: 'Ernesto quiere un **horno nuevo** 🔥. Antes de comprarlo, se hace tres preguntas.' },
      {
        text: '🛒 **Inversión:** ¿en qué uso el dinero? (el horno, otra sucursal)\n🏦 **Financiamiento:** ¿de dónde sale? **Deuda** (banco, proveedor) o **capital** (dinero de los socios)\n🎁 **Dividendos:** si hay ganancia, ¿se reparte a los socios o se **reinvierte**?',
      },
      {
        ask: 'Ernesto pide un crédito al banco para pagar el horno. ¿Qué decisión es esa?',
        options: [
          { text: 'Inversión', reply: 'La inversión es **el horno** (en qué usa el dinero). Pedir el crédito responde **de dónde sale**: financiamiento.' },
          { text: 'Financiamiento', ok: true, reply: '¡Sí! El crédito es **de dónde sale** el dinero. En este caso, deuda.' },
          { text: 'Dividendos', reply: 'Los dividendos tratan de repartir o reinvertir ganancias. El crédito es **financiamiento**.' },
        ],
      },
      {
        sort: {
          title: '¿Qué tipo de decisión es?',
          buckets: ['Inversión', 'Financiamiento', 'Dividendos'],
          items: [
            { text: 'Comprar una batidora industrial', bucket: 0, why: 'Es en qué se usa el dinero: inversión.' },
            { text: 'Pedir un préstamo bancario a 3 años', bucket: 1, why: 'Es de dónde sale el dinero (deuda): financiamiento.' },
            { text: 'Repartir a los socios la mitad de la utilidad', bucket: 2, why: 'Es qué hacer con la ganancia: dividendos.' },
            { text: 'Abrir una segunda sucursal', bucket: 0, why: 'Es un proyecto donde se usa el dinero: inversión.' },
            { text: 'Que un nuevo socio aporte dinero', bucket: 1, why: 'Es dinero de socios (capital): financiamiento.' },
            { text: 'Guardar toda la utilidad para reinvertirla', bucket: 2, why: 'Decidir no repartir y reinvertir también es decisión de dividendos.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Cuáles son fuentes de financiamiento para La Espiga?',
          items: [
            { text: 'Un préstamo del banco', ok: true },
            { text: 'Dinero que aportan los socios', ok: true },
            { text: 'Comprar un horno nuevo', ok: false },
            { text: 'El proveedor de harina le deja pagar a 30 días', ok: true },
            { text: 'Pagar la nómina de la quincena', ok: false },
          ],
          why: 'Financiamiento es **de dónde sale** el dinero: deuda (banco, crédito del proveedor) o capital (socios). Comprar el horno es inversión y pagar la nómina es un gasto.',
        },
      },
      { tip: 'Tres preguntas: **¿en qué?** (inversión), **¿con qué dinero?** (financiamiento) y **¿repartir o reinvertir?** (dividendos). En el día a día se suma el capital de trabajo: inventarios, cobranza y pagos.' },
    ],
    // Ganancia, riesgo y efectivo
    [
      { text: 'Ernesto compra una acción en **$100**. Durante el año recibe **$3** de dividendo y luego la vende en **$112** (ejemplo).' },
      {
        ask: '¿Cuánto ganó en total?',
        options: [
          { text: '$12', reply: 'Esa es solo la subida del precio. Falta sumar los $3 de dividendo: **$15**.' },
          { text: '$15', ok: true, reply: '¡Bien! $12 de subida + $3 de dividendo = $15.' },
          { text: '$112', reply: 'Ese es el precio de venta, no la ganancia. Ganó $12 + $3 = **$15**.' },
        ],
      },
      { text: 'El **rendimiento** es lo que ganas en % de lo que pusiste: 15 ÷ 100 = **15 %**. Y la regla: **a mayor riesgo, se exige mayor rendimiento**. Nadie presta a un negocio nuevo a la misma tasa que al gobierno.' },
      {
        calc: {
          question: 'Otra acción: Ernesto la compra en $200, recibe $4 de dividendo y la vende en $226. ¿Cuál fue su rendimiento, en porcentaje?',
          answer: 15,
          unit: '%',
          hint: 'Ganancia = (226 − 200) + 4. Luego divide entre 200 y multiplica por 100.',
          why: '26 + 4 = 30 de ganancia. 30 ÷ 200 = 0.15 = **15 %**. Es un ejemplo: un rendimiento pasado no está garantizado.',
        },
      },
      { text: 'Otra trampa: **utilidad no es efectivo**. Ernesto vende $100,000 en pasteles a cafeterías, pero muchas le pagan el mes siguiente. La venta ya cuenta como utilidad… el dinero todavía no llega.' },
      {
        sim: {
          title: 'La Espiga vendió $100,000 y empezó el mes con $50,000 en caja',
          inputs: [
            { key: 'c', label: '% de las ventas que ya cobró', min: 40, max: 100, step: 10, value: 40 },
            { key: 'g', label: 'Gastos del mes, pagados en efectivo', min: 50000, max: 90000, step: 5000, value: 70000 },
          ],
          outputs: [
            { label: 'Utilidad del mes', calc: (x) => 100000 - x.g },
            { label: 'Efectivo cobrado', calc: (x) => (100000 * x.c) / 100 },
            { label: 'Flujo de efectivo del mes', calc: (x) => (100000 * x.c) / 100 - x.g },
            { label: 'Efectivo al cierre', calc: (x) => 50000 + (100000 * x.c) / 100 - x.g, main: true },
          ],
          goal: {
            text: 'Termina el mes con **al menos los $50,000** con los que empezó (flujo de efectivo no negativo).',
            check: (x) => (100000 * x.c) / 100 - x.g >= 0,
            done: 'Al inicio había $30,000 de utilidad y aun así la caja bajaba $30,000. Por eso en finanzas se vigila siempre el **flujo de efectivo**.',
          },
        },
      },
      {
        ask: 'Si La Espiga tiene utilidad en el mes, ¿seguro tiene más efectivo que al inicio?',
        options: [
          { text: 'Sí, siempre', reply: 'No siempre. Si los clientes no han pagado, puede tener utilidad y **quedarse sin dinero** para la nómina.' },
          { text: 'No, puede tener utilidad y quedarse sin dinero', ok: true, reply: '¡Exacto! La venta cuenta cuando se hace, aunque el cliente pague después.' },
          { text: 'Solo si vende más de $100,000', reply: 'El tamaño de la venta no lo asegura. Lo que importa es **cuánto se cobró** y cuánto se pagó.' },
        ],
      },
    ],
  ],
}
