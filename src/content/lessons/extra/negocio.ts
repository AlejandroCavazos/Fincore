import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — tema complementario 5.14: Tu propio negocio, obligaciones fiscales básicas.
 */

const NOTE_TAX = {
  es: "Contenido educativo y general sobre obligaciones fiscales de personas físicas con negocio en México. Las reglas, tasas, topes y fechas de los impuestos (ISR, IVA, RESICO) cambian con frecuencia: verifica la versión vigente (2026) con la fuente oficial del SAT o con un contador antes de tomar decisiones. Las cifras de esta lección son referencias aproximadas, no asesoría fiscal.",
  en: "Educational, general content on the tax obligations of individuals running a business in Mexico. Tax rules, rates, caps and dates (ISR, VAT, RESICO) change often: verify the current version (2026) with the official SAT source or an accountant before making decisions. Figures in this lesson are approximate references, not tax advice.",
}

export const lessons: Lesson[] = [
  {
    id: 'L5-06',
    level: 5,
    topicIds: ['5.14'],
    title: { es: "Tu propio negocio: obligaciones fiscales básicas", en: "Your own business: basic tax obligations" },
    summary: {
      es: "Para abrir un negocio pequeño en orden necesitas separar tu dinero del del negocio, darte de alta en el SAT en el régimen correcto, facturar y guardar comprobantes, y cumplir a tiempo con tus declaraciones.",
      en: "To run a small business properly you need to separate your money from the business's, register with the SAT under the right regime, issue invoices and keep receipts, and file your returns on time.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar por qué conviene separar el dinero personal del dinero del negocio y cómo hacerlo.", en: "Explain why it pays to separate personal money from business money and how to do it." },
      { es: "Describir los pasos básicos para darte de alta en el SAT (RFC, e.firma, régimen fiscal) y la idea general del RESICO y de actividad empresarial y profesional.", en: "Describe the basic steps to register with the SAT (RFC, e.firma, tax regime) and the general idea of RESICO and the business and professional activity regime." },
      { es: "Distinguir el IVA trasladado del IVA acreditable y calcular el IVA a pagar de un mes.", en: "Distinguish output VAT from input VAT and compute a month's VAT payable." },
      { es: "Reconocer las declaraciones mensuales y anual, las consecuencias de no cumplir y cuándo conviene un contador.", en: "Recognize monthly and annual returns, the consequences of not complying and when an accountant is worth it." },
    ],
    theory: [
      {
        heading: { es: "Separa tu dinero del dinero del negocio", en: "Separate your money from the business's money" },
        body: [
          {
            es: "Imagina a Lupita, que abre una **cafetería** pequeña. Cobra los cafés y guarda el dinero en su propia cartera. Con esa misma cartera paga la leche, el súper de su casa y la colegiatura de su hijo. Al final del mes tiene $3,000 menos que al inicio. ¿El negocio perdió dinero o ella gastó mucho en su casa? **No lo puede saber**, porque todo está revuelto.",
            en: "Imagine Lupita, who opens a small **coffee shop**. She collects payment for coffees and keeps the money in her own wallet. From that same wallet she pays for milk, her household groceries and her son's school fees. At the end of the month she has $3,000 less than at the start. Did the business lose money, or did she spend a lot at home? **She cannot tell**, because everything is mixed up.",
          },
          {
            es: "La regla de oro es: **el negocio es una cosa y tú eres otra**. Abre una **cuenta bancaria solo para el negocio**: ahí entran las ventas y de ahí salen los pagos del negocio (proveedores, renta del local, luz). Para tus gastos personales, **págate un sueldo fijo**: una cantidad que pasas cada quincena o cada mes de la cuenta del negocio a tu cuenta personal.",
            en: "The golden rule is: **the business is one thing and you are another**. Open a **bank account only for the business**: sales go in and business payments (suppliers, shop rent, electricity) go out. For your personal expenses, **pay yourself a fixed salary**: an amount you move every two weeks or every month from the business account to your personal account.",
          },
          {
            es: "Además, **registra todo**: cada venta y cada gasto, aunque sea en una libreta o en una hoja de cálculo. Así sabes cuánto **ganas de verdad**. Mini ejemplo: si en el mes vendes $40,000 y el negocio gasta $28,000, la ganancia del negocio es $12,000. Si te pagaste $8,000 de sueldo, al negocio le quedan $4,000 para crecer o para emergencias.",
            en: "Also, **record everything**: every sale and every expense, even in a notebook or spreadsheet. That way you know how much you **really earn**. Mini example: if you sell $40,000 in the month and the business spends $28,000, the business's profit is $12,000. If you paid yourself a $8,000 salary, the business keeps $4,000 to grow or for emergencies.",
          },
        ],
        bullets: [
          { es: "Una cuenta bancaria exclusiva del negocio.", en: "A bank account just for the business." },
          { es: "Un sueldo fijo para ti, en lugar de tomar dinero de la caja cuando se te antoja.", en: "A fixed salary for yourself, instead of taking money from the till whenever you feel like it." },
          { es: "Registrar cada venta y cada gasto con su fecha y su comprobante.", en: "Record every sale and expense with its date and receipt." },
          { es: "Mezclar el dinero te hace creer que ganas (o pierdes) más de lo real.", en: "Mixing money makes you believe you earn (or lose) more than you really do." },
        ],
        formula: "Ganancia del negocio = Ventas − Gastos del negocio (tus gastos personales no entran)",
      },
      {
        heading: { es: "Darte de alta en el SAT: RFC, e.firma y régimen fiscal", en: "Registering with the SAT: RFC, e.firma and tax regime" },
        body: [
          {
            es: "El **SAT** (Servicio de Administración Tributaria) es la autoridad que cobra los impuestos federales en México. Para vender de manera formal te inscribes y obtienes tu **RFC** (Registro Federal de Contribuyentes): una clave de letras y números que te identifica, como tu \"número de cliente\" ante el SAT. También obtienes tu **Constancia de Situación Fiscal**, el documento que muestra tus datos fiscales.",
            en: "The **SAT** (Tax Administration Service) is the authority that collects federal taxes in Mexico. To sell formally you register and obtain your **RFC** (Federal Taxpayer Registry): a code of letters and numbers that identifies you, like your \"customer number\" at the SAT. You also get your **Tax Status Certificate** (Constancia de Situación Fiscal), the document that shows your tax data.",
          },
          {
            es: "La **e.firma** (antes llamada FIEL) es tu **firma electrónica**: unos archivos con contraseña que valen como tu firma autógrafa en trámites por internet. Se tramita en una oficina del SAT con identificación. Guárdala como guardas las llaves de tu casa. Además está la **contraseña** del SAT, que sirve para entrar al portal y presentar declaraciones.",
            en: "The **e.firma** (formerly called FIEL) is your **electronic signature**: a set of password-protected files that count as your handwritten signature for online procedures. You get it at a SAT office with ID. Keep it the way you keep your house keys. There is also the SAT **password**, used to log in to the portal and file returns.",
          },
          {
            es: "Al inscribirte eliges un **régimen fiscal**: el conjunto de reglas que dice cómo calculas y pagas tus impuestos. Para personas físicas con negocio, dos opciones comunes son: **Actividad empresarial y profesional**, donde pagas ISR sobre tu **ganancia** (ingresos menos gastos deducibles) con tasas que suben según lo que ganas; y el **Régimen Simplificado de Confianza (RESICO)**, vigente desde 2022, donde pagas ISR con **tasas bajas sobre lo que cobras**, sin restar gastos, siempre que tus ingresos del año no pasen de un **tope**.",
            en: "When registering you choose a **tax regime**: the set of rules for how you compute and pay your taxes. For individuals with a business, two common options are: **Business and professional activity**, where you pay ISR (income tax) on your **profit** (income minus deductible expenses) at rates that rise with what you earn; and the **Simplified Trust Regime (RESICO)**, in force since 2022, where you pay ISR at **low rates on what you collect**, without subtracting expenses, as long as your yearly income stays under a **cap**.",
          },
          {
            es: "Como **referencia aproximada** (verifica la cifra vigente): en RESICO para personas físicas las tasas de ISR van de alrededor de **1 % a 2.5 %** de los ingresos cobrados en el mes, y el tope de ingresos ha sido de unos **$3.5 millones de pesos al año**. Ojo: el RESICO es sobre el ISR; el **IVA** se sigue pagando aparte. Mini ejemplo: si cobras $20,000 en un mes y tu tasa fuera 1 %, tu ISR de ese mes sería $200.",
            en: "As an **approximate reference** (check the current figure): under RESICO for individuals, ISR rates range from about **1% to 2.5%** of the month's collected income, and the income cap has been around **3.5 million pesos per year**. Note: RESICO concerns ISR; **VAT** is still paid separately. Mini example: if you collect $20,000 in a month and your rate were 1%, that month's ISR would be $200.",
          },
        ],
        bullets: [
          { es: "RFC: tu clave de identificación ante el SAT.", en: "RFC: your identification code at the SAT." },
          { es: "e.firma: tu firma electrónica para trámites; no la compartas.", en: "e.firma: your electronic signature for procedures; do not share it." },
          { es: "Régimen fiscal: las reglas con las que calculas tus impuestos.", en: "Tax regime: the rules you use to compute your taxes." },
          { es: "Actividad empresarial: ISR sobre ganancia (ingresos − gastos deducibles).", en: "Business activity: ISR on profit (income − deductible expenses)." },
          { es: "RESICO: ISR con tasa baja sobre ingresos cobrados, con tope anual.", en: "RESICO: low-rate ISR on collected income, with a yearly cap." },
        ],
        formula: "ISR mensual RESICO (idea general) = Ingresos cobrados del mes × tasa que corresponda",
      },
      {
        heading: { es: "Facturar y conservar comprobantes", en: "Invoicing and keeping receipts" },
        body: [
          {
            es: "En México la factura es electrónica y se llama **CFDI** (Comprobante Fiscal Digital por Internet). Es un archivo (XML, con su versión en PDF) que el SAT recibe y valida. Cuando vendes, **emites** CFDI a tus clientes; cuando compras para el negocio, **pides** CFDI a tus proveedores.",
            en: "In Mexico the invoice is electronic and is called a **CFDI** (Digital Tax Receipt via Internet). It is a file (XML, with a PDF version) that the SAT receives and validates. When you sell, you **issue** CFDIs to your customers; when you buy for the business, you **ask** your suppliers for a CFDI.",
          },
          {
            es: "Para que te facturen pide la factura **a tu RFC** y da tus datos: **nombre**, **RFC**, **código postal** de tu domicilio fiscal, **régimen fiscal** y el **uso del CFDI** (para qué la usarás, por ejemplo gastos en general). Una compra sin CFDI a tu nombre normalmente **no se puede deducir**, es decir, no puedes restarla como gasto al calcular impuestos. Como referencia, los pagos grandes (de más de unos $2,000) conviene hacerlos con transferencia o tarjeta, porque en efectivo pueden no ser deducibles.",
            en: "To be invoiced, ask for the invoice **to your RFC** and give your data: **name**, **RFC**, **postal code** of your tax address, **tax regime** and the **CFDI use** (what you will use it for, e.g. general expenses). A purchase without a CFDI in your name normally **cannot be deducted**, meaning you cannot subtract it as an expense when computing taxes. As a reference, large payments (over about $2,000) are best made by transfer or card, because in cash they may not be deductible.",
          },
          {
            es: "Ahora el **IVA** (Impuesto al Valor Agregado), cuya tasa general es **16 %**. Cuando vendes, cobras el IVA a tu cliente: ese es el **IVA trasladado** (lo \"pasas\" al cliente, pero es del SAT). Cuando compras, pagas IVA a tu proveedor: ese es el **IVA acreditable**, y si tienes el CFDI puedes restarlo. Cada mes pagas al SAT la **diferencia**. Algunos productos tienen tasa 0 % (como muchos alimentos básicos), y hay tasas especiales en zonas de frontera; revisa tu caso.",
            en: "Now **VAT** (Value Added Tax, IVA), whose general rate is **16%**. When you sell, you charge VAT to your customer: that is **output VAT** (IVA trasladado; you \"pass it on\" to the customer, but it belongs to the SAT). When you buy, you pay VAT to your supplier: that is **input VAT** (IVA acreditable), and if you have the CFDI you can subtract it. Each month you pay the SAT the **difference**. Some products are 0%-rated (such as many basic foods), and there are special rates in border areas; check your case.",
          },
          {
            es: "Mini ejemplo: tu cafetería vende $30,000 más IVA, así que cobras $4,800 de IVA trasladado. Compras insumos por $10,000 más IVA y pagas $1,600 de IVA acreditable. IVA a pagar: 4,800 − 1,600 = **$3,200**. Si el acreditable fuera mayor que el trasladado, tendrías un **saldo a favor**.",
            en: "Mini example: your coffee shop sells $30,000 plus VAT, so you collect $4,800 of output VAT. You buy supplies for $10,000 plus VAT and pay $1,600 of input VAT. VAT payable: 4,800 − 1,600 = **$3,200**. If input VAT were larger than output VAT, you would have a **balance in your favor**.",
          },
        ],
        formula: "IVA a pagar = IVA trasladado (ventas × 16 %) − IVA acreditable (compras con CFDI × 16 %)",
      },
      {
        heading: { es: "Calendario básico: declaraciones y cuándo buscar un contador", en: "Basic calendar: returns and when to get an accountant" },
        body: [
          {
            es: "Una **declaración** es el formato en el que le informas al SAT cuánto ganaste y cuánto impuesto te toca pagar. Como persona física con negocio, en general presentas **declaraciones mensuales** (pagos de ISR e IVA de cada mes), que suelen vencer el **día 17 del mes siguiente**, y una **declaración anual**, que para personas físicas se presenta normalmente en **abril** del año siguiente. Se presentan en el portal del SAT con tu contraseña o e.firma.",
            en: "A **tax return** is the form in which you tell the SAT how much you earned and how much tax you owe. As an individual with a business, you generally file **monthly returns** (ISR and VAT payments for each month), usually due on the **17th of the following month**, and an **annual return**, which individuals normally file in **April** of the following year. They are filed on the SAT portal with your password or e.firma.",
          },
          {
            es: "Aunque un mes no vendas nada, en general debes presentar la declaración (en ceros). Si **no cumples** o pagas tarde, el SAT puede cobrarte **multas** (castigos en dinero), **actualización** (el impuesto se ajusta por inflación) y **recargos** (algo parecido a intereses por el retraso). Además, podrías tener problemas para facturar o para obtener tu opinión de cumplimiento, que algunos clientes y bancos piden.",
            en: "Even if you sell nothing in a month, you generally must file the return (a zero return). If you **do not comply** or pay late, the SAT can charge you **fines** (money penalties), **inflation adjustment** (the tax is adjusted for inflation) and **surcharges** (something like interest for the delay). You could also have trouble invoicing or obtaining your compliance opinion, which some customers and banks ask for.",
          },
          {
            es: "¿Cuándo conviene un **contador**? Si estás empezando y no sabes qué régimen te conviene, si tienes empleados (eso trae obligaciones adicionales), si tus ventas crecen, si recibes una carta o requerimiento del SAT, o si simplemente el tiempo que dedicas a los impuestos lo podrías usar mejor vendiendo. Un buen contador cuesta, pero puede ahorrarte multas y pagos de más.",
            en: "When is an **accountant** worth it? If you are starting and do not know which regime suits you, if you have employees (that brings extra obligations), if your sales are growing, if you receive a letter or request from the SAT, or simply if the time you spend on taxes could be better used selling. A good accountant costs money, but can save you fines and overpayments.",
          },
        ],
        bullets: [
          { es: "Cada vez que vendes: emitir CFDI (cuando el cliente lo pide o la regla lo exige).", en: "Every time you sell: issue a CFDI (when the customer asks or the rule requires it)." },
          { es: "Cada mes: pago de ISR e IVA, normalmente a más tardar el día 17 del mes siguiente.", en: "Every month: ISR and VAT payment, normally by the 17th of the following month." },
          { es: "Cada año: declaración anual (personas físicas, normalmente en abril).", en: "Every year: annual return (individuals, normally in April)." },
          { es: "Si no cumples: multas, actualización y recargos.", en: "If you do not comply: fines, inflation adjustment and surcharges." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "IVA del mes de una tiendita", en: "A corner store's VAT for the month" },
        problem: {
          es: "Don Beto vende en su tiendita productos gravados al 16 % por $25,000 (sin IVA) en marzo. Compra mercancía y paga la luz del local por $15,000 (sin IVA), todo con CFDI a su RFC. ¿Cuánto IVA paga al SAT por marzo?",
          en: "Don Beto sells products taxed at 16% for $25,000 (before VAT) at his corner store in March. He buys goods and pays the shop's electricity for $15,000 (before VAT), all with CFDIs to his RFC. How much VAT does he pay the SAT for March?",
        },
        steps: [
          { es: "IVA trasladado (lo que cobró a clientes): 25,000 × 16 % = $4,000.", en: "Output VAT (charged to customers): 25,000 × 16% = $4,000." },
          { es: "IVA acreditable (lo que pagó a proveedores, con CFDI): 15,000 × 16 % = $2,400.", en: "Input VAT (paid to suppliers, with CFDI): 15,000 × 16% = $2,400." },
          { es: "IVA a pagar: 4,000 − 2,400 = $1,600.", en: "VAT payable: 4,000 − 2,400 = $1,600." },
          { es: "Lo presenta en su declaración mensual, normalmente a más tardar el 17 de abril.", en: "He files it in his monthly return, normally by April 17." },
        ],
        result: {
          es: "Don Beto paga $1,600 de IVA. Si no hubiera pedido CFDI de sus compras, no podría acreditar los $2,400 y pagaría $4,000.",
          en: "Don Beto pays $1,600 of VAT. Had he not asked for CFDIs on his purchases, he could not credit the $2,400 and would pay $4,000.",
        },
      },
      {
        title: { es: "¿Cuánto gana de verdad la cafetería?", en: "How much does the coffee shop really earn?" },
        problem: {
          es: "Lupita separó sus cuentas. En el mes la cafetería cobró $45,000 (sin IVA). Gastos del negocio: insumos $18,000, renta $7,000, luz y gas $3,000. Se pagó un sueldo de $10,000. Supón que está en RESICO y su tasa de ISR del mes fuera 1.1 % (dato de ejemplo). ¿Cuánto gana el negocio, cuánto le queda después de su sueldo y cuánto ISR paga?",
          en: "Lupita separated her accounts. This month the coffee shop collected $45,000 (before VAT). Business expenses: supplies $18,000, rent $7,000, electricity and gas $3,000. She paid herself a $10,000 salary. Suppose she is under RESICO and her ISR rate for the month were 1.1% (example figure). How much does the business earn, how much is left after her salary, and how much ISR does she pay?",
        },
        steps: [
          { es: "Gastos del negocio: 18,000 + 7,000 + 3,000 = $28,000.", en: "Business expenses: 18,000 + 7,000 + 3,000 = $28,000." },
          { es: "Ganancia del negocio: 45,000 − 28,000 = $17,000.", en: "Business profit: 45,000 − 28,000 = $17,000." },
          { es: "Después de su sueldo: 17,000 − 10,000 = $7,000 se quedan en el negocio.", en: "After her salary: 17,000 − 10,000 = $7,000 stays in the business." },
          { es: "ISR RESICO: se calcula sobre lo cobrado, sin restar gastos: 45,000 × 1.1 % = $495.", en: "RESICO ISR: computed on what was collected, without subtracting expenses: 45,000 × 1.1% = $495." },
        ],
        result: {
          es: "El negocio gana $17,000, le quedan $7,000 tras el sueldo de Lupita y paga $495 de ISR (más el IVA del mes, que se calcula aparte).",
          en: "The business earns $17,000, keeps $7,000 after Lupita's salary and pays $495 of ISR (plus the month's VAT, computed separately).",
        },
      },
    ],
    keyPoints: [
      { es: "Separa cuentas: una cuenta para el negocio y un sueldo fijo para ti.", en: "Separate accounts: one account for the business and a fixed salary for you." },
      { es: "Para ser formal necesitas RFC, e.firma y elegir un régimen fiscal (por ejemplo, RESICO o actividad empresarial).", en: "To be formal you need an RFC, e.firma and to choose a tax regime (for example, RESICO or business activity)." },
      { es: "Pide CFDI a tu RFC en cada compra del negocio: sin él, normalmente no puedes deducir ni acreditar el IVA.", en: "Ask for a CFDI to your RFC on every business purchase: without it you normally cannot deduct or credit the VAT." },
      { es: "IVA a pagar = IVA trasladado − IVA acreditable (tasa general 16 %).", en: "VAT payable = output VAT − input VAT (general rate 16%)." },
      { es: "Declaraciones mensuales (normalmente día 17 del mes siguiente) y anual (personas físicas, normalmente abril); incumplir trae multas y recargos.", en: "Monthly returns (normally the 17th of the following month) and annual (individuals, normally April); not complying brings fines and surcharges." },
      { es: "Un contador conviene al empezar, al crecer, al tener empleados o ante cualquier aviso del SAT.", en: "An accountant is worth it when starting, growing, hiring employees or on any SAT notice." },
    ],
    normativeNote: NOTE_TAX,
    exerciseIds: ['NG-001', 'NG-002', 'NG-003', 'NG-004', 'NG-005', 'NG-006', 'NG-007', 'NG-008'],
  },
]

