import type { InteractiveLesson } from './types'

export const intCUA07: InteractiveLesson = {
  lessonId: 'CUA-07',
  sections: [
    // ¿Cuánto cambió el precio?
    [
      { text: 'Daniela es analista junior en una casa de bolsa 📈. Cada día anota el precio de cierre de una acción de ejemplo. Esa lista ordenada en el tiempo es una **serie de tiempo**: aquí **el orden importa**.' },
      {
        ask: 'Una acción pasó de $100 a $110 y otra de $20 a $25. ¿Cuál subió más?',
        options: [
          { text: 'La de $100, porque subió $10', reply: 'Subió más pesos, pero no más **en proporción**: 10 ÷ 100 = 10%, y la otra 5 ÷ 20 = 25%. Por eso se miden rendimientos.' },
          { text: 'La de $20, en proporción', ok: true, reply: '¡Exacto! 5 ÷ 20 = 25%, contra 10 ÷ 100 = 10%. Lo que importa es el cambio **en proporción**.' },
          { text: 'Subieron igual', reply: 'Una subió $10 y otra $5, y en proporción tampoco: 10% contra 25%. Ganó la de $20.' },
        ],
      },
      {
        text: 'Por eso en finanzas casi siempre se usan **rendimientos**: cuánto cambió el precio en proporción.\n📏 **Simple:** (precio de hoy − precio de ayer) ÷ precio de ayer.\n🧮 **Logarítmico:** ln(hoy ÷ ayer), con la tecla **ln** de la calculadora.\nPara cambios pequeños, los dos dan casi lo mismo.',
      },
      {
        calc: {
          question: 'La acción que sigue Daniela pasó de **$40** a **$42**. ¿Cuál fue su rendimiento simple, en %?',
          answer: 5,
          unit: '%',
          hint: '(42 − 40) ÷ 40, y multiplica por 100.',
          why: '42 − 40 = 2. Luego 2 ÷ 40 = 0.05 = **5%**. Si divides entre 42 (el precio final) te da ≈ 4.76%: siempre se divide entre el precio con el que empezaste.',
        },
      },
      { text: '¿Para qué dos tipos?\n🧺 El **simple** se suma **entre activos**: sirve para un portafolio en un día.\n⏳ El **logarítmico** se suma **en el tiempo**: el de la semana es la suma de los de cada día.' },
      {
        match: {
          title: 'Une cada idea con lo que hace',
          pairs: [
            ['Serie de tiempo', 'Datos en orden: el de hoy suele relacionarse con el de ayer'],
            ['Rendimiento simple', 'Divide el cambio entre el precio inicial'],
            ['Rendimiento logarítmico', 'Usa ln(precio de hoy ÷ precio de ayer)'],
            ['Logarítmico de varios días', 'Se suman los de cada día'],
          ],
        },
      },
      {
        calc: {
          question: 'Los rendimientos logarítmicos de 3 días fueron **+3%**, **−1%** y **+2%**. ¿Cuál es el acumulado, en %?',
          answer: 4,
          unit: '%',
          hint: 'Súmalos con su signo: 3 − 1 + 2.',
          why: '3 − 1 + 2 = **4%**. Si los promedias (≈ 1.33%) obtienes el día típico, no el acumulado.',
        },
      },
      { tip: 'Rendimiento = cambio ÷ precio inicial. Los logarítmicos de varios días **se suman**.' },
    ],
    // ¿La serie tiene memoria?
    [
      { text: 'Daniela pone dos gráficas lado a lado: el **precio** de la acción, que se va alejando sin volver a un nivel fijo, y sus **rendimientos** diarios, que brincan alrededor de cero.' },
      {
        ask: '¿Cuál crees que se comporta parecido a lo largo del tiempo?',
        options: [
          { text: 'Los rendimientos', ok: true, reply: '¡Sí! Su promedio y qué tanto varían se mantienen más estables. A eso se le llama **estacionaria**.' },
          { text: 'El precio', reply: 'El precio suele vagar sin regresar a un nivel fijo. Los que se mantienen parecidos son los **rendimientos**.' },
          { text: 'Ninguna, todo cambia igual', reply: 'Las dos cambian cada día, pero los **rendimientos** conservan un promedio y una variación más estables.' },
        ],
      },
      { text: 'Una serie es **estacionaria** si su **media** (promedio) y su **varianza** (qué tanto varía) no cambian con el tiempo. Como el clima de tu ciudad ☀️: cada día es distinto, pero los promedios del año se parecen.' },
      {
        text: '🎲 **Caminata aleatoria:** precio de hoy = precio de ayer + una sorpresa. Se aleja y no regresa: **no** es estacionaria.\n📈 **Tendencia:** la media sube o baja siempre: **no** es estacionaria.\n🔇 **Ruido blanco:** sin memoria, media y varianza fijas: **sí** es estacionaria.',
      },
      {
        sort: {
          title: '¿Es estacionaria?',
          buckets: ['Estacionaria', 'No estacionaria'],
          items: [
            { text: 'Ruido blanco: sin memoria, media y varianza fijas', bucket: 0, why: 'Es el caso más tranquilo: nada cambia en promedio.' },
            { text: 'Un precio que es "ayer + una sorpresa"', bucket: 1, why: 'Es una caminata aleatoria: las sorpresas se acumulan y no regresa a un nivel fijo.' },
            { text: 'Los rendimientos diarios de un índice', bucket: 0, why: 'Suelen tratarse como aproximadamente estacionarios.' },
            { text: 'Ventas que crecen cada año con una tendencia', bucket: 1, why: 'Su media sube con el tiempo: no es estacionaria.' },
          ],
        },
      },
      {
        ask: 'Si los precios casi nunca son estacionarios, ¿qué hace Daniela antes de usar un modelo?',
        options: [
          { text: 'Convierte los precios en rendimientos', ok: true, reply: '¡Eso! Los rendimientos se portan más estables, y los modelos clásicos necesitan eso para que el pasado sirva para el futuro.' },
          { text: 'Borra los días raros', reply: 'Borrar datos no arregla nada. Lo habitual es **convertir los precios en rendimientos**.' },
          { text: 'Usa solo el último precio', reply: 'Con un solo dato no hay modelo. Primero **convierte los precios en rendimientos**.' },
        ],
      },
      {
        ask: 'La **autocorrelación** mide si la serie se parece a sí misma de un día a otro. Si en los rendimientos del índice es **casi cero**, ¿qué te dice el de ayer sobre el de hoy?',
        options: [
          { text: 'Casi nada', ok: true, reply: '¡Exacto! Sin autocorrelación, el rendimiento de ayer casi no ayuda a predecir el de hoy.' },
          { text: 'Que hoy repetirá lo de ayer', reply: 'Eso pasaría con autocorrelación positiva. Si es casi cero, ayer **casi no dice nada** de hoy.' },
          { text: 'Que hoy hará lo contrario', reply: 'Eso sería autocorrelación negativa. Con casi cero, ayer **casi no dice nada** de hoy.' },
        ],
      },
      { tip: 'Precios: suelen ser caminata aleatoria (**no** estacionarios). Rendimientos: aproximadamente estacionarios. Por eso el primer paso es pasar de precios a rendimientos.' },
    ],
    // ¿Cómo pronosticar el siguiente dato?
    [
      { text: 'Ahora Daniela sigue el **diferencial** entre dos tasas: cuántos puntos de diferencia hay entre ellas. Quiere pronosticar el de mañana 🔮.' },
      {
        text: 'Un **AR(1)** dice: "mañana se parecerá a hoy, pero jalado hacia su promedio".\n**Valor de hoy = c + φ × valor de ayer + sorpresa**\n🧠 **φ (fi):** la memoria, qué parte de ayer sigue pesando.\n🎲 La sorpresa en promedio vale **0**, así que al pronosticar se quita.',
      },
      {
        calc: {
          question: 'Con c = 2, φ = 0.5 y el dato de hoy en **10**, ¿cuál es el pronóstico de mañana?',
          answer: 7,
          unit: 'puntos',
          hint: 'c + φ × último dato: 2 + 0.5 × 10.',
          why: '0.5 × 10 = 5, y 2 + 5 = **7**. La sorpresa no entra porque en promedio vale 0.',
        },
      },
      {
        calc: {
          question: '¿Y el de **pasado mañana**?',
          answer: 5.5,
          unit: 'puntos',
          hint: 'Usa el pronóstico de mañana (7), no el 10: 2 + 0.5 × 7.',
          why: '0.5 × 7 = 3.5, y 2 + 3.5 = **5.5**. Cada pronóstico se construye sobre el anterior.',
        },
      },
      { text: 'Si φ está entre −1 y 1, la serie **regresa a su media** de largo plazo: **c ÷ (1 − φ)**. Si φ = 1, es una caminata aleatoria y no regresa.' },
      {
        calc: {
          question: '¿A qué media de largo plazo regresa el diferencial de Daniela (c = 2, φ = 0.5)?',
          answer: 4,
          unit: 'puntos',
          hint: '2 ÷ (1 − 0.5).',
          why: '1 − 0.5 = 0.5, y 2 ÷ 0.5 = **4**. Por eso los pronósticos van 10 → 7 → 5.5 → … bajando hacia 4.',
        },
      },
      {
        sort: {
          title: '¿Regresa a su media?',
          buckets: ['Sí: estacionaria', 'No: no estacionaria'],
          items: [
            { text: 'Un AR(1) con φ = 0.6', bucket: 0, why: '0.6 está entre −1 y 1: regresa a su media.' },
            { text: 'Un AR(1) con φ = 1', bucket: 1, why: 'Con φ = 1 es una caminata aleatoria: no regresa.' },
            { text: 'Un AR(1) con φ = −0.4', bucket: 0, why: 'Lo que importa es que φ esté entre −1 y 1; el signo no la vuelve inestable.' },
            { text: 'Un precio que es "ayer + una sorpresa"', bucket: 1, why: 'Es lo mismo que φ = 1: caminata aleatoria.' },
          ],
        },
      },
      { tip: 'Pronóstico AR(1): c + φ × último dato, paso a paso. Media de largo plazo: c ÷ (1 − φ). Un **MA(1)** usa la sorpresa de ayer en lugar del valor de ayer; juntos forman los modelos **ARMA**.' },
    ],
  ],
}
