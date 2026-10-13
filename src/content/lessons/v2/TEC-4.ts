import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Análisis de Datos, Tecnología e IA (TEC.19), etapa Avanzado.
 */

const NOTE_FINTOOLS = {
  es: "Contenido educativo. Las tasas, plazos y montos de los ejemplos son hipotéticos. Si una herramienta financiera digital se ofrece al público, maneja datos personales o presta servicios financieros a terceros, pueden aplicarle leyes de protección de datos personales, reglas de transparencia (por ejemplo, cómo mostrar tasas y costos) y requisitos de autorización de autoridades como la CNBV o la CONDUSEF. Estas reglas cambian: verifica la versión vigente (2026) y, si es necesario, consulta a un especialista antes de publicar tu herramienta.",
  en: "Educational content. Rates, terms and amounts in the examples are hypothetical. If a digital financial tool is offered to the public, handles personal data or provides financial services to third parties, personal data protection laws, transparency rules (for example, how rates and costs are displayed) and authorization requirements from authorities such as CNBV or CONDUSEF may apply. These rules change: verify the current version (2026) and, if needed, consult a specialist before publishing your tool.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── TEC-19 ─────────────────────────────
  {
    id: 'TEC-19',
    level: 2,
    topicIds: ['TEC.19'],
    title: { es: "Desarrollo de herramientas financieras digitales", en: "Building digital financial tools" },
    summary: {
      es: "Una buena herramienta financiera digital nace de una necesidad concreta, calcula el dinero con precisión y reglas de redondeo claras, y se prueba y mantiene como un producto que la gente usará para decidir.",
      en: "A good digital financial tool starts from a concrete need, computes money precisely with clear rounding rules, and is tested and maintained as a product people will use to make decisions.",
    },
    minutes: 16,
    objectives: [
      { es: "Traducir una necesidad financiera en requisitos, un producto mínimo viable y una estructura de entradas, cálculo, parámetros y salidas.", en: "Turn a financial need into requirements, a minimum viable product and a structure of inputs, calculation, parameters and outputs." },
      { es: "Calcular montos de dinero sin errores de precisión y aplicar reglas de redondeo que cuadren al centavo.", en: "Compute money amounts without precision errors and apply rounding rules that reconcile to the cent." },
      { es: "Diseñar casos de prueba, incluidos los casos límite, para validar una calculadora financiera.", en: "Design test cases, including edge cases, to validate a financial calculator." },
      { es: "Planear el mantenimiento de una herramienta: parámetros con versión, pruebas de regresión y avisos al usuario.", en: "Plan a tool's maintenance: versioned parameters, regression tests and user notices." },
    ],
    theory: [
      {
        heading: { es: "De la necesidad al diseño: requisitos y producto mínimo", en: "From need to design: requirements and minimum product" },
        body: [
          {
            es: "Una **herramienta financiera digital** es cualquier programa que ayuda a alguien a tomar una decisión con dinero: una calculadora de crédito, un simulador de ahorro, un tablero de flujo de efectivo o una app de presupuesto. Antes de escribir una sola línea de código, define **quién la usará y qué decisión le ayudará a tomar**. Por ejemplo: \"un comerciante de abarrotes quiere saber cuánto pagará al mes si pide un crédito para su refrigerador\".",
            en: "A **digital financial tool** is any program that helps someone make a money decision: a loan calculator, a savings simulator, a cash flow dashboard or a budgeting app. Before writing a single line of code, define **who will use it and what decision it will help them make**. For example: \"a corner-store owner wants to know how much they will pay per month if they take a loan for their refrigerator\".",
          },
          {
            es: "Esa necesidad se escribe como **requisitos**: lo que la herramienta debe hacer. Un formato útil es la **historia de usuario**: \"Como [tipo de usuario], quiero [acción] para [beneficio]\". Luego eliges el **producto mínimo viable (MVP)**: la versión más pequeña que ya resuelve el problema principal. Primero la cuota mensual; después, gráficas, exportar a PDF o comparar bancos.",
            en: "That need is written as **requirements**: what the tool must do. A useful format is the **user story**: \"As a [type of user], I want [action] so that [benefit]\". Then you choose the **minimum viable product (MVP)**: the smallest version that already solves the main problem. First the monthly payment; later, charts, PDF export or comparing banks.",
          },
          {
            es: "Un buen diseño separa cuatro piezas: **entradas** (lo que captura el usuario), **parámetros** (valores que cambian con el tiempo, como una tasa de impuesto, guardados aparte y no escritos dentro de la fórmula), **cálculo** (la lógica) y **salidas** (lo que se muestra). Así puedes cambiar un parámetro sin tocar el cálculo y probar el cálculo sin la pantalla.",
            en: "A good design separates four pieces: **inputs** (what the user enters), **parameters** (values that change over time, such as a tax rate, stored separately and not written inside the formula), **calculation** (the logic) and **outputs** (what is displayed). This way you can change a parameter without touching the calculation and test the calculation without the screen.",
          },
          {
            es: "Mini ejemplo: en un simulador de ahorro, el monto mensual y el plazo son entradas; la tasa de referencia es un parámetro; la fórmula de interés compuesto es el cálculo; el saldo final y una gráfica son las salidas.",
            en: "Mini example: in a savings simulator, the monthly amount and the term are inputs; the reference rate is a parameter; the compound interest formula is the calculation; the final balance and a chart are the outputs.",
          },
        ],
        bullets: [
          { es: "Empieza por el usuario y la decisión que tomará.", en: "Start with the user and the decision they will make." },
          { es: "Historia de usuario: Como… quiero… para…", en: "User story: As a… I want… so that…" },
          { es: "MVP: lo mínimo que ya resuelve el problema principal.", en: "MVP: the minimum that already solves the main problem." },
          { es: "Separa entradas, parámetros, cálculo y salidas.", en: "Separate inputs, parameters, calculation and outputs." },
        ],
      },
      {
        heading: { es: "Cálculos confiables: precisión y redondeo del dinero", en: "Reliable calculations: precision and rounding of money" },
        body: [
          {
            es: "Muchas computadoras guardan los números con decimales en **punto flotante binario**, un formato rápido pero aproximado. Por eso, en muchos lenguajes 0.1 + 0.2 da 0.30000000000000004. En un videojuego no importa; en un estado de cuenta, un centavo de diferencia genera reclamos y descuadres.",
            en: "Many computers store decimal numbers in **binary floating point**, a fast but approximate format. That is why, in many languages, 0.1 + 0.2 gives 0.30000000000000004. In a video game it does not matter; on an account statement, a one-cent difference causes complaints and mismatches.",
          },
          {
            es: "Dos soluciones comunes: guardar el dinero como **enteros en centavos** ($19.99 se guarda como 1999) o usar un **tipo decimal** que el lenguaje ofrezca para cálculos exactos en base 10. Además, define una **regla de redondeo** y aplícala siempre igual: en qué momento redondeas (cada paso o solo al final) y cómo (por ejemplo, el medio centavo hacia arriba).",
            en: "Two common solutions: store money as **integers in cents** ($19.99 is stored as 1999) or use a **decimal type** the language provides for exact base-10 calculations. Also, define a **rounding rule** and always apply it the same way: when you round (each step or only at the end) and how (for example, half a cent rounds up).",
          },
          {
            es: "Cuando repartes un monto en partes, el redondeo deja un **residuo**: unos centavos que sobran o faltan. La práctica habitual es asignarlo a una parte (por ejemplo, el último pago) para que **la suma cuadre exactamente** con el total. Para créditos con pagos iguales se usa la fórmula de anualidad de abajo, con la tasa del periodo (mensual si los pagos son mensuales).",
            en: "When you split an amount into parts, rounding leaves a **remainder**: a few cents left over or missing. The usual practice is to assign it to one part (for example, the last payment) so that **the sum reconciles exactly** with the total. For loans with equal payments the annuity formula below is used, with the rate per period (monthly if payments are monthly).",
          },
          {
            es: "Mini ejemplo: repartir $100.00 en 3 pagos da 33.33, 33.33 y 33.34. Si dejaras los tres en 33.33, la suma sería 99.99 y faltaría un centavo.",
            en: "Mini example: splitting $100.00 into 3 payments gives 33.33, 33.33 and 33.34. If you left all three at 33.33, the sum would be 99.99 and one cent would be missing.",
          },
        ],
        formula: "Pago = P × i ÷ (1 − (1 + i)^−n)   (P = monto, i = tasa por periodo, n = número de pagos; si i = 0, Pago = P ÷ n)",
      },
      {
        heading: { es: "Del prototipo a producción: pruebas y mantenimiento", en: "From prototype to production: testing and maintenance" },
        body: [
          {
            es: "Una **prueba unitaria** es un pequeño programa que da entradas conocidas al cálculo y revisa que la salida sea la esperada, calculada antes a mano o con otra fuente confiable. Incluye el caso típico y los **casos límite**: tasa de 0% (la fórmula de anualidad dividiría entre cero), plazo de 0 meses, montos negativos, campos vacíos o cantidades muy grandes.",
            en: "A **unit test** is a small program that feeds known inputs to the calculation and checks the output is the expected one, computed beforehand by hand or with another reliable source. Include the typical case and the **edge cases**: a 0% rate (the annuity formula would divide by zero), a 0-month term, negative amounts, empty fields or very large amounts.",
          },
          {
            es: "Usa **control de versiones** (como Git) para guardar cada cambio con su motivo, y corre **pruebas de regresión** (las mismas pruebas de siempre) cada vez que modificas algo, para confirmar que no rompiste lo que ya funcionaba. Valida las entradas del usuario: una herramienta que acepta \"-5 meses\" sin avisar no es confiable.",
            en: "Use **version control** (such as Git) to save each change with its reason, and run **regression tests** (the same tests as always) every time you modify something, to confirm you did not break what already worked. Validate user inputs: a tool that accepts \"-5 months\" without warning is not reliable.",
          },
          {
            es: "Una vez publicada, la herramienta necesita **mantenimiento**. Guarda los parámetros con su **fecha de vigencia y versión**, de modo que un cálculo de 2025 se pueda reproducir aunque la tasa cambie en 2026. Muestra al usuario qué supuestos usaste y un aviso claro de que el resultado es una estimación.",
            en: "Once published, the tool needs **maintenance**. Store parameters with their **effective date and version**, so that a 2025 calculation can be reproduced even if the rate changes in 2026. Show the user which assumptions you used and a clear notice that the result is an estimate.",
          },
          {
            es: "Mini ejemplo: una calculadora de ahorro tiene la prueba \"$1,000 al mes por 12 meses con tasa 0% → $12,000\". Si alguien cambia la fórmula y esa prueba falla, el error se detecta antes de que llegue a los usuarios.",
            en: "Mini example: a savings calculator has the test \"$1,000 a month for 12 months at a 0% rate → $12,000\". If someone changes the formula and that test fails, the error is caught before it reaches users.",
          },
        ],
        bullets: [
          { es: "Prueba el caso típico y los casos límite.", en: "Test the typical case and the edge cases." },
          { es: "Valida entradas y muestra mensajes claros.", en: "Validate inputs and show clear messages." },
          { es: "Control de versiones y pruebas de regresión en cada cambio.", en: "Version control and regression tests on every change." },
          { es: "Parámetros con fecha de vigencia y versión.", en: "Parameters with effective date and version." },
          { es: "Supuestos visibles y aviso de estimación.", en: "Visible assumptions and an estimate notice." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "La cuota de un crédito para equipo", en: "The payment on an equipment loan" },
        problem: {
          es: "Una calculadora debe mostrar la cuota fija mensual de un crédito hipotético de $50,000 a 6 meses con una tasa de 2% mensual. ¿Cuál es la cuota, cuánto se paga en total y cuánto de eso es interés?",
          en: "A calculator must show the fixed monthly payment of a hypothetical $50,000 loan over 6 months at a 2% monthly rate. What is the payment, how much is paid in total and how much of that is interest?",
        },
        steps: [
          { es: "Identifica los datos: P = 50,000; i = 0.02 (ya es mensual); n = 6.", en: "Identify the data: P = 50,000; i = 0.02 (already monthly); n = 6." },
          { es: "Calcula (1.02)^−6 = 0.887971.", en: "Compute (1.02)^−6 = 0.887971." },
          { es: "Denominador: 1 − 0.887971 = 0.112029. Numerador: 50,000 × 0.02 = 1,000.", en: "Denominator: 1 − 0.887971 = 0.112029. Numerator: 50,000 × 0.02 = 1,000." },
          { es: "Cuota: 1,000 ÷ 0.112029 = 8,926.29 (redondeada al centavo solo al final).", en: "Payment: 1,000 ÷ 0.112029 = 8,926.29 (rounded to the cent only at the end)." },
          { es: "Total pagado: 8,926.29 × 6 = 53,557.74. Interés: 53,557.74 − 50,000 = 3,557.74.", en: "Total paid: 8,926.29 × 6 = 53,557.74. Interest: 53,557.74 − 50,000 = 3,557.74." },
        ],
        result: {
          es: "La cuota es $8,926.29; se pagan $53,557.74 en total, de los cuales $3,557.74 son intereses. Este resultado se guarda como caso de prueba para el código.",
          en: "The payment is $8,926.29; $53,557.74 is paid in total, of which $3,557.74 is interest. This result is saved as a test case for the code.",
        },
      },
      {
        title: { es: "Casos de prueba para una meta de ahorro", en: "Test cases for a savings goal" },
        problem: {
          es: "Una herramienta calcula cuánto ahorrar al mes para una meta, sin intereses: (meta − ya ahorrado) ÷ meses. Diseña tres casos de prueba: uno típico, uno con ahorro previo y uno límite.",
          en: "A tool computes how much to save per month for a goal, without interest: (goal − already saved) ÷ months. Design three test cases: a typical one, one with prior savings and an edge one.",
        },
        steps: [
          { es: "Caso típico: meta $12,000, ya ahorrado $0, 10 meses → 12,000 ÷ 10 = $1,200 al mes.", en: "Typical case: goal $12,000, already saved $0, 10 months → 12,000 ÷ 10 = $1,200 per month." },
          { es: "Con ahorro previo: meta $12,000, ya ahorrado $3,000, 10 meses → 9,000 ÷ 10 = $900 al mes.", en: "With prior savings: goal $12,000, already saved $3,000, 10 months → 9,000 ÷ 10 = $900 per month." },
          { es: "Caso límite: 0 meses → la división no es posible; la herramienta debe mostrar \"El plazo debe ser de al menos 1 mes\" en lugar de un error técnico.", en: "Edge case: 0 months → the division is not possible; the tool must show \"The term must be at least 1 month\" instead of a technical error." },
          { es: "Extra: si ya ahorraste más que la meta, el resultado debe ser $0 y un mensaje de meta cumplida, no un monto negativo.", en: "Extra: if you already saved more than the goal, the result must be $0 with a goal-reached message, not a negative amount." },
        ],
        result: {
          es: "Esperado: $1,200, $900 y un mensaje de validación para 0 meses. Con estas pruebas automáticas, cualquier cambio futuro que rompa la lógica se detecta de inmediato.",
          en: "Expected: $1,200, $900 and a validation message for 0 months. With these automated tests, any future change that breaks the logic is caught immediately.",
        },
      },
    ],
    keyPoints: [
      { es: "Diseña a partir del usuario y la decisión que necesita tomar; empieza con un MVP.", en: "Design around the user and the decision they need to make; start with an MVP." },
      { es: "Separa entradas, parámetros, cálculo y salidas para poder cambiar y probar cada pieza.", en: "Separate inputs, parameters, calculation and outputs so each piece can be changed and tested." },
      { es: "Maneja el dinero en centavos enteros o con tipo decimal, nunca confiando a ciegas en el punto flotante.", en: "Handle money in integer cents or with a decimal type, never blindly trusting floating point." },
      { es: "Define cuándo y cómo redondear, y asigna el residuo para que todo cuadre al centavo.", en: "Define when and how to round, and assign the remainder so everything reconciles to the cent." },
      { es: "Prueba casos típicos y límite, y repite las pruebas en cada cambio.", en: "Test typical and edge cases, and rerun the tests on every change." },
      { es: "Versiona los parámetros con su fecha de vigencia y muestra los supuestos al usuario.", en: "Version parameters with their effective date and show the assumptions to the user." },
    ],
    normativeNote: NOTE_FINTOOLS,
    exerciseIds: ['TEC-19-E1', 'TEC-19-E2', 'TEC-19-E3', 'TEC-19-E4', 'TEC-19-E5', 'TEC-19-E6'],
  },
]

export const exercises: Exercise[] = [
  {
    id: 'TEC-19-E1',
    level: 2,
    module: 'TEC-19',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Al programar una herramienta financiera, sumar 0.10 + 0.20 con números de punto flotante binario siempre da exactamente 0.30, así que es seguro usarlos para saldos de dinero.",
      en: "When programming a financial tool, adding 0.10 + 0.20 with binary floating-point numbers always gives exactly 0.30, so it is safe to use them for money balances.",
    },
    answer: false,
    explanation: {
      es: "Falso. El punto flotante binario no puede representar exactamente valores como 0.1, y en muchos lenguajes la suma da 0.30000000000000004. Para dinero se usan enteros en centavos o un tipo decimal. Error común: creer que si la pantalla muestra 0.30 el valor guardado es exacto; los pequeños errores se acumulan y descuadran saldos.",
      en: "False. Binary floating point cannot exactly represent values such as 0.1, and in many languages the sum gives 0.30000000000000004. For money, integer cents or a decimal type are used. Common mistake: believing that if the screen shows 0.30 the stored value is exact; small errors accumulate and throw balances off.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fintool-dev',
  },
  {
    id: 'TEC-19-E2',
    level: 2,
    module: 'TEC-19',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Vas a construir un simulador de crédito para pequeños negocios.",
      en: "You are going to build a loan simulator for small businesses.",
    },
    prompt: {
      es: "Clasifica cada elemento del simulador de crédito según la pieza del diseño a la que pertenece.",
      en: "Classify each element of the loan simulator by the design piece it belongs to.",
    },
    categories: [
      { id: 'TEC-19-E2-c1', label: { es: "Entrada", en: "Input" } },
      { id: 'TEC-19-E2-c2', label: { es: "Parámetro", en: "Parameter" } },
      { id: 'TEC-19-E2-c3', label: { es: "Cálculo", en: "Calculation" } },
      { id: 'TEC-19-E2-c4', label: { es: "Salida", en: "Output" } },
    ],
    items: [
      { id: 'TEC-19-E2-i1', label: { es: "Monto que el usuario quiere pedir prestado", en: "Amount the user wants to borrow" }, correctCategoryId: 'TEC-19-E2-c1' },
      { id: 'TEC-19-E2-i2', label: { es: "Tasa de interés de referencia guardada con su fecha de vigencia", en: "Reference interest rate stored with its effective date" }, correctCategoryId: 'TEC-19-E2-c2' },
      { id: 'TEC-19-E2-i3', label: { es: "Fórmula de anualidad que obtiene la cuota", en: "Annuity formula that produces the payment" }, correctCategoryId: 'TEC-19-E2-c3' },
      { id: 'TEC-19-E2-i4', label: { es: "Tabla de pagos que se muestra en pantalla", en: "Payment table shown on screen" }, correctCategoryId: 'TEC-19-E2-c4' },
      { id: 'TEC-19-E2-i5', label: { es: "Plazo en meses que elige el usuario", en: "Term in months chosen by the user" }, correctCategoryId: 'TEC-19-E2-c1' },
      { id: 'TEC-19-E2-i6', label: { es: "Regla que asigna el residuo de centavos al último pago", en: "Rule that assigns the leftover cents to the last payment" }, correctCategoryId: 'TEC-19-E2-c3' },
    ],
    explanation: {
      es: "Las entradas las captura el usuario (monto, plazo); los parámetros cambian con el tiempo y se guardan aparte con su vigencia (tasa de referencia); el cálculo es la lógica (fórmula y regla de redondeo); la salida es lo que se muestra (tabla de pagos). Error común: escribir la tasa directamente dentro de la fórmula, lo que obliga a modificar el código cada vez que cambia.",
      en: "Inputs are entered by the user (amount, term); parameters change over time and are stored separately with their effective date (reference rate); the calculation is the logic (formula and rounding rule); the output is what is displayed (payment table). Common mistake: writing the rate directly inside the formula, which forces a code change every time it changes.",
    },
    difficulty: 1,
    points: 15,
    competency: 'fintool-dev',
  },
  {
    id: 'TEC-19-E3',
    level: 2,
    module: 'TEC-19',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Estás armando el caso de prueba principal de una calculadora de crédito: monto $100,000, tasa hipotética de 1% mensual y 12 pagos mensuales iguales.",
      en: "You are building the main test case for a loan calculator: amount $100,000, a hypothetical 1% monthly rate and 12 equal monthly payments.",
    },
    prompt: {
      es: "¿Qué cuota mensual debe devolver la calculadora, redondeada al centavo?",
      en: "What monthly payment must the calculator return, rounded to the cent?",
    },
    answer: 8884.88,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Pago = 100,000 × 0.01 ÷ (1 − 1.01^−12). 1.01^−12 = 0.887449; 1 − 0.887449 = 0.112551; 1,000 ÷ 0.112551 = 8,884.88. Error común: usar la tasa anual (12%) con n = 12 meses, o redondear los pasos intermedios a dos decimales, lo que mueve el resultado.",
      en: "Payment = 100,000 × 0.01 ÷ (1 − 1.01^−12). 1.01^−12 = 0.887449; 1 − 0.887449 = 0.112551; 1,000 ÷ 0.112551 = 8,884.88. Common mistake: using the annual rate (12%) with n = 12 months, or rounding intermediate steps to two decimals, which shifts the result.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fintool-dev',
  },
  {
    id: 'TEC-19-E4',
    level: 2,
    module: 'TEC-19',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una app permite dividir una compra de $1,000.00 en 3 pagos. La regla es: redondear cada pago al centavo hacia abajo y asignar el residuo al último pago, para que la suma cuadre exactamente.",
      en: "An app lets users split a $1,000.00 purchase into 3 payments. The rule is: round each payment down to the cent and assign the remainder to the last payment, so the sum reconciles exactly.",
    },
    prompt: {
      es: "¿Cuánto vale cada uno de los dos primeros pagos y cuánto el último?",
      en: "How much is each of the first two payments and how much is the last one?",
    },
    fields: [
      { id: 'f1', label: { es: "Primer y segundo pago (cada uno)", en: "First and second payment (each)" }, answer: 333.33, unit: 'MXN', tolerance: { abs: 0.001 } },
      { id: 'f2', label: { es: "Último pago", en: "Last payment" }, answer: 333.34, unit: 'MXN', tolerance: { abs: 0.001 } },
    ],
    explanation: {
      es: "1,000 ÷ 3 = 333.333…, que redondeado hacia abajo da 333.33. Dos pagos suman 666.66, así que el último es 1,000.00 − 666.66 = 333.34. Comprobación: 333.33 + 333.33 + 333.34 = 1,000.00. Error común: cobrar tres pagos de 333.33 (suma 999.99) y perder un centavo, o redondear todos hacia arriba y cobrar de más.",
      en: "1,000 ÷ 3 = 333.333…, which rounded down gives 333.33. Two payments add up to 666.66, so the last one is 1,000.00 − 666.66 = 333.34. Check: 333.33 + 333.33 + 333.34 = 1,000.00. Common mistake: charging three payments of 333.33 (sum 999.99) and losing a cent, or rounding all of them up and overcharging.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fintool-dev',
  },
  {
    id: 'TEC-19-E5',
    level: 2,
    module: 'TEC-19',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles de estos son casos límite que conviene incluir en las pruebas de una calculadora de crédito con pagos iguales? Selecciona todos los que apliquen.",
      en: "Which of these are edge cases worth including in the tests of an equal-payment loan calculator? Select all that apply.",
    },
    options: [
      { id: 'TEC-19-E5-a', text: { es: "Tasa de interés de 0%", en: "A 0% interest rate" } },
      { id: 'TEC-19-E5-b', text: { es: "Plazo de 0 meses", en: "A 0-month term" } },
      { id: 'TEC-19-E5-c', text: { es: "Monto negativo o campo vacío", en: "A negative amount or an empty field" } },
      { id: 'TEC-19-E5-d', text: { es: "Solo un crédito típico de $50,000 a 12 meses, porque es el más usado", en: "Only a typical $50,000 loan over 12 months, because it is the most common" } },
      { id: 'TEC-19-E5-e', text: { es: "Un monto muy grande que pueda causar desbordamiento o mal formato", en: "A very large amount that could cause overflow or bad formatting" } },
    ],
    correctOptionIds: ['TEC-19-E5-a', 'TEC-19-E5-b', 'TEC-19-E5-c', 'TEC-19-E5-e'],
    explanation: {
      es: "Los casos límite están en los extremos o fuera del rango normal: tasa 0% (la fórmula de anualidad dividiría entre cero y debe usarse P ÷ n), plazo 0, entradas inválidas y montos enormes. El crédito típico es necesario, pero es el caso normal, no un caso límite, y no basta por sí solo. Error común: probar solo el caso feliz y descubrir los fallos cuando ya los vio el usuario.",
      en: "Edge cases sit at the extremes or outside the normal range: a 0% rate (the annuity formula would divide by zero and P ÷ n must be used), a 0 term, invalid inputs and huge amounts. The typical loan is necessary, but it is the normal case, not an edge case, and it is not enough on its own. Common mistake: testing only the happy path and finding the failures once users have seen them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fintool-dev',
  },
  {
    id: 'TEC-19-E6',
    level: 2,
    module: 'TEC-19',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Tu calculadora de nómina usa una tasa que la autoridad actualizará a partir del próximo año. Un cliente te pide que siga pudiendo recalcular exactamente los recibos del año actual después del cambio.",
      en: "Your payroll calculator uses a rate that the authority will update starting next year. A client asks that they still be able to recalculate this year's pay slips exactly after the change.",
    },
    prompt: {
      es: "¿Cuál es la mejor forma de implementar el cambio de la tasa en la herramienta?",
      en: "What is the best way to implement the rate change in the tool?",
    },
    options: [
      { id: 'TEC-19-E6-a', text: { es: "Reemplazar el número dentro de la fórmula el 1 de enero y volver a publicar", en: "Replace the number inside the formula on January 1 and republish" } },
      { id: 'TEC-19-E6-b', text: { es: "Guardar ambas tasas como parámetros con su fecha de vigencia, elegir la que corresponda a la fecha del cálculo y correr las pruebas de regresión", en: "Store both rates as parameters with their effective dates, pick the one matching the calculation date and run the regression tests" } },
      { id: 'TEC-19-E6-c', text: { es: "Pedir a cada usuario que escriba la tasa que crea correcta", en: "Ask each user to type the rate they believe is correct" } },
      { id: 'TEC-19-E6-d', text: { es: "Crear una copia completa del programa para cada año y mantenerlas por separado", en: "Create a full copy of the program for each year and maintain them separately" } },
    ],
    correctOptionId: 'TEC-19-E6-b',
    explanation: {
      es: "Con parámetros versionados por fecha de vigencia, la herramienta aplica la tasa correcta a cada periodo y puede reproducir cálculos antiguos; las pruebas de regresión confirman que nada más se rompió. Error común: sobrescribir el valor en el código, que hace imposible recalcular el pasado; copiar el programa por año multiplica los errores y el trabajo de mantenimiento.",
      en: "With parameters versioned by effective date, the tool applies the right rate to each period and can reproduce past calculations; regression tests confirm nothing else broke. Common mistake: overwriting the value in the code, which makes it impossible to recalculate the past; copying the program per year multiplies errors and maintenance work.",
    },
    difficulty: 3,
    points: 20,
    competency: 'fintool-dev',
  },
]