export const exercises: Exercise[] = [
  {
    id: 'NG-001',
    level: 5,
    module: 'L5-06',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "Abres una tiendita. ¿Cuál es la mejor forma de manejar el dinero desde el primer día?",
      en: "You open a corner store. What is the best way to handle the money from day one?",
    },
    options: [
      { id: 'NG-001-a', text: { es: "Una cuenta bancaria solo para el negocio y un sueldo fijo que te pasas a tu cuenta personal", en: "A bank account only for the business and a fixed salary you transfer to your personal account" } },
      { id: 'NG-001-b', text: { es: "Guardar todo en tu cartera y tomar lo que necesites para la casa cuando haga falta", en: "Keep everything in your wallet and take what you need for home whenever necessary" } },
      { id: 'NG-001-c', text: { es: "Usar tu cuenta personal para todo, porque al fin y al cabo el negocio es tuyo", en: "Use your personal account for everything, since the business is yours anyway" } },
      { id: 'NG-001-d', text: { es: "No anotar nada y revisar solo cuánto dinero queda al final del año", en: "Record nothing and only check how much money is left at year end" } },
    ],
    correctOptionId: 'NG-001-a',
    explanation: {
      es: "Con una cuenta exclusiva y un sueldo fijo sabes cuánto gana realmente el negocio y cuánto gastas tú. Las otras opciones mezclan el dinero y te impiden saber si ganas o pierdes. Error común: pensar que, como el negocio es tuyo, no importa separar; justo por eso es fácil confundirse.",
      en: "With a dedicated account and a fixed salary you know how much the business really earns and how much you spend. The other options mix the money and keep you from knowing whether you win or lose. Common mistake: thinking that because the business is yours there is no need to separate; that is exactly why it is easy to get confused.",
    },
    difficulty: 1,
    points: 10,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-002',
    level: 5,
    module: 'L5-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una estética cobra $36,000 en el mes. Paga de gastos del negocio: productos $9,000, renta del local $6,500 y luz $1,500. Además, la dueña tomó $5,000 de la caja para el súper de su casa.",
      en: "A hair salon collects $36,000 in the month. Business expenses paid: products $9,000, shop rent $6,500 and electricity $1,500. In addition, the owner took $5,000 from the till for her household groceries.",
    },
    prompt: {
      es: "¿Cuál es la ganancia del negocio en el mes (sin contar el retiro personal como gasto)? Responde en pesos.",
      en: "What is the business's profit for the month (not counting the personal withdrawal as an expense)? Answer in pesos.",
    },
    answer: 19000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Gastos del negocio: 9,000 + 6,500 + 1,500 = 17,000. Ganancia: 36,000 − 17,000 = $19,000. Los $5,000 del súper son un retiro de la dueña, no un gasto del negocio. Error común: restarlos y responder 14,000, lo que hace creer que el negocio gana menos.",
      en: "Business expenses: 9,000 + 6,500 + 1,500 = 17,000. Profit: 36,000 − 17,000 = $19,000. The $5,000 for groceries is an owner withdrawal, not a business expense. Common mistake: subtracting it and answering 14,000, which makes the business look less profitable.",
    },
    difficulty: 1,
    points: 10,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-003',
    level: 5,
    module: 'L5-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En el RESICO para personas físicas, el ISR mensual se calcula aplicando una tasa baja a los ingresos cobrados, sin restar los gastos del negocio.",
      en: "Under RESICO for individuals, monthly ISR is computed by applying a low rate to collected income, without subtracting business expenses.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Esa es la idea del RESICO: tasa baja (como referencia, alrededor de 1 % a 2.5 %) sobre lo cobrado, sin deducciones, con un tope de ingresos anuales. En actividad empresarial, en cambio, el ISR se calcula sobre la ganancia (ingresos menos gastos deducibles). Error común: creer que en RESICO también se restan los gastos para el ISR.",
      en: "True. That is the idea of RESICO: a low rate (as a reference, about 1% to 2.5%) on what is collected, without deductions, with a yearly income cap. Under business activity, by contrast, ISR is computed on profit (income minus deductible expenses). Common mistake: believing that under RESICO expenses are also subtracted for ISR.",
    },
    difficulty: 1,
    points: 10,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-004',
    level: 5,
    module: 'L5-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Mario da servicios de plomería por su cuenta y está en RESICO. En el mes cobró $32,000 (sin IVA) y gastó $12,000 en material. Supón que la tasa de ISR que le corresponde ese mes es 1.1 % (dato de ejemplo).",
      en: "Mario does plumbing work on his own and is under RESICO. This month he collected $32,000 (before VAT) and spent $12,000 on materials. Suppose his ISR rate for the month is 1.1% (example figure).",
    },
    prompt: {
      es: "¿Cuánto ISR paga Mario por ese mes? Responde en pesos.",
      en: "How much ISR does Mario pay for that month? Answer in pesos.",
    },
    answer: 352,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "En RESICO el ISR se calcula sobre lo cobrado, sin restar gastos: 32,000 × 1.1 % = 32,000 × 0.011 = $352. Error común: restar el material (32,000 − 12,000 = 20,000) y responder 220; eso sería mezclar la lógica de actividad empresarial con la de RESICO.",
      en: "Under RESICO, ISR is computed on what was collected, without subtracting expenses: 32,000 × 1.1% = 32,000 × 0.011 = $352. Common mistake: subtracting materials (32,000 − 12,000 = 20,000) and answering 220; that mixes the business-activity logic with RESICO's.",
    },
    difficulty: 2,
    points: 15,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-005',
    level: 5,
    module: 'L5-06',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Compras un refrigerador para tu cafetería y pides factura (CFDI). ¿Qué datos tuyos le das al proveedor? Selecciona todas las que apliquen.",
      en: "You buy a refrigerator for your coffee shop and ask for an invoice (CFDI). Which of your details do you give the supplier? Select all that apply.",
    },
    options: [
      { id: 'NG-005-a', text: { es: "Tu RFC y tu nombre", en: "Your RFC and your name" } },
      { id: 'NG-005-b', text: { es: "El código postal de tu domicilio fiscal", en: "The postal code of your tax address" } },
      { id: 'NG-005-c', text: { es: "Tu régimen fiscal y el uso del CFDI", en: "Your tax regime and the CFDI use" } },
      { id: 'NG-005-d', text: { es: "La contraseña de tu e.firma", en: "Your e.firma password" } },
      { id: 'NG-005-e', text: { es: "El NIP de tu tarjeta de débito", en: "Your debit card PIN" } },
    ],
    correctOptionIds: ['NG-005-a', 'NG-005-b', 'NG-005-c'],
    explanation: {
      es: "Para emitir el CFDI el proveedor necesita tu nombre, RFC, código postal fiscal, régimen fiscal y el uso que le darás. Tu e.firma y tu NIP son secretos y nunca se comparten: con ellos alguien podría hacer trámites o pagos a tu nombre. Error común: dar la e.firma \"para que lo facturen más rápido\".",
      en: "To issue the CFDI the supplier needs your name, RFC, tax postal code, tax regime and the intended use. Your e.firma and PIN are secret and never shared: with them someone could carry out procedures or payments in your name. Common mistake: handing over the e.firma \"so they can invoice faster\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-006',
    level: 5,
    module: 'L5-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En abril, una papelería cobró $8,000 de IVA trasladado en sus ventas y pagó $3,200 de IVA en compras amparadas con CFDI a su RFC. Todo a tasa del 16 %.",
      en: "In April, a stationery shop collected $8,000 of output VAT on its sales and paid $3,200 of VAT on purchases backed by CFDIs to its RFC. All at the 16% rate.",
    },
    prompt: {
      es: "¿Cuánto IVA debe pagar al SAT por abril? Responde en pesos.",
      en: "How much VAT must it pay the SAT for April? Answer in pesos.",
    },
    answer: 4800,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "IVA a pagar = trasladado − acreditable = 8,000 − 3,200 = $4,800. Error común: pagar los $8,000 completos por no restar el IVA acreditable, o sumarlos (11,200).",
      en: "VAT payable = output − input = 8,000 − 3,200 = $4,800. Common mistake: paying the full $8,000 by not subtracting input VAT, or adding them (11,200).",
    },
    difficulty: 1,
    points: 10,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-007',
    level: 5,
    module: 'L5-06',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una cafetería vende $35,000 (sin IVA) en el mes, todo gravado al 16 %. Compra insumos y equipo por $12,500 (sin IVA), con CFDI a su RFC, también al 16 %.",
      en: "A coffee shop sells $35,000 (before VAT) in the month, all taxed at 16%. It buys supplies and equipment for $12,500 (before VAT), with CFDIs to its RFC, also at 16%.",
    },
    prompt: {
      es: "Calcula el IVA trasladado, el IVA acreditable y el IVA a pagar del mes, en pesos.",
      en: "Compute the month's output VAT, input VAT and VAT payable, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "IVA trasladado", en: "Output VAT" }, answer: 5600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "IVA acreditable", en: "Input VAT" }, answer: 2000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "IVA a pagar", en: "VAT payable" }, answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Trasladado: 35,000 × 0.16 = $5,600. Acreditable: 12,500 × 0.16 = $2,000. A pagar: 5,600 − 2,000 = $3,600. Error común: calcular el 16 % sobre la diferencia de precios y luego volver a restar, o usar los montos con IVA incluido como si fueran la base.",
      en: "Output: 35,000 × 0.16 = $5,600. Input: 12,500 × 0.16 = $2,000. Payable: 5,600 − 2,000 = $3,600. Common mistake: applying 16% to the price difference and then subtracting again, or using VAT-inclusive amounts as if they were the base.",
    },
    difficulty: 2,
    points: 15,
    competency: 'small-business-tax',
  },
  {
    id: 'NG-008',
    level: 5,
    module: 'L5-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada obligación de una persona física con negocio según cuándo se cumple normalmente.",
      en: "Classify each obligation of an individual with a business by when it is normally met.",
    },
    categories: [
      { id: 'NG-008-c1', label: { es: "Cada vez que vendes", en: "Every time you sell" } },
      { id: 'NG-008-c2', label: { es: "Cada mes", en: "Every month" } },
      { id: 'NG-008-c3', label: { es: "Una vez al año", en: "Once a year" } },
    ],
    items: [
      { id: 'NG-008-i1', label: { es: "Emitir el CFDI a un cliente que te pide factura", en: "Issue a CFDI to a customer who asks for an invoice" }, correctCategoryId: 'NG-008-c1' },
      { id: 'NG-008-i2', label: { es: "Pagar el IVA (trasladado − acreditable) del periodo", en: "Pay the period's VAT (output − input)" }, correctCategoryId: 'NG-008-c2' },
      { id: 'NG-008-i3', label: { es: "Pagar el ISR provisional o de RESICO del periodo", en: "Pay the period's provisional or RESICO ISR" }, correctCategoryId: 'NG-008-c2' },
      { id: 'NG-008-i4', label: { es: "Presentar la declaración que resume todo el ejercicio (normalmente en abril)", en: "File the return that summarizes the whole fiscal year (normally in April)" }, correctCategoryId: 'NG-008-c3' },
      { id: 'NG-008-i5', label: { es: "Presentar la declaración en ceros si no tuviste ventas", en: "File a zero return if you had no sales" }, correctCategoryId: 'NG-008-c2' },
    ],
    explanation: {
      es: "El CFDI se emite en cada venta que lo requiere. El IVA y el ISR (provisional o de RESICO) se declaran cada mes, normalmente a más tardar el día 17 del mes siguiente, incluso en ceros si no vendiste. La anual resume todo el año y las personas físicas la presentan normalmente en abril. Error común: pensar que si no vendiste no hay que declarar nada; no presentar puede generar multas.",
      en: "The CFDI is issued on each sale that requires it. VAT and ISR (provisional or RESICO) are filed every month, normally by the 17th of the following month, even as zero returns if you sold nothing. The annual return summarizes the whole year and individuals normally file it in April. Common mistake: thinking that if you sold nothing there is nothing to file; not filing can lead to fines.",
    },
    difficulty: 2,
    points: 15,
    competency: 'small-business-tax',
  },
]
