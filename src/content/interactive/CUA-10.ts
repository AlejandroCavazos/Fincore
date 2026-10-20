import type { InteractiveLesson } from './types'

/** Tesorería de ejemplo: $1,000,000 entre un bono (6% esperado) y un fondo (10% esperado), máximo 40% en el fondo. */
const rend = (f: number) => 0.1 * (f / 100) * 1000000 + 0.06 * (1 - f / 100) * 1000000

export const intCUA10: InteractiveLesson = {
  lessonId: 'CUA-10',
  sections: [
    // ¿Qué eliges y qué reglas sigues?
    [
      { text: 'Doña Lety es tesorera de una cooperativa 🏦. Tiene **$1,000,000** para repartir entre un bono y un fondo, y quiere sacarle el mayor rendimiento esperado.' },
      {
        ask: 'La cooperativa tiene una regla: no poner más de 40% en el fondo. ¿Qué papel juega esa regla?',
        options: [
          { text: 'Es un límite que no se puede romper', ok: true, reply: '¡Exacto! Es una **restricción**: marca qué repartos están permitidos.' },
          { text: 'Es lo que Lety quiere ganar', reply: 'Lo que quiere es el mayor rendimiento. La regla del 40% es un **límite que no puede romper**: una restricción.' },
          { text: 'Es lo que Lety elige', reply: 'Lety elige cuánto va a cada lado. La regla del 40% es un **límite** que debe respetar.' },
        ],
      },
      {
        text: 'Optimizar es buscar **la mejor opción dentro de lo permitido**. Todo problema tiene 3 piezas:\n🎛️ **Variables de decisión:** lo que eliges (cuánto en cada uno).\n🎯 **Función objetivo:** lo que quieres maximizar o minimizar.\n🚧 **Restricciones:** las reglas que no puedes romper.',
      },
      { text: 'Los repartos que cumplen **todas** las reglas forman la **región factible** ✅. La respuesta siempre se busca ahí dentro.' },
      {
        sort: {
          title: '¿Qué pieza es?',
          buckets: ['Variable de decisión', 'Función objetivo', 'Restricción'],
          items: [
            { text: 'Cuánto poner en el bono', bucket: 0, why: 'Lety lo elige: es variable de decisión.' },
            { text: 'Ganar el mayor rendimiento esperado', bucket: 1, why: 'Es lo que quiere maximizar: objetivo.' },
            { text: 'Invertir exactamente el 100% del dinero', bucket: 2, why: 'Es una regla que debe cumplir: restricción.' },
            { text: 'No poner más de 40% en el fondo', bucket: 2, why: 'Es un límite: restricción.' },
            { text: 'Tener el menor riesgo posible', bucket: 1, why: 'Es lo que se quiere minimizar: objetivo.' },
            { text: 'Cuánto poner en el fondo', bucket: 0, why: 'También lo elige Lety: variable.' },
          ],
        },
      },
      {
        ask: 'Con tu quincena quieres **ahorrar lo más posible**, pero **sin dejar de pagar la renta**. ¿Qué es "pagar la renta"?',
        options: [
          { text: 'Una restricción', ok: true, reply: '¡Sí! Es una regla que no puedes romper. Ahorrar lo más posible es el **objetivo**.' },
          { text: 'La función objetivo', reply: 'El objetivo es **ahorrar lo más posible**. Pagar la renta es una regla que debes cumplir: **restricción**.' },
          { text: 'Una variable de decisión', reply: 'Lo que eliges es cuánto ahorras y gastas. Pagar la renta es una regla: **restricción**.' },
        ],
      },
      { tip: 'Variables: lo que eliges. Objetivo: **una** cantidad a maximizar o minimizar. Restricciones: las reglas.' },
    ],
    // La mejor respuesta está en una esquina
    [
      { text: 'Cuando el objetivo y las reglas son solo **sumas de variables por números** (sin cuadrados), se llama **programación lineal**. Sirve para repartir presupuestos o planear flujos de efectivo al menor costo.' },
      { text: 'Un dato clave 📐: si el problema tiene solución óptima, **siempre hay una en una esquina** (vértice) de la región factible. En problemas chicos basta revisar las esquinas y quedarse con la mejor.' },
      {
        ask: 'Lety: bono a 6% y fondo a 10% esperados (de ejemplo), máximo 40% en el fondo. ¿Cuáles son las esquinas?',
        options: [
          { text: '0% o 40% en el fondo', ok: true, reply: '¡Exacto! Son los extremos que permite la regla. Ahora toca ver cuál rinde más.' },
          { text: '0% o 100% en el fondo', reply: 'El 100% rompe la regla del 40%. Las esquinas permitidas son **0% y 40%** en el fondo.' },
          { text: 'Solo 50 y 50', reply: 'El 50% en el fondo rompe la regla, y además no es una esquina. Las esquinas son **0% y 40%**.' },
        ],
      },
      {
        sim: {
          title: 'Reparte el $1,000,000 de Lety (tasas de ejemplo)',
          inputs: [{ key: 'f', label: 'Parte en el fondo (máximo 40%)', min: 0, max: 40, step: 10, value: 0 }],
          outputs: [
            { label: 'En el fondo (10%)', calc: (x) => (x.f / 100) * 1000000 },
            { label: 'En el bono (6%)', calc: (x) => (1 - x.f / 100) * 1000000 },
            { label: 'Rendimiento esperado al año', calc: (x) => rend(x.f), main: true },
          ],
          goal: {
            text: 'Encuentra el reparto con el **mayor** rendimiento esperado sin romper la regla.',
            check: (x) => rend(x.f) >= 76000,
            done: 'Con 40% en el fondo: 40,000 + 36,000 = **$76,000**, contra $60,000 con 0%. El óptimo llena el límite de lo que más rinde.',
          },
        },
      },
      {
        order: {
          title: 'Arma el método de las esquinas',
          steps: ['Identifica las esquinas que permiten las reglas', 'Calcula cuánto va a cada instrumento en cada esquina', 'Calcula el rendimiento en pesos de cada esquina', 'Quédate con la esquina que da más'],
          done: '¡Listo! Con eso resuelves problemas lineales chicos a mano.',
        },
      },
      {
        calc: {
          question: 'Otra cooperativa tiene **$600,000**: bono a 5% y fondo a 10% esperados (de ejemplo), máximo **30%** en el fondo. ¿Cuál es el mayor rendimiento esperado al año?',
          answer: 39000,
          hint: 'Esquina de 30%: fondo 180,000 y bono 420,000. Multiplica cada monto por su tasa y suma.',
          why: '0.10 × 180,000 = 18,000 y 0.05 × 420,000 = 21,000. Total: **$39,000**. La esquina de 0% da 0.05 × 600,000 = $30,000. Poner todo en el fondo rompería la regla.',
        },
      },
      { tip: 'En problemas grandes se usa el **método símplex**: salta de esquina en esquina mejorando el objetivo.' },
    ],
    // Menos riesgo con la mezcla justa
    [
      { text: 'Ahora Lety busca **el menor riesgo**. La varianza tiene cuadrados, así que ya no es lineal: es un problema **cuadrático** que se resuelve con software 💻. Con dos activos hay atajo.' },
      {
        ask: 'El activo A es movido (volatilidad 20%) y B es más tranquilo (15%); no tienen correlación. ¿Qué mezcla crees que da menos riesgo?',
        options: [
          { text: 'Más en B, pero algo en A', ok: true, reply: '¡Bien! El tranquilo recibe más peso, pero mezclar un poco de A baja el riesgo **por debajo** del de B solo.' },
          { text: '100% en B', reply: 'B solo tiene 15%. Si se mezcla con A sin correlación, el riesgo baja **más**: más en B, pero algo en A.' },
          { text: 'Siempre 50 y 50', reply: 'No siempre: el activo más tranquilo recibe más peso. La respuesta es **más en B, pero algo en A**.' },
        ],
      },
      { text: 'Sin correlación, el peso de A que da el menor riesgo es:\n**varianza de B ÷ (varianza de A + varianza de B)**\nLa varianza es la volatilidad en decimal al cuadrado: 20% → 0.04; 15% → 0.0225.' },
      {
        calc: {
          question: 'Con varianza de A = 0.04 y de B = 0.0225, ¿qué porcentaje va en A?',
          answer: 36,
          unit: '%',
          hint: '0.0225 ÷ (0.04 + 0.0225) = 0.0225 ÷ 0.0625.',
          why: '0.0225 ÷ 0.0625 = 0.36 = **36%** en A y 64% en B. Su volatilidad es 12%, menor que el 15% de B solo. Ojo: arriba va la varianza de **B**, no la de A.',
        },
      },
      {
        ask: 'Lety ya tiene su mezcla de menor varianza y agrega la regla "no vender en corto". ¿Qué le pasa a la varianza mínima?',
        options: [
          { text: 'Se queda igual o sube', ok: true, reply: '¡Exacto! Con una regla más hay menos combinaciones permitidas. Si la mezcla ya la cumplía, queda igual; si no, sube.' },
          { text: 'Siempre baja', reply: 'Una regla más **quita** opciones; no puede mejorar el óptimo. Se queda **igual o sube**.' },
          { text: 'Se vuelve cero', reply: 'Las reglas no eliminan el riesgo. Con menos opciones, la varianza mínima se queda **igual o sube**.' },
        ],
      },
      { text: 'Cuidado en la vida real ⚠️: el optimizador es **muy sensible a los rendimientos esperados**, que son estimaciones con mucho error. Un cambio pequeño puede mover mucho los pesos y juntar todo en pocos activos. Por eso se agregan límites por activo.' },
      {
        multi: {
          title: '¿Qué es cierto al usar el optimizador?',
          items: [
            { text: 'Es muy sensible a errores en los rendimientos esperados', ok: true },
            { text: 'Sin límites tiende a concentrar el dinero en pocos activos', ok: true },
            { text: 'Garantiza que obtendrás el rendimiento calculado', ok: false },
            { text: 'Poner límites por activo da mezclas más razonables', ok: true },
          ],
          why: 'El optimizador trata las estimaciones como si fueran exactas. **Nada garantiza** el rendimiento: los datos de entrada son estimaciones.',
        },
      },
      { tip: 'Agregar una regla **nunca mejora** el óptimo: lo deja igual o lo empeora. A cambio, da mezclas más prudentes.' },
    ],
  ],
}
