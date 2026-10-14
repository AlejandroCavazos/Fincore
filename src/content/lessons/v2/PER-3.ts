import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Finanzas Personales y Educación Financiera (PER.13 a PER.18).
 * Nivel 1, etapa Avanzado.
 */

export const lessons: Lesson[] = [
  // ───────────────────────────── PER-13 ─────────────────────────────
  {
    id: 'PER-13',
    level: 1,
    topicIds: ['PER.13'],
    title: { es: "Seguros y protección financiera", en: "Insurance and financial protection" },
    summary: {
      es: "Un seguro te permite pagar una cantidad pequeña y conocida para no tener que cargar tú solo con una pérdida grande e inesperada.",
      en: "Insurance lets you pay a small, known amount so you do not have to carry a large, unexpected loss on your own.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar cómo funciona un seguro y qué son la prima, la suma asegurada, el deducible y el coaseguro.", en: "Explain how insurance works and what the premium, sum insured, deductible and coinsurance are." },
      { es: "Elegir el tipo de seguro adecuado para cada riesgo de tu vida (salud, vida, auto, hogar).", en: "Choose the right type of insurance for each risk in your life (health, life, car, home)." },
      { es: "Calcular cuánto pagas tú y cuánto paga la aseguradora en un siniestro, y estimar cuánta suma asegurada de vida necesita una familia.", en: "Compute how much you pay and how much the insurer pays in a claim, and estimate how much life cover a family needs." },
    ],
    theory: [
      {
        heading: { es: "Cómo funciona un seguro: transferir el riesgo", en: "How insurance works: transferring risk" },
        body: [
          {
            es: "Un **riesgo** es algo malo que podría pasar y costarte dinero: enfermarte, chocar, que se inunde tu casa o que falte quien mantiene a la familia. Un **seguro** es un contrato: tú pagas una cantidad fija y, si el riesgo ocurre, la **aseguradora** paga la pérdida según lo pactado. Así **transfieres** el riesgo.",
            en: "A **risk** is something bad that could happen and cost you money: getting sick, crashing your car, your home flooding or losing the person who supports the family. **Insurance** is a contract: you pay a fixed amount and, if the risk happens, the **insurer** pays the loss as agreed. That way you **transfer** the risk.",
          },
          {
            es: "Funciona porque muchas personas pagan un poco y solo a unas pocas les pasa el accidente. Lo que pagas se llama **prima**. El documento con las reglas es la **póliza**. Cuando ocurre el evento cubierto se le llama **siniestro**, y el tope máximo que pagará la aseguradora es la **suma asegurada**.",
            en: "It works because many people pay a little and only a few suffer the accident. What you pay is the **premium**. The document with the rules is the **policy**. When the covered event happens it is called a **claim** (loss event), and the maximum the insurer will pay is the **sum insured**.",
          },
          {
            es: "Regla práctica: asegura lo que **no podrías pagar tú solo** sin hundir tus finanzas (una hospitalización, un choque grave). Lo pequeño y frecuente conviene cubrirlo con tu fondo de emergencia. Mini ejemplo: un celular de $4,000 quizá no vale la pena asegurarlo; una cirugía de $300,000 sí.",
            en: "Rule of thumb: insure what you **could not pay on your own** without sinking your finances (a hospital stay, a serious crash). Small, frequent costs are better covered by your emergency fund. Mini example: a $4,000 phone may not be worth insuring; a $300,000 surgery is.",
          },
        ],
        bullets: [
          { es: "Prima: lo que pagas por estar protegido (mensual, semestral o anual).", en: "Premium: what you pay to be protected (monthly, semiannual or annual)." },
          { es: "Póliza: el contrato con coberturas, exclusiones y condiciones.", en: "Policy: the contract with coverages, exclusions and conditions." },
          { es: "Suma asegurada: lo máximo que pagará la aseguradora.", en: "Sum insured: the most the insurer will pay." },
          { es: "Exclusiones: lo que la póliza no cubre; léelas antes de firmar.", en: "Exclusions: what the policy does not cover; read them before signing." },
        ],
      },
      {
        heading: { es: "Deducible y coaseguro: la parte que pagas tú", en: "Deductible and coinsurance: the part you pay" },
        body: [
          {
            es: "Casi ningún seguro paga el 100 %. El **deducible** es la cantidad fija que tú pagas primero en cada siniestro antes de que la aseguradora entre. El **coaseguro** es un **porcentaje** de lo que queda después del deducible que también te toca pagar.",
            en: "Almost no insurance pays 100%. The **deductible** is the fixed amount you pay first on each claim before the insurer steps in. **Coinsurance** is a **percentage** of what remains after the deductible that you also have to pay.",
          },
          {
            es: "Estos montos existen para que el asegurado cuide sus bienes y no reclame por todo. Una póliza con deducible **más alto** suele tener prima **más baja**: pagas menos cada año, pero más si pasa algo. Algunas pólizas de gastos médicos ponen un **tope de coaseguro**, un máximo que pagarás por ese concepto.",
            en: "These amounts exist so the insured person takes care and does not claim for everything. A policy with a **higher** deductible usually has a **lower** premium: you pay less each year, but more if something happens. Some medical policies set a **coinsurance cap**, a maximum you will pay for that item.",
          },
          {
            es: "Mini ejemplo: cuenta de hospital de $50,000, deducible de $10,000 y coaseguro de 10 %. Tú pagas $10,000 + 10 % de $40,000 = $14,000; la aseguradora paga $36,000.",
            en: "Mini example: $50,000 hospital bill, $10,000 deductible and 10% coinsurance. You pay $10,000 + 10% of $40,000 = $14,000; the insurer pays $36,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Cuánto pagas tú y cuánto la aseguradora", en: "How much you pay and how much the insurer pays" },
            expression: "Coaseguro = Coaseguro % × (Gasto − Deducible);  Pagas tú = Deducible + Coaseguro;  Paga la aseguradora = Gasto − Pagas tú",
            variables: [
              { symbol: "Gasto", meaning: { es: "La cuenta total del siniestro (hospital, reparación), en pesos.", en: "The total bill for the claim (hospital, repair), in pesos." } },
              { symbol: "Deducible", meaning: { es: "Cantidad fija que pagas tú primero, en pesos.", en: "Fixed amount you pay first, in pesos." } },
              { symbol: "Coaseguro %", meaning: { es: "Porcentaje de lo que queda después del deducible que también pagas tú; en decimal, 10 % = 0.10.", en: "Percentage of what remains after the deductible that you also pay; as a decimal, 10% = 0.10." } },
              { symbol: "Coaseguro", meaning: { es: "Ese porcentaje convertido a pesos.", en: "That percentage converted to pesos." } },
            ],
            steps: [
              { es: "Resta el deducible al gasto total: lo que queda.", en: "Subtract the deductible from the total bill: what remains." },
              { es: "Multiplica lo que queda por el coaseguro en decimal: coaseguro en pesos.", en: "Multiply what remains by the coinsurance as a decimal: coinsurance in pesos." },
              { es: "Suma deducible + coaseguro: lo que pagas tú.", en: "Add deductible + coinsurance: what you pay." },
              { es: "Resta lo que pagas tú al gasto total: lo que paga la aseguradora.", en: "Subtract what you pay from the total bill: what the insurer pays." },
            ],
            example: {
              es: "Cuenta de $60,000, deducible de $12,000 y coaseguro de 10 %. Lo que queda: 60,000 − 12,000 = $48,000. Coaseguro: 0.10 × 48,000 = $4,800. Pagas tú: 12,000 + 4,800 = **$16,800**. Aseguradora: 60,000 − 16,800 = **$43,200**.",
              en: "Bill of $60,000, $12,000 deductible and 10% coinsurance. What remains: 60,000 − 12,000 = $48,000. Coinsurance: 0.10 × 48,000 = $4,800. You pay: 12,000 + 4,800 = **$16,800**. Insurer: 60,000 − 16,800 = **$43,200**.",
            },
            interpret: { es: "Si tu póliza tiene tope de coaseguro y el coaseguro calculado lo rebasa, pagas solo el tope.", en: "If your policy has a coinsurance cap and the computed coinsurance exceeds it, you pay only the cap." },
            mistake: { es: "Calcular el coaseguro sobre el gasto completo (10 % de $60,000 = $6,000). Se calcula sobre lo que queda después del deducible.", en: "Computing coinsurance on the full bill (10% of $60,000 = $6,000). It is computed on what remains after the deductible." },
          },
        ],
      },
      {
        heading: { es: "Qué seguros necesitas y cuánto asegurar", en: "Which insurance you need and how much to cover" },
        body: [
          {
            es: "Los más comunes son: **gastos médicos mayores** (enfermedades y accidentes graves), **vida** (deja dinero a tus dependientes si falleces), **auto** (daños a terceros, a tu coche y robo) y **hogar** (daños a la vivienda y contenidos). El de auto con **responsabilidad civil** cubre lo que dañes a otras personas; en muchos casos la ley lo exige.",
            en: "The most common are: **major medical** (serious illness and accidents), **life** (leaves money to your dependents if you die), **car** (damage to others, to your car and theft) and **home** (damage to the dwelling and contents). Car insurance with **liability** covers what you damage to other people; in many cases the law requires it.",
          },
          {
            es: "¿Cuánto seguro de vida? Una forma sencilla es sumar lo que tu familia necesitaría: los **gastos de varios años** sin tu ingreso más las **deudas** que quedarían, y restar los **ahorros** que ya tienes. Si nadie depende de tu ingreso, quizá no lo necesitas todavía.",
            en: "How much life insurance? A simple way is to add what your family would need: **several years of expenses** without your income plus the **debts** that would remain, and subtract the **savings** you already have. If nobody depends on your income, you may not need it yet.",
          },
          {
            es: "Antes de contratar, compara varias opciones y revisa coberturas, exclusiones, **periodos de espera** (tiempo antes de que cubra ciertas enfermedades) y **preexistencias** (padecimientos que ya tenías). En México las aseguradoras las supervisa la **CNSF** y la **CONDUSEF** atiende quejas de usuarios. Mini ejemplo: dos pólizas con la misma prima pueden tener sumas aseguradas muy distintas.",
            en: "Before buying, compare several options and check coverages, exclusions, **waiting periods** (time before certain illnesses are covered) and **pre-existing conditions** (conditions you already had). In Mexico insurers are supervised by the **CNSF** and **CONDUSEF** handles user complaints. Mini example: two policies with the same premium can have very different sums insured.",
          },
        ],
        formulas: [
          {
            name: { es: "Suma asegurada de vida que necesita tu familia", en: "Life cover your family needs" },
            expression: "Seguro de vida necesario ≈ (Gastos anuales × Años a cubrir) + Deudas − Ahorros",
            variables: [
              { symbol: "Gastos anuales", meaning: { es: "Lo que gasta tu familia en un año, en pesos.", en: "What your family spends in a year, in pesos." } },
              { symbol: "Años a cubrir", meaning: { es: "Cuántos años quieres que tu familia esté cubierta sin tu ingreso.", en: "How many years you want your family covered without your income." } },
              { symbol: "Deudas", meaning: { es: "Lo que quedaría por pagar (hipoteca, crédito de auto), en pesos.", en: "What would remain to be paid (mortgage, car loan), in pesos." } },
              { symbol: "Ahorros", meaning: { es: "Dinero que la familia ya tiene disponible, en pesos.", en: "Money the family already has available, in pesos." } },
            ],
            steps: [
              { es: "Multiplica los gastos anuales por los años a cubrir.", en: "Multiply annual expenses by the years to cover." },
              { es: "Súmale las deudas pendientes.", en: "Add the outstanding debts." },
              { es: "Réstale los ahorros que ya tienen.", en: "Subtract the savings they already have." },
            ],
            example: {
              es: "Una familia gasta $150,000 al año, quiere cubrir 6 años, debe $200,000 y tiene $120,000 ahorrados. Gastos: 150,000 × 6 = $900,000. Más deudas: 900,000 + 200,000 = $1,100,000. Menos ahorros: 1,100,000 − 120,000 = **$980,000**.",
              en: "A family spends $150,000 a year, wants to cover 6 years, owes $200,000 and has $120,000 saved. Expenses: 150,000 × 6 = $900,000. Plus debts: 900,000 + 200,000 = $1,100,000. Minus savings: 1,100,000 − 120,000 = **$980,000**.",
            },
            interpret: { es: "Es una estimación para elegir la suma asegurada; revísala si cambian tus gastos, deudas o el número de dependientes.", en: "It is an estimate for choosing the sum insured; review it if your expenses, debts or number of dependents change." },
            mistake: { es: "Olvidar restar los ahorros o usar solo un año de gastos.", en: "Forgetting to subtract savings or using only one year of expenses." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Una cirugía con deducible y coaseguro", en: "A surgery with deductible and coinsurance" },
        problem: {
          es: "Mariana tiene un seguro de gastos médicos mayores con deducible de $20,000 y coaseguro de 10 %. La cuenta del hospital por una cirugía es de $120,000. ¿Cuánto paga ella y cuánto la aseguradora?",
          en: "Mariana has major medical insurance with a $20,000 deductible and 10% coinsurance. The hospital bill for a surgery is $120,000. How much does she pay and how much does the insurer pay?",
        },
        steps: [
          { es: "Ella paga primero el deducible: $20,000.", en: "She first pays the deductible: $20,000." },
          { es: "Lo que queda: $120,000 − $20,000 = $100,000.", en: "What remains: $120,000 − $20,000 = $100,000." },
          { es: "Coaseguro: 10 % × $100,000 = $10,000, también a su cargo.", en: "Coinsurance: 10% × $100,000 = $10,000, also paid by her." },
          { es: "Total de Mariana: $20,000 + $10,000 = $30,000. Aseguradora: $120,000 − $30,000 = $90,000.", en: "Mariana's total: $20,000 + $10,000 = $30,000. Insurer: $120,000 − $30,000 = $90,000." },
        ],
        result: {
          es: "Mariana paga $30,000 y la aseguradora $90,000. Sin seguro habría pagado los $120,000 completos.",
          en: "Mariana pays $30,000 and the insurer $90,000. Without insurance she would have paid the full $120,000.",
        },
      },
      {
        title: { es: "¿Cuánto seguro de vida necesita una familia?", en: "How much life insurance does a family need?" },
        problem: {
          es: "Jorge mantiene a su esposa y dos hijos. La familia gasta $180,000 al año, quiere cubrir 5 años, tienen una hipoteca de $400,000 y ahorros por $250,000. Estima la suma asegurada.",
          en: "Jorge supports his wife and two children. The family spends $180,000 a year, wants to cover 5 years, has a $400,000 mortgage and $250,000 in savings. Estimate the sum insured.",
        },
        steps: [
          { es: "Gastos a cubrir: $180,000 × 5 = $900,000.", en: "Expenses to cover: $180,000 × 5 = $900,000." },
          { es: "Sumamos la deuda: $900,000 + $400,000 = $1,300,000.", en: "Add the debt: $900,000 + $400,000 = $1,300,000." },
          { es: "Restamos lo que ya tienen: $1,300,000 − $250,000 = $1,050,000.", en: "Subtract what they already have: $1,300,000 − $250,000 = $1,050,000." },
        ],
        result: {
          es: "Una suma asegurada cercana a $1,050,000 protegería a la familia según estos supuestos. Es una estimación: conviene revisarla cuando cambien gastos o deudas.",
          en: "A sum insured of about $1,050,000 would protect the family under these assumptions. It is an estimate: review it when expenses or debts change.",
        },
      },
    ],
    keyPoints: [
      { es: "Un seguro transfiere a la aseguradora un riesgo que no podrías pagar tú solo.", en: "Insurance transfers to the insurer a risk you could not pay on your own." },
      { es: "Prima es lo que pagas; suma asegurada es lo máximo que te pagan.", en: "The premium is what you pay; the sum insured is the most you get paid." },
      { es: "Deducible: monto fijo a tu cargo; coaseguro: porcentaje del resto a tu cargo.", en: "Deductible: fixed amount you pay; coinsurance: percentage of the rest you pay." },
      { es: "Deducible más alto suele significar prima más baja, pero más gasto si hay siniestro.", en: "A higher deductible usually means a lower premium, but more cost if there is a claim." },
      { es: "Seguro de vida ≈ gastos de varios años + deudas − ahorros, solo si alguien depende de ti.", en: "Life cover ≈ several years of expenses + debts − savings, only if someone depends on you." },
      { es: "Compara pólizas: coberturas, exclusiones, periodos de espera y preexistencias.", en: "Compare policies: coverages, exclusions, waiting periods and pre-existing conditions." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las referencias a la CNSF, a la CONDUSEF y a la obligación de contar con seguro de responsabilidad civil son generales; las reglas, coberturas y condiciones cambian y varían por póliza y por estado, así que verifica la versión vigente (2026) y lee tu póliza antes de decidir. Los montos y porcentajes son ilustrativos.",
      en: "Educational content. References to the CNSF, CONDUSEF and the requirement to carry liability insurance are general; rules, coverages and conditions change and vary by policy and by state, so verify the current version (2026) and read your policy before deciding. Amounts and percentages are illustrative.",
    },
    exerciseIds: ['PER-13-E1', 'PER-13-E2', 'PER-13-E3', 'PER-13-E4', 'PER-13-E5', 'PER-13-E6'],
  },

  // ───────────────────────────── PER-14 ─────────────────────────────
  {
    id: 'PER-14',
    level: 1,
    topicIds: ['PER.14'],
    title: { es: "AFORE y ahorro para el retiro", en: "AFORE and retirement savings" },
    summary: {
      es: "Tu AFORE guarda e invierte el ahorro para tu retiro; entender cómo funciona, cuánto cobra y cuánto te faltará te permite actuar desde hoy.",
      en: "Your AFORE holds and invests your retirement savings; understanding how it works, what it charges and how much you will be short lets you act today.",
    },
    minutes: 19,
    objectives: [
      { es: "Explicar qué es una AFORE, qué es una SIEFORE y qué subcuentas forman tu cuenta individual.", en: "Explain what an AFORE is, what a SIEFORE is and which sub-accounts make up your individual account." },
      { es: "Distinguir el régimen de la Ley 73 del de la Ley 97 del IMSS.", en: "Distinguish the IMSS 1973 Law regime from the 1997 Law regime." },
      { es: "Comparar AFORE por rendimiento neto y calcular el efecto de las comisiones.", en: "Compare AFOREs by net return and compute the effect of fees." },
      { es: "Estimar tu tasa de reemplazo y cuánto ahorro voluntario necesitas.", en: "Estimate your replacement rate and how much voluntary saving you need." },
    ],
    theory: [
      {
        heading: { es: "Qué es una AFORE y cómo se forma tu cuenta", en: "What an AFORE is and how your account is built" },
        body: [
          {
            es: "Una **AFORE** (Administradora de Fondos para el Retiro) es una empresa financiera que **administra tu cuenta individual** para el retiro. Tu dinero no se queda quieto: la AFORE lo invierte en fondos llamados **SIEFORES**. Todas están reguladas y supervisadas por la **CONSAR**.",
            en: "An **AFORE** (Retirement Fund Administrator) is a financial company that **manages your individual retirement account**. Your money does not sit still: the AFORE invests it in funds called **SIEFOREs**. All of them are regulated and supervised by **CONSAR**.",
          },
          {
            es: "Si trabajas con un patrón y estás dado de alta en el IMSS, a tu cuenta llegan **aportaciones de tres partes**: tú, tu patrón y el gobierno. Si eres independiente, también puedes abrir una cuenta y ahorrar por tu cuenta. Las SIEFORES actuales son **generacionales**: tu dinero va a un fondo según tu año de nacimiento, con más riesgo cuando eres joven y más conservador al acercarte al retiro.",
            en: "If you work for an employer and are registered with IMSS, your account receives **contributions from three parties**: you, your employer and the government. If you are self-employed, you can also open an account and save on your own. Current SIEFOREs are **generational**: your money goes to a fund based on your birth year, taking more risk when you are young and becoming more conservative as you approach retirement.",
          },
          {
            es: "Mini ejemplo: Lupita, de 25 años, y su papá, de 58, tienen la misma AFORE, pero su dinero está en SIEFORES distintas: el de ella busca más crecimiento a largo plazo; el de él, más estabilidad.",
            en: "Mini example: Lupita, 25, and her father, 58, have the same AFORE, but their money is in different SIEFOREs: hers seeks more long-term growth; his, more stability.",
          },
        ],
        bullets: [
          { es: "Retiro, Cesantía en edad avanzada y Vejez (RCV): la base de tu pensión.", en: "Retirement, Old-age Unemployment and Old Age (RCV): the basis of your pension." },
          { es: "Vivienda: la aportación al INFONAVIT; la AFORE solo la reporta.", en: "Housing: the INFONAVIT contribution; the AFORE only reports it." },
          { es: "Aportaciones voluntarias: lo que tú decides agregar, de corto o largo plazo.", en: "Voluntary contributions: what you decide to add, short or long term." },
          { es: "Ahorro solidario: opción para trabajadores afiliados al ISSSTE.", en: "Solidarity savings: an option for workers affiliated with ISSSTE." },
        ],
      },
      {
        heading: { es: "Ley 73 y Ley 97: dos maneras de calcular la pensión", en: "1973 Law and 1997 Law: two ways to compute the pension" },
        body: [
          {
            es: "En el IMSS conviven dos regímenes. Si empezaste a cotizar **antes del 1 de julio de 1997**, perteneces a la **Ley 73**: tu pensión depende sobre todo de tus **semanas cotizadas** y de tu **salario promedio** de los últimos años, y al retirarte puedes elegir el régimen que te convenga.",
            en: "Two regimes coexist at IMSS. If you started contributing **before July 1, 1997**, you belong to the **1973 Law**: your pension depends mainly on your **weeks of contributions** and your **average salary** in recent years, and at retirement you can choose the regime that suits you.",
          },
          {
            es: "Si empezaste después, estás en la **Ley 97**: tu pensión depende principalmente del **saldo acumulado** en tu AFORE. Es decir, cuánto se aportó, cuánto rindió y cuánto se cobró de comisiones. Por eso, en Ley 97, lo que hagas hoy (aportar más, elegir bien tu AFORE) cambia mucho tu pensión.",
            en: "If you started later, you are under the **1997 Law**: your pension depends mainly on the **accumulated balance** in your AFORE. That is, how much was contributed, how much it earned and how much was charged in fees. That is why, under the 1997 Law, what you do today (contribute more, choose your AFORE well) changes your pension a lot.",
          },
          {
            es: "Mini ejemplo: Rogelio empezó a trabajar en 1994 (Ley 73); su sobrina Paola, en 2015 (Ley 97). Para Paola, cada peso extra que aporte y cada punto de rendimiento cuenta directamente en su pensión. La **tasa de reemplazo** mide qué parte de tu último sueldo cubre la pensión.",
            en: "Mini example: Rogelio started working in 1994 (1973 Law); his niece Paola, in 2015 (1997 Law). For Paola, every extra peso she contributes and every point of return counts directly in her pension. The **replacement rate** measures what part of your last salary the pension covers.",
          },
        ],
        formulas: [
          {
            name: { es: "Tasa de reemplazo y brecha de retiro", en: "Replacement rate and retirement gap" },
            expression: "Tasa de reemplazo = Pensión mensual ÷ Último sueldo mensual × 100;  Brecha = Pensión meta − Pensión mensual",
            variables: [
              { symbol: "Pensión mensual", meaning: { es: "Lo que estimas recibir de pensión al mes, en pesos.", en: "What you expect to receive as a monthly pension, in pesos." } },
              { symbol: "Último sueldo mensual", meaning: { es: "Lo que ganas al mes antes de retirarte, en pesos.", en: "What you earn per month before retiring, in pesos." } },
              { symbol: "Pensión meta", meaning: { es: "La pensión que te gustaría tener: tu sueldo × el % que deseas (por ejemplo, 70 %), en pesos.", en: "The pension you would like: your salary × the % you want (for example, 70%), in pesos." } },
              { symbol: "Brecha", meaning: { es: "Lo que te faltaría cada mes, en pesos.", en: "What you would be short each month, in pesos." } },
            ],
            steps: [
              { es: "Divide la pensión estimada entre tu sueldo y multiplica por 100.", en: "Divide the estimated pension by your salary and multiply by 100." },
              { es: "Calcula tu pensión meta: sueldo × % deseado.", en: "Compute your target pension: salary × desired %." },
              { es: "Resta la pensión estimada a la meta: esa es tu brecha mensual.", en: "Subtract the estimated pension from the target: that is your monthly gap." },
            ],
            example: {
              es: "Sueldo de $20,000 y pensión estimada de $7,000. Tasa de reemplazo = 7,000 ÷ 20,000 × 100 = **35 %**. Meta del 70 %: 0.70 × 20,000 = $14,000. Brecha = 14,000 − 7,000 = **$7,000 al mes**.",
              en: "Salary of $20,000 and estimated pension of $7,000. Replacement rate = 7,000 ÷ 20,000 × 100 = **35%**. 70% target: 0.70 × 20,000 = $14,000. Gap = 14,000 − 7,000 = **$7,000 a month**.",
            },
            interpret: { es: "Mientras más baja la tasa, más tendrás que recortar gastos al retirarte o más ahorro voluntario necesitas desde hoy.", en: "The lower the rate, the more you will have to cut spending at retirement or the more voluntary saving you need starting today." },
          },
        ],
      },
      {
        heading: { es: "Comisiones, rendimiento neto y ahorro voluntario", en: "Fees, net return and voluntary savings" },
        body: [
          {
            es: "Las AFORE cobran una **comisión anual** como porcentaje de tu saldo. Pero no compares solo la comisión: lo que importa es el **rendimiento neto**, lo que gana tu dinero **después** de comisiones. La CONSAR publica un indicador de rendimiento neto para comparar. Puedes **cambiarte de AFORE** (hacer un traspaso) siguiendo sus reglas.",
            en: "AFOREs charge an **annual fee** as a percentage of your balance. But do not compare only the fee: what matters is the **net return**, what your money earns **after** fees. CONSAR publishes a net-return indicator for comparison. You can **switch AFOREs** (a transfer) following its rules.",
          },
          {
            es: "Las aportaciones obligatorias suelen no alcanzar para mantener tu nivel de vida. Las **aportaciones voluntarias** cierran la brecha: puedes hacerlas por domiciliación, en ventanilla o en tiendas autorizadas. Las de **largo plazo** pueden tener beneficios fiscales dentro de ciertos límites. Y gracias al **interés compuesto**, empezar 10 años antes vale mucho más que aportar el doble al final.",
            en: "Mandatory contributions usually are not enough to keep your standard of living. **Voluntary contributions** close the gap: you can make them by direct debit, at a counter or at authorized stores. **Long-term** ones may have tax benefits within certain limits. And thanks to **compound interest**, starting 10 years earlier is worth much more than contributing twice as much at the end.",
          },
          {
            es: "Cuida también tus semanas: retirar dinero por **desempleo** está permitido, pero reduce tus semanas cotizadas. Y registra a tus **beneficiarios** y mantén tus datos al día. Mini ejemplo: con un saldo de $200,000, una diferencia de 1 punto en el rendimiento neto equivale a $2,000 en un año.",
            en: "Also protect your weeks: withdrawing money due to **unemployment** is allowed, but it reduces your weeks of contributions. And register your **beneficiaries** and keep your data up to date. Mini example: with a $200,000 balance, a 1-point difference in net return equals $2,000 in one year.",
          },
        ],
        formulas: [
          {
            name: { es: "Comisión, rendimiento neto y ganancia neta de tu AFORE", en: "Fee, net return and net gain of your AFORE" },
            expression: "Comisión ($) = Comisión % × Saldo;  Rendimiento neto ≈ Rendimiento bruto − Comisión %;  Ganancia neta = Rendimiento neto × Saldo",
            variables: [
              { symbol: "Saldo", meaning: { es: "Lo que tienes en tu cuenta AFORE, en pesos.", en: "What you have in your AFORE account, in pesos." } },
              { symbol: "Comisión %", meaning: { es: "Lo que cobra la AFORE al año como porcentaje del saldo; en decimal, 0.5 % = 0.005.", en: "What the AFORE charges per year as a percentage of the balance; as a decimal, 0.5% = 0.005." } },
              { symbol: "Rendimiento bruto", meaning: { es: "Lo que ganó la inversión en el año, en %, antes de comisiones.", en: "What the investment earned in the year, in %, before fees." } },
              { symbol: "Rendimiento neto", meaning: { es: "Lo que realmente gana tu dinero después de la comisión, en %.", en: "What your money really earns after the fee, in %." } },
            ],
            steps: [
              { es: "Convierte los porcentajes a decimal: 0.5 % = 0.005; 6.5 % = 0.065.", en: "Convert percentages to decimals: 0.5% = 0.005; 6.5% = 0.065." },
              { es: "Comisión en pesos: comisión × saldo.", en: "Fee in pesos: fee × balance." },
              { es: "Rendimiento neto: rendimiento bruto − comisión (en puntos porcentuales).", en: "Net return: gross return − fee (in percentage points)." },
              { es: "Ganancia neta: rendimiento neto × saldo.", en: "Net gain: net return × balance." },
            ],
            example: {
              es: "Saldo de $250,000, rendimiento bruto 6.5 % y comisión 0.5 % (cifras hipotéticas). Comisión = 0.005 × 250,000 = **$1,250**. Rendimiento neto = 6.5 % − 0.5 % = **6.0 %**. Ganancia neta = 0.06 × 250,000 = **$15,000** (comprobación: 0.065 × 250,000 = 16,250; 16,250 − 1,250 = 15,000).",
              en: "Balance of $250,000, gross return 6.5% and fee 0.5% (hypothetical figures). Fee = 0.005 × 250,000 = **$1,250**. Net return = 6.5% − 0.5% = **6.0%**. Net gain = 0.06 × 250,000 = **$15,000** (check: 0.065 × 250,000 = 16,250; 16,250 − 1,250 = 15,000).",
            },
            interpret: { es: "Para comparar AFORE, gana la de mayor rendimiento neto, aunque su comisión sea un poco más alta.", en: "To compare AFOREs, the one with the higher net return wins, even if its fee is slightly higher." },
            mistake: { es: "Tratar 0.5 % como 0.5 (o como 0.05): 0.5 % en decimal es 0.005.", en: "Treating 0.5% as 0.5 (or as 0.05): 0.5% as a decimal is 0.005." },
          },
          {
            name: { es: "Saldo futuro con interés compuesto", en: "Future balance with compound interest" },
            expression: "Saldo futuro = Saldo × (1 + r)ⁿ",
            variables: [
              { symbol: "Saldo", meaning: { es: "Lo que depositas hoy, en pesos.", en: "What you deposit today, in pesos." } },
              { symbol: "r", meaning: { es: "Rendimiento neto anual en decimal (4 % = 0.04).", en: "Annual net return as a decimal (4% = 0.04)." } },
              { symbol: "n", meaning: { es: "Número de años que se queda invertido.", en: "Number of years it stays invested." } },
              { symbol: "(1 + r)ⁿ", meaning: { es: "Multiplicar (1 + r) por sí mismo n veces: así se gana interés sobre el interés.", en: "Multiplying (1 + r) by itself n times: that is how you earn interest on interest." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal y súmale 1: 5 % → 1.05.", en: "Convert the rate to a decimal and add 1: 5% → 1.05." },
              { es: "Elévalo a los años: multiplica 1.05 por sí mismo n veces.", en: "Raise it to the years: multiply 1.05 by itself n times." },
              { es: "Multiplica el resultado por el saldo inicial.", en: "Multiply the result by the starting balance." },
            ],
            example: {
              es: "Depositas $40,000 con un rendimiento neto hipotético de 5 % anual por 3 años. 1.05 × 1.05 = 1.1025; × 1.05 = 1.157625. Saldo = 40,000 × 1.157625 = **$46,305**.",
              en: "You deposit $40,000 at a hypothetical 5% annual net return for 3 years. 1.05 × 1.05 = 1.1025; × 1.05 = 1.157625. Balance = 40,000 × 1.157625 = **$46,305**.",
            },
            mistake: { es: "Usar interés simple (40,000 × 0.05 × 3 = $6,000 → $46,000): se pierde el interés que gana el interés.", en: "Using simple interest (40,000 × 0.05 × 3 = $6,000 → $46,000): it misses the interest earned on interest." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Comisión más baja o rendimiento neto más alto?", en: "Lower fee or higher net return?" },
        problem: {
          es: "Con números hipotéticos: la AFORE A rinde 6.00 % y cobra 0.55 %; la AFORE B rinde 6.50 % y cobra 0.57 %. Si tu saldo es de $400,000, ¿cuál te deja más en un año?",
          en: "With hypothetical numbers: AFORE A earns 6.00% and charges 0.55%; AFORE B earns 6.50% and charges 0.57%. If your balance is $400,000, which leaves you more in one year?",
        },
        steps: [
          { es: "Rendimiento neto A: 6.00 % − 0.55 % = 5.45 %. Rendimiento neto B: 6.50 % − 0.57 % = 5.93 %.", en: "Net return A: 6.00% − 0.55% = 5.45%. Net return B: 6.50% − 0.57% = 5.93%." },
          { es: "Ganancia A: $400,000 × 5.45 % = $21,800.", en: "Gain A: $400,000 × 5.45% = $21,800." },
          { es: "Ganancia B: $400,000 × 5.93 % = $23,720.", en: "Gain B: $400,000 × 5.93% = $23,720." },
          { es: "Diferencia: $23,720 − $21,800 = $1,920 a favor de B.", en: "Difference: $23,720 − $21,800 = $1,920 in favor of B." },
        ],
        result: {
          es: "Aunque B cobra un poco más, te deja $1,920 más en el año. Compara por rendimiento neto, no solo por comisión.",
          en: "Although B charges slightly more, it leaves you $1,920 more for the year. Compare by net return, not only by fee.",
        },
      },
      {
        title: { es: "Tu brecha de retiro", en: "Your retirement gap" },
        problem: {
          es: "Andrés gana $25,000 al mes. Su estimación de pensión es de $10,000. Quiere una pensión del 70 % de su sueldo. ¿Cuál es su tasa de reemplazo y cuánto le falta al mes?",
          en: "Andrés earns $25,000 a month. His pension estimate is $10,000. He wants a pension of 70% of his salary. What is his replacement rate and how much is he short each month?",
        },
        steps: [
          { es: "Tasa de reemplazo: $10,000 ÷ $25,000 × 100 = 40 %.", en: "Replacement rate: $10,000 ÷ $25,000 × 100 = 40%." },
          { es: "Meta: 70 % × $25,000 = $17,500 al mes.", en: "Target: 70% × $25,000 = $17,500 a month." },
          { es: "Brecha: $17,500 − $10,000 = $7,500 al mes.", en: "Gap: $17,500 − $10,000 = $7,500 a month." },
        ],
        result: {
          es: "Su pensión cubriría 40 % de su sueldo y le faltarían $7,500 al mes. Ese hueco se cubre con aportaciones voluntarias u otros ahorros para el retiro, empezando cuanto antes.",
          en: "His pension would cover 40% of his salary and he would be $7,500 a month short. That gap is filled with voluntary contributions or other retirement savings, starting as soon as possible.",
        },
      },
    ],
    keyPoints: [
      { es: "La AFORE administra tu cuenta individual y la invierte en SIEFORES; la CONSAR la supervisa.", en: "The AFORE manages your individual account and invests it in SIEFOREs; CONSAR supervises it." },
      { es: "Subcuentas: RCV, vivienda (INFONAVIT) y aportaciones voluntarias.", en: "Sub-accounts: RCV, housing (INFONAVIT) and voluntary contributions." },
      { es: "Ley 73: pensión por semanas y salario promedio; Ley 97: pensión por saldo acumulado.", en: "1973 Law: pension by weeks and average salary; 1997 Law: pension by accumulated balance." },
      { es: "Compara AFORE por rendimiento neto, no solo por comisión.", en: "Compare AFOREs by net return, not only by fee." },
      { es: "Las aportaciones voluntarias tempranas aprovechan el interés compuesto.", en: "Early voluntary contributions take advantage of compound interest." },
      { es: "Registra beneficiarios y mantén tus datos actualizados.", en: "Register beneficiaries and keep your data up to date." },
    ],
    normativeNote: {
      es: "Contenido educativo basado en reglas generales del Sistema de Ahorro para el Retiro (Ley del SAR, Ley del Seguro Social de 1973 y de 1997) supervisado por la CONSAR. Los porcentajes de aportación, comisiones, requisitos de semanas, edades, límites fiscales y reglas de traspaso cambian con reformas: verifica la versión vigente (2026) con tu AFORE o la CONSAR. Los rendimientos y comisiones de los ejemplos son hipotéticos.",
      en: "Educational content based on general rules of the Retirement Savings System (SAR Law, 1973 and 1997 Social Security Laws) supervised by CONSAR. Contribution percentages, fees, weeks requirements, ages, tax limits and transfer rules change with reforms: verify the current version (2026) with your AFORE or CONSAR. Returns and fees in the examples are hypothetical.",
    },
    exerciseIds: ['PER-14-E1', 'PER-14-E2', 'PER-14-E3', 'PER-14-E4', 'PER-14-E5', 'PER-14-E6'],
  },

  // ───────────────────────────── PER-15 ─────────────────────────────
  {
    id: 'PER-15',
    level: 1,
    topicIds: ['PER.15'],
    title: { es: "Planeación financiera y patrimonial", en: "Financial and estate planning" },
    summary: {
      es: "La planeación financiera y patrimonial une tus metas, tu patrimonio y la protección de tu familia en un plan que revisas cada año y que define qué pasará con tus bienes.",
      en: "Financial and estate planning brings together your goals, your net worth and your family's protection in a plan you review every year and that defines what will happen to your assets.",
    },
    minutes: 17,
    objectives: [
      { es: "Calcular tu patrimonio neto con un balance personal.", en: "Compute your net worth with a personal balance sheet." },
      { es: "Convertir metas de largo plazo en un ahorro mensual concreto.", en: "Turn long-term goals into a concrete monthly saving amount." },
      { es: "Explicar para qué sirven el testamento y la designación de beneficiarios.", en: "Explain what a will and the designation of beneficiaries are for." },
    ],
    theory: [
      {
        heading: { es: "El plan financiero: dónde estás y a dónde vas", en: "The financial plan: where you are and where you are going" },
        body: [
          {
            es: "Un **plan financiero** es un mapa con tres partes: **dónde estás** (lo que tienes y lo que debes), **a dónde quieres llegar** (tus metas) y **cómo vas a llegar** (cuánto ahorrar, invertir y proteger). No es solo para ricos: sirve igual con un sueldo modesto.",
            en: "A **financial plan** is a map with three parts: **where you are** (what you own and what you owe), **where you want to go** (your goals) and **how you will get there** (how much to save, invest and protect). It is not only for the wealthy: it works just as well on a modest salary.",
          },
          {
            es: "El punto de partida es tu **balance personal**: suma tus **activos** (lo que tienes y vale dinero: cuentas, AFORE, auto, casa) y resta tus **pasivos** (lo que debes: tarjetas, créditos, hipoteca). El resultado es tu **patrimonio neto**. Si crece año con año, vas por buen camino.",
            en: "The starting point is your **personal balance sheet**: add up your **assets** (what you own that is worth money: accounts, AFORE, car, home) and subtract your **liabilities** (what you owe: cards, loans, mortgage). The result is your **net worth**. If it grows year after year, you are on the right track.",
          },
          {
            es: "Mini ejemplo: si tienes $80,000 en activos y debes $30,000, tu patrimonio neto es $50,000. Un patrimonio neto negativo significa que debes más de lo que tienes.",
            en: "Mini example: if you have $80,000 in assets and owe $30,000, your net worth is $50,000. A negative net worth means you owe more than you own.",
          },
        ],
        formulas: [
          {
            name: { es: "Patrimonio neto (balance personal)", en: "Net worth (personal balance sheet)" },
            expression: "Patrimonio neto = Activos − Pasivos",
            variables: [
              { symbol: "Activos", meaning: { es: "Todo lo que tienes y vale dinero (cuentas, AFORE, auto, casa), sumado en pesos.", en: "Everything you own that is worth money (accounts, AFORE, car, home), added up in pesos." } },
              { symbol: "Pasivos", meaning: { es: "Todo lo que debes (tarjetas, créditos, hipoteca), sumado en pesos.", en: "Everything you owe (cards, loans, mortgage), added up in pesos." } },
              { symbol: "Patrimonio neto", meaning: { es: "Lo que realmente es tuyo si pagaras todas tus deudas, en pesos.", en: "What is really yours if you paid off all your debts, in pesos." } },
            ],
            steps: [
              { es: "Haz una lista de lo que tienes y súmalo: total de activos.", en: "List what you own and add it up: total assets." },
              { es: "Haz una lista de lo que debes y súmalo: total de pasivos.", en: "List what you owe and add it up: total liabilities." },
              { es: "Resta pasivos a activos.", en: "Subtract liabilities from assets." },
            ],
            example: {
              es: "Ahorro $30,000 + AFORE $120,000 + moto $40,000 = activos $190,000. Tarjeta $18,000 + préstamo $50,000 = pasivos $68,000. Patrimonio neto = 190,000 − 68,000 = **$122,000**.",
              en: "Savings $30,000 + AFORE $120,000 + motorcycle $40,000 = assets $190,000. Card $18,000 + loan $50,000 = liabilities $68,000. Net worth = 190,000 − 68,000 = **$122,000**.",
            },
            interpret: { es: "Positivo y creciendo cada año = vas bien. Negativo = debes más de lo que tienes.", en: "Positive and growing each year = you are on track. Negative = you owe more than you own." },
            mistake: { es: "Sumar tu sueldo a los activos: el sueldo es un ingreso del mes, no algo que ya tienes.", en: "Adding your salary to assets: salary is monthly income, not something you already own." },
          },
        ],
      },
      {
        heading: { es: "Metas por etapas de vida", en: "Goals by life stage" },
        body: [
          {
            es: "Tus metas cambian con la edad. Al empezar a trabajar importan el fondo de emergencia y salir de deudas caras; con familia, la vivienda, la educación de los hijos y los seguros; cerca del retiro, conservar lo ahorrado y planear la herencia. Ordena tus metas en **corto** (menos de 1 año), **mediano** (1 a 5) y **largo plazo** (más de 5).",
            en: "Your goals change with age. When you start working, the emergency fund and getting out of expensive debt matter; with a family, housing, children's education and insurance; near retirement, preserving savings and planning the inheritance. Sort your goals into **short** (under 1 year), **medium** (1 to 5) and **long term** (over 5).",
          },
          {
            es: "Una buena meta es **concreta, medible y con fecha**: no \"ahorrar para un coche\", sino \"juntar $120,000 de enganche en 30 meses\". Así la conviertes en un ahorro mensual: lo que falta dividido entre los meses disponibles. Para metas lejanas, ese dinero conviene invertirlo para que no lo coma la inflación.",
            en: "A good goal is **specific, measurable and dated**: not \"save for a car\", but \"gather a $120,000 down payment in 30 months\". That way you turn it into a monthly saving: what is missing divided by the months available. For distant goals, that money should be invested so inflation does not eat it.",
          },
          {
            es: "Mini ejemplo: para juntar $36,000 en 12 meses, necesitas $3,000 al mes. Revisa el plan **una vez al año** o cuando cambie tu vida: un nuevo trabajo, un hijo, una mudanza.",
            en: "Mini example: to gather $36,000 in 12 months, you need $3,000 a month. Review the plan **once a year** or when your life changes: a new job, a child, a move.",
          },
        ],
        formulas: [
          {
            name: { es: "Ahorro mensual para llegar a una meta", en: "Monthly saving to reach a goal" },
            expression: "Ahorro mensual = (Meta − Lo que ya tienes) ÷ Meses disponibles",
            variables: [
              { symbol: "Meta", meaning: { es: "La cantidad total que quieres juntar, en pesos.", en: "The total amount you want to gather, in pesos." } },
              { symbol: "Lo que ya tienes", meaning: { es: "Lo que ya apartaste para esa meta, en pesos.", en: "What you have already set aside for that goal, in pesos." } },
              { symbol: "Meses disponibles", meaning: { es: "Meses que faltan para la fecha de la meta.", en: "Months left until the goal date." } },
            ],
            steps: [
              { es: "Resta lo que ya tienes a la meta: lo que falta.", en: "Subtract what you already have from the goal: what is missing." },
              { es: "Divide lo que falta entre los meses disponibles.", en: "Divide what is missing by the months available." },
            ],
            example: {
              es: "Meta de $60,000 para un viaje en 18 meses; ya tienes $15,000. Falta: 60,000 − 15,000 = $45,000. Ahorro mensual: 45,000 ÷ 18 = **$2,500 al mes**.",
              en: "Goal of $60,000 for a trip in 18 months; you already have $15,000. Missing: 60,000 − 15,000 = $45,000. Monthly saving: 45,000 ÷ 18 = **$2,500 a month**.",
            },
            mistake: { es: "Dividir la meta completa entre los meses sin descontar lo que ya tienes.", en: "Dividing the full goal by the months without subtracting what you already have." },
          },
        ],
      },
      {
        heading: { es: "Planeación patrimonial: proteger y transmitir", en: "Estate planning: protect and pass on" },
        body: [
          {
            es: "La **planeación patrimonial** decide qué pasará con tus bienes si faltas o ya no puedes decidir. Su herramienta básica es el **testamento**: un documento, normalmente hecho ante **notario**, donde dices quién recibe cada bien y quién cuidará a tus hijos menores (tutor).",
            en: "**Estate planning** decides what will happen to your assets if you die or can no longer decide. Its basic tool is the **will**: a document, usually made before a **notary**, where you say who receives each asset and who will look after your minor children (guardian).",
          },
          {
            es: "Sin testamento, la familia tiene que seguir un **juicio sucesorio intestamentario**: suele ser más lento, más caro y puede generar conflictos. En México hay campañas como el **Mes del Testamento** (septiembre), con costos reducidos en notarías participantes.",
            en: "Without a will, the family must go through an **intestate succession proceeding**: it is usually slower, more expensive and can cause conflict. In Mexico there are campaigns such as **Will Month** (September), with reduced costs at participating notaries.",
          },
          {
            es: "Además, varios productos se entregan directo a quien tú designes como **beneficiario**: cuentas bancarias, seguros de vida y tu AFORE. Revisa que estén registrados y actualizados. Mini ejemplo: si en tu seguro de vida sigue como beneficiaria tu expareja, a ella le pagarán, aunque tu testamento diga otra cosa respecto a tus demás bienes.",
            en: "In addition, several products are paid directly to whoever you designate as **beneficiary**: bank accounts, life insurance and your AFORE. Check that they are registered and up to date. Mini example: if your ex-partner is still the beneficiary of your life insurance, she will be paid, even if your will says something else about your other assets.",
          },
        ],
        bullets: [
          { es: "Haz testamento y actualízalo cuando cambie tu familia o tus bienes.", en: "Make a will and update it when your family or assets change." },
          { es: "Designa beneficiarios en cuentas, seguros y AFORE.", en: "Designate beneficiaries in accounts, insurance and AFORE." },
          { es: "Guarda en un lugar conocido la lista de cuentas, pólizas y documentos.", en: "Keep a list of accounts, policies and documents in a known place." },
          { es: "Protege el patrimonio con seguros antes de buscar hacerlo crecer.", en: "Protect your wealth with insurance before trying to grow it." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El balance personal de una pareja", en: "A couple's personal balance sheet" },
        problem: {
          es: "Sofía y Daniel tienen: casa $1,200,000, auto $180,000, ahorro $60,000 y AFORE $250,000. Deben: hipoteca $700,000 y tarjeta $30,000. ¿Cuál es su patrimonio neto?",
          en: "Sofía and Daniel own: home $1,200,000, car $180,000, savings $60,000 and AFORE $250,000. They owe: mortgage $700,000 and card $30,000. What is their net worth?",
        },
        steps: [
          { es: "Activos: 1,200,000 + 180,000 + 60,000 + 250,000 = $1,690,000.", en: "Assets: 1,200,000 + 180,000 + 60,000 + 250,000 = $1,690,000." },
          { es: "Pasivos: 700,000 + 30,000 = $730,000.", en: "Liabilities: 700,000 + 30,000 = $730,000." },
          { es: "Patrimonio neto: 1,690,000 − 730,000 = $960,000.", en: "Net worth: 1,690,000 − 730,000 = $960,000." },
        ],
        result: {
          es: "Su patrimonio neto es $960,000. Ojo: casi todo está en la casa, que no se puede usar rápido en una emergencia; su liquidez es baja.",
          en: "Their net worth is $960,000. Note: almost all of it is in the house, which cannot be used quickly in an emergency; their liquidity is low.",
        },
      },
      {
        title: { es: "De la meta al ahorro mensual", en: "From goal to monthly saving" },
        problem: {
          es: "Karla quiere $150,000 de enganche para un departamento en 30 meses. Ya tiene $30,000 ahorrados. ¿Cuánto debe apartar al mes?",
          en: "Karla wants a $150,000 down payment for an apartment in 30 months. She already has $30,000 saved. How much should she set aside each month?",
        },
        steps: [
          { es: "Lo que falta: $150,000 − $30,000 = $120,000.", en: "What is missing: $150,000 − $30,000 = $120,000." },
          { es: "Meses disponibles: 30.", en: "Months available: 30." },
          { es: "Ahorro mensual: $120,000 ÷ 30 = $4,000.", en: "Monthly saving: $120,000 ÷ 30 = $4,000." },
        ],
        result: {
          es: "Karla debe apartar $4,000 al mes. Si lo invierte en un instrumento de bajo riesgo, los rendimientos le darán un pequeño colchón extra.",
          en: "Karla must set aside $4,000 a month. If she invests it in a low-risk instrument, the returns will give her a small extra cushion.",
        },
      },
    ],
    keyPoints: [
      { es: "Un plan financiero responde: dónde estás, a dónde vas y cómo llegarás.", en: "A financial plan answers: where you are, where you are going and how you will get there." },
      { es: "Patrimonio neto = activos − pasivos; mídelo cada año.", en: "Net worth = assets − liabilities; measure it every year." },
      { es: "Metas concretas, medibles y con fecha se convierten en un ahorro mensual.", en: "Specific, measurable, dated goals turn into a monthly saving amount." },
      { es: "El testamento evita un juicio sucesorio intestamentario largo y costoso.", en: "A will avoids a long and costly intestate succession proceeding." },
      { es: "Cuentas, seguros y AFORE se pagan a los beneficiarios designados: mantenlos al día.", en: "Accounts, insurance and AFORE are paid to designated beneficiaries: keep them up to date." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las reglas de testamentos, sucesiones y designación de beneficiarios dependen de la legislación civil de cada estado y de la regulación financiera; las campañas de descuento notarial varían cada año. Verifica la versión vigente (2026) y consulta a un notario para tu caso.",
      en: "Educational content. Rules on wills, successions and beneficiary designation depend on each state's civil law and on financial regulation; notary discount campaigns vary each year. Verify the current version (2026) and consult a notary for your case.",
    },
    exerciseIds: ['PER-15-E1', 'PER-15-E2', 'PER-15-E3', 'PER-15-E4', 'PER-15-E5', 'PER-15-E6'],
  },

  // ───────────────────────────── PER-16 ─────────────────────────────
  {
    id: 'PER-16',
    level: 1,
    topicIds: ['PER.16'],
    title: { es: "Prevención de fraudes financieros", en: "Preventing financial fraud" },
    summary: {
      es: "Los fraudes financieros explotan la prisa, el miedo y la ambición; reconocer sus señales y verificar antes de actuar protege tu dinero y tus datos.",
      en: "Financial fraud exploits haste, fear and greed; recognizing its signs and verifying before acting protects your money and your data.",
    },
    minutes: 17,
    objectives: [
      { es: "Reconocer los fraudes más comunes: phishing, vishing, smishing, robo de identidad, pirámides y préstamos abusivos.", en: "Recognize the most common frauds: phishing, vishing, smishing, identity theft, pyramids and abusive loans." },
      { es: "Detectar con números una promesa de rendimiento imposible.", en: "Detect with numbers an impossible return promise." },
      { es: "Saber qué hacer y a quién acudir si eres víctima de un fraude.", en: "Know what to do and where to go if you are a fraud victim." },
    ],
    theory: [
      {
        heading: { es: "Fraudes por suplantación: te engañan para que tú les des acceso", en: "Impersonation fraud: they trick you into giving access" },
        body: [
          {
            es: "Muchos fraudes no rompen ningún sistema: te convencen a **ti** de entregar tus datos. Se hacen pasar por tu banco, una paquetería, el SAT o un familiar. El **phishing** llega por correo o páginas falsas; el **smishing**, por SMS o WhatsApp; el **vishing**, por llamada.",
            en: "Many frauds do not break any system: they convince **you** to hand over your data. They pose as your bank, a delivery company, the SAT or a relative. **Phishing** arrives by email or fake websites; **smishing**, by SMS or WhatsApp; **vishing**, by phone call.",
          },
          {
            es: "Regla de oro: tu banco **nunca** te pedirá tu NIP, tu contraseña completa ni los **códigos de un solo uso** que te llegan por SMS o la app. Si alguien te los pide, es fraude, aunque sepa tu nombre y los últimos dígitos de tu tarjeta. Cuelga y llama tú al número oficial que viene al reverso de tu tarjeta.",
            en: "Golden rule: your bank will **never** ask for your PIN, your full password or the **one-time codes** you receive by SMS or in the app. If someone asks for them, it is fraud, even if they know your name and the last digits of your card. Hang up and call the official number on the back of your card yourself.",
          },
          {
            es: "Otras variantes: el **robo de identidad** (usan tus datos para pedir créditos a tu nombre), el **SIM swapping** (duplican tu chip para recibir tus códigos), la **clonación de tarjetas** y las tiendas en línea falsas. Mini ejemplo: un SMS dice \"Tu cuenta fue bloqueada, entra aquí\" con un enlace raro: no lo abras.",
            en: "Other variants: **identity theft** (they use your data to take out loans in your name), **SIM swapping** (they duplicate your chip to receive your codes), **card cloning** and fake online stores. Mini example: an SMS says \"Your account was blocked, log in here\" with a strange link: do not open it.",
          },
        ],
        bullets: [
          { es: "Urgencia: \"tienes 10 minutos o se bloquea tu cuenta\".", en: "Urgency: \"you have 10 minutes or your account is blocked\"." },
          { es: "Piden datos secretos: NIP, contraseñas, códigos.", en: "They ask for secret data: PIN, passwords, codes." },
          { es: "Enlaces o números que no son los oficiales.", en: "Links or numbers that are not the official ones." },
          { es: "Presión emocional: un familiar \"detenido\" o \"accidentado\".", en: "Emotional pressure: a relative \"arrested\" or \"in an accident\"." },
        ],
      },
      {
        heading: { es: "Fraudes de inversión: pirámides y promesas imposibles", en: "Investment fraud: pyramids and impossible promises" },
        body: [
          {
            es: "Un **esquema Ponzi** o **pirámide** promete rendimientos altos y seguros, pero no tiene un negocio real: paga a los primeros con el dinero de los que entran después. Mientras entra gente nueva parece funcionar; cuando deja de entrar, se derrumba y la mayoría pierde.",
            en: "A **Ponzi scheme** or **pyramid** promises high, safe returns, but has no real business: it pays early investors with the money of those who join later. While new people keep coming in it seems to work; when they stop, it collapses and most people lose.",
          },
          {
            es: "Señales: rendimientos **garantizados** muy por encima de lo normal, bonos por **reclutar** a otros, explicaciones vagas (\"trading con inteligencia artificial\", \"criptos secretas\"), presión para invertir ya y una empresa **no registrada** ante las autoridades. Recuerda: **a mayor rendimiento, mayor riesgo**; nadie puede garantizar ganancias altas sin riesgo.",
            en: "Signs: **guaranteed** returns far above normal, bonuses for **recruiting** others, vague explanations (\"AI trading\", \"secret cryptos\"), pressure to invest now and a company **not registered** with the authorities. Remember: **the higher the return, the higher the risk**; nobody can guarantee high profits without risk.",
          },
          {
            es: "Haz las cuentas: un \"10 % mensual\" parece poco, pero son 120 % al año sin capitalizar, y con interés compuesto más de 200 %. Mini ejemplo: si algo promete duplicar tu dinero en 6 meses \"sin riesgo\", ya tienes la respuesta.",
            en: "Do the math: a \"10% monthly\" looks small, but it is 120% a year without compounding, and over 200% with compound interest. Mini example: if something promises to double your money in 6 months \"risk-free\", you already have your answer.",
          },
        ],
        formulas: [
          {
            name: { es: "Pasar una tasa mensual a anual (simple y compuesta)", en: "Turning a monthly rate into an annual one (simple and compound)" },
            expression: "Anual simple = Tasa mensual × 12;  Anual compuesta = (1 + Tasa mensual)¹² − 1",
            variables: [
              { symbol: "Tasa mensual", meaning: { es: "El rendimiento que prometen cada mes, en decimal (8 % = 0.08).", en: "The return promised each month, as a decimal (8% = 0.08)." } },
              { symbol: "12", meaning: { es: "Los meses de un año.", en: "The months in a year." } },
              { symbol: "(1 + Tasa mensual)¹²", meaning: { es: "Multiplicar (1 + tasa) por sí mismo 12 veces: reinvertir lo ganado cada mes.", en: "Multiplying (1 + rate) by itself 12 times: reinvesting what you earn each month." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal: 8 % = 0.08.", en: "Convert the rate to a decimal: 8% = 0.08." },
              { es: "Simple: multiplica por 12.", en: "Simple: multiply by 12." },
              { es: "Compuesta: eleva (1 + tasa) a la 12 (puedes ir elevando al cuadrado: ², ⁴, ⁸ y luego × ⁴), réstale 1 y pásalo a %.", en: "Compound: raise (1 + rate) to the 12th (you can square step by step: ², ⁴, ⁸ and then × ⁴), subtract 1 and turn it into %." },
            ],
            example: {
              es: "Prometen 8 % mensual. Simple: 0.08 × 12 = **96 % al año**. Compuesta: 1.08² = 1.1664; 1.1664² ≈ 1.3605; 1.3605² ≈ 1.8509; 1.8509 × 1.3605 ≈ 2.5182; 2.5182 − 1 = 1.5182 ≈ **152 % al año**.",
              en: "They promise 8% a month. Simple: 0.08 × 12 = **96% a year**. Compound: 1.08² = 1.1664; 1.1664² ≈ 1.3605; 1.3605² ≈ 1.8509; 1.8509 × 1.3605 ≈ 2.5182; 2.5182 − 1 = 1.5182 ≈ **152% a year**.",
            },
            interpret: { es: "Si el resultado anual es muchas veces lo que pagan las inversiones reguladas y además lo \"garantizan\", trátalo como señal de fraude.", en: "If the annual result is many times what regulated investments pay and they also \"guarantee\" it, treat it as a fraud red flag." },
          },
          {
            name: { es: "Interés simple prometido en pesos", en: "Promised simple interest in pesos" },
            expression: "Interés = Capital × Tasa mensual × Meses",
            variables: [
              { symbol: "Capital", meaning: { es: "El dinero que se invierte, en pesos.", en: "The money invested, in pesos." } },
              { symbol: "Tasa mensual", meaning: { es: "Lo prometido por mes, en decimal.", en: "What is promised per month, as a decimal." } },
              { symbol: "Meses", meaning: { es: "Tiempo que dura la inversión, en meses.", en: "How long the investment lasts, in months." } },
            ],
            steps: [
              { es: "Convierte la tasa a decimal.", en: "Convert the rate to a decimal." },
              { es: "Multiplica capital × tasa: interés de un mes.", en: "Multiply capital × rate: one month of interest." },
              { es: "Multiplica por el número de meses.", en: "Multiply by the number of months." },
            ],
            example: {
              es: "Te ofrecen 8 % mensual simple sobre $10,000 durante 12 meses. Un mes: 10,000 × 0.08 = $800. Doce meses: 800 × 12 = **$9,600**, casi duplicar tu dinero \"sin riesgo\".",
              en: "You are offered 8% simple monthly on $10,000 for 12 months. One month: 10,000 × 0.08 = $800. Twelve months: 800 × 12 = **$9,600**, almost doubling your money \"risk-free\".",
            },
            mistake: { es: "Calcular solo un mes ($800) y pensar que no suena exagerado: siempre llévalo a un año.", en: "Computing only one month ($800) and thinking it does not sound extreme: always take it to a full year." },
          },
        ],
      },
      {
        heading: { es: "Préstamos abusivos y qué hacer si te defraudan", en: "Abusive loans and what to do if you are defrauded" },
        body: [
          {
            es: "Las **apps de préstamo fraudulentas** (a veces llamadas \"montadeudas\") prestan poco, cobran mucho y piden permiso para ver tus contactos y fotos; si no pagas, te amenazan o exhiben ante tu familia. Antes de pedir prestado o invertir, **verifica** que la entidad esté registrada, por ejemplo en el registro de prestadores de servicios financieros de la **CONDUSEF** (SIPRES).",
            en: "**Fraudulent lending apps** (sometimes called \"debt-collector traps\") lend little, charge a lot and ask for permission to see your contacts and photos; if you do not pay, they threaten or expose you to your family. Before borrowing or investing, **verify** that the entity is registered, for example in **CONDUSEF**'s registry of financial service providers (SIPRES).",
          },
          {
            es: "Si caes en un fraude, actúa rápido: 1) llama a tu banco para **bloquear** tarjetas y cuentas; 2) cambia contraseñas; 3) presenta tu **aclaración** por los cargos no reconocidos; 4) acude a la CONDUSEF si el banco no te resuelve y denuncia ante la autoridad (como la policía cibernética). Guarda capturas, números y folios.",
            en: "If you fall for a fraud, act fast: 1) call your bank to **block** cards and accounts; 2) change passwords; 3) file your **dispute** for unrecognized charges; 4) go to CONDUSEF if the bank does not resolve it and report it to the authorities (such as the cyber police). Keep screenshots, numbers and reference numbers.",
          },
          {
            es: "Tampoco prestes tu cuenta para \"recibir un depósito de un conocido\": podrías volverte una **cuenta mula** que mueve dinero de fraudes y meterte en problemas legales. Mini ejemplo: alguien en redes te ofrece $1,000 por dejarle usar tu tarjeta de débito una semana: es una trampa.",
            en: "Also never lend your account to \"receive a deposit for an acquaintance\": you could become a **money mule** account that moves fraud money and get into legal trouble. Mini example: someone on social media offers you $1,000 to use your debit card for a week: it is a trap.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto es realmente un 10 % mensual?", en: "How much is 10% a month really?" },
        problem: {
          es: "Un grupo de WhatsApp promete un rendimiento \"garantizado\" de 10 % mensual. Calcula el equivalente anual simple y compuesto.",
          en: "A WhatsApp group promises a \"guaranteed\" return of 10% a month. Compute the simple and compound annual equivalent.",
        },
        steps: [
          { es: "Simple: 10 % × 12 = 120 % al año.", en: "Simple: 10% × 12 = 120% a year." },
          { es: "Compuesto: 1.10^12. Paso a paso: 1.10² = 1.21; 1.21² = 1.4641; 1.4641² ≈ 2.1436; 2.1436 × 1.4641 ≈ 3.1384.", en: "Compound: 1.10^12. Step by step: 1.10² = 1.21; 1.21² = 1.4641; 1.4641² ≈ 2.1436; 2.1436 × 1.4641 ≈ 3.1384." },
          { es: "3.1384 − 1 = 2.1384, es decir, cerca de 214 % al año.", en: "3.1384 − 1 = 2.1384, that is, about 214% a year." },
        ],
        result: {
          es: "Prometen triplicar el dinero en un año \"sin riesgo\". Ningún negocio legítimo puede garantizar eso: es una señal clara de fraude.",
          en: "They promise to triple your money in a year \"risk-free\". No legitimate business can guarantee that: it is a clear sign of fraud.",
        },
      },
      {
        title: { es: "Cómo se derrumba una pirámide", en: "How a pyramid collapses" },
        problem: {
          es: "Diez personas entregan $10,000 cada una a un \"fondo\" que promete 10 % mensual y no invierte en nada. ¿Cuánto tiempo puede pagar sin dinero nuevo?",
          en: "Ten people hand $10,000 each to a \"fund\" that promises 10% a month and invests in nothing. How long can it pay without new money?",
        },
        steps: [
          { es: "Dinero reunido: 10 × $10,000 = $100,000.", en: "Money collected: 10 × $10,000 = $100,000." },
          { es: "Pago mensual prometido: 10 % × $100,000 = $10,000.", en: "Promised monthly payment: 10% × $100,000 = $10,000." },
          { es: "Meses que alcanza: $100,000 ÷ $10,000 = 10 meses.", en: "Months it lasts: $100,000 ÷ $10,000 = 10 months." },
        ],
        result: {
          es: "En 10 meses solo les devolvió su propio dinero y la caja queda en cero. Para seguir \"pagando\" necesita reclutar más gente: por eso las pirámides siempre colapsan.",
          en: "In 10 months it only returned their own money and the box is empty. To keep \"paying\" it needs to recruit more people: that is why pyramids always collapse.",
        },
      },
    ],
    keyPoints: [
      { es: "Tu banco nunca te pide NIP, contraseñas ni códigos de un solo uso.", en: "Your bank never asks for your PIN, passwords or one-time codes." },
      { es: "Urgencia, presión emocional y enlaces raros son señales de fraude.", en: "Urgency, emotional pressure and odd links are signs of fraud." },
      { es: "Rendimientos altos garantizados y bonos por reclutar indican una pirámide.", en: "Guaranteed high returns and recruiting bonuses point to a pyramid." },
      { es: "Verifica que la entidad esté registrada antes de invertir o pedir prestado.", en: "Verify the entity is registered before investing or borrowing." },
      { es: "Si te defraudan: bloquea, cambia contraseñas, reclama, acude a la CONDUSEF y denuncia.", en: "If defrauded: block, change passwords, dispute, go to CONDUSEF and report it." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las referencias a la CONDUSEF, a su registro de prestadores de servicios financieros (SIPRES) y a la policía cibernética son generales; los procedimientos, plazos de aclaración y canales oficiales cambian, así que verifica la versión vigente (2026) en fuentes oficiales.",
      en: "Educational content. References to CONDUSEF, its registry of financial service providers (SIPRES) and the cyber police are general; procedures, dispute deadlines and official channels change, so verify the current version (2026) with official sources.",
    },
    exerciseIds: ['PER-16-E1', 'PER-16-E2', 'PER-16-E3', 'PER-16-E4', 'PER-16-E5', 'PER-16-E6'],
  },

  // ───────────────────────────── PER-17 ─────────────────────────────
  {
    id: 'PER-17',
    level: 1,
    topicIds: ['PER.17'],
    title: { es: "Finanzas conductuales y hábitos financieros", en: "Behavioral finance and financial habits" },
    summary: {
      es: "Las finanzas conductuales muestran que decidimos con atajos mentales que nos hacen gastar o invertir mal; conocerlos y diseñar buenos hábitos te ayuda a actuar a tu favor.",
      en: "Behavioral finance shows that we decide with mental shortcuts that make us spend or invest badly; knowing them and designing good habits helps you act in your favor.",
    },
    minutes: 16,
    objectives: [
      { es: "Identificar los sesgos más comunes en decisiones de dinero.", en: "Identify the most common biases in money decisions." },
      { es: "Calcular el costo de una decisión sesgada, como mantener ahorro y deuda cara al mismo tiempo.", en: "Compute the cost of a biased decision, such as keeping savings and expensive debt at the same time." },
      { es: "Diseñar hábitos y empujones (automatizar, págate primero) que faciliten ahorrar.", en: "Design habits and nudges (automate, pay yourself first) that make saving easier." },
    ],
    theory: [
      {
        heading: { es: "No somos calculadoras: atajos mentales y sesgos", en: "We are not calculators: mental shortcuts and biases" },
        body: [
          {
            es: "La economía clásica supone que decidimos de forma totalmente racional. Las **finanzas conductuales** estudian cómo decidimos **en la vida real**: con emociones, prisa y **atajos mentales**. Cuando esos atajos nos llevan a errores repetidos se llaman **sesgos**. Daniel Kahneman y Richard Thaler recibieron el Premio Nobel de Economía por estudiar estos temas.",
            en: "Classical economics assumes we decide in a fully rational way. **Behavioral finance** studies how we decide **in real life**: with emotions, haste and **mental shortcuts**. When those shortcuts lead us to repeated mistakes they are called **biases**. Daniel Kahneman and Richard Thaler received the Nobel Prize in Economics for studying these topics.",
          },
          {
            es: "El **sesgo del presente** nos hace preferir un gusto hoy aunque nos cueste mucho mañana (por eso cuesta ahorrar para el retiro). La **aversión a las pérdidas** hace que perder $1,000 duela más de lo que alegra ganar $1,000; en experimentos clásicos, aproximadamente el doble.",
            en: "**Present bias** makes us prefer a treat today even if it costs us a lot tomorrow (that is why saving for retirement is hard). **Loss aversion** means losing $1,000 hurts more than winning $1,000 pleases; in classic experiments, roughly twice as much.",
          },
          {
            es: "Mini ejemplo: por aversión a las pérdidas, Beto no vende una acción que lleva tiempo bajando \"para no hacer real la pérdida\", aunque ya no tenga razones para conservarla.",
            en: "Mini example: because of loss aversion, Beto does not sell a stock that has been falling for a while \"so as not to make the loss real\", even though he no longer has reasons to keep it.",
          },
        ],
        bullets: [
          { es: "Sesgo del presente: el hoy pesa demasiado frente al futuro.", en: "Present bias: today weighs too much against the future." },
          { es: "Aversión a las pérdidas: evitamos perder más de lo que buscamos ganar.", en: "Loss aversion: we avoid losing more than we seek to gain." },
          { es: "Anclaje: el primer número que vemos guía nuestra decisión.", en: "Anchoring: the first number we see guides our decision." },
          { es: "Efecto manada: hacemos lo que hacen los demás.", en: "Herd effect: we do what others do." },
          { es: "Exceso de confianza: creemos saber más de lo que sabemos.", en: "Overconfidence: we think we know more than we do." },
        ],
      },
      {
        heading: { es: "Contabilidad mental, anclaje y manada: sesgos que cuestan", en: "Mental accounting, anchoring and herding: costly biases" },
        body: [
          {
            es: "La **contabilidad mental** es tratar el dinero distinto según su \"etiqueta\": el aguinaldo se gasta como \"dinero extra\" y se guardan ahorros al 5 % mientras se debe una tarjeta al 40 %. Pero un peso es un peso: si el ahorro no es tu fondo de emergencia, pagar la deuda cara suele ser mejor.",
            en: "**Mental accounting** is treating money differently by its \"label\": the year-end bonus is spent as \"extra money\" and savings at 5% are kept while owing a card at 40%. But a peso is a peso: if those savings are not your emergency fund, paying the expensive debt is usually better.",
          },
          {
            es: "El **anclaje** se usa mucho en ventas: \"antes $12,000, hoy $7,999\". El precio tachado te ancla y la oferta parece buena aunque no la necesites. El **efecto manada** aparece cuando todos hablan de una inversión de moda y entras sin entenderla, a menudo cuando ya está cara.",
            en: "**Anchoring** is widely used in sales: \"was $12,000, now $7,999\". The crossed-out price anchors you and the deal looks good even if you do not need it. The **herd effect** appears when everyone talks about a trendy investment and you get in without understanding it, often when it is already expensive.",
          },
          {
            es: "Mini ejemplo: con $20,000 ahorrados al 6 % y $20,000 de deuda al 36 %, ganas $1,200 al año pero pagas $7,200: la etiqueta mental te cuesta $6,000.",
            en: "Mini example: with $20,000 saved at 6% and $20,000 of debt at 36%, you earn $1,200 a year but pay $7,200: the mental label costs you $6,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Costo de tener ahorro y deuda cara al mismo tiempo", en: "Cost of holding savings and expensive debt at the same time" },
            expression: "Costo neto anual = Deuda × Tasa de la deuda − Ahorro × Tasa del ahorro",
            variables: [
              { symbol: "Deuda", meaning: { es: "Saldo que debes (por ejemplo, en la tarjeta), en pesos.", en: "Balance you owe (for example, on a card), in pesos." } },
              { symbol: "Tasa de la deuda", meaning: { es: "Interés anual que te cobran, en decimal (45 % = 0.45).", en: "Annual interest you are charged, as a decimal (45% = 0.45)." } },
              { symbol: "Ahorro", meaning: { es: "Dinero guardado que no es tu fondo de emergencia, en pesos.", en: "Saved money that is not your emergency fund, in pesos." } },
              { symbol: "Tasa del ahorro", meaning: { es: "Interés anual que te pagan, en decimal (4 % = 0.04).", en: "Annual interest you are paid, as a decimal (4% = 0.04)." } },
            ],
            steps: [
              { es: "Calcula lo que pagas de intereses: deuda × tasa de la deuda.", en: "Compute the interest you pay: debt × debt rate." },
              { es: "Calcula lo que ganas: ahorro × tasa del ahorro.", en: "Compute what you earn: savings × savings rate." },
              { es: "Resta lo que ganas a lo que pagas.", en: "Subtract what you earn from what you pay." },
            ],
            example: {
              es: "Tienes $10,000 ahorrados al 4 % y debes $10,000 al 45 %. Pagas: 10,000 × 0.45 = $4,500. Ganas: 10,000 × 0.04 = $400. Costo neto = 4,500 − 400 = **$4,100 al año**.",
              en: "You have $10,000 saved at 4% and owe $10,000 at 45%. You pay: 10,000 × 0.45 = $4,500. You earn: 10,000 × 0.04 = $400. Net cost = 4,500 − 400 = **$4,100 a year**.",
            },
            interpret: { es: "Ese costo es lo que te ahorrarías al año si usas ese ahorro para liquidar la deuda (sin tocar tu fondo de emergencia).", en: "That cost is what you would save per year by using those savings to pay off the debt (without touching your emergency fund)." },
            mistake: { es: "Responder solo los intereses de la deuda ($4,500) sin restar lo que gana el ahorro.", en: "Answering only the debt interest ($4,500) without subtracting what the savings earn." },
          },
        ],
      },
      {
        heading: { es: "Diseña hábitos que trabajen por ti", en: "Design habits that work for you" },
        body: [
          {
            es: "Como la fuerza de voluntad se cansa, conviene **diseñar el entorno**. Un **empujón** (nudge) es un pequeño cambio que facilita la buena decisión sin prohibir nada: por ejemplo, que el ahorro sea la opción automática. La **inercia** (sesgo del statu quo) juega a tu favor si lo bueno ocurre sin que tengas que hacer nada.",
            en: "Since willpower gets tired, it is better to **design your environment**. A **nudge** is a small change that makes the good decision easier without banning anything: for example, making saving the automatic option. **Inertia** (status quo bias) works in your favor if the good thing happens without you having to do anything.",
          },
          {
            es: "**Págate primero**: el día de pago, una transferencia automática manda un porcentaje fijo a tu ahorro antes de gastar. Un hábito se forma con **señal, rutina y recompensa**: la señal es el depósito de la quincena, la rutina es apartar, la recompensa es ver crecer tu meta. Otra técnica: la **regla de las 24 horas** antes de una compra no planeada.",
            en: "**Pay yourself first**: on payday, an automatic transfer sends a fixed percentage to your savings before you spend. A habit is formed with **cue, routine and reward**: the cue is the payday deposit, the routine is setting money aside, the reward is seeing your goal grow. Another technique: the **24-hour rule** before an unplanned purchase.",
          },
          {
            es: "Mini ejemplo: si ganas $18,000 al mes y automatizas el 10 %, apartas $1,800 al mes y $21,600 al año sin pensarlo cada vez.",
            en: "Mini example: if you earn $18,000 a month and automate 10%, you set aside $1,800 a month and $21,600 a year without thinking about it each time.",
          },
        ],
        formulas: [
          {
            name: { es: "Ahorro automático y ahorro por un gasto pequeño", en: "Automatic saving and saving from a small expense" },
            expression: "Ahorro automático = Sueldo × % a apartar;  Ahorro por gasto pequeño = Precio × Veces al mes;  Ahorro anual = (Ahorro automático + Ahorro por gasto pequeño) × 12",
            variables: [
              { symbol: "Sueldo", meaning: { es: "Lo que cobras en el periodo (mes o quincena), en pesos.", en: "What you get paid in the period (month or fortnight), in pesos." } },
              { symbol: "% a apartar", meaning: { es: "Porcentaje que mandas al ahorro el día de pago, en decimal (10 % = 0.10).", en: "Percentage you send to savings on payday, as a decimal (10% = 0.10)." } },
              { symbol: "Precio", meaning: { es: "Lo que cuesta el gasto pequeño que dejas (café, refresco), en pesos.", en: "Cost of the small expense you drop (coffee, soda), in pesos." } },
              { symbol: "Veces al mes", meaning: { es: "Cuántas veces al mes lo comprabas (por ejemplo, solo días hábiles).", en: "How many times a month you used to buy it (for example, only workdays)." } },
              { symbol: "12", meaning: { es: "Meses del año (si cobras por quincena, usa 24 quincenas).", en: "Months in the year (if paid every fortnight, use 24 paychecks)." } },
            ],
            steps: [
              { es: "Multiplica tu sueldo por el % que vas a apartar.", en: "Multiply your salary by the % you will set aside." },
              { es: "Multiplica el precio del gasto pequeño por las veces que lo comprabas al mes.", en: "Multiply the small expense's price by how many times a month you bought it." },
              { es: "Suma ambos ahorros del mes y multiplica por 12.", en: "Add both monthly savings and multiply by 12." },
            ],
            example: {
              es: "Ganas $16,000 al mes y apartas 10 %: 16,000 × 0.10 = $1,600. Dejas un refresco de $25 en 22 días hábiles: 25 × 22 = $550. Al mes: 1,600 + 550 = $2,150. Al año: 2,150 × 12 = **$25,800**.",
              en: "You earn $16,000 a month and set aside 10%: 16,000 × 0.10 = $1,600. You drop a $25 soda on 22 workdays: 25 × 22 = $550. Per month: 1,600 + 550 = $2,150. Per year: 2,150 × 12 = **$25,800**.",
            },
            mistake: { es: "Multiplicar el gasto pequeño por 30 días cuando solo lo comprabas en días hábiles, o anualizar solo una de las dos partes.", en: "Multiplying the small expense by 30 days when you only bought it on workdays, or annualizing only one of the two parts." },
          },
        ],
        bullets: [
          { es: "Automatiza el ahorro el mismo día de pago.", en: "Automate saving on payday." },
          { es: "Quita tarjetas guardadas de las apps de compras.", en: "Remove saved cards from shopping apps." },
          { es: "Espera 24 horas antes de una compra no planeada.", en: "Wait 24 hours before an unplanned purchase." },
          { es: "Ponle nombre y fecha a cada meta de ahorro.", en: "Give each saving goal a name and a date." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "El costo de la contabilidad mental", en: "The cost of mental accounting" },
        problem: {
          es: "Paty tiene $20,000 en una cuenta que paga 6 % anual (aparte de su fondo de emergencia) y debe $20,000 en una tarjeta al 36 % anual. ¿Cuánto le cuesta al año mantener ambas?",
          en: "Paty has $20,000 in an account paying 6% a year (apart from her emergency fund) and owes $20,000 on a card at 36% a year. How much does keeping both cost her per year?",
        },
        steps: [
          { es: "Interés que paga: $20,000 × 36 % = $7,200.", en: "Interest she pays: $20,000 × 36% = $7,200." },
          { es: "Interés que gana: $20,000 × 6 % = $1,200.", en: "Interest she earns: $20,000 × 6% = $1,200." },
          { es: "Costo neto: $7,200 − $1,200 = $6,000 al año.", en: "Net cost: $7,200 − $1,200 = $6,000 a year." },
        ],
        result: {
          es: "Mantener ese ahorro \"intocable\" le cuesta $6,000 al año. Usarlo para liquidar la tarjeta le ahorra esa cantidad.",
          en: "Keeping that \"untouchable\" savings costs her $6,000 a year. Using it to pay off the card saves her that amount.",
        },
      },
      {
        title: { es: "Págate primero en automático", en: "Pay yourself first automatically" },
        problem: {
          es: "Iván cobra $9,000 cada quincena. Programa una transferencia automática del 12 % a su cuenta de ahorro el día de pago. ¿Cuánto ahorra en un año?",
          en: "Iván earns $9,000 every two weeks. He sets up an automatic 12% transfer to his savings account on payday. How much does he save in a year?",
        },
        steps: [
          { es: "Por quincena: 12 % × $9,000 = $1,080.", en: "Per paycheck: 12% × $9,000 = $1,080." },
          { es: "Quincenas en un año: 24.", en: "Paychecks in a year: 24." },
          { es: "Ahorro anual: $1,080 × 24 = $25,920.", en: "Annual saving: $1,080 × 24 = $25,920." },
        ],
        result: {
          es: "Iván junta $25,920 al año sin depender de su fuerza de voluntad: la inercia trabaja a su favor.",
          en: "Iván gathers $25,920 a year without relying on willpower: inertia works in his favor.",
        },
      },
    ],
    keyPoints: [
      { es: "Las finanzas conductuales estudian cómo decidimos en realidad, con emociones y atajos.", en: "Behavioral finance studies how we actually decide, with emotions and shortcuts." },
      { es: "Sesgos clave: presente, aversión a pérdidas, anclaje, manada, exceso de confianza.", en: "Key biases: present, loss aversion, anchoring, herding, overconfidence." },
      { es: "La contabilidad mental puede costarte dinero: un peso es un peso.", en: "Mental accounting can cost you money: a peso is a peso." },
      { es: "Diseña el entorno: automatiza el ahorro y págate primero.", en: "Design your environment: automate saving and pay yourself first." },
      { es: "Un hábito se forma con señal, rutina y recompensa.", en: "A habit is formed with cue, routine and reward." },
    ],
    exerciseIds: ['PER-17-E1', 'PER-17-E2', 'PER-17-E3', 'PER-17-E4', 'PER-17-E5', 'PER-17-E6'],
  },

  // ───────────────────────────── PER-18 ─────────────────────────────
  {
    id: 'PER-18',
    level: 1,
    topicIds: ['PER.18'],
    title: { es: "Separar tus finanzas personales de las de tu negocio", en: "Separating your personal finances from your business's" },
    summary: {
      es: "Separar el dinero del negocio del tuyo te permite saber si el negocio realmente gana, pagarte un sueldo sostenible y cumplir mejor con impuestos y créditos.",
      en: "Separating the business's money from yours lets you know whether the business really makes money, pay yourself a sustainable salary and better meet tax and credit requirements.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar por qué el negocio es una entidad distinta de su dueño.", en: "Explain why the business is an entity separate from its owner." },
      { es: "Calcular la utilidad real de un negocio cuando se mezclan gastos personales.", en: "Compute a business's real profit when personal expenses are mixed in." },
      { es: "Definir un sueldo para el dueño y registrar las aportaciones del dueño al negocio.", en: "Set a salary for the owner and record the owner's contributions to the business." },
    ],
    theory: [
      {
        heading: { es: "Tu negocio no eres tú: la entidad económica", en: "Your business is not you: the economic entity" },
        body: [
          {
            es: "En contabilidad hay una idea básica: el **negocio es una entidad distinta** de su dueño, con su propio dinero, deudas y resultados. Las NIF lo llaman **postulado de entidad económica**. Aunque tú seas el único dueño, el dinero del negocio no es tu cartera.",
            en: "In accounting there is a basic idea: the **business is an entity separate** from its owner, with its own money, debts and results. NIF calls it the **economic entity postulate**. Even if you are the sole owner, the business's money is not your wallet.",
          },
          {
            es: "Cuando todo se mezcla en una misma cuenta, pasan tres cosas: **no sabes si el negocio gana** (parece que pierde porque pagaste tu súper con su dinero), **es difícil cumplir con impuestos** (los gastos personales normalmente no son deducibles) y **pierdes acceso a crédito** porque el banco no ve números claros.",
            en: "When everything is mixed in one account, three things happen: **you do not know whether the business makes money** (it seems to lose because you paid your groceries with its money), **it is hard to comply with taxes** (personal expenses are usually not deductible) and **you lose access to credit** because the bank does not see clear numbers.",
          },
          {
            es: "Mini ejemplo: una estética vende $40,000 al mes y su dueña ve solo $5,000 en la cuenta. No es que gane poco: pagó la colegiatura de su hijo y la gasolina familiar desde la cuenta del negocio.",
            en: "Mini example: a beauty salon sells $40,000 a month and its owner sees only $5,000 in the account. It is not that it earns little: she paid her son's tuition and the family gasoline from the business account.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad real del negocio", en: "The business's real profit" },
            expression: "Utilidad real = Ventas − Gastos del negocio   (los gastos personales son retiros del dueño, no gastos)",
            variables: [
              { symbol: "Ventas", meaning: { es: "Lo que vendió el negocio en el periodo, en pesos.", en: "What the business sold in the period, in pesos." } },
              { symbol: "Gastos del negocio", meaning: { es: "Solo lo que se gastó para operar (insumos, renta, sueldos del personal), en pesos.", en: "Only what was spent to operate (supplies, rent, staff wages), in pesos." } },
              { symbol: "Retiros del dueño", meaning: { es: "Dinero del negocio usado para gastos personales (súper, colegiaturas); no se restan para medir la utilidad.", en: "Business money used for personal expenses (groceries, tuition); not subtracted when measuring profit." } },
            ],
            steps: [
              { es: "Separa los pagos en gastos del negocio y gastos personales.", en: "Split the payments into business expenses and personal expenses." },
              { es: "Resta a las ventas solo los gastos del negocio.", en: "Subtract only business expenses from sales." },
              { es: "Anota aparte los gastos personales como retiros del dueño.", en: "Record personal expenses separately as owner withdrawals." },
            ],
            example: {
              es: "Una tortillería vende $50,000; paga $28,000 del negocio y $9,000 de gastos de casa desde la misma cuenta. En la cuenta se ve 50,000 − 28,000 − 9,000 = $13,000, pero la utilidad real es 50,000 − 28,000 = **$22,000**; los $9,000 son retiros.",
              en: "A tortilla shop sells $50,000; it pays $28,000 for the business and $9,000 of household expenses from the same account. The account shows 50,000 − 28,000 − 9,000 = $13,000, but real profit is 50,000 − 28,000 = **$22,000**; the $9,000 are withdrawals.",
            },
            mistake: { es: "Restar también los gastos personales y concluir que el negocio gana menos de lo que realmente gana.", en: "Also subtracting personal expenses and concluding the business earns less than it really does." },
          },
        ],
      },
      {
        heading: { es: "Cómo separar en la práctica", en: "How to separate in practice" },
        body: [
          {
            es: "Abre una **cuenta bancaria solo para el negocio** y una tarjeta para sus gastos. Todo lo que el negocio cobra entra ahí y todo lo que el negocio paga sale de ahí. Pide **comprobantes** (en México, facturas electrónicas o CFDI) de los gastos del negocio.",
            en: "Open a **bank account only for the business** and a card for its expenses. Everything the business collects goes in there and everything it pays comes out of there. Ask for **receipts** (in Mexico, electronic invoices or CFDI) for business expenses.",
          },
          {
            es: "Decide la **forma legal**. Como **persona física con actividad empresarial** el negocio está a tu nombre y respondes con tus bienes personales por sus deudas. Una **persona moral** (una sociedad) tiene patrimonio propio y separa más tus bienes. Ambas opciones tienen distintos costos y obligaciones: conviene consultarlo con un contador.",
            en: "Decide the **legal form**. As an **individual with business activity** the business is in your name and you answer with your personal assets for its debts. A **legal entity** (a company) has its own assets and separates yours more. Both options have different costs and obligations: it is best to consult an accountant.",
          },
          {
            es: "Cuando pones dinero tuyo en el negocio, regístralo como **aportación de capital**; cuando sacas dinero para ti fuera de tu sueldo, como **retiro** del dueño. Mini ejemplo: depositas $30,000 de tus ahorros para arrancar: en el negocio se anota un cargo a Bancos y un abono a Capital.",
            en: "When you put your own money into the business, record it as a **capital contribution**; when you take money out for yourself beyond your salary, as an owner **withdrawal**. Mini example: you deposit $30,000 of your savings to get started: the business records a debit to Bank and a credit to Capital.",
          },
        ],
        formulas: [
          {
            name: { es: "Registro de una aportación del dueño", en: "Recording an owner contribution" },
            expression: "Cargo a Bancos = Monto aportado;  Abono a Capital = Monto aportado",
            variables: [
              { symbol: "Monto aportado", meaning: { es: "Los pesos que pasas de tu dinero personal a la cuenta del negocio.", en: "The pesos you move from your personal money to the business account." } },
              { symbol: "Bancos", meaning: { es: "Cuenta de activo del negocio: aumenta con un cargo (lado izquierdo) porque entra dinero.", en: "Business asset account: it increases with a debit (left side) because money comes in." } },
              { symbol: "Capital", meaning: { es: "Cuenta de lo que el dueño ha invertido: aumenta con un abono (lado derecho).", en: "Account of what the owner has invested: it increases with a credit (right side)." } },
            ],
            steps: [
              { es: "Identifica el monto que entra a la cuenta del negocio.", en: "Identify the amount that enters the business account." },
              { es: "Carga Bancos por ese monto (entra dinero).", en: "Debit Bank for that amount (money comes in)." },
              { es: "Abona Capital por el mismo monto (aumenta la inversión del dueño). Cargos y abonos deben sumar igual.", en: "Credit Capital for the same amount (the owner's investment grows). Debits and credits must be equal." },
            ],
            example: {
              es: "Pones $20,000 de tus ahorros para abrir una tienda de abarrotes. Póliza: Bancos cargo **$20,000** / Capital abono **$20,000**. Total cargos 20,000 = total abonos 20,000.",
              en: "You put $20,000 of your savings in to open a grocery store. Entry: Bank debit **$20,000** / Capital credit **$20,000**. Total debits 20,000 = total credits 20,000.",
            },
            mistake: { es: "Registrar la aportación como venta: inflaría la utilidad del negocio con dinero que no ganó.", en: "Recording the contribution as a sale: it would inflate the business's profit with money it did not earn." },
          },
        ],
        bullets: [
          { es: "Una cuenta y una tarjeta exclusivas del negocio.", en: "An account and a card exclusively for the business." },
          { es: "Comprobantes de todos los gastos del negocio.", en: "Receipts for all business expenses." },
          { es: "Aportaciones y retiros del dueño registrados por separado.", en: "Owner contributions and withdrawals recorded separately." },
          { es: "Revisión mensual: ventas, gastos, utilidad.", en: "Monthly review: sales, expenses, profit." },
        ],
      },
      {
        heading: { es: "Págate un sueldo y separa reservas", en: "Pay yourself a salary and set aside reserves" },
        body: [
          {
            es: "En lugar de sacar dinero cada vez que lo necesitas, asígnate un **sueldo fijo** que el negocio pueda pagar incluso en meses flojos. Una forma: toma la **utilidad promedio** de varios meses, aparta primero una **reserva para impuestos** y otra para **reinversión o colchón del negocio**, y lo que queda es el máximo que puedes pagarte.",
            en: "Instead of taking money whenever you need it, assign yourself a **fixed salary** the business can pay even in slow months. One way: take the **average profit** over several months, first set aside a **tax reserve** and another for **reinvestment or a business cushion**, and what remains is the most you can pay yourself.",
          },
          {
            es: "Con un sueldo fijo, tu **presupuesto personal** se vuelve estable y el negocio puede crecer. Si un mes va muy bien, el excedente se queda en el negocio o se reparte de forma planeada, no se gasta sin control. También conviene que el negocio tenga **su propio fondo de emergencia**, distinto del tuyo.",
            en: "With a fixed salary, your **personal budget** becomes stable and the business can grow. If a month goes very well, the surplus stays in the business or is distributed in a planned way, not spent without control. The business should also have **its own emergency fund**, separate from yours.",
          },
          {
            es: "Mini ejemplo: si tu negocio gana en promedio $30,000 al mes y apartas 20 % para impuestos y 10 % para reinvertir, puedes pagarte hasta $21,000.",
            en: "Mini example: if your business earns $30,000 a month on average and you set aside 20% for taxes and 10% for reinvestment, you can pay yourself up to $21,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Sueldo máximo del dueño", en: "Owner's maximum salary" },
            expression: "Utilidad promedio = Suma de utilidades ÷ Número de meses;  Reserva = Utilidad promedio × % de reserva;  Sueldo máximo = Utilidad promedio − Reserva de impuestos − Reinversión",
            variables: [
              { symbol: "Utilidad promedio", meaning: { es: "Lo que gana el negocio en un mes típico, en pesos.", en: "What the business earns in a typical month, in pesos." } },
              { symbol: "% de reserva", meaning: { es: "Porcentaje que apartas para cada fin; en esta lección se usan 20 % para impuestos y 10 % para reinversión como ejemplo.", en: "Percentage set aside for each purpose; this lesson uses 20% for taxes and 10% for reinvestment as an example." } },
              { symbol: "Reserva de impuestos", meaning: { es: "Dinero que guardas para pagar impuestos, en pesos.", en: "Money you keep to pay taxes, in pesos." } },
              { symbol: "Reinversión", meaning: { es: "Dinero que se queda en el negocio para equipo o colchón, en pesos.", en: "Money that stays in the business for equipment or a cushion, in pesos." } },
            ],
            steps: [
              { es: "Suma la utilidad de varios meses y divide entre el número de meses.", en: "Add up several months of profit and divide by the number of months." },
              { es: "Calcula cada reserva: utilidad promedio × su porcentaje.", en: "Compute each reserve: average profit × its percentage." },
              { es: "Resta las reservas a la utilidad promedio: ese es tu sueldo máximo.", en: "Subtract the reserves from average profit: that is your maximum salary." },
            ],
            example: {
              es: "Utilidades de 3 meses: $24,000, $30,000 y $27,000. Promedio = 81,000 ÷ 3 = $27,000. Impuestos: 0.20 × 27,000 = $5,400. Reinversión: 0.10 × 27,000 = $2,700. Sueldo máximo = 27,000 − 5,400 − 2,700 = **$18,900**.",
              en: "Profits for 3 months: $24,000, $30,000 and $27,000. Average = 81,000 ÷ 3 = $27,000. Taxes: 0.20 × 27,000 = $5,400. Reinvestment: 0.10 × 27,000 = $2,700. Maximum salary = 27,000 − 5,400 − 2,700 = **$18,900**.",
            },
            interpret: { es: "Es un tope: si algunos meses son flojos, conviene pagarte algo menos para no dejar al negocio sin dinero.", en: "It is a ceiling: if some months are slow, pay yourself somewhat less so the business is not left without cash." },
            mistake: { es: "Pagarte toda la utilidad y no dejar nada para impuestos ni para el negocio.", en: "Paying yourself the whole profit and leaving nothing for taxes or the business." },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "La utilidad escondida", en: "The hidden profit" },
        problem: {
          es: "En un mes, la cocina económica de Toño vendió $60,000. Pagó $35,000 de gastos del negocio (insumos, gas, renta, ayudante) y, desde la misma cuenta, $12,000 de gastos de su casa. ¿Cuánto ganó realmente el negocio?",
          en: "In one month, Toño's home-style eatery sold $60,000. It paid $35,000 in business expenses (supplies, gas, rent, helper) and, from the same account, $12,000 of household expenses. How much did the business really earn?",
        },
        steps: [
          { es: "Lo que Toño ve en la cuenta: $60,000 − $35,000 − $12,000 = $13,000.", en: "What Toño sees in the account: $60,000 − $35,000 − $12,000 = $13,000." },
          { es: "Los $12,000 de la casa no son gastos del negocio: son retiros del dueño.", en: "The $12,000 for the house are not business expenses: they are owner withdrawals." },
          { es: "Utilidad real: $60,000 − $35,000 = $25,000.", en: "Real profit: $60,000 − $35,000 = $25,000." },
        ],
        result: {
          es: "El negocio ganó $25,000, casi el doble de lo que parecía. Separar las cuentas le habría dado este dato sin confusión.",
          en: "The business earned $25,000, almost double what it seemed. Separating the accounts would have given him this figure without confusion.",
        },
      },
      {
        title: { es: "Fijar el sueldo del dueño", en: "Setting the owner's salary" },
        problem: {
          es: "La utilidad mensual del taller de Rebeca en los últimos 6 meses fue: $32,000, $45,000, $38,000, $50,000, $35,000 y $40,000. Quiere apartar 20 % para impuestos y 10 % para reinversión. ¿Qué sueldo máximo puede pagarse?",
          en: "The monthly profit of Rebeca's workshop over the last 6 months was: $32,000, $45,000, $38,000, $50,000, $35,000 and $40,000. She wants to set aside 20% for taxes and 10% for reinvestment. What maximum salary can she pay herself?",
        },
        steps: [
          { es: "Suma: 32,000 + 45,000 + 38,000 + 50,000 + 35,000 + 40,000 = $240,000.", en: "Sum: 32,000 + 45,000 + 38,000 + 50,000 + 35,000 + 40,000 = $240,000." },
          { es: "Promedio: $240,000 ÷ 6 = $40,000.", en: "Average: $240,000 ÷ 6 = $40,000." },
          { es: "Reservas: 20 % × 40,000 = $8,000 y 10 % × 40,000 = $4,000.", en: "Reserves: 20% × 40,000 = $8,000 and 10% × 40,000 = $4,000." },
          { es: "Sueldo máximo: 40,000 − 8,000 − 4,000 = $28,000.", en: "Maximum salary: 40,000 − 8,000 − 4,000 = $28,000." },
        ],
        result: {
          es: "Rebeca puede pagarse hasta $28,000 al mes. Como en un mes ganó solo $32,000, un sueldo algo menor le daría más tranquilidad.",
          en: "Rebeca can pay herself up to $28,000 a month. Since one month she earned only $32,000, a somewhat lower salary would give her more peace of mind.",
        },
      },
    ],
    keyPoints: [
      { es: "El negocio es una entidad distinta de su dueño (postulado de entidad económica).", en: "The business is an entity separate from its owner (economic entity postulate)." },
      { es: "Mezclar cuentas esconde la utilidad real y complica impuestos y crédito.", en: "Mixing accounts hides the real profit and complicates taxes and credit." },
      { es: "Usa cuenta y tarjeta exclusivas del negocio y guarda comprobantes.", en: "Use an account and card only for the business and keep receipts." },
      { es: "Aportación del dueño: cargo a Bancos, abono a Capital.", en: "Owner contribution: debit Bank, credit Capital." },
      { es: "Págate un sueldo fijo después de reservar impuestos y reinversión.", en: "Pay yourself a fixed salary after reserving for taxes and reinvestment." },
    ],
    normativeNote: {
      es: "Contenido educativo. Las referencias a las NIF (CINIF), a los regímenes fiscales de personas físicas y morales, a los CFDI y a la deducibilidad de gastos son generales; las reglas fiscales cambian cada año, así que verifica la versión vigente (2026) con el SAT o un contador. Los porcentajes de reserva son ilustrativos.",
      en: "Educational content. References to NIF (CINIF), the tax regimes for individuals and legal entities, CFDI and expense deductibility are general; tax rules change every year, so verify the current version (2026) with the SAT or an accountant. Reserve percentages are illustrative.",
    },
    exerciseIds: ['PER-18-E1', 'PER-18-E2', 'PER-18-E3', 'PER-18-E4', 'PER-18-E5', 'PER-18-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ PER-13 ═════════════════════════
  {
    id: 'PER-13-E1',
    level: 1,
    module: 'PER-13',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En una póliza de seguro, ¿qué es el deducible?",
      en: "In an insurance policy, what is the deductible?",
    },
    options: [
      { id: 'PER-13-E1-a', text: { es: "El pago periódico que haces para mantener la póliza vigente", en: "The periodic payment you make to keep the policy in force" } },
      { id: 'PER-13-E1-b', text: { es: "La cantidad fija que pagas tú en cada siniestro antes de que pague la aseguradora", en: "The fixed amount you pay on each claim before the insurer pays" } },
      { id: 'PER-13-E1-c', text: { es: "El máximo que pagará la aseguradora por un siniestro", en: "The most the insurer will pay for a claim" } },
      { id: 'PER-13-E1-d', text: { es: "Lo que puedes deducir de impuestos por tener el seguro", en: "What you can deduct from taxes for having the insurance" } },
    ],
    correctOptionId: 'PER-13-E1-b',
    explanation: {
      es: "El deducible es el monto fijo que absorbes tú en cada siniestro; después entra la aseguradora. El pago periódico es la prima y el máximo es la suma asegurada. Error común: confundirlo con una deducción de impuestos por el parecido del nombre.",
      en: "The deductible is the fixed amount you absorb on each claim; after that the insurer steps in. The periodic payment is the premium and the maximum is the sum insured. Common mistake: confusing it with a tax deduction because of the similar name.",
    },
    difficulty: 1,
    points: 10,
    competency: 'insurance',
  },
  {
    id: 'PER-13-E2',
    level: 1,
    module: 'PER-13',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Ernesto se fractura la pierna. La cuenta del hospital es de $80,000. Su seguro de gastos médicos mayores tiene deducible de $15,000 y coaseguro de 10 %, sin tope que aplique en este caso.",
      en: "Ernesto breaks his leg. The hospital bill is $80,000. His major medical insurance has a $15,000 deductible and 10% coinsurance, with no cap that applies in this case.",
    },
    prompt: {
      es: "Calcula en pesos el coaseguro, el total que paga Ernesto y lo que paga la aseguradora.",
      en: "Compute in pesos the coinsurance, the total Ernesto pays and what the insurer pays.",
    },
    fields: [
      { id: 'f1', label: { es: "Coaseguro a cargo de Ernesto", en: "Coinsurance paid by Ernesto" }, answer: 6500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Total que paga Ernesto (deducible + coaseguro)", en: "Total Ernesto pays (deductible + coinsurance)" }, answer: 21500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Lo que paga la aseguradora", en: "What the insurer pays" }, answer: 58500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Después del deducible quedan 80,000 − 15,000 = 65,000. Coaseguro: 10 % × 65,000 = $6,500. Ernesto paga 15,000 + 6,500 = $21,500 y la aseguradora 80,000 − 21,500 = $58,500. Error común: calcular el 10 % sobre los $80,000 completos ($8,000), cuando el coaseguro se aplica a lo que queda tras el deducible.",
      en: "After the deductible, 80,000 − 15,000 = 65,000 remains. Coinsurance: 10% × 65,000 = $6,500. Ernesto pays 15,000 + 6,500 = $21,500 and the insurer 80,000 − 21,500 = $58,500. Common mistake: computing 10% on the full $80,000 ($8,000), when coinsurance applies to what remains after the deductible.",
    },
    difficulty: 2,
    points: 15,
    competency: 'insurance',
  },
  {
    id: 'PER-13-E3',
    level: 1,
    module: 'PER-13',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada riesgo según el seguro que lo cubre principalmente.",
      en: "Classify each risk by the insurance that mainly covers it.",
    },
    categories: [
      { id: 'PER-13-E3-c1', label: { es: "Gastos médicos mayores", en: "Major medical" } },
      { id: 'PER-13-E3-c2', label: { es: "Vida", en: "Life" } },
      { id: 'PER-13-E3-c3', label: { es: "Auto", en: "Car" } },
      { id: 'PER-13-E3-c4', label: { es: "Hogar", en: "Home" } },
    ],
    items: [
      { id: 'PER-13-E3-i1', label: { es: "Una apendicitis que requiere cirugía y hospitalización", en: "Appendicitis requiring surgery and hospitalization" }, correctCategoryId: 'PER-13-E3-c1' },
      { id: 'PER-13-E3-i2', label: { es: "Que fallezca la mamá que mantiene a tres hijos", en: "The death of the mother who supports three children" }, correctCategoryId: 'PER-13-E3-c2' },
      { id: 'PER-13-E3-i3', label: { es: "Golpear por detrás a otro coche en un alto", en: "Rear-ending another car at a stop" }, correctCategoryId: 'PER-13-E3-c3' },
      { id: 'PER-13-E3-i4', label: { es: "Una fuga de agua que daña pisos y muebles de la casa", en: "A water leak that damages the floors and furniture of the house" }, correctCategoryId: 'PER-13-E3-c4' },
      { id: 'PER-13-E3-i5', label: { es: "El robo total de la camioneta estacionada en la calle", en: "Total theft of the van parked on the street" }, correctCategoryId: 'PER-13-E3-c3' },
      { id: 'PER-13-E3-i6', label: { es: "Un tratamiento largo contra el cáncer", en: "A long cancer treatment" }, correctCategoryId: 'PER-13-E3-c1' },
    ],
    explanation: {
      es: "Enfermedades y accidentes graves: gastos médicos mayores. Falta de quien mantiene: vida. Choques y robo del vehículo: auto. Daños a la vivienda y contenidos: hogar. Error común: pensar que el seguro de vida paga hospitales; paga una suma a los beneficiarios por fallecimiento.",
      en: "Serious illness and accidents: major medical. Loss of the breadwinner: life. Crashes and vehicle theft: car. Damage to the dwelling and contents: home. Common mistake: thinking life insurance pays hospitals; it pays a sum to beneficiaries upon death.",
    },
    difficulty: 1,
    points: 10,
    competency: 'insurance',
  },
  {
    id: 'PER-13-E4',
    level: 1,
    module: 'PER-13',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Al comparar dos pólizas de gastos médicos, la que tiene la prima más baja siempre es la mejor opción.",
      en: "When comparing two medical policies, the one with the lowest premium is always the best option.",
    },
    answer: false,
    explanation: {
      es: "Falso. Una prima baja puede venir con deducible alto, coaseguro alto, suma asegurada baja, más exclusiones o periodos de espera largos. Hay que comparar lo que pagarías en un siniestro real, no solo la prima. Error común: elegir por precio y descubrir la letra chica cuando ya se necesita el seguro.",
      en: "False. A low premium may come with a high deductible, high coinsurance, a low sum insured, more exclusions or long waiting periods. You must compare what you would pay in a real claim, not only the premium. Common mistake: choosing on price and discovering the fine print when the insurance is already needed.",
    },
    difficulty: 1,
    points: 10,
    competency: 'insurance',
  },
  {
    id: 'PER-13-E5',
    level: 1,
    module: 'PER-13',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Claudia es la única que trae ingreso a su casa. Su familia gasta $240,000 al año y quiere cubrir 4 años. Tiene un crédito de auto de $150,000 y ahorros por $90,000.",
      en: "Claudia is the only one bringing income to her household. Her family spends $240,000 a year and wants to cover 4 years. She has a $150,000 car loan and $90,000 in savings.",
    },
    prompt: {
      es: "Con el método de gastos + deudas − ahorros, ¿qué suma asegurada de vida necesita Claudia? Responde en pesos.",
      en: "Using the expenses + debts − savings method, what life insurance sum does Claudia need? Answer in pesos.",
    },
    answer: 1020000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Gastos: 240,000 × 4 = 960,000. Más deuda: 960,000 + 150,000 = 1,110,000. Menos ahorros: 1,110,000 − 90,000 = $1,020,000. Error común: olvidar restar los ahorros (1,110,000) o sumar solo un año de gastos.",
      en: "Expenses: 240,000 × 4 = 960,000. Plus debt: 960,000 + 150,000 = 1,110,000. Minus savings: 1,110,000 − 90,000 = $1,020,000. Common mistake: forgetting to subtract savings (1,110,000) or adding only one year of expenses.",
    },
    difficulty: 2,
    points: 15,
    competency: 'insurance',
  },
  {
    id: 'PER-13-E6',
    level: 1,
    module: 'PER-13',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Héctor, de 32 años, va a contratar su primer seguro de gastos médicos mayores. Tiene diabetes diagnosticada desde hace dos años.",
      en: "Héctor, 32, is about to buy his first major medical insurance. He has had diabetes diagnosed for two years.",
    },
    prompt: {
      es: "¿Qué debe revisar o hacer Héctor antes de firmar? Selecciona todas las que apliquen.",
      en: "What should Héctor check or do before signing? Select all that apply.",
    },
    options: [
      { id: 'PER-13-E6-a', text: { es: "Declarar su diabetes con honestidad y revisar cómo trata la póliza las preexistencias", en: "Honestly disclose his diabetes and check how the policy treats pre-existing conditions" } },
      { id: 'PER-13-E6-b', text: { es: "Revisar los periodos de espera y las exclusiones", en: "Check the waiting periods and exclusions" } },
      { id: 'PER-13-E6-c', text: { es: "Ocultar la diabetes para que la prima salga más barata", en: "Hide the diabetes so the premium is cheaper" } },
      { id: 'PER-13-E6-d', text: { es: "Comparar deducible, coaseguro y suma asegurada de varias aseguradoras", en: "Compare deductible, coinsurance and sum insured across several insurers" } },
      { id: 'PER-13-E6-e', text: { es: "Firmar sin leer la póliza, porque todas son iguales", en: "Sign without reading the policy, because they are all the same" } },
    ],
    correctOptionIds: ['PER-13-E6-a', 'PER-13-E6-b', 'PER-13-E6-d'],
    explanation: {
      es: "Debe declarar con verdad su padecimiento (ocultarlo puede dar a la aseguradora motivo para rechazar un reclamo), revisar periodos de espera y exclusiones, y comparar deducible, coaseguro y suma asegurada. Las pólizas no son iguales. Error común: ocultar información para ahorrar en la prima y quedarse sin cobertura cuando más se necesita.",
      en: "He must truthfully disclose his condition (hiding it can give the insurer grounds to reject a claim), check waiting periods and exclusions, and compare deductible, coinsurance and sum insured. Policies are not the same. Common mistake: hiding information to save on the premium and ending up without cover when it is most needed.",
    },
    difficulty: 2,
    points: 15,
    competency: 'insurance',
  },

  // ═════════════════════════ PER-14 ═════════════════════════
  {
    id: 'PER-14-E1',
    level: 1,
    module: 'PER-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada concepto en la subcuenta de la AFORE a la que pertenece.",
      en: "Classify each item into the AFORE sub-account it belongs to.",
    },
    categories: [
      { id: 'PER-14-E1-c1', label: { es: "Retiro, Cesantía y Vejez (RCV)", en: "Retirement, Old-age Unemployment and Old Age (RCV)" } },
      { id: 'PER-14-E1-c2', label: { es: "Vivienda", en: "Housing" } },
      { id: 'PER-14-E1-c3', label: { es: "Aportaciones voluntarias", en: "Voluntary contributions" } },
    ],
    items: [
      { id: 'PER-14-E1-i1', label: { es: "La cuota obligatoria que paga tu patrón para tu pensión", en: "The mandatory contribution your employer pays for your pension" }, correctCategoryId: 'PER-14-E1-c1' },
      { id: 'PER-14-E1-i2', label: { es: "La aportación patronal que administra el INFONAVIT", en: "The employer contribution managed by INFONAVIT" }, correctCategoryId: 'PER-14-E1-c2' },
      { id: 'PER-14-E1-i3', label: { es: "$500 que depositas en una tienda de conveniencia a tu AFORE", en: "$500 you deposit to your AFORE at a convenience store" }, correctCategoryId: 'PER-14-E1-c3' },
      { id: 'PER-14-E1-i4', label: { es: "La cuota social que aporta el gobierno", en: "The social contribution paid by the government" }, correctCategoryId: 'PER-14-E1-c1' },
      { id: 'PER-14-E1-i5', label: { es: "Un ahorro extra domiciliado cada quincena desde tu nómina", en: "Extra savings debited from your payroll every two weeks" }, correctCategoryId: 'PER-14-E1-c3' },
    ],
    explanation: {
      es: "Las cuotas obligatorias de trabajador, patrón y gobierno para la pensión van a RCV. La aportación para vivienda la administra el INFONAVIT. Todo lo que tú decides añadir son aportaciones voluntarias. Error común: pensar que la cuota social del gobierno es voluntaria; es parte de las aportaciones obligatorias.",
      en: "Mandatory contributions from worker, employer and government for the pension go to RCV. The housing contribution is managed by INFONAVIT. Everything you decide to add is voluntary contributions. Common mistake: thinking the government's social contribution is voluntary; it is part of mandatory contributions.",
    },
    difficulty: 1,
    points: 10,
    competency: 'retirement-afore',
  },
  {
    id: 'PER-14-E2',
    level: 1,
    module: 'PER-14',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Mónica empezó a trabajar con registro en el IMSS en 2008 y nunca había cotizado antes.",
      en: "Mónica started working registered with IMSS in 2008 and had never contributed before.",
    },
    prompt: {
      es: "¿De qué depende principalmente la pensión de Mónica?",
      en: "What does Mónica's pension mainly depend on?",
    },
    options: [
      { id: 'PER-14-E2-a', text: { es: "Solo de su salario promedio de los últimos años, sin importar su saldo", en: "Only on her average salary in recent years, regardless of her balance" } },
      { id: 'PER-14-E2-b', text: { es: "Del saldo acumulado en su cuenta individual de la AFORE (Ley 97)", en: "On the balance accumulated in her individual AFORE account (1997 Law)" } },
      { id: 'PER-14-E2-c', text: { es: "De lo que decida cada año el gobierno, sin relación con sus aportaciones", en: "On whatever the government decides each year, unrelated to her contributions" } },
      { id: 'PER-14-E2-d', text: { es: "Del número de hijos que tenga al retirarse", en: "On the number of children she has when she retires" } },
    ],
    correctOptionId: 'PER-14-E2-b',
    explanation: {
      es: "Quien empezó a cotizar después del 1 de julio de 1997 está en la Ley 97: su pensión depende sobre todo del saldo en su cuenta individual (aportaciones, rendimientos y comisiones). Error común: aplicar la lógica de la Ley 73 (semanas y salario promedio) a quien empezó después de 1997.",
      en: "Whoever started contributing after July 1, 1997 is under the 1997 Law: their pension depends mainly on the balance in their individual account (contributions, returns and fees). Common mistake: applying 1973 Law logic (weeks and average salary) to someone who started after 1997.",
    },
    difficulty: 1,
    points: 10,
    competency: 'retirement-afore',
  },
  {
    id: 'PER-14-E3',
    level: 1,
    module: 'PER-14',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Luis deposita hoy $50,000 como aportación voluntaria de largo plazo. Supón un rendimiento neto hipotético de 4 % anual compuesto y que no aporta nada más.",
      en: "Luis deposits $50,000 today as a long-term voluntary contribution. Assume a hypothetical net return of 4% a year compounded and that he adds nothing else.",
    },
    prompt: {
      es: "¿Cuánto tendrá esa aportación al cabo de 2 años? Responde en pesos.",
      en: "How much will that contribution be worth after 2 years? Answer in pesos.",
    },
    answer: 54080,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 1 },
    explanation: {
      es: "Saldo = 50,000 × 1.04² = 50,000 × 1.0816 = $54,080. El segundo año gana interés sobre el interés del primero. Error común: usar interés simple (50,000 × 0.04 × 2 = 4,000) y responder $54,000.",
      en: "Balance = 50,000 × 1.04² = 50,000 × 1.0816 = $54,080. The second year earns interest on the first year's interest. Common mistake: using simple interest (50,000 × 0.04 × 2 = 4,000) and answering $54,000.",
    },
    difficulty: 2,
    points: 15,
    competency: 'retirement-afore',
  },
  {
    id: 'PER-14-E4',
    level: 1,
    module: 'PER-14',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En las SIEFORES generacionales, el dinero de un trabajador joven suele invertirse con más riesgo que el de alguien cercano al retiro.",
      en: "In generational SIEFOREs, a young worker's money is usually invested with more risk than that of someone close to retirement.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Las SIEFORES generacionales agrupan a los trabajadores por año de nacimiento: a los jóvenes les quedan muchos años para recuperarse de caídas, así que se busca más crecimiento; al acercarse el retiro, la inversión se vuelve más conservadora. Error común: creer que todos los afiliados de una AFORE tienen la misma inversión.",
      en: "True. Generational SIEFOREs group workers by birth year: young people have many years to recover from drops, so more growth is sought; as retirement approaches, the investment becomes more conservative. Common mistake: believing all members of an AFORE have the same investment.",
    },
    difficulty: 1,
    points: 10,
    competency: 'retirement-afore',
  },
  {
    id: 'PER-14-E5',
    level: 1,
    module: 'PER-14',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Con datos hipotéticos: la cuenta de Fernanda tiene un saldo de $300,000. En un año su SIEFORE tiene un rendimiento bruto de 7 % y la AFORE cobra una comisión anual de 0.6 % sobre el saldo.",
      en: "With hypothetical data: Fernanda's account has a $300,000 balance. In one year her SIEFORE has a gross return of 7% and the AFORE charges an annual fee of 0.6% on the balance.",
    },
    prompt: {
      es: "Calcula la comisión en pesos, el rendimiento neto en porcentaje y la ganancia neta en pesos del año.",
      en: "Compute the fee in pesos, the net return as a percentage and the year's net gain in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Comisión del año", en: "Fee for the year" }, answer: 1800, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Rendimiento neto", en: "Net return" }, answer: 6.4, unit: '%', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Ganancia neta del año", en: "Net gain for the year" }, answer: 19200, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Comisión: 0.6 % × 300,000 = $1,800. Rendimiento neto: 7 % − 0.6 % = 6.4 %. Ganancia neta: 6.4 % × 300,000 = $19,200 (o 21,000 − 1,800). Error común: restar la comisión al saldo como si fuera 0.6 pesos, o comparar AFORE solo por la comisión sin ver el rendimiento.",
      en: "Fee: 0.6% × 300,000 = $1,800. Net return: 7% − 0.6% = 6.4%. Net gain: 6.4% × 300,000 = $19,200 (or 21,000 − 1,800). Common mistake: subtracting the fee as if it were 0.6 pesos, or comparing AFOREs only by fee without looking at the return.",
    },
    difficulty: 2,
    points: 15,
    competency: 'retirement-afore',
  },
  {
    id: 'PER-14-E6',
    level: 1,
    module: 'PER-14',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Ricardo tiene 28 años, cotiza en el IMSS desde 2019 y su estimación de pensión cubre apenas una parte pequeña de su sueldo actual.",
      en: "Ricardo is 28, has contributed to IMSS since 2019 and his pension estimate covers only a small part of his current salary.",
    },
    prompt: {
      es: "¿Qué acciones le ayudan a mejorar su retiro? Selecciona todas las que apliquen.",
      en: "Which actions help him improve his retirement? Select all that apply.",
    },
    options: [
      { id: 'PER-14-E6-a', text: { es: "Hacer aportaciones voluntarias periódicas desde ahora", en: "Make regular voluntary contributions starting now" } },
      { id: 'PER-14-E6-b', text: { es: "Comparar AFORE por rendimiento neto y cambiarse si le conviene", en: "Compare AFOREs by net return and switch if it suits him" } },
      { id: 'PER-14-E6-c', text: { es: "Hacer retiros por desempleo aunque tenga trabajo, para invertirlos en otra cosa", en: "Make unemployment withdrawals even though he has a job, to invest them elsewhere" } },
      { id: 'PER-14-E6-d', text: { es: "Registrar a sus beneficiarios y mantener sus datos actualizados", en: "Register his beneficiaries and keep his data up to date" } },
      { id: 'PER-14-E6-e', text: { es: "Esperar a tener 55 años para empezar a preocuparse", en: "Wait until he is 55 to start worrying" } },
    ],
    correctOptionIds: ['PER-14-E6-a', 'PER-14-E6-b', 'PER-14-E6-d'],
    explanation: {
      es: "Aportar pronto aprovecha el interés compuesto, el rendimiento neto define cuánto crece su saldo, y tener beneficiarios y datos al día evita problemas. El retiro por desempleo solo procede si está desempleado y reduce semanas cotizadas; esperar a los 55 desperdicia décadas de rendimiento. Error común: pensar que el retiro se resuelve solo con las aportaciones obligatorias.",
      en: "Contributing early uses compound interest, net return defines how much his balance grows, and having beneficiaries and up-to-date data avoids problems. The unemployment withdrawal only applies if he is unemployed and it reduces weeks of contributions; waiting until 55 wastes decades of returns. Common mistake: thinking retirement is solved by mandatory contributions alone.",
    },
    difficulty: 2,
    points: 15,
    competency: 'retirement-afore',
  },

  // ═════════════════════════ PER-15 ═════════════════════════
  {
    id: 'PER-15-E1',
    level: 1,
    module: 'PER-15',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la fórmula para calcular el patrimonio neto de una persona.",
      en: "Complete the formula to compute a person's net worth.",
    },
    template: '{{b1}} − {{b2}} = {{b3}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'PER-15-E1-b1-a', text: { es: "Ingresos del mes", en: "Monthly income" } },
          { id: 'PER-15-E1-b1-b', text: { es: "Activos (lo que tienes)", en: "Assets (what you own)" } },
          { id: 'PER-15-E1-b1-c', text: { es: "Gastos fijos", en: "Fixed expenses" } },
        ],
        correctOptionId: 'PER-15-E1-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'PER-15-E1-b2-a', text: { es: "Pasivos (lo que debes)", en: "Liabilities (what you owe)" } },
          { id: 'PER-15-E1-b2-b', text: { es: "Ahorros", en: "Savings" } },
          { id: 'PER-15-E1-b2-c', text: { es: "Impuestos del año", en: "Taxes for the year" } },
        ],
        correctOptionId: 'PER-15-E1-b2-a',
      },
      {
        id: 'b3',
        options: [
          { id: 'PER-15-E1-b3-a', text: { es: "Flujo de efectivo", en: "Cash flow" } },
          { id: 'PER-15-E1-b3-b', text: { es: "Sueldo neto", en: "Net salary" } },
          { id: 'PER-15-E1-b3-c', text: { es: "Patrimonio neto", en: "Net worth" } },
        ],
        correctOptionId: 'PER-15-E1-b3-c',
      },
    ],
    explanation: {
      es: "Patrimonio neto = Activos − Pasivos: lo que tienes menos lo que debes. Ingresos menos gastos da tu flujo o ahorro del mes, no tu patrimonio. Error común: confundir cuánto ganas con cuánto vales financieramente.",
      en: "Net worth = Assets − Liabilities: what you own minus what you owe. Income minus expenses gives your monthly cash flow or saving, not your net worth. Common mistake: confusing how much you earn with how much you are financially worth.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'PER-15-E2',
    level: 1,
    module: 'PER-15',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Valeria tiene: cuenta de ahorro $45,000, AFORE $180,000 y un auto valuado en $150,000. Debe: crédito automotriz $90,000 y tarjeta de crédito $25,000. Gana $28,000 al mes.",
      en: "Valeria owns: savings account $45,000, AFORE $180,000 and a car valued at $150,000. She owes: car loan $90,000 and credit card $25,000. She earns $28,000 a month.",
    },
    prompt: {
      es: "Arma el balance personal de Valeria: total de activos, total de pasivos y patrimonio neto, en pesos.",
      en: "Build Valeria's personal balance sheet: total assets, total liabilities and net worth, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Total de activos", en: "Total assets" }, answer: 375000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Total de pasivos", en: "Total liabilities" }, answer: 115000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Patrimonio neto", en: "Net worth" }, answer: 260000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Activos: 45,000 + 180,000 + 150,000 = $375,000. Pasivos: 90,000 + 25,000 = $115,000. Patrimonio neto: 375,000 − 115,000 = $260,000. El sueldo de $28,000 no es un activo: es un ingreso del mes. Error común: sumar el sueldo a los activos.",
      en: "Assets: 45,000 + 180,000 + 150,000 = $375,000. Liabilities: 90,000 + 25,000 = $115,000. Net worth: 375,000 − 115,000 = $260,000. The $28,000 salary is not an asset: it is monthly income. Common mistake: adding the salary to assets.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-planning',
  },
  {
    id: 'PER-15-E3',
    level: 1,
    module: 'PER-15',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Omar quiere juntar $96,000 para pagar el primer año de la universidad de su hija dentro de 24 meses. Ya tiene $24,000 apartados para esa meta.",
      en: "Omar wants to gather $96,000 to pay for his daughter's first year of university in 24 months. He already has $24,000 set aside for that goal.",
    },
    prompt: {
      es: "Sin contar rendimientos, ¿cuánto debe ahorrar Omar cada mes para llegar a su meta? Responde en pesos.",
      en: "Without counting returns, how much must Omar save each month to reach his goal? Answer in pesos.",
    },
    answer: 3000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Falta: 96,000 − 24,000 = 72,000. Por mes: 72,000 ÷ 24 = $3,000. Error común: dividir la meta completa entre 24 ($4,000) sin descontar lo ya ahorrado.",
      en: "Missing: 96,000 − 24,000 = 72,000. Per month: 72,000 ÷ 24 = $3,000. Common mistake: dividing the full goal by 24 ($4,000) without subtracting what is already saved.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'PER-15-E4',
    level: 1,
    module: 'PER-15',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Don Ramón tiene una casa, una cuenta bancaria y un terreno. Está casado y tiene dos hijos adultos que no se llevan bien entre sí. Nunca ha hecho testamento.",
      en: "Don Ramón owns a house, a bank account and a plot of land. He is married and has two adult children who do not get along. He has never made a will.",
    },
    prompt: {
      es: "¿Cuál es la mejor recomendación para proteger a su familia?",
      en: "What is the best recommendation to protect his family?",
    },
    options: [
      { id: 'PER-15-E4-a', text: { es: "No hacer nada: la familia se pondrá de acuerdo cuando llegue el momento", en: "Do nothing: the family will agree when the time comes" } },
      { id: 'PER-15-E4-b', text: { es: "Hacer un testamento ante notario y revisar los beneficiarios de su cuenta bancaria", en: "Make a will before a notary and review the beneficiaries of his bank account" } },
      { id: 'PER-15-E4-c', text: { es: "Escribir en una servilleta quién se queda con qué", en: "Write on a napkin who gets what" } },
      { id: 'PER-15-E4-d', text: { es: "Vender todo y repartir el efectivo hoy mismo", en: "Sell everything and split the cash today" } },
    ],
    correctOptionId: 'PER-15-E4-b',
    explanation: {
      es: "El testamento ante notario deja clara su voluntad y evita un juicio intestamentario largo y conflictivo; además, la cuenta bancaria se entrega a los beneficiarios designados, así que deben estar al día. Una nota informal puede no tener validez y vender todo lo deja sin patrimonio en vida. Error común: suponer que la familia se pondrá de acuerdo sin reglas claras.",
      en: "A will before a notary makes his wishes clear and avoids a long, conflict-ridden intestate proceeding; also, the bank account goes to the designated beneficiaries, so they must be up to date. An informal note may not be valid and selling everything leaves him with no assets while alive. Common mistake: assuming the family will agree without clear rules.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'PER-15-E5',
    level: 1,
    module: 'PER-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "El pago de un seguro de vida se entrega a los beneficiarios designados en la póliza, por lo que conviene revisarlos cada vez que cambia tu situación familiar.",
      en: "A life insurance payout goes to the beneficiaries designated in the policy, so it is wise to review them whenever your family situation changes.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Seguros de vida, cuentas bancarias y AFORE se pagan a quien aparece como beneficiario. Si te casas, te divorcias o tienes hijos, actualízalos. Error común: creer que el testamento cambia automáticamente a los beneficiarios de estos productos.",
      en: "True. Life insurance, bank accounts and AFORE are paid to whoever is listed as beneficiary. If you marry, divorce or have children, update them. Common mistake: believing the will automatically changes the beneficiaries of these products.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },
  {
    id: 'PER-15-E6',
    level: 1,
    module: 'PER-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada meta según su plazo.",
      en: "Classify each goal by its time horizon.",
    },
    categories: [
      { id: 'PER-15-E6-c1', label: { es: "Corto plazo (menos de 1 año)", en: "Short term (under 1 year)" } },
      { id: 'PER-15-E6-c2', label: { es: "Mediano plazo (1 a 5 años)", en: "Medium term (1 to 5 years)" } },
      { id: 'PER-15-E6-c3', label: { es: "Largo plazo (más de 5 años)", en: "Long term (over 5 years)" } },
    ],
    items: [
      { id: 'PER-15-E6-i1', label: { es: "Pagar el seguro del auto que vence en 4 meses", en: "Pay the car insurance due in 4 months" }, correctCategoryId: 'PER-15-E6-c1' },
      { id: 'PER-15-E6-i2', label: { es: "Juntar el enganche de una casa en 3 años", en: "Save a house down payment in 3 years" }, correctCategoryId: 'PER-15-E6-c2' },
      { id: 'PER-15-E6-i3', label: { es: "Complementar tu pensión para retirarte en 30 años", en: "Top up your pension to retire in 30 years" }, correctCategoryId: 'PER-15-E6-c3' },
      { id: 'PER-15-E6-i4', label: { es: "La universidad de tu hijo, que hoy tiene 4 años", en: "The university of your child, who is 4 today" }, correctCategoryId: 'PER-15-E6-c3' },
      { id: 'PER-15-E6-i5', label: { es: "Comprar un auto usado dentro de 2 años", en: "Buy a used car in 2 years" }, correctCategoryId: 'PER-15-E6-c2' },
      { id: 'PER-15-E6-i6', label: { es: "Los regalos de Navidad de este diciembre", en: "This December's Christmas gifts" }, correctCategoryId: 'PER-15-E6-c1' },
    ],
    explanation: {
      es: "Menos de un año: seguro del auto y regalos. Entre 1 y 5 años: enganche y auto usado. Más de 5: retiro y universidad de un niño de 4 años (faltan unos 14 años). El plazo define dónde guardar el dinero: lo cercano en algo seguro y disponible; lo lejano puede invertirse buscando más rendimiento. Error común: ver la universidad como mediano plazo solo porque \"ya hay que pensarlo\".",
      en: "Under one year: car insurance and gifts. Between 1 and 5 years: down payment and used car. Over 5: retirement and university for a 4-year-old (about 14 years away). The horizon defines where to keep the money: near goals in something safe and available; distant ones can be invested seeking more return. Common mistake: seeing university as medium term just because \"you should already think about it\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-planning',
  },

  // ═════════════════════════ PER-16 ═════════════════════════
  {
    id: 'PER-16-E1',
    level: 1,
    module: 'PER-16',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son señales de alerta de un posible fraude financiero? Selecciona todas las que apliquen.",
      en: "Which are warning signs of possible financial fraud? Select all that apply.",
    },
    options: [
      { id: 'PER-16-E1-a', text: { es: "Te piden el código que te acaba de llegar por SMS para \"cancelar un cargo\"", en: "They ask for the code you just received by SMS to \"cancel a charge\"" } },
      { id: 'PER-16-E1-b', text: { es: "Te prometen un rendimiento alto y garantizado sin riesgo", en: "They promise a high, guaranteed, risk-free return" } },
      { id: 'PER-16-E1-c', text: { es: "Te presionan para decidir en los próximos minutos", en: "They pressure you to decide within the next few minutes" } },
      { id: 'PER-16-E1-d', text: { es: "Tú llamas al número impreso en tu tarjeta para preguntar por un cargo", en: "You call the number printed on your card to ask about a charge" } },
      { id: 'PER-16-E1-e', text: { es: "Te pagan un bono por cada persona nueva que invites a invertir", en: "They pay you a bonus for each new person you invite to invest" } },
    ],
    correctOptionIds: ['PER-16-E1-a', 'PER-16-E1-b', 'PER-16-E1-c', 'PER-16-E1-e'],
    explanation: {
      es: "Pedir códigos, prometer ganancias garantizadas, meter prisa y pagar por reclutar son señales clásicas de fraude. Llamar tú al número oficial de tu tarjeta es justo la forma segura de verificar. Error común: confiar porque la persona sabe tu nombre o los últimos dígitos de tu tarjeta.",
      en: "Asking for codes, promising guaranteed gains, rushing you and paying for recruiting are classic signs of fraud. Calling the official number on your card yourself is exactly the safe way to verify. Common mistake: trusting because the person knows your name or the last digits of your card.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },
  {
    id: 'PER-16-E2',
    level: 1,
    module: 'PER-16',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada situación según el tipo de fraude.",
      en: "Classify each situation by type of fraud.",
    },
    categories: [
      { id: 'PER-16-E2-c1', label: { es: "Phishing (correo o página falsa)", en: "Phishing (fake email or website)" } },
      { id: 'PER-16-E2-c2', label: { es: "Vishing (llamada telefónica)", en: "Vishing (phone call)" } },
      { id: 'PER-16-E2-c3', label: { es: "Smishing (SMS o mensajería)", en: "Smishing (SMS or messaging)" } },
      { id: 'PER-16-E2-c4', label: { es: "Esquema piramidal", en: "Pyramid scheme" } },
    ],
    items: [
      { id: 'PER-16-E2-i1', label: { es: "Un correo con el logo de tu banco te lleva a una página para \"actualizar tus datos\"", en: "An email with your bank's logo leads you to a page to \"update your details\"" }, correctCategoryId: 'PER-16-E2-c1' },
      { id: 'PER-16-E2-i2', label: { es: "Alguien llama diciendo ser del área de seguridad de tu banco y te pide tu NIP", en: "Someone calls claiming to be from your bank's security area and asks for your PIN" }, correctCategoryId: 'PER-16-E2-c2' },
      { id: 'PER-16-E2-i3', label: { es: "Un SMS dice que tu paquete está retenido y debes pagar en un enlace", en: "An SMS says your package is held and you must pay at a link" }, correctCategoryId: 'PER-16-E2-c3' },
      { id: 'PER-16-E2-i4', label: { es: "Un \"club de inversión\" paga a los socios viejos con lo que aportan los nuevos", en: "An \"investment club\" pays old members with what new members contribute" }, correctCategoryId: 'PER-16-E2-c4' },
      { id: 'PER-16-E2-i5', label: { es: "Un WhatsApp de un número desconocido: \"Mamá, cambié de número, deposítame urgente\"", en: "A WhatsApp from an unknown number: \"Mom, I changed my number, deposit to me urgently\"" }, correctCategoryId: 'PER-16-E2-c3' },
      { id: 'PER-16-E2-i6', label: { es: "Una tanda en línea donde ganas más mientras más personas metas", en: "An online savings circle where you earn more the more people you bring in" }, correctCategoryId: 'PER-16-E2-c4' },
    ],
    explanation: {
      es: "El canal define el nombre: correo o página falsa es phishing; llamada, vishing; SMS o mensajería, smishing. Pagar a unos con el dinero de otros y premiar el reclutamiento es una pirámide. Error común: pensar que una tanda que crece reclutando es solo \"una tanda\"; si las ganancias dependen de meter más gente, es piramidal.",
      en: "The channel defines the name: fake email or website is phishing; call, vishing; SMS or messaging, smishing. Paying some with others' money and rewarding recruitment is a pyramid. Common mistake: thinking a savings circle that grows by recruiting is just \"a savings circle\"; if gains depend on bringing in more people, it is a pyramid.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fraud-prevention',
  },
  {
    id: 'PER-16-E3',
    level: 1,
    module: 'PER-16',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En redes sociales, una \"plataforma de trading\" sin registro ofrece 15 % mensual simple garantizado. Tu vecino piensa invertir $20,000.",
      en: "On social media, an unregistered \"trading platform\" offers a guaranteed 15% monthly simple return. Your neighbor plans to invest $20,000.",
    },
    prompt: {
      es: "¿Cuántos pesos de interés prometen pagarle en 12 meses? Responde en pesos.",
      en: "How many pesos of interest do they promise to pay him in 12 months? Answer in pesos.",
    },
    answer: 36000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Interés simple: 20,000 × 0.15 × 12 = $36,000, es decir 180 % al año: casi triplicar el dinero \"sin riesgo\". Esa promesa, más la falta de registro, es una señal clara de fraude. Error común: calcular solo un mes ($3,000) y pensar que \"no suena tan exagerado\".",
      en: "Simple interest: 20,000 × 0.15 × 12 = $36,000, that is 180% a year: almost tripling the money \"risk-free\". That promise, plus the lack of registration, is a clear sign of fraud. Common mistake: computing only one month ($3,000) and thinking it \"does not sound so exaggerated\".",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },
  {
    id: 'PER-16-E4',
    level: 1,
    module: 'PER-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "A Lucía le llama alguien que dice ser de su banco. Sabe su nombre completo y los últimos 4 dígitos de su tarjeta. Le dice que hay un cargo sospechoso y que, para cancelarlo, le dicte el código que le acaba de llegar por SMS.",
      en: "Lucía gets a call from someone claiming to be from her bank. They know her full name and the last 4 digits of her card. They say there is a suspicious charge and that, to cancel it, she must read out the code she just received by SMS.",
    },
    prompt: {
      es: "¿Qué debe hacer Lucía?",
      en: "What should Lucía do?",
    },
    options: [
      { id: 'PER-16-E4-a', text: { es: "Dictar el código, porque conocen sus datos y deben ser del banco", en: "Read out the code, because they know her data so they must be from the bank" } },
      { id: 'PER-16-E4-b', text: { es: "Colgar y llamar ella misma al número oficial del reverso de su tarjeta", en: "Hang up and call the official number on the back of her card herself" } },
      { id: 'PER-16-E4-c', text: { es: "Dar solo la mitad del código para ir a la segura", en: "Give only half the code to play it safe" } },
      { id: 'PER-16-E4-d', text: { es: "Pedirles que le manden el código por WhatsApp para comprobar", en: "Ask them to send the code by WhatsApp to check" } },
    ],
    correctOptionId: 'PER-16-E4-b',
    explanation: {
      es: "Los bancos nunca piden códigos de un solo uso: ese código sirve para autorizar una operación, no para cancelarla. Lo seguro es colgar y llamar al número oficial. Conocer su nombre y 4 dígitos no prueba nada: esos datos se filtran con facilidad. Error común: confiar por la urgencia y los datos que ya tiene el estafador.",
      en: "Banks never ask for one-time codes: that code authorizes a transaction, it does not cancel it. The safe thing is to hang up and call the official number. Knowing her name and 4 digits proves nothing: that data leaks easily. Common mistake: trusting because of the urgency and the data the scammer already has.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },
  {
    id: 'PER-16-E5',
    level: 1,
    module: 'PER-16',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si un esquema de inversión ya te pagó puntualmente los primeros meses, eso demuestra que no es una pirámide.",
      en: "If an investment scheme has already paid you on time for the first months, that proves it is not a pyramid.",
    },
    answer: false,
    explanation: {
      es: "Falso. Las pirámides pagan puntualmente al principio con el dinero de los nuevos participantes para ganar confianza y que reinviertas o recomiendes. El colapso llega cuando deja de entrar gente. Error común: tomar los primeros pagos como prueba de que el negocio es real.",
      en: "False. Pyramids pay on time at first using new participants' money to build trust so you reinvest or recommend them. The collapse comes when people stop joining. Common mistake: taking the first payments as proof that the business is real.",
    },
    difficulty: 2,
    points: 15,
    competency: 'fraud-prevention',
  },
  {
    id: 'PER-16-E6',
    level: 1,
    module: 'PER-16',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Gerardo revisa su app y ve tres compras en línea que no hizo, por $8,500 en total, en su tarjeta de débito.",
      en: "Gerardo checks his app and sees three online purchases he did not make, totaling $8,500, on his debit card.",
    },
    prompt: {
      es: "¿Qué debe hacer primero?",
      en: "What should he do first?",
    },
    options: [
      { id: 'PER-16-E6-a', text: { es: "Esperar al estado de cuenta del mes para confirmar", en: "Wait for the monthly statement to confirm" } },
      { id: 'PER-16-E6-b', text: { es: "Publicar en redes sociales para alertar a sus amigos", en: "Post on social media to warn his friends" } },
      { id: 'PER-16-E6-c', text: { es: "Llamar de inmediato a su banco para bloquear la tarjeta y reportar los cargos", en: "Immediately call his bank to block the card and report the charges" } },
      { id: 'PER-16-E6-d', text: { es: "Ir directo a la CONDUSEF sin avisar al banco", en: "Go straight to CONDUSEF without telling the bank" } },
    ],
    correctOptionId: 'PER-16-E6-c',
    explanation: {
      es: "Lo primero es bloquear la tarjeta para frenar más cargos y presentar la aclaración ante el banco; después, si no se resuelve, acudir a la CONDUSEF y denunciar. Esperar permite que sigan los cargos y puede complicar plazos de aclaración. Error común: saltarse al banco; la reclamación normalmente empieza ahí.",
      en: "The first step is to block the card to stop further charges and file the dispute with the bank; then, if unresolved, go to CONDUSEF and report it. Waiting lets the charges continue and can complicate dispute deadlines. Common mistake: skipping the bank; the claim normally starts there.",
    },
    difficulty: 1,
    points: 10,
    competency: 'fraud-prevention',
  },

  // ═════════════════════════ PER-17 ═════════════════════════
  {
    id: 'PER-17-E1',
    level: 1,
    module: 'PER-17',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada comportamiento según el sesgo que muestra.",
      en: "Classify each behavior by the bias it shows.",
    },
    categories: [
      { id: 'PER-17-E1-c1', label: { es: "Sesgo del presente", en: "Present bias" } },
      { id: 'PER-17-E1-c2', label: { es: "Aversión a las pérdidas", en: "Loss aversion" } },
      { id: 'PER-17-E1-c3', label: { es: "Anclaje", en: "Anchoring" } },
      { id: 'PER-17-E1-c4', label: { es: "Efecto manada", en: "Herd effect" } },
    ],
    items: [
      { id: 'PER-17-E1-i1', label: { es: "Posponer cada mes el ahorro para el retiro porque \"hoy hay otras prioridades\"", en: "Postponing retirement saving every month because \"today there are other priorities\"" }, correctCategoryId: 'PER-17-E1-c1' },
      { id: 'PER-17-E1-i2', label: { es: "No vender una inversión que cae para no \"aceptar\" que se perdió dinero", en: "Not selling a falling investment so as not to \"accept\" that money was lost" }, correctCategoryId: 'PER-17-E1-c2' },
      { id: 'PER-17-E1-i3', label: { es: "Comprar una pantalla porque el precio tachado era mucho más alto", en: "Buying a TV because the crossed-out price was much higher" }, correctCategoryId: 'PER-17-E1-c3' },
      { id: 'PER-17-E1-i4', label: { es: "Meter dinero en una criptomoneda porque todos en la oficina lo hicieron", en: "Putting money into a cryptocurrency because everyone at the office did" }, correctCategoryId: 'PER-17-E1-c4' },
      { id: 'PER-17-E1-i5', label: { es: "Pedir un préstamo para irse de viaje ya en vez de ahorrar unos meses", en: "Taking a loan to travel now instead of saving for a few months" }, correctCategoryId: 'PER-17-E1-c1' },
    ],
    explanation: {
      es: "Posponer el ahorro o endeudarse para gozar ya: sesgo del presente. Aferrarse a una inversión para no materializar la pérdida: aversión a las pérdidas. Guiarse por el precio tachado: anclaje. Seguir a los demás: efecto manada. Error común: confundir anclaje con manada; el anclaje depende de un número de referencia, la manada de lo que hacen otros.",
      en: "Postponing saving or borrowing to enjoy now: present bias. Clinging to an investment to avoid realizing the loss: loss aversion. Being guided by the crossed-out price: anchoring. Following others: herd effect. Common mistake: confusing anchoring with herding; anchoring depends on a reference number, herding on what others do.",
    },
    difficulty: 2,
    points: 15,
    competency: 'behavioral-finance',
  },
  {
    id: 'PER-17-E2',
    level: 1,
    module: 'PER-17',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una agencia de autos muestra primero un modelo de $650,000. Después le enseña a Diana uno de $420,000 y ella siente que es \"una ganga\", aunque su presupuesto era de $300,000.",
      en: "A car dealer first shows a $650,000 model. Then they show Diana one for $420,000 and she feels it is \"a bargain\", although her budget was $300,000.",
    },
    prompt: {
      es: "¿Qué sesgo está aprovechando el vendedor y cómo puede Diana defenderse?",
      en: "Which bias is the salesperson exploiting and how can Diana defend herself?",
    },
    options: [
      { id: 'PER-17-E2-a', text: { es: "Efecto manada; debe preguntar qué auto compran sus amigos", en: "Herd effect; she should ask which car her friends buy" } },
      { id: 'PER-17-E2-b', text: { es: "Aversión a las pérdidas; debe comprar el más caro para no perder la oferta", en: "Loss aversion; she should buy the most expensive to avoid losing the deal" } },
      { id: 'PER-17-E2-c', text: { es: "Anclaje; debe comparar contra su propio presupuesto, no contra el primer precio", en: "Anchoring; she should compare against her own budget, not the first price" } },
      { id: 'PER-17-E2-d', text: { es: "Exceso de confianza; debe confiar en su intuición y firmar hoy", en: "Overconfidence; she should trust her gut and sign today" } },
    ],
    correctOptionId: 'PER-17-E2-c',
    explanation: {
      es: "El precio de $650,000 funciona como ancla: hace que $420,000 parezca barato. La defensa es fijar su referencia antes de entrar (su presupuesto de $300,000) y compararlo todo contra ella. Error común: juzgar una oferta por cuánto \"te ahorras\" frente a otro precio en vez de por si cabe en tu plan.",
      en: "The $650,000 price works as an anchor: it makes $420,000 look cheap. The defense is to set her reference before going in (her $300,000 budget) and compare everything against it. Common mistake: judging a deal by how much you \"save\" versus another price instead of whether it fits your plan.",
    },
    difficulty: 1,
    points: 10,
    competency: 'behavioral-finance',
  },
  {
    id: 'PER-17-E3',
    level: 1,
    module: 'PER-17',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Arturo guarda $15,000 \"para el viaje del próximo año\" en una cuenta que paga 5 % anual. Al mismo tiempo debe $15,000 en una tarjeta que cobra 40 % anual. Ya tiene aparte su fondo de emergencia.",
      en: "Arturo keeps $15,000 \"for next year's trip\" in an account paying 5% a year. At the same time he owes $15,000 on a card charging 40% a year. He already has his emergency fund separately.",
    },
    prompt: {
      es: "¿Cuánto le cuesta en un año mantener ambos saldos en lugar de liquidar la tarjeta? Responde en pesos.",
      en: "How much does keeping both balances cost him in one year instead of paying off the card? Answer in pesos.",
    },
    answer: 5250,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Paga 15,000 × 40 % = 6,000; gana 15,000 × 5 % = 750. Costo neto: 6,000 − 750 = $5,250. Es la contabilidad mental: la etiqueta \"viaje\" le hace conservar dinero barato mientras paga deuda cara. Error común: responder solo los $6,000 de intereses sin restar lo que gana el ahorro.",
      en: "He pays 15,000 × 40% = 6,000; he earns 15,000 × 5% = 750. Net cost: 6,000 − 750 = $5,250. This is mental accounting: the \"trip\" label makes him keep cheap money while paying expensive debt. Common mistake: answering only the $6,000 of interest without subtracting what the savings earn.",
    },
    difficulty: 2,
    points: 15,
    competency: 'behavioral-finance',
  },
  {
    id: 'PER-17-E4',
    level: 1,
    module: 'PER-17',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Según las finanzas conductuales, depender solo de la fuerza de voluntad es la estrategia más confiable para ahorrar cada mes.",
      en: "According to behavioral finance, relying only on willpower is the most reliable strategy for saving every month.",
    },
    answer: false,
    explanation: {
      es: "Falso. La fuerza de voluntad se agota y el sesgo del presente gana con frecuencia. Funciona mejor diseñar el entorno: automatizar el ahorro el día de pago para que ocurra sin decidir cada vez. Error común: culparse por \"no tener disciplina\" en vez de cambiar el sistema.",
      en: "False. Willpower runs out and present bias often wins. Designing your environment works better: automating saving on payday so it happens without deciding each time. Common mistake: blaming yourself for \"lacking discipline\" instead of changing the system.",
    },
    difficulty: 1,
    points: 10,
    competency: 'behavioral-finance',
  },
  {
    id: 'PER-17-E5',
    level: 1,
    module: 'PER-17',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son ejemplos de \"empujones\" (nudges) que facilitan buenas decisiones financieras? Selecciona todas las que apliquen.",
      en: "Which are examples of \"nudges\" that make good financial decisions easier? Select all that apply.",
    },
    options: [
      { id: 'PER-17-E5-a', text: { es: "Programar una transferencia automática al ahorro el día de pago", en: "Scheduling an automatic transfer to savings on payday" } },
      { id: 'PER-17-E5-b', text: { es: "Borrar la tarjeta guardada en las apps de compras", en: "Deleting the saved card from shopping apps" } },
      { id: 'PER-17-E5-c', text: { es: "Activar compras con un clic en todas las tiendas en línea", en: "Enabling one-click purchases in every online store" } },
      { id: 'PER-17-E5-d', text: { es: "Ponerle nombre y foto a la meta en tu app de ahorro", en: "Giving your goal a name and a photo in your savings app" } },
      { id: 'PER-17-E5-e', text: { es: "Revisar tu saldo solo una vez al año para no estresarte", en: "Checking your balance only once a year to avoid stress" } },
    ],
    correctOptionIds: ['PER-17-E5-a', 'PER-17-E5-b', 'PER-17-E5-d'],
    explanation: {
      es: "Automatizar vuelve el ahorro la opción por defecto, quitar la tarjeta guardada añade fricción al gasto impulsivo y nombrar la meta la hace concreta y motivadora. Las compras con un clic quitan fricción al gasto (empujan en contra) y no revisar tu saldo te quita información. Error común: creer que un empujón debe prohibir algo; solo facilita la buena decisión.",
      en: "Automating makes saving the default option, removing the saved card adds friction to impulse spending and naming the goal makes it concrete and motivating. One-click purchases remove friction from spending (pushing the wrong way) and not checking your balance takes away information. Common mistake: believing a nudge must ban something; it only makes the good decision easier.",
    },
    difficulty: 1,
    points: 10,
    competency: 'behavioral-finance',
  },
  {
    id: 'PER-17-E6',
    level: 1,
    module: 'PER-17',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Elena gana $22,000 al mes. Decide \"pagarse primero\" con una transferencia automática del 15 % el día de pago. Además, deja de comprar un café de $55 en 20 días hábiles al mes y envía ese dinero al mismo ahorro.",
      en: "Elena earns $22,000 a month. She decides to \"pay herself first\" with an automatic 15% transfer on payday. In addition, she stops buying a $55 coffee on 20 working days a month and sends that money to the same savings.",
    },
    prompt: {
      es: "Calcula en pesos el ahorro automático mensual, el ahorro mensual por el café y el ahorro total en un año.",
      en: "Compute in pesos the monthly automatic saving, the monthly saving from coffee and the total saving in one year.",
    },
    fields: [
      { id: 'f1', label: { es: "Ahorro automático al mes (15 %)", en: "Automatic saving per month (15%)" }, answer: 3300, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ahorro por el café al mes", en: "Coffee saving per month" }, answer: 1100, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Ahorro total en 12 meses", en: "Total saving in 12 months" }, answer: 52800, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Automático: 15 % × 22,000 = $3,300. Café: 55 × 20 = $1,100. Al mes: 3,300 + 1,100 = 4,400; al año: 4,400 × 12 = $52,800. Error común: multiplicar el café por 30 días cuando solo se compraba en días hábiles, o anualizar solo una de las dos partes.",
      en: "Automatic: 15% × 22,000 = $3,300. Coffee: 55 × 20 = $1,100. Per month: 3,300 + 1,100 = 4,400; per year: 4,400 × 12 = $52,800. Common mistake: multiplying the coffee by 30 days when it was only bought on working days, or annualizing only one of the two parts.",
    },
    difficulty: 2,
    points: 15,
    competency: 'behavioral-finance',
  },

  // ═════════════════════════ PER-18 ═════════════════════════
  {
    id: 'PER-18-E1',
    level: 1,
    module: 'PER-18',
    kind: 'journal',
    flavor: 'case',
    context: {
      es: "Gabriela abre una papelería. Transfiere $30,000 de su cuenta personal a la nueva cuenta bancaria del negocio como aportación inicial.",
      en: "Gabriela opens a stationery store. She transfers $30,000 from her personal account to the business's new bank account as an initial contribution.",
    },
    prompt: {
      es: "Registra la póliza de la aportación en la contabilidad del negocio.",
      en: "Record the journal entry for the contribution in the business's books.",
    },
    accountChoices: ['1101', '1102', '1107', '2102', '3101', '4101'],
    expected: [
      { accountCode: '1102', side: 'D', amount: 30000 },
      { accountCode: '3101', side: 'C', amount: 30000 },
    ],
    explanation: {
      es: "El negocio recibe dinero en su cuenta: cargo a Bancos por $30,000. A cambio, la dueña aumenta su inversión: abono a Capital social por $30,000. No es un ingreso (Ventas) ni una deuda (Acreedores): es una aportación del dueño. Error común: registrarlo como venta, lo que inflaría la utilidad del negocio.",
      en: "The business receives money in its account: debit Bank for $30,000. In exchange, the owner increases her investment: credit Share capital for $30,000. It is not revenue (Sales) nor a debt (Other payables): it is an owner contribution. Common mistake: recording it as a sale, which would inflate the business's profit.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-personal-separation',
  },
  {
    id: 'PER-18-E2',
    level: 1,
    module: 'PER-18',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "En un mes, la florería de Martín vendió $85,000. Desde la misma cuenta pagó $48,000 de gastos del negocio (flores, renta, sueldo del ayudante) y $15,000 de gastos personales (súper, colegiatura).",
      en: "In one month, Martín's flower shop sold $85,000. From the same account he paid $48,000 in business expenses (flowers, rent, helper's wage) and $15,000 in personal expenses (groceries, tuition).",
    },
    prompt: {
      es: "¿Cuál fue la utilidad real del negocio ese mes? Responde en pesos.",
      en: "What was the business's real profit that month? Answer in pesos.",
    },
    answer: 37000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Solo cuentan los gastos del negocio: 85,000 − 48,000 = $37,000. Los $15,000 personales son retiros del dueño, no gastos del negocio. Error común: restar también los gastos personales y concluir que el negocio solo ganó $22,000.",
      en: "Only business expenses count: 85,000 − 48,000 = $37,000. The $15,000 of personal spending are owner withdrawals, not business expenses. Common mistake: also subtracting personal expenses and concluding the business earned only $22,000.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-personal-separation',
  },
  {
    id: 'PER-18-E3',
    level: 1,
    module: 'PER-18',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Raúl tiene un taller de reparación de celulares como persona física.",
      en: "Raúl runs a phone repair shop as an individual.",
    },
    prompt: {
      es: "Clasifica cada pago como gasto del negocio o gasto personal de Raúl.",
      en: "Classify each payment as a business expense or Raúl's personal expense.",
    },
    categories: [
      { id: 'PER-18-E3-c1', label: { es: "Gasto del negocio", en: "Business expense" } },
      { id: 'PER-18-E3-c2', label: { es: "Gasto personal (retiro del dueño)", en: "Personal expense (owner withdrawal)" } },
    ],
    items: [
      { id: 'PER-18-E3-i1', label: { es: "Pantallas y refacciones para reparar equipos de clientes", en: "Screens and parts to repair customers' devices" }, correctCategoryId: 'PER-18-E3-c1' },
      { id: 'PER-18-E3-i2', label: { es: "La renta del local del taller", en: "Rent for the shop's premises" }, correctCategoryId: 'PER-18-E3-c1' },
      { id: 'PER-18-E3-i3', label: { es: "Las vacaciones familiares en la playa", en: "The family beach vacation" }, correctCategoryId: 'PER-18-E3-c2' },
      { id: 'PER-18-E3-i4', label: { es: "La publicidad pagada en redes para el taller", en: "Paid social media ads for the shop" }, correctCategoryId: 'PER-18-E3-c1' },
      { id: 'PER-18-E3-i5', label: { es: "La colegiatura de su hija", en: "His daughter's school tuition" }, correctCategoryId: 'PER-18-E3-c2' },
      { id: 'PER-18-E3-i6', label: { es: "El súper de la semana para su casa", en: "The week's groceries for his home" }, correctCategoryId: 'PER-18-E3-c2' },
    ],
    explanation: {
      es: "Refacciones, renta del local y publicidad sirven para operar el taller: son gastos del negocio. Vacaciones, colegiatura y súper son de la vida personal: si se pagan con dinero del negocio, son retiros del dueño. Error común: pensar que todo lo que se paga con la cuenta del negocio es gasto del negocio.",
      en: "Parts, shop rent and advertising serve to run the shop: they are business expenses. Vacation, tuition and groceries belong to personal life: if paid with business money, they are owner withdrawals. Common mistake: thinking everything paid from the business account is a business expense.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-personal-separation',
  },
  {
    id: 'PER-18-E4',
    level: 1,
    module: 'PER-18',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Las utilidades mensuales de la panadería de Silvia varían entre $20,000 y $45,000. Ella saca dinero de la caja cada vez que lo necesita y algunos meses no le alcanza para pagar la harina.",
      en: "The monthly profits of Silvia's bakery vary between $20,000 and $45,000. She takes money from the till whenever she needs it and some months she cannot afford to pay for flour.",
    },
    prompt: {
      es: "¿Qué le conviene más a Silvia?",
      en: "What suits Silvia best?",
    },
    options: [
      { id: 'PER-18-E4-a', text: { es: "Seguir sacando lo que necesite, porque el negocio es suyo", en: "Keep taking what she needs, because the business is hers" } },
      { id: 'PER-18-E4-b', text: { es: "Pagarse un sueldo fijo que el negocio pueda cubrir incluso en los meses flojos", en: "Pay herself a fixed salary that the business can cover even in slow months" } },
      { id: 'PER-18-E4-c', text: { es: "Pagarse siempre $45,000, que es lo que gana en los mejores meses", en: "Always pay herself $45,000, which is what she earns in the best months" } },
      { id: 'PER-18-E4-d', text: { es: "No pagarse nada y vivir de tarjetas de crédito", en: "Pay herself nothing and live on credit cards" } },
    ],
    correctOptionId: 'PER-18-E4-b',
    explanation: {
      es: "Un sueldo fijo y sostenible estabiliza su presupuesto personal y deja en el negocio el dinero para insumos e impuestos; el excedente de los meses buenos sirve de colchón. Pagarse lo del mejor mes descapitaliza el negocio y vivir de tarjetas genera deuda cara. Error común: confundir las ventas o la utilidad de un buen mes con lo que se puede retirar cada mes.",
      en: "A fixed, sustainable salary stabilizes her personal budget and leaves in the business the money for supplies and taxes; the surplus of good months serves as a cushion. Paying herself the best month's amount drains the business and living on cards creates expensive debt. Common mistake: confusing a good month's sales or profit with what can be withdrawn every month.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-personal-separation',
  },
  {
    id: 'PER-18-E5',
    level: 1,
    module: 'PER-18',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Aunque una persona sea la única dueña de su negocio, en contabilidad el negocio se trata como una entidad separada de ella.",
      en: "Even if a person is the sole owner of her business, in accounting the business is treated as an entity separate from her.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. El postulado de entidad económica de las NIF pide registrar solo las operaciones del negocio, separadas de las del dueño, aunque legalmente sea persona física. Así los números muestran cómo va el negocio. Error común: confundir la separación contable con la separación legal; la contabilidad separa siempre, aunque legalmente respondas con tus bienes.",
      en: "True. The NIF economic entity postulate requires recording only the business's transactions, separate from the owner's, even if legally she is an individual. That way the numbers show how the business is doing. Common mistake: confusing accounting separation with legal separation; accounting always separates, even if legally you answer with your assets.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-personal-separation',
  },
  {
    id: 'PER-18-E6',
    level: 1,
    module: 'PER-18',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "El estudio de diseño de Pablo tuvo una utilidad promedio de $50,000 al mes en el último semestre. Pablo decide apartar 20 % para impuestos y 10 % para reinvertir en equipo, y pagarse el resto como sueldo fijo.",
      en: "Pablo's design studio had an average profit of $50,000 a month over the last six months. Pablo decides to set aside 20% for taxes and 10% to reinvest in equipment, and pay himself the rest as a fixed salary.",
    },
    prompt: {
      es: "Calcula en pesos la reserva de impuestos, la reinversión y el sueldo mensual de Pablo.",
      en: "Compute in pesos the tax reserve, the reinvestment and Pablo's monthly salary.",
    },
    fields: [
      { id: 'f1', label: { es: "Reserva para impuestos", en: "Tax reserve" }, answer: 10000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Reinversión", en: "Reinvestment" }, answer: 5000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Sueldo mensual del dueño", en: "Owner's monthly salary" }, answer: 35000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Impuestos: 20 % × 50,000 = $10,000. Reinversión: 10 % × 50,000 = $5,000. Sueldo: 50,000 − 10,000 − 5,000 = $35,000. Error común: pagarse los $50,000 completos y descubrir después que no hay dinero para impuestos ni para renovar equipo.",
      en: "Taxes: 20% × 50,000 = $10,000. Reinvestment: 10% × 50,000 = $5,000. Salary: 50,000 − 10,000 − 5,000 = $35,000. Common mistake: paying himself the full $50,000 and later finding there is no money for taxes or to renew equipment.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-personal-separation',
  },
]
