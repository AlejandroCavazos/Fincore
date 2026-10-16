import type { InteractiveLesson } from './types'

export const intCOS11: InteractiveLesson = {
  lessonId: 'COS-11',
  sections: [
    // Qué es y en qué se distingue de la financiera
    [
      { text: 'La **contabilidad administrativa** da información a la gente de **adentro** (dueños, directores, gerentes) para decidir. La **financiera** hace estados para los de **afuera**: bancos, inversionistas, autoridades.' },
      {
        sort: {
          title: '¿Administrativa o financiera?',
          buckets: ['Administrativa', 'Financiera'],
          items: [
            { text: 'Reporte semanal de ventas por sucursal para el director', bucket: 0, why: 'Es para uso interno y por segmento.' },
            { text: 'Estados financieros anuales que pide el banco', bucket: 1, why: 'Son para un usuario externo.' },
            { text: 'Proyección de ventas del próximo año', bucket: 0, why: 'Mira al futuro: típico de la administrativa.' },
            { text: 'Debe seguir las NIF obligatoriamente', bucket: 1, why: 'La administrativa no está obligada a seguir las NIF.' },
            { text: 'Un dato aproximado pero a tiempo', bucket: 0, why: 'La administrativa prefiere la oportunidad.' },
            { text: 'Mira la empresa en conjunto, sobre todo el pasado', bucket: 1, why: 'Así trabaja la financiera.' },
          ],
        },
      },
      {
        ask: 'El gerente de Grupo Tacos Felices 🌮 quiere un reporte de margen **por sucursal** con un formato propio, sin seguir las NIF. ¿Se puede?',
        options: [
          { text: 'No, todo reporte contable debe seguir las NIF', reply: 'Las NIF son obligatorias para los estados de usuarios externos. Un reporte interno puede tener el formato que más ayude.' },
          { text: 'Sí, es contabilidad administrativa para uso interno', ok: true, reply: '¡Así es! Como es para decidir adentro, puede usar el formato que más sirva.' },
          { text: 'Solo si lo autoriza el banco', reply: 'El banco no tiene nada que ver: es un reporte interno.' },
        ],
      },
      { tip: 'Administrativa: **adentro**, futuro, por segmentos, a tiempo. Financiera: **afuera**, NIF, empresa en conjunto.' },
    ],
    // Para qué sirve: planear, controlar y decidir
    [
      { text: 'La contabilidad administrativa sirve para tres cosas: **planear**, **controlar** y **decidir**.' },
      {
        match: {
          title: 'Une cada palabra con lo que hace la taquería',
          pairs: [
            ['Planear', 'Fijar la meta de vender 9,000 tacos al mes'],
            ['Controlar', 'Revisar cada semana cuánto vendió y cuánto gastó en carne'],
            ['Decidir', 'Evaluar si abrir también en la noche'],
            ['Contralor', 'Quien coordina los reportes internos y cuida los costos'],
          ],
        },
      },
      {
        sort: {
          title: '¿Planear, controlar o decidir?',
          buckets: ['Planear', 'Controlar', 'Decidir'],
          items: [
            { text: 'Hacer el presupuesto del próximo año', bucket: 0, why: 'Fijar metas y cómo lograrlas es planear.' },
            { text: 'Comparar lo gastado en gas contra lo planeado', bucket: 1, why: 'Comparar real contra plan y corregir es controlar.' },
            { text: 'Elegir entre comprar o rentar un horno', bucket: 2, why: 'Elegir entre alternativas es decidir.' },
            { text: 'Análisis costo-volumen-utilidad para fijar metas de venta', bucket: 0, why: 'El análisis costo-volumen-utilidad es parte de planear.' },
            { text: 'Corregir a tiempo un gasto que se salió del plan', bucket: 1, why: 'Corregir a tiempo es controlar.' },
          ],
        },
      },
      { tip: 'En un negocio pequeño, el papel del **contralor** lo hace el propio dueño o su contador.' },
    ],
    // Costeo directo frente a costeo absorbente
    [
      { text: 'Son dos formas de calcular cuánto cuesta cada producto. La pregunta es qué hacer con los **costos fijos de la fábrica** (renta de la nave, sueldo del supervisor).' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Costeo absorbente', 'El producto carga también los fijos de fabricación'],
            ['Costeo directo', 'El producto solo carga los costos variables de fabricación'],
            ['Margen de contribución', 'Lo que queda de la venta tras los costos variables'],
            ['Gasto del periodo', 'Se resta completo en el mes, no se guarda en inventario'],
          ],
        },
      },
      { text: 'Si produces más de lo que vendes, el absorbente deja parte de los fijos «guardados» en el inventario y muestra **más utilidad**.' },
      {
        sim: {
          title: 'Absorbente vs. directo',
          inputs: [
            { key: 'u', label: 'Unidades que quedan en inventario (producidas − vendidas)', min: 0, max: 5000, step: 500, value: 0 },
            { key: 'f', label: 'Fijo de fabricación por unidad', min: 5, max: 30, step: 5, value: 15 },
          ],
          outputs: [
            { label: 'Fijos «guardados» en el inventario', calc: (x) => x.u * x.f },
            { label: 'Cuánto más utilidad muestra el absorbente', calc: (x) => x.u * x.f, main: true },
          ],
          goal: {
            text: 'Haz que la utilidad absorbente supere a la directa por **$50,000 o más**.',
            check: (x) => x.u * x.f >= 50000,
            done: 'Diferencia = (producidas − vendidas) × fijo por unidad. Si producción y ventas son iguales, las dos utilidades coinciden.',
          },
        },
      },
      {
        calc: {
          question: 'Una fábrica produjo **10,000** unidades y vendió **7,000**. El fijo de fabricación por unidad es **$20**. ¿Por cuánto supera la utilidad absorbente a la directa?',
          answer: 60000,
          hint: '(producidas − vendidas) × fijo por unidad.',
          why: '(10,000 − 7,000) × $20 = **$60,000** que se quedan en el inventario con el absorbente.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'El absorbente es el que exigen los estados financieros para terceros', ok: true },
            { text: 'El costeo directo muestra primero el margen de contribución', ok: true },
            { text: 'Si vendes más de lo que produces, el absorbente muestra menos utilidad que el directo', ok: true },
            { text: 'En el costeo directo, los fijos de fabricación se guardan en el inventario', ok: false },
          ],
          why: 'En el directo los fijos de fabricación son **gasto del periodo**. Por eso es tan útil para decidir: separa lo que cambia con el volumen de lo que no.',
        },
      },
      { tip: 'Producción = ventas → las dos utilidades son **iguales**. Producción > ventas → gana el **absorbente**.' },
    ],
  ],
}
