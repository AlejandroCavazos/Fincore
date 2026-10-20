import type { InteractiveLesson } from './types'

const vpn = (r: number) => 55000 / (1 + r) + 36300 / (1 + r) ** 2 + 39930 / (1 + r) ** 3 - 100000

export const intL404: InteractiveLesson = {
  lessonId: 'L4-04',
  sections: [
    // ¿Qué dinero cuenta?
    [
      { text: 'Don Chema tiene una panadería 🥖 y piensa comprar un **horno nuevo**. Para decidir, solo cuenta el dinero que **entra o sale por hacerlo**. La pregunta clave: "¿este peso existiría o cambiaría si no compro el horno?".' },
      {
        ask: 'El año pasado pagó **$8,000** a un asesor para estudiar el horno. ¿Lo cuenta en el análisis?',
        options: [
          { text: 'No: ya se gastó, compre o no el horno', ok: true, reply: '¡Exacto! Es un **costo hundido**: no cambia con la decisión, así que no cuenta.' },
          { text: 'Sí: es parte del proyecto', reply: 'Ese dinero ya se fue, decida lo que decida. Es un **costo hundido** y no cuenta.' },
          { text: 'Sí, pero solo la mitad', reply: 'No se cuenta ni la mitad: ya se gastó pase lo que pase. Es un **costo hundido**.' },
        ],
      },
      {
        text: '✅ **Sí cuenta:** la inversión, el capital de trabajo extra (más harina en bodega), los flujos después de impuestos con el ahorro fiscal de la depreciación, los costos de oportunidad y el valor de rescate.\n❌ **No cuenta:** costos hundidos, gastos generales que no cambian y los **intereses** del préstamo (ya están en la tasa de descuento).',
      },
      {
        sort: {
          title: '¿Entra en los flujos del horno?',
          buckets: ['Sí cuenta', 'No cuenta'],
          items: [
            { text: 'El precio del horno nuevo', bucket: 0, why: 'Es la inversión inicial: sale solo si compra el horno.' },
            { text: 'La renta que podría cobrar por la bodega que usará el horno', bucket: 0, why: 'Renuncia a ese dinero: es un **costo de oportunidad**.' },
            { text: 'Los intereses del préstamo para comprarlo', bucket: 1, why: 'El costo de financiarse ya está en la tasa de descuento: contarlos sería contarlo dos veces.' },
            { text: 'Más harina y azúcar en inventario', bucket: 0, why: 'Es capital de trabajo extra que pide el proyecto.' },
            { text: 'La luz de la oficina que no cambia con el horno', bucket: 1, why: 'Es un gasto general que no cambia: no cuenta.' },
            { text: 'El ahorro de impuestos por la depreciación del horno', bucket: 0, why: 'Es efectivo que ahorra gracias al proyecto: sí cuenta.' },
          ],
        },
      },
      { text: 'El efectivo que deja el proyecto cada año (flujo de caja operativo):\n**FCO = (ingresos − costos − depreciación) × (1 − T) + depreciación**\nT es la tasa de impuesto. La depreciación se vuelve a sumar porque no sale dinero de la caja por ella.' },
      {
        calc: {
          question: 'El horno deja ingresos de **$200,000**, costos de **$120,000** y depreciación de **$20,000** al año. Con T = 30 % (tasa de ejemplo), ¿cuál es el FCO?',
          answer: 62000,
          hint: '200,000 − 120,000 − 20,000 = 60,000. Por 0.70. Luego súmale 20,000.',
          why: '60,000 × 0.70 = 42,000. Más la depreciación: 42,000 + 20,000 = **$62,000**.',
        },
      },
      { tip: 'Pregunta siempre: "¿este peso cambia si hago el proyecto?". Si no cambia, no entra.' },
    ],
    // ¿Cuánto gano en pesos de hoy?
    [
      { text: 'El horno cuesta **$100,000** y deja **$55,000**, **$36,300** y **$39,930** en los años 1, 2 y 3. Don Chema exige ganar **10 %** (de ejemplo): es su **costo de capital**, lo mínimo que ganaría en otra inversión de riesgo parecido.' },
      {
        ask: 'Los flujos suman $131,230. ¿Su ganancia es 131,230 − 100,000 = $31,230?',
        options: [
          { text: 'No: falta pasar los flujos a pesos de hoy', ok: true, reply: '¡Exacto! Son pesos de distintos años. Primero se descuentan.' },
          { text: 'Sí, es la ganancia', reply: 'Así exageras la ganancia: mezclas pesos de distintas fechas. Primero **descuenta** cada flujo.' },
          { text: 'No: hay que sumar la inversión', reply: 'La inversión se resta, no se suma. Lo que falta es **descontar** los flujos.' },
        ],
      },
      { text: 'El **VPN (valor presente neto)** es la ganancia en pesos de hoy, después de pagar lo que exiges:\n**VPN = −inversión + cada flujo ÷ (1 + r)^año**\n✅ VPN > 0: crea valor, se acepta. ❌ VPN < 0: destruye valor, se rechaza.' },
      {
        calc: {
          question: '¿Cuánto vale hoy el flujo del **año 2** ($36,300) con 10 %?',
          answer: 30000,
          hint: '1.10² = 1.21. Divide 36,300 ÷ 1.21.',
          why: '36,300 ÷ 1.21 = **$30,000**.',
        },
      },
      {
        calc: {
          question: 'Año 1: 55,000 ÷ 1.10 = $50,000. Año 3: 39,930 ÷ 1.331 = $30,000. ¿Cuál es el **VPN** del horno?',
          answer: 10000,
          hint: 'Suma los tres valores de hoy (50,000 + 30,000 + 30,000) y resta la inversión.',
          why: '110,000 − 100,000 = **$10,000**. Es positivo: el horno crea valor.',
        },
      },
      {
        sim: {
          title: 'El mismo horno con distinta tasa',
          inputs: [{ key: 'r', label: 'Tasa que exige Don Chema (%)', min: 4, max: 20, step: 1, value: 10 }],
          outputs: [
            { label: 'Flujos en pesos de hoy', calc: (x) => vpn(x.r / 100) + 100000 },
            { label: 'VPN', calc: (x) => vpn(x.r / 100), main: true },
          ],
          goal: {
            text: 'Sube la tasa hasta que el **VPN sea negativo**.',
            check: (x) => vpn(x.r / 100) < 0,
            done: 'Si exiges más, el mismo horno deja de convenir. Entre 15 % y 16 % el VPN pasa por cero: guarda esa idea para la siguiente lección.',
          },
        },
      },
      {
        ask: 'Solo puede comprar **uno**: horno A con VPN de **$10,000** u horno B con VPN de **$4,000**. ¿Cuál?',
        options: [
          { text: 'El horno A', ok: true, reply: '¡Bien! Entre proyectos que se excluyen, gana el de **mayor VPN**: deja más pesos de hoy.' },
          { text: 'El horno B', reply: 'B también crea valor, pero menos. Gana el de **mayor VPN**: el A.' },
          { text: 'Los dos', reply: 'Solo puede comprar uno. Entonces elige el de **mayor VPN**: el A.' },
        ],
      },
      { tip: 'Error común: restar la inversión a los flujos sin descontarlos. Exagera la ganancia.' },
    ],
    // ¿Qué rendimiento da el proyecto?
    [
      {
        ask: 'Con 10 % el VPN del horno es **+$10,000**; con 20 % es **−$5,851**. ¿En qué tasa crees que el VPN queda en **cero**?',
        options: [
          { text: 'Entre 10 % y 20 %', ok: true, reply: '¡Sí! Pasa de positivo a negativo en ese tramo: ahí está la tasa que lo deja en cero.' },
          { text: 'Menos de 10 %', reply: 'Con 10 % todavía es positivo, y con tasas más bajas sube más. Está **entre 10 % y 20 %**.' },
          { text: 'Más de 20 %', reply: 'Con 20 % ya es negativo y con más tasa baja más. Está **entre 10 % y 20 %**.' },
        ],
      },
      { text: 'Esa tasa es la **TIR (tasa interna de retorno)**: el rendimiento anual que da el proyecto por sí mismo. Se busca por prueba y error o con una hoja de cálculo.\n✅ TIR > costo de capital: se acepta. ❌ TIR < costo de capital: se rechaza.' },
      {
        rush: {
          title: '¿Se acepta o se rechaza?',
          seconds: 40,
          labels: ['Acepta', 'Rechaza'],
          items: [
            { text: 'TIR 15 %, costo de capital 10 %', ans: 0 },
            { text: 'TIR 8 %, costo de capital 12 %', ans: 1 },
            { text: 'TIR 20 %, costo de capital 18 %', ans: 0 },
            { text: 'TIR 9 %, costo de capital 9.5 %', ans: 1 },
            { text: 'VPN de +$2,000', ans: 0 },
            { text: 'VPN de −$500', ans: 1 },
          ],
        },
      },
      { text: 'Dos cuidados con la TIR:\n🔀 Si el signo de los flujos cambia **más de una vez** (por ejemplo, un costo de cierre al final), puede haber **varias TIR o ninguna**.\n⚖️ Entre proyectos que se excluyen, manda el **VPN**, no la TIR más alta.' },
      {
        multi: {
          title: '¿Cuáles pueden tener más de una TIR?',
          items: [
            { text: '−100, +230, −132', ok: true },
            { text: '−100, +50, +60', ok: false },
            { text: '−80, +150, −60', ok: true },
            { text: '−500, +200, +200, +200', ok: false },
          ],
          why: 'Cuenta los cambios de signo: −, +, − cambia **dos veces**, así que puede haber varias TIR. Un flujo negativo y luego puros positivos tiene una sola TIR.',
        },
      },
      {
        ask: 'Solo puede elegir uno: horno grande (VPN **$30,000**, TIR **16 %**) u horno chico (VPN **$18,000**, TIR **22 %**). Costo de capital 10 %.',
        options: [
          { text: 'El grande, porque deja más VPN', ok: true, reply: '¡Exacto! La TIR es un porcentaje y no dice cuántos pesos ganas. Manda el **VPN**.' },
          { text: 'El chico, porque su TIR es más alta', reply: 'La TIR más alta no siempre deja más dinero. Entre excluyentes manda el **VPN**: el grande.' },
          { text: 'Ninguno, porque se contradicen', reply: 'Los dos superan el 10 %. Cuando VPN y TIR no coinciden, decide el **VPN**: el grande.' },
        ],
      },
      { tip: 'VPN: cuántos pesos de hoy gana el proyecto. TIR: qué rendimiento da. Si se contradicen, decide con el VPN.' },
    ],
    // ¿En cuánto tiempo lo recupero?
    [
      { text: 'Don Chema también ve una **batidora de $55,000** que le deja **$20,000**, **$30,000** y **$20,000** en los años 1, 2 y 3.' },
      {
        ask: '¿En cuánto tiempo crees que "se paga sola"?',
        options: [
          { text: 'Entre 2 y 3 años', ok: true, reply: '¡Bien! En 2 años junta $50,000; le faltan $5,000 que cubre durante el año 3.' },
          { text: 'En 1 año', reply: 'En el año 1 solo junta $20,000. Se recupera **entre 2 y 3 años**.' },
          { text: 'Nunca', reply: 'En 3 años junta $70,000, más que los $55,000. Se recupera **entre 2 y 3 años**.' },
        ],
      },
      {
        order: {
          title: 'Arma el cálculo del payback (periodo de recuperación)',
          steps: ['Acumula los flujos año por año', 'Ubica el último año en que aún no llegas a la inversión', 'Calcula cuánto falta para llegar', 'Divide lo que falta entre el flujo del año siguiente y súmalo a los años completos'],
          done: '¡Eso! Ahora aplícalo a la batidora.',
        },
      },
      {
        calc: {
          question: 'Al cierre del año 2 lleva $20,000 + $30,000 acumulados. ¿Cuánto le **falta** para recuperar los $55,000?',
          answer: 5000,
          hint: 'Inversión − acumulado del año 2.',
          why: '55,000 − 50,000 = **$5,000**.',
        },
      },
      {
        ask: 'Le faltan $5,000 y el año 3 deja $20,000. ¿Cuál es el payback simple?',
        options: [
          { text: '2.25 años', ok: true, reply: '¡Exacto! 5,000 ÷ 20,000 = 0.25. Payback = 2 + 0.25 = **2.25 años**.' },
          { text: '2.5 años', reply: 'La fracción es 5,000 ÷ 20,000 = 0.25, no 0.5. Son **2.25 años**.' },
          { text: '3 años', reply: 'Se recupera antes de terminar el año 3: 2 + 5,000 ÷ 20,000 = **2.25 años**.' },
        ],
      },
      { text: 'El **payback descontado** hace lo mismo pero con los flujos en pesos de hoy. Por eso siempre sale **igual o mayor** que el simple. Con 10 %, los flujos de la batidora valen hoy **$18,182**, **$24,793** y **$15,026**.' },
      {
        calc: {
          question: 'Con los flujos descontados, al cierre del año 2 lleva $18,182 + $24,793. ¿Cuánto le **falta** para los $55,000?',
          answer: 12025,
          hint: 'Suma los dos primeros y réstalos de 55,000.',
          why: '18,182 + 24,793 = 42,975. Falta 55,000 − 42,975 = **$12,025**. Entre $15,026 del año 3: 0.80, así que el payback descontado es **2.8 años**.',
        },
      },
      {
        ask: 'La batidora se recupera en 2.25 años. ¿Con eso ya sabes si crea valor?',
        options: [
          { text: 'No: para eso está el VPN', ok: true, reply: '¡Bien! El payback mide qué tan rápido recuperas (riesgo), no cuánto valor crea. Si se recupera **descontado** dentro de su vida, su VPN es positivo.' },
          { text: 'Sí: si se recupera rápido, crea valor', reply: 'El payback simple ignora el valor del dinero en el tiempo y lo que llega después. Para saber si crea valor, usa el **VPN**.' },
          { text: 'Sí: entre más años, más valor', reply: 'Más años de payback significa recuperar más lento. Para saber si crea valor, usa el **VPN**.' },
        ],
      },
    ],
  ],
}
