import type { InteractiveLesson } from './types'

export const intL102: InteractiveLesson = {
  lessonId: 'L1-02',
  sections: [
    // ¿Desde cuándo llevamos cuentas?
    [
      { text: 'Tere anota en una libreta 📒 lo que vende en su papelería. Pero esa costumbre es muchísimo más vieja que ella… y que las monedas.' },
      {
        ask: 'Antes de que existieran las monedas, ¿la gente necesitaba llevar cuentas?',
        options: [
          { text: 'Sí: cuánto grano había y quién debía qué', ok: true, reply: '¡Exacto! Sin monedas igual había costales de grano, ganado y deudas que recordar.' },
          { text: 'No, sin dinero no había nada que contar', reply: 'Sí había: costales de grano, ganado y deudas. Por eso ya **llevaban la cuenta**.' },
          { text: 'Solo los reyes, para sus joyas', reply: 'No solo ellos. Cualquiera con grano, ganado o deudas necesitaba **llevar la cuenta**.' },
        ],
      },
      {
        text: '¿Cómo lo hacían?\n🏺 **Mesopotamia:** fichas y luego **tablillas de arcilla** con marcas.\n📜 **Egipto:** escribas anotaban lo que entraba y salía de los graneros.\n🎨 **Mesoamérica:** tributos registrados en documentos pintados.',
      },
      {
        match: {
          title: 'Une cada pueblo con su forma de anotar',
          pairs: [
            ['Mesopotamia', 'Tablillas de arcilla con marcas'],
            ['Egipto', 'Escribas que anotaban lo de los graneros'],
            ['Mesoamérica', 'Tributos en documentos pintados'],
          ],
        },
      },
      {
        multi: {
          title: '¿Para qué anotaban? (igual que Tere en su libreta)',
          items: [
            { text: 'Para no olvidar', ok: true },
            { text: 'Para controlar lo que tenían', ok: true },
            { text: 'Para rendir cuentas a alguien más', ok: true },
            { text: 'Para cobrar el doble', ok: false },
          ],
          why: 'Se anota para **no olvidar**, para **controlar** y para **rendir cuentas**. Eso no ha cambiado en miles de años.',
        },
      },
      { tip: 'Llevar la cuenta es la semilla de la contabilidad: **anotar lo que entra, lo que sale y quién debe a quién.**' },
    ],
    // La regla de los dos lados
    [
      { text: 'En Venecia y Florencia 🇮🇹, hace más de 500 años, los comerciantes vendían mucho, **a crédito y con socios**. Necesitaban un método ordenado.' },
      {
        ask: '¿Quién crees que inventó ese método, la **partida doble**?',
        options: [
          { text: 'Los mismos comerciantes, al usarlo', ok: true, reply: '¡Bien! Ellos lo desarrollaron. Después, **Luca Pacioli** lo explicó en un libro impreso.' },
          { text: 'Luca Pacioli, él solito', reply: 'Es el error más común. Los comerciantes ya lo usaban; **Pacioli** fue el primero en **describirlo en un libro impreso**.' },
          { text: 'Un banco del gobierno', reply: 'No. Lo desarrollaron los **comerciantes** italianos, y Pacioli lo difundió en un libro.' },
        ],
      },
      { text: '**Luca Pacioli**, fraile y matemático, publicó el método en **1494**. Como ayudó a difundirlo, le dicen "padre de la contabilidad".' },
      {
        text: 'La idea: **toda operación tiene dos lados** y los dos valen lo mismo.\n🛒 Compras mercancía de $5,000 en efectivo.\n➕ La mercancía **sube** $5,000.\n➖ El efectivo **baja** $5,000.',
      },
      {
        calc: {
          question: 'Tere compra una impresora de **$8,000**. Paga **$3,000** en efectivo y queda a deber el resto. ¿Cuánto queda debiendo?',
          answer: 5000,
          hint: 'Lo que recibes = lo que entregas + lo que quedas debiendo. Deuda = 8,000 − 3,000.',
          why: 'Deuda = 8,000 − 3,000 = **$5,000**. Comprueba: 3,000 pagados + 5,000 de deuda = 8,000 de impresora. ¡Cuadra!',
        },
      },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Pacioli inventó la partida doble.', bucket: 0, why: 'Ya la usaban los comerciantes. Pacioli la **explicó en un libro impreso**.' },
            { text: 'A Pacioli le dicen "padre de la contabilidad".', bucket: 1, why: 'Por difundir el método en su libro.' },
            { text: 'Pacioli era banquero.', bucket: 0, why: 'Era **fraile y matemático**.' },
            { text: '"Doble" significa escribir dos veces lo mismo.', bucket: 0, why: 'Significa ver los **dos efectos** de una misma operación.' },
            { text: 'Toda operación tiene dos lados del mismo valor.', bucket: 1, why: 'Lo que recibes = lo que entregas + lo que quedas debiendo.' },
          ],
        },
      },
      { tip: 'Si anotas solo lo que pagaste y olvidas lo que quedaste debiendo, **no cuadra**.' },
    ],
    // ¿Cómo llegamos a hoy?
    [
      { text: 'Después de Pacioli llegaron las fábricas 🏭, las crisis y las computadoras 💻. Cada época agregó algo.' },
      {
        text: '🏭 **Revolución Industrial:** contabilidad de **costos** (cuánto cuesta fabricar) y **auditoría** (alguien independiente revisa).\n📏 **Siglo XX:** **normas contables**. En México, las **NIF** las emite el **CINIF**; en el mundo, las IFRS.\n☁️ **Hoy:** sistemas en la nube y facturas electrónicas.',
      },
      {
        ask: '¿Por qué surgieron las normas contables?',
        options: [
          { text: 'Para que todos presenten sus números igual', ok: true, reply: '¡Eso! Si cada empresa usa sus propias reglas, no se pueden comparar.' },
          { text: 'Para cobrar más impuestos', reply: 'Eso es tema de las leyes fiscales. Las normas sirven para que los números **se puedan comparar**.' },
          { text: 'Para dejar de usar la partida doble', reply: 'Al contrario: la partida doble se sigue usando. Las normas sirven para que los números **se puedan comparar**.' },
        ],
      },
      {
        ask: 'En México, ¿quién emite las **NIF**?',
        options: [
          { text: 'El CINIF', ok: true, reply: '¡Correcto! El Consejo Mexicano de Normas de Información Financiera.' },
          { text: 'El SAT', reply: 'El SAT cobra impuestos. Las NIF las emite el **CINIF**.' },
          { text: 'El Banco de México', reply: 'Banxico emite billetes y monedas. Las NIF las emite el **CINIF**.' },
        ],
      },
      {
        order: {
          title: 'Ordena la historia',
          steps: [
            'Fichas y tablillas para contar bienes y deudas',
            'Pacioli publica la partida doble (1494)',
            'Revolución Industrial: costos y auditoría',
            'Normas contables (NIF, IFRS)',
            'Sistemas en la nube y facturas electrónicas',
          ],
          done: '¡Muy bien! Cada época agregó algo.',
        },
      },
      { tip: 'Cambiaron las herramientas, pero la base sigue siendo la **partida doble** de hace más de 500 años.' },
    ],
  ],
}
