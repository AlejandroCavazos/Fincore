import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Nivel 1, parte B: temas 1.6 a 1.10
 * (ecuación contable, NIF, cuentas y su naturaleza, cargos y abonos, partida doble).
 */

const NOTE_NIF = {
  es: "Contenido educativo basado en las Normas de Información Financiera (NIF) emitidas por el CINIF (Consejo Mexicano de Normas de Información Financiera). Las NIF se actualizan con frecuencia: verifica siempre la versión vigente (2026) antes de aplicarlas en un caso real.",
  en: "Educational content based on the Mexican Financial Reporting Standards (NIF) issued by CINIF (Mexican Financial Reporting Standards Board). The NIF are updated frequently: always check the current version (2026) before applying them to a real case.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── L1-06 ─────────────────────────────
  {
    id: 'L1-06',
    level: 1,
    topicIds: ['1.6'],
    title: { es: "Ecuación contable", en: "The accounting equation" },
    summary: {
      es: "Todo lo que tiene un negocio se financió con dinero de alguien más (pasivo) o de sus dueños (capital), y por eso Activo = Pasivo + Capital siempre se cumple.",
      en: "Everything a business owns was financed with someone else's money (liabilities) or its owners' money (equity), which is why Assets = Liabilities + Equity always holds.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar con tus palabras la ecuación Activo = Pasivo + Capital.", en: "Explain the equation Assets = Liabilities + Equity in your own words." },
      { es: "Despejar cualquier elemento de la ecuación cuando conoces los otros dos.", en: "Solve for any element of the equation when you know the other two." },
      { es: "Analizar cómo una operación mueve la ecuación sin romper el equilibrio.", en: "Analyze how a transaction moves the equation without breaking the balance." },
      { es: "Llevar el control de la ecuación a lo largo de varias operaciones seguidas.", en: "Track the equation through several transactions in a row." },
    ],
    theory: [
      {
        heading: { es: "Activo = Pasivo + Capital", en: "Assets = Liabilities + Equity" },
        body: [
          {
            es: "Ya conoces los tres elementos: el **activo** es lo que el negocio tiene (efectivo, mercancía, equipo); el **pasivo** es lo que debe a otros (proveedores, bancos); y el **capital contable** es la parte que pertenece a los dueños.",
            en: "You already know the three elements: **assets** are what the business has (cash, goods, equipment); **liabilities** are what it owes to others (suppliers, banks); and **equity** is the part that belongs to the owners.",
          },
          {
            es: "La **ecuación contable** une a los tres: todo lo que el negocio tiene salió de algún lado. O lo pusieron los dueños, o lo prestó alguien. Por eso **lo que tienes es igual a lo que debes más lo que es tuyo**.",
            en: "The **accounting equation** ties the three together: everything the business has came from somewhere. Either the owners put it in, or someone lent it. That is why **what you have equals what you owe plus what is yours**.",
          },
          {
            es: "Piensa en tu coche: vale $200,000, pero aún debes $50,000 del crédito. El coche es tu activo, el crédito es tu pasivo y lo que realmente es tuyo (tu capital) son $150,000. Si conoces dos datos, el tercero sale despejando.",
            en: "Think of your car: it is worth $200,000, but you still owe $50,000 on the loan. The car is your asset, the loan is your liability, and what is really yours (your equity) is $150,000. If you know two figures, you can solve for the third.",
          },
        ],
        formulas: [
          {
            name: { es: "Ecuación contable (y cómo despejar el dato que falta)", en: "Accounting equation (and how to solve for the missing figure)" },
            expression: "Activo = Pasivo + Capital   ·   Capital = Activo − Pasivo   ·   Pasivo = Activo − Capital",
            variables: [
              { symbol: "Activo", meaning: { es: "Todo lo que el negocio tiene, en pesos: efectivo, mercancía, equipo, lo que le deben.", en: "Everything the business has, in pesos: cash, goods, equipment, amounts owed to it." } },
              { symbol: "Pasivo", meaning: { es: "Todo lo que el negocio debe a otros, en pesos: proveedores, bancos, préstamos.", en: "Everything the business owes to others, in pesos: suppliers, banks, loans." } },
              { symbol: "Capital", meaning: { es: "La parte que de verdad es de los dueños, en pesos: lo que queda del activo después de pagar todas las deudas.", en: "The part that truly belongs to the owners, in pesos: what is left of the assets after paying all debts." } },
            ],
            steps: [
              { es: "Identifica qué dato te falta: activo, pasivo o capital.", en: "Identify which figure is missing: assets, liabilities or equity." },
              { es: "Si te dan varios bienes o varias deudas, súmalos primero para tener el total de cada elemento.", en: "If you are given several items or several debts, add them up first to get the total of each element." },
              { es: "Usa la versión de la fórmula que deja solo el dato que buscas: para el capital, resta el pasivo al activo; para el activo, suma pasivo y capital.", en: "Use the version of the formula that isolates the figure you need: for equity, subtract liabilities from assets; for assets, add liabilities and equity." },
              { es: "Comprueba: Pasivo + Capital debe darte exactamente el Activo.", en: "Check: Liabilities + Equity must give you exactly the Assets." },
            ],
            example: {
              es: "Una estética tiene sillones y secadoras por $140,000 y $40,000 en el banco; debe $65,000 a una financiera. Activo = 140,000 + 40,000 = $180,000. Pasivo = $65,000. Capital = 180,000 − 65,000 = **$115,000**. Comprobación: 65,000 + 115,000 = 180,000.",
              en: "A beauty salon has chairs and dryers worth $140,000 and $40,000 in the bank; it owes $65,000 to a lender. Assets = 140,000 + 40,000 = $180,000. Liabilities = $65,000. Equity = 180,000 − 65,000 = **$115,000**. Check: 65,000 + 115,000 = 180,000.",
            },
            interpret: {
              es: "Un capital grande frente al pasivo significa que el negocio es mayormente de sus dueños. Si el capital sale negativo, el negocio debe más de lo que tiene: es una señal de alerta.",
              en: "Large equity compared with liabilities means the business mostly belongs to its owners. If equity comes out negative, the business owes more than it has: that is a warning sign.",
            },
            mistake: {
              es: "Sumar activo y pasivo para obtener el capital. El pasivo es lo que se debe, así que se **resta** del activo.",
              en: "Adding assets and liabilities to get equity. Liabilities are what is owed, so they are **subtracted** from assets.",
            },
          },
        ],
        bullets: [
          { es: "Activo: lo que el negocio tiene o controla y le traerá beneficios.", en: "Assets: what the business has or controls that will bring it benefits." },
          { es: "Pasivo: lo que el negocio debe a terceros.", en: "Liabilities: what the business owes to third parties." },
          { es: "Capital: la parte de los dueños (lo que aportaron más lo que se ha ganado).", en: "Equity: the owners' share (what they contributed plus what has been earned)." },
        ],
      },
      {
        heading: { es: "El equilibrio contable", en: "The accounting balance" },
        body: [
          {
            es: "La ecuación es como una **balanza de dos platos**: de un lado el activo, del otro el pasivo más el capital. Cada operación mueve la balanza, pero siempre queda **nivelada**, porque cada operación tiene dos efectos que se compensan.",
            en: "The equation is like a **two-pan scale**: assets on one side, liabilities plus equity on the other. Every transaction moves the scale, but it always stays **level**, because every transaction has two effects that offset each other.",
          },
          {
            es: "Hay cuatro movimientos típicos. Pueden **subir los dos lados** (pides un préstamo: entra dinero y nace una deuda) o **bajar los dos lados** (pagas una deuda: sale dinero y baja la deuda). También puede haber un **intercambio dentro del activo** (compras una vitrina en efectivo: baja el efectivo y sube el equipo) o **dentro del lado derecho** (una deuda se convierte en capital).",
            en: "There are four typical moves. **Both sides can go up** (you take a loan: cash comes in and a debt is born) or **both sides can go down** (you pay a debt: cash goes out and the debt shrinks). There can also be a **swap within assets** (you buy a display case with cash: cash goes down and equipment goes up) or **within the right side** (a debt becomes equity).",
          },
          {
            es: "Mini ejemplo: una tiendita tiene Activo $80,000 = Pasivo $20,000 + Capital $60,000. Compra mercancía a crédito por $5,000. El activo sube a $85,000 y el pasivo a $25,000: $85,000 = $25,000 + $60,000. ¡Sigue en equilibrio!",
            en: "Mini example: a corner store has Assets $80,000 = Liabilities $20,000 + Equity $60,000. It buys goods on credit for $5,000. Assets rise to $85,000 and liabilities to $25,000: $85,000 = $25,000 + $60,000. Still balanced!",
          },
        ],
        formulas: [
          {
            name: { es: "Nuevos totales de la ecuación después de una operación", en: "New equation totals after a transaction" },
            expression: "Nuevo total = Total anterior + Aumento − Disminución   (para Activo, Pasivo y Capital por separado)",
            variables: [
              { symbol: "Nuevo total", meaning: { es: "Cuánto vale el activo, el pasivo o el capital después de la operación, en pesos.", en: "What assets, liabilities or equity are worth after the transaction, in pesos." } },
              { symbol: "Total anterior", meaning: { es: "Cuánto valía ese mismo elemento justo antes de la operación, en pesos.", en: "What that same element was worth just before the transaction, in pesos." } },
              { symbol: "Aumento", meaning: { es: "Los pesos que la operación le suma (por ejemplo, entra dinero de un préstamo o de una aportación).", en: "The pesos the transaction adds to it (for example, money comes in from a loan or a contribution)." } },
              { symbol: "Disminución", meaning: { es: "Los pesos que la operación le quita (por ejemplo, sale dinero para pagar una deuda).", en: "The pesos the transaction takes away from it (for example, money goes out to pay a debt)." } },
            ],
            steps: [
              { es: "Escribe la ecuación inicial con sus tres totales.", en: "Write the starting equation with its three totals." },
              { es: "Para la primera operación, decide qué dos elementos cambian y si suben o bajan.", en: "For the first transaction, decide which two elements change and whether they go up or down." },
              { es: "Suma o resta el importe a esos elementos; el que no cambia se queda igual.", en: "Add or subtract the amount to those elements; the one that does not change stays the same." },
              { es: "Comprueba que Activo = Pasivo + Capital y usa esos nuevos totales como punto de partida de la siguiente operación.", en: "Check that Assets = Liabilities + Equity and use those new totals as the starting point for the next transaction." },
            ],
            example: {
              es: "Una lavandería inicia con Activo $90,000 = Pasivo $25,000 + Capital $65,000. (1) Le prestan $15,000: activo 90,000 + 15,000 = 105,000 y pasivo 25,000 + 15,000 = 40,000. (2) Paga $8,000 a un proveedor: activo 105,000 − 8,000 = 97,000 y pasivo 40,000 − 8,000 = 32,000. Resultado: **Activo $97,000 = Pasivo $32,000 + Capital $65,000** (32,000 + 65,000 = 97,000).",
              en: "A laundry starts with Assets $90,000 = Liabilities $25,000 + Equity $65,000. (1) It receives a $15,000 loan: assets 90,000 + 15,000 = 105,000 and liabilities 25,000 + 15,000 = 40,000. (2) It pays a supplier $8,000: assets 105,000 − 8,000 = 97,000 and liabilities 40,000 − 8,000 = 32,000. Result: **Assets $97,000 = Liabilities $32,000 + Equity $65,000** (32,000 + 65,000 = 97,000).",
            },
            mistake: {
              es: "Restar al capital el pago de una deuda. Pagar lo que debes baja el activo y el pasivo; lo que es del dueño no cambia. El capital solo se mueve con aportaciones, retiros, ganancias o pérdidas.",
              en: "Subtracting a debt payment from equity. Paying what you owe lowers assets and liabilities; what belongs to the owner does not change. Equity only moves with contributions, withdrawals, profits or losses.",
            },
          },
        ],
        bullets: [
          { es: "Sube activo y sube pasivo o capital (préstamo, aportación, compra a crédito).", en: "Assets up and liabilities or equity up (loan, contribution, credit purchase)." },
          { es: "Baja activo y baja pasivo o capital (pago de una deuda, retiro del dueño).", en: "Assets down and liabilities or equity down (paying a debt, owner withdrawal)." },
          { es: "Un activo sube y otro baja por lo mismo (compra de contado).", en: "One asset up and another down by the same amount (cash purchase)." },
          { es: "Ninguna operación válida deja la ecuación desbalanceada.", en: "No valid transaction leaves the equation unbalanced." },
        ],
      },
      {
        heading: { es: "Ejercicio interactivo: mueve la ecuación paso a paso", en: "Interactive exercise: move the equation step by step" },
        body: [
          {
            es: "Vamos a seguir a Ana, que abre una **cafetería**. Para cada operación hazte tres preguntas: ¿qué elementos cambian?, ¿suben o bajan?, ¿la ecuación sigue igual de los dos lados? Anota los totales después de cada paso.",
            en: "Let's follow Ana, who opens a **coffee shop**. For each transaction ask yourself three questions: which elements change? do they go up or down? are both sides of the equation still equal? Write down the totals after each step.",
          },
          {
            es: "**Paso 1.** Ana aporta $100,000 de sus ahorros. Sube el activo (efectivo) y sube el capital: 100,000 = 0 + 100,000. **Paso 2.** Compra una cafetera de $30,000 en efectivo. Es un intercambio dentro del activo: el total sigue en 100,000 = 0 + 100,000.",
            en: "**Step 1.** Ana contributes $100,000 of her savings. Assets (cash) go up and equity goes up: 100,000 = 0 + 100,000. **Step 2.** She buys a $30,000 espresso machine with cash. It is a swap within assets: the total stays at 100,000 = 0 + 100,000.",
          },
          {
            es: "**Paso 3.** Compra café y leche a crédito por $8,000. Sube el activo (inventario) y sube el pasivo (proveedores): 108,000 = 8,000 + 100,000. **Paso 4.** Paga $3,000 al proveedor. Bajan los dos lados: 105,000 = 5,000 + 100,000. En cada paso, los dos platos de la balanza quedaron iguales.",
            en: "**Step 3.** She buys coffee and milk on credit for $8,000. Assets (inventory) go up and liabilities (suppliers) go up: 108,000 = 8,000 + 100,000. **Step 4.** She pays the supplier $3,000. Both sides go down: 105,000 = 5,000 + 100,000. At every step, both pans of the scale stayed equal.",
          },
        ],
        bullets: [
          { es: "Pregunta 1: ¿qué elementos cambian (activo, pasivo, capital)?", en: "Question 1: which elements change (assets, liabilities, equity)?" },
          { es: "Pregunta 2: ¿cada uno sube o baja, y por cuánto?", en: "Question 2: does each one go up or down, and by how much?" },
          { es: "Pregunta 3: ¿los totales de ambos lados siguen iguales?", en: "Question 3: are the totals on both sides still equal?" },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Despejar el capital de un taller", en: "Solving for a workshop's equity" },
        problem: {
          es: "Un taller mecánico tiene herramientas por $120,000, efectivo por $30,000 y debe $45,000 al banco. ¿Cuánto es su capital contable?",
          en: "A car repair shop has tools worth $120,000, cash of $30,000 and owes the bank $45,000. What is its equity?",
        },
        steps: [
          { es: "Suma el activo: 120,000 + 30,000 = $150,000.", en: "Add up the assets: 120,000 + 30,000 = $150,000." },
          { es: "Identifica el pasivo: la deuda con el banco, $45,000.", en: "Identify the liabilities: the bank debt, $45,000." },
          { es: "Despeja: Capital = Activo − Pasivo = 150,000 − 45,000 = $105,000.", en: "Solve: Equity = Assets − Liabilities = 150,000 − 45,000 = $105,000." },
          { es: "Comprueba: 45,000 + 105,000 = 150,000. ✔", en: "Check: 45,000 + 105,000 = 150,000. ✔" },
        ],
        result: { es: "El capital contable del taller es de $105,000.", en: "The workshop's equity is $105,000." },
      },
      {
        title: { es: "Tres operaciones seguidas en una papelería", en: "Three transactions in a row at a stationery store" },
        problem: {
          es: "Una papelería empieza con Activo $60,000 = Pasivo $10,000 + Capital $50,000. Luego: (1) pide un préstamo de $20,000 que le depositan; (2) compra mercancía de contado por $7,000; (3) paga $4,000 de su deuda con proveedores. ¿Cómo queda la ecuación?",
          en: "A stationery store starts with Assets $60,000 = Liabilities $10,000 + Equity $50,000. Then: (1) it takes a $20,000 loan that is deposited; (2) it buys goods for cash for $7,000; (3) it pays $4,000 of its supplier debt. What does the equation look like?",
        },
        steps: [
          { es: "(1) Sube activo y pasivo en 20,000: 80,000 = 30,000 + 50,000.", en: "(1) Assets and liabilities up by 20,000: 80,000 = 30,000 + 50,000." },
          { es: "(2) Intercambio dentro del activo (baja efectivo, sube mercancía): 80,000 = 30,000 + 50,000.", en: "(2) Swap within assets (cash down, goods up): 80,000 = 30,000 + 50,000." },
          { es: "(3) Bajan activo y pasivo en 4,000: 76,000 = 26,000 + 50,000.", en: "(3) Assets and liabilities down by 4,000: 76,000 = 26,000 + 50,000." },
        ],
        result: { es: "Activo $76,000 = Pasivo $26,000 + Capital $50,000. El capital no cambió porque ninguna operación fue aportación, ganancia ni pérdida.", en: "Assets $76,000 = Liabilities $26,000 + Equity $50,000. Equity did not change because no transaction was a contribution, a profit or a loss." },
      },
    ],
    keyPoints: [
      { es: "Activo = Pasivo + Capital: lo que tienes = lo que debes + lo que es tuyo.", en: "Assets = Liabilities + Equity: what you have = what you owe + what is yours." },
      { es: "Si conoces dos elementos, despejas el tercero.", en: "If you know two elements, you can solve for the third." },
      { es: "Cada operación tiene al menos dos efectos que mantienen el equilibrio.", en: "Every transaction has at least two effects that keep the balance." },
      { es: "Comprar de contado solo cambia la forma del activo, no su total.", en: "Buying with cash only changes the form of assets, not their total." },
      { es: "Pagar una deuda baja los dos lados de la ecuación por igual.", en: "Paying a debt lowers both sides of the equation equally." },
    ],
    exerciseIds: ['N1B-001', 'N1B-002', 'N1B-003', 'N1B-004', 'N1B-005', 'N1B-006', 'N1B-007'],
  },

  // ───────────────────────────── L1-07 ─────────────────────────────
  {
    id: 'L1-07',
    level: 1,
    topicIds: ['1.7'],
    title: { es: "Introducción a las NIF mexicanas", en: "Introduction to Mexican NIF" },
    summary: {
      es: "Las NIF son las reglas comunes que usan las empresas en México para que su información financiera sea confiable y comparable, y la devengación indica cuándo se registra cada operación.",
      en: "The NIF are the common rules companies in Mexico use so their financial information is reliable and comparable, and accrual tells you when each transaction is recorded.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué son las NIF, quién las emite y para qué sirven.", en: "Explain what the NIF are, who issues them and what they are for." },
      { es: "Distinguir las NIF de las leyes fiscales.", en: "Tell the NIF apart from tax laws." },
      { es: "Reconocer los postulados básicos de entidad económica, negocio en marcha y dualidad económica.", en: "Recognize the basic postulates of economic entity, going concern and economic duality." },
      { es: "Aplicar la devengación contable para decidir en qué periodo se registra un ingreso o un gasto.", en: "Apply accrual accounting to decide in which period revenue or an expense is recorded." },
    ],
    theory: [
      {
        heading: { es: "Qué son las NIF y para qué sirven", en: "What the NIF are and what they are for" },
        body: [
          {
            es: "Imagina un partido de futbol donde cada equipo usa sus propias reglas: sería imposible saber quién ganó. Con la contabilidad pasa igual. Las **NIF (Normas de Información Financiera)** son las **reglas del juego** que dicen cómo registrar y presentar la información financiera en México.",
            en: "Imagine a soccer match where each team uses its own rules: it would be impossible to know who won. Accounting works the same way. The **NIF (Mexican Financial Reporting Standards)** are the **rules of the game** that say how to record and present financial information in Mexico.",
          },
          {
            es: "Las emite el **CINIF** (Consejo Mexicano de Normas de Información Financiera), un organismo independiente. Gracias a ellas, un banco puede comparar los estados financieros de dos empresas distintas y confiar en que se hicieron con los mismos criterios. Las NIF buscan ser congruentes con las normas internacionales (IFRS).",
            en: "They are issued by **CINIF** (Mexican Financial Reporting Standards Board), an independent body. Thanks to them, a bank can compare the financial statements of two different companies and trust that they were prepared with the same criteria. The NIF aim to be consistent with international standards (IFRS).",
          },
          {
            es: "Ojo: las NIF **no son leyes fiscales**. Las reglas de impuestos vienen de leyes como la del ISR y las aplica el SAT. Por eso, a veces la utilidad contable y la utilidad para impuestos no coinciden.",
            en: "Careful: the NIF are **not tax laws**. Tax rules come from laws such as the Income Tax Law and are applied by the SAT (Mexico's tax authority). That is why accounting profit and taxable profit sometimes differ.",
          },
        ],
        bullets: [
          { es: "Hacen que la información sea comparable entre empresas y entre años.", en: "They make information comparable between companies and across years." },
          { es: "Dan confianza a usuarios externos: bancos, inversionistas, proveedores.", en: "They give confidence to external users: banks, investors, suppliers." },
          { es: "Se organizan en series; la serie A es el Marco Conceptual (las bases).", en: "They are organized in series; series A is the Conceptual Framework (the foundations)." },
        ],
      },
      {
        heading: { es: "Postulados básicos esenciales", en: "Essential basic postulates" },
        body: [
          {
            es: "Los **postulados básicos** son las ideas de fondo sobre las que se construye toda la contabilidad. El Marco Conceptual de las NIF reconoce ocho: sustancia económica, entidad económica, negocio en marcha, devengación contable, asociación de costos y gastos con ingresos, valuación, dualidad económica y consistencia. Para empezar, conoce bien estos:",
            en: "The **basic postulates** are the underlying ideas on which all accounting is built. The NIF Conceptual Framework recognizes eight: economic substance, economic entity, going concern, accrual, matching of costs and expenses with revenue, measurement, economic duality and consistency. To start, get to know these well:",
          },
          {
            es: "**Entidad económica**: el negocio es distinto de su dueño. Si don Pepe paga la colegiatura de su hijo con dinero de la tiendita, eso **no** es un gasto de la tiendita, es un retiro del dueño. **Negocio en marcha**: se supone que la empresa seguirá operando en el futuro, salvo que haya pruebas de lo contrario.",
            en: "**Economic entity**: the business is separate from its owner. If Don Pepe pays his son's tuition with the corner store's money, that is **not** an expense of the store; it is an owner withdrawal. **Going concern**: the company is assumed to keep operating in the future, unless there is evidence otherwise.",
          },
          {
            es: "**Dualidad económica**: todo lo que tiene la entidad (sus recursos) tiene una fuente (alguien lo financió). Es la idea detrás de Activo = Pasivo + Capital. **Sustancia económica**: importa lo que realmente ocurre, no solo cómo se ve en el papel. **Consistencia**: usar los mismos criterios de un año a otro para poder comparar.",
            en: "**Economic duality**: everything the entity has (its resources) has a source (someone financed it). It is the idea behind Assets = Liabilities + Equity. **Economic substance**: what really happens matters, not just how it looks on paper. **Consistency**: use the same criteria from one year to the next so you can compare.",
          },
        ],
      },
      {
        heading: { es: "Introducción a la devengación contable", en: "Introduction to accrual accounting" },
        body: [
          {
            es: "La **devengación contable** responde a la pregunta: **¿cuándo registro?** La respuesta: cuando la operación **ocurre**, no cuando se cobra o se paga. Un ingreso se reconoce cuando vendes o prestas el servicio; un gasto, cuando lo consumes o lo utilizas.",
            en: "**Accrual accounting** answers the question: **when do I record?** The answer: when the transaction **happens**, not when cash is collected or paid. Revenue is recognized when you sell or perform the service; an expense, when you consume or use it.",
          },
          {
            es: "Ejemplo: un taller repara un coche el 28 de marzo y el cliente paga el 5 de abril. El ingreso es de **marzo**, porque el trabajo se hizo en marzo. El 5 de abril solo se registra que el cliente pagó lo que debía.",
            en: "Example: a workshop repairs a car on March 28 and the customer pays on April 5. The revenue belongs to **March**, because the work was done in March. On April 5 you only record that the customer paid what they owed.",
          },
          {
            es: "De la mano va la **asociación de costos y gastos con ingresos**: los costos y gastos se registran en el mismo periodo que los ingresos que ayudaron a generar. Así, la utilidad de cada mes refleja lo que de verdad pasó en ese mes.",
            en: "Hand in hand goes the **matching of costs and expenses with revenue**: costs and expenses are recorded in the same period as the revenue they helped generate. That way, each month's profit reflects what really happened that month.",
          },
        ],
        formulas: [
          {
            name: { es: "Ingreso que corresponde a un periodo (devengado)", en: "Revenue that belongs to a period (accrued)" },
            expression: "Ingreso del periodo = Ventas o servicios del periodo cobrados + Ventas o servicios del periodo pendientes de cobro",
            variables: [
              { symbol: "Ingreso del periodo", meaning: { es: "Los pesos de ingreso que se registran en ese mes (o año), porque el trabajo o la venta se hizo en ese mes.", en: "The pesos of revenue recorded in that month (or year), because the work or sale was done in that month." } },
              { symbol: "Ventas o servicios del periodo cobrados", meaning: { es: "Lo que vendiste o el trabajo que hiciste en ese mes y ya te pagaron, en pesos.", en: "What you sold or the work you did that month and have already been paid for, in pesos." } },
              { symbol: "Ventas o servicios del periodo pendientes de cobro", meaning: { es: "Lo que vendiste o hiciste en ese mes pero te pagarán después (a crédito), en pesos.", en: "What you sold or did that month but will be paid for later (on credit), in pesos." } },
            ],
            steps: [
              { es: "Haz una lista de todo el dinero y de todas las ventas o servicios que mencionan.", en: "List all the money and all the sales or services mentioned." },
              { es: "Para cada uno pregunta: ¿el trabajo o la venta se hizo en este periodo? Si sí, cuenta; si fue en otro periodo, no cuenta.", en: "For each one ask: was the work or sale done in this period? If yes, it counts; if it was in another period, it does not." },
              { es: "Suma lo que sí cuenta, sin importar si ya se cobró o no.", en: "Add up what counts, whether or not it has been collected." },
            ],
            example: {
              es: "En diciembre una carpintería entrega muebles por $24,000: le pagan $15,000 y le quedan a deber $9,000. Ese mismo mes cobra $4,000 de un trabajo de noviembre. Ingreso de diciembre = 15,000 + 9,000 = **$24,000**. Los $4,000 son ingreso de noviembre: en diciembre solo se registra que el cliente pagó.",
              en: "In December a carpentry shop delivers furniture worth $24,000: it is paid $15,000 and is still owed $9,000. That same month it collects $4,000 for a November job. December revenue = 15,000 + 9,000 = **$24,000**. The $4,000 is November revenue: in December you only record that the customer paid.",
            },
            mistake: {
              es: "Contar solo el dinero que entró en el mes, o sumar cobros de trabajos de meses anteriores. La pregunta es cuándo se hizo el trabajo, no cuándo llegó el dinero.",
              en: "Counting only the cash that came in during the month, or adding collections for jobs from earlier months. The question is when the work was done, not when the money arrived.",
            },
          },
        ],
        bullets: [
          { es: "Ingreso: cuando vendes o prestas el servicio, aunque cobres después.", en: "Revenue: when you sell or perform the service, even if you collect later." },
          { es: "Gasto: cuando lo consumes, aunque lo pagues después.", en: "Expense: when you consume it, even if you pay later." },
          { es: "Cobrar o pagar mueve el efectivo, pero no crea por sí solo un ingreso o un gasto.", en: "Collecting or paying moves cash, but does not by itself create revenue or an expense." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Ingresos de octubre de una cafetería", en: "A coffee shop's October revenue" },
        problem: {
          es: "En octubre una cafetería vende $50,000: cobra $42,000 en el momento y $8,000 quedan pendientes de cobro de una empresa vecina. Además, en octubre cobra $6,000 de un servicio de café que dio en septiembre. ¿Cuánto ingreso es de octubre?",
          en: "In October a coffee shop sells $50,000: it collects $42,000 on the spot and $8,000 is still owed by a neighboring company. Also in October it collects $6,000 for a coffee service provided in September. How much revenue belongs to October?",
        },
        steps: [
          { es: "Pregunta clave: ¿qué se vendió en octubre? Ventas del mes: 42,000 + 8,000 = $50,000.", en: "Key question: what was sold in October? Month's sales: 42,000 + 8,000 = $50,000." },
          { es: "Los $8,000 pendientes sí cuentan: la venta ya ocurrió, solo falta cobrar.", en: "The $8,000 outstanding does count: the sale already happened, only the collection is pending." },
          { es: "Los $6,000 cobrados son de un servicio de septiembre: ese ingreso ya se registró en septiembre.", en: "The $6,000 collected is for a September service: that revenue was already recorded in September." },
        ],
        result: { es: "Ingreso de octubre: $50,000. El efectivo cobrado en octubre fue 42,000 + 6,000 = $48,000, una cifra distinta.", en: "October revenue: $50,000. Cash collected in October was 42,000 + 6,000 = $48,000, a different figure." },
      },
      {
        title: { es: "¿Gasto del negocio o del dueño?", en: "Business expense or owner's expense?" },
        problem: {
          es: "Del dinero de su estética, Laura paga: la renta del local $7,000, la luz del local $900 y el súper de su casa $2,500. ¿Cuánto es gasto de la estética?",
          en: "From her beauty salon's money, Laura pays: the shop rent $7,000, the shop's electricity $900 and her home groceries $2,500. How much is an expense of the salon?",
        },
        steps: [
          { es: "Aplica el postulado de entidad económica: el negocio es distinto de Laura.", en: "Apply the economic entity postulate: the business is separate from Laura." },
          { es: "Renta y luz del local son para operar la estética: 7,000 + 900 = $7,900.", en: "The shop's rent and electricity are for running the salon: 7,000 + 900 = $7,900." },
          { es: "El súper es personal: es un retiro de Laura, no un gasto del negocio.", en: "The groceries are personal: they are a withdrawal by Laura, not a business expense." },
        ],
        result: { es: "Gastos de la estética: $7,900. Los $2,500 del súper reducen el capital como retiro del dueño.", en: "Salon expenses: $7,900. The $2,500 of groceries reduces equity as an owner withdrawal." },
      },
    ],
    keyPoints: [
      { es: "Las NIF son las reglas contables en México y las emite el CINIF.", en: "The NIF are Mexico's accounting rules and are issued by CINIF." },
      { es: "Las NIF no son leyes fiscales; los impuestos se rigen por leyes que aplica el SAT.", en: "The NIF are not tax laws; taxes are governed by laws applied by the SAT." },
      { es: "Entidad económica: el negocio y el dueño son distintos.", en: "Economic entity: the business and the owner are separate." },
      { es: "Dualidad económica: todo recurso tiene una fuente (Activo = Pasivo + Capital).", en: "Economic duality: every resource has a source (Assets = Liabilities + Equity)." },
      { es: "Devengación: registras cuando ocurre la operación, no cuando cobras o pagas.", en: "Accrual: you record when the transaction happens, not when you collect or pay." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1B-008', 'N1B-009', 'N1B-010', 'N1B-011', 'N1B-012', 'N1B-013', 'N1B-014'],
  },

  // ───────────────────────────── L1-08 ─────────────────────────────
  {
    id: 'L1-08',
    level: 1,
    topicIds: ['1.8'],
    title: { es: "Las cuentas contables y su naturaleza", en: "Accounts and their normal balance" },
    summary: {
      es: "Las cuentas son los cajones donde se ordena cada operación, y su naturaleza (deudora o acreedora) indica de qué lado crecen y qué saldo deben tener.",
      en: "Accounts are the drawers where each transaction is sorted, and their nature (debit or credit) tells you which side they grow on and which balance they should show.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es una cuenta contable y qué es un catálogo de cuentas.", en: "Explain what an account is and what a chart of accounts is." },
      { es: "Clasificar cuentas en activo, pasivo, capital, ingresos y gastos.", en: "Classify accounts into assets, liabilities, equity, revenue and expenses." },
      { es: "Identificar si una cuenta es de naturaleza deudora o acreedora.", en: "Identify whether an account has a debit or credit nature." },
      { es: "Calcular el saldo de una cuenta y saber si es deudor o acreedor.", en: "Calculate an account's balance and tell whether it is a debit or credit balance." },
    ],
    theory: [
      {
        heading: { es: "Clasificación de cuentas", en: "Classifying accounts" },
        body: [
          {
            es: "Una **cuenta contable** es como un **cajón con etiqueta** donde guardas todos los movimientos de una misma cosa. Hay un cajón para el efectivo (Caja), otro para el dinero en el banco (Bancos), otro para lo que debes a quien te vende mercancía (Proveedores), y así.",
            en: "An **account** is like a **labeled drawer** where you keep every movement of the same thing. There is a drawer for cash (Cash on hand), another for money in the bank (Bank), another for what you owe the people who sell you goods (Accounts payable), and so on.",
          },
          {
            es: "La lista ordenada de todas las cuentas de un negocio, cada una con su código, se llama **catálogo de cuentas**. Normalmente el primer dígito del código indica el grupo: por ejemplo, 1 para activo, 2 para pasivo, 3 para capital, 4 para ingresos y del 5 en adelante para costos y gastos.",
            en: "The ordered list of all of a business's accounts, each with its code, is called the **chart of accounts**. Usually the first digit of the code shows the group: for example, 1 for assets, 2 for liabilities, 3 for equity, 4 for revenue and 5 onward for costs and expenses.",
          },
          {
            es: "Las cuentas se agrupan en dos familias. Las de **balance** (activo, pasivo y capital) muestran lo que el negocio tiene y debe en una fecha. Las de **resultados** (ingresos, costos y gastos) muestran cómo le fue en un periodo, por ejemplo un mes.",
            en: "Accounts are grouped into two families. **Balance sheet** accounts (assets, liabilities and equity) show what the business has and owes at a date. **Income statement** accounts (revenue, costs and expenses) show how it did over a period, for example a month.",
          },
        ],
        bullets: [
          { es: "Activo: Caja, Bancos, Clientes, Inventarios, Mobiliario y equipo.", en: "Assets: Cash on hand, Bank, Accounts receivable, Inventory, Furniture and equipment." },
          { es: "Pasivo: Proveedores, Acreedores diversos, Préstamos bancarios.", en: "Liabilities: Accounts payable, Other payables, Bank loans." },
          { es: "Capital: Capital social, Utilidades retenidas.", en: "Equity: Share capital, Retained earnings." },
          { es: "Ingresos: Ventas, Ingresos por servicios.", en: "Revenue: Sales, Service revenue." },
          { es: "Costos y gastos: Costo de ventas, Sueldos, Renta, Luz.", en: "Costs and expenses: Cost of goods sold, Salaries, Rent, Utilities." },
        ],
      },
      {
        heading: { es: "Naturaleza deudora y acreedora", en: "Debit and credit nature" },
        body: [
          {
            es: "Cada cuenta tiene un **lado favorito** donde crece: eso es su **naturaleza**. Las cuentas de **naturaleza deudora** crecen con **cargos** (lado izquierdo). Las de **naturaleza acreedora** crecen con **abonos** (lado derecho). En el siguiente tema verás a fondo qué son cargos y abonos.",
            en: "Each account has a **favorite side** where it grows: that is its **nature** (normal balance). **Debit-nature** accounts grow with **debits** (left side). **Credit-nature** accounts grow with **credits** (right side). In the next topic you will study debits and credits in depth.",
          },
          {
            es: "La regla es fácil de recordar si piensas en la ecuación. Lo que está a la **izquierda** (activo), y lo que reduce el capital (costos y gastos), es **deudor**. Lo que está a la **derecha** (pasivo y capital), y lo que aumenta el capital (ingresos), es **acreedor**.",
            en: "The rule is easy to remember if you think of the equation. What sits on the **left** (assets), plus what reduces equity (costs and expenses), is **debit**. What sits on the **right** (liabilities and equity), plus what increases equity (revenue), is **credit**.",
          },
          {
            es: "Hay excepciones que verás después, como la Depreciación acumulada: está en el grupo del activo pero es acreedora, porque resta valor a otro activo. Por ahora, domina la regla general.",
            en: "There are exceptions you will see later, such as Accumulated depreciation: it sits in the asset group but has a credit nature, because it subtracts value from another asset. For now, master the general rule.",
          },
        ],
        bullets: [
          { es: "Deudoras: activos, costos y gastos.", en: "Debit nature: assets, costs and expenses." },
          { es: "Acreedoras: pasivos, capital e ingresos.", en: "Credit nature: liabilities, equity and revenue." },
        ],
      },
      {
        heading: { es: "Saldos contables", en: "Account balances" },
        body: [
          {
            es: "El **saldo** es lo que queda en el cajón después de todos los movimientos: la diferencia entre lo que se anotó de un lado y lo que se anotó del otro. Si los cargos son mayores, el saldo es **deudor**; si los abonos son mayores, es **acreedor**; si son iguales, la cuenta está **saldada** (en cero).",
            en: "The **balance** is what is left in the drawer after all movements: the difference between what was written on one side and what was written on the other. If debits are larger, it is a **debit balance**; if credits are larger, a **credit balance**; if they are equal, the account is **settled** (zero).",
          },
          {
            es: "Lo normal es que cada cuenta tenga saldo de su misma naturaleza: Bancos, saldo deudor; Proveedores, saldo acreedor. Si Caja apareciera con saldo acreedor, algo está mal: no puedes sacar de la caja más billetes de los que hay.",
            en: "Normally each account shows a balance of its own nature: Bank, a debit balance; Accounts payable, a credit balance. If Cash on hand showed a credit balance, something is wrong: you cannot take more bills out of the register than there are.",
          },
          {
            es: "Mini ejemplo: en Caja entraron $5,000 y $3,000 (cargos) y salieron $2,500 (abono). Saldo = 8,000 − 2,500 = **$5,500 deudor**.",
            en: "Mini example: $5,000 and $3,000 came into Cash on hand (debits) and $2,500 went out (credit). Balance = 8,000 − 2,500 = **$5,500 debit**.",
          },
        ],
        formulas: [
          {
            name: { es: "Saldo de una cuenta deudora (activo, costos y gastos)", en: "Balance of a debit-nature account (assets, costs and expenses)" },
            expression: "Saldo deudor = Suma de cargos − Suma de abonos",
            variables: [
              { symbol: "Saldo deudor", meaning: { es: "Lo que queda en la cuenta al final, en pesos. En Caja o Bancos, por ejemplo, es el dinero que realmente tienes.", en: "What is left in the account at the end, in pesos. In Cash on hand or Bank, for example, it is the money you actually have." } },
              { symbol: "Suma de cargos", meaning: { es: "El total de lo anotado del lado izquierdo (lo que hizo crecer la cuenta), en pesos. Si la cuenta trae saldo inicial, se suma aquí.", en: "The total written on the left side (what made the account grow), in pesos. If the account has an opening balance, it is added here." } },
              { symbol: "Suma de abonos", meaning: { es: "El total de lo anotado del lado derecho (lo que hizo bajar la cuenta), en pesos.", en: "The total written on the right side (what made the account shrink), in pesos." } },
            ],
            steps: [
              { es: "Suma todos los cargos; si la cuenta empezó el mes con saldo, inclúyelo en esta suma.", en: "Add up all the debits; if the account started the month with a balance, include it in this sum." },
              { es: "Suma todos los abonos.", en: "Add up all the credits." },
              { es: "Resta: cargos menos abonos. Si sale positivo, es un saldo deudor normal.", en: "Subtract: debits minus credits. If it is positive, it is a normal debit balance." },
            ],
            example: {
              es: "Bancos de una papelería empieza el mes con $6,000. Depósitos (cargos): $10,000 y $4,000. Pagos (abonos): $7,500. Cargos = 6,000 + 10,000 + 4,000 = 20,000. Abonos = 7,500. Saldo = 20,000 − 7,500 = **$12,500 deudor**.",
              en: "A stationery store's Bank account starts the month with $6,000. Deposits (debits): $10,000 and $4,000. Payments (credits): $7,500. Debits = 6,000 + 10,000 + 4,000 = 20,000. Credits = 7,500. Balance = 20,000 − 7,500 = **$12,500 debit**.",
            },
            mistake: {
              es: "Olvidar el saldo inicial. Lo que la cuenta ya traía de antes cuenta como un cargo más.",
              en: "Forgetting the opening balance. What the account already had from before counts as one more debit.",
            },
          },
          {
            name: { es: "Saldo de una cuenta acreedora (pasivo, capital e ingresos)", en: "Balance of a credit-nature account (liabilities, equity and revenue)" },
            expression: "Saldo acreedor = Suma de abonos − Suma de cargos",
            variables: [
              { symbol: "Saldo acreedor", meaning: { es: "Lo que queda en la cuenta al final, en pesos. En Proveedores o Préstamos, es lo que todavía debes.", en: "What is left in the account at the end, in pesos. In Accounts payable or Loans, it is what you still owe." } },
              { symbol: "Suma de abonos", meaning: { es: "El total del lado derecho (lo que hizo crecer la cuenta, por ejemplo nuevas deudas), en pesos. Un saldo inicial se suma aquí.", en: "The total on the right side (what made the account grow, for example new debts), in pesos. An opening balance is added here." } },
              { symbol: "Suma de cargos", meaning: { es: "El total del lado izquierdo (lo que hizo bajar la cuenta, por ejemplo pagos), en pesos.", en: "The total on the left side (what made the account shrink, for example payments), in pesos." } },
            ],
            steps: [
              { es: "Suma todos los abonos, incluido el saldo inicial si lo hay.", en: "Add up all the credits, including the opening balance if there is one." },
              { es: "Suma todos los cargos.", en: "Add up all the debits." },
              { es: "Resta: abonos menos cargos. El resultado es lo que se sigue debiendo (o lo acumulado de capital o ingresos).", en: "Subtract: credits minus debits. The result is what is still owed (or the accumulated equity or revenue)." },
            ],
            example: {
              es: "Préstamos bancarios de un taller tiene un abono de $50,000 (el préstamo) y dos cargos de $12,000 y $8,000 (pagos). Abonos = 50,000. Cargos = 12,000 + 8,000 = 20,000. Saldo = 50,000 − 20,000 = **$30,000 acreedor**: aún se deben $30,000.",
              en: "A workshop's Bank loans account has one credit of $50,000 (the loan) and two debits of $12,000 and $8,000 (payments). Credits = 50,000. Debits = 12,000 + 8,000 = 20,000. Balance = 50,000 − 20,000 = **$30,000 credit**: $30,000 is still owed.",
            },
            interpret: {
              es: "Lo normal es que cada cuenta tenga saldo de su naturaleza. Si al restar te sale negativo, revisa: o usaste la fórmula equivocada o hay un error de registro.",
              en: "Normally each account has a balance of its own nature. If the subtraction comes out negative, check: either you used the wrong formula or there is a recording error.",
            },
            mistake: {
              es: "Usar la fórmula de las deudoras (cargos − abonos) en una cuenta acreedora y obtener un número negativo.",
              en: "Using the debit-nature formula (debits − credits) on a credit-nature account and getting a negative number.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Saldo de Bancos de un taller", en: "A workshop's Bank balance" },
        problem: {
          es: "Bancos de un taller inicia el mes con $15,000. Recibe depósitos por $9,000 y $6,000 y hace pagos por $4,000 y $11,000. ¿Cuál es el saldo?",
          en: "A workshop's Bank account starts the month at $15,000. It receives deposits of $9,000 and $6,000 and makes payments of $4,000 and $11,000. What is the balance?",
        },
        steps: [
          { es: "Bancos es activo: naturaleza deudora. El saldo inicial va del lado de los cargos.", en: "Bank is an asset: debit nature. The opening balance goes on the debit side." },
          { es: "Cargos: 15,000 + 9,000 + 6,000 = $30,000.", en: "Debits: 15,000 + 9,000 + 6,000 = $30,000." },
          { es: "Abonos: 4,000 + 11,000 = $15,000.", en: "Credits: 4,000 + 11,000 = $15,000." },
          { es: "Saldo = 30,000 − 15,000 = $15,000.", en: "Balance = 30,000 − 15,000 = $15,000." },
        ],
        result: { es: "Saldo deudor de $15,000, igual al inicial: entró lo mismo que salió.", en: "Debit balance of $15,000, equal to the opening one: as much came in as went out." },
      },
      {
        title: { es: "Saldo de Proveedores de una tiendita", en: "A corner store's Accounts payable balance" },
        problem: {
          es: "Una tiendita compra a crédito a su proveedor de refrescos $6,000 y luego $4,500. Le abona (paga) $7,000. ¿Cuánto le debe?",
          en: "A corner store buys soft drinks on credit for $6,000 and then $4,500. It pays $7,000. How much does it owe?",
        },
        steps: [
          { es: "Proveedores es pasivo: naturaleza acreedora. Las compras a crédito son abonos.", en: "Accounts payable is a liability: credit nature. Credit purchases are credits." },
          { es: "Abonos: 6,000 + 4,500 = $10,500. Cargos (pagos): $7,000.", en: "Credits: 6,000 + 4,500 = $10,500. Debits (payments): $7,000." },
          { es: "Saldo = 10,500 − 7,000 = $3,500.", en: "Balance = 10,500 − 7,000 = $3,500." },
        ],
        result: { es: "Saldo acreedor de $3,500: es lo que la tiendita aún debe.", en: "Credit balance of $3,500: what the store still owes." },
      },
    ],
    keyPoints: [
      { es: "Una cuenta es un cajón con etiqueta; el catálogo de cuentas es la lista de todos los cajones.", en: "An account is a labeled drawer; the chart of accounts is the list of all the drawers." },
      { es: "Activo, costos y gastos son de naturaleza deudora.", en: "Assets, costs and expenses have a debit nature." },
      { es: "Pasivo, capital e ingresos son de naturaleza acreedora.", en: "Liabilities, equity and revenue have a credit nature." },
      { es: "Saldo deudor = cargos − abonos; saldo acreedor = abonos − cargos.", en: "Debit balance = debits − credits; credit balance = credits − debits." },
      { es: "Un saldo contrario a la naturaleza de la cuenta suele indicar un error.", en: "A balance opposite to the account's nature usually signals an error." },
    ],
    exerciseIds: ['N1B-015', 'N1B-016', 'N1B-017', 'N1B-018', 'N1B-019', 'N1B-020', 'N1B-021'],
  },

  // ───────────────────────────── L1-09 ─────────────────────────────
  {
    id: 'L1-09',
    level: 1,
    topicIds: ['1.9'],
    title: { es: "Cargos y abonos", en: "Debits and credits" },
    summary: {
      es: "Cargar es anotar en el lado izquierdo (debe) y abonar es anotar en el derecho (haber); si suben o bajan depende de la naturaleza de la cuenta.",
      en: "Debiting is writing on the left side and crediting is writing on the right side; whether the account goes up or down depends on its nature.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué significan debe, haber, cargo y abono.", en: "Explain what the debit side, credit side, debit and credit mean." },
      { es: "Aplicar las reglas de cargos y abonos a cada tipo de cuenta.", en: "Apply the debit and credit rules to each type of account." },
      { es: "Decidir si un movimiento se registra con cargo o con abono.", en: "Decide whether a movement is recorded with a debit or a credit." },
    ],
    theory: [
      {
        heading: { es: "Debe y haber", en: "Debit side and credit side" },
        body: [
          {
            es: "Toda cuenta tiene dos lados. El lado **izquierdo** se llama **debe**, y anotar ahí se llama **cargar** (hacer un **cargo**). El lado **derecho** se llama **haber**, y anotar ahí se llama **abonar** (hacer un **abono**).",
            en: "Every account has two sides. The **left** side is called the **debit side** (in Spanish, *debe*), and writing there is called **debiting** (making a **debit**). The **right** side is the **credit side** (*haber*), and writing there is called **crediting** (making a **credit**).",
          },
          {
            es: "Cuidado con el lenguaje de todos los días. En el banco, \"abono\" suele sonar a que te depositaron, y en una tienda \"abonar\" es pagar en partes. **En contabilidad, cargo y abono solo indican el lado**: izquierdo o derecho. No significan \"bueno\" o \"malo\", ni \"entra\" o \"sale\" por sí solos.",
            en: "Be careful with everyday language. At the bank, a \"credit\" sounds like money was deposited, and in Mexican stores \"abonar\" means paying in installments. **In accounting, debit and credit only indicate the side**: left or right. They do not mean \"good\" or \"bad\", nor \"in\" or \"out\" by themselves.",
          },
        ],
        bullets: [
          { es: "Debe = lado izquierdo = cargos.", en: "Debit side = left side = debits." },
          { es: "Haber = lado derecho = abonos.", en: "Credit side = right side = credits." },
          { es: "Cargar o abonar no dice por sí solo si la cuenta sube o baja.", en: "Debiting or crediting alone does not say whether the account goes up or down." },
        ],
      },
      {
        heading: { es: "Reglas de cargos y abonos", en: "Rules of debits and credits" },
        body: [
          {
            es: "Las reglas salen de la naturaleza que aprendiste en el tema anterior. **Una cuenta aumenta del lado de su naturaleza y disminuye del lado contrario.** Así de simple.",
            en: "The rules come from the nature you learned in the previous topic. **An account increases on the side of its nature and decreases on the opposite side.** That simple.",
          },
          {
            es: "Para las cuentas **deudoras** (activo, costos y gastos): se **cargan** para aumentar y se **abonan** para disminuir. Para las **acreedoras** (pasivo, capital e ingresos): se **abonan** para aumentar y se **cargan** para disminuir.",
            en: "For **debit-nature** accounts (assets, costs and expenses): **debit** to increase and **credit** to decrease. For **credit-nature** accounts (liabilities, equity and revenue): **credit** to increase and **debit** to decrease.",
          },
          {
            es: "Mini ejemplo: entra efectivo a la caja de una cafetería → Caja aumenta → **cargo** a Caja. Le pagas $2,000 a tu proveedor → Proveedores disminuye → **cargo** a Proveedores. Dos cargos, uno sube una cuenta y otro baja otra: depende de la naturaleza.",
            en: "Mini example: cash comes into a coffee shop's register → Cash on hand increases → **debit** Cash on hand. You pay your supplier $2,000 → Accounts payable decreases → **debit** Accounts payable. Two debits: one raises an account and the other lowers one; it depends on the nature.",
          },
        ],
        bullets: [
          { es: "Activo: aumenta con cargo, disminuye con abono.", en: "Assets: increase with a debit, decrease with a credit." },
          { es: "Costos y gastos: aumentan con cargo, disminuyen con abono.", en: "Costs and expenses: increase with a debit, decrease with a credit." },
          { es: "Pasivo: aumenta con abono, disminuye con cargo.", en: "Liabilities: increase with a credit, decrease with a debit." },
          { es: "Capital: aumenta con abono, disminuye con cargo.", en: "Equity: increases with a credit, decreases with a debit." },
          { es: "Ingresos: aumentan con abono, disminuyen con cargo.", en: "Revenue: increases with a credit, decreases with a debit." },
        ],
      },
      {
        heading: { es: "Ejercicios de clasificación guiados", en: "Guided classification practice" },
        body: [
          {
            es: "Para decidir si un movimiento es cargo o abono, sigue siempre **tres pasos**: (1) ¿qué cuenta se mueve?; (2) ¿de qué naturaleza es?; (3) ¿aumenta o disminuye? Con esas respuestas, la regla te da el lado.",
            en: "To decide whether a movement is a debit or a credit, always follow **three steps**: (1) which account moves? (2) what is its nature? (3) does it increase or decrease? With those answers, the rule gives you the side.",
          },
          {
            es: "**Caso 1.** Una cafetería vende y cobra en efectivo. Caja → deudora → aumenta → **cargo**. Ventas → acreedora → aumenta → **abono**. **Caso 2.** Paga la luz con transferencia. Luz (gasto) → deudora → aumenta → **cargo**. Bancos → deudora → disminuye → **abono**.",
            en: "**Case 1.** A coffee shop sells and collects cash. Cash on hand → debit nature → increases → **debit**. Sales → credit nature → increases → **credit**. **Case 2.** It pays the electricity bill by transfer. Utilities (expense) → debit nature → increases → **debit**. Bank → debit nature → decreases → **credit**.",
          },
          {
            es: "**Caso 3.** Liquida un préstamo bancario con dinero del banco. Préstamos bancarios → acreedora → disminuye → **cargo**. Bancos → deudora → disminuye → **abono**. Fíjate que en cada caso hubo un cargo y un abono: eso lo estudiarás en el siguiente tema, la partida doble.",
            en: "**Case 3.** It pays off a bank loan with money from the bank. Bank loans → credit nature → decreases → **debit**. Bank → debit nature → decreases → **credit**. Notice that every case had one debit and one credit: you will study that in the next topic, double entry.",
          },
        ],
        bullets: [
          { es: "Paso 1: identifica la cuenta.", en: "Step 1: identify the account." },
          { es: "Paso 2: recuerda su naturaleza (deudora o acreedora).", en: "Step 2: recall its nature (debit or credit)." },
          { es: "Paso 3: ¿aumenta o disminuye? Aplica la regla y obtén el lado.", en: "Step 3: does it increase or decrease? Apply the rule and get the side." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Compra de mercancía a crédito", en: "Buying goods on credit" },
        problem: {
          es: "Una tiendita compra a crédito $3,200 de mercancía a su proveedor de abarrotes. ¿Qué se carga y qué se abona?",
          en: "A corner store buys $3,200 of groceries on credit from its supplier. What is debited and what is credited?",
        },
        steps: [
          { es: "Inventarios (activo, deudora) aumenta porque llega mercancía → cargo $3,200.", en: "Inventory (asset, debit nature) increases because goods arrive → debit $3,200." },
          { es: "Proveedores (pasivo, acreedora) aumenta porque ahora se debe → abono $3,200.", en: "Accounts payable (liability, credit nature) increases because money is now owed → credit $3,200." },
        ],
        result: { es: "Cargo a Inventarios $3,200 y abono a Proveedores $3,200.", en: "Debit Inventory $3,200 and credit Accounts payable $3,200." },
      },
      {
        title: { es: "Cobro a un cliente", en: "Collecting from a customer" },
        problem: {
          es: "Un taller cobra por transferencia $4,800 a un cliente que le debía una reparación del mes pasado. ¿Qué se carga y qué se abona?",
          en: "A workshop collects $4,800 by transfer from a customer who owed it for last month's repair. What is debited and what is credited?",
        },
        steps: [
          { es: "Bancos (activo, deudora) aumenta → cargo $4,800.", en: "Bank (asset, debit nature) increases → debit $4,800." },
          { es: "Clientes (activo, deudora) disminuye porque el cliente ya no debe → abono $4,800.", en: "Accounts receivable (asset, debit nature) decreases because the customer no longer owes → credit $4,800." },
          { es: "No hay ingreso nuevo: el ingreso se registró cuando se hizo la reparación.", en: "There is no new revenue: the revenue was recorded when the repair was done." },
        ],
        result: { es: "Cargo a Bancos $4,800 y abono a Clientes $4,800.", en: "Debit Bank $4,800 and credit Accounts receivable $4,800." },
      },
    ],
    keyPoints: [
      { es: "Debe es el lado izquierdo (cargos); haber es el lado derecho (abonos).", en: "The debit side is the left (debits); the credit side is the right (credits)." },
      { es: "Una cuenta aumenta del lado de su naturaleza y disminuye del contrario.", en: "An account increases on the side of its nature and decreases on the opposite side." },
      { es: "Activo, costos y gastos: suben con cargo. Pasivo, capital e ingresos: suben con abono.", en: "Assets, costs and expenses: go up with a debit. Liabilities, equity and revenue: go up with a credit." },
      { es: "En contabilidad, cargo y abono no significan \"bueno\" o \"malo\".", en: "In accounting, debit and credit do not mean \"good\" or \"bad\"." },
      { es: "Usa los tres pasos: cuenta, naturaleza, ¿aumenta o disminuye?", en: "Use the three steps: account, nature, increase or decrease?" },
    ],
    exerciseIds: ['N1B-022', 'N1B-023', 'N1B-024', 'N1B-025', 'N1B-026', 'N1B-027', 'N1B-028'],
  },

  // ───────────────────────────── L1-10 ─────────────────────────────
  {
    id: 'L1-10',
    level: 1,
    topicIds: ['1.10'],
    title: { es: "Partida doble", en: "Double-entry bookkeeping" },
    summary: {
      es: "Cada operación afecta al menos dos cuentas y, en todo registro, la suma de los cargos es igual a la suma de los abonos.",
      en: "Every transaction affects at least two accounts and, in every entry, total debits equal total credits.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar el principio de dualidad en el que se basa la partida doble.", en: "Explain the duality principle behind double-entry bookkeeping." },
      { es: "Comprobar que en un asiento los cargos sean iguales a los abonos.", en: "Check that debits equal credits in an entry." },
      { es: "Registrar operaciones sencillas en forma de asiento (póliza).", en: "Record simple transactions as journal entries." },
      { es: "Calcular el importe que falta para que un asiento cuadre.", en: "Calculate the missing amount that makes an entry balance." },
    ],
    theory: [
      {
        heading: { es: "Principio de dualidad", en: "The duality principle" },
        body: [
          {
            es: "En la vida diaria, todo intercambio tiene dos caras: cuando compras un pan, recibes el pan y entregas dinero. En contabilidad pasa lo mismo: **cada operación tiene al menos dos efectos**, y por eso se registra en **al menos dos cuentas**. A esto se le llama **partida doble**.",
            en: "In daily life, every exchange has two faces: when you buy bread, you receive the bread and hand over money. Accounting works the same way: **every transaction has at least two effects**, so it is recorded in **at least two accounts**. This is called **double entry**.",
          },
          {
            es: "La idea se atribuye a la práctica de los comerciantes italianos y la difundió Luca Pacioli en 1494. En las NIF se refleja en el postulado de **dualidad económica**: cada recurso tiene una fuente que lo financió. Es la razón por la que la ecuación contable nunca se desbalancea.",
            en: "The idea comes from the practice of Italian merchants and was spread by Luca Pacioli in 1494. In the NIF it is reflected in the **economic duality** postulate: every resource has a source that financed it. It is the reason the accounting equation never gets out of balance.",
          },
          {
            es: "Mini ejemplo: una cafetería compra tazas por $1,200 en efectivo. Efecto 1: entran tazas (sube un activo). Efecto 2: sale efectivo (baja otro activo). Dos cuentas, un solo hecho.",
            en: "Mini example: a coffee shop buys mugs for $1,200 in cash. Effect 1: mugs come in (one asset goes up). Effect 2: cash goes out (another asset goes down). Two accounts, a single event.",
          },
        ],
      },
      {
        heading: { es: "Igualdad entre cargos y abonos", en: "Equality of debits and credits" },
        body: [
          {
            es: "La regla de oro: **en todo asiento, la suma de los cargos es igual a la suma de los abonos**. Un **asiento** (en México también **póliza**) es el registro de una operación: qué cuentas se cargan, cuáles se abonan y por cuánto.",
            en: "The golden rule: **in every entry, total debits equal total credits**. An **entry** (in Mexico also called a *póliza*) is the record of a transaction: which accounts are debited, which are credited and by how much.",
          },
          {
            es: "Un asiento puede tener más de dos cuentas: es un **asiento compuesto**. Por ejemplo, un cargo y dos abonos. Lo que importa no es el número de líneas, sino que **los totales cuadren**. Si no cuadran, hay un error y hay que revisarlo antes de seguir.",
            en: "An entry can have more than two accounts: a **compound entry**. For example, one debit and two credits. What matters is not the number of lines but that **the totals balance**. If they do not, there is an error that must be checked before moving on.",
          },
        ],
        formulas: [
          {
            name: { es: "Comprobar que un asiento cuadra", en: "Checking that an entry balances" },
            expression: "Σ Cargos = Σ Abonos",
            variables: [
              { symbol: "Σ", meaning: { es: "Letra griega sigma; significa \"la suma de todos\".", en: "The Greek letter sigma; it means \"the sum of all\"." } },
              { symbol: "Σ Cargos", meaning: { es: "La suma, en pesos, de todos los importes anotados del lado izquierdo (debe) en el asiento.", en: "The sum, in pesos, of all the amounts written on the left side (debit) of the entry." } },
              { symbol: "Σ Abonos", meaning: { es: "La suma, en pesos, de todos los importes anotados del lado derecho (haber) en el asiento.", en: "The sum, in pesos, of all the amounts written on the right side (credit) of the entry." } },
            ],
            steps: [
              { es: "Suma todos los cargos del asiento, aunque sean varias cuentas.", en: "Add up all the debits in the entry, even if there are several accounts." },
              { es: "Suma todos los abonos del asiento.", en: "Add up all the credits in the entry." },
              { es: "Compara: si los dos totales son iguales, el asiento cuadra; si no, hay un error.", en: "Compare: if both totals are equal, the entry balances; if not, there is an error." },
            ],
            example: {
              es: "Asiento: cargo Inventarios $6,000 y Papelería $500; abono Caja $2,500 y Proveedores $4,000. Σ Cargos = 6,000 + 500 = 6,500. Σ Abonos = 2,500 + 4,000 = 6,500. **6,500 = 6,500: cuadra.**",
              en: "Entry: debit Inventory $6,000 and Office supplies $500; credit Cash $2,500 and Accounts payable $4,000. Σ Debits = 6,000 + 500 = 6,500. Σ Credits = 2,500 + 4,000 = 6,500. **6,500 = 6,500: it balances.**",
            },
            mistake: {
              es: "Ver que hay un cargo y un abono y dar por hecho que cuadra, sin sumar los importes.",
              en: "Seeing there is a debit and a credit and assuming it balances, without adding up the amounts.",
            },
          },
          {
            name: { es: "Importe que falta para que el asiento cuadre", en: "Missing amount that makes the entry balance" },
            expression: "Importe faltante = Σ Cargos − Σ Abonos conocidos",
            variables: [
              { symbol: "Importe faltante", meaning: { es: "Los pesos que hay que anotar en la cuenta que falta (aquí, un abono) para que los dos lados sumen igual.", en: "The pesos to write in the missing account (here, a credit) so both sides add up the same." } },
              { symbol: "Σ Cargos", meaning: { es: "La suma de todos los cargos del asiento, en pesos.", en: "The sum of all the debits in the entry, in pesos." } },
              { symbol: "Σ Abonos conocidos", meaning: { es: "La suma de los abonos que ya conoces, en pesos.", en: "The sum of the credits you already know, in pesos." } },
            ],
            steps: [
              { es: "Suma todos los cargos (no olvides ninguna cuenta).", en: "Add up all the debits (do not leave out any account)." },
              { es: "Suma los abonos que ya tienes.", en: "Add up the credits you already have." },
              { es: "Resta: lo que falta es la diferencia. Si lo que falta es un cargo, haz la resta al revés (Σ Abonos − Σ Cargos conocidos).", en: "Subtract: the missing amount is the difference. If the missing line is a debit, subtract the other way (Σ Credits − Σ known Debits)." },
              { es: "Comprueba que, con ese importe, Σ Cargos = Σ Abonos.", en: "Check that, with that amount, Σ Debits = Σ Credits." },
            ],
            example: {
              es: "Una tienda compra un mostrador de $20,000 y papelería de $1,500; paga $7,000 por transferencia y el resto queda a deber. Σ Cargos = 20,000 + 1,500 = 21,500. Abono conocido: Bancos 7,000. Faltante = 21,500 − 7,000 = **$14,500** a Acreedores diversos. Comprobación: 7,000 + 14,500 = 21,500.",
              en: "A shop buys a $20,000 counter and $1,500 of office supplies; it pays $7,000 by transfer and owes the rest. Σ Debits = 20,000 + 1,500 = 21,500. Known credit: Bank 7,000. Missing = 21,500 − 7,000 = **$14,500** to Other payables. Check: 7,000 + 14,500 = 21,500.",
            },
            mistake: {
              es: "Restar solo un cargo y olvidar los demás, o registrar como valor del bien solo lo que se pagó en ese momento.",
              en: "Subtracting only one debit and forgetting the others, or recording only the amount paid at that moment as the item's value.",
            },
          },
        ],
        bullets: [
          { es: "Toda operación afecta al menos dos cuentas.", en: "Every transaction affects at least two accounts." },
          { es: "Puede haber varios cargos y varios abonos en un mismo asiento.", en: "There can be several debits and several credits in the same entry." },
          { es: "Que el asiento cuadre no garantiza que se usaron las cuentas correctas.", en: "A balanced entry does not guarantee the right accounts were used." },
        ],
      },
      {
        heading: { es: "Operaciones sencillas", en: "Simple transactions" },
        body: [
          {
            es: "Para registrar cualquier operación, junta lo que ya sabes: (1) identifica las cuentas que se mueven; (2) decide si cada una aumenta o disminuye; (3) aplica la regla de cargos y abonos; (4) comprueba que los cargos sumen lo mismo que los abonos.",
            en: "To record any transaction, combine what you already know: (1) identify the accounts that move; (2) decide whether each one increases or decreases; (3) apply the debit and credit rule; (4) check that debits add up to the same as credits.",
          },
          {
            es: "**Aportación del dueño**: Juan abre su taller con $40,000 en efectivo → cargo Caja $40,000 / abono Capital social $40,000. **Venta de contado**: vende un servicio por $2,500 en efectivo → cargo Caja $2,500 / abono Ingresos por servicios $2,500.",
            en: "**Owner contribution**: Juan opens his workshop with $40,000 in cash → debit Cash on hand $40,000 / credit Share capital $40,000. **Cash sale**: he sells a service for $2,500 in cash → debit Cash on hand $2,500 / credit Service revenue $2,500.",
          },
          {
            es: "**Asiento compuesto**: compra herramientas por $10,000, paga $4,000 en efectivo y queda a deber $6,000 → cargo Maquinaria $10,000 / abono Caja $4,000 y abono Acreedores diversos $6,000. Cargos 10,000 = abonos 4,000 + 6,000. ✔",
            en: "**Compound entry**: he buys tools for $10,000, pays $4,000 in cash and owes $6,000 → debit Machinery $10,000 / credit Cash on hand $4,000 and credit Other payables $6,000. Debits 10,000 = credits 4,000 + 6,000. ✔",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Compra de mercancía de contado", en: "Cash purchase of goods" },
        problem: {
          es: "Una tiendita compra mercancía por $5,000 y paga con transferencia. Registra el asiento (sin IVA).",
          en: "A corner store buys goods for $5,000 and pays by transfer. Record the entry (no VAT).",
        },
        steps: [
          { es: "Cuentas: Inventarios y Bancos.", en: "Accounts: Inventory and Bank." },
          { es: "Inventarios (activo) aumenta → cargo $5,000.", en: "Inventory (asset) increases → debit $5,000." },
          { es: "Bancos (activo) disminuye → abono $5,000.", en: "Bank (asset) decreases → credit $5,000." },
          { es: "Comprobación: cargos 5,000 = abonos 5,000.", en: "Check: debits 5,000 = credits 5,000." },
        ],
        result: { es: "Cargo a Inventarios $5,000 / abono a Bancos $5,000.", en: "Debit Inventory $5,000 / credit Bank $5,000." },
      },
      {
        title: { es: "Asiento compuesto: computadora con pago parcial", en: "Compound entry: computer with partial payment" },
        problem: {
          es: "Una cafetería compra una computadora de $16,000: paga $6,000 por transferencia y el resto lo queda a deber a la tienda de cómputo. Registra el asiento (sin IVA).",
          en: "A coffee shop buys a $16,000 computer: it pays $6,000 by transfer and owes the rest to the computer store. Record the entry (no VAT).",
        },
        steps: [
          { es: "Equipo de cómputo (activo) aumenta → cargo $16,000.", en: "Computer equipment (asset) increases → debit $16,000." },
          { es: "Bancos (activo) disminuye → abono $6,000.", en: "Bank (asset) decreases → credit $6,000." },
          { es: "Acreedores diversos (pasivo) aumenta por lo que falta: 16,000 − 6,000 → abono $10,000.", en: "Other payables (liability) increase by the remainder: 16,000 − 6,000 → credit $10,000." },
          { es: "Comprobación: cargos 16,000 = abonos 6,000 + 10,000 = 16,000.", en: "Check: debits 16,000 = credits 6,000 + 10,000 = 16,000." },
        ],
        result: { es: "Cargo Equipo de cómputo $16,000 / abono Bancos $6,000 y Acreedores diversos $10,000.", en: "Debit Computer equipment $16,000 / credit Bank $6,000 and Other payables $10,000." },
      },
    ],
    keyPoints: [
      { es: "Toda operación tiene al menos dos efectos y afecta al menos dos cuentas.", en: "Every transaction has at least two effects and affects at least two accounts." },
      { es: "En todo asiento, la suma de cargos es igual a la suma de abonos.", en: "In every entry, total debits equal total credits." },
      { es: "Un asiento compuesto tiene más de dos cuentas, pero también debe cuadrar.", en: "A compound entry has more than two accounts, but it must also balance." },
      { es: "La partida doble mantiene siempre el equilibrio Activo = Pasivo + Capital.", en: "Double entry always keeps Assets = Liabilities + Equity in balance." },
      { es: "Un asiento cuadrado aún puede tener la cuenta equivocada: revisa también el sentido.", en: "A balanced entry can still use the wrong account: check the logic too." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1B-029', 'N1B-030', 'N1B-031', 'N1B-032', 'N1B-033', 'N1B-034', 'N1B-035', 'N1B-036'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ L1-06 ═════════════════════════
  {
    id: 'N1B-001',
    level: 1,
    module: 'L1-06',
    kind: 'formula',
    flavor: 'concept',
    prompt: { es: "Completa la ecuación contable básica.", en: "Complete the basic accounting equation." },
    template: 'Activo = {{b1}} + {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1B-001-b1-a', text: { es: "Ingresos", en: "Revenue" } },
          { id: 'N1B-001-b1-b', text: { es: "Pasivo", en: "Liabilities" } },
          { id: 'N1B-001-b1-c', text: { es: "Efectivo", en: "Cash" } },
        ],
        correctOptionId: 'N1B-001-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1B-001-b2-a', text: { es: "Gastos", en: "Expenses" } },
          { id: 'N1B-001-b2-b', text: { es: "Utilidad", en: "Profit" } },
          { id: 'N1B-001-b2-c', text: { es: "Capital", en: "Equity" } },
        ],
        correctOptionId: 'N1B-001-b2-c',
      },
    ],
    explanation: {
      es: "Activo = Pasivo + Capital: todo lo que el negocio tiene se financió con deudas (pasivo) o con recursos de los dueños (capital). Error común: poner ingresos o utilidad; esos explican cómo cambia el capital, pero no son parte directa de la ecuación básica.",
      en: "Assets = Liabilities + Equity: everything the business has was financed with debt (liabilities) or with the owners' resources (equity). Common mistake: choosing revenue or profit; they explain how equity changes but are not a direct part of the basic equation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-002',
    level: 1,
    module: 'L1-06',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "Una florería tiene activos por $250,000 y pasivos por $90,000.",
      en: "A flower shop has assets of $250,000 and liabilities of $90,000.",
    },
    prompt: { es: "¿Cuánto es el capital contable de la florería? Responde en pesos.", en: "What is the flower shop's equity? Answer in pesos." },
    answer: 160000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Capital = Activo − Pasivo = 250,000 − 90,000 = $160,000. Error común: sumar activo y pasivo (340,000); el pasivo es lo que se debe, así que se resta.",
      en: "Equity = Assets − Liabilities = 250,000 − 90,000 = $160,000. Common mistake: adding assets and liabilities (340,000); liabilities are what is owed, so they are subtracted.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-003',
    level: 1,
    module: 'L1-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Un taller compra a crédito un compresor de $20,000. ¿Cómo afecta esto a la ecuación contable?",
      en: "A workshop buys a $20,000 air compressor on credit. How does this affect the accounting equation?",
    },
    options: [
      { id: 'N1B-003-a', text: { es: "Activo +20,000 y capital +20,000", en: "Assets +20,000 and equity +20,000" } },
      { id: 'N1B-003-b', text: { es: "Activo +20,000 y pasivo +20,000", en: "Assets +20,000 and liabilities +20,000" } },
      { id: 'N1B-003-c', text: { es: "Activo +20,000 y activo −20,000", en: "Assets +20,000 and assets −20,000" } },
      { id: 'N1B-003-d', text: { es: "Pasivo +20,000 y capital −20,000", en: "Liabilities +20,000 and equity −20,000" } },
    ],
    correctOptionId: 'N1B-003-b',
    explanation: {
      es: "Entra un activo (el compresor) y nace una deuda (pasivo) por el mismo importe; los dos lados suben $20,000. No es capital porque el dueño no aportó nada, ni es intercambio de activos porque no salió efectivo.",
      en: "An asset comes in (the compressor) and a debt (liability) is born for the same amount; both sides rise by $20,000. It is not equity because the owner contributed nothing, nor an asset swap because no cash went out.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-004',
    level: 1,
    module: 'L1-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Cuando un negocio paga una deuda con dinero del banco, la ecuación contable queda desbalanceada hasta que vuelva a entrar dinero.",
      en: "When a business pays a debt with money from the bank, the accounting equation stays unbalanced until money comes in again.",
    },
    answer: false,
    explanation: {
      es: "Falso. Pagar una deuda baja el activo (Bancos) y baja el pasivo por el mismo importe: los dos lados disminuyen igual y la ecuación sigue en equilibrio. Ninguna operación bien registrada rompe la igualdad.",
      en: "False. Paying a debt lowers assets (Bank) and lowers liabilities by the same amount: both sides decrease equally and the equation stays balanced. No correctly recorded transaction breaks the equality.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-005',
    level: 1,
    module: 'L1-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una panadería inicia con Activo $100,000 = Pasivo $30,000 + Capital $70,000. Luego: (1) la dueña aporta $25,000 en efectivo; (2) la panadería paga $10,000 a su proveedor de harina.",
      en: "A bakery starts with Assets $100,000 = Liabilities $30,000 + Equity $70,000. Then: (1) the owner contributes $25,000 in cash; (2) the bakery pays $10,000 to its flour supplier.",
    },
    prompt: { es: "Calcula los totales de la ecuación después de las dos operaciones.", en: "Calculate the equation totals after both transactions." },
    fields: [
      { id: 'f1', label: { es: "Activo final", en: "Ending assets" }, answer: 115000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Pasivo final", en: "Ending liabilities" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Capital final", en: "Ending equity" }, answer: 95000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "(1) Aportación: activo 100,000 + 25,000 = 125,000 y capital 70,000 + 25,000 = 95,000. (2) Pago: activo 125,000 − 10,000 = 115,000 y pasivo 30,000 − 10,000 = 20,000. Comprobación: 20,000 + 95,000 = 115,000. Error común: restar el pago al capital; pagar una deuda no cambia lo que es de la dueña.",
      en: "(1) Contribution: assets 100,000 + 25,000 = 125,000 and equity 70,000 + 25,000 = 95,000. (2) Payment: assets 125,000 − 10,000 = 115,000 and liabilities 30,000 − 10,000 = 20,000. Check: 20,000 + 95,000 = 115,000. Common mistake: subtracting the payment from equity; paying a debt does not change what belongs to the owner.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-006',
    level: 1,
    module: 'L1-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas operaciones cambia la composición del activo pero NO cambia su total?",
      en: "Which of these transactions changes the makeup of assets but does NOT change their total?",
    },
    options: [
      { id: 'N1B-006-a', text: { es: "Recibir un préstamo bancario", en: "Receiving a bank loan" } },
      { id: 'N1B-006-b', text: { es: "Pagar a un proveedor en efectivo", en: "Paying a supplier in cash" } },
      { id: 'N1B-006-c', text: { es: "Comprar mercancía pagando en efectivo", en: "Buying goods and paying in cash" } },
      { id: 'N1B-006-d', text: { es: "Recibir una aportación del dueño", en: "Receiving an owner contribution" } },
    ],
    correctOptionId: 'N1B-006-c',
    explanation: {
      es: "Comprar de contado es un intercambio dentro del activo: sube Inventarios y baja el efectivo por el mismo importe. El préstamo y la aportación aumentan el activo total; pagar a un proveedor lo disminuye.",
      en: "Buying with cash is a swap within assets: Inventory goes up and cash goes down by the same amount. The loan and the contribution increase total assets; paying a supplier decreases them.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-equation',
  },
  {
    id: 'N1B-007',
    level: 1,
    module: 'L1-06',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles operaciones aumentan el activo TOTAL de una cafetería? Selecciona todas las que apliquen.",
      en: "Which transactions increase a coffee shop's TOTAL assets? Select all that apply.",
    },
    options: [
      { id: 'N1B-007-a', text: { es: "El dueño aporta $15,000 en efectivo", en: "The owner contributes $15,000 in cash" } },
      { id: 'N1B-007-b', text: { es: "Le depositan un préstamo bancario de $40,000", en: "A $40,000 bank loan is deposited" } },
      { id: 'N1B-007-c', text: { es: "Compra café a crédito por $6,000", en: "It buys coffee on credit for $6,000" } },
      { id: 'N1B-007-d', text: { es: "Paga $5,000 que debía al proveedor", en: "It pays $5,000 it owed the supplier" } },
      { id: 'N1B-007-e', text: { es: "Compra una licuadora de contado por $2,000", en: "It buys a blender for $2,000 in cash" } },
    ],
    correctOptionIds: ['N1B-007-a', 'N1B-007-b', 'N1B-007-c'],
    explanation: {
      es: "La aportación (sube capital), el préstamo y la compra a crédito (sube pasivo) hacen crecer el activo total. Pagar al proveedor lo reduce, y comprar la licuadora de contado solo cambia efectivo por equipo: el total no se mueve.",
      en: "The contribution (equity up), the loan and the credit purchase (liabilities up) increase total assets. Paying the supplier reduces them, and buying the blender with cash only swaps cash for equipment: the total does not move.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-equation',
  },

  // ═════════════════════════ L1-07 ═════════════════════════
  {
    id: 'N1B-008',
    level: 1,
    module: 'L1-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué organismo emite las Normas de Información Financiera (NIF) que se aplican en México?",
      en: "Which body issues the Financial Reporting Standards (NIF) applied in Mexico?",
    },
    options: [
      { id: 'N1B-008-a', text: { es: "El SAT (Servicio de Administración Tributaria)", en: "The SAT (Mexican Tax Administration Service)" } },
      { id: 'N1B-008-b', text: { es: "El Banco de México", en: "Banco de México (the central bank)" } },
      { id: 'N1B-008-c', text: { es: "El CINIF (Consejo Mexicano de Normas de Información Financiera)", en: "CINIF (Mexican Financial Reporting Standards Board)" } },
      { id: 'N1B-008-d', text: { es: "Cada empresa emite sus propias NIF", en: "Each company issues its own NIF" } },
    ],
    correctOptionId: 'N1B-008-c',
    explanation: {
      es: "Las NIF las emite el CINIF, un organismo independiente. El SAT aplica las leyes fiscales (impuestos), no las NIF, y Banco de México se encarga de la política monetaria. Si cada empresa tuviera sus propias reglas, la información no sería comparable.",
      en: "The NIF are issued by CINIF, an independent body. The SAT applies tax laws, not the NIF, and Banco de México handles monetary policy. If each company had its own rules, information would not be comparable.",
    },
    difficulty: 1,
    points: 10,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-009',
    level: 1,
    module: 'L1-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Las NIF son lo mismo que las leyes fiscales: si sigues las NIF, tu utilidad contable siempre será igual a la utilidad para pagar impuestos.",
      en: "The NIF are the same as tax laws: if you follow the NIF, your accounting profit will always equal your taxable profit.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las NIF son normas contables del CINIF; los impuestos se rigen por leyes fiscales que aplica el SAT. Persiguen fines distintos, por lo que la utilidad contable y la fiscal pueden ser diferentes.",
      en: "False. The NIF are CINIF accounting standards; taxes are governed by tax laws applied by the SAT. They have different purposes, so accounting profit and taxable profit can differ.",
    },
    difficulty: 1,
    points: 10,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-010',
    level: 1,
    module: 'L1-07',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Relaciona cada situación con el postulado básico que aplica.",
      en: "Match each situation with the basic postulate that applies.",
    },
    categories: [
      { id: 'N1B-010-c1', label: { es: "Entidad económica", en: "Economic entity" } },
      { id: 'N1B-010-c2', label: { es: "Negocio en marcha", en: "Going concern" } },
      { id: 'N1B-010-c3', label: { es: "Devengación contable", en: "Accrual" } },
    ],
    items: [
      { id: 'N1B-010-i1', label: { es: "El dueño de una tortillería no registra como gasto del negocio la renta de su casa.", en: "A tortilla shop owner does not record his home rent as a business expense." }, correctCategoryId: 'N1B-010-c1' },
      { id: 'N1B-010-i2', label: { es: "Una venta de diciembre se registra en diciembre aunque se cobre en enero.", en: "A December sale is recorded in December even though it is collected in January." }, correctCategoryId: 'N1B-010-c3' },
      { id: 'N1B-010-i3', label: { es: "Se valúan los activos suponiendo que la empresa seguirá operando muchos años.", en: "Assets are measured assuming the company will keep operating for many years." }, correctCategoryId: 'N1B-010-c2' },
      { id: 'N1B-010-i4', label: { es: "La luz que consumió el taller en junio es gasto de junio, aunque el recibo se pague en julio.", en: "The electricity the workshop used in June is a June expense, even if the bill is paid in July." }, correctCategoryId: 'N1B-010-c3' },
      { id: 'N1B-010-i5', label: { es: "Las cuentas de banco personales de los socios no forman parte de la contabilidad de la empresa.", en: "The partners' personal bank accounts are not part of the company's accounting." }, correctCategoryId: 'N1B-010-c1' },
    ],
    explanation: {
      es: "Separar lo personal del negocio es entidad económica (i1, i5). Registrar cuando ocurre, no cuando se cobra o paga, es devengación (i2, i4). Suponer que la empresa seguirá operando es negocio en marcha (i3). Error común: confundir devengación con el momento del cobro.",
      en: "Separating personal matters from the business is economic entity (i1, i5). Recording when it happens, not when collected or paid, is accrual (i2, i4). Assuming the company will keep operating is going concern (i3). Common mistake: confusing accrual with the moment of collection.",
    },
    difficulty: 2,
    points: 15,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-011',
    level: 1,
    module: 'L1-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Una imprenta entrega unas lonas el 30 de junio y el cliente las paga el 10 de julio. Según la devengación contable, ¿en qué mes se registra el ingreso?",
      en: "A print shop delivers some banners on June 30 and the customer pays for them on July 10. Under accrual accounting, in which month is the revenue recorded?",
    },
    options: [
      { id: 'N1B-011-a', text: { es: "En junio, cuando se entregó el trabajo", en: "In June, when the work was delivered" } },
      { id: 'N1B-011-b', text: { es: "En julio, cuando se cobra", en: "In July, when it is collected" } },
      { id: 'N1B-011-c', text: { es: "La mitad en junio y la mitad en julio", en: "Half in June and half in July" } },
      { id: 'N1B-011-d', text: { es: "Solo cuando se pague el impuesto correspondiente", en: "Only when the related tax is paid" } },
    ],
    correctOptionId: 'N1B-011-a',
    explanation: {
      es: "La devengación reconoce el ingreso cuando se entrega el trabajo (junio), no cuando entra el dinero. En julio solo se registra el cobro de lo que el cliente debía. Error común: confundir ingreso con cobro.",
      en: "Accrual recognizes revenue when the work is delivered (June), not when the money comes in. In July only the collection of what the customer owed is recorded. Common mistake: confusing revenue with collection.",
    },
    difficulty: 1,
    points: 10,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-012',
    level: 1,
    module: 'L1-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En noviembre una lavandería presta servicios por $38,000: cobra $30,000 en efectivo y $8,000 quedan pendientes de cobro a un hotel. También en noviembre cobra $5,000 de servicios que prestó en octubre.",
      en: "In November a laundry provides services worth $38,000: it collects $30,000 in cash and $8,000 is still owed by a hotel. Also in November it collects $5,000 for services it provided in October.",
    },
    prompt: {
      es: "Aplicando la devengación contable, ¿cuánto ingreso corresponde a noviembre? Responde en pesos.",
      en: "Applying accrual accounting, how much revenue belongs to November? Answer in pesos.",
    },
    answer: 38000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Se reconocen los servicios prestados en noviembre: 30,000 + 8,000 = $38,000, aunque $8,000 aún no se cobren. Los $5,000 son ingreso de octubre. Errores comunes: contar solo lo cobrado (30,000) o sumar el cobro de octubre (35,000 o 43,000).",
      en: "Services provided in November are recognized: 30,000 + 8,000 = $38,000, even though $8,000 is not yet collected. The $5,000 is October revenue. Common mistakes: counting only what was collected (30,000) or adding the October collection (35,000 or 43,000).",
    },
    difficulty: 2,
    points: 15,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-013',
    level: 1,
    module: 'L1-07',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de los siguientes son postulados básicos de las NIF? Selecciona todas las que apliquen.",
      en: "Which of the following are basic postulates of the NIF? Select all that apply.",
    },
    options: [
      { id: 'N1B-013-a', text: { es: "Entidad económica", en: "Economic entity" } },
      { id: 'N1B-013-b', text: { es: "Negocio en marcha", en: "Going concern" } },
      { id: 'N1B-013-c', text: { es: "Máxima ganancia", en: "Maximum profit" } },
      { id: 'N1B-013-d', text: { es: "Dualidad económica", en: "Economic duality" } },
      { id: 'N1B-013-e', text: { es: "Pago anticipado de impuestos", en: "Prepayment of taxes" } },
      { id: 'N1B-013-f', text: { es: "Devengación contable", en: "Accrual" } },
    ],
    correctOptionIds: ['N1B-013-a', 'N1B-013-b', 'N1B-013-d', 'N1B-013-f'],
    explanation: {
      es: "Entidad económica, negocio en marcha, dualidad económica y devengación contable son postulados básicos del Marco Conceptual de las NIF. \"Máxima ganancia\" es una meta de negocio, no una regla contable, y el pago de impuestos lo regulan las leyes fiscales.",
      en: "Economic entity, going concern, economic duality and accrual are basic postulates of the NIF Conceptual Framework. \"Maximum profit\" is a business goal, not an accounting rule, and tax payments are governed by tax laws.",
    },
    difficulty: 1,
    points: 10,
    competency: 'nif-basics',
  },
  {
    id: 'N1B-014',
    level: 1,
    module: 'L1-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Por el postulado de entidad económica, si la dueña de una estética paga con dinero del negocio la colegiatura de su hija, eso no es un gasto de la estética.",
      en: "Under the economic entity postulate, if a beauty salon owner uses business money to pay her daughter's tuition, that is not an expense of the salon.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El negocio y su dueña son entidades distintas. La colegiatura es un gasto personal: para la estética es un retiro de la dueña que reduce el capital, no un gasto de operación.",
      en: "True. The business and its owner are separate entities. The tuition is a personal expense: for the salon it is an owner withdrawal that reduces equity, not an operating expense.",
    },
    difficulty: 1,
    points: 10,
    competency: 'nif-basics',
  },

  // ═════════════════════════ L1-08 ═════════════════════════
  {
    id: 'N1B-015',
    level: 1,
    module: 'L1-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada cuenta de una papelería en su grupo.",
      en: "Classify each of a stationery store's accounts into its group.",
    },
    categories: [
      { id: 'N1B-015-c1', label: { es: "Activo", en: "Assets" } },
      { id: 'N1B-015-c2', label: { es: "Pasivo", en: "Liabilities" } },
      { id: 'N1B-015-c3', label: { es: "Capital", en: "Equity" } },
      { id: 'N1B-015-c4', label: { es: "Ingresos", en: "Revenue" } },
      { id: 'N1B-015-c5', label: { es: "Gastos", en: "Expenses" } },
    ],
    items: [
      { id: 'N1B-015-i1', label: { es: "Inventarios", en: "Inventory" }, correctCategoryId: 'N1B-015-c1' },
      { id: 'N1B-015-i2', label: { es: "Proveedores", en: "Accounts payable" }, correctCategoryId: 'N1B-015-c2' },
      { id: 'N1B-015-i3', label: { es: "Capital social", en: "Share capital" }, correctCategoryId: 'N1B-015-c3' },
      { id: 'N1B-015-i4', label: { es: "Ventas", en: "Sales" }, correctCategoryId: 'N1B-015-c4' },
      { id: 'N1B-015-i5', label: { es: "Sueldos y salarios", en: "Salaries and wages" }, correctCategoryId: 'N1B-015-c5' },
      { id: 'N1B-015-i6', label: { es: "Clientes", en: "Accounts receivable" }, correctCategoryId: 'N1B-015-c1' },
      { id: 'N1B-015-i7', label: { es: "Documentos por pagar", en: "Notes payable" }, correctCategoryId: 'N1B-015-c2' },
    ],
    explanation: {
      es: "Inventarios y Clientes son recursos del negocio (activo). Proveedores y Documentos por pagar son deudas (pasivo). Capital social es la aportación de los dueños. Ventas es ingreso y Sueldos es gasto. Error común: confundir Clientes (nos deben) con Proveedores (les debemos).",
      en: "Inventory and Accounts receivable are business resources (assets). Accounts payable and Notes payable are debts (liabilities). Share capital is the owners' contribution. Sales is revenue and Salaries is an expense. Common mistake: confusing receivables (they owe us) with payables (we owe them).",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-016',
    level: 1,
    module: 'L1-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "¿De qué naturaleza es la cuenta Bancos?", en: "What is the nature of the Bank account?" },
    options: [
      { id: 'N1B-016-a', text: { es: "Acreedora, porque el banco nos guarda el dinero", en: "Credit, because the bank keeps our money" } },
      { id: 'N1B-016-b', text: { es: "Deudora, porque es un activo", en: "Debit, because it is an asset" } },
      { id: 'N1B-016-c', text: { es: "Acreedora, porque es un pasivo", en: "Credit, because it is a liability" } },
      { id: 'N1B-016-d', text: { es: "Depende de si el saldo es alto o bajo", en: "It depends on whether the balance is high or low" } },
    ],
    correctOptionId: 'N1B-016-b',
    explanation: {
      es: "Bancos es el dinero del negocio depositado en el banco: es un activo y los activos son de naturaleza deudora (aumentan con cargos). Error común: pensar que es acreedora porque en el estado de cuenta del banco los depósitos aparecen como \"abonos\"; ese documento está hecho desde el punto de vista del banco.",
      en: "Bank is the business's money deposited at the bank: it is an asset, and assets have a debit nature (they increase with debits). Common mistake: thinking it is credit because deposits show up as \"credits\" on the bank statement; that document is prepared from the bank's point of view.",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-017',
    level: 1,
    module: 'L1-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica las cuentas de un taller mecánico según su naturaleza.",
      en: "Classify a car repair shop's accounts by their nature.",
    },
    categories: [
      { id: 'N1B-017-c1', label: { es: "Naturaleza deudora", en: "Debit nature" } },
      { id: 'N1B-017-c2', label: { es: "Naturaleza acreedora", en: "Credit nature" } },
    ],
    items: [
      { id: 'N1B-017-i1', label: { es: "Maquinaria", en: "Machinery" }, correctCategoryId: 'N1B-017-c1' },
      { id: 'N1B-017-i2', label: { es: "Ingresos por servicios", en: "Service revenue" }, correctCategoryId: 'N1B-017-c2' },
      { id: 'N1B-017-i3', label: { es: "Renta (gasto)", en: "Rent expense" }, correctCategoryId: 'N1B-017-c1' },
      { id: 'N1B-017-i4', label: { es: "Préstamos bancarios a largo plazo", en: "Long-term bank loans" }, correctCategoryId: 'N1B-017-c2' },
      { id: 'N1B-017-i5', label: { es: "Caja", en: "Cash on hand" }, correctCategoryId: 'N1B-017-c1' },
      { id: 'N1B-017-i6', label: { es: "Capital social", en: "Share capital" }, correctCategoryId: 'N1B-017-c2' },
    ],
    explanation: {
      es: "Deudoras: activos (Maquinaria, Caja) y gastos (Renta). Acreedoras: pasivos (Préstamos bancarios), capital (Capital social) e ingresos (Ingresos por servicios). Error común: pensar que los gastos son acreedores porque \"sale dinero\"; el gasto en sí crece con cargos.",
      en: "Debit: assets (Machinery, Cash on hand) and expenses (Rent). Credit: liabilities (Bank loans), equity (Share capital) and revenue (Service revenue). Common mistake: thinking expenses are credit because \"money goes out\"; the expense itself grows with debits.",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-018',
    level: 1,
    module: 'L1-08',
    kind: 'numeric',
    flavor: 'tAccount',
    context: {
      es: "La cuenta Proveedores de una cafetería tiene abonos por $30,000 y $12,000 (compras a crédito) y un cargo por $18,000 (pago).",
      en: "A coffee shop's Accounts payable account has credits of $30,000 and $12,000 (credit purchases) and one debit of $18,000 (payment).",
    },
    prompt: { es: "¿Cuál es el saldo acreedor de Proveedores? Responde en pesos.", en: "What is the credit balance of Accounts payable? Answer in pesos." },
    answer: 24000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Proveedores es acreedora: saldo = abonos − cargos = (30,000 + 12,000) − 18,000 = $24,000. Es lo que la cafetería aún debe. Error común: restar al revés y obtener un número negativo.",
      en: "Accounts payable has a credit nature: balance = credits − debits = (30,000 + 12,000) − 18,000 = $24,000. That is what the coffee shop still owes. Common mistake: subtracting the other way around and getting a negative number.",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-019',
    level: 1,
    module: 'L1-08',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: {
      es: "Si al final del día la cuenta Caja de una tiendita muestra saldo acreedor, lo más probable es que haya un error de registro.",
      en: "If at the end of the day a corner store's Cash on hand account shows a credit balance, there is most likely a recording error.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Caja es activo (deudora) y su saldo representa los billetes y monedas que hay. Un saldo acreedor significaría que salió más efectivo del que entró, lo cual es imposible: hay que revisar los registros.",
      en: "True. Cash on hand is an asset (debit nature) and its balance represents the bills and coins on hand. A credit balance would mean more cash went out than came in, which is impossible: the records need to be reviewed.",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-020',
    level: 1,
    module: 'L1-08',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para calcular el saldo de una cuenta de naturaleza acreedora.",
      en: "Complete the formula to calculate the balance of a credit-nature account.",
    },
    template: 'Saldo acreedor = {{b1}} − {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1B-020-b1-a', text: { es: "Suma de cargos", en: "Total debits" } },
          { id: 'N1B-020-b1-b', text: { es: "Suma de abonos", en: "Total credits" } },
          { id: 'N1B-020-b1-c', text: { es: "Saldo deudor", en: "Debit balance" } },
        ],
        correctOptionId: 'N1B-020-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1B-020-b2-a', text: { es: "Suma de cargos", en: "Total debits" } },
          { id: 'N1B-020-b2-b', text: { es: "Suma de abonos", en: "Total credits" } },
          { id: 'N1B-020-b2-c', text: { es: "Total del activo", en: "Total assets" } },
        ],
        correctOptionId: 'N1B-020-b2-a',
      },
    ],
    explanation: {
      es: "Una cuenta acreedora crece con abonos y baja con cargos, así que su saldo = suma de abonos − suma de cargos. Error común: usar la fórmula de las deudoras (cargos − abonos), que daría un resultado negativo.",
      en: "A credit-nature account grows with credits and shrinks with debits, so its balance = total credits − total debits. Common mistake: using the debit-nature formula (debits − credits), which would give a negative result.",
    },
    difficulty: 1,
    points: 10,
    competency: 'account-nature',
  },
  {
    id: 'N1B-021',
    level: 1,
    module: 'L1-08',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "La cuenta Clientes de un despacho inicia el mes con saldo de $8,000. Durante el mes hay ventas a crédito por $15,000 (cargos) y cobros por $11,000 (abonos).",
      en: "A firm's Accounts receivable account starts the month with an $8,000 balance. During the month there are credit sales of $15,000 (debits) and collections of $11,000 (credits).",
    },
    prompt: { es: "Calcula los totales y el saldo final de Clientes.", en: "Calculate the totals and the ending balance of Accounts receivable." },
    fields: [
      { id: 'f1', label: { es: "Total de cargos (incluye saldo inicial)", en: "Total debits (including opening balance)" }, answer: 23000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Total de abonos", en: "Total credits" }, answer: 11000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo deudor final", en: "Ending debit balance" }, answer: 12000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Clientes es activo (deudora): el saldo inicial va con los cargos. Cargos = 8,000 + 15,000 = 23,000; abonos = 11,000; saldo = 23,000 − 11,000 = $12,000 deudor. Error común: olvidar el saldo inicial y obtener 4,000.",
      en: "Accounts receivable is an asset (debit nature): the opening balance goes with the debits. Debits = 8,000 + 15,000 = 23,000; credits = 11,000; balance = 23,000 − 11,000 = $12,000 debit. Common mistake: forgetting the opening balance and getting 4,000.",
    },
    difficulty: 2,
    points: 15,
    competency: 'account-nature',
  },

  // ═════════════════════════ L1-09 ═════════════════════════
  {
    id: 'N1B-022',
    level: 1,
    module: 'L1-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: { es: "En una cuenta, ¿qué es el \"debe\"?", en: "In an account, what is the \"debit side\" (debe)?" },
    options: [
      { id: 'N1B-022-a', text: { es: "El lado derecho, donde se anotan los abonos", en: "The right side, where credits are written" } },
      { id: 'N1B-022-b', text: { es: "Lo que el negocio le debe a otros", en: "What the business owes to others" } },
      { id: 'N1B-022-c', text: { es: "El lado izquierdo, donde se anotan los cargos", en: "The left side, where debits are written" } },
      { id: 'N1B-022-d', text: { es: "El saldo final de la cuenta", en: "The account's ending balance" } },
    ],
    correctOptionId: 'N1B-022-c',
    explanation: {
      es: "El debe es el lado izquierdo de la cuenta y ahí se anotan los cargos; el haber es el lado derecho (abonos). Error común: creer que \"debe\" significa deuda; las deudas son el pasivo, que de hecho crece del lado del haber.",
      en: "The debit side (debe) is the left side of the account, where debits are written; the credit side (haber) is the right side. Common mistake: thinking \"debe\" means debt; debts are liabilities, which actually grow on the credit side.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-023',
    level: 1,
    module: 'L1-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En contabilidad, hacer un abono a una cuenta siempre significa que entró dinero al negocio.",
      en: "In accounting, crediting an account always means money came into the business.",
    },
    answer: false,
    explanation: {
      es: "Falso. Abonar solo significa anotar del lado derecho. Por ejemplo, cuando pagas la renta se abona Bancos y el dinero sale. Si la cuenta sube o baja depende de su naturaleza.",
      en: "False. Crediting only means writing on the right side. For example, when you pay rent you credit Bank and money goes out. Whether the account goes up or down depends on its nature.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-024',
    level: 1,
    module: 'L1-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Indica si cada movimiento se registra con cargo o con abono.",
      en: "Indicate whether each movement is recorded with a debit or a credit.",
    },
    categories: [
      { id: 'N1B-024-c1', label: { es: "Cargo", en: "Debit" } },
      { id: 'N1B-024-c2', label: { es: "Abono", en: "Credit" } },
    ],
    items: [
      { id: 'N1B-024-i1', label: { es: "Aumento en Caja", en: "Increase in Cash on hand" }, correctCategoryId: 'N1B-024-c1' },
      { id: 'N1B-024-i2', label: { es: "Aumento en Proveedores", en: "Increase in Accounts payable" }, correctCategoryId: 'N1B-024-c2' },
      { id: 'N1B-024-i3', label: { es: "Disminución en Bancos", en: "Decrease in Bank" }, correctCategoryId: 'N1B-024-c2' },
      { id: 'N1B-024-i4', label: { es: "Aumento en Renta (gasto)", en: "Increase in Rent expense" }, correctCategoryId: 'N1B-024-c1' },
      { id: 'N1B-024-i5', label: { es: "Aumento en Ingresos por servicios", en: "Increase in Service revenue" }, correctCategoryId: 'N1B-024-c2' },
      { id: 'N1B-024-i6', label: { es: "Disminución en Documentos por pagar", en: "Decrease in Notes payable" }, correctCategoryId: 'N1B-024-c1' },
    ],
    explanation: {
      es: "Deudoras (Caja, Bancos, Renta): suben con cargo y bajan con abono. Acreedoras (Proveedores, Ingresos, Documentos por pagar): suben con abono y bajan con cargo. Error común: abonar la disminución de un pasivo; al pagar una deuda, el pasivo se carga.",
      en: "Debit-nature accounts (Cash, Bank, Rent): up with a debit, down with a credit. Credit-nature accounts (Accounts payable, Revenue, Notes payable): up with a credit, down with a debit. Common mistake: crediting a decrease in a liability; when you pay a debt, the liability is debited.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-025',
    level: 1,
    module: 'L1-09',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos movimientos se registran con un ABONO? Selecciona todas las que apliquen.",
      en: "Which of these movements are recorded with a CREDIT? Select all that apply.",
    },
    options: [
      { id: 'N1B-025-a', text: { es: "Aumento en Préstamos bancarios", en: "Increase in Bank loans" } },
      { id: 'N1B-025-b', text: { es: "Disminución en Inventarios", en: "Decrease in Inventory" } },
      { id: 'N1B-025-c', text: { es: "Aumento en Mobiliario y equipo", en: "Increase in Furniture and equipment" } },
      { id: 'N1B-025-d', text: { es: "Aumento en Ventas", en: "Increase in Sales" } },
      { id: 'N1B-025-e', text: { es: "Disminución en Proveedores", en: "Decrease in Accounts payable" } },
    ],
    correctOptionIds: ['N1B-025-a', 'N1B-025-b', 'N1B-025-d'],
    explanation: {
      es: "Se abona para aumentar cuentas acreedoras (Préstamos, Ventas) y para disminuir cuentas deudoras (Inventarios). El aumento de Mobiliario (activo) y la disminución de Proveedores (pasivo) se registran con cargo.",
      en: "You credit to increase credit-nature accounts (Loans, Sales) and to decrease debit-nature accounts (Inventory). The increase in Furniture (asset) and the decrease in Accounts payable (liability) are recorded with debits.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-026',
    level: 1,
    module: 'L1-09',
    kind: 'mcq',
    flavor: 'case',
    prompt: {
      es: "Una cafetería paga en efectivo el recibo de luz del mes por $1,800. ¿Qué se carga y qué se abona?",
      en: "A coffee shop pays this month's $1,800 electricity bill in cash. What is debited and what is credited?",
    },
    options: [
      { id: 'N1B-026-a', text: { es: "Cargo a Caja y abono a Luz, agua y teléfono", en: "Debit Cash on hand and credit Utilities" } },
      { id: 'N1B-026-b', text: { es: "Cargo a Luz, agua y teléfono y abono a Caja", en: "Debit Utilities and credit Cash on hand" } },
      { id: 'N1B-026-c', text: { es: "Cargo a Luz, agua y teléfono y abono a Ventas", en: "Debit Utilities and credit Sales" } },
      { id: 'N1B-026-d', text: { es: "Cargo a Proveedores y abono a Caja", en: "Debit Accounts payable and credit Cash on hand" } },
    ],
    correctOptionId: 'N1B-026-b',
    explanation: {
      es: "El gasto de luz aumenta (deudora) → cargo. Caja disminuye porque sale efectivo (deudora que baja) → abono. Error común: invertir los lados pensando que \"cargo\" significa \"sale dinero\". Proveedores no aplica porque no había deuda previa.",
      en: "The utilities expense increases (debit nature) → debit. Cash on hand decreases because cash goes out (a debit-nature account going down) → credit. Common mistake: reversing the sides thinking \"debit\" means \"money out\". Accounts payable does not apply because there was no prior debt.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-027',
    level: 1,
    module: 'L1-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Una tiendita vende mercancía a crédito a un cliente frecuente. ¿Qué le pasa a la cuenta Clientes?",
      en: "A corner store sells goods on credit to a regular customer. What happens to the Accounts receivable account?",
    },
    options: [
      { id: 'N1B-027-a', text: { es: "Se abona, porque el cliente se lleva la mercancía", en: "It is credited, because the customer takes the goods" } },
      { id: 'N1B-027-b', text: { es: "No se mueve hasta que el cliente pague", en: "It does not move until the customer pays" } },
      { id: 'N1B-027-c', text: { es: "Se carga, porque aumenta lo que nos deben", en: "It is debited, because what we are owed increases" } },
      { id: 'N1B-027-d', text: { es: "Se abona, porque es un pasivo", en: "It is credited, because it is a liability" } },
    ],
    correctOptionId: 'N1B-027-c',
    explanation: {
      es: "Clientes es un activo (derecho de cobro) y aumenta con la venta a crédito, así que se carga. Se abonará cuando el cliente pague. Error común: confundir Clientes (nos deben) con un pasivo.",
      en: "Accounts receivable is an asset (a right to collect) and it increases with the credit sale, so it is debited. It will be credited when the customer pays. Common mistake: confusing receivables (owed to us) with a liability.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debits-credits',
  },
  {
    id: 'N1B-028',
    level: 1,
    module: 'L1-09',
    kind: 'classify',
    flavor: 'case',
    context: {
      es: "Un taller liquida con transferencia un préstamo bancario de $12,000.",
      en: "A workshop pays off a $12,000 bank loan by transfer.",
    },
    prompt: {
      es: "Para esta operación, indica qué le pasa a cada cuenta y de qué lado se anota.",
      en: "For this transaction, indicate what happens to each account and which side it is written on.",
    },
    categories: [
      { id: 'N1B-028-c1', label: { es: "Disminuye y se carga", en: "Decreases and is debited" } },
      { id: 'N1B-028-c2', label: { es: "Disminuye y se abona", en: "Decreases and is credited" } },
      { id: 'N1B-028-c3', label: { es: "No se afecta", en: "Not affected" } },
    ],
    items: [
      { id: 'N1B-028-i1', label: { es: "Préstamos bancarios", en: "Bank loans" }, correctCategoryId: 'N1B-028-c1' },
      { id: 'N1B-028-i2', label: { es: "Bancos", en: "Bank" }, correctCategoryId: 'N1B-028-c2' },
      { id: 'N1B-028-i3', label: { es: "Capital social", en: "Share capital" }, correctCategoryId: 'N1B-028-c3' },
      { id: 'N1B-028-i4', label: { es: "Ingresos por servicios", en: "Service revenue" }, correctCategoryId: 'N1B-028-c3' },
    ],
    explanation: {
      es: "Préstamos bancarios (acreedora) disminuye → cargo. Bancos (deudora) disminuye → abono. Ambas bajan, pero de lados distintos porque tienen naturaleza distinta. Pagar una deuda no afecta el capital ni los ingresos.",
      en: "Bank loans (credit nature) decrease → debit. Bank (debit nature) decreases → credit. Both go down, but on different sides because they have different natures. Paying a debt affects neither equity nor revenue.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debits-credits',
  },

  // ═════════════════════════ L1-10 ═════════════════════════
  {
    id: 'N1B-029',
    level: 1,
    module: 'L1-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Según la partida doble, toda operación afecta al menos dos cuentas.",
      en: "Under double entry, every transaction affects at least two accounts.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Toda operación tiene al menos dos efectos (lo que se recibe y lo que se entrega o se debe), así que se registra en al menos dos cuentas: una o más con cargo y una o más con abono.",
      en: "True. Every transaction has at least two effects (what is received and what is given or owed), so it is recorded in at least two accounts: one or more debited and one or more credited.",
    },
    difficulty: 1,
    points: 10,
    competency: 'double-entry',
  },
  {
    id: 'N1B-030',
    level: 1,
    module: 'L1-10',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "Don Pepe abre su tiendita aportando $50,000 en efectivo, que guarda en la caja del negocio. Registra el asiento.",
      en: "Don Pepe opens his corner store by contributing $50,000 in cash, which he keeps in the store's register. Record the entry.",
    },
    accountChoices: ['1101', '1102', '1108', '2101', '3101', '4101'],
    expected: [
      { accountCode: '1101', side: 'D', amount: 50000 },
      { accountCode: '3101', side: 'C', amount: 50000 },
    ],
    explanation: {
      es: "Caja (activo) aumenta → cargo $50,000. El dinero lo puso el dueño, así que aumenta Capital social → abono $50,000. No es Ventas (no se vendió nada) ni Bancos (el dinero está en la caja). Cargos 50,000 = abonos 50,000.",
      en: "Cash on hand (asset) increases → debit $50,000. The owner put in the money, so Share capital increases → credit $50,000. It is not Sales (nothing was sold) nor Bank (the money is in the register). Debits 50,000 = credits 50,000.",
    },
    difficulty: 1,
    points: 10,
    competency: 'double-entry',
  },
  {
    id: 'N1B-031',
    level: 1,
    module: 'L1-10',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "La tiendita compra a crédito mercancía por $12,000 a su proveedor de abarrotes. Registra el asiento (sin IVA).",
      en: "The corner store buys $12,000 of goods on credit from its grocery supplier. Record the entry (no VAT).",
    },
    accountChoices: ['1101', '1104', '1108', '2101', '2103', '5101'],
    expected: [
      { accountCode: '1108', side: 'D', amount: 12000 },
      { accountCode: '2101', side: 'C', amount: 12000 },
    ],
    explanation: {
      es: "Inventarios (activo) aumenta → cargo $12,000. Nace una deuda con el proveedor → abono a Proveedores $12,000. No se toca Caja porque no se pagó, y no es Costo de ventas porque la mercancía aún no se vende.",
      en: "Inventory (asset) increases → debit $12,000. A debt to the supplier is born → credit Accounts payable $12,000. Cash is not touched because nothing was paid, and it is not COGS because the goods have not been sold yet.",
    },
    difficulty: 1,
    points: 10,
    competency: 'double-entry',
  },
  {
    id: 'N1B-032',
    level: 1,
    module: 'L1-10',
    kind: 'journal',
    flavor: 'case',
    prompt: {
      es: "Una cafetería compra una computadora de $18,000: paga $8,000 por transferencia y el resto lo queda a deber a la tienda de cómputo (acreedor diverso). Registra el asiento (sin IVA).",
      en: "A coffee shop buys an $18,000 computer: it pays $8,000 by transfer and owes the rest to the computer store (other payable). Record the entry (no VAT).",
    },
    accountChoices: ['1101', '1102', '1108', '1205', '2102', '6103'],
    expected: [
      { accountCode: '1205', side: 'D', amount: 18000 },
      { accountCode: '1102', side: 'C', amount: 8000 },
      { accountCode: '2102', side: 'C', amount: 10000 },
    ],
    explanation: {
      es: "Asiento compuesto: cargo a Equipo de cómputo $18,000; abono a Bancos $8,000 y a Acreedores diversos 18,000 − 8,000 = $10,000. Cargos 18,000 = abonos 18,000. Error común: registrar solo lo pagado ($8,000) como valor de la computadora.",
      en: "Compound entry: debit Computer equipment $18,000; credit Bank $8,000 and Other payables 18,000 − 8,000 = $10,000. Debits 18,000 = credits 18,000. Common mistake: recording only the amount paid ($8,000) as the computer's value.",
    },
    difficulty: 2,
    points: 15,
    competency: 'double-entry',
  },
  {
    id: 'N1B-033',
    level: 1,
    module: 'L1-10',
    kind: 'numeric',
    flavor: 'concept',
    context: {
      es: "En un asiento se cargan Mobiliario y equipo de oficina por $15,000 y Papelería y útiles por $2,000. Se abona Bancos por $9,000 y el resto a Acreedores diversos.",
      en: "An entry debits Office furniture and equipment for $15,000 and Office supplies for $2,000. Bank is credited for $9,000 and the rest goes to Other payables.",
    },
    prompt: {
      es: "¿Por cuánto se debe abonar Acreedores diversos para que el asiento cuadre? Responde en pesos.",
      en: "How much must Other payables be credited for the entry to balance? Answer in pesos.",
    },
    answer: 8000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Cargos = 15,000 + 2,000 = 17,000. Para cuadrar, los abonos deben sumar 17,000: 17,000 − 9,000 = $8,000. Error común: restar solo el mobiliario (15,000 − 9,000 = 6,000) y olvidar la papelería.",
      en: "Debits = 15,000 + 2,000 = 17,000. To balance, credits must total 17,000: 17,000 − 9,000 = $8,000. Common mistake: subtracting only the furniture (15,000 − 9,000 = 6,000) and forgetting the supplies.",
    },
    difficulty: 2,
    points: 15,
    competency: 'double-entry',
  },
  {
    id: 'N1B-034',
    level: 1,
    module: 'L1-10',
    kind: 'mcq',
    flavor: 'case',
    prompt: {
      es: "Una estética cobra por transferencia $6,000 que le debía una clienta por un servicio del mes pasado. ¿Cuál asiento es correcto?",
      en: "A beauty salon collects by transfer $6,000 a client owed for last month's service. Which entry is correct?",
    },
    options: [
      { id: 'N1B-034-a', text: { es: "Cargo Bancos $6,000 / abono Ingresos por servicios $6,000", en: "Debit Bank $6,000 / credit Service revenue $6,000" } },
      { id: 'N1B-034-b', text: { es: "Cargo Clientes $6,000 / abono Bancos $6,000", en: "Debit Accounts receivable $6,000 / credit Bank $6,000" } },
      { id: 'N1B-034-c', text: { es: "Cargo Bancos $6,000 / abono Clientes $6,000", en: "Debit Bank $6,000 / credit Accounts receivable $6,000" } },
      { id: 'N1B-034-d', text: { es: "Cargo Bancos $6,000 / abono Clientes $3,000", en: "Debit Bank $6,000 / credit Accounts receivable $3,000" } },
    ],
    correctOptionId: 'N1B-034-c',
    explanation: {
      es: "Bancos aumenta (cargo) y Clientes disminuye porque la clienta ya pagó (abono), ambos por $6,000. El ingreso ya se registró el mes pasado, cuando se prestó el servicio; registrarlo otra vez lo duplicaría. La opción d ni siquiera cuadra.",
      en: "Bank increases (debit) and Accounts receivable decreases because the client has paid (credit), both for $6,000. The revenue was already recorded last month, when the service was performed; recording it again would double it. Option d does not even balance.",
    },
    difficulty: 2,
    points: 15,
    competency: 'double-entry',
  },
  {
    id: 'N1B-035',
    level: 1,
    module: 'L1-10',
    kind: 'journal',
    flavor: 'concept',
    prompt: {
      es: "Un taller cambia el aceite de un coche y cobra $3,500 en efectivo en ese momento. Registra el asiento (sin IVA).",
      en: "A workshop changes a car's oil and collects $3,500 in cash on the spot. Record the entry (no VAT).",
    },
    accountChoices: ['1101', '1102', '1104', '3101', '4101', '4102'],
    expected: [
      { accountCode: '1101', side: 'D', amount: 3500 },
      { accountCode: '4102', side: 'C', amount: 3500 },
    ],
    explanation: {
      es: "Caja (activo) aumenta → cargo $3,500. Se prestó un servicio → abono a Ingresos por servicios $3,500. No es Clientes porque ya se cobró, ni Capital social porque el dinero no lo aportó el dueño. Ventas se usa para mercancía, no para servicios.",
      en: "Cash on hand (asset) increases → debit $3,500. A service was performed → credit Service revenue $3,500. It is not Accounts receivable because it was already collected, nor Share capital because the owner did not contribute the money. Sales is used for goods, not services.",
    },
    difficulty: 1,
    points: 10,
    competency: 'double-entry',
  },
  {
    id: 'N1B-036',
    level: 1,
    module: 'L1-10',
    kind: 'multi',
    flavor: 'interpret',
    prompt: {
      es: "¿Cuáles de estos asientos cumplen la igualdad entre cargos y abonos? Selecciona todas las que apliquen.",
      en: "Which of these entries meet the equality of debits and credits? Select all that apply.",
    },
    options: [
      { id: 'N1B-036-a', text: { es: "Cargo Inventarios 4,000 / abono Caja 1,000 y Proveedores 3,000", en: "Debit Inventory 4,000 / credit Cash 1,000 and Accounts payable 3,000" } },
      { id: 'N1B-036-b', text: { es: "Cargo Renta 7,000 / abono Bancos 7,500", en: "Debit Rent 7,000 / credit Bank 7,500" } },
      { id: 'N1B-036-c', text: { es: "Cargo Caja 2,000 y Clientes 3,000 / abono Ventas 5,000", en: "Debit Cash 2,000 and Accounts receivable 3,000 / credit Sales 5,000" } },
      { id: 'N1B-036-d', text: { es: "Cargo Maquinaria 9,000 / abono Bancos 4,000 y Acreedores diversos 4,000", en: "Debit Machinery 9,000 / credit Bank 4,000 and Other payables 4,000" } },
    ],
    correctOptionIds: ['N1B-036-a', 'N1B-036-c'],
    explanation: {
      es: "a: 4,000 = 1,000 + 3,000 ✔. c: 2,000 + 3,000 = 5,000 ✔. b: 7,000 ≠ 7,500 ✘. d: 9,000 ≠ 8,000 ✘. Error común: fijarse solo en que haya un cargo y un abono sin sumar los importes.",
      en: "a: 4,000 = 1,000 + 3,000 ✔. c: 2,000 + 3,000 = 5,000 ✔. b: 7,000 ≠ 7,500 ✘. d: 9,000 ≠ 8,000 ✘. Common mistake: checking only that there is a debit and a credit without adding up the amounts.",
    },
    difficulty: 2,
    points: 15,
    competency: 'double-entry',
  },
]
