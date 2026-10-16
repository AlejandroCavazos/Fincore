import type { InteractiveLesson } from './types'

export const intL203: InteractiveLesson = {
  lessonId: 'L2-03',
  sections: [
    // ¿Por qué se ajusta?
    [
      { text: '**Devengar** es anotar algo en el mes en que de verdad se usó o se ganó, no en el mes en que se pagó o se cobró.' },
      { text: 'Al cierre, algunas cuentas no cuentan la historia real. Los **asientos de ajuste** las corrigen antes de hacer los estados financieros.' },
      {
        sort: {
          title: '¿Qué tipo de ajuste es?',
          buckets: ['Gasto pagado por anticipado', 'Ingreso cobrado por anticipado', 'Gasto devengado no pagado', 'Estimación'],
          items: [
            { text: 'La cafetería pagó en enero la renta de todo el semestre', bucket: 0, why: 'Pagaste antes de usar el local. Cada mes pasa a gasto la parte que ya usaste.' },
            { text: 'El taller cobró por adelantado 3 meses de mantenimiento a un cliente', bucket: 1, why: 'Cobraste antes de trabajar. Cada mes reconoces como ingreso la parte que ya hiciste.' },
            { text: 'Los sueldos de la última semana de diciembre se pagan hasta enero', bucket: 2, why: 'El trabajo ya se hizo en diciembre: es gasto de diciembre aunque se pague después.' },
            { text: 'La depreciación del horno de la tiendita', bucket: 3, why: 'La depreciación es una estimación: reparte el costo del horno entre los años en que lo usas.' },
            { text: 'Intereses del préstamo que ya corrieron pero aún no pagas', bucket: 2, why: 'El interés ya se generó en el periodo: va a gasto y queda una deuda (pasivo).' },
            { text: 'Clientes que seguramente nunca te van a pagar', bucket: 3, why: 'Las cuentas incobrables también son una estimación.' },
          ],
        },
      },
      { text: 'Para saber cuánto ajustar: saca lo de **un mes** y multiplícalo por los meses que ya pasaron (cuenta el mes en que empezó).' },
      {
        calc: {
          question: 'El 1 de octubre la tiendita pagó **$24,000** de un seguro por 12 meses. ¿Cuánto pasa a **gasto** al 31 de diciembre?',
          answer: 6000,
          hint: '24,000 ÷ 12 meses y luego por los meses de octubre a diciembre.',
          why: '24,000 ÷ 12 = $2,000 al mes. Pasaron 3 meses (oct, nov, dic): 2,000 × 3 = **$6,000**. Los otros $18,000 siguen siendo un pago anticipado (activo).',
        },
      },
      {
        entry: {
          title: 'Arma el ajuste de enero',
          story: 'La cafetería pagó en enero **$36,000** de renta por 6 meses. Al cierre de enero, ¿cómo pasas a gasto el mes que ya usaste?',
          lines: [
            { account: 'Gasto por renta', side: 'D', amount: 6000, why: 'Ya usaste un mes: 36,000 ÷ 6 = $6,000 de gasto. Se carga.' },
            { account: 'Renta pagada por anticipado', side: 'C', amount: 6000, why: 'Baja el derecho que tenías a favor (activo): se abona.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el error',
          story: 'El taller cobró **$12,000** por adelantado por 3 meses de servicio. Al cierre del primer mes hace este ajuste:',
          lines: [
            { account: 'Anticipos de clientes', side: 'D', amount: 4000 },
            { account: 'Bancos', side: 'C', amount: 4000 },
          ],
          wrong: 1,
          why: 'El dinero ya había entrado antes. Un ajuste **nunca toca Bancos**: aquí se abona el **ingreso** por la parte ya ganada.',
        },
      },
      { tip: 'Un ajuste casi siempre mueve **una cuenta de resultados y una de balance**, y nunca a Bancos.' },
    ],
    // Depreciación
    [
      { text: 'Compras un horno que te durará varios años 🔥. No es justo cargar todo el gasto al primer año: la **depreciación** lo **reparte** entre los años en que lo usas.' },
      { text: '**Valor residual**: lo que esperas recibir al venderlo cuando ya no te sirva. **Vida útil**: cuántos años lo piensas usar. Juega con los datos:' },
      {
        sim: {
          title: 'El horno de la tiendita (línea recta)',
          inputs: [
            { key: 'c', label: 'Costo del horno', min: 100000, max: 400000, step: 10000, value: 100000 },
            { key: 'r', label: 'Valor residual', min: 0, max: 50000, step: 5000, value: 20000 },
            { key: 'v', label: 'Vida útil (años)', min: 2, max: 10, step: 1, value: 8 },
          ],
          outputs: [
            { label: 'Monto depreciable (costo − residual)', calc: (x) => x.c - x.r },
            { label: 'Depreciación anual', calc: (x) => (x.c - x.r) / x.v, main: true },
            { label: 'Depreciación mensual', calc: (x) => (x.c - x.r) / x.v / 12 },
          ],
          goal: {
            text: 'Mueve los datos hasta que la depreciación anual sea de **$50,000 o más**.',
            check: (x) => (x.c - x.r) / x.v >= 50000,
            done: 'Más costo, menos residual o menos años de vida = más gasto por año. Fórmula: (Costo − Valor residual) ÷ Vida útil.',
          },
        },
      },
      { text: 'Cada año se carga **Gasto por depreciación** y se abona **Depreciación acumulada**, que va sumando todo lo depreciado.' },
      {
        tacct: {
          title: 'Una máquina de $240,000 que se deprecia $54,000 al año',
          account: 'Depreciación acumulada',
          moves: [
            { story: 'Cierre del año 1: registras la depreciación del año, **$54,000**.', side: 'C', amount: 54000, why: 'La depreciación acumulada crece con abonos.' },
            { story: 'Cierre del año 2: otra vez **$54,000**.', side: 'C', amount: 54000, why: 'Se sigue abonando: ya suma $108,000.' },
            { story: 'Cierre del año 3: otros **$54,000**.', side: 'C', amount: 54000, why: 'Ya suma $162,000. Es una cuenta complementaria: se resta del costo.' },
          ],
        },
      },
      {
        calc: {
          question: 'Con esos datos (costo **$240,000**, acumulada **$162,000** al año 3), ¿cuál es el **valor en libros**?',
          answer: 78000,
          hint: 'costo menos depreciación acumulada. El residual aquí no se resta.',
          why: '240,000 − 162,000 = **$78,000**. El valor residual solo sirve para calcular la depreciación anual.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'La depreciación reparte el costo del activo a lo largo de su vida útil', ok: true },
            { text: 'Depreciación acumulada es una cuenta complementaria que se resta del costo', ok: true },
            { text: 'Valor en libros = Costo − Depreciación acumulada', ok: true },
            { text: 'La depreciación busca mostrar cuánto vale el activo en el mercado', ok: false },
            { text: 'El valor en libros es el precio al que puedes vender el activo', ok: false },
          ],
          why: 'La depreciación es **asignación del costo**, no una valuación a mercado. Por eso el valor en libros no es un precio de venta.',
        },
      },
      { tip: 'Línea recta: **(Costo − Valor residual) ÷ Vida útil**. Si te piden un mes, divide entre 12.' },
    ],
    // Unidades producidas
    [
      { text: 'Hay activos que se gastan **según cuánto los usas**: un horno que trabaja más horas se desgasta más. Ahí se calcula una **cuota por unidad** (pieza, hora o kilómetro).' },
      {
        sim: {
          title: 'El horno industrial de Grupo Tacos Felices 🌮',
          inputs: [{ key: 'h', label: 'Horas que trabajó este año', min: 0, max: 20000, step: 500, value: 5000 }],
          outputs: [
            { label: 'Cuota por hora: (300,000 − 20,000) ÷ 70,000', calc: () => (300000 - 20000) / 70000 },
            { label: 'Depreciación del año', calc: (x) => ((300000 - 20000) / 70000) * x.h, main: true },
          ],
          goal: {
            text: 'Es un año de mucha venta. Sube las horas hasta que la depreciación llegue a **$50,000 o más**.',
            check: (x) => ((300000 - 20000) / 70000) * x.h >= 50000,
            done: 'Con 12,500 horas × $4.00 = $50,000. Año con mucha producción, más depreciación; año flojo, menos.',
          },
        },
      },
      {
        calc: {
          question: 'Una camioneta de reparto cuesta **$450,000**, residual **$50,000**, y se espera que recorra **200,000 km**. Este año recorrió **35,000 km**. ¿Cuánto es la depreciación del año?',
          answer: 70000,
          hint: 'primero la cuota por km: (costo − residual) ÷ km totales.',
          why: 'Cuota = (450,000 − 50,000) ÷ 200,000 = $2.00 por km. Año: 35,000 × 2.00 = **$70,000**.',
        },
      },
      {
        rush: {
          title: '¿Qué método le queda mejor?',
          seconds: 40,
          labels: ['Línea recta', 'Unidades producidas'],
          items: [
            { text: 'Una camioneta cuyo desgaste depende de los kilómetros', ans: 1 },
            { text: 'Un escritorio que se usa parejo todos los años', ans: 0 },
            { text: 'Una máquina que se gasta según las piezas que hace', ans: 1 },
            { text: 'Un mostrador de la tiendita que se usa igual cada año', ans: 0 },
            { text: 'Un horno que se desgasta por hora de uso', ans: 1 },
            { text: 'Unas sillas de oficina con uso parejo', ans: 0 },
          ],
        },
      },
      {
        ask: 'La contadora del despacho ve que la depreciación de su libro contable no coincide con la que usa para impuestos. ¿Por qué puede pasar?',
        options: [
          { text: 'Seguro hay un error y hay que igualarlas', reply: 'No necesariamente. Son dos reglas distintas y pueden diferir.' },
          { text: 'La fiscal usa porcentajes máximos de la Ley del ISR y puede diferir de la contable', ok: true, reply: '¡Exacto! Esa diferencia se estudia en el nivel de fiscalidad.' },
          { text: 'Porque la contable siempre usa unidades producidas', reply: 'No: la contable puede usar línea recta o unidades producidas, según cómo se desgaste el activo.' },
        ],
      },
      { tip: 'Unidades producidas: **cuota por unidad × unidades del periodo**. El gasto sube y baja con la actividad.' },
    ],
  ],
}
