import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Economía y Entorno Empresarial, parte 4 (Avanzado).
 * ECO-19 a ECO-22: federalismo fiscal, coordinación fiscal y transferencias,
 * deuda pública y desarrollo económico.
 */

const t = (es: string, en: string) => ({ es, en })

const NOTE_FED = t(
  "Contenido educativo. Las referencias a la Constitución Política de los Estados Unidos Mexicanos y a los impuestos de cada orden de gobierno son generales; cada estado y municipio tiene sus propias leyes y las reglas cambian con el tiempo. Verifica la versión vigente (2026) antes de aplicarlas a un caso real. Las cifras de los ejemplos son hipotéticas.",
  "Educational content. References to the Mexican Constitution and to the taxes of each order of government are general; each state and municipality has its own laws and rules change over time. Verify the current version (2026) before applying them to a real case. Figures in the examples are hypothetical.",
)

const NOTE_COORD = t(
  "Contenido educativo basado en la Ley de Coordinación Fiscal y en la estructura general del Presupuesto de Egresos de la Federación (Ramos 28 y 33). Los porcentajes, fondos y fórmulas de reparto se reforman con frecuencia: verifica la versión vigente (2026). Los montos de los ejemplos son hipotéticos.",
  "Educational content based on the Fiscal Coordination Law and the general structure of the Federal Expenditure Budget (Branches 28 and 33). Percentages, funds and allocation formulas are amended often: verify the current version (2026). Amounts in the examples are hypothetical.",
)

const NOTE_DEBT = t(
  "Contenido educativo. Las referencias a la Constitución, a la Ley de Disciplina Financiera de las Entidades Federativas y los Municipios y a los instrumentos de deuda del Gobierno Federal son generales; las reglas, límites y nombres de instrumentos pueden cambiar. Verifica la versión vigente (2026). Tasas, saldos y porcentajes de los ejemplos son hipotéticos.",
  "Educational content. References to the Constitution, to the Financial Discipline Law for States and Municipalities and to Federal Government debt instruments are general; rules, limits and instrument names may change. Verify the current version (2026). Rates, balances and percentages in the examples are hypothetical.",
)

const NOTE_DEV = t(
  "Contenido educativo. La metodología del Índice de Desarrollo Humano (PNUD), la medición oficial de la pobreza en México y los Objetivos de Desarrollo Sostenible se revisan periódicamente, y la institución que publica la medición de pobreza puede cambiar: verifica la versión vigente (2026). Los valores de los ejemplos son ilustrativos.",
  "Educational content. The Human Development Index methodology (UNDP), Mexico's official poverty measurement and the Sustainable Development Goals are revised periodically, and the institution that publishes the poverty measurement may change: verify the current version (2026). Values in the examples are illustrative.",
)

