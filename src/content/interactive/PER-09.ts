import type { InteractiveLesson } from './types'

export const intPER09: InteractiveLesson = {
  lessonId: 'PER-09',
  sections: [
    // Los apellidos de la tasa
    [
      { text: 'Jorge es maestro de primaria 🍎 y tiene dos hijos. Ve un préstamo que anuncia "**36% anual**", pero lo cobran cada mes.' },
      {
        ask: '¿Cuánto es, más o menos, al mes?',
        options: [
          { text: '3%', ok: true, reply: '¡Bien! Una forma sencilla: 36% ÷ 12 = **3% mensual**.' },
          { text: '36%', reply: 'Ese es el anual. Al mes se divide entre 12: **3%**.' },
          { text: '0.36%', reply: 'Muy poco. 36% ÷ 12 = **3%** al mes.' },
        ],
      },
      { text: '**Tasa mensual ≈ tasa anual ÷ 12.** Pero si los intereses de cada mes se suman al saldo, el costo real del año es mayor: la **tasa efectiva anual**. Ej.: 2% mensual da ≈ 26.82% al año, no 24%.' },
      {
        calc: {
          question: 'Otro préstamo tiene una tasa de ejemplo de 30% anual. ¿Cuál es su tasa mensual, en porcentaje?',
          answer: 2.5,
          unit: '%',
          hint: 'Divide la tasa anual entre 12.',
          why: '30 ÷ 12 = **2.5%** al mes.',
        },
      },
      { text: 'Los "apellidos" de lo que te cobran:\n🔒 **Fija:** no cambia. ↕️ **Variable:** sube o baja con una tasa de referencia.\n🧾 **Ordinaria:** lo normal por el dinero prestado.\n⚠️ **Moratoria:** un interés extra si te atrasas.\n🏷️ **Comisión:** un cobro por un servicio o evento (anualidad, sacar efectivo).' },
      {
        sort: {
          title: '¿Qué es cada cargo de Jorge?',
          buckets: ['Interés ordinario', 'Interés moratorio', 'Comisión'],
          items: [
            { text: 'Interés por el saldo de la tarjeta que no pagó completo', bucket: 0, why: 'Es el costo normal por el dinero prestado.' },
            { text: 'Interés extra por pagar tarde la mensualidad', bucket: 1, why: 'Se cobra por atrasarse: moratorio.' },
            { text: 'Cobro anual por tener la tarjeta', bucket: 2, why: 'La anualidad es una comisión.' },
            { text: 'Cargo por sacar efectivo del cajero con la tarjeta de crédito', bucket: 2, why: 'Es un cobro por un evento: comisión.' },
            { text: 'Interés pactado de un préstamo pagado a tiempo', bucket: 0, why: 'Aunque pague puntual, el interés normal sí se cobra.' },
            { text: 'Interés adicional sobre una mensualidad vencida del auto', bucket: 1, why: 'Viene del atraso: moratorio, aunque parezca castigo.' },
          ],
        },
      },
      { tip: 'En muchos créditos al consumo también se cobra **IVA sobre los intereses**. Revisa tu contrato.' },
    ],
    // ¿Qué crédito sale más barato?
    [
      { text: 'Jorge necesita un préstamo personal. Dos bancos le ofrecen el mismo monto y plazo (datos de ejemplo).' },
      {
        ask: 'Banco A: tasa 30%. Banco B: tasa 32%. ¿Cuál sale más barato?',
        options: [
          { text: 'Todavía no se sabe: faltan las comisiones', ok: true, reply: '¡Buen ojo! Uno puede cobrar comisiones por apertura o anualidad. La tasa sola no las muestra.' },
          { text: 'El A, porque tiene menor tasa', reply: 'No siempre. Si A cobra comisiones, puede salir más caro. Falta un dato.' },
          { text: 'El B, porque cobra más tasa', reply: 'Mayor tasa no lo hace más barato. Antes falta ver las **comisiones**.' },
        ],
      },
      { text: 'Por eso en México existe el **CAT (Costo Anual Total)**: un porcentaje anual que junta **intereses, comisiones y otros cargos**. Entre créditos del mismo tipo, monto y plazo, **el de menor CAT es el más barato**.' },
      {
        multi: {
          title: '¿Qué junta el CAT?',
          items: [
            { text: 'Los intereses', ok: true },
            { text: 'Las comisiones', ok: true },
            { text: 'Otros cargos del crédito', ok: true },
            { text: 'La inflación esperada del año', ok: false },
          ],
          why: 'El CAT junta **intereses, comisiones y otros cargos** del crédito. No tiene que ver con la inflación. Se informa sin IVA.',
        },
      },
      {
        ask: 'Ahora sí: A tiene tasa 30% y **CAT 42%**; B tiene tasa 32% y **CAT 38%**. ¿Cuál conviene?',
        options: [
          { text: 'El B', ok: true, reply: '¡Exacto! Su CAT es menor. A tiene menor tasa, pero esconde comisiones que suben su costo.' },
          { text: 'El A', reply: 'A tiene menor tasa, pero **mayor CAT**: cuesta más en total. Conviene **B**.' },
          { text: 'Cuestan lo mismo', reply: 'Sus CAT son distintos (42% y 38%). El menor CAT, **B**, es el más barato.' },
        ],
      },
      {
        order: {
          title: 'Ordena del más barato al más caro (datos de ejemplo)',
          steps: ['Oferta Q: tasa 31%, CAT 36%', 'Oferta P: tasa 27%, CAT 41%', 'Oferta R: tasa 25%, CAT 47%'],
          done: 'Se ordena por **CAT**, no por tasa. La de menor tasa resultó la más cara.',
        },
      },
      { tip: 'Compara CAT solo entre créditos del **mismo tipo, monto y plazo**, y pídelo **por escrito** antes de firmar.' },
    ],
    // ¿Cuánta deuda aguantas?
    [
      { text: 'Jorge recibe **$20,000 netos** al mes. Paga un préstamo, su tarjeta y una sala a plazos 🛋️.' },
      {
        ask: '¿Qué dice mejor si Jorge está muy endeudado?',
        options: [
          { text: 'Cuánto de su ingreso se va cada mes en deudas', ok: true, reply: '¡Eso! No solo importa cuánto debe, sino cuánto de su ingreso se lleva pagarlo.' },
          { text: 'Solo el total que debe', reply: 'Ayuda, pero lo clave es **qué parte de su ingreso** se va cada mes en pagar.' },
          { text: 'Cuántas tarjetas tiene', reply: 'Puede tener una sola y estar ahogado. Lo clave es **qué parte de su ingreso** se va en deudas.' },
        ],
      },
      { text: '**Razón de endeudamiento** = pagos mensuales de deudas ÷ ingreso neto × 100.\nIngreso **neto** = lo que de verdad recibes después de descuentos. Una guía práctica común: no pasar de alrededor de **30% a 35%**.' },
      {
        calc: {
          question: 'Jorge paga $2,800 del préstamo, $1,600 de la tarjeta y $600 de la sala. Gana $20,000 netos. ¿Cuál es su razón de endeudamiento, en porcentaje?',
          answer: 25,
          unit: '%',
          hint: 'Suma los tres pagos y divide entre 20,000. Luego × 100.',
          why: '2,800 + 1,600 + 600 = 5,000. 5,000 ÷ 20,000 × 100 = **25%**. Si dejas fuera la sala a plazos, te sale menos de lo real.',
        },
      },
      {
        sim: {
          title: '¿Le cabe a Jorge un préstamo nuevo?',
          inputs: [
            { key: 'ing', label: 'Ingreso neto al mes', min: 16000, max: 30000, step: 2000, value: 20000 },
            { key: 'p', label: 'Pagos de deudas que ya tiene', min: 2000, max: 8000, step: 500, value: 5000 },
            { key: 'n', label: 'Pago del préstamo nuevo', min: 0, max: 4000, step: 500, value: 3000 },
          ],
          outputs: [
            { label: 'Pagos de deuda al mes', calc: (x) => x.p + x.n },
            { label: 'Razón de endeudamiento', calc: (x) => Math.round(((x.p + x.n) / x.ing) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Que Jorge tome un préstamo nuevo (pago de **$1,000 o más**) sin pasar de **30%**.',
            check: (x) => x.n >= 1000 && ((x.p + x.n) / x.ing) * 100 <= 30,
            done: 'Para que quepa: menos deudas previas, un pago más chico o más ingreso. Arriba de la guía, un imprevisto lo haría atrasarse.',
          },
        },
      },
      {
        sort: {
          title: '¿Dentro o arriba de la guía?',
          buckets: ['30% o menos', 'Más de 35%'],
          items: [
            { text: 'Gana $15,000 netos y paga $4,500 de deudas', bucket: 0, why: '4,500 ÷ 15,000 = 30%: en el límite de la guía.' },
            { text: 'Gana $10,000 netos y paga $4,500', bucket: 1, why: '4,500 ÷ 10,000 = 45%: muy arriba.' },
            { text: 'Gana $25,000 netos y paga $6,000', bucket: 0, why: '6,000 ÷ 25,000 = 24%.' },
            { text: 'Gana $12,000 netos y paga $6,000', bucket: 1, why: '6,000 ÷ 12,000 = 50%: la mitad de su ingreso.' },
          ],
        },
      },
      { tip: 'Cuenta **todos** los pagos (también las compras a plazos) y divide entre el ingreso **neto**, no el bruto.' },
    ],
  ],
}
