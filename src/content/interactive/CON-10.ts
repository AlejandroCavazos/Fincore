import type { InteractiveLesson } from './types'

export const intCON10: InteractiveLesson = {
  lessonId: 'CON-10',
  sections: [
    // ¿En qué moneda vive tu negocio?
    [
      { text: 'Marta lleva las cuentas de una maquiladora en Chihuahua 🏭. Vende todo a Estados Unidos en **dólares**, compra insumos en dólares y debe un préstamo en dólares. Sus libros están en **pesos**.' },
      {
        ask: '¿En qué moneda crees que "vive" su negocio?',
        options: [
          { text: 'En pesos, porque así lleva sus libros', reply: 'Los libros pueden ir en pesos, pero su dinero entra y sale en **dólares**. Ahí "vive" el negocio.' },
          { text: 'En dólares', ok: true, reply: '¡Bien visto! Vende, compra y se financia en dólares. Ahora verás cómo se llama eso.' },
          { text: 'En la moneda que ella elija', reply: 'No se elige por gusto: la decide **dónde se mueve el dinero**. En su caso, en dólares.' },
        ],
      },
      {
        text: 'Hay **tres monedas** que no hay que confundir:\n📒 **Registro:** en la que llevas tus libros.\n🌎 **Funcional:** la de tu entorno económico principal, donde generas y gastas tu efectivo.\n📊 **Informe:** en la que presentas tus estados financieros.\nCualquier otra distinta de la funcional es **moneda extranjera**.',
      },
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
      { text: 'Para hallar la **funcional**, pregúntate: ¿en qué moneda vendo?, ¿en qué pago a proveedores y empleados?, ¿en qué me financio?' },
      {
        sort: {
          title: '¿Cuál es su moneda funcional?',
          buckets: ['Peso', 'Dólar'],
          items: [
            { text: 'Papelería en Puebla que vende y compra en pesos', bucket: 0, why: 'Todo su entorno es en pesos.' },
            { text: 'La maquiladora de Marta', bucket: 1, why: 'Vende, paga y se financia en dólares, aunque registre en pesos.' },
            { text: 'Taller mecánico en Monterrey que cobra y paga en pesos', bucket: 0, why: 'Su dinero entra y sale en pesos.' },
            { text: 'Filial en Texas que vende y paga sueldos en dólares', bucket: 1, why: 'Su entorno económico principal está en dólares.' },
          ],
        },
      },
      {
        ask: 'Marta se lo explica a su jefe. ¿Qué decide la moneda funcional?',
        options: [
          { text: 'El país donde está registrada la empresa', reply: 'Marta está en México y aun así su funcional es el dólar. Decide **dónde genera y gasta su efectivo**.' },
          { text: 'Dónde genera y gasta su efectivo', ok: true, reply: '¡Exacto! Es la moneda de su **entorno económico principal**.' },
          { text: 'La moneda en que presenta sus estados', reply: 'Esa es la **moneda de informe**. La funcional depende de **dónde genera y gasta su efectivo**.' },
        ],
      },
      { tip: 'La moneda funcional no se elige por gusto: la decide **dónde se mueve tu dinero**.' },
    ],
    // ¿Y si el dólar cambia?
    [
      { text: 'Marta compra material a un proveedor de Texas: **USD 3,000** a crédito, con el dólar a **$18.00**. El **tipo de cambio** es cuántos pesos cuesta un dólar, y se usa el **del día de la operación**.' },
      {
        calc: {
          question: '¿Cuántos pesos anota Marta como deuda con el proveedor?',
          answer: 54000,
          hint: 'Multiplica los dólares por el tipo de cambio: 3,000 × 18.00.',
          why: 'USD 3,000 × $18.00 = **$54,000**.',
        },
      },
      {
        ask: 'Cuando Marta paga, el dólar bajó a **$17.60**. ¿Qué pasó?',
        options: [
          { text: 'Ganancia cambiaria', ok: true, reply: '¡Sí! Debe los mismos USD 3,000, pero ahora le cuestan 3,000 × 17.60 = $52,800. Paga **$1,200 menos** de lo anotado.' },
          { text: 'Pérdida cambiaria, porque el dólar bajó', reply: 'Parece que "bajar" es malo, pero con una **deuda** en dólares te favorece: pagas $52,800 en vez de $54,000. Es **ganancia**.' },
          { text: 'Nada, debe los mismos dólares', reply: 'Los dólares son los mismos, pero los **pesos** no: paga $52,800 en vez de $54,000. Hay **ganancia cambiaria**.' },
        ],
      },
      {
        sim: {
          title: 'La deuda de Marta: USD 3,000',
          inputs: [{ key: 't', label: 'Tipo de cambio al cierre ($ por dólar)', min: 17, max: 19, step: 0.1, value: 18 }],
          outputs: [
            { label: 'Anotada al comprar (a $18.00)', calc: () => 54000 },
            { label: 'Pesos que necesita hoy', calc: (x) => Math.round(3000 * x.t) },
            { label: 'Ganancia (+) o pérdida (−) cambiaria', calc: (x) => Math.round(3000 * (18 - x.t)), main: true },
          ],
          goal: {
            text: 'Mueve el tipo de cambio hasta lograr una **ganancia cambiaria de $1,500 o más**.',
            check: (x) => Math.round(3000 * (18 - x.t)) >= 1500,
            done: 'Si debes dólares y el dólar **baja**, necesitas menos pesos: **ganancia**. Si sube, **pérdida**. Es como tu tarjeta en dólares.',
          },
        },
      },
      { text: 'Al cierre, no todo se actualiza:\n💵 **Monetarias:** dinero fijo por recibir o pagar (efectivo, clientes, proveedores, préstamos). Se actualizan al tipo de **cierre**.\n📦 **No monetarias:** inventarios, maquinaria, anticipos que se liquidan con mercancía. Se quedan al tipo **histórico**.' },
      {
        sort: {
          title: '¿Monetaria o no monetaria?',
          buckets: ['Monetaria (se actualiza al cierre)', 'No monetaria (tipo histórico)'],
          items: [
            { text: 'Dólares en la cuenta del banco', bucket: 0, why: 'Es efectivo en dólares: cantidad fija de dinero.' },
            { text: 'La deuda de USD 3,000 con el proveedor', bucket: 0, why: 'Obligación de pagar una cantidad fija de dinero.' },
            { text: 'Máquina comprada por USD 1,000', bucket: 1, why: 'Es un bien, no dinero: se queda al tipo del día de compra.' },
            { text: 'Inventario de material importado', bucket: 1, why: 'Es mercancía, no dinero.' },
            { text: 'Cliente en EE. UU. que debe USD 2,000', bucket: 0, why: 'Derecho a recibir una cantidad fija de dinero.' },
            { text: 'Anticipo a un proveedor que pagará con mercancía', bucket: 1, why: 'No se devolverá en efectivo: no monetaria.' },
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
      { tip: 'Lo que **debes** en dólares: si el dólar sube, pierdes. Lo que **te deben**: si el dólar sube, ganas.' },
    ],
    // Números de otro país
    [
      { text: 'La maquiladora de Marta abre una **filial en Texas** 🇺🇸 que lleva sus cuentas en dólares. Para juntar sus números con los de México, hay que **convertirlos**: "traducirlos" a pesos.' },
      { text: 'La regla general:\n🏦 **Activos y pasivos:** tipo de cambio de **cierre**.\n🧾 **Ingresos y gastos:** el de cada operación (o un **promedio** si se parece).\n🤝 **Capital aportado:** tipo **histórico**.' },
      {
        match: {
          title: '¿Con qué tipo de cambio se convierte cada cosa?',
          pairs: [
            ['Activos y pasivos', 'Tipo de cambio de cierre'],
            ['Ingresos y gastos', 'El de cada operación (o un promedio)'],
            ['Capital aportado', 'Tipo de cambio histórico'],
          ],
        },
      },
      {
        calc: {
          question: 'La filial es nueva y sin utilidades. Los socios aportaron **USD 10,000** con el dólar a **$17.00**. Al cierre sus activos netos siguen en USD 10,000 y el dólar está a **$18.00**. ¿Cuánto es el **efecto por conversión**?',
          answer: 10000,
          hint: 'Activos netos al tipo de cierre menos capital aportado al tipo histórico.',
          why: 'USD 10,000 × $18.00 = $180,000 menos USD 10,000 × $17.00 = $170,000 = **$10,000**.',
        },
      },
      {
        ask: '¿Dónde se anota ese efecto por conversión?',
        options: [
          { text: 'En otros resultados integrales (ORI), dentro del capital', ok: true, reply: '¡Correcto! Se guarda en **ORI** hasta que se vende la filial. Todavía no es dinero real.' },
          { text: 'En la utilidad del año', reply: 'No toca la utilidad del año: va a **ORI**, un apartado del capital, hasta que se vende la filial.' },
          { text: 'En ningún lado, es redondeo', reply: 'No es redondeo: nace porque cada partida usa un tipo de cambio distinto. Va a **ORI**, dentro del capital.' },
        ],
      },
      { text: '¿Por qué no hay una sola contabilidad mundial? Cada país hizo sus reglas: muchos usan **NIIF (IFRS)**, Estados Unidos usa **US GAAP** y México sus **NIF**, muy cercanas a las NIIF.' },
      {
        sort: {
          title: '¿NIIF o US GAAP?',
          buckets: ['NIIF', 'US GAAP'],
          items: [
            { text: 'Prohíben el método UEPS (LIFO) para inventarios', bucket: 0, why: 'Las NIIF lo prohíben; US GAAP lo permite.' },
            { text: 'Permite el método UEPS (LIFO)', bucket: 1, why: 'US GAAP sí lo permite; las NIIF no.' },
            { text: 'Permiten revaluar propiedades, planta y equipo', bucket: 0, why: 'Las NIIF sí lo permiten; US GAAP no.' },
            { text: 'Tiene más reglas detalladas', bucket: 1, why: 'US GAAP es más de reglas; las NIIF, más de principios.' },
            { text: 'Tienden a basarse en principios', bucket: 0, why: 'Las NIIF se basan más en principios.' },
          ],
        },
      },
      { tip: 'Convertir: activos y pasivos al **cierre**, resultados al de **cada operación**, capital al **histórico**. La diferencia va a **ORI**.' },
    ],
  ],
}
