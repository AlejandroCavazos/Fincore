import type { Exercise, Lesson } from '../../../types'

/**
 * FINCORE — Temario v2.0 · Análisis de Datos, Tecnología e Inteligencia Artificial · Nivel 2 (Básico)
 * TEC.7 a TEC.12: bases de datos y SQL, Python, análisis de datos financieros, fundamentos de ERP,
 * ERP aplicado a contabilidad/inventarios/finanzas y automatización de procesos contables.
 */

const NOTE_IVA = {
  es: "Contenido educativo. La tasa general de IVA de 16% en México se usa solo para ilustrar cálculos; existen tasas y casos especiales, y las reglas fiscales cambian, así que verifica la versión vigente (2026) con el SAT o con un profesional antes de aplicarla en un caso real.",
  en: "Educational content. Mexico's 16% general VAT rate is used only to illustrate calculations; there are special rates and cases, and tax rules change, so verify the current version (2026) with the SAT or a professional before applying it to a real case.",
}

const NOTE_ERP = {
  es: "Contenido educativo. Los métodos de valuación de inventarios se basan de forma general en las NIF del CINIF, y la tasa de IVA de 16% se usa solo para ilustrar. Las normas fiscales y contables cambian: verifica la versión vigente (2026) y la configuración de tu sistema antes de aplicarlo en un caso real.",
  en: "Educational content. Inventory valuation methods are based in general terms on CINIF's NIF, and the 16% VAT rate is used only for illustration. Tax and accounting rules change: verify the current version (2026) and your system's setup before applying this to a real case.",
}

const NOTE_AUTOMATION = {
  es: "Contenido educativo. Las referencias al CFDI, al SAT y a la contabilidad electrónica son generales; los requisitos técnicos y las obligaciones cambian con el tiempo, así que verifica la versión vigente (2026) antes de automatizar un proceso real. Los montos de los ejemplos son hipotéticos.",
  en: "Educational content. References to the CFDI (Mexican electronic invoice), the SAT and electronic accounting are general; technical requirements and obligations change over time, so verify the current version (2026) before automating a real process. The amounts in the examples are hypothetical.",
}

