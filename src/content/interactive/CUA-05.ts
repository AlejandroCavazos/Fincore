import type { InteractiveLesson } from './types'

export const intCUA05: InteractiveLesson = {
  lessonId: 'CUA-05',
  sections: [
    // Medir relaciones con datos
    [
      {
        ask: 'En temporada de lluvias suben las ventas de paraguas ☂️ y también los accidentes viales. ¿Los paraguas causan accidentes?',
        options: [
          { text: 'No: la lluvia mueve a los dos', ok: true, reply: '¡Eso! La **lluvia** es una tercera variable que empuja a ambas.' },
          { text: 'Sí, porque suben juntos', reply: 'Que suban juntos no prueba que uno cause al otro. La **lluvia** mueve a los dos.' },
          { text: 'Sí, los paraguas distraen', reply: 'Los datos no dicen eso. Lo que pasa es que la **lluvia** sube las dos cosas a la vez.' },
        ],
      },
      { text: 'Regla de oro: **correlación no es causalidad**.\nLa **econometría** junta economía, matemáticas y estadística para **medir** relaciones con datos, siempre con supuestos.' },
      {
        text: 'Fernanda, analista de datos, ve tres tipos de bases:\n📸 **Corte transversal**: muchas unidades en un mismo momento.\n🎞️ **Serie de tiempo**: una unidad a lo largo del tiempo.\n🧩 **Panel**: muchas unidades a lo largo del tiempo.',
      },
      {
        sort: {
          title: '¿Qué tipo de datos es?',
          buckets: ['Corte transversal', 'Serie de tiempo', 'Panel'],
          items: [
            { text: 'Las utilidades de 35 empresas en un mismo año', bucket: 0, why: 'Muchas empresas, un solo momento.' },
            { text: 'El tipo de cambio diario durante 5 años', bucket: 1, why: 'Una sola variable a lo largo del tiempo.' },
            { text: 'Los rendimientos mensuales de 35 empresas durante 10 años', bucket: 2, why: 'Muchas empresas y muchos meses: panel.' },
            { text: 'El cierre semanal de un índice desde hace 15 años', bucket: 1, why: 'Un índice a lo largo del tiempo.' },
            { text: 'Las deudas de 100 municipios en una fecha', bucket: 0, why: 'Muchas unidades, una fecha.' },
            { text: 'Las ventas anuales de 20 tiendas entre 2016 y 2025', bucket: 2, why: 'Varias tiendas a lo largo de varios años.' },
          ],
        },
      },
      { tip: 'Una correlación alta, aunque sea significativa, **no basta** para decir que una cosa causa la otra.' },
    ],
    // ¿Cuánto sigue al mercado?
    [
      { text: 'Fernanda estudia una empresa de alimentos **de ejemplo**. Su pregunta: si el mercado sube 1 %, ¿cuánto sube la acción?' },
      {
        text: 'El **modelo de mercado**: Ri = α + β × Rm + ε\n📊 **β (beta)**: sensibilidad al mercado.\n⭐ **α (alfa)**: lo que el mercado no explica, en promedio.\n🎲 **ε (residual)**: la sorpresa de cada mes = real − esperado. Es el riesgo **propio** de la empresa.',
      },
      {
        sim: {
          title: 'El mercado cae 10 %: ¿cuánto espera el modelo que caiga la acción? (sin alfa ni sorpresa)',
          inputs: [
            { key: 'b', label: 'Beta de la acción', min: 0.2, max: 2, step: 0.2, value: 1.2 },
            { key: 'm', label: 'Movimiento del mercado (%)', min: -10, max: 10, step: 1, value: -10 },
          ],
          outputs: [{ label: 'Movimiento esperado de la acción', calc: (x) => Math.round(x.b * x.m * 100) / 100, main: true, unit: '%' }],
          goal: {
            text: 'Con el mercado en **−10 %**, encuentra una beta **defensiva**: que la acción caiga **5 % o menos**.',
            check: (x) => x.m <= -10 && Math.round(x.b * x.m * 100) / 100 >= -5,
            done: 'Beta < 1 = **defensiva**; > 1 = **agresiva**; cerca de 0, casi no responde al mercado.',
          },
        },
      },
      { text: 'La beta se estima con datos históricos: **β = Cov(Ri, Rm) / Var(Rm)**.' },
      {
        calc: {
          question: 'Datos de ejemplo: Cov(Ri, Rm) = 0.003 y Var(Rm) = 0.0015. ¿Cuál es la beta?',
          answer: 2,
          unit: 'veces',
          hint: '0.003 / 0.0015.',
          why: '0.003 / 0.0015 = **2**: es agresiva; si el mercado sube 1 %, la acción tiende a subir 2 %.',
        },
      },
      {
        calc: {
          question: 'Modelo de ejemplo: Ri = 1 % + 0.5 × Rm. El mercado sube 4 % y la acción sube 5 %. ¿Cuál es el residual (real − esperado), en porcentaje?',
          answer: 2,
          unit: '%',
          hint: 'Esperado = 1 + 0.5 × 4. Luego 5 − esperado.',
          why: 'El modelo esperaba 1 + 2 = 3 %. Real 5 % − 3 % = **2 %** de sorpresa, por ejemplo un buen reporte propio.',
        },
      },
      { tip: 'Esperado = α + β × Rm. Residual = lo que pasó − lo esperado.' },
    ],
    // Trampas que engañan al analista
    [
      { text: 'Fernanda lee un estudio: "los fondos que existen hoy ganaron mucho en promedio". Algo le huele raro 🤔.' },
      {
        ask: '¿Qué le falta al estudio?',
        options: [
          { text: 'Los fondos que cerraron por malos resultados', ok: true, reply: '¡Exacto! Sin ellos el promedio sale **más alto** de lo que obtuvieron los inversionistas. Es **sesgo de supervivencia**.' },
          { text: 'Más fondos ganadores', reply: 'Ya tiene puros sobrevivientes. Le faltan los que **cerraron**: sin ellos el promedio sale inflado.' },
          { text: 'Nada, está completo', reply: 'Faltan los fondos que **cerraron** por malos resultados. Eso infla el promedio.' },
        ],
      },
      {
        text: 'El **error** de un modelo es lo que no logra explicar en cada dato. Trampas típicas:\n🌪️ **Heterocedasticidad**: la varianza del error cambia (épocas tranquilas y turbulentas).\n🔗 **Autocorrelación**: el error de un periodo se parece al del anterior.\n🔮 **Look-ahead**: usar un dato que en esa fecha aún no se conocía.\n👻 **Variable omitida**: dejar fuera un factor que mueve a ambas variables.',
      },
      {
        match: {
          title: 'Une cada trampa con su ejemplo',
          pairs: [
            ['Supervivencia', 'Solo estudias los fondos que siguen vivos'],
            ['Look-ahead', 'Usas en enero un dato publicado en marzo'],
            ['Variable omitida', 'Olvidas el sector, que mueve a las dos variables'],
            ['Heterocedasticidad', 'Hay meses tranquilos y meses turbulentos en los errores'],
            ['Autocorrelación', 'El error de este mes se parece al del mes pasado'],
          ],
        },
      },
      {
        ask: 'Heterocedasticidad y autocorrelación, ¿qué hacen?',
        options: [
          { text: 'Hacen que los errores estándar "normales" engañen', ok: true, reply: '¡Bien! No necesariamente sesgan los coeficientes, pero la precisión que reportas puede ser falsa.' },
          { text: 'Hacen que la beta cambie de signo cada día', reply: 'No es eso. Lo que pasa es que los **errores estándar** "normales" engañan.' },
          { text: 'Nada, se pueden ignorar', reply: 'No conviene ignorarlas: hacen que los **errores estándar** "normales" engañen.' },
        ],
      },
      {
        multi: {
          title: 'Un analista estudia si pagar dividendos rinde más. Usa solo empresas que hoy siguen en bolsa, toma utilidades publicadas en abril como si se conocieran en enero y no considera el tamaño de cada empresa. ¿Qué problemas tiene?',
          items: [
            { text: 'Sesgo de supervivencia', ok: true },
            { text: 'Sesgo de anticipación (look-ahead)', ok: true },
            { text: 'Posible variable omitida (el tamaño)', ok: true },
            { text: 'Usar demasiadas empresas', ok: false },
          ],
          why: 'Solo ve sobrevivientes, usa datos del futuro y deja fuera un factor. Tener muchas empresas **no** es un problema.',
        },
      },
      { tip: 'Antes de creerle a un estudio, pregunta: ¿quién falta?, ¿ese dato ya se sabía?, ¿qué factor quedó fuera?' },
    ],
  ],
}
