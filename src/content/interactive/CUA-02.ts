import type { InteractiveLesson } from './types'

export const intCUA02: InteractiveLesson = {
  lessonId: 'CUA-02',
  sections: [
    // Tu portafolio en una cuenta
    [
      { text: 'Diego es analista junior en una cooperativa. Su jefa le pregunta: "¿Cuánto rindió el portafolio?". Tiene 60 % del dinero en un fondo A y 40 % en un fondo B, ambos **de ejemplo**.' },
      {
        ask: 'A rindió 10 % y B rindió 5 %. ¿Cuánto rindió el portafolio?',
        options: [
          { text: '8 %', ok: true, reply: '¡Bien! 0.6 × 10 + 0.4 × 5 = 6 + 2 = **8 %**.' },
          { text: '7.5 %', reply: 'Ese es el promedio simple, pero en A hay más dinero, así que pesa más: 0.6 × 10 + 0.4 × 5 = **8 %**.' },
          { text: '15 %', reply: 'Sumar los dos no sirve: cada uno cuenta según la parte de tu dinero. Da **8 %**.' },
        ],
      },
      {
        text: 'Eso es un **producto punto**:\n📋 **Vector de pesos** w = (0.6, 0.4): qué parte del dinero va en cada activo. Suman 1.\n📈 **Vector de rendimientos** R = (10 %, 5 %).\n✖️ Multiplica uno a uno y suma: w · R = w1·R1 + w2·R2.',
      },
      {
        calc: {
          question: 'Pesos w = (0.5, 0.25, 0.25) y rendimientos R = (8 %, 4 %, −4 %). ¿Cuánto rinde el portafolio, en porcentaje?',
          answer: 4,
          unit: '%',
          hint: '0.5 × 8 + 0.25 × 4 + 0.25 × (−4).',
          why: '4 + 1 − 1 = **4 %**. Ojo con el signo del rendimiento negativo.',
        },
      },
      {
        sim: {
          title: 'Diego reparte el dinero entre A (12 % de ejemplo) y B (4 % de ejemplo)',
          inputs: [{ key: 'w', label: 'Peso en A (%)', min: 0, max: 100, step: 10, value: 50 }],
          outputs: [
            { label: 'Peso en B', calc: (x) => 100 - x.w, unit: '%' },
            { label: 'Rendimiento del portafolio (w · R)', calc: (x) => (x.w * 12 + (100 - x.w) * 4) / 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Llega a un rendimiento de **10 % o más** con estos datos de ejemplo.',
            check: (x) => (x.w * 12 + (100 - x.w) * 4) / 100 >= 10,
            done: 'Los pesos deciden el resultado. Son rendimientos de ejemplo: nada garantiza que se repitan.',
          },
        },
      },
      { tip: 'Con 500 acciones la idea es la misma: la computadora solo hace más multiplicaciones.' },
    ],
    // Tablas de números que se multiplican
    [
      { text: 'Diego guarda 250 días de precios de 3 acciones en una tabla: 250 filas y 3 columnas. Eso es una **matriz de 250 × 3** (filas × columnas).' },
      { text: 'Para multiplicar A × B, las **columnas de A** deben ser iguales a las **filas de B**.\n(m × n) × (n × p) = **m × p**.' },
      {
        ask: 'A es de 3 × 2 y B es de 2 × 5. ¿Qué tamaño tiene A × B?',
        options: [
          { text: '3 × 5', ok: true, reply: '¡Sí! Los de en medio coinciden (2 y 2) y el resultado usa los de fuera: **3 × 5**.' },
          { text: '2 × 2', reply: 'Esos son los números de en medio, que solo deben coincidir. El resultado usa los de fuera: **3 × 5**.' },
          { text: 'No se puede multiplicar', reply: 'Sí se puede: columnas de A (2) = filas de B (2). Da **3 × 5**.' },
        ],
      },
      {
        ask: '¿Y B × A, con B de 2 × 5 y A de 3 × 2?',
        options: [
          { text: 'No se puede multiplicar', ok: true, reply: '¡Exacto! Columnas de B (5) ≠ filas de A (3). **El orden importa.**' },
          { text: '3 × 5, igual que antes', reply: 'Al cambiar el orden cambia todo: columnas de B (5) ≠ filas de A (3), así que **no se puede**.' },
          { text: '2 × 2', reply: 'Para eso tendrían que coincidir las columnas de B (5) con las filas de A (3), y no coinciden: **no se puede**.' },
        ],
      },
      {
        text: 'Aun con matrices cuadradas, en general **A × B ≠ B × A**.\nLa **inversa** A⁻¹ "deshace" a A: A × A⁻¹ = I, la identidad (el "1" de las matrices). Sirve para resolver sistemas de ecuaciones.\nEn una 2 × 2 [[a, b], [c, d]] solo existe si el **determinante** ad − bc no es cero.',
      },
      {
        calc: {
          question: '¿Cuánto vale el determinante de [[3, 1], [2, 2]]?',
          answer: 4,
          unit: 'unidades',
          hint: 'ad − bc = 3 × 2 − 1 × 2.',
          why: '6 − 2 = **4**. Como no es cero, esta matriz sí tiene inversa.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas las que apliquen',
          items: [
            { text: 'La identidad tiene 1 en la diagonal y 0 en lo demás', ok: true },
            { text: 'Si el determinante es 0, no hay inversa', ok: true },
            { text: 'Dos matrices cuadradas siempre cumplen A × B = B × A', ok: false },
            { text: 'La matriz de covarianzas de varios activos es cuadrada y simétrica', ok: true },
          ],
          why: 'El orden importa: en general A × B ≠ B × A. Determinante cero = sin inversa (el sistema no tiene solución única).',
        },
      },
    ],
    // ¿Cuánto cambia si muevo algo?
    [
      { text: 'Un pequeño fabricante le pregunta a Diego: "¿Cuántas piezas me conviene hacer para ganar lo más posible?". Para eso sirven las **derivadas**.' },
      {
        text: 'La **derivada** f′(x) es la **pendiente**: cuánto cambia algo si x cambia un poquito. En finanzas es **sensibilidad**, como cuánto cambia un bono si la tasa sube un poco.\nLa **integral** hace lo contrario: **acumula** cambios, como sumar flujos en el tiempo.',
      },
      {
        match: {
          title: 'Une cada función con su derivada',
          pairs: [
            ['Una constante', '0'],
            ['x^n', 'n·x^(n−1)'],
            ['e^x', 'e^x (la misma)'],
            ['ln x', '1/x'],
          ],
        },
      },
      {
        ask: 'La ganancia del fabricante sube y luego baja, como una montaña ⛰️. ¿Dónde está el máximo?',
        options: [
          { text: 'Donde la pendiente es cero', ok: true, reply: '¡Eso! En la cima ya no sube ni baja: **f′(x) = 0**.' },
          { text: 'Donde la pendiente es más grande', reply: 'Ahí todavía va subiendo fuerte. En la cima la pendiente es **cero**.' },
          { text: 'Al final de la gráfica', reply: 'Al final ya va de bajada. El máximo está donde la pendiente es **cero**.' },
        ],
      },
      {
        calc: {
          question: 'Utilidad de ejemplo: U(q) = −q² + 30q. Con las reglas, U′(q) = −2q + 30. ¿Con cuántas piezas U′(q) = 0?',
          answer: 15,
          unit: 'piezas',
          hint: 'La derivada de −q² es −2q y la de 30q es 30. Iguala −2q + 30 = 0.',
          why: '2q = 30, así que q = **15**. Compruébalo: U(15) = 225, y con 14 o 16 piezas da 224.',
        },
      },
      {
        sort: {
          title: '¿Álgebra lineal o cálculo?',
          buckets: ['Álgebra lineal', 'Cálculo'],
          items: [
            { text: 'Sacar el rendimiento de 30 activos con un producto punto', bucket: 0, why: 'Vectores y producto punto son álgebra lineal.' },
            { text: 'Ver cuánto cambia un bono si la tasa sube un poquito', bucket: 1, why: 'Es una sensibilidad: una derivada.' },
            { text: 'Resolver un sistema de ecuaciones con una inversa', bucket: 0, why: 'Matrices e inversas son álgebra lineal.' },
            { text: 'Buscar el precio con la ganancia más alta (pendiente cero)', bucket: 1, why: 'Igualar la derivada a cero es cálculo.' },
            { text: 'Guardar las covarianzas de 8 activos en una tabla cuadrada', bucket: 0, why: 'Esa tabla es una matriz.' },
            { text: 'Sumar un flujo continuo de ingresos en el tiempo', bucket: 1, why: 'Acumular cambios es una integral: cálculo.' },
          ],
        },
      },
      { tip: 'Derivada = pendiente = sensibilidad. Para el máximo o el mínimo, busca donde la **pendiente es cero**.' },
    ],
  ],
}
