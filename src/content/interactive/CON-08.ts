import type { InteractiveLesson } from './types'

const AC = 'Suben el activo y el capital'
const PC = 'Sube el pasivo y baja el capital'
const AP = 'Bajan el activo y el pasivo'

export const intCON08: InteractiveLesson = {
  lessonId: 'CON-08',
  sections: [
    // ¿Cuánto vale de verdad?
    [
      { text: 'Lupe tiene **Electro Lupe** 🔌 y vende lavadoras a crédito. Sus clientes le deben **$20,000**, pero calcula que **$3,000** nunca los va a cobrar.' },
      {
        ask: '¿Cuánto debe mostrar Lupe como **clientes netos**?',
        options: [
          { text: '$20,000, lo que le deben', reply: 'Eso dice la libreta, pero no todos van a pagar. Hay que restar lo que no se cobrará: 20,000 − 3,000.' },
          { text: '$17,000', ok: true, reply: '¡Eso! $20,000 − $3,000 = **$17,000**, lo que de verdad espera cobrar.' },
          { text: '$3,000', reply: 'Eso es lo que **no** va a cobrar. Lo que sí espera cobrar es 20,000 − 3,000.' },
        ],
      },
      { text: 'Un **activo** se presenta por lo que **vale de verdad**. Lo que no se cobrará va en la **estimación para cuentas incobrables**, una cuenta que resta a Clientes.' },
      {
        entry: {
          title: 'Anota la estimación',
          story: 'Al cierre, Lupe estima que **$3,000** de sus clientes no se cobrarán.',
          lines: [
            { account: 'Gasto por cuentas incobrables', side: 'D', amount: 3000, why: 'Es un gasto del año: se carga.' },
            { account: 'Estimación para cuentas incobrables', side: 'C', amount: 3000, why: 'Resta a Clientes, así que crece con abono.' },
          ],
        },
      },
      { text: 'La camioneta de reparto se desgasta con los años. Su costo se reparte entre los años de uso: eso es la **depreciación**. En **línea recta**, cada año es lo mismo:\n🚚 (Costo − valor residual) ÷ años de vida útil.' },
      {
        calc: {
          question: 'La camioneta cuesta **$400,000**, al final la venderá en **$40,000** (valor residual) y durará **5 años**. ¿Cuánto se deprecia **cada año**?',
          answer: 72000,
          hint: 'Primero resta el valor residual al costo y luego divide entre los años.',
          why: '($400,000 − $40,000) ÷ 5 = **$72,000** cada año, siempre la misma cantidad.',
        },
      },
      {
        sim: {
          title: 'La camioneta con los años',
          inputs: [
            { key: 'y', label: 'Años de uso', min: 0, max: 5, step: 1, value: 1 },
            { key: 'r', label: 'Valor residual', min: 0, max: 100000, step: 10000, value: 40000 },
          ],
          outputs: [
            { label: 'Depreciación acumulada', calc: (x) => ((400000 - x.r) / 5) * x.y },
            { label: 'Valor en libros', calc: (x) => 400000 - ((400000 - x.r) / 5) * x.y, main: true },
          ],
          goal: {
            text: 'Mueve los años hasta que el **valor en libros** baje de **$150,000**.',
            check: (x) => 400000 - ((400000 - x.r) / 5) * x.y < 150000,
            done: 'Valor en libros = Costo − Depreciación acumulada. Al final de su vida útil queda solo el valor residual.',
          },
        },
      },
      {
        calc: {
          question: 'Con la misma camioneta ($72,000 por año), ¿cuál es su **valor en libros** al final del **segundo año**?',
          answer: 256000,
          hint: 'Depreciación acumulada = 72,000 × 2. Luego réstala al costo.',
          why: '72,000 × 2 = 144,000 acumulada. 400,000 − 144,000 = **$256,000**.',
        },
      },
    ],
    // Deudas que hay que estimar
    [
      { text: 'Electro Lupe vendió lavadoras con **un año de garantía**. Alguna se va a descomponer... pero nadie sabe cuál ni cuánto costará.' },
      { text: 'Un **pasivo** es una obligación que hará salir dinero: proveedores, sueldos, impuestos, préstamos. Si el monto o la fecha son **inciertos**, es una **provisión**.' },
      { text: 'Se registra una provisión cuando se cumplen tres cosas:\n📌 Hay una **obligación presente** por algo que ya pasó.\n💸 Es **probable** que salga dinero.\n🧮 El monto se puede **estimar**.' },
      {
        multi: {
          title: '¿Qué se necesita para registrar una provisión? Marca todas las que apliquen.',
          items: [
            { text: 'Una obligación presente por algo que ya pasó', ok: true },
            { text: 'Que sea probable que salga dinero', ok: true },
            { text: 'Que el monto se pueda estimar razonablemente', ok: true },
            { text: 'Tener la factura con el monto exacto', ok: false },
            { text: 'Apartar dinero por si algún día hay una crisis', ok: false },
          ],
          why: 'Son tres condiciones: **obligación presente** por un evento pasado, salida de recursos **probable** y monto **estimable**. Si el monto fuera exacto, sería un pasivo normal.',
        },
      },
      {
        sort: {
          title: '¿Qué es cada cosa?',
          buckets: ['Pasivo con monto exacto', 'Provisión', 'No se registra'],
          items: [
            { text: 'Factura del proveedor de lavadoras por $8,000', bucket: 0, why: 'Ya sabes cuánto y cuándo: pasivo normal.' },
            { text: 'Garantías de lavadoras ya vendidas, unos $15,000', bucket: 1, why: 'Obligación por ventas pasadas, probable y estimable, pero de monto incierto.' },
            { text: 'Sueldos de la quincena por pagar', bucket: 0, why: 'Monto exacto: pasivo normal.' },
            { text: 'Reparar la camioneta el año que viene porque quieres', bucket: 2, why: 'No hay obligación presente por algo que ya pasó: no se registra todavía.' },
            { text: 'Un préstamo del banco a 3 años', bucket: 0, why: 'Monto conocido: pasivo normal, y como se paga en más de un año, de largo plazo.' },
          ],
        },
      },
      {
        entry: {
          title: 'Anota la provisión por garantías',
          story: 'Por experiencia, Lupe estima gastar **$15,000** en reparar las lavadoras vendidas con garantía.',
          lines: [
            { account: 'Gasto por provisiones', side: 'D', amount: 15000, why: 'Es un gasto de este año, porque las ventas ya pasaron: cargo.' },
            { account: 'Provisiones (pasivo)', side: 'C', amount: 15000, why: 'Nace una deuda estimada: el pasivo sube con abono.' },
          ],
        },
      },
      { tip: 'Los pasivos se separan en **corto plazo** (hasta un año) y **largo plazo** (después de un año).' },
    ],
    // ¿Qué es de los dueños?
    [
      { text: 'Lupe y su socia pusieron dinero para abrir Electro Lupe. Con los años, el negocio ha ganado más. ¿Qué parte es de ellas?' },
      {
        text: 'El **capital contable** es lo de los dueños: activos − pasivos. Tiene dos partes:\n🤝 **Contribuido:** lo que los socios **pusieron** (capital social, aportaciones para futuros aumentos, prima en venta de acciones).\n🌱 **Ganado:** lo que el negocio **generó** y no repartió (utilidades retenidas, utilidad del ejercicio, reservas).',
      },
      {
        sort: {
          title: '¿Contribuido o ganado?',
          buckets: ['Capital contribuido', 'Capital ganado'],
          items: [
            { text: 'Capital social', bucket: 0, why: 'Lo pusieron los socios.' },
            { text: 'Utilidades retenidas', bucket: 1, why: 'Lo generó el negocio y no se repartió.' },
            { text: 'Prima en venta de acciones', bucket: 0, why: 'Es lo que los socios pagaron de más sobre el valor nominal: lo pusieron ellos.' },
            { text: 'Reserva legal', bucket: 1, why: 'Se separa de las utilidades: capital ganado.' },
            { text: 'Aportaciones para futuros aumentos de capital', bucket: 0, why: 'Dinero que pusieron los socios.' },
            { text: 'Utilidad del ejercicio', bucket: 1, why: 'Lo que ganó el negocio este año.' },
          ],
        },
      },
      { text: 'En México, la Ley General de Sociedades Mercantiles pide separar cada año al menos el **5%** de las utilidades para la **reserva legal**, hasta llegar a la quinta parte del capital social.' },
      {
        calc: {
          question: 'Electro Lupe ganó **$300,000** este año y su reserva aún no llega al tope. ¿Cuál es la **reserva legal mínima** que debe separar?',
          answer: 15000,
          hint: 'Saca el 5% de la utilidad: 300,000 × 0.05.',
          why: '5% × $300,000 = **$15,000**. Sigue separando cada año hasta que la reserva llegue a la quinta parte del capital social.',
        },
      },
      {
        balance: {
          title: 'El capital en movimiento',
          start: { a: 500000, p: 100000, c: 400000 },
          ops: [
            { story: 'Las socias aportan **$100,000** más al banco.', options: [{ text: AC, ok: true }, { text: PC }, { text: AP }], d: { a: 100000, p: 0, c: 100000 }, why: 'Entra dinero y es de las socias: capital contribuido.' },
            { story: 'La asamblea **decreta** dividendos por **$50,000** (aún no se pagan).', options: [{ text: AC }, { text: PC, ok: true }, { text: AP }], d: { a: 0, p: 50000, c: -50000 }, why: 'Baja el capital ganado y nace una deuda con las socias.' },
            { story: 'Se pagan los **$50,000** de dividendos.', options: [{ text: AC }, { text: PC }, { text: AP, ok: true }], d: { a: -50000, p: -50000, c: 0 }, why: 'Sale dinero y se paga la deuda con las socias. El capital ya había bajado al decretarlos.' },
          ],
        },
      },
      { tip: 'Truco: **contribuido** = lo que pusieron; **ganado** = lo que generó el negocio.' },
    ],
  ],
}