export const lessons: Lesson[] = [
  // ───────────────────────────── ECO-19 ─────────────────────────────
  {
    id: 'ECO-19',
    level: 1,
    topicIds: ['ECO.19'],
    title: t("Federalismo fiscal mexicano", "Mexican fiscal federalism"),
    summary: t(
      "El federalismo fiscal estudia cómo se reparten los impuestos y los gastos entre la Federación, los estados y los municipios, y por qué en México la Federación recauda la mayor parte mientras los gobiernos locales dependen de transferencias.",
      "Fiscal federalism studies how taxes and spending are split among the Federation, the states and the municipalities, and why in Mexico the Federation collects most of the revenue while local governments depend on transfers.",
    ),
    minutes: 16,
    objectives: [
      t("Explicar qué es el federalismo fiscal y el principio de correspondencia para asignar funciones entre órdenes de gobierno.", "Explain what fiscal federalism is and the correspondence principle for assigning functions among orders of government."),
      t("Identificar qué impuestos corresponden típicamente a la Federación, a los estados y a los municipios en México.", "Identify which taxes typically belong to the Federation, the states and the municipalities in Mexico."),
      t("Calcular e interpretar indicadores de autonomía y dependencia financiera de un gobierno local.", "Compute and interpret financial autonomy and dependency indicators for a local government."),
      t("Explicar el desequilibrio fiscal vertical y la llamada pereza fiscal.", "Explain vertical fiscal imbalance and so-called fiscal laziness."),
    ],
    theory: [
      {
        heading: t("¿Qué es el federalismo fiscal?", "What is fiscal federalism?"),
        body: [
          t(
            "México es una **república federal**: hay tres **órdenes de gobierno** que conviven en el mismo territorio. La **Federación** (gobierno nacional), las **32 entidades federativas** (31 estados y la Ciudad de México) y los **municipios** (y las alcaldías en la CDMX). Cada uno cobra ciertos ingresos y presta ciertos servicios.",
            "Mexico is a **federal republic**: three **orders of government** coexist on the same territory. The **Federation** (national government), the **32 federal entities** (31 states and Mexico City) and the **municipalities** (and the boroughs in Mexico City). Each one collects certain revenue and provides certain services.",
          ),
          t(
            "El **federalismo fiscal** es la parte de la economía pública que responde dos preguntas: **¿quién hace qué gasto?** y **¿quién cobra qué impuesto?** Su objetivo es que los servicios se presten bien y que cada peso se recaude donde cueste menos y moleste menos a la economía.",
            "**Fiscal federalism** is the branch of public economics that answers two questions: **who does which spending?** and **who levies which tax?** Its goal is for services to be provided well and for each peso to be collected where it costs least and distorts the economy least.",
          ),
          t(
            "Una guía clásica es el **principio de correspondencia** (o de subsidiariedad): un servicio debe darlo el gobierno **más cercano** cuya área coincida con quienes se benefician. El alumbrado de tu calle beneficia a tu colonia: lo da el municipio. La defensa nacional beneficia a todo el país: la da la Federación. Las tareas que **estabilizan** la economía (política monetaria, grandes ciclos) y las que **redistribuyen** ingreso suelen quedar en el orden nacional, porque la gente y el capital se pueden mudar entre estados.",
            "A classic guide is the **correspondence principle** (or subsidiarity): a service should be provided by the **closest** government whose area matches those who benefit. Your street lighting benefits your neighborhood: the municipality provides it. National defense benefits the whole country: the Federation provides it. Tasks that **stabilize** the economy (monetary policy, big cycles) and those that **redistribute** income usually stay at the national level, because people and capital can move between states.",
          ),
          t(
            "Mini ejemplo: la recolección de basura de Mérida la decide y paga el municipio de Mérida; los pasaportes los expide la Federación para todo el país.",
            "Mini example: garbage collection in Mérida is decided and paid for by the municipality of Mérida; passports are issued by the Federation for the whole country.",
          ),
        ],
        bullets: [
          t("Federación: defensa, relaciones exteriores, moneda, grandes programas redistributivos.", "Federation: defense, foreign affairs, currency, large redistributive programs."),
          t("Estados: educación y salud en coordinación con la Federación, seguridad estatal, carreteras estatales.", "States: education and health in coordination with the Federation, state security, state roads."),
          t("Municipios: agua potable, alumbrado, limpia, mercados, panteones, calles y seguridad municipal.", "Municipalities: drinking water, street lighting, garbage collection, markets, cemeteries, streets and municipal security."),
        ],
      },
      {
        heading: t("¿Quién puede cobrar qué impuesto?", "Who can levy which tax?"),
        body: [
          t(
            "La **potestad tributaria** es el poder de crear impuestos. En México la Constitución la reparte así: hay materias **exclusivas de la Federación** (por ejemplo, el comercio exterior y ciertos impuestos especiales que enumera el artículo 73); a los **municipios** les asegura los ingresos de la **propiedad inmobiliaria** (artículo 115); y lo que no está dado expresamente a la Federación queda **reservado a los estados** (artículo 124).",
            "**Taxing power** is the power to create taxes. In Mexico the Constitution distributes it like this: some matters are **exclusive to the Federation** (for example, foreign trade and certain special taxes listed in article 73); **municipalities** are guaranteed revenue from **real estate** (article 115); and whatever is not expressly granted to the Federation is **reserved to the states** (article 124).",
          ),
          t(
            "En la práctica, la Federación cobra los impuestos que más recaudan: **ISR** (sobre la renta), **IVA** (al consumo) e **IEPS** (especial sobre producción y servicios, como gasolinas, tabacos o bebidas). Los estados cobran sobre todo el **impuesto sobre nóminas** (un porcentaje de lo que una empresa paga a sus trabajadores) y el de **hospedaje**. Los municipios cobran el **predial** (impuesto anual sobre tu casa o terreno) y el impuesto por **adquisición de inmuebles** cuando compras una casa.",
            "In practice, the Federation collects the taxes that raise the most: **ISR** (income tax), **IVA** (VAT, on consumption) and **IEPS** (special tax on production and services, such as fuels, tobacco or beverages). States mainly collect the **payroll tax** (a percentage of what a company pays its workers) and the **lodging tax**. Municipalities collect the **property tax** (predial, an annual tax on your house or land) and the **real estate acquisition tax** when you buy a house.",
          ),
          t(
            "Como varios órdenes podrían gravar lo mismo (por ejemplo, las ventas), existe el riesgo de **doble tributación**. Para evitarlo, México creó un sistema de coordinación en el que los estados renuncian a ciertos impuestos a cambio de recibir parte de lo que recauda la Federación (lo verás en la siguiente materia).",
            "Because several orders could tax the same thing (for example, sales), there is a risk of **double taxation**. To avoid it, Mexico created a coordination system in which states give up certain taxes in exchange for receiving part of what the Federation collects (you will see it in the next subject).",
          ),
          t(
            "Mini ejemplo: si compras un departamento en Puebla pagas al municipio el impuesto por adquisición y, cada año, el predial; si una empresa poblana paga nómina, entrega al estado el impuesto sobre nóminas; y por sus utilidades paga ISR a la Federación.",
            "Mini example: if you buy an apartment in Puebla you pay the municipality the acquisition tax and, every year, the property tax; if a Puebla company pays payroll, it pays the state the payroll tax; and on its profits it pays ISR to the Federation.",
          ),
        ],
      },
      {
        heading: t("Desequilibrio vertical, autonomía y pereza fiscal", "Vertical imbalance, autonomy and fiscal laziness"),
        body: [
          t(
            "En México la Federación **recauda** la gran mayoría de los ingresos tributarios, pero estados y municipios **gastan** una parte muy importante del gasto público (escuelas, hospitales, policía, agua). A esa diferencia entre lo que un orden de gobierno gasta y lo que recauda por sí mismo se le llama **desequilibrio fiscal vertical**. Se cubre con **transferencias** de la Federación.",
            "In Mexico the Federation **collects** the vast majority of tax revenue, but states and municipalities **spend** a very significant share of public spending (schools, hospitals, police, water). That gap between what an order of government spends and what it collects on its own is called **vertical fiscal imbalance**. It is covered with **transfers** from the Federation.",
          ),
          t(
            "También hay un **desequilibrio horizontal**: entre estados o municipios del mismo orden, unos tienen mucha más base para cobrar (más empresas, casas más valiosas) que otros. Un municipio industrial del norte puede recaudar mucho más predial por habitante que uno rural de la sierra.",
            "There is also a **horizontal imbalance**: among states or municipalities of the same order, some have a much larger base to tax (more firms, more valuable houses) than others. An industrial northern municipality can collect much more property tax per resident than a rural mountain one.",
          ),
          t(
            "Para medir qué tan independiente es un gobierno local se usan dos indicadores. Cuando las transferencias son cómodas y cobrar es políticamente costoso, algunos gobiernos locales **no se esfuerzan en recaudar** (por ejemplo, no actualizan los valores catastrales del predial). A esto se le llama **pereza fiscal**.",
            "Two indicators are used to measure how independent a local government is. When transfers are comfortable and collecting is politically costly, some local governments **do not try hard to collect** (for example, they do not update property values for predial). This is called **fiscal laziness**.",
          ),
          t(
            "Mini ejemplo hipotético: un municipio recibe $100 millones en total; $20 millones son ingresos propios (predial, agua, licencias) y $80 millones son transferencias. Su autonomía es 20 % y su dependencia 80 %.",
            "Hypothetical mini example: a municipality receives $100 million in total; $20 million is own-source revenue (property tax, water, permits) and $80 million is transfers. Its autonomy is 20 % and its dependency 80 %.",
          ),
        ],
        formulas: [
          {
            name: t("Autonomía financiera y dependencia de transferencias", "Financial autonomy and dependency on transfers"),
            expression: "Autonomía = Ingresos propios ÷ Ingresos totales × 100   ·   Dependencia = Transferencias ÷ Ingresos totales × 100",
            variables: [
              { symbol: "Ingresos propios", meaning: t("El dinero que el gobierno local genera por sí mismo, en pesos: predial, derechos (agua, licencias), productos y aprovechamientos.", "The money the local government raises by itself, in pesos: property tax, fees (water, permits), products and other charges.") },
              { symbol: "Transferencias", meaning: t("El dinero que le manda la Federación, en pesos: participaciones, aportaciones y convenios.", "The money the Federation sends it, in pesos: revenue shares, earmarked contributions and agreements.") },
              { symbol: "Ingresos totales", meaning: t("Ingresos propios + transferencias: todo lo que entró en el año, en pesos.", "Own-source revenue + transfers: everything that came in during the year, in pesos.") },
              { symbol: "Autonomía", meaning: t("Qué porcentaje de cada peso lo genera el propio gobierno local (%).", "What percentage of each peso the local government generates itself (%).") },
              { symbol: "Dependencia", meaning: t("Qué porcentaje de cada peso viene de la Federación (%).", "What percentage of each peso comes from the Federation (%).") },
            ],
            steps: [
              t("Suma todos los ingresos propios (no solo el predial: también derechos y licencias).", "Add up all own-source revenue (not only property tax: also fees and permits)."),
              t("Suma todas las transferencias (participaciones + aportaciones).", "Add up all transfers (revenue shares + earmarked contributions)."),
              t("Calcula los ingresos totales: ingresos propios + transferencias.", "Compute total revenue: own-source revenue + transfers."),
              t("Divide cada parte entre el total y multiplica por 100. Comprueba que autonomía + dependencia = 100 %.", "Divide each part by the total and multiply by 100. Check that autonomy + dependency = 100 %."),
            ],
            example: t(
              "Un municipio hipotético cobra $28 millones de predial y $12 millones de derechos, y recibe $150 millones de participaciones y $60 millones de aportaciones. Propios = 28 + 12 = 40. Transferencias = 150 + 60 = 210. Total = 40 + 210 = 250. Autonomía = 40 ÷ 250 × 100 = **16 %**. Dependencia = 210 ÷ 250 × 100 = **84 %**. Suma: 16 + 84 = 100 %.",
              "A hypothetical municipality collects $28 million in property tax and $12 million in fees, and receives $150 million in revenue shares and $60 million in earmarked contributions. Own = 28 + 12 = 40. Transfers = 150 + 60 = 210. Total = 40 + 210 = 250. Autonomy = 40 ÷ 250 × 100 = **16 %**. Dependency = 210 ÷ 250 × 100 = **84 %**. Sum: 16 + 84 = 100 %.",
            ),
            interpret: t(
              "Autonomía alta: el gobierno local se sostiene solo y resiste mejor si bajan las transferencias. Autonomía baja (dependencia alta): cualquier recorte federal le pega directo a sus servicios.",
              "High autonomy: the local government supports itself and copes better if transfers fall. Low autonomy (high dependency): any federal cut hits its services directly.",
            ),
            mistake: t(
              "Contar solo el predial como ingreso propio y olvidar derechos y licencias, que también los cobra el municipio.",
              "Counting only property tax as own-source revenue and forgetting fees and permits, which the municipality also collects.",
            ),
          },
          {
            name: t("Predial potencial y eficiencia recaudatoria", "Potential property tax and collection efficiency"),
            expression: "Predial potencial = Valor catastral total × Tasa de predial   ·   Eficiencia = Predial recaudado ÷ Predial potencial × 100",
            variables: [
              { symbol: "Valor catastral total", meaning: t("La suma del valor oficial (catastral) de todas las casas y terrenos del municipio, en pesos.", "The sum of the official (cadastral) value of all houses and plots in the municipality, in pesos.") },
              { symbol: "Tasa de predial", meaning: t("El porcentaje anual que se cobra sobre ese valor; se usa en decimal (0.25 % = 0.0025).", "The annual percentage charged on that value; it is used as a decimal (0.25 % = 0.0025).") },
              { symbol: "Predial potencial", meaning: t("Lo que el municipio cobraría si todos pagaran completo, en pesos.", "What the municipality would collect if everyone paid in full, in pesos.") },
              { symbol: "Predial recaudado", meaning: t("Lo que de verdad cobró en el año, en pesos.", "What it actually collected during the year, in pesos.") },
              { symbol: "Eficiencia", meaning: t("Qué porcentaje del potencial logró cobrar (%).", "What percentage of the potential it managed to collect (%).") },
            ],
            steps: [
              t("Convierte la tasa a decimal dividiéndola entre 100: por ejemplo, 0.3 % = 0.003.", "Convert the rate to a decimal by dividing it by 100: for example, 0.3 % = 0.003."),
              t("Multiplica el valor catastral total por la tasa en decimal: ese es el predial potencial.", "Multiply the total cadastral value by the decimal rate: that is the potential property tax."),
              t("Divide lo recaudado entre el potencial y multiplica por 100.", "Divide what was collected by the potential and multiply by 100."),
            ],
            example: t(
              "Valor catastral total: $8,000 millones; tasa de ejemplo 0.3 % = 0.003; recaudado: $15 millones. Potencial = 8,000 × 0.003 = $24 millones. Eficiencia = 15 ÷ 24 × 100 = **62.5 %**.",
              "Total cadastral value: $8,000 million; example rate 0.3 % = 0.003; collected: $15 million. Potential = 8,000 × 0.003 = $24 million. Efficiency = 15 ÷ 24 × 100 = **62.5 %**.",
            ),
            interpret: t(
              "Lo que falta para llegar a 100 % es dinero que se pierde por morosos, padrones viejos o descuentos. Una eficiencia baja es una señal típica de pereza fiscal.",
              "What is missing to reach 100 % is money lost to late payers, outdated rolls or discounts. Low efficiency is a typical sign of fiscal laziness.",
            ),
            mistake: t(
              "Usar la tasa sin convertir (0.25 en vez de 0.0025): el potencial sale 100 veces más grande.",
              "Using the rate without converting it (0.25 instead of 0.0025): the potential comes out 100 times larger.",
            ),
          },
        ],
        bullets: [
          t("Ingresos propios: impuestos, derechos, productos y aprovechamientos locales.", "Own-source revenue: local taxes, fees, products and other charges."),
          t("Transferencias: participaciones y aportaciones federales, más convenios.", "Transfers: federal revenue shares and earmarked contributions, plus agreements."),
          t("Brecha vertical = Gasto − Ingresos propios.", "Vertical gap = Spending − Own-source revenue."),
        ],
      },
    ],
    examples: [
      {
        title: t("Autonomía financiera de un municipio", "A municipality's financial autonomy"),
        problem: t(
          "Un municipio hipotético tuvo en el año: predial $45 millones, derechos de agua y licencias $15 millones, participaciones federales $140 millones y aportaciones federales $100 millones. Calcula su autonomía y su dependencia.",
          "A hypothetical municipality had in the year: property tax $45 million, water fees and permits $15 million, federal revenue shares $140 million and federal earmarked contributions $100 million. Compute its autonomy and its dependency.",
        ),
        steps: [
          t("Ingresos propios: 45 + 15 = $60 millones.", "Own-source revenue: 45 + 15 = $60 million."),
          t("Transferencias: 140 + 100 = $240 millones.", "Transfers: 140 + 100 = $240 million."),
          t("Ingresos totales: 60 + 240 = $300 millones.", "Total revenue: 60 + 240 = $300 million."),
          t("Autonomía: 60 ÷ 300 × 100 = 20 %. Dependencia: 240 ÷ 300 × 100 = 80 %.", "Autonomy: 60 ÷ 300 × 100 = 20 %. Dependency: 240 ÷ 300 × 100 = 80 %."),
        ],
        result: t(
          "Solo 1 de cada 5 pesos los genera el propio municipio: tiene alta dependencia de la Federación y poco margen si las transferencias bajan.",
          "Only 1 of every 5 pesos is generated by the municipality itself: it is highly dependent on the Federation and has little room if transfers fall.",
        ),
      },
      {
        title: t("¿Quién debe dar el servicio?", "Who should provide the service?"),
        problem: t(
          "Aplica el principio de correspondencia a tres servicios: la pavimentación de una calle de colonia, una carretera que une dos ciudades del mismo estado y la política de tipo de cambio.",
          "Apply the correspondence principle to three services: paving a neighborhood street, a highway linking two cities in the same state and exchange rate policy.",
        ),
        steps: [
          t("Calle de colonia: beneficia sobre todo a los vecinos → municipio.", "Neighborhood street: mainly benefits neighbors → municipality."),
          t("Carretera entre dos ciudades del estado: beneficia a la región → estado.", "Highway between two cities in the state: benefits the region → state."),
          t("Tipo de cambio: afecta a todo el país y es parte de la estabilización → Federación (y el banco central).", "Exchange rate: affects the whole country and is part of stabilization → Federation (and the central bank)."),
        ],
        result: t(
          "Cada servicio se asigna al gobierno cuya área coincide con quienes se benefician; así quien decide también responde ante quien paga.",
          "Each service is assigned to the government whose area matches the beneficiaries; that way whoever decides is also accountable to whoever pays.",
        ),
      },
    ],
    keyPoints: [
      t("El federalismo fiscal reparte gastos e impuestos entre Federación, estados y municipios.", "Fiscal federalism splits spending and taxes among the Federation, the states and the municipalities."),
      t("Principio de correspondencia: el servicio lo da el gobierno más cercano cuya área coincide con los beneficiarios.", "Correspondence principle: the closest government whose area matches the beneficiaries provides the service."),
      t("La Federación cobra ISR, IVA e IEPS; los estados, sobre todo nóminas y hospedaje; los municipios, predial y adquisición de inmuebles.", "The Federation levies ISR, VAT and IEPS; states mainly payroll and lodging taxes; municipalities property and real estate acquisition taxes."),
      t("Desequilibrio vertical: los gobiernos locales gastan más de lo que recaudan y lo cubren con transferencias.", "Vertical imbalance: local governments spend more than they collect and cover it with transfers."),
      t("Autonomía = ingresos propios ÷ ingresos totales; la pereza fiscal la reduce.", "Autonomy = own-source revenue ÷ total revenue; fiscal laziness lowers it."),
    ],
    normativeNote: NOTE_FED,
    exerciseIds: ['ECO-19-E1', 'ECO-19-E2', 'ECO-19-E3', 'ECO-19-E4', 'ECO-19-E5', 'ECO-19-E6'],
  },

  // ───────────────────────────── ECO-20 ─────────────────────────────
  {
    id: 'ECO-20',
    level: 1,
    topicIds: ['ECO.20'],
    title: t("Coordinación fiscal y transferencias intergubernamentales", "Fiscal coordination and intergovernmental transfers"),
    summary: t(
      "Con el Sistema Nacional de Coordinación Fiscal los estados ceden ciertos impuestos a la Federación y, a cambio, reciben participaciones de libre uso y aportaciones etiquetadas que se reparten con fórmulas.",
      "Under the National Fiscal Coordination System states cede certain taxes to the Federation and, in exchange, receive unconditional revenue shares and earmarked contributions allocated by formulas.",
    ),
    minutes: 17,
    objectives: [
      t("Explicar cómo funciona el Sistema Nacional de Coordinación Fiscal y qué ganan y ceden los estados al adherirse.", "Explain how the National Fiscal Coordination System works and what states gain and give up by joining."),
      t("Distinguir participaciones (Ramo 28) de aportaciones (Ramo 33) y reconocer sus principales fondos.", "Distinguish revenue shares (Branch 28) from earmarked contributions (Branch 33) and recognize their main funds."),
      t("Calcular repartos sencillos de transferencias con fórmulas de varios criterios.", "Compute simple transfer allocations with multi-criteria formulas."),
      t("Analizar los efectos económicos de las transferencias condicionadas e incondicionadas.", "Analyze the economic effects of conditional and unconditional transfers."),
    ],
    theory: [
      {
        heading: t("El Sistema Nacional de Coordinación Fiscal", "The National Fiscal Coordination System"),
        body: [
          t(
            "Imagina que tú y tus vecinos acuerdan que uno solo cobre la cuota de mantenimiento del edificio y luego reparta a cada piso su parte. Así se evita cobrar dos veces y se ahorra trabajo. Eso hace, en grande, el **Sistema Nacional de Coordinación Fiscal (SNCF)**, que regula la **Ley de Coordinación Fiscal** (vigente desde 1980, el mismo año en que nació el IVA).",
            "Imagine you and your neighbors agree that only one person collects the building's maintenance fee and then gives each floor its share. That avoids charging twice and saves work. That is what, on a large scale, the **National Fiscal Coordination System (SNCF)** does, regulated by the **Fiscal Coordination Law** (in force since 1980, the same year VAT was born).",
          ),
          t(
            "Los estados se **adhieren** al sistema mediante un **convenio**. Al hacerlo se comprometen a **no cobrar** impuestos locales que se encimen con los federales (por ejemplo, impuestos estatales a las ventas que dupliquen al IVA). A cambio reciben una parte de la **Recaudación Federal Participable (RFP)**: la bolsa formada principalmente por el ISR, el IVA y otros ingresos federales que la ley señala.",
            "States **join** the system through an **agreement**. By doing so they commit **not to levy** local taxes that overlap with federal ones (for example, state sales taxes that duplicate VAT). In exchange they receive a share of the **Federal Shareable Revenue (RFP)**: the pool made up mainly of ISR, VAT and other federal revenue the law specifies.",
          ),
          t(
            "Además existen **convenios de colaboración administrativa**: la Federación delega a los estados tareas como fiscalizar ciertos contribuyentes o cobrar algunos impuestos federales, y los estados se quedan con incentivos por esa labor. El sistema tiene órganos de coordinación donde participan la Secretaría de Hacienda y los tesoreros estatales.",
            "There are also **administrative collaboration agreements**: the Federation delegates to states tasks such as auditing certain taxpayers or collecting some federal taxes, and states keep incentives for that work. The system has coordination bodies where the Ministry of Finance and state treasurers take part.",
          ),
          t(
            "Mini ejemplo: un estado coordinado no puede crear un impuesto propio del 5 % a todas las ventas, porque gravaría lo mismo que el IVA; en cambio, sí cobra su impuesto sobre nóminas, que no choca con el sistema.",
            "Mini example: a coordinated state cannot create its own 5 % tax on all sales, because it would tax the same thing as VAT; instead, it does levy its payroll tax, which does not clash with the system.",
          ),
        ],
      },
      {
        heading: t("Participaciones y aportaciones", "Revenue shares and earmarked contributions"),
        body: [
          t(
            "Las **participaciones** (en el presupuesto, el **Ramo 28**) son recursos **de libre disposición**: el estado o municipio decide en qué gastarlos según sus propias leyes. Son el resarcimiento por haber cedido impuestos. El fondo principal es el **Fondo General de Participaciones**, que la ley fija como un porcentaje de la RFP (tradicionalmente el **20 %**). También existe el **Fondo de Fomento Municipal**, entre otros. Los estados deben pasar a sus municipios **al menos el 20 %** de las participaciones que reciben.",
            "**Revenue shares** (in the budget, **Branch 28**) are **unconditional** resources: the state or municipality decides what to spend them on according to its own laws. They compensate for having ceded taxes. The main fund is the **General Revenue-Sharing Fund**, which the law sets as a percentage of RFP (traditionally **20 %**). There is also the **Municipal Development Fund**, among others. States must pass **at least 20 %** of the revenue shares they receive on to their municipalities.",
          ),
          t(
            "Las **aportaciones** (el **Ramo 33**) son recursos **etiquetados**: solo pueden usarse para el fin que marca la ley. Por ejemplo, el fondo de nómina educativa paga maestros; el de salud, servicios de salud; y el **FAIS** (infraestructura social) financia obras como agua potable, drenaje o electrificación que beneficien a población en pobreza o en zonas de rezago.",
            "**Earmarked contributions** (**Branch 33**) are **conditional** resources: they can only be used for the purpose the law sets. For example, the education payroll fund pays teachers; the health fund, health services; and the **FAIS** (social infrastructure fund) finances works such as drinking water, drainage or electrification benefiting people in poverty or in lagging areas.",
          ),
          t(
            "Mini ejemplo: con participaciones, un municipio puede pagar la nómina de sus policías o comprar un camión de basura; con FAIS no puede pagar una fiesta patronal ni pavimentar una zona residencial acomodada.",
            "Mini example: with revenue shares, a municipality can pay its police payroll or buy a garbage truck; with FAIS it cannot pay for a town festival or pave a well-off residential area.",
          ),
        ],
        formulas: [
          {
            name: t("Del Fondo General de Participaciones al municipio", "From the General Revenue-Sharing Fund to the municipality"),
            expression: "Fondo General = RFP × 20 %   →   Participaciones del estado = Fondo General × Coeficiente   →   Mínimo para municipios = Participaciones del estado × 20 %",
            variables: [
              { symbol: "RFP", meaning: t("Recaudación Federal Participable: la bolsa de impuestos federales (ISR, IVA y otros) que se comparte, en pesos.", "Federal Shareable Revenue: the pool of federal taxes (ISR, VAT and others) that is shared, in pesos.") },
              { symbol: "Fondo General", meaning: t("Fondo General de Participaciones: la parte de la RFP que se reparte entre los estados (en estos ejercicios, 20 %).", "General Revenue-Sharing Fund: the part of RFP distributed among the states (in these exercises, 20 %).") },
              { symbol: "Coeficiente", meaning: t("El porcentaje del Fondo General que le toca a un estado; se usa en decimal (3 % = 0.03).", "The percentage of the General Fund that goes to one state; it is used as a decimal (3 % = 0.03).") },
              { symbol: "Participaciones del estado", meaning: t("Los pesos que recibe el estado, de libre uso.", "The pesos the state receives, for unrestricted use.") },
              { symbol: "Mínimo para municipios", meaning: t("Lo mínimo que el estado debe pasar a sus municipios: 20 % de sus participaciones, en pesos.", "The minimum the state must pass on to its municipalities: 20 % of its revenue shares, in pesos.") },
            ],
            steps: [
              t("Calcula el Fondo General: RFP × 0.20.", "Compute the General Fund: RFP × 0.20."),
              t("Aplica el coeficiente del estado **al fondo**, no a la RFP: Fondo General × coeficiente en decimal.", "Apply the state's coefficient **to the fund**, not to RFP: General Fund × coefficient as a decimal."),
              t("Calcula lo de los municipios: participaciones del estado × 0.20.", "Compute the municipalities' part: state revenue shares × 0.20."),
              t("Si te lo piden, lo que conserva el estado = participaciones − monto para municipios.", "If asked, what the state keeps = revenue shares − amount for municipalities."),
            ],
            example: t(
              "RFP hipotética de $2,000,000 millones; coeficiente del estado 4 %. Fondo General = 2,000,000 × 0.20 = $400,000 millones. Estado = 400,000 × 0.04 = **$16,000 millones**. Municipios = 16,000 × 0.20 = **$3,200 millones**. El estado conserva 16,000 − 3,200 = $12,800 millones.",
              "Hypothetical RFP of $2,000,000 million; state coefficient 4 %. General Fund = 2,000,000 × 0.20 = $400,000 million. State = 400,000 × 0.04 = **$16,000 million**. Municipalities = 16,000 × 0.20 = **$3,200 million**. The state keeps 16,000 − 3,200 = $12,800 million.",
            ),
            mistake: t(
              "Aplicar el coeficiente del estado a toda la RFP en lugar de al Fondo General, o aplicar el 20 % municipal a las aportaciones del Ramo 33.",
              "Applying the state's coefficient to the whole RFP instead of the General Fund, or applying the municipal 20 % to Branch 33 contributions.",
            ),
          },
        ],
        bullets: [
          t("FONE: nómina educativa y gasto operativo de educación básica.", "FONE: education payroll and operating spending for basic education."),
          t("FASSA: servicios de salud.", "FASSA: health services."),
          t("FAIS: infraestructura social para población en pobreza y rezago.", "FAIS: social infrastructure for people in poverty and lagging areas."),
          t("FORTAMUN: fortalecimiento de los municipios (obligaciones financieras, seguridad).", "FORTAMUN: strengthening municipalities (financial obligations, security)."),
          t("FAM, FASP, FAETA y FAFEF: asistencia e infraestructura educativa, seguridad pública, educación de adultos y fortalecimiento de los estados.", "FAM, FASP, FAETA and FAFEF: social assistance and school infrastructure, public security, adult education and strengthening of the states."),
        ],
      },
      {
        heading: t("Economía de las transferencias y fórmulas de reparto", "Economics of transfers and allocation formulas"),
        body: [
          t(
            "Una **transferencia incondicionada** (como las participaciones) funciona como más ingreso para el gobierno local: puede gastarlo en lo que prefiera o incluso bajar sus propios impuestos. Una **transferencia condicionada** (como las aportaciones) obliga a gastar en algo concreto; se usa cuando el país quiere asegurar un mínimo en servicios como educación o salud, o cuando un servicio local beneficia también a otros (por ejemplo, vacunar evita contagios en estados vecinos).",
            "An **unconditional transfer** (like revenue shares) works as extra income for the local government: it can spend it on whatever it prefers or even lower its own taxes. A **conditional transfer** (like earmarked contributions) forces spending on something specific; it is used when the country wants to secure a minimum in services such as education or health, or when a local service also benefits others (for example, vaccinating prevents infections in neighboring states).",
          ),
          t(
            "La teoría dice que un peso de transferencia incondicionada debería tener el mismo efecto que un peso más de ingreso de los habitantes. Pero los estudios muestran que el dinero transferido tiende a **quedarse pegado en el gasto público**: lo eleva más que un aumento equivalente del ingreso de la gente. A eso se le llama **efecto papel matamoscas** (flypaper effect).",
            "Theory says one peso of unconditional transfer should have the same effect as one more peso of residents' income. But studies show transferred money tends to **stick in public spending**: it raises it more than an equivalent increase in people's income. This is called the **flypaper effect**.",
          ),
          t(
            "Los fondos se reparten con **fórmulas** que combinan criterios: **población** (más gente, más necesidades), **esfuerzo recaudatorio** (premiar a quien cobra más de sus propios impuestos), **pobreza o rezago** (compensar a los más necesitados) y a veces una parte igual para todos. Hay un dilema: si premias recaudación, ayudas a los ricos; si premias pobreza, puedes desincentivar el esfuerzo local.",
            "Funds are allocated with **formulas** that combine criteria: **population** (more people, more needs), **collection effort** (rewarding those who collect more of their own taxes), **poverty or lag** (compensating the neediest) and sometimes an equal part for everyone. There is a dilemma: if you reward collection, you help the rich; if you reward poverty, you may discourage local effort.",
          ),
          t(
            "Mini ejemplo hipotético: un fondo de $600 millones se reparte 100 % por población entre dos estados de 1 y 2 millones de habitantes. El primero recibe 600 × 1/3 = $200 millones; el segundo, $400 millones.",
            "Hypothetical mini example: a $600 million fund is allocated 100 % by population between two states with 1 and 2 million residents. The first receives 600 × 1/3 = $200 million; the second, $400 million.",
          ),
        ],
        formulas: [
          {
            name: t("Reparto de un fondo con varios criterios", "Allocating a fund with several criteria"),
            expression: "Monto del estado i = Fondo × Σ (peso del criterio × participación del estado i en ese criterio)",
            variables: [
              { symbol: "Monto del estado i", meaning: t("Lo que recibe un estado en particular (el estado \"i\"), en pesos.", "What one particular state (state \"i\") receives, in pesos.") },
              { symbol: "Fondo", meaning: t("El total de dinero que se va a repartir, en pesos.", "The total money to be allocated, in pesos.") },
              { symbol: "Σ", meaning: t("Sigma: \"suma\". Se calcula el término para cada criterio y se suman.", "Sigma: \"sum\". You compute the term for each criterion and add them up.") },
              { symbol: "Peso del criterio", meaning: t("Qué parte del fondo se reparte con ese criterio, en decimal (70 % = 0.70). Los pesos de todos los criterios suman 1.", "What part of the fund is allocated by that criterion, as a decimal (70 % = 0.70). The weights of all criteria add up to 1.") },
              { symbol: "Participación del estado i en ese criterio", meaning: t("Su parte del total en ese criterio: su población ÷ población total, sus pobres ÷ pobres totales, o 1 ÷ número de estados si es en partes iguales.", "Its share of the total in that criterion: its population ÷ total population, its poor ÷ total poor, or 1 ÷ number of states if it is in equal parts.") },
            ],
            steps: [
              t("Divide el fondo en bolsas: Fondo × peso de cada criterio.", "Split the fund into pools: Fund × weight of each criterion."),
              t("En cada bolsa, calcula la participación del estado (su dato ÷ el total de todos los estados).", "In each pool, compute the state's share (its figure ÷ the total of all states)."),
              t("Multiplica cada bolsa por esa participación.", "Multiply each pool by that share."),
              t("Suma lo que el estado obtiene de todas las bolsas.", "Add up what the state gets from all pools."),
            ],
            example: t(
              "Fondo hipotético de $900 millones: 60 % por población y 40 % por pobreza. Estado A: 4 millones de habitantes y 1 millón de pobres; estado B: 2 millones y 1.5 millones. Bolsas: 900 × 0.60 = 540 y 900 × 0.40 = 360. Población: A = 540 × 4/6 = 360; B = 540 × 2/6 = 180. Pobreza (2.5 millones en total): A = 360 × 1/2.5 = 144; B = 360 × 1.5/2.5 = 216. Totales: A = 360 + 144 = **$504 millones**; B = 180 + 216 = **$396 millones** (504 + 396 = 900).",
              "Hypothetical $900 million fund: 60 % by population and 40 % by poverty. State A: 4 million residents and 1 million poor; state B: 2 million and 1.5 million. Pools: 900 × 0.60 = 540 and 900 × 0.40 = 360. Population: A = 540 × 4/6 = 360; B = 540 × 2/6 = 180. Poverty (2.5 million in total): A = 360 × 1/2.5 = 144; B = 360 × 1.5/2.5 = 216. Totals: A = 360 + 144 = **$504 million**; B = 180 + 216 = **$396 million** (504 + 396 = 900).",
            ),
            interpret: t(
              "Comprueba que lo de todos los estados sume el fondo completo. Un criterio de pobreza favorece a quien tiene más pobres en proporción; uno de recaudación, a quien cobra más.",
              "Check that all states' amounts add up to the full fund. A poverty criterion favors whoever has proportionally more poor people; a collection criterion, whoever collects more.",
            ),
            mistake: t(
              "Repartir todo el fondo con un solo criterio y olvidar las otras bolsas (por ejemplo, la parte igualitaria).",
              "Allocating the whole fund with a single criterion and forgetting the other pools (for example, the equal part).",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Del fondo federal al municipio", "From the federal fund to the municipality"),
        problem: t(
          "Supón una Recaudación Federal Participable hipotética de $3,000,000 millones y que el Fondo General de Participaciones es el 20 % de ella. Un estado tiene un coeficiente de 2.5 % del fondo y transfiere a sus municipios exactamente el mínimo del 20 %. ¿Cuánto recibe el estado y cuánto pasa a sus municipios?",
          "Assume hypothetical Federal Shareable Revenue of $3,000,000 million and that the General Revenue-Sharing Fund is 20 % of it. A state has a coefficient of 2.5 % of the fund and passes exactly the 20 % minimum on to its municipalities. How much does the state receive and how much goes to its municipalities?",
        ),
        steps: [
          t("Fondo General: 3,000,000 × 0.20 = $600,000 millones.", "General Fund: 3,000,000 × 0.20 = $600,000 million."),
          t("Participaciones del estado: 600,000 × 0.025 = $15,000 millones.", "State's revenue shares: 600,000 × 0.025 = $15,000 million."),
          t("A municipios: 15,000 × 0.20 = $3,000 millones.", "To municipalities: 15,000 × 0.20 = $3,000 million."),
          t("Le quedan al gobierno estatal: 15,000 − 3,000 = $12,000 millones.", "Left for the state government: 15,000 − 3,000 = $12,000 million."),
        ],
        result: t(
          "El estado recibe $15,000 millones del Fondo General, entrega $3,000 millones a sus municipios y conserva $12,000 millones de libre disposición.",
          "The state receives $15,000 million from the General Fund, gives $3,000 million to its municipalities and keeps $12,000 million for unrestricted use.",
        ),
      },
      {
        title: t("Reparto con dos criterios", "Allocation with two criteria"),
        problem: t(
          "Un fondo hipotético de $800 millones se reparte 50 % por población y 50 % por pobreza entre dos estados. Estado A: 3 millones de habitantes y 0.6 millones de personas en pobreza. Estado B: 1 millón de habitantes y 0.6 millones en pobreza. ¿Cuánto recibe cada uno?",
          "A hypothetical $800 million fund is allocated 50 % by population and 50 % by poverty between two states. State A: 3 million residents and 0.6 million people in poverty. State B: 1 million residents and 0.6 million in poverty. How much does each receive?",
        ),
        steps: [
          t("Bolsa por población: 800 × 0.5 = 400. A: 400 × 3/4 = 300; B: 400 × 1/4 = 100.", "Population pool: 800 × 0.5 = 400. A: 400 × 3/4 = 300; B: 400 × 1/4 = 100."),
          t("Bolsa por pobreza: 800 × 0.5 = 400. Ambos tienen 0.6 millones (50 % cada uno): A 200, B 200.", "Poverty pool: 800 × 0.5 = 400. Both have 0.6 million (50 % each): A 200, B 200."),
          t("Totales: A = 300 + 200 = $500 millones; B = 100 + 200 = $300 millones.", "Totals: A = 300 + 200 = $500 million; B = 100 + 200 = $300 million."),
        ],
        result: t(
          "A recibe $500 millones y B $300 millones. Por habitante, B recibe más ($300 frente a $167), porque el criterio de pobreza compensa a quien tiene una proporción mayor de población pobre.",
          "A receives $500 million and B $300 million. Per resident, B receives more ($300 versus $167), because the poverty criterion compensates whoever has a larger share of poor population.",
        ),
      },
    ],
    keyPoints: [
      t("Con el SNCF los estados ceden impuestos que se enciman con los federales y reciben parte de la Recaudación Federal Participable.", "Under the SNCF states cede taxes that overlap with federal ones and receive part of the Federal Shareable Revenue."),
      t("Participaciones (Ramo 28): libre disposición; el Fondo General es el principal.", "Revenue shares (Branch 28): unrestricted use; the General Fund is the main one."),
      t("Aportaciones (Ramo 33): etiquetadas a educación, salud, infraestructura social, seguridad y más.", "Earmarked contributions (Branch 33): tied to education, health, social infrastructure, security and more."),
      t("Los estados deben pasar al menos 20 % de sus participaciones a los municipios.", "States must pass at least 20 % of their revenue shares to municipalities."),
      t("Las fórmulas combinan población, esfuerzo recaudatorio y pobreza; el efecto papel matamoscas eleva el gasto local.", "Formulas combine population, collection effort and poverty; the flypaper effect raises local spending."),
    ],
    normativeNote: NOTE_COORD,
    exerciseIds: ['ECO-20-E1', 'ECO-20-E2', 'ECO-20-E3', 'ECO-20-E4', 'ECO-20-E5', 'ECO-20-E6'],
  },

  // ───────────────────────────── ECO-21 ─────────────────────────────
  {
    id: 'ECO-21',
    level: 1,
    topicIds: ['ECO.21'],
    title: t("Deuda pública", "Public debt"),
    summary: t(
      "La deuda pública es lo que el gobierno debe por haber gastado más de lo que ingresó; es sostenible cuando la razón deuda/PIB no crece sin control, lo que depende de la tasa de interés, el crecimiento y el balance primario.",
      "Public debt is what the government owes for having spent more than it took in; it is sustainable when the debt-to-GDP ratio does not grow out of control, which depends on the interest rate, growth and the primary balance.",
    ),
    minutes: 19,
    objectives: [
      t("Definir la deuda pública, sus clasificaciones y los principales instrumentos con que se financia el Gobierno Federal en México.", "Define public debt, its classifications and the main instruments the Mexican Federal Government uses to borrow."),
      t("Distinguir balance primario y balance total y relacionarlos con el cambio en la deuda.", "Distinguish primary balance and overall balance and relate them to the change in debt."),
      t("Calcular la evolución de la razón deuda/PIB y el balance primario que la estabiliza.", "Compute the evolution of the debt-to-GDP ratio and the primary balance that stabilizes it."),
      t("Identificar riesgos de la deuda y los límites legales al endeudamiento de estados y municipios.", "Identify debt risks and the legal limits on state and municipal borrowing."),
    ],
    theory: [
      {
        heading: t("¿Qué es la deuda pública y cómo se financia?", "What is public debt and how is it financed?"),
        body: [
          t(
            "Si este mes gastas más de lo que ganas y lo pagas con tarjeta, terminas con una deuda. Al gobierno le pasa igual: cuando sus gastos superan a sus ingresos tiene un **déficit**, y lo cubre pidiendo prestado. La suma de lo que debe por todos esos préstamos es la **deuda pública**. El déficit es un **flujo** (lo de un año); la deuda es un **saldo** (lo acumulado).",
            "If this month you spend more than you earn and pay with a credit card, you end up in debt. The government is the same: when its spending exceeds its revenue it runs a **deficit**, and it covers it by borrowing. The sum of what it owes for all those loans is **public debt**. The deficit is a **flow** (one year's worth); debt is a **stock** (the accumulated amount).",
          ),
          t(
            "Se clasifica de varias formas: **interna** (con acreedores del país, normalmente en pesos) o **externa** (con acreedores del extranjero, a menudo en dólares u otra moneda); **bruta** (todo lo que se debe) o **neta** (lo que se debe menos los activos financieros del gobierno, como sus depósitos). En México, la medida más amplia que publica Hacienda es el **Saldo Histórico de los Requerimientos Financieros del Sector Público (SHRFSP)**, que incluye pasivos del sector público más allá del gobierno central.",
            "It is classified in several ways: **domestic** (with creditors in the country, usually in pesos) or **external** (with foreign creditors, often in dollars or another currency); **gross** (everything owed) or **net** (what is owed minus the government's financial assets, such as its deposits). In Mexico, the broadest measure the Ministry of Finance publishes is the **Historical Balance of Public Sector Borrowing Requirements (SHRFSP)**, which includes public sector liabilities beyond the central government.",
          ),
          t(
            "El Gobierno Federal se financia sobre todo emitiendo **valores** que compran bancos, afores, fondos e incluso personas: **CETES** (corto plazo, se compran con descuento y no pagan cupones), **Bonos M** (tasa fija en pesos a mediano y largo plazo), **Udibonos** (su valor se mide en UDIS, una unidad que sube con la inflación) y **Bondes** (pagan una tasa variable que se ajusta con las tasas del mercado).",
            "The Federal Government finances itself mainly by issuing **securities** bought by banks, pension funds, investment funds and even individuals: **CETES** (short term, bought at a discount with no coupons), **Bonos M** (fixed rate in pesos, medium and long term), **Udibonos** (their value is measured in UDIS, a unit that rises with inflation) and **Bondes** (they pay a floating rate that adjusts with market rates).",
          ),
          t(
            "Mini ejemplo: un CETE con valor nominal de $10 que compras hoy en $9.80 te paga $10 al vencimiento; tu ganancia es la diferencia de $0.20.",
            "Mini example: a CETE with a $10 face value that you buy today for $9.80 pays you $10 at maturity; your gain is the $0.20 difference.",
          ),
        ],
        bullets: [
          t("Déficit = flujo de un periodo; deuda = saldo acumulado.", "Deficit = flow over a period; debt = accumulated stock."),
          t("Interna vs. externa: por residencia del acreedor (y casi siempre por moneda).", "Domestic vs. external: by creditor residence (and almost always by currency)."),
          t("Bruta vs. neta: neta descuenta los activos financieros del gobierno.", "Gross vs. net: net subtracts the government's financial assets."),
          t("La deuda se compara con el PIB para medir el peso que representa para el país.", "Debt is compared with GDP to measure the burden it represents for the country."),
        ],
      },
      {
        heading: t("Balance primario y dinámica de la deuda", "Primary balance and debt dynamics"),
        body: [
          t(
            "En palabras sencillas: no basta saber cuánto debe el gobierno; hay que compararlo con el tamaño de la economía. El **PIB** es el valor de todo lo que produce el país en un año. La **razón deuda/PIB** dice cuántos pesos debe el gobierno por cada 100 pesos que produce el país, igual que comparar tu deuda de tarjeta con tu sueldo de un año: deber $50,000 no es lo mismo si ganas $100,000 que si ganas $1,000,000.",
            "In simple words: it is not enough to know how much the government owes; you have to compare it with the size of the economy. **GDP** is the value of everything the country produces in a year. The **debt-to-GDP ratio** tells how many pesos the government owes for every 100 pesos the country produces, just like comparing your credit card debt with a year's salary: owing $50,000 is not the same if you earn $100,000 as if you earn $1,000,000.",
          ),
          t(
            "El **balance primario** compara ingresos con gasto **sin contar los intereses** de la deuda. Si es positivo hay **superávit primario**: el gobierno cubre todos sus gastos corrientes y de inversión con sus ingresos. El **balance total** (o financiero) sí resta los intereses. Puede haber superávit primario y aun así déficit total, si los intereses son muy altos.",
            "The **primary balance** compares revenue with spending **excluding interest** on debt. If it is positive there is a **primary surplus**: the government covers all its current and investment spending with its revenue. The **overall** (or financial) **balance** does subtract interest. There can be a primary surplus and still an overall deficit, if interest is very high.",
          ),
          t(
            "Lo que importa no es solo cuántos pesos se deben, sino la **razón deuda/PIB** (d). Cada año, la deuda crece con la **tasa de interés** (r) y el PIB crece con su **tasa de crecimiento nominal** (g). Si r es mayor que g, la razón sube sola aunque no haya déficit primario: es como una bola de nieve. Si g supera a r, la razón tiende a bajar.",
            "What matters is not just how many pesos are owed, but the **debt-to-GDP ratio** (d). Each year, debt grows with the **interest rate** (r) and GDP grows with its **nominal growth rate** (g). If r is greater than g, the ratio rises on its own even without a primary deficit: it is like a snowball. If g exceeds r, the ratio tends to fall.",
          ),
          t(
            "Para que la razón se mantenga estable, el gobierno necesita un **balance primario** (sp, como % del PIB) igual a (r − g) ÷ (1 + g) × d. Mientras mayor sea la deuda o la diferencia entre r y g, mayor el superávit primario necesario.",
            "For the ratio to stay stable, the government needs a **primary balance** (sp, as % of GDP) equal to (r − g) ÷ (1 + g) × d. The larger the debt or the gap between r and g, the larger the primary surplus needed.",
          ),
          t(
            "Mini ejemplo hipotético: con d = 40 %, r = 7 % y g = 7 %, el factor (1 + r)/(1 + g) es 1 y la razón se queda en 40 % si el balance primario es cero.",
            "Hypothetical mini example: with d = 40 %, r = 7 % and g = 7 %, the factor (1 + r)/(1 + g) is 1 and the ratio stays at 40 % if the primary balance is zero.",
          ),
        ],
        formulas: [
          {
            name: t("Balance primario, balance total y deuda al final del año", "Primary balance, overall balance and end-of-year debt"),
            expression: "Balance primario = Ingresos − Gasto sin intereses   ·   Balance total = Balance primario − Intereses   ·   Deuda final = Deuda inicial − Balance total",
            variables: [
              { symbol: "Ingresos", meaning: t("Todo lo que el gobierno cobra en el año (impuestos y otros), en pesos.", "Everything the government collects in the year (taxes and other), in pesos.") },
              { symbol: "Gasto sin intereses", meaning: t("Todo lo que gasta en programas, sueldos, obras, etc., sin contar los intereses de la deuda, en pesos.", "Everything it spends on programs, salaries, public works, etc., not counting interest on debt, in pesos.") },
              { symbol: "Intereses", meaning: t("Lo que paga en el año por el costo de su deuda, en pesos.", "What it pays during the year as the cost of its debt, in pesos.") },
              { symbol: "Balance primario", meaning: t("Positivo = superávit primario; negativo = déficit primario.", "Positive = primary surplus; negative = primary deficit.") },
              { symbol: "Balance total", meaning: t("Positivo = superávit; negativo = déficit, que se cubre pidiendo prestado.", "Positive = surplus; negative = deficit, which is covered by borrowing.") },
              { symbol: "Deuda inicial / Deuda final", meaning: t("Lo que se debía al empezar y al terminar el año, en pesos. Restar un balance negativo equivale a sumar el déficit.", "What was owed at the start and at the end of the year, in pesos. Subtracting a negative balance is the same as adding the deficit.") },
            ],
            steps: [
              t("Calcula el balance primario: ingresos − gasto sin intereses.", "Compute the primary balance: revenue − non-interest spending."),
              t("Réstale los intereses para obtener el balance total.", "Subtract interest to get the overall balance."),
              t("Si el balance total es negativo (déficit), súmalo a la deuda inicial; si es positivo, la deuda baja.", "If the overall balance is negative (deficit), add it to the starting debt; if positive, debt falls."),
            ],
            example: t(
              "Cifras hipotéticas en miles de millones: ingresos 3,000; gasto sin intereses 2,850; intereses 260; deuda inicial 6,000. Balance primario = 3,000 − 2,850 = **+150** (superávit). Balance total = 150 − 260 = **−110** (déficit). Deuda final = 6,000 + 110 = **6,110**.",
              "Hypothetical figures in billions: revenue 3,000; non-interest spending 2,850; interest 260; starting debt 6,000. Primary balance = 3,000 − 2,850 = **+150** (surplus). Overall balance = 150 − 260 = **−110** (deficit). Ending debt = 6,000 + 110 = **6,110**.",
            ),
            mistake: t(
              "Sumar todos los intereses a la deuda sin descontar el superávit primario que ayudó a pagarlos.",
              "Adding all the interest to debt without subtracting the primary surplus that helped pay it.",
            ),
          },
          {
            name: t("Razón deuda/PIB del próximo año", "Next year's debt-to-GDP ratio"),
            expression: "d(t+1) = d(t) × (1 + r) ÷ (1 + g) − sp",
            variables: [
              { symbol: "d(t)", meaning: t("Deuda de este año como % del PIB (por ejemplo, 50).", "This year's debt as % of GDP (for example, 50).") },
              { symbol: "d(t+1)", meaning: t("Deuda del próximo año como % del PIB.", "Next year's debt as % of GDP.") },
              { symbol: "r", meaning: t("Tasa de interés nominal que paga la deuda, en decimal (8 % = 0.08).", "Nominal interest rate paid on the debt, as a decimal (8 % = 0.08).") },
              { symbol: "g", meaning: t("Crecimiento nominal del PIB en el año, en decimal (5 % = 0.05).", "Nominal GDP growth in the year, as a decimal (5 % = 0.05).") },
              { symbol: "sp", meaning: t("Balance primario como % del PIB: positivo si es superávit (baja la deuda), negativo si es déficit (la sube).", "Primary balance as % of GDP: positive if a surplus (lowers debt), negative if a deficit (raises it).") },
            ],
            steps: [
              t("Convierte r y g a decimales.", "Convert r and g to decimals."),
              t("Calcula el factor: (1 + r) ÷ (1 + g).", "Compute the factor: (1 + r) ÷ (1 + g)."),
              t("Multiplica la deuda actual d(t) por ese factor.", "Multiply current debt d(t) by that factor."),
              t("Resta el balance primario sp (si es cero, no restas nada).", "Subtract the primary balance sp (if it is zero, subtract nothing)."),
            ],
            example: t(
              "d = 40 % del PIB, r = 9 % y g = 4 %, con superávit primario de 0.5 % del PIB. Factor = 1.09 ÷ 1.04 = 1.0481. 40 × 1.0481 = 41.92. Nueva razón = 41.92 − 0.5 = **41.42 % del PIB**.",
              "d = 40 % of GDP, r = 9 % and g = 4 %, with a primary surplus of 0.5 % of GDP. Factor = 1.09 ÷ 1.04 = 1.0481. 40 × 1.0481 = 41.92. New ratio = 41.92 − 0.5 = **41.42 % of GDP**.",
            ),
            interpret: t(
              "Si el factor es mayor que 1 (r > g), la deuda crece sola como bola de nieve; si es menor que 1 (g > r), tiende a bajar sola.",
              "If the factor is greater than 1 (r > g), debt grows on its own like a snowball; if it is less than 1 (g > r), it tends to fall on its own.",
            ),
            mistake: t(
              "Sumar solo la diferencia r − g a la deuda (40 + 5) o multiplicar por (1 + r − g) sin dividir entre (1 + g).",
              "Just adding the gap r − g to debt (40 + 5) or multiplying by (1 + r − g) without dividing by (1 + g).",
            ),
          },
          {
            name: t("Superávit primario que estabiliza la deuda", "Primary surplus that stabilizes debt"),
            expression: "sp estabilizador = (r − g) ÷ (1 + g) × d",
            variables: [
              { symbol: "sp estabilizador", meaning: t("El balance primario (% del PIB) que deja la razón deuda/PIB igual de un año a otro.", "The primary balance (% of GDP) that keeps the debt-to-GDP ratio the same from one year to the next.") },
              { symbol: "r", meaning: t("Tasa de interés nominal, en decimal.", "Nominal interest rate, as a decimal.") },
              { symbol: "g", meaning: t("Crecimiento nominal del PIB, en decimal.", "Nominal GDP growth, as a decimal.") },
              { symbol: "d", meaning: t("Deuda actual como % del PIB.", "Current debt as % of GDP.") },
            ],
            steps: [
              t("Resta r − g (en decimales).", "Subtract r − g (as decimals)."),
              t("Divide el resultado entre (1 + g).", "Divide the result by (1 + g)."),
              t("Multiplica por la deuda d: el resultado ya queda en % del PIB.", "Multiply by debt d: the result is already in % of GDP."),
            ],
            example: t(
              "d = 70 % del PIB, r = 8 %, g = 5 %. r − g = 0.08 − 0.05 = 0.03. 0.03 ÷ 1.05 = 0.02857. 0.02857 × 70 = **2.00 % del PIB** de superávit primario.",
              "d = 70 % of GDP, r = 8 %, g = 5 %. r − g = 0.08 − 0.05 = 0.03. 0.03 ÷ 1.05 = 0.02857. 0.02857 × 70 = **2.00 % of GDP** primary surplus.",
            ),
            interpret: t(
              "Si el resultado es positivo, el gobierno necesita ese superávit para que la deuda no suba. Si es negativo (g > r), podría tener un pequeño déficit primario y aun así mantener estable la razón.",
              "If the result is positive, the government needs that surplus so debt does not rise. If negative (g > r), it could run a small primary deficit and still keep the ratio stable.",
            ),
            mistake: t(
              "Olvidar dividir entre (1 + g) y calcular solo (r − g) × d.",
              "Forgetting to divide by (1 + g) and computing only (r − g) × d.",
            ),
          },
        ],
      },
      {
        heading: t("Sostenibilidad, riesgos y límites legales", "Sustainability, risks and legal limits"),
        body: [
          t(
            "Una deuda es **sostenible** cuando el gobierno puede pagarla sin tener que hacer ajustes imposibles ni dejar de pagar. Además del nivel, importa su **composición**, porque trae riesgos: **riesgo cambiario** (si la deuda está en dólares y el peso se deprecia, en pesos se debe más), **riesgo de refinanciamiento** (si mucha deuda vence pronto y el mercado no quiere renovarla) y **riesgo de tasa** (si la deuda es a tasa variable y las tasas suben).",
            "A debt is **sustainable** when the government can pay it without impossible adjustments or defaulting. Besides the level, its **composition** matters, because it carries risks: **exchange rate risk** (if debt is in dollars and the peso depreciates, more is owed in pesos), **rollover risk** (if much debt matures soon and the market does not want to renew it) and **interest rate risk** (if debt is at a floating rate and rates rise).",
          ),
          t(
            "Las **agencias calificadoras** evalúan la capacidad de pago y asignan calificaciones; una baja suele encarecer el crédito. Un gobierno muy endeudado también puede **desplazar** (crowding out) la inversión privada, porque compite por el ahorro y presiona las tasas al alza.",
            "**Credit rating agencies** assess repayment capacity and assign ratings; a downgrade usually makes borrowing more expensive. A heavily indebted government can also **crowd out** private investment, because it competes for savings and pushes rates up.",
          ),
          t(
            "En México, el **Congreso** aprueba cada año los montos de endeudamiento de la Federación. Para estados y municipios, la Constitución (artículo 117) les prohíbe contraer deuda con **gobiernos, empresas o personas extranjeras** o en **moneda extranjera**, y solo pueden endeudarse para **inversiones públicas productivas** (y refinanciamientos). La **Ley de Disciplina Financiera de las Entidades Federativas y los Municipios** añade reglas de balance, un registro de deuda y un **sistema de alertas** que limita cuánto más puede pedir prestado un gobierno local según su nivel de endeudamiento.",
            "In Mexico, **Congress** approves the Federation's borrowing amounts every year. For states and municipalities, the Constitution (article 117) forbids borrowing from **foreign governments, companies or individuals** or in **foreign currency**, and they may only borrow for **productive public investment** (and refinancing). The **Financial Discipline Law for States and Municipalities** adds balance rules, a debt registry and an **alert system** that limits how much more a local government can borrow depending on its level of indebtedness.",
          ),
          t(
            "Mini ejemplo hipotético: un gobierno debe 1,000 millones de dólares con un tipo de cambio de 18 pesos por dólar (18,000 millones de pesos). Si el tipo de cambio sube a 20, la misma deuda vale 20,000 millones de pesos sin haber pedido un dólar más.",
            "Hypothetical mini example: a government owes 1,000 million dollars at an exchange rate of 18 pesos per dollar (18,000 million pesos). If the exchange rate rises to 20, the same debt is worth 20,000 million pesos without borrowing a single extra dollar.",
          ),
        ],
      },
    ],
    examples: [
      {
        title: t("La bola de nieve de la deuda", "The debt snowball"),
        problem: t(
          "Un país hipotético tiene deuda de 60 % del PIB, paga una tasa de interés nominal de 10 % y su PIB nominal crece 6 %. Tiene balance primario cero. ¿Cuál será su razón deuda/PIB el próximo año? ¿Qué superávit primario la estabilizaría?",
          "A hypothetical country has debt of 60 % of GDP, pays a nominal interest rate of 10 % and its nominal GDP grows 6 %. It has a zero primary balance. What will its debt-to-GDP ratio be next year? What primary surplus would stabilize it?",
        ),
        steps: [
          t("Factor: (1 + 0.10) ÷ (1 + 0.06) = 1.10 ÷ 1.06 = 1.0377.", "Factor: (1 + 0.10) ÷ (1 + 0.06) = 1.10 ÷ 1.06 = 1.0377."),
          t("Nueva razón: 60 × 1.0377 − 0 = 62.26 % del PIB.", "New ratio: 60 × 1.0377 − 0 = 62.26 % of GDP."),
          t("Superávit estabilizador: (0.10 − 0.06) ÷ 1.06 × 60 = 0.0377 × 60 = 2.26 % del PIB.", "Stabilizing surplus: (0.10 − 0.06) ÷ 1.06 × 60 = 0.0377 × 60 = 2.26 % of GDP."),
        ],
        result: t(
          "Sin ajuste, la deuda sube a 62.26 % del PIB. Para frenarla, el gobierno necesita un superávit primario de 2.26 % del PIB, o lograr que el crecimiento alcance a la tasa de interés.",
          "Without adjustment, debt rises to 62.26 % of GDP. To stop it, the government needs a primary surplus of 2.26 % of GDP, or growth that catches up with the interest rate.",
        ),
      },
      {
        title: t("Superávit primario con déficit total", "Primary surplus with an overall deficit"),
        problem: t(
          "Un gobierno hipotético tiene ingresos por $6,000 mil millones, gasto sin intereses de $5,800 mil millones e intereses de $500 mil millones. Su deuda al inicio del año es $10,000 mil millones. Calcula el balance primario, el balance total y la deuda al final del año (si el déficit se cubre con nueva deuda).",
          "A hypothetical government has revenue of $6,000 billion, non-interest spending of $5,800 billion and interest of $500 billion. Its debt at the start of the year is $10,000 billion. Compute the primary balance, the overall balance and end-of-year debt (if the deficit is covered with new debt).",
        ),
        steps: [
          t("Balance primario: 6,000 − 5,800 = +200 (superávit).", "Primary balance: 6,000 − 5,800 = +200 (surplus)."),
          t("Balance total: 200 − 500 = −300 (déficit).", "Overall balance: 200 − 500 = −300 (deficit)."),
          t("Deuda final: 10,000 + 300 = 10,300.", "Ending debt: 10,000 + 300 = 10,300."),
        ],
        result: t(
          "Aunque el gobierno gasta menos de lo que ingresa en sus programas, los intereses lo llevan a un déficit total de $300 mil millones y su deuda sube a $10,300 mil millones.",
          "Even though the government spends less than it takes in on its programs, interest pushes it into an overall deficit of $300 billion and its debt rises to $10,300 billion.",
        ),
      },
    ],
    keyPoints: [
      t("El déficit es un flujo; la deuda es el saldo acumulado de déficits pasados.", "The deficit is a flow; debt is the accumulated stock of past deficits."),
      t("CETES, Bonos M, Udibonos y Bondes son los principales valores del Gobierno Federal.", "CETES, Bonos M, Udibonos and Bondes are the Federal Government's main securities."),
      t("Balance total = balance primario − intereses.", "Overall balance = primary balance − interest."),
      t("Si r > g, la razón deuda/PIB sube sola; se estabiliza con sp = (r − g) ÷ (1 + g) × d.", "If r > g, the debt-to-GDP ratio rises on its own; it stabilizes with sp = (r − g) ÷ (1 + g) × d."),
      t("Riesgos clave: cambiario, de refinanciamiento y de tasa.", "Key risks: exchange rate, rollover and interest rate."),
      t("Estados y municipios solo pueden endeudarse en pesos, con acreedores nacionales y para inversión pública productiva.", "States and municipalities may only borrow in pesos, from domestic creditors and for productive public investment."),
    ],
    normativeNote: NOTE_DEBT,
    exerciseIds: ['ECO-21-E1', 'ECO-21-E2', 'ECO-21-E3', 'ECO-21-E4', 'ECO-21-E5', 'ECO-21-E6'],
  },

  // ───────────────────────────── ECO-22 ─────────────────────────────
  {
    id: 'ECO-22',
    level: 1,
    topicIds: ['ECO.22'],
    title: t("Desarrollo económico", "Economic development"),
    summary: t(
      "El desarrollo económico va más allá de que crezca el PIB: busca que la gente viva más, mejor educada, con ingresos suficientes, menos pobreza y desigualdad y sin agotar los recursos de las generaciones futuras.",
      "Economic development goes beyond GDP growth: it seeks for people to live longer, better educated, with sufficient income, less poverty and inequality and without depleting the resources of future generations.",
    ),
    minutes: 17,
    objectives: [
      t("Distinguir crecimiento de desarrollo económico y explicar por qué el PIB no basta.", "Distinguish economic growth from development and explain why GDP is not enough."),
      t("Calcular e interpretar el Índice de Desarrollo Humano, el crecimiento per cápita y el coeficiente de Gini.", "Compute and interpret the Human Development Index, per capita growth and the Gini coefficient."),
      t("Reconocer las principales teorías del desarrollo y su relación con la historia económica de México.", "Recognize the main development theories and their relation to Mexico's economic history."),
      t("Explicar el concepto de desarrollo sostenible y los Objetivos de Desarrollo Sostenible.", "Explain the concept of sustainable development and the Sustainable Development Goals."),
    ],
    theory: [
      {
        heading: t("Crecimiento no es lo mismo que desarrollo", "Growth is not the same as development"),
        body: [
          t(
            "El **crecimiento económico** es que aumente la producción (el PIB). El **desarrollo económico** es más amplio: que esa producción se traduzca en **mejores condiciones de vida** para la mayoría: salud, educación, vivienda, ingresos dignos, menos pobreza. Un país puede crecer mucho gracias al petróleo y, aun así, tener escuelas malas y hospitales lejanos.",
            "**Economic growth** means production (GDP) increases. **Economic development** is broader: that production translates into **better living conditions** for most people: health, education, housing, decent income, less poverty. A country can grow a lot thanks to oil and still have poor schools and distant hospitals.",
          ),
          t(
            "Para medir el desarrollo se usan varios indicadores. El **PIB per cápita** divide la producción entre la población; su crecimiento es aproximadamente el crecimiento del PIB menos el de la población. El **coeficiente de Gini** mide la desigualdad del ingreso: va de **0** (todos ganan lo mismo) a **1** (una persona lo tiene todo). En México, la **pobreza** se mide de forma **multidimensional**: no solo por ingreso, sino también por carencias sociales como acceso a salud, seguridad social, educación, vivienda, servicios básicos y alimentación.",
            "Several indicators are used to measure development. **GDP per capita** divides output by population; its growth is approximately GDP growth minus population growth. The **Gini coefficient** measures income inequality: it ranges from **0** (everyone earns the same) to **1** (one person has everything). In Mexico, **poverty** is measured in a **multidimensional** way: not only by income, but also by social deprivations such as access to health, social security, education, housing, basic services and food.",
          ),
          t(
            "El **Índice de Desarrollo Humano (IDH)** del Programa de las Naciones Unidas para el Desarrollo (PNUD) combina tres dimensiones: **vida larga y saludable** (esperanza de vida), **conocimientos** (años de escolaridad) y **nivel de vida digno** (ingreso per cápita). Cada dimensión se convierte en un índice de 0 a 1 y el IDH es su **media geométrica**, así que una dimensión muy baja no se compensa del todo con otra alta.",
            "The **Human Development Index (HDI)** of the United Nations Development Programme (UNDP) combines three dimensions: **a long and healthy life** (life expectancy), **knowledge** (years of schooling) and **a decent standard of living** (income per capita). Each dimension is turned into an index from 0 to 1 and the HDI is their **geometric mean**, so a very low dimension is not fully offset by a high one.",
          ),
          t(
            "Mini ejemplo hipotético: si el PIB crece 4 % y la población 1 %, el PIB per cápita crece cerca de 3 %; si la población creciera 4 %, el ingreso por persona casi no mejoraría.",
            "Hypothetical mini example: if GDP grows 4 % and population 1 %, GDP per capita grows about 3 %; if population grew 4 %, income per person would barely improve.",
          ),
        ],
        formulas: [
          {
            name: t("Índice de una dimensión del IDH", "Index of one HDI dimension"),
            expression: "Índice de dimensión = (valor − mínimo) ÷ (máximo − mínimo)",
            variables: [
              { symbol: "valor", meaning: t("El dato real de la región (por ejemplo, esperanza de vida en años).", "The region's actual figure (for example, life expectancy in years).") },
              { symbol: "mínimo", meaning: t("El valor de referencia más bajo que fija el método (por ejemplo, 20 años).", "The lowest reference value set by the method (for example, 20 years).") },
              { symbol: "máximo", meaning: t("El valor de referencia más alto (por ejemplo, 85 años).", "The highest reference value (for example, 85 years).") },
              { symbol: "Índice de dimensión", meaning: t("Un número entre 0 y 1 que dice qué tan cerca está la región del máximo.", "A number between 0 and 1 that says how close the region is to the maximum.") },
            ],
            steps: [
              t("Resta el mínimo al valor real.", "Subtract the minimum from the actual value."),
              t("Resta el mínimo al máximo.", "Subtract the minimum from the maximum."),
              t("Divide el primer resultado entre el segundo.", "Divide the first result by the second."),
            ],
            example: t(
              "Esperanza de vida de 70 años, mínimo 20 y máximo 85. 70 − 20 = 50. 85 − 20 = 65. Índice de salud = 50 ÷ 65 = **0.769**.",
              "Life expectancy of 70 years, minimum 20 and maximum 85. 70 − 20 = 50. 85 − 20 = 65. Health index = 50 ÷ 65 = **0.769**.",
            ),
            mistake: t(
              "Dividir el valor entre el máximo (70 ÷ 85) sin restar el mínimo.",
              "Dividing the value by the maximum (70 ÷ 85) without subtracting the minimum.",
            ),
          },
          {
            name: t("Índice de Desarrollo Humano (IDH)", "Human Development Index (HDI)"),
            expression: "IDH = (I salud × I educación × I ingreso)^(1/3)",
            variables: [
              { symbol: "I salud", meaning: t("Índice de salud (0 a 1), sale de la esperanza de vida.", "Health index (0 to 1), from life expectancy.") },
              { symbol: "I educación", meaning: t("Índice de educación (0 a 1), sale de los años de escolaridad.", "Education index (0 to 1), from years of schooling.") },
              { symbol: "I ingreso", meaning: t("Índice de ingreso (0 a 1), sale del ingreso per cápita.", "Income index (0 to 1), from income per capita.") },
              { symbol: "^(1/3)", meaning: t("Raíz cúbica: el número que, multiplicado por sí mismo tres veces, da el producto. Es la media geométrica de tres números.", "Cube root: the number that, multiplied by itself three times, gives the product. It is the geometric mean of three numbers.") },
            ],
            steps: [
              t("Calcula o toma los tres índices (cada uno entre 0 y 1).", "Compute or take the three indices (each between 0 and 1)."),
              t("Multiplícalos entre sí.", "Multiply them together."),
              t("Saca la raíz cúbica del producto (en calculadora: producto ^ (1/3)).", "Take the cube root of the product (on a calculator: product ^ (1/3))."),
            ],
            example: t(
              "I salud = 0.769, I educación = 0.65, I ingreso = 0.72. Producto = 0.769 × 0.65 × 0.72 = 0.360. Raíz cúbica: 0.360^(1/3) ≈ **0.711**. El promedio simple daría 0.713, un poco más.",
              "Health = 0.769, education = 0.65, income = 0.72. Product = 0.769 × 0.65 × 0.72 = 0.360. Cube root: 0.360^(1/3) ≈ **0.711**. The simple average would give 0.713, slightly more.",
            ),
            interpret: t(
              "Más cerca de 1 = más desarrollo humano. Como es media geométrica, una dimensión muy baja jala el IDH hacia abajo aunque las otras sean altas.",
              "Closer to 1 = more human development. Because it is a geometric mean, one very low dimension pulls the HDI down even if the others are high.",
            ),
            mistake: t(
              "Sacar el promedio simple (sumar y dividir entre 3) en lugar de multiplicar y sacar raíz cúbica.",
              "Taking the simple average (adding and dividing by 3) instead of multiplying and taking the cube root.",
            ),
          },
          {
            name: t("Crecimiento del PIB per cápita (fórmula exacta)", "GDP per capita growth (exact formula)"),
            expression: "Crec. per cápita = (1 + g PIB) ÷ (1 + g población) − 1",
            variables: [
              { symbol: "g PIB", meaning: t("Crecimiento del PIB en el año, en decimal (3.5 % = 0.035).", "GDP growth in the year, as a decimal (3.5 % = 0.035).") },
              { symbol: "g población", meaning: t("Crecimiento de la población en el año, en decimal.", "Population growth in the year, as a decimal.") },
              { symbol: "Crec. per cápita", meaning: t("Cuánto creció la producción por persona, en decimal; multiplícalo por 100 para tenerlo en %.", "How much output per person grew, as a decimal; multiply by 100 to get it in %.") },
            ],
            steps: [
              t("Convierte ambos crecimientos a decimal y súmales 1.", "Convert both growth rates to decimals and add 1 to each."),
              t("Divide (1 + g PIB) entre (1 + g población).", "Divide (1 + GDP g) by (1 + population g)."),
              t("Resta 1 y multiplica por 100 para expresarlo en %.", "Subtract 1 and multiply by 100 to express it in %."),
            ],
            example: t(
              "El PIB crece 4.2 % y la población 1.2 %. 1.042 ÷ 1.012 = 1.02964. 1.02964 − 1 = 0.02964 → **2.96 %**. La aproximación rápida (4.2 − 1.2 = 3 %) es cercana, pero no exacta.",
              "GDP grows 4.2 % and population 1.2 %. 1.042 ÷ 1.012 = 1.02964. 1.02964 − 1 = 0.02964 → **2.96 %**. The quick approximation (4.2 − 1.2 = 3 %) is close, but not exact.",
            ),
            interpret: t(
              "Si sale positivo, en promedio cada persona tiene más producción; si sale cerca de cero o negativo, la población creció tan rápido como la economía o más.",
              "If positive, on average each person has more output; if near zero or negative, population grew as fast as the economy or faster.",
            ),
            mistake: t(
              "Sumar los dos crecimientos: más población no sube el ingreso por persona, lo reparte entre más gente.",
              "Adding the two growth rates: more population does not raise income per person, it spreads it among more people.",
            ),
          },
        ],
      },
      {
        heading: t("Teorías del desarrollo", "Development theories"),
        body: [
          t(
            "**Walt Rostow** propuso que los países pasan por **etapas**: sociedad tradicional, condiciones previas, **despegue**, camino a la madurez y consumo en masa. Su idea clave: con suficiente inversión, cualquier país puede \"despegar\". La crítica: no todos siguen el mismo camino.",
            "**Walt Rostow** proposed that countries pass through **stages**: traditional society, preconditions, **take-off**, drive to maturity and mass consumption. His key idea: with enough investment, any country can \"take off\". The criticism: not all follow the same path.",
          ),
          t(
            "**Arthur Lewis** describió una **economía dual**: un sector tradicional (agricultura de subsistencia) con mano de obra sobrante y un sector moderno (industria) que crece absorbiéndola. La **CEPAL**, con **Raúl Prebisch**, sostuvo que los países que exportan materias primas sufren un **deterioro de los términos de intercambio** (sus exportaciones compran cada vez menos importaciones industriales) y recomendó la **industrialización por sustitución de importaciones**: producir en casa lo que se importaba, con protección arancelaria. México aplicó esta estrategia durante buena parte del siglo XX, incluido el periodo conocido como **desarrollo estabilizador**, y desde los años ochenta giró hacia la **apertura comercial**.",
            "**Arthur Lewis** described a **dual economy**: a traditional sector (subsistence farming) with surplus labor and a modern sector (industry) that grows by absorbing it. **ECLAC**, with **Raúl Prebisch**, argued that countries exporting raw materials suffer a **deterioration in the terms of trade** (their exports buy fewer and fewer industrial imports) and recommended **import-substituting industrialization**: producing at home what used to be imported, with tariff protection. Mexico applied this strategy for much of the 20th century, including the period known as **stabilizing development**, and from the 1980s turned toward **trade opening**.",
          ),
          t(
            "**Amartya Sen** definió el desarrollo como la ampliación de las **capacidades** y libertades de las personas: lo que realmente pueden ser y hacer (estar sanas, leer, participar). Esta idea inspiró el IDH. Más recientemente, autores como **Acemoglu y Robinson** destacan las **instituciones**: países con reglas **inclusivas** (derechos de propiedad seguros, Estado de derecho, competencia) prosperan más que aquellos con instituciones **extractivas** que benefician a unos cuantos.",
            "**Amartya Sen** defined development as the expansion of people's **capabilities** and freedoms: what they can actually be and do (be healthy, read, participate). This idea inspired the HDI. More recently, authors such as **Acemoglu and Robinson** highlight **institutions**: countries with **inclusive** rules (secure property rights, rule of law, competition) prosper more than those with **extractive** institutions that benefit a few.",
          ),
          t(
            "Mini ejemplo: cuando un campesino de Oaxaca migra a trabajar a una fábrica de Querétaro y su productividad sube, se ilustra la economía dual de Lewis.",
            "Mini example: when a farmer from Oaxaca migrates to work in a factory in Querétaro and his productivity rises, Lewis's dual economy is illustrated.",
          ),
        ],
      },
      {
        heading: t("Desarrollo sostenible y desarrollo regional", "Sustainable and regional development"),
        body: [
          t(
            "El informe Brundtland de Naciones Unidas (1987) definió el **desarrollo sostenible** como el que **satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras** para satisfacer las suyas. Tiene tres pilares: **económico**, **social** y **ambiental**. Un país que crece talando sus bosques y contaminando sus ríos está consumiendo su capital natural.",
            "The UN Brundtland report (1987) defined **sustainable development** as that which **meets the needs of the present without compromising the ability of future generations** to meet their own. It has three pillars: **economic**, **social** and **environmental**. A country that grows by cutting down its forests and polluting its rivers is consuming its natural capital.",
          ),
          t(
            "En 2015 los países de la ONU adoptaron la **Agenda 2030** con **17 Objetivos de Desarrollo Sostenible (ODS)**, como fin de la pobreza, hambre cero, salud, educación de calidad, igualdad de género, agua limpia, energía asequible y no contaminante, y acción por el clima.",
            "In 2015 UN member countries adopted the **2030 Agenda** with **17 Sustainable Development Goals (SDGs)**, such as no poverty, zero hunger, health, quality education, gender equality, clean water, affordable and clean energy, and climate action.",
          ),
          t(
            "México tiene además un reto de **desarrollo regional**: hay grandes diferencias de ingreso, infraestructura y pobreza entre los estados del norte y centro y los del sur y sureste. Cerrar esas brechas requiere inversión en infraestructura, educación, conectividad e instituciones locales; para que un estado rezagado alcance a otro, su ingreso per cápita debe crecer **más rápido** por mucho tiempo (**convergencia**).",
            "Mexico also faces a **regional development** challenge: there are large gaps in income, infrastructure and poverty between northern and central states and southern and southeastern ones. Closing those gaps requires investment in infrastructure, education, connectivity and local institutions; for a lagging state to catch up with another, its per capita income must grow **faster** for a long time (**convergence**).",
          ),
          t(
            "Mini ejemplo hipotético: si un estado tiene un ingreso per cápita de $100,000 y otro de $200,000, y ambos crecen 2 % al año, la brecha en pesos nunca se cierra; solo hay convergencia si el rezagado crece más rápido.",
            "Hypothetical mini example: if one state has per capita income of $100,000 and another $200,000, and both grow 2 % a year, the gap in pesos never closes; there is only convergence if the lagging one grows faster.",
          ),
        ],
        bullets: [
          t("Pilar económico: producción y empleo que perduren.", "Economic pillar: lasting production and jobs."),
          t("Pilar social: inclusión, menos pobreza y desigualdad.", "Social pillar: inclusion, less poverty and inequality."),
          t("Pilar ambiental: cuidar el agua, el aire, los suelos y el clima.", "Environmental pillar: care for water, air, soil and climate."),
        ],
      },
    ],
    examples: [
      {
        title: t("Calcular un IDH", "Computing an HDI"),
        problem: t(
          "Una región hipotética tiene esperanza de vida de 78 años. Usa como referencia un mínimo de 20 y un máximo de 85 años. Su índice de educación es 0.70 y su índice de ingreso es 0.80. Calcula el índice de salud y el IDH.",
          "A hypothetical region has a life expectancy of 78 years. Use a reference minimum of 20 and a maximum of 85 years. Its education index is 0.70 and its income index is 0.80. Compute the health index and the HDI.",
        ),
        steps: [
          t("Índice de salud: (78 − 20) ÷ (85 − 20) = 58 ÷ 65 = 0.892.", "Health index: (78 − 20) ÷ (85 − 20) = 58 ÷ 65 = 0.892."),
          t("Producto: 0.892 × 0.70 × 0.80 = 0.4997.", "Product: 0.892 × 0.70 × 0.80 = 0.4997."),
          t("Raíz cúbica: 0.4997^(1/3) ≈ 0.794.", "Cube root: 0.4997^(1/3) ≈ 0.794."),
          t("Comparación: el promedio simple sería (0.892 + 0.70 + 0.80) ÷ 3 = 0.797, un poco mayor.", "Comparison: the simple average would be (0.892 + 0.70 + 0.80) ÷ 3 = 0.797, slightly higher."),
        ],
        result: t(
          "El IDH es aproximadamente 0.794. La media geométrica castiga la dimensión más débil (educación), por eso queda por debajo del promedio simple.",
          "The HDI is approximately 0.794. The geometric mean penalizes the weakest dimension (education), which is why it ends up below the simple average.",
        ),
      },
      {
        title: t("¿Crecimiento con desarrollo?", "Growth with development?"),
        problem: t(
          "En un país hipotético el PIB creció 5 % en un año y la población 2 %. Al mismo tiempo, su coeficiente de Gini pasó de 0.42 a 0.48. Calcula el crecimiento del PIB per cápita e interpreta si hubo desarrollo.",
          "In a hypothetical country GDP grew 5 % in one year and population 2 %. At the same time, its Gini coefficient went from 0.42 to 0.48. Compute GDP per capita growth and interpret whether there was development.",
        ),
        steps: [
          t("Crecimiento per cápita: 1.05 ÷ 1.02 − 1 = 0.0294 → 2.94 %.", "Per capita growth: 1.05 ÷ 1.02 − 1 = 0.0294 → 2.94 %."),
          t("El Gini subió de 0.42 a 0.48: la desigualdad aumentó.", "The Gini rose from 0.42 to 0.48: inequality increased."),
          t("Conclusión: el ingreso promedio subió, pero se concentró más en los que más tienen.", "Conclusion: average income rose, but it became more concentrated among those who have the most."),
        ],
        result: t(
          "Hubo crecimiento per cápita de 2.94 %, pero no necesariamente desarrollo: hay que revisar si la pobreza y el acceso a servicios mejoraron para la mayoría.",
          "There was per capita growth of 2.94 %, but not necessarily development: you must check whether poverty and access to services improved for the majority.",
        ),
      },
    ],
    keyPoints: [
      t("Crecimiento = más producción; desarrollo = mejores condiciones de vida para la mayoría.", "Growth = more output; development = better living conditions for the majority."),
      t("El IDH es la media geométrica de los índices de salud, educación e ingreso.", "The HDI is the geometric mean of the health, education and income indices."),
      t("El Gini va de 0 (igualdad total) a 1 (desigualdad total); en México la pobreza se mide de forma multidimensional.", "The Gini ranges from 0 (total equality) to 1 (total inequality); in Mexico poverty is measured multidimensionally."),
      t("Teorías: etapas (Rostow), economía dual (Lewis), CEPAL y sustitución de importaciones, capacidades (Sen), instituciones.", "Theories: stages (Rostow), dual economy (Lewis), ECLAC and import substitution, capabilities (Sen), institutions."),
      t("Desarrollo sostenible: cubrir hoy las necesidades sin comprometer a las generaciones futuras; Agenda 2030 con 17 ODS.", "Sustainable development: meet today's needs without compromising future generations; 2030 Agenda with 17 SDGs."),
    ],
    normativeNote: NOTE_DEV,
    exerciseIds: ['ECO-22-E1', 'ECO-22-E2', 'ECO-22-E3', 'ECO-22-E4', 'ECO-22-E5', 'ECO-22-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ ECO-19 ═════════════════════════
  {
    id: 'ECO-19-E1',
    level: 1,
    module: 'ECO-19',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "Según el principio de correspondencia del federalismo fiscal, ¿qué orden de gobierno debería encargarse del alumbrado público de una colonia?",
      "According to the fiscal federalism correspondence principle, which order of government should be in charge of a neighborhood's street lighting?",
    ),
    options: [
      { id: 'ECO-19-E1-a', text: t("La Federación, porque tiene más recursos", "The Federation, because it has more resources") },
      { id: 'ECO-19-E1-b', text: t("El municipio, porque los beneficiarios son los vecinos de su territorio", "The municipality, because the beneficiaries are residents of its territory") },
      { id: 'ECO-19-E1-c', text: t("El estado, porque todos los servicios se coordinan desde la capital estatal", "The state, because all services are coordinated from the state capital") },
      { id: 'ECO-19-E1-d', text: t("El banco central, porque se paga con dinero público", "The central bank, because it is paid with public money") },
    ],
    correctOptionId: 'ECO-19-E1-b',
    explanation: t(
      "El principio de correspondencia asigna cada servicio al gobierno más cercano cuya área coincide con quienes se benefician: el alumbrado de una colonia beneficia a vecinos del municipio. Error común: pensar que el servicio lo debe dar quien tiene más dinero; tener más recursos no significa conocer mejor las necesidades locales.",
      "The correspondence principle assigns each service to the closest government whose area matches those who benefit: a neighborhood's lighting benefits municipal residents. Common mistake: thinking whoever has more money should provide it; having more resources does not mean knowing local needs better.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fiscal-federalism',
  },
  {
    id: 'ECO-19-E2',
    level: 1,
    module: 'ECO-19',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada impuesto según el orden de gobierno que normalmente lo cobra en México.",
      "Classify each tax by the order of government that normally levies it in Mexico.",
    ),
    categories: [
      { id: 'ECO-19-E2-c1', label: t("Federación", "Federation") },
      { id: 'ECO-19-E2-c2', label: t("Estado", "State") },
      { id: 'ECO-19-E2-c3', label: t("Municipio", "Municipality") },
    ],
    items: [
      { id: 'ECO-19-E2-i1', label: t("IVA de la compra de una lavadora", "VAT on buying a washing machine"), correctCategoryId: 'ECO-19-E2-c1' },
      { id: 'ECO-19-E2-i2', label: t("Impuesto sobre nóminas que paga una fábrica por sus trabajadores", "Payroll tax a factory pays for its workers"), correctCategoryId: 'ECO-19-E2-c2' },
      { id: 'ECO-19-E2-i3', label: t("Predial anual de una casa", "Annual property tax on a house"), correctCategoryId: 'ECO-19-E2-c3' },
      { id: 'ECO-19-E2-i4', label: t("Impuesto general de importación por traer maquinaria del extranjero", "General import duty for bringing machinery from abroad"), correctCategoryId: 'ECO-19-E2-c1' },
      { id: 'ECO-19-E2-i5', label: t("Impuesto por adquisición de inmuebles al comprar un terreno", "Real estate acquisition tax when buying a plot"), correctCategoryId: 'ECO-19-E2-c3' },
      { id: 'ECO-19-E2-i6', label: t("Impuesto sobre hospedaje que se cobra en un hotel", "Lodging tax charged at a hotel"), correctCategoryId: 'ECO-19-E2-c2' },
    ],
    explanation: t(
      "La Federación cobra IVA y los impuestos al comercio exterior (materia exclusiva federal). Los estados cobran sobre todo nóminas y hospedaje. Los municipios tienen asegurados los ingresos de la propiedad inmobiliaria: predial y adquisición de inmuebles. Error común: creer que el predial es estatal porque la ley que fija sus tarifas la aprueba el congreso local; lo recauda y aprovecha el municipio.",
      "The Federation levies VAT and foreign trade taxes (an exclusive federal matter). States mainly levy payroll and lodging taxes. Municipalities are guaranteed real estate revenue: property tax and real estate acquisition tax. Common mistake: believing property tax is a state tax because the local congress approves the law setting its rates; the municipality collects and uses it.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'fiscal-federalism',
  },
  {
    id: 'ECO-19-E3',
    level: 1,
    module: 'ECO-19',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Un municipio hipotético obtuvo en el año: predial $90 millones, derechos y licencias $30 millones, participaciones federales $380 millones y aportaciones federales $300 millones.",
      "A hypothetical municipality obtained in the year: property tax $90 million, fees and permits $30 million, federal revenue shares $380 million and federal earmarked contributions $300 million.",
    ),
    prompt: t(
      "Calcula los ingresos totales, la autonomía financiera y la dependencia de transferencias del municipio.",
      "Compute the municipality's total revenue, financial autonomy and dependency on transfers.",
    ),
    fields: [
      { id: 'f1', label: t("Ingresos totales (millones de pesos)", "Total revenue (millions of pesos)"), answer: 800, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Autonomía financiera (%)", "Financial autonomy (%)"), answer: 15, unit: '%', tolerance: { abs: 0.1 } },
      { id: 'f3', label: t("Dependencia de transferencias (%)", "Dependency on transfers (%)"), answer: 85, unit: '%', tolerance: { abs: 0.1 } },
    ],
    explanation: t(
      "Ingresos propios: 90 + 30 = 120. Transferencias: 380 + 300 = 680. Total: 800. Autonomía: 120 ÷ 800 = 15 %. Dependencia: 680 ÷ 800 = 85 %. Ambas suman 100 %. Error común: contar solo el predial como ingreso propio (11.25 %) y olvidar derechos y licencias, que también los genera el municipio.",
      "Own-source revenue: 90 + 30 = 120. Transfers: 380 + 300 = 680. Total: 800. Autonomy: 120 ÷ 800 = 15 %. Dependency: 680 ÷ 800 = 85 %. Both add to 100 %. Common mistake: counting only property tax as own revenue (11.25 %) and forgetting fees and permits, which the municipality also generates.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-federalism',
  },
  {
    id: 'ECO-19-E4',
    level: 1,
    module: 'ECO-19',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "En la Constitución mexicana, las facultades que no están concedidas expresamente a los funcionarios federales se entienden reservadas a los estados.",
      "Under the Mexican Constitution, powers not expressly granted to federal officials are understood to be reserved to the states.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. Es la cláusula residual del artículo 124: lo que no se da expresamente a la Federación queda para los estados. Por eso los estados pueden crear impuestos como el de nóminas. Error común: pensar que todo lo que no está prohibido le toca a la Federación; en México es al revés.",
      "True. It is the residual clause of article 124: whatever is not expressly granted to the Federation is left to the states. That is why states can create taxes such as the payroll tax. Common mistake: thinking that anything not prohibited belongs to the Federation; in Mexico it is the other way around.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fiscal-federalism',
  },
  {
    id: 'ECO-19-E5',
    level: 1,
    module: 'ECO-19',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "¿Cuáles de estas situaciones son señales de desequilibrio fiscal vertical o de pereza fiscal en un gobierno local? Selecciona todas las que apliquen.",
      "Which of these situations are signs of vertical fiscal imbalance or fiscal laziness in a local government? Select all that apply.",
    ),
    options: [
      { id: 'ECO-19-E5-a', text: t("Más del 80 % de sus ingresos proviene de transferencias federales", "More than 80 % of its revenue comes from federal transfers") },
      { id: 'ECO-19-E5-b', text: t("Lleva muchos años sin actualizar los valores catastrales del predial", "It has gone many years without updating property values for predial") },
      { id: 'ECO-19-E5-c', text: t("Financia la mayor parte de su gasto con su propio predial y sus derechos de agua", "It finances most of its spending with its own property tax and water fees") },
      { id: 'ECO-19-E5-d', text: t("Cuando bajan las participaciones, tiene que recortar servicios básicos", "When revenue shares fall, it has to cut basic services") },
      { id: 'ECO-19-E5-e', text: t("Tiene un padrón de contribuyentes actualizado y cobra con eficiencia", "It has an up-to-date taxpayer roll and collects efficiently") },
    ],
    correctOptionIds: ['ECO-19-E5-a', 'ECO-19-E5-b', 'ECO-19-E5-d'],
    explanation: t(
      "Alta dependencia de transferencias y vulnerabilidad cuando éstas bajan muestran desequilibrio vertical; no actualizar el catastro es pereza fiscal. Financiarse con ingresos propios y cobrar con eficiencia indican autonomía, lo contrario. Error común: creer que recibir muchas transferencias es siempre señal de buena gestión.",
      "High dependency on transfers and vulnerability when they fall show vertical imbalance; not updating the property registry is fiscal laziness. Self-financing and collecting efficiently indicate autonomy, the opposite. Common mistake: believing that receiving many transfers is always a sign of good management.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-federalism',
  },
  {
    id: 'ECO-19-E6',
    level: 1,
    module: 'ECO-19',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En un municipio hipotético, el valor catastral de todos los inmuebles suma $12,000 millones y la tasa de predial es 0.25 % anual. Este año recaudó $18 millones de predial.",
      "In a hypothetical municipality, the cadastral value of all properties adds up to $12,000 million and the property tax rate is 0.25 % a year. This year it collected $18 million in property tax.",
    ),
    prompt: t(
      "¿Qué porcentaje de su predial potencial logró recaudar el municipio (eficiencia recaudatoria)?",
      "What percentage of its potential property tax did the municipality manage to collect (collection efficiency)?",
    ),
    answer: 60,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.1 },
    explanation: t(
      "Potencial: 12,000 × 0.0025 = $30 millones. Eficiencia: 18 ÷ 30 × 100 = 60 %. El 40 % restante es recaudación perdida por morosidad, padrones desactualizados o descuentos. Error común: usar 0.25 en lugar de 0.0025 y obtener un potencial de $3,000 millones.",
      "Potential: 12,000 × 0.0025 = $30 million. Efficiency: 18 ÷ 30 × 100 = 60 %. The remaining 40 % is revenue lost to arrears, outdated rolls or discounts. Common mistake: using 0.25 instead of 0.0025 and getting a potential of $3,000 million.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'fiscal-federalism',
  },

  // ═════════════════════════ ECO-20 ═════════════════════════
  {
    id: 'ECO-20-E1',
    level: 1,
    module: 'ECO-20',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "El efecto papel matamoscas (flypaper) describe que una transferencia incondicionada eleva el gasto público local más de lo que lo haría un aumento equivalente en el ingreso de los habitantes.",
      "The flypaper effect describes that an unconditional transfer raises local public spending more than an equivalent increase in residents' income would.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. En teoría ambos deberían tener el mismo efecto, pero la evidencia muestra que el dinero transferido \"se queda pegado\" donde cae: en el gasto público. Error común: confundirlo con que las transferencias condicionadas obligan a gastar en un fin; eso es el etiquetado, no el efecto papel matamoscas.",
      "True. In theory both should have the same effect, but evidence shows transferred money \"sticks\" where it lands: in public spending. Common mistake: confusing it with conditional transfers forcing spending on a purpose; that is earmarking, not the flypaper effect.",
    ),
    difficulty: 2,
    points: 10,
    competency: 'fiscal-coordination',
  },
  {
    id: 'ECO-20-E2',
    level: 1,
    module: 'ECO-20',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada recurso o característica como participación (Ramo 28) o aportación (Ramo 33).",
      "Classify each resource or feature as a revenue share (Branch 28) or an earmarked contribution (Branch 33).",
    ),
    categories: [
      { id: 'ECO-20-E2-c1', label: t("Participaciones (Ramo 28)", "Revenue shares (Branch 28)") },
      { id: 'ECO-20-E2-c2', label: t("Aportaciones (Ramo 33)", "Earmarked contributions (Branch 33)") },
    ],
    items: [
      { id: 'ECO-20-E2-i1', label: t("Fondo General de Participaciones", "General Revenue-Sharing Fund"), correctCategoryId: 'ECO-20-E2-c1' },
      { id: 'ECO-20-E2-i2', label: t("Fondo de Aportaciones para la Infraestructura Social (FAIS)", "Social Infrastructure Contributions Fund (FAIS)"), correctCategoryId: 'ECO-20-E2-c2' },
      { id: 'ECO-20-E2-i3', label: t("Fondo de Fomento Municipal", "Municipal Development Fund"), correctCategoryId: 'ECO-20-E2-c1' },
      { id: 'ECO-20-E2-i4', label: t("Fondo de Aportaciones para los Servicios de Salud (FASSA)", "Health Services Contributions Fund (FASSA)"), correctCategoryId: 'ECO-20-E2-c2' },
      { id: 'ECO-20-E2-i5', label: t("Recursos de libre disposición que compensan los impuestos cedidos", "Unrestricted resources compensating for ceded taxes"), correctCategoryId: 'ECO-20-E2-c1' },
      { id: 'ECO-20-E2-i6', label: t("Recursos que solo pueden usarse en el fin que marca la ley", "Resources that may only be used for the purpose the law sets"), correctCategoryId: 'ECO-20-E2-c2' },
    ],
    explanation: t(
      "Las participaciones (Fondo General, Fomento Municipal) son de libre disposición y resarcen los impuestos cedidos al SNCF. Las aportaciones (FAIS, FASSA y los demás fondos del Ramo 33) están etiquetadas a un destino. Error común: suponer que todo recurso federal viene con destino fijo; las participaciones no.",
      "Revenue shares (General Fund, Municipal Development) are unrestricted and compensate for taxes ceded to the SNCF. Earmarked contributions (FAIS, FASSA and the other Branch 33 funds) are tied to a purpose. Common mistake: assuming every federal resource comes with a fixed purpose; revenue shares do not.",
    ),
    difficulty: 1,
    points: 15,
    competency: 'fiscal-coordination',
  },
  {
    id: 'ECO-20-E3',
    level: 1,
    module: 'ECO-20',
    kind: 'formula',
    flavor: 'concept',
    prompt: t(
      "Completa la fórmula de las participaciones mínimas que un estado debe transferir a sus municipios.",
      "Complete the formula for the minimum revenue shares a state must pass on to its municipalities.",
    ),
    template: 'Participaciones municipales mínimas / Minimum municipal shares = {{b1}} × {{b2}}',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'ECO-20-E3-b1-a', text: t("20 %", "20 %") },
          { id: 'ECO-20-E3-b1-b', text: t("50 %", "50 %") },
          { id: 'ECO-20-E3-b1-c', text: t("5 %", "5 %") },
          { id: 'ECO-20-E3-b1-d', text: t("100 %", "100 %") },
        ],
        correctOptionId: 'ECO-20-E3-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'ECO-20-E3-b2-a', text: t("Aportaciones del Ramo 33 que recibe el estado", "Branch 33 contributions the state receives") },
          { id: 'ECO-20-E3-b2-b', text: t("Participaciones federales que recibe el estado", "Federal revenue shares the state receives") },
          { id: 'ECO-20-E3-b2-c', text: t("Predial que cobran los municipios", "Property tax collected by the municipalities") },
          { id: 'ECO-20-E3-b2-d', text: t("Recaudación Federal Participable total", "Total Federal Shareable Revenue") },
        ],
        correctOptionId: 'ECO-20-E3-b2-b',
      },
    ],
    explanation: t(
      "La Ley de Coordinación Fiscal obliga a los estados a entregar a sus municipios al menos el 20 % de las participaciones federales que reciben. Error común: aplicar el porcentaje a la Recaudación Federal Participable total (eso define el tamaño del Fondo General) o a las aportaciones, que llegan a los municipios por sus propios fondos.",
      "The Fiscal Coordination Law requires states to give their municipalities at least 20 % of the federal revenue shares they receive. Common mistake: applying the percentage to total Federal Shareable Revenue (which defines the size of the General Fund) or to earmarked contributions, which reach municipalities through their own funds.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'fiscal-coordination',
  },
  {
    id: 'ECO-20-E4',
    level: 1,
    module: 'ECO-20',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Supón una Recaudación Federal Participable hipotética de $4,500,000 millones. El Fondo General de Participaciones es el 20 % de ella. Un estado tiene un coeficiente de participación de 3 % del fondo y entrega a sus municipios exactamente el mínimo legal del 20 %.",
      "Assume hypothetical Federal Shareable Revenue of $4,500,000 million. The General Revenue-Sharing Fund is 20 % of it. A state has a sharing coefficient of 3 % of the fund and gives its municipalities exactly the 20 % legal minimum.",
    ),
    prompt: t(
      "Calcula el Fondo General, lo que recibe el estado y lo que pasa a sus municipios (en millones de pesos).",
      "Compute the General Fund, what the state receives and what goes to its municipalities (in millions of pesos).",
    ),
    fields: [
      { id: 'f1', label: t("Fondo General de Participaciones (millones)", "General Revenue-Sharing Fund (millions)"), answer: 900000, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Participaciones del estado (millones)", "State's revenue shares (millions)"), answer: 27000, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Monto para sus municipios (millones)", "Amount for its municipalities (millions)"), answer: 5400, unit: 'none', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Fondo General: 4,500,000 × 0.20 = 900,000. Estado: 900,000 × 0.03 = 27,000. Municipios: 27,000 × 0.20 = 5,400. Error común: calcular el 3 % sobre la RFP completa (135,000), cuando el coeficiente se aplica al fondo.",
      "General Fund: 4,500,000 × 0.20 = 900,000. State: 900,000 × 0.03 = 27,000. Municipalities: 27,000 × 0.20 = 5,400. Common mistake: computing 3 % of the whole RFP (135,000), when the coefficient applies to the fund.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-coordination',
  },
  {
    id: 'ECO-20-E5',
    level: 1,
    module: 'ECO-20',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un fondo hipotético de $1,000 millones se reparte entre tres estados: 70 % según su proporción de población y 30 % en partes iguales. Poblaciones: estado A, 2 millones; estado B, 3 millones; estado C, 5 millones.",
      "A hypothetical $1,000 million fund is allocated among three states: 70 % by their share of population and 30 % in equal parts. Populations: state A, 2 million; state B, 3 million; state C, 5 million.",
    ),
    prompt: t(
      "¿Cuántos millones de pesos recibe el estado B?",
      "How many millions of pesos does state B receive?",
    ),
    answer: 310,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: t(
      "Bolsa por población: 1,000 × 0.70 = 700; B tiene 3 de 10 millones → 700 × 0.3 = 210. Bolsa igualitaria: 1,000 × 0.30 = 300 ÷ 3 = 100. Total B: 210 + 100 = 310. Error común: repartir todo el fondo por población (300) y olvidar la parte igualitaria.",
      "Population pool: 1,000 × 0.70 = 700; B has 3 of 10 million → 700 × 0.3 = 210. Equal pool: 1,000 × 0.30 = 300 ÷ 3 = 100. Total B: 210 + 100 = 310. Common mistake: allocating the whole fund by population (300) and forgetting the equal part.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'fiscal-coordination',
  },
  {
    id: 'ECO-20-E6',
    level: 1,
    module: 'ECO-20',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "La presidenta municipal de un municipio quiere usar recursos del FAIS para pavimentar las calles de un fraccionamiento residencial de altos ingresos, porque los vecinos lo piden mucho.",
      "The mayor of a municipality wants to use FAIS resources to pave the streets of a high-income residential subdivision, because residents are asking for it a lot.",
    ),
    prompt: t(
      "¿Qué debería responderle su tesorero?",
      "What should her treasurer tell her?",
    ),
    options: [
      { id: 'ECO-20-E6-a', text: t("Que sí puede, porque las aportaciones son de libre disposición", "That she can, because earmarked contributions are unrestricted") },
      { id: 'ECO-20-E6-b', text: t("Que no puede: el FAIS está etiquetado a obras que beneficien a población en pobreza o en zonas de rezago; esa obra debe pagarse con otros recursos, como participaciones o ingresos propios", "That she cannot: FAIS is earmarked for works benefiting people in poverty or lagging areas; that work must be paid with other resources, such as revenue shares or own revenue") },
      { id: 'ECO-20-E6-c', text: t("Que sí puede, siempre que el cabildo lo apruebe por mayoría", "That she can, as long as the town council approves it by majority") },
      { id: 'ECO-20-E6-d', text: t("Que debe devolver el FAIS a la Federación y pedir a cambio más participaciones", "That she must return FAIS to the Federation and ask for more revenue shares instead") },
    ],
    correctOptionId: 'ECO-20-E6-b',
    explanation: t(
      "El FAIS es una aportación del Ramo 33: está etiquetada por ley a infraestructura social básica para población en pobreza o rezago. Un fraccionamiento de altos ingresos no cumple ese destino. La aprobación del cabildo no cambia el etiquetado que fija una ley federal. Error común: creer que todo recurso federal es de libre uso; eso solo aplica a las participaciones.",
      "FAIS is a Branch 33 contribution: it is earmarked by law for basic social infrastructure for people in poverty or lagging areas. A high-income subdivision does not meet that purpose. Council approval does not change the earmarking set by a federal law. Common mistake: believing every federal resource is unrestricted; that only applies to revenue shares.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'fiscal-coordination',
  },

  // ═════════════════════════ ECO-21 ═════════════════════════
  {
    id: 'ECO-21-E1',
    level: 1,
    module: 'ECO-21',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada instrumento o descripción según cómo se determina lo que paga al inversionista.",
      "Classify each instrument or description by how what it pays the investor is determined.",
    ),
    categories: [
      { id: 'ECO-21-E1-c1', label: t("Rendimiento fijo en pesos", "Fixed return in pesos") },
      { id: 'ECO-21-E1-c2', label: t("Protegido contra la inflación", "Protected against inflation") },
      { id: 'ECO-21-E1-c3', label: t("Tasa variable", "Floating rate") },
    ],
    items: [
      { id: 'ECO-21-E1-i1', label: t("CETES (se compran con descuento y pagan su valor nominal)", "CETES (bought at a discount, pay their face value)"), correctCategoryId: 'ECO-21-E1-c1' },
      { id: 'ECO-21-E1-i2', label: t("Bonos M", "Bonos M"), correctCategoryId: 'ECO-21-E1-c1' },
      { id: 'ECO-21-E1-i3', label: t("Udibonos", "Udibonos"), correctCategoryId: 'ECO-21-E1-c2' },
      { id: 'ECO-21-E1-i4', label: t("Bondes", "Bondes"), correctCategoryId: 'ECO-21-E1-c3' },
      { id: 'ECO-21-E1-i5', label: t("Título cuyo valor se expresa en UDIS", "Security whose value is expressed in UDIS"), correctCategoryId: 'ECO-21-E1-c2' },
      { id: 'ECO-21-E1-i6', label: t("Bono cuyo interés se ajusta periódicamente con una tasa de referencia del mercado", "Bond whose interest adjusts periodically with a market reference rate"), correctCategoryId: 'ECO-21-E1-c3' },
    ],
    explanation: t(
      "CETES y Bonos M pagan un rendimiento en pesos conocido desde la compra (descuento o cupón fijo). Los Udibonos se miden en UDIS, que suben con la inflación. Los Bondes pagan una tasa variable ligada a una referencia del mercado. Error común: pensar que los CETES pagan tasa variable porque su tasa cambia en cada subasta; una vez comprados, tu rendimiento queda fijo.",
      "CETES and Bonos M pay a peso return known at purchase (discount or fixed coupon). Udibonos are measured in UDIS, which rise with inflation. Bondes pay a floating rate tied to a market reference. Common mistake: thinking CETES pay a floating rate because their rate changes at each auction; once bought, your return is fixed.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-debt',
  },
  {
    id: 'ECO-21-E2',
    level: 1,
    module: 'ECO-21',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un país hipotético tiene una deuda de 50 % del PIB, paga una tasa de interés nominal de 8 % y su PIB nominal crece 5 % al año. Su balance primario es cero.",
      "A hypothetical country has debt of 50 % of GDP, pays a nominal interest rate of 8 % and its nominal GDP grows 5 % a year. Its primary balance is zero.",
    ),
    prompt: t(
      "¿Cuál será su razón deuda/PIB el próximo año? Responde en % con dos decimales.",
      "What will its debt-to-GDP ratio be next year? Answer in % with two decimals.",
    ),
    answer: 51.43,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "d(t+1) = 50 × 1.08 ÷ 1.05 − 0 = 50 × 1.028571 = 51.43 %. Como r > g, la razón sube aunque no haya déficit primario. Error común: sumar solo la diferencia r − g (50 + 3 = 53) o aplicarla sobre la deuda sin dividir entre (1 + g) (50 × 1.03 = 51.50).",
      "d(t+1) = 50 × 1.08 ÷ 1.05 − 0 = 50 × 1.028571 = 51.43 %. Since r > g, the ratio rises even without a primary deficit. Common mistake: just adding the gap r − g (50 + 3 = 53) or applying it to debt without dividing by (1 + g) (50 × 1.03 = 51.50).",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-debt',
  },
  {
    id: 'ECO-21-E3',
    level: 1,
    module: 'ECO-21',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Un gobierno hipotético tiene deuda de 45 % del PIB, paga una tasa de interés nominal de 9 % y espera que su PIB nominal crezca 6 % al año.",
      "A hypothetical government has debt of 45 % of GDP, pays a nominal interest rate of 9 % and expects nominal GDP to grow 6 % a year.",
    ),
    prompt: t(
      "¿Qué superávit primario, como % del PIB, necesita para mantener estable su razón deuda/PIB? Responde con dos decimales.",
      "What primary surplus, as % of GDP, does it need to keep its debt-to-GDP ratio stable? Answer with two decimals.",
    ),
    answer: 1.27,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "sp = (r − g) ÷ (1 + g) × d = (0.09 − 0.06) ÷ 1.06 × 45 = 0.028302 × 45 = 1.27 % del PIB. Error común: olvidar dividir entre (1 + g) y responder 0.03 × 45 = 1.35 %.",
      "sp = (r − g) ÷ (1 + g) × d = (0.09 − 0.06) ÷ 1.06 × 45 = 0.028302 × 45 = 1.27 % of GDP. Common mistake: forgetting to divide by (1 + g) and answering 0.03 × 45 = 1.35 %.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'public-debt',
  },
  {
    id: 'ECO-21-E4',
    level: 1,
    module: 'ECO-21',
    kind: 'fields',
    flavor: 'statement',
    context: t(
      "Un gobierno hipotético registra en el año (miles de millones de pesos): ingresos 5,000; gasto sin intereses 4,900; intereses de la deuda 350. Su deuda al inicio del año es 8,000 y el déficit total se cubre con deuda nueva.",
      "A hypothetical government records for the year (billions of pesos): revenue 5,000; non-interest spending 4,900; interest on debt 350. Its debt at the start of the year is 8,000 and the overall deficit is covered with new debt.",
    ),
    prompt: t(
      "Calcula el superávit primario, el déficit total y la deuda al final del año (miles de millones).",
      "Compute the primary surplus, the overall deficit and end-of-year debt (billions).",
    ),
    fields: [
      { id: 'f1', label: t("Superávit primario", "Primary surplus"), answer: 100, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Déficit total", "Overall deficit"), answer: 250, unit: 'none', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Deuda al final del año", "End-of-year debt"), answer: 8250, unit: 'none', tolerance: { abs: 0.5 } },
    ],
    explanation: t(
      "Superávit primario: 5,000 − 4,900 = 100. Balance total: 100 − 350 = −250, es decir, déficit de 250. Deuda final: 8,000 + 250 = 8,250. Error común: sumar a la deuda los intereses completos (8,350) sin descontar el superávit primario que ayudó a pagarlos.",
      "Primary surplus: 5,000 − 4,900 = 100. Overall balance: 100 − 350 = −250, that is, a deficit of 250. Ending debt: 8,000 + 250 = 8,250. Common mistake: adding the full interest to debt (8,350) without subtracting the primary surplus that helped pay it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-debt',
  },
  {
    id: 'ECO-21-E5',
    level: 1,
    module: 'ECO-21',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "El gobierno de un estado mexicano quiere pedir un préstamo en dólares a un banco de Nueva York para pagar la nómina de sus burócratas, porque la tasa en dólares es más baja.",
      "The government of a Mexican state wants to borrow in dollars from a New York bank to pay its civil servants' payroll, because the dollar rate is lower.",
    ),
    prompt: t(
      "¿Qué opinión es correcta sobre este plan?",
      "Which opinion about this plan is correct?",
    ),
    options: [
      { id: 'ECO-21-E5-a', text: t("Es válido si el congreso estatal lo aprueba, sin otra restricción", "It is valid if the state congress approves it, with no other restriction") },
      { id: 'ECO-21-E5-b', text: t("Es válido porque una tasa más baja siempre reduce el costo de la deuda", "It is valid because a lower rate always reduces the cost of debt") },
      { id: 'ECO-21-E5-c', text: t("Solo necesita el visto bueno de una calificadora internacional", "It only needs approval from an international rating agency") },
      { id: 'ECO-21-E5-d', text: t("No procede: los estados no pueden endeudarse con acreedores extranjeros ni en moneda extranjera, y la deuda debe destinarse a inversión pública productiva, no a nómina", "It is not allowed: states may not borrow from foreign creditors or in foreign currency, and debt must go to productive public investment, not payroll") },
    ],
    correctOptionId: 'ECO-21-E5-d',
    explanation: t(
      "La Constitución (artículo 117) prohíbe a estados y municipios endeudarse con extranjeros o en moneda extranjera, y solo permite deuda para inversión pública productiva; pagar nómina es gasto corriente. Además, una tasa baja en dólares no garantiza menor costo: si el peso se deprecia, la deuda en pesos crece (riesgo cambiario). Error común: comparar solo tasas sin considerar el tipo de cambio.",
      "The Constitution (article 117) forbids states and municipalities from borrowing from foreigners or in foreign currency, and only allows debt for productive public investment; paying payroll is current spending. Besides, a low dollar rate does not guarantee lower cost: if the peso depreciates, the peso debt grows (exchange rate risk). Common mistake: comparing only rates without considering the exchange rate.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-debt',
  },
  {
    id: 'ECO-21-E6',
    level: 1,
    module: 'ECO-21',
    kind: 'multi',
    flavor: 'interpret',
    prompt: t(
      "¿Cuáles de estas afirmaciones sobre los riesgos y la dinámica de la deuda pública son correctas? Selecciona todas las que apliquen.",
      "Which of these statements about public debt risks and dynamics are correct? Select all that apply.",
    ),
    options: [
      { id: 'ECO-21-E6-a', text: t("Si una parte grande de la deuda está en dólares, una depreciación del peso aumenta la deuda medida en pesos", "If a large part of the debt is in dollars, a peso depreciation increases debt measured in pesos") },
      { id: 'ECO-21-E6-b', text: t("Concentrar vencimientos en el corto plazo eleva el riesgo de refinanciamiento", "Concentrating maturities in the short term raises rollover risk") },
      { id: 'ECO-21-E6-c', text: t("Si la tasa de interés es mayor que el crecimiento del PIB y el balance primario es cero, la razón deuda/PIB baja sola", "If the interest rate is greater than GDP growth and the primary balance is zero, the debt-to-GDP ratio falls on its own") },
      { id: 'ECO-21-E6-d', text: t("Con deuda a tasa variable, un alza de tasas aumenta el pago de intereses", "With floating-rate debt, a rate increase raises interest payments") },
      { id: 'ECO-21-E6-e', text: t("Un superávit primario garantiza que la deuda en pesos no crezca", "A primary surplus guarantees that debt in pesos will not grow") },
    ],
    correctOptionIds: ['ECO-21-E6-a', 'ECO-21-E6-b', 'ECO-21-E6-d'],
    explanation: t(
      "Las opciones a, b y d describen los riesgos cambiario, de refinanciamiento y de tasa. La c es falsa: si r > g la razón sube (efecto bola de nieve). La e también: si los intereses superan al superávit primario hay déficit total y la deuda crece. Error común: confundir balance primario con balance total.",
      "Options a, b and d describe exchange rate, rollover and interest rate risks. Option c is false: if r > g the ratio rises (snowball effect). So is e: if interest exceeds the primary surplus there is an overall deficit and debt grows. Common mistake: confusing primary balance with overall balance.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'public-debt',
  },

  // ═════════════════════════ ECO-22 ═════════════════════════
  {
    id: 'ECO-22-E1',
    level: 1,
    module: 'ECO-22',
    kind: 'mcq',
    flavor: 'case',
    context: t(
      "Durante diez años, un país hipotético duplicó sus exportaciones de minerales y su PIB creció rápido. Sin embargo, la proporción de personas sin acceso a servicios de salud no cambió, la escolaridad promedio se estancó y aumentó la contaminación de sus ríos.",
      "Over ten years, a hypothetical country doubled its mineral exports and its GDP grew fast. However, the share of people without access to health services did not change, average schooling stalled and pollution of its rivers increased.",
    ),
    prompt: t(
      "¿Qué describe mejor lo que vivió este país?",
      "What best describes what this country experienced?",
    ),
    options: [
      { id: 'ECO-22-E1-a', text: t("Desarrollo económico pleno, porque el PIB creció", "Full economic development, because GDP grew") },
      { id: 'ECO-22-E1-b', text: t("Una recesión, porque hubo contaminación", "A recession, because there was pollution") },
      { id: 'ECO-22-E1-c', text: t("Crecimiento económico sin desarrollo: más producción sin mejoras en salud, educación ni sostenibilidad", "Economic growth without development: more output without improvements in health, education or sustainability") },
      { id: 'ECO-22-E1-d', text: t("Desarrollo sostenible, porque aprovechó sus recursos naturales", "Sustainable development, because it used its natural resources") },
    ],
    correctOptionId: 'ECO-22-E1-c',
    explanation: t(
      "El PIB creció (crecimiento), pero las condiciones de vida no mejoraron y se dañó el ambiente: no hubo desarrollo, y mucho menos sostenible. No es recesión, porque la producción aumentó. Error común: usar crecimiento y desarrollo como sinónimos.",
      "GDP grew (growth), but living conditions did not improve and the environment was damaged: there was no development, let alone sustainable development. It is not a recession, because output increased. Common mistake: using growth and development as synonyms.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-development',
  },
  {
    id: 'ECO-22-E2',
    level: 1,
    module: 'ECO-22',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una región hipotética tiene una esperanza de vida de 74 años. Usa como referencia un mínimo de 20 y un máximo de 85 años. Su índice de educación es 0.70 y su índice de ingreso es 0.75.",
      "A hypothetical region has a life expectancy of 74 years. Use a reference minimum of 20 and maximum of 85 years. Its education index is 0.70 and its income index is 0.75.",
    ),
    prompt: t(
      "Calcula el índice de salud y el IDH de la región (tres decimales).",
      "Compute the region's health index and HDI (three decimals).",
    ),
    fields: [
      { id: 'f1', label: t("Índice de salud", "Health index"), answer: 0.831, unit: 'none', tolerance: { abs: 0.001 } },
      { id: 'f2', label: t("IDH", "HDI"), answer: 0.758, unit: 'none', tolerance: { abs: 0.001 } },
    ],
    explanation: t(
      "Índice de salud: (74 − 20) ÷ (85 − 20) = 54 ÷ 65 = 0.831. IDH: (0.831 × 0.70 × 0.75)^(1/3) = 0.4362^(1/3) ≈ 0.758. Error común: usar el promedio simple, (0.831 + 0.70 + 0.75) ÷ 3 = 0.760, en lugar de la media geométrica.",
      "Health index: (74 − 20) ÷ (85 − 20) = 54 ÷ 65 = 0.831. HDI: (0.831 × 0.70 × 0.75)^(1/3) = 0.4362^(1/3) ≈ 0.758. Common mistake: using the simple average, (0.831 + 0.70 + 0.75) ÷ 3 = 0.760, instead of the geometric mean.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'economic-development',
  },
  {
    id: 'ECO-22-E3',
    level: 1,
    module: 'ECO-22',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "En un año, el PIB real de un país hipotético creció 3.5 % y su población creció 1.5 %.",
      "In one year, a hypothetical country's real GDP grew 3.5 % and its population grew 1.5 %.",
    ),
    prompt: t(
      "Con la fórmula exacta, ¿cuánto creció su PIB per cápita? Responde en % con dos decimales.",
      "Using the exact formula, how much did its GDP per capita grow? Answer in % with two decimals.",
    ),
    answer: 1.97,
    unit: '%',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Crecimiento per cápita = 1.035 ÷ 1.015 − 1 = 0.0197 → 1.97 %. La aproximación rápida (3.5 − 1.5 = 2 %) es cercana, pero la pregunta pide la fórmula exacta. Error común: sumar los crecimientos (5 %) como si más población elevara el ingreso por persona.",
      "Per capita growth = 1.035 ÷ 1.015 − 1 = 0.0197 → 1.97 %. The quick approximation (3.5 − 1.5 = 2 %) is close, but the question asks for the exact formula. Common mistake: adding the growth rates (5 %) as if more population raised income per person.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economic-development',
  },
  {
    id: 'ECO-22-E4',
    level: 1,
    module: 'ECO-22',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Relaciona cada idea con la teoría o autor del desarrollo al que pertenece.",
      "Match each idea with the development theory or author it belongs to.",
    ),
    categories: [
      { id: 'ECO-22-E4-c1', label: t("Rostow (etapas)", "Rostow (stages)") },
      { id: 'ECO-22-E4-c2', label: t("Lewis (economía dual)", "Lewis (dual economy)") },
      { id: 'ECO-22-E4-c3', label: t("CEPAL / Prebisch", "ECLAC / Prebisch") },
      { id: 'ECO-22-E4-c4', label: t("Sen (capacidades)", "Sen (capabilities)") },
    ],
    items: [
      { id: 'ECO-22-E4-i1', label: t("Los países pasan por un \"despegue\" antes de llegar al consumo en masa", "Countries go through a \"take-off\" before reaching mass consumption"), correctCategoryId: 'ECO-22-E4-c1' },
      { id: 'ECO-22-E4-i2', label: t("La industria crece absorbiendo la mano de obra sobrante del campo", "Industry grows by absorbing surplus farm labor"), correctCategoryId: 'ECO-22-E4-c2' },
      { id: 'ECO-22-E4-i3', label: t("Las materias primas compran cada vez menos bienes industriales (deterioro de los términos de intercambio)", "Raw materials buy fewer and fewer industrial goods (deterioration of the terms of trade)"), correctCategoryId: 'ECO-22-E4-c3' },
      { id: 'ECO-22-E4-i4', label: t("Desarrollo es ampliar lo que las personas realmente pueden ser y hacer", "Development is expanding what people can actually be and do"), correctCategoryId: 'ECO-22-E4-c4' },
      { id: 'ECO-22-E4-i5', label: t("Industrialización por sustitución de importaciones con protección arancelaria", "Import-substituting industrialization with tariff protection"), correctCategoryId: 'ECO-22-E4-c3' },
      { id: 'ECO-22-E4-i6', label: t("Idea que inspiró la creación del Índice de Desarrollo Humano", "Idea that inspired the creation of the Human Development Index"), correctCategoryId: 'ECO-22-E4-c4' },
    ],
    explanation: t(
      "Rostow: etapas y despegue. Lewis: economía dual, el sector moderno absorbe mano de obra del tradicional. CEPAL/Prebisch: deterioro de los términos de intercambio y sustitución de importaciones. Sen: capacidades, base del IDH. Error común: atribuir la sustitución de importaciones a Lewis por hablar de industrialización; Lewis explica el traslado de trabajadores, no la protección comercial.",
      "Rostow: stages and take-off. Lewis: dual economy, the modern sector absorbs labor from the traditional one. ECLAC/Prebisch: deterioration of the terms of trade and import substitution. Sen: capabilities, the basis of the HDI. Common mistake: attributing import substitution to Lewis because he talks about industrialization; Lewis explains the shift of workers, not trade protection.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'economic-development',
  },
  {
    id: 'ECO-22-E5',
    level: 1,
    module: 'ECO-22',
    kind: 'truefalse',
    flavor: 'interpret',
    prompt: t(
      "Si el coeficiente de Gini de un país baja de 0.50 a 0.44, significa que la desigualdad del ingreso aumentó.",
      "If a country's Gini coefficient falls from 0.50 to 0.44, it means income inequality increased.",
    ),
    answer: false,
    explanation: t(
      "Falso. El Gini va de 0 (igualdad total) a 1 (desigualdad total); si baja, el ingreso está mejor repartido, es decir, la desigualdad disminuyó. Error común: leer el Gini como un índice de bienestar donde \"más es mejor\".",
      "False. The Gini ranges from 0 (total equality) to 1 (total inequality); if it falls, income is more evenly distributed, meaning inequality decreased. Common mistake: reading the Gini as a welfare index where \"more is better\".",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-development',
  },
  {
    id: 'ECO-22-E6',
    level: 1,
    module: 'ECO-22',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "El gobierno de un estado del sureste quiere evaluar si su desarrollo mejoró en los últimos seis años, no solo si creció su economía.",
      "The government of a southeastern state wants to evaluate whether its development improved over the last six years, not only whether its economy grew.",
    ),
    prompt: t(
      "¿Qué indicadores le conviene revisar además del PIB? Selecciona todas las que apliquen.",
      "Which indicators should it review besides GDP? Select all that apply.",
    ),
    options: [
      { id: 'ECO-22-E6-a', text: t("Índice de Desarrollo Humano (salud, educación e ingreso)", "Human Development Index (health, education and income)") },
      { id: 'ECO-22-E6-b', text: t("Pobreza multidimensional (ingreso y carencias sociales)", "Multidimensional poverty (income and social deprivations)") },
      { id: 'ECO-22-E6-c', text: t("Número de anuncios espectaculares instalados en la capital", "Number of billboards installed in the capital") },
      { id: 'ECO-22-E6-d', text: t("Coeficiente de Gini del ingreso", "Income Gini coefficient") },
      { id: 'ECO-22-E6-e', text: t("Precio de las acciones de las empresas más grandes del país", "Share prices of the country's largest companies") },
    ],
    correctOptionIds: ['ECO-22-E6-a', 'ECO-22-E6-b', 'ECO-22-E6-d'],
    explanation: t(
      "IDH, pobreza multidimensional y Gini miden dimensiones del desarrollo: capacidades, carencias y reparto del ingreso. Los anuncios y el precio de las acciones no dicen si la mayoría vive mejor. Error común: usar indicadores financieros o de actividad comercial como prueba de desarrollo.",
      "HDI, multidimensional poverty and Gini measure dimensions of development: capabilities, deprivations and income distribution. Billboards and share prices do not tell whether most people live better. Common mistake: using financial or commercial activity indicators as proof of development.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'economic-development',
  },
]
