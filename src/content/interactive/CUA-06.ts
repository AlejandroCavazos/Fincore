import type { InteractiveLesson } from './types'

const sce = (x: Record<string, number>) => [[1, 3], [2, 5], [3, 7]].reduce((s, [px, py]) => s + (py - (x.a + x.b * px)) ** 2, 0)

export const intCUA06: InteractiveLesson = {
  lessonId: 'CUA-06',
  sections: [
    // La recta que mejor encaja
    [
      { text: 'Lucía tiene 3 cafeterías ☕. Sospecha que con más clientes por hora vende más. Quiere una **recta** que lo diga con números.' },
      {
        text: '**Regresión lineal simple**: Y = a + b·X + e\n🎯 **Y**: lo que quieres explicar (ventas).\n🔧 **X**: lo que la explica (clientes por hora).\n📍 **a**: Y cuando X = 0. 📐 **b**: cuánto cambia Y por cada unidad de X. 🎲 **e**: el error.',
      },
      {
        ask: 'Su recta de ejemplo: ventas = 20 + 3 × clientes (miles de pesos al día). Con 10 clientes por hora, ¿cuánto predice?',
        options: [
          { text: '50 mil pesos', ok: true, reply: '¡Bien! 20 + 3 × 10 = 20 + 30 = **50**.' },
          { text: '23 mil pesos', reply: 'Sumaste 20 + 3, pero el 3 se multiplica por los clientes: 20 + 3 × 10 = **50**.' },
          { text: '30 mil pesos', reply: 'Eso es solo 3 × 10. Falta sumar la ordenada: 20 + 30 = **50**.' },
        ],
      },
      { text: '¿Cuál recta es la **mejor**? La de **mínimos cuadrados (MCO)**: la que deja más pequeña la suma de los errores al cuadrado. Al cuadrado para que + y − no se cancelen.' },
      {
        sim: {
          title: 'Lucía tiene 3 datos: (1, 3), (2, 5) y (3, 7). Mueve la recta Y = a + b·X',
          inputs: [
            { key: 'a', label: 'Ordenada a', min: 1, max: 5, step: 0.5, value: 3 },
            { key: 'b', label: 'Pendiente b', min: 0, max: 2, step: 0.5, value: 1 },
          ],
          outputs: [{ label: 'Suma de errores al cuadrado', calc: sce, main: true, unit: 'puntos' }],
          goal: {
            text: 'Deja la suma de errores al cuadrado en **0**.',
            check: (x) => sce(x) < 1e-9,
            done: 'Con a = 1 y b = 2 la recta pasa justo por los tres puntos. Con datos reales casi nunca queda en 0: MCO busca la más chica.',
          },
        },
      },
      { text: 'Fórmulas de MCO: **b = Cov(X, Y) / Var(X)** y **a = ȳ − b·x̄**. La recta siempre pasa por los promedios (x̄, ȳ).' },
      {
        calc: {
          question: 'Datos de ejemplo: x̄ = 3, ȳ = 12 (miles de pesos), Cov(X, Y) = 8 y Var(X) = 4. ¿Cuánto vale la ordenada a?',
          answer: 6,
          unit: 'mil pesos',
          hint: 'Primero b = 8 / 4. Luego a = 12 − b × 3.',
          why: 'b = 2, y a = 12 − 2 × 3 = **6**. La recta queda Y = 6 + 2X.',
        },
      },
      {
        calc: {
          question: 'Con esa recta (Y = 6 + 2X), ¿cuánto predice para X = 5?',
          answer: 16,
          unit: 'mil pesos',
          hint: '6 + 2 × 5.',
          why: '6 + 10 = **16**.',
        },
      },
    ],
    // ¿Qué tan bien explica la recta?
    [
      { text: 'La recta de Lucía no pasa justo por todos los puntos. ¿Qué tan bien los sigue? Para eso está el **R²**, la "calificación" del modelo 📝.' },
      {
        text: '**R² = 1 − SCR / SCT**\n🎲 **SCR**: suma de cuadrados de los residuales (lo que el modelo no explica).\n📦 **SCT**: suma de cuadrados total (cuánto varía Y respecto a su promedio).\nVa de 0 % a 100 %.',
      },
      {
        calc: {
          question: 'SCT = 400 y SCR = 80 (de ejemplo). ¿Cuál es el R², en porcentaje?',
          answer: 80,
          unit: '%',
          hint: '1 − 80 / 400, y luego por 100.',
          why: '80 / 400 = 0.2; 1 − 0.2 = 0.8 = **80 %** de la variación explicada.',
        },
      },
      { text: '¿El coeficiente es distinto de cero? **t = coeficiente / su error estándar**. Con muestras grandes, |t| > 1.96 es significativo al 5 %.' },
      {
        calc: {
          question: 'El coeficiente de clientes es 3.6 con error estándar de 1.2 (de ejemplo). ¿Cuánto vale t?',
          answer: 3,
          unit: 'errores estándar',
          hint: '3.6 / 1.2.',
          why: '3.6 / 1.2 = **3**. Como pasa de 1.96, es significativo al 5 %.',
        },
      },
      {
        rush: {
          title: '¿Cierto o falso?',
          seconds: 30,
          labels: ['Cierto', 'Falso'],
          items: [
            { text: 'Un R² alto prueba que X causa Y', ans: 1 },
            { text: 'En rendimientos diarios, R² modestos son comunes', ans: 0 },
            { text: 'Un R² bajo siempre es malo', ans: 1 },
            { text: 'Un coeficiente puede ser significativo pero pequeño', ans: 0 },
            { text: 'Con muestras grandes, t = 1.2 es significativo al 5 %', ans: 1 },
            { text: 'R² = 1 − SCR / SCT', ans: 0 },
          ],
        },
      },
      { tip: 'R² dice **qué tanto** explica; t dice si un coeficiente es **distinto de cero**. Revisa también si importa en dinero.' },
    ],
    // Más variables, más cuidado
    [
      { text: 'Lucía agrega más cosas a su modelo: clientes **y** si es diciembre. Eso es **regresión múltiple**: Y = a + b1·X1 + b2·X2 + …' },
      {
        text: '🧊 Cada coeficiente se lee **ceteris paribus**: cuánto cambia Y si sube esa X, **con las demás iguales**.\n🔘 Una **dummy** vale 1 o 0 (sí/no). Su coeficiente es la diferencia promedio entre los dos grupos.',
      },
      {
        ask: 'Ventas = 100 + 20 × Diciembre (miles de pesos, de ejemplo). ¿Qué significa el 20?',
        options: [
          { text: 'En diciembre se vende, en promedio, 20 más', ok: true, reply: '¡Eso! Es la diferencia promedio entre el grupo con 1 (diciembre) y el grupo con 0.' },
          { text: 'El 20 % de los meses es diciembre', reply: 'El coeficiente no cuenta meses: es la **diferencia promedio** de ventas entre diciembre y los demás meses.' },
          { text: 'Diciembre garantiza 20 más cada año', reply: 'Es una diferencia **promedio**, no una garantía ni una prueba de causa.' },
        ],
      },
      {
        calc: {
          question: 'Modelo de ejemplo: rendimiento = 1 + 2 × Mercado − 1 × Dummy(crisis). Con mercado de 3 % en un mes **con** crisis, ¿cuánto predice, en porcentaje?',
          answer: 6,
          unit: '%',
          hint: 'La dummy vale 1 en crisis: 1 + 2 × 3 − 1 × 1.',
          why: '1 + 6 − 1 = **6 %**. Sin crisis serían 7 %.',
        },
      },
      {
        ask: 'Lucía mete 15 variables más, algunas sin sentido (como el color de las tazas). ¿Qué pasa con el R² dentro de la muestra?',
        options: [
          { text: 'Nunca baja', ok: true, reply: '¡Exacto! Dentro de la muestra el R² **nunca baja** al agregar variables, aunque sean basura.' },
          { text: 'Baja, porque son variables basura', reply: 'Suena lógico, pero no: dentro de la muestra el R² **nunca baja** al agregar variables.' },
          { text: 'Se vuelve 0', reply: 'No: dentro de la muestra el R² **nunca baja** al agregar variables. Por eso engaña.' },
        ],
      },
      {
        text: 'Eso es **sobreajuste**. Defensas:\n⚖️ **R² ajustado**: penaliza variables extra.\n🧪 Probar con datos que el modelo **no usó**.\n👯 Cuidar la **multicolinealidad**: si dos X se mueven casi igual, sus coeficientes se vuelven inestables.',
      },
      {
        order: {
          title: 'Arma un modelo sin sobreajuste',
          steps: ['Elige variables con sentido', 'Estima el modelo con MCO', 'Revisa el R² ajustado', 'Pruébalo con datos que no usó'],
          done: '¡Bien! Lo que importa es que funcione con datos nuevos, no solo con los que ya vio.',
        },
      },
      { tip: 'Más variables siempre "mejoran" el R² dentro de la muestra. La prueba de verdad es **fuera de muestra**.' },
    ],
  ],
}
