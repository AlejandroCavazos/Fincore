import type { InteractiveLesson } from './types'

export const intL606: InteractiveLesson = {
  lessonId: 'L6-06',
  sections: [
    // ¿Cuánto rinde tu mezcla?
    [
      { text: 'Diego, diseñador freelance de 28 años 🎨, reparte sus ahorros en dos inversiones de ejemplo: **A** rinde 10 % esperado y **B** rinde 5 %. Al conjunto se le llama **portafolio**.' },
      {
        ask: 'Diego pone 80 % en A (10 %) y 20 % en B (5 %). ¿Cuánto espera ganar el portafolio?',
        options: [
          { text: '9 %', ok: true, reply: '¡Sí! 0.8 × 10 % = 8 % y 0.2 × 5 % = 1 %. Total: **9 %**. Pesa más donde puso más dinero.' },
          { text: '7.5 %', reply: 'Eso es el promedio simple (10 + 5) ÷ 2. Pero puso **más dinero en A**: 0.8 × 10 + 0.2 × 5 = **9 %**.' },
          { text: '15 %', reply: 'Los rendimientos no se suman. Se **ponderan**: 0.8 × 10 + 0.2 × 5 = **9 %**.' },
        ],
      },
      { text: '⚖️ **Rendimiento esperado** = peso de A × rendimiento de A + peso de B × rendimiento de B.\nLos pesos van en decimal y **suman 1** (100 %). Es como tu promedio escolar: el examen final cuenta más que una tarea.' },
      {
        order: {
          title: 'Arma el cálculo',
          steps: ['Pasa los pesos a decimal y revisa que sumen 1', 'Multiplica cada peso por el rendimiento de su activo', 'Suma los resultados'],
          done: '¡Listo! Eso es un **promedio ponderado**.',
        },
      },
      {
        calc: {
          question: 'Diego cambia a 60 % en A (12 %) y 40 % en B (7 %). ¿Cuál es el rendimiento esperado en %?',
          answer: 10,
          unit: '%',
          hint: '0.6 × 12 + 0.4 × 7.',
          why: '7.2 % + 2.8 % = **10 %**. El promedio simple (12 + 7) ÷ 2 = 9.5 % ignora cuánto dinero puso en cada uno.',
        },
      },
      {
        sim: {
          title: 'Reparte el dinero de Diego (A 10 %, B 5 %, de ejemplo)',
          inputs: [{ key: 'w', label: 'Porcentaje en A (el resto va a B)', min: 0, max: 100, step: 10, value: 50 }],
          outputs: [
            { label: 'Porcentaje en B', calc: (v) => 100 - v.w, unit: '%' },
            { label: 'Rendimiento esperado', calc: (v) => Math.round((v.w * 10 + (100 - v.w) * 5)) / 100, unit: '%', main: true },
          ],
          goal: {
            text: 'Llega a un rendimiento esperado de **9 % o más**.',
            check: (v) => v.w * 10 + (100 - v.w) * 5 >= 900,
            done: 'Lo lograste poniendo más en A. Ojo: es un rendimiento **esperado** de ejemplo, no garantizado, y lo que rinde más suele traer más riesgo.',
          },
        },
      },
    ],
    // ¿Se mueven juntas o al revés?
    [
      { text: 'Diego también vende playeras ☀️ y paraguas ☔. Cuando a uno le va mal, al otro le va bien: juntos, sus ingresos son **más estables**.' },
      { text: '🎢 **Desviación estándar (σ):** qué tanto sube y baja una inversión. Más σ = más sobresaltos.\n🔗 **Correlación (ρ):** si dos inversiones se mueven juntas (+1), sin relación (0) o al revés (−1).' },
      {
        match: {
          title: 'Une cada correlación con lo que pasa',
          pairs: [
            ['ρ = +1', 'Suben y bajan siempre juntas'],
            ['ρ = 0', 'No tienen relación'],
            ['ρ = −1', 'Cuando una sube, la otra baja'],
          ],
        },
      },
      {
        sim: {
          title: 'Portafolio de Diego: 60 % en A (σ 20 %) y 40 % en B (σ 10 %)',
          inputs: [{ key: 'r', label: 'Correlación entre A y B (ρ)', min: -1, max: 1, step: 0.25, value: 1 }],
          outputs: [
            { label: 'Promedio ponderado de los riesgos (no cambia)', calc: () => 16, unit: '%' },
            { label: 'Riesgo real del portafolio (σ)', calc: (v) => Math.round(Math.sqrt(0.0144 + 0.0016 + 0.0096 * v.r) * 10000) / 100, unit: '%', main: true },
          ],
          goal: {
            text: 'Baja el riesgo del portafolio a **menos de 10 %** sin cambiar cuánto pusiste en cada uno.',
            check: (v) => Math.sqrt(0.0144 + 0.0016 + 0.0096 * v.r) < 0.1,
            done: 'Mismo dinero en cada uno, menos sobresaltos. Entre **más baja la correlación**, más baja el riesgo.',
          },
        },
      },
      {
        ask: '¿Cuándo el riesgo del portafolio es igual al promedio ponderado de los riesgos?',
        options: [
          { text: 'Solo cuando la correlación es +1', ok: true, reply: '¡Exacto! Con ρ = +1 no hay beneficio: σ = 0.6 × 20 + 0.4 × 10 = 16 %. Con cualquier ρ menor, el riesgo baja.' },
          { text: 'Siempre', reply: 'Solo con **ρ = +1**. En el simulador viste que con correlación menor el riesgo es menor que 16 %.' },
          { text: 'Cuando la correlación es 0', reply: 'Con ρ = 0 el riesgo ya es **menor** que el promedio. Solo es igual con **ρ = +1**.' },
        ],
      },
      { text: '⚡ **Atajos de los extremos:**\nρ = +1 → σ = peso A × σA + peso B × σB.\nρ = −1 → σ = |peso A × σA − peso B × σB|.\nCualquier otra correlación queda en medio.' },
      {
        calc: {
          question: 'Otro portafolio: 50 % en A (σ 20 %) y 50 % en B (σ 10 %), con correlación −1. ¿Cuál es su riesgo en %?',
          answer: 5,
          unit: '%',
          hint: '|0.5 × 20 − 0.5 × 10| = |10 − 5|.',
          why: '|10 − 5| = **5 %**. Con correlación +1 sería 10 + 5 = 15 %.',
        },
      },
    ],
    // ¿Diversificar quita todo el riesgo?
    [
      { text: '«No pongas todos los huevos en la misma canasta» 🧺. Diego compra acciones de muchas empresas. ¿Ya no tiene riesgo?' },
      { text: '🏢 **Riesgo no sistemático:** el de cada empresa (una huelga, un mal producto). La diversificación **lo reduce**.\n🌎 **Riesgo sistemático:** el de todo el mercado (tasas, recesiones). La diversificación **no lo elimina**.' },
      {
        sort: {
          title: '¿Qué riesgo es?',
          buckets: ['No sistemático (de una empresa)', 'Sistemático (de todo el mercado)'],
          items: [
            { text: 'Huelga en una fábrica', bucket: 0, why: 'Afecta a una sola empresa.' },
            { text: 'Recesión en todo el país', bucket: 1, why: 'Golpea a casi todas las empresas a la vez.' },
            { text: 'Un producto de una marca sale defectuoso', bucket: 0, why: 'Es un problema de esa empresa.' },
            { text: 'Suben las tasas de interés', bucket: 1, why: 'Afecta a todo el mercado.' },
            { text: 'El director de una empresa renuncia de golpe', bucket: 0, why: 'Es específico de esa empresa.' },
          ],
        },
      },
      {
        multi: {
          title: 'Marca lo que es cierto de la diversificación',
          items: [
            { text: 'Reduce el riesgo de cada empresa (no sistemático)', ok: true },
            { text: 'Su beneficio es mayor si las inversiones tienen correlación baja', ok: true },
            { text: 'No elimina el riesgo de mercado', ok: true },
            { text: 'Con muchas acciones desaparece todo el riesgo', ok: false },
            { text: 'Con correlación +1 se logra el mayor beneficio', ok: false },
          ],
          why: 'Diversificar baja el riesgo **específico**, no el **sistemático**. Con ρ = +1 no hay beneficio.',
        },
      },
      { text: '📐 **Índice de Sharpe** = (rendimiento esperado − tasa libre de riesgo) ÷ σ.\nLa **tasa libre de riesgo** es lo que ganarías casi sin riesgo (por ejemplo, bonos del gobierno). Sharpe = cuánto extra recibes por cada unidad de riesgo. **Más alto, mejor.**' },
      {
        calc: {
          question: 'El portafolio Uno de Diego espera 11 %, con σ de 12 %. La tasa libre de riesgo de ejemplo es 5 %. ¿Cuál es su Sharpe?',
          answer: 0.5,
          unit: 'de Sharpe',
          hint: '(11 − 5) ÷ 12.',
          why: '6 ÷ 12 = **0.5**. Si olvidas restar la tasa libre de riesgo te da 11 ÷ 12 ≈ 0.92.',
        },
      },
      {
        ask: 'El portafolio Dos espera 14 % con σ de 20 % (misma tasa libre de 5 %). ¿Cuál conviene más según Sharpe?',
        options: [
          { text: 'Uno: Sharpe 0.5 contra 0.45', ok: true, reply: '¡Bien! Dos: (14 − 5) ÷ 20 = 0.45. Uno da **más rendimiento por cada unidad de riesgo**.' },
          { text: 'Dos, porque rinde más', reply: 'Rinde más, pero con mucho más riesgo: (14 − 5) ÷ 20 = 0.45, menor que 0.5. Gana **Uno**.' },
          { text: 'Son iguales', reply: 'Dos: (14 − 5) ÷ 20 = **0.45**; Uno: 0.5. No son iguales: gana **Uno**.' },
        ],
      },
    ],
    // ¿Cuánto podrías perder en un día?
    [
      { text: 'Diego ya maneja **$1,000,000** de ejemplo. Su pregunta: «en un día malo, ¿cuánto podría perder?». Para eso existe el **VaR** (Valor en Riesgo).' },
      { text: '📉 **VaR** = valor del portafolio × σ del día × z.\n**z** es un número fijo según la confianza: **1.645** al 95 % y **2.326** al 99 %.' },
      {
        order: {
          title: 'Arma el VaR paso a paso',
          steps: ['Pasa la volatilidad a decimal (1 % = 0.01)', 'Multiplica valor × volatilidad: es la σ en pesos', 'Multiplica por la z de la confianza'],
          done: '¡Eso! Tres pasos y tienes el VaR paramétrico.',
        },
      },
      {
        calc: {
          question: 'El portafolio de Diego vale $1,000,000 y su volatilidad diaria es 1 %. ¿Cuál es su VaR de 1 día al 95 % (z = 1.645)?',
          answer: 16450,
          hint: '1,000,000 × 0.01 = 10,000. Luego × 1.645.',
          why: '10,000 × 1.645 = **$16,450**. Usar 1.96 es un error común: el VaR mira solo la cola de pérdidas, por eso 1.645.',
        },
      },
      {
        ask: '¿Qué significa un VaR diario al 95 % de $16,450?',
        options: [
          { text: 'En 95 de cada 100 días se espera perder menos de $16,450', ok: true, reply: '¡Exacto! Y en los otros 5 días la pérdida **puede ser mayor**, incluso mucho mayor.' },
          { text: 'Es lo máximo que Diego puede perder en un día', reply: 'Es el error más común. **No** es la pérdida máxima: en 5 de cada 100 días se puede perder más.' },
          { text: 'Que Diego ganará $16,450 al día', reply: 'El VaR habla de **pérdidas**, no de ganancias: en 95 de cada 100 días se espera perder menos de $16,450.' },
        ],
      },
      {
        multi: {
          title: 'Marca lo que es cierto del VaR',
          items: [
            { text: 'Al 99 % sale más alto que al 95 %, con los mismos datos', ok: true },
            { text: 'No dice cuánto se puede perder en los días peores', ok: true },
            { text: 'Se complementa con pruebas de estrés', ok: true },
            { text: 'Es la pérdida máxima posible', ok: false },
          ],
          why: 'A más confianza, z más grande (2.326 contra 1.645). El VaR **no** describe las pérdidas extremas: para eso se usan las pruebas de estrés y el Expected Shortfall.',
        },
      },
      { tip: 'VaR = valor × σ × z. Es una pérdida que **no debería superarse casi nunca**, no la pérdida máxima.' },
    ],
  ],
}
