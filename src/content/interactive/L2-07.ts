import type { InteractiveLesson } from './types'

export const intL207: InteractiveLesson = {
  lessonId: 'L2-07',
  sections: [
    // ¿Por qué confiar en los números?
    [
      { text: 'Tu amigo te pide **$20,000** para su taquería 🌮 y te enseña una libreta que dice que gana mucho. ¿Le prestas? Depende de algo muy simple: **¿esa libreta dice la verdad?**' },
      {
        ask: 'Con las empresas pasa igual. ¿Por qué la gente confía en los **estados financieros** (los reportes con los números del negocio)?',
        options: [
          { text: 'Porque los hace una computadora y no se equivoca', reply: 'Las computadoras solo suman lo que alguien anota. Si lo anotado es falso, el reporte también. Se confía en que **el contador dijo la verdad**.' },
          { text: 'Porque confía en que el contador dijo la verdad con los números', ok: true, reply: '¡Exacto! Esa **confianza pública** es la razón de ser del contador.' },
          { text: 'Porque siempre los revisa el gobierno antes', reply: 'No siempre. La confianza descansa sobre todo en que **el contador actúe con ética**.' },
        ],
      },
      { text: 'Bancos, proveedores, inversionistas, trabajadores y el gobierno **deciden** con esos números. La **ética profesional** es parte del trabajo, igual que saber hacer una póliza.' },
      {
        multi: {
          title: 'Si una empresa infla sus números, ¿a quién puede dañar? Marca todos.',
          items: [
            { text: 'Inversionistas que pierden sus ahorros', ok: true },
            { text: 'Un banco que le presta a quien no puede pagar', ok: true },
            { text: 'Trabajadores que se quedan sin empleo si la empresa quiebra', ok: true },
            { text: 'Al propio contador: puede perder su prestigio y su certificación', ok: true },
            { text: 'A nadie, si nadie se da cuenta', ok: false },
          ],
          why: 'Un engaño contable daña a **muchas personas**. Casos como el de Enron terminaron en quiebras, juicios y reglas más estrictas para toda la profesión.',
        },
      },
      {
        ask: '¿Por qué la ética pesa tanto en la contabilidad?',
        options: [
          { text: 'Porque muchas personas deciden confiando en los estados financieros', ok: true, reply: '¡Eso! Los números solo ayudan a decidir **si son confiables**.' },
          { text: 'Porque así el contador cobra más caro', reply: 'No se trata de cobrar. Importa porque **muchas personas deciden** con esos números.' },
          { text: 'Solo importa en empresas grandes', reply: 'Importa en cualquier negocio, incluso la taquería: alguien **decide** con esos números.' },
        ],
      },
      { tip: 'La reputación de un contador tarda **años** en construirse y **un día** en perderse.' },
    ],
    // Las cinco reglas del contador
    [
      { text: 'Ahora trabajas en un despacho contable 🏢. El código internacional de ética (del **IESBA**) y el **Código de Ética del IMCP** en México piden **cinco principios**.' },
      {
        match: {
          title: 'Une cada principio con su idea clave',
          pairs: [
            ['Integridad', 'Ser honesto: no firmar información que sabes que es falsa'],
            ['Objetividad', 'Que presiones o simpatías no tuerzan tu juicio'],
            ['Competencia y diligencia', 'Saber hacer el trabajo y hacerlo con cuidado y a tiempo'],
            ['Confidencialidad', 'Guardar la información de tus clientes'],
            ['Comportamiento profesional', 'Cumplir la ley y cuidar la imagen de la profesión'],
          ],
        },
      },
      {
        sort: {
          title: '¿Qué principio está en riesgo?',
          buckets: ['Integridad', 'Objetividad', 'Competencia'],
          items: [
            { text: 'Firmar un reporte con ventas que sabes que están infladas', bucket: 0, why: 'Firmar algo falso rompe la **integridad**.' },
            { text: 'Aceptar un viaje pagado por el cliente justo antes de revisar sus cuentas', bucket: 1, why: 'El regalo puede torcer tu juicio: **objetividad**.' },
            { text: 'Llevar una constructora sin conocer las reglas del sector ni capacitarte', bucket: 2, why: 'Hay que saber hacer el trabajo: **competencia y diligencia**.' },
            { text: 'Presentar gastos que no existieron', bucket: 0, why: 'Información falsa: **integridad**.' },
            { text: 'Entregar la declaración tarde y sin revisarla', bucket: 2, why: 'Hacerlo con cuidado y a tiempo: **diligencia**.' },
          ],
        },
      },
      {
        ask: 'En una fiesta, un amigo te pregunta: «¿Cuánto gana la cafetería que llevas?». ¿Qué principio está en juego?',
        options: [
          { text: 'Confidencialidad', ok: true, reply: '¡Bien! La información del cliente no se cuenta, salvo que tengas permiso o la ley te obligue.' },
          { text: 'Competencia', reply: 'Competencia es saber hacer bien el trabajo. Aquí el tema es **guardar** la información: confidencialidad.' },
          { text: 'Ninguno, es solo plática', reply: 'Aunque sea plática, contar los números del cliente rompe la **confidencialidad**.' },
        ],
      },
      {
        ask: 'Un colega pone en redes: «Yo le bajo los impuestos a cualquiera 😎». ¿Qué principio rompe?',
        options: [
          { text: 'Objetividad', reply: 'No es un juicio sesgado, sino algo que **desprestigia** a la profesión: comportamiento profesional.' },
          { text: 'Comportamiento profesional', ok: true, reply: '¡Eso! Presumir algo así daña la imagen de toda la profesión.' },
          { text: 'Confidencialidad', reply: 'No reveló datos de nadie. Lo que falla es el **comportamiento profesional**.' },
        ],
      },
      { tip: 'Para recordarlos: **honesto, sin sesgos, preparado, discreto y respetuoso de la ley**.' },
    ],
    // ¿Qué te puede desviar?
    [
      { text: 'Ana revisa las cuentas de la panadería de su compadre desde hace **10 años** 🥖. Ya casi no pide comprobantes: "él nunca se equivoca".' },
      {
        ask: '¿Qué riesgo ves?',
        options: [
          { text: 'Que confíe de más y no vea los errores', ok: true, reply: '¡Exacto! La cercanía la vuelve demasiado confiada. Eso es una **amenaza**.' },
          { text: 'Ninguno: conocerlo bien es una ventaja', reply: 'Conocerlo ayuda, pero por eso mismo puede **confiar de más** y no ver errores.' },
          { text: 'Que le cobre muy caro', reply: 'El cobro no es el problema. El riesgo es que **confíe de más** y no revise.' },
        ],
      },
      { text: 'Una **amenaza** te puede empujar a romper un principio. Hay cinco:\n💰 **Interés propio:** ganas algo según el resultado.\n🪞 **Autorrevisión:** revisas tu propio trabajo.\n📢 **Abogacía:** defiendes tanto al cliente que pierdes objetividad.\n🤝 **Familiaridad:** la cercanía te confía de más.\n😠 **Intimidación:** te presionan con perder algo.' },
      {
        match: {
          title: 'Une cada amenaza con su caso',
          pairs: [
            ['Interés propio', 'Tu bono depende de la utilidad que tú calculas'],
            ['Autorrevisión', 'Auditas el sistema que tú mismo diseñaste'],
            ['Abogacía', 'Promueves al cliente ante el banco para que le presten'],
            ['Familiaridad', 'El dueño que revisas es tu cuñado'],
            ['Intimidación', '«Si no aceptas mi cifra, me voy a otro despacho»'],
          ],
        },
      },
      { text: 'Una **salvaguarda** baja la amenaza: que otra persona revise, rotar al responsable, documentar o, en el extremo, rechazar el trabajo.' },
      {
        rush: {
          title: '¿Amenaza o salvaguarda?',
          seconds: 40,
          labels: ['Amenaza', 'Salvaguarda'],
          items: [
            { text: 'Tienes acciones de la empresa que revisas', ans: 0 },
            { text: 'Otro contador del despacho revisa tu trabajo', ans: 1 },
            { text: 'El cliente es tu compadre desde hace 10 años', ans: 0 },
            { text: 'La cuenta del cliente pasa a otra persona', ans: 1 },
            { text: '«Si no lo haces, te despido»', ans: 0 },
            { text: 'Dejas por escrito qué pasó y por qué', ans: 1 },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué salvaguardas ayudan a Ana? Marca todas.',
          items: [
            { text: 'Que otro contador del despacho revise su trabajo', ok: true },
            { text: 'Pasar la cuenta a otra persona', ok: true },
            { text: 'Volver a pedir los comprobantes, como con cualquier cliente', ok: true },
            { text: 'Seguir igual: la confianza ahorra tiempo', ok: false },
            { text: 'Aceptar un regalo para cuidar la amistad', ok: false },
          ],
          why: 'Revisión de otro, rotación y volver a revisar soportes bajan la **familiaridad**. Seguir igual o aceptar regalos la empeoran.',
        },
      },
    ],
    // Cuando te presionan
    [
      { text: 'Un **dilema ético** aparece cuando te presionan para hacer algo que choca con tus principios. Para no decidir con nervios, sigue **cinco pasos**:\n1️⃣ Identifica los **hechos** (qué te piden y con qué cifras).\n2️⃣ Ubica **principios y amenazas**.\n3️⃣ Enumera **opciones** y consecuencias.\n4️⃣ **Consulta** a quien corresponda.\n5️⃣ **Decide y documenta**.' },
      {
        order: {
          title: 'Ordena los pasos para resolver un dilema',
          steps: [
            'Identificar los hechos: qué te piden y con qué cifras',
            'Ubicar los principios y las amenazas en juego',
            'Enumerar tus opciones y sus consecuencias',
            'Consultar a un colega, tu supervisor o tu colegio de contadores',
            'Decidir y documentar por escrito',
          ],
          done: 'Hechos → principios → opciones → consulta → decisión documentada.',
        },
      },
      {
        calc: {
          question: 'Paso 1: pon el engaño en números. Una papelería vendió **$250,000** y el dueño quiere reportar **$300,000** al banco. ¿En qué **porcentaje** se inflarían las ventas?',
          answer: 20, unit: '%',
          hint: 'Diferencia ÷ cifra **real** × 100.',
          why: '$300,000 − $250,000 = $50,000. $50,000 ÷ $250,000 = 0.20 → **20%**. Se divide entre la cifra real, no entre la pedida.',
        },
      },
      {
        ask: 'El dueño agrega: «Si no lo haces, me voy con otro contador». ¿Qué está pasando y qué haces?',
        options: [
          { text: 'Es intimidación: reporto los $250,000 reales aunque pierda el cliente', ok: true, reply: '¡Correcto! La presión es **intimidación**, y la **integridad** pide reportar la cifra real.' },
          { text: 'Lo inflo solo un poco, a $270,000', reply: 'Inflar poco sigue siendo inflar: rompe la **integridad** igual. Se reporta la cifra real.' },
          { text: 'No hay problema: el cliente responde por lo que pide al banco', reply: 'Si tú lo firmas, también es tu responsabilidad. Es **intimidación** y se reporta la cifra real.' },
        ],
      },
      {
        sim: {
          title: 'El taller y el gasto escondido 🔧',
          inputs: [
            { key: 'i', label: 'Ingresos', min: 150000, max: 250000, step: 10000, value: 200000 },
            { key: 'g', label: 'Gastos registrados', min: 100000, max: 200000, step: 10000, value: 150000 },
            { key: 'o', label: 'Refacciones que te piden NO anotar', min: 0, max: 30000, step: 2000, value: 12000 },
          ],
          outputs: [
            { label: 'Utilidad que se vería', calc: (x) => x.i - x.g },
            { label: 'Utilidad real', calc: (x) => x.i - x.g - x.o, main: true },
          ],
          goal: {
            text: 'Haz que la utilidad que se vería **sea igual** a la real (que no haya engaño).',
            check: (x) => x.o === 0,
            done: 'Solo cuando anotas todos los gastos, lo que se ve es lo real. Esconder un gasto infla la utilidad **exactamente** en ese monto.',
          },
        },
      },
      {
        ask: 'Tu jefe te pide no registrar la factura de luz de **$8,000** de marzo «para que el mes cierre bonito». ¿Qué haces?',
        options: [
          { text: 'La registro en abril; al final se compensa', reply: 'No se compensa: el gasto pertenece al mes en que **ocurrió**. La utilidad de marzo saldría $8,000 más alta.' },
          { text: 'Le explico que va en marzo; si insiste, lo escalo y lo documento', ok: true, reply: '¡Correcto! Es lo que pide la **integridad**. Si la presión no para, el código contempla incluso dejar de participar.' },
          { text: 'Le hago caso: él es el jefe', reply: 'Esa presión es una amenaza de **intimidación**. Obedecer te haría firmar algo falso.' },
        ],
      },
      { tip: 'Inflar **5% o 50%** rompe igual la integridad. El número te ayuda a explicar el tamaño del engaño, no a justificarlo.' },
    ],
  ],
}
