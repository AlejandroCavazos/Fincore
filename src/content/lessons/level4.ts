import type { Exercise, Lesson } from '../../types'

/** Bilingual text helper. */
const t = (es: string, en: string) => ({ es, en })

// ───────────────────────────── Lessons ─────────────────────────────

export const lessons: Lesson[] = [
  // ─────────────── L4-01 ───────────────
  {
    id: 'L4-01',
    level: 4,
    topicIds: ['4.1', '4.2'],
    title: t(
      'Valor del dinero en el tiempo: interés simple y compuesto',
      'Time value of money: simple and compound interest',
    ),
    summary: t(
      'Entiende por qué un peso hoy vale más que un peso mañana, calcula interés simple y compuesto, y convierte tasas nominales en tasas efectivas anuales.',
      'Understand why a peso today is worth more than a peso tomorrow, compute simple and compound interest, and convert nominal rates into effective annual rates.',
    ),
    minutes: 14,
    objectives: [
      t(
        'Explicar las razones del valor del dinero en el tiempo: costo de oportunidad, inflación y riesgo.',
        'Explain the reasons for the time value of money: opportunity cost, inflation and risk.',
      ),
      t('Calcular interés simple y monto acumulado.', 'Compute simple interest and accumulated amount.'),
      t(
        'Calcular el monto con interés compuesto y con capitalización periódica.',
        'Compute the amount with compound interest and periodic compounding.',
      ),
      t(
        'Convertir una tasa nominal anual en tasa efectiva anual y comparar ofertas.',
        'Convert an annual nominal rate into an effective annual rate and compare offers.',
      ),
    ],
    theory: [
      {
        heading: t('¿Por qué el dinero vale distinto en el tiempo?', 'Why money has different value over time'),
        body: [
          t(
            'Un peso disponible hoy puede invertirse y generar rendimiento; recibirlo dentro de un año implica renunciar a ese rendimiento (**costo de oportunidad**). Además, la **inflación** reduce el poder adquisitivo y todo cobro futuro tiene cierto **riesgo** de no realizarse.',
            'A peso available today can be invested to earn a return; receiving it a year from now means giving up that return (**opportunity cost**). In addition, **inflation** erodes purchasing power and every future receipt carries some **risk** of not happening.',
          ),
          t(
            'Por eso solo se pueden sumar o comparar cantidades que están en el **mismo punto del tiempo**. La tasa de interés es el "tipo de cambio" entre pesos de distintas fechas.',
            'That is why only amounts at the **same point in time** can be added or compared. The interest rate is the "exchange rate" between pesos at different dates.',
          ),
        ],
      },
      {
        heading: t('Interés simple', 'Simple interest'),
        body: [
          t(
            'En el **interés simple** los intereses se calculan siempre sobre el capital original; no se reinvierten. Se usa en operaciones de corto plazo como pagarés y algunos instrumentos de descuento. El tiempo debe expresarse en la misma unidad que la tasa (si la tasa es anual y el plazo es de 9 meses, n = 9/12).',
            'With **simple interest**, interest is always computed on the original principal; it is not reinvested. It is used in short-term operations such as promissory notes and some discount instruments. Time must be in the same unit as the rate (if the rate is annual and the term is 9 months, n = 9/12).',
          ),
        ],
        formula: 'I = C × i × n;  M = C × (1 + i × n)',
      },
      {
        heading: t('Interés compuesto', 'Compound interest'),
        body: [
          t(
            'En el **interés compuesto** los intereses de cada periodo se suman al capital y generan a su vez intereses ("interés sobre interés"). El crecimiento es exponencial, por lo que la diferencia frente al simple aumenta con el plazo.',
            'With **compound interest**, each period\'s interest is added to principal and itself earns interest ("interest on interest"). Growth is exponential, so the gap versus simple interest widens with time.',
          ),
          t(
            'Si una tasa nominal anual j se capitaliza m veces al año, la tasa por periodo es j/m y el número de periodos es m × años. Ejemplo: 12 % anual capitalizable mensualmente equivale a 1 % mensual.',
            'If an annual nominal rate j is compounded m times a year, the rate per period is j/m and the number of periods is m × years. Example: 12 % annual compounded monthly is 1 % per month.',
          ),
        ],
        formula: 'M = C × (1 + j/m)^(m × años)',
      },
      {
        heading: t('Tasa nominal y tasa efectiva anual', 'Nominal rate and effective annual rate'),
        body: [
          t(
            'La **tasa nominal** es la que se anuncia; la **tasa efectiva anual (TEA)** es el rendimiento real en un año considerando la capitalización. A mayor frecuencia de capitalización, mayor TEA para la misma tasa nominal. Para comparar créditos o inversiones con distinta capitalización, siempre compara TEA.',
            'The **nominal rate** is the quoted one; the **effective annual rate (EAR)** is the true one-year return considering compounding. The more frequent the compounding, the higher the EAR for the same nominal rate. To compare loans or investments with different compounding, always compare EARs.',
          ),
        ],
        formula: 'TEA = (1 + j/m)^m − 1',
      },
    ],
    examples: [
      {
        title: t('Simple contra compuesto', 'Simple versus compound'),
        problem: t(
          'Inviertes $60,000 durante 3 años al 10 % anual. Calcula el monto final con interés simple y con interés compuesto anual.',
          'You invest $60,000 for 3 years at 10 % a year. Compute the final amount with simple interest and with annual compound interest.',
        ),
        steps: [
          t(
            'Simple: I = 60,000 × 0.10 × 3 = $18,000; M = 60,000 + 18,000 = $78,000.',
            'Simple: I = 60,000 × 0.10 × 3 = $18,000; M = 60,000 + 18,000 = $78,000.',
          ),
          t(
            'Compuesto: M = 60,000 × 1.10^3 = 60,000 × 1.331 = $79,860.',
            'Compound: M = 60,000 × 1.10^3 = 60,000 × 1.331 = $79,860.',
          ),
          t(
            'Diferencia = 79,860 − 78,000 = $1,860, que corresponde a los intereses generados por los intereses reinvertidos.',
            'Difference = 79,860 − 78,000 = $1,860, which is the interest earned on reinvested interest.',
          ),
        ],
        result: t(
          'Simple: $78,000; compuesto: $79,860. El compuesto rinde $1,860 más.',
          'Simple: $78,000; compound: $79,860. Compounding earns $1,860 more.',
        ),
      },
      {
        title: t('Comparar ofertas con la TEA', 'Comparing offers with the EAR'),
        problem: t(
          'Un banco ofrece 12 % anual capitalizable mensualmente y otro 12.5 % anual capitalizable trimestralmente. ¿Cuál paga más a un ahorrador?',
          'One bank offers 12 % annual compounded monthly and another 12.5 % annual compounded quarterly. Which pays a saver more?',
        ),
        steps: [
          t(
            'Banco A: TEA = (1 + 0.12/12)^12 − 1 = 1.01^12 − 1 = 12.68 %.',
            'Bank A: EAR = (1 + 0.12/12)^12 − 1 = 1.01^12 − 1 = 12.68 %.',
          ),
          t(
            'Banco B: TEA = (1 + 0.125/4)^4 − 1 = 1.03125^4 − 1 = 13.10 %.',
            'Bank B: EAR = (1 + 0.125/4)^4 − 1 = 1.03125^4 − 1 = 13.10 %.',
          ),
        ],
        result: t(
          'El banco B paga más (13.10 % efectiva contra 12.68 %). La comparación correcta siempre es entre tasas efectivas.',
          'Bank B pays more (13.10 % effective versus 12.68 %). The correct comparison is always between effective rates.',
        ),
      },
    ],
    keyPoints: [
      t('Solo se comparan cantidades en la misma fecha.', 'Only amounts at the same date can be compared.'),
      t('Simple: M = C(1 + i·n). Compuesto: M = C(1 + i)^n.', 'Simple: A = P(1 + i·n). Compound: A = P(1 + i)^n.'),
      t(
        'Con capitalización m veces al año, usa j/m por periodo y m × años periodos.',
        'With compounding m times a year, use j/m per period and m × years periods.',
      ),
      t(
        'TEA = (1 + j/m)^m − 1; más capitalizaciones → mayor TEA.',
        'EAR = (1 + j/m)^m − 1; more compounding → higher EAR.',
      ),
    ],
    exerciseIds: ['N4-001', 'N4-002', 'N4-003', 'N4-004', 'N4-005', 'N4-006', 'N4-007'],
  },

  // ─────────────── L4-02 ───────────────
  {
    id: 'L4-02',
    level: 4,
    topicIds: ['4.4', '4.5'],
    title: t('Valor presente y valor futuro', 'Present value and future value'),
    summary: t(
      'Mueve cantidades en el tiempo: capitaliza hacia el futuro, descuenta hacia el presente y despeja la tasa o el plazo de una operación.',
      'Move amounts through time: compound forward, discount back to the present, and solve for the rate or term of an operation.',
    ),
    minutes: 14,
    objectives: [
      t('Calcular el valor futuro de una cantidad única.', 'Compute the future value of a single amount.'),
      t('Calcular el valor presente de un cobro o pago futuro.', 'Compute the present value of a future receipt or payment.'),
      t('Despejar la tasa de rendimiento y el número de periodos.', 'Solve for the rate of return and the number of periods.'),
      t(
        'Valuar una serie de flujos desiguales descontando cada uno.',
        'Value a series of uneven cash flows by discounting each one.',
      ),
    ],
    theory: [
      {
        heading: t('Valor futuro (capitalización)', 'Future value (compounding)'),
        body: [
          t(
            'El **valor futuro (VF)** es lo que valdrá una cantidad actual después de n periodos ganando una tasa r por periodo. El factor (1 + r)^n se llama **factor de capitalización** y siempre es mayor que 1 si r > 0.',
            'The **future value (FV)** is what a current amount will be worth after n periods earning a rate r per period. The factor (1 + r)^n is the **compounding factor** and is always greater than 1 if r > 0.',
          ),
        ],
        formula: 'VF = VP × (1 + r)^n',
      },
      {
        heading: t('Valor presente (descuento)', 'Present value (discounting)'),
        body: [
          t(
            'El **valor presente (VP)** es lo que vale hoy una cantidad futura. Se obtiene dividiendo entre el factor de capitalización; la tasa usada se llama **tasa de descuento** y refleja el rendimiento que se exige considerando el riesgo.',
            'The **present value (PV)** is what a future amount is worth today. It is found by dividing by the compounding factor; the rate used is the **discount rate** and reflects the return required given the risk.',
          ),
          t(
            'El VP **disminuye** cuando la tasa sube o cuando el plazo se alarga: entre más lejos y más riesgoso es un cobro, menos vale hoy. Para una serie de flujos distintos, se descuenta cada uno con su propio n y se suman los resultados.',
            'PV **falls** when the rate rises or the term lengthens: the further away and riskier a receipt is, the less it is worth today. For a series of different flows, discount each with its own n and add the results.',
          ),
        ],
        formula: 'VP = VF / (1 + r)^n;  VP serie = Σ FCt / (1 + r)^t',
      },
      {
        heading: t('Despejar la tasa y el plazo', 'Solving for the rate and the term'),
        body: [
          t(
            'Conociendo VP, VF y n se puede obtener la **tasa de rendimiento compuesta** de una inversión. Conociendo VP, VF y r se obtiene el **plazo** con logaritmos. La "regla del 72" aproxima los años para duplicar: 72 / tasa en %.',
            'Knowing PV, FV and n you can find an investment\'s **compound rate of return**. Knowing PV, FV and r you can find the **term** using logarithms. The "rule of 72" approximates the years to double: 72 / rate in %.',
          ),
        ],
        formula: 'r = (VF / VP)^(1/n) − 1;  n = ln(VF / VP) / ln(1 + r)',
      },
    ],
    examples: [
      {
        title: t('Valor futuro de una inversión', 'Future value of an investment'),
        problem: t(
          'Depositas $40,000 en un instrumento que paga 9 % anual compuesto. ¿Cuánto tendrás en 5 años?',
          'You deposit $40,000 in an instrument paying 9 % a year compounded. How much will you have in 5 years?',
        ),
        steps: [
          t('Factor = 1.09^5 = 1.538624.', 'Factor = 1.09^5 = 1.538624.'),
          t('VF = 40,000 × 1.538624 = $61,544.96.', 'FV = 40,000 × 1.538624 = $61,544.96.'),
        ],
        result: t(
          'En 5 años tendrás $61,544.96; los intereses ganados suman $21,544.96.',
          'In 5 years you will have $61,544.96; interest earned totals $21,544.96.',
        ),
      },
      {
        title: t('Valor presente de un cobro futuro', 'Present value of a future receipt'),
        problem: t(
          'Un cliente promete pagarte $200,000 dentro de 3 años. Si tu rendimiento exigido es 12 % anual, ¿cuánto vale hoy ese derecho de cobro?',
          'A client promises to pay you $200,000 in 3 years. If your required return is 12 % a year, what is that receivable worth today?',
        ),
        steps: [
          t('Factor = 1.12^3 = 1.404928.', 'Factor = 1.12^3 = 1.404928.'),
          t('VP = 200,000 / 1.404928 = $142,356.05.', 'PV = 200,000 / 1.404928 = $142,356.05.'),
        ],
        result: t(
          'Hoy vale $142,356.05: aceptar menos de esa cantidad en efectivo hoy sería peor que esperar, dado tu rendimiento exigido.',
          'It is worth $142,356.05 today: accepting less than that in cash now would be worse than waiting, given your required return.',
        ),
      },
    ],
    keyPoints: [
      t('VF = VP(1 + r)^n; VP = VF / (1 + r)^n.', 'FV = PV(1 + r)^n; PV = FV / (1 + r)^n.'),
      t(
        'A mayor tasa o mayor plazo, menor valor presente.',
        'Higher rate or longer term → lower present value.',
      ),
      t(
        'Para flujos desiguales, descuenta cada flujo por separado y suma.',
        'For uneven flows, discount each flow separately and add them.',
      ),
      t('r = (VF/VP)^(1/n) − 1; n = ln(VF/VP) / ln(1 + r).', 'r = (FV/PV)^(1/n) − 1; n = ln(FV/PV) / ln(1 + r).'),
    ],
    exerciseIds: ['N4-008', 'N4-009', 'N4-010', 'N4-011', 'N4-012', 'N4-013', 'N4-014'],
  },

  // ─────────────── L4-03 ───────────────
  {
    id: 'L4-03',
    level: 4,
    topicIds: ['4.3'],
    title: t('Anualidades', 'Annuities'),
    summary: t(
      'Valúa series de pagos iguales: anualidades vencidas y anticipadas, el pago de un crédito y su tabla de amortización.',
      'Value series of equal payments: ordinary annuities and annuities due, a loan payment and its amortization schedule.',
    ),
    minutes: 16,
    objectives: [
      t(
        'Distinguir entre anualidad vencida (ordinaria) y anticipada.',
        'Distinguish between an ordinary annuity and an annuity due.',
      ),
      t(
        'Calcular el valor presente y el valor futuro de una anualidad.',
        'Compute the present and future value of an annuity.',
      ),
      t('Calcular el pago periódico de un préstamo.', 'Compute the periodic payment of a loan.'),
      t(
        'Elaborar e interpretar una tabla de amortización con pagos fijos.',
        'Build and interpret a fixed-payment amortization schedule.',
      ),
    ],
    theory: [
      {
        heading: t('¿Qué es una anualidad?', 'What is an annuity?'),
        body: [
          t(
            'Una **anualidad** es una serie de pagos **iguales**, a intervalos **iguales** y con la **misma tasa** por periodo: rentas, mensualidades de un crédito, aportaciones periódicas al ahorro. El periodo no tiene que ser un año; puede ser mensual o trimestral, siempre que la tasa corresponda al mismo periodo.',
            'An **annuity** is a series of **equal** payments at **equal** intervals with the **same rate** per period: rents, loan instalments, periodic savings contributions. The period need not be a year; it can be monthly or quarterly as long as the rate matches the same period.',
          ),
          t(
            'En la **anualidad vencida (ordinaria)** los pagos ocurren al **final** de cada periodo (la mayoría de los créditos). En la **anualidad anticipada** ocurren al **inicio** (rentas, colegiaturas). Como cada pago anticipado se adelanta un periodo, su valor es el de la vencida multiplicado por (1 + r).',
            'In an **ordinary annuity** payments occur at the **end** of each period (most loans). In an **annuity due** they occur at the **start** (rents, tuition). Because each payment is one period earlier, its value equals the ordinary annuity value multiplied by (1 + r).',
          ),
        ],
        formula: 'VP = PMT × [1 − (1 + r)^−n] / r;  VF = PMT × [(1 + r)^n − 1] / r;  Anticipada = Vencida × (1 + r)',
      },
      {
        heading: t('Pago de un préstamo', 'Loan payment'),
        body: [
          t(
            'Un crédito con pagos fijos es una anualidad cuyo valor presente es el monto prestado. Despejando PMT obtenemos la mensualidad. Usa la tasa del periodo de pago (anual / 12 para pagos mensuales) y el número total de pagos.',
            'A fixed-payment loan is an annuity whose present value is the amount borrowed. Solving for PMT gives the instalment. Use the rate per payment period (annual / 12 for monthly payments) and the total number of payments.',
          ),
        ],
        formula: 'PMT = VP × r / [1 − (1 + r)^−n]',
      },
      {
        heading: t('Tabla de amortización', 'Amortization schedule'),
        body: [
          t(
            'Cada pago se divide en **interés** (saldo insoluto × tasa) y **abono a capital** (pago − interés). Como el saldo baja con cada pago, el interés disminuye y el abono a capital aumenta; el último pago deja el saldo en cero.',
            'Each payment is split into **interest** (outstanding balance × rate) and **principal** (payment − interest). As the balance falls with each payment, interest decreases and the principal portion increases; the last payment brings the balance to zero.',
          ),
          t(
            'Este esquema de pagos iguales se conoce como sistema francés. En México, al comparar créditos al consumo conviene revisar también el Costo Anual Total (CAT), que incluye comisiones además de la tasa.',
            'This equal-payment scheme is known as the French system. In Mexico, when comparing consumer loans it is useful to also check the Total Annual Cost (CAT), which includes fees in addition to the rate.',
          ),
        ],
        bullets: [
          t('Interés t = Saldo t−1 × r', 'Interest t = Balance t−1 × r'),
          t('Capital t = PMT − Interés t', 'Principal t = PMT − Interest t'),
          t('Saldo t = Saldo t−1 − Capital t', 'Balance t = Balance t−1 − Principal t'),
        ],
      },
    ],
    examples: [
      {
        title: t('Anualidad vencida contra anticipada', 'Ordinary annuity versus annuity due'),
        problem: t(
          'Recibirás $10,000 anuales durante 5 años. Con tasa de 8 % anual, calcula el valor presente si los cobros son al final de cada año y si son al inicio.',
          'You will receive $10,000 a year for 5 years. At 8 % a year, compute the present value if receipts are at the end of each year and if they are at the start.',
        ),
        steps: [
          t(
            'Factor = [1 − 1.08^−5] / 0.08 = 3.992710.',
            'Factor = [1 − 1.08^−5] / 0.08 = 3.992710.',
          ),
          t('Vencida: VP = 10,000 × 3.992710 = $39,927.10.', 'Ordinary: PV = 10,000 × 3.992710 = $39,927.10.'),
          t('Anticipada: VP = 39,927.10 × 1.08 = $43,121.27.', 'Due: PV = 39,927.10 × 1.08 = $43,121.27.'),
        ],
        result: t(
          'Vencida $39,927.10; anticipada $43,121.27. Cobrar al inicio vale más porque cada flujo se descuenta un periodo menos.',
          'Ordinary $39,927.10; due $43,121.27. Receiving at the start is worth more because each flow is discounted one period less.',
        ),
      },
      {
        title: t('Pago y amortización de un préstamo', 'Loan payment and amortization'),
        problem: t(
          'Una empresa obtiene un préstamo de $60,000 a 3 años, al 12 % anual, con pagos anuales iguales al final de cada año. Calcula el pago y la tabla de amortización.',
          'A company takes a $60,000 loan for 3 years at 12 % a year, with equal annual payments at the end of each year. Compute the payment and the amortization schedule.',
        ),
        steps: [
          t(
            'PMT = 60,000 × 0.12 / [1 − 1.12^−3] = $24,980.94.',
            'PMT = 60,000 × 0.12 / [1 − 1.12^−3] = $24,980.94.',
          ),
          t(
            'Año 1: interés 60,000 × 12 % = $7,200; capital 24,980.94 − 7,200 = $17,780.94; saldo $42,219.06.',
            'Year 1: interest 60,000 × 12 % = $7,200; principal 24,980.94 − 7,200 = $17,780.94; balance $42,219.06.',
          ),
          t(
            'Año 2: interés $5,066.29; capital $19,914.65; saldo $22,304.41.',
            'Year 2: interest $5,066.29; principal $19,914.65; balance $22,304.41.',
          ),
          t(
            'Año 3: interés $2,676.53; capital $22,304.41; saldo $0.',
            'Year 3: interest $2,676.53; principal $22,304.41; balance $0.',
          ),
        ],
        result: t(
          'Pago anual $24,980.94; intereses totales $14,942.82 (= 3 × 24,980.94 − 60,000). El interés baja y el abono a capital sube cada año.',
          'Annual payment $24,980.94; total interest $14,942.82 (= 3 × 24,980.94 − 60,000). Interest falls and principal rises every year.',
        ),
      },
    ],
    keyPoints: [
      t(
        'Anualidad: pagos iguales, periodos iguales, tasa constante.',
        'Annuity: equal payments, equal periods, constant rate.',
      ),
      t(
        'VP vencida = PMT[1 − (1 + r)^−n]/r; anticipada = vencida × (1 + r).',
        'PV ordinary = PMT[1 − (1 + r)^−n]/r; due = ordinary × (1 + r).',
      ),
      t(
        'La tasa y n deben corresponder al periodo de pago (mensual → anual/12 y meses).',
        'Rate and n must match the payment period (monthly → annual/12 and months).',
      ),
      t(
        'En la amortización, interés = saldo × r y el resto del pago reduce el capital.',
        'In amortization, interest = balance × r and the rest of the payment reduces principal.',
      ),
    ],
    exerciseIds: ['N4-015', 'N4-016', 'N4-017', 'N4-018', 'N4-019', 'N4-020', 'N4-021'],
  },

  // ─────────────── L4-04 ───────────────
  {
    id: 'L4-04',
    level: 4,
    topicIds: ['4.6', '4.7', '4.8', '4.9'],
    title: t('Flujos de efectivo, VPN, TIR y payback', 'Cash flows, NPV, IRR and payback'),
    summary: t(
      'Identifica los flujos relevantes de un proyecto y evalúalo con valor presente neto, tasa interna de retorno, periodo de recuperación simple y descontado.',
      'Identify a project\'s relevant cash flows and evaluate it with net present value, internal rate of return, and simple and discounted payback.',
    ),
    minutes: 20,
    objectives: [
      t(
        'Identificar los flujos de efectivo incrementales relevantes de un proyecto.',
        'Identify a project\'s relevant incremental cash flows.',
      ),
      t('Calcular e interpretar el VPN.', 'Compute and interpret NPV.'),
      t(
        'Calcular la TIR y reconocer sus limitaciones (flujos no convencionales, proyectos excluyentes).',
        'Compute IRR and recognise its limitations (non-conventional flows, mutually exclusive projects).',
      ),
      t(
        'Calcular el periodo de recuperación simple y descontado.',
        'Compute simple and discounted payback periods.',
      ),
    ],
    theory: [
      {
        heading: t('Flujos de efectivo relevantes', 'Relevant cash flows'),
        body: [
          t(
            'Un proyecto se evalúa con **flujos de efectivo incrementales**: la diferencia entre el efectivo de la empresa con el proyecto y sin él. Se incluyen la inversión inicial, la inversión en capital de trabajo, los flujos operativos después de impuestos (incluido el ahorro fiscal de la depreciación), los costos de oportunidad y el valor de rescate.',
            'A project is evaluated with **incremental cash flows**: the difference between the firm\'s cash with and without the project. Include the initial investment, working capital investment, after-tax operating flows (including the depreciation tax shield), opportunity costs and salvage value.',
          ),
          t(
            'Se excluyen los **costos hundidos** (estudios ya pagados), los gastos generales asignados que no cambian y los **intereses** del financiamiento, porque el costo de financiarse ya está en la tasa de descuento; incluirlos sería contarlo dos veces.',
            'Exclude **sunk costs** (studies already paid), allocated overhead that does not change and financing **interest**, because the cost of financing is already in the discount rate; including it would count it twice.',
          ),
        ],
        formula: 'FCO = (Ingresos − Costos − Depreciación) × (1 − T) + Depreciación',
      },
      {
        heading: t('Valor presente neto (VPN)', 'Net present value (NPV)'),
        body: [
          t(
            'El **VPN** suma todos los flujos descontados al costo de capital, incluido el flujo inicial (t = 0, negativo). Si VPN > 0 el proyecto genera más que el rendimiento exigido y **crea valor**; si VPN < 0 lo destruye. Es el criterio más confiable porque mide la riqueza creada en pesos.',
            '**NPV** adds all flows discounted at the cost of capital, including the initial flow (t = 0, negative). If NPV > 0 the project earns more than the required return and **creates value**; if NPV < 0 it destroys value. It is the most reliable criterion because it measures wealth created in pesos.',
          ),
        ],
        formula: 'VPN = Σ FCt / (1 + r)^t, desde t = 0',
      },
      {
        heading: t('Tasa interna de retorno (TIR)', 'Internal rate of return (IRR)'),
        body: [
          t(
            'La **TIR** es la tasa que hace VPN = 0. Se acepta un proyecto si TIR > costo de capital. Se calcula por prueba y error o con calculadora/hoja de cálculo; para proyectos convencionales (un flujo negativo seguido de positivos) existe una sola TIR.',
            'The **IRR** is the rate that makes NPV = 0. A project is accepted if IRR > cost of capital. It is found by trial and error or with a calculator/spreadsheet; for conventional projects (one negative flow followed by positives) there is a single IRR.',
          ),
          t(
            'Limitaciones: con **flujos no convencionales** (el signo cambia más de una vez, p. ej. un costo de cierre al final) puede haber **varias TIR** o **ninguna**. En proyectos **mutuamente excluyentes** de distinto tamaño o calendario, la TIR puede contradecir al VPN; en ese caso se elige el de **mayor VPN**.',
            'Limitations: with **non-conventional flows** (the sign changes more than once, e.g. a closing cost at the end) there may be **several IRRs** or **none**. For **mutually exclusive** projects of different size or timing, IRR can conflict with NPV; in that case choose the one with **higher NPV**.',
          ),
        ],
        formula: '0 = Σ FCt / (1 + TIR)^t',
      },
      {
        heading: t('Periodo de recuperación (payback)', 'Payback period'),
        body: [
          t(
            'El **payback simple** es el tiempo para recuperar la inversión con los flujos sin descontar. Es fácil de entender y sirve como medida de liquidez/riesgo, pero ignora el valor del dinero en el tiempo y los flujos posteriores a la recuperación.',
            '**Simple payback** is the time to recover the investment with undiscounted flows. It is easy to understand and useful as a liquidity/risk measure, but it ignores the time value of money and flows after recovery.',
          ),
          t(
            'El **payback descontado** usa flujos descontados, por lo que siempre es mayor o igual al simple. Si un proyecto recupera su inversión descontada dentro de su vida, su VPN es positivo.',
            '**Discounted payback** uses discounted flows, so it is always greater than or equal to simple payback. If a project recovers its discounted investment within its life, its NPV is positive.',
          ),
        ],
        formula: 'Payback = años antes de recuperar + (monto por recuperar / flujo del año siguiente)',
      },
    ],
    examples: [
      {
        title: t('VPN, TIR y payback de un proyecto', 'NPV, IRR and payback of a project'),
        problem: t(
          'Un proyecto requiere $280,000 hoy y genera $100,000, $120,000 y $140,000 al final de los años 1 a 3. El costo de capital es 10 %. Calcula VPN, TIR, payback simple y descontado.',
          'A project requires $280,000 today and generates $100,000, $120,000 and $140,000 at the end of years 1 to 3. The cost of capital is 10 %. Compute NPV, IRR, simple and discounted payback.',
        ),
        steps: [
          t(
            'Flujos descontados: 100,000/1.1 = $90,909.09; 120,000/1.1^2 = $99,173.55; 140,000/1.1^3 = $105,184.07.',
            'Discounted flows: 100,000/1.1 = $90,909.09; 120,000/1.1^2 = $99,173.55; 140,000/1.1^3 = $105,184.07.',
          ),
          t(
            'VPN = −280,000 + 90,909.09 + 99,173.55 + 105,184.07 = $15,266.72 > 0.',
            'NPV = −280,000 + 90,909.09 + 99,173.55 + 105,184.07 = $15,266.72 > 0.',
          ),
          t(
            'TIR (por prueba y error): ≈ 12.90 %, mayor que 10 %.',
            'IRR (by trial and error): ≈ 12.90 %, above 10 %.',
          ),
          t(
            'Payback simple: tras 2 años se recuperan 220,000; faltan 60,000 → 2 + 60,000/140,000 = 2.43 años.',
            'Simple payback: after 2 years 220,000 is recovered; 60,000 remains → 2 + 60,000/140,000 = 2.43 years.',
          ),
          t(
            'Payback descontado: acumulado descontado tras 2 años = −89,917.36 → 2 + 89,917.36/105,184.07 = 2.85 años.',
            'Discounted payback: cumulative discounted after 2 years = −89,917.36 → 2 + 89,917.36/105,184.07 = 2.85 years.',
          ),
        ],
        result: t(
          'VPN $15,266.72, TIR ≈ 12.90 %, payback 2.43 años (simple) y 2.85 años (descontado): se acepta.',
          'NPV $15,266.72, IRR ≈ 12.90 %, payback 2.43 years (simple) and 2.85 years (discounted): accept.',
        ),
      },
      {
        title: t('Un proyecto con dos TIR', 'A project with two IRRs'),
        problem: t(
          'Una mina requiere $100 hoy, genera $230 en el año 1 y exige $132 de restauración ambiental en el año 2. Encuentra sus TIR.',
          'A mine requires $100 today, generates $230 in year 1 and requires $132 of environmental restoration in year 2. Find its IRRs.',
        ),
        steps: [
          t(
            'VPN = −100 + 230/(1 + r) − 132/(1 + r)^2 = 0. Con x = 1 + r: 100x^2 − 230x + 132 = 0.',
            'NPV = −100 + 230/(1 + r) − 132/(1 + r)^2 = 0. With x = 1 + r: 100x^2 − 230x + 132 = 0.',
          ),
          t(
            'x = [230 ± √(52,900 − 52,800)] / 200 = (230 ± 10) / 200 → x = 1.20 o 1.10.',
            'x = [230 ± √(52,900 − 52,800)] / 200 = (230 ± 10) / 200 → x = 1.20 or 1.10.',
          ),
          t(
            'TIR = 10 % y 20 %. El VPN es positivo solo para tasas entre 10 % y 20 %.',
            'IRR = 10 % and 20 %. NPV is positive only for rates between 10 % and 20 %.',
          ),
        ],
        result: t(
          'Hay dos TIR (10 % y 20 %) porque el signo de los flujos cambia dos veces; la regla de la TIR es ambigua y se decide con el VPN al costo de capital.',
          'There are two IRRs (10 % and 20 %) because the sign of the flows changes twice; the IRR rule is ambiguous and the decision is made with NPV at the cost of capital.',
        ),
      },
    ],
    keyPoints: [
      t(
        'Usa flujos incrementales; excluye costos hundidos e intereses; incluye costos de oportunidad.',
        'Use incremental flows; exclude sunk costs and interest; include opportunity costs.',
      ),
      t('VPN > 0 crea valor; es el criterio decisivo.', 'NPV > 0 creates value; it is the deciding criterion.'),
      t(
        'TIR > costo de capital → aceptar, pero puede no existir o ser múltiple con flujos no convencionales.',
        'IRR > cost of capital → accept, but it may not exist or may be multiple with non-conventional flows.',
      ),
      t(
        'El payback descontado ≥ payback simple; ambos ignoran flujos posteriores.',
        'Discounted payback ≥ simple payback; both ignore later flows.',
      ),
    ],
    exerciseIds: ['N4-022', 'N4-023', 'N4-024', 'N4-025', 'N4-026', 'N4-027'],
  },

  // ─────────────── L4-05 ───────────────
  {
    id: 'L4-05',
    level: 4,
    topicIds: ['4.10', '4.11', '4.12', '4.13'],
    title: t(
      'CAPM, WACC, estructura de capital y evaluación de proyectos',
      'CAPM, WACC, capital structure and project evaluation',
    ),
    summary: t(
      'Estima el costo del capital propio con CAPM, combínalo con el costo de la deuda en el WACC, entiende cómo influye la estructura de capital y usa la tasa correcta para evaluar proyectos.',
      'Estimate the cost of equity with CAPM, combine it with the cost of debt in the WACC, understand how capital structure matters and use the right rate to evaluate projects.',
    ),
    minutes: 20,
    objectives: [
      t(
        'Distinguir riesgo sistemático y no sistemático e interpretar la beta.',
        'Distinguish systematic and unsystematic risk and interpret beta.',
      ),
      t('Calcular el costo del capital propio con CAPM.', 'Compute the cost of equity with CAPM.'),
      t(
        'Calcular el WACC con pesos de mercado y costo de deuda después de impuestos.',
        'Compute WACC with market-value weights and after-tax cost of debt.',
      ),
      t(
        'Explicar la teoría del trade-off en la estructura de capital.',
        'Explain trade-off theory in capital structure.',
      ),
      t(
        'Evaluar un proyecto descontando sus flujos a una tasa acorde con su riesgo.',
        'Evaluate a project by discounting its flows at a rate consistent with its risk.',
      ),
    ],
    theory: [
      {
        heading: t('Riesgo y beta', 'Risk and beta'),
        body: [
          t(
            'El riesgo total de una acción tiene dos partes. El **riesgo no sistemático** (específico) se debe a eventos propios de la empresa —una huelga, la salida del director— y se elimina diversificando. El **riesgo sistemático** (de mercado) proviene de factores que afectan a toda la economía —tasas de interés, recesión, inflación— y no se puede diversificar.',
            'A stock\'s total risk has two parts. **Unsystematic** (specific) risk comes from company-specific events —a strike, the CEO leaving— and is removed by diversifying. **Systematic** (market) risk comes from economy-wide factors —interest rates, recession, inflation— and cannot be diversified away.',
          ),
          t(
            'Como el inversionista diversificado solo soporta riesgo sistemático, solo ese se premia. La **beta (β)** lo mide: β = 1 se mueve como el mercado; β = 1.2 tiende a moverse 20 % más que el mercado; β = 0.6, 40 % menos.',
            'Because a diversified investor only bears systematic risk, only that risk is rewarded. **Beta (β)** measures it: β = 1 moves with the market; β = 1.2 tends to move 20 % more than the market; β = 0.6, 40 % less.',
          ),
        ],
      },
      {
        heading: t('CAPM: costo del capital propio', 'CAPM: cost of equity'),
        body: [
          t(
            'El **modelo de valuación de activos de capital (CAPM)** establece que el rendimiento exigido es la tasa libre de riesgo más una prima por riesgo de mercado multiplicada por la beta. En México suele usarse como tasa libre de riesgo el rendimiento de bonos gubernamentales (Cetes o Bonos M) del plazo adecuado.',
            'The **capital asset pricing model (CAPM)** states that the required return equals the risk-free rate plus the market risk premium times beta. In Mexico, government bond yields (Cetes or Bonos M) of a suitable maturity are commonly used as the risk-free rate.',
          ),
        ],
        formula: 'Re = rf + β × (Rm − rf)',
      },
      {
        heading: t('WACC: costo promedio ponderado de capital', 'WACC: weighted average cost of capital'),
        body: [
          t(
            'El **WACC** es el rendimiento mínimo que deben generar los activos para satisfacer a acreedores y accionistas. Pondera cada fuente por su **valor de mercado** y usa el costo de la deuda **después de impuestos**, porque los intereses son deducibles y generan un **escudo fiscal**.',
            'The **WACC** is the minimum return assets must earn to satisfy lenders and shareholders. It weights each source by its **market value** and uses the **after-tax** cost of debt because interest is deductible and creates a **tax shield**.',
          ),
        ],
        formula: 'WACC = E/V × Re + D/V × Rd × (1 − T),  V = E + D',
      },
      {
        heading: t('Estructura de capital', 'Capital structure'),
        body: [
          t(
            'Según Modigliani-Miller sin impuestos, la estructura de capital no cambia el valor. Con impuestos, la deuda agrega valor por el escudo fiscal. La **teoría del trade-off** completa el análisis: a mayor deuda aumentan los **costos de dificultades financieras** (riesgo de quiebra, pérdida de clientes, restricciones), por lo que existe un nivel de deuda óptimo.',
            'Under Modigliani-Miller without taxes, capital structure does not change value. With taxes, debt adds value through the tax shield. **Trade-off theory** completes the picture: as debt rises so do **financial distress costs** (bankruptcy risk, lost customers, restrictions), so there is an optimal debt level.',
          ),
          t(
            'Más deuda también hace más riesgoso el capital propio: el **Re aumenta** con el apalancamiento. Por eso sustituir capital por deuda "barata" no reduce el WACC indefinidamente.',
            'More debt also makes equity riskier: **Re rises** with leverage. That is why replacing equity with "cheap" debt does not lower WACC indefinitely.',
          ),
        ],
      },
      {
        heading: t('Evaluación de proyectos con la tasa correcta', 'Evaluating projects with the right rate'),
        body: [
          t(
            'El WACC de la empresa es la tasa adecuada solo para proyectos con **riesgo similar** al de la empresa y financiados con su estructura habitual. Un proyecto más riesgoso (otra industria) requiere una tasa mayor, estimada, por ejemplo, con la beta de empresas comparables (pure play).',
            'The firm\'s WACC is the right rate only for projects with **similar risk** to the firm and financed with its usual structure. A riskier project (another industry) requires a higher rate, estimated, for example, from the beta of comparable firms (pure play).',
          ),
          t(
            'Usar un WACC único para todo lleva a aceptar proyectos riesgosos que destruyen valor y rechazar proyectos seguros que sí lo crean.',
            'Using a single WACC for everything leads to accepting risky projects that destroy value and rejecting safe projects that create it.',
          ),
        ],
      },
    ],
    examples: [
      {
        title: t('Costo del capital propio con CAPM', 'Cost of equity with CAPM'),
        problem: t(
          'La tasa libre de riesgo es 8 %, el rendimiento esperado del mercado 13 % y la beta de la empresa 1.4. Calcula Re.',
          'The risk-free rate is 8 %, the expected market return 13 % and the firm\'s beta 1.4. Compute Re.',
        ),
        steps: [
          t('Prima de mercado = 13 % − 8 % = 5 %.', 'Market premium = 13 % − 8 % = 5 %.'),
          t('Re = 8 % + 1.4 × 5 % = 8 % + 7 % = 15 %.', 'Re = 8 % + 1.4 × 5 % = 8 % + 7 % = 15 %.'),
        ],
        result: t(
          'Los accionistas exigen 15 % anual. Error común: multiplicar la beta por Rm (1.4 × 13 %) en lugar de por la prima.',
          'Shareholders require 15 % a year. Common mistake: multiplying beta by Rm (1.4 × 13 %) instead of by the premium.',
        ),
      },
      {
        title: t('Cálculo del WACC', 'Computing WACC'),
        problem: t(
          'Valor de mercado del capital $7,000,000 y de la deuda $3,000,000. Re = 15 %, Rd = 10 %, tasa de ISR 30 %. Calcula el WACC.',
          'Market value of equity $7,000,000 and of debt $3,000,000. Re = 15 %, Rd = 10 %, income tax rate 30 %. Compute WACC.',
        ),
        steps: [
          t('V = 7,000,000 + 3,000,000 = $10,000,000; E/V = 70 %, D/V = 30 %.', 'V = 7,000,000 + 3,000,000 = $10,000,000; E/V = 70 %, D/V = 30 %.'),
          t('Rd después de impuestos = 10 % × (1 − 0.30) = 7 %.', 'After-tax Rd = 10 % × (1 − 0.30) = 7 %.'),
          t('WACC = 0.70 × 15 % + 0.30 × 7 % = 10.5 % + 2.1 % = 12.6 %.', 'WACC = 0.70 × 15 % + 0.30 × 7 % = 10.5 % + 2.1 % = 12.6 %.'),
        ],
        result: t(
          'WACC = 12.6 %: los proyectos de riesgo promedio deben rendir al menos esa tasa.',
          'WACC = 12.6 %: average-risk projects must earn at least that rate.',
        ),
      },
    ],
    keyPoints: [
      t('Solo el riesgo sistemático (beta) se premia en el mercado.', 'Only systematic risk (beta) is rewarded by the market.'),
      t('CAPM: Re = rf + β(Rm − rf).', 'CAPM: Re = rf + β(Rm − rf).'),
      t(
        'WACC = E/V·Re + D/V·Rd·(1 − T), con pesos de mercado.',
        'WACC = E/V·Re + D/V·Rd·(1 − T), with market-value weights.',
      ),
      t(
        'Trade-off: escudo fiscal contra costos de dificultades financieras.',
        'Trade-off: tax shield versus financial distress costs.',
      ),
      t(
        'Descuenta cada proyecto a una tasa acorde con su propio riesgo.',
        'Discount each project at a rate consistent with its own risk.',
      ),
    ],
    normativeNote: t(
      'Contenido educativo con contexto de México. La tasa de ISR de 30 % para personas morales (Ley del Impuesto sobre la Renta) se usa solo para ilustrar el escudo fiscal; la deducibilidad de intereses está sujeta a requisitos y limitaciones de la LISR. Verifica las disposiciones vigentes en la ley y el DOF a la fecha de consulta (2026).',
      'Educational content with a Mexican context. The 30 % corporate income tax rate (Ley del Impuesto sobre la Renta) is used only to illustrate the tax shield; interest deductibility is subject to requirements and limitations under the LISR. Verify the provisions in force in the law and the DOF as of the consultation date (2026).',
    ),
    exerciseIds: ['N4-028', 'N4-029', 'N4-030', 'N4-031', 'N4-032', 'N4-033', 'N4-034', 'N4-035'],
  },
]

