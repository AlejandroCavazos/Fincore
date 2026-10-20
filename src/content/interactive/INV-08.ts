import type { InteractiveLesson } from './types'

export const intINV08: InteractiveLesson = {
  lessonId: 'INV-08',
  sections: [
    // ¿Qué es un fondo de inversión?
    [
      { text: 'Ramiro es maestro de secundaria en Monterrey 📚. Quiere invertir $1,000 en bonos, pero con eso no le alcanza para comprar muchos bonos distintos por separado.' },
      {
        ask: '¿Qué le ayudaría a tener una parte de muchos bonos con solo $1,000?',
        options: [
          { text: 'Juntar su dinero con el de muchas personas y comprar una canasta', ok: true, reply: '¡Exacto! Eso es un **fondo de inversión**: muchos ponen dinero y juntos compran una canasta.' },
          { text: 'Esperar a tener millones', reply: 'No hace falta. Juntando su dinero con el de muchas personas puede tener **una parte de decenas de bonos**.' },
          { text: 'Comprar un solo bono y ya', reply: 'Así tendría todo en un solo bono. Juntando dinero con otros en un **fondo** tiene una parte de muchos.' },
        ],
      },
      { text: 'Un **fondo de inversión** junta el dinero de muchas personas y lo invierte en una **cartera** de valores, según la estrategia de su **prospecto**. Lo administra una **operadora** profesional. Es como una tanda gigante donde todos compran juntos y cada quien es dueño de una parte.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Cartera', 'Los valores que compra el fondo'],
            ['Prospecto', 'Documento con la estrategia del fondo'],
            ['Operadora', 'Empresa profesional que lo administra'],
            ['Liquidez', 'Cada cuándo puedes sacar tu dinero'],
          ],
        },
      },
      { text: 'Ramiro compra **acciones del fondo**. Su precio es el **NAV** (valor neto de los activos por acción):\n➕ Lo que valen las inversiones del fondo\n➖ menos lo que debe\n➗ entre las acciones del fondo.\nNormalmente se calcula una vez al día.' },
      {
        calc: {
          question: 'Un fondo de ejemplo tiene inversiones por $21,000,000, debe $1,000,000 y tiene 2,000,000 de acciones. ¿Cuál es su precio por acción (NAV)?',
          answer: 10,
          hint: '(21,000,000 − 1,000,000) ÷ 2,000,000.',
          why: '21,000,000 − 1,000,000 = 20,000,000. Entre 2,000,000 acciones = **$10** por acción.',
        },
      },
      {
        sort: {
          title: '¿Fondo de deuda o de renta variable?',
          buckets: ['Deuda (más estable)', 'Renta variable (más volátil)'],
          items: [
            { text: 'Compra bonos', bucket: 0, why: 'Invierte en deuda: suele ser más estable.' },
            { text: 'Compra acciones de muchas empresas', bucket: 1, why: 'Las acciones son renta variable: más volátil.' },
            { text: 'Su valor sube y baja más de un día a otro', bucket: 1, why: 'Más volatilidad: renta variable.' },
            { text: 'El más estable de los dos', bucket: 0, why: 'Los fondos de deuda suelen ser más estables.' },
          ],
        },
      },
    ],
    // ¿Qué es un ETF?
    [
      { text: 'Una compañera le cuenta a Ramiro: "Yo compro un **ETF** en mi cuenta de la casa de bolsa y veo su precio moverse todo el día" 📱.' },
      { text: 'Un **ETF** (fondo cotizado) también es una canasta de valores, pero **cotiza en bolsa**: lo compras y vendes con tu casa de bolsa durante la sesión, a un precio que cambia, igual que una acción. La mayoría **replica un índice**.' },
      {
        ask: 'Un ETF replica un índice y el índice sube 5 %. ¿Qué busca hacer el ETF?',
        options: [
          { text: 'Subir casi lo mismo, cerca de 5 %', ok: true, reply: '¡Sí! Por eso con una sola compra tienes lo que hace todo el índice: cientos de empresas a la vez.' },
          { text: 'Subir el doble, 10 %', reply: 'Un ETF que replica un índice busca moverse **casi igual** que él: cerca de 5 %.' },
          { text: 'Quedarse igual', reply: 'Si copia al índice, se mueve con él: busca subir **casi lo mismo**, cerca de 5 %.' },
        ],
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['Un ETF es', 'una canasta de valores', 'que cotiza en bolsa', 'como si fuera una acción'],
          done: '¡La armaste! Ya puedes explicarle a cualquiera qué es un ETF.',
        },
      },
      {
        sort: {
          title: '¿ETF, fondo tradicional o ambos?',
          buckets: ['ETF', 'Fondo tradicional', 'Ambos'],
          items: [
            { text: 'Su precio cambia durante la sesión de bolsa', bucket: 0, why: 'El ETF cotiza todo el día, como una acción.' },
            { text: 'Se compra a la operadora o a un distribuidor', bucket: 1, why: 'Así se compra el fondo tradicional.' },
            { text: 'Su precio se calcula una vez al día', bucket: 1, why: 'El fondo tradicional se valúa normalmente una vez al día.' },
            { text: 'Se compra con una casa de bolsa como una acción', bucket: 0, why: 'El ETF se negocia en bolsa.' },
            { text: 'Cobra una comisión de administración anual', bucket: 2, why: 'Los dos cobran comisión cada año.' },
            { text: 'Junta dinero de muchos para comprar una canasta', bucket: 2, why: 'Los dos son canastas compartidas.' },
          ],
        },
      },
      { tip: 'Ni el ETF ni el fondo **garantizan rendimiento**: valen lo que valga lo que tienen dentro.' },
    ],
    // ¿Cuánto te cuestan las comisiones?
    [
      { text: 'Ramiro compara dos fondos que siguen el **mismo índice**: uno cobra **1.5 %** al año y otro **0.2 %** (comisiones de ejemplo). "Es poquito", piensa.' },
      { text: 'Primero, dos estilos:\n🧑‍💼 **Gestión activa:** un equipo elige qué comprar para intentar ganarle al mercado. Suele cobrar más y no siempre lo logra después de comisiones.\n🤖 **Gestión pasiva:** solo copia un índice, como la mayoría de los ETFs.' },
      {
        rush: {
          title: '¿Activa o pasiva?',
          seconds: 30,
          labels: ['Activa', 'Pasiva'],
          items: [
            { text: 'Un equipo elige qué acciones comprar', ans: 0 },
            { text: 'Solo copia un índice', ans: 1 },
            { text: 'Intenta ganarle al mercado', ans: 0 },
            { text: 'Así trabaja la mayoría de los ETFs', ans: 1 },
            { text: 'Suele cobrar más', ans: 0 },
          ],
        },
      },
      { text: 'La **comisión** se descuenta cada año del valor de tu inversión.\n**Comisión anual = saldo × % de comisión ÷ 100.**' },
      {
        calc: {
          question: 'Ramiro tiene $100,000. ¿Cuánto pagaría de comisión el primer año en el fondo que cobra 1.5 %?',
          answer: 1500,
          hint: '100,000 × 1.5 ÷ 100.',
          why: '100,000 × 1.5 ÷ 100 = **$1,500**. En el de 0.2 % serían $200: una diferencia de $1,300 solo el primer año.',
        },
      },
      {
        sim: {
          title: '$50,000 con un rendimiento bruto de ejemplo de 8 % al año (no garantizado)',
          inputs: [
            { key: 'c', label: 'Comisión: pesos al año por cada $1,000', min: 2, max: 20, step: 1, value: 15 },
            { key: 'n', label: 'Años invertido', min: 10, max: 20, step: 5, value: 10 },
          ],
          outputs: [
            { label: 'Comisión anual', calc: (x) => x.c / 10, unit: '%' },
            { label: 'Valor sin comisión', calc: (x) => Math.round(50000 * Math.pow(1.08, x.n)) },
            { label: 'Valor con comisión', calc: (x) => Math.round(50000 * Math.pow(1.08 - x.c / 1000, x.n)) },
            { label: 'Lo que te quita la comisión', calc: (x) => Math.round(50000 * (Math.pow(1.08, x.n) - Math.pow(1.08 - x.c / 1000, x.n))), main: true },
          ],
          goal: {
            text: 'A **20 años**, haz que la comisión te quite **menos de $10,000**.',
            check: (x) => x.n >= 20 && 50000 * (Math.pow(1.08, x.n) - Math.pow(1.08 - x.c / 1000, x.n)) < 10000,
            done: '$2 por cada $1,000 es 0.2 %; $15 es 1.5 %. Con 0.2 % pierdes unos miles; con 1.5 %, decenas de miles. La comisión se repite cada año y frena el interés compuesto.',
          },
        },
      },
      {
        ask: 'Ramiro quiere invertir cada mes para su retiro, no tiene tiempo de elegir acciones, quiere costos bajos y le basta lo que dé el mercado en general. ¿Qué se ajusta mejor?',
        options: [
          { text: 'Un ETF pasivo que replica un índice amplio, con comisión baja', ok: true, reply: '¡Eso! Le da el mercado en general, sin tener que elegir acciones, y con costo bajo.' },
          { text: 'Un fondo activo con comisión alta que promete ganarle al mercado', reply: 'Cobra más y no siempre le gana a su índice. Para lo que busca Ramiro encaja mejor un **ETF pasivo de comisión baja**.' },
          { text: 'Comprar cada mes la acción que más subió el mes anterior', reply: 'Eso exige elegir acciones y tiempo, justo lo que no quiere. Le va mejor un **ETF pasivo de comisión baja**.' },
        ],
      },
    ],
  ],
}
