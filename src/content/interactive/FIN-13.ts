import type { InteractiveLesson } from './types'

export const intFIN13: InteractiveLesson = {
  lessonId: 'FIN-13',
  sections: [
    // ¿Cuánto vale un negocio?
    [
      { text: 'Lucía quiere comprar la **taquería** de su vecino, Don Toño 🌮. Él dice: "Vale $2 millones, eso me costaron el local, la plancha y las mesas".' },
      {
        ask: 'Como compradora, ¿qué debería importarle más a Lucía?',
        options: [
          { text: 'Lo que costaron la plancha y las mesas', reply: 'Eso ya se gastó en el pasado. A Lucía le importa **cuánto dinero le dejará** la taquería en los próximos años.' },
          { text: 'Cuánto dinero le dejará en los próximos años', ok: true, reply: '¡Eso! Ese es el corazón de la **valuación**: vale por el efectivo que generará.' },
          { text: 'Cuántas mesas tiene', reply: 'Más mesas no siempre es más dinero. Lo que cuenta es **cuánto efectivo le dejará** el negocio.' },
        ],
      },
      { text: 'Hay tres formas de ver el valor:\n📒 **Contable:** lo que dicen los libros.\n🏷️ **De mercado:** lo que hoy pagan otros.\n🔮 **Intrínseco:** lo que tú estimas por el efectivo futuro.' },
      {
        match: {
          title: 'Une cada valor con su idea',
          pairs: [
            ['Valor contable', 'Activos menos pasivos, según los libros'],
            ['Valor de mercado', 'Precio de la acción × número de acciones'],
            ['Valor intrínseco', 'Lo que vale por el efectivo que generará'],
          ],
        },
      },
      { text: 'Ojo: el **valor de la empresa (EV)** es el negocio completo, para dueños y bancos. A los dueños les toca el **valor del capital**:\n➖ Valor del capital = EV − **deuda neta**\n🏦 Deuda neta = deuda con intereses − efectivo en caja' },
      {
        calc: {
          question: 'Lucía estima que la taquería vale $900,000 como negocio completo (EV). Debe $250,000 al banco y tiene $50,000 en caja. ¿Cuánto vale la parte de los dueños?',
          answer: 700000,
          hint: 'Primero la deuda neta: 250,000 − 50,000. Luego réstala al EV.',
          why: 'Deuda neta = 250,000 − 50,000 = 200,000. Valor del capital = 900,000 − 200,000 = **$700,000**. Si restas la deuda completa (250,000), te da 650,000: olvidas el efectivo.',
        },
      },
      {
        ask: 'Un analista ya tiene el EV de una empresa. ¿Qué hace para saber lo que vale para los accionistas?',
        options: [
          { text: 'Restar la deuda neta', ok: true, reply: '¡Exacto! Primero se les paga a los bancos; lo que queda es de los accionistas.' },
          { text: 'Sumar la deuda, porque también financia', reply: 'Al revés: la deuda es de los bancos, no de los dueños. Se **resta la deuda neta**.' },
          { text: 'Nada: el EV ya es de los accionistas', reply: 'El EV es de dueños **y** bancos. Si no restas la deuda neta, la acción parece valer más de lo que vale.' },
        ],
      },
      { tip: '**EV** = todo el negocio. **Valor del capital** = EV − deuda neta. Y si lo divides entre las acciones, tienes el **valor por acción**.' },
    ],
    // ¿Cuánto vale el dinero futuro?
    [
      {
        ask: 'Te ofrecen $1,000. ¿Cuándo los prefieres?',
        options: [
          { text: 'Hoy', ok: true, reply: '¡Claro! Hoy los puedes usar o invertir, y no hay riesgo de que no lleguen. Por eso el dinero futuro "vale menos".' },
          { text: 'En 5 años', reply: 'Mientras esperas no los puedes usar ni invertir, y quizá no lleguen. Un peso **hoy** vale más.' },
          { text: 'Da igual', reply: 'No da igual: el dinero de hoy se puede invertir y es seguro. Un peso **hoy** vale más que uno futuro.' },
        ],
      },
      { text: 'Un **DCF** (flujos descontados) suma el efectivo que te dará el negocio, pero antes lo **encoge** a valor de hoy. A eso se le llama **descontar**, y se hace con el **WACC**: el costo promedio de financiarse.' },
      {
        calc: {
          question: 'El efectivo que sobra en un año para dueños y bancos se llama **FCFF**: EBIT × (1 − impuesto) + depreciación − inversión en activos − aumento de capital de trabajo. La taquería: EBIT $100,000, impuesto ilustrativo 30 %, depreciación $20,000, inversión $30,000 y aumento de capital de trabajo $10,000. ¿Cuánto es el FCFF?',
          answer: 50000,
          hint: '100,000 × 0.70 = 70,000. Luego + 20,000 − 30,000 − 10,000.',
          why: '100,000 × 0.70 = 70,000; + 20,000 = 90,000; − 30,000 − 10,000 = **$50,000**. La depreciación **se suma** porque no saca dinero de la caja.',
        },
      },
      { text: 'Nadie proyecta para siempre. Se proyectan unos años y luego un **valor terminal**: un solo número para todos los años siguientes.\n🌱 Valor terminal = último flujo × (1 + g) ÷ (WACC − g)\n(g = cuánto crecerá el flujo cada año, para siempre)' },
      {
        calc: {
          question: 'El último flujo proyectado es $70,000, crecerá 4 % al año para siempre y el WACC es 11 % (tasas de ejemplo). ¿Cuál es el valor terminal?',
          answer: 1040000,
          hint: '70,000 × 1.04 = 72,800. Divide entre 0.11 − 0.04 = 0.07.',
          why: '70,000 × 1.04 = 72,800; 72,800 ÷ 0.07 = **$1,040,000**. Si olvidas crecer el flujo un año, te da 1,000,000.',
        },
      },
      {
        sim: {
          title: 'Mueve g y el WACC (flujo de $50,000)',
          inputs: [
            { key: 'g', label: 'Crecimiento para siempre, g (%)', min: 0, max: 6, step: 1, value: 2 },
            { key: 'w', label: 'WACC (%)', min: 8, max: 14, step: 1, value: 12 },
          ],
          outputs: [
            { label: 'WACC − g', calc: (x) => x.w - x.g, unit: '%' },
            { label: 'Valor terminal', calc: (x) => (50000 * (1 + x.g / 100)) / ((x.w - x.g) / 100), main: true },
          ],
          goal: {
            text: 'Haz que el valor terminal llegue a **$1,000,000 o más**.',
            check: (x) => (50000 * (1 + x.g / 100)) / ((x.w - x.g) / 100) >= 1000000,
            done: 'Con unos puntos de cambio en g o en el WACC, el valor se dispara. Por eso el valor terminal es tan sensible.',
          },
        },
      },
      {
        ask: 'Una empresa crece muy rápido. ¿Puede usar una g mayor que su WACC en el valor terminal?',
        options: [
          { text: 'No: g debe ser menor que el WACC', ok: true, reply: '¡Bien! Si g fuera igual o mayor, WACC − g sería cero o negativo y la fórmula no tendría sentido. Además, nadie crece más que toda la economía para siempre.' },
          { text: 'Sí, si crece muy rápido', reply: 'El crecimiento alto va en los años proyectados. En la perpetuidad, **g debe ser menor que el WACC**, o la fórmula da un valor infinito o sin sentido.' },
          { text: 'Da igual cuál sea mayor', reply: 'No da igual: con g ≥ WACC el denominador es cero o negativo. **g debe ser menor que el WACC**.' },
        ],
      },
      { tip: 'DCF: proyecta el FCFF, calcula el valor terminal y trae todo a hoy con el WACC. Regla de oro: **g menor que el WACC**.' },
    ],
    // ¿Cuánto valen los parecidos?
    [
      { text: 'Lucía quiere una segunda opinión, más rápida. Piensa en cómo se vende un departamento 🏢.' },
      {
        ask: 'Para ponerle precio a un departamento, ¿qué mira el agente?',
        options: [
          { text: 'Cuánto se vendieron otros parecidos por metro cuadrado', ok: true, reply: '¡Eso! Y la valuación por **múltiplos** hace lo mismo con empresas.' },
          { text: 'Cuánto le costó al dueño hace 20 años', reply: 'Eso es historia. El agente compara con **otros parecidos** vendidos hace poco, por metro cuadrado.' },
          { text: 'El color de las paredes', reply: 'Eso casi no cambia el precio. El agente compara con **otros parecidos**, por metro cuadrado.' },
        ],
      },
      { text: 'Con empresas se usa **EV/EBITDA**: cuántas veces su utilidad de operación (antes de intereses, impuestos, depreciación y amortización) valen negocios parecidos.\n✖️ EV = EBITDA × múltiplo de los parecidos\nLos parecidos pueden ser empresas en bolsa o **compras recientes** de empresas similares.' },
      {
        order: {
          title: 'Arma el camino al valor por acción',
          steps: ['Busca el múltiplo de empresas parecidas', 'Multiplica tu EBITDA por el múltiplo: sale el EV', 'Resta la deuda neta: sale el valor del capital', 'Divide entre las acciones: sale el valor por acción'],
          done: '¡Listo! Ese es el camino completo con múltiplos.',
        },
      },
      {
        calc: {
          question: 'La taquería tiene EBITDA de $150,000 y taquerías parecidas valen 6 veces su EBITDA. Debe $250,000 al banco y tiene $50,000 en caja. ¿Cuánto vale la parte de los dueños?',
          answer: 700000,
          hint: 'EV = 150,000 × 6. Luego resta la deuda neta (250,000 − 50,000).',
          why: 'EV = 150,000 × 6 = 900,000. Deuda neta = 200,000. Valor del capital = 900,000 − 200,000 = **$700,000**. ¡Coincide con el DCF de Lucía! Buena señal.',
        },
      },
      {
        ask: 'Si la taquería tiene 1,000 acciones, ¿cuánto vale cada una?',
        options: [
          { text: '$700', ok: true, reply: '¡Exacto! 700,000 ÷ 1,000 = $700 por acción.' },
          { text: '$900', reply: 'Ese sale del EV (900,000 ÷ 1,000). Primero hay que restar la deuda neta: 700,000 ÷ 1,000 = **$700**.' },
          { text: '$650', reply: 'Ese sale de restar la deuda completa (900,000 − 250,000). Se resta la deuda **neta**: 700,000 ÷ 1,000 = **$700**.' },
        ],
      },
      {
        sort: {
          title: '¿Flujos descontados o múltiplos?',
          buckets: ['Flujos descontados (DCF)', 'Múltiplos'],
          items: [
            { text: 'Proyectar el FCFF cinco años y descontarlo al WACC', bucket: 0, why: 'Proyectar y descontar flujos es el DCF.' },
            { text: 'Aplicar el EV/EBITDA de empresas parecidas', bucket: 1, why: 'Copiar la razón de los parecidos es usar múltiplos.' },
            { text: 'Calcular un valor terminal con crecimiento g', bucket: 0, why: 'El valor terminal es parte del DCF.' },
            { text: 'Usar el precio de compras recientes de empresas similares', bucket: 1, why: 'Son transacciones de parecidos: múltiplos.' },
          ],
        },
      },
      { tip: 'Los múltiplos son rápidos, pero copian también los excesos del mercado. Por eso se comparan con el DCF y se da un **rango** de valor, no un número exacto.' },
    ],
  ],
}
