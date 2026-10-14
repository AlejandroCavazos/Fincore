import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Contabilidad Financiera, parte 2 (Intermedio).
 * CON-10 Contabilidad internacional · CON-11 Contabilidad gubernamental ·
 * CON-12 Sistemas de información contable y cierres · CON-14 Reportes ESG ·
 * CON-15 Preparación para certificaciones.
 */

const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── CON-10 ─────────────────────────────
  {
    id: 'CON-10',
    level: 2,
    topicIds: ['CON.10'],
    title: t("Contabilidad internacional", "International accounting"),
    summary: t(
      "La contabilidad internacional te enseña a registrar operaciones en otras monedas, a convertir los estados de una filial extranjera a pesos y a entender por qué no todos los países usan las mismas reglas.",
      "International accounting teaches you to record transactions in other currencies, to translate a foreign subsidiary's statements into pesos and to understand why not every country uses the same rules.",
    ),
    minutes: 18,
    objectives: [
      t("Distinguir la moneda de registro, la moneda funcional y la moneda de informe de una empresa.", "Distinguish a company's recording currency, functional currency and reporting currency."),
      t("Registrar operaciones en moneda extranjera y calcular la diferencia cambiaria al pagar o al cierre.", "Record foreign-currency transactions and compute the exchange difference on payment or at closing."),
      t("Convertir los saldos básicos de una subsidiaria extranjera y saber dónde va el efecto por conversión.", "Translate the basic balances of a foreign subsidiary and know where the translation effect goes."),
      t("Reconocer algunas diferencias clave entre NIIF y US GAAP.", "Recognize some key differences between IFRS and US GAAP."),
    ],
    theory: [
      {
        heading: t("Tres monedas: de registro, funcional y de informe", "Three currencies: recording, functional and reporting"),
        body: [
          t(
            "Cuando una empresa hace negocios con otros países aparecen **tres monedas**. La **moneda de registro** es en la que llevas tus libros (en México, casi siempre pesos). La **moneda de informe** es en la que presentas tus estados financieros a los usuarios.",
            "When a company does business with other countries, **three currencies** appear. The **recording currency** is the one you keep your books in (in Mexico, almost always pesos). The **reporting currency** is the one you present your financial statements in to users.",
          ),
          t(
            "La más importante es la **moneda funcional**: la moneda del **entorno económico principal** donde la empresa genera y gasta su efectivo. Para saber cuál es, pregúntate: ¿en qué moneda vendo?, ¿en qué moneda pago a proveedores y empleados?, ¿en qué moneda me financio?",
            "The most important one is the **functional currency**: the currency of the **primary economic environment** where the company generates and spends its cash. To find it, ask yourself: what currency do I sell in? What currency do I pay suppliers and employees in? What currency do I borrow in?",
          ),
          t(
            "Mini ejemplo: una maquiladora en Chihuahua vende todo a Estados Unidos en dólares, compra sus insumos en dólares y tiene un préstamo en dólares. Aunque registre en pesos, su moneda funcional probablemente es el **dólar**. Una papelería en Puebla que vende y compra en pesos tiene como moneda funcional el **peso**.",
            "Mini example: a maquiladora in Chihuahua sells everything to the United States in dollars, buys its inputs in dollars and has a dollar loan. Even if it records in pesos, its functional currency is probably the **dollar**. A stationery store in Puebla that buys and sells in pesos has the **peso** as its functional currency.",
          ),
        ],
        bullets: [
          t("Moneda de registro: la de tus libros.", "Recording currency: the one in your books."),
          t("Moneda funcional: la de tu entorno económico principal.", "Functional currency: the one of your primary economic environment."),
          t("Moneda de informe: la de presentación de tus estados financieros.", "Reporting currency: the one your financial statements are presented in."),
          t("Moneda extranjera: cualquier moneda distinta de la funcional.", "Foreign currency: any currency other than the functional one."),
        ],
      },
      {
        heading: t("Operaciones en moneda extranjera", "Foreign-currency transactions"),
        body: [
          t(
            "Si compras o vendes en dólares, registras la operación en tu moneda funcional usando el **tipo de cambio** del día de la operación. El tipo de cambio es simplemente cuántos pesos cuesta un dólar (o un euro) en ese momento.",
            "If you buy or sell in dollars, you record the transaction in your functional currency using the **exchange rate** of the transaction date. The exchange rate is simply how many pesos one dollar (or euro) costs at that moment.",
          ),
          t(
            "Después hay que distinguir dos tipos de partidas. Las **partidas monetarias** son derechos u obligaciones de recibir o pagar una cantidad fija de dinero: efectivo en dólares, clientes en dólares, proveedores o préstamos en dólares. Al cierre se **actualizan al tipo de cambio de cierre** y la diferencia se reconoce en resultados como **ganancia o pérdida cambiaria**.",
            "Then you must distinguish two kinds of items. **Monetary items** are rights or obligations to receive or pay a fixed amount of money: cash in dollars, receivables in dollars, payables or loans in dollars. At closing they are **remeasured at the closing rate** and the difference is recognized in profit or loss as an **exchange gain or loss**.",
          ),
          t(
            "Las **partidas no monetarias** (inventarios, maquinaria, anticipos que no se devolverán en efectivo) se quedan al **tipo de cambio histórico**, el del día en que se compraron. Mini ejemplo: compras una máquina por USD 1,000 a $18.00: queda en $18,000 aunque el dólar suba después.",
            "**Non-monetary items** (inventory, machinery, advances that will not be refunded in cash) stay at the **historical rate**, the one on the day they were bought. Mini example: you buy a machine for USD 1,000 at $18.00: it stays at $18,000 even if the dollar rises later.",
          ),
          t(
            "¿Por qué cambia una deuda en dólares? Piensa en tu tarjeta de crédito: si debes 100 dólares y el dólar pasa de $17 a $18, ahora necesitas $1,800 en lugar de $1,700 para pagar lo mismo. Debes los mismos dólares, pero más pesos: eso es una **pérdida cambiaria**. Si el dólar baja, necesitas menos pesos: **ganancia cambiaria**. Con algo que te deben a ti (un cliente en dólares) pasa al revés.",
            "Why does a dollar debt change? Think of your credit card: if you owe 100 dollars and the dollar goes from $17 to $18, you now need $1,800 instead of $1,700 to pay the same thing. You owe the same dollars but more pesos: that is an **exchange loss**. If the dollar falls, you need fewer pesos: an **exchange gain**. With something owed to you (a customer in dollars) it works the other way around.",
          ),
        ],
        formulas: [
          {
            name: t("Pasar una operación en moneda extranjera a pesos", "Converting a foreign-currency transaction into pesos"),
            expression: "Monto en pesos = Monto en moneda extranjera × TC del día",
            variables: [
              { symbol: "Monto en pesos", meaning: t("Lo que anotas en tus libros, en pesos.", "What you write in your books, in pesos.") },
              { symbol: "Monto en moneda extranjera", meaning: t("La cantidad de la factura en dólares, euros, etc. (por ejemplo, USD 1,500).", "The invoice amount in dollars, euros, etc. (for example, USD 1,500).") },
              { symbol: "TC del día", meaning: t("Tipo de cambio: cuántos pesos vale 1 dólar (o 1 euro) el día de la operación o el día en que pagas.", "Exchange rate: how many pesos 1 dollar (or 1 euro) is worth on the transaction date or the day you pay.") },
            ],
            steps: [
              t("Ubica el monto en moneda extranjera de la factura.", "Find the foreign-currency amount on the invoice."),
              t("Usa el tipo de cambio del día que te interesa: el de la compra para registrarla, o el del pago para saber cuántos pesos salen al liquidar.", "Use the exchange rate of the day you care about: the purchase date to record it, or the payment date to know how many pesos go out on settlement."),
              t("Multiplica: monto en moneda extranjera × tipo de cambio = pesos.", "Multiply: foreign-currency amount × exchange rate = pesos."),
            ],
            example: t(
              "Compras mercancía por USD 1,500 cuando el dólar está en $18.40: 1,500 × 18.40 = **$27,600**. Ese es el pasivo con el proveedor que anotas en pesos.",
              "You buy goods for USD 1,500 when the dollar is at $18.40: 1,500 × 18.40 = **$27,600**. That is the payable you record in pesos.",
            ),
            mistake: t(
              "Usar el tipo de cambio de hoy para registrar una compra de hace días. El registro inicial siempre va al tipo de cambio del día de la operación.",
              "Using today's rate to record a purchase made days ago. The initial entry always uses the rate of the transaction date.",
            ),
          },
          {
            name: t("Diferencia cambiaria (ganancia o pérdida)", "Exchange difference (gain or loss)"),
            expression: "Diferencia cambiaria = Monto en moneda extranjera × (TC nuevo − TC anterior)",
            variables: [
              { symbol: "Diferencia cambiaria", meaning: t("Cuántos pesos cambió el saldo solo porque se movió el tipo de cambio.", "How many pesos the balance changed just because the exchange rate moved.") },
              { symbol: "Monto en moneda extranjera", meaning: t("Los dólares (o euros) que todavía te deben o que debes; es una partida monetaria.", "The dollars (or euros) still owed to you or that you owe; it is a monetary item.") },
              { symbol: "TC nuevo", meaning: t("El tipo de cambio del día del pago o del cierre de mes, en pesos por dólar.", "The exchange rate on the payment date or at month-end, in pesos per dollar.") },
              { symbol: "TC anterior", meaning: t("El tipo de cambio con el que estaba registrado el saldo, en pesos por dólar.", "The exchange rate the balance was recorded at, in pesos per dollar.") },
            ],
            steps: [
              t("Confirma que la partida es monetaria (banco, cliente, proveedor o préstamo en moneda extranjera); las no monetarias no se actualizan.", "Confirm the item is monetary (bank, receivable, payable or loan in foreign currency); non-monetary items are not remeasured."),
              t("Resta los tipos de cambio: TC nuevo − TC anterior.", "Subtract the exchange rates: new rate − previous rate."),
              t("Multiplica esa diferencia por el monto en moneda extranjera.", "Multiply that difference by the foreign-currency amount."),
              t("Decide si es ganancia o pérdida: si es algo que te deben (cliente, banco), que el dólar suba es ganancia; si es algo que debes (proveedor, préstamo), que el dólar suba es pérdida. Si el dólar baja, todo se invierte.", "Decide whether it is a gain or a loss: for something owed to you (receivable, bank), a rising dollar is a gain; for something you owe (payable, loan), a rising dollar is a loss. If the dollar falls, everything flips."),
            ],
            example: t(
              "Un cliente te debe USD 4,000 registrados a $18.00 y al cierre el dólar está en $17.70. Diferencia de tipos: 17.70 − 18.00 = −0.30. Multiplica: 4,000 × (−0.30) = −$1,200. Tu derecho de cobro ahora vale $1,200 menos: **pérdida cambiaria de $1,200**.",
              "A customer owes you USD 4,000 recorded at $18.00 and at closing the dollar is at $17.70. Rate difference: 17.70 − 18.00 = −0.30. Multiply: 4,000 × (−0.30) = −$1,200. Your receivable is now worth $1,200 less: **an exchange loss of $1,200**.",
            ),
            interpret: t(
              "La ganancia o pérdida cambiaria va al estado de resultados del periodo. Pregúntate siempre: ¿ahora recibo (o pago) más pesos o menos pesos que antes?",
              "The exchange gain or loss goes to the period's income statement. Always ask yourself: do I now receive (or pay) more pesos or fewer pesos than before?",
            ),
            mistake: t(
              "Multiplicar los dólares por el tipo de cambio nuevo completo en lugar de solo por la diferencia, o pensar que \"el dólar bajó\" siempre es pérdida: con una deuda en dólares, que baje te favorece.",
              "Multiplying the dollars by the full new rate instead of only by the difference, or thinking that \"the dollar fell\" is always a loss: with a dollar debt, a falling dollar helps you.",
            ),
          },
        ],
      },
      {
        heading: t("Conversión de una subsidiaria extranjera y armonización", "Translating a foreign subsidiary and harmonization"),
        body: [
          t(
            "En palabras sencillas: convertir es \"traducir\" a pesos los números de una filial que lleva sus cuentas en otra moneda. Si tu empresa mexicana tiene una filial en Texas cuya moneda funcional es el dólar, antes de juntar sus números con los tuyos debes **convertir** sus estados a pesos. La regla general: **activos y pasivos** al tipo de cambio de **cierre**; **ingresos y gastos** al tipo de cambio de cada operación (se acepta un **promedio** si se parece); y el **capital aportado** a tipo de cambio **histórico**.",
            "In plain words: translating means \"converting\" into pesos the numbers of a subsidiary that keeps its books in another currency. If your Mexican company has a subsidiary in Texas whose functional currency is the dollar, before combining its numbers with yours you must **translate** its statements into pesos. The general rule: **assets and liabilities** at the **closing** rate; **revenue and expenses** at each transaction's rate (an **average** is accepted if it is close); and **contributed capital** at the **historical** rate.",
          ),
          t(
            "Como cada partida usa un tipo de cambio distinto, aparece una diferencia: el **efecto por conversión**. No va al estado de resultados del año, sino a **otros resultados integrales (ORI)**, dentro del capital, hasta que se vende la filial. ORI es un apartado del capital donde se guardan ganancias o pérdidas que todavía no se han hecho realidad en efectivo.",
            "Because each item uses a different rate, a difference appears: the **translation effect**. It does not go to the year's income statement but to **other comprehensive income (OCI)**, within equity, until the subsidiary is sold. OCI is a section of equity that holds gains or losses that have not yet turned into real cash.",
          ),
          t(
            "¿Por qué no hay una sola contabilidad mundial? Cada país desarrolló sus reglas. Hoy muchos países usan las **NIIF (IFRS)**, Estados Unidos usa **US GAAP** y México tiene sus **NIF**, muy cercanas a las NIIF. Mini ejemplo: una empresa mexicana que cotiza en bolsa reporta en NIIF, mientras su proveedor pequeño usa NIF.",
            "Why is there no single world accounting? Each country developed its own rules. Today many countries use **IFRS**, the United States uses **US GAAP** and Mexico has its **NIF**, very close to IFRS. Mini example: a listed Mexican company reports under IFRS, while its small supplier uses NIF.",
          ),
        ],
        formulas: [
          {
            name: t("Efecto por conversión de una filial nueva (sin utilidades)", "Translation effect of a new subsidiary (no profits yet)"),
            expression: "Efecto por conversión = (Activos − Pasivos) × TC de cierre − Capital aportado × TC histórico",
            variables: [
              { symbol: "Efecto por conversión", meaning: t("La diferencia en pesos que aparece solo por usar tipos de cambio distintos; va a ORI.", "The difference in pesos that appears only because different rates are used; it goes to OCI.") },
              { symbol: "Activos", meaning: t("Todo lo que tiene la filial, en dólares.", "Everything the subsidiary owns, in dollars.") },
              { symbol: "Pasivos", meaning: t("Todo lo que debe la filial, en dólares.", "Everything the subsidiary owes, in dollars.") },
              { symbol: "TC de cierre", meaning: t("Pesos por dólar el último día del periodo.", "Pesos per dollar on the last day of the period.") },
              { symbol: "Capital aportado", meaning: t("Los dólares que pusieron los dueños para crear la filial.", "The dollars the owners put in to create the subsidiary.") },
              { symbol: "TC histórico", meaning: t("Pesos por dólar el día en que se aportó ese capital.", "Pesos per dollar on the day that capital was contributed.") },
            ],
            steps: [
              t("Calcula los activos netos en dólares: Activos − Pasivos.", "Compute net assets in dollars: Assets − Liabilities."),
              t("Conviértelos a pesos con el tipo de cambio de cierre.", "Translate them into pesos at the closing rate."),
              t("Convierte el capital aportado con el tipo de cambio histórico.", "Translate contributed capital at the historical rate."),
              t("Resta: activos netos en pesos − capital en pesos. Esa diferencia es el efecto por conversión.", "Subtract: net assets in pesos − capital in pesos. That difference is the translation effect."),
            ],
            example: t(
              "Una filial se creó con USD 10,000 cuando el dólar valía $17.50. Al cierre tiene activos por USD 25,000 y pasivos por USD 15,000, y el dólar está en $18.20. Activos netos: 25,000 − 15,000 = USD 10,000. En pesos: 10,000 × 18.20 = $182,000. Capital: 10,000 × 17.50 = $175,000. Efecto: 182,000 − 175,000 = **$7,000 favorable**.",
              "A subsidiary was set up with USD 10,000 when the dollar was worth $17.50. At closing it has assets of USD 25,000 and liabilities of USD 15,000, and the dollar is at $18.20. Net assets: 25,000 − 15,000 = USD 10,000. In pesos: 10,000 × 18.20 = $182,000. Capital: 10,000 × 17.50 = $175,000. Effect: 182,000 − 175,000 = **$7,000 favorable**.",
            ),
            interpret: t(
              "Positivo: efecto favorable (el dólar subió frente a cuando invertiste). Negativo: efecto desfavorable. En ambos casos se presenta en ORI, no en la utilidad del año.",
              "Positive: favorable effect (the dollar rose compared with when you invested). Negative: unfavorable effect. Either way it is presented in OCI, not in the year's profit.",
            ),
            mistake: t(
              "Mandar el efecto por conversión al estado de resultados como si fuera la diferencia cambiaria de un proveedor en dólares.",
              "Sending the translation effect to the income statement as if it were the exchange difference on a dollar payable.",
            ),
          },
        ],
        bullets: [
          t("NIIF prohíben el método UEPS (LIFO) para inventarios; US GAAP lo permite.", "IFRS prohibits the LIFO inventory method; US GAAP allows it."),
          t("NIIF permiten revaluar propiedades, planta y equipo; US GAAP no.", "IFRS allows revaluing property, plant and equipment; US GAAP does not."),
          t("NIIF permiten revertir una baja de valor de inventarios; US GAAP no.", "IFRS allows reversing an inventory write-down; US GAAP does not."),
          t("NIIF tienden a basarse en principios; US GAAP tiene más reglas detalladas.", "IFRS tends to be principles-based; US GAAP has more detailed rules."),
        ],
      },
    ],
    examples: [
      {
        title: t("Proveedor en dólares al cierre del mes", "Dollar supplier at month-end"),
        problem: t(
          "El 10 de marzo una empresa importa una máquina por USD 20,000 a crédito, con tipo de cambio de $18.20. Al 31 de marzo sigue sin pagar y el tipo de cambio es $18.60 (cifras hipotéticas). ¿Qué pasa con la máquina y con el proveedor?",
          "On March 10 a company imports a machine for USD 20,000 on credit, at an exchange rate of $18.20. On March 31 it is still unpaid and the rate is $18.60 (hypothetical figures). What happens to the machine and to the supplier balance?",
        ),
        steps: [
          t("Registro inicial: 20,000 × 18.20 = $364,000 en maquinaria y en proveedores.", "Initial recording: 20,000 × 18.20 = $364,000 in machinery and in payables."),
          t("La máquina es no monetaria: se queda en $364,000.", "The machine is non-monetary: it stays at $364,000."),
          t("El proveedor es monetario: 20,000 × 18.60 = $372,000.", "The payable is monetary: 20,000 × 18.60 = $372,000."),
          t("Diferencia: 20,000 × (18.60 − 18.20) = $8,000 más de deuda.", "Difference: 20,000 × (18.60 − 18.20) = $8,000 more debt."),
        ],
        result: t(
          "Se reconoce una pérdida cambiaria de $8,000 en resultados; la máquina no cambia de valor por el tipo de cambio.",
          "An $8,000 exchange loss is recognized in profit or loss; the machine's value does not change because of the exchange rate.",
        ),
      },
      {
        title: t("Efecto por conversión de una filial nueva", "Translation effect of a new subsidiary"),
        problem: t(
          "Una filial en Estados Unidos se creó con un capital de USD 30,000 cuando el dólar valía $19.00. Al cierre tiene activos por USD 50,000 y pasivos por USD 20,000, y todavía no tiene utilidades. El tipo de cambio de cierre es $17.00 (cifras hipotéticas). Calcula el efecto por conversión.",
          "A US subsidiary was set up with capital of USD 30,000 when the dollar was worth $19.00. At closing it has assets of USD 50,000 and liabilities of USD 20,000, and no profits yet. The closing rate is $17.00 (hypothetical figures). Compute the translation effect.",
        ),
        steps: [
          t("Activos al cierre: 50,000 × 17 = $850,000.", "Assets at closing rate: 50,000 × 17 = $850,000."),
          t("Pasivos al cierre: 20,000 × 17 = $340,000. Activos netos: $510,000.", "Liabilities at closing rate: 20,000 × 17 = $340,000. Net assets: $510,000."),
          t("Capital a tipo histórico: 30,000 × 19 = $570,000.", "Capital at historical rate: 30,000 × 19 = $570,000."),
          t("Efecto por conversión: 510,000 − 570,000 = −$60,000.", "Translation effect: 510,000 − 570,000 = −$60,000."),
        ],
        result: t(
          "Hay un efecto por conversión desfavorable de $60,000, que se presenta en ORI dentro del capital, no en la utilidad del año.",
          "There is an unfavorable translation effect of $60,000, presented in OCI within equity, not in the year's profit.",
        ),
      },
    ],
    keyPoints: [
      t("La moneda funcional es la del entorno económico principal; no siempre es el peso.", "The functional currency is that of the primary economic environment; it is not always the peso."),
      t("Las operaciones en moneda extranjera se registran al tipo de cambio del día de la operación.", "Foreign-currency transactions are recorded at the exchange rate of the transaction date."),
      t("Partidas monetarias: se actualizan al cierre y la diferencia va a resultados.", "Monetary items: remeasured at closing and the difference goes to profit or loss."),
      t("Partidas no monetarias: se quedan al tipo de cambio histórico.", "Non-monetary items: stay at the historical rate."),
      t("Al convertir una filial, el efecto por conversión va a otros resultados integrales.", "When translating a subsidiary, the translation effect goes to other comprehensive income."),
      t("NIIF, US GAAP y NIF se parecen, pero tienen diferencias como UEPS y revaluación.", "IFRS, US GAAP and NIF are similar but differ on points like LIFO and revaluation."),
    ],
    normativeNote: t(
      "Contenido educativo basado en reglas generales de la NIF B-15 (CINIF) y la NIC 21 (IASB) sobre moneda extranjera, y en diferencias conocidas entre NIIF y US GAAP. Los tipos de cambio usados son hipotéticos. Las normas y los requisitos de cada autoridad cambian: verifica la versión vigente (2026) antes de aplicarlas.",
      "Educational content based on general rules of NIF B-15 (CINIF) and IAS 21 (IASB) on foreign currency, and on well-known differences between IFRS and US GAAP. The exchange rates used are hypothetical. Standards and each authority's requirements change: verify the current version (2026) before applying them.",
    ),
    exerciseIds: ['CON-10-E1', 'CON-10-E2', 'CON-10-E3', 'CON-10-E4', 'CON-10-E5', 'CON-10-E6'],
  },

  // ───────────────────────────── CON-11 ─────────────────────────────
  {
    id: 'CON-11',
    level: 2,
    topicIds: ['CON.11'],
    title: t("Contabilidad gubernamental", "Government accounting"),
    summary: t(
      "La contabilidad gubernamental registra al mismo tiempo el presupuesto y el patrimonio de los entes públicos, siguiendo los momentos contables del ingreso y del egreso, para rendir cuentas a la ciudadanía.",
      "Government accounting records public entities' budget and net worth at the same time, following the accounting moments of revenue and expenditure, so they are accountable to citizens.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar en qué se diferencia la contabilidad gubernamental de la de una empresa privada.", "Explain how government accounting differs from that of a private company."),
      t("Ordenar y aplicar los momentos contables del egreso y del ingreso.", "Order and apply the accounting moments of expenditure and revenue."),
      t("Calcular el presupuesto modificado y los saldos disponibles de una partida.", "Compute the modified budget and the available balances of a budget line."),
      t("Clasificar gastos con el clasificador por objeto del gasto.", "Classify spending using the classification by object of expenditure."),
    ],
    theory: [
      {
        heading: t("¿Qué la hace distinta?", "What makes it different?"),
        body: [
          t(
            "Un municipio, una secretaría de estado o una universidad pública no buscan **ganar dinero**: su meta es dar servicios (agua, seguridad, educación) con recursos que son de todos. Por eso su contabilidad tiene un objetivo central: **rendir cuentas**, es decir, mostrar en qué se gastó cada peso y si se respetó lo autorizado.",
            "A municipality, a state ministry or a public university does not seek to **make money**: its goal is to provide services (water, security, education) with resources that belong to everyone. That is why its accounting has a central goal: **accountability**, that is, showing what each peso was spent on and whether what was authorized was respected.",
          ),
          t(
            "La gran diferencia es el **presupuesto**. En una empresa el presupuesto es una guía interna; en el gobierno es un **mandato**: el Congreso o el cabildo aprueba cuánto se puede gastar y en qué. Por eso la contabilidad gubernamental registra **dos cosas a la vez**: el avance del presupuesto y los efectos en el patrimonio (bienes, deudas, cuentas por pagar).",
            "The big difference is the **budget**. In a company the budget is an internal guide; in government it is a **mandate**: Congress or the town council approves how much can be spent and on what. So government accounting records **two things at once**: budget progress and the effects on net worth (assets, debts, payables).",
          ),
          t(
            "En México la regla principal es la **Ley General de Contabilidad Gubernamental**, y el **CONAC** (Consejo Nacional de Armonización Contable) emite normas para que federación, estados y municipios registren igual. A nivel internacional existen las **NICSP (IPSAS)**, normas contables para el sector público. Mini ejemplo: gracias a la armonización, puedes comparar el gasto en alumbrado de dos municipios distintos.",
            "In Mexico the main rule is the **General Law of Government Accounting**, and **CONAC** (National Council for Accounting Harmonization) issues standards so the federation, states and municipalities record the same way. Internationally there are the **IPSAS**, accounting standards for the public sector. Mini example: thanks to harmonization, you can compare street-lighting spending of two different municipalities.",
          ),
        ],
      },
      {
        heading: t("Momentos contables del egreso y del ingreso", "Accounting moments of expenditure and revenue"),
        body: [
          t(
            "Cada peso del presupuesto pasa por etapas llamadas **momentos contables**. Del lado del gasto (egreso) son seis: **aprobado**, **modificado**, **comprometido**, **devengado**, **ejercido** y **pagado**.",
            "Each budget peso goes through stages called **accounting moments**. On the spending side (expenditure) there are six: **approved**, **modified**, **committed**, **accrued**, **exercised** and **paid**.",
          ),
          t(
            "**Comprometido** es cuando se firma un contrato o pedido: el dinero queda apartado. **Devengado** es cuando el proveedor ya entregó el bien o servicio y nace la obligación de pagar. **Ejercido** es cuando se autoriza la orden de pago, y **pagado** cuando sale el dinero. Del lado del ingreso hay cuatro: **estimado**, **modificado**, **devengado** (nace el derecho a cobrar) y **recaudado** (se cobra).",
            "**Committed** is when a contract or order is signed: the money is set aside. **Accrued** is when the supplier has delivered the good or service and the obligation to pay arises. **Exercised** is when the payment order is authorized, and **paid** when the money goes out. On the revenue side there are four: **estimated**, **modified**, **accrued** (the right to collect arises) and **collected**.",
          ),
          t(
            "Mini ejemplo: un municipio firma en marzo un contrato por 5 patrullas (comprometido), las recibe en mayo (devengado), autoriza la orden de pago (ejercido) y transfiere en junio (pagado).",
            "Mini example: a municipality signs a contract for 5 patrol cars in March (committed), receives them in May (accrued), authorizes the payment order (exercised) and transfers the money in June (paid).",
          ),
          t(
            "Los dos primeros momentos son el \"techo\" de gasto. **Aprobado** es lo que autorizó el Congreso o el cabildo al inicio del año. **Modificado** es ese mismo monto después de los cambios autorizados: **ampliaciones** (le dan más dinero a la partida) y **reducciones** (le quitan). Piensa en tu quincena: lo aprobado es tu sueldo; si te dan un bono es una ampliación, y si te descuentan algo es una reducción.",
            "The first two moments are the spending \"ceiling\". **Approved** is what Congress or the town council authorized at the start of the year. **Modified** is that same amount after authorized changes: **increases** (the line gets more money) and **reductions** (money is taken away). Think of your paycheck: the approved amount is your salary; a bonus is an increase and a deduction is a reduction.",
          ),
        ],
        formulas: [
          {
            name: t("Presupuesto modificado", "Modified budget"),
            expression: "Presupuesto modificado = Aprobado + Ampliaciones − Reducciones",
            variables: [
              { symbol: "Presupuesto modificado", meaning: t("El techo real de gasto de la partida después de los ajustes, en pesos.", "The line's real spending ceiling after adjustments, in pesos.") },
              { symbol: "Aprobado", meaning: t("Lo autorizado al inicio del año, en pesos.", "What was authorized at the start of the year, in pesos.") },
              { symbol: "Ampliaciones", meaning: t("Aumentos autorizados durante el año, en pesos.", "Authorized increases during the year, in pesos.") },
              { symbol: "Reducciones", meaning: t("Recortes autorizados durante el año, en pesos.", "Authorized cuts during the year, in pesos.") },
            ],
            steps: [
              t("Parte del presupuesto aprobado.", "Start from the approved budget."),
              t("Súmale las ampliaciones.", "Add the increases."),
              t("Réstale las reducciones: el resultado es el modificado.", "Subtract the reductions: the result is the modified budget."),
            ],
            example: t(
              "Aprobado $800,000, ampliación $150,000 y reducción $30,000. 800,000 + 150,000 = 950,000; 950,000 − 30,000 = **$920,000** de presupuesto modificado.",
              "Approved $800,000, increase $150,000 and reduction $30,000. 800,000 + 150,000 = 950,000; 950,000 − 30,000 = **$920,000** modified budget.",
            ),
            mistake: t(
              "Restar el comprometido o el pagado. Esos son avances del gasto, no cambios al presupuesto.",
              "Subtracting the committed or paid amounts. Those are spending progress, not budget changes.",
            ),
          },
          {
            name: t("Disponible por comprometer", "Available to commit"),
            expression: "Disponible por comprometer = Presupuesto modificado − Comprometido",
            variables: [
              { symbol: "Disponible por comprometer", meaning: t("Lo que todavía se puede apartar con nuevos contratos o pedidos, en pesos.", "What can still be set aside with new contracts or orders, in pesos.") },
              { symbol: "Presupuesto modificado", meaning: t("El techo de gasto ya ajustado, en pesos.", "The adjusted spending ceiling, in pesos.") },
              { symbol: "Comprometido", meaning: t("Lo ya apartado con contratos o pedidos firmados, en pesos.", "What has already been set aside with signed contracts or orders, in pesos.") },
            ],
            steps: [
              t("Calcula primero el presupuesto modificado.", "First compute the modified budget."),
              t("Réstale todo lo comprometido.", "Subtract everything committed."),
            ],
            example: t(
              "Con un modificado de $920,000 y $610,000 comprometidos: 920,000 − 610,000 = **$310,000** disponibles para nuevos contratos.",
              "With a modified budget of $920,000 and $610,000 committed: 920,000 − 610,000 = **$310,000** available for new contracts.",
            ),
            mistake: t(
              "Restar contra el aprobado original en lugar del modificado.",
              "Subtracting from the original approved budget instead of the modified one.",
            ),
          },
          {
            name: t("Devengado no pagado (lo que se debe a proveedores)", "Accrued but unpaid (what is owed to suppliers)"),
            expression: "Devengado no pagado = Devengado − Pagado",
            variables: [
              { symbol: "Devengado no pagado", meaning: t("Bienes o servicios ya recibidos que aún no se pagan; es una cuenta por pagar, en pesos.", "Goods or services already received but not yet paid; it is a payable, in pesos.") },
              { symbol: "Devengado", meaning: t("Lo que los proveedores ya entregaron, en pesos.", "What suppliers have already delivered, in pesos.") },
              { symbol: "Pagado", meaning: t("Lo que ya salió del banco, en pesos.", "What has already left the bank, in pesos.") },
            ],
            steps: [
              t("Toma el total devengado (lo ya recibido).", "Take the total accrued (what has been received)."),
              t("Réstale lo pagado: el resultado es la deuda con proveedores.", "Subtract what was paid: the result is the debt to suppliers."),
            ],
            example: t(
              "Se han devengado $480,000 y pagado $350,000: 480,000 − 350,000 = **$130,000** pendientes de pago.",
              "$480,000 has been accrued and $350,000 paid: 480,000 − 350,000 = **$130,000** still to be paid.",
            ),
            mistake: t(
              "Restar el pagado del comprometido. Lo comprometido aún no se recibe, así que todavía no es una deuda.",
              "Subtracting paid from committed. Committed amounts have not been received yet, so they are not a debt yet.",
            ),
          },
        ],
      },
      {
        heading: t("Clasificadores, estados e información pública", "Classifications, statements and public information"),
        body: [
          t(
            "Para ordenar el gasto se usan **clasificadores presupuestarios**. El más conocido es el **clasificador por objeto del gasto**, que agrupa todo en capítulos: por ejemplo, el capítulo **1000** son servicios personales (sueldos), el **2000** materiales y suministros, el **3000** servicios generales, el **5000** bienes muebles, inmuebles e intangibles y el **6000** inversión pública (obra).",
            "To organize spending, **budget classifications** are used. The best known is the **classification by object of expenditure**, which groups everything into chapters: for example, chapter **1000** is personal services (salaries), **2000** materials and supplies, **3000** general services, **5000** movable, immovable and intangible assets and **6000** public investment (construction works).",
          ),
          t(
            "Los entes públicos preparan **estados contables** (como el estado de situación financiera y el estado de actividades) y **estados presupuestarios** (como el estado analítico del ejercicio del presupuesto de egresos). Cada año integran la **Cuenta Pública**, que revisa el poder legislativo con apoyo de su órgano de auditoría.",
            "Public entities prepare **accounting statements** (such as the statement of financial position and the statement of activities) and **budget statements** (such as the analytical statement of the expenditure budget). Each year they put together the **Public Account**, which the legislature reviews with support from its audit body.",
          ),
          t(
            "Mini ejemplo: si quieres saber cuánto gastó tu municipio en papelería, buscas en su información pública el capítulo 2000; si quieres saber cuánto invirtió en pavimentar calles, buscas el capítulo 6000.",
            "Mini example: if you want to know how much your municipality spent on stationery, you look for chapter 2000 in its public information; if you want to know how much it invested in paving streets, you look for chapter 6000.",
          ),
        ],
        bullets: [
          t("1000 Servicios personales: sueldos y prestaciones.", "1000 Personal services: salaries and benefits."),
          t("2000 Materiales y suministros: papelería, combustible.", "2000 Materials and supplies: stationery, fuel."),
          t("3000 Servicios generales: luz, rentas, mantenimiento.", "3000 General services: electricity, rent, maintenance."),
          t("5000 Bienes muebles, inmuebles e intangibles: vehículos, computadoras.", "5000 Movable, immovable and intangible assets: vehicles, computers."),
          t("6000 Inversión pública: obras como calles o puentes.", "6000 Public investment: works such as streets or bridges."),
        ],
      },
    ],
    examples: [
      {
        title: t("Seguimiento de una partida presupuestal", "Tracking a budget line"),
        problem: t(
          "Una dependencia tiene aprobados $2,000,000 para mantenimiento. Recibe una ampliación de $300,000 y una reducción de $100,000. Ha comprometido $1,600,000, devengado $1,200,000 y pagado $1,000,000 (cifras hipotéticas). ¿Cuánto le queda por comprometer y cuánto debe a proveedores?",
          "An agency has $2,000,000 approved for maintenance. It gets a $300,000 increase and a $100,000 reduction. It has committed $1,600,000, accrued $1,200,000 and paid $1,000,000 (hypothetical figures). How much is left to commit and how much does it owe suppliers?",
        ),
        steps: [
          t("Modificado: 2,000,000 + 300,000 − 100,000 = $2,200,000.", "Modified: 2,000,000 + 300,000 − 100,000 = $2,200,000."),
          t("Disponible por comprometer: 2,200,000 − 1,600,000 = $600,000.", "Available to commit: 2,200,000 − 1,600,000 = $600,000."),
          t("Devengado no pagado: 1,200,000 − 1,000,000 = $200,000.", "Accrued but unpaid: 1,200,000 − 1,000,000 = $200,000."),
        ],
        result: t(
          "Puede comprometer todavía $600,000 y tiene $200,000 de bienes o servicios recibidos que aún debe pagar.",
          "It can still commit $600,000 and has $200,000 of goods or services received that it still has to pay.",
        ),
      },
      {
        title: t("Momentos contables de una obra", "Accounting moments of a construction project"),
        problem: t(
          "Un municipio contrata la pavimentación de una calle por $800,000. En abril firma el contrato; en julio la constructora entrega la obra terminada; en agosto se autoriza la orden de pago y en septiembre se transfiere. Identifica los momentos y el capítulo del gasto.",
          "A municipality hires a company to pave a street for $800,000. In April it signs the contract; in July the builder delivers the finished work; in August the payment order is authorized and in September the money is transferred. Identify the moments and the spending chapter.",
        ),
        steps: [
          t("Abril, firma del contrato: comprometido por $800,000.", "April, contract signed: committed for $800,000."),
          t("Julio, obra recibida: devengado; nace la cuenta por pagar.", "July, work received: accrued; the payable arises."),
          t("Agosto, orden de pago autorizada: ejercido.", "August, payment order authorized: exercised."),
          t("Septiembre, transferencia: pagado. Al ser obra, va al capítulo 6000.", "September, transfer: paid. Since it is a construction work, it goes to chapter 6000."),
        ],
        result: t(
          "Comprometido (abril) → devengado (julio) → ejercido (agosto) → pagado (septiembre), en el capítulo 6000 Inversión pública.",
          "Committed (April) → accrued (July) → exercised (August) → paid (September), in chapter 6000 Public investment.",
        ),
      },
    ],
    keyPoints: [
      t("El objetivo de la contabilidad gubernamental es rendir cuentas, no medir ganancias.", "The goal of government accounting is accountability, not measuring profit."),
      t("Registra a la vez el presupuesto y el patrimonio del ente público.", "It records the public entity's budget and net worth at the same time."),
      t("Egreso: aprobado, modificado, comprometido, devengado, ejercido y pagado.", "Expenditure: approved, modified, committed, accrued, exercised and paid."),
      t("Ingreso: estimado, modificado, devengado y recaudado.", "Revenue: estimated, modified, accrued and collected."),
      t("El clasificador por objeto del gasto ordena el gasto en capítulos (1000, 2000, 3000…).", "The classification by object of expenditure groups spending into chapters (1000, 2000, 3000…)."),
    ],
    normativeNote: t(
      "Contenido educativo basado en la Ley General de Contabilidad Gubernamental, la normatividad del CONAC y las NICSP (IPSAS) en términos generales. Los montos son hipotéticos y los clasificadores y normas se actualizan: verifica la versión vigente (2026) antes de aplicarlos.",
      "Educational content based in general terms on Mexico's General Law of Government Accounting, CONAC regulations and IPSAS. Amounts are hypothetical and classifications and standards are updated: verify the current version (2026) before applying them.",
    ),
    exerciseIds: ['CON-11-E1', 'CON-11-E2', 'CON-11-E3', 'CON-11-E4', 'CON-11-E5', 'CON-11-E6'],
  },

  // ───────────────────────────── CON-12 ─────────────────────────────
  {
    id: 'CON-12',
    level: 2,
    topicIds: ['CON.12'],
    title: t("Sistemas de información contable y cierres contables", "Accounting information systems and period-end closing"),
    summary: t(
      "Un sistema de información contable convierte documentos en reportes confiables gracias a personas, procesos, software y controles, y el cierre contable asegura que cada periodo quede completo, conciliado y bloqueado.",
      "An accounting information system turns documents into reliable reports through people, processes, software and controls, and the period-end close ensures each period is complete, reconciled and locked.",
    ),
    minutes: 18,
    objectives: [
      t("Identificar los componentes de un sistema de información contable y su flujo de entrada, proceso y salida.", "Identify the components of an accounting information system and its input, processing and output flow."),
      t("Explicar los controles básicos de un sistema contable y la idea de la contabilidad electrónica en México.", "Explain the basic controls of an accounting system and the idea of electronic accounting in Mexico."),
      t("Aplicar los pasos de un cierre: conciliación bancaria, ajustes y cierre de cuentas de resultados.", "Apply the steps of a close: bank reconciliation, adjustments and closing of income statement accounts."),
    ],
    theory: [
      {
        heading: t("Componentes de un sistema de información contable", "Components of an accounting information system"),
        body: [
          t(
            "Un **sistema de información contable** es todo lo que usa una empresa para capturar sus operaciones y convertirlas en reportes. No es solo el programa de computadora: también son las **personas**, los **procedimientos** (quién hace qué y cuándo), los **datos** (catálogo de cuentas, clientes, proveedores) y los **controles**.",
            "An **accounting information system** is everything a company uses to capture its transactions and turn them into reports. It is not just the computer program: it is also the **people**, the **procedures** (who does what and when), the **data** (chart of accounts, customers, suppliers) and the **controls**.",
          ),
          t(
            "Funciona en tres fases. **Entrada**: llegan documentos fuente, como una factura electrónica (CFDI) o un ticket. **Proceso**: se registran pólizas y el sistema las pasa al mayor. **Salida**: se generan la balanza de comprobación, los estados financieros y reportes como la antigüedad de saldos de clientes.",
            "It works in three phases. **Input**: source documents arrive, such as an electronic invoice (CFDI) or a receipt. **Processing**: journal entries are recorded and the system posts them to the ledger. **Output**: the trial balance, financial statements and reports such as the customer aging report are produced.",
          ),
          t(
            "Las empresas pequeñas suelen usar un software contable; las grandes, un **ERP** (sistema integral) donde ventas, compras, inventarios y nómina generan pólizas automáticas. Mini ejemplo: en una ferretería, al facturar una venta, el ERP baja el inventario y registra la póliza de venta sin que nadie la capture.",
            "Small companies usually use accounting software; large ones use an **ERP** (integrated system) where sales, purchasing, inventory and payroll generate entries automatically. Mini example: in a hardware store, when a sale is invoiced, the ERP reduces inventory and records the sales entry without anyone typing it.",
          ),
        ],
        bullets: [
          t("Personas: quienes capturan, revisan y autorizan.", "People: those who capture, review and authorize."),
          t("Procedimientos: pasos y calendarios de trabajo.", "Procedures: steps and work calendars."),
          t("Datos: catálogo de cuentas y documentos fuente.", "Data: chart of accounts and source documents."),
          t("Software: sistema contable o ERP.", "Software: accounting system or ERP."),
          t("Controles: permisos, revisiones y respaldos.", "Controls: permissions, reviews and backups."),
        ],
      },
      {
        heading: t("Controles y contabilidad electrónica", "Controls and electronic accounting"),
        body: [
          t(
            "Un sistema solo es confiable si tiene **controles**. El más importante es la **segregación de funciones**: la misma persona no debe autorizar un pago, registrarlo y conciliar el banco, porque podría esconder un error o un fraude. Otros controles son los **permisos por usuario**, la **bitácora** (registro de quién cambió qué), los **respaldos** y el **bloqueo de periodos** cerrados.",
            "A system is only reliable if it has **controls**. The most important is **segregation of duties**: the same person should not authorize a payment, record it and reconcile the bank, because they could hide an error or a fraud. Other controls are **user permissions**, the **audit trail** (a log of who changed what), **backups** and **locking** closed periods.",
          ),
          t(
            "En México, muchos contribuyentes deben llevar **contabilidad electrónica**: enviar al SAT por medios electrónicos su catálogo de cuentas (relacionado con un código agrupador) y su balanza de comprobación, y entregar pólizas cuando la autoridad las pida. Por eso conviene que cada póliza esté ligada a su CFDI.",
            "In Mexico, many taxpayers must keep **electronic accounting**: send the SAT their chart of accounts (mapped to a grouping code) and their trial balance electronically, and provide journal entries when the authority asks for them. That is why each entry should be linked to its CFDI.",
          ),
          t(
            "Mini ejemplo: en una distribuidora, la cajera cobra, pero quien registra los cobros y concilia el banco es otra persona. Si falta dinero, la diferencia aparece en la conciliación.",
            "Mini example: in a distributor, the cashier collects money, but a different person records the collections and reconciles the bank. If money is missing, the difference shows up in the reconciliation.",
          ),
        ],
      },
      {
        heading: t("El cierre contable paso a paso", "The period-end close step by step"),
        body: [
          t(
            "El **cierre** es el proceso para dejar un periodo (un mes o un año) completo y correcto antes de emitir reportes. Empieza con el **corte documental**: todo lo que pasó en el periodo debe estar registrado en ese periodo, y nada del siguiente.",
            "The **close** is the process of leaving a period (a month or a year) complete and correct before issuing reports. It begins with the **document cut-off**: everything that happened in the period must be recorded in that period, and nothing from the next one.",
          ),
          t(
            "Luego vienen las **conciliaciones** (comparar tus registros contra otra fuente, como el estado de cuenta del banco) y los **ajustes**: sueldos devengados no pagados, depreciación, estimaciones. Con eso se obtiene la balanza de comprobación y los estados financieros. Al final se **bloquea el periodo** para que nadie lo modifique.",
            "Then come **reconciliations** (comparing your records with another source, such as the bank statement) and **adjustments**: accrued unpaid salaries, depreciation, estimates. With that you get the trial balance and the financial statements. Finally the **period is locked** so no one can change it.",
          ),
          t(
            "En el **cierre anual** además se cancelan las **cuentas de resultados** (ingresos, costos y gastos) contra la cuenta de **utilidad del ejercicio**, para que el año siguiente empiecen en cero. Las cuentas de balance (bancos, clientes, proveedores) **no** se cancelan: sus saldos pasan al siguiente año. Mini ejemplo: si al 31 de diciembre las ventas suman $500,000, se cargan por $500,000 para dejarlas en cero.",
            "At **year-end** the **income statement accounts** (revenue, costs and expenses) are also closed against the **profit for the year** account, so they start at zero the next year. Balance sheet accounts (bank, receivables, payables) are **not** closed: their balances carry over to the next year. Mini example: if sales total $500,000 at December 31, they are debited for $500,000 to bring them to zero.",
          ),
          t(
            "¿Por qué casi nunca coinciden tu saldo y el del banco? Por los tiempos. Un **depósito en tránsito** es dinero que tú ya anotaste pero el banco todavía no refleja (lo depositaste el último día en la tarde). Un **cheque en tránsito** es un cheque que ya diste y anotaste, pero el proveedor aún no lo cobra. Y hay cargos que el banco ya hizo y tú no has anotado, como una **comisión**. La conciliación corrige cada lado hasta que los dos saldos sean iguales.",
            "Why do your balance and the bank's almost never match? Timing. A **deposit in transit** is money you already recorded but the bank does not show yet (you deposited it late on the last day). An **outstanding check** is a check you already issued and recorded, but the supplier has not cashed yet. And there are charges the bank already made that you have not recorded, such as a **fee**. The reconciliation corrects each side until both balances are equal.",
          ),
        ],
        formulas: [
          {
            name: t("Saldo ajustado según el banco", "Adjusted balance per bank"),
            expression: "Saldo ajustado banco = Saldo del estado de cuenta + Depósitos en tránsito − Cheques en tránsito",
            variables: [
              { symbol: "Saldo ajustado banco", meaning: t("Lo que de verdad tienes en el banco, ya corregido, en pesos.", "What you really have in the bank, once corrected, in pesos.") },
              { symbol: "Saldo del estado de cuenta", meaning: t("El saldo que muestra el banco al cierre, en pesos.", "The balance the bank shows at closing, in pesos.") },
              { symbol: "Depósitos en tránsito", meaning: t("Depósitos que ya anotaste pero el banco aún no registra, en pesos.", "Deposits you already recorded but the bank has not yet, in pesos.") },
              { symbol: "Cheques en tránsito", meaning: t("Cheques que ya emitiste pero nadie ha cobrado, en pesos.", "Checks you already issued that no one has cashed yet, in pesos.") },
            ],
            steps: [
              t("Parte del saldo del estado de cuenta del banco.", "Start from the bank statement balance."),
              t("Suma los depósitos en tránsito: ese dinero ya es tuyo.", "Add the deposits in transit: that money is already yours."),
              t("Resta los cheques en tránsito: ese dinero ya no es tuyo aunque el banco no lo haya descontado.", "Subtract the outstanding checks: that money is no longer yours even if the bank has not deducted it."),
            ],
            example: t(
              "El banco muestra $38,000, hay un depósito en tránsito de $4,000 y un cheque no cobrado de $6,500. 38,000 + 4,000 = 42,000; 42,000 − 6,500 = **$35,500**.",
              "The bank shows $38,000, there is a deposit in transit of $4,000 and an uncashed check of $6,500. 38,000 + 4,000 = 42,000; 42,000 − 6,500 = **$35,500**.",
            ),
            mistake: t(
              "Sumar el cheque en tránsito en lugar de restarlo.",
              "Adding the outstanding check instead of subtracting it.",
            ),
          },
          {
            name: t("Saldo ajustado según libros", "Adjusted balance per books"),
            expression: "Saldo ajustado libros = Saldo en libros − Cargos del banco no registrados + Abonos del banco no registrados",
            variables: [
              { symbol: "Saldo ajustado libros", meaning: t("Tu saldo contable ya corregido, en pesos; debe ser igual al saldo ajustado del banco.", "Your corrected book balance, in pesos; it must equal the adjusted bank balance.") },
              { symbol: "Saldo en libros", meaning: t("El saldo de Bancos en tu contabilidad, en pesos.", "The Bank balance in your accounting, in pesos.") },
              { symbol: "Cargos del banco no registrados", meaning: t("Lo que el banco ya te cobró y tú no has anotado: comisiones, intereses cobrados, en pesos.", "What the bank already charged you that you have not recorded: fees, interest charged, in pesos.") },
              { symbol: "Abonos del banco no registrados", meaning: t("Dinero que el banco ya te depositó y tú no has anotado: intereses ganados, transferencias de clientes, en pesos.", "Money the bank already credited to you that you have not recorded: interest earned, customer transfers, in pesos.") },
            ],
            steps: [
              t("Parte del saldo de Bancos en tus libros.", "Start from the Bank balance in your books."),
              t("Resta las comisiones y otros cargos que el banco hizo y no anotaste.", "Subtract fees and other charges the bank made that you did not record."),
              t("Suma los abonos del banco que no anotaste (si hay).", "Add any bank credits you did not record (if any)."),
              t("Compara con el saldo ajustado del banco: si son iguales, la conciliación cuadra.", "Compare with the adjusted bank balance: if they are equal, the reconciliation balances."),
            ],
            example: t(
              "En libros tienes $35,800 y el banco cobró una comisión de $300 que no anotaste. 35,800 − 300 = **$35,500**. Es igual al saldo ajustado del banco del ejemplo anterior: cuadra.",
              "Your books show $35,800 and the bank charged a $300 fee you did not record. 35,800 − 300 = **$35,500**. It equals the adjusted bank balance of the previous example: it reconciles.",
            ),
            interpret: t(
              "Si los dos saldos ajustados no coinciden, falta encontrar algo: un error de captura, un movimiento no registrado o un faltante.",
              "If the two adjusted balances do not match, something is still missing: a typing error, an unrecorded movement or a shortage.",
            ),
          },
          {
            name: t("Utilidad del ejercicio en el cierre anual", "Profit for the year in the year-end close"),
            expression: "Utilidad del ejercicio = Ingresos − (Costos + Gastos)",
            variables: [
              { symbol: "Utilidad del ejercicio", meaning: t("Lo que ganó el negocio en el año, en pesos; es el abono que cuadra la póliza de cierre.", "What the business earned in the year, in pesos; it is the credit that balances the closing entry.") },
              { symbol: "Ingresos", meaning: t("Ventas y otros ingresos del año (saldo acreedor), en pesos.", "Sales and other revenue for the year (credit balance), in pesos.") },
              { symbol: "Costos + Gastos", meaning: t("Costo de ventas, sueldos, renta, luz, etc. (saldo deudor), en pesos.", "Cost of goods sold, salaries, rent, utilities, etc. (debit balance), in pesos.") },
            ],
            steps: [
              t("Carga cada cuenta de ingresos por su saldo para dejarla en cero.", "Debit each revenue account for its balance to bring it to zero."),
              t("Abona cada cuenta de costos y gastos por su saldo para dejarla en cero.", "Credit each cost and expense account for its balance to bring it to zero."),
              t("Suma costos y gastos y réstalos a los ingresos.", "Add up costs and expenses and subtract them from revenue."),
              t("Si el resultado es positivo, abónalo a Utilidad del ejercicio (si es negativo, es pérdida y va como cargo). Revisa que cargos = abonos.", "If the result is positive, credit it to Profit for the year (if negative, it is a loss and goes as a debit). Check that debits = credits."),
            ],
            example: t(
              "Ventas $150,000; Costo de ventas $90,000; Sueldos $30,000; Renta $12,000. Costos y gastos: 90,000 + 30,000 + 12,000 = 132,000. Utilidad: 150,000 − 132,000 = **$18,000**. Póliza: cargo a Ventas 150,000; abonos 90,000 + 30,000 + 12,000 + 18,000 = 150,000.",
              "Sales $150,000; COGS $90,000; Salaries $30,000; Rent $12,000. Costs and expenses: 90,000 + 30,000 + 12,000 = 132,000. Profit: 150,000 − 132,000 = **$18,000**. Entry: debit Sales 150,000; credits 90,000 + 30,000 + 12,000 + 18,000 = 150,000.",
            ),
            mistake: t(
              "Cancelar también cuentas de balance como Bancos o Clientes; esas conservan su saldo para el año siguiente.",
              "Also closing balance sheet accounts such as Bank or Receivables; those keep their balance for the next year.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Conciliación bancaria de fin de mes", "Month-end bank reconciliation"),
        problem: t(
          "El estado de cuenta del banco muestra $60,000. Hay un depósito en tránsito de $7,000 y un cheque emitido no cobrado de $9,500. En libros el saldo es $58,300, pero no se ha registrado una comisión bancaria de $800 (cifras hipotéticas). ¿Cuadra?",
          "The bank statement shows $60,000. There is a deposit in transit of $7,000 and an issued but uncashed check of $9,500. The book balance is $58,300, but an $800 bank fee has not been recorded (hypothetical figures). Does it reconcile?",
        ),
        steps: [
          t("Lado banco: 60,000 + 7,000 − 9,500 = $57,500.", "Bank side: 60,000 + 7,000 − 9,500 = $57,500."),
          t("Lado libros: 58,300 − 800 = $57,500.", "Book side: 58,300 − 800 = $57,500."),
          t("Ambos saldos coinciden.", "Both balances match."),
        ],
        result: t(
          "El saldo conciliado es $57,500. Solo falta registrar en libros la comisión de $800.",
          "The reconciled balance is $57,500. Only the $800 fee still needs to be recorded in the books.",
        ),
      },
      {
        title: t("Cierre anual de cuentas de resultados", "Year-end closing of income statement accounts"),
        problem: t(
          "Al 31 de diciembre una tienda tiene: Ventas $300,000, Costo de ventas $180,000, Sueldos $70,000 y Renta $20,000. Haz el cierre de resultados.",
          "At December 31 a store has: Sales $300,000, Cost of goods sold $180,000, Salaries $70,000 and Rent $20,000. Close the income statement accounts.",
        ),
        steps: [
          t("Cargo a Ventas por $300,000 para dejarla en cero.", "Debit Sales for $300,000 to bring it to zero."),
          t("Abono a Costo de ventas $180,000, Sueldos $70,000 y Renta $20,000.", "Credit COGS $180,000, Salaries $70,000 and Rent $20,000."),
          t("Diferencia: 300,000 − 270,000 = $30,000 de abono a Utilidad del ejercicio.", "Difference: 300,000 − 270,000 = $30,000 credited to Profit for the year."),
        ],
        result: t(
          "La póliza de cierre cuadra en $300,000 y deja una utilidad del ejercicio de $30,000 en el capital.",
          "The closing entry balances at $300,000 and leaves a $30,000 profit for the year in equity.",
        ),
      },
    ],
    keyPoints: [
      t("Un sistema contable incluye personas, procedimientos, datos, software y controles.", "An accounting system includes people, procedures, data, software and controls."),
      t("Flujo: entrada (documentos), proceso (pólizas y mayor), salida (reportes).", "Flow: input (documents), processing (entries and ledger), output (reports)."),
      t("La segregación de funciones evita que una sola persona controle toda una operación.", "Segregation of duties prevents one person from controlling an entire transaction."),
      t("El cierre: corte, conciliaciones, ajustes, estados financieros y bloqueo del periodo.", "The close: cut-off, reconciliations, adjustments, financial statements and period lock."),
      t("En el cierre anual solo se cancelan las cuentas de resultados contra la utilidad del ejercicio.", "At year-end only income statement accounts are closed against profit for the year."),
    ],
    normativeNote: t(
      "Contenido educativo. Las obligaciones de contabilidad electrónica y CFDI ante el SAT se describen de forma general; quién está obligado, los formatos y los plazos cambian con el tiempo: verifica las reglas vigentes (2026) antes de aplicarlas.",
      "Educational content. Electronic accounting and CFDI obligations before the SAT are described in general terms; who is required, the formats and the deadlines change over time: verify the current rules (2026) before applying them.",
    ),
    exerciseIds: ['CON-12-E1', 'CON-12-E2', 'CON-12-E3', 'CON-12-E4', 'CON-12-E5', 'CON-12-E6'],
  },

  // ───────────────────────────── CON-14 ─────────────────────────────
  {
    id: 'CON-14',
    level: 2,
    topicIds: ['CON.14'],
    title: t("Reportes de sostenibilidad (ESG)", "Sustainability (ESG) reporting"),
    summary: t(
      "Los reportes ESG muestran cómo una empresa afecta y es afectada por temas ambientales, sociales y de gobierno corporativo, usando marcos como GRI y las normas del ISSB, y métricas verificables como las emisiones de gases de efecto invernadero.",
      "ESG reports show how a company affects and is affected by environmental, social and governance matters, using frameworks such as GRI and ISSB standards, and verifiable metrics such as greenhouse gas emissions.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué es un reporte ESG y cómo se relaciona con los estados financieros.", "Explain what an ESG report is and how it relates to financial statements."),
      t("Distinguir los principales marcos: GRI, normas del ISSB (IFRS S1 y S2) y la idea de doble materialidad.", "Distinguish the main frameworks: GRI, ISSB standards (IFRS S1 and S2) and the idea of double materiality."),
      t("Clasificar emisiones en alcances 1, 2 y 3 y calcular emisiones e intensidad con datos de ejemplo.", "Classify emissions into scopes 1, 2 and 3 and compute emissions and intensity with sample data."),
    ],
    theory: [
      {
        heading: t("¿Qué es un reporte ESG?", "What is an ESG report?"),
        body: [
          t(
            "**ESG** son las siglas en inglés de ambiental (**E**nvironmental), social (**S**ocial) y gobierno corporativo (**G**overnance). Un reporte ESG o de sostenibilidad cuenta lo que los estados financieros no muestran por sí solos: cuánta agua y energía usa la empresa, cómo trata a sus trabajadores y quién la vigila por dentro.",
            "**ESG** stands for **E**nvironmental, **S**ocial and **G**overnance. An ESG or sustainability report tells what the financial statements do not show on their own: how much water and energy the company uses, how it treats its workers and who oversees it from within.",
          ),
          t(
            "¿A quién le importa? A **inversionistas** y **bancos** que quieren saber si un riesgo (una sequía, una nueva ley ambiental) puede afectar el dinero de la empresa; a **clientes** que piden proveedores responsables; y a la **comunidad**. Por eso el área contable participa: los datos deben ser tan confiables como los financieros.",
            "Who cares? **Investors** and **banks** who want to know whether a risk (a drought, a new environmental law) could affect the company's money; **customers** who require responsible suppliers; and the **community**. That is why the accounting team takes part: the data must be as reliable as the financial data.",
          ),
          t(
            "El gran peligro es el **greenwashing** o “lavado verde”: presumir logros ambientales exagerados o sin pruebas. Mini ejemplo: una embotelladora que anuncia “somos 100 % sustentables” solo porque cambió los focos de sus oficinas, sin medir el agua ni las emisiones de sus plantas.",
            "The big danger is **greenwashing**: boasting exaggerated or unproven environmental achievements. Mini example: a bottler that announces “we are 100% sustainable” just because it changed its office light bulbs, without measuring the water or emissions of its plants.",
          ),
        ],
        bullets: [
          t("E: energía, emisiones, agua, residuos.", "E: energy, emissions, water, waste."),
          t("S: seguridad laboral, diversidad, derechos humanos, comunidad.", "S: workplace safety, diversity, human rights, community."),
          t("G: consejo de administración, ética, anticorrupción, remuneración de directivos.", "G: board of directors, ethics, anti-corruption, executive pay."),
        ],
      },
      {
        heading: t("Marcos y normas principales", "Main frameworks and standards"),
        body: [
          t(
            "Los **Estándares GRI** (Global Reporting Initiative) se enfocan en los **impactos** de la empresa en las personas y el planeta, y sirven a muchos públicos. El **ISSB** (Consejo de Normas Internacionales de Sostenibilidad, de la Fundación IFRS) emitió en 2023 la **IFRS S1** (requisitos generales) y la **IFRS S2** (información sobre el **clima**), pensadas sobre todo para inversionistas.",
            "The **GRI Standards** (Global Reporting Initiative) focus on the company's **impacts** on people and the planet, and serve many audiences. The **ISSB** (International Sustainability Standards Board, of the IFRS Foundation) issued **IFRS S1** (general requirements) and **IFRS S2** (**climate**-related disclosures) in 2023, designed mainly for investors.",
          ),
          t(
            "Las normas del ISSB retoman la estructura de **cuatro pilares** de las recomendaciones TCFD: **gobernanza**, **estrategia**, **gestión de riesgos** y **métricas y objetivos**. En México, el CINIF también emitió **Normas de Información de Sostenibilidad (NIS)** con indicadores básicos.",
            "ISSB standards take up the **four-pillar** structure of the TCFD recommendations: **governance**, **strategy**, **risk management** and **metrics and targets**. In Mexico, CINIF also issued **Sustainability Information Standards (NIS)** with basic indicators.",
          ),
          t(
            "Una idea clave es la **materialidad**: qué es lo bastante importante para reportarse. La **materialidad financiera** mira cómo un tema afecta el dinero de la empresa; la **materialidad de impacto** mira cómo la empresa afecta al entorno. Usar ambas se llama **doble materialidad**. Mini ejemplo: para una minera, el uso de agua es material en los dos sentidos.",
            "A key idea is **materiality**: what is important enough to report. **Financial materiality** looks at how a matter affects the company's money; **impact materiality** looks at how the company affects its surroundings. Using both is called **double materiality**. Mini example: for a mining company, water use is material in both senses.",
          ),
        ],
      },
      {
        heading: t("Métricas: emisiones de gases de efecto invernadero", "Metrics: greenhouse gas emissions"),
        body: [
          t(
            "La métrica ambiental más usada son las **emisiones de gases de efecto invernadero (GEI)**, medidas en toneladas de CO₂ equivalente (tCO₂e): una sola unidad que permite sumar todos los gases como si todos fueran CO₂. Según el GHG Protocol se dividen en **alcances**. **Alcance 1**: emisiones directas de fuentes propias (gas de tu caldera, gasolina de tus camiones). **Alcance 2**: emisiones por la **electricidad** que compras. **Alcance 3**: todas las demás de tu cadena (viajes de negocio, traslado de empleados, uso de tus productos por los clientes).",
            "The most used environmental metric is **greenhouse gas (GHG) emissions**, measured in tonnes of CO₂ equivalent (tCO₂e): a single unit that lets you add up all gases as if they were all CO₂. Under the GHG Protocol they are split into **scopes**. **Scope 1**: direct emissions from your own sources (your boiler's gas, your trucks' fuel). **Scope 2**: emissions from the **electricity** you buy. **Scope 3**: all others in your value chain (business travel, employee commuting, customers' use of your products).",
          ),
          t(
            "Se calculan multiplicando el **dato de actividad** (litros, kWh) por un **factor de emisión** que publica una fuente oficial. Para comparar empresas de distinto tamaño se usa la **intensidad**: emisiones divididas entre ventas o unidades producidas. Lo ideal es que un tercero independiente **verifique** los datos, como un auditor revisa los estados financieros.",
            "They are computed by multiplying the **activity data** (liters, kWh) by an **emission factor** published by an official source. To compare companies of different sizes, **intensity** is used: emissions divided by sales or units produced. Ideally an independent third party **assures** the data, like an auditor reviews financial statements.",
          ),
          t(
            "Mini ejemplo: una panadería consume 10,000 kWh al año; con un factor ilustrativo de 0.5 kg CO₂e por kWh, sus emisiones de alcance 2 son 5,000 kg, es decir, 5 tCO₂e.",
            "Mini example: a bakery uses 10,000 kWh a year; with an illustrative factor of 0.5 kg CO₂e per kWh, its scope 2 emissions are 5,000 kg, that is, 5 tCO₂e.",
          ),
        ],
        formulas: [
          {
            name: t("Emisiones de una fuente (en toneladas)", "Emissions from one source (in tonnes)"),
            expression: "Emisiones (t) = Dato de actividad × Factor de emisión ÷ 1,000",
            variables: [
              { symbol: "Emisiones (t)", meaning: t("Las toneladas de CO₂ equivalente (tCO₂e) que genera esa fuente.", "The tonnes of CO₂ equivalent (tCO₂e) that source produces.") },
              { symbol: "Dato de actividad", meaning: t("Cuánto usaste: litros de combustible o kWh de electricidad.", "How much you used: liters of fuel or kWh of electricity.") },
              { symbol: "Factor de emisión", meaning: t("Kilos de CO₂e que produce cada litro o cada kWh; lo publica una fuente oficial (aquí se usan factores ilustrativos).", "Kilograms of CO₂e produced by each liter or kWh; published by an official source (illustrative factors are used here).") },
              { symbol: "÷ 1,000", meaning: t("Pasa de kilogramos a toneladas (1 tonelada = 1,000 kg).", "Converts kilograms to tonnes (1 tonne = 1,000 kg).") },
            ],
            steps: [
              t("Clasifica la fuente: combustible propio es alcance 1; electricidad comprada es alcance 2.", "Classify the source: own fuel is scope 1; purchased electricity is scope 2."),
              t("Multiplica el dato de actividad por su factor: el resultado sale en kilogramos.", "Multiply the activity data by its factor: the result is in kilograms."),
              t("Divide entre 1,000 para obtener toneladas.", "Divide by 1,000 to get tonnes."),
              t("Si te piden el total, suma las toneladas de cada alcance.", "If asked for the total, add up the tonnes of each scope."),
            ],
            example: t(
              "Un taller usó 1,200 litros de diésel (factor ilustrativo 2.7 kg por litro) y 20,000 kWh (factor 0.5 kg por kWh). Alcance 1: 1,200 × 2.7 = 3,240 kg ÷ 1,000 = 3.24 t. Alcance 2: 20,000 × 0.5 = 10,000 kg ÷ 1,000 = 10 t. Total: 3.24 + 10 = **13.24 tCO₂e**.",
              "A workshop used 1,200 liters of diesel (illustrative factor 2.7 kg per liter) and 20,000 kWh (factor 0.5 kg per kWh). Scope 1: 1,200 × 2.7 = 3,240 kg ÷ 1,000 = 3.24 t. Scope 2: 20,000 × 0.5 = 10,000 kg ÷ 1,000 = 10 t. Total: 3.24 + 10 = **13.24 tCO₂e**.",
            ),
            mistake: t(
              "Olvidar dividir entre 1,000 y reportar kilogramos como si fueran toneladas.",
              "Forgetting to divide by 1,000 and reporting kilograms as if they were tonnes.",
            ),
          },
          {
            name: t("Intensidad de emisiones", "Emissions intensity"),
            expression: "Intensidad = Emisiones (tCO₂e) ÷ Ventas (en millones de pesos)",
            variables: [
              { symbol: "Intensidad", meaning: t("Toneladas de CO₂e por cada millón de pesos vendido.", "Tonnes of CO₂e per million pesos sold.") },
              { symbol: "Emisiones (tCO₂e)", meaning: t("Las toneladas totales emitidas en el periodo.", "Total tonnes emitted in the period.") },
              { symbol: "Ventas (en millones de pesos)", meaning: t("Las ventas escritas en millones: $40,000,000 se escribe 40.", "Sales written in millions: $40,000,000 is written as 40.") },
            ],
            steps: [
              t("Escribe las ventas en millones de pesos.", "Write sales in millions of pesos."),
              t("Divide las emisiones entre esas ventas.", "Divide emissions by those sales."),
              t("Compara: la empresa con menor intensidad es más eficiente.", "Compare: the company with the lower intensity is more efficient."),
            ],
            example: t(
              "Una tienda emitió 84 tCO₂e y vendió $35 millones. 84 ÷ 35 = **2.4 tCO₂e por millón de pesos**.",
              "A store emitted 84 tCO₂e and sold $35 million. 84 ÷ 35 = **2.4 tCO₂e per million pesos**.",
            ),
            interpret: t(
              "Una empresa grande puede emitir más en total y aun así ser más eficiente si su intensidad es menor. Menor intensidad = menos contaminación por cada peso vendido.",
              "A large company can emit more in total and still be more efficient if its intensity is lower. Lower intensity = less pollution per peso sold.",
            ),
            mistake: t(
              "Dividir entre las ventas en pesos completos (40,000,000) en lugar de millones (40); da un número minúsculo difícil de leer.",
              "Dividing by sales in full pesos (40,000,000) instead of millions (40); it gives a tiny number that is hard to read.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Inventario de emisiones de una distribuidora", "A distributor's emissions inventory"),
        problem: t(
          "Una distribuidora usó 4,000 litros de diésel en sus camiones y 50,000 kWh de electricidad en su bodega. Usa factores ilustrativos de 2.7 kg CO₂e por litro de diésel y 0.4 kg CO₂e por kWh. Calcula sus alcances 1 y 2 en toneladas.",
          "A distributor used 4,000 liters of diesel in its trucks and 50,000 kWh of electricity in its warehouse. It uses illustrative factors of 2.7 kg CO₂e per liter of diesel and 0.4 kg CO₂e per kWh. Compute its scopes 1 and 2 in tonnes.",
        ),
        steps: [
          t("Alcance 1 (diésel propio): 4,000 × 2.7 = 10,800 kg = 10.8 t.", "Scope 1 (own diesel): 4,000 × 2.7 = 10,800 kg = 10.8 t."),
          t("Alcance 2 (electricidad): 50,000 × 0.4 = 20,000 kg = 20 t.", "Scope 2 (electricity): 50,000 × 0.4 = 20,000 kg = 20 t."),
          t("Total alcances 1 y 2: 10.8 + 20 = 30.8 tCO₂e.", "Total scopes 1 and 2: 10.8 + 20 = 30.8 tCO₂e."),
        ],
        result: t(
          "La distribuidora emitió 30.8 tCO₂e de alcances 1 y 2: 10.8 directas y 20 por electricidad.",
          "The distributor emitted 30.8 tCO₂e in scopes 1 and 2: 10.8 direct and 20 from electricity.",
        ),
      },
      {
        title: t("Comparar dos empresas con intensidad", "Comparing two companies with intensity"),
        problem: t(
          "La empresa A emite 200 tCO₂e y vende $50 millones; la empresa B emite 90 tCO₂e y vende $15 millones (cifras hipotéticas). ¿Cuál es más eficiente en emisiones?",
          "Company A emits 200 tCO₂e and sells $50 million; company B emits 90 tCO₂e and sells $15 million (hypothetical figures). Which is more emissions-efficient?",
        ),
        steps: [
          t("Intensidad A: 200 ÷ 50 = 4 tCO₂e por millón de pesos.", "Intensity A: 200 ÷ 50 = 4 tCO₂e per million pesos."),
          t("Intensidad B: 90 ÷ 15 = 6 tCO₂e por millón de pesos.", "Intensity B: 90 ÷ 15 = 6 tCO₂e per million pesos."),
          t("Menor intensidad = más eficiente.", "Lower intensity = more efficient."),
        ],
        result: t(
          "Aunque A emite más en total, es más eficiente: 4 contra 6 tCO₂e por millón vendido.",
          "Although A emits more in total, it is more efficient: 4 versus 6 tCO₂e per million sold.",
        ),
      },
    ],
    keyPoints: [
      t("ESG = ambiental, social y gobierno corporativo; complementa a los estados financieros.", "ESG = environmental, social and governance; it complements the financial statements."),
      t("GRI se enfoca en impactos; IFRS S1 y S2 del ISSB en información útil para inversionistas.", "GRI focuses on impacts; ISSB's IFRS S1 and S2 on information useful to investors."),
      t("Doble materialidad: cómo te afecta el entorno y cómo afectas tú al entorno.", "Double materiality: how your surroundings affect you and how you affect them."),
      t("Alcance 1 directo, alcance 2 electricidad comprada, alcance 3 resto de la cadena.", "Scope 1 direct, scope 2 purchased electricity, scope 3 rest of the value chain."),
      t("Emisiones = actividad × factor; la intensidad permite comparar empresas.", "Emissions = activity × factor; intensity allows comparing companies."),
      t("Datos sin evidencia ni verificación abren la puerta al greenwashing.", "Data without evidence or assurance opens the door to greenwashing."),
    ],
    normativeNote: t(
      "Contenido educativo basado en los Estándares GRI, las normas IFRS S1 y S2 del ISSB, el GHG Protocol y las NIS del CINIF en términos generales. Los factores de emisión usados son ilustrativos, no oficiales. La adopción obligatoria de estas normas depende de cada país y autoridad y está cambiando: verifica la versión y los requisitos vigentes (2026).",
      "Educational content based in general terms on the GRI Standards, ISSB's IFRS S1 and S2, the GHG Protocol and CINIF's NIS. The emission factors used are illustrative, not official. Mandatory adoption of these standards depends on each country and authority and is changing: verify the current version and requirements (2026).",
    ),
    exerciseIds: ['CON-14-E1', 'CON-14-E2', 'CON-14-E3', 'CON-14-E4', 'CON-14-E5', 'CON-14-E6'],
  },

  // ───────────────────────────── CON-15 ─────────────────────────────
  {
    id: 'CON-15',
    level: 2,
    topicIds: ['CON.15'],
    title: t("Preparación para certificaciones profesionales de contaduría", "Preparing for professional accounting certifications"),
    summary: t(
      "Una certificación profesional demuestra con un examen que dominas la contaduría; prepararla bien exige elegir la adecuada, planear horas según el peso de cada área y practicar con estrategia de tiempo.",
      "A professional certification proves through an exam that you master accounting; preparing well requires choosing the right one, planning hours by each area's weight and practicing with a time strategy.",
    ),
    minutes: 15,
    objectives: [
      t("Reconocer las principales certificaciones contables en México y en el mundo y su enfoque.", "Recognize the main accounting certifications in Mexico and worldwide and their focus."),
      t("Diseñar un plan de estudio con horas por semana y por área según su peso en el examen.", "Design a study plan with hours per week and per area according to its weight in the exam."),
      t("Aplicar una estrategia de tiempo y de prioridades para el día del examen.", "Apply a time and priority strategy for exam day."),
    ],
    theory: [
      {
        heading: t("Mapa de certificaciones", "Map of certifications"),
        body: [
          t(
            "Un título universitario dice que estudiaste contaduría; una **certificación** dice que, además, aprobaste un examen exigente y te mantienes actualizado. En México, el **IMCP** (Instituto Mexicano de Contadores Públicos) otorga la certificación de **Contador Público Certificado (CPC)** a quien aprueba el **Examen Uniforme de Certificación**, y también certificaciones por disciplina (por ejemplo, fiscal o auditoría).",
            "A university degree says you studied accounting; a **certification** says that, in addition, you passed a demanding exam and keep up to date. In Mexico, the **IMCP** (Mexican Institute of Public Accountants) grants the **Certified Public Accountant (CPC)** certification to those who pass the **Uniform Certification Exam**, as well as certifications by discipline (for example, tax or audit).",
          ),
          t(
            "Para algunas actividades reguladas, como dictaminar estados financieros ante ciertas autoridades, se pide estar certificado y registrado. Además, la certificación **no es para siempre**: hay que acreditar horas de **educación profesional continua** cada año para conservarla.",
            "For some regulated activities, such as issuing audit opinions on financial statements before certain authorities, being certified and registered is required. Also, certification is **not forever**: you must prove hours of **continuing professional education** each year to keep it.",
          ),
          t(
            "En el mundo destacan el **CPA** de Estados Unidos (licencia de contador público), el **ACCA** (organismo británico con presencia global), el **CMA** (contabilidad administrativa y gestión de costos) y el **CIA** (auditoría interna). Mini ejemplo: si quieres trabajar en el área de costos de una armadora, el CMA encaja mejor que el CIA.",
            "Worldwide, notable ones are the US **CPA** (public accountant license), **ACCA** (a British body with a global presence), **CMA** (management accounting and cost management) and **CIA** (internal audit). Mini example: if you want to work in the cost department of a carmaker, the CMA fits better than the CIA.",
          ),
        ],
        bullets: [
          t("CPC (IMCP, México): contaduría pública y disciplinas.", "CPC (IMCP, Mexico): public accounting and disciplines."),
          t("CPA (Estados Unidos): licencia de contador público.", "CPA (United States): public accountant license."),
          t("ACCA: certificación contable internacional de origen británico.", "ACCA: international accounting qualification of British origin."),
          t("CMA: contabilidad administrativa y costos.", "CMA: management accounting and costs."),
          t("CIA: auditoría interna.", "CIA: internal audit."),
        ],
      },
      {
        heading: t("Plan de estudio basado en el temario", "A study plan based on the syllabus"),
        body: [
          t(
            "Todo examen serio publica un **temario** con áreas y su **peso** (qué porcentaje de preguntas tiene cada una). Ese documento es tu mapa: lee la versión oficial vigente antes de empezar. Por ejemplo, el examen CPA se organiza en tres secciones obligatorias (auditoría, contabilidad financiera y regulación) más una sección de especialidad a elegir.",
            "Every serious exam publishes a **syllabus** with areas and their **weight** (what percentage of questions each one has). That document is your map: read the current official version before starting. For example, the CPA exam is organized into three required sections (audit, financial accounting and regulation) plus one discipline section of your choice.",
          ),
          t(
            "Haz un **diagnóstico** (un examen de práctica) para ver tus puntos débiles. Luego reparte tus horas: más horas a áreas con **mucho peso** y **bajo puntaje**. Estudia en bloques cortos, repasa lo visto días después (repaso espaciado) y practica con preguntas tipo examen, no solo leyendo.",
            "Take a **diagnostic** (a practice exam) to see your weak spots. Then allocate your hours: more hours to areas with **high weight** and **low score**. Study in short blocks, review material days later (spaced review) and practice with exam-style questions, not just reading.",
          ),
          t(
            "Mini ejemplo: si calculas que necesitas 240 horas y tienes 16 semanas, debes estudiar 240 ÷ 16 = 15 horas por semana, unas 2 horas diarias.",
            "Mini example: if you estimate you need 240 hours and have 16 weeks, you must study 240 ÷ 16 = 15 hours per week, about 2 hours a day.",
          ),
        ],
        formulas: [
          {
            name: t("Horas de estudio por semana", "Study hours per week"),
            expression: "Horas por semana = Horas totales ÷ Semanas disponibles",
            variables: [
              { symbol: "Horas por semana", meaning: t("Cuántas horas debes estudiar cada semana.", "How many hours you must study each week.") },
              { symbol: "Horas totales", meaning: t("Las horas que calculas que necesitas para todo el examen.", "The hours you estimate you need for the whole exam.") },
              { symbol: "Semanas disponibles", meaning: t("Las semanas que faltan para el examen.", "The weeks left until the exam.") },
            ],
            steps: [
              t("Estima las horas totales que necesitas.", "Estimate the total hours you need."),
              t("Cuenta las semanas que faltan para el examen.", "Count the weeks left until the exam."),
              t("Divide horas totales entre semanas.", "Divide total hours by weeks."),
            ],
            example: t(
              "Necesitas 200 horas y tienes 10 semanas: 200 ÷ 10 = **20 horas por semana**, unas 3 horas diarias.",
              "You need 200 hours and have 10 weeks: 200 ÷ 10 = **20 hours per week**, about 3 hours a day.",
            ),
          },
          {
            name: t("Horas para un área del temario", "Hours for one syllabus area"),
            expression: "Horas de un área = Horas totales × Peso del área",
            variables: [
              { symbol: "Horas de un área", meaning: t("Las horas que le tocan a esa área.", "The hours assigned to that area.") },
              { symbol: "Horas totales", meaning: t("Todas las horas de tu plan.", "All the hours in your plan.") },
              { symbol: "Peso del área", meaning: t("El porcentaje de preguntas que tiene esa área en el examen, en decimal (40 % = 0.40).", "The percentage of exam questions in that area, as a decimal (40% = 0.40).") },
            ],
            steps: [
              t("Convierte el peso a decimal: 30 % = 0.30.", "Convert the weight to a decimal: 30% = 0.30."),
              t("Multiplica las horas totales por ese decimal.", "Multiply total hours by that decimal."),
              t("Repite con cada área y revisa que todas sumen las horas totales.", "Repeat for each area and check that they all add up to the total hours."),
            ],
            example: t(
              "Plan de 200 horas; un área pesa 30 %: 200 × 0.30 = **60 horas** para esa área.",
              "A 200-hour plan; one area weighs 30%: 200 × 0.30 = **60 hours** for that area.",
            ),
            mistake: t(
              "Repartir las horas en partes iguales sin considerar el peso de cada área.",
              "Splitting hours equally without considering each area's weight.",
            ),
          },
        ],
      },
      {
        heading: t("Estrategia para el día del examen", "Exam-day strategy"),
        body: [
          t(
            "El tiempo es un recurso más. Antes de empezar calcula tu **ritmo**: minutos disponibles (menos un margen para revisar) entre número de preguntas. Si una pregunta te atora, márcala y sigue; vuelve al final.",
            "Time is one more resource. Before starting, compute your **pace**: available minutes (minus a review margin) divided by the number of questions. If a question gets you stuck, flag it and move on; come back at the end.",
          ),
          t(
            "En los **casos prácticos**, lee primero la pregunta y luego los datos: así sabes qué buscar. Haz los cálculos con orden y revisa unidades (pesos, porcentajes, años). En opción múltiple, descarta primero las respuestas claramente falsas.",
            "In **case studies**, read the question first and then the data: that way you know what to look for. Do calculations in order and check units (pesos, percentages, years). In multiple choice, first eliminate the clearly wrong answers.",
          ),
          t(
            "Para decidir qué repasar en la recta final, mira **cuántos puntos pierdes** en cada área: peso × (100 % − tu porcentaje de aciertos). Mini ejemplo: un área con peso de 30 % donde aciertas 50 % te quita 15 puntos; otra con peso de 20 % donde aciertas 75 % te quita 5. Prioriza la primera.",
            "To decide what to review in the final stretch, look at **how many points you lose** in each area: weight × (100% − your score). Mini example: an area with a 30% weight where you score 50% costs you 15 points; another with a 20% weight where you score 75% costs you 5. Prioritize the first.",
          ),
        ],
        formulas: [
          {
            name: t("Ritmo: minutos por pregunta", "Pace: minutes per question"),
            expression: "Minutos por pregunta = (Tiempo total − Margen de revisión) ÷ Número de preguntas",
            variables: [
              { symbol: "Minutos por pregunta", meaning: t("El tiempo promedio que puedes dedicar a cada pregunta.", "The average time you can spend on each question.") },
              { symbol: "Tiempo total", meaning: t("Lo que dura el examen, en minutos (4 horas = 4 × 60 = 240 minutos).", "How long the exam lasts, in minutes (4 hours = 4 × 60 = 240 minutes).") },
              { symbol: "Margen de revisión", meaning: t("Minutos que guardas al final para revisar preguntas marcadas.", "Minutes you save at the end to review flagged questions.") },
              { symbol: "Número de preguntas", meaning: t("Cuántas preguntas tiene el examen.", "How many questions the exam has.") },
            ],
            steps: [
              t("Pasa el tiempo total a minutos si viene en horas.", "Convert total time to minutes if it is given in hours."),
              t("Réstale el margen de revisión.", "Subtract the review margin."),
              t("Divide el resultado entre el número de preguntas.", "Divide the result by the number of questions."),
            ],
            example: t(
              "Examen de 150 minutos con 70 preguntas y 10 minutos de margen. 150 − 10 = 140 minutos; 140 ÷ 70 = **2 minutos por pregunta**.",
              "A 150-minute exam with 70 questions and a 10-minute margin. 150 − 10 = 140 minutes; 140 ÷ 70 = **2 minutes per question**.",
            ),
            mistake: t(
              "Dividir el tiempo total sin restar el margen; te quedas sin tiempo para revisar al final.",
              "Dividing the total time without subtracting the margin; you run out of time to review at the end.",
            ),
          },
          {
            name: t("Puntos que pierdes en un área", "Points you lose in an area"),
            expression: "Puntos perdidos = Peso del área × (100 % − Aciertos)",
            variables: [
              { symbol: "Puntos perdidos", meaning: t("Cuántos puntos del examen se te escapan en esa área.", "How many exam points slip away in that area.") },
              { symbol: "Peso del área", meaning: t("El porcentaje del examen que vale esa área (por ejemplo, 30).", "The percentage of the exam that area is worth (for example, 30).") },
              { symbol: "Aciertos", meaning: t("Tu porcentaje de respuestas correctas en esa área, según tu diagnóstico.", "Your percentage of correct answers in that area, from your diagnostic.") },
            ],
            steps: [
              t("Calcula lo que fallas: 100 % − aciertos, y pásalo a decimal (70 % de aciertos → 30 % = 0.30).", "Work out what you miss: 100% − score, and convert it to a decimal (70% score → 30% = 0.30)."),
              t("Multiplica el peso del área por ese decimal.", "Multiply the area's weight by that decimal."),
              t("Repite con cada área y prioriza la que más puntos pierde.", "Repeat for each area and prioritize the one that loses the most points."),
            ],
            example: t(
              "Área X pesa 45 % y aciertas 70 %: 45 × 0.30 = 13.5 puntos perdidos. Área Y pesa 30 % y aciertas 50 %: 30 × 0.50 = 15 puntos perdidos. **Prioriza Y**, aunque pese menos.",
              "Area X weighs 45% and you score 70%: 45 × 0.30 = 13.5 points lost. Area Y weighs 30% and you score 50%: 30 × 0.50 = 15 points lost. **Prioritize Y**, even though it weighs less.",
            ),
            mistake: t(
              "Elegir solo el área de más peso aunque ya la domines.",
              "Choosing only the highest-weight area even if you already master it.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Reparto de horas por área", "Allocating hours by area"),
        problem: t(
          "Ana planea 360 horas de estudio en 24 semanas para un examen con tres áreas: A pesa 40 %, B 35 % y C 25 % (temario hipotético). ¿Cuántas horas por semana y cuántas por área?",
          "Ana plans 360 study hours over 24 weeks for an exam with three areas: A weighs 40%, B 35% and C 25% (hypothetical syllabus). How many hours per week and per area?",
        ),
        steps: [
          t("Horas por semana: 360 ÷ 24 = 15.", "Hours per week: 360 ÷ 24 = 15."),
          t("Área A: 360 × 0.40 = 144 horas.", "Area A: 360 × 0.40 = 144 hours."),
          t("Área B: 360 × 0.35 = 126 horas.", "Area B: 360 × 0.35 = 126 hours."),
          t("Área C: 360 × 0.25 = 90 horas. Suma: 144 + 126 + 90 = 360.", "Area C: 360 × 0.25 = 90 hours. Total: 144 + 126 + 90 = 360."),
        ],
        result: t(
          "Ana debe estudiar 15 horas por semana: 144 h para A, 126 h para B y 90 h para C (ajustando después según su diagnóstico).",
          "Ana must study 15 hours a week: 144 h for A, 126 h for B and 90 h for C (adjusting later according to her diagnostic).",
        ),
      },
      {
        title: t("¿Voy a buen ritmo?", "Am I on pace?"),
        problem: t(
          "Un examen de práctica dura 4 horas y tiene 120 preguntas. Luis quiere dejar 0 minutos de margen. Después de 60 minutos lleva 25 preguntas. ¿Va bien?",
          "A practice exam lasts 4 hours and has 120 questions. Luis wants no review margin. After 60 minutes he has answered 25 questions. Is he on pace?",
        ),
        steps: [
          t("Tiempo total: 4 × 60 = 240 minutos.", "Total time: 4 × 60 = 240 minutes."),
          t("Ritmo: 240 ÷ 120 = 2 minutos por pregunta.", "Pace: 240 ÷ 120 = 2 minutes per question."),
          t("En 60 minutos debería llevar 60 ÷ 2 = 30 preguntas.", "In 60 minutes he should have 60 ÷ 2 = 30 questions."),
          t("Lleva 25: va 5 preguntas atrasado.", "He has 25: he is 5 questions behind."),
        ],
        result: t(
          "Luis va 5 preguntas atrás; debe marcar las difíciles y avanzar para recuperar el ritmo.",
          "Luis is 5 questions behind; he should flag the hard ones and move on to regain pace.",
        ),
      },
    ],
    keyPoints: [
      t("Una certificación demuestra competencia con un examen y se mantiene con educación continua.", "A certification proves competence through an exam and is kept through continuing education."),
      t("En México, el IMCP certifica al CPC; en el mundo destacan CPA, ACCA, CMA y CIA.", "In Mexico, IMCP certifies the CPC; worldwide, CPA, ACCA, CMA and CIA stand out."),
      t("Elige la certificación según el área donde quieres trabajar.", "Choose the certification according to the area you want to work in."),
      t("Planea horas con el temario oficial: más tiempo a áreas de mucho peso y bajo puntaje.", "Plan hours with the official syllabus: more time for high-weight, low-score areas."),
      t("Calcula tu ritmo por pregunta y no te atores: marca y sigue.", "Compute your pace per question and do not get stuck: flag and move on."),
    ],
    normativeNote: t(
      "Contenido educativo. Los requisitos, formatos, temarios y costos de las certificaciones (IMCP, CPA, ACCA, CMA, CIA) y los casos en que una autoridad exige estar certificado cambian con el tiempo; los temarios y tiempos usados aquí son hipotéticos. Consulta la información oficial vigente (2026) de cada organismo antes de inscribirte.",
      "Educational content. The requirements, formats, syllabi and fees of certifications (IMCP, CPA, ACCA, CMA, CIA) and the cases in which an authority requires certification change over time; the syllabi and times used here are hypothetical. Check each body's current official information (2026) before registering.",
    ),
    exerciseIds: ['CON-15-E1', 'CON-15-E2', 'CON-15-E3', 'CON-15-E4', 'CON-15-E5', 'CON-15-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── CON-10 ─────────────────────────────
  {
    id: 'CON-10-E1',
    level: 2,
    module: 'CON-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Qué define la moneda funcional de una empresa?",
      "What defines a company's functional currency?",
    ),
    options: [
      { id: 'CON-10-E1-a', text: t("La moneda del país donde está registrada legalmente la empresa", "The currency of the country where the company is legally registered") },
      { id: 'CON-10-E1-b', text: t("La moneda del entorno económico principal donde genera y gasta su efectivo", "The currency of the primary economic environment where it generates and spends its cash") },
      { id: 'CON-10-E1-c', text: t("La moneda en la que presenta sus estados financieros", "The currency in which it presents its financial statements") },
      { id: 'CON-10-E1-d', text: t("La moneda más fuerte con la que hace alguna operación", "The strongest currency it uses in any transaction") },
    ],
    correctOptionId: 'CON-10-E1-b',
    explanation: t(
      "La moneda funcional es la del entorno económico principal: en qué vende, en qué paga costos y en qué se financia. Error común: confundirla con la moneda de informe (la de presentación) o asumir que siempre es la del país donde está la empresa.",
      "The functional currency is that of the primary economic environment: what it sells in, pays costs in and borrows in. Common mistake: confusing it with the reporting currency (the presentation one) or assuming it is always the currency of the company's country.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-accounting',
  },
  {
    id: 'CON-10-E2',
    level: 2,
    module: 'CON-10',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una importadora compra mercancía por USD 2,000 a crédito cuando el tipo de cambio es $17.50. Paga la factura un mes después, cuando el tipo de cambio es $17.20 (cifras hipotéticas).",
      "An importer buys goods for USD 2,000 on credit when the exchange rate is $17.50. It pays the invoice a month later, when the rate is $17.20 (hypothetical figures).",
    ),
    prompt: t(
      "Calcula, en pesos, la deuda inicial con el proveedor, lo que paga al liquidar y la diferencia cambiaria.",
      "Compute, in pesos, the initial debt to the supplier, what it pays on settlement and the exchange difference.",
    ),
    fields: [
      { id: 'f1', label: t("Deuda registrada al comprar", "Debt recorded on purchase"), answer: 35000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Pesos pagados al liquidar", "Pesos paid on settlement"), answer: 34400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Ganancia cambiaria", "Exchange gain"), answer: 600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Deuda inicial: 2,000 × 17.50 = $35,000. Pago: 2,000 × 17.20 = $34,400. Como pagaste menos pesos de lo que debías, hay ganancia cambiaria de 35,000 − 34,400 = $600. Error común: pensar que es pérdida porque el tipo de cambio “bajó”; con una deuda en dólares, que el dólar baje te favorece.",
      "Initial debt: 2,000 × 17.50 = $35,000. Payment: 2,000 × 17.20 = $34,400. Since you paid fewer pesos than you owed, there is an exchange gain of 35,000 − 34,400 = $600. Common mistake: thinking it is a loss because the rate “went down”; with a dollar debt, a falling dollar favors you.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-accounting',
  },
  {
    id: 'CON-10-E3',
    level: 2,
    module: 'CON-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Al convertir a pesos los estados de una subsidiaria cuya moneda funcional es el dólar, ¿dónde se reconoce el efecto por conversión?",
      "When translating into pesos the statements of a subsidiary whose functional currency is the dollar, where is the translation effect recognized?",
    ),
    options: [
      { id: 'CON-10-E3-a', text: t("En la utilidad del ejercicio, como resultado cambiario", "In profit for the year, as an exchange result") },
      { id: 'CON-10-E3-b', text: t("En otros resultados integrales (ORI), dentro del capital", "In other comprehensive income (OCI), within equity") },
      { id: 'CON-10-E3-c', text: t("Como aumento del capital social", "As an increase in share capital") },
      { id: 'CON-10-E3-d', text: t("No se reconoce; se ignora por ser una diferencia de redondeo", "It is not recognized; it is ignored as a rounding difference") },
    ],
    correctOptionId: 'CON-10-E3-b',
    explanation: t(
      "El efecto por conversión se acumula en otros resultados integrales dentro del capital hasta que se vende la subsidiaria. Error común: mandarlo a resultados como si fuera la diferencia cambiaria de una cuenta por pagar en dólares; esa sí va a resultados, pero la conversión de una filial no.",
      "The translation effect accumulates in other comprehensive income within equity until the subsidiary is sold. Common mistake: sending it to profit or loss as if it were the exchange difference on a dollar payable; that one does go to profit or loss, but translating a subsidiary does not.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-accounting',
  },
  {
    id: 'CON-10-E4',
    level: 2,
    module: 'CON-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Una empresa mexicana tiene estas partidas en dólares. Clasifícalas en monetarias (se actualizan al tipo de cambio de cierre) o no monetarias (se quedan al tipo histórico).",
      "A Mexican company has these items in dollars. Classify them as monetary (remeasured at the closing rate) or non-monetary (kept at the historical rate).",
    ),
    categories: [
      { id: 'CON-10-E4-c1', label: t("Monetaria", "Monetary") },
      { id: 'CON-10-E4-c2', label: t("No monetaria", "Non-monetary") },
    ],
    items: [
      { id: 'CON-10-E4-i1', label: t("Cuenta bancaria en dólares", "Dollar bank account"), correctCategoryId: 'CON-10-E4-c1' },
      { id: 'CON-10-E4-i2', label: t("Cliente de Texas que debe USD 5,000", "Texas customer owing USD 5,000"), correctCategoryId: 'CON-10-E4-c1' },
      { id: 'CON-10-E4-i3', label: t("Préstamo bancario en dólares", "Dollar bank loan"), correctCategoryId: 'CON-10-E4-c1' },
      { id: 'CON-10-E4-i4', label: t("Inventario importado y pagado en dólares", "Inventory imported and paid in dollars"), correctCategoryId: 'CON-10-E4-c2' },
      { id: 'CON-10-E4-i5', label: t("Maquinaria comprada en Alemania en euros", "Machinery bought in Germany in euros"), correctCategoryId: 'CON-10-E4-c2' },
      { id: 'CON-10-E4-i6', label: t("Anticipo pagado a un proveedor que se liquidará con mercancía", "Advance paid to a supplier to be settled with goods"), correctCategoryId: 'CON-10-E4-c2' },
    ],
    explanation: t(
      "Monetarias: derechos u obligaciones de recibir o pagar una cantidad fija de dinero (banco, cliente, préstamo). No monetarias: bienes o derechos a recibir bienes (inventario, maquinaria, anticipo que se cubre con mercancía). Error común: actualizar la maquinaria o el inventario al tipo de cierre solo porque se compraron en moneda extranjera.",
      "Monetary: rights or obligations to receive or pay a fixed amount of money (bank, customer, loan). Non-monetary: goods or rights to receive goods (inventory, machinery, an advance settled with goods). Common mistake: remeasuring machinery or inventory at the closing rate just because they were bought in a foreign currency.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-accounting',
  },
  {
    id: 'CON-10-E5',
    level: 2,
    module: 'CON-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Las NIIF prohíben valuar inventarios con el método UEPS (últimas entradas, primeras salidas), mientras que US GAAP sí lo permite.",
      "IFRS prohibits measuring inventory with the LIFO (last in, first out) method, while US GAAP allows it.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Es una de las diferencias más conocidas: las NIIF (y las NIF mexicanas) no aceptan UEPS, y US GAAP sí lo permite. Error común: pensar que todas las normas aceptan los mismos métodos de costeo de inventarios.",
      "True. It is one of the best-known differences: IFRS (and Mexican NIF) do not accept LIFO, while US GAAP allows it. Common mistake: thinking all frameworks accept the same inventory costing methods.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'international-accounting',
  },
  {
    id: 'CON-10-E6',
    level: 2,
    module: 'CON-10',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un exportador vendió a crédito por USD 3,000 y registró la cuenta por cobrar a $17.80. Al cierre de mes el cliente no ha pagado y el tipo de cambio es $18.10 (cifras hipotéticas).",
      "An exporter sold on credit for USD 3,000 and recorded the receivable at $17.80. At month-end the customer has not paid and the rate is $18.10 (hypothetical figures).",
    ),
    prompt: t(
      "¿De cuántos pesos es la ganancia cambiaria que se reconoce al cierre por esta cuenta por cobrar?",
      "How many pesos of exchange gain are recognized at closing on this receivable?",
    ),
    answer: 900,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "La cuenta por cobrar es monetaria: se actualiza al cierre. 3,000 × (18.10 − 17.80) = 3,000 × 0.30 = $900 de ganancia, porque ahora tienes derecho a más pesos. Error común: multiplicar los USD 3,000 por el tipo de cierre completo ($54,300) en lugar de solo por la diferencia.",
      "The receivable is monetary: it is remeasured at closing. 3,000 × (18.10 − 17.80) = 3,000 × 0.30 = $900 gain, because you are now entitled to more pesos. Common mistake: multiplying USD 3,000 by the full closing rate ($54,300) instead of only by the difference.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'international-accounting',
  },

  // ───────────────────────────── CON-11 ─────────────────────────────
  {
    id: 'CON-11-E1',
    level: 2,
    module: 'CON-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Una dependencia recibe hoy las computadoras que pidió en un contrato firmado el mes pasado; todavía no las paga. ¿Qué momento contable del egreso se registra hoy?",
      "An agency receives today the computers it ordered under a contract signed last month; it has not paid yet. Which expenditure accounting moment is recorded today?",
    ),
    options: [
      { id: 'CON-11-E1-a', text: t("Comprometido", "Committed") },
      { id: 'CON-11-E1-b', text: t("Devengado", "Accrued") },
      { id: 'CON-11-E1-c', text: t("Pagado", "Paid") },
      { id: 'CON-11-E1-d', text: t("Aprobado", "Approved") },
    ],
    correctOptionId: 'CON-11-E1-b',
    explanation: t(
      "El devengado ocurre cuando se reciben los bienes o servicios y nace la obligación de pagar. El comprometido fue el mes pasado, al firmar el contrato, y el pagado vendrá cuando salga el dinero. Error común: creer que el gasto se reconoce solo cuando se paga.",
      "The accrued moment happens when goods or services are received and the obligation to pay arises. Committed was last month, when the contract was signed, and paid will come when the money goes out. Common mistake: believing spending is recognized only when paid.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'government-accounting',
  },
  {
    id: 'CON-11-E2',
    level: 2,
    module: 'CON-11',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una partida de un municipio tiene: aprobado $1,000,000; ampliación $200,000; reducción $50,000; comprometido $900,000; devengado $700,000; pagado $600,000 (cifras hipotéticas).",
      "A municipal budget line has: approved $1,000,000; increase $200,000; reduction $50,000; committed $900,000; accrued $700,000; paid $600,000 (hypothetical figures).",
    ),
    prompt: t(
      "Calcula el presupuesto modificado, el saldo disponible por comprometer y el devengado pendiente de pago.",
      "Compute the modified budget, the balance available to commit and the accrued amount pending payment.",
    ),
    fields: [
      { id: 'f1', label: t("Presupuesto modificado", "Modified budget"), answer: 1150000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Disponible por comprometer", "Available to commit"), answer: 250000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Devengado no pagado", "Accrued but unpaid"), answer: 100000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Modificado: 1,000,000 + 200,000 − 50,000 = $1,150,000. Disponible: 1,150,000 − 900,000 = $250,000. Devengado no pagado: 700,000 − 600,000 = $100,000 (es una cuenta por pagar). Error común: calcular el disponible contra el aprobado original y no contra el modificado.",
      "Modified: 1,000,000 + 200,000 − 50,000 = $1,150,000. Available: 1,150,000 − 900,000 = $250,000. Accrued but unpaid: 700,000 − 600,000 = $100,000 (a payable). Common mistake: computing the available balance against the original approved budget instead of the modified one.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'government-accounting',
  },
  {
    id: 'CON-11-E3',
    level: 2,
    module: 'CON-11',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula del presupuesto de egresos modificado.",
      "Complete the formula for the modified expenditure budget.",
    ),
    template: '{{b1}} + {{b2}} − {{b3}} = {{b4}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'CON-11-E3-b1-a', text: t("Presupuesto aprobado", "Approved budget") },
          { id: 'CON-11-E3-b1-b', text: t("Presupuesto pagado", "Paid budget") },
          { id: 'CON-11-E3-b1-c', text: t("Presupuesto devengado", "Accrued budget") },
        ],
        correctOptionId: 'CON-11-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'CON-11-E3-b2-a', text: t("Comprometido", "Committed") },
          { id: 'CON-11-E3-b2-b', text: t("Ampliaciones", "Increases") },
          { id: 'CON-11-E3-b2-c', text: t("Recaudado", "Collected") },
        ],
        correctOptionId: 'CON-11-E3-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'CON-11-E3-b3-a', text: t("Reducciones", "Reductions") },
          { id: 'CON-11-E3-b3-b', text: t("Ejercido", "Exercised") },
          { id: 'CON-11-E3-b3-c', text: t("Depreciación", "Depreciation") },
        ],
        correctOptionId: 'CON-11-E3-b3-a',
      },
      {
        id: 'b4',
        options: [
          { id: 'CON-11-E3-b4-a', text: t("Presupuesto modificado", "Modified budget") },
          { id: 'CON-11-E3-b4-b', text: t("Utilidad del ejercicio", "Profit for the year") },
          { id: 'CON-11-E3-b4-c', text: t("Cuenta Pública", "Public Account") },
        ],
        correctOptionId: 'CON-11-E3-b4-a',
      },
    ],
    explanation: t(
      "Modificado = aprobado + ampliaciones − reducciones. Es el techo real de gasto después de los ajustes autorizados. Error común: restar el comprometido o el pagado; esos son avances del gasto, no cambios al presupuesto.",
      "Modified = approved + increases − reductions. It is the real spending ceiling after authorized adjustments. Common mistake: subtracting committed or paid amounts; those are spending progress, not budget changes.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'government-accounting',
  },
  {
    id: 'CON-11-E4',
    level: 2,
    module: 'CON-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada gasto de un gobierno estatal en su capítulo del clasificador por objeto del gasto.",
      "Classify each state government expense into its chapter of the classification by object of expenditure.",
    ),
    categories: [
      { id: 'CON-11-E4-c1', label: t("1000 Servicios personales", "1000 Personal services") },
      { id: 'CON-11-E4-c2', label: t("2000 Materiales y suministros", "2000 Materials and supplies") },
      { id: 'CON-11-E4-c3', label: t("3000 Servicios generales", "3000 General services") },
      { id: 'CON-11-E4-c4', label: t("5000 Bienes muebles, inmuebles e intangibles", "5000 Movable, immovable and intangible assets") },
      { id: 'CON-11-E4-c5', label: t("6000 Inversión pública", "6000 Public investment") },
    ],
    items: [
      { id: 'CON-11-E4-i1', label: t("Sueldos de los maestros de una escuela estatal", "Salaries of teachers at a state school"), correctCategoryId: 'CON-11-E4-c1' },
      { id: 'CON-11-E4-i2', label: t("Gasolina para las ambulancias", "Gasoline for ambulances"), correctCategoryId: 'CON-11-E4-c2' },
      { id: 'CON-11-E4-i3', label: t("Recibo de luz de las oficinas de gobierno", "Electricity bill for government offices"), correctCategoryId: 'CON-11-E4-c3' },
      { id: 'CON-11-E4-i4', label: t("Compra de computadoras para una oficina de recaudación", "Purchase of computers for a tax collection office"), correctCategoryId: 'CON-11-E4-c4' },
      { id: 'CON-11-E4-i5', label: t("Construcción de un puente vehicular", "Construction of a road bridge"), correctCategoryId: 'CON-11-E4-c5' },
      { id: 'CON-11-E4-i6', label: t("Renta de un local para un módulo de atención", "Rent of premises for a service office"), correctCategoryId: 'CON-11-E4-c3' },
    ],
    explanation: t(
      "Sueldos: 1000. Combustible: 2000 (materiales y suministros). Luz y renta: 3000 (servicios generales). Computadoras: 5000 (bienes muebles). Puente: 6000 (obra pública). Error común: poner la compra de computadoras en 2000 por pensar que son “suministros”; son bienes duraderos y van en 5000.",
      "Salaries: 1000. Fuel: 2000 (materials and supplies). Electricity and rent: 3000 (general services). Computers: 5000 (movable assets). Bridge: 6000 (public works). Common mistake: putting computers in 2000 thinking they are “supplies”; they are durable assets and go in 5000.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'government-accounting',
  },
  {
    id: 'CON-11-E5',
    level: 2,
    module: 'CON-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En la contabilidad gubernamental, el gasto se registra como devengado en el momento en que se firma el contrato con el proveedor.",
      "In government accounting, spending is recorded as accrued at the moment the contract with the supplier is signed.",
    ),
    answer: false,
    explanation: t(
      "Falso. Al firmar el contrato se registra el comprometido. El devengado llega cuando el proveedor entrega el bien o servicio y nace la obligación de pagar. Error común: juntar ambos momentos porque suelen estar cerca en el tiempo.",
      "False. Signing the contract records the committed moment. Accrual comes when the supplier delivers the good or service and the obligation to pay arises. Common mistake: merging both moments because they are often close in time.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'government-accounting',
  },
  {
    id: 'CON-11-E6',
    level: 2,
    module: 'CON-11',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles son características de la contabilidad gubernamental en México? Selecciona todas las que apliquen.",
      "Which are features of government accounting in Mexico? Select all that apply.",
    ),
    options: [
      { id: 'CON-11-E6-a', text: t("Su objetivo central es la rendición de cuentas sobre el uso de recursos públicos", "Its central goal is accountability for the use of public resources") },
      { id: 'CON-11-E6-b', text: t("Registra de forma integrada el presupuesto y el patrimonio", "It records the budget and net worth in an integrated way") },
      { id: 'CON-11-E6-c', text: t("Su meta principal es maximizar la utilidad del ente público", "Its main goal is to maximize the public entity's profit") },
      { id: 'CON-11-E6-d', text: t("El CONAC emite normas para armonizar a federación, estados y municipios", "CONAC issues standards to harmonize the federation, states and municipalities") },
      { id: 'CON-11-E6-e', text: t("Cada municipio puede usar las reglas que quiera sin armonizarlas", "Each municipality may use whatever rules it wants without harmonizing them") },
    ],
    correctOptionIds: ['CON-11-E6-a', 'CON-11-E6-b', 'CON-11-E6-d'],
    explanation: t(
      "Rinde cuentas, integra presupuesto y patrimonio, y se armoniza con normas del CONAC. No busca utilidades y los municipios no pueden usar reglas propias sin armonizar. Error común: trasladar la lógica de la empresa privada (ganancia) al sector público.",
      "It provides accountability, integrates budget and net worth, and is harmonized under CONAC standards. It does not seek profit and municipalities cannot use their own unharmonized rules. Common mistake: carrying over private-company logic (profit) to the public sector.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'government-accounting',
  },

  // ───────────────────────────── CON-12 ─────────────────────────────
  {
    id: 'CON-12-E1',
    level: 2,
    module: 'CON-12',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En una distribuidora, Jorge autoriza los pagos a proveedores, los registra en el sistema y además hace la conciliación bancaria cada mes.",
      "At a distributor, Jorge authorizes supplier payments, records them in the system and also does the monthly bank reconciliation.",
    ),
    prompt: t(
      "¿Qué control interno falla en este caso?",
      "Which internal control fails in this case?",
    ),
    options: [
      { id: 'CON-12-E1-a', text: t("El respaldo de la información", "Data backup") },
      { id: 'CON-12-E1-b', text: t("La segregación de funciones", "Segregation of duties") },
      { id: 'CON-12-E1-c', text: t("El catálogo de cuentas", "The chart of accounts") },
      { id: 'CON-12-E1-d', text: t("El corte documental", "The document cut-off") },
    ],
    correctOptionId: 'CON-12-E1-b',
    explanation: t(
      "Una sola persona autoriza, registra y concilia: podría ocultar un pago indebido sin que nadie lo note. Hay que separar esas funciones. Error común: pensar que basta con que el sistema tenga contraseña; los permisos sirven si se reparten las tareas entre personas distintas.",
      "One person authorizes, records and reconciles: they could hide an improper payment without anyone noticing. Those duties must be separated. Common mistake: thinking a password on the system is enough; permissions help only if tasks are split among different people.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'accounting-systems-close',
  },
  {
    id: 'CON-12-E2',
    level: 2,
    module: 'CON-12',
    kind: 'journal',
    flavor: 'case',
    context: t(
      "Al 31 de marzo, los empleados de una tienda ya trabajaron la segunda quincena del mes. Su sueldo de $12,000 se pagará el 5 de abril.",
      "At March 31, a store's employees have already worked the second half of the month. Their $12,000 salary will be paid on April 5.",
    ),
    prompt: t(
      "Registra el ajuste de cierre de marzo por los sueldos devengados no pagados.",
      "Record the March closing adjustment for accrued unpaid salaries.",
    ),
    accountChoices: ['1101', '1102', '2102', '2106', '6101', '3103'],
    expected: [
      { accountCode: '6101', side: 'D', amount: 12000 },
      { accountCode: '2106', side: 'C', amount: 12000 },
    ],
    explanation: t(
      "El gasto pertenece a marzo aunque se pague en abril: cargo a Sueldos y salarios $12,000 y abono a Sueldos por pagar $12,000. Error común: abonar a Bancos; el dinero todavía no sale, lo que existe es una deuda con los empleados.",
      "The expense belongs to March even though it is paid in April: debit Salaries and wages $12,000 and credit Salaries payable $12,000. Common mistake: crediting Bank; no money has left yet, what exists is a debt to employees.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'accounting-systems-close',
  },
  {
    id: 'CON-12-E3',
    level: 2,
    module: 'CON-12',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Al cierre de mes: el estado de cuenta muestra $45,000; hay un depósito en tránsito de $5,000 y un cheque no cobrado de $8,000. En libros el saldo es $42,600 y falta registrar una comisión bancaria de $600 (cifras hipotéticas).",
      "At month-end: the bank statement shows $45,000; there is a $5,000 deposit in transit and an $8,000 uncashed check. The book balance is $42,600 and a $600 bank fee has not been recorded (hypothetical figures).",
    ),
    prompt: t(
      "Haz la conciliación bancaria: calcula el saldo ajustado del banco y el saldo ajustado en libros.",
      "Prepare the bank reconciliation: compute the adjusted bank balance and the adjusted book balance.",
    ),
    fields: [
      { id: 'f1', label: t("Saldo ajustado según banco", "Adjusted balance per bank"), answer: 42000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Saldo ajustado según libros", "Adjusted balance per books"), answer: 42000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Banco: 45,000 + 5,000 − 8,000 = $42,000. Libros: 42,600 − 600 = $42,000. Los dos coinciden, así que la conciliación cuadra. Error común: sumar el cheque en tránsito en lugar de restarlo; el banco aún no lo ha descontado, pero ese dinero ya no es tuyo.",
      "Bank: 45,000 + 5,000 − 8,000 = $42,000. Books: 42,600 − 600 = $42,000. Both match, so the reconciliation balances. Common mistake: adding the outstanding check instead of subtracting it; the bank has not deducted it yet, but that money is no longer yours.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'accounting-systems-close',
  },
  {
    id: 'CON-12-E4',
    level: 2,
    module: 'CON-12',
    kind: 'journal',
    flavor: 'case',
    context: t(
      "Al 31 de diciembre, los saldos de resultados de un negocio son: Ventas $80,000; Costo de ventas $50,000; Renta $10,000; Luz, agua y teléfono $5,000.",
      "At December 31, a business's income statement balances are: Sales $80,000; Cost of goods sold $50,000; Rent $10,000; Utilities $5,000.",
    ),
    prompt: t(
      "Registra la póliza de cierre anual que cancela las cuentas de resultados contra la utilidad del ejercicio.",
      "Record the year-end closing entry that closes the income statement accounts against profit for the year.",
    ),
    accountChoices: ['1102', '3102', '3103', '4101', '5101', '6102', '6103'],
    expected: [
      { accountCode: '4101', side: 'D', amount: 80000 },
      { accountCode: '5101', side: 'C', amount: 50000 },
      { accountCode: '6102', side: 'C', amount: 10000 },
      { accountCode: '6103', side: 'C', amount: 5000 },
      { accountCode: '3103', side: 'C', amount: 15000 },
    ],
    explanation: t(
      "Ventas tiene saldo acreedor: se carga $80,000. Costos y gastos tienen saldo deudor: se abonan $50,000, $10,000 y $5,000. La diferencia, 80,000 − 65,000 = $15,000, es utilidad: abono a Utilidad del ejercicio. Cargos = abonos = $80,000. Error común: llevar la utilidad directo a Utilidades retenidas o cancelar también Bancos, que es cuenta de balance.",
      "Sales has a credit balance: debit $80,000. Costs and expenses have debit balances: credit $50,000, $10,000 and $5,000. The difference, 80,000 − 65,000 = $15,000, is profit: credit Profit for the year. Debits = credits = $80,000. Common mistake: taking the profit straight to Retained earnings or also closing Bank, which is a balance sheet account.",
    ),
    difficulty: 2,
    points: 20,
    competency: 'accounting-systems-close',
  },
  {
    id: 'CON-12-E5',
    level: 2,
    module: 'CON-12',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada elemento según la fase del sistema de información contable a la que pertenece.",
      "Classify each element by the phase of the accounting information system it belongs to.",
    ),
    categories: [
      { id: 'CON-12-E5-c1', label: t("Entrada", "Input") },
      { id: 'CON-12-E5-c2', label: t("Proceso", "Processing") },
      { id: 'CON-12-E5-c3', label: t("Salida", "Output") },
    ],
    items: [
      { id: 'CON-12-E5-i1', label: t("CFDI recibido de un proveedor", "CFDI received from a supplier"), correctCategoryId: 'CON-12-E5-c1' },
      { id: 'CON-12-E5-i2', label: t("Ticket de una compra pagada con caja chica", "Receipt for a petty-cash purchase"), correctCategoryId: 'CON-12-E5-c1' },
      { id: 'CON-12-E5-i3', label: t("Captura de la póliza de la compra", "Recording the purchase journal entry"), correctCategoryId: 'CON-12-E5-c2' },
      { id: 'CON-12-E5-i4', label: t("Pase automático de las pólizas al libro mayor", "Automatic posting of entries to the general ledger"), correctCategoryId: 'CON-12-E5-c2' },
      { id: 'CON-12-E5-i5', label: t("Estado de situación financiera para el banco", "Statement of financial position for the bank"), correctCategoryId: 'CON-12-E5-c3' },
      { id: 'CON-12-E5-i6', label: t("Reporte de antigüedad de saldos de clientes", "Customer aging report"), correctCategoryId: 'CON-12-E5-c3' },
    ],
    explanation: t(
      "Entrada: documentos fuente (CFDI, ticket). Proceso: registrar pólizas y pasarlas al mayor. Salida: reportes para usuarios (estado financiero, antigüedad de saldos). Error común: considerar el CFDI como salida porque lo genera un sistema; para quien lo recibe es un documento de entrada.",
      "Input: source documents (CFDI, receipt). Processing: recording entries and posting them to the ledger. Output: reports for users (financial statement, aging report). Common mistake: treating the CFDI as output because a system generates it; for the receiver it is an input document.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'accounting-systems-close',
  },
  {
    id: 'CON-12-E6',
    level: 2,
    module: 'CON-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En el cierre anual, las cuentas de balance como Bancos y Clientes se cancelan contra la utilidad del ejercicio para que inicien el año en cero.",
      "At year-end, balance sheet accounts such as Bank and Receivables are closed against profit for the year so they start the year at zero.",
    ),
    answer: false,
    explanation: t(
      "Falso. Solo se cancelan las cuentas de resultados (ingresos, costos y gastos). Las cuentas de balance conservan su saldo y pasan al año siguiente: el dinero en el banco no desaparece el 1 de enero. Error común: pensar que “cerrar” significa dejar todas las cuentas en cero.",
      "False. Only income statement accounts (revenue, costs and expenses) are closed. Balance sheet accounts keep their balances and carry over to the next year: the money in the bank does not vanish on January 1. Common mistake: thinking “closing” means bringing every account to zero.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'accounting-systems-close',
  },

  // ───────────────────────────── CON-14 ─────────────────────────────
  {
    id: 'CON-14-E1',
    level: 2,
    module: 'CON-14',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Una fábrica de muebles prepara su inventario de emisiones. Clasifica cada fuente en su alcance según el GHG Protocol.",
      "A furniture factory prepares its emissions inventory. Classify each source into its scope under the GHG Protocol.",
    ),
    categories: [
      { id: 'CON-14-E1-c1', label: t("Alcance 1", "Scope 1") },
      { id: 'CON-14-E1-c2', label: t("Alcance 2", "Scope 2") },
      { id: 'CON-14-E1-c3', label: t("Alcance 3", "Scope 3") },
    ],
    items: [
      { id: 'CON-14-E1-i1', label: t("Gas natural que quema su caldera", "Natural gas burned in its boiler"), correctCategoryId: 'CON-14-E1-c1' },
      { id: 'CON-14-E1-i2', label: t("Diésel de sus propios camiones de reparto", "Diesel for its own delivery trucks"), correctCategoryId: 'CON-14-E1-c1' },
      { id: 'CON-14-E1-i3', label: t("Electricidad comprada para la planta", "Electricity purchased for the plant"), correctCategoryId: 'CON-14-E1-c2' },
      { id: 'CON-14-E1-i4', label: t("Vuelos de negocio de sus vendedores", "Business flights of its salespeople"), correctCategoryId: 'CON-14-E1-c3' },
      { id: 'CON-14-E1-i5', label: t("Traslado diario de los empleados en su propio auto", "Employees' daily commute in their own cars"), correctCategoryId: 'CON-14-E1-c3' },
      { id: 'CON-14-E1-i6', label: t("Producción de la madera que le venden sus proveedores", "Production of the wood its suppliers sell to it"), correctCategoryId: 'CON-14-E1-c3' },
    ],
    explanation: t(
      "Alcance 1: fuentes propias que queman combustible (caldera, camiones propios). Alcance 2: electricidad comprada. Alcance 3: el resto de la cadena (vuelos, traslado de empleados, insumos de proveedores). Error común: poner el traslado de empleados en alcance 1; los autos no son de la empresa.",
      "Scope 1: own sources burning fuel (boiler, own trucks). Scope 2: purchased electricity. Scope 3: the rest of the value chain (flights, employee commuting, suppliers' inputs). Common mistake: putting employee commuting in scope 1; the cars are not the company's.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'esg-reporting',
  },
  {
    id: 'CON-14-E2',
    level: 2,
    module: 'CON-14',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una empresa de logística consumió 2,000 litros de diésel en sus camiones y 30,000 kWh de electricidad. Usa factores ilustrativos: 2.7 kg CO₂e por litro de diésel y 0.45 kg CO₂e por kWh.",
      "A logistics company consumed 2,000 liters of diesel in its trucks and 30,000 kWh of electricity. It uses illustrative factors: 2.7 kg CO₂e per liter of diesel and 0.45 kg CO₂e per kWh.",
    ),
    prompt: t(
      "Calcula, en toneladas de CO₂e, las emisiones de alcance 1, de alcance 2 y el total.",
      "Compute, in tonnes of CO₂e, scope 1 emissions, scope 2 emissions and the total.",
    ),
    fields: [
      { id: 'f1', label: t("Alcance 1 (tCO₂e)", "Scope 1 (tCO₂e)"), answer: 5.4, unit: 'none', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Alcance 2 (tCO₂e)", "Scope 2 (tCO₂e)"), answer: 13.5, unit: 'none', tolerance: { abs: 0.05 } },
      { id: 'f3', label: t("Total alcances 1 y 2 (tCO₂e)", "Total scopes 1 and 2 (tCO₂e)"), answer: 18.9, unit: 'none', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Alcance 1: 2,000 × 2.7 = 5,400 kg = 5.4 t. Alcance 2: 30,000 × 0.45 = 13,500 kg = 13.5 t. Total: 5.4 + 13.5 = 18.9 t. Error común: olvidar dividir entre 1,000 para pasar de kilogramos a toneladas.",
      "Scope 1: 2,000 × 2.7 = 5,400 kg = 5.4 t. Scope 2: 30,000 × 0.45 = 13,500 kg = 13.5 t. Total: 5.4 + 13.5 = 18.9 t. Common mistake: forgetting to divide by 1,000 to convert kilograms to tonnes.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'esg-reporting',
  },
  {
    id: 'CON-14-E3',
    level: 2,
    module: 'CON-14',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un hotel emitió 120 tCO₂e en el año y sus ventas fueron de $40 millones (cifras hipotéticas).",
      "A hotel emitted 120 tCO₂e during the year and its sales were $40 million (hypothetical figures).",
    ),
    prompt: t(
      "¿Cuál es su intensidad de emisiones, en tCO₂e por millón de pesos vendido?",
      "What is its emissions intensity, in tCO₂e per million pesos sold?",
    ),
    answer: 3,
    unit: 'none',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: t(
      "Intensidad = emisiones ÷ ventas en millones = 120 ÷ 40 = 3 tCO₂e por millón. Sirve para comparar con hoteles de otro tamaño. Error común: dividir entre 40,000,000 en lugar de 40 millones como unidad, lo que da una cifra minúscula difícil de interpretar.",
      "Intensity = emissions ÷ sales in millions = 120 ÷ 40 = 3 tCO₂e per million. It allows comparing with hotels of a different size. Common mistake: dividing by 40,000,000 instead of 40 million as the unit, which gives a tiny, hard-to-read figure.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg-reporting',
  },
  {
    id: 'CON-14-E4',
    level: 2,
    module: 'CON-14',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "¿Cuál es el tema central de la norma IFRS S2 emitida por el ISSB?",
      "What is the central subject of the IFRS S2 standard issued by the ISSB?",
    ),
    options: [
      { id: 'CON-14-E4-a', text: t("La consolidación de estados financieros", "Consolidation of financial statements") },
      { id: 'CON-14-E4-b', text: t("La información a revelar relacionada con el clima", "Climate-related disclosures") },
      { id: 'CON-14-E4-c', text: t("Los derechos laborales en la cadena de suministro", "Labor rights in the supply chain") },
      { id: 'CON-14-E4-d', text: t("El cálculo del impuesto sobre la renta diferido", "Computing deferred income tax") },
    ],
    correctOptionId: 'CON-14-E4-b',
    explanation: t(
      "IFRS S2 trata la información sobre riesgos y oportunidades relacionados con el clima; IFRS S1 fija los requisitos generales de sostenibilidad. Error común: confundir las normas IFRS S con las NIIF financieras (como consolidación o impuestos diferidos).",
      "IFRS S2 covers information on climate-related risks and opportunities; IFRS S1 sets the general sustainability requirements. Common mistake: confusing the IFRS S standards with financial IFRS (such as consolidation or deferred taxes).",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg-reporting',
  },
  {
    id: 'CON-14-E5',
    level: 2,
    module: 'CON-14',
    kind: 'multi',
    flavor: 'concept',
    prompt: t(
      "¿Cuáles de estos indicadores pertenecen a la dimensión de gobierno corporativo (G)? Selecciona todos los que apliquen.",
      "Which of these indicators belong to the governance (G) dimension? Select all that apply.",
    ),
    options: [
      { id: 'CON-14-E5-a', text: t("Porcentaje de consejeros independientes", "Percentage of independent board members") },
      { id: 'CON-14-E5-b', text: t("Metros cúbicos de agua consumidos", "Cubic meters of water consumed") },
      { id: 'CON-14-E5-c', text: t("Existencia de una política anticorrupción", "Existence of an anti-corruption policy") },
      { id: 'CON-14-E5-d', text: t("Tasa de accidentes laborales", "Workplace accident rate") },
      { id: 'CON-14-E5-e', text: t("Bono de directivos ligado a metas de sostenibilidad", "Executive bonus linked to sustainability targets") },
    ],
    correctOptionIds: ['CON-14-E5-a', 'CON-14-E5-c', 'CON-14-E5-e'],
    explanation: t(
      "Gobierno corporativo es cómo se dirige y vigila la empresa: consejeros independientes, anticorrupción y remuneración de directivos. El agua es ambiental (E) y los accidentes laborales son sociales (S). Error común: poner la seguridad laboral en G por ser una política interna; se clasifica en S porque afecta a personas.",
      "Governance is how the company is directed and overseen: independent directors, anti-corruption and executive pay. Water is environmental (E) and workplace accidents are social (S). Common mistake: putting workplace safety in G because it is an internal policy; it is classified as S because it affects people.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg-reporting',
  },
  {
    id: 'CON-14-E6',
    level: 2,
    module: 'CON-14',
    kind: 'truefalse',
    flavor: 'case',
    context: t(
      "Una cadena de cafeterías anuncia “somos carbono neutral”. Solo midió la electricidad de sus oficinas centrales, no sus sucursales ni sus proveedores de café, y nadie verificó los datos.",
      "A coffee shop chain announces “we are carbon neutral”. It only measured its headquarters' electricity, not its branches or its coffee suppliers, and no one assured the data.",
    ),
    prompt: t(
      "Este anuncio representa un riesgo de greenwashing.",
      "This announcement represents a greenwashing risk.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. La afirmación es mucho más amplia que lo medido: deja fuera sucursales y cadena de suministro y no tiene verificación independiente. Error común: creer que basta con medir algo para poder hacer una afirmación general; el alcance de la medición debe coincidir con lo que se anuncia.",
      "True. The claim is much broader than what was measured: it leaves out branches and the supply chain and has no independent assurance. Common mistake: believing that measuring something is enough to make a general claim; the measurement scope must match what is announced.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg-reporting',
  },

  // ───────────────────────────── CON-15 ─────────────────────────────
  {
    id: 'CON-15-E1',
    level: 2,
    module: 'CON-15',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Mariana quiere especializarse en auditoría interna en un corporativo. ¿Qué certificación internacional se enfoca justo en esa área?",
      "Mariana wants to specialize in internal audit at a corporation. Which international certification focuses precisely on that area?",
    ),
    options: [
      { id: 'CON-15-E1-a', text: t("CMA", "CMA") },
      { id: 'CON-15-E1-b', text: t("CIA", "CIA") },
      { id: 'CON-15-E1-c', text: t("ACCA", "ACCA") },
      { id: 'CON-15-E1-d', text: t("CPA", "CPA") },
    ],
    correctOptionId: 'CON-15-E1-b',
    explanation: t(
      "El CIA (Certified Internal Auditor) está dedicado a la auditoría interna. El CMA se enfoca en contabilidad administrativa y costos; CPA y ACCA son certificaciones contables generales. Error común: elegir el CPA porque incluye auditoría; su enfoque es la auditoría externa y la contaduría pública en general.",
      "The CIA (Certified Internal Auditor) is dedicated to internal audit. The CMA focuses on management accounting and costs; CPA and ACCA are general accounting qualifications. Common mistake: choosing the CPA because it includes audit; its focus is external audit and public accounting in general.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'professional-certification',
  },
  {
    id: 'CON-15-E2',
    level: 2,
    module: 'CON-15',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada certificación según su enfoque principal.",
      "Classify each certification by its main focus.",
    ),
    categories: [
      { id: 'CON-15-E2-c1', label: t("Contaduría pública general", "General public accounting") },
      { id: 'CON-15-E2-c2', label: t("Contabilidad administrativa y costos", "Management accounting and costs") },
      { id: 'CON-15-E2-c3', label: t("Auditoría interna", "Internal audit") },
    ],
    items: [
      { id: 'CON-15-E2-i1', label: t("CPC del IMCP (México)", "IMCP's CPC (Mexico)"), correctCategoryId: 'CON-15-E2-c1' },
      { id: 'CON-15-E2-i2', label: t("CPA (Estados Unidos)", "CPA (United States)"), correctCategoryId: 'CON-15-E2-c1' },
      { id: 'CON-15-E2-i3', label: t("ACCA", "ACCA"), correctCategoryId: 'CON-15-E2-c1' },
      { id: 'CON-15-E2-i4', label: t("CMA", "CMA"), correctCategoryId: 'CON-15-E2-c2' },
      { id: 'CON-15-E2-i5', label: t("CIA", "CIA"), correctCategoryId: 'CON-15-E2-c3' },
    ],
    explanation: t(
      "CPC, CPA y ACCA cubren la contaduría en general (información financiera, auditoría, impuestos). El CMA se centra en costos, presupuestos y decisiones internas, y el CIA en auditoría interna. Error común: confundir CMA y CIA por sus siglas parecidas.",
      "CPC, CPA and ACCA cover accounting in general (financial reporting, audit, tax). The CMA centers on costs, budgets and internal decisions, and the CIA on internal audit. Common mistake: confusing CMA and CIA because of their similar acronyms.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'professional-certification',
  },
  {
    id: 'CON-15-E3',
    level: 2,
    module: 'CON-15',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Pedro calcula que necesita 300 horas para preparar un examen y tiene 20 semanas. El temario (hipotético) tiene tres áreas: Información financiera 40 %, Auditoría 35 % e Impuestos 25 %.",
      "Pedro estimates he needs 300 hours to prepare for an exam and has 20 weeks. The (hypothetical) syllabus has three areas: Financial reporting 40%, Audit 35% and Tax 25%.",
    ),
    prompt: t(
      "Arma su plan: horas por semana y horas para Información financiera y para Impuestos.",
      "Build his plan: hours per week and hours for Financial reporting and for Tax.",
    ),
    fields: [
      { id: 'f1', label: t("Horas por semana", "Hours per week"), answer: 15, unit: 'none', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Horas de Información financiera", "Financial reporting hours"), answer: 120, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Horas de Impuestos", "Tax hours"), answer: 75, unit: 'none', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Por semana: 300 ÷ 20 = 15 horas. Información financiera: 300 × 0.40 = 120 horas. Impuestos: 300 × 0.25 = 75 horas (y Auditoría 105, para sumar 300). Error común: repartir las horas en partes iguales sin considerar el peso de cada área.",
      "Per week: 300 ÷ 20 = 15 hours. Financial reporting: 300 × 0.40 = 120 hours. Tax: 300 × 0.25 = 75 hours (and Audit 105, totaling 300). Common mistake: splitting hours equally without considering each area's weight.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'professional-certification',
  },
  {
    id: 'CON-15-E4',
    level: 2,
    module: 'CON-15',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un examen de práctica dura 240 minutos y tiene 80 preguntas. Sofía quiere reservar 20 minutos al final para revisar las preguntas marcadas.",
      "A practice exam lasts 240 minutes and has 80 questions. Sofía wants to keep 20 minutes at the end to review flagged questions.",
    ),
    prompt: t(
      "¿Cuántos minutos puede dedicar en promedio a cada pregunta?",
      "How many minutes on average can she spend on each question?",
    ),
    answer: 2.75,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Tiempo para responder: 240 − 20 = 220 minutos. Ritmo: 220 ÷ 80 = 2.75 minutos por pregunta (2 min 45 s). Error común: dividir 240 ÷ 80 = 3 y olvidar el margen de revisión, lo que deja a Sofía sin tiempo al final.",
      "Answering time: 240 − 20 = 220 minutes. Pace: 220 ÷ 80 = 2.75 minutes per question (2 min 45 s). Common mistake: dividing 240 ÷ 80 = 3 and forgetting the review margin, which leaves Sofía with no time at the end.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'professional-certification',
  },
  {
    id: 'CON-15-E5',
    level: 2,
    module: 'CON-15',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Una vez que apruebas el examen de certificación del IMCP, conservas la certificación de por vida sin tener que acreditar educación continua.",
      "Once you pass the IMCP certification exam, you keep the certification for life without having to prove continuing education.",
    ),
    answer: false,
    explanation: t(
      "Falso. Para conservar la certificación hay que cumplir cada año con horas de educación profesional continua; si no, se pierde la vigencia. Error común: ver la certificación como un título universitario, que no caduca.",
      "False. To keep the certification you must meet continuing professional education hours each year; otherwise it lapses. Common mistake: viewing certification like a university degree, which does not expire.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'professional-certification',
  },
  {
    id: 'CON-15-E6',
    level: 2,
    module: 'CON-15',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "En su examen de diagnóstico, Daniel obtuvo: área A (peso 40 %) 80 % de aciertos; área B (peso 35 %) 55 %; área C (peso 25 %) 60 %. Le quedan tres semanas.",
      "On his diagnostic exam, Daniel scored: area A (40% weight) 80% correct; area B (35% weight) 55%; area C (25% weight) 60%. He has three weeks left.",
    ),
    prompt: t(
      "Según los puntos que pierde en cada área, ¿cuál debería priorizar en su repaso?",
      "Based on the points he loses in each area, which one should he prioritize in his review?",
    ),
    options: [
      { id: 'CON-15-E6-a', text: t("Área A, porque es la de mayor peso", "Area A, because it has the highest weight") },
      { id: 'CON-15-E6-b', text: t("Área B, porque ahí pierde más puntos", "Area B, because that is where he loses the most points") },
      { id: 'CON-15-E6-c', text: t("Área C, porque es la de menor peso y es más fácil", "Area C, because it has the lowest weight and is easier") },
      { id: 'CON-15-E6-d', text: t("Las tres por igual, una semana cada una", "All three equally, one week each") },
    ],
    correctOptionId: 'CON-15-E6-b',
    explanation: t(
      "Puntos perdidos = peso × (100 % − aciertos). A: 40 × 0.20 = 8. B: 35 × 0.45 = 15.75. C: 25 × 0.40 = 10. B es donde más puede ganar. Error común: elegir el área de más peso (A) aunque ya la domina bien.",
      "Points lost = weight × (100% − score). A: 40 × 0.20 = 8. B: 35 × 0.45 = 15.75. C: 25 × 0.40 = 10. B is where he can gain the most. Common mistake: choosing the highest-weight area (A) even though he already masters it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'professional-certification',
  },
]
