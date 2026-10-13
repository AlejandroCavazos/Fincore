import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Personales y Educación Financiera (parte 2):
 * PER.7 a PER.12 (interés, crédito, CAT, deudas, fondo de emergencia e inversiones).
 */

const NOTE_RATES = {
  es: "Contenido educativo. Las tasas y montos de este tema son ejemplos hipotéticos para practicar, no tasas reales del mercado. Las tasas que ofrecen bancos e instituciones cambian con el tiempo: verifica siempre la tasa vigente (2026) y las condiciones en tu contrato antes de decidir.",
  en: "Educational content. The rates and amounts in this topic are hypothetical examples for practice, not real market rates. The rates offered by banks and institutions change over time: always verify the current rate (2026) and the terms in your contract before deciding.",
}

const NOTE_CREDIT = {
  es: "Contenido educativo. En México, el crédito y las tarjetas están regulados y supervisados por autoridades como el Banco de México, la CNBV y la CONDUSEF; el historial crediticio lo registran las sociedades de información crediticia (como el Buró de Crédito). Las reglas sobre comisiones, pago mínimo y estados de cuenta cambian con el tiempo: verifica la versión vigente (2026) y lee tu contrato. Los montos de los ejemplos son hipotéticos.",
  en: "Educational content. In Mexico, credit and credit cards are regulated and supervised by authorities such as Banco de México, the CNBV and CONDUSEF; credit history is recorded by credit information companies (such as Buró de Crédito). Rules on fees, minimum payment and statements change over time: verify the current version (2026) and read your contract. Amounts in the examples are hypothetical.",
}

const NOTE_CAT = {
  es: "Contenido educativo. El CAT (Costo Anual Total) es un indicador que en México regula el Banco de México y que las instituciones deben informar en su publicidad y contratos, para fines informativos y de comparación. La forma de calcularlo y las reglas de publicidad pueden cambiar: verifica la versión vigente (2026). Las tasas y CAT de los ejemplos son hipotéticos; los límites de endeudamiento mencionados son guías prácticas, no reglas legales.",
  en: "Educational content. The CAT (Total Annual Cost) is an indicator regulated in Mexico by Banco de México that institutions must disclose in their advertising and contracts, for information and comparison purposes. The way it is calculated and the advertising rules may change: verify the current version (2026). Rates and CATs in the examples are hypothetical; the debt limits mentioned are practical guidelines, not legal rules.",
}

const NOTE_DEBT = {
  es: "Contenido educativo. En México, la CONDUSEF atiende quejas contra instituciones financieras y lleva un registro de despachos de cobranza; las sociedades de información crediticia guardan tu historial por plazos que fija la ley. Las reglas y plazos cambian: verifica la versión vigente (2026) con la fuente oficial. Las tasas y montos de los ejemplos son hipotéticos.",
  en: "Educational content. In Mexico, CONDUSEF handles complaints against financial institutions and keeps a registry of collection agencies; credit information companies keep your history for periods set by law. Rules and periods change: verify the current version (2026) with the official source. Rates and amounts in the examples are hypothetical.",
}

const NOTE_EMERGENCY = {
  es: "Contenido educativo. La regla de 3 a 6 meses de gastos es una guía práctica, no una norma. En México, el IPAB protege los depósitos bancarios hasta un límite por persona y por banco expresado en UDIS; verifica el monto y las condiciones vigentes (2026). Los montos de los ejemplos son hipotéticos.",
  en: "Educational content. The 3-to-6-months-of-expenses rule is a practical guideline, not a standard. In Mexico, IPAB protects bank deposits up to a limit per person and per bank expressed in UDIS; verify the current amount and conditions (2026). Amounts in the examples are hypothetical.",
}

