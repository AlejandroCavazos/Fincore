import type { InteractiveLesson } from './types'

export const intCOS13: InteractiveLesson = {
  lessonId: 'COS-13',
  sections: [
    // ¿Qué es un indicador clave (KPI)?
    [
      { text: 'Una **métrica** es cualquier dato que se puede contar. Un **KPI** (indicador clave de desempeño) es una métrica que mide algo **importante para la estrategia** y tiene una **meta**.' },
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
      { text: 'Los indicadores **de resultado** dicen lo que ya pasó. Los **adelantados** avisan lo que probablemente pasará y dan tiempo de corregir.' },
      {
        sort: {
          title: '¿Adelantado o de resultado?',
          buckets: ['Adelantado', 'De resultado'],
          items: [
            { text: 'Cotizaciones enviadas este mes', bucket: 0, why: 'Avisa las ventas que probablemente vendrán.' },
            { text: 'Utilidad del trimestre', bucket: 1, why: 'Dice lo que ya pasó.' },
            { text: 'Satisfacción del cliente', bucket: 0, why: 'Avisa si los clientes volverán.' },
            { text: 'Ventas del año pasado', bucket: 1, why: 'Ya pasó: es de resultado.' },
          ],
        },
      },
      {
        calc: {
          question: 'La meta de ventas de la cafetería ☕ era **$80,000** y vendió **$68,000**. ¿Qué **porcentaje de cumplimiento** tiene?',
          answer: 85,
          hint: 'real ÷ meta × 100.',
          why: '$68,000 ÷ $80,000 × 100 = **85 %**.',
        },
      },
      { tip: 'Semáforo: **verde** en meta, **amarillo** cerca, **rojo** lejos de la meta.' },
    ],
    // Indicadores financieros: ROI, DuPont e ingreso residual
    [
      { text: 'El **ROI** responde: «por cada peso que metí en el negocio, ¿cuánto me regresó de utilidad?». Se calcula con la **utilidad operativa** y los **activos operativos** (local, equipo, inventario).' },
      { tip: '**ROI = margen × rotación.** Margen = utilidad ÷ ventas. Rotación = ventas ÷ activos.' },
      {
        sim: {
          title: 'La sucursal de Grupo Tacos Felices 🌮',
          inputs: [
            { key: 'v', label: 'Ventas', min: 2000000, max: 5000000, step: 500000, value: 3000000 },
            { key: 'u', label: 'Utilidad operativa', min: 150000, max: 600000, step: 50000, value: 240000 },
            { key: 'a', label: 'Activos operativos', min: 1500000, max: 3000000, step: 250000, value: 2000000 },
          ],
          outputs: [
            { label: 'Margen (%)', calc: (x) => Math.round((x.u / x.v) * 1000) / 10 },
            { label: 'Rotación de activos (veces)', calc: (x) => Math.round((x.v / x.a) * 100) / 100 },
            { label: 'ROI (%)', calc: (x) => Math.round((x.u / x.a) * 1000) / 10, main: true },
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
          question: 'Una división gana **$500,000** de utilidad operativa con activos de **$3,000,000**. La tasa mínima exigida es **12 %**. ¿Cuál es su **ingreso residual**?',
          answer: 140000,
          hint: 'utilidad − tasa mínima × activos.',
          why: '$500,000 − 12 % × $3,000,000 = $500,000 − $360,000 = **$140,000**.',
        },
      },
      {
        ask: 'Una gerente tiene ROI de **20 %**. Le ofrecen un proyecto que rinde **16 %**, y la empresa solo exige **12 %**. Si la evalúan solo por ROI, ¿qué hará?',
        options: [
          { text: 'Lo acepta, porque rinde más del 12 %', reply: 'Eso le conviene a la empresa, pero ella pensará en su ROI promedio, que bajaría.' },
          { text: 'Probablemente lo rechaza, porque baja su promedio', ok: true, reply: '¡Esa es la trampa del ROI! El **ingreso residual** la corrige: el proyecto sí deja utilidad después de cobrar el 12 %.' },
          { text: 'Le da igual', reply: 'No le da igual: su ROI bajaría de 20 % hacia 16 %.' },
        ],
      },
      { tip: 'Abarrotes: **margen bajo, rotación alta**. Joyería: **margen alto, rotación baja**.' },
    ],
    // Balanced Scorecard e indicadores operativos
    [
      { text: 'Medir solo dinero es como manejar viendo el retrovisor. El **Balanced Scorecard** (de Kaplan y Norton) ordena los KPI en **cuatro perspectivas** conectadas por causa y efecto.' },
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
        sort: {
          title: '¿En qué perspectiva va cada KPI?',
          buckets: ['Financiera', 'Clientes', 'Procesos internos', 'Aprendizaje y crecimiento'],
          items: [
            { text: 'ROI', bucket: 0, why: 'Mide el rendimiento del dinero invertido.' },
            { text: 'Recompra de clientes', bucket: 1, why: 'Dice si los clientes vuelven.' },
            { text: 'Tasa de defectos', bucket: 2, why: 'Mide qué tan bien sale la producción.' },
            { text: 'Horas de capacitación por empleado', bucket: 3, why: 'Es aprender y crecer.' },
            { text: 'Entregas a tiempo', bucket: 2, why: 'Es un indicador de procesos.' },
            { text: 'Participación de mercado', bucket: 1, why: 'Es de la perspectiva de clientes.' },
          ],
        },
      },
      {
        calc: {
          question: 'Un taller hizo **4,000** piezas y **80** salieron con defecto. ¿Cuál es la **tasa de defectos** en %?',
          answer: 2,
          hint: 'defectuosas ÷ producidas × 100.',
          why: '80 ÷ 4,000 × 100 = **2 %**. Si la meta es 1 %, el indicador está en rojo y conviene revisar el proceso.',
        },
      },
      { tip: 'Días de inventario = 365 ÷ rotación de inventario. Dicen cuánto tarda, en promedio, la mercancía en venderse.' },
    ],
  ],
}