// ───────────────────────────── Exercises ─────────────────────────────

export const exercises: Exercise[] = [
  // ════════════ L4-01 ════════════
  {
    id: 'N4-001',
    level: 4,
    module: 'L4-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      '¿Cuál es la razón principal por la que $10,000 hoy valen más que $10,000 dentro de un año, aun sin inflación ni riesgo?',
      'What is the main reason $10,000 today is worth more than $10,000 a year from now, even with no inflation or risk?',
    ),
    options: [
      { id: 'N4-001-a', text: t('Porque los bancos cobran comisiones', 'Because banks charge fees') },
      { id: 'N4-001-b', text: t('Porque los billetes se deterioran con el tiempo', 'Because banknotes wear out over time') },
      {
        id: 'N4-001-c',
        text: t(
          'Porque hoy pueden invertirse y generar un rendimiento (costo de oportunidad)',
          'Because today they can be invested to earn a return (opportunity cost)',
        ),
      },
      { id: 'N4-001-d', text: t('Porque el tipo de cambio siempre sube', 'Because the exchange rate always rises') },
    ],
    correctOptionId: 'N4-001-c',
    explanation: t(
      'Aun sin inflación ni riesgo, el dinero disponible hoy puede invertirse y crecer; esperar implica renunciar a ese rendimiento. La inflación y el riesgo refuerzan el efecto, pero la base es el costo de oportunidad.',
      'Even with no inflation or risk, money available today can be invested and grow; waiting means giving up that return. Inflation and risk reinforce the effect, but the core reason is opportunity cost.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'time-value-of-money',
  },
  {
    id: 'N4-002',
    level: 4,
    module: 'L4-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una empresa presta $50,000 a un proveedor mediante un pagaré a 9 meses con interés simple de 12 % anual.',
      'A company lends $50,000 to a supplier with a 9-month promissory note at 12 % annual simple interest.',
    ),
    prompt: t(
      '¿Qué monto total (capital más intereses) cobrará al vencimiento? Responde en pesos.',
      'What total amount (principal plus interest) will it collect at maturity? Answer in pesos.',
    ),
    answer: 54500,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: t(
      'n = 9/12 = 0.75 años. I = 50,000 × 0.12 × 0.75 = $4,500. M = 50,000 + 4,500 = $54,500. Error común: usar n = 9 con tasa anual (I = $54,000), mezclando unidades de tiempo.',
      'n = 9/12 = 0.75 years. I = 50,000 × 0.12 × 0.75 = $4,500. A = 50,000 + 4,500 = $54,500. Common mistake: using n = 9 with an annual rate (I = $54,000), mixing time units.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'simple-interest',
  },
  {
    id: 'N4-003',
    level: 4,
    module: 'L4-01',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Inviertes $80,000 a una tasa de 10 % anual capitalizable mensualmente durante 3 años.',
      'You invest $80,000 at 10 % annual compounded monthly for 3 years.',
    ),
    prompt: t(
      '¿Cuál será el monto al final del plazo? Responde en pesos con 2 decimales.',
      'What will the amount be at the end of the term? Answer in pesos with 2 decimals.',
    ),
    answer: 107854.55,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'Tasa mensual = 0.10/12 = 0.008333; periodos = 12 × 3 = 36. M = 80,000 × (1.008333)^36 = 80,000 × 1.348182 = $107,854.55. Error común: usar 10 % anual compuesto 3 veces (80,000 × 1.1^3 = $106,480), ignorando la capitalización mensual.',
      'Monthly rate = 0.10/12 = 0.008333; periods = 12 × 3 = 36. A = 80,000 × (1.008333)^36 = 80,000 × 1.348182 = $107,854.55. Common mistake: compounding 10 % annually 3 times (80,000 × 1.1^3 = $106,480), ignoring monthly compounding.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'compound-interest',
  },
  {
    id: 'N4-004',
    level: 4,
    module: 'L4-01',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      'Completa la fórmula de la tasa efectiva anual (TEA) a partir de una tasa nominal j capitalizable m veces al año.',
      'Complete the effective annual rate (EAR) formula from a nominal rate j compounded m times a year.',
    ),
    template: 'TEA / EAR = (1 + {{b1}} / {{b2}})^{{b3}} − 1',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N4-004-b1-a', text: t('Tasa efectiva', 'Effective rate') },
          { id: 'N4-004-b1-b', text: t('Tasa nominal anual j', 'Annual nominal rate j') },
          { id: 'N4-004-b1-c', text: t('Tasa de inflación', 'Inflation rate') },
        ],
        correctOptionId: 'N4-004-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N4-004-b2-a', text: t('Número de años', 'Number of years') },
          { id: 'N4-004-b2-b', text: t('12, siempre', '12, always') },
          { id: 'N4-004-b2-c', text: t('m (capitalizaciones por año)', 'm (compounding periods per year)') },
        ],
        correctOptionId: 'N4-004-b2-c',
      },
      {
        id: 'b3',
        options: [
          { id: 'N4-004-b3-a', text: t('m (capitalizaciones por año)', 'm (compounding periods per year)') },
          { id: 'N4-004-b3-b', text: t('1', '1') },
          { id: 'N4-004-b3-c', text: t('1/m', '1/m') },
          { id: 'N4-004-b3-d', text: t('j', 'j') },
        ],
        correctOptionId: 'N4-004-b3-a',
      },
    ],
    explanation: t(
      'TEA = (1 + j/m)^m − 1: la tasa por periodo j/m se capitaliza m veces en un año. Usar siempre 12 solo es correcto para capitalización mensual; con trimestral m = 4.',
      'EAR = (1 + j/m)^m − 1: the periodic rate j/m is compounded m times in a year. Always using 12 is only correct for monthly compounding; for quarterly m = 4.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'effective-rate',
  },
  {
    id: 'N4-005',
    level: 4,
    module: 'L4-01',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      'Una tarjeta de crédito anuncia una tasa de 18 % anual capitalizable mensualmente.',
      'A credit card advertises an 18 % annual rate compounded monthly.',
    ),
    prompt: t(
      '¿Cuál es la tasa efectiva anual? Responde en % con 2 decimales (p. ej. 19.25).',
      'What is the effective annual rate? Answer in % with 2 decimals (e.g. 19.25).',
    ),
    answer: 19.56,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      'Tasa mensual = 18 %/12 = 1.5 %. TEA = 1.015^12 − 1 = 1.195618 − 1 = 19.56 %. Interpretación: el costo real del financiamiento es mayor que el 18 % anunciado porque los intereses se capitalizan cada mes.',
      'Monthly rate = 18 %/12 = 1.5 %. EAR = 1.015^12 − 1 = 1.195618 − 1 = 19.56 %. Interpretation: the true cost of borrowing exceeds the advertised 18 % because interest compounds every month.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'effective-rate',
  },
  {
    id: 'N4-006',
    level: 4,
    module: 'L4-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'Con la misma tasa nominal anual, una capitalización más frecuente (por ejemplo, diaria en lugar de anual) produce una tasa efectiva anual menor.',
      'With the same annual nominal rate, more frequent compounding (e.g., daily instead of annual) produces a lower effective annual rate.',
    ),
    answer: false,
    explanation: t(
      'Falso. Más capitalizaciones significan que los intereses comienzan a generar intereses antes, así que la TEA **aumenta**: 12 % anual da 12 % efectivo con capitalización anual, 12.55 % trimestral y 12.68 % mensual.',
      'False. More compounding means interest starts earning interest sooner, so the EAR **increases**: 12 % annual gives 12 % effective with annual compounding, 12.55 % quarterly and 12.68 % monthly.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'effective-rate',
  },
  {
    id: 'N4-007',
    level: 4,
    module: 'L4-01',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Inviertes $100,000 durante 5 años a 8 % anual.',
      'You invest $100,000 for 5 years at 8 % a year.',
    ),
    prompt: t(
      'Calcula el monto final con interés simple, el monto final con interés compuesto anual y la diferencia entre ambos (en pesos, 2 decimales).',
      'Compute the final amount with simple interest, the final amount with annual compound interest and the difference between them (in pesos, 2 decimals).',
    ),
    fields: [
      { id: 'f1', label: t('Monto con interés simple ($)', 'Amount with simple interest ($)'), answer: 140000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t('Monto con interés compuesto ($)', 'Amount with compound interest ($)'), answer: 146932.81, unit: 'MXN', tolerance: { rel: 0.005 } },
      { id: 'f3', label: t('Diferencia ($)', 'Difference ($)'), answer: 6932.81, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: t(
      'Simple: 100,000 × (1 + 0.08 × 5) = $140,000. Compuesto: 100,000 × 1.08^5 = 100,000 × 1.469328 = $146,932.81. Diferencia = $6,932.81: son los intereses que ganaron los intereses reinvertidos.',
      'Simple: 100,000 × (1 + 0.08 × 5) = $140,000. Compound: 100,000 × 1.08^5 = 100,000 × 1.469328 = $146,932.81. Difference = $6,932.81: the interest earned by reinvested interest.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'compound-interest',
  },

  // ════════════ L4-02 ════════════
  {
    id: 'N4-008',
    level: 4,
    module: 'L4-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Depositas $25,000 en un fondo que rinde 7 % anual compuesto.',
      'You deposit $25,000 in a fund earning 7 % a year compounded.',
    ),
    prompt: t(
      '¿Cuál será el valor futuro en 6 años? Responde en pesos con 2 decimales.',
      'What will the future value be in 6 years? Answer in pesos with 2 decimals.',
    ),
    answer: 37518.26,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'VF = 25,000 × 1.07^6 = 25,000 × 1.500730 = $37,518.26. Error común: interés simple 25,000 × (1 + 0.07 × 6) = $35,500, que omite la capitalización.',
      'FV = 25,000 × 1.07^6 = 25,000 × 1.500730 = $37,518.26. Common mistake: simple interest 25,000 × (1 + 0.07 × 6) = $35,500, which ignores compounding.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'future-value',
  },
  {
    id: 'N4-009',
    level: 4,
    module: 'L4-02',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Recibirás $150,000 dentro de 4 años. Tu rendimiento exigido es 11 % anual.',
      'You will receive $150,000 in 4 years. Your required return is 11 % a year.',
    ),
    prompt: t(
      '¿Cuál es el valor presente de ese cobro? Responde en pesos con 2 decimales.',
      'What is the present value of that receipt? Answer in pesos with 2 decimals.',
    ),
    answer: 98809.65,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'VP = 150,000 / 1.11^4 = 150,000 / 1.518070 = $98,809.65. Error común: multiplicar por el factor (150,000 × 1.518 = $227,710), que calcula un valor futuro en lugar de descontar.',
      'PV = 150,000 / 1.11^4 = 150,000 / 1.518070 = $98,809.65. Common mistake: multiplying by the factor (150,000 × 1.518 = $227,710), which compounds instead of discounting.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'present-value',
  },
  {
    id: 'N4-010',
    level: 4,
    module: 'L4-02',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      'Si todo lo demás permanece igual, ¿qué cambio **aumenta** el valor presente de un cobro futuro fijo?',
      'All else equal, which change **increases** the present value of a fixed future receipt?',
    ),
    options: [
      { id: 'N4-010-a', text: t('Aumentar la tasa de descuento', 'Raising the discount rate') },
      { id: 'N4-010-b', text: t('Retrasar la fecha del cobro', 'Delaying the receipt date') },
      { id: 'N4-010-c', text: t('Considerar que el cobro es más riesgoso', 'Treating the receipt as riskier') },
      { id: 'N4-010-d', text: t('Disminuir la tasa de descuento', 'Lowering the discount rate') },
    ],
    correctOptionId: 'N4-010-d',
    explanation: t(
      'VP = VF / (1 + r)^n. Una r menor reduce el denominador y eleva el VP. Una tasa mayor, un plazo más largo o más riesgo (que eleva la tasa exigida) reducen el VP.',
      'PV = FV / (1 + r)^n. A lower r shrinks the denominator and raises PV. A higher rate, a longer term or more risk (which raises the required rate) all reduce PV.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'present-value',
  },
  {
    id: 'N4-011',
    level: 4,
    module: 'L4-02',
    kind: 'numeric',
    flavor: 'concept',
    prompt: t(
      '¿Cuántos años tarda una inversión en duplicarse a 9 % anual compuesto? Responde en años con 2 decimales.',
      'How many years does an investment take to double at 9 % a year compounded? Answer in years with 2 decimals.',
    ),
    answer: 8.04,
    unit: 'years',
    decimals: 2,
    tolerance: { abs: 0.02 },
    explanation: t(
      '2 = 1.09^n → n = ln 2 / ln 1.09 = 0.693147 / 0.086178 = 8.04 años. La regla del 72 da una buena aproximación: 72 / 9 = 8 años. Error común: usar interés simple (100 / 9 = 11.1 años).',
      '2 = 1.09^n → n = ln 2 / ln 1.09 = 0.693147 / 0.086178 = 8.04 years. The rule of 72 gives a good approximation: 72 / 9 = 8 years. Common mistake: using simple interest (100 / 9 = 11.1 years).',
    ),
    difficulty: 2,
    points: 15,
    competency: 'future-value',
  },
  {
    id: 'N4-012',
    level: 4,
    module: 'L4-02',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      'Una inversión de $40,000 se convirtió en $60,000 después de 5 años.',
      'An investment of $40,000 grew to $60,000 after 5 years.',
    ),
    prompt: t(
      '¿Cuál fue su rendimiento anual compuesto? Responde en % con 2 decimales.',
      'What was its compound annual return? Answer in % with 2 decimals.',
    ),
    answer: 8.45,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      'r = (60,000 / 40,000)^(1/5) − 1 = 1.5^0.2 − 1 = 1.084472 − 1 = 8.45 %. Error común: dividir el rendimiento total entre los años (50 % / 5 = 10 %), lo que ignora la capitalización y sobreestima el rendimiento anual.',
      'r = (60,000 / 40,000)^(1/5) − 1 = 1.5^0.2 − 1 = 1.084472 − 1 = 8.45 %. Common mistake: dividing the total return by the years (50 % / 5 = 10 %), which ignores compounding and overstates the annual return.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'future-value',
  },
  {
    id: 'N4-013',
    level: 4,
    module: 'L4-02',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Un contrato pagará $20,000 al final del año 1, $30,000 al final del año 2 y $50,000 al final del año 3. La tasa de descuento es 10 % anual.',
      'A contract will pay $20,000 at the end of year 1, $30,000 at the end of year 2 and $50,000 at the end of year 3. The discount rate is 10 % a year.',
    ),
    prompt: t(
      'Calcula el valor presente de cada flujo y el valor presente total del contrato (en pesos, 2 decimales).',
      'Compute the present value of each flow and the contract\'s total present value (in pesos, 2 decimals).',
    ),
    fields: [
      { id: 'f1', label: t('VP del flujo del año 1 ($)', 'PV of year-1 flow ($)'), answer: 18181.82, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: t('VP del flujo del año 2 ($)', 'PV of year-2 flow ($)'), answer: 24793.39, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f3', label: t('VP del flujo del año 3 ($)', 'PV of year-3 flow ($)'), answer: 37565.74, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f4', label: t('VP total ($)', 'Total PV ($)'), answer: 80540.95, unit: 'MXN', tolerance: { abs: 2 } },
    ],
    explanation: t(
      '20,000 / 1.1 = $18,181.82; 30,000 / 1.1^2 = 30,000 / 1.21 = $24,793.39; 50,000 / 1.1^3 = 50,000 / 1.331 = $37,565.74. Total = $80,540.95. Error común: sumar los flujos ($100,000) y descontar el total a 3 años ($75,131.48), lo que trata todo como si se cobrara al final.',
      '20,000 / 1.1 = $18,181.82; 30,000 / 1.1^2 = 30,000 / 1.21 = $24,793.39; 50,000 / 1.1^3 = 50,000 / 1.331 = $37,565.74. Total = $80,540.95. Common mistake: adding the flows ($100,000) and discounting the total 3 years ($75,131.48), which treats everything as received at the end.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'present-value',
  },
  {
    id: 'N4-014',
    level: 4,
    module: 'L4-02',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      'Te ofrecen $70,000 en efectivo hoy o $100,000 dentro de 5 años. Con una tasa de descuento de 8 % anual, el valor presente de los $100,000 es mayor que $70,000, así que conviene esperar.',
      'You are offered $70,000 in cash today or $100,000 in 5 years. At an 8 % annual discount rate, the present value of the $100,000 is greater than $70,000, so waiting is better.',
    ),
    answer: false,
    explanation: t(
      'Falso. VP = 100,000 / 1.08^5 = 100,000 / 1.469328 = $68,058.32, menor que $70,000. Conviene tomar los $70,000 hoy: invertidos al 8 % se convertirían en 70,000 × 1.469328 = $102,852.96 en 5 años.',
      'False. PV = 100,000 / 1.08^5 = 100,000 / 1.469328 = $68,058.32, less than $70,000. Taking $70,000 today is better: invested at 8 % it would grow to 70,000 × 1.469328 = $102,852.96 in 5 years.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'present-value',
  },

  // ════════════ L4-03 ════════════
  {
    id: 'N4-015',
    level: 4,
    module: 'L4-03',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      '¿Cuál es la diferencia entre una anualidad anticipada y una vencida con los mismos pagos, plazo y tasa?',
      'What is the difference between an annuity due and an ordinary annuity with the same payments, term and rate?',
    ),
    options: [
      {
        id: 'N4-015-a',
        text: t(
          'La anticipada tiene pagos al inicio de cada periodo y su valor presente es el de la vencida × (1 + r)',
          'The annuity due has payments at the start of each period and its present value is the ordinary value × (1 + r)',
        ),
      },
      {
        id: 'N4-015-b',
        text: t(
          'La anticipada tiene pagos al final de cada periodo y vale menos',
          'The annuity due has payments at the end of each period and is worth less',
        ),
      },
      {
        id: 'N4-015-c',
        text: t(
          'Ambas valen lo mismo porque la suma de pagos es igual',
          'Both are worth the same because the payments add up to the same total',
        ),
      },
      {
        id: 'N4-015-d',
        text: t(
          'La anticipada tiene un pago adicional al final del plazo',
          'The annuity due has an extra payment at the end of the term',
        ),
      },
    ],
    correctOptionId: 'N4-015-a',
    explanation: t(
      'En la anticipada cada pago ocurre un periodo antes, así que se descuenta un periodo menos: VP anticipada = VP vencida × (1 + r) (lo mismo para el VF). El número de pagos es el mismo; lo que cambia es su fecha.',
      'In an annuity due each payment occurs one period earlier, so it is discounted one period less: PV due = PV ordinary × (1 + r) (same for FV). The number of payments is the same; only their timing changes.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'annuities',
  },
  {
    id: 'N4-016',
    level: 4,
    module: 'L4-03',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      'Completa la fórmula del valor presente de una anualidad vencida.',
      'Complete the present value formula for an ordinary annuity.',
    ),
    template: 'VP / PV = {{b1}} × [1 − (1 + r)^{{b2}}] / {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N4-016-b1-a', text: t('VF (valor futuro)', 'FV (future value)') },
          { id: 'N4-016-b1-b', text: t('n (número de pagos)', 'n (number of payments)') },
          { id: 'N4-016-b1-c', text: t('PMT (pago periódico)', 'PMT (periodic payment)') },
        ],
        correctOptionId: 'N4-016-b1-c',
      },
      {
        id: 'b2',
        options: [
          { id: 'N4-016-b2-a', text: t('n', 'n') },
          { id: 'N4-016-b2-b', text: t('−n', '−n') },
          { id: 'N4-016-b2-c', text: t('n − 1', 'n − 1') },
        ],
        correctOptionId: 'N4-016-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'N4-016-b3-a', text: t('r', 'r') },
          { id: 'N4-016-b3-b', text: t('n', 'n') },
          { id: 'N4-016-b3-c', text: t('(1 + r)', '(1 + r)') },
        ],
        correctOptionId: 'N4-016-b3-a',
      },
    ],
    explanation: t(
      'VP = PMT × [1 − (1 + r)^−n] / r. El exponente negativo descuenta; con exponente positivo [(1 + r)^n − 1] / r se obtiene el factor de valor futuro, que es otra fórmula.',
      'PV = PMT × [1 − (1 + r)^−n] / r. The negative exponent discounts; with a positive exponent [(1 + r)^n − 1] / r you get the future value factor, which is a different formula.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'annuities',
  },
  {
    id: 'N4-017',
    level: 4,
    module: 'L4-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Un contrato de arrendamiento te pagará $12,000 al final de cada año durante 8 años. La tasa de descuento es 9 % anual.',
      'A lease contract will pay you $12,000 at the end of each year for 8 years. The discount rate is 9 % a year.',
    ),
    prompt: t(
      '¿Cuál es el valor presente de los cobros? Responde en pesos con 2 decimales.',
      'What is the present value of the receipts? Answer in pesos with 2 decimals.',
    ),
    answer: 66417.83,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'Factor = [1 − 1.09^−8] / 0.09 = 5.534819. VP = 12,000 × 5.534819 = $66,417.83. Error común: sumar los pagos sin descontar (12,000 × 8 = $96,000).',
      'Factor = [1 − 1.09^−8] / 0.09 = 5.534819. PV = 12,000 × 5.534819 = $66,417.83. Common mistake: adding the payments without discounting (12,000 × 8 = $96,000).',
    ),
    difficulty: 2,
    points: 15,
    competency: 'annuities',
  },
  {
    id: 'N4-018',
    level: 4,
    module: 'L4-03',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'En un préstamo con pagos fijos (sistema francés), la porción de intereses de cada pago disminuye con el tiempo y la porción de abono a capital aumenta.',
      'In a fixed-payment loan (French system), the interest portion of each payment decreases over time and the principal portion increases.',
    ),
    answer: true,
    explanation: t(
      'Verdadero. El interés se calcula sobre el saldo insoluto, que baja con cada pago; como el pago es fijo, lo que deja de ir a intereses se destina a capital. Ejemplo: en un crédito de $60,000 al 12 % a 3 años, el interés pasa de $7,200 a $5,066.29 y a $2,676.53.',
      'True. Interest is computed on the outstanding balance, which falls with each payment; since the payment is fixed, what no longer goes to interest goes to principal. Example: on a $60,000 loan at 12 % over 3 years, interest goes from $7,200 to $5,066.29 to $2,676.53.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'loan-amortization',
  },
  {
    id: 'N4-019',
    level: 4,
    module: 'L4-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Para el enganche de una nave industrial, una empresa deposita $5,000 al **inicio** de cada mes durante 2 años en una cuenta que paga 12 % anual capitalizable mensualmente.',
      'To save for a down payment on a warehouse, a company deposits $5,000 at the **start** of each month for 2 years in an account paying 12 % annual compounded monthly.',
    ),
    prompt: t(
      '¿Cuánto habrá acumulado al final de los 2 años? Responde en pesos con 2 decimales.',
      'How much will it have accumulated at the end of the 2 years? Answer in pesos with 2 decimals.',
    ),
    answer: 136216.0,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'r = 1 % mensual, n = 24. VF vencida = 5,000 × [(1.01^24 − 1) / 0.01] = 5,000 × 26.973465 = $134,867.32. Como es anticipada: × 1.01 = $136,216.00. Error común: omitir el factor (1 + r) y responder $134,867.32.',
      'r = 1 % per month, n = 24. Ordinary FV = 5,000 × [(1.01^24 − 1) / 0.01] = 5,000 × 26.973465 = $134,867.32. Since it is an annuity due: × 1.01 = $136,216.00. Common mistake: omitting the (1 + r) factor and answering $134,867.32.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'annuities',
  },
  {
    id: 'N4-020',
    level: 4,
    module: 'L4-03',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Una pyme compra una camioneta con un crédito de $350,000 a 36 meses, con tasa de 15 % anual capitalizable mensualmente y pagos mensuales iguales al final de cada mes.',
      'A small business buys a van with a $350,000 loan over 36 months, at 15 % annual compounded monthly, with equal monthly payments at the end of each month.',
    ),
    prompt: t(
      '¿Cuál es el pago mensual? Responde en pesos con 2 decimales.',
      'What is the monthly payment? Answer in pesos with 2 decimals.',
    ),
    answer: 12132.86,
    unit: 'MXN',
    decimals: 2,
    tolerance: { rel: 0.005 },
    explanation: t(
      'r = 15 %/12 = 1.25 %; n = 36. PMT = 350,000 × 0.0125 / [1 − 1.0125^−36] = 4,375 / 0.360591 = $12,132.86. En total se pagan 36 × 12,132.86 = $436,783.14, de los cuales $86,783.14 son intereses. Error común: dividir 350,000 / 36 = $9,722.22, que ignora los intereses.',
      'r = 15 %/12 = 1.25 %; n = 36. PMT = 350,000 × 0.0125 / [1 − 1.0125^−36] = 4,375 / 0.360591 = $12,132.86. In total 36 × 12,132.86 = $436,783.14 is paid, of which $86,783.14 is interest. Common mistake: dividing 350,000 / 36 = $9,722.22, which ignores interest.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'loan-amortization',
  },
  {
    id: 'N4-021',
    level: 4,
    module: 'L4-03',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Préstamo de $100,000 a 3 años, tasa de 10 % anual, pagos anuales iguales al final de cada año.',
      'A $100,000 loan over 3 years at 10 % a year, with equal annual payments at the end of each year.',
    ),
    prompt: t(
      'Calcula el pago anual y la primera fila de la tabla de amortización: interés del año 1, abono a capital del año 1 y saldo al final del año 1 (en pesos, 2 decimales).',
      'Compute the annual payment and the first row of the amortization schedule: year-1 interest, year-1 principal and balance at the end of year 1 (in pesos, 2 decimals).',
    ),
    fields: [
      { id: 'f1', label: t('Pago anual ($)', 'Annual payment ($)'), answer: 40211.48, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f2', label: t('Interés año 1 ($)', 'Year-1 interest ($)'), answer: 10000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t('Abono a capital año 1 ($)', 'Year-1 principal ($)'), answer: 30211.48, unit: 'MXN', tolerance: { abs: 1 } },
      { id: 'f4', label: t('Saldo al final del año 1 ($)', 'Balance at end of year 1 ($)'), answer: 69788.52, unit: 'MXN', tolerance: { abs: 1 } },
    ],
    explanation: t(
      'PMT = 100,000 × 0.10 / [1 − 1.1^−3] = 10,000 / 0.248685 = $40,211.48. Interés año 1 = 100,000 × 10 % = $10,000. Capital = 40,211.48 − 10,000 = $30,211.48. Saldo = 100,000 − 30,211.48 = $69,788.52. Error común: restar el pago completo al saldo, olvidando que una parte son intereses.',
      'PMT = 100,000 × 0.10 / [1 − 1.1^−3] = 10,000 / 0.248685 = $40,211.48. Year-1 interest = 100,000 × 10 % = $10,000. Principal = 40,211.48 − 10,000 = $30,211.48. Balance = 100,000 − 30,211.48 = $69,788.52. Common mistake: subtracting the whole payment from the balance, forgetting part of it is interest.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'loan-amortization',
  },

  // ════════════ L4-04 ════════════
  {
    id: 'N4-022',
    level: 4,
    module: 'L4-04',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      'Una empresa evalúa abrir una nueva planta en un terreno que ya posee. Selecciona todos los conceptos que deben incluirse en los flujos de efectivo del proyecto.',
      'A company is evaluating opening a new plant on land it already owns. Select all the items that should be included in the project\'s cash flows.',
    ),
    options: [
      {
        id: 'N4-022-a',
        text: t('El estudio de mercado pagado el año pasado', 'The market study paid for last year'),
      },
      {
        id: 'N4-022-b',
        text: t(
          'El precio al que podría venderse hoy el terreno (costo de oportunidad)',
          'The price at which the land could be sold today (opportunity cost)',
        ),
      },
      {
        id: 'N4-022-c',
        text: t('La inversión adicional en inventarios y cuentas por cobrar', 'The additional investment in inventory and receivables'),
      },
      {
        id: 'N4-022-d',
        text: t('Los intereses del préstamo que financiará la planta', 'Interest on the loan that will finance the plant'),
      },
      {
        id: 'N4-022-e',
        text: t('El ahorro de impuestos por la depreciación de la planta', 'Tax savings from depreciating the plant'),
      },
    ],
    correctOptionIds: ['N4-022-b', 'N4-022-c', 'N4-022-e'],
    explanation: t(
      'Incluye: costo de oportunidad del terreno, inversión incremental en capital de trabajo y escudo fiscal de la depreciación (todos cambian el efectivo por hacer el proyecto). Excluye: el estudio (costo hundido) y los intereses, porque el costo del financiamiento ya está en la tasa de descuento; restarlos sería contarlo dos veces.',
      'Include: the land\'s opportunity cost, incremental working capital investment and the depreciation tax shield (all change cash because of the project). Exclude: the study (sunk cost) and interest, because financing cost is already in the discount rate; subtracting it would double count.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'cash-flows',
  },
  {
    id: 'N4-023',
    level: 4,
    module: 'L4-04',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Proyecto A: inversión inicial $500,000; flujos al final de los años 1 a 4: $150,000, $180,000, $200,000 y $170,000. Costo de capital: 12 % anual.',
      'Project A: initial investment $500,000; flows at the end of years 1 to 4: $150,000, $180,000, $200,000 and $170,000. Cost of capital: 12 % a year.',
    ),
    prompt: t(
      'Calcula el VPN del proyecto A. Responde en pesos con 2 decimales.',
      'Compute Project A\'s NPV. Answer in pesos with 2 decimals.',
    ),
    answer: 27817.59,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 5 },
    explanation: t(
      'VP de flujos: 150,000/1.12 = 133,928.57; 180,000/1.12^2 = 143,494.90; 200,000/1.12^3 = 142,356.05; 170,000/1.12^4 = 108,038.07. Suma = 527,817.59. VPN = 527,817.59 − 500,000 = $27,817.59 > 0: el proyecto crea valor. Error común: restar la inversión sin descontar los flujos (700,000 − 500,000 = $200,000).',
      'PV of flows: 150,000/1.12 = 133,928.57; 180,000/1.12^2 = 143,494.90; 200,000/1.12^3 = 142,356.05; 170,000/1.12^4 = 108,038.07. Sum = 527,817.59. NPV = 527,817.59 − 500,000 = $27,817.59 > 0: the project creates value. Common mistake: subtracting the investment without discounting the flows (700,000 − 500,000 = $200,000).',
    ),
    difficulty: 2,
    points: 15,
    competency: 'npv',
  },
  {
    id: 'N4-024',
    level: 4,
    module: 'L4-04',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Proyecto A: inversión inicial $500,000; flujos al final de los años 1 a 4: $150,000, $180,000, $200,000 y $170,000. Costo de capital: 12 % anual.',
      'Project A: initial investment $500,000; flows at the end of years 1 to 4: $150,000, $180,000, $200,000 and $170,000. Cost of capital: 12 % a year.',
    ),
    prompt: t(
      'Calcula el periodo de recuperación simple y el descontado, en años con 2 decimales (suponiendo flujos uniformes dentro de cada año).',
      'Compute the simple and discounted payback periods, in years with 2 decimals (assuming flows are spread evenly within each year).',
    ),
    fields: [
      { id: 'f1', label: t('Payback simple (años)', 'Simple payback (years)'), answer: 2.85, unit: 'years', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t('Payback descontado (años)', 'Discounted payback (years)'), answer: 3.74, unit: 'years', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      'Simple: acumulado año 2 = 330,000; faltan 170,000 → 2 + 170,000/200,000 = 2.85 años. Descontado: flujos descontados 133,928.57; 143,494.90; 142,356.05; 108,038.07. Acumulado año 3 = 419,779.52; faltan 80,220.48 → 3 + 80,220.48/108,038.07 = 3.74 años. El descontado siempre es mayor; como se recupera dentro de la vida del proyecto, el VPN es positivo.',
      'Simple: cumulative at year 2 = 330,000; 170,000 remains → 2 + 170,000/200,000 = 2.85 years. Discounted: discounted flows 133,928.57; 143,494.90; 142,356.05; 108,038.07. Cumulative at year 3 = 419,779.52; 80,220.48 remains → 3 + 80,220.48/108,038.07 = 3.74 years. Discounted payback is always longer; since it is recovered within the project\'s life, NPV is positive.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'payback',
  },
  {
    id: 'N4-025',
    level: 4,
    module: 'L4-04',
    kind: 'numeric',
    flavor: 'interpret',
    context: t(
      'Proyecto A: inversión inicial $500,000; flujos al final de los años 1 a 4: $150,000, $180,000, $200,000 y $170,000. Costo de capital: 12 % anual.',
      'Project A: initial investment $500,000; flows at the end of years 1 to 4: $150,000, $180,000, $200,000 and $170,000. Cost of capital: 12 % a year.',
    ),
    prompt: t(
      'Calcula la TIR del proyecto A (usa hoja de cálculo o prueba y error). Responde en % con 2 decimales.',
      'Compute Project A\'s IRR (use a spreadsheet or trial and error). Answer in % with 2 decimals.',
    ),
    answer: 14.54,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: t(
      'La TIR es la tasa que hace VPN = 0. A 12 % el VPN es +$27,817.59 y a 15 % es negativo (≈ −$4,758), así que la TIR está entre ambas; iterando se obtiene ≈ 14.54 %. Como 14.54 % > 12 %, se acepta, lo cual es congruente con el VPN positivo.',
      'IRR is the rate that makes NPV = 0. At 12 % NPV is +$27,817.59 and at 15 % it is negative (≈ −$4,758), so the IRR lies between them; iterating gives ≈ 14.54 %. Since 14.54 % > 12 %, accept, which is consistent with the positive NPV.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'irr',
  },
  {
    id: 'N4-026',
    level: 4,
    module: 'L4-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'Un proyecto con flujos −$100, +$230 y −$132 (años 0, 1 y 2) tiene más de una TIR.',
      'A project with flows −$100, +$230 and −$132 (years 0, 1 and 2) has more than one IRR.',
    ),
    answer: true,
    explanation: t(
      'Verdadero. Los flujos cambian de signo dos veces (no convencionales). Resolviendo 100x^2 − 230x + 132 = 0 con x = 1 + r se obtiene x = 1.10 y 1.20: TIR de 10 % y 20 %. En estos casos la regla de la TIR es ambigua (también puede no existir ninguna TIR real) y se decide con el VPN al costo de capital.',
      'True. The flows change sign twice (non-conventional). Solving 100x^2 − 230x + 132 = 0 with x = 1 + r gives x = 1.10 and 1.20: IRRs of 10 % and 20 %. In such cases the IRR rule is ambiguous (there may also be no real IRR at all) and the decision is made with NPV at the cost of capital.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'irr',
  },
  {
    id: 'N4-027',
    level: 4,
    module: 'L4-04',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      'Una empresa debe elegir entre dos proyectos **mutuamente excluyentes**, con costo de capital de 10 %. Proyecto X: VPN $85,000, TIR 18 %. Proyecto Y: VPN $60,000, TIR 24 %.',
      'A company must choose between two **mutually exclusive** projects, with a 10 % cost of capital. Project X: NPV $85,000, IRR 18 %. Project Y: NPV $60,000, IRR 24 %.',
    ),
    prompt: t('¿Qué proyecto debe elegir y por qué?', 'Which project should it choose and why?'),
    options: [
      {
        id: 'N4-027-a',
        text: t('Y, porque tiene la TIR más alta', 'Y, because it has the higher IRR'),
      },
      {
        id: 'N4-027-b',
        text: t('Ambos, porque los dos superan el costo de capital', 'Both, because both exceed the cost of capital'),
      },
      {
        id: 'N4-027-c',
        text: t(
          'X, porque genera mayor VPN, es decir, más riqueza para los accionistas',
          'X, because it generates higher NPV, i.e. more wealth for shareholders',
        ),
      },
      {
        id: 'N4-027-d',
        text: t('Ninguno, porque los criterios se contradicen', 'Neither, because the criteria conflict'),
      },
    ],
    correctOptionId: 'N4-027-c',
    explanation: t(
      'Con proyectos excluyentes solo puede elegirse uno, y el objetivo es maximizar el valor: se elige el mayor VPN (X). La TIR es un porcentaje que no considera la escala ni el calendario de los flujos, por eso puede ordenar distinto. "Ambos" ignora que son excluyentes.',
      'With mutually exclusive projects only one can be chosen, and the goal is to maximise value: choose the higher NPV (X). IRR is a percentage that ignores the scale and timing of flows, so it can rank differently. "Both" ignores that they are mutually exclusive.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'npv',
  },

  // ════════════ L4-05 ════════════
  {
    id: 'N4-028',
    level: 4,
    module: 'L4-05',
    kind: 'mcq',
    flavor: 'interpret',
    prompt: t(
      'La acción de una empresa tiene una beta de 1.2. ¿Cuál es la interpretación correcta?',
      'A company\'s stock has a beta of 1.2. What is the correct interpretation?',
    ),
    options: [
      {
        id: 'N4-028-a',
        text: t('Su rendimiento esperado es 1.2 %', 'Its expected return is 1.2 %'),
      },
      {
        id: 'N4-028-b',
        text: t(
          'Tiende a moverse 20 % más que el mercado: tiene más riesgo sistemático que el promedio',
          'It tends to move 20 % more than the market: it has more systematic risk than average',
        ),
      },
      {
        id: 'N4-028-c',
        text: t(
          'Su riesgo total es 20 % menor que el del mercado',
          'Its total risk is 20 % lower than the market\'s',
        ),
      },
      {
        id: 'N4-028-d',
        text: t(
          'Su riesgo puede eliminarse por completo diversificando',
          'Its risk can be fully eliminated by diversifying',
        ),
      },
    ],
    correctOptionId: 'N4-028-b',
    explanation: t(
      'β mide la sensibilidad al mercado (riesgo sistemático): si el mercado sube o baja 10 %, la acción tiende a moverse 12 %. Ese riesgo no se diversifica, por eso el CAPM le exige un rendimiento mayor que al mercado. β no es un rendimiento ni mide el riesgo total.',
      'β measures sensitivity to the market (systematic risk): if the market moves 10 %, the stock tends to move 12 %. That risk cannot be diversified away, so CAPM requires a higher return than the market. β is not a return and does not measure total risk.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'capm',
  },
  {
    id: 'N4-029',
    level: 4,
    module: 'L4-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'Tasa libre de riesgo (bono gubernamental): 9.5 %. Rendimiento esperado del mercado: 15 %. Beta de la empresa: 1.2.',
      'Risk-free rate (government bond): 9.5 %. Expected market return: 15 %. Company beta: 1.2.',
    ),
    prompt: t(
      'Calcula el costo del capital propio con CAPM. Responde en % con 2 decimales.',
      'Compute the cost of equity with CAPM. Answer in % with 2 decimals.',
    ),
    answer: 16.1,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      'Re = 9.5 % + 1.2 × (15 % − 9.5 %) = 9.5 % + 1.2 × 5.5 % = 9.5 % + 6.6 % = 16.10 %. Error común: 9.5 % + 1.2 × 15 % = 27.5 %, que multiplica la beta por el rendimiento del mercado en lugar de por la prima de riesgo.',
      'Re = 9.5 % + 1.2 × (15 % − 9.5 %) = 9.5 % + 1.2 × 5.5 % = 9.5 % + 6.6 % = 16.10 %. Common mistake: 9.5 % + 1.2 × 15 % = 27.5 %, multiplying beta by the market return instead of the risk premium.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'capm',
  },
  {
    id: 'N4-030',
    level: 4,
    module: 'L4-05',
    kind: 'formula',
    flavor: 'concept',
    prompt: t('Completa la fórmula del WACC.', 'Complete the WACC formula.'),
    template: 'WACC = E/V × {{b1}} + D/V × {{b2}} × (1 − {{b3}})',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'N4-030-b1-a', text: t('Rd (costo de la deuda)', 'Rd (cost of debt)') },
          { id: 'N4-030-b1-b', text: t('Re (costo del capital propio)', 'Re (cost of equity)') },
          { id: 'N4-030-b1-c', text: t('rf (tasa libre de riesgo)', 'rf (risk-free rate)') },
        ],
        correctOptionId: 'N4-030-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'N4-030-b2-a', text: t('Rd (costo de la deuda)', 'Rd (cost of debt)') },
          { id: 'N4-030-b2-b', text: t('Re (costo del capital propio)', 'Re (cost of equity)') },
          { id: 'N4-030-b2-c', text: t('β (beta)', 'β (beta)') },
        ],
        correctOptionId: 'N4-030-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'N4-030-b3-a', text: t('Tasa de inflación', 'Inflation rate') },
          { id: 'N4-030-b3-b', text: t('Prima de riesgo de mercado', 'Market risk premium') },
          { id: 'N4-030-b3-c', text: t('T (tasa de impuesto a la utilidad)', 'T (income tax rate)') },
        ],
        correctOptionId: 'N4-030-b3-c',
      },
    ],
    explanation: t(
      'WACC = E/V·Re + D/V·Rd·(1 − T). Solo la deuda se multiplica por (1 − T) porque los intereses son deducibles; los dividendos no lo son, así que Re no se ajusta por impuestos.',
      'WACC = E/V·Re + D/V·Rd·(1 − T). Only debt is multiplied by (1 − T) because interest is deductible; dividends are not, so Re is not tax-adjusted.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'wacc',
  },
  {
    id: 'N4-031',
    level: 4,
    module: 'L4-05',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      'Clasifica cada evento como riesgo sistemático (de mercado) o no sistemático (específico de la empresa).',
      'Classify each event as systematic (market) risk or unsystematic (company-specific) risk.',
    ),
    categories: [
      { id: 'N4-031-c1', label: t('Riesgo sistemático', 'Systematic risk') },
      { id: 'N4-031-c2', label: t('Riesgo no sistemático', 'Unsystematic risk') },
    ],
    items: [
      { id: 'N4-031-i1', label: t('El banco central sube la tasa de interés de referencia', 'The central bank raises the policy interest rate'), correctCategoryId: 'N4-031-c1' },
      { id: 'N4-031-i2', label: t('Huelga en la planta principal de la empresa', 'Strike at the company\'s main plant'), correctCategoryId: 'N4-031-c2' },
      { id: 'N4-031-i3', label: t('Recesión económica generalizada', 'Economy-wide recession'), correctCategoryId: 'N4-031-c1' },
      { id: 'N4-031-i4', label: t('Retiro del mercado de un producto defectuoso de la empresa', 'Recall of a defective company product'), correctCategoryId: 'N4-031-c2' },
      { id: 'N4-031-i5', label: t('Inflación mayor a la esperada en todo el país', 'Higher-than-expected inflation nationwide'), correctCategoryId: 'N4-031-c1' },
      { id: 'N4-031-i6', label: t('Renuncia inesperada del director general', 'Unexpected resignation of the CEO'), correctCategoryId: 'N4-031-c2' },
    ],
    explanation: t(
      'Tasas de interés, recesión e inflación afectan a casi todas las empresas: son sistemáticos, no se diversifican y los mide la beta. Huelga, retiro de producto y renuncia del director son propios de una empresa: se diluyen en un portafolio diversificado y por eso el mercado no los premia.',
      'Interest rates, recession and inflation affect almost all firms: they are systematic, cannot be diversified and are measured by beta. A strike, a product recall and the CEO\'s resignation are firm-specific: they wash out in a diversified portfolio, which is why the market does not reward them.',
    ),
    difficulty: 1,
    points: 10,
    competency: 'risk',
  },
  {
    id: 'N4-032',
    level: 4,
    module: 'L4-05',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      'Según la teoría del trade-off, la deuda agrega valor por el escudo fiscal de los intereses, pero un endeudamiento excesivo aumenta los costos de dificultades financieras, por lo que existe un nivel de deuda óptimo.',
      'According to trade-off theory, debt adds value through the interest tax shield, but excessive borrowing raises financial distress costs, so there is an optimal debt level.',
    ),
    answer: true,
    explanation: t(
      'Verdadero. Al principio el escudo fiscal domina y el valor sube; a partir de cierto nivel, el riesgo de quiebra y sus costos (directos e indirectos) crecen más rápido. Además, más deuda eleva el Re, así que el WACC no baja indefinidamente.',
      'True. At first the tax shield dominates and value rises; beyond some level, bankruptcy risk and its costs (direct and indirect) grow faster. Moreover, more debt raises Re, so WACC does not fall indefinitely.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'capital-structure',
  },
  {
    id: 'N4-033',
    level: 4,
    module: 'L4-05',
    kind: 'fields',
    flavor: 'case',
    context: t(
      'Valor de mercado del capital $6,000,000 y de la deuda $4,000,000. Costo del capital propio (CAPM) 16.1 %; costo de la deuda antes de impuestos 11 %; tasa de ISR 30 %.',
      'Market value of equity $6,000,000 and of debt $4,000,000. Cost of equity (CAPM) 16.1 %; pre-tax cost of debt 11 %; income tax rate 30 %.',
    ),
    prompt: t(
      'Calcula el peso de la deuda D/V, el costo de la deuda después de impuestos y el WACC (todo en %, 2 decimales).',
      'Compute the debt weight D/V, the after-tax cost of debt and the WACC (all in %, 2 decimals).',
    ),
    fields: [
      { id: 'f1', label: t('D/V (%)', 'D/V (%)'), answer: 40, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f2', label: t('Rd después de impuestos (%)', 'After-tax Rd (%)'), answer: 7.7, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: t('WACC (%)', 'WACC (%)'), answer: 12.74, unit: '%', tolerance: { abs: 0.01 } },
    ],
    explanation: t(
      'V = 6,000,000 + 4,000,000 = $10,000,000 → E/V = 60 %, D/V = 40 %. Rd neto = 11 % × (1 − 0.30) = 7.70 %. WACC = 0.60 × 16.1 % + 0.40 × 7.7 % = 9.66 % + 3.08 % = 12.74 %. Error común: usar Rd antes de impuestos (WACC = 14.06 %) o valores en libros en lugar de valores de mercado.',
      'V = 6,000,000 + 4,000,000 = $10,000,000 → E/V = 60 %, D/V = 40 %. After-tax Rd = 11 % × (1 − 0.30) = 7.70 %. WACC = 0.60 × 16.1 % + 0.40 × 7.7 % = 9.66 % + 3.08 % = 12.74 %. Common mistake: using pre-tax Rd (WACC = 14.06 %) or book values instead of market values.',
    ),
    difficulty: 2,
    points: 15,
    competency: 'wacc',
  },
  {
    id: 'N4-034',
    level: 4,
    module: 'L4-05',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      'La empresa del ejercicio anterior (WACC 12.74 %) evalúa ampliar una línea de producción con riesgo similar al de su negocio actual. Inversión inicial $1,200,000; flujos de efectivo libres de $330,000 al final de cada año durante 5 años; sin valor de rescate.',
      'The company from the previous exercise (WACC 12.74 %) is evaluating expanding a production line with risk similar to its current business. Initial investment $1,200,000; free cash flows of $330,000 at the end of each year for 5 years; no salvage value.',
    ),
    prompt: t(
      'Calcula el VPN del proyecto descontando al WACC. Responde en pesos con 2 decimales (negativo si destruye valor).',
      'Compute the project\'s NPV discounting at the WACC. Answer in pesos with 2 decimals (negative if it destroys value).',
    ),
    answer: -31912.44,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 50 },
    explanation: t(
      'Factor de anualidad = [1 − 1.1274^−5] / 0.1274 = 3.539659. VP flujos = 330,000 × 3.539659 = $1,168,087.56. VPN = 1,168,087.56 − 1,200,000 = −$31,912.44. Se rechaza: su TIR (≈ 11.65 %) es menor que el WACC. Aunque recupera la inversión en payback simple (3.64 años), no alcanza a pagar el costo de capital.',
      'Annuity factor = [1 − 1.1274^−5] / 0.1274 = 3.539659. PV of flows = 330,000 × 3.539659 = $1,168,087.56. NPV = 1,168,087.56 − 1,200,000 = −$31,912.44. Reject: its IRR (≈ 11.65 %) is below the WACC. Although it pays back on a simple basis (3.64 years), it does not cover the cost of capital.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'project-evaluation',
  },
  {
    id: 'N4-035',
    level: 4,
    module: 'L4-05',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      'Una empresa de alimentos con WACC de 11 % evalúa entrar al negocio de videojuegos, cuyas empresas comparables tienen betas mucho más altas que la suya. El proyecto tiene una TIR de 13 %.',
      'A food company with an 11 % WACC is evaluating entering the video-game business, whose comparable firms have much higher betas than its own. The project has a 13 % IRR.',
    ),
    prompt: t('¿Cuál es el enfoque correcto para decidir?', 'What is the correct approach to decide?'),
    options: [
      {
        id: 'N4-035-a',
        text: t('Aceptar, porque la TIR de 13 % supera el WACC de 11 %', 'Accept, because the 13 % IRR exceeds the 11 % WACC'),
      },
      {
        id: 'N4-035-b',
        text: t('Rechazar, porque toda diversificación destruye valor', 'Reject, because all diversification destroys value'),
      },
      {
        id: 'N4-035-c',
        text: t('Descontar los flujos a la tasa libre de riesgo, ya que la empresa es sólida', 'Discount the flows at the risk-free rate, since the company is solid'),
      },
      {
        id: 'N4-035-d',
        text: t(
          'Estimar una tasa ajustada al riesgo del proyecto (con la beta de comparables de videojuegos) y aceptar solo si la TIR la supera',
          'Estimate a project risk-adjusted rate (using the beta of video-game comparables) and accept only if the IRR exceeds it',
        ),
      },
    ],
    correctOptionId: 'N4-035-d',
    explanation: t(
      'El WACC de 11 % refleja el riesgo del negocio de alimentos. Un proyecto en otra industria más riesgosa debe evaluarse con su propio costo de capital (método pure play: beta de comparables → CAPM → WACC del proyecto). Si esa tasa fuera, por ejemplo, 15 %, la TIR de 13 % no alcanzaría y el proyecto destruiría valor. Aceptar con el WACC de la empresa es el error típico.',
      'The 11 % WACC reflects the food business risk. A project in a riskier industry must be evaluated with its own cost of capital (pure-play method: comparables\' beta → CAPM → project WACC). If that rate were, say, 15 %, the 13 % IRR would fall short and the project would destroy value. Accepting at the firm\'s WACC is the classic mistake.',
    ),
    difficulty: 3,
    points: 20,
    competency: 'project-evaluation',
  },
]
