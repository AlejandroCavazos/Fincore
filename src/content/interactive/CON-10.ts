import type { InteractiveLesson } from './types'

export const intCON10: InteractiveLesson = {
  lessonId: 'CON-10',
  sections: [
    // Tres monedas: de registro, funcional y de informe
    [
      { text: 'Cuando haces negocios con otros países aparecen **tres monedas**. Cada una tiene su trabajo. 💱' },
      {
        match: {
          title: 'Une cada moneda con lo que significa',
          pairs: [
            ['Moneda de registro', 'En la que llevas tus libros'],
            ['Moneda funcional', 'La de tu entorno económico principal'],
            ['Moneda de informe', 'En la que presentas tus estados financieros'],
            ['Moneda extranjera', 'Cualquier moneda distinta de la funcional'],
          ],
        },
      },
      { text: 'Para hallar la **moneda funcional** pregúntate: ¿en qué moneda vendo?, ¿en qué pago a proveedores y empleados?, ¿en qué me financio?' },
      {
        sort: {
          title: '¿Cuál es su moneda funcional?',
          buckets: ['Peso', 'Dólar'],
          items: [
            { text: 'Papelería en Puebla que vende y compra en pesos', bucket: 0, why: 'Todo su entorno es en pesos.' },
            { text: 'Maquiladora en Chihuahua: vende todo a EE. UU. en dólares, compra insumos en dólares y debe un préstamo en dólares', bucket: 1, why: 'Vende, paga y se financia en dólares, aunque registre en pesos.' },
            { text: 'Taller mecánico en Monterrey que cobra y paga en pesos', bucket: 0, why: 'Su dinero entra y sale en pesos.' },
            { text: 'Filial en Texas que vende y paga sueldos en dólares', bucket: 1, why: 'Su entorno económico principal está en dólares.' },
          ],
        },
      },
      {
        ask: 'La maquiladora de Chihuahua lleva sus libros en pesos. ¿Eso hace que su moneda funcional sea el peso?',
        options: [
          { text: 'Sí, la moneda funcional es la de los libros', reply: 'Esa es la **moneda de registro**. La funcional depende de dónde genera y gasta su efectivo.' },
          { text: 'No: su moneda funcional probablemente es el dólar', ok: true, reply: '¡Correcto! Registra en pesos, pero vive en dólares: vende, compra y se financia en dólares.' },
        ],
      },
      { tip: 'La moneda funcional no se elige por gusto: la decide **dónde se mueve tu dinero**.' },
    ],
    // Operaciones en moneda extranjera
    [
      { text: 'El **tipo de cambio** es cuántos pesos cuesta un dólar hoy. Cada compra o venta en dólares se pasa a pesos con el tipo de cambio **del día de la operación**.' },
      {
        calc: {
          question: 'Un importador compra mercancía por **USD 2,000** con el dólar a **$17.50**. ¿Cuántos pesos registra?',
          answer: 35000,
          hint: 'multiplica los dólares por el tipo de cambio.',
          why: 'USD 2,000 × $17.50 = **$35,000**.',
        },
      },
      { text: 'Hay dos tipos de partidas. Las **monetarias** son dinero fijo por recibir o pagar: se actualizan al cierre. Las **no monetarias** se quedan al tipo de cambio del día de compra.' },
      {
        sort: {
          title: '¿Monetaria o no monetaria?',
          buckets: ['Monetaria (se actualiza al cierre)', 'No monetaria (tipo de cambio histórico)'],
          items: [
            { text: 'Dólares en la cuenta del banco', bucket: 0, why: 'Es efectivo en dólares: cantidad fija de dinero.' },
            { text: 'Proveedor en el extranjero al que debes USD 5,000', bucket: 0, why: 'Obligación de pagar una cantidad fija de dinero.' },
            { text: 'Máquina comprada por USD 1,000', bucket: 1, why: 'Es un bien, no dinero: se queda al tipo de cambio del día en que se compró.' },
            { text: 'Inventario de mercancía importada', bucket: 1, why: 'Es mercancía, no dinero.' },
            { text: 'Cliente en EE. UU. que te debe USD 3,000', bucket: 0, why: 'Derecho a recibir una cantidad fija de dinero.' },
          ],
        },
      },
      { text: 'Piénsalo como tu tarjeta de crédito en dólares: debes los mismos dólares, pero si el dólar sube, necesitas **más pesos**.' },
      {
        sim: {
          title: 'Tu deuda de USD 5,000 con el proveedor',
          inputs: [{ key: 't', label: 'Tipo de cambio al cierre ($ por dólar)', min: 17, max: 20, step: 0.1, value: 18 }],
          outputs: [
            { label: 'Registrada al comprar (a $18.00)', calc: () => 90000 },
            { label: 'Pesos que necesitas hoy', calc: (x) => Math.round(5000 * x.t) },
            { label: 'Ganancia (+) o pérdida (−) cambiaria', calc: (x) => Math.round(5000 * (18 - x.t)), main: true },
          ],
          goal: {
            text: 'Mueve el tipo de cambio hasta lograr una **ganancia cambiaria de $2,500 o más**.',
            check: (x) => Math.round(5000 * (18 - x.t)) >= 2500,
            done: 'Si debes dólares y el dólar **baja**, necesitas menos pesos: **ganancia cambiaria**. Si sube, pérdida.',
          },
        },
      },
      {
        entry: {
          title: 'Ajuste al cierre',
          story: 'Debes **USD 5,000** al proveedor, registrados a **$18.00** ($90,000). Al cierre el dólar está en **$19.00** ($95,000).',
          lines: [
            { account: 'Pérdida cambiaria', side: 'D', amount: 5000, why: 'Necesitas $5,000 pesos más para pagar lo mismo: es una pérdida y va a resultados con cargo.' },
            { account: 'Proveedores', side: 'C', amount: 5000, why: 'La deuda en pesos sube a $95,000: el pasivo sube con abono.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Ganancia o pérdida cambiaria?',
          seconds: 40,
          labels: ['Ganancia', 'Pérdida'],
          items: [
            { text: 'Debes dólares y el dólar sube', ans: 1 },
            { text: 'Debes dólares y el dólar baja', ans: 0 },
            { text: 'Un cliente te debe dólares y el dólar sube', ans: 0 },
            { text: 'Un cliente te debe dólares y el dólar baja', ans: 1 },
            { text: 'Tienes dólares en el banco y el dólar sube', ans: 0 },
            { text: 'Tienes un préstamo en dólares y el dólar sube', ans: 1 },
          ],
        },
      },
      { tip: 'Lo que **debes** en dólares: si el dólar sube, pierdes. Lo que **te deben** en dólares: si el dólar sube, ganas.' },
    ],
    // Conversión de una subsidiaria extranjera y armonización
    [
      { text: 'Convertir es «traducir» a pesos los números de una filial que lleva sus cuentas en otra moneda, como una filial en Texas cuya moneda funcional es el dólar.' },
      {
        match: {
          title: '¿Con qué tipo de cambio se convierte cada cosa?',
          pairs: [
            ['Activos y pasivos', 'Tipo de cambio de cierre'],
            ['Ingresos y gastos', 'El de cada operación (o un promedio si se parece)'],
            ['Capital aportado', 'Tipo de cambio histórico'],
            ['Efecto por conversión', 'Va a otros resultados integrales (ORI), dentro del capital'],
          ],
        },
      },
      {
        calc: {
          question: 'Tu filial en Texas es nueva y sin utilidades. Los socios aportaron **USD 10,000** con el dólar a **$17.00**. Al cierre sus activos netos siguen siendo USD 10,000 y el dólar está a **$18.00**. ¿Cuánto es el **efecto por conversión**?',
          answer: 10000,
          hint: 'activos netos al tipo de cierre menos capital aportado al tipo histórico.',
          why: 'USD 10,000 × $18.00 = $180,000 menos USD 10,000 × $17.00 = $170,000 = **$10,000**. Va a **ORI**, no al estado de resultados, hasta que se venda la filial.',
        },
      },
      { text: '¿Por qué no hay una sola contabilidad mundial? Cada país hizo sus reglas: muchos usan **NIIF (IFRS)**, Estados Unidos usa **US GAAP** y México sus **NIF**, muy cercanas a las NIIF.' },
      {
        sort: {
          title: '¿NIIF o US GAAP?',
          buckets: ['NIIF', 'US GAAP'],
          items: [
            { text: 'Prohíben el método UEPS (LIFO) para inventarios', bucket: 0, why: 'Las NIIF lo prohíben; US GAAP lo permite.' },
            { text: 'Permiten revaluar propiedades, planta y equipo', bucket: 0, why: 'Las NIIF sí lo permiten; US GAAP no.' },
            { text: 'No permiten revertir una baja de valor de inventarios', bucket: 1, why: 'US GAAP no lo permite; las NIIF sí.' },
            { text: 'Tienen más reglas detalladas', bucket: 1, why: 'US GAAP es más de reglas; las NIIF, más de principios.' },
            { text: 'Tienden a basarse en principios', bucket: 0, why: 'Las NIIF se basan más en principios.' },
          ],
        },
      },
      { tip: 'El **efecto por conversión** no toca la utilidad del año: se guarda en **ORI** hasta que la filial se vende.' },
    ],
  ],
}
