import type { InteractiveLesson } from './types'

export const intCUA14: InteractiveLesson = {
  lessonId: 'CUA-14',
  sections: [
    // Jugar el futuro miles de veces
    [
      { text: 'Daniela es analista junior en un despacho de inversiones 💻. Un cliente pregunta: "¿me alcanzará mi ahorro para el retiro?". No hay una fórmula exacta.' },
      {
        ask: 'Daniela lanza una moneda 10 veces y salen 7 águilas (70%). Si la lanza **10,000** veces, ¿qué esperas?',
        options: [
          { text: 'Otra vez cerca de 70% águilas', reply: 'Con 10 lanzamientos el azar pesa mucho. Con 10,000 el promedio se acerca al verdadero: **cerca de 50%**.' },
          { text: 'Muy cerca de 50% águilas', ok: true, reply: '¡Sí! Es la **ley de los grandes números**: con muchas repeticiones, el promedio se acerca al valor esperado.' },
          { text: 'Exactamente 5,000 águilas, seguro', reply: 'Muy cerca, pero no exacto: siempre queda algo de azar. Por eso decimos **cerca de 50%**.' },
        ],
      },
      {
        text: 'Esa es la idea de **Monte Carlo** 🎲: la computadora "juega" el futuro miles de veces con un modelo y luego mira el promedio y qué tan seguido pasó lo malo. Los pasos:\n1️⃣ Define el modelo y sus supuestos\n2️⃣ Genera números al azar y arma escenarios\n3️⃣ Calcula el resultado en cada escenario\n4️⃣ Resume: promedio, percentiles, probabilidades\n5️⃣ Mide la precisión y revisa los supuestos',
      },
      {
        order: {
          title: 'Ordena la simulación de Daniela',
          steps: [
            'Define el modelo de rendimientos y sus supuestos',
            'Genera números al azar y arma 10,000 trayectorias',
            'Revisa en cada trayectoria si el ahorro se acaba',
            'Cuenta en cuántas pasó y saca la probabilidad',
            'Mide la precisión y prueba otros supuestos',
          ],
          done: '¡Bien! Primero el modelo, al final la revisión: "basura entra, basura sale".',
        },
      },
      {
        calc: {
          question: 'De **10,000** trayectorias, en **1,200** el ahorro se acaba antes de tiempo. ¿Qué porcentaje de probabilidad estima Daniela?',
          answer: 12,
          unit: '%',
          hint: 'Escenarios donde pasa ÷ total de escenarios: 1,200 ÷ 10,000.',
          why: '1,200 ÷ 10,000 = 0.12 = **12%**, siempre con esos supuestos.',
        },
      },
      {
        text: 'Monte Carlo también valúa opciones. Para una call: en **cada** escenario calcula el pago máx(precio − K, 0), luego promedia y multiplica por el factor de descuento para traerlo a hoy.',
      },
      {
        calc: {
          question: 'Precios finales simulados: **$70, $84, $96 y $112**. Call con K = **$80**. ¿Cuál es el **pago promedio** al vencimiento?',
          answer: 13,
          hint: 'Pagos uno por uno: 0, 4, 16 y 32. Súmalos y divide entre 4.',
          why: '0 + 4 + 16 + 32 = 52. 52 ÷ 4 = **$13**. Con un factor de descuento de 0.95, vale hoy 13 × 0.95 = $12.35. Si promedias primero los precios (90.5) y restas 80, te da 10.5: está mal, porque el pago nunca es negativo.',
        },
      },
    ],
    // ¿Cómo se simula un precio?
    [
      {
        text: 'Para simular precios de acciones, Daniela usa el **movimiento browniano geométrico** 📉📈. Dice que el precio:\n🚶 crece a un ritmo promedio, la **deriva** (μ)\n💥 y recibe **choques al azar** cuyo tamaño depende de la **volatilidad** (σ).',
      },
      {
        text: 'Cada choque usa un número **Z** al azar de una normal estándar (promedio 0, desviación 1). Z positivo empuja el precio arriba; Z negativo, abajo. Como se usa una exponencial, el precio **nunca** queda negativo.\n🧮 Precio nuevo = precio × e^[(μ − σ²/2) × Δt + σ × √Δt × Z]',
      },
      {
        match: {
          title: 'Une cada pieza con lo que hace',
          pairs: [
            ['μ (deriva)', 'El ritmo promedio al que crece el precio'],
            ['σ (volatilidad)', 'Qué tan grandes son los choques'],
            ['Z', 'El choque al azar de cada escenario'],
            ['Δt', 'El tamaño del paso, en años'],
            ['−σ²/2', 'Corrección para que el promedio crezca a μ'],
          ],
        },
      },
      {
        sim: {
          title: 'Un año de una acción de $100',
          inputs: [
            { key: 'mu', label: 'Deriva μ (% anual, de ejemplo)', min: 0, max: 12, step: 4, value: 8 },
            { key: 'sg', label: 'Volatilidad σ (% anual)', min: 10, max: 40, step: 10, value: 20 },
            { key: 'z', label: 'Choque Z que salió al azar', min: -2, max: 2, step: 1, value: 0 },
          ],
          outputs: [
            { label: 'Precio simulado en un año', calc: (x) => 100 * Math.exp(x.mu / 100 - (x.sg / 100) ** 2 / 2 + (x.sg / 100) * x.z), unit: 'pesos', main: true },
          ],
          goal: {
            text: 'Prueba un choque malo: haz que el precio termine **abajo de $75**.',
            check: (x) => 100 * Math.exp(x.mu / 100 - (x.sg / 100) ** 2 / 2 + (x.sg / 100) * x.z) < 75,
            done: 'Bajó mucho, pero nunca queda negativo: la exponencial lo impide. Con más σ, los choques pesan más.',
          },
        },
      },
      {
        multi: {
          title: 'Marca todo lo que es cierto',
          items: [
            { text: 'Z sale de una normal estándar: promedio 0, desviación 1', ok: true },
            { text: 'Con Z negativo, el precio simulado puede volverse negativo', ok: false },
            { text: 'Para valuar derivados se usa la tasa libre de riesgo r en lugar de μ', ok: true },
            { text: 'La corrección −σ²/2 se puede omitir sin cambiar nada', ok: false },
          ],
          why: 'La exponencial evita precios negativos. Omitir −σ²/2 (u olvidar la raíz de Δt) es el error típico. Para valuar derivados se usa **r** y se descuenta a r.',
        },
      },
      { tip: 'Cada escenario es un camino posible, no una predicción. Monte Carlo junta miles de caminos para ver el panorama.' },
    ],
    // ¿Cuánto confiar en el resultado?
    [
      {
        text: 'Daniela presenta su resultado y su jefa pregunta: "¿qué tan exacto es?" 🤔. Monte Carlo tiene error por azar, y se mide con el **error estándar**:\n🧮 **Error estándar = desviación estándar ÷ √N** (N = número de simulaciones)',
      },
      {
        calc: {
          question: 'Con **400** simulaciones, la desviación estándar de los pagos es **$40**. ¿Cuál es el error estándar?',
          answer: 2,
          hint: '√400 = 20. Luego 40 ÷ 20.',
          why: '√400 = 20 y 40 ÷ 20 = **$2**. Si divides entre N (400) en lugar de √N, te da $0.10: muy optimista.',
        },
      },
      {
        ask: 'Daniela quiere bajar ese error **a la mitad**. ¿Por cuánto multiplica las simulaciones?',
        options: [
          { text: 'Por 2', reply: 'Duplicar solo divide el error entre √2 ≈ 1.41. Para la mitad, √N debe duplicarse: **4 veces** más simulaciones.' },
          { text: 'Por 4', ok: true, reply: '¡Eso! Como se divide entre √N, para partir el error a la mitad necesitas 2² = **4 veces** más.' },
          { text: 'Por 10', reply: 'Es de más. Con 4 veces más simulaciones, √N se duplica y el error baja a la mitad.' },
        ],
      },
      {
        sim: {
          title: 'Pagos con desviación estándar de $20',
          inputs: [{ key: 'n', label: 'Número de simulaciones', min: 100, max: 4900, step: 100, value: 100 }],
          outputs: [
            { label: 'Margen de 95% (±1.96 × error)', calc: (x) => 1.96 * (20 / Math.sqrt(x.n)), unit: 'pesos' },
            { label: 'Error estándar', calc: (x) => 20 / Math.sqrt(x.n), unit: 'pesos', main: true },
          ],
          goal: {
            text: 'Baja el error estándar de $2 a **$0.50 o menos**.',
            check: (x) => 20 / Math.sqrt(x.n) <= 0.5 + 1e-9,
            done: 'Para dividir el error entre 4 necesitaste **16 veces** más simulaciones (100 → 1,600). La precisión cuesta.',
          },
        },
      },
      {
        text: 'Dos trucos más:\n🌱 La **semilla** fija el punto de partida del generador: mismos números, mismo resultado, y otro lo puede revisar.\n🔁 Las **variables antitéticas** usan Z y también −Z: bajan el error sin subir tanto N.',
      },
      {
        ask: 'Daniela y su jefa corren el mismo código con la **misma semilla**. ¿Qué pasa?',
        options: [
          { text: 'Obtienen exactamente los mismos escenarios', ok: true, reply: '¡Sí! Eso hace el resultado **reproducible**: se puede repetir y auditar.' },
          { text: 'Salen escenarios distintos, porque son al azar', reply: 'Los números de la computadora son pseudoaleatorios: con la misma semilla y el mismo código, la secuencia **se repite igual**.' },
          { text: 'El resultado se vuelve más exacto', reply: 'La semilla no quita error: solo hace que el resultado se pueda **repetir**. Para más precisión, más simulaciones.' },
        ],
      },
      {
        sort: {
          title: '¿Ventaja o limitación de Monte Carlo?',
          buckets: ['Ventaja', 'Limitación'],
          items: [
            { text: 'Valúa pagos complicados que no tienen fórmula', bucket: 0, why: 'Es su gran fuerza: no necesita fórmula exacta.' },
            { text: 'Si los supuestos son malos, el resultado también', bucket: 1, why: '"Basura entra, basura sale". Más simulaciones no arreglan un mal modelo.' },
            { text: 'Maneja muchas variables a la vez', bucket: 0, why: 'Puede combinar muchos activos y factores de riesgo.' },
            { text: 'Mucha precisión puede requerir millones de escenarios', bucket: 1, why: 'El error baja con √N: es lento.' },
            { text: 'Entrega toda la distribución, no solo un promedio', bucket: 0, why: 'Sirve para ver percentiles y qué tan seguido pasa lo malo.' },
          ],
        },
      },
    ],
  ],
}
