import type { InteractiveLesson } from './types'

const vpnLinea = (fc: number, k: number) => fc / (1 + k) + fc / (1 + k) ** 2 - 100000

export const intL405: InteractiveLesson = {
  lessonId: 'L4-05',
  sections: [
    // ¿Qué riesgo se puede quitar?
    [
      { text: 'Valeria es analista junior en una empresa de botanas 🌶️. Su jefa le pide explicar el riesgo de invertir en acciones.' },
      {
        ask: 'Tienes acciones de **20 empresas distintas** y en una hay una huelga. ¿Qué pasa con tu dinero?',
        options: [
          { text: 'Las otras 19 compensan el golpe', ok: true, reply: '¡Eso! Es **diversificar**: no poner todos los huevos en la misma canasta.' },
          { text: 'Pierdes todo', reply: 'Solo una empresa tuvo problemas. Las otras 19 **compensan**: eso es diversificar.' },
          { text: 'Todas bajan igual', reply: 'Una huelga afecta a una sola empresa. Las demás **compensan**.' },
        ],
      },
      { text: 'El riesgo tiene dos partes:\n🏭 **No sistemático:** propio de la empresa (una huelga, la salida del director). Se quita diversificando.\n🌎 **Sistemático:** de toda la economía (recesión, tasas de interés, inflación). No se quita. Por eso solo este se premia.' },
      {
        sort: {
          title: '¿Qué tipo de riesgo es?',
          buckets: ['Sistemático (de mercado)', 'No sistemático (de la empresa)'],
          items: [
            { text: 'Huelga en la fábrica de botanas', bucket: 1, why: 'Afecta solo a esta empresa: se quita diversificando.' },
            { text: 'Recesión en todo el país', bucket: 0, why: 'Le pega a toda la economía a la vez.' },
            { text: 'Sube la tasa de interés del banco central', bucket: 0, why: 'Afecta a todas las empresas: es de mercado.' },
            { text: 'Retiran un lote defectuoso de papas', bucket: 1, why: 'Es un problema propio de la empresa.' },
            { text: 'Inflación más alta de lo esperado', bucket: 0, why: 'Afecta a toda la economía.' },
            { text: 'Renuncia sorpresa del director', bucket: 1, why: 'Es un evento propio de la empresa.' },
          ],
        },
      },
      { text: 'La **beta (β)** mide el riesgo sistemático:\n**Movimiento de la acción ≈ β × movimiento del mercado**\nβ = 1 se mueve como el mercado. β = 1.2 tiende a moverse 20 % más. β = 0.6, 40 % menos.' },
      {
        calc: {
          question: 'Una acción de ejemplo tiene β = 1.5. Si el mercado sube 10 %, ¿cuánto tiende a subir la acción, en %?',
          answer: 15,
          unit: '%',
          hint: '1.5 × 10',
          why: '1.5 × 10 % = **15 %**. Y si el mercado bajara 10 %, tendería a bajar 15 %.',
        },
      },
      {
        ask: 'La acción de la empresa de Valeria tiene β = 1.2. ¿Qué significa?',
        options: [
          { text: 'Tiende a moverse 20 % más que el mercado', ok: true, reply: '¡Exacto! Tiene más riesgo sistemático que el promedio.' },
          { text: 'Su rendimiento esperado es 1.2 %', reply: 'La beta no es un rendimiento. Dice que tiende a moverse **20 % más** que el mercado.' },
          { text: 'Su riesgo se puede quitar diversificando', reply: 'La beta mide justo el riesgo que **no** se quita. Con β = 1.2 se mueve **20 % más** que el mercado.' },
        ],
      },
      { tip: 'β mayor que 1: más movida que el mercado. Menor que 1: más tranquila. La beta no es un rendimiento ni mide el riesgo total, solo el de mercado.' },
    ],
    // ¿Cuánto piden los socios?
    [
      {
        ask: '¿Quién pedirá **más** rendimiento: un socio de una empresa con β = 1.5 o uno de una con β = 0.5?',
        options: [
          { text: 'El de β = 1.5', ok: true, reply: '¡Bien! Aguanta más riesgo de mercado, así que pide más a cambio.' },
          { text: 'El de β = 0.5', reply: 'β = 0.5 es más tranquila. Quien aguanta más riesgo, el de **β = 1.5**, pide más.' },
          { text: 'Los dos piden lo mismo', reply: 'El riesgo de mercado se premia: el de **β = 1.5** pide más.' },
        ],
      },
      { text: 'El **CAPM** dice lo que piden los socios (accionistas):\n**Re = rf + β × (Rm − rf)**\n🏛️ **rf:** lo que ganarías sin riesgo, prestándole al gobierno (en México suelen usarse Cetes o Bonos M).\n📊 **Rm − rf:** la **prima de mercado**, el extra que paga la bolsa sobre la tasa sin riesgo.' },
      {
        order: {
          title: 'Arma el cálculo del CAPM',
          steps: ['Calcula la prima de mercado: Rm − rf', 'Multiplica la prima por la beta', 'Súmale la tasa libre de riesgo'],
          done: '¡Eso! El resultado es el costo del capital propio (Re).',
        },
      },
      {
        calc: {
          question: 'Con datos de ejemplo: rf = 6 %, Rm = 11 % y β = 1.2. ¿Cuánto piden los socios (Re), en %?',
          answer: 12,
          unit: '%',
          hint: 'Prima: 11 − 6 = 5. Por la beta: 1.2 × 5 = 6. Más rf.',
          why: '6 % + 1.2 × 5 % = 6 % + 6 % = **12 %**.',
        },
      },
      {
        ask: 'Un compañero calculó 6 % + 1.2 × 11 % = 19.2 %. ¿Qué falló?',
        options: [
          { text: 'Multiplicó la beta por Rm en vez de por la prima', ok: true, reply: '¡Exacto! Así cuenta dos veces la tasa libre de riesgo. Va β × (Rm − rf).' },
          { text: 'Nada, está bien', reply: 'La beta multiplica la **prima** (Rm − rf), no Rm completo. Debía dar 12 %.' },
          { text: 'Debía restar la beta', reply: 'La beta se multiplica, pero por la **prima** (Rm − rf), no por Rm.' },
        ],
      },
      {
        sim: {
          title: 'Lo que piden los socios con CAPM (Rm de ejemplo: 11 %)',
          inputs: [
            { key: 'rf', label: 'Tasa libre de riesgo de ejemplo (%)', min: 4, max: 9, step: 1, value: 6 },
            { key: 'b', label: 'Beta', min: 0.4, max: 2, step: 0.2, value: 1 },
          ],
          outputs: [
            { label: 'Prima de mercado', calc: (x) => 11 - x.rf, unit: '%' },
            { label: 'Re (lo que piden los socios)', calc: (x) => Math.round((x.rf + x.b * (11 - x.rf)) * 100) / 100, unit: '%', main: true },
          ],
          goal: {
            text: 'Haz que los socios pidan **15 % o más**.',
            check: (x) => x.rf + x.b * (11 - x.rf) >= 15,
            done: 'A mayor beta, mayor Re: más riesgo de mercado, más rendimiento exigido.',
          },
        },
      },
      { tip: 'Re es el rendimiento mínimo que la empresa debe dar a sus socios. Sube cuando sube la beta.' },
    ],
    // ¿Cuánto cuesta todo el dinero?
    [
      { text: 'La empresa de Valeria consigue dinero de dos fuentes: los **socios** (capital, E) y los **bancos** (deuda, D). Cada una cobra distinto 💼.' },
      {
        ask: 'Los socios ponen el 80 % y piden 15 %. El banco pone el 20 % y cobra 10 %. ¿El costo promedio estará más cerca de…?',
        options: [
          { text: '15 %, porque los socios ponen más', ok: true, reply: '¡Bien! Se da más peso a quien aporta más. Eso es un promedio **ponderado**.' },
          { text: '10 %, porque la deuda es más barata', reply: 'La deuda es más barata, pero solo pone el 20 %. Pesa más lo de los socios: más cerca de **15 %**.' },
          { text: 'Justo 12.5 %, la mitad', reply: 'Eso sería si cada uno pusiera la mitad. Los socios ponen 80 %: queda más cerca de **15 %**.' },
        ],
      },
      { text: '**Escudo fiscal:** los intereses se restan antes de calcular el impuesto, así que la deuda cuesta menos de lo que dice su tasa:\n**Rd neto = Rd × (1 − T)**' },
      {
        calc: {
          question: 'El banco cobra **10 %** y la tasa de impuesto es **30 %** (la de la lección). ¿Cuánto cuesta la deuda después de impuestos, en %?',
          answer: 7,
          unit: '%',
          hint: '10 × (1 − 0.30) = 10 × 0.70',
          why: '10 % × 0.70 = **7 %**.',
        },
      },
      { text: 'El **WACC** (costo promedio ponderado de capital) junta todo:\n**WACC = E/V × Re + D/V × Rd × (1 − T)**, con V = E + D.\nSe usan **valores de mercado**, no los de libros.' },
      {
        match: {
          title: 'Une cada pieza del WACC',
          pairs: [
            ['E', 'Lo que valen las acciones en el mercado'],
            ['D', 'Lo que vale la deuda en el mercado'],
            ['V', 'E + D: el valor total'],
            ['Re', 'Lo que piden los socios'],
            ['Rd × (1 − T)', 'El costo de la deuda después de impuestos'],
          ],
        },
      },
      {
        calc: {
          question: 'E = $7,000,000 y D = $3,000,000. ¿Qué porcentaje del total es deuda (D/V)?',
          answer: 30,
          unit: '%',
          hint: 'V = 7,000,000 + 3,000,000. Luego D ÷ V.',
          why: 'V = $10,000,000. 3,000,000 ÷ 10,000,000 = **30 %**. E/V es el 70 % restante.',
        },
      },
      {
        calc: {
          question: 'Con E/V = 70 %, Re = 17 %, D/V = 30 % y Rd neto = 7 % (datos de ejemplo), ¿cuál es el WACC, en %?',
          answer: 14,
          unit: '%',
          hint: '0.70 × 17 + 0.30 × 7',
          why: '0.70 × 17 % = 11.9 %. 0.30 × 7 % = 2.1 %. WACC = **14 %**: lo mínimo que deben rendir sus proyectos de riesgo normal.',
        },
      },
    ],
    // ¿Cuánta deuda es demasiada?
    [
      { text: 'La jefa de Valeria dice: "La deuda sale más barata que los socios. ¡Pidamos muchísima!" 🤔' },
      {
        ask: '¿Más deuda siempre baja el costo y sube el valor?',
        options: [
          { text: 'No: hasta cierto punto ayuda, después daña', ok: true, reply: '¡Exacto! Un poco de deuda ayuda; demasiada pone en riesgo a la empresa.' },
          { text: 'Sí: entre más deuda, mejor', reply: 'Demasiada deuda es como una tarjeta al tope: un mal mes y no puedes pagar. **Ayuda hasta cierto punto**.' },
          { text: 'No: la deuda nunca ayuda', reply: 'Sí ayuda un poco: ahorra impuestos (escudo fiscal). El problema es **demasiada**.' },
        ],
      },
      { text: 'La **estructura de capital** es la mezcla de deuda y dinero de los socios.\n➕ La deuda ahorra impuestos (escudo fiscal).\n➖ Mucha deuda sube los **costos de dificultades financieras**: riesgo de quiebra, clientes que se van, restricciones.\n➖ Y los socios piden más (el **Re sube**).' },
      {
        sort: {
          title: '¿Ventaja de la deuda o costo de tener mucha?',
          buckets: ['Ventaja', 'Costo de mucha deuda'],
          items: [
            { text: 'Los intereses se restan antes del impuesto', bucket: 0, why: 'Es el escudo fiscal: la ventaja de la deuda.' },
            { text: 'Más riesgo de quiebra', bucket: 1, why: 'Es un costo de dificultades financieras.' },
            { text: 'Clientes que se van por miedo a que la empresa quiebre', bucket: 1, why: 'Otro costo de dificultades financieras.' },
            { text: 'Los socios piden más rendimiento', bucket: 1, why: 'Con más deuda, el capital propio es más riesgoso: el Re sube.' },
            { text: 'El banco pone restricciones a la empresa', bucket: 1, why: 'Es un costo de deber demasiado.' },
          ],
        },
      },
      {
        order: {
          title: 'Arma la idea del trade-off',
          steps: ['Un poco de deuda ahorra impuestos', 'pero demasiada sube el riesgo de no pagar', 'por eso existe un nivel de deuda óptimo'],
          done: '¡Eso es la teoría del trade-off (equilibrio entre ventajas y costos)!',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto?',
          items: [
            { text: 'La deuda agrega valor por el escudo fiscal', ok: true },
            { text: 'Demasiada deuda aumenta los costos de dificultades financieras', ok: true },
            { text: 'Cambiar socios por deuda baja el WACC sin límite', ok: false },
            { text: 'Con más deuda, los socios piden menos', ok: false },
          ],
          why: 'La deuda ayuda por el escudo fiscal, pero con mucha suben los costos de dificultades y el Re. Por eso el WACC no baja sin límite.',
        },
      },
      { tip: 'Modigliani-Miller: sin impuestos, la mezcla no cambia el valor. Con impuestos, la deuda ayuda. El trade-off agrega los costos de deber mucho: hay un punto óptimo.' },
    ],
    // ¿Qué tasa usar en cada proyecto?
    [
      { text: 'Para hacer las cuentas fáciles, supón que la empresa de Valeria tiene un WACC de ejemplo de **10 %**. Evalúa dos ideas: una **nueva línea de botanas** y entrar al negocio de los **videojuegos** 🎮.' },
      {
        ask: '¿Debe usar el mismo 10 % para las dos?',
        options: [
          { text: 'No: videojuegos es más riesgoso y pide una tasa mayor', ok: true, reply: '¡Exacto! El WACC solo sirve para proyectos con riesgo parecido al de la empresa.' },
          { text: 'Sí: es la misma empresa', reply: 'La empresa es la misma, pero el riesgo no. Videojuegos pide una **tasa mayor**.' },
          { text: 'No: videojuegos pide una tasa menor', reply: 'Al revés: más riesgo pide una tasa **mayor**.' },
        ],
      },
      { text: 'El WACC sirve solo para proyectos con **riesgo parecido** al del negocio y su financiamiento habitual. Un proyecto más riesgoso (otra industria) pide una tasa mayor, por ejemplo con la beta de **empresas comparables** de esa industria ("pure play").' },
      {
        sort: {
          title: '¿Qué tasa usarías?',
          buckets: ['El WACC de la empresa', 'Una tasa más alta'],
          items: [
            { text: 'Nueva línea de botanas', bucket: 0, why: 'Es el mismo negocio: riesgo parecido.' },
            { text: 'Ampliar la planta actual', bucket: 0, why: 'Mismo negocio, mismo riesgo.' },
            { text: 'Entrar a los videojuegos', bucket: 1, why: 'Otra industria, más riesgosa: tasa mayor.' },
            { text: 'Un nuevo sabor de papas', bucket: 0, why: 'Se parece al negocio actual.' },
            { text: 'Comprar una mina', bucket: 1, why: 'Nada que ver con botanas: otra industria, otra tasa.' },
          ],
        },
      },
      {
        calc: {
          question: 'La nueva línea cuesta **$100,000** y deja **$60,500** al final de cada uno de **2 años**. Con 10 %, ¿cuál es su VPN?',
          answer: 5000,
          hint: '60,500 ÷ 1.10 + 60,500 ÷ 1.21 − 100,000',
          why: '55,000 + 50,000 = 105,000. Menos 100,000 = **$5,000**. Positivo: se acepta.',
        },
      },
      {
        sim: {
          title: 'El mismo cálculo, pero con más riesgo',
          inputs: [
            { key: 'k', label: 'Tasa según el riesgo del proyecto (%)', min: 10, max: 20, step: 1, value: 10 },
            { key: 'fc', label: 'Flujo de cada año', min: 55000, max: 75000, step: 500, value: 60500 },
          ],
          outputs: [{ label: 'VPN', calc: (x) => vpnLinea(x.fc, x.k / 100), main: true }],
          goal: {
            text: 'Si fuera tan riesgoso como videojuegos, pon la tasa en **18 % o más** y encuentra un flujo que aún deje **VPN positivo**.',
            check: (x) => x.k >= 18 && vpnLinea(x.fc, x.k / 100) > 0,
            done: 'Con más riesgo, el proyecto necesita flujos más grandes para crear valor.',
          },
        },
      },
      {
        ask: 'Una empresa de alimentos con WACC de 12 % ve un proyecto de videojuegos con TIR de 14 %. ¿Qué hace?',
        options: [
          { text: 'Estima una tasa con el riesgo de videojuegos y acepta solo si la TIR la supera', ok: true, reply: '¡Bien! Con el WACC de alimentos, un proyecto riesgoso parecería bueno sin serlo.' },
          { text: 'Acepta: 14 % es más que 12 %', reply: 'El 12 % es para riesgo de alimentos. Hay que comparar con una **tasa ajustada al riesgo** de videojuegos.' },
          { text: 'Usa la tasa libre de riesgo porque la empresa es sólida', reply: 'El riesgo es del **proyecto**, no de la empresa. Usa una **tasa ajustada a ese riesgo**.' },
        ],
      },
      { tip: 'Un WACC único para todo hace aceptar proyectos riesgosos que destruyen valor y rechazar proyectos seguros que sí lo crean.' },
    ],
  ],
}
