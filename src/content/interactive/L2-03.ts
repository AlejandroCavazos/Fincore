import type { InteractiveLesson } from './types'

export const intL203: InteractiveLesson = {
  lessonId: 'L2-03',
  sections: [
    // ¿Cuándo se anota un gasto?
    [
      { text: 'Sofía tiene una cafetería ☕. El 1 de noviembre pagó **$36,000** de un seguro por 12 meses. En diciembre cierra el año y se pregunta: ¿todo eso fue gasto de este año?' },
      {
        ask: '¿Qué crees?',
        options: [
          { text: 'No: solo lo de noviembre y diciembre', ok: true, reply: '¡Bien! Solo usó 2 meses del seguro. Los otros 10 siguen siendo un derecho a su favor (un activo).' },
          { text: 'Sí: lo pagó este año, todo es gasto', reply: 'Pagar no es lo mismo que usar. Solo usó **2 meses**; el resto es un pago anticipado (activo).' },
          { text: 'Nada es gasto hasta que se acabe el seguro', reply: 'Cada mes que pasa ya lo usó. Noviembre y diciembre **sí** son gasto de este año.' },
        ],
      },
      { text: '**Devengar** es anotar algo en el mes en que se **usó o se ganó**, no cuando se pagó o se cobró. Al cierre, los **asientos de ajuste** corrigen las cuentas. Casi siempre mueven una cuenta de resultados y una de balance, y **nunca** Bancos.' },
      { text: 'Dos casos comunes:\n💸 **Pagaste antes** (renta, seguro): al usarlo, cargo al gasto y abono al pago anticipado\n💰 **Cobraste antes**: al ganarlo, cargo a Anticipos de clientes y abono al ingreso\n🧮 **Cuánto:** lo de un mes × los meses que ya pasaron' },
      {
        calc: {
          question: 'Seguro de **$36,000** por 12 meses, pagado el 1 de noviembre. ¿Cuánto pasa a **gasto** al 31 de diciembre?',
          answer: 6000,
          hint: '36,000 ÷ 12 meses, por los meses de noviembre y diciembre.',
          why: '36,000 ÷ 12 = $3,000 al mes × 2 meses = **$6,000**. Quedan $30,000 como pago anticipado.',
        },
      },
      {
        entry: {
          title: 'Arma el ajuste del seguro',
          story: 'Al 31 de diciembre, Sofía pasa a gasto los **$6,000** del seguro que ya usó. El pago ya se había registrado en Pagos anticipados.',
          lines: [
            { account: 'Gasto por seguros', side: 'D', amount: 6000, why: 'Es la parte que ya usó: gasto, se carga.' },
            { account: 'Pagos anticipados (seguros)', side: 'C', amount: 6000, why: 'Baja el derecho que tenía a favor (activo): se abona. Bancos no se toca.' },
          ],
        },
      },
      {
        ask: 'El 1 de noviembre Sofía cobró **$18,000** por 6 meses de café para una oficina (noviembre a abril) y lo registró en Anticipos de clientes. ¿Cuál es el ajuste al 31 de diciembre?',
        options: [
          { text: 'Cargo Anticipos de clientes $6,000 / Abono Ingresos $6,000', ok: true, reply: '¡Exacto! 18,000 ÷ 6 = $3,000 al mes × 2 meses ya servidos = **$6,000**. Quedan $12,000 por servir.' },
          { text: 'Cargo Anticipos de clientes $18,000 / Abono Ingresos $18,000', reply: 'Solo ha ganado 2 de 6 meses: 3,000 × 2 = **$6,000**. Lo demás sigue siendo un pasivo.' },
          { text: 'Cargo Bancos $6,000 / Abono Ingresos $6,000', reply: 'El cobro ya se registró: un ajuste **no toca Bancos**. Se carga Anticipos de clientes.' },
        ],
      },
      { tip: 'Ajuste = lo de un mes × meses que ya pasaron. Mueve resultados y balance, **nunca Bancos**.' },
    ],
    // Repartir el costo en años
    [
      { text: 'Sofía compra una cafetera de **$100,000** que le durará varios años. ¿Es justo cargar todo el gasto al primer año? No: la **depreciación** lo **reparte** entre los años en que la usa.' },
      { text: 'Tres datos:\n🏷️ **Valor residual:** lo que espera sacar al venderla al final\n⏳ **Vida útil:** los años que la usará\n📐 **Depreciación anual = (Costo − Valor residual) ÷ Vida útil**' },
      {
        sim: {
          title: 'La cafetera de Sofía (línea recta)',
          inputs: [
            { key: 'c', label: 'Costo de la cafetera', min: 100000, max: 400000, step: 10000, value: 100000 },
            { key: 'r', label: 'Valor residual', min: 0, max: 50000, step: 5000, value: 20000 },
            { key: 'v', label: 'Vida útil (años)', min: 2, max: 10, step: 1, value: 8 },
          ],
          outputs: [
            { label: 'Monto depreciable (costo − residual)', calc: (x) => x.c - x.r },
            { label: 'Depreciación anual', calc: (x) => (x.c - x.r) / x.v, main: true },
          ],
          goal: {
            text: 'Mueve los datos hasta que la depreciación anual sea de **$50,000 o más**.',
            check: (x) => (x.c - x.r) / x.v >= 50000,
            done: 'Más costo, menos residual o menos años = más gasto por año.',
          },
        },
      },
      {
        calc: {
          question: 'Una máquina de espresso cuesta **$130,000**, valor residual **$10,000**, vida útil **4 años**. ¿Cuál es la **depreciación anual**?',
          answer: 30000,
          hint: '(Costo − residual) ÷ años.',
          why: '(130,000 − 10,000) ÷ 4 = **$30,000**. Error común: no restar el residual (daría 32,500).',
        },
      },
      { text: 'Cada año: cargo a **Gasto por depreciación** y abono a **Depreciación acumulada**, que va sumando todo lo depreciado.\n**Valor en libros = Costo − Depreciación acumulada**' },
      {
        tacct: {
          title: 'La máquina de espresso, año por año',
          account: 'Depreciación acumulada',
          moves: [
            { story: 'Cierre del año 1: depreciación del año, **$30,000**.', side: 'C', amount: 30000, why: 'La depreciación acumulada crece con abonos.' },
            { story: 'Cierre del año 2: otra vez **$30,000**.', side: 'C', amount: 30000, why: 'Ya suma $60,000.' },
            { story: 'Cierre del año 3: otros **$30,000**.', side: 'C', amount: 30000, why: 'Ya suma $90,000. Se resta del costo para el valor en libros.' },
          ],
        },
      },
      {
        calc: {
          question: 'Al final del año 3: costo **$130,000** y depreciación acumulada **$90,000**. ¿Cuál es el **valor en libros**?',
          answer: 40000,
          hint: 'Costo − depreciación acumulada. Aquí el residual no se resta.',
          why: '130,000 − 90,000 = **$40,000**. El residual solo sirve para calcular la depreciación anual.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'La depreciación reparte el costo a lo largo de la vida útil', ok: true },
            { text: 'Depreciación acumulada se resta del costo', ok: true },
            { text: 'La depreciación muestra cuánto vale el activo en el mercado', ok: false },
            { text: 'El valor en libros es el precio al que puedes venderlo', ok: false },
          ],
          why: 'La depreciación **reparte el costo**; no mide el valor de mercado. Por eso el valor en libros no es un precio de venta.',
        },
      },
    ],
    // Depreciar según el uso
    [
      {
        ask: 'El tostador de café de Sofía trabaja el doble en diciembre que en febrero. ¿Se desgasta igual cada mes?',
        options: [
          { text: 'No: entre más se usa, más se desgasta', ok: true, reply: '¡Eso! Para estos activos se deprecia **según el uso**.' },
          { text: 'Sí, el tiempo es lo único que cuenta', reply: 'Para algunos activos sí, pero el tostador se gasta **según cuánto trabaja**.' },
          { text: 'No se desgasta nunca', reply: 'Todo equipo se desgasta. Este, **según cuánto lo usa**.' },
        ],
      },
      { text: 'Método de **unidades producidas**:\n1️⃣ Cuota por unidad = (Costo − Residual) ÷ unidades totales estimadas (piezas, horas, km)\n2️⃣ Depreciación = cuota × unidades del periodo' },
      {
        sim: {
          title: 'El tostador de Sofía',
          inputs: [{ key: 'h', label: 'Horas que trabajó este año', min: 0, max: 20000, step: 500, value: 5000 }],
          outputs: [
            { label: 'Cuota por hora: (300,000 − 20,000) ÷ 70,000', calc: () => (300000 - 20000) / 70000 },
            { label: 'Depreciación del año', calc: (x) => ((300000 - 20000) / 70000) * x.h, main: true },
          ],
          goal: {
            text: 'Año de mucha venta: sube las horas hasta que la depreciación llegue a **$50,000 o más**.',
            check: (x) => ((300000 - 20000) / 70000) * x.h >= 50000,
            done: '12,500 horas × $4.00 = $50,000. Más uso, más depreciación.',
          },
        },
      },
      {
        calc: {
          question: 'Una prensa para empaques cuesta **$450,000**, residual **$50,000**, y se espera que haga **200,000 piezas**. Este año hizo **35,000**. ¿Cuánto es la depreciación del año?',
          answer: 70000,
          hint: 'Primero la cuota por pieza: (costo − residual) ÷ piezas totales.',
          why: 'Cuota = 400,000 ÷ 200,000 = $2.00. Año: 35,000 × 2.00 = **$70,000**. Error común: usar el costo sin restar el residual.',
        },
      },
      {
        rush: {
          title: '¿Qué método le queda mejor?',
          seconds: 35,
          labels: ['Línea recta', 'Unidades producidas'],
          items: [
            { text: 'Camioneta que se gasta según los kilómetros', ans: 1 },
            { text: 'Escritorio que se usa parejo', ans: 0 },
            { text: 'Máquina que se gasta según las piezas', ans: 1 },
            { text: 'Mostrador que se usa igual cada año', ans: 0 },
            { text: 'Tostador que se gasta por hora de uso', ans: 1 },
          ],
        },
      },
      { tip: 'Unidades producidas: **cuota × unidades del periodo**. La depreciación para impuestos sigue otras reglas y puede ser distinta.' },
    ],
  ],
}
