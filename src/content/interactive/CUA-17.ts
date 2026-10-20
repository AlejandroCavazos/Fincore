import type { InteractiveLesson } from './types'

export const intCUA17: InteractiveLesson = {
  lessonId: 'CUA-17',
  sections: [
    // Probar la receta con el pasado
    [
      { text: 'Toño es maestro de secundaria y ahorra poco a poco 👨‍🏫. En internet vio una estrategia: "compra cuando pase X, vende cuando pase Y". Antes de meter su dinero, quiere saber cómo le habría ido.' },
      {
        ask: '¿Qué le conviene hacer primero?',
        options: [
          { text: 'Simular las reglas con datos del pasado', ok: true, reply: '¡Eso es un **backtest**! Como probar una receta nueva con los ingredientes de la semana pasada antes de venderla.' },
          { text: 'Meter todos sus ahorros hoy y ver qué pasa', reply: 'Arriesga todo sin evidencia. Primero conviene un **backtest**: simular las reglas con datos del pasado.' },
          { text: 'Confiar en que en internet dicen que funciona', reply: 'Decirlo no lo prueba. Un **backtest** simula las reglas fijas en el pasado y mide cómo le habría ido.' },
        ],
      },
      {
        text: 'Un backtest se mide con:\n📈 **Rendimiento anual compuesto**: cuánto creció al año\n🌊 **Volatilidad**: qué tanto se movió\n⚖️ **Índice de Sharpe**: rendimiento extra sobre la tasa sin riesgo, por cada unidad de volatilidad\n🎢 **Caída máxima** (max drawdown): la mayor pérdida desde un **pico** hasta el punto más bajo después',
      },
      {
        match: {
          title: 'Une cada métrica con su pregunta',
          pairs: [
            ['Rendimiento anual', '¿Cuánto creció al año?'],
            ['Volatilidad', '¿Qué tanto se movió?'],
            ['Sharpe', '¿Cuánto premio por cada unidad de riesgo?'],
            ['Caída máxima', '¿Cuál fue la peor racha que aguanté?'],
          ],
        },
      },
      {
        text: 'Ejemplo: la cartera valió 100, **120**, 90… De 120 a 90 cayó 30. 30 ÷ 120 = **25%**. Siempre se mide contra el **pico previo**, no contra el primer valor.',
      },
      {
        calc: {
          question: 'El backtest de Toño da estos valores: **80, 100, 85, 120, 96 y 110**. ¿Cuál es el porcentaje de caída máxima?',
          answer: 20,
          unit: '%',
          hint: 'Picos: 100 y luego 120. Caídas: de 100 a 85 y de 120 a 96.',
          why: 'De 100 a 85: 15 ÷ 100 = 15%. De 120 a 96: 24 ÷ 120 = **20%**. La mayor es 20%. Si mides contra el primer valor (80), no ves ninguna caída.',
        },
      },
      { tip: 'Los rendimientos de un backtest son del pasado: **no garantizan** lo que pasará. La caída máxima te dice cuánto dolor habrías aguantado.' },
    ],
    // ¿Por qué el pasado engaña?
    [
      {
        text: 'El backtest de Toño luce genial… pero casi siempre se ve **mejor que la realidad** 🪞. Cuatro trampas:\n🔮 **Anticipación**: usar datos que aún no existían en esa fecha\n🪦 **Supervivencia**: probar solo con empresas que siguen hoy, olvidando las que quebraron\n🎰 **Sobreoptimización**: probar cientos de combinaciones y quedarte con la mejor\n💸 **Costos** omitidos: comisiones, diferencial y slippage (impacto en precio)',
      },
      {
        sort: {
          title: '¿Qué trampa es?',
          buckets: ['Anticipación', 'Supervivencia', 'Sobreoptimización'],
          items: [
            { text: 'Usar las utilidades del año con fecha 31 de diciembre, aunque se publicaron meses después', bucket: 0, why: 'Ese dato todavía no se conocía en esa fecha.' },
            { text: 'Probar 15 años solo con las empresas que hoy están en el índice', bucket: 1, why: 'Las que quebraron o salieron no aparecen: el resultado se infla.' },
            { text: 'Probar 1,000 combinaciones y reportar solo la mejor', bucket: 2, why: 'Por puro azar alguna sale brillante.' },
            { text: 'Decidir con el cierre de hoy y suponer que compraste en la apertura de hoy', bucket: 0, why: 'El cierre ocurre después de la apertura: usaste el futuro.' },
            { text: 'Ignorar las empresas que salieron de la bolsa', bucket: 1, why: 'Solo ves a las sobrevivientes.' },
          ],
        },
      },
      {
        ask: 'Toño probó **1,000** combinaciones y la mejor tiene un Sharpe altísimo. ¿Es una buena estimación de lo que ganará?',
        options: [
          { text: 'Sí, es la mejor de todas', reply: 'Entre tantas pruebas, alguna brilla por suerte: su Sharpe está **inflado**. Hay que probarla en datos que no usó.' },
          { text: 'No, puede ser pura suerte', ok: true, reply: '¡Exacto! Es sobreoptimización. Se valida fuera de muestra y se dice cuántas variantes se probaron.' },
          { text: 'Sí, si los datos son de muchos años', reply: 'Más años no quitan la suerte de escoger la mejor entre 1,000. Su Sharpe está **inflado**.' },
        ],
      },
      {
        text: 'Ahora los costos 💸:\n🧮 **Costo anual = número de operaciones × costo por operación**\n🧮 **Rendimiento neto = rendimiento bruto − costo anual**',
      },
      {
        calc: {
          question: 'La estrategia rinde **14%** bruto al año y hace **60** operaciones a **0.05%** cada una. ¿Qué porcentaje de rendimiento **neto** le queda?',
          answer: 11,
          unit: '%',
          hint: 'Costo: 60 × 0.05% = 3%. Luego 14% − 3%.',
          why: '60 × 0.05 = 3% de costo. 14% − 3% = **11%**. Un costo chico pesa mucho si lo pagas muchas veces.',
        },
      },
      {
        sim: {
          title: 'Toño invierte $100,000 (ejemplo). Rinde 12% bruto: $12,000',
          inputs: [
            { key: 'n', label: 'Operaciones al año', min: 10, max: 100, step: 10, value: 100 },
            { key: 'c', label: 'Costo por operación (0.05% a 0.2% del capital)', min: 50, max: 200, step: 50, value: 100 },
          ],
          outputs: [
            { label: 'Costos del año', calc: (x) => x.n * x.c },
            { label: 'Ganancia neta', calc: (x) => 12000 - x.n * x.c, main: true },
            { label: 'Rendimiento neto', calc: (x) => (12000 - x.n * x.c) / 1000, unit: '%' },
          ],
          goal: {
            text: 'Con 100 operaciones a $100 cada una le quedan solo $2,000. Logra **$8,000 o más** de ganancia neta.',
            check: (x) => 12000 - x.n * x.c >= 8000,
            done: 'Operar menos o más barato cambia todo: el mismo 12% bruto puede quedar en 2% o en 8% o más.',
          },
        },
      },
    ],
    // Probar con datos que no viste
    [
      {
        text: 'La defensa principal es la **validación fuera de muestra** 🧪: diseñas con un periodo y pruebas en otro que no tocaste. El **walk-forward** lo repite en ventanas que avanzan.',
      },
      {
        order: {
          title: 'Arma el walk-forward de Toño',
          steps: ['Ajusta la estrategia con 2015–2019', 'Prueba en 2020', 'Ajusta otra vez con 2016–2020', 'Prueba en 2021'],
          done: '¡Eso! Siempre ajustas con el pasado y pruebas en el año siguiente, que no usaste.',
        },
      },
      {
        text: 'Los modelos de riesgo también se prueban. El **VaR** dice: "con 99% de confianza, la pérdida de un día no pasará de cierta cantidad". Una **excepción** es un día en que la pérdida real **sí** superó el VaR.\n🧮 **Excepciones esperadas = (1 − nivel de confianza) × días**',
      },
      {
        ask: 'Un VaR de **95%** se revisa en **200** días. ¿Cuántas excepciones esperas si el modelo es correcto?',
        options: [
          { text: '10', ok: true, reply: '¡Sí! 1 − 0.95 = 0.05. 0.05 × 200 = **10**.' },
          { text: '190', reply: 'Multiplicaste por 0.95. Se usa el complemento: (1 − 0.95) × 200 = **10**.' },
          { text: '2', reply: 'Ese sería un VaR de 99% (0.01 × 200). Con 95%: 0.05 × 200 = **10**.' },
        ],
      },
      {
        calc: {
          question: 'Un VaR de **97.5%** se revisa en **400** días. ¿Cuántas excepciones se esperan?',
          answer: 10,
          unit: 'excepciones',
          hint: '1 − 0.975 = 0.025. Luego 0.025 × 400.',
          why: '0.025 × 400 = **10**. Si multiplicas por 0.975 te da 390: ese es el error típico.',
        },
      },
      {
        sort: {
          title: 'VaR de 99% en 250 días: ¿qué zona de Basilea?',
          buckets: ['Verde (0 a 4)', 'Amarilla (5 a 9)', 'Roja (10 o más)'],
          items: [
            { text: '2 excepciones', bucket: 0, why: 'Cerca de las 2.5 esperadas: zona verde.' },
            { text: '7 excepciones', bucket: 1, why: 'Entre 5 y 9: amarilla, hay que revisar el modelo.' },
            { text: '12 excepciones', bucket: 2, why: '10 o más: roja, el modelo probablemente subestima el riesgo.' },
            { text: '4 excepciones', bucket: 0, why: 'Todavía verde: de 0 a 4.' },
            { text: '10 excepciones', bucket: 2, why: 'Justo 10: ya es roja.' },
          ],
        },
      },
      { tip: 'Muchas **más** excepciones de las esperadas: el modelo subestima el riesgo. Muchas **menos**: es demasiado conservador.' },
    ],
  ],
}
