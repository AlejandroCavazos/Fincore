import type { InteractiveLesson } from './types'

const AC = 'Suben el activo y el capital'
const PC = 'Sube el pasivo y baja el capital'
const AP = 'Bajan el activo y el pasivo'

export const intCON08: InteractiveLesson = {
  lessonId: 'CON-08',
  sections: [
    // Activos: lo que vale de verdad
    [
      { text: 'Un **activo** es algo que controla el negocio y que le dará beneficios. Pero ojo: se presenta por lo que **vale de verdad**, no por lo que dice la factura.' },
      { text: 'Doña Lupe tiene una tiendita y fía. Sus clientes le deben **$20,000**, pero calcula que **$3,000** nunca los va a cobrar.' },
      {
        ask: '¿Cuánto debe mostrar Doña Lupe como **clientes netos**?',
        options: [
          { text: '$20,000, lo que le deben', reply: 'Eso dice la libreta, pero no todos van a pagar. Se resta la **estimación para cuentas incobrables**.' },
          { text: '$17,000', ok: true, reply: '¡Eso! Clientes $20,000 − estimación $3,000 = **$17,000**, lo que de verdad espera cobrar.' },
          { text: '$3,000', reply: 'Eso es lo que **no** va a cobrar. Lo que sí espera cobrar es 20,000 − 3,000.' },
        ],
      },
      { text: 'Ahora las máquinas y vehículos. Se desgastan con el uso, así que su costo se reparte entre los años que los usarás: eso es la **depreciación**.' },
      {
        calc: {
          question: 'Una camioneta de reparto cuesta **$400,000**, al final la venderás en **$40,000** (valor residual) y durará **5 años**. ¿Cuánto se deprecia **cada año** en línea recta?',
          answer: 72000,
          hint: 'primero resta el valor residual al costo y luego divide entre los años.',
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
      { tip: 'Los **terrenos no se deprecian**: no se desgastan con el uso.' },
    ],
    // Pasivos: lo que se debe, aunque sea estimado
    [
      { text: 'Un **pasivo** es una obligación que hará salir dinero del negocio. Algunas tienen monto exacto; otras se **estiman**: esas son las **provisiones**.' },
      {
        multi: {
          title: '¿Qué se necesita para registrar una provisión? Marca todas las que apliquen.',
          items: [
            { text: 'Una obligación presente por algo que ya pasó', ok: true },
            { text: 'Que sea probable que salga dinero', ok: true },
            { text: 'Que el monto se pueda estimar razonablemente', ok: true },
            { text: 'Tener la factura con el monto exacto', ok: false },
            { text: 'Que el gasto se vaya a hacer por gusto el año que viene', ok: false },
          ],
          why: 'Son tres condiciones: **obligación presente** por un evento pasado, salida de recursos **probable** y monto **estimable**. Si el monto fuera exacto, sería un pasivo normal.',
        },
      },
      {
        sort: {
          title: '¿Qué es cada cosa?',
          buckets: ['Pasivo con monto exacto', 'Provisión', 'No se registra'],
          items: [
            { text: 'Factura del proveedor de refrescos por $8,000', bucket: 0, why: 'Ya sabes cuánto y cuándo: pasivo normal.' },
            { text: 'Garantías de lavadoras ya vendidas, unos $15,000', bucket: 1, why: 'Obligación por ventas pasadas, probable y estimable, pero de monto incierto.' },
            { text: 'Sueldos de la quincena por pagar', bucket: 0, why: 'Monto exacto: pasivo normal.' },
            { text: 'Reparar el camión el año que viene porque quieres', bucket: 2, why: 'No hay obligación presente por algo que ya pasó: no se registra todavía.' },
            { text: 'Un préstamo del banco a 3 años', bucket: 0, why: 'Monto conocido: pasivo normal, y como se paga en más de un año, de largo plazo.' },
          ],
        },
      },
      { text: 'La tienda de electrodomésticos registra hoy su provisión por garantías de **$15,000**.' },
      {
        entry: {
          title: 'Provisión por garantías',
          story: 'Vendió lavadoras con un año de garantía y estima gastar **$15,000** en reparaciones.',
          lines: [
            { account: 'Gasto por provisiones', side: 'D', amount: 15000, why: 'Es un gasto de este año, porque las ventas ya pasaron: cargo.' },
            { account: 'Provisión por garantías (pasivo)', side: 'C', amount: 15000, why: 'Nace una deuda estimada: el pasivo sube con abono.' },
          ],
        },
      },
      { tip: 'Corto plazo = se paga en un año o menos. Largo plazo = después de un año.' },
    ],
    // Capital: lo aportado y lo ganado
    [
      { text: 'El **capital contable** es lo que es de los dueños: activos menos pasivos. Tiene dos partes: lo que los socios **pusieron** y lo que el negocio **ganó** y no repartió.' },
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
          question: 'La cafetería «Café Aroma» ganó **$300,000** este año. ¿Cuál es la **reserva legal mínima** que debe separar?',
          answer: 15000,
          hint: 'saca el 5% de la utilidad.',
          why: '5% × $300,000 = **$15,000**. Sigue separando cada año hasta que la reserva llegue a la quinta parte del capital social.',
        },
      },
      {
        balance: {
          title: 'El capital en movimiento',
          start: { a: 500000, p: 100000, c: 400000 },
          ops: [
            { story: 'Los socios aportan **$100,000** más al banco.', options: [{ text: AC, ok: true }, { text: PC }, { text: AP }], d: { a: 100000, p: 0, c: 100000 }, why: 'Entra dinero y es de los socios: capital contribuido.' },
            { story: 'La asamblea **decreta** dividendos por **$50,000** (aún no se pagan).', options: [{ text: AC }, { text: PC, ok: true }, { text: AP }], d: { a: 0, p: 50000, c: -50000 }, why: 'Baja el capital ganado y nace una deuda con los socios.' },
            { story: 'Se pagan los **$50,000** de dividendos.', options: [{ text: AC }, { text: PC }, { text: AP, ok: true }], d: { a: -50000, p: -50000, c: 0 }, why: 'Sale dinero y se paga la deuda con los socios. El capital ya había bajado al decretarlos.' },
          ],
        },
      },
      { tip: 'Truco: **contribuido** = lo que pusieron; **ganado** = lo que generó el negocio.' },
    ],
  ],
}