const NOTE_INVEST = {
  es: "Contenido educativo, no es una recomendación de inversión. En México, la CNBV autoriza y supervisa a bancos, casas de bolsa y operadoras de fondos; antes de invertir, verifica que la institución esté autorizada. Los rendimientos pasados no garantizan rendimientos futuros. Las cifras de los ejemplos son hipotéticas y las reglas cambian: verifica la información vigente (2026).",
  en: "Educational content, not an investment recommendation. In Mexico, the CNBV authorizes and supervises banks, brokerage firms and fund managers; before investing, verify that the institution is authorized. Past returns do not guarantee future returns. Figures in the examples are hypothetical and rules change: verify current information (2026).",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── PER-07 ─────────────────────────────
  {
    id: 'PER-07',
    level: 1,
    topicIds: ['PER.7'],
    title: { es: "Interés simple y compuesto", en: "Simple and compound interest" },
    summary: {
      es: "El interés es el precio del dinero en el tiempo: el simple se calcula siempre sobre lo que prestaste o ahorraste, y el compuesto también sobre los intereses acumulados, por eso crece cada vez más rápido.",
      en: "Interest is the price of money over time: simple interest is always computed on what you lent or saved, while compound interest is also computed on accumulated interest, which is why it grows faster and faster.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es el interés y calcular interés simple y monto final con la fórmula I = C × i × t.", en: "Explain what interest is and compute simple interest and final amount with the formula I = C × i × t." },
      { es: "Calcular el monto con interés compuesto y explicar por qué crece más rápido que el simple.", en: "Compute the amount with compound interest and explain why it grows faster than simple interest." },
      { es: "Ajustar la tasa y el número de periodos cuando la capitalización no es anual.", en: "Adjust the rate and number of periods when compounding is not annual." },
      { es: "Usar la regla del 72 para estimar en cuánto tiempo se duplica el dinero.", en: "Use the rule of 72 to estimate how long it takes money to double." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es el interés? El interés simple", en: "What is interest? Simple interest" },
        body: [
          {
            es: "El **interés** es lo que se paga por usar dinero ajeno durante un tiempo. Si pides prestado, pagas interés; si ahorras en un banco, el banco te paga interés a ti porque usa tu dinero. Es como una **renta del dinero**.",
            en: "**Interest** is what is paid for using someone else's money for a while. If you borrow, you pay interest; if you save in a bank, the bank pays you interest because it uses your money. It is like **rent for money**.",
          },
          {
            es: "Para calcularlo usamos tres datos: el **capital** (C), que es la cantidad inicial; la **tasa de interés** (i), que es el porcentaje que se cobra o paga por periodo; y el **tiempo** (t), el número de periodos. Ojo: la tasa y el tiempo deben estar en la **misma unidad** (ambos en años o ambos en meses).",
            en: "To compute it we use three pieces of data: the **principal** (C), the initial amount; the **interest rate** (i), the percentage charged or paid per period; and the **time** (t), the number of periods. Careful: rate and time must be in the **same unit** (both in years or both in months).",
          },
          {
            es: "En el **interés simple**, el interés se calcula **siempre sobre el capital inicial**. Cada periodo ganas (o pagas) lo mismo. Mini ejemplo: ahorras $10,000 al 10% anual simple por 3 años. Interés = 10,000 × 0.10 × 3 = $3,000; al final tienes $13,000.",
            en: "With **simple interest**, interest is **always computed on the initial principal**. Each period you earn (or pay) the same amount. Mini example: you save $10,000 at 10% simple annual interest for 3 years. Interest = 10,000 × 0.10 × 3 = $3,000; at the end you have $13,000.",
          },
        ],
        formula: "I = C × i × t      M = C + I = C × (1 + i × t)",
        bullets: [
          { es: "C = capital: lo que prestas, pides o ahorras al inicio.", en: "C = principal: what you lend, borrow or save at the start." },
          { es: "i = tasa por periodo, escrita en decimal (10% = 0.10).", en: "i = rate per period, written as a decimal (10% = 0.10)." },
          { es: "t = número de periodos, en la misma unidad que la tasa.", en: "t = number of periods, in the same unit as the rate." },
          { es: "M = monto: capital más intereses.", en: "M = amount: principal plus interest." },
        ],
      },
      {
        heading: { es: "Interés compuesto: intereses que generan intereses", en: "Compound interest: interest earning interest" },
        body: [
          {
            es: "En el **interés compuesto**, al terminar cada periodo los intereses se **suman al capital** (a esto se le llama **capitalizar**). En el siguiente periodo se calcula interés sobre ese nuevo saldo más grande. Es la famosa **bola de nieve**: mientras más rueda, más crece.",
            en: "With **compound interest**, at the end of each period the interest is **added to the principal** (this is called **compounding**). In the next period interest is computed on that new, larger balance. It is the famous **snowball**: the more it rolls, the bigger it gets.",
          },
          {
            es: "Con los mismos datos de antes ($10,000 al 10% anual por 3 años): año 1, 10,000 × 1.10 = $11,000; año 2, 11,000 × 1.10 = $12,100; año 3, 12,100 × 1.10 = $13,310. Ganas **$310 más** que con interés simple, solo porque los intereses también trabajaron.",
            en: "With the same data as before ($10,000 at 10% annual for 3 years): year 1, 10,000 × 1.10 = $11,000; year 2, 11,000 × 1.10 = $12,100; year 3, 12,100 × 1.10 = $13,310. You earn **$310 more** than with simple interest, just because the interest also worked.",
          },
          {
            es: "El compuesto juega **a tu favor** cuando ahorras o inviertes por muchos años, y **en tu contra** cuando tienes una deuda que no pagas: los intereses no pagados se suman al saldo y generan más intereses.",
            en: "Compounding works **in your favor** when you save or invest for many years, and **against you** when you have a debt you do not pay: unpaid interest is added to the balance and generates more interest.",
          },
        ],
        formula: "M = C × (1 + i)^n",
      },
      {
        heading: { es: "Capitalización, tasa por periodo y la regla del 72", en: "Compounding frequency, rate per period and the rule of 72" },
        body: [
          {
            es: "Muchas tasas se anuncian **anuales**, pero se capitalizan cada mes, cada día o cada 28 días. Para usar la fórmula, divide la tasa anual entre el número de capitalizaciones al año (m) y multiplica los años por m. Así obtienes la **tasa por periodo** y el **número de periodos**.",
            en: "Many rates are quoted **annually** but compounded monthly, daily or every 28 days. To use the formula, divide the annual rate by the number of compounding periods per year (m) and multiply the years by m. That gives you the **rate per period** and the **number of periods**.",
          },
          {
            es: "Mini ejemplo: $10,000 al 12% anual **capitalizable mensualmente** durante 1 año. Tasa mensual = 12% ÷ 12 = 1%; periodos = 12. Monto = 10,000 × (1.01)^12 = **$11,268.25**. Con capitalización anual serían $11,200: mientras más seguido se capitaliza, más crece.",
            en: "Mini example: $10,000 at 12% annual **compounded monthly** for 1 year. Monthly rate = 12% ÷ 12 = 1%; periods = 12. Amount = 10,000 × (1.01)^12 = **$11,268.25**. With annual compounding it would be $11,200: the more often it compounds, the more it grows.",
          },
          {
            es: "La **regla del 72** es un atajo mental: divide 72 entre la tasa anual (en número, no decimal) y obtienes **aproximadamente** cuántos años tarda tu dinero en duplicarse con interés compuesto. Al 8% anual: 72 ÷ 8 ≈ 9 años. Es una estimación, no un cálculo exacto.",
            en: "The **rule of 72** is a mental shortcut: divide 72 by the annual rate (as a number, not a decimal) and you get **approximately** how many years it takes your money to double with compound interest. At 8% a year: 72 ÷ 8 ≈ 9 years. It is an estimate, not an exact calculation.",
          },
        ],
        formula: "i por periodo = tasa anual ÷ m      n = años × m      Años para duplicar ≈ 72 ÷ tasa anual (%)",
        bullets: [
          { es: "Mensual: m = 12.", en: "Monthly: m = 12." },
          { es: "Trimestral: m = 4.", en: "Quarterly: m = 4." },
          { es: "Semestral: m = 2.", en: "Semiannual: m = 2." },
          { es: "Anual: m = 1.", en: "Annual: m = 1." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Préstamo entre familiares con interés simple", en: "Family loan with simple interest" },
        problem: {
          es: "Tu tía te presta $5,000 para reparar tu moto. Acuerdan 2% mensual de interés simple y le pagas todo junto en 6 meses. ¿Cuánto interés pagas y cuánto le devuelves en total?",
          en: "Your aunt lends you $5,000 to repair your motorcycle. You agree on 2% monthly simple interest and you pay her back all at once in 6 months. How much interest do you pay and how much do you return in total?",
        },
        steps: [
          { es: "Datos: C = 5,000; i = 2% mensual = 0.02; t = 6 meses (tasa y tiempo en meses: coinciden).", en: "Data: C = 5,000; i = 2% monthly = 0.02; t = 6 months (rate and time both in months: they match)." },
          { es: "Interés: I = 5,000 × 0.02 × 6 = $600.", en: "Interest: I = 5,000 × 0.02 × 6 = $600." },
          { es: "Monto: M = 5,000 + 600 = $5,600.", en: "Amount: M = 5,000 + 600 = $5,600." },
        ],
        result: {
          es: "Pagas $600 de interés y devuelves $5,600 en total.",
          en: "You pay $600 in interest and return $5,600 in total.",
        },
      },
      {
        title: { es: "Simple contra compuesto en 5 años", en: "Simple versus compound over 5 years" },
        problem: {
          es: "Ahorras $20,000 a una tasa hipotética de 8% anual durante 5 años. Compara cuánto tendrías con interés simple y con interés compuesto anual.",
          en: "You save $20,000 at a hypothetical rate of 8% per year for 5 years. Compare how much you would have with simple interest and with annual compound interest.",
        },
        steps: [
          { es: "Simple: M = 20,000 × (1 + 0.08 × 5) = 20,000 × 1.40 = $28,000.", en: "Simple: M = 20,000 × (1 + 0.08 × 5) = 20,000 × 1.40 = $28,000." },
          { es: "Compuesto: (1.08)^5 = 1.469328…", en: "Compound: (1.08)^5 = 1.469328…" },
          { es: "M = 20,000 × 1.469328 = $29,386.56.", en: "M = 20,000 × 1.469328 = $29,386.56." },
          { es: "Diferencia: 29,386.56 − 28,000 = $1,386.56.", en: "Difference: 29,386.56 − 28,000 = $1,386.56." },
        ],
        result: {
          es: "Con interés compuesto tendrías $1,386.56 más. La diferencia crece mientras más años pasen.",
          en: "With compound interest you would have $1,386.56 more. The difference grows the more years go by.",
        },
      },
    ],
    keyPoints: [
      { es: "El interés es el precio por usar dinero ajeno durante un tiempo.", en: "Interest is the price for using someone else's money for a period of time." },
      { es: "Interés simple: I = C × i × t; se calcula siempre sobre el capital inicial.", en: "Simple interest: I = C × i × t; it is always computed on the initial principal." },
      { es: "Interés compuesto: M = C × (1 + i)^n; los intereses se suman al capital y generan más intereses.", en: "Compound interest: M = C × (1 + i)^n; interest is added to the principal and earns more interest." },
      { es: "La tasa y el tiempo deben estar en la misma unidad; si capitaliza m veces al año, usa tasa ÷ m y años × m.", en: "Rate and time must be in the same unit; if it compounds m times a year, use rate ÷ m and years × m." },
      { es: "El compuesto ayuda al ahorro de largo plazo y castiga las deudas que no se pagan.", en: "Compounding helps long-term saving and punishes unpaid debts." },
    ],
    normativeNote: NOTE_RATES,
    exerciseIds: ['PER-07-E1', 'PER-07-E2', 'PER-07-E3', 'PER-07-E4', 'PER-07-E5', 'PER-07-E6'],
  },

  // ───────────────────────────── PER-08 ─────────────────────────────
  {
    id: 'PER-08',
    level: 1,
    topicIds: ['PER.8'],
    title: { es: "Crédito y tarjetas de crédito", en: "Credit and credit cards" },
    summary: {
      es: "El crédito te permite usar hoy dinero que pagarás después con un costo; la tarjeta de crédito es una herramienta útil si conoces sus fechas, su límite y pagas a tiempo el total.",
      en: "Credit lets you use money today that you will pay back later at a cost; a credit card is a useful tool if you know its dates and limit and pay the full balance on time.",
    },
    minutes: 16,
    objectives: [
      { es: "Explicar qué es el crédito y distinguir el crédito revolvente del no revolvente.", en: "Explain what credit is and distinguish revolving from non-revolving credit." },
      { es: "Identificar los elementos de una tarjeta de crédito: límite, fecha de corte, fecha límite de pago, pago mínimo y pago para no generar intereses.", en: "Identify the elements of a credit card: limit, statement date, payment due date, minimum payment and payment to avoid interest." },
      { es: "Calcular el crédito disponible y el pago del mes cuando hay compras a meses sin intereses.", en: "Compute available credit and the monthly payment when there are interest-free installment purchases." },
      { es: "Aplicar hábitos que cuidan tu historial crediticio.", en: "Apply habits that protect your credit history." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es el crédito y qué tipos hay?", en: "What is credit and what types are there?" },
        body: [
          {
            es: "Un **crédito** es un acuerdo en el que una institución (el **acreedor**) te presta dinero o te deja comprar ahora, y tú (el **deudor**) te comprometes a pagarlo después, normalmente con **intereses** y a veces con **comisiones**. Es como pedir prestado a un amigo, pero con contrato, plazos y costo.",
            en: "**Credit** is an agreement in which an institution (the **creditor**) lends you money or lets you buy now, and you (the **debtor**) commit to paying it back later, usually with **interest** and sometimes with **fees**. It is like borrowing from a friend, but with a contract, deadlines and a cost.",
          },
          {
            es: "Hay dos grandes tipos. El **crédito revolvente** te da una línea que usas, pagas y vuelves a usar, como la tarjeta de crédito bancaria o departamental. El **crédito no revolvente** te da una cantidad fija que pagas en mensualidades hasta terminar: préstamo personal, de nómina, automotriz o hipotecario.",
            en: "There are two main types. **Revolving credit** gives you a line you use, pay and use again, like a bank or department-store credit card. **Non-revolving credit** gives you a fixed amount you repay in installments until it is done: personal, payroll, auto or mortgage loans.",
          },
          {
            es: "Cada vez que usas crédito, las instituciones reportan cómo pagas a una **sociedad de información crediticia** (en México, por ejemplo, el Buró de Crédito). Ese registro es tu **historial crediticio**: si pagas puntual, te abre puertas; si te atrasas, te las cierra. Mini ejemplo: quien paga su tarjeta a tiempo durante años suele conseguir después un crédito para auto con mejores condiciones.",
            en: "Every time you use credit, institutions report how you pay to a **credit information company** (in Mexico, for example, Buró de Crédito). That record is your **credit history**: if you pay on time, it opens doors; if you fall behind, it closes them. Mini example: someone who pays their card on time for years usually gets a car loan later on better terms.",
          },
        ],
      },
      {
        heading: { es: "Cómo funciona una tarjeta de crédito", en: "How a credit card works" },
        body: [
          {
            es: "La tarjeta tiene un **límite de crédito**: lo máximo que puedes deber. Lo que te queda por usar es el **crédito disponible** = límite − saldo que debes. Mini ejemplo: límite de $20,000 y debes $6,000; te quedan $14,000 disponibles.",
            en: "The card has a **credit limit**: the most you can owe. What you have left to use is the **available credit** = limit − balance you owe. Mini example: a $20,000 limit and you owe $6,000; you have $14,000 available.",
          },
          {
            es: "Cada mes hay una **fecha de corte**: el banco cierra el periodo y suma lo que compraste en tu **estado de cuenta**. Unos días después llega la **fecha límite de pago**: el último día para pagar sin atraso. Las compras hechas justo después del corte aparecen hasta el siguiente estado de cuenta.",
            en: "Each month there is a **statement date**: the bank closes the period and adds up what you bought in your **statement**. A few days later comes the **payment due date**: the last day to pay without being late. Purchases made right after the statement date appear in the next statement.",
          },
          {
            es: "Tu estado de cuenta muestra dos pagos clave. El **pago mínimo** es lo menos que puedes pagar para no caer en atraso, pero el resto sigue generando intereses. El **pago para no generar intereses** cubre todo lo del periodo (incluidas las mensualidades de **meses sin intereses**); si lo pagas completo, no pagas intereses. A quien paga así se le llama **totalero**.",
            en: "Your statement shows two key payments. The **minimum payment** is the least you can pay to avoid being late, but the rest keeps generating interest. The **payment to avoid interest** covers everything for the period (including **interest-free installment** payments); if you pay it in full, you pay no interest. Someone who pays this way is called a **full payer** (\"totalero\" in Mexico).",
          },
        ],
        bullets: [
          { es: "Límite de crédito: lo máximo que puedes deber.", en: "Credit limit: the most you can owe." },
          { es: "Fecha de corte: cierre del periodo del estado de cuenta.", en: "Statement date: close of the statement period." },
          { es: "Fecha límite de pago: último día para pagar sin atraso.", en: "Payment due date: last day to pay without being late." },
          { es: "Pago mínimo: evita el atraso, pero no los intereses.", en: "Minimum payment: avoids being late, but not interest." },
          { es: "Pago para no generar intereses: liquida el periodo sin costo extra.", en: "Payment to avoid interest: settles the period at no extra cost." },
        ],
        formula: "Crédito disponible = Límite de crédito − Saldo actual",
      },
      {
        heading: { es: "Meses sin intereses y uso inteligente", en: "Interest-free installments and smart use" },
        body: [
          {
            es: "Con **meses sin intereses (MSI)** divides una compra en partes iguales sin pagar intereses, **siempre que pagues cada mensualidad a tiempo**. Pero ojo: la compra completa **ocupa tu límite** desde el primer día y se va liberando conforme pagas. Además, cada mensualidad se suma a tus demás pagos del mes.",
            en: "With **interest-free installments (MSI)** you split a purchase into equal parts without paying interest, **as long as you pay each installment on time**. But careful: the whole purchase **takes up your limit** from day one and is freed up as you pay. Also, each installment adds to your other payments for the month.",
          },
          {
            es: "Disponer de **efectivo** con la tarjeta de crédito suele ser caro: normalmente se cobra una comisión y se generan intereses desde el día en que lo sacas. La tarjeta de crédito no es dinero extra: es dinero prestado.",
            en: "Withdrawing **cash** with a credit card is usually expensive: there is normally a fee and interest starts from the day you take it out. A credit card is not extra money: it is borrowed money.",
          },
          {
            es: "Mini ejemplo: compras un refrigerador de $12,000 a 6 MSI. Cada mes pagas $2,000 de esa compra. Si además gastas $3,000 en el súper con la tarjeta, ese mes tu pago para no generar intereses es de $5,000.",
            en: "Mini example: you buy a $12,000 refrigerator at 6 interest-free installments. Each month you pay $2,000 for that purchase. If you also spend $3,000 at the supermarket with the card, that month your payment to avoid interest is $5,000.",
          },
        ],
        bullets: [
          { es: "Paga el total para no generar intereses antes de la fecha límite.", en: "Pay the full amount to avoid interest before the due date." },
          { es: "Usa MSI solo si la suma de mensualidades cabe en tu presupuesto.", en: "Use MSI only if the sum of installments fits your budget." },
          { es: "Evita sacar efectivo con la tarjeta de crédito.", en: "Avoid withdrawing cash with the credit card." },
          { es: "Revisa tu estado de cuenta cada mes y reclama cargos que no reconozcas.", en: "Check your statement every month and dispute charges you do not recognize." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto crédito me queda?", en: "How much credit do I have left?" },
        problem: {
          es: "Mariana tiene una tarjeta con límite de $25,000 y saldo inicial de $0. En el mes compra $7,800 y hace un pago de $3,000. ¿Cuál es su saldo y cuánto crédito tiene disponible?",
          en: "Mariana has a card with a $25,000 limit and an opening balance of $0. During the month she buys $7,800 and makes a $3,000 payment. What is her balance and how much credit does she have available?",
        },
        steps: [
          { es: "Saldo: 0 + 7,800 − 3,000 = $4,800.", en: "Balance: 0 + 7,800 − 3,000 = $4,800." },
          { es: "Crédito disponible: 25,000 − 4,800 = $20,200.", en: "Available credit: 25,000 − 4,800 = $20,200." },
        ],
        result: {
          es: "Debe $4,800 y puede usar todavía $20,200. Que tenga crédito disponible no significa que le convenga gastarlo.",
          en: "She owes $4,800 and can still use $20,200. Having available credit does not mean it is wise to spend it.",
        },
      },
      {
        title: { es: "Una compra a meses sin intereses", en: "An interest-free installment purchase" },
        problem: {
          es: "Jorge tiene límite de $15,000 y no debe nada. Compra una pantalla de $9,000 a 6 MSI y $1,500 de gasolina. ¿Cuánto crédito le queda justo después y cuánto es su pago para no generar intereses del primer mes?",
          en: "Jorge has a $15,000 limit and owes nothing. He buys a $9,000 TV at 6 interest-free installments and $1,500 of gas. How much credit does he have right after, and what is his first-month payment to avoid interest?",
        },
        steps: [
          { es: "La compra a MSI ocupa el límite completo: 9,000 + 1,500 = $10,500 usados.", en: "The MSI purchase takes up the full limit: 9,000 + 1,500 = $10,500 used." },
          { es: "Disponible: 15,000 − 10,500 = $4,500.", en: "Available: 15,000 − 10,500 = $4,500." },
          { es: "Mensualidad de la pantalla: 9,000 ÷ 6 = $1,500.", en: "TV installment: 9,000 ÷ 6 = $1,500." },
          { es: "Pago para no generar intereses: 1,500 + 1,500 = $3,000.", en: "Payment to avoid interest: 1,500 + 1,500 = $3,000." },
        ],
        result: {
          es: "Le quedan $4,500 disponibles y debe pagar $3,000 ese mes para no generar intereses.",
          en: "He has $4,500 available and must pay $3,000 that month to avoid interest.",
        },
      },
    ],
    keyPoints: [
      { es: "Crédito: usas hoy dinero ajeno y lo pagas después con un costo.", en: "Credit: you use someone else's money today and pay it back later at a cost." },
      { es: "Revolvente (tarjetas) se usa y se vuelve a usar; no revolvente (préstamos) se paga en mensualidades fijas.", en: "Revolving (cards) is used and reused; non-revolving (loans) is repaid in fixed installments." },
      { es: "Conoce tu fecha de corte y tu fecha límite de pago.", en: "Know your statement date and your payment due date." },
      { es: "El pago mínimo evita el atraso, pero solo el pago para no generar intereses evita los intereses.", en: "The minimum payment avoids being late, but only the payment to avoid interest avoids interest." },
      { es: "Una compra a MSI ocupa todo tu límite desde el inicio y su mensualidad se suma a tu pago del mes.", en: "An MSI purchase takes up your whole limit from the start and its installment adds to your monthly payment." },
      { es: "Pagar puntual construye un buen historial crediticio.", en: "Paying on time builds a good credit history." },
    ],
    normativeNote: NOTE_CREDIT,
    exerciseIds: ['PER-08-E1', 'PER-08-E2', 'PER-08-E3', 'PER-08-E4', 'PER-08-E5', 'PER-08-E6'],
  },

  // ───────────────────────────── PER-09 ─────────────────────────────
  {
    id: 'PER-09',
    level: 1,
    topicIds: ['PER.9'],
    title: { es: "CAT, tasas de interés y endeudamiento", en: "CAT, interest rates and indebtedness" },
    summary: {
      es: "Para saber cuánto cuesta de verdad un crédito no basta la tasa: el CAT suma intereses y comisiones, y tu razón de endeudamiento te dice cuánta deuda puedes cargar sin ahogarte.",
      en: "To know what a loan really costs, the rate is not enough: the CAT adds up interest and fees, and your debt-to-income ratio tells you how much debt you can carry without drowning.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir tasa anual, tasa mensual, tasa fija, tasa variable, tasa ordinaria y tasa moratoria.", en: "Distinguish annual rate, monthly rate, fixed rate, variable rate, ordinary rate and default (late) rate." },
      { es: "Explicar qué es el CAT y usarlo para comparar créditos parecidos.", en: "Explain what the CAT is and use it to compare similar loans." },
      { es: "Calcular la razón de endeudamiento y juzgar si un nuevo crédito es manejable.", en: "Compute the debt-to-income ratio and judge whether a new loan is manageable." },
    ],
    theory: [
      {
        heading: { es: "Las tasas de interés y sus apellidos", en: "Interest rates and their labels" },
        body: [
          {
            es: "La **tasa de interés** es el porcentaje que te cobran por el dinero prestado. Casi siempre se anuncia **anual**, pero en tarjetas y préstamos se cobra cada mes. Una forma sencilla de ver la **tasa mensual** es dividir la anual entre 12: una tasa de 36% anual equivale a 3% mensual.",
            en: "The **interest rate** is the percentage charged for borrowed money. It is almost always quoted **annually**, but cards and loans charge it every month. A simple way to see the **monthly rate** is to divide the annual rate by 12: a 36% annual rate equals 3% monthly.",
          },
          {
            es: "Si los intereses de cada mes se suman al saldo, el costo real en un año es mayor que 12 veces la tasa mensual. A eso se le llama **tasa efectiva anual**. Mini ejemplo: 2% mensual compuesto da (1.02)^12 − 1 ≈ **26.82%** al año, no 24%.",
            en: "If each month's interest is added to the balance, the real cost over a year is greater than 12 times the monthly rate. That is called the **effective annual rate**. Mini example: 2% monthly compounded gives (1.02)^12 − 1 ≈ **26.82%** a year, not 24%.",
          },
          {
            es: "Otros \"apellidos\" de la tasa: **fija** (no cambia durante el crédito) o **variable** (sube o baja según una tasa de referencia); **ordinaria** (la normal por el dinero prestado) o **moratoria** (un interés extra que te cobran si te atrasas). En muchos créditos al consumo también se cobra IVA sobre los intereses; revisa tu contrato.",
            en: "Other rate \"labels\": **fixed** (does not change during the loan) or **variable** (goes up or down with a reference rate); **ordinary** (the normal rate for the money lent) or **default/late** (extra interest charged if you fall behind). In many consumer loans VAT is also charged on interest; check your contract.",
          },
        ],
        formula: "Tasa mensual ≈ Tasa anual ÷ 12      Tasa efectiva anual = (1 + tasa mensual)^12 − 1",
      },
      {
        heading: { es: "El CAT: el costo completo en un solo número", en: "The CAT: the full cost in a single number" },
        body: [
          {
            es: "Dos créditos con la misma tasa pueden costar distinto porque uno cobra **comisiones** (por apertura, anualidad o administración) y el otro no. Por eso en México existe el **CAT (Costo Anual Total)**: un porcentaje anual que junta **intereses, comisiones y otros cargos** del crédito en un solo indicador.",
            en: "Two loans with the same rate can cost different amounts because one charges **fees** (origination, annual fee or administration) and the other does not. That is why Mexico has the **CAT (Total Annual Cost)**: an annual percentage that combines a loan's **interest, fees and other charges** into a single indicator.",
          },
          {
            es: "El CAT sirve para **comparar**: entre créditos del mismo tipo, por el mismo monto y el mismo plazo, **el de menor CAT es el más barato**. Se informa sin IVA y con fines informativos; las instituciones deben mostrarlo en su publicidad y contratos.",
            en: "The CAT is for **comparing**: among loans of the same type, for the same amount and the same term, **the one with the lowest CAT is the cheapest**. It is reported without VAT and for information purposes; institutions must show it in their advertising and contracts.",
          },
          {
            es: "Mini ejemplo: el banco A ofrece un préstamo con tasa de 30% y CAT de 42%; el banco B, tasa de 32% y CAT de 38%. Aunque A tiene menor tasa, **B es más barato** en total: A esconde comisiones que suben su costo.",
            en: "Mini example: bank A offers a loan with a 30% rate and a 42% CAT; bank B, a 32% rate and a 38% CAT. Even though A has a lower rate, **B is cheaper** overall: A hides fees that raise its cost.",
          },
        ],
        bullets: [
          { es: "Compara CAT solo entre créditos del mismo tipo, monto y plazo.", en: "Compare CATs only among loans of the same type, amount and term." },
          { es: "Menor CAT = menor costo total.", en: "Lower CAT = lower total cost." },
          { es: "La tasa sola no muestra las comisiones.", en: "The rate alone does not show the fees." },
          { es: "Pide siempre el CAT por escrito antes de firmar.", en: "Always ask for the CAT in writing before signing." },
        ],
      },
      {
        heading: { es: "Endeudamiento: ¿cuánta deuda aguantas?", en: "Indebtedness: how much debt can you handle?" },
        body: [
          {
            es: "El **endeudamiento** es la carga de deudas que tienes frente a lo que ganas. Lo que importa no es solo cuánto debes, sino cuánto de tu ingreso se va cada mes en pagarlo. Para medirlo se usa la **razón de endeudamiento** (o razón deuda/ingreso).",
            en: "**Indebtedness** is the load of debt you carry relative to what you earn. What matters is not only how much you owe, but how much of your income goes each month to paying it. To measure it we use the **debt-to-income ratio**.",
          },
          {
            es: "Se suman todos los pagos mensuales de deudas (tarjetas, préstamos, compras a plazos) y se divide entre tu **ingreso neto mensual** (lo que realmente recibes después de descuentos). Una guía práctica común es no pasar de alrededor de **30% a 35%**; arriba de eso, cualquier imprevisto te puede hacer caer en atrasos.",
            en: "Add up all monthly debt payments (cards, loans, installment purchases) and divide by your **net monthly income** (what you actually receive after deductions). A common practical guideline is not to go above about **30% to 35%**; beyond that, any surprise can make you fall behind.",
          },
          {
            es: "Mini ejemplo: ganas $20,000 netos y pagas $5,000 al mes de deudas. Razón = 5,000 ÷ 20,000 = **25%**. Si te ofrecen un préstamo con pago de $3,000, subirías a 40%: señal de que mejor no lo tomes o busques un pago menor.",
            en: "Mini example: you earn $20,000 net and pay $5,000 a month in debts. Ratio = 5,000 ÷ 20,000 = **25%**. If you are offered a loan with a $3,000 payment, you would rise to 40%: a sign you had better not take it or look for a smaller payment.",
          },
        ],
        formula: "Razón de endeudamiento (%) = (Pagos mensuales de deudas ÷ Ingreso neto mensual) × 100",
      },
    ],
    examples: [
      {
        title: { es: "Elegir entre dos ofertas de crédito", en: "Choosing between two loan offers" },
        problem: {
          es: "Necesitas $30,000 a 24 meses. Oferta 1: tasa 28% anual, comisión por apertura y CAT de 41%. Oferta 2: tasa 31% anual, sin comisión por apertura y CAT de 37%. ¿Cuál conviene?",
          en: "You need $30,000 over 24 months. Offer 1: 28% annual rate, origination fee and a 41% CAT. Offer 2: 31% annual rate, no origination fee and a 37% CAT. Which one is better?",
        },
        steps: [
          { es: "Verifica que se puedan comparar: mismo monto ($30,000) y mismo plazo (24 meses).", en: "Check that they are comparable: same amount ($30,000) and same term (24 months)." },
          { es: "No te fijes solo en la tasa: la oferta 1 tiene menor tasa pero cobra comisión.", en: "Do not look only at the rate: offer 1 has a lower rate but charges a fee." },
          { es: "Compara CAT: 37% < 41%.", en: "Compare CATs: 37% < 41%." },
        ],
        result: {
          es: "Conviene la oferta 2: su costo total (CAT) es menor aunque su tasa sea más alta.",
          en: "Offer 2 is better: its total cost (CAT) is lower even though its rate is higher.",
        },
      },
      {
        title: { es: "Calcular tu razón de endeudamiento", en: "Computing your debt-to-income ratio" },
        problem: {
          es: "Luis gana $24,000 netos al mes. Paga $4,500 del auto, $2,100 de tarjeta y $600 de un celular a plazos. ¿Cuál es su razón de endeudamiento?",
          en: "Luis earns $24,000 net per month. He pays $4,500 for his car, $2,100 on his card and $600 for a phone on installments. What is his debt-to-income ratio?",
        },
        steps: [
          { es: "Suma de pagos de deuda: 4,500 + 2,100 + 600 = $7,200.", en: "Sum of debt payments: 4,500 + 2,100 + 600 = $7,200." },
          { es: "Divide entre el ingreso neto: 7,200 ÷ 24,000 = 0.30.", en: "Divide by net income: 7,200 ÷ 24,000 = 0.30." },
          { es: "Multiplica por 100: 30%.", en: "Multiply by 100: 30%." },
        ],
        result: {
          es: "Su razón es 30%: está en el límite de la guía práctica, así que no debería tomar más deudas por ahora.",
          en: "His ratio is 30%: he is at the edge of the practical guideline, so he should not take on more debt for now.",
        },
      },
    ],
    keyPoints: [
      { es: "La tasa anual se cobra por periodos; si los intereses se suman al saldo, el costo efectivo anual es mayor.", en: "The annual rate is charged by periods; if interest is added to the balance, the effective annual cost is higher." },
      { es: "Tasa fija no cambia; variable sí. La moratoria es un cargo extra por atrasarte.", en: "A fixed rate does not change; a variable one does. The default rate is an extra charge for falling behind." },
      { es: "El CAT junta intereses, comisiones y otros cargos en un porcentaje anual.", en: "The CAT combines interest, fees and other charges into one annual percentage." },
      { es: "Entre créditos del mismo tipo, monto y plazo, el menor CAT es el más barato.", en: "Among loans of the same type, amount and term, the lowest CAT is the cheapest." },
      { es: "Razón de endeudamiento = pagos de deuda ÷ ingreso neto; como guía práctica, mantenla por debajo de 30% a 35%.", en: "Debt-to-income ratio = debt payments ÷ net income; as a practical guideline, keep it below 30% to 35%." },
    ],
    normativeNote: NOTE_CAT,
    exerciseIds: ['PER-09-E1', 'PER-09-E2', 'PER-09-E3', 'PER-09-E4', 'PER-09-E5', 'PER-09-E6'],
  },

  // ───────────────────────────── PER-10 ─────────────────────────────
  {
    id: 'PER-10',
    level: 1,
    topicIds: ['PER.10'],
    title: { es: "Manejo y reducción de deudas", en: "Managing and reducing debt" },
    summary: {
      es: "Salir de deudas empieza con una lista honesta de lo que debes, sigue con un método claro (avalancha o bola de nieve) y se apoya en negociar, consolidar y evitar trampas.",
      en: "Getting out of debt starts with an honest list of what you owe, continues with a clear method (avalanche or snowball) and relies on negotiating, consolidating and avoiding traps.",
    },
    minutes: 15,
    objectives: [
      { es: "Hacer un inventario de deudas con saldo, tasa, pago mínimo y fecha de pago.", en: "Build a debt inventory with balance, rate, minimum payment and due date." },
      { es: "Aplicar los métodos avalancha y bola de nieve para decidir qué deuda pagar primero.", en: "Apply the avalanche and snowball methods to decide which debt to pay first." },
      { es: "Evaluar herramientas como la consolidación y la reestructura, y reconocer trampas comunes.", en: "Evaluate tools such as consolidation and restructuring, and recognize common traps." },
    ],
    theory: [
      {
        heading: { es: "Primer paso: el diagnóstico de tus deudas", en: "First step: diagnosing your debts" },
        body: [
          {
            es: "No puedes ganarle a lo que no conoces. Haz una **lista de deudas** con cada acreedor: cuánto debes (**saldo**), qué tasa o CAT te cobran, cuál es el **pago mínimo** o mensualidad y en qué fecha vence. Muchas personas se sorprenden al ver el total por primera vez.",
            en: "You cannot beat what you do not know. Make a **debt list** with each creditor: how much you owe (**balance**), what rate or CAT they charge, what the **minimum payment** or installment is and when it is due. Many people are surprised when they see the total for the first time.",
          },
          {
            es: "Distingue la deuda que **construye** algo (un crédito para estudiar, para tu casa o para una herramienta que te da ingresos) de la que solo **financia consumo** (vacaciones, fiestas, ropa). La segunda es la primera candidata a eliminar y a no repetir.",
            en: "Distinguish debt that **builds** something (a loan to study, for your home or for a tool that earns you income) from debt that only **finances consumption** (vacations, parties, clothes). The second is the first candidate to eliminate and not repeat.",
          },
          {
            es: "Señales de alerta: solo pagas el mínimo, usas una tarjeta para pagar otra, te atrasas seguido o ya no sabes cuánto debes. Mini ejemplo: Ana anota sus deudas y descubre que debe $38,000 en cuatro tarjetas; antes creía que eran \"como $15,000\".",
            en: "Warning signs: you only pay the minimum, you use one card to pay another, you are often late or you no longer know how much you owe. Mini example: Ana lists her debts and finds she owes $38,000 on four cards; before, she thought it was \"about $15,000\".",
          },
        ],
        bullets: [
          { es: "Acreedor: a quién le debes.", en: "Creditor: whom you owe." },
          { es: "Saldo: cuánto debes hoy.", en: "Balance: how much you owe today." },
          { es: "Tasa o CAT: cuánto te cuesta.", en: "Rate or CAT: how much it costs you." },
          { es: "Pago mínimo o mensualidad y fecha de pago.", en: "Minimum payment or installment and due date." },
        ],
      },
      {
        heading: { es: "Dos métodos para pagar: avalancha y bola de nieve", en: "Two payoff methods: avalanche and snowball" },
        body: [
          {
            es: "En ambos métodos la regla base es igual: **pagas el mínimo en todas tus deudas** para no atrasarte y destinas **todo el dinero extra** a una sola deuda. Cuando la liquidas, sumas lo que pagabas en ella a la siguiente. Así el pago extra crece como una bola.",
            en: "In both methods the basic rule is the same: **pay the minimum on all your debts** so you do not fall behind, and put **all extra money** toward a single debt. When you pay it off, you add what you were paying on it to the next one. That way the extra payment keeps growing.",
          },
          {
            es: "**Método avalancha**: atacas primero la deuda con la **tasa más alta**. Es el que **ahorra más intereses**, porque eliminas primero lo más caro. **Método bola de nieve**: atacas primero la deuda con el **saldo más pequeño**. Ahorra un poco menos, pero liquidas una deuda pronto y eso da **motivación** para seguir.",
            en: "**Avalanche method**: you attack the debt with the **highest rate** first. It **saves the most interest**, because you eliminate the most expensive debt first. **Snowball method**: you attack the debt with the **smallest balance** first. It saves a bit less, but you pay off a debt soon and that gives you **motivation** to keep going.",
          },
          {
            es: "El mejor método es el que **sí vas a sostener**. Mini ejemplo: si tus deudas tienen tasas parecidas, la bola de nieve te da victorias rápidas casi sin costo extra; si una tarjeta cobra mucho más que las demás, la avalancha suele ganar.",
            en: "The best method is the one you **will actually stick with**. Mini example: if your debts have similar rates, the snowball gives you quick wins at almost no extra cost; if one card charges much more than the others, the avalanche usually wins.",
          },
        ],
      },
      {
        heading: { es: "Negociar, consolidar y evitar trampas", en: "Negotiating, consolidating and avoiding traps" },
        body: [
          {
            es: "**Negociar**: si no puedes pagar, habla con tu acreedor **antes** de atrasarte. Puede ofrecerte una **reestructura** (cambiar plazo o mensualidad) o un convenio. Pide todo por escrito. **Consolidar** es pedir un solo crédito más barato para pagar varias deudas caras: tendrás un solo pago y, si el CAT es menor, pagarás menos intereses.",
            en: "**Negotiate**: if you cannot pay, talk to your creditor **before** you fall behind. They may offer a **restructuring** (changing the term or installment) or an agreement. Get everything in writing. **Consolidating** means taking one cheaper loan to pay off several expensive debts: you will have a single payment and, if the CAT is lower, you will pay less interest.",
          },
          {
            es: "La consolidación **solo funciona si dejas de usar** las tarjetas que liquidaste; si vuelves a llenarlas, terminas con el doble de deuda. Y ojo con alargar mucho el plazo: la mensualidad baja, pero puedes pagar más intereses en total.",
            en: "Consolidation **only works if you stop using** the cards you paid off; if you fill them up again, you end up with double the debt. And watch out for stretching the term too much: the installment goes down, but you may pay more interest in total.",
          },
          {
            es: "Trampas comunes: pedir prestado para pagar otra deuda sin un plan (la \"bicicleta\"), préstamos rápidos con costos altísimos y empresas que prometen \"borrarte del Buró\" a cambio de un pago: **nadie puede borrar legalmente un historial verdadero**. Si un despacho de cobranza te amenaza o acosa, puedes quejarte ante la CONDUSEF.",
            en: "Common traps: borrowing to pay another debt without a plan (\"rolling\" debt), quick loans with very high costs and companies that promise to \"erase you from the credit bureau\" for a fee: **nobody can legally erase a true credit history**. If a collection agency threatens or harasses you, you can file a complaint with CONDUSEF.",
          },
        ],
        formula: "Interés mensual aproximado = Saldo × (Tasa anual ÷ 12)",
      },
    ],
    examples: [
      {
        title: { es: "¿Qué deuda pago primero?", en: "Which debt do I pay first?" },
        problem: {
          es: "Tienes tres deudas: tarjeta departamental de $3,000 al 40% anual; tarjeta bancaria de $15,000 al 60% anual; préstamo personal de $25,000 al 30% anual. Ordénalas con cada método.",
          en: "You have three debts: a $3,000 department-store card at 40% annual; a $15,000 bank card at 60% annual; a $25,000 personal loan at 30% annual. Order them with each method.",
        },
        steps: [
          { es: "Avalancha (tasa más alta primero): bancaria 60% → departamental 40% → personal 30%.", en: "Avalanche (highest rate first): bank card 60% → department store 40% → personal loan 30%." },
          { es: "Bola de nieve (saldo menor primero): departamental $3,000 → bancaria $15,000 → personal $25,000.", en: "Snowball (smallest balance first): department store $3,000 → bank card $15,000 → personal loan $25,000." },
          { es: "En ambos casos pagas el mínimo en las otras dos.", en: "In both cases you pay the minimum on the other two." },
        ],
        result: {
          es: "Avalancha empieza por la bancaria (ahorra más intereses); bola de nieve por la departamental (victoria rápida).",
          en: "Avalanche starts with the bank card (saves more interest); snowball with the department-store card (quick win).",
        },
      },
      {
        title: { es: "¿Conviene consolidar?", en: "Is consolidating worth it?" },
        problem: {
          es: "Debes $20,000 en una tarjeta que cobra 60% anual. Te ofrecen un préstamo de consolidación al 24% anual, sin comisiones. Estima el interés del primer mes en cada caso.",
          en: "You owe $20,000 on a card charging 60% annual. You are offered a consolidation loan at 24% annual, with no fees. Estimate the first month's interest in each case.",
        },
        steps: [
          { es: "Tarjeta: 20,000 × (0.60 ÷ 12) = 20,000 × 0.05 = $1,000.", en: "Card: 20,000 × (0.60 ÷ 12) = 20,000 × 0.05 = $1,000." },
          { es: "Préstamo: 20,000 × (0.24 ÷ 12) = 20,000 × 0.02 = $400.", en: "Loan: 20,000 × (0.24 ÷ 12) = 20,000 × 0.02 = $400." },
          { es: "Ahorro aproximado: 1,000 − 400 = $600 en el primer mes.", en: "Approximate saving: 1,000 − 400 = $600 in the first month." },
        ],
        result: {
          es: "Ahorrarías unos $600 de interés el primer mes, siempre que no vuelvas a usar la tarjeta y el plazo no se alargue de más.",
          en: "You would save about $600 in interest the first month, as long as you do not use the card again and the term is not stretched too far.",
        },
      },
    ],
    keyPoints: [
      { es: "Empieza con una lista de deudas: acreedor, saldo, tasa, pago mínimo y fecha.", en: "Start with a debt list: creditor, balance, rate, minimum payment and date." },
      { es: "Paga el mínimo en todas y el extra a una sola deuda.", en: "Pay the minimum on all and the extra on a single debt." },
      { es: "Avalancha: tasa más alta primero (ahorra más). Bola de nieve: saldo menor primero (motiva más).", en: "Avalanche: highest rate first (saves more). Snowball: smallest balance first (motivates more)." },
      { es: "Consolidar ayuda si el nuevo crédito es más barato y dejas de usar las tarjetas.", en: "Consolidating helps if the new loan is cheaper and you stop using the cards." },
      { es: "Nadie puede borrar legalmente un historial crediticio verdadero.", en: "Nobody can legally erase a true credit history." },
    ],
    normativeNote: NOTE_DEBT,
    exerciseIds: ['PER-10-E1', 'PER-10-E2', 'PER-10-E3', 'PER-10-E4', 'PER-10-E5', 'PER-10-E6'],
  },

  // ───────────────────────────── PER-11 ─────────────────────────────
  {
    id: 'PER-11',
    level: 1,
    topicIds: ['PER.11'],
    title: { es: "Fondo de emergencia", en: "Emergency fund" },
    summary: {
      es: "El fondo de emergencia es un colchón de dinero disponible, seguro y separado que cubre varios meses de tus gastos esenciales para que un imprevisto no se convierta en deuda.",
      en: "An emergency fund is a cushion of available, safe and separate money that covers several months of your essential expenses so a surprise does not turn into debt.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar qué es un fondo de emergencia y qué cuenta como emergencia.", en: "Explain what an emergency fund is and what counts as an emergency." },
      { es: "Calcular la meta del fondo a partir de los gastos esenciales mensuales.", en: "Compute the fund's target from essential monthly expenses." },
      { es: "Elegir dónde guardarlo con base en liquidez y seguridad, y planear cómo construirlo.", en: "Choose where to keep it based on liquidity and safety, and plan how to build it." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es y para qué sirve?", en: "What is it and what is it for?" },
        body: [
          {
            es: "Un **fondo de emergencia** es dinero apartado **solo** para imprevistos importantes: perder el empleo, una enfermedad, una reparación urgente de la casa o del auto que usas para trabajar. Su trabajo es que, cuando llegue el golpe, **no tengas que endeudarte**.",
            en: "An **emergency fund** is money set aside **only** for major surprises: losing your job, an illness, an urgent repair to your home or the car you use for work. Its job is that, when the blow comes, **you do not have to go into debt**.",
          },
          {
            es: "No es lo mismo que el ahorro para **metas** (vacaciones, un celular nuevo, el enganche de un auto). Esas son cosas que puedes planear. Una oferta del Buen Fin o un concierto **no son emergencias**, aunque se sientan urgentes.",
            en: "It is not the same as saving for **goals** (vacations, a new phone, a car down payment). Those are things you can plan. A sale or a concert ticket **is not an emergency**, even if it feels urgent.",
          },
          {
            es: "Mini ejemplo: a Pedro se le descompone el refrigerador. Sin fondo, lo compra con tarjeta y paga intereses meses. Con fondo, lo paga de contado, sin intereses, y después repone lo que usó.",
            en: "Mini example: Pedro's refrigerator breaks down. Without a fund, he buys one on his card and pays interest for months. With a fund, he pays cash, with no interest, and then replenishes what he used.",
          },
        ],
        bullets: [
          { es: "Sí es emergencia: desempleo, gasto médico urgente, reparación indispensable.", en: "It is an emergency: unemployment, urgent medical expense, essential repair." },
          { es: "No es emergencia: vacaciones, ofertas, regalos, antojos.", en: "It is not an emergency: vacations, sales, gifts, cravings." },
          { es: "Si lo usas, tu prioridad es reponerlo.", en: "If you use it, your priority is to replenish it." },
        ],
      },
      {
        heading: { es: "¿Cuánto necesitas?", en: "How much do you need?" },
        body: [
          {
            es: "La meta se calcula con tus **gastos esenciales**: lo que no puedes dejar de pagar aunque no tengas ingreso. Incluye renta o hipoteca, comida, luz, agua y gas, transporte al trabajo y los pagos mínimos de tus deudas. No incluye restaurantes, plataformas de streaming ni compras por gusto.",
            en: "The target is based on your **essential expenses**: what you cannot stop paying even without income. It includes rent or mortgage, food, electricity, water and gas, transportation to work and the minimum payments on your debts. It does not include restaurants, streaming services or discretionary shopping.",
          },
          {
            es: "Una **guía práctica común** es juntar entre **3 y 6 meses** de gastos esenciales. Apunta a más meses si tus ingresos son **variables** (trabajas por tu cuenta o por comisiones), si hay personas que dependen de ti o si tu trabajo es inestable; con empleo estable y sin dependientes, 3 meses puede bastar al inicio.",
            en: "A **common practical guideline** is to gather **3 to 6 months** of essential expenses. Aim for more months if your income is **variable** (self-employed or commission-based), if people depend on you or if your job is unstable; with a stable job and no dependents, 3 months may be enough at first.",
          },
          {
            es: "Mini ejemplo: si tus gastos esenciales son $12,000 al mes, tu meta va de 12,000 × 3 = **$36,000** a 12,000 × 6 = **$72,000**.",
            en: "Mini example: if your essential expenses are $12,000 a month, your target ranges from 12,000 × 3 = **$36,000** to 12,000 × 6 = **$72,000**.",
          },
        ],
        formula: "Meta del fondo = Gastos esenciales mensuales × Número de meses",
      },
      {
        heading: { es: "Dónde guardarlo y cómo construirlo", en: "Where to keep it and how to build it" },
        body: [
          {
            es: "El fondo debe cumplir tres reglas: **liquidez** (que puedas sacarlo rápido, idealmente el mismo día o al siguiente), **seguridad** (que no pierda valor de golpe) y estar **separado** de tu cuenta de gastos diarios para que no te lo gastes sin darte cuenta.",
            en: "The fund must meet three rules: **liquidity** (you can withdraw it quickly, ideally the same or next day), **safety** (it does not suddenly lose value) and being **separate** from your everyday spending account so you do not spend it without noticing.",
          },
          {
            es: "Por eso suelen usarse cuentas de ahorro o instrumentos de deuda con **disponibilidad diaria** en instituciones autorizadas. No conviene guardarlo en acciones (su valor puede caer justo cuando lo necesitas), en inversiones a plazo fijo largo ni debajo del colchón (riesgo de robo y lo erosiona la inflación). Ganar algo de rendimiento es un extra; **lo principal es que esté disponible**.",
            en: "That is why savings accounts or debt instruments with **daily availability** at authorized institutions are commonly used. It is not wise to keep it in stocks (their value can drop right when you need it), in long fixed-term investments or under the mattress (theft risk and inflation erodes it). Earning some return is a bonus; **the main thing is that it is available**.",
          },
          {
            es: "Para construirlo, empieza con una meta pequeña (por ejemplo, un mes de gastos) y **automatiza** un depósito cada quincena, como si fuera un pago más. Mini ejemplo: con $1,500 por quincena juntas $3,000 al mes; para $36,000 tardarías 12 meses.",
            en: "To build it, start with a small target (for example, one month of expenses) and **automate** a deposit every payday, as if it were one more bill. Mini example: with $1,500 per biweekly payday you save $3,000 a month; for $36,000 it would take 12 months.",
          },
        ],
        formula: "Meses para completarlo = (Meta − Lo que ya tienes) ÷ Ahorro mensual",
      },
    ],
    examples: [
      {
        title: { es: "Calcular la meta del fondo", en: "Computing the fund's target" },
        problem: {
          es: "Sofía paga al mes: renta $6,500, comida $4,000, servicios $1,200, transporte $1,300 y pagos mínimos de deuda $1,000. También gasta $900 en streaming y salidas. ¿Cuál es su meta de 3 y de 6 meses?",
          en: "Sofía pays monthly: rent $6,500, food $4,000, utilities $1,200, transportation $1,300 and minimum debt payments $1,000. She also spends $900 on streaming and outings. What is her 3-month and 6-month target?",
        },
        steps: [
          { es: "Solo cuentan los esenciales: 6,500 + 4,000 + 1,200 + 1,300 + 1,000 = $14,000.", en: "Only essentials count: 6,500 + 4,000 + 1,200 + 1,300 + 1,000 = $14,000." },
          { es: "Los $900 de streaming y salidas no se incluyen.", en: "The $900 for streaming and outings is not included." },
          { es: "3 meses: 14,000 × 3 = $42,000.", en: "3 months: 14,000 × 3 = $42,000." },
          { es: "6 meses: 14,000 × 6 = $84,000.", en: "6 months: 14,000 × 6 = $84,000." },
        ],
        result: {
          es: "Su meta va de $42,000 a $84,000.",
          en: "Her target ranges from $42,000 to $84,000.",
        },
      },
      {
        title: { es: "¿Cuánto tardo en juntarlo?", en: "How long will it take me to build it?" },
        problem: {
          es: "Sofía decide empezar con la meta de 3 meses ($42,000). Ya tiene $7,000 y puede ahorrar $3,500 al mes. ¿En cuántos meses lo completa?",
          en: "Sofía decides to start with the 3-month target ($42,000). She already has $7,000 and can save $3,500 a month. In how many months will she complete it?",
        },
        steps: [
          { es: "Le falta: 42,000 − 7,000 = $35,000.", en: "She still needs: 42,000 − 7,000 = $35,000." },
          { es: "Meses: 35,000 ÷ 3,500 = 10.", en: "Months: 35,000 ÷ 3,500 = 10." },
        ],
        result: {
          es: "Lo completa en 10 meses. Después puede seguir hacia la meta de 6 meses.",
          en: "She completes it in 10 months. Then she can keep going toward the 6-month target.",
        },
      },
    ],
    keyPoints: [
      { es: "El fondo de emergencia es solo para imprevistos importantes, no para metas ni antojos.", en: "The emergency fund is only for major surprises, not for goals or cravings." },
      { es: "Meta = gastos esenciales mensuales × meses; la guía común es de 3 a 6 meses.", en: "Target = essential monthly expenses × months; the common guideline is 3 to 6 months." },
      { es: "Con ingresos variables o dependientes, apunta a más meses.", en: "With variable income or dependents, aim for more months." },
      { es: "Guárdalo líquido, seguro y separado de tu cuenta diaria.", en: "Keep it liquid, safe and separate from your everyday account." },
      { es: "Automatiza el ahorro y repón el fondo cada vez que lo uses.", en: "Automate saving and replenish the fund every time you use it." },
    ],
    normativeNote: NOTE_EMERGENCY,
    exerciseIds: ['PER-11-E1', 'PER-11-E2', 'PER-11-E3', 'PER-11-E4', 'PER-11-E5', 'PER-11-E6'],
  },

  // ───────────────────────────── PER-12 ─────────────────────────────
  {
    id: 'PER-12',
    level: 1,
    topicIds: ['PER.12'],
    title: { es: "Introducción a las inversiones", en: "Introduction to investing" },
    summary: {
      es: "Invertir es poner tu dinero a trabajar para que crezca más que la inflación, eligiendo instrumentos según tu meta, tu plazo y el riesgo que puedes aguantar, y repartiendo para no depender de uno solo.",
      en: "Investing is putting your money to work so it grows faster than inflation, choosing instruments according to your goal, your time horizon and the risk you can bear, and spreading it so you do not depend on just one.",
    },
    minutes: 16,
    objectives: [
      { es: "Distinguir ahorrar de invertir y calcular el rendimiento de una inversión.", en: "Distinguish saving from investing and compute an investment's return." },
      { es: "Explicar la relación entre riesgo, rendimiento, liquidez y plazo.", en: "Explain the relationship between risk, return, liquidity and time horizon." },
      { es: "Reconocer los principales tipos de instrumentos (deuda y renta variable) y la idea de diversificar.", en: "Recognize the main types of instruments (debt and equity) and the idea of diversification." },
    ],
    theory: [
      {
        heading: { es: "Ahorrar no es lo mismo que invertir", en: "Saving is not the same as investing" },
        body: [
          {
            es: "**Ahorrar** es guardar una parte de tu ingreso. **Invertir** es poner ese dinero en algo que pueda **generar más dinero**: prestarlo al gobierno o a una empresa a cambio de intereses, o volverte dueño de una parte de un negocio. Si solo guardas, la **inflación** se come poco a poco tu poder de compra.",
            en: "**Saving** is setting aside part of your income. **Investing** is putting that money into something that can **generate more money**: lending it to the government or a company in exchange for interest, or becoming an owner of part of a business. If you only keep it, **inflation** slowly eats away your purchasing power.",
          },
          {
            es: "Lo que gana tu inversión se llama **rendimiento**. Se expresa en porcentaje para comparar inversiones de distinto tamaño. El **rendimiento real** descuenta la inflación: de forma aproximada, rendimiento real ≈ rendimiento nominal − inflación.",
            en: "What your investment earns is called **return**. It is expressed as a percentage to compare investments of different sizes. The **real return** subtracts inflation: approximately, real return ≈ nominal return − inflation.",
          },
          {
            es: "Mini ejemplo: inviertes $10,000 y en un año tienes $10,800. Rendimiento = 800 ÷ 10,000 = **8%**. Si la inflación de ese año (hipotética) fue de 4%, tu rendimiento real fue de aproximadamente **4%**: eso es lo que de verdad creció tu poder de compra.",
            en: "Mini example: you invest $10,000 and after a year you have $10,800. Return = 800 ÷ 10,000 = **8%**. If that year's (hypothetical) inflation was 4%, your real return was about **4%**: that is how much your purchasing power really grew.",
          },
        ],
        formula: "Rendimiento (%) = (Valor final − Valor inicial) ÷ Valor inicial × 100      Real ≈ Nominal − Inflación",
      },
      {
        heading: { es: "Riesgo, rendimiento, liquidez y plazo", en: "Risk, return, liquidity and time horizon" },
        body: [
          {
            es: "El **riesgo** es la posibilidad de que obtengas menos de lo esperado o incluso pierdas parte de tu dinero. La regla de oro: **a mayor rendimiento esperado, mayor riesgo**. Nadie regala rendimientos altos sin riesgo; si alguien te los \"garantiza\", desconfía.",
            en: "**Risk** is the possibility of getting less than expected or even losing part of your money. The golden rule: **the higher the expected return, the higher the risk**. Nobody gives away high returns without risk; if someone \"guarantees\" them, be suspicious.",
          },
          {
            es: "La **liquidez** es qué tan rápido puedes convertir tu inversión en efectivo sin perder valor. El **plazo** es cuánto tiempo la vas a dejar. Para metas cercanas (menos de un año) conviene poco riesgo y buena liquidez; para metas lejanas (como el retiro) puedes tolerar más altibajos, porque hay tiempo para recuperarse.",
            en: "**Liquidity** is how quickly you can turn your investment into cash without losing value. The **time horizon** is how long you will leave it. For near-term goals (under a year), low risk and good liquidity are best; for long-term goals (like retirement) you can tolerate more ups and downs, because there is time to recover.",
          },
          {
            es: "Tu **perfil de inversionista** resume cuánto riesgo aceptas: **conservador** (prefiere no perder aunque gane poco), **moderado** o **agresivo** (acepta caídas a cambio de buscar más rendimiento). Mini ejemplo: para el enganche de un auto que comprarás en 8 meses, aunque seas agresivo, conviene algo de poco riesgo.",
            en: "Your **investor profile** sums up how much risk you accept: **conservative** (prefers not to lose even if earning little), **moderate** or **aggressive** (accepts drops in exchange for seeking higher returns). Mini example: for a car down payment you will make in 8 months, even if you are aggressive, something low-risk is best.",
          },
        ],
        bullets: [
          { es: "Riesgo: posibilidad de ganar menos o perder.", en: "Risk: chance of earning less or losing." },
          { es: "Rendimiento: lo que gana tu dinero, en %.", en: "Return: what your money earns, in %." },
          { es: "Liquidez: rapidez para convertirlo en efectivo.", en: "Liquidity: how fast you can turn it into cash." },
          { es: "Plazo: cuánto tiempo lo dejarás invertido.", en: "Time horizon: how long you will leave it invested." },
        ],
      },
      {
        heading: { es: "Tipos de instrumentos y diversificación", en: "Types of instruments and diversification" },
        body: [
          {
            es: "Los **instrumentos de deuda** (o renta fija) son préstamos que tú haces: al gobierno (como los **Cetes**, que son valores gubernamentales de corto plazo), a un banco (**pagarés**) o a empresas (**bonos**). Te prometen un interés; suelen tener menos riesgo y rendimientos más estables.",
            en: "**Debt instruments** (or fixed income) are loans you make: to the government (like **Cetes**, which are short-term government securities), to a bank (**promissory notes**) or to companies (**bonds**). They promise you interest; they tend to have lower risk and more stable returns.",
          },
          {
            es: "La **renta variable** te hace **dueño** de una parte: **acciones** de empresas que cotizan en bolsa, o fondos y **ETF** (canastas de muchas acciones que se compran como una sola). No prometen un rendimiento fijo: su valor sube y baja, con más riesgo pero mayor potencial a largo plazo. Los **fondos de inversión** juntan el dinero de muchas personas y lo administra un profesional.",
            en: "**Equity** makes you an **owner** of a part: **stocks** of listed companies, or funds and **ETFs** (baskets of many stocks bought as one). They do not promise a fixed return: their value goes up and down, with more risk but greater long-term potential. **Investment funds** pool money from many people and are managed by a professional.",
          },
          {
            es: "**Diversificar** es no poner todos los huevos en la misma canasta: repartir entre instrumentos, empresas y plazos para que una caída no te tumbe todo. **Reduce** el riesgo, pero **no lo elimina**. Mini ejemplo: si tienes todo en una sola acción y esa empresa quiebra, pierdes todo; si tienes 30 empresas, una quiebra pesa mucho menos.",
            en: "**Diversifying** means not putting all your eggs in one basket: spreading across instruments, companies and terms so one drop does not knock everything down. It **reduces** risk, but **does not eliminate** it. Mini example: if you have everything in a single stock and that company goes bankrupt, you lose it all; if you hold 30 companies, one bankruptcy weighs much less.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Rendimiento nominal y real", en: "Nominal and real return" },
        problem: {
          es: "Inviertes $15,000 en un fondo de deuda. Al año valen $16,200. Suponiendo una inflación hipotética de 5% ese año, ¿cuál fue tu rendimiento nominal y tu rendimiento real aproximado?",
          en: "You invest $15,000 in a debt fund. After a year it is worth $16,200. Assuming hypothetical inflation of 5% that year, what was your nominal return and your approximate real return?",
        },
        steps: [
          { es: "Ganancia: 16,200 − 15,000 = $1,200.", en: "Gain: 16,200 − 15,000 = $1,200." },
          { es: "Rendimiento nominal: 1,200 ÷ 15,000 × 100 = 8%.", en: "Nominal return: 1,200 ÷ 15,000 × 100 = 8%." },
          { es: "Rendimiento real aproximado: 8% − 5% = 3%.", en: "Approximate real return: 8% − 5% = 3%." },
        ],
        result: {
          es: "Ganaste 8% nominal, pero tu poder de compra creció solo alrededor de 3%.",
          en: "You earned 8% nominal, but your purchasing power grew only about 3%.",
        },
      },
      {
        title: { es: "Rendimiento de un portafolio diversificado", en: "Return of a diversified portfolio" },
        problem: {
          es: "Inviertes $50,000: $30,000 en deuda, $15,000 en un fondo de renta variable y $5,000 en una sola acción. En un año (rendimientos hipotéticos) la deuda gana 7%, el fondo 10% y la acción pierde 5%. ¿Cuánto ganaste en total y qué rendimiento tuvo el portafolio?",
          en: "You invest $50,000: $30,000 in debt, $15,000 in an equity fund and $5,000 in a single stock. In one year (hypothetical returns) debt earns 7%, the fund 10% and the stock loses 5%. How much did you earn in total and what was the portfolio's return?",
        },
        steps: [
          { es: "Deuda: 30,000 × 0.07 = $2,100.", en: "Debt: 30,000 × 0.07 = $2,100." },
          { es: "Fondo: 15,000 × 0.10 = $1,500.", en: "Fund: 15,000 × 0.10 = $1,500." },
          { es: "Acción: 5,000 × (−0.05) = −$250.", en: "Stock: 5,000 × (−0.05) = −$250." },
          { es: "Total: 2,100 + 1,500 − 250 = $3,350; rendimiento = 3,350 ÷ 50,000 × 100 = 6.7%.", en: "Total: 2,100 + 1,500 − 250 = $3,350; return = 3,350 ÷ 50,000 × 100 = 6.7%." },
        ],
        result: {
          es: "Ganaste $3,350 (6.7%). La pérdida de la acción pesó poco porque el dinero estaba repartido.",
          en: "You earned $3,350 (6.7%). The stock's loss weighed little because the money was spread out.",
        },
      },
    ],
    keyPoints: [
      { es: "Invertir es poner tu dinero a generar más dinero; solo guardarlo deja que la inflación lo erosione.", en: "Investing is putting your money to generate more money; just keeping it lets inflation erode it." },
      { es: "Rendimiento = ganancia ÷ inversión inicial; real ≈ nominal − inflación.", en: "Return = gain ÷ initial investment; real ≈ nominal − inflation." },
      { es: "A mayor rendimiento esperado, mayor riesgo; desconfía de rendimientos altos \"garantizados\".", en: "Higher expected return means higher risk; be wary of \"guaranteed\" high returns." },
      { es: "Elige según tu meta, tu plazo, la liquidez que necesitas y tu perfil.", en: "Choose according to your goal, your time horizon, the liquidity you need and your profile." },
      { es: "Deuda: prestas a cambio de intereses. Renta variable: eres dueño de una parte.", en: "Debt: you lend in exchange for interest. Equity: you own a part." },
      { es: "Diversificar reduce el riesgo, pero no lo elimina.", en: "Diversifying reduces risk, but does not eliminate it." },
    ],
    normativeNote: NOTE_INVEST,
    exerciseIds: ['PER-12-E1', 'PER-12-E2', 'PER-12-E3', 'PER-12-E4', 'PER-12-E5', 'PER-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ PER-07 ═════════════════════════
  {
    id: 'PER-07-E1',
    level: 1,
    module: 'PER-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la diferencia principal entre el interés simple y el interés compuesto?",
      en: "What is the main difference between simple and compound interest?",
    },
    options: [
      { id: 'PER-07-E1-a', text: { es: "En el compuesto, los intereses se suman al capital y también generan intereses", en: "With compound interest, interest is added to the principal and also earns interest" } },
      { id: 'PER-07-E1-b', text: { es: "El simple solo se usa en préstamos y el compuesto solo en ahorros", en: "Simple interest is only used for loans and compound only for savings" } },
      { id: 'PER-07-E1-c', text: { es: "El compuesto siempre tiene una tasa más alta que el simple", en: "Compound interest always has a higher rate than simple" } },
      { id: 'PER-07-E1-d', text: { es: "En el simple el interés cambia cada periodo y en el compuesto es fijo", en: "With simple interest the interest changes every period and with compound it is fixed" } },
    ],
    correctOptionId: 'PER-07-E1-a',
    explanation: {
      es: "En el compuesto los intereses se capitalizan y generan nuevos intereses; en el simple siempre se calculan sobre el capital inicial. Ambos se usan en préstamos y en ahorros, y la tasa puede ser la misma. Error común: creer que el compuesto \"cobra más tasa\"; lo que cambia es sobre qué saldo se calcula.",
      en: "With compound interest, interest is capitalized and earns new interest; with simple interest it is always computed on the initial principal. Both are used for loans and savings, and the rate can be the same. Common mistake: believing compound interest \"has a higher rate\"; what changes is the balance it is computed on.",
    },
    difficulty: 1,
    points: 10,
    competency: 'simple-compound-interest',
  },
  {
    id: 'PER-07-E2',
    level: 1,
    module: 'PER-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Ramón presta $8,000 a un compañero de trabajo al 15% anual de interés simple, a pagar en 2 años.",
      en: "Ramón lends $8,000 to a coworker at 15% simple annual interest, to be repaid in 2 years.",
    },
    prompt: {
      es: "¿Cuántos pesos de interés recibirá Ramón en total?",
      en: "How many pesos of interest will Ramón receive in total?",
    },
    answer: 2400,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "I = C × i × t = 8,000 × 0.15 × 2 = $2,400. Error común: responder el monto total ($10,400) en lugar de solo el interés, o usar 15 en vez de 0.15.",
      en: "I = C × i × t = 8,000 × 0.15 × 2 = $2,400. Common mistake: answering the total amount ($10,400) instead of just the interest, or using 15 instead of 0.15.",
    },
    difficulty: 1,
    points: 10,
    competency: 'simple-compound-interest',
  },
  {
    id: 'PER-07-E3',
    level: 1,
    module: 'PER-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Lucía deposita $15,000 en una inversión que paga una tasa hipotética de 10% anual con capitalización anual. No retira nada durante 2 años.",
      en: "Lucía deposits $15,000 in an investment paying a hypothetical 10% annual rate compounded annually. She withdraws nothing for 2 years.",
    },
    prompt: {
      es: "¿Cuánto dinero tendrá Lucía al final de los 2 años con interés compuesto?",
      en: "How much money will Lucía have at the end of the 2 years with compound interest?",
    },
    answer: 18150,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "M = 15,000 × (1.10)^2 = 15,000 × 1.21 = $18,150. Año 1: 16,500; año 2: 16,500 × 1.10 = 18,150. Error común: usar interés simple y responder 18,000, olvidando que en el año 2 también ganan los $1,500 del año 1.",
      en: "M = 15,000 × (1.10)^2 = 15,000 × 1.21 = $18,150. Year 1: 16,500; year 2: 16,500 × 1.10 = 18,150. Common mistake: using simple interest and answering 18,000, forgetting that in year 2 the $1,500 from year 1 also earns interest.",
    },
    difficulty: 1,
    points: 15,
    competency: 'simple-compound-interest',
  },
  {
    id: 'PER-07-E4',
    level: 1,
    module: 'PER-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Con interés compuesto, los pesos de interés que se ganan cada año son siempre los mismos.",
      en: "With compound interest, the pesos of interest earned each year are always the same.",
    },
    answer: false,
    explanation: {
      es: "Falso. Como los intereses se suman al capital, cada año se calcula sobre un saldo mayor y el interés en pesos crece (por ejemplo, $1,000, luego $1,100, luego $1,210 al 10% sobre $10,000). Lo que se mantiene igual es la tasa. Error común: confundir la tasa fija con un interés fijo en pesos, que es lo que pasa en el interés simple.",
      en: "False. Because interest is added to the principal, each year it is computed on a larger balance and the interest in pesos grows (for example, $1,000, then $1,100, then $1,210 at 10% on $10,000). What stays the same is the rate. Common mistake: confusing a fixed rate with a fixed interest amount in pesos, which is what happens with simple interest.",
    },
    difficulty: 1,
    points: 10,
    competency: 'simple-compound-interest',
  },
  {
    id: 'PER-07-E5',
    level: 1,
    module: 'PER-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un niño ahorra $1,000 en una cuenta infantil con una tasa hipotética de 5% anual compuesto. No deposita ni retira nada más.",
      en: "A child saves $1,000 in a children's account with a hypothetical 5% annual compound rate. Nothing else is deposited or withdrawn.",
    },
    prompt: {
      es: "Completa el saldo al final de cada año, en pesos con dos decimales.",
      en: "Complete the balance at the end of each year, in pesos with two decimals.",
    },
    fields: [
      { id: 'f1', label: { es: "Saldo al final del año 1", en: "Balance at the end of year 1" }, answer: 1050, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Saldo al final del año 2", en: "Balance at the end of year 2" }, answer: 1102.5, unit: 'MXN', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Saldo al final del año 3", en: "Balance at the end of year 3" }, answer: 1157.63, unit: 'MXN', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Cada año se multiplica el saldo anterior por 1.05: 1,000 × 1.05 = 1,050; 1,050 × 1.05 = 1,102.50; 1,102.50 × 1.05 = 1,157.625 ≈ 1,157.63. Error común: sumar $50 cada año (interés simple) y responder 1,100 y 1,150.",
      en: "Each year the previous balance is multiplied by 1.05: 1,000 × 1.05 = 1,050; 1,050 × 1.05 = 1,102.50; 1,102.50 × 1.05 = 1,157.625 ≈ 1,157.63. Common mistake: adding $50 every year (simple interest) and answering 1,100 and 1,150.",
    },
    difficulty: 2,
    points: 15,
    competency: 'simple-compound-interest',
  },
  {
    id: 'PER-07-E6',
    level: 1,
    module: 'PER-07',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula del monto con interés compuesto.",
      en: "Complete the formula for the amount with compound interest.",
    },
    template: 'M = {{b1}} × (1 + {{b2}})^{{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'PER-07-E6-b1-a', text: { es: "C (capital inicial)", en: "C (initial principal)" } },
          { id: 'PER-07-E6-b1-b', text: { es: "I (interés)", en: "I (interest)" } },
          { id: 'PER-07-E6-b1-c', text: { es: "n (número de periodos)", en: "n (number of periods)" } },
        ],
        correctOptionId: 'PER-07-E6-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'PER-07-E6-b2-a', text: { es: "n (número de periodos)", en: "n (number of periods)" } },
          { id: 'PER-07-E6-b2-b', text: { es: "i (tasa por periodo)", en: "i (rate per period)" } },
          { id: 'PER-07-E6-b2-c', text: { es: "M (monto)", en: "M (amount)" } },
        ],
        correctOptionId: 'PER-07-E6-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'PER-07-E6-b3-a', text: { es: "i (tasa por periodo)", en: "i (rate per period)" } },
          { id: 'PER-07-E6-b3-b', text: { es: "C (capital inicial)", en: "C (initial principal)" } },
          { id: 'PER-07-E6-b3-c', text: { es: "n (número de periodos)", en: "n (number of periods)" } },
        ],
        correctOptionId: 'PER-07-E6-b3-c',
      },
    ],
    explanation: {
      es: "M = C × (1 + i)^n: el capital se multiplica por (1 + tasa por periodo) tantas veces como periodos haya. Error común: poner el tiempo multiplicando (C × (1 + i × n)), que es la fórmula del interés simple.",
      en: "M = C × (1 + i)^n: the principal is multiplied by (1 + rate per period) as many times as there are periods. Common mistake: putting time as a multiplier (C × (1 + i × n)), which is the simple interest formula.",
    },
    difficulty: 1,
    points: 10,
    competency: 'simple-compound-interest',
  },

  // ═════════════════════════ PER-08 ═════════════════════════
  {
    id: 'PER-08-E1',
    level: 1,
    module: 'PER-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En una tarjeta de crédito, ¿qué es la fecha de corte?",
      en: "On a credit card, what is the statement date?",
    },
    options: [
      { id: 'PER-08-E1-a', text: { es: "El último día para pagar sin caer en atraso", en: "The last day to pay without being late" } },
      { id: 'PER-08-E1-b', text: { es: "El día en que el banco cierra el periodo y calcula tu estado de cuenta", en: "The day the bank closes the period and computes your statement" } },
      { id: 'PER-08-E1-c', text: { es: "El día en que vence el plástico y te mandan uno nuevo", en: "The day the card expires and they send you a new one" } },
      { id: 'PER-08-E1-d', text: { es: "El día en que el banco te aumenta el límite de crédito", en: "The day the bank raises your credit limit" } },
    ],
    correctOptionId: 'PER-08-E1-b',
    explanation: {
      es: "La fecha de corte cierra el periodo: ahí se suman tus compras y pagos en el estado de cuenta. El último día para pagar es la fecha límite de pago, que llega días después. Error común: confundir ambas fechas y pagar antes del corte creyendo que ya se cubrió todo el periodo.",
      en: "The statement date closes the period: that is when your purchases and payments are added up in the statement. The last day to pay is the payment due date, which comes days later. Common mistake: confusing the two dates and paying before the statement date thinking the whole period is covered.",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cards',
  },
  {
    id: 'PER-08-E2',
    level: 1,
    module: 'PER-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si cada mes cubres el pago mínimo de tu tarjeta de crédito, no te cobrarán intereses.",
      en: "If you cover your credit card's minimum payment every month, you will not be charged interest.",
    },
    answer: false,
    explanation: {
      es: "Falso. El pago mínimo solo evita que caigas en atraso; el saldo que dejas sin pagar sigue generando intereses. Para no pagar intereses debes cubrir el pago para no generar intereses. Error común: creer que \"estar al corriente\" significa \"no pagar intereses\".",
      en: "False. The minimum payment only keeps you from being late; the balance you leave unpaid keeps generating interest. To avoid interest you must cover the payment to avoid interest. Common mistake: believing that \"being current\" means \"paying no interest\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cards',
  },
  {
    id: 'PER-08-E3',
    level: 1,
    module: 'PER-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Daniel tiene una tarjeta con límite de $18,000 y un saldo actual de $5,200. Hoy compra una laptop de $6,000 a 12 meses sin intereses.",
      en: "Daniel has a card with an $18,000 limit and a current balance of $5,200. Today he buys a $6,000 laptop at 12 interest-free installments.",
    },
    prompt: {
      es: "¿Cuánto crédito disponible le queda a Daniel justo después de la compra?",
      en: "How much available credit does Daniel have right after the purchase?",
    },
    answer: 6800,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Una compra a MSI ocupa el límite por su valor completo: 18,000 − 5,200 − 6,000 = $6,800. Error común: restar solo la primera mensualidad (6,000 ÷ 12 = 500) y responder $12,300.",
      en: "An MSI purchase takes up the limit for its full value: 18,000 − 5,200 − 6,000 = $6,800. Common mistake: subtracting only the first installment (6,000 ÷ 12 = 500) and answering $12,300.",
    },
    difficulty: 2,
    points: 15,
    competency: 'credit-cards',
  },
  {
    id: 'PER-08-E4',
    level: 1,
    module: 'PER-08',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada producto como crédito revolvente o no revolvente.",
      en: "Classify each product as revolving or non-revolving credit.",
    },
    categories: [
      { id: 'PER-08-E4-c1', label: { es: "Crédito revolvente", en: "Revolving credit" } },
      { id: 'PER-08-E4-c2', label: { es: "Crédito no revolvente", en: "Non-revolving credit" } },
    ],
    items: [
      { id: 'PER-08-E4-i1', label: { es: "Tarjeta de crédito bancaria", en: "Bank credit card" }, correctCategoryId: 'PER-08-E4-c1' },
      { id: 'PER-08-E4-i2', label: { es: "Tarjeta de una tienda departamental", en: "Department-store card" }, correctCategoryId: 'PER-08-E4-c1' },
      { id: 'PER-08-E4-i3', label: { es: "Crédito hipotecario para comprar una casa", en: "Mortgage loan to buy a house" }, correctCategoryId: 'PER-08-E4-c2' },
      { id: 'PER-08-E4-i4', label: { es: "Crédito automotriz a 48 meses", en: "48-month auto loan" }, correctCategoryId: 'PER-08-E4-c2' },
      { id: 'PER-08-E4-i5', label: { es: "Préstamo de nómina descontado de tu sueldo", en: "Payroll loan deducted from your salary" }, correctCategoryId: 'PER-08-E4-c2' },
      { id: 'PER-08-E4-i6', label: { es: "Préstamo personal de $20,000 a 18 mensualidades fijas", en: "$20,000 personal loan in 18 fixed installments" }, correctCategoryId: 'PER-08-E4-c2' },
    ],
    explanation: {
      es: "Las tarjetas (bancarias o departamentales) son revolventes: usas, pagas y vuelves a usar la línea. Hipotecario, automotriz, nómina y personal entregan un monto fijo que se paga en mensualidades hasta terminar: son no revolventes. Error común: pensar que la tarjeta departamental no es crédito porque \"es de una tienda\".",
      en: "Cards (bank or department store) are revolving: you use, pay and reuse the line. Mortgage, auto, payroll and personal loans give a fixed amount repaid in installments until done: they are non-revolving. Common mistake: thinking a department-store card is not credit because \"it is from a store\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cards',
  },
  {
    id: 'PER-08-E5',
    level: 1,
    module: 'PER-08',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos hábitos ayudan a usar bien una tarjeta de crédito y cuidar tu historial? Selecciona todos los que apliquen.",
      en: "Which of these habits help you use a credit card well and protect your credit history? Select all that apply.",
    },
    options: [
      { id: 'PER-08-E5-a', text: { es: "Pagar el total para no generar intereses antes de la fecha límite", en: "Paying the full amount to avoid interest before the due date" } },
      { id: 'PER-08-E5-b', text: { es: "Sacar efectivo con la tarjeta de crédito cuando falte dinero a fin de mes", en: "Withdrawing cash with the credit card when money runs short at month-end" } },
      { id: 'PER-08-E5-c', text: { es: "Revisar el estado de cuenta cada mes y reclamar cargos desconocidos", en: "Reviewing the statement every month and disputing unknown charges" } },
      { id: 'PER-08-E5-d', text: { es: "Comprar a meses sin intereses solo si la suma de mensualidades cabe en tu presupuesto", en: "Buying with interest-free installments only if the sum of installments fits your budget" } },
      { id: 'PER-08-E5-e', text: { es: "Usar todo el límite porque el banco ya te lo autorizó", en: "Using the whole limit because the bank already approved it" } },
    ],
    correctOptionIds: ['PER-08-E5-a', 'PER-08-E5-c', 'PER-08-E5-d'],
    explanation: {
      es: "Pagar el total, revisar el estado de cuenta y controlar los MSI te evitan intereses y sorpresas. Sacar efectivo suele cobrar comisión e intereses desde el primer día, y usar todo el límite te deja sin margen y aumenta el riesgo de atrasos. Error común: tomar el límite como dinero propio.",
      en: "Paying in full, reviewing the statement and controlling MSI help you avoid interest and surprises. Cash withdrawals usually carry a fee and interest from day one, and using the whole limit leaves you no margin and raises the risk of falling behind. Common mistake: treating the limit as your own money.",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cards',
  },
  {
    id: 'PER-08-E6',
    level: 1,
    module: 'PER-08',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "En este periodo, Karla compró unos tenis de $9,000 a 3 meses sin intereses (primera mensualidad este mes) y gastó $2,500 en súper y gasolina con la misma tarjeta. No tenía otros saldos.",
      en: "This period, Karla bought $9,000 sneakers at 3 interest-free installments (first installment this month) and spent $2,500 on groceries and gas with the same card. She had no other balances.",
    },
    prompt: {
      es: "¿Cuál es el pago para no generar intereses de Karla en este estado de cuenta?",
      en: "What is Karla's payment to avoid interest on this statement?",
    },
    options: [
      { id: 'PER-08-E6-a', text: { es: "$2,500", en: "$2,500" } },
      { id: 'PER-08-E6-b', text: { es: "$3,000", en: "$3,000" } },
      { id: 'PER-08-E6-c', text: { es: "$5,500", en: "$5,500" } },
      { id: 'PER-08-E6-d', text: { es: "$11,500", en: "$11,500" } },
    ],
    correctOptionId: 'PER-08-E6-c',
    explanation: {
      es: "Se suma la mensualidad de los tenis (9,000 ÷ 3 = $3,000) más las compras normales del periodo ($2,500): $5,500. Error común: olvidar la mensualidad de MSI ($2,500) o sumar la compra completa ($11,500).",
      en: "Add the sneakers' installment (9,000 ÷ 3 = $3,000) plus the regular purchases of the period ($2,500): $5,500. Common mistake: forgetting the MSI installment ($2,500) or adding the whole purchase ($11,500).",
    },
    difficulty: 2,
    points: 15,
    competency: 'credit-cards',
  },

  // ═════════════════════════ PER-09 ═════════════════════════
  {
    id: 'PER-09-E1',
    level: 1,
    module: 'PER-09',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué incluye el CAT (Costo Anual Total) de un crédito?",
      en: "What does a loan's CAT (Total Annual Cost) include?",
    },
    options: [
      { id: 'PER-09-E1-a', text: { es: "Solo la tasa de interés ordinaria", en: "Only the ordinary interest rate" } },
      { id: 'PER-09-E1-b', text: { es: "Solo las comisiones, sin los intereses", en: "Only the fees, without interest" } },
      { id: 'PER-09-E1-c', text: { es: "La inflación esperada del año", en: "The year's expected inflation" } },
      { id: 'PER-09-E1-d', text: { es: "Los intereses, las comisiones y otros cargos del crédito, expresados como porcentaje anual", en: "The loan's interest, fees and other charges, expressed as an annual percentage" } },
    ],
    correctOptionId: 'PER-09-E1-d',
    explanation: {
      es: "El CAT junta en un solo porcentaje anual los intereses, las comisiones y otros cargos, para comparar créditos. No es solo la tasa ni solo las comisiones, y no tiene que ver con la inflación. Error común: creer que el CAT y la tasa de interés son lo mismo.",
      en: "The CAT combines interest, fees and other charges into a single annual percentage, to compare loans. It is not just the rate or just the fees, and it has nothing to do with inflation. Common mistake: believing the CAT and the interest rate are the same.",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cost',
  },
  {
    id: 'PER-09-E2',
    level: 1,
    module: 'PER-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Entre dos préstamos personales por el mismo monto y plazo, el que anuncia la tasa de interés más baja siempre es el más barato.",
      en: "Between two personal loans for the same amount and term, the one advertising the lowest interest rate is always the cheapest.",
    },
    answer: false,
    explanation: {
      es: "Falso. Un préstamo con tasa baja puede cobrar comisiones que lo encarecen. Para comparar el costo total se usa el CAT: el de menor CAT es el más barato. Error común: decidir solo por la tasa anunciada en la publicidad.",
      en: "False. A loan with a low rate may charge fees that make it more expensive. To compare the total cost you use the CAT: the one with the lowest CAT is the cheapest. Common mistake: deciding only by the rate advertised.",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cost',
  },
  {
    id: 'PER-09-E3',
    level: 1,
    module: 'PER-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Elena recibe $18,000 netos al mes. Paga $3,000 de un préstamo personal, $1,500 de su tarjeta y $900 de una lavadora a plazos.",
      en: "Elena receives $18,000 net per month. She pays $3,000 on a personal loan, $1,500 on her card and $900 for a washing machine on installments.",
    },
    prompt: {
      es: "¿Cuál es la razón de endeudamiento de Elena, en porcentaje?",
      en: "What is Elena's debt-to-income ratio, as a percentage?",
    },
    answer: 30,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.1 },
    explanation: {
      es: "Pagos de deuda: 3,000 + 1,500 + 900 = $5,400. Razón = 5,400 ÷ 18,000 × 100 = 30%. Error común: dejar fuera la compra a plazos o dividir entre el sueldo bruto en lugar del ingreso neto.",
      en: "Debt payments: 3,000 + 1,500 + 900 = $5,400. Ratio = 5,400 ÷ 18,000 × 100 = 30%. Common mistake: leaving out the installment purchase or dividing by gross salary instead of net income.",
    },
    difficulty: 1,
    points: 15,
    competency: 'credit-cost',
  },
  {
    id: 'PER-09-E4',
    level: 1,
    module: 'PER-09',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Necesitas un préstamo personal de $40,000 a 36 meses. Tres instituciones te ofrecen (datos hipotéticos): A, tasa 26% y CAT 39%; B, tasa 29% y CAT 35%; C, tasa 24% y CAT 44%.",
      en: "You need a $40,000 personal loan over 36 months. Three institutions offer you (hypothetical data): A, 26% rate and 39% CAT; B, 29% rate and 35% CAT; C, 24% rate and 44% CAT.",
    },
    prompt: {
      es: "¿Qué oferta tiene el menor costo total?",
      en: "Which offer has the lowest total cost?",
    },
    options: [
      { id: 'PER-09-E4-a', text: { es: "La A, porque está en medio", en: "A, because it is in the middle" } },
      { id: 'PER-09-E4-b', text: { es: "La B, porque tiene el menor CAT", en: "B, because it has the lowest CAT" } },
      { id: 'PER-09-E4-c', text: { es: "La C, porque tiene la menor tasa", en: "C, because it has the lowest rate" } },
      { id: 'PER-09-E4-d', text: { es: "No se pueden comparar", en: "They cannot be compared" } },
    ],
    correctOptionId: 'PER-09-E4-b',
    explanation: {
      es: "Las tres son del mismo tipo, monto y plazo, así que se comparan por CAT: B (35%) es la más barata. C tiene la menor tasa, pero su CAT tan alto indica comisiones y cargos que la encarecen. Error común: elegir por la tasa más baja.",
      en: "All three are the same type, amount and term, so they are compared by CAT: B (35%) is the cheapest. C has the lowest rate, but its very high CAT signals fees and charges that make it more expensive. Common mistake: choosing by the lowest rate.",
    },
    difficulty: 1,
    points: 10,
    competency: 'credit-cost',
  },
  {
    id: 'PER-09-E5',
    level: 1,
    module: 'PER-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un crédito cobra una tasa hipotética de 3% mensual, y los intereses que no pagas se suman al saldo cada mes.",
      en: "A loan charges a hypothetical 3% monthly rate, and unpaid interest is added to the balance every month.",
    },
    prompt: {
      es: "¿Cuál es la tasa efectiva anual de ese crédito, en porcentaje con dos decimales?",
      en: "What is that loan's effective annual rate, as a percentage with two decimals?",
    },
    answer: 42.58,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: {
      es: "Tasa efectiva anual = (1.03)^12 − 1 = 1.42576 − 1 = 0.42576 ≈ 42.58%. Error común: multiplicar 3% × 12 = 36%, que ignora que los intereses se acumulan sobre los intereses.",
      en: "Effective annual rate = (1.03)^12 − 1 = 1.42576 − 1 = 0.42576 ≈ 42.58%. Common mistake: multiplying 3% × 12 = 36%, which ignores that interest accrues on interest.",
    },
    difficulty: 2,
    points: 20,
    competency: 'credit-cost',
  },
  {
    id: 'PER-09-E6',
    level: 1,
    module: 'PER-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada cargo de un crédito como interés ordinario, interés moratorio o comisión.",
      en: "Classify each loan charge as ordinary interest, default (late) interest or fee.",
    },
    categories: [
      { id: 'PER-09-E6-c1', label: { es: "Interés ordinario", en: "Ordinary interest" } },
      { id: 'PER-09-E6-c2', label: { es: "Interés moratorio", en: "Default (late) interest" } },
      { id: 'PER-09-E6-c3', label: { es: "Comisión", en: "Fee" } },
    ],
    items: [
      { id: 'PER-09-E6-i1', label: { es: "Interés mensual sobre el saldo de la tarjeta que no pagaste completo", en: "Monthly interest on the card balance you did not pay in full" }, correctCategoryId: 'PER-09-E6-c1' },
      { id: 'PER-09-E6-i2', label: { es: "Interés extra por pagar tarde una mensualidad del préstamo", en: "Extra interest for paying a loan installment late" }, correctCategoryId: 'PER-09-E6-c2' },
      { id: 'PER-09-E6-i3', label: { es: "Cobro anual por tener la tarjeta (anualidad)", en: "Yearly charge for having the card (annual fee)" }, correctCategoryId: 'PER-09-E6-c3' },
      { id: 'PER-09-E6-i4', label: { es: "Cargo por disponer de efectivo en un cajero con la tarjeta de crédito", en: "Charge for withdrawing cash at an ATM with the credit card" }, correctCategoryId: 'PER-09-E6-c3' },
      { id: 'PER-09-E6-i5', label: { es: "Interés pactado sobre el saldo de un préstamo personal pagado a tiempo", en: "Agreed interest on the balance of a personal loan paid on time" }, correctCategoryId: 'PER-09-E6-c1' },
      { id: 'PER-09-E6-i6', label: { es: "Interés adicional que se genera sobre una mensualidad vencida del auto", en: "Additional interest accrued on an overdue car installment" }, correctCategoryId: 'PER-09-E6-c2' },
    ],
    explanation: {
      es: "Ordinario: el costo normal por el dinero prestado, aunque pagues a tiempo. Moratorio: el interés extra por atrasarte. Comisión: un cobro fijo por un servicio o evento (anualidad, disposición de efectivo). Error común: llamar \"comisión\" al interés moratorio porque es un castigo.",
      en: "Ordinary: the normal cost of the borrowed money, even if you pay on time. Default: the extra interest for falling behind. Fee: a charge for a service or event (annual fee, cash withdrawal). Common mistake: calling default interest a \"fee\" because it is a penalty.",
    },
    difficulty: 2,
    points: 15,
    competency: 'credit-cost',
  },

  // ═════════════════════════ PER-10 ═════════════════════════
  {
    id: 'PER-10-E1',
    level: 1,
    module: 'PER-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿En qué consiste el método avalancha para pagar deudas?",
      en: "What does the avalanche method for paying off debt consist of?",
    },
    options: [
      { id: 'PER-10-E1-a', text: { es: "Pagar primero la deuda con el saldo más pequeño", en: "Paying first the debt with the smallest balance" } },
      { id: 'PER-10-E1-b', text: { es: "Pagar el mínimo en todas y el dinero extra a la deuda con la tasa más alta", en: "Paying the minimum on all and the extra money on the debt with the highest rate" } },
      { id: 'PER-10-E1-c', text: { es: "Dejar de pagar todas las deudas hasta juntar el total", en: "Stopping all debt payments until you save the total" } },
      { id: 'PER-10-E1-d', text: { es: "Repartir el dinero extra en partes iguales entre todas las deudas", en: "Splitting the extra money equally among all debts" } },
    ],
    correctOptionId: 'PER-10-E1-b',
    explanation: {
      es: "En la avalancha pagas el mínimo en todas y concentras el extra en la deuda más cara (mayor tasa), lo que ahorra más intereses. Pagar primero el saldo más pequeño es la bola de nieve. Dejar de pagar genera intereses moratorios y daña tu historial. Error común: confundir avalancha con bola de nieve.",
      en: "With the avalanche you pay the minimum on all and concentrate the extra on the most expensive debt (highest rate), which saves the most interest. Paying the smallest balance first is the snowball. Stopping payments generates default interest and damages your history. Common mistake: confusing avalanche with snowball.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debt-management',
  },
  {
    id: 'PER-10-E2',
    level: 1,
    module: 'PER-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada deuda: ¿puede construir patrimonio o ingresos, o solo financia consumo?",
      en: "Classify each debt: can it build wealth or income, or does it only finance consumption?",
    },
    categories: [
      { id: 'PER-10-E2-c1', label: { es: "Puede construir patrimonio o ingresos", en: "Can build wealth or income" } },
      { id: 'PER-10-E2-c2', label: { es: "Solo financia consumo", en: "Only finances consumption" } },
    ],
    items: [
      { id: 'PER-10-E2-i1', label: { es: "Crédito para estudiar una carrera técnica con buena demanda", en: "Loan to study an in-demand technical degree" }, correctCategoryId: 'PER-10-E2-c1' },
      { id: 'PER-10-E2-i2', label: { es: "Crédito hipotecario para la casa donde vivirás", en: "Mortgage for the house you will live in" }, correctCategoryId: 'PER-10-E2-c1' },
      { id: 'PER-10-E2-i3', label: { es: "Préstamo para comprar un horno para tu negocio de pan", en: "Loan to buy an oven for your bakery business" }, correctCategoryId: 'PER-10-E2-c1' },
      { id: 'PER-10-E2-i4', label: { es: "Vacaciones pagadas con tarjeta sin poder liquidarlas al corte", en: "Vacation paid by card without being able to pay it off at the statement" }, correctCategoryId: 'PER-10-E2-c2' },
      { id: 'PER-10-E2-i5', label: { es: "Préstamo para la fiesta de cumpleaños", en: "Loan for a birthday party" }, correctCategoryId: 'PER-10-E2-c2' },
      { id: 'PER-10-E2-i6', label: { es: "Celular de última generación a plazos solo por estrenar", en: "Latest-model phone on installments just to have something new" }, correctCategoryId: 'PER-10-E2-c2' },
    ],
    explanation: {
      es: "Estudiar, una vivienda o una herramienta de trabajo pueden aumentar tus ingresos o tu patrimonio, si el pago es manejable. Vacaciones, fiestas y caprichos se consumen y la deuda queda: son las primeras a eliminar y no repetir. Error común: pensar que cualquier deuda para algo caro \"es inversión\".",
      en: "Studying, a home or a work tool can increase your income or wealth, if the payment is manageable. Vacations, parties and whims are consumed and the debt remains: they are the first to eliminate and not repeat. Common mistake: thinking any debt for something expensive \"is an investment\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'debt-management',
  },
  {
    id: 'PER-10-E3',
    level: 1,
    module: 'PER-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Tomás tiene cuatro deudas: tarjeta A, saldo $12,000 al 58% anual; tarjeta B, saldo $2,500 al 45%; préstamo personal, saldo $30,000 al 32%; tarjeta departamental, saldo $6,000 al 62%. Quiere usar el método bola de nieve.",
      en: "Tomás has four debts: card A, balance $12,000 at 58% annual; card B, balance $2,500 at 45%; personal loan, balance $30,000 at 32%; department-store card, balance $6,000 at 62%. He wants to use the snowball method.",
    },
    prompt: {
      es: "Con el método bola de nieve, ¿a qué deuda debe Tomás destinar primero su dinero extra?",
      en: "With the snowball method, which debt should Tomás put his extra money toward first?",
    },
    options: [
      { id: 'PER-10-E3-a', text: { es: "Tarjeta departamental, porque tiene la tasa más alta", en: "Department-store card, because it has the highest rate" } },
      { id: 'PER-10-E3-b', text: { es: "Préstamo personal, porque es la deuda más grande", en: "Personal loan, because it is the largest debt" } },
      { id: 'PER-10-E3-c', text: { es: "Tarjeta B, porque tiene el saldo más pequeño", en: "Card B, because it has the smallest balance" } },
      { id: 'PER-10-E3-d', text: { es: "Tarjeta A, porque es la más antigua", en: "Card A, because it is the oldest" } },
    ],
    correctOptionId: 'PER-10-E3-c',
    explanation: {
      es: "La bola de nieve ataca primero el saldo más pequeño: la tarjeta B ($2,500). Liquidarla rápido da motivación y libera su pago para la siguiente. La departamental (62%) sería la primera con el método avalancha. Error común: mezclar los criterios de los dos métodos.",
      en: "The snowball attacks the smallest balance first: card B ($2,500). Paying it off quickly gives motivation and frees its payment for the next one. The department-store card (62%) would be first with the avalanche method. Common mistake: mixing the criteria of the two methods.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debt-management',
  },
  {
    id: 'PER-10-E4',
    level: 1,
    module: 'PER-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Gabriela debe $30,000 en una tarjeta que cobra 54% anual. Le ofrecen consolidar esa deuda en un préstamo al 30% anual, sin comisiones.",
      en: "Gabriela owes $30,000 on a card charging 54% annual. She is offered to consolidate that debt into a loan at 30% annual, with no fees.",
    },
    prompt: {
      es: "Usando interés mensual aproximado (saldo × tasa anual ÷ 12), ¿cuántos pesos de interés se ahorraría Gabriela en el primer mes?",
      en: "Using approximate monthly interest (balance × annual rate ÷ 12), how many pesos of interest would Gabriela save in the first month?",
    },
    answer: 600,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Tarjeta: 30,000 × 0.54 ÷ 12 = $1,350. Préstamo: 30,000 × 0.30 ÷ 12 = $750. Ahorro: 1,350 − 750 = $600. Error común: restar las tasas (24%) y aplicarlas como anuales (7,200), en lugar de calcular el mes.",
      en: "Card: 30,000 × 0.54 ÷ 12 = $1,350. Loan: 30,000 × 0.30 ÷ 12 = $750. Saving: 1,350 − 750 = $600. Common mistake: subtracting the rates (24%) and applying them as annual (7,200) instead of computing the month.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debt-management',
  },
  {
    id: 'PER-10-E5',
    level: 1,
    module: 'PER-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una empresa que te cobra una cuota puede borrar legalmente del Buró de Crédito un atraso que sí ocurrió.",
      en: "A company that charges you a fee can legally erase from the credit bureau a late payment that really happened.",
    },
    answer: false,
    explanation: {
      es: "Falso. Si el atraso es verdadero, nadie puede borrarlo legalmente; el registro se mantiene por los plazos que marca la ley. Solo puedes pedir que se corrija información equivocada. Las empresas que prometen \"limpiar tu Buró\" suelen ser fraudes. Error común: pagar a estos \"limpiadores\" en vez de pagar o negociar la deuda.",
      en: "False. If the late payment is true, nobody can legally erase it; the record stays for the periods set by law. You can only request that wrong information be corrected. Companies promising to \"clean your credit report\" are usually scams. Common mistake: paying these \"cleaners\" instead of paying or negotiating the debt.",
    },
    difficulty: 1,
    points: 10,
    competency: 'debt-management',
  },
  {
    id: 'PER-10-E6',
    level: 1,
    module: 'PER-10',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Iván debe en tres tarjetas, ya solo paga los mínimos y este mes no le alcanzará para cubrir uno de ellos.",
      en: "Iván owes on three cards, he already pays only the minimums and this month he will not have enough to cover one of them.",
    },
    prompt: {
      es: "¿Qué acciones le convienen a Iván? Selecciona todas las que apliquen.",
      en: "Which actions are good for Iván? Select all that apply.",
    },
    options: [
      { id: 'PER-10-E6-a', text: { es: "Hacer una lista con saldo, tasa, pago mínimo y fecha de cada deuda", en: "Make a list with each debt's balance, rate, minimum payment and date" } },
      { id: 'PER-10-E6-b', text: { es: "Llamar al banco antes de atrasarse para pedir una reestructura por escrito", en: "Call the bank before falling behind to ask for a restructuring in writing" } },
      { id: 'PER-10-E6-c', text: { es: "Sacar efectivo de una tarjeta para pagar la otra sin ningún plan", en: "Withdraw cash from one card to pay the other without any plan" } },
      { id: 'PER-10-E6-d', text: { es: "Dejar de usar las tarjetas mientras paga", en: "Stop using the cards while paying off" } },
      { id: 'PER-10-E6-e', text: { es: "Pedir un préstamo rápido en una app desconocida sin revisar su CAT", en: "Take a quick loan from an unknown app without checking its CAT" } },
    ],
    correctOptionIds: ['PER-10-E6-a', 'PER-10-E6-b', 'PER-10-E6-d'],
    explanation: {
      es: "Hacer el inventario, negociar antes del atraso y dejar de usar las tarjetas atacan el problema. Pagar una tarjeta con otra (la \"bicicleta\") y los préstamos rápidos sin revisar el CAT solo agrandan la deuda. Error común: buscar dinero nuevo antes de entender cuánto se debe.",
      en: "Taking inventory, negotiating before falling behind and stopping card use tackle the problem. Paying one card with another (\"rolling\" debt) and quick loans without checking the CAT only grow the debt. Common mistake: looking for new money before understanding how much is owed.",
    },
    difficulty: 2,
    points: 15,
    competency: 'debt-management',
  },

  // ═════════════════════════ PER-11 ═════════════════════════
  {
    id: 'PER-11-E1',
    level: 1,
    module: 'PER-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál de estas situaciones justifica usar el fondo de emergencia?",
      en: "Which of these situations justifies using the emergency fund?",
    },
    options: [
      { id: 'PER-11-E1-a', text: { es: "Una oferta de 40% de descuento en una pantalla", en: "A 40% discount offer on a TV" } },
      { id: 'PER-11-E1-b', text: { es: "Boletos para el concierto de tu banda favorita", en: "Tickets for your favorite band's concert" } },
      { id: 'PER-11-E1-c', text: { es: "Las vacaciones de verano que planeaste desde enero", en: "The summer vacation you planned since January" } },
      { id: 'PER-11-E1-d', text: { es: "Te despiden y necesitas pagar renta y comida mientras buscas trabajo", en: "You are laid off and need to pay rent and food while you look for work" } },
    ],
    correctOptionId: 'PER-11-E1-d',
    explanation: {
      es: "Perder el empleo es un imprevisto que pone en riesgo tus gastos esenciales: para eso existe el fondo. Ofertas, conciertos y vacaciones planeadas son gustos o metas que se financian con su propio ahorro. Error común: usar el fondo para \"oportunidades\" y quedarse sin colchón cuando llega la verdadera emergencia.",
      en: "Losing your job is a surprise that puts your essential expenses at risk: that is what the fund is for. Sales, concerts and planned vacations are wants or goals funded by their own savings. Common mistake: using the fund for \"opportunities\" and being left without a cushion when the real emergency comes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'emergency-fund',
  },
  {
    id: 'PER-11-E2',
    level: 1,
    module: 'PER-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Héctor gasta al mes: renta $5,000, comida $3,800, luz, agua y gas $900, transporte al trabajo $1,100, pagos mínimos de deudas $700 y plataformas de streaming $400.",
      en: "Héctor spends monthly: rent $5,000, food $3,800, electricity, water and gas $900, transportation to work $1,100, minimum debt payments $700 and streaming services $400.",
    },
    prompt: {
      es: "Calcula sus gastos esenciales mensuales y su meta de fondo de emergencia de 3 y de 6 meses, en pesos.",
      en: "Compute his essential monthly expenses and his 3-month and 6-month emergency fund target, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Gastos esenciales mensuales", en: "Essential monthly expenses" }, answer: 11500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Meta de 3 meses", en: "3-month target" }, answer: 34500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Meta de 6 meses", en: "6-month target" }, answer: 69000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Esenciales: 5,000 + 3,800 + 900 + 1,100 + 700 = $11,500 (el streaming no es esencial). 3 meses: 11,500 × 3 = $34,500; 6 meses: 11,500 × 6 = $69,000. Error común: incluir los $400 de streaming y obtener $11,900.",
      en: "Essentials: 5,000 + 3,800 + 900 + 1,100 + 700 = $11,500 (streaming is not essential). 3 months: 11,500 × 3 = $34,500; 6 months: 11,500 × 6 = $69,000. Common mistake: including the $400 of streaming and getting $11,900.",
    },
    difficulty: 2,
    points: 15,
    competency: 'emergency-fund',
  },
  {
    id: 'PER-11-E3',
    level: 1,
    module: 'PER-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Paola quiere un fondo de emergencia de $36,000. Ya tiene $6,000 apartados y puede ahorrar $2,500 al mes.",
      en: "Paola wants a $36,000 emergency fund. She already has $6,000 set aside and can save $2,500 a month.",
    },
    prompt: {
      es: "¿En cuántos meses completará Paola su fondo de emergencia?",
      en: "In how many months will Paola complete her emergency fund?",
    },
    answer: 12,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Le faltan 36,000 − 6,000 = $30,000; 30,000 ÷ 2,500 = 12 meses. Error común: olvidar lo que ya tiene y dividir 36,000 ÷ 2,500 = 14.4 meses.",
      en: "She still needs 36,000 − 6,000 = $30,000; 30,000 ÷ 2,500 = 12 months. Common mistake: forgetting what she already has and dividing 36,000 ÷ 2,500 = 14.4 months.",
    },
    difficulty: 1,
    points: 10,
    competency: 'emergency-fund',
  },
  {
    id: 'PER-11-E4',
    level: 1,
    module: 'PER-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Para calcular la meta del fondo de emergencia, clasifica cada gasto como esencial o no esencial.",
      en: "To compute the emergency fund target, classify each expense as essential or non-essential.",
    },
    categories: [
      { id: 'PER-11-E4-c1', label: { es: "Esencial (se incluye)", en: "Essential (included)" } },
      { id: 'PER-11-E4-c2', label: { es: "No esencial (no se incluye)", en: "Non-essential (not included)" } },
    ],
    items: [
      { id: 'PER-11-E4-i1', label: { es: "Renta del departamento", en: "Apartment rent" }, correctCategoryId: 'PER-11-E4-c1' },
      { id: 'PER-11-E4-i2', label: { es: "Despensa básica del mes", en: "Monthly basic groceries" }, correctCategoryId: 'PER-11-E4-c1' },
      { id: 'PER-11-E4-i3', label: { es: "Recibo de luz y agua", en: "Electricity and water bill" }, correctCategoryId: 'PER-11-E4-c1' },
      { id: 'PER-11-E4-i4', label: { es: "Pago mínimo del préstamo personal", en: "Minimum payment on the personal loan" }, correctCategoryId: 'PER-11-E4-c1' },
      { id: 'PER-11-E4-i5', label: { es: "Cenas en restaurantes los fines de semana", en: "Weekend restaurant dinners" }, correctCategoryId: 'PER-11-E4-c2' },
      { id: 'PER-11-E4-i6', label: { es: "Suscripción a una plataforma de videojuegos", en: "Video game platform subscription" }, correctCategoryId: 'PER-11-E4-c2' },
    ],
    explanation: {
      es: "Esenciales son los gastos que debes cubrir aunque no tengas ingreso: vivienda, comida, servicios y pagos mínimos de deuda (si no los pagas, se agravan). Restaurantes y suscripciones se pueden recortar en una emergencia. Error común: dejar fuera los pagos de deuda, que no se detienen si pierdes el empleo.",
      en: "Essentials are the expenses you must cover even without income: housing, food, utilities and minimum debt payments (if unpaid, they get worse). Restaurants and subscriptions can be cut in an emergency. Common mistake: leaving out debt payments, which do not stop if you lose your job.",
    },
    difficulty: 1,
    points: 10,
    competency: 'emergency-fund',
  },
  {
    id: 'PER-11-E5',
    level: 1,
    module: 'PER-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El mejor lugar para el fondo de emergencia son las acciones de la bolsa, porque pueden dar más rendimiento que una cuenta de ahorro.",
      en: "The best place for the emergency fund is stocks, because they can earn more than a savings account.",
    },
    answer: false,
    explanation: {
      es: "Falso. El fondo debe ser líquido y seguro: las acciones pueden caer justo cuando las necesitas y tendrías que vender con pérdida. Para el fondo, la disponibilidad pesa más que el rendimiento. Error común: tratar el fondo de emergencia como una inversión de largo plazo.",
      en: "False. The fund must be liquid and safe: stocks can fall right when you need them and you would have to sell at a loss. For the fund, availability matters more than return. Common mistake: treating the emergency fund as a long-term investment.",
    },
    difficulty: 1,
    points: 10,
    competency: 'emergency-fund',
  },
  {
    id: 'PER-11-E6',
    level: 1,
    module: 'PER-11',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Fernanda trabaja por su cuenta como diseñadora: hay meses en que gana el doble y meses en que casi no tiene clientes. Mantiene sola a su hijo.",
      en: "Fernanda works as a freelance designer: some months she earns double and some months she barely has clients. She supports her son on her own.",
    },
    prompt: {
      es: "¿Qué decisiones sobre su fondo de emergencia son adecuadas? Selecciona todas las que apliquen.",
      en: "Which decisions about her emergency fund are appropriate? Select all that apply.",
    },
    options: [
      { id: 'PER-11-E6-a', text: { es: "Apuntar a 6 meses o más de gastos esenciales", en: "Aim for 6 months or more of essential expenses" } },
      { id: 'PER-11-E6-b', text: { es: "Guardarlo en una cuenta separada con disponibilidad diaria en una institución autorizada", en: "Keep it in a separate account with daily availability at an authorized institution" } },
      { id: 'PER-11-E6-c', text: { es: "Mantenerlo en efectivo en su casa para tenerlo a la mano", en: "Keep it in cash at home to have it at hand" } },
      { id: 'PER-11-E6-d', text: { es: "Apartar una parte extra en los meses buenos para llenar el fondo más rápido", en: "Set aside an extra amount in good months to fill the fund faster" } },
      { id: 'PER-11-E6-e', text: { es: "Invertirlo todo en un plazo fijo de 3 años porque paga más", en: "Invest it all in a 3-year fixed term because it pays more" } },
    ],
    correctOptionIds: ['PER-11-E6-a', 'PER-11-E6-b', 'PER-11-E6-d'],
    explanation: {
      es: "Con ingresos variables y un dependiente conviene un fondo mayor, guardado líquido, seguro y separado, y aprovechar los meses buenos para llenarlo. El efectivo en casa corre riesgo de robo y pierde valor con la inflación; un plazo fijo de 3 años no está disponible cuando lo necesitas. Error común: elegir el lugar por rendimiento y no por disponibilidad.",
      en: "With variable income and a dependent, a larger fund is advisable, kept liquid, safe and separate, and using good months to fill it. Cash at home risks theft and loses value with inflation; a 3-year fixed term is not available when you need it. Common mistake: choosing the place for its return instead of its availability.",
    },
    difficulty: 2,
    points: 15,
    competency: 'emergency-fund',
  },

  // ═════════════════════════ PER-12 ═════════════════════════
  {
    id: 'PER-12-E1',
    level: 1,
    module: 'PER-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué relación suele haber entre riesgo y rendimiento en las inversiones?",
      en: "What relationship is usually found between risk and return in investments?",
    },
    options: [
      { id: 'PER-12-E1-a', text: { es: "A mayor rendimiento esperado, menor riesgo", en: "The higher the expected return, the lower the risk" } },
      { id: 'PER-12-E1-b', text: { es: "A mayor rendimiento esperado, mayor riesgo", en: "The higher the expected return, the higher the risk" } },
      { id: 'PER-12-E1-c', text: { es: "No hay ninguna relación entre ellos", en: "There is no relationship between them" } },
      { id: 'PER-12-E1-d', text: { es: "Todas las inversiones tienen el mismo riesgo", en: "All investments have the same risk" } },
    ],
    correctOptionId: 'PER-12-E1-b',
    explanation: {
      es: "Para buscar más rendimiento hay que aceptar más posibilidad de altibajos o pérdidas. Por eso, si alguien promete rendimientos altos \"sin riesgo\", es señal de alerta. Error común: creer que se puede tener alto rendimiento garantizado.",
      en: "To seek more return you must accept more chance of ups and downs or losses. That is why, if someone promises high returns \"without risk\", it is a red flag. Common mistake: believing you can have a guaranteed high return.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'PER-12-E2',
    level: 1,
    module: 'PER-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Alberto invirtió $25,000 en un fondo de inversión. Un año después, su inversión vale $26,500 y no hizo depósitos ni retiros.",
      en: "Alberto invested $25,000 in an investment fund. A year later, his investment is worth $26,500 and he made no deposits or withdrawals.",
    },
    prompt: {
      es: "¿Cuál fue el rendimiento anual de Alberto, en porcentaje?",
      en: "What was Alberto's annual return, as a percentage?",
    },
    answer: 6,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Ganancia: 26,500 − 25,000 = $1,500. Rendimiento = 1,500 ÷ 25,000 × 100 = 6%. Error común: dividir entre el valor final (1,500 ÷ 26,500 ≈ 5.7%) en lugar del inicial.",
      en: "Gain: 26,500 − 25,000 = $1,500. Return = 1,500 ÷ 25,000 × 100 = 6%. Common mistake: dividing by the final value (1,500 ÷ 26,500 ≈ 5.7%) instead of the initial one.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'PER-12-E3',
    level: 1,
    module: 'PER-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada instrumento como de deuda (renta fija) o de renta variable.",
      en: "Classify each instrument as debt (fixed income) or equity.",
    },
    categories: [
      { id: 'PER-12-E3-c1', label: { es: "Deuda (renta fija)", en: "Debt (fixed income)" } },
      { id: 'PER-12-E3-c2', label: { es: "Renta variable", en: "Equity" } },
    ],
    items: [
      { id: 'PER-12-E3-i1', label: { es: "Cetes (valores del gobierno de corto plazo)", en: "Cetes (short-term government securities)" }, correctCategoryId: 'PER-12-E3-c1' },
      { id: 'PER-12-E3-i2', label: { es: "Pagaré bancario a 28 días", en: "28-day bank promissory note" }, correctCategoryId: 'PER-12-E3-c1' },
      { id: 'PER-12-E3-i3', label: { es: "Bono emitido por una empresa", en: "Bond issued by a company" }, correctCategoryId: 'PER-12-E3-c1' },
      { id: 'PER-12-E3-i4', label: { es: "Acciones de una empresa que cotiza en bolsa", en: "Shares of a company listed on the stock exchange" }, correctCategoryId: 'PER-12-E3-c2' },
      { id: 'PER-12-E3-i5', label: { es: "ETF que replica un índice de acciones", en: "ETF tracking a stock index" }, correctCategoryId: 'PER-12-E3-c2' },
      { id: 'PER-12-E3-i6', label: { es: "Fondo de inversión que compra acciones", en: "Investment fund that buys stocks" }, correctCategoryId: 'PER-12-E3-c2' },
    ],
    explanation: {
      es: "En deuda prestas tu dinero (al gobierno, a un banco o a una empresa) a cambio de intereses: Cetes, pagarés y bonos. En renta variable eres dueño de una parte y no hay rendimiento prometido: acciones, ETF y fondos de acciones. Error común: pensar que un bono de empresa es renta variable porque lo emite una empresa.",
      en: "In debt you lend your money (to the government, a bank or a company) in exchange for interest: Cetes, promissory notes and bonds. In equity you own a part and there is no promised return: stocks, ETFs and stock funds. Common mistake: thinking a corporate bond is equity because a company issues it.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'PER-12-E4',
    level: 1,
    module: 'PER-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si repartes tu dinero entre muchas inversiones distintas, eliminas por completo el riesgo de perder.",
      en: "If you spread your money across many different investments, you completely eliminate the risk of losing.",
    },
    answer: false,
    explanation: {
      es: "Falso. Diversificar reduce el riesgo, porque una caída en una inversión pesa menos en el total, pero no lo elimina: todo el mercado puede caer al mismo tiempo. Error común: creer que \"diversificado\" significa \"garantizado\".",
      en: "False. Diversifying reduces risk, because a drop in one investment weighs less on the total, but it does not eliminate it: the whole market can fall at the same time. Common mistake: believing \"diversified\" means \"guaranteed\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'PER-12-E5',
    level: 1,
    module: 'PER-12',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Valeria juntó $60,000 para el enganche de un auto que comprará dentro de 6 meses. No quiere arriesgarse a tener menos dinero en esa fecha.",
      en: "Valeria saved $60,000 for a car down payment she will make in 6 months. She does not want to risk having less money by then.",
    },
    prompt: {
      es: "¿Qué opción se ajusta mejor a la meta y al plazo de Valeria?",
      en: "Which option best fits Valeria's goal and time horizon?",
    },
    options: [
      { id: 'PER-12-E5-a', text: { es: "Comprar acciones de una sola empresa que subió mucho el año pasado", en: "Buy shares of a single company that rose a lot last year" } },
      { id: 'PER-12-E5-b', text: { es: "Un instrumento de deuda de corto plazo en una institución autorizada", en: "A short-term debt instrument at an authorized institution" } },
      { id: 'PER-12-E5-c', text: { es: "Un fondo de acciones pensado para 10 años o más", en: "A stock fund designed for 10 years or more" } },
      { id: 'PER-12-E5-d', text: { es: "Un esquema que promete duplicar su dinero en 6 meses", en: "A scheme promising to double her money in 6 months" } },
    ],
    correctOptionId: 'PER-12-E5-b',
    explanation: {
      es: "Con una meta a 6 meses y sin tolerancia a perder, conviene poco riesgo y buena liquidez: deuda de corto plazo. Las acciones pueden caer justo antes de la compra, un fondo de largo plazo no encaja con 6 meses y duplicar en 6 meses es una promesa típica de fraude. Error común: elegir por lo que subió el año pasado; el rendimiento pasado no garantiza el futuro.",
      en: "With a 6-month goal and no tolerance for losses, low risk and good liquidity are best: short-term debt. Stocks could fall right before the purchase, a long-term fund does not fit 6 months and doubling in 6 months is a typical fraud promise. Common mistake: choosing by last year's rise; past returns do not guarantee the future.",
    },
    difficulty: 1,
    points: 10,
    competency: 'investing-basics',
  },
  {
    id: 'PER-12-E6',
    level: 1,
    module: 'PER-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Mónica invierte $40,000 durante un año en un instrumento que paga una tasa hipotética de 9% anual. Supón una inflación hipotética de 4% en ese año.",
      en: "Mónica invests $40,000 for one year in an instrument paying a hypothetical 9% annual rate. Assume hypothetical inflation of 4% that year.",
    },
    prompt: {
      es: "Calcula la ganancia en pesos y el rendimiento real aproximado en porcentaje.",
      en: "Compute the gain in pesos and the approximate real return as a percentage.",
    },
    fields: [
      { id: 'f1', label: { es: "Ganancia en pesos", en: "Gain in pesos" }, answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Rendimiento real aproximado (%)", en: "Approximate real return (%)" }, answer: 5, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Ganancia: 40,000 × 0.09 = $3,600. Real aproximado: 9% − 4% = 5%. Ese 5% es lo que de verdad creció su poder de compra. Error común: sumar la inflación (13%) o tomar el 9% como si fuera ganancia real.",
      en: "Gain: 40,000 × 0.09 = $3,600. Approximate real: 9% − 4% = 5%. That 5% is how much her purchasing power really grew. Common mistake: adding inflation (13%) or taking the 9% as if it were real gain.",
    },
    difficulty: 2,
    points: 15,
    competency: 'investing-basics',
  },
]
