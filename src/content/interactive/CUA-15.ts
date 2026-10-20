import type { InteractiveLesson } from './types'

export const intCUA15: InteractiveLesson = {
  lessonId: 'CUA-15',
  sections: [
    // ¿Por qué Python en finanzas?
    [
      { text: 'Paty es practicante en el área de riesgos de una empresa 🧑‍💻. Cada mañana copia fórmulas hacia abajo en una hoja enorme. Su jefe le dice: "eso en **Python** sale en tres líneas".' },
      {
        text: '**Python** es un lenguaje de programación gratuito y fácil de leer. Su fuerza son las **bibliotecas**: paquetes de código ya hecho para casi todo.',
      },
      {
        ask: 'Entonces, ¿qué es una biblioteca?',
        options: [
          { text: 'Código ya hecho que tú solo usas', ok: true, reply: '¡Eso! Es como una caja de herramientas: no fabricas el martillo, lo usas.' },
          { text: 'Un lugar donde se guardan los datos de la empresa', reply: 'Los datos se guardan en archivos o bases. Una biblioteca es **código ya hecho** que usas, como una caja de herramientas.' },
          { text: 'Un programa de pago para bancos', reply: 'Las más usadas son gratuitas. Una biblioteca es **código ya hecho** que reutilizas.' },
        ],
      },
      {
        text: 'Las más usadas en finanzas:\n🔢 **NumPy**: arreglos (listas de números) y matemáticas rápidas\n📋 **pandas**: tablas con fechas, el **DataFrame** (como una hoja de cálculo)\n📊 **matplotlib**: gráficas\n📐 **SciPy**: estadística, distribuciones y optimización\nY muchos trabajan en **Jupyter**, un cuaderno que mezcla código, resultados y notas.',
      },
      {
        match: {
          title: 'Une cada herramienta con lo que hace',
          pairs: [
            ['NumPy', 'Matemáticas rápidas con listas de números'],
            ['pandas', 'Tablas con fechas (DataFrame)'],
            ['matplotlib', 'Dibujar gráficas'],
            ['SciPy', 'Estadística y optimización'],
            ['Jupyter', 'Cuaderno donde mezclas código y notas'],
          ],
        },
      },
      {
        sort: {
          title: '¿Qué biblioteca usaría Paty?',
          buckets: ['NumPy', 'pandas', 'matplotlib'],
          items: [
            { text: 'Generar 10,000 números al azar para una simulación', bucket: 0, why: 'Números y arreglos: NumPy.' },
            { text: 'Leer un archivo de precios diarios y pasarlo a mensual', bucket: 1, why: 'Leer tablas y manejar fechas: pandas.' },
            { text: 'Dibujar el histograma de los rendimientos', bucket: 2, why: 'Gráficas: matplotlib.' },
            { text: 'Multiplicar una matriz por un vector de pesos', bucket: 0, why: 'Álgebra con arreglos: NumPy.' },
            { text: 'Sacar el promedio móvil de 20 días de una serie con fechas', bucket: 1, why: 'pandas lo hace directo y respeta las fechas.' },
            { text: 'Graficar cómo cambió el valor de una cartera', bucket: 2, why: 'Una gráfica de líneas: matplotlib.' },
          ],
        },
      },
      { tip: 'Jupyter es el **cuaderno** donde trabajas, no la herramienta de datos. Las tablas con fechas son de **pandas**.' },
    ],
    // Rendimientos en un solo paso
    [
      {
        text: 'En pandas, una **Serie** es una columna con fechas y un **DataFrame** es una tabla de varias Series 📋. Con una sola función haces lo que en la hoja tomaría muchas fórmulas copiadas.',
      },
      {
        ask: 'La acción cerró ayer en $100 y hoy en $102. ¿Cuánto rindió hoy?',
        options: [
          { text: '2% (en decimal, 0.02)', ok: true, reply: '¡Sí! 102 ÷ 100 − 1 = 0.02. pandas lo da en **decimal**.' },
          { text: '102%', reply: '102 ÷ 100 = 1.02; falta restar 1. El rendimiento es **0.02 = 2%**.' },
          { text: '0.2%', reply: 'Se te fue un cero: 102 ÷ 100 − 1 = 0.02 = **2%**.' },
        ],
      },
      {
        text: 'Eso hace `pct_change()`:\n🧮 **rendimiento = precio de hoy ÷ precio de ayer − 1**\n🕳️ El primer día sale **NaN** (vacío): no tiene día anterior.',
      },
      {
        calc: {
          question: 'Precios en tres días: **40, 44 y 41.8**. ¿Qué porcentaje rindió el **día 2**?',
          answer: 10,
          unit: '%',
          hint: '44 ÷ 40 − 1.',
          why: '44 ÷ 40 = 1.10. Menos 1 = 0.10 = **10%**. El día 3 se compara contra **44** (ayer), no contra 40: 41.8 ÷ 44 − 1 = −0.05.',
        },
      },
      {
        text: 'Otras funciones útiles:\n📈 `rolling(n).mean()`: promedio de los **últimos n** datos de cada fila (las primeras n − 1 salen NaN)\n⏪ `shift(1)`: recorre los datos un día, para que cada fila vea el valor de **ayer**\n🧹 `dropna()`: quita los faltantes',
      },
      {
        match: {
          title: 'Une la función con lo que hace',
          pairs: [
            ['pct_change()', 'Rendimiento contra el día anterior'],
            ['rolling(3).mean()', 'Promedio de los últimos 3 datos'],
            ['shift(1)', 'Cada fila ve el valor de ayer'],
            ['dropna()', 'Quita los valores faltantes'],
          ],
        },
      },
      {
        calc: {
          question: 'Precios: **20, 23, 26 y 29**. Paty usa `rolling(3).mean()`. ¿Qué valor sale en la **última** fila?',
          answer: 26,
          hint: 'Los 3 más recientes de esa fila: 23, 26 y 29.',
          why: '23 + 26 + 29 = 78. 78 ÷ 3 = **26**. Si promedias los primeros tres (20, 23, 26) te da 23: esos no son los más recientes.',
        },
      },
      {
        ask: 'Paty prueba una regla: "compro si el precio está arriba de su promedio". ¿Por qué su jefe le pide `shift(1)` en la señal?',
        options: [
          { text: 'Para que cada día use solo lo que ya sabía ayer', ok: true, reply: '¡Exacto! Con el cierre de hoy solo puedes operar después. Sin shift(1), el resultado sale inflado por usar información que no tenías.' },
          { text: 'Para que el código corra más rápido', reply: 'No es por velocidad. Es para que cada día use **la señal de ayer** y no información que todavía no existía.' },
          { text: 'Para borrar los datos vacíos', reply: 'Eso lo hace dropna(). shift(1) recorre la señal un día para usar **solo lo que sabías ayer**.' },
        ],
      },
    ],
    // Rápido y fácil de repetir
    [
      {
        text: '**Vectorizar** es aplicar una operación a **toda** la columna de una vez ⚡, en lugar de recorrerla dato por dato con un ciclo. Por ejemplo, `precios * 1.1` sube 10% todos los precios.',
      },
      {
        ask: 'Paty tiene 5,000 precios y quiere subirlos 10%. ¿Cuál es la forma vectorizada?',
        options: [
          { text: 'Multiplicar toda la columna por 1.1 de una vez', ok: true, reply: '¡Eso! Es más corto, más claro y mucho más rápido: NumPy y pandas hacen el trabajo pesado.' },
          { text: 'Recorrer los 5,000 precios uno por uno con un ciclo', reply: 'Funciona, pero eso es justo lo que **no** es vectorizar. Lo vectorizado es operar toda la columna de una vez.' },
          { text: 'Copiar la fórmula hacia abajo en la hoja', reply: 'Eso es lo que Paty quiere dejar de hacer. Vectorizar es operar **toda la columna de una vez**.' },
        ],
      },
      {
        text: 'Su jefe corre el análisis de Paty y le sale **otro número** 😬. Un análisis debe poder repetirse y dar lo mismo:\n🌱 Fija la **semilla** de los números al azar\n🗃️ Guarda el código en un **control de versiones** (como git)\n✅ Escribe **pruebas** con casos de resultado conocido\n🔒 **Nunca** sobrescribas los datos originales: trabaja sobre copias',
      },
      {
        multi: {
          title: '¿Qué hace que otro llegue a tu mismo resultado?',
          items: [
            { text: 'Fijar la semilla del generador de números al azar', ok: true },
            { text: 'Guardar el código en git', ok: true },
            { text: 'Corregir a mano el archivo original y guardarlo encima', ok: false },
            { text: 'Escribir pruebas que revisen tus funciones', ok: true },
          ],
          why: 'Semilla, versiones y pruebas permiten repetir y confiar. Sobrescribir el original **destruye la evidencia**: los ajustes se hacen en código, sobre una copia.',
        },
      },
      {
        rush: {
          title: '¿Ayuda o estorba?',
          seconds: 30,
          labels: ['✅ Ayuda a repetir', '❌ Lo estorba'],
          items: [
            { text: 'Revisar faltantes (NaN), fechas y unidades antes de calcular', ans: 0 },
            { text: 'Borrar el archivo original "porque ya lo limpié"', ans: 1 },
            { text: 'Fijar la semilla antes de simular', ans: 0 },
            { text: 'Cambiar datos a mano "solo esta vez"', ans: 1 },
            { text: 'Guardar cada cambio del código con git', ans: 0 },
            { text: 'Simular sin fijar semilla y no anotar nada', ans: 1 },
          ],
        },
      },
      { tip: '**Vectoriza** en lugar de usar ciclos, **fija semillas**, **versiona** y **prueba** tu código, y deja intactos los datos originales.' },
    ],
  ],
}
