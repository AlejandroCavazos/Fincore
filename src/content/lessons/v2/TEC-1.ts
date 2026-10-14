import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Análisis de Datos, Tecnología e Inteligencia Artificial · Nivel 2 (Básico)
 * TEC.1 a TEC.6: tecnología empresarial, Excel, Excel financiero y contable, modelación y automatización,
 * estadística aplicada a negocios y Power BI.
 */

const NOTE_SOFTWARE = {
  es: "Contenido educativo. Los nombres de funciones y menús pueden variar según la versión, el idioma y la configuración regional del programa (por ejemplo, si el separador de argumentos es coma o punto y coma). Las cifras de los ejemplos son hipotéticas: verifica la documentación vigente (2026) de tu software.",
  en: "Educational content. Function and menu names may vary by version, language and regional settings of the program (for example, whether the argument separator is a comma or a semicolon). The figures in the examples are hypothetical: verify the current (2026) documentation of your software.",
}

const NOTE_EXCEL_FIN = {
  es: "Contenido educativo. Las tasas, plazos y montos de los ejemplos son hipotéticos. La depreciación contable sigue las NIF del CINIF y la depreciación fiscal usa porcentajes máximos que fija la ley del impuesto sobre la renta; ambas reglas cambian, así que verifica la versión vigente (2026). Los nombres de funciones de Excel pueden variar según idioma y versión.",
  en: "Educational content. The rates, terms and amounts in the examples are hypothetical. Accounting depreciation follows CINIF's NIF and tax depreciation uses maximum percentages set by the income tax law; both sets of rules change, so verify the current (2026) version. Excel function names may vary by language and version.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── TEC-01 ─────────────────────────────
  {
    id: 'TEC-01',
    level: 2,
    topicIds: ['TEC.1'],
    title: { es: "Fundamentos de tecnología empresarial", en: "Business technology fundamentals" },
    summary: {
      es: "La tecnología en una empresa es un sistema de hardware, software, datos, personas y procesos que convierte datos en información para operar y decidir, ya sea en equipos propios o en la nube.",
      en: "Technology in a company is a system of hardware, software, data, people and processes that turns data into information to operate and decide, whether on its own equipment or in the cloud.",
    },
    minutes: 15,
    objectives: [
      { es: "Identificar los cinco componentes de un sistema de información y distinguir dato de información.", en: "Identify the five components of an information system and tell data apart from information." },
      { es: "Reconocer los tipos de sistemas que usa una empresa: transaccionales, gerenciales y de apoyo a decisiones.", en: "Recognize the types of systems a company uses: transactional, management and decision support." },
      { es: "Comparar equipos propios contra servicios en la nube (IaaS, PaaS, SaaS).", en: "Compare own equipment against cloud services (IaaS, PaaS, SaaS)." },
      { es: "Calcular el costo total de propiedad de una solución tecnológica.", en: "Compute the total cost of ownership of a technology solution." },
    ],
    theory: [
      {
        heading: { es: "Componentes de un sistema de información", en: "Components of an information system" },
        body: [
          {
            es: "Un **sistema de información** es la forma organizada en que una empresa junta, guarda, procesa y entrega datos. No es solo la computadora: piensa en la caja de una farmacia. Hay una terminal, un programa de ventas, la lista de productos, la cajera que cobra y la regla de \"siempre dar ticket\".",
            en: "An **information system** is the organized way a company gathers, stores, processes and delivers data. It is not just the computer: think of the checkout of a pharmacy. There is a terminal, a sales program, the product list, the cashier who charges and the rule \"always give a receipt\".",
          },
          {
            es: "Un **dato** es un hecho suelto, sin contexto: \"35\". La **información** es el dato ordenado y con sentido: \"hoy vendimos 35 cajas de paracetamol, 20% más que ayer\". La tecnología sirve para convertir muchos datos en información útil para decidir.",
            en: "A **data point** is a loose fact without context: \"35\". **Information** is data organized and with meaning: \"today we sold 35 boxes of paracetamol, 20% more than yesterday\". Technology serves to turn lots of data into information useful for decisions.",
          },
          {
            es: "Mini ejemplo: en una tortillería, la báscula (hardware) manda el peso al programa de cobro (software), que guarda cada venta (datos); el encargado (persona) revisa el reporte del día siguiendo un horario fijo (proceso).",
            en: "Mini example: in a tortilla shop, the scale (hardware) sends the weight to the checkout program (software), which stores each sale (data); the manager (person) reviews the daily report following a fixed schedule (process).",
          },
        ],
        bullets: [
          { es: "Hardware: lo físico (computadoras, terminales, impresoras, servidores).", en: "Hardware: the physical part (computers, terminals, printers, servers)." },
          { es: "Software: los programas (sistema operativo, hoja de cálculo, sistema de ventas).", en: "Software: the programs (operating system, spreadsheet, sales system)." },
          { es: "Datos: los hechos registrados (ventas, clientes, precios).", en: "Data: the recorded facts (sales, customers, prices)." },
          { es: "Personas: quienes capturan, usan y cuidan el sistema.", en: "People: those who enter, use and look after the system." },
          { es: "Procesos: las reglas y pasos de cómo se usa.", en: "Processes: the rules and steps for how it is used." },
        ],
      },
      {
        heading: { es: "Tipos de sistemas en la empresa", en: "Types of systems in the company" },
        body: [
          {
            es: "Los sistemas se distinguen por **qué nivel de la empresa atienden**. Los **sistemas transaccionales** registran cada operación del día a día: cada venta, cada pago, cada entrada al almacén. Son rápidos y muy precisos, y alimentan a todos los demás.",
            en: "Systems are distinguished by **which level of the company they serve**. **Transaction processing systems** record each day-to-day operation: every sale, every payment, every warehouse receipt. They are fast and very precise, and they feed all the others.",
          },
          {
            es: "Los **sistemas de información gerencial** resumen esas operaciones en reportes periódicos: ventas del mes por sucursal, gastos contra presupuesto. Los **sistemas de apoyo a decisiones** permiten hacer preguntas \"¿qué pasaría si...?\" y comparar opciones, por ejemplo cuánto ganarías si abres una sucursal nueva.",
            en: "**Management information systems** summarize those operations into periodic reports: sales of the month by branch, expenses against budget. **Decision support systems** let you ask \"what would happen if...?\" questions and compare options, for example how much you would earn if you opened a new branch.",
          },
          {
            es: "Mini ejemplo: en una cadena de tiendas, la terminal de cobro es transaccional; el reporte mensual que recibe el gerente regional es gerencial; la hoja que simula precios para una promoción es de apoyo a decisiones.",
            en: "Mini example: in a store chain, the checkout terminal is transactional; the monthly report the regional manager receives is managerial; the sheet that simulates prices for a promotion is decision support.",
          },
        ],
        bullets: [
          { es: "Transaccional: registra cada operación (nivel operativo).", en: "Transactional: records each operation (operational level)." },
          { es: "Gerencial: resume en reportes periódicos (nivel medio).", en: "Management: summarizes into periodic reports (middle level)." },
          { es: "Apoyo a decisiones: simula escenarios y compara opciones (nivel directivo).", en: "Decision support: simulates scenarios and compares options (executive level)." },
        ],
      },
      {
        heading: { es: "Equipos propios, nube y costo total", en: "Own equipment, cloud and total cost" },
        body: [
          {
            es: "Una empresa puede tener sus programas **en sus propios equipos** (instalados en su oficina, en inglés *on-premise*) o rentarlos **en la nube**: servidores de un proveedor a los que entras por internet. En la nube hay tres modelos principales, según cuánto te resuelve el proveedor.",
            en: "A company can run its programs **on its own equipment** (installed in its office, *on-premise*) or rent them **in the cloud**: a provider's servers you reach over the internet. In the cloud there are three main models, depending on how much the provider handles for you.",
          },
          {
            es: "**IaaS** (infraestructura como servicio): rentas servidores y almacenamiento, y tú instalas todo lo demás. **PaaS** (plataforma como servicio): rentas un entorno listo para desarrollar tus propias aplicaciones. **SaaS** (software como servicio): usas un programa terminado desde el navegador y pagas una suscripción, como el correo electrónico o un sistema de facturación en línea.",
            en: "**IaaS** (infrastructure as a service): you rent servers and storage, and you install everything else. **PaaS** (platform as a service): you rent a ready environment to develop your own applications. **SaaS** (software as a service): you use a finished program from the browser and pay a subscription, like email or an online invoicing system.",
          },
          {
            es: "Para comparar opciones no basta el precio inicial. El **costo total de propiedad** suma todo lo que pagas durante la vida de la solución: compra o suscripción, equipos, mantenimiento, soporte y capacitación. Mini ejemplo: un programa de $20,000 con $5,000 de mantenimiento al año cuesta $35,000 en tres años, no $20,000.",
            en: "To compare options the upfront price is not enough. The **total cost of ownership** adds everything you pay over the solution's life: purchase or subscription, equipment, maintenance, support and training. Mini example: a $20,000 program with $5,000 of yearly maintenance costs $35,000 over three years, not $20,000.",
          },
        ],
        formulas: [
          {
            name: { es: "Costo total de propiedad (CTP)", en: "Total cost of ownership (TCO)" },
            expression: "CTP = Costo inicial + costo recurrente por periodo × número de periodos",
            variables: [
              { symbol: "CTP", meaning: { es: "Todo lo que pagas por la solución durante el plazo que comparas, en pesos.", en: "Everything you pay for the solution over the period you compare, in pesos." } },
              { symbol: "Costo inicial", meaning: { es: "Pagos de una sola vez al empezar: licencia, servidor, instalación, en pesos.", en: "One-time payments at the start: license, server, installation, in pesos." } },
              { symbol: "costo recurrente por periodo", meaning: { es: "Lo que pagas cada mes o cada año: suscripción, soporte, mantenimiento, en pesos.", en: "What you pay every month or year: subscription, support, maintenance, in pesos." } },
              { symbol: "número de periodos", meaning: { es: "Cuántos meses o años dura la comparación; debe estar en la misma unidad que el costo recurrente.", en: "How many months or years the comparison lasts; it must be in the same unit as the recurring cost." } },
            ],
            steps: [
              { es: "Suma todos los pagos de una sola vez (costo inicial).", en: "Add up all one-time payments (upfront cost)." },
              { es: "Multiplica cada costo recurrente por el número de periodos: si es mensual, usa meses (3 años = 36 meses).", en: "Multiply each recurring cost by the number of periods: if it is monthly, use months (3 years = 36 months)." },
              { es: "Suma el costo inicial y los recurrentes para cada opción.", en: "Add the upfront and recurring costs for each option." },
              { es: "Resta los totales: la opción con menor CTP es la más barata en ese plazo.", en: "Subtract the totals: the option with the lower TCO is cheaper over that period." },
            ],
            example: {
              es: "A 2 años. Opción A: licencia $15,000 + equipo $10,000 + soporte $3,000 al año × 2 = 15,000 + 10,000 + 6,000 = $31,000. Opción B (SaaS): $1,200 al mes × 24 meses = $28,800. Diferencia: 31,000 − 28,800 = **$2,200 a favor de B**.",
              en: "Over 2 years. Option A: $15,000 license + $10,000 equipment + $3,000 support per year × 2 = 15,000 + 10,000 + 6,000 = $31,000. Option B (SaaS): $1,200 per month × 24 months = $28,800. Difference: 31,000 − 28,800 = **$2,200 in favor of B**.",
            },
            interpret: {
              es: "El número no lo es todo: también pesa la flexibilidad, las actualizaciones y el riesgo de cada opción.",
              en: "The number is not everything: flexibility, updates and the risk of each option also matter.",
            },
            mistake: {
              es: "Multiplicar una suscripción mensual por los años en lugar de por los meses, o comparar solo el pago inicial.",
              en: "Multiplying a monthly subscription by years instead of months, or comparing only the upfront payment.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Licencia propia o suscripción en la nube?", en: "Own license or cloud subscription?" },
        problem: {
          es: "Un despacho contable compara dos opciones a 3 años. Opción A (equipos propios): licencia de $30,000 una sola vez, servidor de $20,000 y mantenimiento de $4,000 al año. Opción B (SaaS): $1,800 al mes de suscripción. ¿Cuál cuesta menos en total?",
          en: "An accounting firm compares two options over 3 years. Option A (own equipment): a one-time $30,000 license, a $20,000 server and $4,000 of maintenance per year. Option B (SaaS): $1,800 per month subscription. Which costs less in total?",
        },
        steps: [
          { es: "Opción A, costo inicial: $30,000 + $20,000 = $50,000.", en: "Option A, upfront cost: $30,000 + $20,000 = $50,000." },
          { es: "Opción A, mantenimiento: $4,000 × 3 = $12,000; total A = $62,000.", en: "Option A, maintenance: $4,000 × 3 = $12,000; total A = $62,000." },
          { es: "Opción B: 3 años son 36 meses; $1,800 × 36 = $64,800.", en: "Option B: 3 years are 36 months; $1,800 × 36 = $64,800." },
          { es: "Diferencia: $64,800 − $62,000 = $2,800 a favor de A.", en: "Difference: $64,800 − $62,000 = $2,800 in favor of A." },
        ],
        result: {
          es: "En 3 años la opción A cuesta $2,800 menos. Aun así, el despacho debe pesar otros factores: con SaaS no compra servidor, recibe actualizaciones y puede trabajar desde cualquier lugar.",
          en: "Over 3 years option A costs $2,800 less. Even so, the firm should weigh other factors: with SaaS it buys no server, receives updates and can work from anywhere.",
        },
      },
      {
        title: { es: "De datos sueltos a información", en: "From loose data to information" },
        problem: {
          es: "Una papelería registró ventas de mochilas: lunes 4, martes 6, miércoles 5, jueves 9 y viernes 16. Conviértelo en información útil para la dueña.",
          en: "A stationery shop recorded backpack sales: Monday 4, Tuesday 6, Wednesday 5, Thursday 9 and Friday 16. Turn this into useful information for the owner.",
        },
        steps: [
          { es: "Suma la semana: 4 + 6 + 5 + 9 + 16 = 40 mochilas.", en: "Add the week: 4 + 6 + 5 + 9 + 16 = 40 backpacks." },
          { es: "Calcula el peso del viernes: 16 ÷ 40 = 40% de la semana.", en: "Compute Friday's share: 16 ÷ 40 = 40% of the week." },
          { es: "Interpreta: el viernes concentra casi la mitad de las ventas.", en: "Interpret: Friday holds almost half of the sales." },
        ],
        result: {
          es: "Información: \"se vendieron 40 mochilas y el 40% fue el viernes\". Con eso la dueña decide reforzar inventario y personal ese día.",
          en: "Information: \"40 backpacks were sold and 40% were on Friday\". With that, the owner decides to boost stock and staff on that day.",
        },
      },
    ],
    keyPoints: [
      { es: "Un sistema de información tiene cinco componentes: hardware, software, datos, personas y procesos.", en: "An information system has five components: hardware, software, data, people and processes." },
      { es: "Un dato es un hecho suelto; la información es el dato ordenado y con sentido para decidir.", en: "Data is a loose fact; information is data organized and meaningful for decisions." },
      { es: "Sistemas transaccionales registran, gerenciales resumen y de apoyo a decisiones simulan.", en: "Transactional systems record, management systems summarize and decision support systems simulate." },
      { es: "En la nube: IaaS renta infraestructura, PaaS una plataforma y SaaS un programa terminado.", en: "In the cloud: IaaS rents infrastructure, PaaS a platform and SaaS a finished program." },
      { es: "Compara opciones con el costo total de propiedad, no solo con el precio inicial.", en: "Compare options with total cost of ownership, not just the upfront price." },
    ],
    exerciseIds: ['TEC-01-E1', 'TEC-01-E2', 'TEC-01-E3', 'TEC-01-E4', 'TEC-01-E5', 'TEC-01-E6'],
  },

  // ───────────────────────────── TEC-02 ─────────────────────────────
  {
    id: 'TEC-02',
    level: 2,
    topicIds: ['TEC.2'],
    title: { es: "Excel básico, intermedio y avanzado", en: "Basic, intermediate and advanced Excel" },
    summary: {
      es: "Excel organiza datos en celdas y los procesa con fórmulas, referencias, funciones condicionales, búsquedas y tablas dinámicas, desde una suma hasta un resumen de miles de filas.",
      en: "Excel organizes data in cells and processes it with formulas, references, conditional functions, lookups and pivot tables, from a simple sum to a summary of thousands of rows.",
    },
    minutes: 18,
    objectives: [
      { es: "Escribir fórmulas con referencias relativas y absolutas y predecir cómo cambian al copiarlas.", en: "Write formulas with relative and absolute references and predict how they change when copied." },
      { es: "Usar funciones condicionales como SI, CONTAR.SI y SUMAR.SI.", en: "Use conditional functions such as IF, COUNTIF and SUMIF." },
      { es: "Buscar datos entre tablas con BUSCARV o BUSCARX.", en: "Look up data across tables with VLOOKUP or XLOOKUP." },
      { es: "Resumir grandes listas con tablas dinámicas sin alterar los datos originales.", en: "Summarize large lists with pivot tables without altering the original data." },
    ],
    theory: [
      {
        heading: { es: "Celdas, fórmulas y referencias", en: "Cells, formulas and references" },
        body: [
          {
            es: "Una hoja de Excel es una cuadrícula de **celdas**. Cada celda tiene una dirección: columna (letra) y fila (número), como **B3**. Una **fórmula** siempre empieza con el signo **=** y puede usar números, operadores (+, −, *, /, ^) y direcciones de otras celdas.",
            en: "An Excel sheet is a grid of **cells**. Each cell has an address: column (letter) and row (number), such as **B3**. A **formula** always starts with the **=** sign and can use numbers, operators (+, −, *, /, ^) and addresses of other cells.",
          },
          {
            es: "Una **referencia relativa** (B2) se ajusta sola cuando copias la fórmula: si la copias una fila abajo, se vuelve B3. Una **referencia absoluta** ($B$2) lleva signos de pesos y **no cambia** al copiarla. Úsala para un valor fijo que muchas fórmulas comparten, como un tipo de cambio o una tasa de comisión.",
            en: "A **relative reference** (B2) adjusts by itself when you copy the formula: copy it one row down and it becomes B3. An **absolute reference** ($B$2) carries dollar signs and **does not change** when copied. Use it for a fixed value many formulas share, such as an exchange rate or a commission rate.",
          },
          {
            es: "Mini ejemplo: en C2 escribes =B2*$F$1, donde F1 tiene la comisión de 5%. Al copiar hacia abajo, C3 queda =B3*$F$1: cambia la venta de cada fila, pero la comisión sigue en F1.",
            en: "Mini example: in C2 you type =B2*$F$1, where F1 holds the 5% commission. When you copy down, C3 becomes =B3*$F$1: each row's sale changes, but the commission stays in F1.",
          },
        ],
        bullets: [
          { es: "B2: relativa, cambia fila y columna al copiar.", en: "B2: relative, row and column change when copied." },
          { es: "$B$2: absoluta, no cambia.", en: "$B$2: absolute, does not change." },
          { es: "$B2 o B$2: mixta, fija solo la columna o solo la fila.", en: "$B2 or B$2: mixed, locks only the column or only the row." },
          { es: "Funciones básicas: SUMA, PROMEDIO, MAX, MIN, REDONDEAR.", en: "Basic functions: SUM, AVERAGE, MAX, MIN, ROUND." },
        ],
      },
      {
        heading: { es: "Funciones condicionales y de búsqueda", en: "Conditional and lookup functions" },
        body: [
          {
            es: "La función **SI** toma decisiones: =SI(prueba, valor si es verdadero, valor si es falso). Por ejemplo, =SI(B2>=10000, \"Bono\", \"Sin bono\"). Puedes combinarla con **Y** (todas las condiciones) y **O** (al menos una).",
            en: "The **IF** function makes decisions: =IF(test, value if true, value if false). For example, =IF(B2>=10000, \"Bonus\", \"No bonus\"). You can combine it with **AND** (all conditions) and **OR** (at least one).",
          },
          {
            es: "**CONTAR.SI** cuenta celdas que cumplen un criterio y **SUMAR.SI** suma solo las filas que lo cumplen: =SUMAR.SI(rango donde buscas, criterio, rango que sumas). Así sabes cuánto vendió la zona \"Norte\" sin filtrar a mano.",
            en: "**COUNTIF** counts cells that meet a criterion and **SUMIF** adds only the rows that meet it: =SUMIF(range to search, criterion, range to add). That way you know how much the \"North\" region sold without filtering by hand.",
          },
          {
            es: "Para traer un dato de otra tabla se usa **BUSCARV**: busca un valor en la **primera columna** de una tabla y devuelve el dato de otra columna a la derecha; con coincidencia exacta su último argumento es FALSO. En versiones recientes existe **BUSCARX**, más flexible: puede buscar en cualquier columna y devolver datos a la izquierda. Si no encuentra el valor, aparece el error **#N/A**, que puedes atrapar con **SI.ERROR**.",
            en: "To bring a value from another table you use **VLOOKUP**: it searches for a value in the **first column** of a table and returns the data from another column to the right; for an exact match its last argument is FALSE. Recent versions offer **XLOOKUP**, which is more flexible: it can search any column and return data to the left. If the value is not found, the **#N/A** error appears, which you can catch with **IFERROR**.",
          },
        ],
        bullets: [
          { es: "SI: decide entre dos resultados.", en: "IF: decides between two results." },
          { es: "CONTAR.SI / SUMAR.SI: cuentan o suman con un criterio.", en: "COUNTIF / SUMIF: count or add with one criterion." },
          { es: "BUSCARV / BUSCARX: traen datos de otra tabla.", en: "VLOOKUP / XLOOKUP: bring data from another table." },
          { es: "SI.ERROR: muestra algo amigable en lugar de un error.", en: "IFERROR: shows something friendly instead of an error." },
        ],
        formulas: [
          {
            name: { es: "Función SI con un cálculo (por ejemplo, un bono)", en: "IF function with a calculation (for example, a bonus)" },
            expression: "=SI(prueba, valor si verdadero, valor si falso)",
            variables: [
              { symbol: "prueba", meaning: { es: "La pregunta de sí o no que Excel revisa, como B2>=10000 (¿la venta es de 10,000 o más?).", en: "The yes-or-no question Excel checks, such as B2>=10000 (is the sale 10,000 or more?)." } },
              { symbol: "valor si verdadero", meaning: { es: "Lo que muestra si la prueba se cumple; puede ser un cálculo, como B2*5%.", en: "What it shows if the test is met; it can be a calculation, such as B2*5%." } },
              { symbol: "valor si falso", meaning: { es: "Lo que muestra si la prueba no se cumple, por ejemplo 0.", en: "What it shows if the test is not met, for example 0." } },
              { symbol: ">=", meaning: { es: "Mayor o igual que: el valor exacto de la meta también cumple.", en: "Greater than or equal to: the exact target value also passes." } },
            ],
            steps: [
              { es: "Sustituye la celda por su valor y revisa la prueba: ¿es verdadera o falsa?", en: "Replace the cell with its value and check the test: is it true or false?" },
              { es: "Si es verdadera, calcula el segundo argumento; si es falsa, toma el tercero.", en: "If it is true, compute the second argument; if false, take the third." },
              { es: "Haz la operación con el valor completo de la celda (no solo con lo que pasa de la meta).", en: "Do the math with the cell's full value (not just the part above the target)." },
            ],
            example: {
              es: "En B2 hay $9,500 y en C2 está =SI(B2>=8000, B2*3%, 0). Prueba: 9,500 >= 8,000 es verdadera. Resultado: 9,500 × 0.03 = **$285**. Si B2 fuera $7,000, la prueba sería falsa y C2 mostraría **0**.",
              en: "B2 holds $9,500 and C2 has =IF(B2>=8000, B2*3%, 0). Test: 9,500 >= 8,000 is true. Result: 9,500 × 0.03 = **$285**. If B2 were $7,000, the test would be false and C2 would show **0**.",
            },
            mistake: {
              es: "Calcular el porcentaje solo sobre lo que excede la meta: la fórmula multiplica la celda completa.",
              en: "Computing the percentage only on the amount above the target: the formula multiplies the whole cell.",
            },
          },
          {
            name: { es: "Sumar y contar con un criterio: SUMAR.SI y CONTAR.SI", en: "Adding and counting with a criterion: SUMIF and COUNTIF" },
            expression: "=SUMAR.SI(rango donde buscas, criterio, rango que sumas);  =CONTAR.SI(rango, criterio)",
            variables: [
              { symbol: "rango donde buscas", meaning: { es: "Columna donde Excel revisa el criterio (por ejemplo, las zonas o los nombres).", en: "Column where Excel checks the criterion (for example, regions or names)." } },
              { symbol: "criterio", meaning: { es: "Lo que debe cumplir la fila: un texto como \"Norte\" o una condición como \">=9000\".", en: "What the row must meet: text such as \"North\" or a condition such as \">=9000\"." } },
              { symbol: "rango que sumas", meaning: { es: "Columna con los importes que se suman; si lo omites, se suma el mismo rango donde buscas.", en: "Column with the amounts to add; if you leave it out, the search range itself is added." } },
              { symbol: "CONTAR.SI", meaning: { es: "Cuenta cuántas filas cumplen el criterio, sin sumar importes.", en: "Counts how many rows meet the criterion, without adding amounts." } },
            ],
            steps: [
              { es: "Recorre el rango donde buscas y marca las filas que cumplen el criterio.", en: "Go through the search range and mark the rows that meet the criterion." },
              { es: "Para SUMAR.SI, suma los importes de esas filas en el rango que sumas.", en: "For SUMIF, add the amounts of those rows in the sum range." },
              { es: "Para CONTAR.SI, cuenta cuántas filas marcaste.", en: "For COUNTIF, count how many rows you marked." },
            ],
            example: {
              es: "A2:A6 = Café, Té, Café, Jugo, Café; B2:B6 = 120, 80, 200, 60, 50. =SUMAR.SI(A2:A6, \"Café\", B2:B6) = 120 + 200 + 50 = **370**. =CONTAR.SI(A2:A6, \"Café\") = **3**. =SUMAR.SI(B2:B6, \">=100\") = 120 + 200 = **320**.",
              en: "A2:A6 = Coffee, Tea, Coffee, Juice, Coffee; B2:B6 = 120, 80, 200, 60, 50. =SUMIF(A2:A6, \"Coffee\", B2:B6) = 120 + 200 + 50 = **370**. =COUNTIF(A2:A6, \"Coffee\") = **3**. =SUMIF(B2:B6, \">=100\") = 120 + 200 = **320**.",
            },
            mistake: {
              es: "Poner primero el rango que se suma (ese es el orden de SUMAR.SI.CONJUNTO) o leer \">=\" como \">\" y dejar fuera el valor exacto.",
              en: "Putting the sum range first (that is the SUMIFS order) or reading \">=\" as \">\" and leaving out the exact value.",
            },
          },
        ],
      },
      {
        heading: { es: "Tablas, filtros y tablas dinámicas", en: "Tables, filters and pivot tables" },
        body: [
          {
            es: "Para trabajar listas grandes, primero da **formato de tabla** a tus datos: una fila de encabezados, una columna por campo y una fila por registro, sin filas vacías ni celdas combinadas. Así los filtros, el orden y las fórmulas se extienden solos cuando agregas registros.",
            en: "To work with large lists, first **format your data as a table**: one header row, one column per field and one row per record, with no empty rows or merged cells. That way filters, sorting and formulas extend automatically when you add records.",
          },
          {
            es: "Una **tabla dinámica** resume miles de filas en segundos: arrastras campos a filas, columnas y valores, y Excel calcula sumas, conteos o promedios. **No modifica los datos originales**: solo los lee. Si cambias la base, presionas **Actualizar** y el resumen se recalcula.",
            en: "A **pivot table** summarizes thousands of rows in seconds: you drag fields to rows, columns and values, and Excel computes sums, counts or averages. **It does not modify the original data**: it only reads them. If you change the source, you press **Refresh** and the summary is recalculated.",
          },
          {
            es: "Mini ejemplo: con 5,000 tickets de un año, una tabla dinámica con \"Mes\" en filas y \"Sucursal\" en columnas muestra al instante cuánto vendió cada sucursal cada mes.",
            en: "Mini example: with 5,000 tickets from one year, a pivot table with \"Month\" in rows and \"Branch\" in columns instantly shows how much each branch sold each month.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Comisiones con referencia absoluta", en: "Commissions with an absolute reference" },
        problem: {
          es: "La celda F1 tiene la comisión de 4%. Las ventas de tres vendedores están en B2:B4: $15,000, $22,500 y $9,000. Escribe la fórmula en C2, cópiala hacia abajo y calcula las comisiones.",
          en: "Cell F1 holds the 4% commission. Three salespeople's sales are in B2:B4: $15,000, $22,500 and $9,000. Write the formula in C2, copy it down and compute the commissions.",
        },
        steps: [
          { es: "En C2: =B2*$F$1. Fijamos F1 con $ para que no se mueva al copiar.", en: "In C2: =B2*$F$1. We lock F1 with $ so it does not move when copied." },
          { es: "C2 = 15,000 × 4% = $600.", en: "C2 = 15,000 × 4% = $600." },
          { es: "C3 = 22,500 × 4% = $900.", en: "C3 = 22,500 × 4% = $900." },
          { es: "C4 = 9,000 × 4% = $360. Total: $1,860.", en: "C4 = 9,000 × 4% = $360. Total: $1,860." },
        ],
        result: {
          es: "Comisiones: $600, $900 y $360. Sin el $ en F1, la fórmula copiada apuntaría a F2 y F3, que están vacías, y daría 0.",
          en: "Commissions: $600, $900 and $360. Without the $ in F1, the copied formula would point to F2 and F3, which are empty, and return 0.",
        },
      },
      {
        title: { es: "Sumar ventas por zona", en: "Adding sales by region" },
        problem: {
          es: "En A2:A6 están las zonas (Norte, Sur, Norte, Centro, Norte) y en B2:B6 las ventas ($8,000, $5,000, $3,500, $7,000, $1,500). ¿Cuánto vendió la zona Norte?",
          en: "A2:A6 holds the regions (North, South, North, Center, North) and B2:B6 the sales ($8,000, $5,000, $3,500, $7,000, $1,500). How much did the North region sell?",
        },
        steps: [
          { es: "Fórmula: =SUMAR.SI(A2:A6, \"Norte\", B2:B6).", en: "Formula: =SUMIF(A2:A6, \"North\", B2:B6)." },
          { es: "Filas que cumplen: la 2, la 4 y la 6.", en: "Matching rows: 2, 4 and 6." },
          { es: "Suma: 8,000 + 3,500 + 1,500 = 13,000.", en: "Sum: 8,000 + 3,500 + 1,500 = 13,000." },
        ],
        result: {
          es: "La zona Norte vendió $13,000. CONTAR.SI con el mismo criterio daría 3 operaciones.",
          en: "The North region sold $13,000. COUNTIF with the same criterion would give 3 transactions.",
        },
      },
    ],
    keyPoints: [
      { es: "Toda fórmula empieza con = y puede usar direcciones de celdas.", en: "Every formula starts with = and can use cell addresses." },
      { es: "Relativa (B2) se ajusta al copiar; absoluta ($B$2) se queda fija.", en: "Relative (B2) adjusts when copied; absolute ($B$2) stays fixed." },
      { es: "SI decide; CONTAR.SI y SUMAR.SI cuentan y suman con criterio.", en: "IF decides; COUNTIF and SUMIF count and add with a criterion." },
      { es: "BUSCARV busca en la primera columna y devuelve a la derecha; BUSCARX es más flexible.", en: "VLOOKUP searches the first column and returns to the right; XLOOKUP is more flexible." },
      { es: "La tabla dinámica resume sin cambiar los datos; recuerda actualizarla.", en: "A pivot table summarizes without changing the data; remember to refresh it." },
    ],
    normativeNote: NOTE_SOFTWARE,
    exerciseIds: ['TEC-02-E1', 'TEC-02-E2', 'TEC-02-E3', 'TEC-02-E4', 'TEC-02-E5', 'TEC-02-E6'],
  },

  // ───────────────────────────── TEC-03 ─────────────────────────────
  {
    id: 'TEC-03',
    level: 2,
    topicIds: ['TEC.3'],
    title: { es: "Excel financiero y contable", en: "Financial and accounting Excel" },
    summary: {
      es: "Las funciones financieras de Excel (VF, VA, PAGO, VNA, TIR, SLN) y unas cuantas técnicas contables permiten calcular créditos, inversiones, depreciaciones y revisar que la contabilidad cuadre.",
      en: "Excel's financial functions (FV, PV, PMT, NPV, IRR, SLN) and a few accounting techniques let you compute loans, investments and depreciation and check that the books balance.",
    },
    minutes: 19,
    objectives: [
      { es: "Usar VF, VA y PAGO respetando la tasa por periodo y la convención de signos.", en: "Use FV, PV and PMT respecting the rate per period and the sign convention." },
      { es: "Calcular el valor presente neto con VNA sin cometer el error del primer flujo.", en: "Compute net present value with NPV without making the first-cash-flow mistake." },
      { es: "Calcular depreciación en línea recta con SLN y el valor en libros.", en: "Compute straight-line depreciation with SLN and book value." },
      { es: "Revisar una balanza de comprobación y conciliar movimientos con fórmulas.", en: "Check a trial balance and reconcile transactions with formulas." },
    ],
    theory: [
      {
        heading: { es: "Funciones de valor del dinero en el tiempo", en: "Time value of money functions" },
        body: [
          {
            es: "Un peso hoy vale más que un peso dentro de un año, porque hoy lo puedes invertir y ganar intereses. Excel tiene funciones que hacen estas cuentas: **VF** (valor futuro: cuánto tendrás), **VA** (valor actual: cuánto vale hoy un monto futuro) y **PAGO** (la mensualidad fija de un crédito).",
            en: "A peso today is worth more than a peso a year from now, because today you can invest it and earn interest. Excel has functions that do these calculations: **FV** (future value: how much you will have), **PV** (present value: what a future amount is worth today) and **PMT** (the fixed installment of a loan).",
          },
          {
            es: "Regla de oro: la **tasa** y el **número de periodos** deben estar en la misma unidad. Si el crédito es de 12% anual con pagos mensuales, la tasa es 12%/12 = 1% mensual y un plazo de 3 años son 36 periodos. Además, Excel usa una **convención de signos**: el dinero que recibes es positivo y el que pagas, negativo. Por eso PAGO de un préstamo aparece con signo menos.",
            en: "Golden rule: the **rate** and the **number of periods** must be in the same unit. If the loan is 12% per year with monthly payments, the rate is 12%/12 = 1% per month and a 3-year term is 36 periods. Also, Excel uses a **sign convention**: money you receive is positive and money you pay is negative. That is why PMT for a loan shows a minus sign.",
          },
          {
            es: "Mini ejemplo: =PAGO(1%, 12, 100000) da −8,884.88: un préstamo hipotético de $100,000 a 12 meses con 1% mensual se paga con 12 mensualidades de $8,884.88.",
            en: "Mini example: =PMT(1%, 12, 100000) returns −8,884.88: a hypothetical $100,000 loan over 12 months at 1% per month is repaid with 12 installments of $8,884.88.",
          },
        ],
        bullets: [
          { es: "VF(tasa, nper, pago, va): valor futuro.", en: "FV(rate, nper, pmt, pv): future value." },
          { es: "VA(tasa, nper, pago, vf): valor actual.", en: "PV(rate, nper, pmt, fv): present value." },
          { es: "PAGO(tasa, nper, va): pago periódico fijo.", en: "PMT(rate, nper, pv): fixed periodic payment." },
          { es: "TASA y NPER: despejan la tasa o el plazo.", en: "RATE and NPER: solve for the rate or the term." },
        ],
        formulas: [
          {
            name: { es: "Valor futuro (función VF)", en: "Future value (FV function)" },
            expression: "VF = VA × (1 + i)^n   ·   Excel: =VF(tasa, nper, pago, va)",
            variables: [
              { symbol: "VF", meaning: { es: "Lo que tendrás al final, en pesos.", en: "What you will have at the end, in pesos." } },
              { symbol: "VA", meaning: { es: "Lo que inviertes hoy, en pesos (en Excel va con signo negativo porque sale de tu bolsillo).", en: "What you invest today, in pesos (in Excel it goes negative because it leaves your pocket)." } },
              { symbol: "i (tasa)", meaning: { es: "Tasa por periodo, en decimal o con %.", en: "Rate per period, as a decimal or with %." } },
              { symbol: "n (nper)", meaning: { es: "Número de periodos, en la misma unidad que la tasa.", en: "Number of periods, in the same unit as the rate." } },
              { symbol: "pago", meaning: { es: "Aportación fija de cada periodo; 0 si no hay.", en: "Fixed contribution each period; 0 if there is none." } },
            ],
            steps: [
              { es: "Asegúrate de que la tasa y los periodos estén en la misma unidad.", en: "Make sure the rate and the periods are in the same unit." },
              { es: "Calcula (1 + i)^n.", en: "Compute (1 + i)^n." },
              { es: "Multiplica por lo que inviertes hoy. En Excel: =VF(tasa, nper, 0, −inversión).", en: "Multiply by what you invest today. In Excel: =FV(rate, nper, 0, −investment)." },
            ],
            example: {
              es: "$15,000 a 6% anual compuesto por 3 años: 1.06^3 = 1.191016. VF = 15,000 × 1.191016 = **$17,865.24**. En Excel: =VF(6%, 3, 0, −15000).",
              en: "$15,000 at 6% per year compounded for 3 years: 1.06^3 = 1.191016. FV = 15,000 × 1.191016 = **$17,865.24**. In Excel: =FV(6%, 3, 0, −15000).",
            },
            mistake: {
              es: "Usar interés simple (15,000 + 3 × 900 = $17,700): olvida que cada año ganas interés sobre los intereses.",
              en: "Using simple interest (15,000 + 3 × 900 = $17,700): it forgets that each year you earn interest on interest.",
            },
          },
          {
            name: { es: "Mensualidad de un préstamo (función PAGO)", en: "Loan installment (PMT function)" },
            expression: "PAGO = VA × i ÷ [1 − (1 + i)^−n]   ·   Excel: =PAGO(tasa, nper, va)",
            variables: [
              { symbol: "PAGO", meaning: { es: "Pago fijo de cada periodo, en pesos (Excel lo muestra negativo porque sale de tu bolsillo).", en: "Fixed payment each period, in pesos (Excel shows it negative because it leaves your pocket)." } },
              { symbol: "VA", meaning: { es: "Monto que te prestan hoy, en pesos.", en: "Amount you borrow today, in pesos." } },
              { symbol: "i (tasa)", meaning: { es: "Tasa por periodo de pago: si pagas cada mes, tasa anual ÷ 12.", en: "Rate per payment period: if you pay monthly, annual rate ÷ 12." } },
              { symbol: "n (nper)", meaning: { es: "Número total de pagos: años × 12 si es mensual.", en: "Total number of payments: years × 12 if monthly." } },
              { symbol: "(1 + i)^−n", meaning: { es: "Es lo mismo que 1 ÷ (1 + i)^n.", en: "The same as 1 ÷ (1 + i)^n." } },
            ],
            steps: [
              { es: "Convierte la tasa al periodo de pago y cuenta el total de pagos.", en: "Convert the rate to the payment period and count the total payments." },
              { es: "Calcula el denominador: 1 − (1 + i)^−n.", en: "Compute the denominator: 1 − (1 + i)^−n." },
              { es: "Multiplica el préstamo por la tasa y divide entre el denominador.", en: "Multiply the loan by the rate and divide by the denominator." },
            ],
            example: {
              es: "Préstamo de $40,000 a 6 meses con 1.5% mensual. 1.015^−6 = 0.914542; denominador = 1 − 0.914542 = 0.085458. Numerador = 40,000 × 0.015 = 600. PAGO = 600 ÷ 0.085458 = **$7,021.01** al mes. En Excel: =PAGO(1.5%, 6, 40000) → −7,021.01.",
              en: "A $40,000 loan over 6 months at 1.5% per month. 1.015^−6 = 0.914542; denominator = 1 − 0.914542 = 0.085458. Numerator = 40,000 × 0.015 = 600. PMT = 600 ÷ 0.085458 = **$7,021.01** per month. In Excel: =PMT(1.5%, 6, 40000) → −7,021.01.",
            },
            mistake: {
              es: "Dividir el préstamo entre los meses (40,000 ÷ 6) y olvidar los intereses, o usar la tasa anual con periodos mensuales.",
              en: "Dividing the loan by the months (40,000 ÷ 6) and forgetting interest, or using the annual rate with monthly periods.",
            },
          },
        ],
      },
      {
        heading: { es: "Evaluar inversiones: VNA y TIR", en: "Evaluating investments: NPV and IRR" },
        body: [
          {
            es: "Para decidir si un proyecto conviene, traes todos sus flujos futuros a valor de hoy y les restas la inversión. Eso es el **valor presente neto (VPN)**. Si es positivo, el proyecto rinde más que la tasa que exiges.",
            en: "To decide whether a project is worth it, you bring all its future cash flows to today's value and subtract the investment. That is the **net present value (NPV)**. If it is positive, the project yields more than the rate you require.",
          },
          {
            es: "Cuidado con **VNA**: Excel supone que el **primer valor del rango ocurre al final del periodo 1**. Si la inversión se hace hoy (periodo 0), no la metas en el rango: escribe =VNA(tasa, flujos de los años 1 en adelante) − inversión. La **TIR** sí toma el rango completo, empezando por la inversión negativa, y da la tasa a la que el VPN es cero.",
            en: "Be careful with **NPV**: Excel assumes the **first value in the range occurs at the end of period 1**. If the investment is made today (period 0), do not put it in the range: write =NPV(rate, cash flows from year 1 onward) − investment. **IRR** does take the full range, starting with the negative investment, and returns the rate at which NPV is zero.",
          },
          {
            es: "Mini ejemplo: inviertes $50,000 hoy y recibes $20,000, $25,000 y $30,000 en tres años, con tasa de 10%. =VNA(10%, 20000, 25000, 30000) da $61,382.42; menos $50,000, el VPN es $11,382.42: el proyecto conviene.",
            en: "Mini example: you invest $50,000 today and receive $20,000, $25,000 and $30,000 over three years, at a 10% rate. =NPV(10%, 20000, 25000, 30000) gives $61,382.42; minus $50,000, the NPV is $11,382.42: the project is worth it.",
          },
        ],
        formulas: [
          {
            name: { es: "Valor presente neto con VNA", en: "Net present value with NPV" },
            expression: "VPN = VNA(tasa, F1:Fn) − Inversión inicial   ·   VNA = F1 ÷ (1 + tasa)¹ + F2 ÷ (1 + tasa)² + … + Fn ÷ (1 + tasa)ⁿ",
            variables: [
              { symbol: "VPN", meaning: { es: "Ganancia del proyecto en pesos de hoy, después de cobrar la tasa que exiges.", en: "The project's gain in today's pesos, after charging the rate you require." } },
              { symbol: "tasa", meaning: { es: "Rendimiento mínimo que exiges (tasa de descuento), por periodo.", en: "Minimum return you require (discount rate), per period." } },
              { symbol: "F1 … Fn", meaning: { es: "Flujos de efectivo de los periodos 1 a n, en pesos.", en: "Cash flows for periods 1 to n, in pesos." } },
              { symbol: "Inversión inicial", meaning: { es: "Lo que pagas hoy (periodo 0), en pesos; se resta fuera de VNA.", en: "What you pay today (period 0), in pesos; it is subtracted outside NPV." } },
            ],
            steps: [
              { es: "Escribe los flujos desde el año 1 en un rango, sin la inversión de hoy.", en: "Put the cash flows from year 1 onward in a range, without today's investment." },
              { es: "Usa =VNA(tasa, rango): descuenta cada flujo con su año y los suma.", en: "Use =NPV(rate, range): it discounts each flow by its year and adds them up." },
              { es: "Resta la inversión inicial fuera de la función.", en: "Subtract the initial investment outside the function." },
            ],
            example: {
              es: "Inviertes $30,000 hoy y recibes $12,000, $15,000 y $10,000 en tres años, tasa 8%. A mano: 12,000 ÷ 1.08 = 11,111.11; 15,000 ÷ 1.08² = 12,860.08; 10,000 ÷ 1.08³ = 7,938.32. =VNA(8%, 12000, 15000, 10000) ≈ $31,909.52. VPN = 31,909.52 − 30,000 = **$1,909.52**.",
              en: "You invest $30,000 today and receive $12,000, $15,000 and $10,000 over three years, rate 8%. By hand: 12,000 ÷ 1.08 = 11,111.11; 15,000 ÷ 1.08² = 12,860.08; 10,000 ÷ 1.08³ = 7,938.32. =NPV(8%, 12000, 15000, 10000) ≈ $31,909.52. NPV = 31,909.52 − 30,000 = **$1,909.52**.",
            },
            interpret: {
              es: "VPN positivo: el proyecto rinde más que tu tasa y conviene. La **TIR** (=TIR del rango completo, con la inversión negativa al inicio) es la tasa donde el VPN da cero; aquí ≈ 11.6%, mayor que 8%.",
              en: "Positive NPV: the project yields more than your rate and is worth it. The **IRR** (=IRR of the full range, with the negative investment first) is the rate at which NPV is zero; here ≈ 11.6%, above 8%.",
            },
            mistake: {
              es: "Meter la inversión de hoy dentro del rango de VNA: Excel la descontaría como si ocurriera al final del año 1.",
              en: "Putting today's investment inside the NPV range: Excel would discount it as if it happened at the end of year 1.",
            },
          },
        ],
      },
      {
        heading: { es: "Excel para el trabajo contable", en: "Excel for accounting work" },
        body: [
          {
            es: "La **depreciación en línea recta** reparte el costo de un activo en partes iguales durante su vida útil. En Excel: =SLN(costo, valor residual, vida). El **valor residual** es lo que esperas recuperar al final, por ejemplo al vender el equipo usado. El **valor en libros** es el costo menos la depreciación acumulada.",
            en: "**Straight-line depreciation** spreads an asset's cost in equal parts over its useful life. In Excel: =SLN(cost, salvage value, life). The **salvage value** is what you expect to recover at the end, for example by selling the used equipment. **Book value** is cost minus accumulated depreciation.",
          },
          {
            es: "Para revisar la **balanza de comprobación** (la lista de cuentas con sus cargos y abonos), compara =SUMA(cargos) − SUMA(abonos): debe dar **cero**. Si no, hay un error de captura o falta un movimiento. Con **SUMAR.SI** armas auxiliares por cuenta, y con **BUSCARX** o BUSCARV cruzas tu registro contra el estado de cuenta del banco para **conciliar** (encontrar lo que no coincide).",
            en: "To check the **trial balance** (the list of accounts with their debits and credits), compare =SUM(debits) − SUM(credits): it must be **zero**. If not, there is an entry error or a missing transaction. With **SUMIF** you build subsidiary ledgers by account, and with **XLOOKUP** or VLOOKUP you match your records against the bank statement to **reconcile** (find what does not match).",
          },
          {
            es: "Mini ejemplo: una camioneta de $300,000 con valor residual de $60,000 y 5 años de vida se deprecia =SLN(300000, 60000, 5) = $48,000 por año.",
            en: "Mini example: a $300,000 van with a $60,000 salvage value and a 5-year life depreciates =SLN(300000, 60000, 5) = $48,000 per year.",
          },
        ],
        formulas: [
          {
            name: { es: "Depreciación en línea recta y valor en libros", en: "Straight-line depreciation and book value" },
            expression: "Depreciación anual = (Costo − Valor residual) ÷ Vida útil  [=SLN(costo, residual, vida)];  Valor en libros = Costo − Depreciación anual × años transcurridos",
            variables: [
              { symbol: "Costo", meaning: { es: "Lo que pagaste por el activo, en pesos.", en: "What you paid for the asset, in pesos." } },
              { symbol: "Valor residual", meaning: { es: "Lo que esperas recuperar al final de su vida (por ejemplo, al venderlo usado), en pesos.", en: "What you expect to recover at the end of its life (for example, by selling it used), in pesos." } },
              { symbol: "Vida útil", meaning: { es: "Años que esperas usarlo.", en: "Years you expect to use it." } },
              { symbol: "años transcurridos", meaning: { es: "Años que ya pasaron desde la compra.", en: "Years that have passed since the purchase." } },
              { symbol: "Valor en libros", meaning: { es: "Lo que todavía vale el activo en tu contabilidad, en pesos.", en: "What the asset is still worth in your books, in pesos." } },
            ],
            steps: [
              { es: "Resta el valor residual al costo: esa es la parte que se reparte.", en: "Subtract the salvage value from the cost: that is the part to spread." },
              { es: "Divide entre la vida útil: depreciación de cada año.", en: "Divide by the useful life: depreciation for each year." },
              { es: "Multiplica por los años transcurridos: depreciación acumulada.", en: "Multiply by the years elapsed: accumulated depreciation." },
              { es: "Resta la acumulada al costo (no al valor residual): valor en libros.", en: "Subtract the accumulated amount from the cost (not from the salvage value): book value." },
            ],
            example: {
              es: "Computadora de $24,000, valor residual $4,000, vida 4 años. Anual: (24,000 − 4,000) ÷ 4 = **$5,000**. Acumulada al año 3: 5,000 × 3 = $15,000. Valor en libros: 24,000 − 15,000 = **$9,000**.",
              en: "A $24,000 computer, $4,000 salvage value, 4-year life. Annual: (24,000 − 4,000) ÷ 4 = **$5,000**. Accumulated at year 3: 5,000 × 3 = $15,000. Book value: 24,000 − 15,000 = **$9,000**.",
            },
            interpret: {
              es: "Al final de la vida útil, el valor en libros debe ser igual al valor residual.",
              en: "At the end of the useful life, book value should equal the salvage value.",
            },
            mistake: {
              es: "Dividir el costo completo entre la vida útil sin restar el valor residual.",
              en: "Dividing the full cost by the useful life without subtracting the salvage value.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "¿Cuánto tendré al final?", en: "How much will I have at the end?" },
        problem: {
          es: "Inviertes hoy $20,000 en un instrumento hipotético que paga 8% anual compuesto, durante 2 años, sin aportaciones extra. ¿Cuánto tendrás? Escribe también la fórmula de Excel.",
          en: "You invest $20,000 today in a hypothetical instrument paying 8% per year compounded, for 2 years, with no extra contributions. How much will you have? Also write the Excel formula.",
        },
        steps: [
          { es: "Fórmula: =VF(8%, 2, 0, −20000). La inversión va negativa porque sale de tu bolsillo.", en: "Formula: =FV(8%, 2, 0, −20000). The investment is negative because it leaves your pocket." },
          { es: "A mano: 20,000 × 1.08 = 21,600 al final del año 1.", en: "By hand: 20,000 × 1.08 = 21,600 at the end of year 1." },
          { es: "21,600 × 1.08 = 23,328 al final del año 2.", en: "21,600 × 1.08 = 23,328 at the end of year 2." },
        ],
        result: {
          es: "Tendrás $23,328. Excel devuelve el resultado positivo porque es dinero que recibes.",
          en: "You will have $23,328. Excel returns a positive result because it is money you receive.",
        },
      },
      {
        title: { es: "Depreciación y valor en libros", en: "Depreciation and book value" },
        problem: {
          es: "Una imprenta compra una máquina de $120,000, con valor residual de $20,000 y vida útil de 4 años. Calcula la depreciación anual y el valor en libros al final del año 3.",
          en: "A print shop buys a $120,000 machine with a $20,000 salvage value and a 4-year useful life. Compute the annual depreciation and the book value at the end of year 3.",
        },
        steps: [
          { es: "=SLN(120000, 20000, 4) = (120,000 − 20,000) ÷ 4 = $25,000 por año.", en: "=SLN(120000, 20000, 4) = (120,000 − 20,000) ÷ 4 = $25,000 per year." },
          { es: "Depreciación acumulada a 3 años: 25,000 × 3 = $75,000.", en: "Accumulated depreciation after 3 years: 25,000 × 3 = $75,000." },
          { es: "Valor en libros: 120,000 − 75,000 = $45,000.", en: "Book value: 120,000 − 75,000 = $45,000." },
        ],
        result: {
          es: "Depreciación anual de $25,000 y valor en libros de $45,000 al final del año 3. Al final del año 4 quedará en $20,000, el valor residual.",
          en: "Annual depreciation of $25,000 and a book value of $45,000 at the end of year 3. At the end of year 4 it will be $20,000, the salvage value.",
        },
      },
    ],
    keyPoints: [
      { es: "La tasa y el número de periodos siempre en la misma unidad (mensual con mensual).", en: "Rate and number of periods always in the same unit (monthly with monthly)." },
      { es: "Excel usa signos: lo que pagas es negativo y lo que recibes, positivo.", en: "Excel uses signs: what you pay is negative and what you receive is positive." },
      { es: "VNA descuenta desde el periodo 1: la inversión de hoy se resta fuera de la función.", en: "NPV discounts from period 1: today's investment is subtracted outside the function." },
      { es: "SLN reparte (costo − residual) en partes iguales; valor en libros = costo − depreciación acumulada.", en: "SLN spreads (cost − salvage) equally; book value = cost − accumulated depreciation." },
      { es: "En la balanza, la suma de cargos menos la de abonos debe dar cero.", en: "In the trial balance, total debits minus total credits must be zero." },
    ],
    normativeNote: NOTE_EXCEL_FIN,
    exerciseIds: ['TEC-03-E1', 'TEC-03-E2', 'TEC-03-E3', 'TEC-03-E4', 'TEC-03-E5', 'TEC-03-E6'],
  },

  // ───────────────────────────── TEC-04 ─────────────────────────────
  {
    id: 'TEC-04',
    level: 2,
    topicIds: ['TEC.4'],
    title: { es: "Modelación y automatización con hojas de cálculo", en: "Spreadsheet modeling and automation" },
    summary: {
      es: "Un buen modelo separa supuestos, cálculos y resultados, permite probar escenarios con herramientas de análisis de hipótesis y se automatiza con validación de datos, Power Query y macros.",
      en: "A good model separates assumptions, calculations and results, lets you test scenarios with what-if analysis tools, and is automated with data validation, Power Query and macros.",
    },
    minutes: 17,
    objectives: [
      { es: "Estructurar un modelo en entradas, cálculos y salidas sin números fijos dentro de las fórmulas.", en: "Structure a model into inputs, calculations and outputs without hard-coded numbers inside formulas." },
      { es: "Usar Buscar objetivo, escenarios y tablas de datos para responder preguntas \"¿qué pasaría si...?\".", en: "Use Goal Seek, scenarios and data tables to answer \"what if...?\" questions." },
      { es: "Distinguir herramientas para automatizar: validación de datos, Power Query y macros.", en: "Distinguish automation tools: data validation, Power Query and macros." },
    ],
    theory: [
      {
        heading: { es: "Anatomía de un buen modelo", en: "Anatomy of a good model" },
        body: [
          {
            es: "Un **modelo** es una hoja que imita un negocio con números: si cambias un supuesto, ves cómo cambia el resultado. Para que sea confiable, sepáralo en tres partes: **entradas** (supuestos como precio, volumen o tasa), **cálculos** (las fórmulas) y **salidas** (los resultados que lees, como utilidad o flujo).",
            en: "A **model** is a sheet that mimics a business with numbers: if you change an assumption, you see how the result changes. To make it reliable, split it into three parts: **inputs** (assumptions such as price, volume or rate), **calculations** (the formulas) and **outputs** (the results you read, such as profit or cash flow).",
          },
          {
            es: "La regla más importante: **no escribas números fijos dentro de las fórmulas** (en inglés, *hardcoding*). Si el tipo de cambio está escrito como 18 en 200 fórmulas y cambia, tendrás que corregir 200 celdas y seguro se te escapa alguna. Ponlo en **una sola celda de entrada** y haz referencia a ella.",
            en: "The most important rule: **do not type fixed numbers inside formulas** (*hardcoding*). If the exchange rate is typed as 18 in 200 formulas and it changes, you will have to fix 200 cells and you will surely miss one. Put it in **a single input cell** and reference it.",
          },
          {
            es: "Mini ejemplo: una pastelería pone en la hoja \"Supuestos\" el precio del pastel ($350), el costo variable ($150) y la renta ($12,000). La hoja \"Resultados\" solo usa referencias a esas celdas. Para probar otro precio, cambias una sola celda.",
            en: "Mini example: a bakery puts the cake price ($350), the variable cost ($150) and the rent ($12,000) on the \"Assumptions\" sheet. The \"Results\" sheet only references those cells. To try another price, you change a single cell.",
          },
        ],
        bullets: [
          { es: "Distingue las entradas con un color (es común usar azul para supuestos).", en: "Mark inputs with a color (blue is commonly used for assumptions)." },
          { es: "Una fórmula por fila, igual en toda la fila.", en: "One formula per row, the same across the row." },
          { es: "Agrega controles: celdas que verifican que todo cuadre.", en: "Add checks: cells that verify everything balances." },
          { es: "Documenta las fuentes y fechas de los supuestos.", en: "Document the sources and dates of the assumptions." },
        ],
      },
      {
        heading: { es: "Análisis de hipótesis", en: "What-if analysis" },
        body: [
          {
            es: "**Buscar objetivo** trabaja al revés: le dices el resultado que quieres y qué celda puede cambiar, y Excel encuentra el valor. Por ejemplo: \"¿cuántos pasteles debo vender para que la utilidad sea cero?\". Ese número es el **punto de equilibrio**: donde no ganas ni pierdes.",
            en: "**Goal Seek** works backwards: you tell it the result you want and which cell it may change, and Excel finds the value. For example: \"how many cakes must I sell for profit to be zero?\". That number is the **break-even point**: where you neither earn nor lose.",
          },
          {
            es: "El **Administrador de escenarios** guarda juegos completos de supuestos (pesimista, base, optimista) y los compara en un resumen. Una **tabla de datos** muestra el resultado para muchos valores de uno o dos supuestos a la vez: es la forma rápida de hacer un **análisis de sensibilidad**, o sea, ver qué tanto se mueve el resultado cuando cambia un supuesto.",
            en: "The **Scenario Manager** stores complete sets of assumptions (pessimistic, base, optimistic) and compares them in a summary. A **data table** shows the result for many values of one or two assumptions at once: it is the quick way to run a **sensitivity analysis**, that is, to see how much the result moves when one assumption changes.",
          },
          {
            es: "Mini ejemplo: con precio de $350, costo variable de $150 y renta de $12,000, cada pastel deja $200. Buscar objetivo encuentra 12,000 ÷ 200 = 60 pasteles para llegar a utilidad cero.",
            en: "Mini example: with a $350 price, $150 variable cost and $12,000 rent, each cake leaves $200. Goal Seek finds 12,000 ÷ 200 = 60 cakes to reach zero profit.",
          },
        ],
        formulas: [
          {
            name: { es: "Utilidad de un modelo sencillo (para escenarios)", en: "Profit in a simple model (for scenarios)" },
            expression: "Utilidad = Unidades × (Precio − Costo variable unitario) − Costos fijos",
            variables: [
              { symbol: "Unidades", meaning: { es: "Cantidad que vendes en el periodo.", en: "Quantity you sell in the period." } },
              { symbol: "Precio", meaning: { es: "Lo que cobras por unidad, en pesos.", en: "What you charge per unit, in pesos." } },
              { symbol: "Costo variable unitario", meaning: { es: "Lo que te cuesta cada unidad extra (insumos, empaque), en pesos.", en: "What each extra unit costs you (inputs, packaging), in pesos." } },
              { symbol: "Precio − Costo variable unitario", meaning: { es: "Margen de contribución: lo que deja cada unidad para pagar los fijos, en pesos.", en: "Contribution margin: what each unit leaves to cover fixed costs, in pesos." } },
              { symbol: "Costos fijos", meaning: { es: "Lo que pagas en el mes aunque no vendas (renta, sueldos base), en pesos.", en: "What you pay in the month even if you sell nothing (rent, base salaries), in pesos." } },
            ],
            steps: [
              { es: "Calcula lo que deja cada unidad: precio − costo variable.", en: "Compute what each unit leaves: price − variable cost." },
              { es: "Multiplícalo por las unidades vendidas.", en: "Multiply it by the units sold." },
              { es: "Resta los costos fijos. Para cada escenario, cambia solo el supuesto que se prueba (por ejemplo, el precio).", en: "Subtract fixed costs. For each scenario, change only the assumption being tested (for example, the price)." },
            ],
            example: {
              es: "Una cafetería vende 800 tazas al mes, costo variable $15 y fijos $18,000. Precio $40: 800 × 25 − 18,000 = **$2,000**. Precio $45: 800 × 30 − 18,000 = **$6,000**. Precio $50: 800 × 35 − 18,000 = **$10,000**.",
              en: "A coffee shop sells 800 cups a month, $15 variable cost and $18,000 fixed costs. Price $40: 800 × 25 − 18,000 = **$2,000**. Price $45: 800 × 30 − 18,000 = **$6,000**. Price $50: 800 × 35 − 18,000 = **$10,000**.",
            },
            interpret: {
              es: "Si un cambio pequeño en un supuesto mueve mucho la utilidad, el resultado es muy sensible a ese supuesto y conviene vigilarlo.",
              en: "If a small change in one assumption moves profit a lot, the result is very sensitive to that assumption and it is worth watching.",
            },
            mistake: {
              es: "Olvidar restar los costos fijos.",
              en: "Forgetting to subtract fixed costs.",
            },
          },
          {
            name: { es: "Punto de equilibrio en unidades", en: "Break-even point in units" },
            expression: "Punto de equilibrio (unidades) = Costos fijos ÷ (Precio − Costo variable unitario)",
            variables: [
              { symbol: "Punto de equilibrio", meaning: { es: "Unidades que debes vender para que la utilidad sea cero (ni ganas ni pierdes).", en: "Units you must sell for profit to be zero (you neither earn nor lose)." } },
              { symbol: "Costos fijos", meaning: { es: "Lo que pagas al mes aunque no vendas, en pesos.", en: "What you pay each month even if you sell nothing, in pesos." } },
              { symbol: "Precio", meaning: { es: "Lo que cobras por unidad, en pesos.", en: "What you charge per unit, in pesos." } },
              { symbol: "Costo variable unitario", meaning: { es: "Lo que cuesta producir o atender cada unidad, en pesos.", en: "What it costs to produce or serve each unit, in pesos." } },
            ],
            steps: [
              { es: "Calcula cuánto deja cada unidad: precio − costo variable.", en: "Compute what each unit leaves: price − variable cost." },
              { es: "Divide los costos fijos entre ese margen.", en: "Divide fixed costs by that margin." },
              { es: "Si sale con decimales, redondea hacia arriba (no se vende media unidad).", en: "If it has decimals, round up (you cannot sell half a unit)." },
            ],
            example: {
              es: "Con la cafetería: cada taza deja 45 − 15 = $30. Punto de equilibrio: 18,000 ÷ 30 = **600 tazas** al mes. Buscar objetivo llega al mismo número poniendo la utilidad en 0 y cambiando la celda de tazas.",
              en: "With the coffee shop: each cup leaves 45 − 15 = $30. Break-even: 18,000 ÷ 30 = **600 cups** a month. Goal Seek reaches the same number by setting profit to 0 and changing the cups cell.",
            },
            interpret: {
              es: "Vender más que el punto de equilibrio da ganancia; vender menos, pérdida.",
              en: "Selling above break-even gives a profit; selling below, a loss.",
            },
            mistake: {
              es: "Dividir los costos fijos entre el precio completo (18,000 ÷ 45) y olvidar el costo variable.",
              en: "Dividing fixed costs by the full price (18,000 ÷ 45) and forgetting the variable cost.",
            },
          },
        ],
      },
      {
        heading: { es: "Automatizar tareas repetitivas", en: "Automating repetitive tasks" },
        body: [
          {
            es: "La **validación de datos** evita errores desde la captura: limita una celda a una lista desplegable, a fechas o a números dentro de un rango. Es la primera automatización, porque previene en vez de corregir.",
            en: "**Data validation** prevents errors at entry: it limits a cell to a drop-down list, to dates or to numbers within a range. It is the first automation, because it prevents instead of correcting.",
          },
          {
            es: "**Power Query** importa y limpia datos (quita columnas, cambia formatos, une archivos) y **recuerda los pasos**: el mes siguiente solo presionas **Actualizar**. Una **macro** graba una secuencia de acciones para repetirla con un clic; por dentro se escribe en un lenguaje llamado **VBA**. Los libros con macros se guardan con extensión **.xlsm**; el formato .xlsx no conserva las macros.",
            en: "**Power Query** imports and cleans data (removes columns, changes formats, combines files) and **remembers the steps**: next month you just press **Refresh**. A **macro** records a sequence of actions to repeat it with one click; inside, it is written in a language called **VBA**. Workbooks with macros are saved with the **.xlsm** extension; the .xlsx format does not keep macros.",
          },
          {
            es: "Mini ejemplo: cada lunes una tienda descarga el reporte de ventas, borra tres columnas y cambia el formato de fecha. Con Power Query lo configura una vez y después solo actualiza. Ojo: abre macros solo de fuentes confiables, porque pueden ejecutar acciones en tu equipo.",
            en: "Mini example: every Monday a store downloads the sales report, deletes three columns and changes the date format. With Power Query it sets this up once and then just refreshes. Careful: only open macros from trusted sources, because they can run actions on your computer.",
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Punto de equilibrio con Buscar objetivo", en: "Break-even with Goal Seek" },
        problem: {
          es: "Un food truck vende tacos a $25 la orden; el costo variable por orden es $10 y los costos fijos mensuales son $30,000. ¿Cuántas órdenes al mes necesita para no perder? Explica cómo lo harías con Buscar objetivo.",
          en: "A food truck sells tacos at $25 per order; the variable cost per order is $10 and monthly fixed costs are $30,000. How many orders per month does it need to break even? Explain how you would do it with Goal Seek.",
        },
        steps: [
          { es: "Modelo: utilidad = órdenes × (25 − 10) − 30,000.", en: "Model: profit = orders × (25 − 10) − 30,000." },
          { es: "Buscar objetivo: definir la celda de utilidad, con valor 0, cambiando la celda de órdenes.", en: "Goal Seek: set the profit cell to value 0 by changing the orders cell." },
          { es: "Comprobación a mano: 30,000 ÷ 15 = 2,000 órdenes.", en: "Check by hand: 30,000 ÷ 15 = 2,000 orders." },
        ],
        result: {
          es: "Necesita 2,000 órdenes al mes. Cada orden adicional suma $15 de utilidad.",
          en: "It needs 2,000 orders per month. Each extra order adds $15 of profit.",
        },
      },
      {
        title: { es: "Tres escenarios de precio", en: "Three price scenarios" },
        problem: {
          es: "La misma pastelería vende 100 pasteles al mes, con costo variable de $150 y renta de $12,000. Compara la utilidad con precios de $300 (pesimista), $350 (base) y $400 (optimista).",
          en: "The same bakery sells 100 cakes a month, with a $150 variable cost and $12,000 rent. Compare profit with prices of $300 (pessimistic), $350 (base) and $400 (optimistic).",
        },
        steps: [
          { es: "Pesimista: 100 × (300 − 150) − 12,000 = $3,000.", en: "Pessimistic: 100 × (300 − 150) − 12,000 = $3,000." },
          { es: "Base: 100 × (350 − 150) − 12,000 = $8,000.", en: "Base: 100 × (350 − 150) − 12,000 = $8,000." },
          { es: "Optimista: 100 × (400 − 150) − 12,000 = $13,000.", en: "Optimistic: 100 × (400 − 150) − 12,000 = $13,000." },
        ],
        result: {
          es: "Cada $50 de precio mueve la utilidad $5,000. El Administrador de escenarios guarda los tres juegos y los muestra en un solo resumen.",
          en: "Every $50 of price moves profit by $5,000. The Scenario Manager stores the three sets and shows them in a single summary.",
        },
      },
    ],
    keyPoints: [
      { es: "Separa entradas, cálculos y salidas; los supuestos viven en una sola celda.", en: "Separate inputs, calculations and outputs; each assumption lives in a single cell." },
      { es: "Evita números fijos dentro de las fórmulas.", en: "Avoid fixed numbers inside formulas." },
      { es: "Buscar objetivo encuentra la entrada que da el resultado que quieres.", en: "Goal Seek finds the input that gives the result you want." },
      { es: "Escenarios y tablas de datos muestran qué tan sensible es el resultado a los supuestos.", en: "Scenarios and data tables show how sensitive the result is to the assumptions." },
      { es: "Validación previene errores; Power Query repite limpiezas; las macros (.xlsm) repiten acciones.", en: "Validation prevents errors; Power Query repeats clean-ups; macros (.xlsm) repeat actions." },
    ],
    normativeNote: NOTE_SOFTWARE,
    exerciseIds: ['TEC-04-E1', 'TEC-04-E2', 'TEC-04-E3', 'TEC-04-E4', 'TEC-04-E5', 'TEC-04-E6'],
  },

  // ───────────────────────────── TEC-05 ─────────────────────────────
  {
    id: 'TEC-05',
    level: 2,
    topicIds: ['TEC.5'],
    title: { es: "Estadística aplicada a negocios", en: "Statistics applied to business" },
    summary: {
      es: "La estadística resume muchos datos con unas cuantas medidas (media, mediana, desviación estándar) para entender qué es típico, qué tanto varía y qué relaciones existen, sin confundir correlación con causa.",
      en: "Statistics summarizes many data points with a few measures (mean, median, standard deviation) to understand what is typical, how much it varies and what relationships exist, without confusing correlation with cause.",
    },
    minutes: 19,
    objectives: [
      { es: "Distinguir población de muestra y calcular media, mediana y moda.", en: "Distinguish population from sample and compute mean, median and mode." },
      { es: "Medir la dispersión con rango, desviación estándar y coeficiente de variación.", en: "Measure dispersion with range, standard deviation and coefficient of variation." },
      { es: "Interpretar la distribución normal y la correlación sin confundirla con causalidad.", en: "Interpret the normal distribution and correlation without confusing it with causation." },
    ],
    theory: [
      {
        heading: { es: "Datos, población y medidas de tendencia central", en: "Data, population and measures of central tendency" },
        body: [
          {
            es: "La **población** es el grupo completo que te interesa (todos los clientes de tu tienda) y la **muestra** es una parte que sí revisas (200 clientes encuestados). Si la muestra se elige bien, al azar, sus resultados se parecen a los de la población.",
            en: "The **population** is the complete group you care about (all your store's customers) and the **sample** is the part you actually check (200 surveyed customers). If the sample is chosen well, at random, its results resemble the population's.",
          },
          {
            es: "Las **medidas de tendencia central** dicen cuál es el valor típico. La **media** (promedio) suma todo y divide entre el número de datos. La **mediana** es el dato de en medio cuando los ordenas. La **moda** es el valor que más se repite.",
            en: "**Measures of central tendency** tell you the typical value. The **mean** (average) adds everything and divides by the number of data points. The **median** is the middle value when you sort them. The **mode** is the value that repeats most.",
          },
          {
            es: "La media se deja llevar por los **valores extremos** (atípicos); la mediana no. Mini ejemplo: en una oficina cuatro personas ganan $15,000 y el director $95,000. La media es $31,000, pero la mediana, $15,000, describe mejor el sueldo típico.",
            en: "The mean is pulled by **extreme values** (outliers); the median is not. Mini example: in an office four people earn $15,000 and the director $95,000. The mean is $31,000, but the median, $15,000, better describes the typical salary.",
          },
        ],
        formulas: [
          {
            name: { es: "Media, mediana y moda", en: "Mean, median and mode" },
            expression: "Media = Σ x ÷ n;  Mediana = dato de en medio (datos ordenados);  Moda = dato que más se repite",
            variables: [
              { symbol: "x", meaning: { es: "Cada uno de los datos (por ejemplo, la venta de cada día).", en: "Each data point (for example, each day's sales)." } },
              { symbol: "Σ x", meaning: { es: "\"Suma de todas las x\": el total de los datos.", en: "\"Sum of all the x values\": the total of the data." } },
              { symbol: "n", meaning: { es: "Cuántos datos hay.", en: "How many data points there are." } },
            ],
            steps: [
              { es: "Media: suma todos los datos y divide entre cuántos son.", en: "Mean: add all the data and divide by how many there are." },
              { es: "Mediana: ordena de menor a mayor y toma el de en medio; si hay un número par de datos, promedia los dos centrales.", en: "Median: sort from smallest to largest and take the middle one; with an even number of data, average the two middle ones." },
              { es: "Moda: busca el valor que aparece más veces.", en: "Mode: find the value that appears most often." },
            ],
            example: {
              es: "Ventas de 5 días (miles): 8, 9, 9, 11 y 33. Media: (8 + 9 + 9 + 11 + 33) ÷ 5 = 70 ÷ 5 = **14**. Mediana: ya están ordenados; el 3.º es **9**. Moda: **9** (aparece dos veces).",
              en: "Sales for 5 days (thousands): 8, 9, 9, 11 and 33. Mean: (8 + 9 + 9 + 11 + 33) ÷ 5 = 70 ÷ 5 = **14**. Median: already sorted; the 3rd is **9**. Mode: **9** (it appears twice).",
            },
            interpret: {
              es: "Si la media queda muy lejos de la mediana, hay algún dato extremo; para describir lo típico, usa la mediana.",
              en: "If the mean is far from the median, there is an extreme value; to describe what is typical, use the median.",
            },
            mistake: {
              es: "Tomar el dato de en medio sin ordenar antes los datos.",
              en: "Taking the middle value without sorting the data first.",
            },
          },
        ],
      },
      {
        heading: { es: "Medidas de dispersión", en: "Measures of dispersion" },
        body: [
          {
            es: "Dos tiendas pueden vender en promedio lo mismo y ser muy distintas: una vende casi igual todos los días y la otra sube y baja mucho. La **dispersión** mide qué tanto se alejan los datos del promedio.",
            en: "Two stores can sell the same on average and be very different: one sells almost the same every day and the other goes up and down a lot. **Dispersion** measures how far the data are from the average.",
          },
          {
            es: "El **rango** es el máximo menos el mínimo. La **varianza** promedia las distancias al cuadrado respecto a la media, y la **desviación estándar** es su raíz cuadrada, para volver a las unidades originales (pesos, días). Si trabajas con toda la población divides entre n; con una muestra, entre n − 1. En Excel: DESVEST.P para población y DESVEST.M para muestra.",
            en: "The **range** is the maximum minus the minimum. The **variance** averages the squared distances from the mean, and the **standard deviation** is its square root, to return to the original units (pesos, days). If you work with the whole population you divide by n; with a sample, by n − 1. In Excel: STDEV.P for a population and STDEV.S for a sample.",
          },
          {
            es: "Para comparar la variación de cosas con promedios distintos usa el **coeficiente de variación**: desviación estándar ÷ media. Mini ejemplo: ventas diarias con media de $40,000 y desviación de $4,000 tienen un coeficiente de 10%.",
            en: "To compare the variation of things with different averages use the **coefficient of variation**: standard deviation ÷ mean. Mini example: daily sales with a $40,000 mean and a $4,000 deviation have a 10% coefficient.",
          },
        ],
        formulas: [
          {
            name: { es: "Rango", en: "Range" },
            expression: "Rango = valor máximo − valor mínimo",
            variables: [
              { symbol: "valor máximo", meaning: { es: "El dato más grande.", en: "The largest data point." } },
              { symbol: "valor mínimo", meaning: { es: "El dato más pequeño.", en: "The smallest data point." } },
            ],
            steps: [
              { es: "Identifica el dato más grande y el más pequeño.", en: "Find the largest and the smallest data point." },
              { es: "Resta el mínimo al máximo.", en: "Subtract the minimum from the maximum." },
            ],
            example: {
              es: "Datos: 1, 3, 5, 7 y 9. Rango = 9 − 1 = **8**.",
              en: "Data: 1, 3, 5, 7 and 9. Range = 9 − 1 = **8**.",
            },
          },
          {
            name: { es: "Desviación estándar", en: "Standard deviation" },
            expression: "σ = √[ Σ (x − media)² ÷ n ]  (población, DESVEST.P);  con muestra se divide entre n − 1 (DESVEST.M)",
            variables: [
              { symbol: "σ", meaning: { es: "Desviación estándar: qué tanto se alejan, en promedio, los datos de la media, en las mismas unidades (pesos, horas).", en: "Standard deviation: how far the data are from the mean on average, in the same units (pesos, hours)." } },
              { symbol: "x", meaning: { es: "Cada dato.", en: "Each data point." } },
              { symbol: "media", meaning: { es: "El promedio de los datos.", en: "The average of the data." } },
              { symbol: "(x − media)²", meaning: { es: "Distancia de cada dato a la media, elevada al cuadrado para que no se cancelen positivos y negativos.", en: "Each data point's distance from the mean, squared so positives and negatives do not cancel out." } },
              { symbol: "n", meaning: { es: "Número de datos (si es una muestra, usa n − 1).", en: "Number of data points (for a sample, use n − 1)." } },
              { symbol: "√", meaning: { es: "Raíz cuadrada: regresa el resultado a las unidades originales.", en: "Square root: brings the result back to the original units." } },
            ],
            steps: [
              { es: "Calcula la media.", en: "Compute the mean." },
              { es: "Resta la media a cada dato y eleva cada resultado al cuadrado.", en: "Subtract the mean from each data point and square each result." },
              { es: "Suma esos cuadrados y divide entre n (población) o n − 1 (muestra): esa es la varianza.", en: "Add those squares and divide by n (population) or n − 1 (sample): that is the variance." },
              { es: "Saca la raíz cuadrada de la varianza.", en: "Take the square root of the variance." },
            ],
            example: {
              es: "Población: 1, 3, 5, 7, 9. Media = 25 ÷ 5 = 5. Distancias al cuadrado: 16, 4, 0, 4, 16; suman 40. Varianza = 40 ÷ 5 = 8. σ = √8 = **2.83**.",
              en: "Population: 1, 3, 5, 7, 9. Mean = 25 ÷ 5 = 5. Squared distances: 16, 4, 0, 4, 16; they add up to 40. Variance = 40 ÷ 5 = 8. σ = √8 = **2.83**.",
            },
            interpret: {
              es: "Más grande = datos más dispersos; cercana a 0 = datos muy parecidos entre sí.",
              en: "Larger = more spread-out data; close to 0 = data very similar to each other.",
            },
            mistake: {
              es: "Usar n − 1 cuando tienes toda la población (o n con una muestra), u olvidar sacar la raíz.",
              en: "Using n − 1 when you have the whole population (or n with a sample), or forgetting the square root.",
            },
          },
          {
            name: { es: "Coeficiente de variación (CV)", en: "Coefficient of variation (CV)" },
            expression: "CV = σ ÷ media × 100",
            variables: [
              { symbol: "CV", meaning: { es: "Variación relativa al promedio, en %.", en: "Variation relative to the average, in %." } },
              { symbol: "σ", meaning: { es: "Desviación estándar.", en: "Standard deviation." } },
              { symbol: "media", meaning: { es: "Promedio de los datos.", en: "Average of the data." } },
            ],
            steps: [
              { es: "Divide la desviación estándar entre la media.", en: "Divide the standard deviation by the mean." },
              { es: "Multiplica por 100 para expresarlo en %.", en: "Multiply by 100 to express it in %." },
            ],
            example: {
              es: "Ventas diarias con media de $30,000 y σ de $6,000: 6,000 ÷ 30,000 = 0.20 = **20%**.",
              en: "Daily sales with a $30,000 mean and a $6,000 σ: 6,000 ÷ 30,000 = 0.20 = **20%**.",
            },
            interpret: {
              es: "Menor CV = más estable en relación con su tamaño. Sirve para comparar negocios con promedios distintos.",
              en: "Lower CV = more stable relative to its size. It lets you compare businesses with different averages.",
            },
            mistake: {
              es: "Invertir la división (media ÷ σ) o comparar solo desviaciones en pesos.",
              en: "Flipping the division (mean ÷ σ) or comparing only deviations in pesos.",
            },
          },
        ],
      },
      {
        heading: { es: "Distribución normal y correlación", en: "Normal distribution and correlation" },
        body: [
          {
            es: "Muchos datos de negocio (tiempos de entrega, peso de un producto) forman una **campana**: la mayoría cerca del promedio y pocos en los extremos. Es la **distribución normal**. En ella se cumple la **regla empírica**: cerca del 68% de los datos está a una desviación estándar de la media, cerca del 95% a dos y casi el 99.7% a tres.",
            en: "Many business data (delivery times, product weight) form a **bell**: most near the average and few at the extremes. This is the **normal distribution**. In it the **empirical rule** holds: about 68% of the data lie within one standard deviation of the mean, about 95% within two and almost 99.7% within three.",
          },
          {
            es: "La **correlación** mide si dos variables se mueven juntas, de −1 a +1. Cerca de +1: cuando una sube, la otra también; cerca de −1: una sube y la otra baja; cerca de 0: no hay relación lineal. **Correlación no es causalidad**: en verano suben las ventas de helados y las de ventiladores, pero ninguna causa la otra; ambas dependen del calor.",
            en: "**Correlation** measures whether two variables move together, from −1 to +1. Near +1: when one goes up, the other does too; near −1: one goes up and the other goes down; near 0: there is no linear relationship. **Correlation is not causation**: in summer ice cream and fan sales both rise, but neither causes the other; both depend on the heat.",
          },
          {
            es: "Mini ejemplo: si el tiempo de entrega tiene media de 3 días y desviación de 0.5 días con forma de campana, cerca del 95% de los pedidos llega entre 2 y 4 días.",
            en: "Mini example: if delivery time has a mean of 3 days and a standard deviation of 0.5 days with a bell shape, about 95% of orders arrive between 2 and 4 days.",
          },
        ],
        bullets: [
          { es: "68% de los datos: media ± 1 desviación.", en: "68% of the data: mean ± 1 deviation." },
          { es: "95% de los datos: media ± 2 desviaciones.", en: "95% of the data: mean ± 2 deviations." },
          { es: "99.7% de los datos: media ± 3 desviaciones.", en: "99.7% of the data: mean ± 3 deviations." },
          { es: "Correlación de −1 a +1; no prueba causa.", en: "Correlation from −1 to +1; it does not prove cause." },
        ],
        formulas: [
          {
            name: { es: "Regla empírica (68-95-99.7)", en: "Empirical rule (68-95-99.7)" },
            expression: "Intervalo = media ± k × σ   (k = 1 → 68%;  k = 2 → 95%;  k = 3 → 99.7%)",
            variables: [
              { symbol: "media", meaning: { es: "Promedio de los datos.", en: "Average of the data." } },
              { symbol: "σ", meaning: { es: "Desviación estándar.", en: "Standard deviation." } },
              { symbol: "k", meaning: { es: "Cuántas desviaciones te alejas de la media: 1, 2 o 3.", en: "How many deviations you move away from the mean: 1, 2 or 3." } },
              { symbol: "±", meaning: { es: "Se calcula dos veces: restando (límite bajo) y sumando (límite alto).", en: "It is computed twice: subtracting (lower limit) and adding (upper limit)." } },
            ],
            steps: [
              { es: "Elige k según el porcentaje que te piden: 68% → 1, 95% → 2, 99.7% → 3.", en: "Pick k from the percentage asked: 68% → 1, 95% → 2, 99.7% → 3." },
              { es: "Multiplica k × σ.", en: "Multiply k × σ." },
              { es: "Réstalo y súmalo a la media para obtener los dos límites.", en: "Subtract it from and add it to the mean to get both limits." },
            ],
            example: {
              es: "Tiempo de atención con media de 50 minutos y σ de 5 minutos. 95% → k = 2: 2 × 5 = 10; 50 − 10 = 40 y 50 + 10 = 60. Cerca del 95% de los clientes se atiende **entre 40 y 60 minutos**.",
              en: "Service time with a 50-minute mean and a 5-minute σ. 95% → k = 2: 2 × 5 = 10; 50 − 10 = 40 and 50 + 10 = 60. About 95% of customers are served **between 40 and 60 minutes**.",
            },
            mistake: {
              es: "Confundir qué porcentaje corresponde a cada número de desviaciones (por ejemplo, usar una desviación para el 95%). Solo aplica a datos con forma de campana.",
              en: "Mixing up which percentage goes with each number of deviations (for example, using one deviation for 95%). It only applies to bell-shaped data.",
            },
          },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Ticket promedio y ticket típico", en: "Average ticket and typical ticket" },
        problem: {
          es: "Una cafetería registró 7 tickets: $60, $75, $75, $80, $90, $95 y $510 (un pedido para una oficina). Calcula media, mediana y moda, y di cuál describe mejor al cliente típico.",
          en: "A coffee shop recorded 7 tickets: $60, $75, $75, $80, $90, $95 and $510 (an office order). Compute the mean, median and mode, and say which best describes the typical customer.",
        },
        steps: [
          { es: "Suma: 60 + 75 + 75 + 80 + 90 + 95 + 510 = 985. Media: 985 ÷ 7 = $140.71.", en: "Sum: 60 + 75 + 75 + 80 + 90 + 95 + 510 = 985. Mean: 985 ÷ 7 = $140.71." },
          { es: "Ya están ordenados; el dato de en medio (el 4.º) es $80: esa es la mediana.", en: "They are already sorted; the middle value (4th) is $80: that is the median." },
          { es: "El valor que más se repite es $75: esa es la moda.", en: "The most repeated value is $75: that is the mode." },
        ],
        result: {
          es: "Media $140.71, mediana $80, moda $75. El pedido de $510 infla la media; la mediana describe mejor al cliente típico.",
          en: "Mean $140.71, median $80, mode $75. The $510 order inflates the mean; the median better describes the typical customer.",
        },
      },
      {
        title: { es: "¿Qué sucursal es más estable?", en: "Which branch is more stable?" },
        problem: {
          es: "La sucursal A vende en promedio $50,000 diarios con desviación estándar de $10,000. La sucursal B vende en promedio $20,000 con desviación de $6,000. ¿Cuál es relativamente más estable?",
          en: "Branch A sells $50,000 a day on average with a $10,000 standard deviation. Branch B sells $20,000 on average with a $6,000 deviation. Which is relatively more stable?",
        },
        steps: [
          { es: "CV de A: 10,000 ÷ 50,000 = 0.20 = 20%.", en: "CV of A: 10,000 ÷ 50,000 = 0.20 = 20%." },
          { es: "CV de B: 6,000 ÷ 20,000 = 0.30 = 30%.", en: "CV of B: 6,000 ÷ 20,000 = 0.30 = 30%." },
          { es: "Menor coeficiente significa menor variación relativa.", en: "A lower coefficient means lower relative variation." },
        ],
        result: {
          es: "A es más estable (20% contra 30%), aunque su desviación en pesos sea mayor. Comparar solo desviaciones engañaría.",
          en: "A is more stable (20% vs 30%), even though its deviation in pesos is larger. Comparing deviations alone would mislead.",
        },
      },
    ],
    keyPoints: [
      { es: "La muestra es una parte de la población; bien elegida, la representa.", en: "A sample is part of the population; well chosen, it represents it." },
      { es: "Media, mediana y moda describen el valor típico; la mediana resiste los atípicos.", en: "Mean, median and mode describe the typical value; the median resists outliers." },
      { es: "La desviación estándar mide qué tanto se alejan los datos de la media.", en: "Standard deviation measures how far the data are from the mean." },
      { es: "El coeficiente de variación compara la variación de datos con promedios distintos.", en: "The coefficient of variation compares variation across data with different averages." },
      { es: "Regla empírica 68-95-99.7 para datos en forma de campana.", en: "Empirical rule 68-95-99.7 for bell-shaped data." },
      { es: "Correlación no es causalidad.", en: "Correlation is not causation." },
    ],
    exerciseIds: ['TEC-05-E1', 'TEC-05-E2', 'TEC-05-E3', 'TEC-05-E4', 'TEC-05-E5', 'TEC-05-E6'],
  },

  // ───────────────────────────── TEC-06 ─────────────────────────────
  {
    id: 'TEC-06',
    level: 2,
    topicIds: ['TEC.6'],
    title: { es: "Power BI y visualización de datos", en: "Power BI and data visualization" },
    summary: {
      es: "Power BI conecta y limpia datos con Power Query, los organiza en un modelo de tablas de hechos y dimensiones, calcula medidas con DAX y los presenta en tableros con gráficos bien elegidos.",
      en: "Power BI connects and cleans data with Power Query, organizes it in a model of fact and dimension tables, computes measures with DAX and presents it in dashboards with well-chosen charts.",
    },
    minutes: 16,
    objectives: [
      { es: "Describir el flujo de trabajo de Power BI: obtener, transformar, modelar, visualizar y compartir.", en: "Describe the Power BI workflow: get, transform, model, visualize and share." },
      { es: "Distinguir tablas de hechos y de dimensiones y explicar el esquema estrella.", en: "Distinguish fact and dimension tables and explain the star schema." },
      { es: "Crear medidas sencillas con DAX y evitar promediar porcentajes.", en: "Create simple DAX measures and avoid averaging percentages." },
      { es: "Elegir el gráfico adecuado y diseñar un tablero claro y honesto.", en: "Choose the right chart and design a clear and honest dashboard." },
    ],
    theory: [
      {
        heading: { es: "El flujo de trabajo de Power BI", en: "The Power BI workflow" },
        body: [
          {
            es: "**Power BI** es una herramienta de Microsoft para **inteligencia de negocios**: convertir datos en tableros interactivos. Se arma en **Power BI Desktop** (el programa en tu computadora) y se publica en el **servicio de Power BI** (en línea) para compartirlo y que se actualice.",
            en: "**Power BI** is a Microsoft tool for **business intelligence**: turning data into interactive dashboards. You build in **Power BI Desktop** (the program on your computer) and publish to the **Power BI service** (online) to share it and keep it refreshed.",
          },
          {
            es: "El flujo tiene cinco pasos: **obtener datos** (Excel, bases de datos, archivos CSV), **transformarlos** con **Power Query** (el mismo motor que en Excel: quitar duplicados, corregir tipos, unir tablas), **modelarlos** (relacionar tablas), **visualizarlos** (gráficos y tarjetas) y **compartirlos**. A obtener, transformar y cargar se le llama **ETL** por sus siglas en inglés.",
            en: "The flow has five steps: **get data** (Excel, databases, CSV files), **transform** it with **Power Query** (the same engine as in Excel: remove duplicates, fix types, merge tables), **model** it (relate tables), **visualize** it (charts and cards) and **share** it. Getting, transforming and loading is called **ETL** (extract, transform, load).",
          },
          {
            es: "Mini ejemplo: una franquicia de lavanderías junta cada mes los archivos de ventas de sus 8 locales. Power Query los combina, el modelo los relaciona con el catálogo de locales y el tablero muestra ventas por local y por mes, actualizándose solo.",
            en: "Mini example: a laundromat franchise gathers the sales files of its 8 locations each month. Power Query combines them, the model relates them to the location catalog and the dashboard shows sales by location and month, refreshing by itself.",
          },
        ],
      },
      {
        heading: { es: "Modelo de datos y medidas DAX", en: "Data model and DAX measures" },
        body: [
          {
            es: "Un buen modelo separa dos tipos de tablas. Las **tablas de hechos** guardan los eventos que se miden y crecen todo el tiempo: cada venta con su fecha, producto y monto. Las **tablas de dimensiones** describen el contexto: el catálogo de productos, los clientes, el calendario. Unidas al centro la de hechos y alrededor las dimensiones, forman un **esquema estrella**, con relaciones de **uno a varios** (un producto aparece en muchas ventas).",
            en: "A good model separates two kinds of tables. **Fact tables** store the events being measured and keep growing: each sale with its date, product and amount. **Dimension tables** describe the context: the product catalog, customers, the calendar. With the fact table in the center and the dimensions around it, they form a **star schema**, with **one-to-many** relationships (one product appears in many sales).",
          },
          {
            es: "**DAX** es el lenguaje de fórmulas de Power BI. Una **medida** se recalcula según los filtros que el usuario aplica (si eliges \"Monterrey\", muestra solo Monterrey). Una **columna calculada** se calcula fila por fila al cargar los datos y no reacciona igual a los filtros. Para totales y porcentajes, casi siempre conviene una medida.",
            en: "**DAX** is Power BI's formula language. A **measure** is recalculated according to the filters the user applies (if you pick \"Monterrey\", it shows only Monterrey). A **calculated column** is computed row by row when the data loads and does not react to filters the same way. For totals and percentages, a measure is almost always better.",
          },
          {
            es: "Error clásico: promediar porcentajes. El margen total se calcula como **suma de utilidad ÷ suma de ventas**, con DIVIDE, que además evita el error de dividir entre cero. Mini ejemplo: Margen % = DIVIDE(SUM(Ventas[Utilidad]), SUM(Ventas[Importe])).",
            en: "Classic mistake: averaging percentages. Total margin is computed as **sum of profit ÷ sum of sales**, with DIVIDE, which also avoids the divide-by-zero error. Mini example: Margin % = DIVIDE(SUM(Sales[Profit]), SUM(Sales[Amount])).",
          },
        ],
        bullets: [
          { es: "Hechos: ventas, pagos, movimientos de inventario.", en: "Facts: sales, payments, inventory movements." },
          { es: "Dimensiones: productos, clientes, sucursales, calendario.", en: "Dimensions: products, customers, branches, calendar." },
          { es: "SUM, DIVIDE y CALCULATE son funciones DAX básicas.", en: "SUM, DIVIDE and CALCULATE are basic DAX functions." },
        ],
        formulas: [
          {
            name: { es: "Margen total correcto (medida DAX)", en: "Correct total margin (DAX measure)" },
            expression: "Margen % = DIVIDE( SUM(Utilidad), SUM(Ventas) ) = suma de utilidades ÷ suma de ventas × 100",
            variables: [
              { symbol: "SUM(Utilidad)", meaning: { es: "Suma de la utilidad de todas las filas que pasan los filtros, en pesos.", en: "Sum of profit across all rows that pass the filters, in pesos." } },
              { symbol: "SUM(Ventas)", meaning: { es: "Suma de las ventas de esas mismas filas, en pesos.", en: "Sum of sales for those same rows, in pesos." } },
              { symbol: "DIVIDE", meaning: { es: "Función DAX que divide y, si el denominador es cero, no marca error.", en: "DAX function that divides and, if the denominator is zero, does not throw an error." } },
              { symbol: "Margen %", meaning: { es: "Qué parte de cada peso vendido es utilidad, en %.", en: "What share of each peso sold is profit, in %." } },
            ],
            steps: [
              { es: "Suma las utilidades de todas las tiendas o filas.", en: "Add up the profit of all stores or rows." },
              { es: "Suma las ventas de esas mismas tiendas.", en: "Add up the sales of those same stores." },
              { es: "Divide utilidad total entre ventas totales y multiplica por 100.", en: "Divide total profit by total sales and multiply by 100." },
            ],
            example: {
              es: "Tienda A: ventas $120,000, utilidad $18,000 (15%). Tienda B: ventas $80,000, utilidad $4,000 (5%). Utilidad total: 18,000 + 4,000 = 22,000. Ventas totales: 120,000 + 80,000 = 200,000. Margen = 22,000 ÷ 200,000 = **11%**.",
              en: "Store A: sales $120,000, profit $18,000 (15%). Store B: sales $80,000, profit $4,000 (5%). Total profit: 18,000 + 4,000 = 22,000. Total sales: 120,000 + 80,000 = 200,000. Margin = 22,000 ÷ 200,000 = **11%**.",
            },
            mistake: {
              es: "Promediar los porcentajes ((15% + 5%) ÷ 2 = 10%): ignora que una tienda vende más que la otra.",
              en: "Averaging the percentages ((15% + 5%) ÷ 2 = 10%): it ignores that one store sells more than the other.",
            },
          },
        ],
      },
      {
        heading: { es: "Elegir el gráfico y diseñar el tablero", en: "Choosing the chart and designing the dashboard" },
        body: [
          {
            es: "Cada pregunta tiene su gráfico. Para ver una **tendencia en el tiempo**, usa **líneas**. Para **comparar categorías** (ventas por sucursal), usa **barras**, mejor ordenadas de mayor a menor. Para ver la **parte de un todo** con pocas categorías (2 o 3), un gráfico de anillo puede servir; con muchas, las barras se leen mejor. Para un número clave, una **tarjeta** con el KPI.",
            en: "Each question has its chart. To see a **trend over time**, use **lines**. To **compare categories** (sales by branch), use **bars**, ideally sorted from largest to smallest. To see the **part of a whole** with few categories (2 or 3), a donut chart may work; with many, bars read better. For a key number, a **card** with the KPI.",
          },
          {
            es: "Un **KPI** (indicador clave de desempeño) es un número que dice si vas bien, como ventas contra meta. Un buen tablero muestra **pocos KPI**, con títulos claros, colores consistentes y **segmentadores** (filtros visuales) para explorar. Lo honesto: ejes que no exageren diferencias y nada de efectos 3D que distorsionen.",
            en: "A **KPI** (key performance indicator) is a number that tells you whether you are on track, such as sales vs target. A good dashboard shows **few KPIs**, with clear titles, consistent colors and **slicers** (visual filters) to explore. Being honest: axes that do not exaggerate differences and no 3D effects that distort.",
          },
          {
            es: "Mini ejemplo: el gerente quiere saber si las ventas de 2 años suben o bajan. Una línea mensual de 24 puntos responde de un vistazo; una tabla con 24 números obliga a leer uno por uno.",
            en: "Mini example: the manager wants to know whether 2 years of sales are rising or falling. A 24-point monthly line answers at a glance; a table with 24 numbers forces reading them one by one.",
          },
        ],
        bullets: [
          { es: "Tiempo → líneas.", en: "Time → lines." },
          { es: "Comparar categorías → barras ordenadas.", en: "Compare categories → sorted bars." },
          { es: "Parte de un todo con pocas categorías → anillo o barras apiladas.", en: "Part of a whole with few categories → donut or stacked bars." },
          { es: "Un número clave → tarjeta KPI.", en: "One key number → KPI card." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Margen correcto de dos tiendas", en: "Correct margin for two stores" },
        problem: {
          es: "La tienda Centro vendió $300,000 con utilidad de $60,000 (20%). La tienda Sur vendió $100,000 con utilidad de $5,000 (5%). ¿Cuál es el margen total de la empresa?",
          en: "The Downtown store sold $300,000 with $60,000 profit (20%). The South store sold $100,000 with $5,000 profit (5%). What is the company's total margin?",
        },
        steps: [
          { es: "Error común: promediar (20% + 5%) ÷ 2 = 12.5%.", en: "Common mistake: averaging (20% + 5%) ÷ 2 = 12.5%." },
          { es: "Suma de utilidad: 60,000 + 5,000 = 65,000.", en: "Total profit: 60,000 + 5,000 = 65,000." },
          { es: "Suma de ventas: 300,000 + 100,000 = 400,000.", en: "Total sales: 300,000 + 100,000 = 400,000." },
          { es: "Margen: 65,000 ÷ 400,000 = 16.25%.", en: "Margin: 65,000 ÷ 400,000 = 16.25%." },
        ],
        result: {
          es: "El margen total es 16.25%, no 12.5%. Una medida DAX con DIVIDE(SUM(utilidad), SUM(ventas)) lo calcula bien con cualquier filtro.",
          en: "The total margin is 16.25%, not 12.5%. A DAX measure with DIVIDE(SUM(profit), SUM(sales)) computes it correctly under any filter.",
        },
      },
      {
        title: { es: "Diseñar el modelo de una tienda en línea", en: "Designing an online store's model" },
        problem: {
          es: "Una tienda en línea tiene cuatro archivos: Pedidos (fecha, id de producto, id de cliente, importe), Productos, Clientes y un Calendario. Arma el esquema estrella.",
          en: "An online store has four files: Orders (date, product id, customer id, amount), Products, Customers and a Calendar. Build the star schema.",
        },
        steps: [
          { es: "Pedidos registra eventos medibles que crecen cada día: es la tabla de hechos, al centro.", en: "Orders records measurable events that grow every day: it is the fact table, in the center." },
          { es: "Productos, Clientes y Calendario describen el contexto: son dimensiones.", en: "Products, Customers and Calendar describe the context: they are dimensions." },
          { es: "Relaciones uno a varios: Productos[id] → Pedidos[id producto], Clientes[id] → Pedidos[id cliente], Calendario[fecha] → Pedidos[fecha].", en: "One-to-many relationships: Products[id] → Orders[product id], Customers[id] → Orders[customer id], Calendar[date] → Orders[date]." },
        ],
        result: {
          es: "Una estrella con Pedidos al centro y tres dimensiones alrededor. Así un filtro por categoría de producto o por mes recorre la relación y filtra los pedidos.",
          en: "A star with Orders in the center and three dimensions around it. That way a filter by product category or by month flows through the relationship and filters the orders.",
        },
      },
    ],
    keyPoints: [
      { es: "Flujo: obtener, transformar (Power Query), modelar, visualizar y compartir.", en: "Flow: get, transform (Power Query), model, visualize and share." },
      { es: "Hechos al centro, dimensiones alrededor: esquema estrella con relaciones uno a varios.", en: "Facts in the center, dimensions around: a star schema with one-to-many relationships." },
      { es: "Las medidas DAX responden a los filtros; úsalas para totales y porcentajes.", en: "DAX measures respond to filters; use them for totals and percentages." },
      { es: "No promedies porcentajes: divide sumas.", en: "Do not average percentages: divide sums." },
      { es: "Líneas para tiempo, barras para comparar, tarjetas para KPI; pocos elementos y ejes honestos.", en: "Lines for time, bars to compare, cards for KPIs; few elements and honest axes." },
    ],
    normativeNote: NOTE_SOFTWARE,
    exerciseIds: ['TEC-06-E1', 'TEC-06-E2', 'TEC-06-E3', 'TEC-06-E4', 'TEC-06-E5', 'TEC-06-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ TEC-01 ═════════════════════════
  {
    id: 'TEC-01-E1',
    level: 2,
    module: 'TEC-01',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En el sistema de cobro de una farmacia, ¿cuál de estas opciones es **información** y no solo un dato suelto?",
      en: "In a pharmacy's checkout system, which of these options is **information** and not just a loose data point?",
    },
    options: [
      { id: 'TEC-01-E1-a', text: { es: "\"Hoy se vendieron 35 cajas de paracetamol, 20% más que el martes pasado\"", en: "\"Today 35 boxes of paracetamol were sold, 20% more than last Tuesday\"" } },
      { id: 'TEC-01-E1-b', text: { es: "\"35\"", en: "\"35\"" } },
      { id: 'TEC-01-E1-c', text: { es: "\"Código 7501\"", en: "\"Code 7501\"" } },
      { id: 'TEC-01-E1-d', text: { es: "\"12/03\"", en: "\"03/12\"" } },
    ],
    correctOptionId: 'TEC-01-E1-a',
    explanation: {
      es: "La información es el dato ordenado y con contexto: qué se vendió, cuánto y comparado contra qué. \"35\", un código o una fecha sueltos son datos: no dicen nada por sí solos. Error común: creer que cualquier número en el sistema ya es información.",
      en: "Information is data organized and in context: what was sold, how much and compared with what. A loose \"35\", a code or a date are data: they say nothing by themselves. Common mistake: believing any number in the system is already information.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-tech',
  },
  {
    id: 'TEC-01-E2',
    level: 2,
    module: 'TEC-01',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Una zapatería revisa los elementos de su sistema de ventas.",
      en: "A shoe store reviews the elements of its sales system.",
    },
    prompt: {
      es: "Clasifica cada elemento de la zapatería según el componente del sistema de información al que pertenece.",
      en: "Classify each element of the shoe store by the information system component it belongs to.",
    },
    categories: [
      { id: 'TEC-01-E2-c1', label: { es: "Hardware", en: "Hardware" } },
      { id: 'TEC-01-E2-c2', label: { es: "Software", en: "Software" } },
      { id: 'TEC-01-E2-c3', label: { es: "Datos", en: "Data" } },
      { id: 'TEC-01-E2-c4', label: { es: "Procesos", en: "Processes" } },
    ],
    items: [
      { id: 'TEC-01-E2-i1', label: { es: "El lector de códigos de barras de la caja", en: "The checkout barcode scanner" }, correctCategoryId: 'TEC-01-E2-c1' },
      { id: 'TEC-01-E2-i2', label: { es: "El programa punto de venta que calcula el total", en: "The point-of-sale program that computes the total" }, correctCategoryId: 'TEC-01-E2-c2' },
      { id: 'TEC-01-E2-i3', label: { es: "El registro de cada par vendido con talla y precio", en: "The record of each pair sold with size and price" }, correctCategoryId: 'TEC-01-E2-c3' },
      { id: 'TEC-01-E2-i4', label: { es: "La regla de hacer corte de caja al cerrar cada día", en: "The rule of doing a cash count at closing each day" }, correctCategoryId: 'TEC-01-E2-c4' },
      { id: 'TEC-01-E2-i5', label: { es: "La impresora de tickets", en: "The receipt printer" }, correctCategoryId: 'TEC-01-E2-c1' },
      { id: 'TEC-01-E2-i6', label: { es: "La lista de clientes con su teléfono", en: "The list of customers with their phone numbers" }, correctCategoryId: 'TEC-01-E2-c3' },
    ],
    explanation: {
      es: "Hardware es lo físico (lector, impresora); software, los programas (punto de venta); datos, los hechos registrados (ventas, clientes); procesos, las reglas de uso (corte de caja). Error común: confundir el programa con los datos que guarda: el punto de venta es software, las ventas registradas son datos.",
      en: "Hardware is the physical part (scanner, printer); software, the programs (point of sale); data, the recorded facts (sales, customers); processes, the usage rules (cash count). Common mistake: confusing the program with the data it stores: the point of sale is software, the recorded sales are data.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-tech',
  },
  {
    id: 'TEC-01-E3',
    level: 2,
    module: 'TEC-01',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si una empresa contrata un sistema de facturación en modalidad SaaS, ella misma debe comprar e instalar los servidores donde corre el programa.",
      en: "If a company subscribes to an invoicing system under the SaaS model, it must buy and install the servers where the program runs itself.",
    },
    answer: false,
    explanation: {
      es: "Falso. En SaaS el proveedor administra servidores y programa; la empresa solo lo usa desde el navegador y paga una suscripción. Comprar e instalar servidores propios corresponde a tener el sistema en equipos propios (on-premise). Error común: confundir SaaS con IaaS, donde sí rentas infraestructura y tú instalas el resto.",
      en: "False. In SaaS the provider manages the servers and the program; the company just uses it from the browser and pays a subscription. Buying and installing its own servers corresponds to running the system on its own equipment (on-premise). Common mistake: confusing SaaS with IaaS, where you do rent infrastructure and install the rest yourself.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-tech',
  },
  {
    id: 'TEC-01-E4',
    level: 2,
    module: 'TEC-01',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una distribuidora compara dos opciones de sistema de inventarios a 3 años. Opción A (equipos propios): licencia de $36,000 una sola vez, servidor de $24,000 y soporte de $6,000 al año. Opción B (SaaS): $2,000 al mes.",
      en: "A distributor compares two inventory system options over 3 years. Option A (own equipment): a one-time $36,000 license, a $24,000 server and $6,000 of support per year. Option B (SaaS): $2,000 per month.",
    },
    prompt: {
      es: "Calcula el costo total de propiedad de cada opción a 3 años y la diferencia entre ambas, en pesos.",
      en: "Compute each option's 3-year total cost of ownership and the difference between them, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Costo total opción A", en: "Total cost option A" }, answer: 78000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Costo total opción B", en: "Total cost option B" }, answer: 72000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Diferencia (A − B)", en: "Difference (A − B)" }, answer: 6000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "A: 36,000 + 24,000 + 6,000 × 3 = 78,000. B: 2,000 × 36 meses = 72,000. Diferencia: 78,000 − 72,000 = 6,000 a favor de B. Error común: comparar solo el pago inicial (60,000 contra 2,000) o multiplicar la suscripción por 3 en lugar de por 36 meses.",
      en: "A: 36,000 + 24,000 + 6,000 × 3 = 78,000. B: 2,000 × 36 months = 72,000. Difference: 78,000 − 72,000 = 6,000 in favor of B. Common mistake: comparing only the upfront payment (60,000 vs 2,000) or multiplying the subscription by 3 instead of by 36 months.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-tech',
  },
  {
    id: 'TEC-01-E5',
    level: 2,
    module: 'TEC-01',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "La directora de una cadena de restaurantes usa una herramienta donde cambia el precio del menú, el número de comensales y el costo de insumos para ver cuánto ganaría si abre una sucursal en otra ciudad.",
      en: "The director of a restaurant chain uses a tool where she changes menu price, number of diners and ingredient cost to see how much she would earn by opening a branch in another city.",
    },
    prompt: {
      es: "¿Qué tipo de sistema está usando la directora del restaurante?",
      en: "What type of system is the restaurant director using?",
    },
    options: [
      { id: 'TEC-01-E5-a', text: { es: "Un sistema transaccional", en: "A transaction processing system" } },
      { id: 'TEC-01-E5-b', text: { es: "Un sistema de apoyo a decisiones", en: "A decision support system" } },
      { id: 'TEC-01-E5-c', text: { es: "Un sistema de información gerencial que solo emite reportes periódicos", en: "A management information system that only issues periodic reports" } },
      { id: 'TEC-01-E5-d', text: { es: "Un sistema operativo", en: "An operating system" } },
    ],
    correctOptionId: 'TEC-01-E5-b',
    explanation: {
      es: "Simular \"¿qué pasaría si...?\" cambiando supuestos para elegir una opción es lo propio de un sistema de apoyo a decisiones. El transaccional registra cada operación; el gerencial resume lo que ya pasó; el sistema operativo es el software base de la computadora. Error común: pensar que todo reporte es apoyo a decisiones aunque no permita simular.",
      en: "Simulating \"what if...?\" by changing assumptions to pick an option is what a decision support system does. The transactional system records each operation; the management system summarizes what already happened; the operating system is the computer's base software. Common mistake: thinking any report is decision support even if it does not allow simulation.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-tech',
  },
  {
    id: 'TEC-01-E6',
    level: 2,
    module: 'TEC-01',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "¿Cuáles son ventajas reales de usar servicios en la nube frente a equipos propios? Selecciona todas las que apliquen.",
      en: "Which are real advantages of using cloud services over own equipment? Select all that apply.",
    },
    options: [
      { id: 'TEC-01-E6-a', text: { es: "Pagas según lo que usas, sin comprar servidores por adelantado", en: "You pay for what you use, without buying servers upfront" } },
      { id: 'TEC-01-E6-b', text: { es: "Puedes aumentar o reducir capacidad con rapidez", en: "You can increase or reduce capacity quickly" } },
      { id: 'TEC-01-E6-c', text: { es: "Funciona igual aunque no tengas conexión a internet", en: "It works the same even without an internet connection" } },
      { id: 'TEC-01-E6-d', text: { es: "Puedes entrar desde distintos lugares y dispositivos", en: "You can access it from different places and devices" } },
      { id: 'TEC-01-E6-e', text: { es: "La empresa deja de tener cualquier responsabilidad sobre la seguridad de sus datos", en: "The company no longer has any responsibility for the security of its data" } },
    ],
    correctOptionIds: ['TEC-01-E6-a', 'TEC-01-E6-b', 'TEC-01-E6-d'],
    explanation: {
      es: "La nube permite pagar por uso, escalar rápido y entrar desde cualquier lugar. Pero depende de internet, y la empresa sigue siendo responsable de sus datos: contraseñas, permisos y qué información sube. Error común: creer que contratar la nube traslada toda la seguridad al proveedor.",
      en: "The cloud lets you pay per use, scale quickly and access from anywhere. But it depends on the internet, and the company remains responsible for its data: passwords, permissions and what information it uploads. Common mistake: believing that hiring the cloud shifts all security to the provider.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-tech',
  },

  // ═════════════════════════ TEC-02 ═════════════════════════
  {
    id: 'TEC-02-E1',
    level: 2,
    module: 'TEC-02',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "En la celda D2 está la fórmula =C2*$H$1, donde H1 guarda el tipo de cambio.",
      en: "Cell D2 holds the formula =C2*$H$1, where H1 stores the exchange rate.",
    },
    prompt: {
      es: "Si copias la fórmula de D2 a D5, ¿cómo queda en D5?",
      en: "If you copy the formula from D2 to D5, what does it look like in D5?",
    },
    options: [
      { id: 'TEC-02-E1-a', text: { es: "=C5*$H$1", en: "=C5*$H$1" } },
      { id: 'TEC-02-E1-b', text: { es: "=C5*$H$4", en: "=C5*$H$4" } },
      { id: 'TEC-02-E1-c', text: { es: "=C2*$H$1", en: "=C2*$H$1" } },
      { id: 'TEC-02-E1-d', text: { es: "=C5*H4", en: "=C5*H4" } },
    ],
    correctOptionId: 'TEC-02-E1-a',
    explanation: {
      es: "C2 es relativa: al bajar 3 filas se vuelve C5. $H$1 es absoluta: no cambia. Error común: pensar que los signos de pesos también se mueven (=C5*$H$4) o que la referencia relativa se queda igual.",
      en: "C2 is relative: moving down 3 rows it becomes C5. $H$1 is absolute: it does not change. Common mistake: thinking the dollar-sign reference also moves (=C5*$H$4) or that the relative reference stays the same.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-skills',
  },
  {
    id: 'TEC-02-E2',
    level: 2,
    module: 'TEC-02',
    kind: 'formula',
    flavor: 'concept',
    context: {
      es: "En A2:A50 están las zonas de venta y en C2:C50 los importes. Quieres el total de la zona \"Norte\".",
      en: "A2:A50 holds the sales regions and C2:C50 the amounts. You want the total for the \"North\" region.",
    },
    prompt: {
      es: "Completa los argumentos de SUMAR.SI (SUMIF) para obtener el total de ventas de la zona Norte.",
      en: "Complete the SUMIF arguments to get the total sales of the North region.",
    },
    template: '=SUMAR.SI / SUMIF( {{b1}} , {{b2}} , {{b3}} )',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'TEC-02-E2-b1-a', text: { es: "A2:A50 (zonas)", en: "A2:A50 (regions)" } },
          { id: 'TEC-02-E2-b1-b', text: { es: "C2:C50 (importes)", en: "C2:C50 (amounts)" } },
          { id: 'TEC-02-E2-b1-c', text: { es: "\"Norte\"", en: "\"North\"" } },
        ],
        correctOptionId: 'TEC-02-E2-b1-a',
      },
      {
        id: 'b2',
        options: [
          { id: 'TEC-02-E2-b2-a', text: { es: "C2:C50 (importes)", en: "C2:C50 (amounts)" } },
          { id: 'TEC-02-E2-b2-b', text: { es: "\"Norte\"", en: "\"North\"" } },
          { id: 'TEC-02-E2-b2-c', text: { es: "SUMA(C2:C50)", en: "SUM(C2:C50)" } },
        ],
        correctOptionId: 'TEC-02-E2-b2-b',
      },
      {
        id: 'b3',
        options: [
          { id: 'TEC-02-E2-b3-a', text: { es: "\"Norte\"", en: "\"North\"" } },
          { id: 'TEC-02-E2-b3-b', text: { es: "A2:A50 (zonas)", en: "A2:A50 (regions)" } },
          { id: 'TEC-02-E2-b3-c', text: { es: "C2:C50 (importes)", en: "C2:C50 (amounts)" } },
        ],
        correctOptionId: 'TEC-02-E2-b3-c',
      },
    ],
    explanation: {
      es: "El orden es: rango donde buscas el criterio (zonas), el criterio (\"Norte\") y el rango que se suma (importes). Error común: poner primero el rango a sumar, que es el orden de SUMAR.SI.CONJUNTO (SUMIFS), no de SUMAR.SI.",
      en: "The order is: range where you look for the criterion (regions), the criterion (\"North\") and the range to add (amounts). Common mistake: putting the sum range first, which is the order of SUMIFS, not SUMIF.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-skills',
  },
  {
    id: 'TEC-02-E3',
    level: 2,
    module: 'TEC-02',
    kind: 'numeric',
    flavor: 'interpret',
    context: {
      es: "Una agencia paga bono solo si el vendedor llega a $10,000. En C2 está =SI(B2>=10000, B2*5%, 0) y en B2 hay $12,400.",
      en: "An agency pays a bonus only if the salesperson reaches $10,000. C2 holds =IF(B2>=10000, B2*5%, 0) and B2 contains $12,400.",
    },
    prompt: {
      es: "¿Qué valor muestra la celda C2 con la fórmula de bono? Responde en pesos.",
      en: "What value does cell C2 show with the bonus formula? Answer in pesos.",
    },
    answer: 620,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "La prueba 12,400 >= 10,000 es verdadera, así que Excel devuelve el segundo argumento: 12,400 × 5% = 620. Error común: calcular el bono solo sobre lo que excede la meta (2,400 × 5% = 120); la fórmula multiplica la venta completa.",
      en: "The test 12,400 >= 10,000 is true, so Excel returns the second argument: 12,400 × 5% = 620. Common mistake: computing the bonus only on the amount above the target (2,400 × 5% = 120); the formula multiplies the full sale.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-skills',
  },
  {
    id: 'TEC-02-E4',
    level: 2,
    module: 'TEC-02',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada función de Excel según el tipo de tarea que resuelve.",
      en: "Classify each Excel function by the type of task it solves.",
    },
    categories: [
      { id: 'TEC-02-E4-c1', label: { es: "Traer datos de otra tabla", en: "Bring data from another table" } },
      { id: 'TEC-02-E4-c2', label: { es: "Contar o sumar con un criterio", en: "Count or add with a criterion" } },
      { id: 'TEC-02-E4-c3', label: { es: "Decisión lógica o manejo de errores", en: "Logical decision or error handling" } },
    ],
    items: [
      { id: 'TEC-02-E4-i1', label: { es: "BUSCARV (VLOOKUP)", en: "VLOOKUP (BUSCARV)" }, correctCategoryId: 'TEC-02-E4-c1' },
      { id: 'TEC-02-E4-i2', label: { es: "BUSCARX (XLOOKUP)", en: "XLOOKUP (BUSCARX)" }, correctCategoryId: 'TEC-02-E4-c1' },
      { id: 'TEC-02-E4-i3', label: { es: "CONTAR.SI (COUNTIF)", en: "COUNTIF (CONTAR.SI)" }, correctCategoryId: 'TEC-02-E4-c2' },
      { id: 'TEC-02-E4-i4', label: { es: "SUMAR.SI (SUMIF)", en: "SUMIF (SUMAR.SI)" }, correctCategoryId: 'TEC-02-E4-c2' },
      { id: 'TEC-02-E4-i5', label: { es: "SI (IF)", en: "IF (SI)" }, correctCategoryId: 'TEC-02-E4-c3' },
      { id: 'TEC-02-E4-i6', label: { es: "SI.ERROR (IFERROR)", en: "IFERROR (SI.ERROR)" }, correctCategoryId: 'TEC-02-E4-c3' },
    ],
    explanation: {
      es: "BUSCARV y BUSCARX traen un dato de otra tabla; CONTAR.SI y SUMAR.SI cuentan o suman solo lo que cumple un criterio; SI decide entre dos resultados y SI.ERROR sustituye un error por algo legible. Error común: poner SUMAR.SI con las lógicas porque su nombre contiene \"SI\".",
      en: "VLOOKUP and XLOOKUP bring a value from another table; COUNTIF and SUMIF count or add only what meets a criterion; IF decides between two results and IFERROR replaces an error with something readable. Common mistake: grouping SUMIF with the logical functions because its Spanish name contains \"SI\" (if).",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-skills',
  },
  {
    id: 'TEC-02-E5',
    level: 2,
    module: 'TEC-02',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Al crear una tabla dinámica para resumir ventas por mes, Excel reordena y modifica la lista original de ventas.",
      en: "When you create a pivot table to summarize sales by month, Excel reorders and modifies the original sales list.",
    },
    answer: false,
    explanation: {
      es: "Falso. La tabla dinámica solo lee los datos de origen y construye un resumen aparte; la lista original queda intacta. Si los datos cambian, se presiona Actualizar. Error común: olvidar actualizar y creer que el resumen ya refleja los cambios.",
      en: "False. The pivot table only reads the source data and builds a separate summary; the original list stays intact. If the data change, you press Refresh. Common mistake: forgetting to refresh and believing the summary already reflects the changes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-skills',
  },
  {
    id: 'TEC-02-E6',
    level: 2,
    module: 'TEC-02',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una inmobiliaria registra comisiones. Columna A (asesor): Ana, Luis, Ana, Sofía, Luis, Ana. Columna B (comisión): $8,000, $12,500, $4,500, $9,000, $3,000, $2,000.",
      en: "A real estate agency records commissions. Column A (agent): Ana, Luis, Ana, Sofía, Luis, Ana. Column B (commission): $8,000, $12,500, $4,500, $9,000, $3,000, $2,000.",
    },
    prompt: {
      es: "Calcula lo que devuelven estas fórmulas sobre la lista de comisiones de la inmobiliaria.",
      en: "Compute what these formulas return over the real estate agency's commission list.",
    },
    fields: [
      { id: 'f1', label: { es: "=SUMAR.SI(A2:A7, \"Ana\", B2:B7)", en: "=SUMIF(A2:A7, \"Ana\", B2:B7)" }, answer: 14500, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "=CONTAR.SI(A2:A7, \"Luis\")", en: "=COUNTIF(A2:A7, \"Luis\")" }, answer: 2, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f3', label: { es: "=SUMAR.SI(B2:B7, \">=9000\")", en: "=SUMIF(B2:B7, \">=9000\")" }, answer: 21500, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Ana: 8,000 + 4,500 + 2,000 = 14,500. Luis aparece 2 veces. Comisiones de $9,000 o más: 12,500 + 9,000 = 21,500 (si se omite el tercer argumento, SUMAR.SI suma el mismo rango evaluado). Error común: usar \">9000\" mentalmente y dejar fuera los $9,000 exactos.",
      en: "Ana: 8,000 + 4,500 + 2,000 = 14,500. Luis appears 2 times. Commissions of $9,000 or more: 12,500 + 9,000 = 21,500 (if the third argument is omitted, SUMIF adds the same range it evaluates). Common mistake: thinking \">9000\" and leaving out the exact $9,000.",
    },
    difficulty: 2,
    points: 15,
    competency: 'excel-skills',
  },

  // ═════════════════════════ TEC-03 ═════════════════════════
  {
    id: 'TEC-03-E1',
    level: 2,
    module: 'TEC-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un taller pide un préstamo hipotético de $60,000 a 6 meses con tasa de 2% mensual y pagos mensuales iguales. En Excel escribe =PAGO(2%, 6, 60000).",
      en: "A workshop takes a hypothetical $60,000 loan over 6 months at 2% per month with equal monthly payments. In Excel it types =PMT(2%, 6, 60000).",
    },
    prompt: {
      es: "¿De cuánto es cada mensualidad del préstamo del taller? Escríbela como número positivo, en pesos con dos decimales.",
      en: "How much is each monthly installment of the workshop's loan? Enter it as a positive number, in pesos with two decimals.",
    },
    answer: 10711.55,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "PAGO = 60,000 × 0.02 ÷ [1 − 1.02^(−6)] = 1,200 ÷ 0.112029 = $10,711.55. Excel lo muestra como −10,711.55 porque es dinero que sale. Error común: dividir 60,000 ÷ 6 = 10,000 y olvidar los intereses.",
      en: "PMT = 60,000 × 0.02 ÷ [1 − 1.02^(−6)] = 1,200 ÷ 0.112029 = $10,711.55. Excel shows it as −10,711.55 because it is money going out. Common mistake: dividing 60,000 ÷ 6 = 10,000 and forgetting the interest.",
    },
    difficulty: 2,
    points: 15,
    competency: 'excel-finance',
  },
  {
    id: 'TEC-03-E2',
    level: 2,
    module: 'TEC-03',
    kind: 'formula',
    flavor: 'concept',
    context: {
      es: "Un crédito automotriz hipotético de $250,000 a 3 años, con tasa de 12% anual y pagos mensuales.",
      en: "A hypothetical $250,000 car loan over 3 years, at 12% per year with monthly payments.",
    },
    prompt: {
      es: "Completa los argumentos de PAGO (PMT) para obtener la mensualidad del crédito automotriz.",
      en: "Complete the PMT arguments to get the car loan's monthly payment.",
    },
    template: '=PAGO / PMT( {{b1}} , {{b2}} , {{b3}} )',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'TEC-03-E2-b1-a', text: { es: "12%", en: "12%" } },
          { id: 'TEC-03-E2-b1-b', text: { es: "12%/12", en: "12%/12" } },
          { id: 'TEC-03-E2-b1-c', text: { es: "12%*12", en: "12%*12" } },
        ],
        correctOptionId: 'TEC-03-E2-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'TEC-03-E2-b2-a', text: { es: "3", en: "3" } },
          { id: 'TEC-03-E2-b2-b', text: { es: "12", en: "12" } },
          { id: 'TEC-03-E2-b2-c', text: { es: "36", en: "36" } },
        ],
        correctOptionId: 'TEC-03-E2-b2-c',
      },
      {
        id: 'b3',
        options: [
          { id: 'TEC-03-E2-b3-a', text: { es: "250000", en: "250000" } },
          { id: 'TEC-03-E2-b3-b', text: { es: "250000/36", en: "250000/36" } },
          { id: 'TEC-03-E2-b3-c', text: { es: "12%", en: "12%" } },
        ],
        correctOptionId: 'TEC-03-E2-b3-a',
      },
    ],
    explanation: {
      es: "Con pagos mensuales, la tasa debe ser mensual (12%/12 = 1%) y el plazo en meses (3 × 12 = 36); el tercer argumento es el valor actual del crédito, $250,000. Error común: dejar la tasa anual (12%) con 36 periodos, lo que da una mensualidad enorme.",
      en: "With monthly payments, the rate must be monthly (12%/12 = 1%) and the term in months (3 × 12 = 36); the third argument is the loan's present value, $250,000. Common mistake: leaving the annual rate (12%) with 36 periods, which gives a huge payment.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-finance',
  },
  {
    id: 'TEC-03-E3',
    level: 2,
    module: 'TEC-03',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Lucía invierte hoy $10,000 en un instrumento hipotético que paga 5% anual compuesto y no hace más aportaciones. Usa =VF(5%, 3, 0, −10000).",
      en: "Lucía invests $10,000 today in a hypothetical instrument paying 5% per year compounded and makes no further contributions. She uses =FV(5%, 3, 0, −10000).",
    },
    prompt: {
      es: "¿Cuánto tendrá Lucía al cabo de 3 años? Responde en pesos con dos decimales.",
      en: "How much will Lucía have after 3 years? Answer in pesos with two decimals.",
    },
    answer: 11576.25,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "VF = 10,000 × 1.05³ = 10,000 × 1.157625 = $11,576.25. Error común: usar interés simple (10,000 + 3 × 500 = 11,500) y olvidar que cada año se gana interés sobre los intereses anteriores.",
      en: "FV = 10,000 × 1.05³ = 10,000 × 1.157625 = $11,576.25. Common mistake: using simple interest (10,000 + 3 × 500 = 11,500) and forgetting that each year earns interest on the previous interest.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-finance',
  },
  {
    id: 'TEC-03-E4',
    level: 2,
    module: 'TEC-03',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una clínica dental compra un equipo de rayos X de $50,000, con valor residual estimado de $5,000 y vida útil de 5 años. Deprecia en línea recta.",
      en: "A dental clinic buys a $50,000 X-ray unit, with an estimated salvage value of $5,000 and a 5-year useful life. It depreciates on a straight-line basis.",
    },
    prompt: {
      es: "Calcula con SLN la depreciación anual del equipo de rayos X y su valor en libros al final del año 2.",
      en: "Use SLN to compute the X-ray unit's annual depreciation and its book value at the end of year 2.",
    },
    fields: [
      { id: 'f1', label: { es: "Depreciación anual =SLN(50000, 5000, 5)", en: "Annual depreciation =SLN(50000, 5000, 5)" }, answer: 9000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Depreciación acumulada al final del año 2", en: "Accumulated depreciation at the end of year 2" }, answer: 18000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Valor en libros al final del año 2", en: "Book value at the end of year 2" }, answer: 32000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "(50,000 − 5,000) ÷ 5 = 9,000 por año. En 2 años: 18,000. Valor en libros: 50,000 − 18,000 = 32,000. Error común: dividir el costo completo entre 5 (10,000) sin restar el valor residual, o restar la depreciación del valor residual en lugar del costo.",
      en: "(50,000 − 5,000) ÷ 5 = 9,000 per year. Over 2 years: 18,000. Book value: 50,000 − 18,000 = 32,000. Common mistake: dividing the full cost by 5 (10,000) without subtracting the salvage value, or subtracting depreciation from the salvage value instead of the cost.",
    },
    difficulty: 1,
    points: 15,
    competency: 'excel-finance',
  },
  {
    id: 'TEC-03-E5',
    level: 2,
    module: 'TEC-03',
    kind: 'truefalse',
    flavor: 'concept',
    context: {
      es: "En B1 está la inversión de hoy (−80,000) y en B2:B4 los flujos de los años 1 a 3.",
      en: "B1 holds today's investment (−80,000) and B2:B4 the cash flows for years 1 to 3.",
    },
    prompt: {
      es: "La fórmula =VNA(10%, B1:B4) da directamente el valor presente neto correcto del proyecto, con la inversión hecha hoy.",
      en: "The formula =NPV(10%, B1:B4) directly gives the project's correct net present value, with the investment made today.",
    },
    answer: false,
    explanation: {
      es: "Falso. VNA supone que el primer valor del rango ocurre al final del periodo 1, así que descontaría también la inversión de hoy como si se hiciera dentro de un año. Lo correcto es =VNA(10%, B2:B4) + B1. Error común: meter toda la columna de flujos en VNA como si fuera TIR.",
      en: "False. NPV assumes the first value in the range occurs at the end of period 1, so it would also discount today's investment as if it happened a year from now. The correct form is =NPV(10%, B2:B4) + B1. Common mistake: putting the whole cash-flow column into NPV as if it were IRR.",
    },
    difficulty: 2,
    points: 15,
    competency: 'excel-finance',
  },
  {
    id: 'TEC-03-E6',
    level: 2,
    module: 'TEC-03',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "En la balanza de comprobación de una ferretería, la celda de control =SUMA(C2:C40)−SUMA(D2:D40), donde C son cargos y D abonos, muestra 1,500.",
      en: "In a hardware store's trial balance, the check cell =SUM(C2:C40)−SUM(D2:D40), where C are debits and D credits, shows 1,500.",
    },
    prompt: {
      es: "¿Qué indica el 1,500 en la celda de control de la balanza de la ferretería?",
      en: "What does the 1,500 in the hardware store's trial balance check cell indicate?",
    },
    options: [
      { id: 'TEC-03-E6-a', text: { es: "Que la ferretería tuvo una utilidad de $1,500", en: "That the hardware store made a $1,500 profit" } },
      { id: 'TEC-03-E6-b', text: { es: "Que los cargos superan a los abonos en $1,500, así que hay un error de captura o falta un movimiento", en: "That debits exceed credits by $1,500, so there is an entry error or a missing transaction" } },
      { id: 'TEC-03-E6-c', text: { es: "Que la balanza está correcta, porque la diferencia es pequeña", en: "That the trial balance is correct, because the difference is small" } },
      { id: 'TEC-03-E6-d', text: { es: "Que hay $1,500 de efectivo en caja", en: "That there is $1,500 of cash on hand" } },
    ],
    correctOptionId: 'TEC-03-E6-b',
    explanation: {
      es: "En la partida doble, la suma de cargos debe ser igual a la de abonos, así que el control debe dar cero. Un 1,500 positivo significa que hay más cargos que abonos: falta registrar un abono o se capturó mal un importe. Error común: confundir esa diferencia con la utilidad o con un saldo de cuenta.",
      en: "In double entry, total debits must equal total credits, so the check must be zero. A positive 1,500 means there are more debits than credits: a credit is missing or an amount was entered wrongly. Common mistake: confusing that difference with profit or with an account balance.",
    },
    difficulty: 1,
    points: 10,
    competency: 'excel-finance',
  },

  // ═════════════════════════ TEC-04 ═════════════════════════
  {
    id: 'TEC-04-E1',
    level: 2,
    module: 'TEC-04',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Un analista arma un modelo de ventas con tres hojas: Supuestos, Cálculos y Resultados.",
      en: "An analyst builds a sales model with three sheets: Assumptions, Calculations and Results.",
    },
    prompt: {
      es: "¿En qué hoja del modelo debe capturarse la tasa de crecimiento esperada de las ventas?",
      en: "On which sheet of the model should the expected sales growth rate be entered?",
    },
    options: [
      { id: 'TEC-04-E1-a', text: { es: "En Supuestos, en una sola celda marcada como entrada", en: "In Assumptions, in a single cell marked as an input" } },
      { id: 'TEC-04-E1-b', text: { es: "Escrita dentro de cada fórmula de Cálculos", en: "Typed inside each formula in Calculations" } },
      { id: 'TEC-04-E1-c', text: { es: "En Resultados, junto a la utilidad", en: "In Results, next to profit" } },
      { id: 'TEC-04-E1-d', text: { es: "En un comentario de celda, para que no estorbe", en: "In a cell comment, so it does not get in the way" } },
    ],
    correctOptionId: 'TEC-04-E1-a',
    explanation: {
      es: "La tasa de crecimiento es un supuesto: va en la hoja de entradas, una sola vez, y las fórmulas la referencian. Así, para probar otra tasa cambias una celda. Error común: escribirla dentro de las fórmulas, lo que obliga a corregir muchas celdas y causa errores.",
      en: "The growth rate is an assumption: it goes on the inputs sheet, once, and the formulas reference it. That way, to try another rate you change one cell. Common mistake: typing it inside formulas, which forces you to fix many cells and causes errors.",
    },
    difficulty: 1,
    points: 10,
    competency: 'spreadsheet-modeling',
  },
  {
    id: 'TEC-04-E2',
    level: 2,
    module: 'TEC-04',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un estudio de yoga cobra $80 por clase. Cada clase tiene un costo variable de $48 (instructora por alumno y toallas) y los costos fijos mensuales son $24,000. Usará Buscar objetivo para que la utilidad sea 0.",
      en: "A yoga studio charges $80 per class. Each class has a $48 variable cost (instructor per student and towels) and monthly fixed costs are $24,000. It will use Goal Seek to make profit equal 0.",
    },
    prompt: {
      es: "¿Cuántas clases al mes debe vender el estudio de yoga para alcanzar su punto de equilibrio?",
      en: "How many classes per month must the yoga studio sell to reach its break-even point?",
    },
    answer: 750,
    unit: 'units',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Cada clase deja 80 − 48 = $32. Punto de equilibrio: 24,000 ÷ 32 = 750 clases. Buscar objetivo llega al mismo número cambiando la celda de clases hasta que la utilidad sea 0. Error común: dividir los costos fijos entre el precio (24,000 ÷ 80 = 300) y olvidar el costo variable.",
      en: "Each class leaves 80 − 48 = $32. Break-even: 24,000 ÷ 32 = 750 classes. Goal Seek reaches the same number by changing the classes cell until profit is 0. Common mistake: dividing fixed costs by the price (24,000 ÷ 80 = 300) and forgetting the variable cost.",
    },
    difficulty: 1,
    points: 10,
    competency: 'spreadsheet-modeling',
  },
  {
    id: 'TEC-04-E3',
    level: 2,
    module: 'TEC-04',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una marca de salsas vende 3,000 frascos al mes, con costo variable de $30 por frasco y costos fijos de $40,000. En el Administrador de escenarios prueba tres precios: $45 (pesimista), $50 (base) y $55 (optimista).",
      en: "A salsa brand sells 3,000 jars a month, with a $30 variable cost per jar and $40,000 fixed costs. In the Scenario Manager it tests three prices: $45 (pessimistic), $50 (base) and $55 (optimistic).",
    },
    prompt: {
      es: "Calcula la utilidad mensual de la marca de salsas en cada escenario, en pesos.",
      en: "Compute the salsa brand's monthly profit in each scenario, in pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Utilidad escenario pesimista ($45)", en: "Profit, pessimistic scenario ($45)" }, answer: 5000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Utilidad escenario base ($50)", en: "Profit, base scenario ($50)" }, answer: 20000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Utilidad escenario optimista ($55)", en: "Profit, optimistic scenario ($55)" }, answer: 35000, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Utilidad = 3,000 × (precio − 30) − 40,000. Pesimista: 3,000 × 15 − 40,000 = 5,000. Base: 3,000 × 20 − 40,000 = 20,000. Optimista: 3,000 × 25 − 40,000 = 35,000. Cada $5 de precio mueve la utilidad $15,000: el resultado es muy sensible al precio. Error común: olvidar restar los costos fijos.",
      en: "Profit = 3,000 × (price − 30) − 40,000. Pessimistic: 3,000 × 15 − 40,000 = 5,000. Base: 3,000 × 20 − 40,000 = 20,000. Optimistic: 3,000 × 25 − 40,000 = 35,000. Each $5 of price moves profit by $15,000: the result is very sensitive to price. Common mistake: forgetting to subtract fixed costs.",
    },
    difficulty: 2,
    points: 15,
    competency: 'spreadsheet-modeling',
  },
  {
    id: 'TEC-04-E4',
    level: 2,
    module: 'TEC-04',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada herramienta de la hoja de cálculo según para qué sirve principalmente.",
      en: "Classify each spreadsheet tool by what it is mainly used for.",
    },
    categories: [
      { id: 'TEC-04-E4-c1', label: { es: "Análisis de hipótesis", en: "What-if analysis" } },
      { id: 'TEC-04-E4-c2', label: { es: "Automatizar tareas repetitivas", en: "Automating repetitive tasks" } },
      { id: 'TEC-04-E4-c3', label: { es: "Prevenir errores de captura", en: "Preventing entry errors" } },
    ],
    items: [
      { id: 'TEC-04-E4-i1', label: { es: "Buscar objetivo", en: "Goal Seek" }, correctCategoryId: 'TEC-04-E4-c1' },
      { id: 'TEC-04-E4-i2', label: { es: "Administrador de escenarios", en: "Scenario Manager" }, correctCategoryId: 'TEC-04-E4-c1' },
      { id: 'TEC-04-E4-i3', label: { es: "Tabla de datos con varios precios", en: "Data table with several prices" }, correctCategoryId: 'TEC-04-E4-c1' },
      { id: 'TEC-04-E4-i4', label: { es: "Macro grabada que da formato al reporte", en: "Recorded macro that formats the report" }, correctCategoryId: 'TEC-04-E4-c2' },
      { id: 'TEC-04-E4-i5', label: { es: "Consulta de Power Query que limpia el archivo del banco cada mes", en: "Power Query query that cleans the bank file every month" }, correctCategoryId: 'TEC-04-E4-c2' },
      { id: 'TEC-04-E4-i6', label: { es: "Lista desplegable con los nombres de las sucursales", en: "Drop-down list with the branch names" }, correctCategoryId: 'TEC-04-E4-c3' },
      { id: 'TEC-04-E4-i7', label: { es: "Regla que no acepta descuentos mayores a 100%", en: "Rule that rejects discounts greater than 100%" }, correctCategoryId: 'TEC-04-E4-c3' },
    ],
    explanation: {
      es: "Buscar objetivo, escenarios y tablas de datos responden \"¿qué pasaría si...?\". Macros y Power Query repiten pasos con un clic o al actualizar. Listas desplegables y reglas de validación impiden capturar datos inválidos. Error común: pensar que la validación de datos es automatización de reportes; su papel es prevenir errores en la entrada.",
      en: "Goal Seek, scenarios and data tables answer \"what if...?\". Macros and Power Query repeat steps with a click or on refresh. Drop-down lists and validation rules stop invalid data from being entered. Common mistake: thinking data validation is report automation; its role is to prevent errors at entry.",
    },
    difficulty: 2,
    points: 15,
    competency: 'spreadsheet-modeling',
  },
  {
    id: 'TEC-04-E5',
    level: 2,
    module: 'TEC-04',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si grabas una macro y guardas el libro con extensión .xlsx, la macro se conserva y podrás usarla al volver a abrirlo.",
      en: "If you record a macro and save the workbook with the .xlsx extension, the macro is kept and you can use it when you reopen it.",
    },
    answer: false,
    explanation: {
      es: "Falso. El formato .xlsx no guarda macros; para conservarlas debes guardar como libro habilitado para macros (.xlsm). Error común: ignorar el aviso al guardar y perder el trabajo grabado. Recuerda también abrir macros solo de fuentes confiables.",
      en: "False. The .xlsx format does not store macros; to keep them you must save as a macro-enabled workbook (.xlsm). Common mistake: ignoring the warning when saving and losing the recorded work. Also remember to open macros only from trusted sources.",
    },
    difficulty: 1,
    points: 10,
    competency: 'spreadsheet-modeling',
  },
  {
    id: 'TEC-04-E6',
    level: 2,
    module: 'TEC-04',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una importadora tiene un modelo donde el tipo de cambio está escrito como 18 dentro de unas 200 fórmulas. El tipo de cambio de referencia que usa la empresa acaba de cambiar.",
      en: "An importer has a model where the exchange rate is typed as 18 inside about 200 formulas. The reference exchange rate the company uses has just changed.",
    },
    prompt: {
      es: "¿Cuál es la mejor forma de corregir el modelo de la importadora para este y futuros cambios?",
      en: "What is the best way to fix the importer's model for this and future changes?",
    },
    options: [
      { id: 'TEC-04-E6-a', text: { es: "Usar Buscar y reemplazar para cambiar 18 por el nuevo valor en todas las fórmulas", en: "Use Find and Replace to change 18 to the new value in every formula" } },
      { id: 'TEC-04-E6-b', text: { es: "Poner el tipo de cambio en una celda de entrada y que las 200 fórmulas la referencien con referencia absoluta", en: "Put the exchange rate in an input cell and have the 200 formulas point to it with an absolute reference" } },
      { id: 'TEC-04-E6-c', text: { es: "Dejar el 18 y anotar el nuevo valor en un comentario", en: "Keep the 18 and note the new value in a comment" } },
      { id: 'TEC-04-E6-d', text: { es: "Grabar una macro que cambie las 200 celdas cada vez", en: "Record a macro that changes the 200 cells every time" } },
    ],
    correctOptionId: 'TEC-04-E6-b',
    explanation: {
      es: "Un supuesto debe vivir en una sola celda de entrada; las fórmulas lo usan con referencia absoluta (por ejemplo $B$2). Así, el próximo cambio se hace en un solo lugar. Buscar y reemplazar puede cambiar otros \"18\" que no son el tipo de cambio, y la macro solo automatiza un mal diseño. Error común: corregir el síntoma y no la estructura.",
      en: "An assumption should live in a single input cell; formulas use it with an absolute reference (for example $B$2). That way, the next change is made in one place. Find and Replace may change other \"18\"s that are not the exchange rate, and the macro just automates a bad design. Common mistake: fixing the symptom instead of the structure.",
    },
    difficulty: 1,
    points: 10,
    competency: 'spreadsheet-modeling',
  },

  // ═════════════════════════ TEC-05 ═════════════════════════
  {
    id: 'TEC-05-E1',
    level: 2,
    module: 'TEC-05',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un puesto de jugos registró las ventas de 5 días, en miles de pesos: 10, 12, 12, 15 y 41 (el último día hubo un evento en la colonia).",
      en: "A juice stand recorded sales for 5 days, in thousands of pesos: 10, 12, 12, 15 and 41 (on the last day there was a neighborhood event).",
    },
    prompt: {
      es: "Calcula la media, la mediana y el rango de las ventas del puesto de jugos, en miles de pesos.",
      en: "Compute the mean, median and range of the juice stand's sales, in thousands of pesos.",
    },
    fields: [
      { id: 'f1', label: { es: "Media", en: "Mean" }, answer: 18, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f2', label: { es: "Mediana", en: "Median" }, answer: 12, unit: 'none', tolerance: { abs: 0.01 } },
      { id: 'f3', label: { es: "Rango", en: "Range" }, answer: 31, unit: 'none', tolerance: { abs: 0.01 } },
    ],
    explanation: {
      es: "Media: (10 + 12 + 12 + 15 + 41) ÷ 5 = 90 ÷ 5 = 18. Mediana: el 3.º de 5 datos ordenados = 12. Rango: 41 − 10 = 31. El día del evento jala la media hacia arriba; la mediana describe mejor un día normal. Error común: tomar como mediana el dato de en medio sin ordenar primero.",
      en: "Mean: (10 + 12 + 12 + 15 + 41) ÷ 5 = 90 ÷ 5 = 18. Median: the 3rd of 5 sorted values = 12. Range: 41 − 10 = 31. The event day pulls the mean up; the median better describes a normal day. Common mistake: taking the middle value as the median without sorting first.",
    },
    difficulty: 1,
    points: 15,
    competency: 'business-statistics',
  },
  {
    id: 'TEC-05-E2',
    level: 2,
    module: 'TEC-05',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Una agencia de viajes quiere publicar el \"sueldo típico\" de sus asesores. Nueve asesores ganan entre $14,000 y $17,000 al mes y el dueño, que también figura en la nómina, gana $120,000.",
      en: "A travel agency wants to publish the \"typical salary\" of its agents. Nine agents earn between $14,000 and $17,000 a month and the owner, who is also on the payroll, earns $120,000.",
    },
    prompt: {
      es: "¿Qué medida representa mejor el sueldo típico en la agencia de viajes?",
      en: "Which measure best represents the typical salary at the travel agency?",
    },
    options: [
      { id: 'TEC-05-E2-a', text: { es: "La media, porque usa todos los datos", en: "The mean, because it uses all the data" } },
      { id: 'TEC-05-E2-b', text: { es: "La mediana, porque no se deja llevar por el sueldo extremo", en: "The median, because it is not pulled by the extreme salary" } },
      { id: 'TEC-05-E2-c', text: { es: "El rango, porque muestra la diferencia entre el mayor y el menor", en: "The range, because it shows the difference between the highest and lowest" } },
      { id: 'TEC-05-E2-d', text: { es: "El sueldo más alto, porque es el objetivo de todos", en: "The highest salary, because it is everyone's goal" } },
    ],
    correctOptionId: 'TEC-05-E2-b',
    explanation: {
      es: "Con un valor atípico tan alto, la media sube y ya no describe a la mayoría; la mediana queda en el centro de los sueldos de los asesores. El rango mide dispersión, no el valor típico. Error común: creer que la media siempre es la mejor medida porque usa todos los datos.",
      en: "With such a high outlier, the mean rises and no longer describes the majority; the median stays at the center of the agents' salaries. The range measures dispersion, not the typical value. Common mistake: believing the mean is always the best measure because it uses all the data.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-statistics',
  },
  {
    id: 'TEC-05-E3',
    level: 2,
    module: 'TEC-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una mensajería revisó los 8 pedidos que entregó una sucursal nueva en su primer día (es toda la población que le interesa). Tiempos de entrega en horas: 2, 4, 4, 4, 5, 5, 7 y 9.",
      en: "A courier reviewed the 8 orders a new branch delivered on its first day (the whole population it cares about). Delivery times in hours: 2, 4, 4, 4, 5, 5, 7 and 9.",
    },
    prompt: {
      es: "¿Cuál es la desviación estándar poblacional (DESVEST.P) de los tiempos de entrega de la mensajería, en horas?",
      en: "What is the population standard deviation (STDEV.P) of the courier's delivery times, in hours?",
    },
    answer: 2,
    unit: 'none',
    decimals: 2,
    tolerance: { abs: 0.01 },
    explanation: {
      es: "Media: 40 ÷ 8 = 5. Distancias al cuadrado: 9, 1, 1, 1, 0, 0, 4, 16; suman 32. Varianza poblacional: 32 ÷ 8 = 4. Desviación: √4 = 2 horas. Error común: dividir entre n − 1 (7), que es la fórmula de muestra y da cerca de 2.14.",
      en: "Mean: 40 ÷ 8 = 5. Squared distances: 9, 1, 1, 1, 0, 0, 4, 16; they add up to 32. Population variance: 32 ÷ 8 = 4. Deviation: √4 = 2 hours. Common mistake: dividing by n − 1 (7), the sample formula, which gives about 2.14.",
    },
    difficulty: 2,
    points: 15,
    competency: 'business-statistics',
  },
  {
    id: 'TEC-05-E4',
    level: 2,
    module: 'TEC-05',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Las ventas semanales de una mueblería tienen media de $80,000 y desviación estándar de $12,000.",
      en: "A furniture store's weekly sales have a $80,000 mean and a $12,000 standard deviation.",
    },
    prompt: {
      es: "¿Cuál es el coeficiente de variación de las ventas semanales de la mueblería? Responde en porcentaje.",
      en: "What is the coefficient of variation of the furniture store's weekly sales? Answer as a percentage.",
    },
    answer: 15,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "CV = 12,000 ÷ 80,000 = 0.15 = 15%. Indica que, en relación con su promedio, las ventas varían 15%. Error común: invertir la división (80,000 ÷ 12,000 = 6.67) o escribir 0.15 en lugar de 15%.",
      en: "CV = 12,000 ÷ 80,000 = 0.15 = 15%. It means that, relative to their average, sales vary by 15%. Common mistake: inverting the division (80,000 ÷ 12,000 = 6.67) or entering 0.15 instead of 15%.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-statistics',
  },
  {
    id: 'TEC-05-E5',
    level: 2,
    module: 'TEC-05',
    kind: 'truefalse',
    flavor: 'interpret',
    context: {
      es: "En una cadena de tiendas, las ventas de paraguas y las de impermeables tienen una correlación de +0.9.",
      en: "In a store chain, umbrella sales and raincoat sales have a +0.9 correlation.",
    },
    prompt: {
      es: "La correlación de +0.9 demuestra que vender más paraguas provoca que se vendan más impermeables.",
      en: "The +0.9 correlation proves that selling more umbrellas causes more raincoats to be sold.",
    },
    answer: false,
    explanation: {
      es: "Falso. Una correlación alta solo dice que las dos variables se mueven juntas; no prueba causa. Aquí ambas probablemente dependen de un tercer factor: la lluvia. Error común: tomar decisiones (como bajar el precio del paraguas para vender impermeables) creyendo que una correlación es causa.",
      en: "False. A high correlation only says the two variables move together; it does not prove cause. Here both likely depend on a third factor: rain. Common mistake: making decisions (such as cutting umbrella prices to sell raincoats) believing a correlation is a cause.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-statistics',
  },
  {
    id: 'TEC-05-E6',
    level: 2,
    module: 'TEC-05',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "Una envasadora llena botellas de miel. El contenido tiene forma de campana (distribución normal) con media de 200 gramos y desviación estándar de 20 gramos.",
      en: "A packer fills honey bottles. The content is bell-shaped (normal distribution) with a mean of 200 grams and a standard deviation of 20 grams.",
    },
    prompt: {
      es: "Según la regla empírica, ¿entre qué valores queda cerca del 95% de las botellas de miel?",
      en: "According to the empirical rule, between which values do about 95% of the honey bottles fall?",
    },
    options: [
      { id: 'TEC-05-E6-a', text: { es: "Entre 180 y 220 gramos", en: "Between 180 and 220 grams" } },
      { id: 'TEC-05-E6-b', text: { es: "Entre 160 y 240 gramos", en: "Between 160 and 240 grams" } },
      { id: 'TEC-05-E6-c', text: { es: "Entre 140 y 260 gramos", en: "Between 140 and 260 grams" } },
      { id: 'TEC-05-E6-d', text: { es: "Entre 195 y 205 gramos", en: "Between 195 and 205 grams" } },
    ],
    correctOptionId: 'TEC-05-E6-b',
    explanation: {
      es: "Cerca del 95% de los datos está a dos desviaciones de la media: 200 ± 2 × 20 = 160 a 240 gramos. Entre 180 y 220 (una desviación) queda cerca del 68%, y entre 140 y 260 (tres) casi el 99.7%. Error común: confundir el número de desviaciones de cada porcentaje.",
      en: "About 95% of the data lie within two deviations of the mean: 200 ± 2 × 20 = 160 to 240 grams. Between 180 and 220 (one deviation) lies about 68%, and between 140 and 260 (three) almost 99.7%. Common mistake: mixing up how many deviations go with each percentage.",
    },
    difficulty: 1,
    points: 10,
    competency: 'business-statistics',
  },

  // ═════════════════════════ TEC-06 ═════════════════════════
  {
    id: 'TEC-06-E1',
    level: 2,
    module: 'TEC-06',
    kind: 'mcq',
    flavor: 'concept',
    context: {
      es: "Una cadena de gimnasios recibe cada mes archivos de sus sucursales con columnas en distinto orden, fechas como texto y filas duplicadas.",
      en: "A gym chain receives files from its branches each month with columns in different order, dates stored as text and duplicate rows.",
    },
    prompt: {
      es: "¿Qué parte de Power BI conviene usar para combinar y limpiar los archivos de los gimnasios antes de analizarlos?",
      en: "Which part of Power BI should be used to combine and clean the gyms' files before analyzing them?",
    },
    options: [
      { id: 'TEC-06-E1-a', text: { es: "Power Query, que transforma los datos y repite los pasos al actualizar", en: "Power Query, which transforms the data and repeats the steps on refresh" } },
      { id: 'TEC-06-E1-b', text: { es: "Un gráfico de barras", en: "A bar chart" } },
      { id: 'TEC-06-E1-c', text: { es: "Un segmentador de fechas", en: "A date slicer" } },
      { id: 'TEC-06-E1-d', text: { es: "Una tarjeta de KPI", en: "A KPI card" } },
    ],
    correctOptionId: 'TEC-06-E1-a',
    explanation: {
      es: "Power Query es el paso de transformación (la T de ETL): combina archivos, corrige tipos de dato y quita duplicados, y recuerda los pasos para el siguiente mes. Gráficos, segmentadores y tarjetas son de visualización y trabajan con datos ya limpios. Error común: intentar arreglar datos sucios directamente en los gráficos.",
      en: "Power Query is the transformation step (the T in ETL): it combines files, fixes data types and removes duplicates, and remembers the steps for next month. Charts, slicers and cards are for visualization and work with already clean data. Common mistake: trying to fix dirty data directly in the charts.",
    },
    difficulty: 1,
    points: 10,
    competency: 'power-bi',
  },
  {
    id: 'TEC-06-E2',
    level: 2,
    module: 'TEC-06',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada tabla del modelo de una refaccionaria como tabla de hechos o de dimensiones.",
      en: "Classify each table in an auto parts store's model as a fact or a dimension table.",
    },
    categories: [
      { id: 'TEC-06-E2-c1', label: { es: "Tabla de hechos", en: "Fact table" } },
      { id: 'TEC-06-E2-c2', label: { es: "Tabla de dimensiones", en: "Dimension table" } },
    ],
    items: [
      { id: 'TEC-06-E2-i1', label: { es: "Ventas (fecha, id de pieza, id de cliente, importe)", en: "Sales (date, part id, customer id, amount)" }, correctCategoryId: 'TEC-06-E2-c1' },
      { id: 'TEC-06-E2-i2', label: { es: "Catálogo de piezas (id, nombre, marca, categoría)", en: "Parts catalog (id, name, brand, category)" }, correctCategoryId: 'TEC-06-E2-c2' },
      { id: 'TEC-06-E2-i3', label: { es: "Clientes (id, nombre, ciudad)", en: "Customers (id, name, city)" }, correctCategoryId: 'TEC-06-E2-c2' },
      { id: 'TEC-06-E2-i4', label: { es: "Calendario (fecha, mes, trimestre, año)", en: "Calendar (date, month, quarter, year)" }, correctCategoryId: 'TEC-06-E2-c2' },
      { id: 'TEC-06-E2-i5', label: { es: "Movimientos de inventario (fecha, id de pieza, cantidad que entra o sale)", en: "Inventory movements (date, part id, quantity in or out)" }, correctCategoryId: 'TEC-06-E2-c1' },
      { id: 'TEC-06-E2-i6', label: { es: "Pagos recibidos (fecha, id de cliente, monto)", en: "Payments received (date, customer id, amount)" }, correctCategoryId: 'TEC-06-E2-c1' },
    ],
    explanation: {
      es: "Las tablas de hechos registran eventos con cantidades o importes que crecen cada día (ventas, movimientos, pagos). Las dimensiones describen quién, qué y cuándo (piezas, clientes, calendario) y se relacionan de uno a varios con los hechos. Error común: considerar el calendario como hechos porque tiene fechas; solo describe el tiempo.",
      en: "Fact tables record events with quantities or amounts that grow every day (sales, movements, payments). Dimensions describe who, what and when (parts, customers, calendar) and relate one-to-many to the facts. Common mistake: treating the calendar as facts because it has dates; it only describes time.",
    },
    difficulty: 1,
    points: 10,
    competency: 'power-bi',
  },
  {
    id: 'TEC-06-E3',
    level: 2,
    module: 'TEC-06',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "El dueño de una cadena de ópticas quiere ver si sus ventas mensuales de los últimos 24 meses van al alza, a la baja o tienen temporadas.",
      en: "The owner of an optical store chain wants to see whether his monthly sales over the last 24 months are rising, falling or seasonal.",
    },
    prompt: {
      es: "¿Qué visualización responde mejor la pregunta del dueño de las ópticas?",
      en: "Which visualization best answers the optical chain owner's question?",
    },
    options: [
      { id: 'TEC-06-E3-a', text: { es: "Un gráfico de pastel con 24 rebanadas, una por mes", en: "A pie chart with 24 slices, one per month" } },
      { id: 'TEC-06-E3-b', text: { es: "Un gráfico de líneas con los 24 meses en el eje horizontal", en: "A line chart with the 24 months on the horizontal axis" } },
      { id: 'TEC-06-E3-c', text: { es: "Una tarjeta con la venta total de los 24 meses", en: "A card with the total sales for the 24 months" } },
      { id: 'TEC-06-E3-d', text: { es: "Una tabla con los 24 importes ordenados alfabéticamente por mes", en: "A table with the 24 amounts sorted alphabetically by month" } },
    ],
    correctOptionId: 'TEC-06-E3-b',
    explanation: {
      es: "Para tendencias en el tiempo se usan líneas: se ve de un vistazo si sube, baja o se repiten temporadas. Un pastel con 24 rebanadas es ilegible, la tarjeta oculta la evolución y la tabla obliga a leer número por número (y ordenar meses alfabéticamente rompe la secuencia). Error común: elegir el gráfico por estética y no por la pregunta.",
      en: "Trends over time call for lines: you see at a glance whether it rises, falls or repeats seasons. A 24-slice pie is unreadable, the card hides the evolution and the table forces reading number by number (and sorting months alphabetically breaks the sequence). Common mistake: choosing the chart for looks instead of for the question.",
    },
    difficulty: 1,
    points: 10,
    competency: 'power-bi',
  },
  {
    id: 'TEC-06-E4',
    level: 2,
    module: 'TEC-06',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa de pinturas tiene dos tiendas. Tienda A: ventas de $200,000 y utilidad de $40,000 (margen 20%). Tienda B: ventas de $50,000 y utilidad de $5,000 (margen 10%). La medida es Margen % = DIVIDE(SUM(Utilidad), SUM(Ventas)).",
      en: "A paint company has two stores. Store A: $200,000 sales and $40,000 profit (20% margin). Store B: $50,000 sales and $5,000 profit (10% margin). The measure is Margin % = DIVIDE(SUM(Profit), SUM(Sales)).",
    },
    prompt: {
      es: "¿Qué margen total muestra la medida DAX para la empresa de pinturas sin filtros? Responde en porcentaje.",
      en: "What total margin does the DAX measure show for the paint company with no filters? Answer as a percentage.",
    },
    answer: 18,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "La medida divide sumas: (40,000 + 5,000) ÷ (200,000 + 50,000) = 45,000 ÷ 250,000 = 18%. Error común: promediar los márgenes (20% + 10%) ÷ 2 = 15%, que ignora que la tienda A vende cuatro veces más.",
      en: "The measure divides sums: (40,000 + 5,000) ÷ (200,000 + 50,000) = 45,000 ÷ 250,000 = 18%. Common mistake: averaging the margins (20% + 10%) ÷ 2 = 15%, which ignores that store A sells four times more.",
    },
    difficulty: 2,
    points: 15,
    competency: 'power-bi',
  },
  {
    id: 'TEC-06-E5',
    level: 2,
    module: 'TEC-06',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En Power BI, una medida DAX como Ventas Totales = SUM(Ventas[Importe]) se recalcula sola cuando el usuario elige una sucursal o un mes en un segmentador.",
      en: "In Power BI, a DAX measure such as Total Sales = SUM(Sales[Amount]) recalculates by itself when the user picks a branch or a month in a slicer.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Las medidas se evalúan en el contexto de los filtros activos: si eliges \"Puebla\", la misma medida muestra solo las ventas de Puebla. Las columnas calculadas, en cambio, se calculan fila por fila al cargar los datos. Error común: crear una columna calculada para cada sucursal en lugar de una sola medida.",
      en: "True. Measures are evaluated in the context of the active filters: if you pick \"Puebla\", the same measure shows only Puebla's sales. Calculated columns, instead, are computed row by row when the data loads. Common mistake: creating a calculated column for each branch instead of a single measure.",
    },
    difficulty: 1,
    points: 10,
    competency: 'power-bi',
  },
  {
    id: 'TEC-06-E6',
    level: 2,
    module: 'TEC-06',
    kind: 'multi',
    flavor: 'case',
    context: {
      es: "Un equipo diseña el tablero mensual de ventas que verá la dirección de una cadena de papelerías.",
      en: "A team designs the monthly sales dashboard that a stationery chain's leadership will see.",
    },
    prompt: {
      es: "¿Cuáles son buenas prácticas para el tablero de la cadena de papelerías? Selecciona todas las que apliquen.",
      en: "Which are good practices for the stationery chain's dashboard? Select all that apply.",
    },
    options: [
      { id: 'TEC-06-E6-a', text: { es: "Mostrar pocos KPI clave, como ventas contra meta y margen", en: "Show a few key KPIs, such as sales vs target and margin" } },
      { id: 'TEC-06-E6-b', text: { es: "Usar un pastel en 3D con 15 categorías para que se vea moderno", en: "Use a 3D pie with 15 categories so it looks modern" } },
      { id: 'TEC-06-E6-c', text: { es: "Usar títulos claros y los mismos colores para la misma sucursal en todos los gráficos", en: "Use clear titles and the same colors for the same branch in every chart" } },
      { id: 'TEC-06-E6-d', text: { es: "Cortar el eje vertical sin avisar para que una diferencia de 2% parezca enorme", en: "Truncate the vertical axis without warning so a 2% difference looks huge" } },
      { id: 'TEC-06-E6-e', text: { es: "Agregar segmentadores de fecha y sucursal para explorar", en: "Add date and branch slicers for exploring" } },
    ],
    correctOptionIds: ['TEC-06-E6-a', 'TEC-06-E6-c', 'TEC-06-E6-e'],
    explanation: {
      es: "Un buen tablero es claro y honesto: pocos KPI, títulos y colores consistentes y filtros para explorar. El pastel 3D con muchas categorías distorsiona las proporciones y cortar el eje sin avisar exagera diferencias. Error común: sacrificar claridad por adornos visuales.",
      en: "A good dashboard is clear and honest: few KPIs, consistent titles and colors, and filters to explore. A 3D pie with many categories distorts proportions and truncating the axis without warning exaggerates differences. Common mistake: sacrificing clarity for visual decoration.",
    },
    difficulty: 1,
    points: 10,
    competency: 'power-bi',
  },
]
