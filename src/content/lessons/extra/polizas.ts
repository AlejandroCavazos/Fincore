import type { Exercise, Lesson } from '../../../types'

// L1-16 · Pólizas, facturas e IVA: the bridge between Nivel 1 and the lab's Básico practice.
export const lessons: Lesson[] = [
  {
    id: 'L1-16',
    level: 1,
    topicIds: ['1.11'],
    title: { es: 'Pólizas, facturas e IVA', en: 'Entries, invoices and VAT' },
    summary: {
      es: 'Aprende los 3 tipos de póliza, a leer una factura (CFDI) y a registrar el IVA. Es lo que necesitas para el laboratorio contable.',
      en: 'Learn the 3 entry types, how to read an invoice (CFDI) and how to record VAT. It is what you need for the accounting lab.',
    },
    minutes: 14,
    objectives: [
      { es: 'Elegir el tipo de póliza correcto: ingreso, egreso o diario.', en: 'Choose the right entry type: receipt, payment or journal.' },
      { es: 'Leer en una factura los datos que necesitas para registrarla.', en: 'Read the data you need from an invoice to record it.' },
      { es: 'Registrar el IVA que cobras y el que pagas.', en: 'Record the VAT you charge and the VAT you pay.' },
    ],
    theory: [
      {
        heading: { es: '¿Qué póliza uso?', en: 'Which entry type do I use?' },
        body: [
          {
            es: 'En palabras sencillas: una **póliza** es la hoja donde anotas una operación con sus cargos y abonos. Es el asiento de partida doble que ya conoces, con fecha, número y concepto.',
            en: 'Simply put: an **entry (póliza)** is the sheet where you record one transaction with its debits and credits. It is the double-entry record you already know, with date, number and description.',
          },
          {
            es: 'En México se usan 3 tipos, y se eligen con una sola pregunta: **¿se mueve dinero?**',
            en: 'In Mexico there are 3 types, chosen with one question: **does money move?**',
          },
        ],
        bullets: [
          { es: '**Ingreso:** entra dinero a Caja o Bancos. Ejemplo: te pagan una venta.', en: '**Receipt (Ingreso):** money comes into Cash or Bank. Example: a customer pays you.' },
          { es: '**Egreso:** sale dinero de Caja o Bancos. Ejemplo: pagas la luz.', en: '**Payment (Egreso):** money leaves Cash or Bank. Example: you pay electricity.' },
          { es: '**Diario:** no se mueve dinero. Ejemplo: vendes a crédito (te pagarán después) o registras la depreciación.', en: '**Journal (Diario):** no money moves. Example: a credit sale or depreciation.' },
        ],
      },
      {
        heading: { es: '¿Qué miro en una factura?', en: 'What do I check on an invoice?' },
        body: [
          {
            es: 'En palabras sencillas: el **CFDI** es la factura electrónica. Antes de registrarla, busca estos datos:',
            en: 'Simply put: the **CFDI** is the electronic invoice. Before recording it, look for this data:',
          },
        ],
        bullets: [
          { es: '**Emisor y receptor:** si el emisor eres tú, es una venta tuya. Si el receptor eres tú, es una compra o un gasto.', en: '**Issuer and receiver:** if you are the issuer it is your sale; if you are the receiver it is a purchase or expense.' },
          { es: '**Conceptos:** qué se vendió o compró. Te dicen qué cuenta usar: mercancía va a Inventarios, la luz a Gastos y una computadora a Equipo de cómputo.', en: '**Items:** what was sold or bought. They tell you the account: goods to Inventory, electricity to Expenses, a computer to Computer equipment.' },
          { es: '**Subtotal, IVA y Total:** el subtotal es el precio sin IVA; el total es lo que se paga.', en: '**Subtotal, VAT and Total:** subtotal is the price before VAT; total is what is paid.' },
          { es: '**Método de pago:** PUE = ya se pagó completo; PPD = se pagará después.', en: '**Payment method:** PUE = paid in full; PPD = to be paid later.' },
          { es: '**Forma de pago:** 01 Efectivo = Caja; 03 Transferencia o 04 Tarjeta = Bancos.', en: '**Payment form:** 01 Cash = Cash account; 03 Transfer or 04 Card = Bank.' },
        ],
      },
      {
        heading: { es: '¿De quién es el IVA?', en: 'Whose VAT is it?' },
        body: [
          {
            es: 'En palabras sencillas: el IVA no es tuyo. Cuando vendes, **cobras** IVA a tu cliente y se lo debes al SAT: es **IVA trasladado** (una deuda, se abona). Cuando compras, **pagas** IVA a tu proveedor y lo puedes restar: es **IVA acreditable** (un derecho, se carga).',
            en: 'Simply put: VAT is not yours. When you sell, you **charge** VAT and owe it to the SAT: **output VAT** (a liability, credited). When you buy, you **pay** VAT and can subtract it: **input VAT** (an asset, debited).',
          },
          {
            es: 'Al final del mes pagas al SAT solo la diferencia. Por eso las ventas se registran sin IVA y el IVA va en su propia cuenta.',
            en: 'At month end you pay the SAT only the difference. That is why sales are recorded without VAT and the VAT goes to its own account.',
          },
        ],
        formulas: [
          {
            name: { es: 'IVA y total de una factura', en: 'VAT and invoice total' },
            expression: 'IVA = Subtotal × 0.16\nTotal = Subtotal + IVA',
            variables: [
              { symbol: 'Subtotal', meaning: { es: 'precio sin IVA, en pesos', en: 'price before VAT, in pesos' } },
              { symbol: '0.16', meaning: { es: 'la tasa general de IVA (16%) escrita en decimal', en: 'the general VAT rate (16%) as a decimal' } },
              { symbol: 'Total', meaning: { es: 'lo que se paga en realidad', en: 'what is actually paid' } },
            ],
            steps: [
              { es: 'Toma el subtotal de la factura.', en: 'Take the invoice subtotal.' },
              { es: 'Multiplícalo por 0.16 para obtener el IVA.', en: 'Multiply by 0.16 to get the VAT.' },
              { es: 'Suma subtotal e IVA para obtener el total.', en: 'Add subtotal and VAT to get the total.' },
            ],
            example: { es: 'Subtotal $2,500 → IVA = 2,500 × 0.16 = $400 → Total = 2,500 + 400 = $2,900.', en: 'Subtotal $2,500 → VAT = 2,500 × 0.16 = $400 → Total = 2,500 + 400 = $2,900.' },
            mistake: { es: 'Registrar la venta por el total. La venta va por el subtotal; el IVA va aparte.', en: 'Recording the sale at the total. The sale is the subtotal; VAT goes separately.' },
          },
          {
            name: { es: 'IVA a pagar en el mes', en: 'VAT payable for the month' },
            expression: 'IVA a pagar = IVA trasladado − IVA acreditable',
            variables: [
              { symbol: 'IVA trasladado', meaning: { es: 'el IVA que cobraste en tus ventas', en: 'VAT you charged on sales' } },
              { symbol: 'IVA acreditable', meaning: { es: 'el IVA que pagaste en compras y gastos con factura', en: 'VAT you paid on purchases and expenses with invoice' } },
            ],
            steps: [
              { es: 'Suma el IVA de todas tus ventas del mes.', en: 'Add the VAT of all your sales for the month.' },
              { es: 'Suma el IVA de todas tus compras y gastos con factura.', en: 'Add the VAT of all purchases and expenses with invoice.' },
              { es: 'Resta: si sale positivo lo pagas; si sale negativo es saldo a tu favor.', en: 'Subtract: positive means you pay; negative is a balance in your favor.' },
            ],
            example: { es: 'Cobraste $1,200 de IVA y pagaste $700 → 1,200 − 700 = $500 a pagar.', en: 'You charged $1,200 VAT and paid $700 → 1,200 − 700 = $500 payable.' },
            interpret: { es: 'Positivo: le pagas al SAT. Negativo: tienes saldo a favor.', en: 'Positive: you pay. Negative: balance in your favor.' },
          },
        ],
      },
      {
        heading: { es: 'Mi primera póliza con factura', en: 'My first entry from an invoice' },
        body: [
          {
            es: 'Sigue siempre el mismo orden y no te equivocas: **1)** ¿entra o sale dinero? (tipo de póliza y cuenta Caja o Bancos), **2)** ¿qué recibes o entregas? (venta, mercancía, gasto o equipo, por el subtotal), **3)** el IVA en su cuenta, **4)** revisa que cargos = abonos.',
            en: 'Always use the same order: **1)** does money come in or go out? (entry type, Cash or Bank), **2)** what do you receive or give? (sale, goods, expense or equipment, at the subtotal), **3)** VAT in its account, **4)** check debits = credits.',
          },
          {
            es: 'Ejemplo: vendes un servicio por $1,000 + IVA y te pagan por transferencia. Póliza de **Ingreso**: cargo a Bancos $1,160; abono a Ingresos por servicios $1,000; abono a IVA trasladado $160. Cuadra: 1,160 = 1,000 + 160.',
            en: 'Example: you sell a service for $1,000 + VAT paid by transfer. **Receipt** entry: debit Bank $1,160; credit Service revenue $1,000; credit Output VAT $160. Balanced: 1,160 = 1,000 + 160.',
          },
          {
            es: 'Cuando termines este tema, practica en **Laboratorio contable → Práctica → Básico**: ahí te llegan facturas como estas para que las registres.',
            en: 'When you finish this topic, practice in **Accounting lab → Practice → Basic**, where you get invoices like these to record.',
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: 'Pagas la luz con transferencia', en: 'You pay electricity by transfer' },
        problem: { es: 'Recibes una factura de luz: subtotal $1,500, IVA $240, total $1,740, método PUE, forma 03 Transferencia. ¿Cómo la registras?', en: 'You receive an electricity invoice: subtotal $1,500, VAT $240, total $1,740, PUE, form 03 Transfer. How do you record it?' },
        steps: [
          { es: 'Sale dinero del banco → póliza de Egreso, abono a Bancos $1,740.', en: 'Money leaves the bank → payment entry, credit Bank $1,740.' },
          { es: 'Es un gasto → cargo a Luz, agua y teléfono por el subtotal, $1,500.', en: 'It is an expense → debit Utilities for the subtotal, $1,500.' },
          { es: 'Pagaste IVA → cargo a IVA acreditable $240.', en: 'You paid VAT → debit Input VAT $240.' },
          { es: 'Revisa: 1,500 + 240 = 1,740. Cuadra.', en: 'Check: 1,500 + 240 = 1,740. Balanced.' },
        ],
        result: { es: 'Egreso: cargo Luz $1,500 y IVA acreditable $240; abono Bancos $1,740.', en: 'Payment: debit Utilities $1,500 and Input VAT $240; credit Bank $1,740.' },
      },
      {
        title: { es: 'Vendes a crédito', en: 'You sell on credit' },
        problem: { es: 'Emites una factura de venta de servicio: subtotal $4,000, IVA $640, total $4,640, método PPD. ¿Qué tipo de póliza es?', en: 'You issue a service invoice: subtotal $4,000, VAT $640, total $4,640, PPD. What entry type is it?' },
        steps: [
          { es: 'PPD = todavía no te pagan → no entra dinero.', en: 'PPD = not paid yet → no money comes in.' },
          { es: 'Como no se mueve dinero, es una póliza de Diario y tu cliente te queda debiendo (Clientes).', en: 'No money moves, so it is a journal entry and the customer owes you (Receivables).' },
        ],
        result: { es: 'Póliza de Diario. Cuando te paguen, harás una póliza de Ingreso.', en: 'Journal entry. When they pay, you will make a receipt entry.' },
      },
    ],
    keyPoints: [
      { es: 'Ingreso = entra dinero; Egreso = sale dinero; Diario = no se mueve dinero.', en: 'Receipt = money in; Payment = money out; Journal = no money moves.' },
      { es: 'Ventas, compras y gastos se registran por el subtotal (sin IVA).', en: 'Sales, purchases and expenses are recorded at the subtotal (before VAT).' },
      { es: 'IVA trasladado (lo que cobras) se abona; IVA acreditable (lo que pagas) se carga.', en: 'Output VAT (charged) is credited; input VAT (paid) is debited.' },
      { es: 'PUE = ya se pagó; PPD = se pagará después.', en: 'PUE = already paid; PPD = to be paid later.' },
    ],
    normativeNote: { es: 'Tasa general de IVA de 16% y claves del CFDI 4.0 usadas como referencia; verifica la regla vigente con tu contador.', en: 'General 16% VAT rate and CFDI 4.0 codes used as reference; check current rules with your accountant.' },
    exerciseIds: ['L1-16-E1', 'L1-16-E2', 'L1-16-E3', 'L1-16-E4', 'L1-16-E5'],
  },
]

const base = { level: 1 as const, module: 'L1-16', competency: 'journal-entries' }

export const exercises: Exercise[] = [
  {
    ...base,
    id: 'L1-16-E1',
    kind: 'mcq',
    flavor: 'concept',
    difficulty: 1,
    points: 10,
    prompt: { es: 'Un cliente te paga en efectivo una venta de contado. ¿Qué tipo de póliza haces?', en: 'A customer pays a cash sale in cash. Which entry type do you make?' },
    options: [
      { id: 'L1-16-E1-a', text: { es: 'Ingreso', en: 'Receipt (Ingreso)' } },
      { id: 'L1-16-E1-b', text: { es: 'Egreso', en: 'Payment (Egreso)' } },
      { id: 'L1-16-E1-c', text: { es: 'Diario', en: 'Journal (Diario)' } },
      { id: 'L1-16-E1-d', text: { es: 'No se hace póliza', en: 'No entry is needed' } },
    ],
    correctOptionId: 'L1-16-E1-a',
    explanation: { es: 'Entra dinero a Caja, así que es póliza de Ingreso.', en: 'Money comes into Cash, so it is a receipt entry.' },
  },
  {
    ...base,
    id: 'L1-16-E2',
    kind: 'mcq',
    flavor: 'concept',
    difficulty: 1,
    points: 10,
    prompt: { es: 'Emites una factura con método de pago PPD. ¿Qué tipo de póliza haces hoy?', en: 'You issue an invoice with payment method PPD. Which entry type today?' },
    options: [
      { id: 'L1-16-E2-a', text: { es: 'Ingreso', en: 'Receipt (Ingreso)' } },
      { id: 'L1-16-E2-b', text: { es: 'Egreso', en: 'Payment (Egreso)' } },
      { id: 'L1-16-E2-c', text: { es: 'Diario', en: 'Journal (Diario)' } },
      { id: 'L1-16-E2-d', text: { es: 'No se hace póliza', en: 'No entry is needed' } },
    ],
    correctOptionId: 'L1-16-E2-c',
    explanation: { es: 'PPD significa que te pagarán después: hoy no entra dinero, así que es de Diario.', en: 'PPD means you will be paid later: no money today, so it is a journal entry.' },
  },
  {
    ...base,
    id: 'L1-16-E3',
    kind: 'truefalse',
    flavor: 'concept',
    difficulty: 1,
    points: 10,
    prompt: { es: 'El IVA trasladado (el que cobras a tus clientes) es dinero tuyo y se registra como ingreso.', en: 'Output VAT (charged to customers) is your money and is recorded as revenue.' },
    answer: false,
    explanation: { es: 'Falso. Ese IVA se lo debes al SAT: es un pasivo (IVA trasladado), no un ingreso.', en: 'False. You owe that VAT to the SAT: it is a liability, not revenue.' },
  },
  {
    ...base,
    id: 'L1-16-E4',
    kind: 'numeric',
    flavor: 'case',
    difficulty: 1,
    points: 10,
    prompt: { es: 'Una factura tiene subtotal de $3,500. ¿Cuánto es el IVA al 16%?', en: 'An invoice has a $3,500 subtotal. What is the 16% VAT?' },
    answer: 560,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: { es: 'IVA = 3,500 × 0.16 = $560.', en: 'VAT = 3,500 × 0.16 = $560.' },
  },
  {
    ...base,
    id: 'L1-16-E5',
    kind: 'journal',
    flavor: 'case',
    difficulty: 2,
    points: 20,
    context: { es: 'Emitiste una factura: Servicio de mantenimiento. Subtotal $5,000, IVA $800, Total $5,800. Método PUE, forma 03 Transferencia.', en: 'You issued an invoice: Maintenance service. Subtotal $5,000, VAT $800, Total $5,800. PUE, form 03 Transfer.' },
    prompt: { es: 'Registra la póliza de esta venta.', en: 'Record the entry for this sale.' },
    accountChoices: ['1101', '1102', '1104', '1109', '2104', '4101', '4102'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 5800 },
      { accountCode: '4102', side: 'C', amount: 5000 },
      { accountCode: '2104', side: 'C', amount: 800 },
    ],
    explanation: { es: 'Entra el total al banco (cargo Bancos $5,800). El ingreso es el subtotal (abono Ingresos por servicios $5,000) y el IVA cobrado se debe al SAT (abono IVA trasladado $800).', en: 'The total comes into the bank (debit $5,800). Revenue is the subtotal (credit $5,000) and the VAT charged is owed (credit Output VAT $800).' },
  },
  {
    ...base,
    id: 'L1-16-E6',
    kind: 'journal',
    flavor: 'case',
    difficulty: 2,
    points: 20,
    context: { es: 'Recibiste una factura de luz: Subtotal $2,000, IVA $320, Total $2,320. Método PUE, forma 03 Transferencia.', en: 'You received an electricity invoice: Subtotal $2,000, VAT $320, Total $2,320. PUE, form 03 Transfer.' },
    prompt: { es: 'Registra la póliza de este gasto.', en: 'Record the entry for this expense.' },
    accountChoices: ['1101', '1102', '1109', '2101', '2104', '6102', '6103'],
    expected: [
      { accountCode: '6103', side: 'D', amount: 2000 },
      { accountCode: '1109', side: 'D', amount: 320 },
      { accountCode: '1102', side: 'C', amount: 2320 },
    ],
    explanation: { es: 'El gasto es el subtotal (cargo Luz $2,000), el IVA que pagaste lo puedes restar (cargo IVA acreditable $320) y sale el total del banco (abono Bancos $2,320).', en: 'Expense is the subtotal (debit $2,000), input VAT is creditable (debit $320) and the total leaves the bank (credit $2,320).' },
  },
]