export const lessons: Lesson[] = [
  // ───────────────────────────── TEC-07 ─────────────────────────────
  {
    id: 'TEC-07',
    level: 2,
    topicIds: ['TEC.7'],
    title: { es: "Bases de datos y SQL", en: "Databases and SQL" },
    summary: {
      es: "Una base de datos guarda la información del negocio en tablas ordenadas, y SQL es el lenguaje para preguntarle cosas como cuánto vendimos o quién nos debe.",
      en: "A database stores a business's information in orderly tables, and SQL is the language for asking it things like how much we sold or who owes us money.",
    },
    minutes: 15,
    objectives: [
      { es: "Explicar qué es una base de datos relacional y reconocer tablas, filas, columnas y llaves.", en: "Explain what a relational database is and recognize tables, rows, columns and keys." },
      { es: "Escribir consultas SQL básicas con SELECT, FROM, WHERE y ORDER BY.", en: "Write basic SQL queries with SELECT, FROM, WHERE and ORDER BY." },
      { es: "Resumir datos con SUM, COUNT y GROUP BY, y unir dos tablas con JOIN.", en: "Summarize data with SUM, COUNT and GROUP BY, and combine two tables with JOIN." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es una base de datos relacional?", en: "What is a relational database?" },
        body: [
          {
            es: "Una **base de datos** es un lugar ordenado donde un sistema guarda información para encontrarla rápido. La más usada en negocios es la **relacional**: guarda los datos en **tablas**, parecidas a hojas de cálculo, y relaciona unas tablas con otras.",
            en: "A **database** is an orderly place where a system stores information so it can be found quickly. The most common in business is the **relational** kind: it stores data in **tables**, similar to spreadsheets, and links tables to one another.",
          },
          {
            es: "Cada tabla describe una sola cosa: clientes, productos o facturas. Cada **columna** es un dato (nombre, RFC, fecha) y cada **fila** o **registro** es un caso concreto (un cliente, una factura). La **llave primaria** es la columna que identifica cada fila sin repetirse, como el folio de una factura.",
            en: "Each table describes one thing only: customers, products or invoices. Each **column** is a data field (name, tax ID, date) and each **row** or **record** is a concrete case (one customer, one invoice). The **primary key** is the column that identifies each row without repeating, like an invoice number.",
          },
          {
            es: "Las tablas se conectan con una **llave foránea**: una columna que apunta a la llave primaria de otra tabla. Así, la tabla de facturas no repite la dirección del cliente; solo guarda su número de cliente.",
            en: "Tables connect through a **foreign key**: a column that points to another table's primary key. That way the invoices table does not repeat the customer's address; it only stores the customer number.",
          },
          {
            es: "Mini ejemplo: en la tabla Clientes, la fila del cliente 15 es Abarrotes Lupita. En la tabla Facturas, la factura A-102 tiene id_cliente = 15. Gracias a esa llave sabes que la factura es de Abarrotes Lupita.",
            en: "Mini example: in the Customers table, customer 15's row is Abarrotes Lupita. In the Invoices table, invoice A-102 has customer_id = 15. Thanks to that key you know the invoice belongs to Abarrotes Lupita.",
          },
        ],
        bullets: [
          { es: "Tabla: un tema (Clientes, Facturas).", en: "Table: one subject (Customers, Invoices)." },
          { es: "Columna: un dato de cada registro (fecha, importe).", en: "Column: one field of every record (date, amount)." },
          { es: "Fila o registro: un caso concreto (la factura A-102).", en: "Row or record: one concrete case (invoice A-102)." },
          { es: "Llave primaria: identifica cada fila sin repetirse.", en: "Primary key: identifies each row without repeating." },
          { es: "Llave foránea: conecta una tabla con otra.", en: "Foreign key: connects one table to another." },
        ],
      },
      {
        heading: { es: "Consultas básicas: SELECT, WHERE y ORDER BY", en: "Basic queries: SELECT, WHERE and ORDER BY" },
        body: [
          {
            es: "**SQL** (lenguaje de consulta estructurado) es la forma estándar de pedirle datos a una base relacional. Una **consulta** es una pregunta escrita en SQL. Leer datos con SELECT **no cambia** nada de lo guardado; solo muestra un resultado.",
            en: "**SQL** (Structured Query Language) is the standard way to request data from a relational database. A **query** is a question written in SQL. Reading data with SELECT **does not change** anything stored; it only shows a result.",
          },
          {
            es: "**SELECT** dice qué columnas quieres ver, **FROM** de qué tabla, **WHERE** qué filas cumplen una condición y **ORDER BY** en qué orden mostrarlas (ASC de menor a mayor, DESC de mayor a menor). Los textos se escriben entre comillas simples, como 'pagada'.",
            en: "**SELECT** says which columns you want to see, **FROM** which table, **WHERE** which rows meet a condition and **ORDER BY** in what order to show them (ASC from low to high, DESC from high to low). Text values go in single quotes, like 'paid'.",
          },
          {
            es: "Mini ejemplo: para ver las facturas mayores a $10,000, de la más grande a la más chica, escribes: SELECT folio, cliente, importe FROM facturas WHERE importe > 10000 ORDER BY importe DESC.",
            en: "Mini example: to see invoices over $10,000, from largest to smallest, you write: SELECT folio, cliente, importe FROM facturas WHERE importe > 10000 ORDER BY importe DESC.",
          },
        ],
        formula: "SELECT columnas FROM tabla WHERE condición ORDER BY columna DESC",
      },
      {
        heading: { es: "Resumir y relacionar: SUM, COUNT, GROUP BY y JOIN", en: "Summarize and relate: SUM, COUNT, GROUP BY and JOIN" },
        body: [
          {
            es: "Las **funciones de agregado** convierten muchas filas en un solo número: **SUM** suma, **COUNT** cuenta, **AVG** promedia, **MAX** y **MIN** dan el mayor y el menor. Si las combinas con **GROUP BY**, obtienes un resultado por grupo, por ejemplo el total vendido a cada cliente.",
            en: "**Aggregate functions** turn many rows into a single number: **SUM** adds, **COUNT** counts, **AVG** averages, **MAX** and **MIN** give the largest and smallest. Combined with **GROUP BY**, you get one result per group, for example the total sold to each customer.",
          },
          {
            es: "WHERE filtra filas **antes** de agrupar. Si quieres filtrar grupos ya sumados (clientes con más de $50,000), se usa **HAVING**. Para traer datos de dos tablas a la vez se usa **JOIN**, indicando qué columnas coinciden (la llave foránea con la llave primaria).",
            en: "WHERE filters rows **before** grouping. To filter groups already summed (customers with more than $50,000), you use **HAVING**. To bring data from two tables at once you use **JOIN**, stating which columns match (the foreign key with the primary key).",
          },
          {
            es: "Mini ejemplo: SELECT c.nombre, SUM(f.importe) FROM facturas f JOIN clientes c ON f.id_cliente = c.id GROUP BY c.nombre te da, en una sola tabla, el nombre de cada cliente y cuánto le has facturado.",
            en: "Mini example: SELECT c.nombre, SUM(f.importe) FROM facturas f JOIN clientes c ON f.id_cliente = c.id GROUP BY c.nombre gives you, in one table, each customer's name and how much you have invoiced them.",
          },
        ],
        bullets: [
          { es: "SUM(importe): total de importes.", en: "SUM(amount): total of amounts." },
          { es: "COUNT(*): número de filas.", en: "COUNT(*): number of rows." },
          { es: "GROUP BY cliente: un renglón por cliente.", en: "GROUP BY customer: one line per customer." },
          { es: "HAVING: filtra grupos después de sumar.", en: "HAVING: filters groups after summing." },
          { es: "JOIN ... ON: une tablas por su llave común.", en: "JOIN ... ON: joins tables by their common key." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Facturas grandes de un mes", en: "Large invoices in a month" },
        problem: {
          es: "La tabla facturas tiene cuatro filas: A-1 ($4,000), A-2 ($18,500), A-3 ($12,000) y A-4 ($9,900). ¿Qué devuelve SELECT folio FROM facturas WHERE importe > 10000 ORDER BY importe DESC?",
          en: "The facturas table has four rows: A-1 ($4,000), A-2 ($18,500), A-3 ($12,000) and A-4 ($9,900). What does SELECT folio FROM facturas WHERE importe > 10000 ORDER BY importe DESC return?",
        },
        steps: [
          { es: "WHERE deja solo las filas con importe mayor a 10,000: A-2 ($18,500) y A-3 ($12,000).", en: "WHERE keeps only rows with an amount over 10,000: A-2 ($18,500) and A-3 ($12,000)." },
          { es: "A-4 ($9,900) queda fuera porque no supera 10,000; A-1 también.", en: "A-4 ($9,900) is left out because it does not exceed 10,000; so is A-1." },
          { es: "ORDER BY importe DESC las ordena de mayor a menor: primero A-2 y luego A-3.", en: "ORDER BY importe DESC sorts them from largest to smallest: first A-2, then A-3." },
          { es: "SELECT folio muestra solo la columna folio.", en: "SELECT folio shows only the folio column." },
        ],
        result: {
          es: "El resultado son dos filas: A-2 y A-3, en ese orden. La tabla original no cambia.",
          en: "The result is two rows: A-2 and A-3, in that order. The original table does not change.",
        },
      },
      {
        title: { es: "Total vendido por cliente", en: "Total sold per customer" },
        problem: {
          es: "La tabla ventas tiene: Café Sol $3,000; Café Sol $2,500; Taller Ruiz $7,000; Café Sol $1,500; Taller Ruiz $1,000. ¿Qué devuelve SELECT cliente, COUNT(*), SUM(importe) FROM ventas GROUP BY cliente?",
          en: "The ventas table has: Café Sol $3,000; Café Sol $2,500; Taller Ruiz $7,000; Café Sol $1,500; Taller Ruiz $1,000. What does SELECT cliente, COUNT(*), SUM(importe) FROM ventas GROUP BY cliente return?",
        },
        steps: [
          { es: "GROUP BY cliente forma dos grupos: Café Sol y Taller Ruiz.", en: "GROUP BY cliente forms two groups: Café Sol and Taller Ruiz." },
          { es: "Café Sol: 3 filas; suma 3,000 + 2,500 + 1,500 = $7,000.", en: "Café Sol: 3 rows; sum 3,000 + 2,500 + 1,500 = $7,000." },
          { es: "Taller Ruiz: 2 filas; suma 7,000 + 1,000 = $8,000.", en: "Taller Ruiz: 2 rows; sum 7,000 + 1,000 = $8,000." },
        ],
        result: {
          es: "Dos renglones: Café Sol | 3 | 7,000 y Taller Ruiz | 2 | 8,000. Café Sol compra más seguido, pero Taller Ruiz compra más en dinero.",
          en: "Two lines: Café Sol | 3 | 7,000 and Taller Ruiz | 2 | 8,000. Café Sol buys more often, but Taller Ruiz buys more in money.",
        },
      },
    ],
    keyPoints: [
      { es: "Una base relacional guarda datos en tablas de filas (registros) y columnas (datos).", en: "A relational database stores data in tables of rows (records) and columns (fields)." },
      { es: "La llave primaria identifica cada fila; la foránea conecta tablas.", en: "The primary key identifies each row; the foreign key connects tables." },
      { es: "SELECT elige columnas, FROM la tabla, WHERE filtra filas y ORDER BY ordena.", en: "SELECT picks columns, FROM the table, WHERE filters rows and ORDER BY sorts." },
      { es: "SUM, COUNT y AVG resumen; GROUP BY da un resultado por grupo.", en: "SUM, COUNT and AVG summarize; GROUP BY gives one result per group." },
      { es: "JOIN une tablas por su llave común; SELECT solo lee, no modifica.", en: "JOIN combines tables by their common key; SELECT only reads, it does not modify." },
    ],
    exerciseIds: ['TEC-07-E1', 'TEC-07-E2', 'TEC-07-E3', 'TEC-07-E4', 'TEC-07-E5', 'TEC-07-E6'],
  },

  // ───────────────────────────── TEC-08 ─────────────────────────────
  {
    id: 'TEC-08',
    level: 2,
    topicIds: ['TEC.8'],
    title: { es: "Programación con Python", en: "Programming with Python" },
    summary: {
      es: "Python es un lenguaje de programación sencillo de leer que te permite automatizar cálculos financieros con variables, listas, ciclos, condiciones y funciones.",
      en: "Python is an easy-to-read programming language that lets you automate financial calculations with variables, lists, loops, conditions and functions.",
    },
    minutes: 16,
    objectives: [
      { es: "Reconocer variables y los tipos de datos básicos de Python: números enteros, decimales, texto y booleanos.", en: "Recognize variables and Python's basic data types: integers, decimals, text and booleans." },
      { es: "Leer y predecir el resultado de ciclos for y condiciones if sobre listas de datos.", en: "Read and predict the result of for loops and if conditions over lists of data." },
      { es: "Escribir funciones sencillas con def y return para cálculos como el IVA.", en: "Write simple functions with def and return for calculations such as VAT." },
    ],
    theory: [
      {
        heading: { es: "Variables y tipos de datos", en: "Variables and data types" },
        body: [
          {
            es: "Un **programa** es una lista de instrucciones que la computadora sigue en orden. **Python** es un lenguaje de programación muy usado en finanzas y análisis de datos porque se lee casi como inglés y tiene muchas herramientas listas para usar.",
            en: "A **program** is a list of instructions the computer follows in order. **Python** is a programming language widely used in finance and data analysis because it reads almost like English and has many ready-made tools.",
          },
          {
            es: "Una **variable** es una cajita con nombre donde guardas un valor: renta = 8500. El signo = significa **asignar** (guardar), no comparar. Para comparar si dos cosas son iguales se usa ==.",
            en: "A **variable** is a labeled box where you store a value: renta = 8500. The = sign means **assign** (store), not compare. To check whether two things are equal you use ==.",
          },
          {
            es: "Cada valor tiene un **tipo**: **int** (entero, 8500), **float** (con decimales, 0.16), **str** (texto entre comillas, \"Bancos\") y **bool** (verdadero o falso: True o False). Ojo: \"1500\" entre comillas es texto, no número; no puedes sumarlo directo con 300.",
            en: "Every value has a **type**: **int** (integer, 8500), **float** (with decimals, 0.16), **str** (text in quotes, \"Bank\") and **bool** (true or false: True or False). Careful: \"1500\" in quotes is text, not a number; you cannot add it directly to 300.",
          },
          {
            es: "Mini ejemplo: sueldo = 18000 y gastos = 12500; luego ahorro = sueldo - gastos; print(ahorro) muestra 5500 en pantalla.",
            en: "Mini example: sueldo = 18000 and gastos = 12500; then ahorro = sueldo - gastos; print(ahorro) shows 5500 on screen.",
          },
        ],
        bullets: [
          { es: "int: 8500 (entero).", en: "int: 8500 (integer)." },
          { es: "float: 0.16 (decimal).", en: "float: 0.16 (decimal)." },
          { es: "str: \"Proveedores\" (texto).", en: "str: \"Suppliers\" (text)." },
          { es: "bool: True o False.", en: "bool: True or False." },
        ],
      },
      {
        heading: { es: "Listas, ciclos y condiciones", en: "Lists, loops and conditions" },
        body: [
          {
            es: "Una **lista** guarda varios valores en orden entre corchetes: gastos = [450, 1200, 380]. Un **ciclo for** repite las mismas instrucciones para cada elemento de la lista, uno por uno, como cuando revisas renglón por renglón tu estado de cuenta.",
            en: "A **list** stores several values in order inside square brackets: gastos = [450, 1200, 380]. A **for loop** repeats the same instructions for each element of the list, one by one, like when you check your bank statement line by line.",
          },
          {
            es: "Una **condición if** ejecuta algo solo si se cumple una comparación (>, <, ==, >=, <=). Puedes añadir **else** para lo que pasa cuando no se cumple. Las comparaciones dan un valor bool: 5 > 3 es True.",
            en: "An **if condition** runs something only when a comparison holds (>, <, ==, >=, <=). You can add **else** for what happens when it does not hold. Comparisons give a bool value: 5 > 3 is True.",
          },
          {
            es: "En Python la **sangría** (los espacios al inicio de la línea) no es decoración: indica qué instrucciones están **dentro** del for o del if. Si la quitas, el programa falla o hace otra cosa.",
            en: "In Python **indentation** (the spaces at the start of a line) is not decoration: it shows which instructions are **inside** the for or the if. If you remove it, the program fails or does something else.",
          },
          {
            es: "Mini ejemplo: total = 0, luego for g in gastos: total = total + g. Al terminar, total vale 450 + 1200 + 380 = 2030.",
            en: "Mini example: total = 0, then for g in gastos: total = total + g. When it finishes, total is 450 + 1200 + 380 = 2030.",
          },
        ],
      },
      {
        heading: { es: "Funciones y bibliotecas", en: "Functions and libraries" },
        body: [
          {
            es: "Una **función** es una receta con nombre que recibe datos y devuelve un resultado. Se crea con **def**, recibe **parámetros** entre paréntesis y entrega su resultado con **return**. Así escribes el cálculo una vez y lo usas mil veces.",
            en: "A **function** is a named recipe that takes data and gives back a result. You create it with **def**, it receives **parameters** in parentheses and hands back its result with **return**. That way you write the calculation once and use it a thousand times.",
          },
          {
            es: "Diferencia clave: **print** solo muestra un valor en pantalla; **return** lo devuelve para que otra parte del programa lo use. Python también trae funciones listas: len(lista) cuenta elementos, sum(lista) los suma y round(x, 2) redondea a dos decimales, útil con dinero.",
            en: "Key difference: **print** only shows a value on screen; **return** hands it back so another part of the program can use it. Python also has built-in functions: len(list) counts elements, sum(list) adds them and round(x, 2) rounds to two decimals, useful with money.",
          },
          {
            es: "Las **bibliotecas** son paquetes de código que otros ya escribieron. Por ejemplo, **pandas** sirve para leer y analizar tablas (como un Excel muy potente) y se carga con import pandas as pd.",
            en: "**Libraries** are packages of code others have already written. For example, **pandas** is used to read and analyze tables (like a very powerful Excel) and is loaded with import pandas as pd.",
          },
          {
            es: "Mini ejemplo: def total_con_iva(subtotal): return round(subtotal * 1.16, 2). Al llamar total_con_iva(2500) obtienes 2900.0.",
            en: "Mini example: def total_con_iva(subtotal): return round(subtotal * 1.16, 2). Calling total_con_iva(2500) gives you 2900.0.",
          },
        ],
        formula: "def nombre(parámetro): return resultado",
      },
    ],
    examples: [
      {
        title: { es: "Sumar gastos con un ciclo", en: "Adding expenses with a loop" },
        problem: {
          es: "Tienes gastos = [850, 1200, 430, 2520]. El programa empieza con total = 0 y, para cada g en gastos, hace total = total + g. ¿Cuánto vale total al final?",
          en: "You have gastos = [850, 1200, 430, 2520]. The program starts with total = 0 and, for each g in gastos, does total = total + g. What is total at the end?",
        },
        steps: [
          { es: "Vuelta 1: total = 0 + 850 = 850.", en: "Pass 1: total = 0 + 850 = 850." },
          { es: "Vuelta 2: total = 850 + 1200 = 2050.", en: "Pass 2: total = 850 + 1200 = 2050." },
          { es: "Vuelta 3: total = 2050 + 430 = 2480.", en: "Pass 3: total = 2050 + 430 = 2480." },
          { es: "Vuelta 4: total = 2480 + 2520 = 5000.", en: "Pass 4: total = 2480 + 2520 = 5000." },
        ],
        result: {
          es: "total vale 5000. Lo mismo da sum(gastos), la función ya incluida en Python.",
          en: "total is 5000. sum(gastos), Python's built-in function, gives the same result.",
        },
      },
      {
        title: { es: "Función para clasificar saldos", en: "Function to classify balances" },
        problem: {
          es: "Escribe una función que reciba un saldo y devuelva \"Por cobrar\" si es mayor que 0 o \"Al corriente\" en otro caso. ¿Qué devuelve con 1500 y con 0?",
          en: "Write a function that takes a balance and returns \"Receivable\" if it is greater than 0 or \"Up to date\" otherwise. What does it return for 1500 and for 0?",
        },
        steps: [
          { es: "Se define: def estado(saldo):", en: "It is defined: def estado(saldo):" },
          { es: "Dentro, con sangría: if saldo > 0: return \"Por cobrar\"", en: "Inside, indented: if saldo > 0: return \"Receivable\"" },
          { es: "Si no se cumple: else: return \"Al corriente\"", en: "If it does not hold: else: return \"Up to date\"" },
          { es: "estado(1500): 1500 > 0 es True, devuelve \"Por cobrar\". estado(0): 0 > 0 es False, devuelve \"Al corriente\".", en: "estado(1500): 1500 > 0 is True, returns \"Receivable\". estado(0): 0 > 0 is False, returns \"Up to date\"." },
        ],
        result: {
          es: "\"Por cobrar\" para 1500 y \"Al corriente\" para 0. Ahora puedes aplicar la función a cientos de clientes con un ciclo.",
          en: "\"Receivable\" for 1500 and \"Up to date\" for 0. Now you can apply the function to hundreds of customers with a loop.",
        },
      },
    ],
    keyPoints: [
      { es: "Una variable guarda un valor; = asigna y == compara.", en: "A variable stores a value; = assigns and == compares." },
      { es: "Tipos básicos: int, float, str (texto entre comillas) y bool (True/False).", en: "Basic types: int, float, str (text in quotes) and bool (True/False)." },
      { es: "Una lista guarda varios valores; for repite instrucciones para cada uno.", en: "A list stores several values; for repeats instructions for each one." },
      { es: "if ejecuta algo solo si se cumple una condición; la sangría marca qué va dentro.", en: "if runs something only when a condition holds; indentation marks what is inside." },
      { es: "Las funciones (def ... return) evitan repetir cálculos; las bibliotecas como pandas amplían Python.", en: "Functions (def ... return) avoid repeating calculations; libraries such as pandas extend Python." },
    ],
    normativeNote: NOTE_IVA,
    exerciseIds: ['TEC-08-E1', 'TEC-08-E2', 'TEC-08-E3', 'TEC-08-E4', 'TEC-08-E5', 'TEC-08-E6'],
  },

  // ───────────────────────────── TEC-09 ─────────────────────────────
  {
    id: 'TEC-09',
    level: 2,
    topicIds: ['TEC.9'],
    title: { es: "Análisis de datos financieros", en: "Financial data analysis" },
    summary: {
      es: "Analizar datos financieros es limpiar los números, compararlos contra periodos, proporciones y presupuestos, y convertirlos en conclusiones claras para decidir.",
      en: "Analyzing financial data means cleaning the numbers, comparing them against periods, proportions and budgets, and turning them into clear conclusions for decision-making.",
    },
    minutes: 15,
    objectives: [
      { es: "Describir el proceso de análisis: pregunta, datos, limpieza, cálculo y comunicación.", en: "Describe the analysis process: question, data, cleaning, calculation and communication." },
      { es: "Calcular variaciones porcentuales y análisis horizontal y vertical.", en: "Compute percentage changes and horizontal and vertical analysis." },
      { es: "Comparar real contra presupuesto e interpretar desviaciones y datos atípicos.", en: "Compare actual against budget and interpret variances and outliers." },
    ],
    theory: [
      {
        heading: { es: "Del dato a la decisión: preparar los datos", en: "From data to decision: preparing the data" },
        body: [
          {
            es: "Todo análisis empieza con una **pregunta** concreta: ¿por qué bajó la utilidad este trimestre? ¿Qué sucursal vende más? Sin pregunta, terminas con muchas gráficas y ninguna respuesta.",
            en: "Every analysis starts with a concrete **question**: why did profit drop this quarter? Which branch sells the most? Without a question, you end up with many charts and no answer.",
          },
          {
            es: "Luego reúnes los datos (del sistema contable, del banco, de las ventas) y los **limpias**. Limpiar es corregir lo que distorsiona: **duplicados** (la misma factura dos veces), **formatos** distintos (fechas como 03/04 que pueden ser marzo o abril), **valores vacíos** y errores de captura.",
            en: "Then you gather the data (from the accounting system, the bank, sales) and **clean** it. Cleaning means fixing what distorts: **duplicates** (the same invoice twice), inconsistent **formats** (dates like 03/04 that could be March or April), **missing values** and typing errors.",
          },
          {
            es: "Mini ejemplo: si la factura B-77 de $40,000 aparece dos veces en el reporte, las ventas del mes salen $40,000 más altas de lo real y cualquier conclusión estará inflada.",
            en: "Mini example: if invoice B-77 for $40,000 appears twice in the report, the month's sales come out $40,000 higher than reality and any conclusion will be inflated.",
          },
        ],
        bullets: [
          { es: "1. Define la pregunta.", en: "1. Define the question." },
          { es: "2. Reúne los datos de fuentes confiables.", en: "2. Gather data from reliable sources." },
          { es: "3. Limpia: duplicados, formatos, vacíos, errores.", en: "3. Clean: duplicates, formats, blanks, errors." },
          { es: "4. Calcula y compara.", en: "4. Calculate and compare." },
          { es: "5. Comunica una conclusión clara.", en: "5. Communicate a clear conclusion." },
        ],
      },
      {
        heading: { es: "Variación, análisis horizontal y vertical", en: "Change, horizontal and vertical analysis" },
        body: [
          {
            es: "La **variación porcentual** dice cuánto creció o bajó algo respecto de su valor anterior. Siempre se divide entre el valor **anterior** (la base), no entre el actual.",
            en: "The **percentage change** tells you how much something grew or fell relative to its previous value. You always divide by the **previous** value (the base), not by the current one.",
          },
          {
            es: "El **análisis horizontal** compara la misma cuenta en distintos periodos (ventas 2025 contra 2026). El **análisis vertical** mira un solo periodo y expresa cada partida como porcentaje de una base, normalmente las ventas: ¿qué parte de cada peso vendido se va en costo y en gastos?",
            en: "**Horizontal analysis** compares the same account across periods (2025 vs 2026 sales). **Vertical analysis** looks at a single period and expresses each line as a percentage of a base, usually sales: what part of every peso sold goes to cost and expenses?",
          },
          {
            es: "Cuidado con los porcentajes encadenados: subir 20% y luego bajar 20% **no** te regresa al inicio, porque la segunda base es más grande. De 100 subes a 120 y luego bajas a 96.",
            en: "Watch out for chained percentages: rising 20% and then falling 20% does **not** bring you back to the start, because the second base is larger. From 100 you rise to 120 and then fall to 96.",
          },
          {
            es: "Mini ejemplo: ventas de $200,000 que pasan a $230,000 crecen (230,000 − 200,000) / 200,000 × 100 = 15%.",
            en: "Mini example: sales of $200,000 that become $230,000 grow (230,000 − 200,000) / 200,000 × 100 = 15%.",
          },
        ],
        formula: "Variación % = (Valor actual − Valor anterior) / Valor anterior × 100   ·   % vertical = Partida / Ventas × 100",
      },
      {
        heading: { es: "Real contra presupuesto y datos atípicos", en: "Actual vs budget and outliers" },
        body: [
          {
            es: "Un **presupuesto** es el plan de cuánto esperas vender y gastar. Comparar lo **real** contra el presupuesto muestra **desviaciones**: favorables (vendiste más o gastaste menos) o desfavorables (lo contrario). Se calculan igual que una variación, usando el presupuesto como base.",
            en: "A **budget** is the plan for how much you expect to sell and spend. Comparing **actual** against budget shows **variances**: favorable (you sold more or spent less) or unfavorable (the opposite). They are computed like a change, using the budget as the base.",
          },
          {
            es: "Un **dato atípico** es un valor muy distinto al resto, como un gasto de papelería de $90,000 cuando cada mes ronda $3,000. Puede ser un error de captura o un evento real; nunca lo borres sin investigar.",
            en: "An **outlier** is a value very different from the rest, like a $90,000 stationery expense when it is usually around $3,000 a month. It may be a typing error or a real event; never delete it without investigating.",
          },
          {
            es: "Al final, **comunica** en pocas palabras: qué pasó, por qué y qué recomiendas. Mini ejemplo: \"La publicidad se pasó 12% del presupuesto por la campaña de diciembre; las ventas de ese mes crecieron 18%, así que la campaña sí pagó.\"",
            en: "Finally, **communicate** in a few words: what happened, why and what you recommend. Mini example: \"Advertising ran 12% over budget because of the December campaign; that month's sales grew 18%, so the campaign paid off.\"",
          },
        ],
        bullets: [
          { es: "Ingreso real mayor al presupuesto: desviación favorable.", en: "Actual revenue above budget: favorable variance." },
          { es: "Gasto real mayor al presupuesto: desviación desfavorable.", en: "Actual expense above budget: unfavorable variance." },
          { es: "Dato atípico: investígalo antes de corregirlo o quitarlo.", en: "Outlier: investigate it before fixing or removing it." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Crecimiento de ventas de una panadería", en: "A bakery's sales growth" },
        problem: {
          es: "Una panadería vendió $450,000 en 2025 y $513,000 en 2026 (cifras hipotéticas). ¿Cuál fue la variación porcentual?",
          en: "A bakery sold $450,000 in 2025 and $513,000 in 2026 (hypothetical figures). What was the percentage change?",
        },
        steps: [
          { es: "Diferencia: 513,000 − 450,000 = 63,000.", en: "Difference: 513,000 − 450,000 = 63,000." },
          { es: "Divide entre el valor anterior: 63,000 / 450,000 = 0.14.", en: "Divide by the previous value: 63,000 / 450,000 = 0.14." },
          { es: "Multiplica por 100: 0.14 × 100 = 14%.", en: "Multiply by 100: 0.14 × 100 = 14%." },
        ],
        result: {
          es: "Las ventas crecieron 14%. Si hubieras dividido entre 513,000, obtendrías 12.3%, un error común.",
          en: "Sales grew 14%. Had you divided by 513,000, you would get 12.3%, a common mistake.",
        },
      },
      {
        title: { es: "Análisis vertical de un estado de resultados", en: "Vertical analysis of an income statement" },
        problem: {
          es: "Una tienda tiene ventas por $800,000, costo de ventas por $520,000 y gastos de operación por $176,000. Expresa cada partida y la utilidad de operación como porcentaje de las ventas.",
          en: "A store has sales of $800,000, cost of sales of $520,000 and operating expenses of $176,000. Express each line and operating profit as a percentage of sales.",
        },
        steps: [
          { es: "Costo de ventas: 520,000 / 800,000 × 100 = 65%.", en: "Cost of sales: 520,000 / 800,000 × 100 = 65%." },
          { es: "Gastos de operación: 176,000 / 800,000 × 100 = 22%.", en: "Operating expenses: 176,000 / 800,000 × 100 = 22%." },
          { es: "Utilidad de operación: 800,000 − 520,000 − 176,000 = 104,000; 104,000 / 800,000 × 100 = 13%.", en: "Operating profit: 800,000 − 520,000 − 176,000 = 104,000; 104,000 / 800,000 × 100 = 13%." },
          { es: "Comprobación: 65% + 22% + 13% = 100%.", en: "Check: 65% + 22% + 13% = 100%." },
        ],
        result: {
          es: "De cada $100 vendidos, $65 son costo, $22 gastos y quedan $13 de utilidad de operación.",
          en: "Out of every $100 sold, $65 is cost, $22 expenses and $13 remains as operating profit.",
        },
      },
    ],
    keyPoints: [
      { es: "Empieza con una pregunta y limpia los datos antes de calcular.", en: "Start with a question and clean the data before calculating." },
      { es: "Variación % = (actual − anterior) / anterior × 100; la base es el valor anterior.", en: "Percentage change = (current − previous) / previous × 100; the base is the previous value." },
      { es: "Horizontal compara periodos; vertical expresa partidas como % de las ventas.", en: "Horizontal compares periods; vertical expresses lines as % of sales." },
      { es: "Real contra presupuesto revela desviaciones favorables o desfavorables.", en: "Actual vs budget reveals favorable or unfavorable variances." },
      { es: "Los datos atípicos se investigan, no se borran sin más.", en: "Outliers are investigated, not simply deleted." },
    ],
    exerciseIds: ['TEC-09-E1', 'TEC-09-E2', 'TEC-09-E3', 'TEC-09-E4', 'TEC-09-E5', 'TEC-09-E6'],
  },

  // ───────────────────────────── TEC-10 ─────────────────────────────
  {
    id: 'TEC-10',
    level: 2,
    topicIds: ['TEC.10'],
    title: { es: "Fundamentos de sistemas ERP", en: "ERP systems fundamentals" },
    summary: {
      es: "Un ERP es un sistema que integra en una sola base de datos las compras, ventas, inventarios, nómina y contabilidad de una empresa, para que cada operación se capture una vez y llegue a todas las áreas.",
      en: "An ERP is a system that integrates a company's purchasing, sales, inventory, payroll and accounting in a single database, so each transaction is entered once and reaches every area.",
    },
    minutes: 14,
    objectives: [
      { es: "Explicar qué es un ERP y qué problemas resuelve frente a hojas de cálculo y sistemas aislados.", en: "Explain what an ERP is and what problems it solves compared with spreadsheets and isolated systems." },
      { es: "Identificar los módulos principales y cómo fluye una operación entre ellos.", en: "Identify the main modules and how a transaction flows among them." },
      { es: "Comparar opciones de implementación (nube o local) y sus costos y riesgos.", en: "Compare implementation options (cloud or on-premise) and their costs and risks." },
    ],
    theory: [
      {
        heading: { es: "¿Qué es un ERP y por qué existe?", en: "What is an ERP and why does it exist?" },
        body: [
          {
            es: "**ERP** viene del inglés *Enterprise Resource Planning*, planeación de recursos empresariales. Es un sistema que reúne en **una sola base de datos** la información de casi todas las áreas: compras, almacén, ventas, cobranza, pagos, nómina y contabilidad.",
            en: "**ERP** stands for *Enterprise Resource Planning*. It is a system that brings together in **a single database** the information from almost every area: purchasing, warehouse, sales, collections, payments, payroll and accounting.",
          },
          {
            es: "Sin ERP, muchas empresas trabajan con **islas de información**: ventas en un Excel, almacén en otro y contabilidad en un tercer sistema. Cada área recaptura los mismos datos, se cometen errores y nadie sabe cuál número es el bueno.",
            en: "Without an ERP, many companies work with **information silos**: sales in one Excel file, the warehouse in another and accounting in a third system. Each area retypes the same data, errors creep in and nobody knows which number is right.",
          },
          {
            es: "Con un ERP, cada operación se **captura una vez** y actualiza todo lo relacionado en **tiempo real**. Mini ejemplo: al facturar 10 cajas de jabón, el sistema baja el inventario, crea la cuenta por cobrar del cliente y genera la póliza contable sin que nadie la vuelva a escribir.",
            en: "With an ERP, each transaction is **entered once** and updates everything related in **real time**. Mini example: when 10 boxes of soap are invoiced, the system reduces inventory, creates the customer's receivable and generates the accounting entry without anyone retyping it.",
          },
        ],
        bullets: [
          { es: "Una sola base de datos: un solo número oficial.", en: "Single database: one official number." },
          { es: "Captura única: menos errores y menos trabajo repetido.", en: "Single entry: fewer errors and less repeated work." },
          { es: "Información en tiempo real para decidir.", en: "Real-time information for decisions." },
          { es: "Controles: permisos, aprobaciones y registro de quién hizo qué.", en: "Controls: permissions, approvals and a log of who did what." },
        ],
      },
      {
        heading: { es: "Módulos y procesos integrados", en: "Modules and integrated processes" },
        body: [
          {
            es: "Un ERP se organiza en **módulos**, uno por área: **Compras** (requisiciones y órdenes de compra), **Inventarios** (entradas, salidas y existencias), **Ventas** (cotizaciones, pedidos y facturas), **Finanzas y contabilidad** (pólizas, cuentas por cobrar y por pagar, bancos), y **Nómina y recursos humanos** (empleados y sueldos). Algunos agregan producción o proyectos.",
            en: "An ERP is organized into **modules**, one per area: **Purchasing** (requisitions and purchase orders), **Inventory** (receipts, issues and stock), **Sales** (quotes, orders and invoices), **Finance and accounting** (entries, receivables and payables, bank), and **Payroll and HR** (employees and salaries). Some add manufacturing or projects.",
          },
          {
            es: "Los módulos están conectados en **procesos de punta a punta**. El ciclo **compra-pago**: orden de compra → recepción en almacén → factura del proveedor → pago. El ciclo **pedido-cobro**: pedido del cliente → surtido → factura → cobranza. Cada paso alimenta al siguiente.",
            en: "Modules are connected in **end-to-end processes**. The **procure-to-pay** cycle: purchase order → warehouse receipt → supplier invoice → payment. The **order-to-cash** cycle: customer order → fulfillment → invoice → collection. Each step feeds the next.",
          },
          {
            es: "La base de todo son los **datos maestros**: los catálogos de clientes, proveedores, productos y cuentas contables. Si un producto está dado de alta dos veces o con la unidad equivocada, el error se repite en cada operación.",
            en: "The foundation of everything is **master data**: the catalogs of customers, suppliers, products and ledger accounts. If a product is registered twice or with the wrong unit, the error repeats in every transaction.",
          },
          {
            es: "Mini ejemplo: el almacén registra la llegada de 50 sillas de una orden de compra. Al capturar la factura del proveedor, el ERP verifica que cantidad y precio coincidan con la orden y la recepción antes de programar el pago.",
            en: "Mini example: the warehouse records the arrival of 50 chairs from a purchase order. When the supplier's invoice is entered, the ERP checks that quantity and price match the order and the receipt before scheduling payment.",
          },
        ],
      },
      {
        heading: { es: "Elegir e implementar un ERP", en: "Choosing and implementing an ERP" },
        body: [
          {
            es: "Hay dos modelos principales. **En la nube**: el proveedor aloja el sistema en sus servidores, entras por internet y pagas una **suscripción** periódica. **Local** (en sitio): la empresa compra licencias, instala el sistema en **sus propios servidores** y se encarga del mantenimiento.",
            en: "There are two main models. **Cloud**: the vendor hosts the system on its servers, you access it over the internet and pay a periodic **subscription**. **On-premise**: the company buys licenses, installs the system on **its own servers** and handles maintenance.",
          },
          {
            es: "Para comparar opciones se usa el **costo total de propiedad**: no solo la licencia o la suscripción, también la implementación (configurar y migrar datos), la capacitación, el soporte y el equipo durante varios años.",
            en: "To compare options you use the **total cost of ownership**: not only the license or subscription, but also implementation (configuring and migrating data), training, support and hardware over several years.",
          },
          {
            es: "Implementar un ERP **no es solo instalar software**: hay que revisar procesos, limpiar datos maestros, definir **roles y permisos**, capacitar y probar antes de arrancar. Muchos proyectos fallan por mala planeación o por personas que no adoptan el sistema, no por la tecnología.",
            en: "Implementing an ERP **is not just installing software**: you must review processes, clean master data, define **roles and permissions**, train people and test before going live. Many projects fail because of poor planning or people who do not adopt the system, not because of the technology.",
          },
          {
            es: "Mini ejemplo: una suscripción de $5,000 al mes por 3 años suma 5,000 × 36 = $180,000; si la implementación cuesta $70,000, el costo total en esos 3 años es $250,000 (cifras hipotéticas).",
            en: "Mini example: a $5,000 monthly subscription for 3 years adds up to 5,000 × 36 = $180,000; if implementation costs $70,000, the total cost over those 3 years is $250,000 (hypothetical figures).",
          },
        ],
        formula: "Costo total de propiedad = Licencias o suscripción + Implementación + Capacitación + Soporte y equipo (en el mismo horizonte de años)",
      },
    ],
    examples: [
      {
        title: { es: "Una venta que viaja por todo el ERP", en: "A sale that travels through the whole ERP" },
        problem: {
          es: "Una distribuidora vende a crédito 20 cajas de aceite a $600 cada una (sin impuestos). ¿Qué actualiza el ERP con esa sola captura?",
          en: "A distributor sells 20 boxes of oil on credit at $600 each (before taxes). What does the ERP update with that single entry?",
        },
        steps: [
          { es: "Ventas: registra el pedido y emite la factura por 20 × 600 = $12,000 más impuestos.", en: "Sales: records the order and issues the invoice for 20 × 600 = $12,000 plus taxes." },
          { es: "Inventarios: descuenta 20 cajas de la existencia del almacén.", en: "Inventory: deducts 20 boxes from warehouse stock." },
          { es: "Cuentas por cobrar: crea el saldo del cliente con su fecha de vencimiento.", en: "Receivables: creates the customer's balance with its due date." },
          { es: "Contabilidad: genera automáticamente la póliza de la venta y la del costo.", en: "Accounting: automatically generates the sales entry and the cost entry." },
        ],
        result: {
          es: "Una captura actualiza cuatro áreas al mismo tiempo. Sin ERP, serían cuatro capturas distintas con cuatro oportunidades de error.",
          en: "One entry updates four areas at once. Without an ERP, it would be four separate entries with four chances for error.",
        },
      },
      {
        title: { es: "Comparar nube contra local a 3 años", en: "Comparing cloud vs on-premise over 3 years" },
        problem: {
          es: "Opción nube: suscripción de $6,000 al mes e implementación de $80,000. Opción local: licencias por $180,000, servidor por $60,000, mantenimiento de $2,500 al mes e implementación de $80,000. Compara el costo total a 3 años (cifras hipotéticas).",
          en: "Cloud option: $6,000 monthly subscription and $80,000 implementation. On-premise option: $180,000 in licenses, $60,000 server, $2,500 monthly maintenance and $80,000 implementation. Compare total cost over 3 years (hypothetical figures).",
        },
        steps: [
          { es: "Nube: 6,000 × 36 = 216,000; más 80,000 = $296,000.", en: "Cloud: 6,000 × 36 = 216,000; plus 80,000 = $296,000." },
          { es: "Local: mantenimiento 2,500 × 36 = 90,000.", en: "On-premise: maintenance 2,500 × 36 = 90,000." },
          { es: "Local total: 180,000 + 60,000 + 90,000 + 80,000 = $410,000.", en: "On-premise total: 180,000 + 60,000 + 90,000 + 80,000 = $410,000." },
          { es: "Diferencia: 410,000 − 296,000 = $114,000 a favor de la nube en este horizonte.", en: "Difference: 410,000 − 296,000 = $114,000 in favor of the cloud over this horizon." },
        ],
        result: {
          es: "A 3 años la nube cuesta menos en este caso. Con horizontes más largos el resultado puede cambiar, por eso se compara siempre el mismo número de años.",
          en: "Over 3 years the cloud costs less in this case. Over longer horizons the result may change, which is why you always compare the same number of years.",
        },
      },
    ],
    keyPoints: [
      { es: "Un ERP integra las áreas de la empresa en una sola base de datos.", en: "An ERP integrates a company's areas in a single database." },
      { es: "Cada operación se captura una vez y actualiza todo lo relacionado en tiempo real.", en: "Each transaction is entered once and updates everything related in real time." },
      { es: "Módulos típicos: compras, inventarios, ventas, finanzas y contabilidad, nómina.", en: "Typical modules: purchasing, inventory, sales, finance and accounting, payroll." },
      { es: "Los datos maestros limpios son la base de un ERP confiable.", en: "Clean master data is the foundation of a reliable ERP." },
      { es: "Compara opciones con el costo total de propiedad, no solo con la licencia.", en: "Compare options using total cost of ownership, not just the license." },
      { es: "Implementar es cambiar procesos y personas, no solo instalar software.", en: "Implementing means changing processes and people, not just installing software." },
    ],
    exerciseIds: ['TEC-10-E1', 'TEC-10-E2', 'TEC-10-E3', 'TEC-10-E4', 'TEC-10-E5', 'TEC-10-E6'],
  },

  // ───────────────────────────── TEC-11 ─────────────────────────────
  {
    id: 'TEC-11',
    level: 2,
    topicIds: ['TEC.11'],
    title: { es: "ERP aplicado a contabilidad, inventarios y finanzas", en: "ERP applied to accounting, inventory and finance" },
    summary: {
      es: "En un ERP las operaciones generan pólizas automáticas, el inventario se valúa y actualiza en cada movimiento, y las cuentas por cobrar, por pagar y bancos se controlan y concilian en el mismo sistema.",
      en: "In an ERP, transactions generate automatic journal entries, inventory is valued and updated with every movement, and receivables, payables and bank accounts are controlled and reconciled in the same system.",
    },
    minutes: 17,
    objectives: [
      { es: "Explicar cómo un ERP genera pólizas automáticas a partir de las operaciones.", en: "Explain how an ERP generates automatic journal entries from transactions." },
      { es: "Calcular el costo promedio y el costo de ventas con inventario perpetuo.", en: "Compute average cost and cost of goods sold under a perpetual inventory system." },
      { es: "Reconocer las funciones del ERP en cuentas por cobrar, por pagar y bancos.", en: "Recognize the ERP's functions in receivables, payables and bank." },
    ],
    theory: [
      {
        heading: { es: "Contabilidad en el ERP: pólizas automáticas", en: "Accounting in the ERP: automatic entries" },
        body: [
          {
            es: "Una **póliza** es el registro contable de una operación: qué cuentas se **cargan** (débito) y cuáles se **abonan** (crédito), siempre por el mismo total. En un ERP casi nadie escribe pólizas a mano: el sistema las **genera solo** cuando ocurre una compra, una venta o un pago.",
            en: "A **journal entry** (póliza) is the accounting record of a transaction: which accounts are **debited** and which are **credited**, always for the same total. In an ERP almost nobody writes entries by hand: the system **generates them automatically** when a purchase, sale or payment happens.",
          },
          {
            es: "Para lograrlo, al configurar el ERP se ligan las operaciones con el **catálogo de cuentas**: \"una venta a crédito carga Clientes y abona Ventas e IVA trasladado\". Esa configuración se llama **cuentas predeterminadas** o reglas contables. Si está mal, el error se repite en miles de pólizas.",
            en: "To do this, when the ERP is set up, transactions are linked to the **chart of accounts**: \"a credit sale debits Receivables and credits Sales and Output VAT\". That setup is called **default accounts** or posting rules. If it is wrong, the error repeats in thousands of entries.",
          },
          {
            es: "El ERP también ayuda en el **cierre de mes**: revisa que no haya documentos pendientes, bloquea periodos ya cerrados para que nadie los modifique y emite la balanza y los estados financieros al instante.",
            en: "The ERP also helps with the **month-end close**: it checks for pending documents, locks closed periods so no one can change them and produces the trial balance and financial statements instantly.",
          },
          {
            es: "Mini ejemplo: al registrar una compra de mercancía a crédito por $20,000 + IVA 16%, el ERP crea: cargo a Inventarios $20,000, cargo a IVA acreditable $3,200 y abono a Proveedores $23,200.",
            en: "Mini example: when a credit purchase of goods for $20,000 + 16% VAT is recorded, the ERP creates: debit Inventory $20,000, debit Input VAT $3,200 and credit Accounts payable $23,200.",
          },
        ],
      },
      {
        heading: { es: "Inventarios: existencias y costo promedio", en: "Inventory: stock and average cost" },
        body: [
          {
            es: "El ERP lleva un **inventario perpetuo**: actualiza la existencia en **cada entrada y salida**, como un kárdex automático. Así sabes en todo momento cuántas piezas hay y cuánto valen, sin esperar al conteo de fin de año.",
            en: "The ERP keeps a **perpetual inventory**: it updates stock with **every receipt and issue**, like an automatic stock card (kárdex). So you always know how many units there are and what they are worth, without waiting for the year-end count.",
          },
          {
            es: "Un método de valuación muy usado es el **costo promedio**: cada vez que entra mercancía, el sistema recalcula el costo por unidad dividiendo el valor total entre las unidades totales. Cuando sale mercancía por una venta, la registra a ese costo promedio como **costo de ventas**.",
            en: "A widely used valuation method is **average cost**: every time goods come in, the system recalculates the unit cost by dividing total value by total units. When goods go out for a sale, it records them at that average cost as **cost of goods sold**.",
          },
          {
            es: "Aun con ERP se hacen **conteos físicos** periódicos: las diferencias por merma, robo o error de captura se registran como ajuste. Mini ejemplo: tienes 100 piezas a $50 ($5,000) y compras 300 a $54 ($16,200). Promedio: 21,200 / 400 = $53 por pieza.",
            en: "Even with an ERP, periodic **physical counts** are done: differences from shrinkage, theft or entry errors are recorded as an adjustment. Mini example: you have 100 units at $50 ($5,000) and buy 300 at $54 ($16,200). Average: 21,200 / 400 = $53 per unit.",
          },
        ],
        formula: "Costo promedio = (Valor del inventario + Valor de la compra) / (Unidades en inventario + Unidades compradas)   ·   Costo de ventas = Unidades vendidas × Costo promedio",
      },
      {
        heading: { es: "Finanzas: cobrar, pagar y conciliar bancos", en: "Finance: collect, pay and reconcile bank accounts" },
        body: [
          {
            es: "En **cuentas por cobrar** el ERP lleva el saldo de cada cliente y el reporte de **antigüedad de saldos**: cuánto está al corriente y cuánto lleva 30, 60 o 90 días vencido. Con eso sabes a quién llamar primero.",
            en: "In **receivables**, the ERP tracks each customer's balance and the **aging report**: how much is current and how much is 30, 60 or 90 days past due. With that you know whom to call first.",
          },
          {
            es: "En **cuentas por pagar** registra las facturas de proveedores y su vencimiento para **programar pagos** sin pagar tarde ni antes de tiempo. En **bancos** importa el estado de cuenta y hace la **conciliación bancaria**: empareja cada movimiento del banco con un registro del sistema y deja las partidas sin pareja para que una persona las revise.",
            en: "In **payables**, it records supplier invoices and their due dates to **schedule payments** without paying late or too early. In **bank**, it imports the statement and performs the **bank reconciliation**: it matches each bank movement with a system record and leaves unmatched items for a person to review.",
          },
          {
            es: "Mini ejemplo: el banco muestra un depósito de $11,600 con referencia F-210. El ERP encuentra la factura F-210 por $11,600, la marca como cobrada y genera la póliza de cobro. Un depósito de $3,000 sin referencia queda pendiente para investigar.",
            en: "Mini example: the bank shows a $11,600 deposit with reference F-210. The ERP finds invoice F-210 for $11,600, marks it as collected and generates the collection entry. A $3,000 deposit with no reference stays pending for investigation.",
          },
        ],
        bullets: [
          { es: "Cuentas por cobrar: saldos de clientes y antigüedad.", en: "Receivables: customer balances and aging." },
          { es: "Cuentas por pagar: facturas de proveedores y programación de pagos.", en: "Payables: supplier invoices and payment scheduling." },
          { es: "Bancos: saldos, movimientos y conciliación.", en: "Bank: balances, movements and reconciliation." },
          { es: "Flujo de efectivo: lo que entrará y saldrá en las próximas semanas.", en: "Cash flow: what will come in and go out in the coming weeks." },
        ],
      },
    ],
    examples: [
      {
        title: { es: "Póliza automática de una compra", en: "Automatic entry for a purchase" },
        problem: {
          es: "Se captura en el ERP la factura de un proveedor por mercancía de $35,000 + IVA 16%, a crédito. ¿Qué póliza genera el sistema?",
          en: "A supplier invoice for $35,000 of goods + 16% VAT, on credit, is entered in the ERP. What entry does the system generate?",
        },
        steps: [
          { es: "IVA: 35,000 × 0.16 = 5,600. Total de la factura: 35,000 + 5,600 = 40,600.", en: "VAT: 35,000 × 0.16 = 5,600. Invoice total: 35,000 + 5,600 = 40,600." },
          { es: "Cargo a Inventarios por $35,000 (entra mercancía).", en: "Debit Inventory $35,000 (goods come in)." },
          { es: "Cargo a IVA acreditable por $5,600 (IVA pagado que se podrá acreditar).", en: "Debit Input VAT $5,600 (VAT paid that can be credited)." },
          { es: "Abono a Proveedores por $40,600 (lo que se debe).", en: "Credit Accounts payable $40,600 (what is owed)." },
        ],
        result: {
          es: "Cargos 35,000 + 5,600 = 40,600 = abonos. La póliza queda ligada a la factura y a la recepción del almacén.",
          en: "Debits 35,000 + 5,600 = 40,600 = credits. The entry stays linked to the invoice and to the warehouse receipt.",
        },
      },
      {
        title: { es: "Costo promedio y costo de ventas", en: "Average cost and cost of goods sold" },
        problem: {
          es: "Una ferretería tiene 100 martillos a $50 y compra 300 más a $54. Luego vende 150. ¿Cuál es el costo promedio, el costo de ventas y el valor del inventario final?",
          en: "A hardware store has 100 hammers at $50 and buys 300 more at $54. Then it sells 150. What are the average cost, the cost of goods sold and the ending inventory value?",
        },
        steps: [
          { es: "Valor total: 100 × 50 + 300 × 54 = 5,000 + 16,200 = 21,200.", en: "Total value: 100 × 50 + 300 × 54 = 5,000 + 16,200 = 21,200." },
          { es: "Costo promedio: 21,200 / 400 = $53.", en: "Average cost: 21,200 / 400 = $53." },
          { es: "Costo de ventas: 150 × 53 = $7,950.", en: "Cost of goods sold: 150 × 53 = $7,950." },
          { es: "Inventario final: 250 piezas × 53 = $13,250 (comprobación: 21,200 − 7,950 = 13,250).", en: "Ending inventory: 250 units × 53 = $13,250 (check: 21,200 − 7,950 = 13,250)." },
        ],
        result: {
          es: "Costo promedio $53, costo de ventas $7,950 e inventario final $13,250. El ERP hace este cálculo en cada movimiento.",
          en: "Average cost $53, cost of goods sold $7,950 and ending inventory $13,250. The ERP performs this calculation with every movement.",
        },
      },
    ],
    keyPoints: [
      { es: "El ERP genera pólizas automáticas según cuentas predeterminadas por tipo de operación.", en: "The ERP generates automatic entries based on default accounts per transaction type." },
      { es: "Una mala configuración contable repite el error en todas las pólizas.", en: "A bad accounting setup repeats the error in every entry." },
      { es: "El inventario perpetuo se actualiza en cada entrada y salida.", en: "Perpetual inventory updates with every receipt and issue." },
      { es: "Costo promedio = valor total / unidades totales; el costo de ventas usa ese promedio.", en: "Average cost = total value / total units; cost of goods sold uses that average." },
      { es: "El ERP controla clientes, proveedores y bancos, y concilia automáticamente lo que coincide.", en: "The ERP controls customers, suppliers and bank, and automatically reconciles what matches." },
    ],
    normativeNote: NOTE_ERP,
    exerciseIds: ['TEC-11-E1', 'TEC-11-E2', 'TEC-11-E3', 'TEC-11-E4', 'TEC-11-E5', 'TEC-11-E6'],
  },

  // ───────────────────────────── TEC-12 ─────────────────────────────
  {
    id: 'TEC-12',
    level: 2,
    topicIds: ['TEC.12'],
    title: { es: "Automatización de procesos contables", en: "Accounting process automation" },
    summary: {
      es: "Automatizar procesos contables es dejar que el sistema haga las tareas repetitivas y basadas en reglas, con controles y revisión humana, y medir el ahorro antes de invertir.",
      en: "Automating accounting processes means letting the system handle repetitive, rule-based tasks, with controls and human review, and measuring the savings before investing.",
    },
    minutes: 15,
    objectives: [
      { es: "Identificar qué tareas contables conviene automatizar y cuáles requieren juicio humano.", en: "Identify which accounting tasks are worth automating and which require human judgment." },
      { es: "Distinguir herramientas de automatización: reglas del ERP, macros y scripts, RPA e integraciones.", en: "Distinguish automation tools: ERP rules, macros and scripts, RPA and integrations." },
      { es: "Calcular el ahorro y el periodo de recuperación de una automatización.", en: "Compute the savings and payback period of an automation." },
      { es: "Diseñar controles para que un proceso automatizado sea confiable.", en: "Design controls so an automated process is reliable." },
    ],
    theory: [
      {
        heading: { es: "¿Qué conviene automatizar?", en: "What is worth automating?" },
        body: [
          {
            es: "**Automatizar** es que una herramienta haga sola una tarea que antes hacía una persona paso por paso. En contabilidad hay muchas tareas así: descargar facturas, capturar datos, conciliar el banco, preparar reportes que cada mes son iguales.",
            en: "**Automating** means a tool performs on its own a task a person used to do step by step. Accounting has many such tasks: downloading invoices, entering data, reconciling the bank, preparing reports that are the same every month.",
          },
          {
            es: "Una tarea es buena candidata si es **repetitiva**, de **alto volumen**, sigue **reglas claras** (si pasa A, haz B) y usa **datos digitales**. En México ayuda mucho que las facturas sean electrónicas (**CFDI**): su archivo XML trae RFC, importes, impuestos y un folio fiscal único (UUID) que un programa puede leer sin errores de captura.",
            en: "A task is a good candidate if it is **repetitive**, **high-volume**, follows **clear rules** (if A happens, do B) and uses **digital data**. In Mexico it helps a lot that invoices are electronic (**CFDI**): their XML file contains the tax ID, amounts, taxes and a unique tax folio (UUID) that a program can read without typing errors.",
          },
          {
            es: "No conviene automatizar lo que requiere **juicio**: decidir si una estimación es razonable, interpretar un contrato nuevo o resolver un caso que nunca había pasado. Mini ejemplo: registrar 800 facturas de gasolina al mes es automatizable; decidir si se da crédito a un cliente nuevo con información incompleta, no.",
            en: "It is not worth automating what requires **judgment**: deciding whether an estimate is reasonable, interpreting a new contract or resolving a case that has never happened before. Mini example: recording 800 fuel invoices a month can be automated; deciding whether to grant credit to a new customer with incomplete information cannot.",
          },
        ],
        bullets: [
          { es: "Repetitiva: se hace igual muchas veces.", en: "Repetitive: done the same way many times." },
          { es: "Alto volumen: cientos o miles de casos.", en: "High volume: hundreds or thousands of cases." },
          { es: "Basada en reglas: sin decisiones de criterio.", en: "Rule-based: no judgment calls." },
          { es: "Datos digitales y estructurados, como el XML del CFDI.", en: "Digital, structured data, like the CFDI's XML." },
        ],
      },
      {
        heading: { es: "Herramientas de automatización", en: "Automation tools" },
        body: [
          {
            es: "Hay varios niveles. Las **reglas del ERP** generan pólizas, recordatorios de cobro o conciliaciones según condiciones configuradas. Las **macros** (en hojas de cálculo) y los **scripts** (programas cortos, por ejemplo en Python) repiten pasos de transformación de datos.",
            en: "There are several levels. **ERP rules** generate entries, collection reminders or reconciliations based on configured conditions. **Macros** (in spreadsheets) and **scripts** (short programs, for example in Python) repeat data transformation steps.",
          },
          {
            es: "La **RPA** (automatización robótica de procesos) usa \"robots\" de software que imitan lo que haría una persona en la pantalla: abrir un portal, descargar un archivo, copiar datos a otro sistema. Sirve cuando los sistemas no se pueden conectar de otra forma, pero se rompe si cambia la pantalla.",
            en: "**RPA** (robotic process automation) uses software \"robots\" that mimic what a person would do on screen: open a portal, download a file, copy data into another system. It is useful when systems cannot be connected any other way, but it breaks if the screen changes.",
          },
          {
            es: "Las **integraciones por API** conectan sistemas directamente: una **API** es una puerta ordenada por la que un sistema le pide datos a otro, por ejemplo el banco al ERP. Suelen ser más estables que la RPA. Mini ejemplo: un script lee 500 XML de CFDI recibidos y arma un archivo con RFC, subtotal, IVA y total listo para cargarse al ERP.",
            en: "**API integrations** connect systems directly: an **API** is an orderly door through which one system requests data from another, for example the bank to the ERP. They are usually more stable than RPA. Mini example: a script reads 500 received CFDI XML files and builds a file with tax ID, subtotal, VAT and total ready to load into the ERP.",
          },
        ],
      },
      {
        heading: { es: "Controles y medición del beneficio", en: "Controls and measuring the benefit" },
        body: [
          {
            es: "Automatizar **no elimina la revisión**: un error en una regla se repite en miles de registros en segundos. Por eso se diseñan **controles**: validaciones (que el total cuadre, que el RFC exista en el catálogo), una **bandeja de excepciones** para lo que no cumple la regla, **bitácora** de lo que hizo el robot y revisión periódica por una persona.",
            en: "Automating **does not eliminate review**: an error in a rule repeats across thousands of records in seconds. That is why **controls** are designed: validations (the total balances, the tax ID exists in the catalog), an **exceptions queue** for whatever fails the rule, a **log** of what the robot did and periodic review by a person.",
          },
          {
            es: "Antes de invertir, mide el beneficio: las **horas ahorradas** por el costo de cada hora, menos lo que cuesta la herramienta. El **periodo de recuperación** (payback) dice en cuántos meses el ahorro paga la inversión inicial.",
            en: "Before investing, measure the benefit: **hours saved** times the cost of each hour, minus what the tool costs. The **payback period** tells you in how many months the savings pay back the initial investment.",
          },
          {
            es: "Mini ejemplo: una automatización ahorra 70 horas al mes; cada hora cuesta $150, así que ahorra $10,500. La herramienta cuesta $3,000 al mes: ahorro neto $7,500. Si la inversión inicial fue $45,000, se recupera en 45,000 / 7,500 = 6 meses (cifras hipotéticas).",
            en: "Mini example: an automation saves 70 hours a month; each hour costs $150, so it saves $10,500. The tool costs $3,000 a month: net savings $7,500. If the initial investment was $45,000, it pays back in 45,000 / 7,500 = 6 months (hypothetical figures).",
          },
        ],
        formula: "Ahorro neto mensual = Horas ahorradas × Costo por hora − Costo mensual de la herramienta   ·   Recuperación (meses) = Inversión inicial / Ahorro neto mensual",
      },
    ],
    examples: [
      {
        title: { es: "Horas ahorradas al registrar facturas", en: "Hours saved recording invoices" },
        problem: {
          es: "Un despacho registra 1,200 facturas al mes. A mano tarda 4 minutos por factura. Con un script que lee los XML tarda 0.5 minutos por factura, pero el 5% cae en excepciones que se revisan a mano en 4 minutos cada una. ¿Cuántas horas ahorra al mes?",
          en: "A firm records 1,200 invoices a month. By hand it takes 4 minutes per invoice. With a script that reads the XML files it takes 0.5 minutes per invoice, but 5% fall into exceptions that are reviewed by hand at 4 minutes each. How many hours does it save per month?",
        },
        steps: [
          { es: "Manual: 1,200 × 4 = 4,800 minutos = 80 horas.", en: "Manual: 1,200 × 4 = 4,800 minutes = 80 hours." },
          { es: "Automático: 1,200 × 0.5 = 600 minutos.", en: "Automated: 1,200 × 0.5 = 600 minutes." },
          { es: "Excepciones: 5% de 1,200 = 60 facturas × 4 = 240 minutos.", en: "Exceptions: 5% of 1,200 = 60 invoices × 4 = 240 minutes." },
          { es: "Nuevo total: 600 + 240 = 840 minutos = 14 horas. Ahorro: 80 − 14 = 66 horas.", en: "New total: 600 + 240 = 840 minutes = 14 hours. Savings: 80 − 14 = 66 hours." },
        ],
        result: {
          es: "Ahorra 66 horas al mes. Olvidar el tiempo de las excepciones exagera el beneficio.",
          en: "It saves 66 hours a month. Forgetting the exceptions' time overstates the benefit.",
        },
      },
      {
        title: { es: "Regla de conciliación automática", en: "Automatic reconciliation rule" },
        problem: {
          es: "La regla dice: \"Si el importe del depósito es igual al de una factura pendiente y la referencia contiene su folio, márcala como cobrada\". Llegan tres depósitos: $5,800 con referencia F-31 (existe F-31 por $5,800), $9,280 con referencia F-32 (F-32 es por $9,820) y $2,000 sin referencia. ¿Qué hace el sistema?",
          en: "The rule says: \"If the deposit amount equals a pending invoice's amount and the reference contains its number, mark it as collected\". Three deposits arrive: $5,800 with reference F-31 (F-31 exists for $5,800), $9,280 with reference F-32 (F-32 is for $9,820) and $2,000 with no reference. What does the system do?",
        },
        steps: [
          { es: "Depósito 1: importe y folio coinciden; F-31 se marca cobrada y se genera la póliza.", en: "Deposit 1: amount and number match; F-31 is marked collected and the entry is generated." },
          { es: "Depósito 2: el folio coincide pero el importe no (9,280 contra 9,820); va a excepciones.", en: "Deposit 2: the number matches but the amount does not (9,280 vs 9,820); it goes to exceptions." },
          { es: "Depósito 3: sin referencia no se cumple la regla; va a excepciones.", en: "Deposit 3: with no reference the rule is not met; it goes to exceptions." },
        ],
        result: {
          es: "Uno se concilia solo y dos quedan para revisión humana. La diferencia de $540 del depósito 2 puede ser un error de captura del cliente o un pago parcial: alguien debe investigarla.",
          en: "One reconciles automatically and two remain for human review. The $540 difference in deposit 2 may be a customer typing error or a partial payment: someone must investigate it.",
        },
      },
    ],
    keyPoints: [
      { es: "Automatiza lo repetitivo, de alto volumen, basado en reglas y con datos digitales.", en: "Automate what is repetitive, high-volume, rule-based and uses digital data." },
      { es: "El XML del CFDI permite leer facturas sin recapturarlas.", en: "The CFDI's XML lets you read invoices without retyping them." },
      { es: "Herramientas: reglas del ERP, macros y scripts, RPA e integraciones por API.", en: "Tools: ERP rules, macros and scripts, RPA and API integrations." },
      { es: "Todo proceso automatizado necesita validaciones, excepciones, bitácora y revisión humana.", en: "Every automated process needs validations, exceptions, a log and human review." },
      { es: "Ahorro neto = horas ahorradas × costo por hora − costo de la herramienta; recuperación = inversión / ahorro neto.", en: "Net savings = hours saved × cost per hour − tool cost; payback = investment / net savings." },
    ],
    normativeNote: NOTE_AUTOMATION,
    exerciseIds: ['TEC-12-E1', 'TEC-12-E2', 'TEC-12-E3', 'TEC-12-E4', 'TEC-12-E5', 'TEC-12-E6'],
  },
]

export const exercises: Exercise[] = [
  // ═════════════════════════ TEC-07 ═════════════════════════
  {
    id: 'TEC-07-E1',
    level: 2,
    module: 'TEC-07',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En una tabla de facturas, ¿qué columna funciona mejor como llave primaria?",
      en: "In an invoices table, which column works best as the primary key?",
    },
    options: [
      { id: 'TEC-07-E1-a', text: { es: "El nombre del cliente", en: "The customer's name" } },
      { id: 'TEC-07-E1-b', text: { es: "El folio de la factura, que nunca se repite", en: "The invoice number, which never repeats" } },
      { id: 'TEC-07-E1-c', text: { es: "La fecha de emisión", en: "The issue date" } },
      { id: 'TEC-07-E1-d', text: { es: "El importe total", en: "The total amount" } },
    ],
    correctOptionId: 'TEC-07-E1-b',
    explanation: {
      es: "La llave primaria debe identificar cada fila sin repetirse, y el folio de la factura es único. Un cliente tiene muchas facturas, en un día se emiten varias y dos facturas pueden tener el mismo importe. Error común: elegir el nombre del cliente, que se repite en cada factura que se le emite.",
      en: "The primary key must identify each row without repeating, and the invoice number is unique. A customer has many invoices, several are issued on one day and two invoices can have the same amount. Common mistake: choosing the customer's name, which repeats on every invoice issued to them.",
    },
    difficulty: 1,
    points: 10,
    competency: 'sql-databases',
  },
  {
    id: 'TEC-07-E2',
    level: 2,
    module: 'TEC-07',
    kind: 'classify',
    flavor: 'concept',
    context: {
      es: "Una papelería guarda su información en una base de datos relacional con las tablas Clientes y Facturas.",
      en: "A stationery store keeps its information in a relational database with the Clientes (Customers) and Facturas (Invoices) tables.",
    },
    prompt: {
      es: "Clasifica cada elemento de la base de datos de la papelería como tabla, columna o fila.",
      en: "Classify each element of the stationery store's database as a table, a column or a row.",
    },
    categories: [
      { id: 'TEC-07-E2-c1', label: { es: "Tabla", en: "Table" } },
      { id: 'TEC-07-E2-c2', label: { es: "Columna (dato)", en: "Column (field)" } },
      { id: 'TEC-07-E2-c3', label: { es: "Fila (registro)", en: "Row (record)" } },
    ],
    items: [
      { id: 'TEC-07-E2-i1', label: { es: "Facturas", en: "Invoices" }, correctCategoryId: 'TEC-07-E2-c1' },
      { id: 'TEC-07-E2-i2', label: { es: "fecha_emision", en: "issue_date" }, correctCategoryId: 'TEC-07-E2-c2' },
      { id: 'TEC-07-E2-i3', label: { es: "La factura A-102 de Abarrotes Lupita por $12,000", en: "Invoice A-102 for Abarrotes Lupita for $12,000" }, correctCategoryId: 'TEC-07-E2-c3' },
      { id: 'TEC-07-E2-i4', label: { es: "Clientes", en: "Customers" }, correctCategoryId: 'TEC-07-E2-c1' },
      { id: 'TEC-07-E2-i5', label: { es: "importe", en: "amount" }, correctCategoryId: 'TEC-07-E2-c2' },
      { id: 'TEC-07-E2-i6', label: { es: "El cliente número 15, Ferretería Sol, de Monterrey", en: "Customer number 15, Ferretería Sol, from Monterrey" }, correctCategoryId: 'TEC-07-E2-c3' },
    ],
    explanation: {
      es: "Las tablas son los temas (Facturas, Clientes); las columnas son los datos que tiene cada registro (fecha_emision, importe); las filas son casos concretos (una factura, un cliente). Error común: confundir una fila con una columna porque la fila contiene varios datos; recuerda que la fila es un caso completo y la columna es un solo tipo de dato para todos los casos.",
      en: "Tables are the subjects (Invoices, Customers); columns are the fields every record has (issue_date, amount); rows are concrete cases (one invoice, one customer). Common mistake: confusing a row with a column because the row contains several fields; remember a row is one complete case and a column is a single kind of field for every case.",
    },
    difficulty: 1,
    points: 10,
    competency: 'sql-databases',
  },
  {
    id: 'TEC-07-E3',
    level: 2,
    module: 'TEC-07',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "La tabla facturas tiene 5 filas: F1, Abarrotes Lupita, $12,000, 'pagada'; F2, Ferretería Sol, $8,500, 'pendiente'; F3, Abarrotes Lupita, $4,300, 'pagada'; F4, Papelería Norte, $15,200, 'pagada'; F5, Ferretería Sol, $6,000, 'pendiente'.",
      en: "The facturas table has 5 rows: F1, Abarrotes Lupita, $12,000, 'pagada' (paid); F2, Ferretería Sol, $8,500, 'pendiente' (pending); F3, Abarrotes Lupita, $4,300, 'pagada'; F4, Papelería Norte, $15,200, 'pagada'; F5, Ferretería Sol, $6,000, 'pendiente'.",
    },
    prompt: {
      es: "¿Qué número devuelve SELECT SUM(importe) FROM facturas WHERE estatus = 'pagada'? Responde en pesos.",
      en: "What number does SELECT SUM(importe) FROM facturas WHERE estatus = 'pagada' return? Answer in pesos.",
    },
    answer: 31500,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "WHERE deja solo las facturas pagadas: F1 ($12,000), F3 ($4,300) y F4 ($15,200). SUM las suma: 12,000 + 4,300 + 15,200 = $31,500. Error común: sumar todas las filas (46,000) olvidando que WHERE filtra antes de sumar, o sumar las pendientes (14,500).",
      en: "WHERE keeps only the paid invoices: F1 ($12,000), F3 ($4,300) and F4 ($15,200). SUM adds them: 12,000 + 4,300 + 15,200 = $31,500. Common mistake: adding every row (46,000) forgetting that WHERE filters before summing, or adding the pending ones (14,500).",
    },
    difficulty: 1,
    points: 10,
    competency: 'sql-databases',
  },
  {
    id: 'TEC-07-E4',
    level: 2,
    module: 'TEC-07',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Ejecutar una consulta SELECT sobre la tabla de clientes modifica los datos guardados en esa tabla.",
      en: "Running a SELECT query on the customers table changes the data stored in that table.",
    },
    answer: false,
    explanation: {
      es: "Falso. SELECT solo lee y muestra un resultado; los datos guardados quedan igual. Para modificar se usan otras instrucciones (como UPDATE o DELETE), que en las empresas suelen tener permisos restringidos. Error común: pensar que ordenar o filtrar con SELECT reordena o borra filas de la tabla original.",
      en: "False. SELECT only reads and shows a result; the stored data stays the same. Other statements (such as UPDATE or DELETE) are used to modify data, and companies usually restrict who can run them. Common mistake: thinking that sorting or filtering with SELECT reorders or deletes rows in the original table.",
    },
    difficulty: 1,
    points: 10,
    competency: 'sql-databases',
  },
  {
    id: 'TEC-07-E5',
    level: 2,
    module: 'TEC-07',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la consulta para obtener el total vendido a cada cliente, un renglón por cliente.",
      en: "Complete the query to get the total sold to each customer, one line per customer.",
    },
    template: 'SELECT cliente, {{b1}}(importe) FROM ventas {{b2}} cliente',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'TEC-07-E5-b1-a', text: { es: "COUNT", en: "COUNT" } },
          { id: 'TEC-07-E5-b1-b', text: { es: "SUM", en: "SUM" } },
          { id: 'TEC-07-E5-b1-c', text: { es: "MAX", en: "MAX" } },
        ],
        correctOptionId: 'TEC-07-E5-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'TEC-07-E5-b2-a', text: { es: "ORDER BY", en: "ORDER BY" } },
          { id: 'TEC-07-E5-b2-b', text: { es: "WHERE", en: "WHERE" } },
          { id: 'TEC-07-E5-b2-c', text: { es: "GROUP BY", en: "GROUP BY" } },
        ],
        correctOptionId: 'TEC-07-E5-b2-c',
      },
    ],
    explanation: {
      es: "El total en dinero se obtiene con SUM(importe), y GROUP BY cliente produce un renglón por cliente. COUNT contaría ventas en lugar de sumar pesos y MAX daría solo la venta más grande. Error común: usar ORDER BY, que ordena las filas pero no las agrupa ni las suma.",
      en: "The money total comes from SUM(importe), and GROUP BY cliente produces one line per customer. COUNT would count sales instead of adding pesos and MAX would give only the largest sale. Common mistake: using ORDER BY, which sorts rows but does not group or add them.",
    },
    difficulty: 1,
    points: 10,
    competency: 'sql-databases',
  },
  {
    id: 'TEC-07-E6',
    level: 2,
    module: 'TEC-07',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "La tabla ventas tiene estas filas (cliente, importe): Taller Reyes $2,000; Café Luna $3,500; Taller Reyes $4,750; Taller Reyes $1,250; Café Luna $900. Se ejecuta SELECT cliente, COUNT(*), SUM(importe) FROM ventas GROUP BY cliente.",
      en: "The ventas table has these rows (customer, amount): Taller Reyes $2,000; Café Luna $3,500; Taller Reyes $4,750; Taller Reyes $1,250; Café Luna $900. The query SELECT cliente, COUNT(*), SUM(importe) FROM ventas GROUP BY cliente is run.",
    },
    prompt: {
      es: "Completa los valores que aparecen en el resultado de la consulta agrupada.",
      en: "Fill in the values that appear in the result of the grouped query.",
    },
    fields: [
      { id: 'f1', label: { es: "COUNT(*) de Taller Reyes", en: "COUNT(*) for Taller Reyes" }, answer: 3, unit: 'none', tolerance: { abs: 0 } },
      { id: 'f2', label: { es: "SUM(importe) de Taller Reyes", en: "SUM(importe) for Taller Reyes" }, answer: 8000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "SUM(importe) de Café Luna", en: "SUM(importe) for Café Luna" }, answer: 4400, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "GROUP BY forma un grupo por cliente. Taller Reyes tiene 3 filas: 2,000 + 4,750 + 1,250 = $8,000. Café Luna tiene 2 filas: 3,500 + 900 = $4,400. Error común: confundir COUNT con SUM; COUNT(*) cuenta filas (3), no pesos.",
      en: "GROUP BY forms one group per customer. Taller Reyes has 3 rows: 2,000 + 4,750 + 1,250 = $8,000. Café Luna has 2 rows: 3,500 + 900 = $4,400. Common mistake: confusing COUNT with SUM; COUNT(*) counts rows (3), not pesos.",
    },
    difficulty: 2,
    points: 15,
    competency: 'sql-databases',
  },

  // ═════════════════════════ TEC-08 ═════════════════════════
  {
    id: 'TEC-08-E1',
    level: 2,
    module: 'TEC-08',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "En Python escribes monto = \"1500\" (con comillas). ¿De qué tipo es el valor guardado en monto?",
      en: "In Python you write monto = \"1500\" (with quotes). What type is the value stored in monto?",
    },
    options: [
      { id: 'TEC-08-E1-a', text: { es: "int (número entero)", en: "int (integer)" } },
      { id: 'TEC-08-E1-b', text: { es: "float (número con decimales)", en: "float (decimal number)" } },
      { id: 'TEC-08-E1-c', text: { es: "str (texto)", en: "str (text)" } },
      { id: 'TEC-08-E1-d', text: { es: "bool (verdadero o falso)", en: "bool (true or false)" } },
    ],
    correctOptionId: 'TEC-08-E1-c',
    explanation: {
      es: "Todo lo que va entre comillas es texto (str), aunque parezca número. Para hacer cuentas habría que convertirlo, por ejemplo con int(monto). Error común: elegir int porque se ven dígitos; si intentas monto + 300 Python marca error, porque no suma texto con números.",
      en: "Anything in quotes is text (str), even if it looks like a number. To do arithmetic you would need to convert it, for example with int(monto). Common mistake: choosing int because you see digits; if you try monto + 300 Python raises an error, because it does not add text and numbers.",
    },
    difficulty: 1,
    points: 10,
    competency: 'python-basics',
  },
  {
    id: 'TEC-08-E2',
    level: 2,
    module: 'TEC-08',
    kind: 'numeric',
    flavor: 'interpret',
    context: {
      es: "Un programa tiene precios = [120, 80, 200] y empieza con total = 0. Luego, para cada p en precios, hace total = total + p * 2. Al final ejecuta print(total).",
      en: "A program has precios = [120, 80, 200] and starts with total = 0. Then, for each p in precios, it does total = total + p * 2. At the end it runs print(total).",
    },
    prompt: {
      es: "¿Qué número muestra print(total) al terminar el ciclo de precios duplicados?",
      en: "What number does print(total) show when the doubled-prices loop finishes?",
    },
    answer: 800,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "El ciclo da tres vueltas: 0 + 120 × 2 = 240; 240 + 80 × 2 = 400; 400 + 200 × 2 = 800. La multiplicación se hace antes que la suma. Error común: responder 400 (sumar los precios sin duplicar) o pensar que total vuelve a 0 en cada vuelta; total = 0 está fuera del ciclo y solo se ejecuta una vez.",
      en: "The loop runs three times: 0 + 120 × 2 = 240; 240 + 80 × 2 = 400; 400 + 200 × 2 = 800. Multiplication happens before addition. Common mistake: answering 400 (adding prices without doubling) or thinking total resets to 0 each pass; total = 0 is outside the loop and runs only once.",
    },
    difficulty: 1,
    points: 10,
    competency: 'python-basics',
  },
  {
    id: 'TEC-08-E3',
    level: 2,
    module: 'TEC-08',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "En Python, la sangría (los espacios al inicio de la línea) indica qué instrucciones quedan dentro de un for o de un if.",
      en: "In Python, indentation (the spaces at the start of a line) shows which instructions are inside a for or an if.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Python usa la sangría para marcar bloques: las líneas con sangría debajo de un for o un if forman parte de él. Error común: creer que la sangría es solo para que el código se vea ordenado; si la quitas, el programa marca error o ejecuta instrucciones fuera del bloque.",
      en: "True. Python uses indentation to mark blocks: indented lines below a for or an if belong to it. Common mistake: believing indentation is only to make code look tidy; if you remove it, the program raises an error or runs instructions outside the block.",
    },
    difficulty: 1,
    points: 10,
    competency: 'python-basics',
  },
  {
    id: 'TEC-08-E4',
    level: 2,
    module: 'TEC-08',
    kind: 'formula',
    flavor: 'concept',
    prompt: {
      es: "Completa la función de Python que devuelve el IVA de un subtotal con tasa de 16%.",
      en: "Complete the Python function that returns the VAT on a subtotal at a 16% rate.",
    },
    template: 'def iva(subtotal): {{b1}} subtotal {{b2}} 0.16',
    blanks: [
      {
        id: 'b1',
        options: [
          { id: 'TEC-08-E4-b1-a', text: { es: "print", en: "print" } },
          { id: 'TEC-08-E4-b1-b', text: { es: "return", en: "return" } },
          { id: 'TEC-08-E4-b1-c', text: { es: "for", en: "for" } },
        ],
        correctOptionId: 'TEC-08-E4-b1-b',
      },
      {
        id: 'b2',
        options: [
          { id: 'TEC-08-E4-b2-a', text: { es: "*", en: "*" } },
          { id: 'TEC-08-E4-b2-b', text: { es: "+", en: "+" } },
          { id: 'TEC-08-E4-b2-c', text: { es: "==", en: "==" } },
        ],
        correctOptionId: 'TEC-08-E4-b2-a',
      },
    ],
    explanation: {
      es: "return entrega el resultado para que otra parte del programa lo use, y el IVA es subtotal × 0.16. Con print solo se vería en pantalla y la función devolvería None; con + sumarías 0.16 pesos; con == compararías en lugar de calcular. Error común: confundir print con return.",
      en: "return hands back the result so another part of the program can use it, and VAT is subtotal × 0.16. With print it would only appear on screen and the function would return None; with + you would add 0.16 pesos; with == you would compare instead of compute. Common mistake: confusing print with return.",
    },
    difficulty: 1,
    points: 10,
    competency: 'python-basics',
  },
  {
    id: 'TEC-08-E5',
    level: 2,
    module: 'TEC-08',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Selecciona todas las expresiones de Python que dan como resultado True.",
      en: "Select all the Python expressions that evaluate to True.",
    },
    options: [
      { id: 'TEC-08-E5-a', text: { es: "5 > 3", en: "5 > 3" } },
      { id: 'TEC-08-E5-b', text: { es: "\"abc\" == \"ABC\"", en: "\"abc\" == \"ABC\"" } },
      { id: 'TEC-08-E5-c', text: { es: "2 + 2 == 4", en: "2 + 2 == 4" } },
      { id: 'TEC-08-E5-d', text: { es: "10 < 7", en: "10 < 7" } },
    ],
    correctOptionIds: ['TEC-08-E5-a', 'TEC-08-E5-c'],
    explanation: {
      es: "5 > 3 es cierto y 2 + 2 == 4 también (primero se suma y luego se compara). \"abc\" == \"ABC\" es False porque Python distingue mayúsculas de minúsculas, y 10 < 7 es False. Error común: creer que el texto se compara sin importar mayúsculas.",
      en: "5 > 3 is true and so is 2 + 2 == 4 (the addition happens first, then the comparison). \"abc\" == \"ABC\" is False because Python is case-sensitive, and 10 < 7 is False. Common mistake: assuming text is compared regardless of upper or lower case.",
    },
    difficulty: 1,
    points: 10,
    competency: 'python-basics',
  },
  {
    id: 'TEC-08-E6',
    level: 2,
    module: 'TEC-08',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un analista revisa saldos de clientes con este programa: saldos = [1500, -200, 3000, -50, 0]; negativos = 0; para cada s en saldos, si s < 0, entonces negativos = negativos + 1. Al final, print(negativos).",
      en: "An analyst reviews customer balances with this program: saldos = [1500, -200, 3000, -50, 0]; negativos = 0; for each s in saldos, if s < 0, then negativos = negativos + 1. At the end, print(negativos).",
    },
    prompt: {
      es: "¿Cuántos saldos negativos cuenta el programa del analista?",
      en: "How many negative balances does the analyst's program count?",
    },
    answer: 2,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0 },
    explanation: {
      es: "La condición s < 0 solo se cumple con -200 y -50, así que negativos termina en 2. El 0 no es menor que 0, por eso no cuenta. Error común: contar el 0 como negativo (respuesta 3) o sumar los saldos negativos (-250) en lugar de contarlos.",
      en: "The condition s < 0 holds only for -200 and -50, so negativos ends at 2. Zero is not less than 0, so it does not count. Common mistake: counting 0 as negative (answer 3) or adding the negative balances (-250) instead of counting them.",
    },
    difficulty: 2,
    points: 15,
    competency: 'python-basics',
  },

  // ═════════════════════════ TEC-09 ═════════════════════════
  {
    id: 'TEC-09-E1',
    level: 2,
    module: 'TEC-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una distribuidora de abarrotes vendió $840,000 en 2025 y $966,000 en 2026 (cifras hipotéticas).",
      en: "A grocery distributor sold $840,000 in 2025 and $966,000 in 2026 (hypothetical figures).",
    },
    prompt: {
      es: "¿Cuál fue la variación porcentual de las ventas de la distribuidora de 2025 a 2026? Responde en %.",
      en: "What was the distributor's percentage change in sales from 2025 to 2026? Answer in %.",
    },
    answer: 15,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "(966,000 − 840,000) / 840,000 × 100 = 126,000 / 840,000 × 100 = 15%. Se divide entre el valor anterior porque es la base de comparación. Error común: dividir entre 966,000 y obtener 13.0%.",
      en: "(966,000 − 840,000) / 840,000 × 100 = 126,000 / 840,000 × 100 = 15%. You divide by the previous value because it is the comparison base. Common mistake: dividing by 966,000 and getting 13.0%.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-data-analysis',
  },
  {
    id: 'TEC-09-E2',
    level: 2,
    module: 'TEC-09',
    kind: 'fields',
    flavor: 'statement',
    context: {
      es: "Estado de resultados de un restaurante (cifras hipotéticas): ventas $500,000; costo de ventas $300,000; gastos de operación $125,000.",
      en: "A restaurant's income statement (hypothetical figures): sales $500,000; cost of sales $300,000; operating expenses $125,000.",
    },
    prompt: {
      es: "Haz el análisis vertical del restaurante: expresa cada concepto como porcentaje de las ventas.",
      en: "Perform the restaurant's vertical analysis: express each line as a percentage of sales.",
    },
    fields: [
      { id: 'f1', label: { es: "Costo de ventas (% de ventas)", en: "Cost of sales (% of sales)" }, answer: 60, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f2', label: { es: "Gastos de operación (% de ventas)", en: "Operating expenses (% of sales)" }, answer: 25, unit: '%', tolerance: { abs: 0.05 } },
      { id: 'f3', label: { es: "Utilidad de operación (% de ventas)", en: "Operating profit (% of sales)" }, answer: 15, unit: '%', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Costo: 300,000 / 500,000 × 100 = 60%. Gastos: 125,000 / 500,000 × 100 = 25%. Utilidad de operación: 500,000 − 300,000 − 125,000 = 75,000; 75,000 / 500,000 × 100 = 15%. Comprobación: 60 + 25 + 15 = 100. Error común: dividir los gastos entre la utilidad bruta en lugar de entre las ventas.",
      en: "Cost: 300,000 / 500,000 × 100 = 60%. Expenses: 125,000 / 500,000 × 100 = 25%. Operating profit: 500,000 − 300,000 − 125,000 = 75,000; 75,000 / 500,000 × 100 = 15%. Check: 60 + 25 + 15 = 100. Common mistake: dividing expenses by gross profit instead of by sales.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-data-analysis',
  },
  {
    id: 'TEC-09-E3',
    level: 2,
    module: 'TEC-09',
    kind: 'mcq',
    flavor: 'interpret',
    context: {
      es: "Al revisar el reporte de ventas de marzo descargado del sistema, notas que la factura C-450 por $38,000 aparece dos veces con el mismo folio, fecha y cliente.",
      en: "While reviewing the March sales report downloaded from the system, you notice that invoice C-450 for $38,000 appears twice with the same number, date and customer.",
    },
    prompt: {
      es: "¿Qué problema de calidad de datos tiene el reporte de marzo y qué efecto causa?",
      en: "What data quality problem does the March report have and what effect does it cause?",
    },
    options: [
      { id: 'TEC-09-E3-a', text: { es: "Un dato atípico real; las ventas de marzo están bien", en: "A real outlier; March sales are correct" } },
      { id: 'TEC-09-E3-b', text: { es: "Un registro duplicado; las ventas del mes salen $38,000 más altas", en: "A duplicate record; the month's sales come out $38,000 too high" } },
      { id: 'TEC-09-E3-c', text: { es: "Un valor vacío; las ventas salen $38,000 más bajas", en: "A missing value; sales come out $38,000 too low" } },
      { id: 'TEC-09-E3-d', text: { es: "Un formato de fecha incorrecto; no afecta el total", en: "A wrong date format; it does not affect the total" } },
    ],
    correctOptionId: 'TEC-09-E3-b',
    explanation: {
      es: "El mismo folio, fecha y cliente dos veces es un duplicado: la factura se cuenta doble e infla las ventas en $38,000. Se debe limpiar antes de analizar. Error común: tratarlo como dato atípico y dejarlo; un atípico es un valor distinto, no una copia del mismo registro.",
      en: "The same number, date and customer twice is a duplicate: the invoice is counted twice and inflates sales by $38,000. It must be cleaned before analysis. Common mistake: treating it as an outlier and leaving it; an outlier is an unusual value, not a copy of the same record.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-data-analysis',
  },
  {
    id: 'TEC-09-E4',
    level: 2,
    module: 'TEC-09',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada pregunta según el tipo de comparación financiera que la responde.",
      en: "Classify each question by the type of financial comparison that answers it.",
    },
    categories: [
      { id: 'TEC-09-E4-c1', label: { es: "Análisis horizontal (entre periodos)", en: "Horizontal analysis (across periods)" } },
      { id: 'TEC-09-E4-c2', label: { es: "Análisis vertical (proporción dentro del periodo)", en: "Vertical analysis (proportion within the period)" } },
      { id: 'TEC-09-E4-c3', label: { es: "Real contra presupuesto", en: "Actual vs budget" } },
    ],
    items: [
      { id: 'TEC-09-E4-i1', label: { es: "¿Cuánto crecieron las ventas de este año contra el año pasado?", en: "How much did this year's sales grow compared with last year?" }, correctCategoryId: 'TEC-09-E4-c1' },
      { id: 'TEC-09-E4-i2', label: { es: "¿Qué porcentaje de las ventas de junio se fue en sueldos?", en: "What percentage of June's sales went to salaries?" }, correctCategoryId: 'TEC-09-E4-c2' },
      { id: 'TEC-09-E4-i3', label: { es: "¿Gastamos más o menos en publicidad de lo que planeamos?", en: "Did we spend more or less on advertising than planned?" }, correctCategoryId: 'TEC-09-E4-c3' },
      { id: 'TEC-09-E4-i4', label: { es: "¿Cómo cambió el costo de ventas del primer al segundo trimestre?", en: "How did cost of sales change from the first to the second quarter?" }, correctCategoryId: 'TEC-09-E4-c1' },
      { id: 'TEC-09-E4-i5', label: { es: "¿Qué parte de cada peso vendido este mes quedó como utilidad?", en: "What part of every peso sold this month was left as profit?" }, correctCategoryId: 'TEC-09-E4-c2' },
      { id: 'TEC-09-E4-i6', label: { es: "¿Alcanzamos la meta de ventas fijada en enero?", en: "Did we reach the sales target set in January?" }, correctCategoryId: 'TEC-09-E4-c3' },
    ],
    explanation: {
      es: "Horizontal compara la misma cuenta en periodos distintos (año contra año, trimestre contra trimestre). Vertical mide proporciones dentro de un solo periodo, normalmente contra las ventas. Real contra presupuesto compara lo ocurrido con lo planeado o la meta. Error común: confundir \"meta\" con el año anterior; la meta es parte del presupuesto, no un periodo pasado.",
      en: "Horizontal compares the same account across different periods (year over year, quarter over quarter). Vertical measures proportions within a single period, usually against sales. Actual vs budget compares what happened with the plan or target. Common mistake: confusing the \"target\" with the previous year; the target belongs to the budget, not to a past period.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-data-analysis',
  },
  {
    id: 'TEC-09-E5',
    level: 2,
    module: 'TEC-09',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si las ventas de un negocio suben 20% un mes y al mes siguiente bajan 20%, terminan exactamente en el mismo nivel en que empezaron.",
      en: "If a business's sales rise 20% one month and fall 20% the next month, they end exactly at the same level where they started.",
    },
    answer: false,
    explanation: {
      es: "Falso. Cada porcentaje se calcula sobre una base distinta: de 100 sube 20% a 120, y 20% de 120 son 24, así que baja a 96, un 4% menos que al inicio. Error común: sumar y restar porcentajes como si tuvieran la misma base.",
      en: "False. Each percentage is computed on a different base: from 100 it rises 20% to 120, and 20% of 120 is 24, so it falls to 96, 4% below the start. Common mistake: adding and subtracting percentages as if they had the same base.",
    },
    difficulty: 1,
    points: 10,
    competency: 'financial-data-analysis',
  },
  {
    id: 'TEC-09-E6',
    level: 2,
    module: 'TEC-09',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una cadena de farmacias presupuestó $80,000 de publicidad para el trimestre y gastó realmente $94,000 (cifras hipotéticas).",
      en: "A pharmacy chain budgeted $80,000 for advertising in the quarter and actually spent $94,000 (hypothetical figures).",
    },
    prompt: {
      es: "¿De qué porcentaje fue la desviación del gasto real de publicidad respecto del presupuesto? Responde en %.",
      en: "What was the percentage variance of actual advertising spending versus budget? Answer in %.",
    },
    answer: 17.5,
    unit: '%',
    decimals: 1,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "(94,000 − 80,000) / 80,000 × 100 = 14,000 / 80,000 × 100 = 17.5%. Como es un gasto por encima de lo planeado, la desviación es desfavorable y conviene investigar si generó más ventas. Error común: dividir entre el gasto real (94,000) y obtener 14.9%; la base es el presupuesto.",
      en: "(94,000 − 80,000) / 80,000 × 100 = 14,000 / 80,000 × 100 = 17.5%. Since it is spending above plan, the variance is unfavorable and it is worth checking whether it generated more sales. Common mistake: dividing by actual spending (94,000) and getting 14.9%; the base is the budget.",
    },
    difficulty: 2,
    points: 15,
    competency: 'financial-data-analysis',
  },

  // ═════════════════════════ TEC-10 ═════════════════════════
  {
    id: 'TEC-10-E1',
    level: 2,
    module: 'TEC-10',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Cuál es la principal ventaja de un ERP frente a llevar cada área en hojas de cálculo separadas?",
      en: "What is the main advantage of an ERP over running each area in separate spreadsheets?",
    },
    options: [
      { id: 'TEC-10-E1-a', text: { es: "Que elimina la necesidad de tener contador", en: "It removes the need for an accountant" } },
      { id: 'TEC-10-E1-b', text: { es: "Que integra todas las áreas en una sola base de datos y cada operación se captura una vez", en: "It integrates every area in a single database and each transaction is entered once" } },
      { id: 'TEC-10-E1-c', text: { es: "Que siempre es más barato que una hoja de cálculo", en: "It is always cheaper than a spreadsheet" } },
      { id: 'TEC-10-E1-d', text: { es: "Que solo lo usa el área de contabilidad", en: "Only the accounting department uses it" } },
    ],
    correctOptionId: 'TEC-10-E1-b',
    explanation: {
      es: "El valor de un ERP es la integración: una sola base de datos donde cada operación se captura una vez y actualiza a todas las áreas en tiempo real. No elimina al contador (alguien debe configurar, revisar e interpretar), no siempre es más barato y lo usan muchas áreas. Error común: pensar que un ERP es solo un sistema contable.",
      en: "An ERP's value is integration: a single database where each transaction is entered once and updates every area in real time. It does not eliminate the accountant (someone must configure, review and interpret), it is not always cheaper and many areas use it. Common mistake: thinking an ERP is just an accounting system.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-fundamentals',
  },
  {
    id: 'TEC-10-E2',
    level: 2,
    module: 'TEC-10',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada operación según el módulo del ERP donde se registra.",
      en: "Classify each transaction by the ERP module where it is recorded.",
    },
    categories: [
      { id: 'TEC-10-E2-c1', label: { es: "Compras", en: "Purchasing" } },
      { id: 'TEC-10-E2-c2', label: { es: "Inventarios", en: "Inventory" } },
      { id: 'TEC-10-E2-c3', label: { es: "Ventas", en: "Sales" } },
      { id: 'TEC-10-E2-c4', label: { es: "Nómina y recursos humanos", en: "Payroll and HR" } },
    ],
    items: [
      { id: 'TEC-10-E2-i1', label: { es: "Emitir una orden de compra a un proveedor de cajas", en: "Issue a purchase order to a box supplier" }, correctCategoryId: 'TEC-10-E2-c1' },
      { id: 'TEC-10-E2-i2', label: { es: "Registrar la llegada de mercancía al almacén", en: "Record goods arriving at the warehouse" }, correctCategoryId: 'TEC-10-E2-c2' },
      { id: 'TEC-10-E2-i3', label: { es: "Capturar el pedido de un cliente", en: "Enter a customer order" }, correctCategoryId: 'TEC-10-E2-c3' },
      { id: 'TEC-10-E2-i4', label: { es: "Dar de alta a un nuevo empleado", en: "Register a new employee" }, correctCategoryId: 'TEC-10-E2-c4' },
      { id: 'TEC-10-E2-i5', label: { es: "Ajustar existencias después de un conteo físico", en: "Adjust stock after a physical count" }, correctCategoryId: 'TEC-10-E2-c2' },
      { id: 'TEC-10-E2-i6', label: { es: "Calcular el sueldo de la quincena", en: "Compute the biweekly pay" }, correctCategoryId: 'TEC-10-E2-c4' },
    ],
    explanation: {
      es: "Compras maneja órdenes a proveedores; Inventarios, entradas, salidas y ajustes de existencias; Ventas, cotizaciones, pedidos y facturas a clientes; Nómina y RH, empleados y sueldos. Error común: poner la llegada de mercancía en Compras; la orden nace en Compras, pero la recepción física la registra Inventarios.",
      en: "Purchasing handles orders to suppliers; Inventory, receipts, issues and stock adjustments; Sales, quotes, orders and customer invoices; Payroll and HR, employees and salaries. Common mistake: placing the goods arrival in Purchasing; the order starts in Purchasing, but the physical receipt is recorded by Inventory.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-fundamentals',
  },
  {
    id: 'TEC-10-E3',
    level: 2,
    module: 'TEC-10',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Implementar un ERP consiste básicamente en instalar el software; los procesos, los datos maestros y la capacitación se arreglan solos después.",
      en: "Implementing an ERP basically consists of installing the software; processes, master data and training sort themselves out later.",
    },
    answer: false,
    explanation: {
      es: "Falso. Implementar implica revisar procesos, limpiar y cargar datos maestros, definir roles y permisos, capacitar y probar antes de arrancar. Si los catálogos llegan sucios, el ERP repite el error en cada operación. Error común: ver el ERP como un programa que se instala y listo; muchos proyectos fallan por personas y procesos, no por la tecnología.",
      en: "False. Implementing involves reviewing processes, cleaning and loading master data, defining roles and permissions, training and testing before going live. If catalogs arrive dirty, the ERP repeats the error in every transaction. Common mistake: seeing an ERP as a program you install and you are done; many projects fail because of people and processes, not technology.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-fundamentals',
  },
  {
    id: 'TEC-10-E4',
    level: 2,
    module: 'TEC-10',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Una empresa evalúa un ERP en la nube: suscripción de $4,500 al mes, implementación de $60,000 (una sola vez) y capacitación de $15,000 (una sola vez). Cifras hipotéticas.",
      en: "A company is evaluating a cloud ERP: a $4,500 monthly subscription, $60,000 implementation (one time) and $15,000 training (one time). Hypothetical figures.",
    },
    prompt: {
      es: "¿Cuál es el costo total de propiedad del ERP en la nube a 3 años? Responde en pesos.",
      en: "What is the cloud ERP's total cost of ownership over 3 years? Answer in pesos.",
    },
    answer: 237000,
    unit: 'MXN',
    decimals: 0,
    tolerance: { abs: 0.5 },
    explanation: {
      es: "Suscripción: 4,500 × 36 meses = 162,000. Más implementación y capacitación: 162,000 + 60,000 + 15,000 = $237,000. Error común: multiplicar la suscripción por 3 (como si fuera anual) y obtener 88,500, u olvidar los costos únicos.",
      en: "Subscription: 4,500 × 36 months = 162,000. Plus implementation and training: 162,000 + 60,000 + 15,000 = $237,000. Common mistake: multiplying the subscription by 3 (as if it were annual) and getting 88,500, or forgetting the one-time costs.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-fundamentals',
  },
  {
    id: 'TEC-10-E5',
    level: 2,
    module: 'TEC-10',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Selecciona las características típicas de un ERP en la nube.",
      en: "Select the typical features of a cloud ERP.",
    },
    options: [
      { id: 'TEC-10-E5-a', text: { es: "Se paga con una suscripción periódica", en: "It is paid through a periodic subscription" } },
      { id: 'TEC-10-E5-b', text: { es: "Se accede por internet", en: "It is accessed over the internet" } },
      { id: 'TEC-10-E5-c', text: { es: "La empresa debe comprar y mantener sus propios servidores", en: "The company must buy and maintain its own servers" } },
      { id: 'TEC-10-E5-d', text: { es: "El proveedor se encarga de la infraestructura y sus actualizaciones", en: "The vendor takes care of the infrastructure and its updates" } },
    ],
    correctOptionIds: ['TEC-10-E5-a', 'TEC-10-E5-b', 'TEC-10-E5-d'],
    explanation: {
      es: "En la nube el proveedor aloja el sistema en sus servidores, entras por internet y pagas una suscripción; él mantiene y actualiza la infraestructura. Comprar y mantener servidores propios es típico del modelo local. Error común: pensar que en la nube la empresa ya no tiene responsabilidades; sigue siendo dueña de sus datos, sus permisos y sus procesos.",
      en: "In the cloud the vendor hosts the system on its servers, you access it over the internet and pay a subscription; the vendor maintains and updates the infrastructure. Buying and maintaining your own servers is typical of the on-premise model. Common mistake: thinking that in the cloud the company has no responsibilities left; it still owns its data, permissions and processes.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-fundamentals',
  },
  {
    id: 'TEC-10-E6',
    level: 2,
    module: 'TEC-10',
    kind: 'mcq',
    flavor: 'case',
    context: {
      es: "En una empresa recién migrada al ERP, la misma persona puede dar de alta proveedores nuevos, capturar sus facturas y autorizar los pagos.",
      en: "In a company that just migrated to the ERP, the same person can register new suppliers, enter their invoices and authorize payments.",
    },
    prompt: {
      es: "¿Cuál es el riesgo principal de esta configuración de accesos y cómo se corrige en el ERP?",
      en: "What is the main risk of this access setup and how is it fixed in the ERP?",
    },
    options: [
      { id: 'TEC-10-E6-a', text: { es: "No hay riesgo, porque el ERP registra todo automáticamente", en: "There is no risk, because the ERP records everything automatically" } },
      { id: 'TEC-10-E6-b', text: { es: "Que el sistema se vuelva lento; se corrige comprando un servidor más grande", en: "The system may slow down; it is fixed by buying a bigger server" } },
      { id: 'TEC-10-E6-c', text: { es: "Que pueda crear un proveedor falso y pagarle; se corrige separando funciones con roles y permisos", en: "The person could create a fake supplier and pay it; it is fixed by separating duties with roles and permissions" } },
      { id: 'TEC-10-E6-d', text: { es: "Que se dupliquen los productos; se corrige borrando el catálogo", en: "Products may be duplicated; it is fixed by deleting the catalog" } },
    ],
    correctOptionId: 'TEC-10-E6-c',
    explanation: {
      es: "Si una sola persona controla todo el ciclo de pago, podría inventar un proveedor y pagarse a sí misma sin que nadie lo note. En el ERP se configuran roles para separar funciones: quien da de alta proveedores no autoriza pagos. Error común: confiar en que el sistema por sí mismo evita fraudes; el ERP solo aplica los permisos que alguien configura.",
      en: "If one person controls the whole payment cycle, they could invent a supplier and pay themselves without anyone noticing. In the ERP, roles are configured to separate duties: whoever registers suppliers does not authorize payments. Common mistake: trusting that the system itself prevents fraud; the ERP only enforces the permissions someone configures.",
    },
    difficulty: 2,
    points: 15,
    competency: 'erp-fundamentals',
  },

  // ═════════════════════════ TEC-11 ═════════════════════════
  {
    id: 'TEC-11-E1',
    level: 2,
    module: 'TEC-11',
    kind: 'journal',
    flavor: 'case',
    context: {
      es: "En el módulo de ventas del ERP se emite una factura a crédito por $40,000 + IVA 16% a un cliente. Las cuentas predeterminadas están bien configuradas. (Registra solo la venta, no el costo.)",
      en: "In the ERP's sales module, a credit invoice for $40,000 + 16% VAT is issued to a customer. The default accounts are correctly configured. (Record only the sale, not the cost.)",
    },
    prompt: {
      es: "Registra la póliza que el ERP debe generar automáticamente por esta venta a crédito.",
      en: "Record the entry the ERP should automatically generate for this credit sale.",
    },
    accountChoices: ['1102', '1104', '1108', '1109', '2104', '4101', '5101'],
    expected: [
      { accountCode: '1104', side: 'D', amount: 46400 },
      { accountCode: '4101', side: 'C', amount: 40000 },
      { accountCode: '2104', side: 'C', amount: 6400 },
    ],
    explanation: {
      es: "IVA: 40,000 × 0.16 = 6,400; total 46,400. Como es a crédito, se carga Clientes por $46,400; se abona Ventas por $40,000 e IVA trasladado por $6,400. Cargos = abonos = $46,400. Error común: cargar Bancos (aún no se cobra) o usar IVA acreditable, que corresponde a las compras.",
      en: "VAT: 40,000 × 0.16 = 6,400; total 46,400. Since it is on credit, Accounts receivable is debited $46,400; Sales is credited $40,000 and Output VAT $6,400. Debits = credits = $46,400. Common mistake: debiting Bank (nothing has been collected yet) or using Input VAT, which belongs to purchases.",
    },
    difficulty: 2,
    points: 15,
    competency: 'erp-accounting',
  },
  {
    id: 'TEC-11-E2',
    level: 2,
    module: 'TEC-11',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "El ERP de una tienda de pinturas muestra 200 cubetas en existencia a un costo promedio de $30. Entra una compra de 300 cubetas a $35 cada una.",
      en: "A paint store's ERP shows 200 buckets in stock at an average cost of $30. A purchase of 300 buckets at $35 each comes in.",
    },
    prompt: {
      es: "¿Cuál es el nuevo costo promedio por cubeta que recalcula el ERP? Responde en pesos.",
      en: "What is the new average cost per bucket recalculated by the ERP? Answer in pesos.",
    },
    answer: 33,
    unit: 'MXN',
    decimals: 2,
    tolerance: { abs: 0.005 },
    explanation: {
      es: "Valor total: 200 × 30 + 300 × 35 = 6,000 + 10,500 = 16,500. Unidades: 200 + 300 = 500. Promedio: 16,500 / 500 = $33. Error común: promediar los precios (30 + 35) / 2 = 32.50 sin considerar cuántas unidades hay a cada precio.",
      en: "Total value: 200 × 30 + 300 × 35 = 6,000 + 10,500 = 16,500. Units: 200 + 300 = 500. Average: 16,500 / 500 = $33. Common mistake: averaging the prices (30 + 35) / 2 = 32.50 without considering how many units there are at each price.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-accounting',
  },
  {
    id: 'TEC-11-E3',
    level: 2,
    module: 'TEC-11',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Un distribuidor de llantas tiene en su ERP 200 llantas a un costo promedio de $45 cada una (valor $9,000). Se surte un pedido de 120 llantas.",
      en: "A tire distributor has 200 tires in its ERP at an average cost of $45 each ($9,000 value). An order for 120 tires is shipped.",
    },
    prompt: {
      es: "Calcula lo que registra el inventario perpetuo del distribuidor después de surtir el pedido.",
      en: "Compute what the distributor's perpetual inventory records after shipping the order.",
    },
    fields: [
      { id: 'f1', label: { es: "Costo de ventas del pedido", en: "Cost of goods sold for the order" }, answer: 5400, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Llantas que quedan en existencia", en: "Tires left in stock" }, answer: 80, unit: 'units', tolerance: { abs: 0 } },
      { id: 'f3', label: { es: "Valor del inventario final", en: "Ending inventory value" }, answer: 3600, unit: 'MXN', tolerance: { abs: 0.5 } },
    ],
    explanation: {
      es: "Costo de ventas: 120 × 45 = $5,400. Existencia: 200 − 120 = 80 llantas. Valor final: 80 × 45 = $3,600 (comprobación: 9,000 − 5,400 = 3,600). Error común: usar el precio de venta en lugar del costo promedio para el costo de ventas.",
      en: "Cost of goods sold: 120 × 45 = $5,400. Stock: 200 − 120 = 80 tires. Ending value: 80 × 45 = $3,600 (check: 9,000 − 5,400 = 3,600). Common mistake: using the selling price instead of the average cost for cost of goods sold.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-accounting',
  },
  {
    id: 'TEC-11-E4',
    level: 2,
    module: 'TEC-11',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué hace la conciliación bancaria automática de un ERP?",
      en: "What does an ERP's automatic bank reconciliation do?",
    },
    options: [
      { id: 'TEC-11-E4-a', text: { es: "Borra los movimientos del banco que no coinciden con el sistema", en: "It deletes the bank movements that do not match the system" } },
      { id: 'TEC-11-E4-b', text: { es: "Empareja los movimientos del estado de cuenta con los registros del sistema y deja los que no coinciden para revisión", en: "It matches bank statement movements with system records and leaves unmatched ones for review" } },
      { id: 'TEC-11-E4-c', text: { es: "Cambia el saldo del banco para que sea igual al de contabilidad", en: "It changes the bank balance so it equals the accounting balance" } },
      { id: 'TEC-11-E4-d', text: { es: "Calcula los impuestos del mes", en: "It computes the month's taxes" } },
    ],
    correctOptionId: 'TEC-11-E4-b',
    explanation: {
      es: "La conciliación automática compara cada movimiento del banco con un registro del sistema (por importe, fecha o referencia) y marca los que coinciden; los que no, quedan como partidas pendientes para que una persona las investigue. Error común: pensar que el sistema \"fuerza\" que los saldos cuadren; las diferencias se explican, no se borran.",
      en: "Automatic reconciliation compares each bank movement with a system record (by amount, date or reference) and marks those that match; the rest remain as pending items for a person to investigate. Common mistake: thinking the system \"forces\" the balances to agree; differences are explained, not deleted.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-accounting',
  },
  {
    id: 'TEC-11-E5',
    level: 2,
    module: 'TEC-11',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Si en el ERP la cuenta predeterminada de las ventas a crédito está mal configurada, el error se repite en todas las pólizas automáticas de ese tipo de operación.",
      en: "If the default account for credit sales is misconfigured in the ERP, the error repeats in every automatic entry for that type of transaction.",
    },
    answer: true,
    explanation: {
      es: "Verdadero. Las pólizas automáticas siguen la configuración: si la regla apunta a una cuenta equivocada, cada venta a crédito se registrará mal hasta que alguien la corrija. Por eso la configuración contable se revisa y prueba antes de arrancar. Error común: pensar que, como lo hace el sistema, la póliza siempre es correcta.",
      en: "True. Automatic entries follow the setup: if the rule points to the wrong account, every credit sale will be recorded incorrectly until someone fixes it. That is why the accounting setup is reviewed and tested before going live. Common mistake: thinking that because the system does it, the entry is always right.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-accounting',
  },
  {
    id: 'TEC-11-E6',
    level: 2,
    module: 'TEC-11',
    kind: 'classify',
    flavor: 'concept',
    prompt: {
      es: "Clasifica cada tarea según el módulo financiero del ERP donde se realiza.",
      en: "Classify each task by the ERP finance module where it is done.",
    },
    categories: [
      { id: 'TEC-11-E6-c1', label: { es: "Cuentas por cobrar", en: "Accounts receivable" } },
      { id: 'TEC-11-E6-c2', label: { es: "Cuentas por pagar", en: "Accounts payable" } },
      { id: 'TEC-11-E6-c3', label: { es: "Bancos", en: "Bank" } },
    ],
    items: [
      { id: 'TEC-11-E6-i1', label: { es: "Revisar la antigüedad de saldos de los clientes", en: "Review customers' balance aging" }, correctCategoryId: 'TEC-11-E6-c1' },
      { id: 'TEC-11-E6-i2', label: { es: "Programar el pago de las facturas de proveedores que vencen el viernes", en: "Schedule payment of supplier invoices due on Friday" }, correctCategoryId: 'TEC-11-E6-c2' },
      { id: 'TEC-11-E6-i3', label: { es: "Importar el estado de cuenta y conciliarlo", en: "Import the bank statement and reconcile it" }, correctCategoryId: 'TEC-11-E6-c3' },
      { id: 'TEC-11-E6-i4', label: { es: "Enviar un recordatorio a un cliente con 60 días de atraso", en: "Send a reminder to a customer 60 days past due" }, correctCategoryId: 'TEC-11-E6-c1' },
      { id: 'TEC-11-E6-i5', label: { es: "Registrar la factura recibida de un proveedor de empaques", en: "Record the invoice received from a packaging supplier" }, correctCategoryId: 'TEC-11-E6-c2' },
      { id: 'TEC-11-E6-i6', label: { es: "Consultar el saldo disponible en las cuentas de la empresa", en: "Check the available balance in the company's accounts" }, correctCategoryId: 'TEC-11-E6-c3' },
    ],
    explanation: {
      es: "Cuentas por cobrar controla lo que los clientes deben (antigüedad, recordatorios). Cuentas por pagar controla lo que se debe a proveedores (registro de facturas, programación de pagos). Bancos controla saldos y movimientos y su conciliación. Error común: poner la programación de pagos en Bancos; el pago sale del banco, pero se decide y programa en cuentas por pagar.",
      en: "Receivables controls what customers owe (aging, reminders). Payables controls what is owed to suppliers (recording invoices, scheduling payments). Bank controls balances, movements and their reconciliation. Common mistake: placing payment scheduling in Bank; the payment leaves the bank, but it is decided and scheduled in payables.",
    },
    difficulty: 1,
    points: 10,
    competency: 'erp-accounting',
  },

  // ═════════════════════════ TEC-12 ═════════════════════════
  {
    id: 'TEC-12-E1',
    level: 2,
    module: 'TEC-12',
    kind: 'multi',
    flavor: 'concept',
    prompt: {
      es: "Selecciona las tareas contables que son buenas candidatas para automatizar.",
      en: "Select the accounting tasks that are good candidates for automation.",
    },
    options: [
      { id: 'TEC-12-E1-a', text: { es: "Descargar y leer cada mes los XML de los CFDI recibidos", en: "Downloading and reading the received CFDI XML files every month" } },
      { id: 'TEC-12-E1-b', text: { es: "Conciliar depósitos bancarios que traen el folio de la factura en la referencia", en: "Reconciling bank deposits that carry the invoice number in the reference" } },
      { id: 'TEC-12-E1-c', text: { es: "Decidir si se otorga crédito a un cliente nuevo con información incompleta", en: "Deciding whether to grant credit to a new customer with incomplete information" } },
      { id: 'TEC-12-E1-d', text: { es: "Generar el mismo reporte mensual de gastos por sucursal", en: "Generating the same monthly expense report by branch" } },
    ],
    correctOptionIds: ['TEC-12-E1-a', 'TEC-12-E1-b', 'TEC-12-E1-d'],
    explanation: {
      es: "Descargar CFDI, conciliar con referencia y generar un reporte fijo son tareas repetitivas, basadas en reglas y con datos digitales. Dar crédito con información incompleta requiere juicio humano. Error común: querer automatizar decisiones de criterio; la automatización sirve para lo que sigue reglas claras.",
      en: "Downloading CFDI files, reconciling with a reference and generating a fixed report are repetitive, rule-based tasks with digital data. Granting credit with incomplete information requires human judgment. Common mistake: trying to automate judgment calls; automation is for what follows clear rules.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-automation',
  },
  {
    id: 'TEC-12-E2',
    level: 2,
    module: 'TEC-12',
    kind: 'numeric',
    flavor: 'case',
    context: {
      es: "Un área de cuentas por pagar registra 900 facturas al mes. A mano tarda 6 minutos por factura; con un script que lee los XML tardaría 1 minuto por factura (incluida la revisión).",
      en: "A payables team records 900 invoices a month. By hand it takes 6 minutes per invoice; with a script that reads the XML files it would take 1 minute per invoice (review included).",
    },
    prompt: {
      es: "¿Cuántas horas al mes ahorra el área de cuentas por pagar con el script? Responde en horas.",
      en: "How many hours a month does the payables team save with the script? Answer in hours.",
    },
    answer: 75,
    unit: 'none',
    decimals: 0,
    tolerance: { abs: 0.05 },
    explanation: {
      es: "Manual: 900 × 6 = 5,400 minutos = 90 horas. Con script: 900 × 1 = 900 minutos = 15 horas. Ahorro: 90 − 15 = 75 horas. Error común: responder en minutos (4,500) o calcular solo el tiempo manual (90).",
      en: "Manual: 900 × 6 = 5,400 minutes = 90 hours. With the script: 900 × 1 = 900 minutes = 15 hours. Savings: 90 − 15 = 75 hours. Common mistake: answering in minutes (4,500) or computing only the manual time (90).",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-automation',
  },
  {
    id: 'TEC-12-E3',
    level: 2,
    module: 'TEC-12',
    kind: 'fields',
    flavor: 'case',
    context: {
      es: "Una automatización ahorra 75 horas al mes. Cada hora del personal cuesta $160. La herramienta cuesta $2,000 al mes y requiere una inversión inicial de $40,000. Cifras hipotéticas.",
      en: "An automation saves 75 hours a month. Each staff hour costs $160. The tool costs $2,000 a month and requires a $40,000 initial investment. Hypothetical figures.",
    },
    prompt: {
      es: "Calcula el ahorro y el periodo de recuperación de la automatización.",
      en: "Compute the automation's savings and payback period.",
    },
    fields: [
      { id: 'f1', label: { es: "Ahorro bruto mensual (horas × costo por hora)", en: "Gross monthly savings (hours × cost per hour)" }, answer: 12000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f2', label: { es: "Ahorro neto mensual (menos el costo de la herramienta)", en: "Net monthly savings (minus the tool cost)" }, answer: 10000, unit: 'MXN', tolerance: { abs: 0.5 } },
      { id: 'f3', label: { es: "Periodo de recuperación (meses)", en: "Payback period (months)" }, answer: 4, unit: 'periods', tolerance: { abs: 0.05 } },
    ],
    explanation: {
      es: "Ahorro bruto: 75 × 160 = $12,000. Ahorro neto: 12,000 − 2,000 = $10,000. Recuperación: 40,000 / 10,000 = 4 meses. Error común: calcular la recuperación con el ahorro bruto (3.33 meses) y olvidar que la herramienta también cuesta cada mes.",
      en: "Gross savings: 75 × 160 = $12,000. Net savings: 12,000 − 2,000 = $10,000. Payback: 40,000 / 10,000 = 4 months. Common mistake: computing payback with gross savings (3.33 months) and forgetting the tool also costs money every month.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-automation',
  },
  {
    id: 'TEC-12-E4',
    level: 2,
    module: 'TEC-12',
    kind: 'truefalse',
    flavor: 'concept',
    prompt: {
      es: "Una vez que un proceso contable está automatizado, ya no necesita validaciones, bitácora ni revisión humana.",
      en: "Once an accounting process is automated, it no longer needs validations, a log or human review.",
    },
    answer: false,
    explanation: {
      es: "Falso. Un error en una regla automatizada se repite en miles de registros en segundos. Se necesitan validaciones, una bandeja de excepciones, bitácora de lo que hizo el sistema y revisión periódica de una persona. Error común: pensar que automatizado significa infalible.",
      en: "False. An error in an automated rule repeats across thousands of records in seconds. You need validations, an exceptions queue, a log of what the system did and periodic review by a person. Common mistake: thinking automated means infallible.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-automation',
  },
  {
    id: 'TEC-12-E5',
    level: 2,
    module: 'TEC-12',
    kind: 'mcq',
    flavor: 'concept',
    prompt: {
      es: "¿Qué describe mejor a la RPA (automatización robótica de procesos)?",
      en: "What best describes RPA (robotic process automation)?",
    },
    options: [
      { id: 'TEC-12-E5-a', text: { es: "Robots físicos que acomodan cajas en el almacén", en: "Physical robots that stack boxes in the warehouse" } },
      { id: 'TEC-12-E5-b', text: { es: "Una conexión directa entre dos sistemas por una API", en: "A direct connection between two systems through an API" } },
      { id: 'TEC-12-E5-c', text: { es: "Software que imita los pasos que una persona haría en la pantalla, como abrir un portal y copiar datos", en: "Software that mimics the steps a person would take on screen, such as opening a portal and copying data" } },
      { id: 'TEC-12-E5-d', text: { es: "Un tipo de factura electrónica", en: "A type of electronic invoice" } },
    ],
    correctOptionId: 'TEC-12-E5-c',
    explanation: {
      es: "La RPA usa robots de software que repiten clics y capturas como lo haría una persona; es útil cuando los sistemas no se pueden conectar directamente, pero se rompe si la pantalla cambia. Una API conecta sistemas directamente y suele ser más estable. Error común: imaginar robots físicos o confundir RPA con API.",
      en: "RPA uses software robots that repeat clicks and data entry as a person would; it is useful when systems cannot be connected directly, but it breaks if the screen changes. An API connects systems directly and is usually more stable. Common mistake: picturing physical robots or confusing RPA with an API.",
    },
    difficulty: 1,
    points: 10,
    competency: 'accounting-automation',
  },
  {
    id: 'TEC-12-E6',
    level: 2,
    module: 'TEC-12',
    kind: 'journal',
    flavor: 'case',
    context: {
      es: "Un bot lee el XML de un CFDI recibido de una agencia de publicidad (persona moral) por $12,000 + IVA 16%, que se pagó por transferencia el mismo día, y propone la póliza.",
      en: "A bot reads the XML of a CFDI received from an advertising agency (a company) for $12,000 + 16% VAT, paid by transfer the same day, and proposes the entry.",
    },
    prompt: {
      es: "Registra la póliza correcta que el bot debe proponer a partir del CFDI de publicidad.",
      en: "Record the correct entry the bot should propose from the advertising CFDI.",
    },
    accountChoices: ['1101', '1102', '1109', '2101', '2104', '6102', '6104'],
    expected: [
      { accountCode: '6104', side: 'D', amount: 12000 },
      { accountCode: '1109', side: 'D', amount: 1920 },
      { accountCode: '1102', side: 'C', amount: 13920 },
    ],
    explanation: {
      es: "IVA: 12,000 × 0.16 = 1,920; total 13,920. Se carga Publicidad por $12,000 y IVA acreditable por $1,920, y se abona Bancos por $13,920 porque se pagó por transferencia. Cargos = abonos = $13,920. Error común: usar IVA trasladado (es el de las ventas) o abonar Proveedores cuando ya se pagó.",
      en: "VAT: 12,000 × 0.16 = 1,920; total 13,920. Debit Advertising $12,000 and Input VAT $1,920, and credit Bank $13,920 because it was paid by transfer. Debits = credits = $13,920. Common mistake: using Output VAT (that is for sales) or crediting Accounts payable when it was already paid.",
    },
    difficulty: 2,
    points: 15,
    competency: 'accounting-automation',
  },
]
