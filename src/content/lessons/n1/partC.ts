import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Nivel 1, parte C: temas 1.11 a 1.15
 * (Cuentas T, ciclo contable, estados financieros, utilidad vs. flujo de efectivo y proyecto integrador).
 */

const NOTE_NIF = {
  es: "Contenido educativo basado en las Normas de Información Financiera (NIF) emitidas por el CINIF (México). Las normas se actualizan: verifica la versión vigente de las NIF a la fecha en que las consultes (2026).",
  en: "Educational content based on the Mexican Financial Reporting Standards (NIF) issued by CINIF. Standards are updated: verify the current version of the NIF as of the date you consult them (2026).",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── L1-11 ─────────────────────────────
  {
    id: 'L1-11',
    level: 1,
    topicIds: ['1.11'],
    title: { es: "Cuentas T", en: "T-accounts" },
    summary: {
      es: "La cuenta T es un dibujo sencillo para ver todos los movimientos de una cuenta y calcular su saldo.",
      en: "The T-account is a simple drawing to see all the movements of one account and work out its balance.",
    },
    minutes: 15,
    objectives: [
      { es: "Describir las partes de una cuenta T: nombre, debe y haber.", en: "Describe the parts of a T-account: name, debit side and credit side." },
      { es: "Anotar cargos y abonos en la cuenta T correcta.", en: "Post debits and credits to the right T-account." },
      { es: "Calcular sumas y saldo de una cuenta T.", en: "Compute the totals and the balance of a T-account." },
      { es: "Identificar si un saldo es deudor, acreedor o si la cuenta está saldada.", en: "Tell whether a balance is a debit balance, a credit balance or zero." },
    ],
    theory: [
      {
        heading: { es: "Estructura y funcionamiento de la cuenta T", en: "Structure and use of the T-account" },
        body: [
          {
            es: "Una **cuenta T** es un dibujo con forma de letra T que sirve para ver los movimientos de **una sola cuenta**. Arriba va el nombre (por ejemplo, Caja). El lado izquierdo se llama **debe** y ahí van los **cargos**. El lado derecho se llama **haber** y ahí van los **abonos**.",
            en: "A **T-account** is a drawing shaped like the letter T used to see the movements of **a single account**. The name goes on top (for example, Cash on hand). The left side is called the **debit side** and holds the **debits**. The right side is called the **credit side** and holds the **credits**.",
          },
          {
            es: "Piénsalo como una hoja de tu libreta dividida en dos: de un lado anotas lo que entra a tu cartera y del otro lo que sale. Al final del día comparas los dos lados y sabes cuánto te queda.",
            en: "Think of it as a page in your notebook split in two: on one side you write what comes into your wallet and on the other what goes out. At the end of the day you compare both sides and know how much you have left.",
          },
          {
            es: "Cada cuenta tiene su propia T, y el conjunto de todas las cuentas T forma el **libro mayor**. Recuerda la naturaleza: en las cuentas de **activo** y **gasto**, los aumentos van al debe; en las de **pasivo**, **capital** e **ingreso**, los aumentos van al haber.",
            en: "Each account has its own T, and all the T-accounts together form the **general ledger**. Remember the nature: in **asset** and **expense** accounts, increases go on the debit side; in **liability**, **equity** and **revenue** accounts, increases go on the credit side.",
          },
        ],
        formula: "NOMBRE DE LA CUENTA\nDebe (cargos) | Haber (abonos)",
        bullets: [
          { es: "Arriba: el nombre de la cuenta.", en: "Top: the account name." },
          { es: "Izquierda: debe = cargos.", en: "Left: debit side = debits." },
          { es: "Derecha: haber = abonos.", en: "Right: credit side = credits." },
          { es: "El saldo inicial se anota del lado de la naturaleza de la cuenta.", en: "The opening balance goes on the side of the account's normal balance." },
          { es: "Una cuenta T por cada cuenta que usa el negocio.", en: "One T-account for each account the business uses." },
        ],
      },
      {
        heading: { es: "Registro de movimientos", en: "Posting movements" },
        body: [
          {
            es: "Registrar en cuentas T se llama **pasar** o **traspasar** los asientos. Tomas cada línea del asiento y la escribes en la cuenta T que corresponde, del mismo lado: si el asiento dice cargo a Caja, lo anotas en el debe de Caja.",
            en: "Recording in T-accounts is called **posting** the entries. You take each line of the entry and write it in the matching T-account, on the same side: if the entry says debit Cash on hand, you write it on the debit side of Cash on hand.",
          },
          {
            es: "Como cada operación tiene al menos un cargo y un abono, **cada asiento toca al menos dos cuentas T**. Para no perderte, pon junto a cada importe el número de la operación, por ejemplo (1), (2), (3).",
            en: "Because every transaction has at least one debit and one credit, **each entry touches at least two T-accounts**. To keep track, write the transaction number next to each amount, for example (1), (2), (3).",
          },
          {
            es: "Mini ejemplo: la tiendita de Doña Lupe vende $800 de abarrotes en efectivo. Se anota (1) $800 en el **debe de Caja** (entra dinero) y (1) $800 en el **haber de Ventas** (nace un ingreso).",
            en: "Mini example: Doña Lupe's corner shop sells $800 of groceries for cash. Write (1) $800 on the **debit side of Cash on hand** (money comes in) and (1) $800 on the **credit side of Sales** (revenue arises).",
          },
        ],
      },
      {
        heading: { es: "Cálculo de saldos", en: "Computing balances" },
        body: [
          {
            es: "Para conocer el **saldo** de una cuenta T, primero sumas cada lado. La suma del debe se llama **movimientos deudores** y la suma del haber, **movimientos acreedores**. El saldo es la **diferencia** entre las dos sumas.",
            en: "To find a T-account's **balance**, first add up each side. The total of the debit side is called **debit movements** and the total of the credit side **credit movements**. The balance is the **difference** between the two totals.",
          },
          {
            es: "Si el debe es mayor, el saldo es **deudor**. Si el haber es mayor, el saldo es **acreedor**. Si son iguales, la cuenta está **saldada** (saldo cero). Normalmente el saldo queda del lado de la naturaleza de la cuenta: Caja casi siempre tiene saldo deudor y Proveedores, acreedor.",
            en: "If the debit side is larger, the balance is a **debit balance**. If the credit side is larger, it is a **credit balance**. If they are equal, the account is **settled** (zero balance). The balance usually sits on the side of the account's nature: Cash on hand almost always has a debit balance and Accounts payable a credit balance.",
          },
          {
            es: "Mini ejemplo: Caja tiene en el debe $5,000 + $800 + $1,200 = $7,000 y en el haber $2,000 + $500 = $2,500. Saldo = 7,000 − 2,500 = **$4,500 deudor**.",
            en: "Mini example: Cash on hand has $5,000 + $800 + $1,200 = $7,000 on the debit side and $2,000 + $500 = $2,500 on the credit side. Balance = 7,000 − 2,500 = **$4,500 debit**.",
          },
        ],
        formulas: [
          {
            name: { es: "Saldo de una cuenta deudora (activo o gasto)", en: "Balance of a debit-nature account (asset or expense)" },
            expression: "Saldo deudor = Suma del debe − Suma del haber",
            variables: [
              { symbol: "Saldo deudor", meaning: { es: "Lo que queda en la cuenta al final, en pesos. En Caja o Bancos es el dinero que todavía tienes.", en: "What is left in the account at the end, in pesos. In Cash on hand or Bank it is the money you still have." } },
              { symbol: "Suma del debe", meaning: { es: "El saldo inicial más todos los cargos (lo anotado del lado izquierdo), en pesos.", en: "The opening balance plus all the debits (what is written on the left side), in pesos." } },
              { symbol: "Suma del haber", meaning: { es: "Todos los abonos (lo anotado del lado derecho), en pesos.", en: "All the credits (what is written on the right side), in pesos." } },
            ],
            steps: [
              { es: "Anota el saldo inicial en el debe, porque un activo tiene naturaleza deudora.", en: "Write the opening balance on the debit side, because an asset has a debit nature." },
              { es: "Suma el saldo inicial y todos los cargos: esa es la suma del debe.", en: "Add the opening balance and all the debits: that is the total of the debit side." },
              { es: "Suma todos los abonos: esa es la suma del haber.", en: "Add all the credits: that is the total of the credit side." },
              { es: "Resta: suma del debe − suma del haber. Si da positivo, el saldo es deudor; si da cero, la cuenta está saldada.", en: "Subtract: debit total − credit total. If positive, it is a debit balance; if zero, the account is settled." },
            ],
            example: {
              es: "Caja de una nevería: saldo inicial $2,000; ventas en efectivo $1,500 y $700; paga hielo $400 y servilletas $300. Suma del debe = 2,000 + 1,500 + 700 = $4,200. Suma del haber = 400 + 300 = $700. Saldo = 4,200 − 700 = **$3,500 deudor**.",
              en: "Cash on hand of an ice-cream shop: opening balance $2,000; cash sales $1,500 and $700; pays $400 for ice and $300 for napkins. Debit total = 2,000 + 1,500 + 700 = $4,200. Credit total = 400 + 300 = $700. Balance = 4,200 − 700 = **$3,500 debit**.",
            },
            interpret: {
              es: "En un activo, el saldo deudor es lo que el negocio tiene o le deben al final. Si te diera negativo en Caja, revisa: no puede salir más dinero del que hay.",
              en: "In an asset, the debit balance is what the business has or is owed at the end. If Cash on hand came out negative, check your work: more money cannot leave than there is.",
            },
            mistake: {
              es: "Olvidar sumar el saldo inicial en el debe y calcular solo con los movimientos del mes.",
              en: "Forgetting to include the opening balance in the debit total and using only the month's movements.",
            },
          },
          {
            name: { es: "Saldo de una cuenta acreedora (pasivo, capital o ingreso)", en: "Balance of a credit-nature account (liability, equity or revenue)" },
            expression: "Saldo acreedor = Suma del haber − Suma del debe",
            variables: [
              { symbol: "Saldo acreedor", meaning: { es: "Lo que queda en la cuenta al final, en pesos. En Proveedores es lo que todavía debes.", en: "What is left in the account at the end, in pesos. In Accounts payable it is what you still owe." } },
              { symbol: "Suma del haber", meaning: { es: "El saldo inicial más todos los abonos (por ejemplo, deudas nuevas), en pesos.", en: "The opening balance plus all the credits (for example, new debts), in pesos." } },
              { symbol: "Suma del debe", meaning: { es: "Todos los cargos (por ejemplo, los pagos que reducen la deuda), en pesos.", en: "All the debits (for example, payments that reduce the debt), in pesos." } },
            ],
            steps: [
              { es: "Anota el saldo inicial en el haber, porque un pasivo tiene naturaleza acreedora.", en: "Write the opening balance on the credit side, because a liability has a credit nature." },
              { es: "Suma el saldo inicial y todas las deudas nuevas: esa es la suma del haber.", en: "Add the opening balance and all the new debts: that is the credit total." },
              { es: "Suma todos los pagos: esa es la suma del debe.", en: "Add all the payments: that is the debit total." },
              { es: "Resta: suma del haber − suma del debe. El resultado es lo que todavía se debe.", en: "Subtract: credit total − debit total. The result is what is still owed." },
            ],
            example: {
              es: "Proveedores de una ferretería: saldo inicial $10,000; compra a crédito $6,000; paga $3,000 y $2,500. Suma del haber = 10,000 + 6,000 = $16,000. Suma del debe = 3,000 + 2,500 = $5,500. Saldo = 16,000 − 5,500 = **$10,500 acreedor**.",
              en: "Accounts payable of a hardware store: opening balance $10,000; buys on credit $6,000; pays $3,000 and $2,500. Credit total = 10,000 + 6,000 = $16,000. Debit total = 3,000 + 2,500 = $5,500. Balance = 16,000 − 5,500 = **$10,500 credit**.",
            },
            mistake: {
              es: "Restar una deuda nueva (por ejemplo, un pagaré nuevo) como si fuera un pago. Las deudas nuevas se suman en el haber; solo los pagos van al debe.",
              en: "Subtracting a new debt (for example, a new promissory note) as if it were a payment. New debts are added on the credit side; only payments go on the debit side.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Cuenta T de Bancos de una cafetería", en: "Bank T-account of a coffee shop" },
        problem: {
          es: "La cafetería «El Grano» empieza el mes con $30,000 en Bancos. Durante el mes: (1) deposita ventas por $12,000; (2) paga la renta, $8,000; (3) paga a un proveedor, $5,500; (4) un cliente le transfiere $3,000. ¿Cuál es el saldo de Bancos?",
          en: "The coffee shop «El Grano» starts the month with $30,000 in the bank. During the month: (1) it deposits sales of $12,000; (2) pays rent, $8,000; (3) pays a supplier, $5,500; (4) a customer transfers $3,000 to it. What is the Bank balance?",
        },
        steps: [
          { es: "Bancos es activo: el saldo inicial y las entradas van al debe: 30,000 + 12,000 + 3,000 = $45,000.", en: "Bank is an asset: the opening balance and inflows go on the debit side: 30,000 + 12,000 + 3,000 = $45,000." },
          { es: "Las salidas van al haber: 8,000 + 5,500 = $13,500.", en: "Outflows go on the credit side: 8,000 + 5,500 = $13,500." },
          { es: "Saldo = 45,000 − 13,500 = $31,500.", en: "Balance = 45,000 − 13,500 = $31,500." },
          { es: "Como el debe es mayor, el saldo es deudor, que es lo normal para un activo.", en: "Since the debit side is larger, it is a debit balance, which is normal for an asset." },
        ],
        result: { es: "Saldo final de Bancos: $31,500 deudor.", en: "Ending Bank balance: $31,500 debit." },
      },
      {
        title: { es: "Cuenta T de Proveedores de un taller", en: "Accounts payable T-account of a repair shop" },
        problem: {
          es: "Un taller mecánico debe $18,000 a sus proveedores al iniciar el mes. Luego: (1) compra refacciones a crédito por $9,500; (2) paga $12,000 a un proveedor; (3) compra aceite a crédito por $4,000. ¿Cuánto debe al final?",
          en: "A car repair shop owes its suppliers $18,000 at the start of the month. Then: (1) it buys spare parts on credit for $9,500; (2) pays $12,000 to a supplier; (3) buys oil on credit for $4,000. How much does it owe at the end?",
        },
        steps: [
          { es: "Proveedores es pasivo (naturaleza acreedora): saldo inicial y nuevas deudas van al haber: 18,000 + 9,500 + 4,000 = $31,500.", en: "Accounts payable is a liability (credit nature): the opening balance and new debts go on the credit side: 18,000 + 9,500 + 4,000 = $31,500." },
          { es: "El pago reduce la deuda y va al debe: $12,000.", en: "The payment reduces the debt and goes on the debit side: $12,000." },
          { es: "Saldo = 31,500 − 12,000 = $19,500.", en: "Balance = 31,500 − 12,000 = $19,500." },
          { es: "El haber es mayor, así que el saldo es acreedor: es lo que el taller todavía debe.", en: "The credit side is larger, so it is a credit balance: it is what the shop still owes." },
        ],
        result: { es: "Saldo final de Proveedores: $19,500 acreedor.", en: "Ending Accounts payable balance: $19,500 credit." },
      },
    ],
    keyPoints: [
      { es: "La cuenta T muestra los movimientos de una sola cuenta: debe a la izquierda, haber a la derecha.", en: "The T-account shows the movements of a single account: debits on the left, credits on the right." },
      { es: "Cada asiento se pasa a por lo menos dos cuentas T, del mismo lado que indica el asiento.", en: "Each entry is posted to at least two T-accounts, on the side the entry indicates." },
      { es: "El saldo es la diferencia entre la suma del debe y la suma del haber.", en: "The balance is the difference between total debits and total credits." },
      { es: "Saldo deudor si gana el debe, acreedor si gana el haber, saldada si son iguales.", en: "Debit balance if debits are larger, credit balance if credits are larger, settled if equal." },
      { es: "Todas las cuentas T juntas forman el libro mayor.", en: "All the T-accounts together form the general ledger." },
    ],
    exerciseIds: ['N1C-001', 'N1C-002', 'N1C-003', 'N1C-004', 'N1C-005', 'N1C-006', 'N1C-007', 'N1C-008'],
  },

  // ───────────────────────────── L1-12 ─────────────────────────────
  {
    id: 'L1-12',
    level: 1,
    topicIds: ['1.12'],
    title: { es: "Introducción al ciclo contable", en: "Introduction to the accounting cycle" },
    summary: {
      es: "El ciclo contable es la ruta que sigue cada operación: se identifica, se registra en el diario, se pasa al mayor, se comprueba en la balanza y al final del periodo se ajusta y se cierra.",
      en: "The accounting cycle is the path each transaction follows: it is identified, recorded in the journal, posted to the ledger, checked in the trial balance and, at period end, adjusted and closed.",
    },
    minutes: 17,
    objectives: [
      { es: "Reconocer qué hechos son transacciones que se registran.", en: "Recognize which events are transactions that get recorded." },
      { es: "Distinguir el libro diario del libro mayor.", en: "Tell the journal apart from the general ledger." },
      { es: "Explicar para qué sirve la balanza de comprobación y qué no detecta.", en: "Explain what the trial balance is for and what it does not detect." },
      { es: "Describir en términos generales los ajustes y el cierre.", en: "Describe adjustments and closing in general terms." },
    ],
    theory: [
      {
        heading: { es: "Identificación de transacciones", en: "Identifying transactions" },
        body: [
          {
            es: "El **ciclo contable** es la serie de pasos que se repite en cada periodo (un mes o un año) para convertir las operaciones del negocio en información. Todo empieza con una pregunta: **¿esto es una transacción que debo registrar?**",
            en: "The **accounting cycle** is the series of steps repeated each period (a month or a year) to turn the business's operations into information. It all starts with a question: **is this a transaction I must record?**",
          },
          {
            es: "Una **transacción** es un hecho que ya ocurrió, que cambia los recursos, deudas o capital del negocio y que se puede medir en pesos. Casi siempre tiene un **comprobante**: un ticket, una factura electrónica (CFDI), un estado de cuenta del banco o un contrato.",
            en: "A **transaction** is an event that has already happened, that changes the business's resources, debts or equity and that can be measured in pesos. It almost always has **supporting evidence**: a receipt, an electronic invoice (CFDI), a bank statement or a contract.",
          },
          {
            es: "Mini ejemplo: en una taquería, vender tacos por $2,300 sí es transacción. Pedir una cotización de un refrigerador nuevo, no: todavía no pasa nada con el dinero del negocio. Tampoco lo es que el dueño compre ropa con su tarjeta personal, porque el negocio es distinto de su dueño.",
            en: "Mini example: at a taco stand, selling tacos for $2,300 is a transaction. Asking for a quote on a new fridge is not: nothing has happened yet to the business's money. Neither is the owner buying clothes with his personal card, because the business is separate from its owner.",
          },
        ],
        bullets: [
          { es: "¿Ya ocurrió?", en: "Has it already happened?" },
          { es: "¿Afecta al negocio y no solo al dueño?", en: "Does it affect the business and not just the owner?" },
          { es: "¿Se puede medir en pesos?", en: "Can it be measured in pesos?" },
          { es: "¿Hay un documento que lo respalde?", en: "Is there a document that supports it?" },
        ],
      },
      {
        heading: { es: "Libro diario y libro mayor", en: "Journal and general ledger" },
        body: [
          {
            es: "El **libro diario** es como un diario personal: anota las operaciones **una tras otra, en orden de fecha**. Cada anotación se llama **asiento** e indica la fecha, las cuentas, el cargo, el abono y una breve descripción. En México cada asiento suele respaldarse con una **póliza**.",
            en: "The **journal** is like a personal diary: it records transactions **one after another, in date order**. Each record is called an **entry** and shows the date, the accounts, the debit, the credit and a short description. In Mexico each entry is usually backed by a voucher called a **póliza**.",
          },
          {
            es: "El **libro mayor** reúne los movimientos **por cuenta**: todo lo de Caja junto, todo lo de Ventas junto. Es el conjunto de las cuentas T. Del diario al mayor se hace el **pase**: cada línea del asiento se copia en su cuenta.",
            en: "The **general ledger** gathers movements **by account**: everything about Cash on hand together, everything about Sales together. It is the set of T-accounts. Moving from journal to ledger is called **posting**: each line of the entry is copied to its account.",
          },
          {
            es: "Mini ejemplo: el 3 de mayo la papelería compra hojas por $1,500 en efectivo. En el diario: cargo a Papelería y útiles $1,500, abono a Caja $1,500. En el mayor: $1,500 en el debe de Papelería y útiles y $1,500 en el haber de Caja.",
            en: "Mini example: on May 3 the stationery shop buys paper for $1,500 in cash. In the journal: debit Office supplies $1,500, credit Cash on hand $1,500. In the ledger: $1,500 on the debit side of Office supplies and $1,500 on the credit side of Cash on hand.",
          },
        ],
      },
      {
        heading: { es: "Balanza de comprobación", en: "Trial balance" },
        body: [
          {
            es: "La **balanza de comprobación** es una lista con el saldo de **todas** las cuentas del mayor a una fecha. Los saldos deudores van en una columna y los acreedores en otra. Si el registro se hizo con partida doble, **las dos columnas suman lo mismo**.",
            en: "The **trial balance** is a list of the balance of **every** ledger account at a date. Debit balances go in one column and credit balances in another. If recording followed double entry, **both columns add up to the same amount**.",
          },
          {
            es: "Ojo: que cuadre no prueba que todo esté bien. No detecta una operación que olvidaste por completo, un asiento repetido o un cargo a la cuenta equivocada del mismo lado, porque esos errores afectan igual a ambas columnas.",
            en: "Careful: balancing does not prove everything is right. It does not catch a transaction you completely forgot, an entry recorded twice or a debit to the wrong account on the same side, because those errors affect both columns equally.",
          },
          {
            es: "Mini ejemplo: saldos deudores: Bancos $60,000, Mobiliario $25,000, Renta $8,000 = $93,000. Saldos acreedores: Proveedores $15,000, Capital social $60,000, Ventas $18,000 = $93,000. **Cuadra.**",
            en: "Mini example: debit balances: Bank $60,000, Furniture $25,000, Rent $8,000 = $93,000. Credit balances: Accounts payable $15,000, Share capital $60,000, Sales $18,000 = $93,000. **It balances.**",
          },
        ],
        formulas: [
          {
            name: { es: "Comprobar la balanza (y encontrar un saldo que falta)", en: "Checking the trial balance (and finding a missing balance)" },
            expression: "Total de saldos deudores = Total de saldos acreedores  →  Saldo faltante = Total de la otra columna − Saldos conocidos de su columna",
            variables: [
              { symbol: "Total de saldos deudores", meaning: { es: "La suma, en pesos, de los saldos de activos y gastos (columna deudora).", en: "The sum, in pesos, of the asset and expense balances (debit column)." } },
              { symbol: "Total de saldos acreedores", meaning: { es: "La suma, en pesos, de los saldos de pasivos, capital e ingresos (columna acreedora).", en: "The sum, in pesos, of the liability, equity and revenue balances (credit column)." } },
              { symbol: "Saldo faltante", meaning: { es: "El saldo de la cuenta que no conoces, en pesos: el que hace que las dos columnas sumen lo mismo.", en: "The balance of the account you do not know, in pesos: the one that makes both columns add up to the same." } },
              { symbol: "Total de la otra columna", meaning: { es: "La suma completa de la columna donde ya conoces todos los saldos, en pesos.", en: "The full total of the column where you already know every balance, in pesos." } },
              { symbol: "Saldos conocidos de su columna", meaning: { es: "La suma de los saldos que sí conoces en la columna donde está el dato que falta, en pesos.", en: "The sum of the balances you do know in the column where the missing figure is, in pesos." } },
            ],
            steps: [
              { es: "Pon cada cuenta en su columna: activos y gastos en la deudora; pasivos, capital e ingresos en la acreedora.", en: "Put each account in its column: assets and expenses in the debit column; liabilities, equity and revenue in the credit column." },
              { es: "Suma cada columna.", en: "Add up each column." },
              { es: "Compara: si los dos totales son iguales, la balanza cuadra.", en: "Compare: if both totals are equal, the trial balance balances." },
              { es: "Si falta un saldo, réstale al total de la columna completa los saldos conocidos de la otra columna.", en: "If a balance is missing, subtract the known balances of its column from the total of the complete column." },
            ],
            example: {
              es: "Un consultorio: Bancos $30,000, Mobiliario $20,000 y Renta $5,000 (deudores) = 30,000 + 20,000 + 5,000 = $55,000. Acreedores: Proveedores $8,000, Ingresos por consultas $12,000 y Capital social (falta). Conocidos = 8,000 + 12,000 = $20,000. Capital social = 55,000 − 20,000 = **$35,000**. Comprobación: 8,000 + 12,000 + 35,000 = $55,000.",
              en: "A doctor's office: Bank $30,000, Furniture $20,000 and Rent $5,000 (debit) = 30,000 + 20,000 + 5,000 = $55,000. Credit: Accounts payable $8,000, Consultation revenue $12,000 and Share capital (missing). Known = 8,000 + 12,000 = $20,000. Share capital = 55,000 − 20,000 = **$35,000**. Check: 8,000 + 12,000 + 35,000 = $55,000.",
            },
            interpret: {
              es: "Que cuadre solo prueba que las sumas son iguales. Si no cuadra, seguro hay un error: busca un importe mal copiado o anotado del lado equivocado.",
              en: "Balancing only proves the totals are equal. If it does not balance, there is certainly an error: look for an amount copied wrong or posted on the wrong side.",
            },
            mistake: {
              es: "Poner un gasto (como Sueldos o Renta) en la columna acreedora. Los gastos tienen saldo deudor, igual que los activos.",
              en: "Putting an expense (such as Salaries or Rent) in the credit column. Expenses have a debit balance, just like assets.",
            },
          },
        ],
      },
      {
        heading: { es: "Ajustes y cierre: visión general", en: "Adjustments and closing: an overview" },
        body: [
          {
            es: "Antes de preparar los estados financieros se hacen **ajustes**: asientos al final del periodo para que cada ingreso y cada gasto quede en el mes en que realmente ocurrió. Por ejemplo, sueldos que ya se trabajaron pero se pagarán el mes siguiente, o el desgaste de una máquina (depreciación).",
            en: "Before preparing the financial statements, **adjustments** are made: entries at period end so that each revenue and expense lands in the month it really happened. For example, wages already worked but paid next month, or the wear of a machine (depreciation).",
          },
          {
            es: "Con los saldos ajustados se preparan los **estados financieros**. Después viene el **cierre**: las cuentas de ingresos y gastos se dejan en cero y su resultado (utilidad o pérdida) pasa al **capital contable**. Así el siguiente periodo empieza a contar desde cero sus ingresos y gastos.",
            en: "With the adjusted balances the **financial statements** are prepared. Then comes **closing**: revenue and expense accounts are reset to zero and their result (profit or loss) moves into **equity**. That way the next period starts counting its revenue and expenses from zero.",
          },
          {
            es: "En este nivel solo necesitas la idea general. Los ajustes y el cierre se practican con detalle en niveles posteriores.",
            en: "At this level you only need the general idea. Adjustments and closing are practiced in detail in later levels.",
          },
        ],
        formula: "Transacción → Diario → Mayor → Balanza → Ajustes → Estados financieros → Cierre",
      },
    ],
    examples: [
      {
        title: { es: "Una compra recorre el ciclo", en: "A purchase travels through the cycle" },
        problem: {
          es: "Una cafetería compra café en grano por $4,000 y paga con transferencia; recibe su factura. Antes tenía $20,000 en Bancos y $1,000 en Inventarios. Sigue la operación por el ciclo.",
          en: "A coffee shop buys coffee beans for $4,000 and pays by transfer; it gets an invoice. Before, it had $20,000 in Bank and $1,000 in Inventory. Follow the transaction through the cycle.",
        },
        steps: [
          { es: "Identificación: ya ocurrió, afecta al negocio, mide $4,000 y tiene factura. Sí se registra.", en: "Identification: it happened, affects the business, measures $4,000 and has an invoice. It is recorded." },
          { es: "Diario: cargo a Inventarios $4,000; abono a Bancos $4,000.", en: "Journal: debit Inventory $4,000; credit Bank $4,000." },
          { es: "Mayor: Inventarios pasa a 1,000 + 4,000 = $5,000; Bancos pasa a 20,000 − 4,000 = $16,000.", en: "Ledger: Inventory becomes 1,000 + 4,000 = $5,000; Bank becomes 20,000 − 4,000 = $16,000." },
          { es: "Balanza: ambos saldos nuevos aparecen; como el cargo y el abono son iguales, la balanza sigue cuadrando.", en: "Trial balance: both new balances appear; since debit and credit are equal, the trial balance still balances." },
        ],
        result: { es: "Inventarios $5,000 y Bancos $16,000; la balanza sigue cuadrada.", en: "Inventory $5,000 and Bank $16,000; the trial balance still balances." },
      },
      {
        title: { es: "Armar una balanza sencilla", en: "Building a simple trial balance" },
        problem: {
          es: "Saldos de una estética al 30 de abril: Caja $5,000; Bancos $40,000; Equipo $35,000; Sueldos $9,000; Proveedores $12,000; Capital social $60,000; Ingresos por servicios $17,000. ¿Cuadra la balanza?",
          en: "Balances of a beauty salon at April 30: Cash on hand $5,000; Bank $40,000; Equipment $35,000; Salaries $9,000; Accounts payable $12,000; Share capital $60,000; Service revenue $17,000. Does the trial balance balance?",
        },
        steps: [
          { es: "Saldos deudores (activos y gastos): 5,000 + 40,000 + 35,000 + 9,000 = $89,000.", en: "Debit balances (assets and expenses): 5,000 + 40,000 + 35,000 + 9,000 = $89,000." },
          { es: "Saldos acreedores (pasivo, capital e ingresos): 12,000 + 60,000 + 17,000 = $89,000.", en: "Credit balances (liabilities, equity and revenue): 12,000 + 60,000 + 17,000 = $89,000." },
          { es: "Comparar: 89,000 = 89,000.", en: "Compare: 89,000 = 89,000." },
        ],
        result: { es: "La balanza cuadra con $89,000 en cada columna.", en: "The trial balance balances with $89,000 in each column." },
      },
    ],
    keyPoints: [
      { es: "Solo se registran hechos que ya ocurrieron, afectan al negocio, se miden en pesos y tienen respaldo.", en: "Only events that have happened, affect the business, are measurable in pesos and are supported get recorded." },
      { es: "El diario ordena por fecha; el mayor ordena por cuenta.", en: "The journal orders by date; the ledger orders by account." },
      { es: "La balanza comprueba que total deudor = total acreedor, pero no detecta todos los errores.", en: "The trial balance checks that total debits = total credits, but it does not catch every error." },
      { es: "Los ajustes ponen cada ingreso y gasto en su periodo correcto.", en: "Adjustments put each revenue and expense in its correct period." },
      { es: "El cierre deja en cero ingresos y gastos y pasa el resultado al capital.", en: "Closing resets revenue and expenses to zero and moves the result into equity." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1C-009', 'N1C-010', 'N1C-011', 'N1C-012', 'N1C-013', 'N1C-014', 'N1C-015'],
  },

  // ───────────────────────────── L1-13 ─────────────────────────────
  {
    id: 'L1-13',
    level: 1,
    topicIds: ['1.13'],
    title: { es: "Los cuatro estados financieros básicos", en: "The four basic financial statements" },
    summary: {
      es: "Los estados financieros resumen la contabilidad en cuatro reportes: situación financiera, resultado integral, flujos de efectivo y cambios en el capital contable.",
      en: "The financial statements summarize the accounting in four reports: financial position, comprehensive income, cash flows and changes in equity.",
    },
    minutes: 20,
    objectives: [
      { es: "Identificar qué pregunta responde cada estado financiero.", en: "Identify which question each financial statement answers." },
      { es: "Distinguir un estado a una fecha (foto) de un estado por un periodo (película).", en: "Tell a statement at a date (snapshot) from a statement for a period (movie)." },
      { es: "Calcular la utilidad neta y el capital final en casos sencillos.", en: "Compute net profit and ending equity in simple cases." },
      { es: "Clasificar movimientos de efectivo en operación, inversión y financiamiento.", en: "Classify cash movements into operating, investing and financing." },
    ],
    theory: [
      {
        heading: { es: "Estado de situación financiera", en: "Statement of financial position" },
        body: [
          {
            es: "También se le llama **balance general**. Es como una **foto** del negocio **en una fecha**, por ejemplo al 31 de diciembre. Muestra lo que el negocio tiene (**activo**), lo que debe (**pasivo**) y lo que les pertenece a los dueños (**capital contable**).",
            en: "It is also called the **balance sheet**. It is like a **snapshot** of the business **at a date**, for example December 31. It shows what the business has (**assets**), what it owes (**liabilities**) and what belongs to the owners (**equity**).",
          },
          {
            es: "Siempre se cumple la ecuación contable: el total de activo es igual al pasivo más el capital. Si una tienda tiene $150,000 de activos y debe $40,000, el capital de sus dueños es $110,000.",
            en: "The accounting equation always holds: total assets equal liabilities plus equity. If a shop has $150,000 of assets and owes $40,000, its owners' equity is $110,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Ecuación contable del balance", en: "Balance sheet accounting equation" },
            expression: "Activo = Pasivo + Capital contable  (o bien: Capital contable = Activo − Pasivo)",
            variables: [
              { symbol: "Activo", meaning: { es: "Todo lo que tiene el negocio, en pesos: efectivo, bancos, mercancía, equipo, lo que le deben los clientes.", en: "Everything the business has, in pesos: cash, bank, goods, equipment, what customers owe it." } },
              { symbol: "Pasivo", meaning: { es: "Todo lo que el negocio debe, en pesos: proveedores, préstamos.", en: "Everything the business owes, in pesos: suppliers, loans." } },
              { symbol: "Capital contable", meaning: { es: "La parte del activo que es de los dueños, en pesos: lo que quedaría si se pagaran todas las deudas.", en: "The part of the assets that belongs to the owners, in pesos: what would be left if all debts were paid." } },
            ],
            steps: [
              { es: "Suma todos los activos.", en: "Add up all the assets." },
              { es: "Suma todos los pasivos.", en: "Add up all the liabilities." },
              { es: "Si te falta el capital, réstalo: Capital contable = Activo − Pasivo.", en: "If equity is missing, subtract: Equity = Assets − Liabilities." },
              { es: "Comprueba: Pasivo + Capital contable debe dar el mismo total que el Activo.", en: "Check: Liabilities + Equity must give the same total as Assets." },
            ],
            example: {
              es: "Una farmacia tiene Bancos $50,000, Inventarios $30,000 y Equipo $20,000: Activo = 50,000 + 30,000 + 20,000 = $100,000. Debe a proveedores $25,000 (Pasivo). Capital = 100,000 − 25,000 = **$75,000**. Comprobación: 25,000 + 75,000 = $100,000.",
              en: "A pharmacy has Bank $50,000, Inventory $30,000 and Equipment $20,000: Assets = 50,000 + 30,000 + 20,000 = $100,000. It owes suppliers $25,000 (Liabilities). Equity = 100,000 − 25,000 = **$75,000**. Check: 25,000 + 75,000 = $100,000.",
            },
            mistake: {
              es: "Sumar el pasivo al activo para sacar el capital. Las deudas no son de los dueños: se restan.",
              en: "Adding liabilities to assets to get equity. Debts do not belong to the owners: they are subtracted.",
            },
          },
        ],
        bullets: [
          { es: "¿Qué tiene el negocio? → Activo.", en: "What does the business have? → Assets." },
          { es: "¿Qué debe? → Pasivo.", en: "What does it owe? → Liabilities." },
          { es: "¿Qué es de los dueños? → Capital contable.", en: "What belongs to the owners? → Equity." },
        ],
      },
      {
        heading: { es: "Estado de resultado integral", en: "Statement of comprehensive income" },
        body: [
          {
            es: "Este estado es como una **película** de un **periodo** (un mes o un año). Muestra los **ingresos** que se ganaron y los **costos y gastos** que se consumieron para lograrlos. La diferencia es la **utilidad neta** (si ganaste) o la **pérdida neta** (si no).",
            en: "This statement is like a **movie** of a **period** (a month or a year). It shows the **revenue** earned and the **costs and expenses** used up to earn it. The difference is **net profit** (if you made money) or **net loss** (if you did not).",
          },
          {
            es: "Se llama **integral** porque, además de la utilidad neta, puede incluir algunas ganancias o pérdidas especiales que las NIF piden mostrar aparte (otros resultados integrales). En un negocio pequeño normalmente solo verás la utilidad o pérdida neta.",
            en: "It is called **comprehensive** because, besides net profit, it may include some special gains or losses that the NIF require to be shown separately (other comprehensive income). In a small business you will usually see only net profit or loss.",
          },
          {
            es: "Mini ejemplo: una panadería vende $50,000 en el mes, el costo del pan vendido es $20,000 y sus gastos (renta, sueldos, luz) suman $18,000. Utilidad neta = 50,000 − 20,000 − 18,000 = **$12,000**.",
            en: "Mini example: a bakery sells $50,000 in the month, the cost of the bread sold is $20,000 and its expenses (rent, wages, electricity) add up to $18,000. Net profit = 50,000 − 20,000 − 18,000 = **$12,000**.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad bruta y utilidad neta", en: "Gross profit and net profit" },
            expression: "Utilidad bruta = Ventas − Costo de ventas;  Utilidad neta = Utilidad bruta − Gastos",
            variables: [
              { symbol: "Ventas", meaning: { es: "Los ingresos del periodo por vender o prestar servicios, en pesos (cobrados o no).", en: "The period's revenue from selling goods or services, in pesos (collected or not)." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que le costó al negocio la mercancía que vendió, en pesos.", en: "What the goods it sold cost the business, in pesos." } },
              { symbol: "Utilidad bruta", meaning: { es: "Lo que queda de las ventas después de pagar la mercancía vendida, en pesos.", en: "What is left of sales after the cost of the goods sold, in pesos." } },
              { symbol: "Gastos", meaning: { es: "Lo que se consumió para operar en el periodo, en pesos: renta, sueldos, luz, publicidad.", en: "What was used up to operate in the period, in pesos: rent, wages, electricity, advertising." } },
              { symbol: "Utilidad neta", meaning: { es: "Lo que realmente ganó el negocio en el periodo, en pesos. Si es negativa, es pérdida neta.", en: "What the business really earned in the period, in pesos. If negative, it is a net loss." } },
            ],
            steps: [
              { es: "Resta a las ventas el costo de ventas: es la utilidad bruta.", en: "Subtract cost of sales from sales: that is gross profit." },
              { es: "Suma todos los gastos del periodo (renta, sueldos, luz, publicidad…).", en: "Add up all the period's expenses (rent, wages, electricity, advertising…)." },
              { es: "Resta los gastos a la utilidad bruta: es la utilidad neta.", en: "Subtract the expenses from gross profit: that is net profit." },
            ],
            example: {
              es: "Una zapatería vende $80,000; los zapatos vendidos le costaron $45,000. Utilidad bruta = 80,000 − 45,000 = $35,000. Gastos: sueldos $12,000 + renta $6,000 + luz $2,000 = $20,000. Utilidad neta = 35,000 − 20,000 = **$15,000**.",
              en: "A shoe store sells $80,000; the shoes sold cost it $45,000. Gross profit = 80,000 − 45,000 = $35,000. Expenses: wages $12,000 + rent $6,000 + electricity $2,000 = $20,000. Net profit = 35,000 − 20,000 = **$15,000**.",
            },
            interpret: {
              es: "Positiva: el negocio ganó en el periodo. Negativa: tuvo pérdida, porque gastó más de lo que le dejaron sus ventas.",
              en: "Positive: the business made money in the period. Negative: it had a loss, because it spent more than its sales left it.",
            },
            mistake: {
              es: "Quedarse en la utilidad bruta y olvidar restar los gastos de operación.",
              en: "Stopping at gross profit and forgetting to subtract operating expenses.",
            },
          },
        ],
      },
      {
        heading: { es: "Estado de flujos de efectivo", en: "Statement of cash flows" },
        body: [
          {
            es: "Este estado sigue **solo al dinero real**: cuánto efectivo entró y cuánto salió durante el periodo, y por qué. Responde a la pregunta: **¿de dónde vino el dinero y en qué se fue?**",
            en: "This statement follows **only real money**: how much cash came in and how much went out during the period, and why. It answers the question: **where did the money come from and where did it go?**",
          },
          {
            es: "Agrupa los movimientos en tres actividades. **Operación**: lo del día a día, como cobrar a clientes y pagar sueldos, renta y proveedores. **Inversión**: comprar o vender bienes duraderos, como un horno o una camioneta. **Financiamiento**: dinero que llega de préstamos o de los dueños, y lo que se les devuelve.",
            en: "It groups movements into three activities. **Operating**: day-to-day items, such as collecting from customers and paying wages, rent and suppliers. **Investing**: buying or selling long-lived assets, such as an oven or a van. **Financing**: money that comes from loans or from the owners, and what is paid back to them.",
          },
          {
            es: "Mini ejemplo: empiezas con $10,000, cobras $25,000 a clientes, pagas $18,000 de gastos y compras una vitrina de $5,000. Efectivo final = 10,000 + 25,000 − 18,000 − 5,000 = **$12,000**.",
            en: "Mini example: you start with $10,000, collect $25,000 from customers, pay $18,000 of expenses and buy a display case for $5,000. Ending cash = 10,000 + 25,000 − 18,000 − 5,000 = **$12,000**.",
          },
        ],
        formulas: [
          {
            name: { es: "Efectivo final con las tres actividades", en: "Ending cash using the three activities" },
            expression: "Efectivo final = Efectivo inicial + Flujo de operación + Flujo de inversión + Flujo de financiamiento",
            variables: [
              { symbol: "Efectivo inicial", meaning: { es: "El dinero que había al empezar el periodo, en pesos.", en: "The money there was at the start of the period, in pesos." } },
              { symbol: "Flujo de operación", meaning: { es: "Cobros a clientes menos pagos del día a día (sueldos, renta, proveedores), en pesos.", en: "Collections from customers minus day-to-day payments (wages, rent, suppliers), in pesos." } },
              { symbol: "Flujo de inversión", meaning: { es: "Ventas de equipo, terrenos o vehículos (suman) menos compras de esos bienes (restan), en pesos.", en: "Sales of equipment, land or vehicles (add) minus purchases of those assets (subtract), in pesos." } },
              { symbol: "Flujo de financiamiento", meaning: { es: "Préstamos recibidos y aportaciones de los dueños (suman) menos pagos de préstamos, retiros y dividendos (restan), en pesos.", en: "Loans received and owner contributions (add) minus loan repayments, withdrawals and dividends (subtract), in pesos." } },
              { symbol: "Efectivo final", meaning: { es: "El dinero que queda al terminar el periodo, en pesos.", en: "The money left at the end of the period, in pesos." } },
            ],
            steps: [
              { es: "Calcula el flujo de operación: cobros − pagos del día a día.", en: "Compute operating cash flow: collections − day-to-day payments." },
              { es: "Calcula el flujo de inversión: una compra de equipo va con signo menos.", en: "Compute investing cash flow: an equipment purchase has a minus sign." },
              { es: "Calcula el flujo de financiamiento: un préstamo recibido va con signo más.", en: "Compute financing cash flow: a loan received has a plus sign." },
              { es: "Suma los tres flujos (es el cambio neto) y agrégalo al efectivo inicial.", en: "Add the three flows (that is the net change) and add it to opening cash." },
            ],
            example: {
              es: "Un taller empieza con $8,000. Cobra $30,000 y paga $22,000 de gastos: operación = 30,000 − 22,000 = +$8,000. Compra herramienta por $6,000: inversión = −$6,000. El dueño aporta $5,000: financiamiento = +$5,000. Cambio neto = 8,000 − 6,000 + 5,000 = $7,000. Efectivo final = 8,000 + 7,000 = **$15,000**.",
              en: "A workshop starts with $8,000. It collects $30,000 and pays $22,000 of expenses: operating = 30,000 − 22,000 = +$8,000. It buys tools for $6,000: investing = −$6,000. The owner contributes $5,000: financing = +$5,000. Net change = 8,000 − 6,000 + 5,000 = $7,000. Ending cash = 8,000 + 7,000 = **$15,000**.",
            },
            interpret: {
              es: "Un flujo de operación positivo es buena señal: el día a día genera dinero. Si el efectivo solo sube por préstamos, el negocio depende de deudas.",
              en: "A positive operating cash flow is a good sign: day-to-day business generates money. If cash only rises because of loans, the business depends on debt.",
            },
            mistake: {
              es: "Meter la compra de un equipo en operación. Comprar bienes duraderos es inversión.",
              en: "Putting an equipment purchase in operating. Buying long-lived assets is investing.",
            },
          },
        ],
        bullets: [
          { es: "Operación: cobros a clientes, pagos de sueldos, renta, proveedores.", en: "Operating: collections from customers, payments of wages, rent, suppliers." },
          { es: "Inversión: compra o venta de equipo, terrenos, vehículos.", en: "Investing: purchase or sale of equipment, land, vehicles." },
          { es: "Financiamiento: préstamos recibidos o pagados, aportaciones y retiros de dueños.", en: "Financing: loans received or repaid, owner contributions and withdrawals." },
        ],
      },
      {
        heading: { es: "Estado de cambios en el capital contable", en: "Statement of changes in equity" },
        body: [
          {
            es: "Este estado explica **por qué cambió el capital de los dueños** durante el periodo. El capital sube con nuevas **aportaciones** y con la **utilidad**, y baja con **retiros** o **dividendos** (lo que se reparte a los dueños) y con las **pérdidas**.",
            en: "This statement explains **why the owners' equity changed** during the period. Equity goes up with new **contributions** and with **profit**, and goes down with **withdrawals** or **dividends** (what is paid out to the owners) and with **losses**.",
          },
          {
            es: "Los cuatro estados están **conectados**: la utilidad del estado de resultado integral entra al estado de cambios en el capital; el capital final pasa al estado de situación financiera; y el efectivo final del estado de flujos coincide con el efectivo que aparece en ese mismo balance.",
            en: "The four statements are **connected**: the profit from the statement of comprehensive income flows into the statement of changes in equity; ending equity goes to the statement of financial position; and ending cash from the cash flow statement matches the cash shown on that same balance sheet.",
          },
          {
            es: "Mini ejemplo: capital inicial $50,000 + utilidad $12,000 − retiro del dueño $4,000 = capital final **$58,000**.",
            en: "Mini example: opening equity $50,000 + profit $12,000 − owner withdrawal $4,000 = ending equity **$58,000**.",
          },
        ],
        formulas: [
          {
            name: { es: "Capital final de los dueños", en: "Owners' ending equity" },
            expression: "Capital final = Capital inicial + Aportaciones + Utilidad neta − Retiros o dividendos",
            variables: [
              { symbol: "Capital inicial", meaning: { es: "El capital de los dueños al empezar el periodo, en pesos.", en: "The owners' equity at the start of the period, in pesos." } },
              { symbol: "Aportaciones", meaning: { es: "Dinero o bienes nuevos que los dueños meten al negocio, en pesos.", en: "New money or assets the owners put into the business, in pesos." } },
              { symbol: "Utilidad neta", meaning: { es: "Lo que ganó el negocio en el periodo, en pesos (si fue pérdida, se resta).", en: "What the business earned in the period, in pesos (if it was a loss, subtract it)." } },
              { symbol: "Retiros o dividendos", meaning: { es: "Lo que se les entrega a los dueños, en pesos. No es un gasto, pero reduce su capital.", en: "What is paid out to the owners, in pesos. It is not an expense, but it reduces their equity." } },
              { symbol: "Capital final", meaning: { es: "El capital de los dueños al cerrar el periodo, en pesos; es el que aparece en el balance.", en: "The owners' equity at the end of the period, in pesos; it is what appears on the balance sheet." } },
            ],
            steps: [
              { es: "Calcula el aumento neto: Aportaciones + Utilidad neta − Retiros o dividendos.", en: "Compute the net increase: Contributions + Net profit − Withdrawals or dividends." },
              { es: "Súmale ese aumento neto al capital inicial: es el capital final.", en: "Add that net increase to opening equity: that is ending equity." },
            ],
            example: {
              es: "Una academia de baile empieza con capital de $60,000. Los socios aportan $10,000, la utilidad neta es $9,000 y reparten $4,000 de dividendos. Aumento neto = 10,000 + 9,000 − 4,000 = $15,000. Capital final = 60,000 + 15,000 = **$75,000**.",
              en: "A dance school starts with equity of $60,000. The partners contribute $10,000, net profit is $9,000 and they pay out $4,000 in dividends. Net increase = 10,000 + 9,000 − 4,000 = $15,000. Ending equity = 60,000 + 15,000 = **$75,000**.",
            },
            mistake: {
              es: "Sumar los dividendos o retiros en vez de restarlos. Salen del negocio hacia los dueños, así que bajan el capital.",
              en: "Adding dividends or withdrawals instead of subtracting them. They leave the business for the owners, so they lower equity.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Resultado y capital de una papelería", en: "Income and equity of a stationery shop" },
        problem: {
          es: "La papelería «La Pluma» vendió $40,000 en marzo. El costo de lo vendido fue $22,000, pagó renta por $6,000 y sueldos por $7,000. Su capital al 1 de marzo era $50,000 y la dueña retiró $2,000. Calcula la utilidad neta y el capital final.",
          en: "The stationery shop «La Pluma» sold $40,000 in March. The cost of what it sold was $22,000, it paid $6,000 of rent and $7,000 of wages. Its equity on March 1 was $50,000 and the owner withdrew $2,000. Compute net profit and ending equity.",
        },
        steps: [
          { es: "Utilidad bruta = ventas − costo de ventas = 40,000 − 22,000 = $18,000.", en: "Gross profit = sales − cost of sales = 40,000 − 22,000 = $18,000." },
          { es: "Utilidad neta = 18,000 − 6,000 − 7,000 = $5,000 (estado de resultado integral).", en: "Net profit = 18,000 − 6,000 − 7,000 = $5,000 (statement of comprehensive income)." },
          { es: "Capital final = 50,000 + 5,000 − 2,000 = $53,000 (estado de cambios en el capital).", en: "Ending equity = 50,000 + 5,000 − 2,000 = $53,000 (statement of changes in equity)." },
          { es: "Ese capital de $53,000 es el que aparece en el estado de situación financiera al 31 de marzo.", en: "That $53,000 of equity is what appears on the statement of financial position at March 31." },
        ],
        result: { es: "Utilidad neta: $5,000; capital final: $53,000.", en: "Net profit: $5,000; ending equity: $53,000." },
      },
      {
        title: { es: "Flujos de efectivo de una pastelería", en: "Cash flows of a cake shop" },
        problem: {
          es: "Una pastelería empieza el año con $15,000 de efectivo. Cobra $32,000 a clientes, paga $24,000 a proveedores y empleados, compra un horno por $10,000 y recibe un préstamo de $8,000. Arma el resumen de flujos.",
          en: "A cake shop starts the year with $15,000 of cash. It collects $32,000 from customers, pays $24,000 to suppliers and employees, buys an oven for $10,000 and receives an $8,000 loan. Build the cash flow summary.",
        },
        steps: [
          { es: "Operación: 32,000 − 24,000 = +$8,000.", en: "Operating: 32,000 − 24,000 = +$8,000." },
          { es: "Inversión: compra del horno = −$10,000.", en: "Investing: oven purchase = −$10,000." },
          { es: "Financiamiento: préstamo recibido = +$8,000.", en: "Financing: loan received = +$8,000." },
          { es: "Cambio neto = 8,000 − 10,000 + 8,000 = +$6,000; efectivo final = 15,000 + 6,000 = $21,000.", en: "Net change = 8,000 − 10,000 + 8,000 = +$6,000; ending cash = 15,000 + 6,000 = $21,000." },
        ],
        result: { es: "Efectivo final: $21,000 (operación +8,000; inversión −10,000; financiamiento +8,000).", en: "Ending cash: $21,000 (operating +8,000; investing −10,000; financing +8,000)." },
      },
    ],
    keyPoints: [
      { es: "Situación financiera: foto a una fecha de activo, pasivo y capital.", en: "Financial position: a snapshot at a date of assets, liabilities and equity." },
      { es: "Resultado integral: película de un periodo; ingresos menos costos y gastos.", en: "Comprehensive income: a movie of a period; revenue minus costs and expenses." },
      { es: "Flujos de efectivo: entradas y salidas de dinero real en operación, inversión y financiamiento.", en: "Cash flows: real money in and out across operating, investing and financing." },
      { es: "Cambios en el capital: aportaciones, utilidad, retiros y dividendos.", en: "Changes in equity: contributions, profit, withdrawals and dividends." },
      { es: "Los cuatro estados están conectados entre sí.", en: "The four statements are connected to each other." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1C-016', 'N1C-017', 'N1C-018', 'N1C-019', 'N1C-020', 'N1C-021', 'N1C-022'],
  },

  // ───────────────────────────── L1-14 ─────────────────────────────
  {
    id: 'L1-14',
    level: 1,
    topicIds: ['1.14'],
    title: { es: "Utilidad vs. flujo de efectivo", en: "Profit vs. cash flow" },
    summary: {
      es: "Ganar dinero (utilidad) y tener dinero (efectivo) no es lo mismo: un negocio puede tener utilidad y quedarse sin efectivo, o tener efectivo y estar perdiendo.",
      en: "Making money (profit) and having money (cash) are not the same: a business can be profitable and run out of cash, or have cash while losing money.",
    },
    minutes: 18,
    objectives: [
      { es: "Distinguir un ingreso de un cobro.", en: "Distinguish revenue from a cash collection." },
      { es: "Distinguir un gasto de un pago.", en: "Distinguish an expense from a cash payment." },
      { es: "Calcular la utilidad y el cambio en efectivo de un mismo periodo.", en: "Compute profit and the change in cash for the same period." },
      { es: "Explicar la diferencia entre rentabilidad y liquidez.", en: "Explain the difference between profitability and liquidity." },
    ],
    theory: [
      {
        heading: { es: "Diferencia entre ingresos y cobros", en: "Revenue vs. collections" },
        body: [
          {
            es: "Un **ingreso** se reconoce cuando **vendes o prestas el servicio**, aunque todavía no te paguen. Un **cobro** es el momento en que **el dinero entra** a tu caja o a tu cuenta. Esta regla viene del postulado de **devengación contable** de las NIF, que en palabras sencillas dice: lo que ganas se anota cuando lo ganas, no cuando te pagan.",
            en: "**Revenue** is recognized when **you sell or perform the service**, even if you have not been paid yet. A **collection** is the moment **money comes into** your till or account. This rule comes from the **accrual** postulate in the NIF, which in plain words says: what you earn is recorded when you earn it, not when you get paid.",
          },
          {
            es: "Si vendes a crédito, hoy tienes el ingreso y el cobro llega después (mientras tanto tienes un derecho: Clientes). Si un cliente te da un **anticipo** por un pastel que entregarás el próximo mes, hoy tienes el cobro, pero el ingreso será del próximo mes; mientras tanto es una deuda contigo: le debes el pastel.",
            en: "If you sell on credit, you have the revenue today and the collection comes later (meanwhile you have a right: Accounts receivable). If a customer gives you an **advance** for a cake you will deliver next month, you have the collection today, but the revenue belongs to next month; meanwhile it is a debt: you owe them the cake.",
          },
          {
            es: "Mini ejemplo: una consultora termina en junio un trabajo de $30,000 que cobrará en julio. En junio cobra $12,000 de trabajos de mayo. Ingreso de junio: **$30,000**. Cobros de junio: **$12,000**.",
            en: "Mini example: a consultant finishes a $30,000 job in June that will be collected in July. In June she collects $12,000 for May jobs. June revenue: **$30,000**. June collections: **$12,000**.",
          },
        ],
        formulas: [
          {
            name: { es: "Ingresos del mes y cobros del mes", en: "Revenue for the month and collections for the month" },
            expression: "Ingresos del mes = Ventas de contado + Ventas a crédito del mes  |  Cobros del mes = Ventas de contado + Cobros de ventas anteriores + Anticipos recibidos",
            variables: [
              { symbol: "Ingresos del mes", meaning: { es: "Todo lo que vendiste o el servicio que entregaste en el mes, en pesos, te paguen hoy o después.", en: "Everything you sold or the services you delivered in the month, in pesos, whether paid today or later." } },
              { symbol: "Cobros del mes", meaning: { es: "El dinero que de verdad entró en el mes, en pesos.", en: "The money that actually came in during the month, in pesos." } },
              { symbol: "Ventas de contado", meaning: { es: "Lo vendido en el mes y pagado en el momento, en pesos. Cuenta en los dos lados.", en: "What was sold in the month and paid on the spot, in pesos. It counts on both sides." } },
              { symbol: "Ventas a crédito del mes", meaning: { es: "Lo vendido en el mes que el cliente pagará después, en pesos.", en: "What was sold in the month that the customer will pay later, in pesos." } },
              { symbol: "Cobros de ventas anteriores", meaning: { es: "Dinero que te pagan este mes por ventas de meses pasados, en pesos.", en: "Money paid to you this month for sales from past months, in pesos." } },
              { symbol: "Anticipos recibidos", meaning: { es: "Dinero que te dan hoy por algo que entregarás después, en pesos.", en: "Money given to you today for something you will deliver later, in pesos." } },
            ],
            steps: [
              { es: "Para los ingresos, suma solo lo vendido o entregado en este mes, de contado o a crédito.", en: "For revenue, add only what was sold or delivered this month, for cash or on credit." },
              { es: "Para los cobros, suma solo el dinero que entró este mes, sin importar cuándo fue la venta.", en: "For collections, add only the money that came in this month, regardless of when the sale happened." },
              { es: "Deja fuera de los ingresos los préstamos y las aportaciones del dueño: traen dinero, pero no son ventas.", en: "Leave loans and owner contributions out of revenue: they bring money, but they are not sales." },
            ],
            example: {
              es: "Una estética en abril: cortes de contado $18,000; servicio para una boda a crédito $7,000; cobra $3,000 de un servicio de marzo; recibe un anticipo de $2,000 para un evento de mayo. Ingresos de abril = 18,000 + 7,000 = **$25,000**. Cobros de abril = 18,000 + 3,000 + 2,000 = **$23,000**.",
              en: "A beauty salon in April: cash haircuts $18,000; a wedding service on credit $7,000; collects $3,000 for a March service; receives a $2,000 advance for a May event. April revenue = 18,000 + 7,000 = **$25,000**. April collections = 18,000 + 3,000 + 2,000 = **$23,000**.",
            },
            mistake: {
              es: "Sumar como ingreso del mes un cobro de una venta pasada o un anticipo. Ese dinero entra hoy, pero el ingreso pertenece a otro mes.",
              en: "Counting as this month's revenue a collection from a past sale or an advance. That money comes in today, but the revenue belongs to another month.",
            },
          },
        ],
        bullets: [
          { es: "Venta de contado: ingreso y cobro al mismo tiempo.", en: "Cash sale: revenue and collection at the same time." },
          { es: "Venta a crédito: ingreso hoy, cobro después.", en: "Credit sale: revenue today, collection later." },
          { es: "Anticipo de cliente: cobro hoy, ingreso después.", en: "Customer advance: collection today, revenue later." },
          { es: "Préstamo o aportación del dueño: entra dinero, pero no es ingreso.", en: "Loan or owner contribution: money comes in, but it is not revenue." },
        ],
      },
      {
        heading: { es: "Diferencia entre gastos y pagos", en: "Expenses vs. payments" },
        body: [
          {
            es: "Un **gasto** se reconoce cuando **usas o consumes** algo para operar: la luz del mes, el trabajo de tus empleados, la renta del local. Un **pago** es cuando **el dinero sale**. A veces coinciden y a veces no.",
            en: "An **expense** is recognized when **you use or consume** something to operate: the month's electricity, your employees' work, the shop rent. A **payment** is when **money goes out**. Sometimes they coincide and sometimes they do not.",
          },
          {
            es: "Hay pagos que **no son gasto** del periodo: pagar una deuda a un proveedor, devolver parte de un préstamo o comprar una computadora (es un activo que se usará varios años; su costo se reparte poco a poco con la depreciación). Y hay gastos que **todavía no se pagan**, como el recibo de luz que llega este mes y pagarás el siguiente.",
            en: "Some payments are **not an expense** of the period: paying a supplier debt, repaying part of a loan or buying a computer (it is an asset used for several years; its cost is spread little by little through depreciation). And some expenses are **not yet paid**, like the electricity bill that arrives this month and you will pay next month.",
          },
          {
            es: "Mini ejemplo: un taller paga en el mes $8,000 de renta del mes y $20,000 por una compresora. Gasto del mes: **$8,000**. Pagos del mes: **$28,000**.",
            en: "Mini example: a workshop pays $8,000 of rent for the month and $20,000 for a compressor. Expense for the month: **$8,000**. Payments for the month: **$28,000**.",
          },
        ],
        formulas: [
          {
            name: { es: "Gastos del mes y pagos del mes", en: "Expenses for the month and payments for the month" },
            expression: "Gastos del mes = Todo lo consumido en el mes (pagado o no)  |  Pagos del mes = Gastos pagados + Compras de activos de contado + Pagos de deudas y retiros",
            variables: [
              { symbol: "Gastos del mes", meaning: { es: "Lo que usaste para operar en el mes, en pesos: costo de lo vendido, renta, sueldos, luz del mes. Cuenta aunque no lo hayas pagado.", en: "What you used to operate in the month, in pesos: cost of goods sold, rent, wages, the month's electricity. It counts even if unpaid." } },
              { symbol: "Pagos del mes", meaning: { es: "Todo el dinero que salió en el mes, en pesos.", en: "All the money that went out in the month, in pesos." } },
              { symbol: "Gastos pagados", meaning: { es: "La parte de los gastos que sí pagaste en el mes, en pesos.", en: "The part of the expenses you actually paid in the month, in pesos." } },
              { symbol: "Compras de activos de contado", meaning: { es: "Equipo, muebles, terrenos o vehículos pagados en el mes, en pesos. No son gasto del mes.", en: "Equipment, furniture, land or vehicles paid for in the month, in pesos. They are not an expense of the month." } },
              { symbol: "Pagos de deudas y retiros", meaning: { es: "Lo que pagaste a proveedores o al banco por deudas, y lo que el dueño sacó para uso personal, en pesos. Tampoco son gasto.", en: "What you paid suppliers or the bank on debts, and what the owner took for personal use, in pesos. They are not expenses either." } },
            ],
            steps: [
              { es: "Para los gastos, suma todo lo que se consumió en el mes, aunque se pague después.", en: "For expenses, add everything used up in the month, even if paid later." },
              { es: "Para los pagos, suma todo el dinero que salió: gastos pagados, compras de equipo, pagos de deudas y retiros.", en: "For payments, add all the money that went out: expenses paid, equipment purchases, debt payments and withdrawals." },
              { es: "Revisa que el equipo comprado y los pagos de deudas estén solo en pagos, no en gastos.", en: "Check that equipment bought and debt payments are only in payments, not in expenses." },
            ],
            example: {
              es: "Una papelería en mayo: paga la renta de mayo, $5,000; consume luz por $900 que pagará en junio; compra una impresora de contado por $4,000; paga $3,000 a un proveedor por una deuda anterior. Gastos de mayo = 5,000 + 900 = **$5,900**. Pagos de mayo = 5,000 + 4,000 + 3,000 = **$12,000**.",
              en: "A stationery shop in May: pays May rent, $5,000; uses $900 of electricity it will pay in June; buys a printer for $4,000 in cash; pays a supplier $3,000 on an old debt. May expenses = 5,000 + 900 = **$5,900**. May payments = 5,000 + 4,000 + 3,000 = **$12,000**.",
            },
            mistake: {
              es: "Contar como gasto del mes la compra de un equipo. Es un activo que durará años; solo saca efectivo.",
              en: "Counting an equipment purchase as an expense of the month. It is an asset that will last years; it only uses cash.",
            },
          },
        ],
      },
      {
        heading: { es: "Ejemplos de rentabilidad y liquidez", en: "Examples of profitability and liquidity" },
        body: [
          {
            es: "**Rentabilidad** es la capacidad de un negocio de **generar utilidad**: que sus ingresos superen a sus costos y gastos. **Liquidez** es tener **efectivo suficiente para pagar a tiempo** lo que debes: sueldos, renta, proveedores.",
            en: "**Profitability** is a business's ability to **generate profit**: revenue exceeding costs and expenses. **Liquidity** is having **enough cash to pay on time** what you owe: wages, rent, suppliers.",
          },
          {
            es: "Un negocio puede ser **rentable sin liquidez**: vende mucho a crédito, tiene buena utilidad, pero sus clientes no le han pagado y no le alcanza para la nómina. También puede tener **liquidez sin rentabilidad**: recibió un préstamo y tiene dinero en el banco, pero cada mes pierde.",
            en: "A business can be **profitable without liquidity**: it sells a lot on credit and shows good profit, but its customers have not paid and it cannot cover payroll. It can also have **liquidity without profitability**: it received a loan and has money in the bank, but it loses money every month.",
          },
          {
            es: "Por eso se revisan **juntos** el estado de resultado integral (¿gano?) y el estado de flujos de efectivo (¿tengo con qué pagar?). Ninguno basta por sí solo.",
            en: "That is why the statement of comprehensive income (am I making money?) and the cash flow statement (can I pay?) are reviewed **together**. Neither is enough on its own.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad del periodo (¿gano?)", en: "Profit for the period (am I earning?)" },
            expression: "Utilidad = Ingresos − Costo de ventas − Gastos",
            variables: [
              { symbol: "Utilidad", meaning: { es: "Lo que ganó el negocio en el periodo, en pesos. Si es negativa, es pérdida.", en: "What the business earned in the period, in pesos. If negative, it is a loss." } },
              { symbol: "Ingresos", meaning: { es: "Todas las ventas del periodo, de contado y a crédito, en pesos.", en: "All the period's sales, for cash and on credit, in pesos." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que costó la mercancía vendida en el periodo, en pesos.", en: "What the goods sold in the period cost, in pesos." } },
              { symbol: "Gastos", meaning: { es: "Todos los gastos del periodo, pagados o pendientes, en pesos. No incluye compras de equipo.", en: "All the period's expenses, paid or pending, in pesos. Equipment purchases are not included." } },
            ],
            steps: [
              { es: "Toma todas las ventas del periodo, cobradas o no.", en: "Take all the period's sales, collected or not." },
              { es: "Resta el costo de lo vendido.", en: "Subtract the cost of what was sold." },
              { es: "Resta todos los gastos del periodo, pagados o no; deja fuera equipo, préstamos y pagos de deudas.", en: "Subtract all the period's expenses, paid or not; leave out equipment, loans and debt payments." },
            ],
            example: {
              es: "Una juguetería en noviembre vende $50,000 ($35,000 de contado y $15,000 a crédito). Los juguetes vendidos costaron $20,000 y sus gastos fueron $10,000 (pagó $8,000). Además compra un estante de contado por $9,000. Utilidad = 50,000 − 20,000 − 10,000 = **$20,000**. El estante no se resta: es un activo.",
              en: "A toy store in November sells $50,000 ($35,000 for cash and $15,000 on credit). The toys sold cost $20,000 and its expenses were $10,000 (it paid $8,000). It also buys a shelf for $9,000 in cash. Profit = 50,000 − 20,000 − 10,000 = **$20,000**. The shelf is not subtracted: it is an asset.",
            },
            interpret: {
              es: "Mide la **rentabilidad**: si es positiva, el negocio gana; pero no dice si tiene efectivo para pagar.",
              en: "It measures **profitability**: if positive, the business is earning; but it does not say whether it has cash to pay.",
            },
            mistake: {
              es: "Restar la compra de un equipo o usar solo lo cobrado en lugar de todas las ventas.",
              en: "Subtracting an equipment purchase or using only what was collected instead of all sales.",
            },
          },
          {
            name: { es: "Cambio en efectivo (¿tengo con qué pagar?)", en: "Change in cash (can I pay?)" },
            expression: "Cambio en efectivo = Cobros − Pagos",
            variables: [
              { symbol: "Cambio en efectivo", meaning: { es: "Cuánto subió (positivo) o bajó (negativo) el dinero del negocio en el periodo, en pesos.", en: "How much the business's money went up (positive) or down (negative) in the period, in pesos." } },
              { symbol: "Cobros", meaning: { es: "Todo el dinero que entró, en pesos: ventas de contado, cobros a clientes, anticipos, préstamos y aportaciones.", en: "All the money that came in, in pesos: cash sales, customer collections, advances, loans and contributions." } },
              { symbol: "Pagos", meaning: { es: "Todo el dinero que salió, en pesos: gastos pagados, mercancía pagada, compras de equipo, pagos de deudas y retiros.", en: "All the money that went out, in pesos: expenses paid, goods paid for, equipment purchases, debt payments and withdrawals." } },
            ],
            steps: [
              { es: "Suma todo el dinero que entró de verdad en el periodo.", en: "Add all the money that actually came in during the period." },
              { es: "Suma todo el dinero que salió de verdad, incluyendo compras de equipo.", en: "Add all the money that actually went out, including equipment purchases." },
              { es: "Resta: cobros − pagos. Si da negativo, escríbelo con signo menos: el efectivo bajó.", en: "Subtract: collections − payments. If negative, write it with a minus sign: cash went down." },
            ],
            example: {
              es: "La misma juguetería: cobros = $35,000 (solo lo de contado). Pagos = juguetes 20,000 + gastos pagados 8,000 + estante 9,000 = $37,000. Cambio en efectivo = 35,000 − 37,000 = **−$2,000**. Ganó $20,000, pero su efectivo bajó $2,000.",
              en: "The same toy store: collections = $35,000 (only the cash sales). Payments = toys 20,000 + expenses paid 8,000 + shelf 9,000 = $37,000. Change in cash = 35,000 − 37,000 = **−$2,000**. It earned $20,000, but its cash fell by $2,000.",
            },
            interpret: {
              es: "Mide la **liquidez**: si es negativo varios meses seguidos, el negocio puede quedarse sin dinero para la nómina aunque tenga utilidad.",
              en: "It measures **liquidity**: if it is negative several months in a row, the business can run out of money for payroll even if it is profitable.",
            },
            mistake: {
              es: "Usar las ventas totales como cobros. Las ventas a crédito todavía no son dinero en la caja.",
              en: "Using total sales as collections. Credit sales are not yet money in the till.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Utilidad positiva, efectivo negativo", en: "Positive profit, negative cash" },
        problem: {
          es: "Un taller de bicicletas presta servicios por $50,000 en el mes: cobra $30,000 y $20,000 quedan a crédito. Sus gastos del mes son $35,000 y los paga todos. Además compra herramienta por $25,000 de contado. Calcula la utilidad y el cambio en efectivo.",
          en: "A bike repair shop performs services for $50,000 in the month: it collects $30,000 and $20,000 is on credit. Its expenses for the month are $35,000 and it pays all of them. It also buys tools for $25,000 in cash. Compute profit and the change in cash.",
        },
        steps: [
          { es: "Utilidad = ingresos − gastos = 50,000 − 35,000 = $15,000. La herramienta es activo, no gasto del mes.", en: "Profit = revenue − expenses = 50,000 − 35,000 = $15,000. The tools are an asset, not an expense for the month." },
          { es: "Cobros = $30,000. Pagos = 35,000 + 25,000 = $60,000.", en: "Collections = $30,000. Payments = 35,000 + 25,000 = $60,000." },
          { es: "Cambio en efectivo = 30,000 − 60,000 = −$30,000.", en: "Change in cash = 30,000 − 60,000 = −$30,000." },
        ],
        result: { es: "Utilidad de $15,000, pero el efectivo bajó $30,000: es rentable, pero debe cuidar su liquidez.", en: "Profit of $15,000, but cash fell by $30,000: it is profitable, but must watch its liquidity." },
      },
      {
        title: { es: "Mucho efectivo, pero con pérdida", en: "Lots of cash, but a loss" },
        problem: {
          es: "Una diseñadora gráfica recibe en su primer mes un préstamo de $40,000 y un anticipo de $10,000 por un logotipo que entregará el próximo mes. No entrega ningún trabajo este mes y paga $8,000 de gastos. Calcula la utilidad y el cambio en efectivo.",
          en: "A graphic designer receives a $40,000 loan in her first month and a $10,000 advance for a logo she will deliver next month. She delivers no work this month and pays $8,000 of expenses. Compute profit and the change in cash.",
        },
        steps: [
          { es: "Ingresos del mes: $0. El préstamo es deuda y el anticipo es un ingreso del próximo mes.", en: "Revenue for the month: $0. The loan is debt and the advance is next month's revenue." },
          { es: "Utilidad = 0 − 8,000 = −$8,000 (pérdida).", en: "Profit = 0 − 8,000 = −$8,000 (loss)." },
          { es: "Cambio en efectivo = 40,000 + 10,000 − 8,000 = +$42,000.", en: "Change in cash = 40,000 + 10,000 − 8,000 = +$42,000." },
        ],
        result: { es: "Pérdida de $8,000 aunque el efectivo subió $42,000: tiene liquidez, pero aún no es rentable.", en: "A loss of $8,000 even though cash rose by $42,000: she has liquidity, but is not yet profitable." },
      },
    ],
    keyPoints: [
      { es: "Ingreso = cuando vendes o prestas el servicio; cobro = cuando entra el dinero.", en: "Revenue = when you sell or perform the service; collection = when money comes in." },
      { es: "Gasto = cuando consumes algo para operar; pago = cuando sale el dinero.", en: "Expense = when you consume something to operate; payment = when money goes out." },
      { es: "Préstamos y aportaciones dan efectivo, pero no son ingresos.", en: "Loans and contributions bring cash, but they are not revenue." },
      { es: "Comprar equipo o pagar deudas saca efectivo, pero no es gasto del periodo.", en: "Buying equipment or paying debts uses cash, but is not an expense of the period." },
      { es: "Rentabilidad (¿gano?) y liquidez (¿puedo pagar?) se revisan juntas.", en: "Profitability (am I earning?) and liquidity (can I pay?) are reviewed together." },
    ],
    normativeNote: NOTE_NIF,
    exerciseIds: ['N1C-023', 'N1C-024', 'N1C-025', 'N1C-026', 'N1C-027', 'N1C-028', 'N1C-029'],
  },

  // ───────────────────────────── L1-15 ─────────────────────────────
  {
    id: 'L1-15',
    level: 1,
    topicIds: ['1.15'],
    title: { es: "Proyecto integrador: mi primera empresa", en: "Capstone project: my first business" },
    summary: {
      es: "Con el caso de la cafetería «Café Aroma» aplicas todo el nivel: clasificas operaciones, usas la ecuación contable, registras con partida doble, llevas cuentas T e interpretas los resultados.",
      en: "With the case of the coffee shop «Café Aroma» you apply the whole level: you classify transactions, use the accounting equation, record with double entry, keep T-accounts and interpret the results.",
    },
    minutes: 22,
    objectives: [
      { es: "Clasificar las operaciones de un negocio real por su efecto en la ecuación contable.", en: "Classify a business's transactions by their effect on the accounting equation." },
      { es: "Registrar asientos de partida doble y pasarlos a cuentas T.", en: "Record double-entry entries and post them to T-accounts." },
      { es: "Calcular la utilidad del mes y los totales de activo, pasivo y capital.", en: "Compute the month's profit and total assets, liabilities and equity." },
      { es: "Interpretar la diferencia entre utilidad y efectivo en el caso.", en: "Interpret the difference between profit and cash in the case." },
    ],
    theory: [
      {
        heading: { es: "Clasificación de operaciones", en: "Classifying transactions" },
        body: [
          {
            es: "Sofía abre la cafetería **«Café Aroma»**. Para simplificar, en este proyecto **no consideramos IVA ni depreciación**. Estas son las operaciones de su primer mes:",
            en: "Sofía opens the coffee shop **«Café Aroma»**. To keep things simple, in this project **we ignore VAT and depreciation**. These are the transactions of her first month:",
          },
          {
            es: "Antes de registrar, pregúntate en cada una: ¿qué cuentas cambian?, ¿son activo, pasivo, capital, ingreso o gasto?, ¿aumentan o disminuyen? Por ejemplo, en la operación (3) aumenta un activo (Inventarios) y aumenta un pasivo (Proveedores). En la (4) aumenta Bancos y nace un ingreso (Ventas).",
            en: "Before recording, ask about each one: which accounts change? are they assets, liabilities, equity, revenue or expenses? do they increase or decrease? For example, in transaction (3) an asset increases (Inventory) and a liability increases (Accounts payable). In (4) Bank increases and revenue arises (Sales).",
          },
        ],
        bullets: [
          { es: "(1) Sofía aporta $100,000 a la cuenta bancaria del negocio.", en: "(1) Sofía contributes $100,000 to the business bank account." },
          { es: "(2) Compra cafetera y muebles por $45,000 con transferencia.", en: "(2) Buys a coffee machine and furniture for $45,000 by transfer." },
          { es: "(3) Compra café, leche y pan por $12,000 a crédito.", en: "(3) Buys coffee, milk and bread for $12,000 on credit." },
          { es: "(4) Vende $30,000 de contado (depositado); lo vendido costó $9,000.", en: "(4) Sells $30,000 for cash (deposited); what was sold cost $9,000." },
          { es: "(5) Paga renta $7,000; (6) paga $8,000 al proveedor; (7) paga sueldo de $6,000.", en: "(5) Pays rent $7,000; (6) pays $8,000 to the supplier; (7) pays wages of $6,000." },
        ],
      },
      {
        heading: { es: "Aplicación de la ecuación contable", en: "Applying the accounting equation" },
        body: [
          {
            es: "Sigamos los saldos al final del mes. **Bancos**: 100,000 − 45,000 + 30,000 − 7,000 − 8,000 − 6,000 = $64,000. **Mobiliario y equipo**: $45,000. **Inventarios**: 12,000 − 9,000 = $3,000. **Activo total = $112,000**.",
            en: "Let's follow the balances at month end. **Bank**: 100,000 − 45,000 + 30,000 − 7,000 − 8,000 − 6,000 = $64,000. **Furniture and equipment**: $45,000. **Inventory**: 12,000 − 9,000 = $3,000. **Total assets = $112,000**.",
          },
          {
            es: "**Proveedores**: 12,000 − 8,000 = $4,000, que es todo el **pasivo**. La **utilidad** del mes es 30,000 − 9,000 − 7,000 − 6,000 = $8,000, y el **capital** es la aportación más la utilidad: 100,000 + 8,000 = $108,000.",
            en: "**Accounts payable**: 12,000 − 8,000 = $4,000, which is all the **liabilities**. The month's **profit** is 30,000 − 9,000 − 7,000 − 6,000 = $8,000, and **equity** is the contribution plus profit: 100,000 + 8,000 = $108,000.",
          },
          {
            es: "Comprobación: Pasivo + Capital = 4,000 + 108,000 = $112,000 = Activo. **La ecuación cuadra.**",
            en: "Check: Liabilities + Equity = 4,000 + 108,000 = $112,000 = Assets. **The equation balances.**",
          },
        ],
        formulas: [
          {
            name: { es: "Ecuación contable al cierre del mes", en: "Accounting equation at month end" },
            expression: "Activo total = Pasivo total + Capital contable;  Capital contable = Capital inicial + Utilidad neta",
            variables: [
              { symbol: "Activo total", meaning: { es: "La suma de los saldos finales de lo que tiene el negocio, en pesos: Bancos, Clientes, Inventarios, Mobiliario y equipo.", en: "The sum of the ending balances of what the business has, in pesos: Bank, Accounts receivable, Inventory, Furniture and equipment." } },
              { symbol: "Pasivo total", meaning: { es: "La suma de lo que se debe al final, en pesos: Proveedores y préstamos.", en: "The sum of what is owed at the end, in pesos: Accounts payable and loans." } },
              { symbol: "Capital contable", meaning: { es: "Lo que es de los dueños al final del mes, en pesos.", en: "What belongs to the owners at month end, in pesos." } },
              { symbol: "Capital inicial", meaning: { es: "El capital al empezar el mes, en pesos. En el primer mes es la aportación del dueño.", en: "Equity at the start of the month, in pesos. In the first month it is the owner's contribution." } },
              { symbol: "Utilidad neta", meaning: { es: "Lo que ganó el negocio en el mes, en pesos.", en: "What the business earned in the month, in pesos." } },
            ],
            steps: [
              { es: "Calcula el saldo final de cada activo (saldo inicial + aumentos − disminuciones) y súmalos.", en: "Compute each asset's ending balance (opening + increases − decreases) and add them up." },
              { es: "Calcula el saldo final de cada pasivo y súmalos.", en: "Compute each liability's ending balance and add them up." },
              { es: "Calcula el capital: capital inicial + utilidad neta del mes.", en: "Compute equity: opening equity + the month's net profit." },
              { es: "Comprueba que Pasivo total + Capital contable dé exactamente el Activo total.", en: "Check that Total liabilities + Equity gives exactly Total assets." },
            ],
            example: {
              es: "Una taquería al cierre: Bancos $40,000 + Clientes $3,000 + Inventarios $5,000 + Equipo $30,000 = Activo $78,000. Proveedores $6,000 + Préstamo $10,000 = Pasivo $16,000. Capital = 55,000 + utilidad 7,000 = $62,000. Comprobación: 16,000 + 62,000 = **$78,000**. Cuadra.",
              en: "A taco stand at month end: Bank $40,000 + Accounts receivable $3,000 + Inventory $5,000 + Equipment $30,000 = Assets $78,000. Accounts payable $6,000 + Loan $10,000 = Liabilities $16,000. Equity = 55,000 + profit 7,000 = $62,000. Check: 16,000 + 62,000 = **$78,000**. It balances.",
            },
            interpret: {
              es: "Si no cuadra, falta algo: casi siempre un saldo olvidado o una operación anotada solo en una cuenta.",
              en: "If it does not balance, something is missing: almost always a forgotten balance or a transaction posted to only one account.",
            },
            mistake: {
              es: "Olvidar el préstamo en el pasivo o lo que todavía deben los clientes en el activo.",
              en: "Forgetting the loan in liabilities or what customers still owe in assets.",
            },
          },
        ],
      },
      {
        heading: { es: "Ejercicios de partida doble y cuentas T", en: "Double-entry and T-account practice" },
        body: [
          {
            es: "Cada operación se registra con al menos un cargo y un abono por el mismo importe. Por ejemplo, (1) cargo a Bancos y abono a Capital social por $100,000; (3) cargo a Inventarios y abono a Proveedores por $12,000; (4) cargo a Bancos y abono a Ventas por $30,000, y otro asiento con cargo a Costo de ventas y abono a Inventarios por $9,000.",
            en: "Each transaction is recorded with at least one debit and one credit for the same amount. For example, (1) debit Bank and credit Share capital $100,000; (3) debit Inventory and credit Accounts payable $12,000; (4) debit Bank and credit Sales $30,000, plus another entry debiting Cost of goods sold and crediting Inventory $9,000.",
          },
          {
            es: "Luego se pasan a las cuentas T. En la cuenta T de **Bancos** el debe suma 100,000 + 30,000 = $130,000 y el haber suma 45,000 + 7,000 + 8,000 + 6,000 = $66,000. Saldo = **$64,000 deudor**, igual que en la ecuación.",
            en: "Then they are posted to T-accounts. In the **Bank** T-account the debit side totals 100,000 + 30,000 = $130,000 and the credit side 45,000 + 7,000 + 8,000 + 6,000 = $66,000. Balance = **$64,000 debit**, the same as in the equation.",
          },
        ],
        formulas: [
          {
            name: { es: "Saldo final de una cuenta", en: "Ending balance of an account" },
            expression: "Saldo final = Saldo inicial + Aumentos − Disminuciones",
            variables: [
              { symbol: "Saldo final", meaning: { es: "Lo que queda en la cuenta al cerrar el mes, en pesos.", en: "What is left in the account at month end, in pesos." } },
              { symbol: "Saldo inicial", meaning: { es: "Lo que había en la cuenta al empezar el mes, en pesos.", en: "What was in the account at the start of the month, in pesos." } },
              { symbol: "Aumentos", meaning: { es: "Los movimientos que hacen crecer la cuenta, en pesos. En un activo como Bancos son los cargos (debe).", en: "The movements that make the account grow, in pesos. In an asset like Bank they are the debits." } },
              { symbol: "Disminuciones", meaning: { es: "Los movimientos que hacen bajar la cuenta, en pesos. En un activo como Bancos son los abonos (haber).", en: "The movements that make the account go down, in pesos. In an asset like Bank they are the credits." } },
            ],
            steps: [
              { es: "Revisa cada operación y quédate solo con las que tocan esta cuenta (las compras y ventas a crédito no tocan Bancos).", en: "Go through each transaction and keep only the ones that touch this account (credit purchases and sales do not touch Bank)." },
              { es: "Suma los aumentos; en un activo, saldo inicial + aumentos es la suma del debe.", en: "Add the increases; in an asset, opening balance + increases is the debit total." },
              { es: "Suma las disminuciones; en un activo, es la suma del haber.", en: "Add the decreases; in an asset, that is the credit total." },
              { es: "Calcula: saldo inicial + aumentos − disminuciones.", en: "Compute: opening balance + increases − decreases." },
            ],
            example: {
              es: "Bancos de una panadería: saldo inicial $20,000; entran ventas de contado $15,000 y un cobro a cliente $2,000; salen renta $5,000 y pago a proveedor $4,000. Aumentos = 15,000 + 2,000 = $17,000 (suma del debe = 20,000 + 17,000 = $37,000). Disminuciones = 5,000 + 4,000 = $9,000. Saldo = 20,000 + 17,000 − 9,000 = **$28,000 deudor**.",
              en: "A bakery's Bank account: opening balance $20,000; cash sales of $15,000 and a $2,000 customer collection come in; rent of $5,000 and a $4,000 supplier payment go out. Increases = 15,000 + 2,000 = $17,000 (debit total = 20,000 + 17,000 = $37,000). Decreases = 5,000 + 4,000 = $9,000. Balance = 20,000 + 17,000 − 9,000 = **$28,000 debit**.",
            },
            mistake: {
              es: "Meter en Bancos las ventas o compras a crédito. Si no se movió dinero del banco, no van en esa cuenta.",
              en: "Putting credit sales or purchases into Bank. If no bank money moved, they do not belong in that account.",
            },
          },
        ],
      },
      {
        heading: { es: "Evaluación final", en: "Final assessment" },
        body: [
          {
            es: "Con los saldos se ven los estados financieros básicos de Café Aroma: **resultado integral** con utilidad de $8,000; **situación financiera** con activo de $112,000 = pasivo $4,000 + capital $108,000; y **flujos de efectivo** de 0 a $64,000.",
            en: "With the balances you can see Café Aroma's basic financial statements: **comprehensive income** with a profit of $8,000; **financial position** with assets of $112,000 = liabilities $4,000 + equity $108,000; and **cash flows** from 0 to $64,000.",
          },
          {
            es: "En el flujo: operación = 30,000 − 7,000 − 8,000 − 6,000 = +$9,000; inversión = −$45,000 (cafetera y muebles); financiamiento = +$100,000 (aportación de Sofía). La utilidad ($8,000) y el efectivo de operación ($9,000) no son iguales, porque al proveedor se le pagaron $8,000 mientras el costo de lo vendido fue de $9,000.",
            en: "In cash flows: operating = 30,000 − 7,000 − 8,000 − 6,000 = +$9,000; investing = −$45,000 (coffee machine and furniture); financing = +$100,000 (Sofía's contribution). Profit ($8,000) and operating cash ($9,000) differ because the supplier was paid $8,000 while the cost of what was sold was $9,000.",
          },
          {
            es: "Ahora te toca: el reto de este tema usa el **segundo mes** de Café Aroma. Si dudas, regresa a los temas anteriores: ecuación contable, cargos y abonos, partida doble y cuentas T.",
            en: "Now it's your turn: this topic's challenge uses Café Aroma's **second month**. If in doubt, go back to earlier topics: the accounting equation, debits and credits, double entry and T-accounts.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad del mes en el caso", en: "Profit for the month in the case" },
            expression: "Utilidad bruta = Ventas totales − Costo de ventas;  Utilidad neta = Utilidad bruta − Gastos del mes",
            variables: [
              { symbol: "Ventas totales", meaning: { es: "Todas las ventas del mes, de contado y a crédito, en pesos.", en: "All of the month's sales, for cash and on credit, in pesos." } },
              { symbol: "Costo de ventas", meaning: { es: "Lo que costaron los insumos que se vendieron, en pesos.", en: "What the supplies that were sold cost, in pesos." } },
              { symbol: "Utilidad bruta", meaning: { es: "Lo que dejan las ventas después de su costo, en pesos.", en: "What sales leave after their cost, in pesos." } },
              { symbol: "Gastos del mes", meaning: { es: "Renta, sueldos, publicidad y otros gastos de operación del mes, en pesos.", en: "Rent, wages, advertising and other operating expenses of the month, in pesos." } },
              { symbol: "Utilidad neta", meaning: { es: "Lo que ganó el negocio en el mes, en pesos; aumenta el capital.", en: "What the business earned in the month, in pesos; it increases equity." } },
            ],
            steps: [
              { es: "Suma las ventas de contado y las de crédito: son las ventas totales.", en: "Add cash sales and credit sales: those are total sales." },
              { es: "Resta el costo de ventas: es la utilidad bruta.", en: "Subtract cost of sales: that is gross profit." },
              { es: "Suma los gastos del mes y réstalos: es la utilidad neta.", en: "Add the month's expenses and subtract them: that is net profit." },
              { es: "Deja fuera las compras de equipo, los préstamos y los pagos a proveedores: no son ingresos ni gastos.", en: "Leave out equipment purchases, loans and supplier payments: they are neither revenue nor expenses." },
            ],
            example: {
              es: "Una frutería vende $25,000 de contado y $5,000 a crédito: ventas = 25,000 + 5,000 = $30,000. Lo vendido costó $11,000: utilidad bruta = 30,000 − 11,000 = $19,000. Gastos: renta 6,000 + sueldos 5,000 + luz 1,000 = $12,000. Utilidad neta = 19,000 − 12,000 = **$7,000**.",
              en: "A fruit shop sells $25,000 for cash and $5,000 on credit: sales = 25,000 + 5,000 = $30,000. What was sold cost $11,000: gross profit = 30,000 − 11,000 = $19,000. Expenses: rent 6,000 + wages 5,000 + electricity 1,000 = $12,000. Net profit = 19,000 − 12,000 = **$7,000**.",
            },
            mistake: {
              es: "Restar el horno comprado o el pago al proveedor como si fueran gastos. Solo sacan efectivo.",
              en: "Subtracting the oven bought or the supplier payment as if they were expenses. They only use cash.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Registrar una venta con su costo", en: "Recording a sale with its cost" },
        problem: {
          es: "En su primer mes Café Aroma vende $30,000 de contado (se deposita en el banco). Los insumos que se consumieron en esas ventas costaron $9,000. Registra los asientos.",
          en: "In its first month Café Aroma sells $30,000 for cash (deposited in the bank). The supplies used up in those sales cost $9,000. Record the entries.",
        },
        steps: [
          { es: "Asiento 1: cargo a Bancos $30,000 (entra dinero); abono a Ventas $30,000 (nace el ingreso).", en: "Entry 1: debit Bank $30,000 (money comes in); credit Sales $30,000 (revenue arises)." },
          { es: "Asiento 2: cargo a Costo de ventas $9,000 (se consumió); abono a Inventarios $9,000 (salen los insumos).", en: "Entry 2: debit Cost of goods sold $9,000 (used up); credit Inventory $9,000 (supplies leave)." },
          { es: "Comprobación: cargos 30,000 + 9,000 = 39,000 = abonos 30,000 + 9,000.", en: "Check: debits 30,000 + 9,000 = 39,000 = credits 30,000 + 9,000." },
          { es: "Utilidad bruta de la venta = 30,000 − 9,000 = $21,000.", en: "Gross profit on the sale = 30,000 − 9,000 = $21,000." },
        ],
        result: { es: "Dos asientos cuadrados; la venta deja una utilidad bruta de $21,000.", en: "Two balanced entries; the sale leaves a gross profit of $21,000." },
      },
      {
        title: { es: "Balanza de comprobación del primer mes", en: "First-month trial balance" },
        problem: {
          es: "Arma la balanza de comprobación de Café Aroma al final del primer mes con los saldos del caso.",
          en: "Build Café Aroma's trial balance at the end of the first month using the balances from the case.",
        },
        steps: [
          { es: "Saldos deudores: Bancos 64,000 + Inventarios 3,000 + Mobiliario y equipo 45,000 + Costo de ventas 9,000 + Renta 7,000 + Sueldos 6,000 = $134,000.", en: "Debit balances: Bank 64,000 + Inventory 3,000 + Furniture and equipment 45,000 + Cost of goods sold 9,000 + Rent 7,000 + Wages 6,000 = $134,000." },
          { es: "Saldos acreedores: Proveedores 4,000 + Capital social 100,000 + Ventas 30,000 = $134,000.", en: "Credit balances: Accounts payable 4,000 + Share capital 100,000 + Sales 30,000 = $134,000." },
          { es: "Ambas columnas suman $134,000: la balanza cuadra.", en: "Both columns total $134,000: the trial balance balances." },
        ],
        result: { es: "Balanza cuadrada con $134,000 en cada columna.", en: "Balanced trial balance with $134,000 in each column." },
      },
    ],
    keyPoints: [
      { es: "Antes de registrar, identifica qué cuentas cambian y si suben o bajan.", en: "Before recording, identify which accounts change and whether they go up or down." },
      { es: "La ecuación contable debe cuadrar después de cada operación.", en: "The accounting equation must balance after every transaction." },
      { es: "Cada asiento cuadra (cargos = abonos) y se pasa a sus cuentas T.", en: "Each entry balances (debits = credits) and is posted to its T-accounts." },
      { es: "La utilidad aumenta el capital; las aportaciones también, pero no son ingreso.", en: "Profit increases equity; contributions do too, but they are not revenue." },
      { es: "Utilidad y efectivo cuentan historias distintas: revísalas juntas.", en: "Profit and cash tell different stories: review them together." },
    ],
    exerciseIds: ['N1C-030', 'N1C-031', 'N1C-032', 'N1C-033', 'N1C-034', 'N1C-035', 'N1C-036', 'N1C-037'],
  },
]

const CASE_AROMA_M2 = {
  es: "Café Aroma, segundo mes (sin IVA ni depreciación). Saldos iniciales: Bancos $64,000; Inventarios $3,000; Mobiliario y equipo $45,000; Proveedores $4,000; Capital contable $108,000. Operaciones: (a) compra insumos por $15,000 a crédito; (b) vende $42,000: $36,000 de contado depositados en el banco y $6,000 a crédito a una oficina vecina; lo vendido costó $14,000; (c) la oficina vecina paga $4,000 de su deuda; (d) recibe un préstamo bancario a largo plazo de $20,000; (e) compra un horno por $20,000 con transferencia; (f) paga renta $7,000, sueldos $6,000 y publicidad en redes $2,000; (g) paga $12,000 al proveedor.",
  en: "Café Aroma, second month (no VAT or depreciation). Opening balances: Bank $64,000; Inventory $3,000; Furniture and equipment $45,000; Accounts payable $4,000; Equity $108,000. Transactions: (a) buys supplies for $15,000 on credit; (b) sells $42,000: $36,000 for cash deposited in the bank and $6,000 on credit to a neighboring office; what was sold cost $14,000; (c) the neighboring office pays $4,000 of its debt; (d) receives a long-term bank loan of $20,000; (e) buys an oven for $20,000 by transfer; (f) pays rent $7,000, wages $6,000 and social media advertising $2,000; (g) pays $12,000 to the supplier.",
}

export const exercises: Exercise[] = [
  // ═════════════════════════ L1-11 ═════════════════════════
  {
    id: 'N1C-001',
    level: 1,
    module: 'L1-11',
    kind: 'mcq',
    flavor: 'tAccount',
    prompt: {
      es: "Dibujas la cuenta T de Caja de tu tiendita. Sacas $300 de la caja para pagar el recibo de luz. ¿Dónde anotas esos $300 en la cuenta T de Caja?",
      en: "You draw the Cash on hand T-account of your corner shop. You take $300 from the till to pay the electricity bill. Where do you write those $300 in the Cash on hand T-account?",
    },
    options: [
      { id: 'N1C-001-a', text: { es: "Del lado izquierdo (debe), porque es un cargo", en: "On the left side (debit), because it is a debit" } },
      { id: 'N1C-001-b', text: { es: "Del lado derecho (haber), porque es un abono que disminuye un activo", en: "On the right side (credit), because it is a credit that decreases an asset" } },
      { id: 'N1C-001-c', text: { es: "Arriba, junto al nombre de la cuenta", en: "On top, next to the account name" } },
      { id: 'N1C-001-d', text: { es: "No se anota: solo se registra en la cuenta de Luz", en: "It is not written: it only goes in the Utilities account" } },
    ],
    correctOptionId: 'N1C-001-b',
    explanation: {
      es: "Caja es un activo: sus aumentos van al debe y sus disminuciones al haber. Si sale dinero, Caja disminuye, así que los $300 se anotan del lado derecho (abono). La otra mitad del asiento es un cargo a Luz, agua y teléfono; por partida doble se anota en las dos cuentas. Error común: pensar que todo lo que se 'mueve' va al debe.",
      en: "Cash on hand is an asset: increases go on the debit side and decreases on the credit side. When money leaves, Cash on hand decreases, so the $300 is written on the right side (credit). The other half of the entry is a debit to Utilities; with double entry it is written in both accounts. Common mistake: thinking every 'movement' goes on the debit side.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1C-002',
    level: 1,
    module: 'L1-11',
    kind: 'truefalse',
    flavor: 'tAccount',
    prompt: {
      es: "En la cuenta T de Proveedores, el saldo inicial se escribe del lado izquierdo (debe) porque es el primer dato que se anota.",
      en: "In the Accounts payable T-account, the opening balance is written on the left side (debit) because it is the first figure recorded.",
    },
    answer: false,
    explanation: {
      es: "Falso. El saldo inicial se anota del lado de la naturaleza de la cuenta, no según el orden en que se escribe. Proveedores es un pasivo de naturaleza acreedora, así que su saldo inicial va en el haber (derecha). Error común: poner todos los saldos iniciales en el debe.",
      en: "False. The opening balance goes on the side of the account's nature, not according to the order in which it is written. Accounts payable is a liability with a credit nature, so its opening balance goes on the credit side (right). Common mistake: placing every opening balance on the debit side.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1C-003',
    level: 1,
    module: 'L1-11',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "Cuenta T de Caja de una papelería. Saldo inicial: $4,000. Ventas en efectivo: $2,500 y $1,800. Salidas de efectivo: compra de papel $1,200, pago de luz $600 y depósito al banco $900.",
      en: "Cash on hand T-account of a stationery shop. Opening balance: $4,000. Cash sales: $2,500 and $1,800. Cash outflows: paper purchase $1,200, electricity payment $600 and bank deposit $900.",
    },
    prompt: {
      es: "Completa las sumas y el saldo de la cuenta T de Caja de la papelería, en pesos.",
      en: "Complete the totals and balance of the stationery shop's Cash on hand T-account, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Suma del debe (incluye saldo inicial)", en: "Total debits (including opening balance)" }, answer: 8300, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Suma del haber", en: "Total credits" }, answer: 2700, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo final deudor", en: "Ending debit balance" }, answer: 5600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Debe: 4,000 + 2,500 + 1,800 = $8,300. Haber: 1,200 + 600 + 900 = $2,700. Saldo: 8,300 − 2,700 = $5,600 deudor. El depósito al banco también es una salida de Caja (aunque el dinero siga siendo del negocio, ahora está en Bancos). Error común: olvidar el saldo inicial en la suma del debe.",
      en: "Debits: 4,000 + 2,500 + 1,800 = $8,300. Credits: 1,200 + 600 + 900 = $2,700. Balance: 8,300 − 2,700 = $5,600 debit. The bank deposit is also an outflow from Cash on hand (the money still belongs to the business, but it is now in Bank). Common mistake: leaving the opening balance out of total debits.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1C-004',
    level: 1,
    module: 'L1-11',
    kind: 'fields',
    flavor: 'tAccount',
    context: {
      es: "Cuenta T de Clientes de una distribuidora. Saldo inicial: $15,000. Ventas a crédito del mes: $7,000 y $4,500. Cobros a clientes: $9,000 y $6,500.",
      en: "Accounts receivable T-account of a distributor. Opening balance: $15,000. Credit sales for the month: $7,000 and $4,500. Collections from customers: $9,000 and $6,500.",
    },
    prompt: {
      es: "Calcula las sumas y el saldo final de la cuenta T de Clientes, en pesos.",
      en: "Compute the totals and the ending balance of the Accounts receivable T-account, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Suma del debe (incluye saldo inicial)", en: "Total debits (including opening balance)" }, answer: 26500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Suma del haber", en: "Total credits" }, answer: 15500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo final deudor", en: "Ending debit balance" }, answer: 11000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Clientes es activo (derecho de cobro): saldo inicial y ventas a crédito van al debe: 15,000 + 7,000 + 4,500 = $26,500. Los cobros reducen el derecho y van al haber: 9,000 + 6,500 = $15,500. Saldo = 26,500 − 15,500 = $11,000 deudor: lo que todavía te deben. Error común: anotar los cobros en el debe porque 'entra dinero'; eso es en Bancos o Caja, no en Clientes.",
      en: "Accounts receivable is an asset (a right to collect): the opening balance and credit sales go on the debit side: 15,000 + 7,000 + 4,500 = $26,500. Collections reduce the right and go on the credit side: 9,000 + 6,500 = $15,500. Balance = 26,500 − 15,500 = $11,000 debit: what customers still owe. Common mistake: posting collections on the debit side because 'money comes in'; that happens in Bank or Cash, not in Accounts receivable.",
    },
    difficulty: 2,
    points: 15,
    competency: 't-accounts',
  },
  {
    id: 'N1C-005',
    level: 1,
    module: 'L1-11',
    kind: 'mcq',
    flavor: 'tAccount',
    prompt: {
      es: "Al final del mes, la cuenta T de Bancos de un negocio suma $40,000 en el debe y $40,000 en el haber. ¿Cuál es su saldo?",
      en: "At month end, a business's Bank T-account totals $40,000 on the debit side and $40,000 on the credit side. What is its balance?",
    },
    options: [
      { id: 'N1C-005-a', text: { es: "$40,000 deudor", en: "$40,000 debit" } },
      { id: 'N1C-005-b', text: { es: "$40,000 acreedor", en: "$40,000 credit" } },
      { id: 'N1C-005-c', text: { es: "Saldo cero: la cuenta está saldada", en: "Zero: the account is settled" } },
      { id: 'N1C-005-d', text: { es: "$80,000 deudor", en: "$80,000 debit" } },
    ],
    correctOptionId: 'N1C-005-c',
    explanation: {
      es: "El saldo es la diferencia entre las sumas: 40,000 − 40,000 = 0. Cuando debe y haber son iguales, la cuenta está saldada: salió todo lo que entró. Error común: sumar ambos lados (80,000); las sumas se restan, no se suman.",
      en: "The balance is the difference between the totals: 40,000 − 40,000 = 0. When debits and credits are equal, the account is settled: everything that came in went out. Common mistake: adding both sides (80,000); the totals are subtracted, not added.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1C-006',
    level: 1,
    module: 'L1-11',
    kind: 'classify',
    flavor: 'tAccount',
    prompt: {
      es: "Cada operación mueve la cuenta T de Bancos. Clasifica si se anota en el debe o en el haber de Bancos.",
      en: "Each transaction moves the Bank T-account. Classify whether it goes on the debit or the credit side of Bank.",
    },
    categories: [
      { id: 'N1C-006-c1', label: { es: "Debe de Bancos (cargo)", en: "Bank debit side (debit)" } },
      { id: 'N1C-006-c2', label: { es: "Haber de Bancos (abono)", en: "Bank credit side (credit)" } },
    ],
    items: [
      { id: 'N1C-006-i1', label: { es: "Se depositan las ventas del día", en: "The day's sales are deposited" }, correctCategoryId: 'N1C-006-c1' },
      { id: 'N1C-006-i2', label: { es: "Se paga la renta del local con transferencia", en: "Shop rent is paid by transfer" }, correctCategoryId: 'N1C-006-c2' },
      { id: 'N1C-006-i3', label: { es: "El banco deposita un préstamo al negocio", en: "The bank deposits a loan into the business account" }, correctCategoryId: 'N1C-006-c1' },
      { id: 'N1C-006-i4', label: { es: "Se transfiere el pago a un proveedor", en: "A payment to a supplier is transferred" }, correctCategoryId: 'N1C-006-c2' },
      { id: 'N1C-006-i5', label: { es: "Un cliente paga su deuda por transferencia", en: "A customer pays their debt by transfer" }, correctCategoryId: 'N1C-006-c1' },
      { id: 'N1C-006-i6', label: { es: "Se compra una computadora pagando con la cuenta del banco", en: "A computer is bought and paid from the bank account" }, correctCategoryId: 'N1C-006-c2' },
    ],
    explanation: {
      es: "Bancos es activo: todo lo que hace entrar dinero a la cuenta (depósitos de ventas, préstamos, cobros) va al debe; todo lo que lo saca (renta, proveedores, compra de equipo) va al haber. Error común: anotar el préstamo en el haber porque 'es una deuda'; la deuda se anota en la cuenta del préstamo, pero en Bancos el dinero entra.",
      en: "Bank is an asset: everything that brings money into the account (sales deposits, loans, collections) goes on the debit side; everything that takes it out (rent, suppliers, equipment purchases) goes on the credit side. Common mistake: posting the loan on the credit side because 'it is a debt'; the debt is recorded in the loan account, but in Bank the money comes in.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },
  {
    id: 'N1C-007',
    level: 1,
    module: 'L1-11',
    kind: 'numeric',
    flavor: 'tAccount',
    context: {
      es: "Cuenta T de Documentos por pagar de un restaurante. Saldo inicial: $50,000. Durante el año paga dos abonos al pagaré de $8,000 cada uno y firma un nuevo pagaré por $20,000.",
      en: "Notes payable T-account of a restaurant. Opening balance: $50,000. During the year it makes two payments of $8,000 each on the note and signs a new note for $20,000.",
    },
    prompt: {
      es: "¿Cuál es el saldo final acreedor de Documentos por pagar del restaurante? Responde en pesos.",
      en: "What is the restaurant's ending credit balance in Notes payable? Answer in pesos.",
    },
    answer: 54000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Es pasivo (acreedora): haber = 50,000 + 20,000 = $70,000; debe (pagos) = 8,000 + 8,000 = $16,000. Saldo = 70,000 − 16,000 = $54,000 acreedor. Error común: restar el pagaré nuevo como si fuera un pago (50,000 − 16,000 − 20,000 = 14,000).",
      en: "It is a liability (credit nature): credits = 50,000 + 20,000 = $70,000; debits (payments) = 8,000 + 8,000 = $16,000. Balance = 70,000 − 16,000 = $54,000 credit. Common mistake: subtracting the new note as if it were a payment (50,000 − 16,000 − 20,000 = 14,000).",
    },
    difficulty: 2,
    points: 15,
    competency: 't-accounts',
  },
  {
    id: 'N1C-008',
    level: 1,
    module: 'L1-11',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para obtener el saldo de una cuenta de naturaleza acreedora, como Proveedores.",
      en: "Complete the formula to get the balance of a credit-nature account, such as Accounts payable.",
    },
    template: 'Saldo acreedor = {{b1}} − {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N1C-008-b1-a', text: { es: "Suma del haber", en: "Total credits" } },
          { id: 'N1C-008-b1-b', text: { es: "Suma del debe", en: "Total debits" } },
          { id: 'N1C-008-b1-c', text: { es: "Saldo de Bancos", en: "Bank balance" } },
        ],
        correctOptionId: 'N1C-008-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'N1C-008-b2-a', text: { es: "Saldo inicial", en: "Opening balance" } },
          { id: 'N1C-008-b2-b', text: { es: "Suma del debe", en: "Total debits" } },
          { id: 'N1C-008-b2-c', text: { es: "Total de ingresos", en: "Total revenue" } },
        ],
        correctOptionId: 'N1C-008-b2-b',
      },
    ],
    explanation: {
      es: "En una cuenta acreedora el haber suele ser mayor, así que el saldo es Suma del haber − Suma del debe. El saldo inicial no se resta: ya forma parte de la suma del haber. Error común: invertir el orden y obtener un número negativo.",
      en: "In a credit-nature account the credit side is usually larger, so the balance is Total credits − Total debits. The opening balance is not subtracted: it is already part of total credits. Common mistake: reversing the order and getting a negative number.",
    },
    difficulty: 1,
    points: 10,
    competency: 't-accounts',
  },

  // ═════════════════════════ L1-12 ═════════════════════════
  {
    id: 'N1C-009',
    level: 1,
    module: 'L1-12',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos hechos son transacciones que la taquería debe registrar en su contabilidad? Selecciona todas las que apliquen.",
      en: "Which of these events are transactions the taco stand must record in its accounting? Select all that apply.",
    },
    options: [
      { id: 'N1C-009-a', text: { es: "Vende tacos por $2,300 y cobra en efectivo", en: "Sells tacos for $2,300 and collects cash" } },
      { id: 'N1C-009-b', text: { es: "Pide una cotización de un refrigerador, sin comprarlo", en: "Asks for a quote on a fridge, without buying it" } },
      { id: 'N1C-009-c', text: { es: "Paga el recibo de luz del local por $950", en: "Pays the shop's $950 electricity bill" } },
      { id: 'N1C-009-d', text: { es: "El dueño compra un regalo para su hija con su tarjeta personal", en: "The owner buys a gift for his daughter with his personal card" } },
      { id: 'N1C-009-e', text: { es: "Compra tortillas a crédito por $1,200", en: "Buys tortillas on credit for $1,200" } },
    ],
    correctOptionIds: ['N1C-009-a', 'N1C-009-c', 'N1C-009-e'],
    explanation: {
      es: "La venta, el pago de luz y la compra a crédito ya ocurrieron, afectan al negocio y se miden en pesos. La cotización todavía no cambia nada (no hay compra ni deuda) y el regalo es un gasto personal del dueño, no del negocio (entidad económica). Error común: registrar la compra a crédito solo cuando se pague; se registra desde que se recibe.",
      en: "The sale, the electricity payment and the credit purchase have happened, affect the business and are measurable in pesos. The quote changes nothing yet (no purchase or debt) and the gift is the owner's personal spending, not the business's (economic entity). Common mistake: recording the credit purchase only when it is paid; it is recorded when the goods are received.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-010',
    level: 1,
    module: 'L1-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es el orden correcto de los primeros pasos del ciclo contable?",
      en: "What is the correct order of the first steps of the accounting cycle?",
    },
    options: [
      { id: 'N1C-010-a', text: { es: "Libro mayor → libro diario → identificar la transacción → balanza", en: "Ledger → journal → identify the transaction → trial balance" } },
      { id: 'N1C-010-b', text: { es: "Identificar la transacción → libro diario → libro mayor → balanza de comprobación", en: "Identify the transaction → journal → ledger → trial balance" } },
      { id: 'N1C-010-c', text: { es: "Balanza de comprobación → libro diario → libro mayor → identificar la transacción", en: "Trial balance → journal → ledger → identify the transaction" } },
      { id: 'N1C-010-d', text: { es: "Identificar la transacción → balanza → libro mayor → libro diario", en: "Identify the transaction → trial balance → ledger → journal" } },
    ],
    correctOptionId: 'N1C-010-b',
    explanation: {
      es: "Primero se decide si el hecho es una transacción; luego se registra en orden de fecha en el diario; después se pasa a cada cuenta del mayor; y con los saldos del mayor se arma la balanza. Error común: poner el mayor antes del diario; el mayor se alimenta del diario.",
      en: "First you decide whether the event is a transaction; then you record it in date order in the journal; next you post it to each ledger account; and with the ledger balances you build the trial balance. Common mistake: putting the ledger before the journal; the ledger is fed by the journal.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-011',
    level: 1,
    module: 'L1-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "¿Dónde lo encuentras? Clasifica cada dato según el registro del ciclo contable en el que aparece.",
      en: "Where would you find it? Classify each item by the accounting cycle record where it appears.",
    },
    categories: [
      { id: 'N1C-011-c1', label: { es: "Libro diario", en: "Journal" } },
      { id: 'N1C-011-c2', label: { es: "Libro mayor", en: "General ledger" } },
      { id: 'N1C-011-c3', label: { es: "Balanza de comprobación", en: "Trial balance" } },
    ],
    items: [
      { id: 'N1C-011-i1', label: { es: "«3 de mayo: cargo a Papelería y útiles $1,500, abono a Caja $1,500»", en: "«May 3: debit Office supplies $1,500, credit Cash on hand $1,500»" }, correctCategoryId: 'N1C-011-c1' },
      { id: 'N1C-011-i2', label: { es: "Todos los movimientos de Bancos del mes y su saldo", en: "All of the month's Bank movements and its balance" }, correctCategoryId: 'N1C-011-c2' },
      { id: 'N1C-011-i3', label: { es: "Una lista con el saldo de cada cuenta y dos totales iguales", en: "A list of every account's balance with two equal totals" }, correctCategoryId: 'N1C-011-c3' },
      { id: 'N1C-011-i4', label: { es: "Los asientos uno tras otro en orden de fecha", en: "Entries one after another in date order" }, correctCategoryId: 'N1C-011-c1' },
      { id: 'N1C-011-i5', label: { es: "La cuenta T de Clientes", en: "The Accounts receivable T-account" }, correctCategoryId: 'N1C-011-c2' },
      { id: 'N1C-011-i6', label: { es: "«Total deudor $93,000 = total acreedor $93,000»", en: "«Total debits $93,000 = total credits $93,000»" }, correctCategoryId: 'N1C-011-c3' },
    ],
    explanation: {
      es: "El diario guarda los asientos completos en orden de fecha. El mayor agrupa por cuenta (las cuentas T) y da el saldo de cada una. La balanza enlista todos los saldos y compara los totales deudor y acreedor. Error común: confundir la cuenta T (mayor) con el asiento (diario).",
      en: "The journal keeps complete entries in date order. The ledger groups by account (the T-accounts) and gives each balance. The trial balance lists every balance and compares total debits and credits. Common mistake: confusing the T-account (ledger) with the entry (journal).",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-012',
    level: 1,
    module: 'L1-12',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Saldos del mayor de una lavandería al 31 de agosto: Caja $8,000; Bancos $52,000; Equipo de cómputo $30,000; Sueldos y salarios $12,000; Proveedores $17,000; Ingresos por servicios $35,000; Capital social: dato faltante.",
      en: "Ledger balances of a laundromat at August 31: Cash on hand $8,000; Bank $52,000; Computer equipment $30,000; Salaries and wages $12,000; Accounts payable $17,000; Service revenue $35,000; Share capital: missing.",
    },
    prompt: {
      es: "Arma la balanza de comprobación de la lavandería y encuentra el Capital social que la hace cuadrar. Responde en pesos.",
      en: "Build the laundromat's trial balance and find the Share capital that makes it balance. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Total de saldos deudores", en: "Total debit balances" }, answer: 102000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Capital social", en: "Share capital" }, answer: 50000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Deudores (activos y gastos): 8,000 + 52,000 + 30,000 + 12,000 = $102,000. Acreedores conocidos: 17,000 + 35,000 = 52,000. Para cuadrar, Capital social = 102,000 − 52,000 = $50,000. Error común: poner Sueldos (un gasto) entre los acreedores.",
      en: "Debits (assets and expenses): 8,000 + 52,000 + 30,000 + 12,000 = $102,000. Known credits: 17,000 + 35,000 = 52,000. To balance, Share capital = 102,000 − 52,000 = $50,000. Common mistake: placing Salaries (an expense) among the credits.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-013',
    level: 1,
    module: 'L1-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Tu balanza de comprobación cuadra: total deudor $85,000 y total acreedor $85,000. Eso demuestra que registraste todas las operaciones del mes y en las cuentas correctas.",
      en: "Your trial balance balances: total debits $85,000 and total credits $85,000. That proves you recorded every transaction of the month and in the right accounts.",
    },
    answer: false,
    explanation: {
      es: "Falso. La balanza solo prueba que cargos y abonos son iguales. Si olvidaste una operación completa, la registraste dos veces o cargaste a una cuenta equivocada del mismo lado, la balanza sigue cuadrando. Error común: tomar la balanza cuadrada como prueba de que todo está bien.",
      en: "False. The trial balance only proves that debits and credits are equal. If you forgot a whole transaction, recorded it twice or debited the wrong account on the same side, it still balances. Common mistake: treating a balanced trial balance as proof that everything is right.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-014',
    level: 1,
    module: 'L1-12',
    kind: 'mcq',
    flavor: 'case',
    prompt: {
      es: "Al terminar el mes, la cafetería debe $6,000 de sueldo a su barista por días ya trabajados; se lo pagará el día 5 del mes siguiente. ¿Qué paso del ciclo contable sirve para reconocer ese gasto en el mes correcto?",
      en: "At month end, the coffee shop owes its barista $6,000 of wages for days already worked; it will pay on the 5th of next month. Which step of the accounting cycle recognizes that expense in the right month?",
    },
    options: [
      { id: 'N1C-014-a', text: { es: "La balanza de comprobación", en: "The trial balance" } },
      { id: 'N1C-014-b', text: { es: "Los asientos de ajuste", en: "The adjusting entries" } },
      { id: 'N1C-014-c', text: { es: "El cierre del ejercicio", en: "Year-end closing" } },
      { id: 'N1C-014-d', text: { es: "Ninguno: se registra hasta que se pague", en: "None: it is recorded only when paid" } },
    ],
    correctOptionId: 'N1C-014-b',
    explanation: {
      es: "Los ajustes al final del periodo ponen cada gasto en el mes en que ocurrió (devengación): el trabajo ya se hizo, así que el gasto es de este mes aunque se pague después. La balanza solo comprueba saldos y el cierre pasa el resultado al capital. Error común: esperar al pago para registrar el gasto.",
      en: "Period-end adjustments place each expense in the month it occurred (accrual): the work is done, so the expense belongs to this month even though it is paid later. The trial balance only checks balances and closing moves the result to equity. Common mistake: waiting for the payment to record the expense.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-cycle',
  },
  {
    id: 'N1C-015',
    level: 1,
    module: 'L1-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En el cierre del ejercicio, las cuentas de ingresos y gastos quedan en cero y su resultado (utilidad o pérdida) pasa al capital contable.",
      en: "At year-end closing, revenue and expense accounts are reset to zero and their result (profit or loss) moves into equity.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Ingresos y gastos miden un solo periodo; al cerrarlos, su diferencia (utilidad o pérdida) se suma o resta al capital y el siguiente periodo empieza desde cero. Activos, pasivos y capital no se cierran: sus saldos continúan. Error común: creer que también Bancos o Proveedores quedan en cero.",
      en: "True. Revenue and expenses measure a single period; when they are closed, their difference (profit or loss) is added to or subtracted from equity and the next period starts from zero. Assets, liabilities and equity are not closed: their balances carry forward. Common mistake: thinking Bank or Accounts payable also go to zero.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-cycle',
  },

  // ═════════════════════════ L1-13 ═════════════════════════
  {
    id: 'N1C-016',
    level: 1,
    module: 'L1-13',
    kind: 'classify',
    flavor: 'statement',
    prompt: {
      es: "¿En qué estado financiero buscas cada dato? Clasifícalos.",
      en: "In which financial statement do you look for each item? Classify them.",
    },
    categories: [
      { id: 'N1C-016-c1', label: { es: "Estado de situación financiera", en: "Statement of financial position" } },
      { id: 'N1C-016-c2', label: { es: "Estado de resultado integral", en: "Statement of comprehensive income" } },
      { id: 'N1C-016-c3', label: { es: "Estado de flujos de efectivo", en: "Statement of cash flows" } },
      { id: 'N1C-016-c4', label: { es: "Estado de cambios en el capital contable", en: "Statement of changes in equity" } },
    ],
    items: [
      { id: 'N1C-016-i1', label: { es: "Cuánto efectivo se cobró a clientes en el año", en: "How much cash was collected from customers in the year" }, correctCategoryId: 'N1C-016-c3' },
      { id: 'N1C-016-i2', label: { es: "Cuánto debe la empresa a proveedores al 31 de diciembre", en: "How much the company owes suppliers at December 31" }, correctCategoryId: 'N1C-016-c1' },
      { id: 'N1C-016-i3', label: { es: "Cuánto ganó o perdió en el año", en: "How much it earned or lost in the year" }, correctCategoryId: 'N1C-016-c2' },
      { id: 'N1C-016-i4', label: { es: "Cuánto aportaron los socios y cuánto se repartió en dividendos en el año", en: "How much partners contributed and how much was paid as dividends in the year" }, correctCategoryId: 'N1C-016-c4' },
      { id: 'N1C-016-i5', label: { es: "El total de activos a una fecha", en: "Total assets at a date" }, correctCategoryId: 'N1C-016-c1' },
      { id: 'N1C-016-i6', label: { es: "Ventas, costo de ventas y gastos del periodo", en: "Sales, cost of sales and expenses for the period" }, correctCategoryId: 'N1C-016-c2' },
      { id: 'N1C-016-i7', label: { es: "Efectivo pagado por comprar maquinaria", en: "Cash paid to buy machinery" }, correctCategoryId: 'N1C-016-c3' },
    ],
    explanation: {
      es: "Situación financiera: saldos a una fecha (activos, deudas). Resultado integral: ingresos, costos, gastos y utilidad del periodo. Flujos de efectivo: dinero que entra y sale (cobros, compra de maquinaria pagada). Cambios en el capital: aportaciones, dividendos y utilidad que mueven el capital. Error común: buscar los cobros en el estado de resultados; ahí están las ventas, no el dinero cobrado.",
      en: "Financial position: balances at a date (assets, debts). Comprehensive income: revenue, costs, expenses and profit for the period. Cash flows: money in and out (collections, machinery paid for). Changes in equity: contributions, dividends and profit that move equity. Common mistake: looking for collections in the income statement; it shows sales, not cash collected.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-017',
    level: 1,
    module: 'L1-13',
    kind: 'numeric',
    flavor: 'statement',
    context: {
      es: "Datos del año de una tienda de ropa: Ventas $120,000; Costo de ventas $70,000; Sueldos $18,000; Renta $9,000; Publicidad $3,000.",
      en: "A clothing store's data for the year: Sales $120,000; Cost of sales $70,000; Wages $18,000; Rent $9,000; Advertising $3,000.",
    },
    prompt: {
      es: "¿Cuál es la utilidad neta de la tienda de ropa en el estado de resultado integral? Responde en pesos.",
      en: "What is the clothing store's net profit in the statement of comprehensive income? Answer in pesos.",
    },
    answer: 20000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Utilidad bruta = 120,000 − 70,000 = 50,000. Gastos = 18,000 + 9,000 + 3,000 = 30,000. Utilidad neta = 50,000 − 30,000 = $20,000. Error común: quedarse en la utilidad bruta ($50,000) sin restar los gastos de operación.",
      en: "Gross profit = 120,000 − 70,000 = 50,000. Expenses = 18,000 + 9,000 + 3,000 = 30,000. Net profit = 50,000 − 30,000 = $20,000. Common mistake: stopping at gross profit ($50,000) without subtracting operating expenses.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-018',
    level: 1,
    module: 'L1-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué estado financiero es como una foto del negocio en una fecha determinada, y no un resumen de lo que pasó en un periodo?",
      en: "Which financial statement is like a snapshot of the business at a specific date, rather than a summary of what happened over a period?",
    },
    options: [
      { id: 'N1C-018-a', text: { es: "Estado de resultado integral", en: "Statement of comprehensive income" } },
      { id: 'N1C-018-b', text: { es: "Estado de flujos de efectivo", en: "Statement of cash flows" } },
      { id: 'N1C-018-c', text: { es: "Estado de situación financiera", en: "Statement of financial position" } },
      { id: 'N1C-018-d', text: { es: "Estado de cambios en el capital contable", en: "Statement of changes in equity" } },
    ],
    correctOptionId: 'N1C-018-c',
    explanation: {
      es: "El estado de situación financiera muestra activos, pasivos y capital a una fecha (por ejemplo, al 31 de diciembre). Los otros tres cubren un periodo (del 1 de enero al 31 de diciembre): son la 'película'. Error común: pensar que el estado de resultados es a una fecha porque lleva una fecha en el título.",
      en: "The statement of financial position shows assets, liabilities and equity at a date (for example, December 31). The other three cover a period (January 1 to December 31): they are the 'movie'. Common mistake: thinking the income statement is at a date because its title shows a date.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-019',
    level: 1,
    module: 'L1-13',
    kind: 'classify',
    flavor: 'statement',
    prompt: {
      es: "Clasifica cada movimiento de efectivo en la actividad del estado de flujos de efectivo a la que pertenece.",
      en: "Classify each cash movement into the cash flow statement activity it belongs to.",
    },
    categories: [
      { id: 'N1C-019-c1', label: { es: "Operación", en: "Operating" } },
      { id: 'N1C-019-c2', label: { es: "Inversión", en: "Investing" } },
      { id: 'N1C-019-c3', label: { es: "Financiamiento", en: "Financing" } },
    ],
    items: [
      { id: 'N1C-019-i1', label: { es: "Cobro de ventas a clientes", en: "Collection of sales from customers" }, correctCategoryId: 'N1C-019-c1' },
      { id: 'N1C-019-i2', label: { es: "Pago de sueldos a empleados", en: "Payment of employee wages" }, correctCategoryId: 'N1C-019-c1' },
      { id: 'N1C-019-i3', label: { es: "Compra de una camioneta de reparto", en: "Purchase of a delivery van" }, correctCategoryId: 'N1C-019-c2' },
      { id: 'N1C-019-i4', label: { es: "Préstamo bancario recibido", en: "Bank loan received" }, correctCategoryId: 'N1C-019-c3' },
      { id: 'N1C-019-i5', label: { es: "Aportación en efectivo de los socios", en: "Cash contribution from the partners" }, correctCategoryId: 'N1C-019-c3' },
      { id: 'N1C-019-i6', label: { es: "Venta de una máquina vieja", en: "Sale of an old machine" }, correctCategoryId: 'N1C-019-c2' },
    ],
    explanation: {
      es: "Operación: el día a día del negocio (cobrar ventas, pagar sueldos). Inversión: comprar o vender bienes duraderos (camioneta, máquina). Financiamiento: dinero de bancos o de los dueños (préstamos, aportaciones). Error común: poner la venta de la máquina en operación; no es lo que el negocio vende normalmente, es un bien duradero.",
      en: "Operating: the business's day-to-day (collecting sales, paying wages). Investing: buying or selling long-lived assets (van, machine). Financing: money from banks or owners (loans, contributions). Common mistake: placing the machine sale in operating; it is not what the business normally sells, it is a long-lived asset.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-020',
    level: 1,
    module: 'L1-13',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Capital contable de un estudio de fotografía al 1 de enero: $80,000. Durante el año: los socios aportan $20,000 más; la utilidad neta del año es $15,000; se reparten $5,000 de dividendos.",
      en: "Equity of a photography studio at January 1: $80,000. During the year: the partners contribute $20,000 more; net profit for the year is $15,000; $5,000 of dividends are paid out.",
    },
    prompt: {
      es: "Prepara el estado de cambios en el capital contable del estudio de fotografía. Responde en pesos.",
      en: "Prepare the photography studio's statement of changes in equity. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Aumento neto del capital en el año", en: "Net increase in equity for the year" }, answer: 30000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Capital contable al 31 de diciembre", en: "Equity at December 31" }, answer: 110000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Aumento neto = 20,000 + 15,000 − 5,000 = $30,000. Capital final = 80,000 + 30,000 = $110,000. Los dividendos reducen el capital porque se entregan a los dueños, pero no son un gasto. Error común: sumar los dividendos en lugar de restarlos.",
      en: "Net increase = 20,000 + 15,000 − 5,000 = $30,000. Ending equity = 80,000 + 30,000 = $110,000. Dividends reduce equity because they go to the owners, but they are not an expense. Common mistake: adding the dividends instead of subtracting them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-021',
    level: 1,
    module: 'L1-13',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Una imprenta empieza el año con $12,000 de efectivo. En el año: cobra $45,000 a clientes; paga $36,000 de sueldos, renta y proveedores; compra una impresora por $15,000; recibe un préstamo bancario de $10,000.",
      en: "A print shop starts the year with $12,000 of cash. During the year: it collects $45,000 from customers; pays $36,000 for wages, rent and suppliers; buys a printer for $15,000; receives a $10,000 bank loan.",
    },
    prompt: {
      es: "Calcula el flujo de operación y el efectivo final de la imprenta, en pesos.",
      en: "Compute the print shop's operating cash flow and ending cash, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Flujo neto de actividades de operación", en: "Net cash from operating activities" }, answer: 9000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Efectivo al final del año", en: "Cash at year end" }, answer: 16000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Operación = 45,000 − 36,000 = $9,000. Inversión = −15,000 (impresora). Financiamiento = +10,000 (préstamo). Cambio neto = 9,000 − 15,000 + 10,000 = 4,000. Efectivo final = 12,000 + 4,000 = $16,000. Error común: meter la compra de la impresora en operación (daría −6,000).",
      en: "Operating = 45,000 − 36,000 = $9,000. Investing = −15,000 (printer). Financing = +10,000 (loan). Net change = 9,000 − 15,000 + 10,000 = 4,000. Ending cash = 12,000 + 4,000 = $16,000. Common mistake: putting the printer purchase in operating (that would give −6,000).",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-statements',
  },
  {
    id: 'N1C-022',
    level: 1,
    module: 'L1-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "La utilidad neta del estado de resultado integral se suma al capital contable; por eso los estados financieros están conectados entre sí.",
      en: "Net profit from the statement of comprehensive income is added to equity; that is why the financial statements are connected to each other.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. La utilidad pasa al estado de cambios en el capital, y el capital final aparece en el estado de situación financiera. Del mismo modo, el efectivo final del estado de flujos coincide con el efectivo del balance. Error común: ver los cuatro estados como reportes independientes.",
      en: "True. Profit flows into the statement of changes in equity, and ending equity appears on the statement of financial position. Likewise, ending cash in the cash flow statement matches the cash on the balance sheet. Common mistake: seeing the four statements as independent reports.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-statements',
  },

  // ═════════════════════════ L1-14 ═════════════════════════
  {
    id: 'N1C-023',
    level: 1,
    module: 'L1-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Una pastelería revisa sus operaciones de marzo. Clasifica cada una según si es ingreso de marzo, entrada de dinero en marzo, o ambas.",
      en: "A cake shop reviews its March transactions. Classify each one as March revenue, a March cash inflow, or both.",
    },
    categories: [
      { id: 'N1C-023-c1', label: { es: "Ingreso y entrada de dinero en el mes", en: "Revenue and cash inflow in the month" } },
      { id: 'N1C-023-c2', label: { es: "Ingreso del mes sin entrada de dinero", en: "Revenue of the month with no cash inflow" } },
      { id: 'N1C-023-c3', label: { es: "Entrada de dinero que no es ingreso del mes", en: "Cash inflow that is not revenue of the month" } },
    ],
    items: [
      { id: 'N1C-023-i1', label: { es: "Vende pasteles de contado por $3,000", en: "Sells cakes for $3,000 cash" }, correctCategoryId: 'N1C-023-c1' },
      { id: 'N1C-023-i2', label: { es: "Entrega un pedido de $5,000 a una escuela que pagará en 30 días", en: "Delivers a $5,000 order to a school that will pay in 30 days" }, correctCategoryId: 'N1C-023-c2' },
      { id: 'N1C-023-i3', label: { es: "Cobra $2,000 de una venta hecha en febrero", en: "Collects $2,000 for a sale made in February" }, correctCategoryId: 'N1C-023-c3' },
      { id: 'N1C-023-i4', label: { es: "Recibe un anticipo de $1,500 por un pastel que entregará en abril", en: "Receives a $1,500 advance for a cake it will deliver in April" }, correctCategoryId: 'N1C-023-c3' },
      { id: 'N1C-023-i5', label: { es: "Recibe un préstamo bancario de $25,000", en: "Receives a $25,000 bank loan" }, correctCategoryId: 'N1C-023-c3' },
      { id: 'N1C-023-i6', label: { es: "Vende galletas por $800 cobradas con transferencia al momento", en: "Sells cookies for $800 collected by transfer on the spot" }, correctCategoryId: 'N1C-023-c1' },
    ],
    explanation: {
      es: "El ingreso es de marzo si en marzo se vendió o entregó. Ventas de contado: ingreso y cobro. Pedido a crédito: ingreso sin cobro. Cobro de febrero, anticipo de abril y préstamo: entra dinero, pero no es ingreso de marzo (el de febrero ya se contó, el anticipo será ingreso en abril y el préstamo es deuda). Error común: tratar todo dinero que entra como ingreso.",
      en: "Revenue belongs to March if the sale or delivery happened in March. Cash sales: revenue and collection. Credit order: revenue without collection. February collection, April advance and loan: cash comes in, but it is not March revenue (February's was already counted, the advance will be April revenue and the loan is debt). Common mistake: treating all incoming money as revenue.",
    },
    difficulty: 2,
    points: 15,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-024',
    level: 1,
    module: 'L1-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Un consultorio dental revisa sus operaciones del mes. Clasifica cada una según si es gasto del mes, salida de dinero del mes, o ambas.",
      en: "A dental office reviews its transactions for the month. Classify each one as an expense of the month, a cash outflow of the month, or both.",
    },
    categories: [
      { id: 'N1C-024-c1', label: { es: "Gasto y pago en el mes", en: "Expense and payment in the month" } },
      { id: 'N1C-024-c2', label: { es: "Gasto del mes que aún no se paga", en: "Expense of the month not yet paid" } },
      { id: 'N1C-024-c3', label: { es: "Pago que no es gasto del mes", en: "Payment that is not an expense of the month" } },
    ],
    items: [
      { id: 'N1C-024-i1', label: { es: "Paga el día 1 la renta de este mes", en: "Pays this month's rent on the 1st" }, correctCategoryId: 'N1C-024-c1' },
      { id: 'N1C-024-i2', label: { es: "Recibe el recibo de luz del mes; lo pagará el mes siguiente", en: "Receives this month's electricity bill; will pay it next month" }, correctCategoryId: 'N1C-024-c2' },
      { id: 'N1C-024-i3', label: { es: "Compra un sillón dental y lo paga de contado", en: "Buys a dental chair and pays cash" }, correctCategoryId: 'N1C-024-c3' },
      { id: 'N1C-024-i4', label: { es: "Paga a la asistente la quincena ya trabajada", en: "Pays the assistant's fortnight already worked" }, correctCategoryId: 'N1C-024-c1' },
      { id: 'N1C-024-i5', label: { es: "Abona $10,000 al capital de un préstamo bancario", en: "Repays $10,000 of a bank loan's principal" }, correctCategoryId: 'N1C-024-c3' },
      { id: 'N1C-024-i6', label: { es: "Sueldos ya trabajados al fin de mes que se pagarán el día 5", en: "Wages already worked at month end to be paid on the 5th" }, correctCategoryId: 'N1C-024-c2' },
    ],
    explanation: {
      es: "Gasto = lo que se consumió para operar en el mes. Renta del mes y quincena pagada: gasto y pago. Luz y sueldos pendientes: gasto del mes aunque se paguen después. Sillón dental (activo que durará años) y abono al préstamo (reduce una deuda): sale dinero, pero no es gasto del mes. Error común: pensar que todo pago es gasto.",
      en: "Expense = what was consumed to operate in the month. This month's rent and the paid fortnight: expense and payment. Unpaid electricity and wages: expense of the month even though paid later. Dental chair (an asset lasting years) and loan repayment (reduces a debt): cash leaves, but it is not an expense of the month. Common mistake: thinking every payment is an expense.",
    },
    difficulty: 2,
    points: 15,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-025',
    level: 1,
    module: 'L1-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una florería en mayo: vende $60,000 ($45,000 de contado y $15,000 a crédito); las flores vendidas costaron $25,000, ya pagadas; sus gastos del mes son $12,000, de los cuales pagó $10,000 y $2,000 quedan pendientes; además compra un refrigerador por $18,000 de contado.",
      en: "A flower shop in May: sells $60,000 ($45,000 cash and $15,000 on credit); the flowers sold cost $25,000, already paid; its expenses for the month are $12,000, of which it paid $10,000 and $2,000 remain unpaid; it also buys a refrigerator for $18,000 in cash.",
    },
    prompt: {
      es: "Calcula la utilidad de mayo y el cambio en el efectivo de la florería. Si el efectivo bajó, escribe el número con signo menos.",
      en: "Compute the flower shop's May profit and change in cash. If cash went down, write the number with a minus sign.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad del mes", en: "Profit for the month" }, answer: 23000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Cambio neto en efectivo", en: "Net change in cash" }, answer: -8000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Utilidad = 60,000 − 25,000 − 12,000 = $23,000 (cuentan todas las ventas y todos los gastos del mes; el refrigerador es activo). Efectivo = cobros 45,000 − pagos (25,000 + 10,000 + 18,000 = 53,000) = −$8,000. La florería gana, pero su efectivo bajó. Error común: restar el refrigerador en la utilidad o usar las ventas totales como cobros.",
      en: "Profit = 60,000 − 25,000 − 12,000 = $23,000 (all of the month's sales and expenses count; the refrigerator is an asset). Cash = collections 45,000 − payments (25,000 + 10,000 + 18,000 = 53,000) = −$8,000. The shop is profitable, but its cash went down. Common mistake: subtracting the refrigerator from profit or using total sales as collections.",
    },
    difficulty: 2,
    points: 15,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-026',
    level: 1,
    module: 'L1-14',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: {
      es: "Una empresa tiene buena utilidad en su estado de resultados, pero este viernes no le alcanza el efectivo para pagar la nómina porque sus clientes no le han pagado. ¿Qué problema tiene?",
      en: "A company shows a good profit on its income statement, but this Friday it does not have enough cash to pay payroll because its customers have not paid. What problem does it have?",
    },
    options: [
      { id: 'N1C-026-a', text: { es: "Falta de rentabilidad", en: "Lack of profitability" } },
      { id: 'N1C-026-b', text: { es: "Falta de liquidez", en: "Lack of liquidity" } },
      { id: 'N1C-026-c', text: { es: "Capital contable negativo", en: "Negative equity" } },
      { id: 'N1C-026-d', text: { es: "Ingresos que no se registraron", en: "Unrecorded revenue" } },
    ],
    correctOptionId: 'N1C-026-b',
    explanation: {
      es: "La empresa sí es rentable (tiene utilidad), pero no tiene efectivo disponible para pagar a tiempo: es un problema de liquidez. Sus ventas a crédito ya son ingreso, pero el dinero aún no entra. Error común: pensar que con utilidad siempre hay dinero en el banco.",
      en: "The company is profitable (it has a profit), but it lacks cash to pay on time: that is a liquidity problem. Its credit sales are already revenue, but the money has not come in yet. Common mistake: thinking that profit always means money in the bank.",
    },
    difficulty: 1,
    points: 10,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-027',
    level: 1,
    module: 'L1-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Recibir un préstamo bancario de $100,000 aumenta la utilidad del negocio, porque entra dinero.",
      en: "Receiving a $100,000 bank loan increases the business's profit, because money comes in.",
    },
    answer: false,
    explanation: {
      es: "Falso. El préstamo aumenta el efectivo (activo) y también una deuda (pasivo), pero no es un ingreso: hay que devolverlo. La utilidad no cambia. Error común: confundir entrada de dinero con ingreso.",
      en: "False. The loan increases cash (an asset) and also a debt (a liability), but it is not revenue: it has to be repaid. Profit does not change. Common mistake: confusing a cash inflow with revenue.",
    },
    difficulty: 1,
    points: 10,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-028',
    level: 1,
    module: 'L1-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un despacho de diseño termina en junio un proyecto de $30,000 que el cliente pagará en julio. También en junio cobra $12,000 por trabajos que entregó en mayo.",
      en: "A design studio finishes a $30,000 project in June that the client will pay in July. Also in June it collects $12,000 for work it delivered in May.",
    },
    prompt: {
      es: "¿Cuánto ingreso reconoce el despacho de diseño en junio? Responde en pesos.",
      en: "How much revenue does the design studio recognize in June? Answer in pesos.",
    },
    answer: 30000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Por devengación, el ingreso es del mes en que se prestó el servicio: el proyecto terminado en junio da $30,000 de ingreso en junio, aunque se cobre en julio. Los $12,000 cobrados son ingreso de mayo, no de junio. Error común: sumar ambos ($42,000) o tomar solo lo cobrado ($12,000).",
      en: "Under accrual, revenue belongs to the month the service was performed: the project finished in June gives $30,000 of June revenue, even though it is collected in July. The $12,000 collected is May revenue, not June. Common mistake: adding both ($42,000) or taking only what was collected ($12,000).",
    },
    difficulty: 1,
    points: 10,
    competency: 'profit-vs-cash',
  },
  {
    id: 'N1C-029',
    level: 1,
    module: 'L1-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles operaciones disminuyen el efectivo del negocio pero NO son un gasto del periodo? Selecciona todas las que apliquen.",
      en: "Which transactions decrease the business's cash but are NOT an expense of the period? Select all that apply.",
    },
    options: [
      { id: 'N1C-029-a', text: { es: "Pagar una deuda a un proveedor", en: "Paying a debt to a supplier" } },
      { id: 'N1C-029-b', text: { es: "Comprar un terreno de contado", en: "Buying land for cash" } },
      { id: 'N1C-029-c', text: { es: "Pagar los sueldos del mes", en: "Paying the month's wages" } },
      { id: 'N1C-029-d', text: { es: "Un retiro de dinero que hace el dueño para uso personal", en: "A cash withdrawal by the owner for personal use" } },
      { id: 'N1C-029-e', text: { es: "Pagar la publicidad de este mes", en: "Paying this month's advertising" } },
    ],
    correctOptionIds: ['N1C-029-a', 'N1C-029-b', 'N1C-029-d'],
    explanation: {
      es: "Pagar al proveedor reduce una deuda; el terreno es un activo; el retiro del dueño reduce el capital, pero no es gasto del negocio. Sueldos y publicidad del mes sí son gastos y además se pagan. Error común: incluir el retiro del dueño como gasto; por entidad económica, lo personal no es gasto del negocio.",
      en: "Paying the supplier reduces a debt; the land is an asset; the owner's withdrawal reduces equity but is not a business expense. The month's wages and advertising are expenses and are also paid. Common mistake: including the owner's withdrawal as an expense; under the economic entity principle, personal spending is not a business expense.",
    },
    difficulty: 2,
    points: 15,
    competency: 'profit-vs-cash',
  },

  // ═════════════════════════ L1-15 ═════════════════════════
  {
    id: 'N1C-030',
    level: 1,
    module: 'L1-15',
    kind: 'classify',
    flavor: 'case',
    prompt: {
      es: "Café Aroma: clasifica cada operación según su efecto en la ecuación contable.",
      en: "Café Aroma: classify each transaction by its effect on the accounting equation.",
    },
    categories: [
      { id: 'N1C-030-c1', label: { es: "Activo ↑ y Pasivo ↑", en: "Assets ↑ and Liabilities ↑" } },
      { id: 'N1C-030-c2', label: { es: "Activo ↑ y Capital ↑", en: "Assets ↑ and Equity ↑" } },
      { id: 'N1C-030-c3', label: { es: "Un activo ↑ y otro activo ↓", en: "One asset ↑ and another asset ↓" } },
      { id: 'N1C-030-c4', label: { es: "Activo ↓ y Pasivo ↓", en: "Assets ↓ and Liabilities ↓" } },
    ],
    items: [
      { id: 'N1C-030-i1', label: { es: "Compra insumos por $15,000 a crédito", en: "Buys supplies for $15,000 on credit" }, correctCategoryId: 'N1C-030-c1' },
      { id: 'N1C-030-i2', label: { es: "Sofía aporta $100,000 al negocio", en: "Sofía contributes $100,000 to the business" }, correctCategoryId: 'N1C-030-c2' },
      { id: 'N1C-030-i3', label: { es: "Compra un horno de $20,000 con transferencia", en: "Buys a $20,000 oven by transfer" }, correctCategoryId: 'N1C-030-c3' },
      { id: 'N1C-030-i4', label: { es: "Paga $12,000 al proveedor", en: "Pays $12,000 to the supplier" }, correctCategoryId: 'N1C-030-c4' },
      { id: 'N1C-030-i5', label: { es: "Recibe un préstamo bancario de $20,000", en: "Receives a $20,000 bank loan" }, correctCategoryId: 'N1C-030-c1' },
      { id: 'N1C-030-i6', label: { es: "La oficina vecina le paga $4,000 que debía", en: "The neighboring office pays $4,000 it owed" }, correctCategoryId: 'N1C-030-c3' },
    ],
    explanation: {
      es: "Compra a crédito y préstamo: entra un recurso y nace una deuda (A↑ P↑). Aportación de Sofía: entra dinero y crece el capital (A↑ C↑). Horno pagado y cobro al cliente: cambia un activo por otro (Bancos por Mobiliario; Clientes por Bancos). Pago al proveedor: sale dinero y baja la deuda (A↓ P↓). Error común: pensar que el cobro al cliente aumenta el capital; ese ingreso ya se contó al vender.",
      en: "Credit purchase and loan: a resource comes in and a debt arises (A↑ L↑). Sofía's contribution: money comes in and equity grows (A↑ E↑). Paid oven and customer collection: one asset swaps for another (Bank for Equipment; Receivables for Bank). Supplier payment: cash leaves and the debt falls (A↓ L↓). Common mistake: thinking the customer collection increases equity; that revenue was counted at the sale.",
    },
    difficulty: 2,
    points: 15,
    competency: 'integrative',
  },
  {
    id: 'N1C-031',
    level: 1,
    module: 'L1-15',
    kind: 'journal',
    flavor: 'case',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Registra la venta de la operación (b) de Café Aroma: $36,000 de contado depositados y $6,000 a crédito. (Solo el ingreso; el costo va en otro asiento.)",
      en: "Record the sale in Café Aroma's transaction (b): $36,000 for cash deposited and $6,000 on credit. (Only the revenue; the cost goes in another entry.)",
    },
    accountChoices: ['1101', '1102', '1104', '2107', '4101', '4102', '5101'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 36000 },
      { accountCode: '1104', side: 'D', amount: 6000 },
      { accountCode: '4101', side: 'C', amount: 42000 },
    ],
    explanation: {
      es: "Asiento compuesto: cargo a Bancos $36,000 (se depositó) y cargo a Clientes $6,000 (derecho de cobro); abono a Ventas $42,000 (todo es ingreso del mes, cobrado o no). Cargos 42,000 = abonos 42,000. Error común: abonar Ventas solo por lo cobrado ($36,000) o usar Caja en lugar de Bancos.",
      en: "Compound entry: debit Bank $36,000 (deposited) and debit Accounts receivable $6,000 (right to collect); credit Sales $42,000 (all of it is revenue of the month, collected or not). Debits 42,000 = credits 42,000. Common mistake: crediting Sales only for what was collected ($36,000) or using Cash on hand instead of Bank.",
    },
    difficulty: 2,
    points: 15,
    competency: 'integrative',
  },
  {
    id: 'N1C-032',
    level: 1,
    module: 'L1-15',
    kind: 'journal',
    flavor: 'case',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Registra la operación (d) de Café Aroma: el préstamo bancario a largo plazo de $20,000 depositado en su cuenta.",
      en: "Record Café Aroma's transaction (d): the $20,000 long-term bank loan deposited in its account.",
    },
    accountChoices: ['1102', '1104', '2101', '2103', '2201', '3101', '4102'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 20000 },
      { accountCode: '2201', side: 'C', amount: 20000 },
    ],
    explanation: {
      es: "Entra dinero al banco: cargo a Bancos $20,000. Nace una deuda a largo plazo: abono a Préstamos bancarios a largo plazo $20,000. No es ingreso (hay que devolverlo) ni aportación de Sofía (no es capital). Error común: abonar Capital social o Ingresos por servicios.",
      en: "Money enters the bank: debit Bank $20,000. A long-term debt arises: credit Long-term bank loans $20,000. It is not revenue (it must be repaid) nor a contribution by Sofía (not equity). Common mistake: crediting Share capital or Service revenue.",
    },
    difficulty: 1,
    points: 10,
    competency: 'integrative',
  },
  {
    id: 'N1C-033',
    level: 1,
    module: 'L1-15',
    kind: 'journal',
    flavor: 'case',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Registra el costo de lo vendido en la operación (b) de Café Aroma: los insumos consumidos costaron $14,000.",
      en: "Record the cost of what was sold in Café Aroma's transaction (b): the supplies used up cost $14,000.",
    },
    accountChoices: ['1108', '1111', '2101', '4101', '5101', '6108'],
    expected: [
      { accountCode: '5101', side: 'D', amount: 14000 },
      { accountCode: '1108', side: 'C', amount: 14000 },
    ],
    explanation: {
      es: "Los insumos salen del inventario porque se vendieron: cargo a Costo de ventas $14,000 (aumenta un costo) y abono a Inventarios $14,000 (disminuye un activo). Error común: cargar a Proveedores; la deuda con el proveedor no cambia al vender.",
      en: "The supplies leave inventory because they were sold: debit Cost of goods sold $14,000 (a cost increases) and credit Inventory $14,000 (an asset decreases). Common mistake: debiting Accounts payable; the debt to the supplier does not change when you sell.",
    },
    difficulty: 2,
    points: 15,
    competency: 'integrative',
  },
  {
    id: 'N1C-034',
    level: 1,
    module: 'L1-15',
    kind: 'fields',
    flavor: 'tAccount',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Lleva la cuenta T de Bancos de Café Aroma en su segundo mes. Responde en pesos.",
      en: "Keep Café Aroma's Bank T-account for its second month. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Suma del debe (incluye saldo inicial)", en: "Total debits (including opening balance)" }, answer: 124000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Suma del haber", en: "Total credits" }, answer: 47000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Saldo final deudor", en: "Ending debit balance" }, answer: 77000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Debe: saldo inicial 64,000 + ventas de contado 36,000 + préstamo 20,000 + cobro a la oficina 4,000 = $124,000. Haber: horno 20,000 + renta 7,000 + sueldos 6,000 + publicidad 2,000 + proveedor 12,000 = $47,000. Saldo = 124,000 − 47,000 = $77,000 deudor. Las compras a crédito y la venta a crédito no tocan Bancos. Error común: incluir los $6,000 vendidos a crédito o los $15,000 comprados a crédito.",
      en: "Debits: opening 64,000 + cash sales 36,000 + loan 20,000 + office collection 4,000 = $124,000. Credits: oven 20,000 + rent 7,000 + wages 6,000 + advertising 2,000 + supplier 12,000 = $47,000. Balance = 124,000 − 47,000 = $77,000 debit. Credit purchases and the credit sale do not touch Bank. Common mistake: including the $6,000 sold on credit or the $15,000 bought on credit.",
    },
    difficulty: 3,
    points: 20,
    competency: 'integrative',
  },
  {
    id: 'N1C-035',
    level: 1,
    module: 'L1-15',
    kind: 'fields',
    flavor: 'statement',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Calcula el resultado del segundo mes de Café Aroma. Responde en pesos.",
      en: "Compute Café Aroma's result for its second month. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad bruta (ventas − costo de ventas)", en: "Gross profit (sales − cost of sales)" }, answer: 28000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Utilidad neta del mes", en: "Net profit for the month" }, answer: 13000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Utilidad bruta = 42,000 − 14,000 = $28,000 (cuentan las ventas de contado y a crédito). Gastos = renta 7,000 + sueldos 6,000 + publicidad 2,000 = 15,000. Utilidad neta = 28,000 − 15,000 = $13,000. El horno, el préstamo y el pago al proveedor no son ingresos ni gastos. Error común: restar el horno o el pago al proveedor.",
      en: "Gross profit = 42,000 − 14,000 = $28,000 (both cash and credit sales count). Expenses = rent 7,000 + wages 6,000 + advertising 2,000 = 15,000. Net profit = 28,000 − 15,000 = $13,000. The oven, the loan and the supplier payment are neither revenue nor expenses. Common mistake: subtracting the oven or the supplier payment.",
    },
    difficulty: 3,
    points: 20,
    competency: 'integrative',
  },
  {
    id: 'N1C-036',
    level: 1,
    module: 'L1-15',
    kind: 'fields',
    flavor: 'case',
    context: CASE_AROMA_M2,
    prompt: {
      es: "Aplica la ecuación contable al cierre del segundo mes de Café Aroma: calcula activo, pasivo y capital. Responde en pesos.",
      en: "Apply the accounting equation at the end of Café Aroma's second month: compute assets, liabilities and equity. Answer in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Activo total", en: "Total assets" }, answer: 148000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Pasivo total", en: "Total liabilities" }, answer: 27000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Capital contable", en: "Equity" }, answer: 121000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Activo: Bancos 77,000 + Clientes (6,000 − 4,000) 2,000 + Inventarios (3,000 + 15,000 − 14,000) 4,000 + Mobiliario y equipo (45,000 + 20,000) 65,000 = $148,000. Pasivo: Proveedores (4,000 + 15,000 − 12,000) 7,000 + Préstamo 20,000 = $27,000. Capital: 108,000 + utilidad 13,000 = $121,000. Comprobación: 27,000 + 121,000 = 148,000. Error común: olvidar el préstamo en el pasivo o el saldo pendiente de Clientes en el activo.",
      en: "Assets: Bank 77,000 + Receivables (6,000 − 4,000) 2,000 + Inventory (3,000 + 15,000 − 14,000) 4,000 + Furniture and equipment (45,000 + 20,000) 65,000 = $148,000. Liabilities: Accounts payable (4,000 + 15,000 − 12,000) 7,000 + Loan 20,000 = $27,000. Equity: 108,000 + profit 13,000 = $121,000. Check: 27,000 + 121,000 = 148,000. Common mistake: leaving the loan out of liabilities or the unpaid receivable out of assets.",
    },
    difficulty: 3,
    points: 20,
    competency: 'integrative',
  },
  {
    id: 'N1C-037',
    level: 1,
    module: 'L1-15',
    kind: 'mcq',
    flavor: 'interpret',
    context: CASE_AROMA_M2,
    prompt: {
      es: "En el estado de flujos de efectivo del segundo mes de Café Aroma, ¿en qué actividades se presentan la compra del horno (e) y el préstamo bancario (d), respectivamente?",
      en: "In the cash flow statement for Café Aroma's second month, in which activities are the oven purchase (e) and the bank loan (d) shown, respectively?",
    },
    options: [
      { id: 'N1C-037-a', text: { es: "Inversión y financiamiento", en: "Investing and financing" } },
      { id: 'N1C-037-b', text: { es: "Operación y operación", en: "Operating and operating" } },
      { id: 'N1C-037-c', text: { es: "Financiamiento e inversión", en: "Financing and investing" } },
      { id: 'N1C-037-d', text: { es: "Operación e inversión", en: "Operating and investing" } },
    ],
    correctOptionId: 'N1C-037-a',
    explanation: {
      es: "El horno es un bien duradero que usará varios años: su compra es actividad de inversión (−20,000). El préstamo es dinero de un banco: actividad de financiamiento (+20,000). Las dos se compensan, así que el aumento de Bancos en el mes (64,000 → 77,000) viene de la operación. Error común: invertir el orden o meter el horno en operación.",
      en: "The oven is a long-lived asset used for several years: buying it is an investing activity (−20,000). The loan is money from a bank: a financing activity (+20,000). The two offset each other, so the month's Bank increase (64,000 → 77,000) comes from operations. Common mistake: swapping the order or placing the oven in operating.",
    },
    difficulty: 2,
    points: 15,
    competency: 'integrative',
  },
]
