import type { InteractiveLesson } from './types'

export const intCOS13: InteractiveLesson = {
  lessonId: 'COS-13',
  sections: [
    // ¿Qué número sí importa?
    [
      { text: 'Marta tiene 3 cafeterías ☕. Cada mes recibe un reporte con **40 números** y no sabe cuál mirar primero.' },
      {
        ask: '¿Cuál de estos números le sirve más para dirigir?',
        options: [
          { text: 'Minutos para servir un café, con meta de 3 y una encargada que lo revisa cada semana', ok: true, reply: '¡Ese! Tiene meta, responsable y frecuencia. A eso se le llama **KPI**.' },
          { text: 'Las visitas a su página web, que nadie revisa', reply: 'Es un dato, pero si nadie actúa con él es solo un número bonito. Sirve más el que tiene **meta y responsable**.' },
          { text: 'Los 40 números, todos por igual', reply: 'Con tantos, nadie sabe a cuál hacerle caso. Bastan **pocos y relevantes**, como el tiempo para servir con su meta.' },
        ],
      },
      { text: 'Una **métrica** es cualquier dato que se puede contar. Un **KPI** (indicador clave) es la métrica que importa para la estrategia y tiene una **meta**.' },
      {
        multi: {
          title: '¿Qué necesita un buen KPI? Marca todas.',
          items: [
            { text: 'Una meta contra la cual compararse', ok: true },
            { text: 'Un responsable', ok: true },
            { text: 'Una frecuencia de revisión (diaria, semanal, mensual)', ok: true },
            { text: 'Ser claro y medible', ok: true },
            { text: 'Que haya muchísimos, entre más mejor', ok: false },
          ],
          why: 'Pocos y relevantes (de 5 a 10 por área suele bastar). Si nadie actúa cuando se sale de la meta, es solo un número bonito.',
        },
      },
      { text: 'Hay dos tipos:\n⏪ **De resultado:** dicen lo que ya pasó (la utilidad del trimestre).\n⏩ **Adelantados:** avisan lo que probablemente pasará (cotizaciones enviadas, satisfacción del cliente).' },
      {
        sort: {
          title: '¿Adelantado o de resultado?',
          buckets: ['Adelantado', 'De resultado'],
          items: [
            { text: 'Pedidos para eventos cotizados este mes', bucket: 0, why: 'Avisa las ventas que probablemente vendrán.' },
            { text: 'Utilidad del trimestre', bucket: 1, why: 'Dice lo que ya pasó.' },
            { text: 'Satisfacción de los clientes', bucket: 0, why: 'Avisa si los clientes volverán.' },
            { text: 'Ventas del año pasado', bucket: 1, why: 'Ya pasó: es de resultado.' },
          ],
        },
      },
      {
        ask: '¿A Marta le basta con mirar la utilidad del trimestre?',
        options: [
          { text: 'No: ya pasó; los adelantados le dan tiempo de corregir', ok: true, reply: '¡Exacto! Se necesitan los dos tipos. Los adelantados avisan antes de que el problema llegue a la utilidad.' },
          { text: 'Sí: si la utilidad es buena, todo va bien', reply: 'La utilidad solo cuenta lo que **ya pasó**. Para corregir a tiempo hacen falta los **adelantados**.' },
          { text: 'Sí: la utilidad avisa los problemas futuros', reply: 'Es al revés: la utilidad es de **resultado**. Los que avisan son los **adelantados**.' },
        ],
      },
      {
        calc: {
          question: 'La meta de ventas de una cafetería era **$80,000** y vendió **$68,000**. ¿Qué **porcentaje de cumplimiento** tiene?',
          answer: 85,
          unit: '%',
          hint: 'real ÷ meta × 100.',
          why: '$68,000 ÷ $80,000 × 100 = **85 %**. Con un semáforo: **verde** en meta, **amarillo** cerca, **rojo** lejos.',
        },
      },
    ],
    // ¿Cuánto rinde cada peso?
    [
      { text: 'Marta compara dos cafeterías. La del **Centro** ganó **$300,000** de utilidad operativa y la del **Norte**, **$200,000**.' },
      {
        ask: '¿Cuál le rinde más?',
        options: [
          { text: 'Depende de cuánto dinero tiene metido cada una', ok: true, reply: '¡Bien pensado! El Centro usa $3,000,000 en local y equipo (rinde 10 %). El Norte usa $1,000,000 (rinde 20 %). **Gana el Norte.**' },
          { text: 'El Centro, porque gana más pesos', reply: 'Gana más, pero el Centro usa $3,000,000 y el Norte solo $1,000,000. Por cada peso, **el Norte rinde el doble**.' },
          { text: 'Siempre la más pequeña', reply: 'No siempre. Hay que dividir la utilidad entre lo que **cada una tiene metido**. Aquí gana el Norte: 20 % contra 10 %.' },
        ],
      },
      { text: 'Eso es el **ROI**: utilidad operativa ÷ activos operativos × 100. Se parte en dos palancas:\n💵 **Margen** = utilidad ÷ ventas\n🔄 **Rotación** = ventas ÷ activos\n**ROI = margen × rotación**' },
      {
        sim: {
          title: 'La cafetería del Sur',
          inputs: [
            { key: 'v', label: 'Ventas', min: 2000000, max: 5000000, step: 500000, value: 3000000 },
            { key: 'u', label: 'Utilidad operativa', min: 150000, max: 600000, step: 50000, value: 240000 },
            { key: 'a', label: 'Activos operativos', min: 1500000, max: 3000000, step: 250000, value: 2000000 },
          ],
          outputs: [
            { label: 'Margen (%)', calc: (x) => Math.round((x.u / x.v) * 1000) / 10, unit: '%' },
            { label: 'Rotación de activos (veces)', calc: (x) => Math.round((x.v / x.a) * 100) / 100, unit: 'veces' },
            { label: 'ROI (%)', calc: (x) => Math.round((x.u / x.a) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Lleva el ROI a **20 % o más**.',
            check: (x) => x.u / x.a >= 0.2,
            done: 'Puedes subir el ROI con más **margen** (ganar más por cada peso vendido) o más **rotación** (vender más con los mismos activos).',
          },
        },
      },
      {
        calc: {
          question: 'La del Norte vende **$2,000,000** al año con activos de **$1,000,000**. ¿Cuántas veces **rotan** sus activos?',
          answer: 2,
          unit: 'veces',
          hint: 'ventas ÷ activos.',
          why: '2,000,000 ÷ 1,000,000 = **2 veces**. Su margen es 200,000 ÷ 2,000,000 = 10 %, y ROI = 10 % × 2 = **20 %**.',
        },
      },
      {
        ask: 'La gerente del Norte tiene ROI de **20 %**. Le ofrecen un proyecto que rinde **16 %**; Marta solo exige **12 %**. Si a la gerente la premian por su ROI, ¿qué hará?',
        options: [
          { text: 'Probablemente lo rechaza, porque baja su promedio', ok: true, reply: '¡Esa es la trampa del ROI! A Marta sí le conviene: rinde más del 12 % que exige.' },
          { text: 'Lo acepta, porque rinde más del 12 %', reply: 'A Marta le convendría, pero la gerente ve que su ROI bajaría de 20 % hacia 16 %. Por eso **lo rechaza**.' },
          { text: 'Le da igual', reply: 'No le da igual: su ROI bajaría y con él su premio. Por eso **lo rechaza**, aunque a Marta le convenga.' },
        ],
      },
      { text: 'El **ingreso residual** corrige esa trampa: es la utilidad que **sobra** después de cobrar el rendimiento mínimo sobre los activos.\nIngreso residual = utilidad − tasa mínima × activos.' },
      {
        calc: {
          question: 'El proyecto usa activos de **$1,000,000** y deja **$160,000** de utilidad operativa. Con tasa mínima de **12 %**, ¿cuál es su **ingreso residual**?',
          answer: 40000,
          hint: '160,000 − 12 % × 1,000,000.',
          why: '160,000 − 120,000 = **$40,000**. Es positivo: el proyecto sí le conviene a Marta. Medir con ingreso residual evita que la gerente lo rechace.',
        },
      },
    ],
    // ¿Cómo ver más que dinero?
    [
      { text: 'Medir solo dinero es como manejar viendo el retrovisor 🚗. Este mes las utilidades de Marta **bajaron**.' },
      {
        ask: '¿Dónde le conviene buscar la causa?',
        options: [
          { text: 'En su personal, sus procesos y sus clientes', ok: true, reply: '¡Sí! Muchas veces la utilidad baja por algo que pasó antes: clientes molestos, errores, gente sin capacitar.' },
          { text: 'Solo en el estado de resultados', reply: 'Ahí ve **que** bajó, pero no **por qué**. La causa suele estar en su personal, procesos o clientes.' },
          { text: 'En ningún lado: ya pasó', reply: 'Ya pasó, pero si no encuentra la causa se repetirá. Que revise personal, procesos y clientes.' },
        ],
      },
      { text: 'El **Balanced Scorecard** (de Kaplan y Norton) ordena los KPI en 4 perspectivas:\n📚 **Aprendizaje y crecimiento:** capacitación, rotación de personal.\n⚙️ **Procesos internos:** defectos, entregas a tiempo.\n🙂 **Clientes:** satisfacción, recompra.\n💰 **Financiera:** utilidad, ROI, margen.' },
      {
        order: {
          title: 'Ordena la cadena de causa y efecto',
          steps: [
            'Aprendizaje y crecimiento: personal capacitado',
            'Procesos internos: menos errores',
            'Clientes: clientes satisfechos que vuelven',
            'Finanzas: más utilidades',
          ],
          done: 'Si la utilidad cae, el tablero te ayuda a buscar la causa en las otras perspectivas.',
        },
      },
      {
        match: {
          title: 'Une cada KPI de Marta con su perspectiva',
          pairs: [
            ['Horas de capacitación por empleado', 'Aprendizaje y crecimiento'],
            ['Tiempo desde el pedido hasta la entrega', 'Procesos internos'],
            ['Clientes que vuelven a comprar', 'Clientes'],
            ['Margen de utilidad operativa', 'Financiera'],
          ],
        },
      },
      { text: 'Dos indicadores operativos:\n📦 **Días de inventario** = 365 ÷ rotación (rotación = costo de ventas ÷ inventario promedio).\n❌ **Tasa de defectos** = defectuosos ÷ producidos × 100.' },
      {
        calc: {
          question: 'El café en grano de Marta: costo de ventas **$1,460,000** al año e inventario promedio **$20,000**. ¿Cuántos **días de inventario** tiene?',
          answer: 5,
          unit: 'días',
          hint: 'Primero la rotación: 1,460,000 ÷ 20,000. Luego 365 ÷ rotación.',
          why: 'Rotación = 1,460,000 ÷ 20,000 = 73 veces. Días = 365 ÷ 73 = **5 días**: el grano tarda unos 5 días en venderse.',
        },
      },
      {
        calc: {
          question: 'En un mes sirvieron **4,000** cafés y **80** se devolvieron mal hechos. ¿Cuál es la **tasa de defectos** en %?',
          answer: 2,
          unit: '%',
          hint: 'defectuosos ÷ producidos × 100.',
          why: '80 ÷ 4,000 × 100 = **2 %**. Si la meta es 1 %, el indicador está en rojo y conviene revisar cómo se preparan.',
        },
      },
    ],
  ],
}
