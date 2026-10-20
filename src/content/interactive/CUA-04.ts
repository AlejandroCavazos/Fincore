import type { InteractiveLesson } from './types'

export const intCUA04: InteractiveLesson = {
  lessonId: 'CUA-04',
  sections: [
    // Pocos datos, mucha duda
    [
      { text: 'Andrés es analista junior. Tiene **36 meses** de historia de una estrategia **de ejemplo** y quiere saber cuánto gana en promedio **de verdad**.' },
      {
        ask: '¿Con 36 meses ya sabe el promedio verdadero?',
        options: [
          { text: 'No, solo lo puede estimar', ok: true, reply: '¡Bien! Con otros 36 meses le saldría otro promedio. Solo puede **estimar**.' },
          { text: 'Sí, 36 meses son todo', reply: 'Faltan los meses futuros y los que pudieron pasar. Solo puede **estimar** el promedio verdadero.' },
          { text: 'No, y no sirven para nada', reply: 'Sí sirven: con ellos **estima** el promedio verdadero, y hasta puede medir qué tan preciso es.' },
        ],
      },
      { text: '👥 **Población**: todo lo que te interesa, incluso el futuro.\n🧪 **Muestra**: lo que sí tienes.\nCon la muestra **estimas** la población.' },
      {
        sort: {
          title: '¿Población o muestra?',
          buckets: ['Población', 'Muestra'],
          items: [
            { text: 'Todos los rendimientos posibles de la estrategia, incluidos los futuros', bucket: 0, why: 'Es todo lo que interesa: la población.' },
            { text: 'Los 36 meses que Andrés tiene', bucket: 1, why: 'Es lo que sí tiene: la muestra.' },
            { text: 'El promedio verdadero μ', bucket: 0, why: 'Es una característica de la población; nadie la ve directo.' },
            { text: 'La media muestral x̄', bucket: 1, why: 'Se calcula con los datos que tiene: es de la muestra.' },
          ],
        },
      },
      { text: 'El **error estándar** mide cuánto cambiaría x̄ con otra muestra: **EE = s / √n** (s = desviación de la muestra, n = número de datos).' },
      {
        calc: {
          question: 's = 8 % y n = 16 meses. ¿Cuál es el error estándar, en porcentaje?',
          answer: 2,
          unit: '%',
          hint: '√16 = 4. Luego 8 / 4.',
          why: '8 / 4 = **2 %**.',
        },
      },
      {
        ask: 'Andrés quiere bajar el error estándar a la **mitad**. ¿Cuántos datos necesita?',
        options: [
          { text: '4 veces más', ok: true, reply: '¡Exacto! Por la raíz: √(4n) = 2√n, así que el EE baja a la mitad.' },
          { text: '2 veces más', reply: 'Por la raíz no alcanza: con el doble de datos, √n solo crece 1.41 veces. Necesita **4 veces** más.' },
          { text: 'La mitad de datos', reply: 'Menos datos hacen el EE **más grande**. Necesita **4 veces** más.' },
        ],
      },
      { tip: 'Por eso estimar rendimientos promedio es tan difícil en finanzas: la volatilidad es grande comparada con el promedio.' },
    ],
    // Un rango en vez de un número
    [
      { text: 'Andrés obtiene x̄ = 1 % al mes con EE = 1 %. En vez de dar un solo número, da un **rango** de valores creíbles.' },
      {
        text: '📏 **Intervalo de confianza del 95 %** (muestras grandes) = x̄ ± 1.96 × EE.\n🔁 "95 %" habla del **método**: si repites el muestreo muchas veces, cerca del 95 % de los intervalos atrapan el valor verdadero.',
      },
      {
        ask: 'Con x̄ = 3 % y EE = 1 %, ¿cuál es el intervalo del 95 %?',
        options: [
          { text: 'De 1.04 % a 4.96 %', ok: true, reply: '¡Bien! 1.96 × 1 = 1.96. Luego 3 − 1.96 = 1.04 y 3 + 1.96 = **4.96**.' },
          { text: 'De 2 % a 4 %', reply: 'Eso es ±1 × EE. Para el 95 % se usa **1.96** × EE: de 1.04 % a 4.96 %.' },
          { text: 'De 1.04 % a 3 %', reply: 'El intervalo va hacia **los dos lados** de x̄: de 1.04 % a 4.96 %.' },
        ],
      },
      {
        sim: {
          title: 'Andrés mantiene x̄ = 1 % al mes (de ejemplo)',
          inputs: [
            { key: 's', label: 'Desviación estándar s (%)', min: 2, max: 10, step: 1, value: 6 },
            { key: 'n', label: 'Meses de datos (n)', min: 36, max: 400, step: 4, value: 36 },
          ],
          outputs: [
            { label: 'Error estándar', calc: (x) => x.s / Math.sqrt(x.n), unit: '%' },
            { label: 'Límite inferior (95 %)', calc: (x) => 1 - (1.96 * x.s) / Math.sqrt(x.n), main: true, unit: '%' },
            { label: 'Límite superior (95 %)', calc: (x) => 1 + (1.96 * x.s) / Math.sqrt(x.n), unit: '%' },
          ],
          goal: {
            text: 'Haz que el intervalo **ya no incluya el 0** (límite inferior arriba de 0).',
            check: (x) => 1 - (1.96 * x.s) / Math.sqrt(x.n) > 0,
            done: 'Más datos o menos volatilidad = intervalo más **angosto**. Si incluye el 0, no puedes descartar que el promedio verdadero sea cero.',
          },
        },
      },
      {
        ask: '¿Qué pasa con el intervalo si pides 99 % de confianza en vez de 95 %?',
        options: [
          { text: 'Se hace más ancho', ok: true, reply: '¡Eso! Para estar más seguro de atrapar el valor verdadero, necesitas una red más **grande**.' },
          { text: 'Se hace más angosto', reply: 'Al revés: más confianza pide una red más **ancha**.' },
          { text: 'No cambia', reply: 'Sí cambia: más confianza = intervalo más **ancho**.' },
        ],
      },
      { tip: 'Más confianza = más **ancho**. Más datos = más **angosto**. El intervalo es un rango, no una garantía.' },
    ],
    // ¿Fue habilidad o pura suerte?
    [
      {
        ask: 'La estrategia de Andrés ganó en promedio. ¿Ya puede decir que tiene habilidad?',
        options: [
          { text: 'Todavía no: pudo ser suerte', ok: true, reply: '¡Bien pensado! Para separar habilidad de suerte hay una herramienta: la **prueba de hipótesis**.' },
          { text: 'Sí, ganó y punto', reply: 'Ganar unos meses puede ser suerte. Primero hay que **probarlo**.' },
          { text: 'No, eso nunca se puede saber', reply: 'Sí hay forma de medir la evidencia: la **prueba de hipótesis**.' },
        ],
      },
      {
        text: 'Es como un juicio ⚖️:\n😇 **H0** (nula): "la estrategia no gana nada", μ = 0. Es la postura "inocente".\n🎯 **H1**: lo que quieres demostrar.\n📏 **Estadístico t** = (x̄ − valor de H0) / EE: cuántos EE te alejas de H0.',
      },
      {
        calc: {
          question: 'x̄ = 1.5 %, s = 5 % y n = 100 meses. El EE es 5 / √100 = 0.5 %. ¿Cuánto vale t si H0 dice μ = 0?',
          answer: 3,
          unit: 'errores estándar',
          hint: '(1.5 − 0) / 0.5.',
          why: '1.5 / 0.5 = **3**: está a 3 errores estándar de lo que dice H0.',
        },
      },
      {
        text: '🎲 **Valor p**: la probabilidad de ver algo así de extremo **si H0 fuera cierta**.\nSi p < α (típicamente 5 %), **rechazas H0**. Con dos colas al 5 %, el valor crítico es ≈ 1.96.',
      },
      {
        ask: 'Su t = 3 da un valor p de 0.003. ¿Qué concluye al 5 %?',
        options: [
          { text: 'Rechaza H0: hay evidencia contra ella', ok: true, reply: '¡Exacto! 0.003 < 0.05. Y t = 3 pasa de 1.96.' },
          { text: 'Acepta H0 como verdadera', reply: 'p es muy pequeño: es evidencia **contra** H0, así que la rechaza.' },
          { text: 'Hay 0.3 % de probabilidad de que H1 sea cierta', reply: 'El valor p no es la probabilidad de H1. Es la probabilidad de ver datos así **si H0 fuera cierta**. Aquí rechaza H0.' },
        ],
      },
      { text: 'Dos formas de equivocarse:\n🚨 **Error tipo I** (falso positivo): rechazar H0 siendo cierta.\n🙈 **Error tipo II** (falso negativo): no rechazar H0 siendo falsa.' },
      {
        sort: {
          title: '¿Error tipo I o tipo II?',
          buckets: ['Tipo I (falso positivo)', 'Tipo II (falso negativo)'],
          items: [
            { text: 'Crees que una estrategia gana, pero fue pura suerte', bucket: 0, why: 'Rechazaste H0 ("no gana") cuando era cierta.' },
            { text: 'Descartas un indicador que sí predecía, porque la prueba no salió significativa', bucket: 1, why: 'No rechazaste H0 cuando era falsa.' },
            { text: 'Dices que un gestor tiene habilidad cuando en realidad no la tiene', bucket: 0, why: 'Falso positivo: viste habilidad donde no había.' },
            { text: 'Con pocos datos, no detectas que un fondo sí gana en promedio', bucket: 1, why: 'Falso negativo: se te escapó algo real.' },
          ],
        },
      },
      { tip: 'No rechazar H0 **no prueba** que sea cierta. Y probar muchas estrategias para quedarte con la "mejor" infla los falsos positivos.' },
    ],
  ],
}
