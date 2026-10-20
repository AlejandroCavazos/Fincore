import type { InteractiveLesson } from './types'

export const intCUA03: InteractiveLesson = {
  lessonId: 'CUA-03',
  sections: [
    // ¿Cuánto esperas ganar en promedio?
    [
      { text: 'Marisol, enfermera, compara dos fondos **de ejemplo**. Nadie sabe cuánto rendirán el próximo año: es una **variable aleatoria**, un número que depende del azar 🎲.' },
      {
        ask: 'Un fondo da +20 % con probabilidad 0.6 o −10 % con probabilidad 0.4. ¿Cuánto esperas en promedio?',
        options: [
          { text: '8 %', ok: true, reply: '¡Bien! 0.6 × 20 + 0.4 × (−10) = 12 − 4 = **8 %**.' },
          { text: '5 %', reply: 'Ese es el promedio simple de 20 y −10. Pero el +20 pasa más seguido: 0.6 × 20 + 0.4 × (−10) = **8 %**.' },
          { text: '20 %', reply: 'Ese es solo el caso bueno. Hay que ponderar por probabilidad: **8 %**.' },
        ],
      },
      {
        text: '🎯 **Valor esperado** E[X]: suma de (probabilidad × resultado). Lo que obtendrías "en promedio" si repitieras muchas veces.\n📏 **Varianza**: qué tan lejos caen los resultados del promedio.\n🎢 **Desviación estándar σ**: su raíz cuadrada. Es la medida más usada de **volatilidad**.',
      },
      {
        calc: {
          question: 'Otro fondo de ejemplo: −4 % con probabilidad 0.25, 6 % con 0.5 y 16 % con 0.25. ¿Cuál es su rendimiento esperado, en porcentaje?',
          answer: 6,
          unit: '%',
          hint: '0.25 × (−4) + 0.5 × 6 + 0.25 × 16.',
          why: '−1 + 3 + 4 = **6 %**.',
        },
      },
      {
        sim: {
          title: 'Un fondo de ejemplo con dos resultados igual de probables (50 % y 50 %)',
          inputs: [
            { key: 'g', label: 'Resultado bueno (%)', min: 5, max: 20, step: 5, value: 20 },
            { key: 'b', label: 'Resultado malo (%)', min: -10, max: 5, step: 5, value: -10 },
          ],
          outputs: [
            { label: 'Rendimiento esperado', calc: (x) => (x.g + x.b) / 2, unit: '%' },
            { label: 'Desviación estándar σ', calc: (x) => Math.abs(x.g - x.b) / 2, main: true, unit: '%' },
          ],
          goal: {
            text: 'Deja el esperado en **5 %** pero baja la volatilidad a **5 % o menos**.',
            check: (x) => (x.g + x.b) / 2 === 5 && Math.abs(x.g - x.b) / 2 <= 5,
            done: 'Mismo promedio, menos brincos. Por eso dos inversiones con el mismo esperado no son iguales.',
          },
        },
      },
      { tip: 'El esperado dice **cuánto en promedio**; σ dice **cuánto brinca**. Necesitas los dos para comparar.' },
    ],
    // ¿Se mueven juntos o separados?
    [
      { text: 'Marisol quiere dos fondos que **no** caigan al mismo tiempo. Para eso mira si se mueven en la misma dirección.' },
      {
        text: '↗️↗️ **Covarianza** positiva: se mueven igual. Negativa: al revés. Pero su tamaño depende de las unidades.\n🧭 **Correlación** ρ = covarianza / (σA × σB). Siempre queda entre **−1 y +1**.',
      },
      {
        match: {
          title: 'Une cada correlación con lo que dice',
          pairs: [
            ['+1', 'Se mueven idéntico'],
            ['−1', 'Se mueven exactamente al revés'],
            ['0', 'No hay relación lineal'],
            ['+0.6', 'Tienden a moverse juntos, sin ser idénticos'],
          ],
        },
      },
      {
        ask: 'Covarianza de ejemplo = 0.002, σA = 0.04 y σB = 0.10. ¿Cuál es la correlación?',
        options: [
          { text: '0.5', ok: true, reply: '¡Exacto! 0.04 × 0.10 = 0.004, y 0.002 / 0.004 = **0.5**.' },
          { text: '0.002', reply: 'Esa es la covarianza. Hay que dividirla entre σA × σB = 0.004: da **0.5**.' },
          { text: '5', reply: 'La correlación nunca pasa de 1. Revisa la división: 0.002 / 0.004 = **0.5**.' },
        ],
      },
      {
        ask: 'La correlación de dos fondos es exactamente 0. ¿Son independientes?',
        options: [
          { text: 'No necesariamente', ok: true, reply: '¡Bien! 0 solo dice que no hay relación **lineal**. Puede haber una relación no lineal.' },
          { text: 'Sí, siempre', reply: 'Correlación cero no es independencia: puede haber una relación **no lineal**.' },
          { text: 'Sí, y nunca caerán juntos', reply: 'Nada lo garantiza: puede haber relación no lineal, y en crisis las correlaciones tienden a **subir**.' },
        ],
      },
      { tip: 'Ojo: en crisis, muchas correlaciones entre activos de riesgo **suben** justo cuando más necesitas diversificar.' },
    ],
    // La campana y sus sorpresas
    [
      { text: 'Marisol ve la famosa **campana** 🔔: la distribución normal. Es simétrica alrededor de la media μ y se define solo con μ y σ.' },
      {
        ask: 'Adivina: ¿qué parte de los datos cae a ±2σ de la media?',
        options: [
          { text: 'Cerca del 95 %', ok: true, reply: '¡Eso! Casi todo cae a ±2σ. Solo cerca del 5 % queda fuera.' },
          { text: 'Cerca del 50 %', reply: 'Es mucho más: cerca del **95 %** cae a ±2σ.' },
          { text: 'El 100 %', reply: 'Casi, pero no todo: cerca del **95 %**. Alrededor de 5 % queda fuera.' },
        ],
      },
      {
        text: '**Regla 68-95-99.7**: cerca del 68 % cae a ±1σ, 95 % a ±2σ y 99.7 % a ±3σ.\n📍 **Puntaje z** = (x − μ) / σ: a cuántas σ está un dato de la media.',
      },
      {
        calc: {
          question: 'Un fondo de ejemplo tiene μ = 1 % y σ = 4 % al mes. Un mes rinde 9 %. ¿Cuál es su puntaje z?',
          answer: 2,
          unit: 'desviaciones estándar',
          hint: '(9 − 1) / 4.',
          why: '8 / 4 = **2**: ese mes estuvo 2σ arriba de la media. Si hubiera rendido −7 %, z sería −2.',
        },
      },
      {
        ask: 'Otro mes rinde −11 %: z = (−11 − 1) / 4 = −3. ¿Qué tan raro es?',
        options: [
          { text: 'En una normal, rarísimo; en mercados reales pasa más seguido', ok: true, reply: '¡Exacto! Los rendimientos reales tienen **colas pesadas**.' },
          { text: 'Pasa casi cada mes', reply: 'A −3σ queda fuera del 99.7 %: en una normal sería rarísimo. Aunque en mercados reales pasa **más seguido** que eso.' },
          { text: 'Es imposible', reply: 'No es imposible: en mercados reales las caídas extremas pasan **más seguido** de lo que dice la normal.' },
        ],
      },
      {
        text: '🦖 **Colas pesadas** (curtosis alta): las caídas extremas pasan más de lo que predice la normal.\n↘️ **Asimetría**: por ejemplo, caídas más bruscas que las subidas.',
      },
      {
        multi: {
          title: '¿Qué es cierto de las colas? Marca todas',
          items: [
            { text: 'Los rendimientos reales suelen tener colas más pesadas que la normal', ok: true },
            { text: 'Usar la normal sin revisar las colas subestima el riesgo extremo', ok: true },
            { text: 'Curtosis alta = menos eventos extremos', ok: false },
            { text: 'La normal es asimétrica', ok: false },
          ],
          why: 'Curtosis alta = **más** eventos extremos. La normal es **simétrica**; los rendimientos reales pueden no serlo.',
        },
      },
      { tip: '±1σ ≈ 68 %, ±2σ ≈ 95 %, ±3σ ≈ 99.7 %. Pero la vida real tiene más sorpresas que la campana.' },
    ],
  ],
}
