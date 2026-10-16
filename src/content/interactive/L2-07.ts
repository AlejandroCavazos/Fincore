import type { InteractiveLesson } from './types'

export const intL207: InteractiveLesson = {
  lessonId: 'L2-07',
  sections: [
    // Por qué la ética importa en la contabilidad
    [
      { text: 'Tu amigo te pide **$20,000** para su taquería 🌮 y te enseña una libreta que dice que gana mucho. ¿Le prestas? Depende de algo muy simple: **¿esa libreta dice la verdad?**' },
      {
        ask: 'Con las empresas pasa igual. ¿Por qué la gente confía en los **estados financieros** (los reportes con los números del negocio)?',
        options: [
          { text: 'Porque los hace una computadora y no se equivoca', reply: 'Las computadoras solo suman lo que alguien anota. Si lo anotado es falso, el reporte también.' },
          { text: 'Porque confía en que el contador dijo la verdad con los números', ok: true, reply: '¡Exacto! Esa **confianza pública** es la razón de ser del contador.' },
          { text: 'Porque siempre los revisa el gobierno antes', reply: 'No siempre. La confianza descansa sobre todo en que el contador actúe con ética.' },
        ],
      },
      { text: 'Cuando los números son falsos, el daño no se queda en la empresa. Piensa en todos los que deciden con esos reportes.' },
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
      { tip: 'La reputación de un contador tarda **años** en construirse y **un día** en perderse.' },
    ],
    // Los principios fundamentales
    [
      { text: 'El **IESBA** (el consejo que emite el código internacional de ética) define **cinco principios**. El **Código de Ética del IMCP** en México se alinea en lo general con él.' },
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
      { text: 'Ahora ponlo en práctica en un despacho contable 🏢.' },
      {
        ask: 'En una fiesta, un amigo te pregunta: «¿Cuánto gana la cafetería que llevas?». ¿Qué principio está en juego?',
        options: [
          { text: 'Confidencialidad', ok: true, reply: '¡Bien! La información del cliente no se cuenta, salvo que tengas permiso o la ley te obligue.' },
          { text: 'Competencia', reply: 'Competencia es saber hacer bien el trabajo. Aquí el tema es **guardar** la información.' },
          { text: 'Ninguno, es solo plática', reply: 'Aunque sea plática, contar los números del cliente rompe la **confidencialidad**.' },
        ],
      },
      {
        ask: 'Un colega pone en redes: «Yo le bajo los impuestos a cualquiera 😎». ¿Qué principio rompe?',
        options: [
          { text: 'Objetividad', reply: 'No se trata de un juicio sesgado, sino de algo que **desprestigia** a la profesión.' },
          { text: 'Comportamiento profesional', ok: true, reply: '¡Eso! Presumir algo así daña la imagen de toda la profesión.' },
          { text: 'Confidencialidad', reply: 'No reveló datos de nadie. Lo que falla es el **comportamiento profesional**.' },
        ],
      },
      { tip: 'Truco para recordar: **honesto, sin sesgos, preparado, discreto y respetuoso de la ley**.' },
    ],
    // Amenazas y salvaguardas
    [
      { text: 'Una **amenaza** es una situación que te puede empujar a romper un principio. Una **salvaguarda** es lo que haces para bajar ese riesgo: que alguien más revise, rotar al responsable, documentar o, en el extremo, rechazar el trabajo.' },
      {
        rush: {
          title: '¿Amenaza o salvaguarda?',
          seconds: 40,
          labels: ['Amenaza', 'Salvaguarda'],
          items: [
            { text: 'Tu bono depende de las ventas que tú mismo registras', ans: 0 },
            { text: 'Otro contador del despacho revisa tu trabajo', ans: 1 },
            { text: 'El cliente es tu compadre desde hace 10 años', ans: 0 },
            { text: 'La cuenta del cliente pasa a otra persona', ans: 1 },
            { text: '«Si no lo haces, te despido»', ans: 0 },
            { text: 'Dejas por escrito qué pasó y por qué', ans: 1 },
            { text: 'Revisas el sistema que tú mismo diseñaste', ans: 0 },
            { text: 'Rechazas el trabajo', ans: 1 },
          ],
        },
      },
      { text: 'El código describe **cinco tipos** de amenaza. Clasifica cada caso.' },
      {
        sort: {
          title: '¿Qué tipo de amenaza es?',
          buckets: ['Interés propio', 'Autorrevisión', 'Abogacía', 'Familiaridad', 'Intimidación'],
          items: [
            { text: 'Te pagan un premio si la utilidad del taller sale alta', bucket: 0, why: 'Ganas algo si el resultado sale de cierta forma.' },
            { text: 'Auditas el sistema de cobro que tú mismo instalaste', bucket: 1, why: 'Revisas tu propio trabajo: es difícil ver tus errores.' },
            { text: 'Defiendes al cliente ante el banco para que le presten', bucket: 2, why: 'Promover al cliente puede hacerte perder objetividad.' },
            { text: 'Ana revisa la panadería de su compadre desde hace 10 años', bucket: 3, why: 'La cercanía te vuelve demasiado confiado.' },
            { text: 'El dueño dice: «O lo haces o me llevo mi cuenta a otro despacho»', bucket: 4, why: 'Te presionan con perder el cliente.' },
          ],
        },
      },
      {
        ask: 'Ana lleva 10 años con la panadería de su compadre (familiaridad). ¿Cuál es una buena **salvaguarda**?',
        options: [
          { text: 'Que otro contador del despacho revise su trabajo', ok: true, reply: '¡Bien! Una segunda mirada reduce la amenaza. También podría pasar la cuenta a otra persona.' },
          { text: 'Que Ana prometa tener más cuidado', reply: 'La buena intención ayuda, pero no es una acción que reduzca la amenaza.' },
          { text: 'No hacer nada: confía en su compadre', reply: 'Esa confianza de más es justo la amenaza de **familiaridad**.' },
        ],
      },
      { tip: 'Primero **nombra la amenaza**; luego busca la **salvaguarda** que la baje a un nivel aceptable.' },
    ],
    // Dilemas reales y cómo decidir
    [
      { text: 'Un **dilema ético** aparece cuando te presionan para hacer algo que choca con tus principios. Para no decidir con nervios, hay **cinco pasos**.' },
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
      { text: 'En el paso 1 conviene **poner el engaño en números**. Una papelería vendió **$250,000** y el dueño quiere reportar **$300,000** al banco.' },
      {
        calc: {
          question: '¿En qué **porcentaje** se inflarían las ventas? (escribe solo el número)',
          answer: 20,
          hint: 'diferencia ÷ cifra **real** × 100.',
          why: '$300,000 − $250,000 = $50,000. $50,000 ÷ $250,000 = 0.20 → **20%**. Ojo: se divide entre la cifra real, no entre la pedida.',
        },
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
