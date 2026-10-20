import type { InteractiveLesson } from './types'

export const intCUA16: InteractiveLesson = {
  lessonId: 'CUA-16',
  sections: [
    // Aprender de ejemplos pasados
    [
      { text: 'Lucía es analista de riesgo en una financiera pequeña de Puebla 🏦. Tiene **50,000 créditos** pasados, cada uno marcado como "pagó" o "no pagó". Quiere saber quién pagará en el futuro.' },
      {
        ask: '¿Cómo puede una computadora aprender quién paga?',
        options: [
          { text: 'Alguien le escribe a mano todas las reglas', reply: 'Así se programaba antes. Aquí la computadora **busca patrones en los ejemplos pasados** y los aplica a casos nuevos.' },
          { text: 'Busca patrones en los ejemplos pasados', ok: true, reply: '¡Eso es **machine learning**! Aprende reglas a partir de ejemplos en lugar de que alguien las programe.' },
          { text: 'Adivina al azar y luego corrige', reply: 'No adivina: **aprende de los ejemplos** que ya tienen respuesta y encuentra patrones.' },
        ],
      },
      {
        text: 'Tipos de **machine learning** (aprendizaje automático):\n🏷️ **Supervisado**: cada ejemplo trae la respuesta, la **etiqueta**.\n• Si la etiqueta es un **número** → **regresión**\n• Si es una **categoría** (paga / no paga) → **clasificación**\n🧩 **No supervisado**: sin etiqueta; busca **grupos** parecidos.\nLas columnas que usa para predecir (ingreso, deudas) son las **variables** o **features**.',
      },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Etiqueta', 'La respuesta correcta de cada ejemplo'],
            ['Feature', 'Una columna que usa para predecir'],
            ['Regresión', 'Predecir un número'],
            ['Clasificación', 'Predecir una categoría'],
            ['Agrupamiento', 'Formar grupos sin etiqueta'],
          ],
        },
      },
      {
        sort: {
          title: '¿Qué tipo de problema es?',
          buckets: ['Clasificación', 'Regresión', 'Agrupamiento'],
          items: [
            { text: 'Marcar una compra con tarjeta como fraude o no, con historial etiquetado', bucket: 0, why: 'Respuesta por categoría y con etiqueta: clasificación.' },
            { text: 'Estimar el precio de un departamento por sus metros y ubicación', bucket: 1, why: 'La respuesta es un número: regresión.' },
            { text: 'Formar segmentos de clientes por sus hábitos de gasto, sin categorías previas', bucket: 2, why: 'No hay etiqueta: agrupamiento.' },
            { text: 'Predecir el rendimiento en % del próximo mes', bucket: 1, why: 'Es un número. Sería clasificación solo si se predijera "sube / baja".' },
            { text: 'Decidir si una solicitud de crédito se aprueba o se rechaza', bucket: 0, why: 'Dos categorías: clasificación.' },
            { text: 'Agrupar acciones que se mueven parecido sin decirle los sectores', bucket: 2, why: 'Busca grupos sin etiqueta: agrupamiento.' },
          ],
        },
      },
      { tip: 'Ojo con los nombres: la **regresión logística**, aunque se llama así, se usa para **clasificar** (paga / no paga).' },
    ],
    // ¿Memorizó o aprendió?
    [
      { text: 'Un alumno se aprende de memoria el examen del año pasado 📝. Saca 10 en ese, pero reprueba el nuevo. **Memorizó**, no aprendió.' },
      {
        text: 'Con los modelos pasa igual. Se **entrenan** con una parte de los datos y se **prueban** con otra que nunca vieron.\n⚠️ Si acierta mucho en entrenamiento pero poco en prueba, hay **sobreajuste**: memorizó el ruido del pasado.',
      },
      {
        sim: {
          title: 'Modelo de ejemplo: ¿qué tan complejo lo haces?',
          inputs: [{ key: 'c', label: 'Complejidad (1 = muy simple, 10 = muy complejo)', min: 1, max: 10, step: 1, value: 10 }],
          outputs: [
            { label: 'Aciertos en entrenamiento', calc: (x) => Math.min(99, 55 + 5 * x.c), unit: '%' },
            { label: 'Aciertos en prueba (datos nuevos)', calc: (x) => 70 - (x.c - 4) ** 2, unit: '%', main: true },
          ],
          goal: {
            text: 'Números inventados. Busca la complejidad que acierte **69% o más en prueba**.',
            check: (x) => 70 - (x.c - 4) ** 2 >= 69,
            done: 'El más complejo era casi perfecto en entrenamiento y malo en prueba. El mejor es uno **intermedio**: aprende el patrón sin memorizar el ruido.',
          },
        },
      },
      {
        ask: 'El modelo de Lucía acierta **94%** en entrenamiento pero **52%** en prueba. ¿Qué pasa?',
        options: [
          { text: 'Sobreajuste: memorizó y no generaliza', ok: true, reply: '¡Exacto! 52% es casi lanzar una moneda. La brecha enorme es la firma del sobreajuste.' },
          { text: 'Es excelente: hay que usarlo con más dinero', reply: 'Lo que importa es la prueba, y 52% es casi azar. Es **sobreajuste**.' },
          { text: 'Subajuste: el modelo es demasiado simple', reply: 'Un modelo muy simple saldría mal en **ambos** periodos. Aquí solo falla en prueba: es **sobreajuste**.' },
        ],
      },
      {
        text: 'En finanzas el riesgo es mayor: los datos tienen mucho **ruido** y los mercados cambian. Por eso Lucía separa los datos **por fecha**: entrena con el pasado y prueba con lo más reciente. Nunca los revuelve al azar.',
      },
      {
        order: {
          title: 'Arma una prueba honesta',
          steps: [
            'Ordena los datos por fecha',
            'Entrena con el periodo más antiguo',
            'Prueba con lo más reciente, que el modelo no vio',
            'Compara los aciertos de entrenamiento y de prueba',
          ],
          done: '¡Bien! Si revolvieras las fechas, el modelo "vería" el futuro y el resultado saldría inflado.',
        },
      },
      {
        multi: {
          title: '¿Qué ayuda contra el sobreajuste?',
          items: [
            { text: 'Separar entrenamiento y prueba por fecha', ok: true },
            { text: 'Revolver al azar todas las fechas antes de separar', ok: false },
            { text: 'Preferir modelos sencillos', ok: true },
            { text: 'Usar regularización: una penalización a la complejidad', ok: true },
          ],
          why: 'En series de tiempo, revolver mezcla el futuro en el entrenamiento. Modelos sencillos y **regularización** castigan la complejidad.',
        },
      },
    ],
    // ¿Qué tan bueno es el detector?
    [
      {
        text: 'Lucía revisa su detector de impago 🚨. La **matriz de confusión** cuenta sus aciertos y errores en 4 casillas:\n✅ **VP**: alertó y sí cayó en impago\n🔔 **FP**: alertó, pero el cliente sí pagó\n🕳️ **FN**: no alertó y sí cayó en impago\n👍 **VN**: no alertó y el cliente pagó',
      },
      {
        match: {
          title: 'Une cada casilla con su caso',
          pairs: [
            ['Verdadero positivo', 'Alerta correcta: sí era impago'],
            ['Falso positivo', 'Falsa alarma con un buen cliente'],
            ['Falso negativo', 'Impago que se escapó'],
            ['Verdadero negativo', 'Buen cliente sin alerta'],
          ],
        },
      },
      {
        text: 'Tres métricas:\n🎯 **Exactitud** = (VP + VN) ÷ total\n🔔 **Precisión** = VP ÷ (VP + FP): de las alertas, cuántas eran reales\n🕵️ **Sensibilidad** = VP ÷ (VP + FN): de los impagos reales, cuántos atrapó',
      },
      {
        calc: {
          question: 'De 2,000 clientes: VP = **30**, FP = **20**, FN = **10**. ¿Qué porcentaje de **precisión** tiene?',
          answer: 60,
          unit: '%',
          hint: 'VP ÷ (VP + FP) = 30 ÷ 50.',
          why: '30 ÷ 50 = 0.60 = **60%**: 6 de cada 10 alertas fueron reales.',
        },
      },
      {
        calc: {
          question: 'Con los mismos datos, ¿qué porcentaje de **sensibilidad** tiene?',
          answer: 75,
          unit: '%',
          hint: 'VP ÷ (VP + FN) = 30 ÷ 40.',
          why: '30 ÷ 40 = 0.75 = **75%**: se escapó 1 de cada 4 impagos. No las cambies: precisión mira las alertas; sensibilidad, los casos reales.',
        },
      },
      {
        ask: 'A Lucía le preocupa sobre todo que **se le escapen** impagos. ¿Qué métrica cuida más?',
        options: [
          { text: 'Sensibilidad', ok: true, reply: '¡Sí! Mide cuántos de los impagos reales atrapó. Alta sensibilidad = se escapan pocos.' },
          { text: 'Precisión', reply: 'La precisión cuida las **falsas alarmas**. Para que no se escapen impagos se mira la **sensibilidad**.' },
          { text: 'Exactitud', reply: 'La exactitud mezcla todo y puede engañar. Para que no se escapen casos, la **sensibilidad**.' },
        ],
      },
      {
        calc: {
          question: 'Otra cartera: **1,000** créditos, solo **20** en impago. Un "modelo" dice siempre "sí pagará". ¿Qué porcentaje de **exactitud** tiene?',
          answer: 98,
          unit: '%',
          hint: 'Acierta en todos los que pagaron: 1,000 − 20.',
          why: '980 ÷ 1,000 = **98%**. ¡Pero su sensibilidad es 0%: no atrapa ningún impago! Con clases desbalanceadas, la exactitud sola engaña.',
        },
      },
      { tip: 'Un modelo de crédito además debe ser **explicable** y no discriminar: si aprende de datos con sesgo, repite el sesgo.' },
    ],
  ],
}
