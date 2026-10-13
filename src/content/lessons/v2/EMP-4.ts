import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0, área Emprendimiento, Administración y Estrategia (EMP.19–EMP.20), etapa Avanzado.
 */

const t = (es: string, en: string) => ({ es, en })

export const lessons: Lesson[] = [
  // ───────────────────────────── EMP-19 ─────────────────────────────
  {
    id: 'EMP-19',
    level: 1,
    topicIds: ['EMP.19'],
    title: t("Gobierno y dirección estratégica", "Governance and strategic leadership"),
    summary: t(
      "El gobierno corporativo reparte el poder entre dueños, consejo y dirección para que la estrategia se decida con contrapesos, se ejecute con responsables claros y se vigile con información confiable.",
      "Corporate governance divides power among owners, board and management so that strategy is decided with checks and balances, executed with clear owners and monitored with reliable information.",
    ),
    minutes: 18,
    objectives: [
      t(
        "Distinguir los papeles de la asamblea de accionistas, el consejo de administración y la dirección general.",
        "Distinguish the roles of the shareholders' meeting, the board of directors and executive management.",
      ),
      t(
        "Explicar el problema de agencia y los mecanismos que lo reducen: consejeros independientes, comités y políticas de conflicto de interés.",
        "Explain the agency problem and the mechanisms that reduce it: independent directors, committees and conflict-of-interest policies.",
      ),
      t(
        "Usar un cuadro de mando integral para que el consejo dé seguimiento a la ejecución de la estrategia.",
        "Use a balanced scorecard so the board can monitor strategy execution.",
      ),
      t(
        "Diseñar la composición básica de un consejo para una empresa familiar o en crecimiento.",
        "Design the basic composition of a board for a family or growing business.",
      ),
    ],
    theory: [
      {
        heading: t("¿Quién manda en una empresa? Los tres niveles de gobierno", "Who is in charge of a company? The three levels of governance"),
        body: [
          t(
            "El **gobierno corporativo** es el conjunto de reglas y órganos que deciden quién toma qué decisiones en una empresa y cómo se rinden cuentas. Piensa en un edificio de departamentos: los condóminos (dueños) eligen a un comité (consejo) y este contrata a un administrador (director) que opera el día a día.",
            "**Corporate governance** is the set of rules and bodies that decide who makes which decisions in a company and how people are held accountable. Think of an apartment building: the owners elect a committee (board), and the committee hires a manager (director) who runs day-to-day operations.",
          ),
          t(
            "En una sociedad anónima mexicana hay tres niveles. La **asamblea de accionistas** es el órgano supremo: aprueba estados financieros, reparte utilidades, nombra consejeros y decide cambios grandes como fusiones o aumentos de capital. El **consejo de administración** define y vigila la estrategia. La **dirección general** la ejecuta con su equipo.",
            "In a Mexican corporation (sociedad anónima) there are three levels. The **shareholders' meeting** is the supreme body: it approves financial statements, distributes profits, appoints directors and decides big changes such as mergers or capital increases. The **board of directors** sets and oversees strategy. **Executive management** carries it out with its team.",
          ),
          t(
            "La idea clave es la **separación entre propiedad y gestión**: quien pone el dinero no siempre es quien opera. Por eso se necesitan reglas escritas (estatutos, políticas) que digan hasta dónde puede decidir cada nivel sin pedir permiso.",
            "The key idea is the **separation of ownership and management**: whoever puts in the money is not always who runs the business. That is why written rules (bylaws, policies) are needed to say how far each level can decide without asking permission.",
          ),
          t(
            "Mini ejemplo: en una cadena de cafeterías, la asamblea aprueba repartir dividendos; el consejo aprueba abrir en otra ciudad; la directora general elige los locales y contrata al personal.",
            "Mini example: in a coffee shop chain, the shareholders' meeting approves paying dividends; the board approves expanding to another city; the CEO chooses the locations and hires the staff.",
          ),
        ],
        bullets: [
          t("Asamblea: nombra consejeros, aprueba resultados y cambios estructurales.", "Shareholders' meeting: appoints directors, approves results and structural changes."),
          t("Consejo: aprueba la estrategia, el presupuesto y vigila a la dirección.", "Board: approves strategy and budget, and oversees management."),
          t("Dirección general: ejecuta, opera y reporta resultados.", "Executive management: executes, operates and reports results."),
          t("Estatutos y políticas fijan los límites de cada nivel.", "Bylaws and policies set the limits of each level."),
        ],
      },
      {
        heading: t("Contrapesos: problema de agencia, independencia y comités", "Checks and balances: agency problem, independence and committees"),
        body: [
          t(
            "El **problema de agencia** surge cuando quien decide (el agente, por ejemplo el director) tiene intereses distintos a los del dueño (el principal). El director podría preferir un coche de lujo de la empresa o crecer a cualquier costo para lucir, aunque eso no convenga a los accionistas. Es como dejar tu negocio encargado: necesitas reglas y revisiones.",
            "The **agency problem** arises when the decision-maker (the agent, for example the CEO) has interests different from those of the owner (the principal). The CEO might prefer a luxury company car or grow at any cost to look good, even if that does not benefit the shareholders. It is like leaving your business in someone else's hands: you need rules and reviews.",
          ),
          t(
            "Un mecanismo clave es el **consejero independiente**: una persona sin relación laboral, familiar ni de negocios importante con la empresa o sus dueños, que puede opinar con libertad. También ayudan los **comités** del consejo, como el de **auditoría** (revisa la información financiera y el control interno) y el de **prácticas societarias** o de compensación (revisa sueldos de directivos y operaciones con partes relacionadas).",
            "A key mechanism is the **independent director**: a person with no employment, family or significant business relationship with the company or its owners, who can speak freely. Board **committees** also help, such as the **audit** committee (reviews financial information and internal control) and the **corporate practices** or compensation committee (reviews executive pay and related-party transactions).",
          ),
          t(
            "Un **conflicto de interés** ocurre cuando alguien decide sobre algo en lo que gana personalmente, por ejemplo un consejero que vende insumos a la empresa. La regla sana es: **declararlo, abstenerse de votar y que se apruebe a precio de mercado**. En empresas familiares, un **protocolo familiar** ordena quién puede trabajar en la empresa, cómo se eligen sucesores y cómo se separan los asuntos de familia de los del negocio.",
            "A **conflict of interest** happens when someone decides on something from which they personally benefit, for example a director who sells supplies to the company. The healthy rule is: **disclose it, abstain from voting and approve it at market price**. In family businesses, a **family protocol** sets who may work in the company, how successors are chosen and how family matters are kept apart from business matters.",
          ),
          t(
            "Mini ejemplo: el hermano del director propone que la empresa rente su bodega. El director declara el conflicto, no vota, y el comité compara la renta con otras bodegas de la zona antes de aprobar.",
            "Mini example: the CEO's brother proposes that the company rent his warehouse. The CEO discloses the conflict, does not vote, and the committee compares the rent with other warehouses in the area before approving.",
          ),
        ],
        bullets: [
          t("Agente ≠ principal: los intereses pueden no coincidir.", "Agent ≠ principal: interests may not align."),
          t("Consejero independiente: sin ligas laborales, familiares ni de negocio relevantes.", "Independent director: no relevant employment, family or business ties."),
          t("Comité de auditoría: información financiera y control interno.", "Audit committee: financial information and internal control."),
          t("Conflicto de interés: declarar, abstenerse, precio de mercado.", "Conflict of interest: disclose, abstain, market price."),
          t("Protocolo familiar: reglas de familia y sucesión.", "Family protocol: family and succession rules."),
        ],
        formulas: [
          {
            name: t("Porcentaje de consejeros independientes", "Percentage of independent directors"),
            expression: "% independientes = consejeros independientes ÷ total de consejeros × 100",
            variables: [
              { symbol: "consejeros independientes", meaning: t("Cuántos miembros del consejo no tienen ligas laborales, familiares ni de negocio relevantes con la empresa (número de personas).", "How many board members have no relevant employment, family or business ties to the company (number of people).") },
              { symbol: "total de consejeros", meaning: t("Cuántas personas tiene el consejo en total, contando a los independientes (número de personas).", "How many people the board has in total, counting the independents (number of people).") },
              { symbol: "% independientes", meaning: t("Qué parte del consejo es independiente (en %).", "What share of the board is independent (in %).") },
            ],
            steps: [
              t("Cuenta a los consejeros independientes.", "Count the independent directors."),
              t("Divide ese número entre el total de consejeros.", "Divide that number by the total number of directors."),
              t("Multiplica por 100 para expresarlo en porcentaje y compáralo con la meta de la política.", "Multiply by 100 to express it as a percentage and compare it with the policy's target."),
            ],
            example: t(
              "Un consejo de 9 personas tiene 3 independientes: 3 ÷ 9 = 0.333 × 100 = **33.3 %**. Si la política pide al menos 30 %, cumple.",
              "A 9-person board has 3 independents: 3 ÷ 9 = 0.333 × 100 = **33.3%**. If the policy asks for at least 30%, it complies.",
            ),
          },
          {
            name: t("Cuántos independientes agregar para llegar a la meta", "How many independents to add to reach the target"),
            expression: "(I + x) ÷ (T + x) ≥ meta   →   x ≥ (meta × T − I) ÷ (1 − meta)",
            variables: [
              { symbol: "I", meaning: t("Consejeros independientes que ya hay (número de personas).", "Independent directors already on the board (number of people).") },
              { symbol: "T", meaning: t("Total de consejeros actual, antes de agregar a nadie (número de personas).", "Current total number of directors, before adding anyone (number of people).") },
              { symbol: "x", meaning: t("Independientes nuevos que vas a agregar (número de personas). Es lo que buscas.", "New independents you will add (number of people). This is what you are looking for.") },
              { symbol: "meta", meaning: t("El porcentaje mínimo de independientes que pide la política, en decimal (40 % = 0.40).", "The minimum percentage of independents the policy requires, as a decimal (40% = 0.40).") },
            ],
            steps: [
              t("Convierte la meta a decimal: por ejemplo, 30 % = 0.30.", "Convert the target to a decimal: for example, 30% = 0.30."),
              t("Calcula meta × T y réstale los independientes actuales (I).", "Compute target × T and subtract the current independents (I)."),
              t("Divide ese resultado entre (1 − meta).", "Divide that result by (1 − target)."),
              t("Redondea **siempre hacia arriba**: no se puede agregar media persona, y quedarte abajo no cumple.", "**Always round up**: you cannot add half a person, and falling short does not comply."),
              t("Comprueba: (I + x) ÷ (T + x) debe dar la meta o más.", "Check: (I + x) ÷ (T + x) must equal the target or more."),
            ],
            example: t(
              "Consejo de 7 con 1 independiente y meta de 30 %. 0.30 × 7 = 2.1; 2.1 − 1 = 1.1; 1 − 0.30 = 0.70; 1.1 ÷ 0.70 = 1.57 → redondeas a **2**. Comprobación: (1 + 2) ÷ (7 + 2) = 3 ÷ 9 = 33.3 % ✓. Con 1 solo: 2 ÷ 8 = 25 % ✗.",
              "Board of 7 with 1 independent and a 30% target. 0.30 × 7 = 2.1; 2.1 − 1 = 1.1; 1 − 0.30 = 0.70; 1.1 ÷ 0.70 = 1.57 → round up to **2**. Check: (1 + 2) ÷ (7 + 2) = 3 ÷ 9 = 33.3% ✓. With only 1: 2 ÷ 8 = 25% ✗.",
            ),
            mistake: t(
              "Calcular la meta sobre el consejo actual (por ejemplo, 30 % de 7) y olvidar que el consejo **también crece** cuando agregas a los nuevos. Por eso se divide entre (1 − meta).",
              "Computing the target on the current board (for example, 30% of 7) and forgetting that the board **also grows** when you add the new members. That is why you divide by (1 − target).",
            ),
          },
        ],
      },
      {
        heading: t("Dirección estratégica: del plan a la ejecución vigilada", "Strategic leadership: from plan to monitored execution"),
        body: [
          t(
            "La **dirección estratégica** es el ciclo de decidir hacia dónde va la empresa, asignar recursos, ejecutar y corregir. El consejo no opera, pero sí **aprueba la estrategia, el presupuesto y los grandes riesgos**, y pide cuentas periódicas a la dirección.",
            "**Strategic leadership** is the cycle of deciding where the company is going, allocating resources, executing and correcting. The board does not run operations, but it does **approve strategy, budget and major risks**, and holds management accountable on a regular basis.",
          ),
          t(
            "Una herramienta muy usada es el **cuadro de mando integral** (balanced scorecard): mide la estrategia en cuatro perspectivas. **Financiera** (utilidad, flujo), **clientes** (satisfacción, recompra), **procesos internos** (tiempos, calidad) y **aprendizaje y crecimiento** (capacitación, sistemas). Así el consejo no ve solo las ventas del mes, sino si la empresa construye capacidades para el futuro.",
            "A widely used tool is the **balanced scorecard**: it measures strategy from four perspectives. **Financial** (profit, cash flow), **customers** (satisfaction, repeat purchases), **internal processes** (times, quality) and **learning and growth** (training, systems). This way the board does not only see this month's sales, but whether the company is building capabilities for the future.",
          ),
          t(
            "Para resumir el avance se puede asignar un **peso** a cada perspectiva y multiplicarlo por su **% de cumplimiento**. La suma da un puntaje global. Ojo: el número resume, no sustituye la conversación; un 85% global puede esconder un problema grave en una sola perspectiva.",
            "To summarize progress you can assign a **weight** to each perspective and multiply it by its **% achievement**. The sum gives an overall score. Careful: the number summarizes, it does not replace the discussion; an 85% overall can hide a serious problem in a single perspective.",
          ),
          t(
            "Mini ejemplo: una panadería con peso 50% en finanzas (cumplido al 80%) y 50% en clientes (cumplido al 100%) tiene puntaje 0.5 × 80 + 0.5 × 100 = 90%.",
            "Mini example: a bakery with a 50% weight on finance (80% achieved) and 50% on customers (100% achieved) scores 0.5 × 80 + 0.5 × 100 = 90%.",
          ),
        ],
        formulas: [
          {
            name: t("Puntaje global ponderado del cuadro de mando", "Weighted overall scorecard score"),
            expression: "Puntaje global = Σ (peso de la perspectiva × % de cumplimiento)",
            variables: [
              { symbol: "Σ", meaning: t("«Suma de»: haces la multiplicación para cada perspectiva y luego sumas todos los resultados.", "\"Sum of\": you do the multiplication for each perspective and then add all the results.") },
              { symbol: "peso de la perspectiva", meaning: t("Qué tan importante es esa perspectiva para la empresa, en decimal (30 % = 0.30). Todos los pesos juntos deben sumar 100 %.", "How important that perspective is for the company, as a decimal (30% = 0.30). All weights together must add up to 100%.") },
              { symbol: "% de cumplimiento", meaning: t("Qué tanto se logró de la meta de esa perspectiva (en %).", "How much of that perspective's target was achieved (in %).") },
              { symbol: "Aportación", meaning: t("El resultado de peso × cumplimiento de una sola perspectiva: los puntos que esa perspectiva suma al total.", "The result of weight × achievement for a single perspective: the points that perspective adds to the total.") },
              { symbol: "Puntaje global", meaning: t("La calificación general del periodo (en %).", "The overall grade for the period (in %).") },
            ],
            steps: [
              t("Convierte cada peso a decimal: 35 % = 0.35.", "Convert each weight to a decimal: 35% = 0.35."),
              t("Multiplica el peso de cada perspectiva por su % de cumplimiento: esa es su aportación.", "Multiply each perspective's weight by its % achievement: that is its contribution."),
              t("Suma las aportaciones de todas las perspectivas: ese es el puntaje global.", "Add up the contributions of all perspectives: that is the overall score."),
              t("Revisa además cada perspectiva por separado para ver cuál va rezagada.", "Also review each perspective separately to see which one is lagging."),
            ],
            example: t(
              "Pesos: financiera 35 %, clientes 25 %, procesos 20 %, aprendizaje 20 %; cumplimientos: 80 %, 90 %, 70 % y 100 %. Aportaciones: 0.35 × 80 = 28; 0.25 × 90 = 22.5; 0.20 × 70 = 14; 0.20 × 100 = 20. Puntaje global = 28 + 22.5 + 14 + 20 = **84.5 %**.",
              "Weights: financial 35%, customers 25%, processes 20%, learning 20%; achievements: 80%, 90%, 70% and 100%. Contributions: 0.35 × 80 = 28; 0.25 × 90 = 22.5; 0.20 × 70 = 14; 0.20 × 100 = 20. Overall score = 28 + 22.5 + 14 + 20 = **84.5%**.",
            ),
            interpret: t(
              "Es como el promedio de una boleta donde unas materias valen más que otras. Un puntaje alto es buena señal, pero una perspectiva muy baja (como 70 % en procesos) merece conversación aunque el total se vea bien.",
              "It is like a report-card average where some subjects count more than others. A high score is a good sign, but a very low perspective (such as 70% in processes) deserves discussion even if the total looks good.",
            ),
            mistake: t(
              "Promediar los cumplimientos sin pesos (sumarlos y dividir entre 4). Eso trata a todas las perspectivas como si valieran lo mismo.",
              "Averaging the achievements without weights (adding them and dividing by 4). That treats every perspective as if it were worth the same.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Armar un consejo con suficientes independientes", "Building a board with enough independent directors"),
        problem: t(
          "Una empresa familiar hipotética tiene un consejo de 6 miembros, todos de la familia. Quiere que al menos 1 de cada 3 consejeros (33.3%) sea independiente, sin quitar a ningún familiar. ¿Cuántos independientes debe agregar?",
          "A hypothetical family business has a 6-member board, all family members. It wants at least 1 out of every 3 directors (33.3%) to be independent, without removing any family member. How many independent directors must it add?",
        ),
        steps: [
          t("Llama x al número de independientes nuevos. El consejo tendrá 6 + x miembros.", "Call x the number of new independent directors. The board will have 6 + x members."),
          t("Condición: x ÷ (6 + x) ≥ 1/3 → 3x ≥ 6 + x → 2x ≥ 6 → x ≥ 3.", "Condition: x ÷ (6 + x) ≥ 1/3 → 3x ≥ 6 + x → 2x ≥ 6 → x ≥ 3."),
          t("Comprueba con x = 3: 3 ÷ 9 = 33.3% ✓. Con x = 2: 2 ÷ 8 = 25% ✗.", "Check with x = 3: 3 ÷ 9 = 33.3% ✓. With x = 2: 2 ÷ 8 = 25% ✗."),
          t("Revisa que el total quede impar (9) para evitar empates en votaciones.", "Check that the total is odd (9) to avoid tied votes."),
        ],
        result: t(
          "Debe agregar 3 consejeros independientes; el consejo queda de 9 miembros con 33.3% de independencia.",
          "It must add 3 independent directors; the board ends up with 9 members and 33.3% independence.",
        ),
      },
      {
        title: t("Puntaje del cuadro de mando para la sesión del consejo", "Scorecard score for the board meeting"),
        problem: t(
          "Una distribuidora hipotética pondera su cuadro de mando así: financiera 40%, clientes 30%, procesos 20% y aprendizaje 10%. Los cumplimientos del trimestre son 95%, 70%, 90% y 60%. ¿Cuál es el puntaje global y qué debería discutir el consejo?",
          "A hypothetical distributor weights its scorecard as follows: financial 40%, customers 30%, processes 20% and learning 10%. The quarter's achievements are 95%, 70%, 90% and 60%. What is the overall score and what should the board discuss?",
        ),
        steps: [
          t("Financiera: 0.40 × 95 = 38.", "Financial: 0.40 × 95 = 38."),
          t("Clientes: 0.30 × 70 = 21.", "Customers: 0.30 × 70 = 21."),
          t("Procesos: 0.20 × 90 = 18. Aprendizaje: 0.10 × 60 = 6.", "Processes: 0.20 × 90 = 18. Learning: 0.10 × 60 = 6."),
          t("Suma: 38 + 21 + 18 + 6 = 83%.", "Sum: 38 + 21 + 18 + 6 = 83%."),
          t("Lectura: las finanzas van bien, pero clientes (70%) y aprendizaje (60%) van rezagados: son señales tempranas de problemas futuros en ventas.", "Reading: finances are doing well, but customers (70%) and learning (60%) lag behind: they are early signs of future sales problems."),
        ],
        result: t(
          "Puntaje global de 83%. El consejo debe pedir a la dirección un plan concreto para clientes y capacitación, no solo celebrar el resultado financiero.",
          "Overall score of 83%. The board should ask management for a concrete plan for customers and training, not just celebrate the financial result.",
        ),
      },
    ],
    keyPoints: [
      t("Asamblea, consejo y dirección tienen papeles distintos: dueños deciden lo estructural, el consejo la estrategia y la vigilancia, la dirección la ejecución.", "Shareholders' meeting, board and management have different roles: owners decide structural matters, the board strategy and oversight, management execution."),
      t("El problema de agencia aparece cuando quien decide no es el dueño; se reduce con independencia, comités e información confiable.", "The agency problem appears when the decision-maker is not the owner; it is reduced with independence, committees and reliable information."),
      t("Ante un conflicto de interés: declarar, abstenerse de votar y aprobar a precio de mercado.", "Facing a conflict of interest: disclose, abstain from voting and approve at market price."),
      t("El cuadro de mando integral equilibra finanzas, clientes, procesos y aprendizaje.", "The balanced scorecard balances finance, customers, processes and learning."),
      t("Un puntaje global resume, pero el consejo debe revisar cada perspectiva por separado.", "An overall score summarizes, but the board must review each perspective separately."),
    ],
    normativeNote: t(
      "Contenido educativo. En México, la Ley General de Sociedades Mercantiles regula la asamblea de accionistas y la administración de las sociedades, y la Ley del Mercado de Valores impone requisitos adicionales a las empresas que cotizan en bolsa (por ejemplo, un porcentaje mínimo de consejeros independientes y comités de auditoría y de prácticas societarias). El Consejo Coordinador Empresarial publica un Código de Mejores Prácticas Corporativas de adopción voluntaria. Los porcentajes de los ejemplos son hipotéticos y las reglas cambian: verifica la versión vigente (2026) y consulta a un abogado corporativo para tu caso.",
      "Educational content. In Mexico, the General Law of Commercial Companies (Ley General de Sociedades Mercantiles) regulates the shareholders' meeting and company management, and the Securities Market Law (Ley del Mercado de Valores) imposes additional requirements on listed companies (for example, a minimum percentage of independent directors and audit and corporate practices committees). The Business Coordinating Council (Consejo Coordinador Empresarial) publishes a voluntary Code of Best Corporate Practices. The percentages in the examples are hypothetical and rules change: verify the current version (2026) and consult a corporate lawyer for your case.",
    ),
    exerciseIds: ['EMP-19-E1', 'EMP-19-E2', 'EMP-19-E3', 'EMP-19-E4', 'EMP-19-E5', 'EMP-19-E6'],
  },

  // ───────────────────────────── EMP-20 ─────────────────────────────
  {
    id: 'EMP-20',
    level: 1,
    topicIds: ['EMP.20'],
    title: t("Sostenibilidad y criterios ESG en los negocios", "Sustainability and ESG criteria in business"),
    summary: t(
      "Los criterios ESG miden cómo una empresa maneja sus impactos y riesgos ambientales, sociales y de gobierno; bien aplicados, reducen costos y riesgos y abren financiamiento, siempre que se midan y comuniquen con honestidad.",
      "ESG criteria measure how a company manages its environmental, social and governance impacts and risks; applied well, they reduce costs and risks and open up financing, as long as they are measured and communicated honestly.",
    ),
    minutes: 18,
    objectives: [
      t(
        "Clasificar temas de negocio en las dimensiones ambiental, social y de gobierno (ESG).",
        "Classify business issues into the environmental, social and governance (ESG) dimensions.",
      ),
      t(
        "Aplicar el concepto de doble materialidad para priorizar los temas ESG de una empresa.",
        "Apply the double materiality concept to prioritize a company's ESG issues.",
      ),
      t(
        "Calcular emisiones por alcance, intensidad de emisiones y el periodo de recuperación de una inversión sostenible.",
        "Compute emissions by scope, emissions intensity and the payback period of a sustainable investment.",
      ),
      t(
        "Reconocer señales de greenwashing en la comunicación de una empresa.",
        "Recognize signs of greenwashing in a company's communication.",
      ),
    ],
    theory: [
      {
        heading: t("Qué es ESG y por qué importa a un negocio", "What ESG is and why it matters to a business"),
        body: [
          t(
            "**Sostenibilidad** es operar hoy sin comprometer los recursos, las personas ni la confianza que el negocio necesitará mañana. **ESG** son sus siglas en inglés para tres dimensiones: **ambiental** (Environmental: energía, agua, residuos, emisiones), **social** (Social: empleados, clientes, comunidad, proveedores) y **gobierno** (Governance: ética, consejo, transparencia, anticorrupción).",
            "**Sustainability** means operating today without compromising the resources, people or trust the business will need tomorrow. **ESG** stands for three dimensions: **environmental** (energy, water, waste, emissions), **social** (employees, customers, community, suppliers) and **governance** (ethics, board, transparency, anti-corruption).",
          ),
          t(
            "No es solo filantropía. Un taller que desperdicia agua paga más recibos; una fábrica con alta rotación de personal gasta en reclutar y capacitar; una empresa sin controles sufre fraudes. Los temas ESG son **riesgos y oportunidades financieras** que tarde o temprano aparecen en el estado de resultados.",
            "It is not just philanthropy. A workshop that wastes water pays higher bills; a factory with high staff turnover spends on recruiting and training; a company without controls suffers fraud. ESG issues are **financial risks and opportunities** that sooner or later show up on the income statement.",
          ),
          t(
            "Para no querer abarcar todo, se usa la **materialidad**: enfocarse en los temas que de verdad importan. La **doble materialidad** los mira desde dos lados: **materialidad financiera** (cómo el tema afecta el dinero de la empresa, de afuera hacia adentro) y **materialidad de impacto** (cómo la empresa afecta a las personas y al ambiente, de adentro hacia afuera). Un tema es prioritario si es relevante en cualquiera de los dos lados.",
            "To avoid trying to cover everything, **materiality** is used: focusing on the issues that really matter. **Double materiality** looks at them from two sides: **financial materiality** (how the issue affects the company's money, outside-in) and **impact materiality** (how the company affects people and the environment, inside-out). An issue is a priority if it is relevant on either side.",
          ),
          t(
            "Mini ejemplo: para una embotelladora de agua, el uso de agua es material en ambos sentidos: la escasez puede frenar su producción y su extracción afecta a la comunidad cercana.",
            "Mini example: for a water bottler, water use is material in both directions: scarcity can halt its production, and its extraction affects the nearby community.",
          ),
        ],
        bullets: [
          t("E: energía, agua, residuos, emisiones, biodiversidad.", "E: energy, water, waste, emissions, biodiversity."),
          t("S: condiciones laborales, seguridad, clientes, comunidad, cadena de suministro.", "S: working conditions, safety, customers, community, supply chain."),
          t("G: consejo, ética, anticorrupción, transparencia, derechos de accionistas.", "G: board, ethics, anti-corruption, transparency, shareholder rights."),
          t("Doble materialidad: impacto en la empresa + impacto de la empresa.", "Double materiality: impact on the company + impact of the company."),
        ],
      },
      {
        heading: t("Medir para gestionar: alcances de emisiones, indicadores y reportes", "Measure to manage: emission scopes, indicators and reports"),
        body: [
          t(
            "Lo que no se mide no se gestiona. Para el clima, la referencia más usada es el **Protocolo de Gases de Efecto Invernadero (GHG Protocol)**, que divide las emisiones en tres **alcances**. **Alcance 1**: emisiones directas de fuentes propias (el gas de tus hornos, la gasolina de tus camionetas). **Alcance 2**: emisiones indirectas por la **electricidad** (u otra energía) que compras. **Alcance 3**: todas las demás de tu cadena de valor: proveedores, transporte contratado, viajes de negocio, uso y desecho de tus productos.",
            "What is not measured is not managed. For climate, the most widely used reference is the **Greenhouse Gas Protocol (GHG Protocol)**, which divides emissions into three **scopes**. **Scope 1**: direct emissions from sources you own (the gas in your ovens, the fuel in your vans). **Scope 2**: indirect emissions from the **electricity** (or other energy) you buy. **Scope 3**: all others in your value chain: suppliers, contracted transport, business travel, use and disposal of your products.",
          ),
          t(
            "Las emisiones se expresan en **toneladas de CO₂ equivalente (tCO₂e)**, una unidad común para sumar distintos gases. Para comparar empresas de distinto tamaño se usa la **intensidad**: emisiones divididas entre ventas, unidades producidas o empleados. En lo social se miden, por ejemplo, la **rotación de personal**, los accidentes laborales y las horas de capacitación.",
            "Emissions are expressed in **tonnes of CO₂ equivalent (tCO₂e)**, a common unit to add up different gases. To compare companies of different sizes, **intensity** is used: emissions divided by sales, units produced or employees. On the social side, for example, **staff turnover**, workplace accidents and training hours are measured.",
          ),
          t(
            "Para reportar existen marcos reconocidos: los **Estándares GRI** (enfocados en impactos), las normas del **ISSB** (IFRS S1 y S2, enfocadas en lo financiero para inversionistas) y, en México, las **Normas de Información de Sostenibilidad (NIS)** emitidas por el CINIF. Un buen reporte compara contra años anteriores y explica su método.",
            "For reporting there are recognized frameworks: the **GRI Standards** (focused on impacts), the **ISSB** standards (IFRS S1 and S2, focused on financial matters for investors) and, in Mexico, the **Sustainability Information Standards (NIS)** issued by CINIF. A good report compares against previous years and explains its method.",
          ),
          t(
            "Mini ejemplo: una panadería emite 30 tCO₂e por su gas (alcance 1) y 20 tCO₂e por su luz (alcance 2). Si vende $10 millones al año, su intensidad de alcances 1 y 2 es 50 ÷ 10 = 5 tCO₂e por millón de pesos.",
            "Mini example: a bakery emits 30 tCO₂e from its gas (scope 1) and 20 tCO₂e from its electricity (scope 2). If it sells $10 million a year, its scope 1 and 2 intensity is 50 ÷ 10 = 5 tCO₂e per million pesos.",
          ),
        ],
        formulas: [
          {
            name: t("Emisiones por alcance e intensidad de alcances 1 y 2", "Emissions by scope and scope 1 and 2 intensity"),
            expression: "Alcance 1 = suma de fuentes propias  |  Alcance 2 = electricidad (u otra energía) comprada  |  Intensidad = (alcance 1 + alcance 2) ÷ ventas en millones de pesos",
            variables: [
              { symbol: "Alcance 1", meaning: t("Emisiones de lo que la empresa quema directamente: gas de sus hornos o calderas, combustible de sus propios vehículos (en tCO₂e).", "Emissions from what the company burns directly: gas in its ovens or boilers, fuel in its own vehicles (in tCO₂e).") },
              { symbol: "Alcance 2", meaning: t("Emisiones por la electricidad u otra energía que la empresa compra (en tCO₂e).", "Emissions from the electricity or other energy the company buys (in tCO₂e).") },
              { symbol: "tCO₂e", meaning: t("Toneladas de CO₂ equivalente: una sola unidad para sumar distintos gases, como usar pesos para sumar monedas de distintos países.", "Tonnes of CO₂ equivalent: a single unit to add up different gases, like using pesos to add up coins from different countries.") },
              { symbol: "ventas en millones de pesos", meaning: t("Las ventas del año expresadas en millones: $60,000,000 se escribe 60.", "The year's sales expressed in millions: $60,000,000 is written as 60.") },
              { symbol: "Intensidad", meaning: t("Cuántas tCO₂e emite la empresa por cada millón de pesos que vende. Sirve para comparar empresas de distinto tamaño.", "How many tCO₂e the company emits for each million pesos it sells. Used to compare companies of different sizes.") },
            ],
            steps: [
              t("Separa cada fuente: ¿es propia (alcance 1), es energía comprada (alcance 2) o es de la cadena de valor (alcance 3)?", "Sort each source: is it owned (scope 1), purchased energy (scope 2) or from the value chain (scope 3)?"),
              t("Suma las fuentes propias: ese es el alcance 1.", "Add up the owned sources: that is scope 1."),
              t("Toma las emisiones de la electricidad comprada: ese es el alcance 2.", "Take the emissions from purchased electricity: that is scope 2."),
              t("Convierte las ventas a millones de pesos (divide entre 1,000,000).", "Convert sales to millions of pesos (divide by 1,000,000)."),
              t("Suma alcance 1 + alcance 2 y divide entre las ventas en millones: esa es la intensidad.", "Add scope 1 + scope 2 and divide by sales in millions: that is the intensity."),
            ],
            example: t(
              "Un restaurante emite 40 tCO₂e por el gas de su cocina y 25 tCO₂e por sus motos de reparto propias; su luz genera 55 tCO₂e; la mensajería contratada, 100 tCO₂e; vende $15,000,000. Alcance 1 = 40 + 25 = **65 tCO₂e**. Alcance 2 = **55 tCO₂e**. La mensajería es alcance 3 y no entra. Ventas: 15,000,000 ÷ 1,000,000 = 15. Intensidad = (65 + 55) ÷ 15 = 120 ÷ 15 = **8 tCO₂e por millón de pesos**.",
              "A restaurant emits 40 tCO₂e from its kitchen gas and 25 tCO₂e from its own delivery motorbikes; its electricity generates 55 tCO₂e; contracted couriers, 100 tCO₂e; it sells $15,000,000. Scope 1 = 40 + 25 = **65 tCO₂e**. Scope 2 = **55 tCO₂e**. Couriers are scope 3 and are left out. Sales: 15,000,000 ÷ 1,000,000 = 15. Intensity = (65 + 55) ÷ 15 = 120 ÷ 15 = **8 tCO₂e per million pesos**.",
            ),
            interpret: t(
              "Entre más baja la intensidad, menos contamina la empresa por cada peso que vende. Si la intensidad baja de un año a otro, la empresa crece contaminando proporcionalmente menos.",
              "The lower the intensity, the less the company pollutes for each peso it sells. If intensity falls from one year to the next, the company is growing while polluting proportionally less.",
            ),
            mistake: t(
              "Meter emisiones de proveedores o transporte contratado en el alcance 1 o en esta intensidad. Si no es tuyo ni es energía que compras, es alcance 3.",
              "Putting supplier or contracted-transport emissions into scope 1 or into this intensity. If you don't own it and it isn't energy you buy, it is scope 3.",
            ),
          },
        ],
      },
      {
        heading: t("ESG en la estrategia: inversiones, financiamiento y greenwashing", "ESG in strategy: investments, financing and greenwashing"),
        body: [
          t(
            "Muchas mejoras ESG se evalúan como cualquier inversión. Paneles solares, iluminación LED o reciclar agua cuestan hoy y ahorran cada año. Un primer filtro es el **periodo de recuperación** (payback): cuántos años tarda el ahorro neto en devolver la inversión. Recuerda restar costos nuevos, como el mantenimiento.",
            "Many ESG improvements are evaluated like any other investment. Solar panels, LED lighting or water recycling cost money today and save money every year. A first filter is the **payback period**: how many years the net savings take to return the investment. Remember to subtract new costs, such as maintenance.",
          ),
          t(
            "El desempeño ESG también influye en el **financiamiento**. Existen **bonos verdes** (el dinero se usa en proyectos ambientales específicos), **bonos sociales** y **créditos vinculados a sostenibilidad**, cuya tasa puede bajar o subir según la empresa cumpla metas acordadas. Grandes clientes y cadenas comerciales piden cada vez más datos ESG a sus proveedores pequeños.",
            "ESG performance also influences **financing**. There are **green bonds** (the money is used for specific environmental projects), **social bonds** and **sustainability-linked loans**, whose rate may go down or up depending on whether the company meets agreed targets. Large customers and retail chains increasingly ask their small suppliers for ESG data.",
          ),
          t(
            "El riesgo es el **greenwashing** (lavado verde): presumir beneficios ambientales o sociales que no existen o están exagerados. Señales típicas: frases vagas como «100% eco» sin datos, destacar un detalle pequeño mientras se oculta el impacto principal, metas a 30 años sin plan intermedio, o etiquetas inventadas. Además de dañar la reputación, puede generar sanciones por publicidad engañosa.",
            "The risk is **greenwashing**: claiming environmental or social benefits that do not exist or are exaggerated. Typical signs: vague phrases like «100% eco» without data, highlighting a small detail while hiding the main impact, 30-year targets with no interim plan, or made-up labels. Besides damaging reputation, it can lead to penalties for misleading advertising.",
          ),
          t(
            "Mini ejemplo: una tienda instala LED por $40,000 y ahorra $10,000 al año en luz: recupera la inversión en 4 años y además baja su alcance 2.",
            "Mini example: a store installs LED lighting for $40,000 and saves $10,000 a year on electricity: it recovers the investment in 4 years and also lowers its scope 2.",
          ),
        ],
        bullets: [
          t("Payback = inversión ÷ ahorro neto anual.", "Payback = investment ÷ annual net savings."),
          t("Bono verde: recursos etiquetados para proyectos ambientales.", "Green bond: funds earmarked for environmental projects."),
          t("Crédito vinculado a sostenibilidad: la tasa depende de metas.", "Sustainability-linked loan: the rate depends on targets."),
          t("Greenwashing: afirmaciones vagas, sin datos o engañosas.", "Greenwashing: vague, unsupported or misleading claims."),
        ],
        formulas: [
          {
            name: t("Periodo de recuperación (payback) de una inversión sostenible", "Payback period of a sustainable investment"),
            expression: "Periodo de recuperación (años) = inversión ÷ (ahorro anual − costos anuales nuevos)",
            variables: [
              { symbol: "inversión", meaning: t("Lo que pagas hoy por el proyecto (paneles, LED, sistema de agua), en pesos.", "What you pay today for the project (panels, LED, water system), in pesos.") },
              { symbol: "ahorro anual", meaning: t("Lo que dejas de gastar cada año gracias al proyecto (luz, agua, gas), en pesos por año.", "What you stop spending each year thanks to the project (electricity, water, gas), in pesos per year.") },
              { symbol: "costos anuales nuevos", meaning: t("Gastos que el proyecto agrega cada año, como mantenimiento o limpieza, en pesos por año.", "Costs the project adds each year, such as maintenance or cleaning, in pesos per year.") },
              { symbol: "ahorro anual − costos anuales nuevos", meaning: t("El **ahorro neto**: lo que de verdad te queda cada año.", "The **net savings**: what you really keep each year.") },
              { symbol: "Periodo de recuperación", meaning: t("Cuántos años tardas en recuperar lo invertido (en años).", "How many years it takes to get back what you invested (in years).") },
            ],
            steps: [
              t("Calcula el ahorro neto: ahorro anual menos costos anuales nuevos.", "Compute net savings: annual savings minus new annual costs."),
              t("Divide la inversión entre el ahorro neto: el resultado está en años.", "Divide the investment by the net savings: the result is in years."),
              t("Compara con la regla de la empresa (por ejemplo, «máximo 6 años»).", "Compare with the company's rule (for example, \"at most 6 years\")."),
            ],
            example: t(
              "Un calentador solar cuesta $90,000, ahorra $25,000 al año en gas y requiere $5,000 al año de mantenimiento. Ahorro neto = 25,000 − 5,000 = $20,000. Periodo = 90,000 ÷ 20,000 = **4.5 años**.",
              "A solar water heater costs $90,000, saves $25,000 a year on gas and needs $5,000 a year in maintenance. Net savings = 25,000 − 5,000 = $20,000. Payback = 90,000 ÷ 20,000 = **4.5 years**.",
            ),
            interpret: t(
              "Entre menos años, más rápido regresa tu dinero y menos riesgo corres. Es un primer filtro: no toma en cuenta lo que pasa después de recuperar la inversión.",
              "The fewer the years, the faster your money comes back and the less risk you take. It is a first filter: it ignores what happens after the investment is recovered.",
            ),
            mistake: t(
              "Usar el ahorro bruto y olvidar el mantenimiento (90,000 ÷ 25,000 = 3.6 años). El proyecto parece mejor de lo que es.",
              "Using gross savings and forgetting maintenance (90,000 ÷ 25,000 = 3.6 years). The project looks better than it is.",
            ),
          },
        ],
      },
    ],
    examples: [
      {
        title: t("Huella e intensidad de una fábrica de muebles", "Footprint and intensity of a furniture factory"),
        problem: t(
          "Una fábrica hipotética de muebles reporta: gas para hornos de secado 90 tCO₂e, diésel de sus camiones 60 tCO₂e, electricidad comprada 150 tCO₂e y transporte de proveedores 200 tCO₂e. Vende $60 millones al año. Calcula alcance 1, alcance 2 e intensidad de alcances 1 y 2.",
          "A hypothetical furniture factory reports: gas for drying kilns 90 tCO₂e, diesel for its trucks 60 tCO₂e, purchased electricity 150 tCO₂e and supplier transport 200 tCO₂e. It sells $60 million a year. Compute scope 1, scope 2 and scope 1 and 2 intensity.",
        ),
        steps: [
          t("Alcance 1 (fuentes propias): gas + diésel = 90 + 60 = 150 tCO₂e.", "Scope 1 (own sources): gas + diesel = 90 + 60 = 150 tCO₂e."),
          t("Alcance 2 (electricidad comprada): 150 tCO₂e.", "Scope 2 (purchased electricity): 150 tCO₂e."),
          t("El transporte de proveedores (200 tCO₂e) es alcance 3; no entra en la intensidad de 1 y 2.", "Supplier transport (200 tCO₂e) is scope 3; it is not included in the scope 1 and 2 intensity."),
          t("Intensidad: (150 + 150) ÷ 60 = 5 tCO₂e por millón de pesos.", "Intensity: (150 + 150) ÷ 60 = 5 tCO₂e per million pesos."),
        ],
        result: t(
          "Alcance 1 = 150 tCO₂e, alcance 2 = 150 tCO₂e, intensidad = 5 tCO₂e por millón de pesos. La mitad viene de la electricidad, así que eficiencia energética o energía limpia serían prioridades.",
          "Scope 1 = 150 tCO₂e, scope 2 = 150 tCO₂e, intensity = 5 tCO₂e per million pesos. Half comes from electricity, so energy efficiency or clean energy would be priorities.",
        ),
      },
      {
        title: t("¿Conviene el sistema de captación de lluvia?", "Is the rainwater harvesting system worth it?"),
        problem: t(
          "Una lavandería hipotética evalúa un sistema de captación y reúso de agua que cuesta $150,000. Ahorraría $36,000 al año en agua, pero requiere $6,000 anuales de mantenimiento. Su regla interna acepta proyectos que se recuperen en 6 años o menos.",
          "A hypothetical laundry is evaluating a water harvesting and reuse system that costs $150,000. It would save $36,000 a year on water, but requires $6,000 a year in maintenance. Its internal rule accepts projects that pay back in 6 years or less.",
        ),
        steps: [
          t("Ahorro neto anual: 36,000 − 6,000 = $30,000.", "Annual net savings: 36,000 − 6,000 = $30,000."),
          t("Payback: 150,000 ÷ 30,000 = 5 años.", "Payback: 150,000 ÷ 30,000 = 5 years."),
          t("Compara: 5 años ≤ 6 años, cumple la regla.", "Compare: 5 years ≤ 6 years, it meets the rule."),
          t("Considera beneficios no monetarios: menor riesgo ante escasez de agua y mejor imagen con clientes, siempre comunicados con datos reales.", "Consider non-monetary benefits: lower risk from water shortages and a better image with customers, always communicated with real data."),
        ],
        result: t(
          "El proyecto se recupera en 5 años y cumple la regla. Si se hubiera olvidado el mantenimiento, el cálculo daría 4.17 años y parecería mejor de lo que es.",
          "The project pays back in 5 years and meets the rule. If maintenance had been forgotten, the calculation would give 4.17 years and look better than it is.",
        ),
      },
    ],
    keyPoints: [
      t("ESG agrupa temas ambientales, sociales y de gobierno que se vuelven riesgos u oportunidades financieras.", "ESG groups environmental, social and governance issues that become financial risks or opportunities."),
      t("La doble materialidad prioriza lo que afecta a la empresa y lo que la empresa afecta.", "Double materiality prioritizes what affects the company and what the company affects."),
      t("Alcance 1 = fuentes propias; alcance 2 = energía comprada; alcance 3 = resto de la cadena de valor.", "Scope 1 = own sources; scope 2 = purchased energy; scope 3 = rest of the value chain."),
      t("La intensidad permite comparar empresas de distinto tamaño.", "Intensity allows comparing companies of different sizes."),
      t("Evalúa inversiones sostenibles con ahorro neto, no bruto.", "Evaluate sustainable investments with net, not gross, savings."),
      t("Comunica con datos verificables para evitar el greenwashing.", "Communicate with verifiable data to avoid greenwashing."),
    ],
    normativeNote: t(
      "Contenido educativo. Los marcos de reporte de sostenibilidad (GRI, ISSB con IFRS S1 y S2, y en México las Normas de Información de Sostenibilidad del CINIF) y las reglas de las autoridades financieras sobre divulgación ESG están en evolución; su obligatoriedad depende del tipo de empresa y de la fecha. Las afirmaciones ambientales en publicidad pueden estar sujetas a la normativa de protección al consumidor. Las cifras de los ejemplos son hipotéticas: verifica la versión vigente (2026) de cada marco y norma antes de aplicarla.",
      "Educational content. Sustainability reporting frameworks (GRI, ISSB with IFRS S1 and S2, and in Mexico CINIF's Sustainability Information Standards) and financial authorities' rules on ESG disclosure are evolving; whether they are mandatory depends on the type of company and the date. Environmental claims in advertising may be subject to consumer protection rules. Figures in the examples are hypothetical: verify the current version (2026) of each framework and standard before applying it.",
    ),
    exerciseIds: ['EMP-20-E1', 'EMP-20-E2', 'EMP-20-E3', 'EMP-20-E4', 'EMP-20-E5', 'EMP-20-E6'],
  },
]

export const exercises: Exercise[] = [
  // ───────────────────────────── EMP-19 ─────────────────────────────
  {
    id: 'EMP-19-E1',
    level: 1,
    module: 'EMP-19',
    kind: 'mcq',
    flavor: 'concept',
    prompt: t(
      "En gobierno corporativo, ¿qué describe mejor el problema de agencia?",
      "In corporate governance, what best describes the agency problem?",
    ),
    options: [
      { id: 'EMP-19-E1-a', text: t("Que la empresa no tenga una agencia de publicidad que cuide su imagen.", "The company not having an advertising agency to look after its image.") },
      { id: 'EMP-19-E1-b', text: t("Que quien toma las decisiones (el director) tenga intereses distintos a los de los dueños y actúe en su propio beneficio.", "The decision-maker (the CEO) having interests different from those of the owners and acting for their own benefit.") },
      { id: 'EMP-19-E1-c', text: t("Que los accionistas no puedan vender sus acciones cuando quieran.", "Shareholders being unable to sell their shares whenever they want.") },
      { id: 'EMP-19-E1-d', text: t("Que el consejo tenga demasiados consejeros independientes.", "The board having too many independent directors.") },
    ],
    correctOptionId: 'EMP-19-E1-b',
    explanation: t(
      "El problema de agencia surge por la separación entre propiedad y gestión: el agente (director) decide con el dinero del principal (dueños) y sus intereses pueden no coincidir. Se reduce con consejeros independientes, comités, incentivos alineados e información confiable. Error común: confundirlo con la falta de liquidez de las acciones, que es otro tema.",
      "The agency problem arises from the separation of ownership and management: the agent (CEO) decides with the principal's (owners') money and their interests may not align. It is reduced with independent directors, committees, aligned incentives and reliable information. Common mistake: confusing it with the lack of liquidity of shares, which is a different issue.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'corporate-governance',
  },
  {
    id: 'EMP-19-E2',
    level: 1,
    module: 'EMP-19',
    kind: 'classify',
    flavor: 'concept',
    context: t(
      "Una cadena regional de farmacias es una sociedad anónima con asamblea de accionistas, consejo de administración y director general.",
      "A regional pharmacy chain is a corporation with a shareholders' meeting, a board of directors and a CEO.",
    ),
    prompt: t(
      "Clasifica cada decisión de la cadena de farmacias según el órgano que normalmente la toma.",
      "Classify each decision of the pharmacy chain by the body that normally makes it.",
    ),
    categories: [
      { id: 'EMP-19-E2-c1', label: t("Asamblea de accionistas", "Shareholders' meeting") },
      { id: 'EMP-19-E2-c2', label: t("Consejo de administración", "Board of directors") },
      { id: 'EMP-19-E2-c3', label: t("Dirección general", "Executive management") },
    ],
    items: [
      { id: 'EMP-19-E2-i1', label: t("Nombrar a los miembros del consejo", "Appoint the board members"), correctCategoryId: 'EMP-19-E2-c1' },
      { id: 'EMP-19-E2-i2', label: t("Aprobar una fusión con otra cadena", "Approve a merger with another chain"), correctCategoryId: 'EMP-19-E2-c1' },
      { id: 'EMP-19-E2-i3', label: t("Aprobar el plan estratégico a tres años y el presupuesto anual", "Approve the three-year strategic plan and the annual budget"), correctCategoryId: 'EMP-19-E2-c2' },
      { id: 'EMP-19-E2-i4', label: t("Evaluar el desempeño del director general y fijar su compensación", "Evaluate the CEO's performance and set their pay"), correctCategoryId: 'EMP-19-E2-c2' },
      { id: 'EMP-19-E2-i5', label: t("Negociar precios con un laboratorio proveedor", "Negotiate prices with a supplier laboratory"), correctCategoryId: 'EMP-19-E2-c3' },
      { id: 'EMP-19-E2-i6', label: t("Definir los horarios de las sucursales", "Set the branches' opening hours"), correctCategoryId: 'EMP-19-E2-c3' },
    ],
    explanation: t(
      "La asamblea decide lo estructural (quién gobierna, fusiones, capital); el consejo define y vigila la estrategia, el presupuesto y al director; la dirección ejecuta la operación diaria. Error común: pensar que el consejo debe negociar con proveedores o fijar horarios; si lo hace, invade la gestión y deja de vigilarla con objetividad.",
      "The shareholders' meeting decides structural matters (who governs, mergers, capital); the board sets and oversees strategy, budget and the CEO; management runs daily operations. Common mistake: thinking the board should negotiate with suppliers or set opening hours; if it does, it invades management and stops overseeing it objectively.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'EMP-19-E3',
    level: 1,
    module: 'EMP-19',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: el director de finanzas de una empresa puede formar parte de su consejo como consejero independiente, porque conoce mejor que nadie los números.",
      "True or false: a company's CFO can sit on its board as an independent director, because they know the numbers better than anyone.",
    ),
    answer: false,
    explanation: t(
      "Falso. Un consejero independiente no debe tener relación laboral, familiar ni de negocios relevante con la empresa, porque su papel es vigilar a la dirección con libertad. El director de finanzas puede asistir al consejo a presentar información o ser consejero no independiente, pero no independiente. Error común: confundir conocimiento con independencia.",
      "False. An independent director must not have an employment, family or significant business relationship with the company, because their role is to oversee management freely. The CFO can attend the board to present information or be a non-independent director, but not an independent one. Common mistake: confusing knowledge with independence.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'corporate-governance',
  },
  {
    id: 'EMP-19-E4',
    level: 1,
    module: 'EMP-19',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una empresa constructora hipotética tiene un consejo de 10 miembros, de los cuales 2 son independientes. Su nueva política exige que al menos el 40% del consejo sea independiente, y los socios no quieren retirar a ningún consejero actual.",
      "A hypothetical construction company has a 10-member board, 2 of whom are independent. Its new policy requires at least 40% of the board to be independent, and the partners do not want to remove any current director.",
    ),
    prompt: t(
      "¿Cuántos consejeros independientes nuevos, como mínimo, debe agregar la constructora para cumplir su política?",
      "What is the minimum number of new independent directors the construction company must add to meet its policy?",
    ),
    answer: 4,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: t(
      "Con x nuevos independientes: (2 + x) ÷ (10 + x) ≥ 0.40 → 2 + x ≥ 4 + 0.4x → 0.6x ≥ 2 → x ≥ 3.33, así que x = 4. Comprobación: 6 ÷ 14 = 42.9% ✓; con 3 serían 5 ÷ 13 = 38.5% ✗. Error común: calcular 40% de 10 = 4 independientes y responder 2 nuevos, olvidando que el consejo también crece al agregarlos.",
      "With x new independents: (2 + x) ÷ (10 + x) ≥ 0.40 → 2 + x ≥ 4 + 0.4x → 0.6x ≥ 2 → x ≥ 3.33, so x = 4. Check: 6 ÷ 14 = 42.9% ✓; with 3 it would be 5 ÷ 13 = 38.5% ✗. Common mistake: computing 40% of 10 = 4 independents and answering 2 new ones, forgetting that the board also grows when they are added.",
    ),
    difficulty: 3,
    points: 20,
    competency: 'corporate-governance',
  },
  {
    id: 'EMP-19-E5',
    level: 1,
    module: 'EMP-19',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "El cuadro de mando integral de una agencia de viajes hipotética tiene estos pesos y cumplimientos del semestre: financiera 30% (cumplida al 90%), clientes 25% (80%), procesos internos 25% (100%) y aprendizaje y crecimiento 20% (70%).",
      "A hypothetical travel agency's balanced scorecard has these weights and half-year achievements: financial 30% (90% achieved), customers 25% (80%), internal processes 25% (100%) and learning and growth 20% (70%).",
    ),
    prompt: t(
      "Calcula la aportación de la perspectiva financiera al puntaje y el puntaje global ponderado de la agencia de viajes.",
      "Compute the financial perspective's contribution to the score and the travel agency's overall weighted score.",
    ),
    fields: [
      { id: 'f1', label: t("Aportación de la perspectiva financiera (puntos %)", "Financial perspective contribution (% points)"), answer: 27, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: t("Puntaje global ponderado", "Overall weighted score"), answer: 86, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Financiera: 0.30 × 90 = 27. Clientes: 0.25 × 80 = 20. Procesos: 0.25 × 100 = 25. Aprendizaje: 0.20 × 70 = 14. Total: 27 + 20 + 25 + 14 = 86%. Error común: promediar los cumplimientos sin pesos ((90 + 80 + 100 + 70) ÷ 4 = 85%) o sumar los cumplimientos completos sin multiplicarlos por su peso.",
      "Financial: 0.30 × 90 = 27. Customers: 0.25 × 80 = 20. Processes: 0.25 × 100 = 25. Learning: 0.20 × 70 = 14. Total: 27 + 20 + 25 + 14 = 86%. Common mistake: averaging achievements without weights ((90 + 80 + 100 + 70) ÷ 4 = 85%) or adding the full achievements without multiplying them by their weight.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },
  {
    id: 'EMP-19-E6',
    level: 1,
    module: 'EMP-19',
    kind: 'multi',
    flavor: 'case',
    context: t(
      "Una consejera de una empresa de alimentos es dueña de la empresa de empaques que podría convertirse en proveedor principal. El contrato se votará en la próxima sesión del consejo.",
      "A director of a food company owns the packaging company that could become the main supplier. The contract will be voted on at the next board meeting.",
    ),
    prompt: t(
      "¿Qué acciones reflejan un buen manejo de este conflicto de interés? Selecciona todas las correctas.",
      "Which actions reflect good handling of this conflict of interest? Select all that apply.",
    ),
    options: [
      { id: 'EMP-19-E6-a', text: t("La consejera declara por escrito su interés antes de la sesión.", "The director discloses her interest in writing before the meeting.") },
      { id: 'EMP-19-E6-b', text: t("La consejera se abstiene de votar el contrato.", "The director abstains from voting on the contract.") },
      { id: 'EMP-19-E6-c', text: t("Se comparan precio y calidad con otras cotizaciones de mercado antes de aprobar.", "Price and quality are compared with other market quotes before approving.") },
      { id: 'EMP-19-E6-d', text: t("Se aprueba sin discutirlo, porque la consejera es de confianza.", "It is approved without discussion, because the director is trustworthy.") },
      { id: 'EMP-19-E6-e', text: t("Se oculta la relación para no incomodar a los demás consejeros.", "The relationship is hidden so as not to make the other directors uncomfortable.") },
    ],
    correctOptionIds: ['EMP-19-E6-a', 'EMP-19-E6-b', 'EMP-19-E6-c'],
    explanation: t(
      "La regla sana es declarar, abstenerse y verificar que la operación sea a precio de mercado (idealmente con revisión de un comité). Operar con partes relacionadas no está prohibido, pero sí debe ser transparente. Error común: confiar en la buena fe de la persona en lugar de en el proceso, u ocultar la relación, lo que destruye la confianza aunque el precio fuera justo.",
      "The healthy rule is to disclose, abstain and verify the transaction is at market price (ideally with a committee review). Dealing with related parties is not forbidden, but it must be transparent. Common mistake: relying on the person's good faith instead of the process, or hiding the relationship, which destroys trust even if the price was fair.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'corporate-governance',
  },

  // ───────────────────────────── EMP-20 ─────────────────────────────
  {
    id: 'EMP-20-E1',
    level: 1,
    module: 'EMP-20',
    kind: 'classify',
    flavor: 'concept',
    prompt: t(
      "Clasifica cada tema de una empresa manufacturera en su dimensión ESG.",
      "Classify each issue of a manufacturing company into its ESG dimension.",
    ),
    categories: [
      { id: 'EMP-20-E1-c1', label: t("Ambiental (E)", "Environmental (E)") },
      { id: 'EMP-20-E1-c2', label: t("Social (S)", "Social (S)") },
      { id: 'EMP-20-E1-c3', label: t("Gobierno (G)", "Governance (G)") },
    ],
    items: [
      { id: 'EMP-20-E1-i1', label: t("Consumo de agua por unidad producida", "Water consumption per unit produced"), correctCategoryId: 'EMP-20-E1-c1' },
      { id: 'EMP-20-E1-i2', label: t("Manejo de residuos peligrosos de pintura", "Handling of hazardous paint waste"), correctCategoryId: 'EMP-20-E1-c1' },
      { id: 'EMP-20-E1-i3', label: t("Tasa de accidentes laborales en planta", "Workplace accident rate at the plant"), correctCategoryId: 'EMP-20-E1-c2' },
      { id: 'EMP-20-E1-i4', label: t("Condiciones laborales en los talleres de los proveedores", "Working conditions in suppliers' workshops"), correctCategoryId: 'EMP-20-E1-c2' },
      { id: 'EMP-20-E1-i5', label: t("Política anticorrupción y línea de denuncia", "Anti-corruption policy and whistleblower hotline"), correctCategoryId: 'EMP-20-E1-c3' },
      { id: 'EMP-20-E1-i6', label: t("Proporción de consejeros independientes", "Proportion of independent directors"), correctCategoryId: 'EMP-20-E1-c3' },
    ],
    explanation: t(
      "E cubre los recursos naturales y la contaminación (agua, residuos); S cubre a las personas dentro y fuera de la empresa, incluida la cadena de suministro (seguridad, condiciones de proveedores); G cubre cómo se dirige y controla la empresa (ética, consejo). Error común: poner las condiciones de los proveedores fuera de ESG porque «no son empleados propios»; sí son tema social de la cadena de valor.",
      "E covers natural resources and pollution (water, waste); S covers people inside and outside the company, including the supply chain (safety, supplier conditions); G covers how the company is directed and controlled (ethics, board). Common mistake: leaving supplier conditions out of ESG because «they are not our own employees»; they are a social issue of the value chain.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg',
  },
  {
    id: 'EMP-20-E2',
    level: 1,
    module: 'EMP-20',
    kind: 'mcq',
    flavor: 'concept',
    context: t(
      "Un hotel de playa analiza el tema «disponibilidad de agua dulce en la región».",
      "A beach hotel is analyzing the issue «freshwater availability in the region».",
    ),
    prompt: t(
      "Bajo el enfoque de doble materialidad, ¿cuál afirmación es correcta sobre el tema del agua para el hotel?",
      "Under the double materiality approach, which statement about the water issue is correct for the hotel?",
    ),
    options: [
      { id: 'EMP-20-E2-a', text: t("Solo es material si ya generó una pérdida en el estado de resultados.", "It is only material if it has already caused a loss on the income statement.") },
      { id: 'EMP-20-E2-b', text: t("Es material en ambos sentidos: la escasez puede afectar la operación y el hotel afecta el agua disponible para la comunidad.", "It is material in both directions: scarcity can affect operations, and the hotel affects the water available to the community.") },
      { id: 'EMP-20-E2-c', text: t("No es material, porque el agua es un tema del gobierno municipal y no de la empresa.", "It is not material, because water is a matter for the municipal government, not the company.") },
      { id: 'EMP-20-E2-d', text: t("Solo es material de impacto, porque el agua no tiene efectos financieros en un hotel.", "It is only impact-material, because water has no financial effects on a hotel.") },
    ],
    correctOptionId: 'EMP-20-E2-b',
    explanation: t(
      "La doble materialidad mira de afuera hacia adentro (cómo el tema afecta el dinero de la empresa: sin agua no hay albercas, cocina ni habitaciones) y de adentro hacia afuera (cómo la empresa afecta a personas y ambiente: su consumo compite con el de la comunidad). Basta con un lado para que sea relevante, y aquí son los dos. Error común: esperar a que el riesgo ya cueste dinero para considerarlo.",
      "Double materiality looks outside-in (how the issue affects the company's money: without water there are no pools, kitchen or rooms) and inside-out (how the company affects people and the environment: its consumption competes with the community's). One side is enough for it to be relevant, and here it is both. Common mistake: waiting until the risk already costs money before considering it.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'esg',
  },
  {
    id: 'EMP-20-E3',
    level: 1,
    module: 'EMP-20',
    kind: 'fields',
    flavor: 'case',
    context: t(
      "Una empresa hipotética de lácteos reporta en el año: gas natural de sus calderas 220 tCO₂e, combustible de su flotilla propia 180 tCO₂e, electricidad comprada a la red 400 tCO₂e, emisiones de los ranchos proveedores de leche 3,000 tCO₂e. Sus ventas fueron de $80 millones.",
      "A hypothetical dairy company reports for the year: natural gas for its boilers 220 tCO₂e, fuel for its own fleet 180 tCO₂e, electricity purchased from the grid 400 tCO₂e, emissions from the supplying dairy farms 3,000 tCO₂e. Its sales were $80 million.",
    ),
    prompt: t(
      "Calcula el alcance 1, el alcance 2 y la intensidad de alcances 1 y 2 de la empresa de lácteos.",
      "Compute the dairy company's scope 1, scope 2 and scope 1 and 2 intensity.",
    ),
    fields: [
      { id: 'f1', label: t("Alcance 1 (tCO₂e)", "Scope 1 (tCO₂e)"), answer: 400, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f2', label: t("Alcance 2 (tCO₂e)", "Scope 2 (tCO₂e)"), answer: 400, unit: 'units', tolerance: { abs: 0.5 } },
      { id: 'f3', label: t("Intensidad (tCO₂e por millón de pesos de ventas)", "Intensity (tCO₂e per million pesos of sales)"), answer: 10, unit: 'units', tolerance: { abs: 0.05 } },
    ],
    explanation: t(
      "Alcance 1 = fuentes propias: 220 + 180 = 400 tCO₂e. Alcance 2 = electricidad comprada: 400 tCO₂e. Intensidad = (400 + 400) ÷ 80 = 10 tCO₂e por millón. Las emisiones de los ranchos (3,000) son alcance 3 y no entran en este indicador, aunque sean las más grandes y convenga gestionarlas con los proveedores. Error común: sumar el alcance 3 al alcance 1 porque «la leche es nuestra materia prima».",
      "Scope 1 = own sources: 220 + 180 = 400 tCO₂e. Scope 2 = purchased electricity: 400 tCO₂e. Intensity = (400 + 400) ÷ 80 = 10 tCO₂e per million. Emissions from the farms (3,000) are scope 3 and are not part of this indicator, even though they are the largest and worth managing with suppliers. Common mistake: adding scope 3 to scope 1 because «milk is our raw material».",
    ),
    difficulty: 3,
    points: 20,
    competency: 'esg',
  },
  {
    id: 'EMP-20-E4',
    level: 1,
    module: 'EMP-20',
    kind: 'numeric',
    flavor: 'case',
    context: t(
      "Una tortillería hipotética evalúa instalar paneles solares por $180,000. Ahorraría $52,000 al año en electricidad, pero el mantenimiento y la limpieza de los paneles costarían $7,000 al año.",
      "A hypothetical tortilla shop is evaluating installing solar panels for $180,000. It would save $52,000 a year on electricity, but panel maintenance and cleaning would cost $7,000 a year.",
    ),
    prompt: t(
      "¿En cuántos años recupera la tortillería su inversión en paneles solares?",
      "In how many years does the tortilla shop recover its solar panel investment?",
    ),
    answer: 4,
    unit: 'years',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: t(
      "Ahorro neto anual: 52,000 − 7,000 = $45,000. Periodo de recuperación: 180,000 ÷ 45,000 = 4 años. Error común: usar el ahorro bruto (180,000 ÷ 52,000 = 3.46 años), lo que hace ver el proyecto más atractivo de lo que es.",
      "Annual net savings: 52,000 − 7,000 = $45,000. Payback period: 180,000 ÷ 45,000 = 4 years. Common mistake: using gross savings (180,000 ÷ 52,000 = 3.46 years), which makes the project look more attractive than it is.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'esg',
  },
  {
    id: 'EMP-20-E5',
    level: 1,
    module: 'EMP-20',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: t(
      "Verdadero o falso: para una cadena de ropa, las emisiones que generan los talleres de sus proveedores al fabricar las prendas forman parte de su alcance 3.",
      "True or false: for a clothing chain, the emissions generated by its suppliers' workshops when making the garments are part of its scope 3.",
    ),
    answer: true,
    explanation: t(
      "Verdadero. El alcance 3 incluye las emisiones indirectas de toda la cadena de valor que no son fuentes propias (alcance 1) ni energía comprada (alcance 2), como la fabricación en proveedores, el transporte contratado y el uso y desecho de los productos. En muchas empresas comerciales es el alcance más grande. Error común: pensar que solo cuenta lo que ocurre dentro de las tiendas propias.",
      "True. Scope 3 includes indirect emissions from the whole value chain that are neither own sources (scope 1) nor purchased energy (scope 2), such as manufacturing at suppliers, contracted transport and the use and disposal of products. In many retail companies it is the largest scope. Common mistake: thinking that only what happens inside the company's own stores counts.",
    ),
    difficulty: 1,
    points: 10,
    competency: 'esg',
  },
  {
    id: 'EMP-20-E6',
    level: 1,
    module: 'EMP-20',
    kind: 'multi',
    flavor: 'interpret',
    context: t(
      "Una marca de botellas de plástico publica su nueva campaña de mercadotecnia.",
      "A plastic bottle brand publishes its new marketing campaign.",
    ),
    prompt: t(
      "¿Cuáles de estas afirmaciones de la campaña son señales de greenwashing? Selecciona todas las que apliquen.",
      "Which of these campaign claims are signs of greenwashing? Select all that apply.",
    ),
    options: [
      { id: 'EMP-20-E6-a', text: t("«Somos 100% eco-amigables», sin explicar en qué ni con qué datos.", "«We are 100% eco-friendly», without explaining how or with what data.") },
      { id: 'EMP-20-E6-b', text: t("Destacar que la tapa es reciclable mientras la botella, que es el 95% del plástico, no lo es.", "Highlighting that the cap is recyclable while the bottle, which is 95% of the plastic, is not.") },
      { id: 'EMP-20-E6-c', text: t("Un sello verde diseñado por la propia marca, sin verificación externa.", "A green seal designed by the brand itself, without external verification.") },
      { id: 'EMP-20-E6-d', text: t("Reportar sus emisiones de alcance 1 y 2 de los últimos tres años, con el método usado y verificación de un tercero.", "Reporting its scope 1 and 2 emissions for the last three years, with the method used and third-party verification.") },
      { id: 'EMP-20-E6-e', text: t("Anunciar «cero emisiones netas en 2050» sin metas intermedias ni plan de inversión.", "Announcing «net zero by 2050» with no interim targets or investment plan.") },
    ],
    correctOptionIds: ['EMP-20-E6-a', 'EMP-20-E6-b', 'EMP-20-E6-c', 'EMP-20-E6-e'],
    explanation: t(
      "Son greenwashing las afirmaciones vagas sin datos (a), destacar un detalle pequeño ocultando el impacto principal (b), las etiquetas propias sin verificación (c) y las metas lejanas sin plan intermedio (e). Reportar datos históricos con método y verificación externa (d) es buena práctica de transparencia. Error común: creer que cualquier mensaje ambiental es greenwashing; lo que lo define es que sea engañoso o no verificable.",
      "Greenwashing includes vague claims without data (a), highlighting a small detail while hiding the main impact (b), self-made labels without verification (c) and distant targets with no interim plan (e). Reporting historical data with a method and external verification (d) is good transparency practice. Common mistake: believing any environmental message is greenwashing; what defines it is being misleading or unverifiable.",
    ),
    difficulty: 2,
    points: 15,
    competency: 'esg',
  },
]
