import type { InteractiveLesson } from './types'

export const intFIN14: InteractiveLesson = {
  lessonId: 'FIN-14',
  sections: [
    // ¿Cómo se arma un buen modelo?
    [
      { text: 'Andrea es analista junior en **Burbujas**, una cadena de lavanderías 🧺. Su jefe le pide un modelo en Excel para decidir si abren otra sucursal.' },
      { text: 'Un **modelo financiero** es como una receta en una hoja de cálculo:\n🥕 **Ingredientes:** los supuestos (cuánto crecerán las ventas, qué margen habrá).\n🍳 **Procedimiento:** los cálculos.\n🍲 **Platillo:** los resultados (utilidad, flujo de efectivo, valor).' },
      {
        match: {
          title: 'Une cada parte de la receta',
          pairs: [
            ['Supuestos', 'Las ventas crecerán 8 % al año'],
            ['Cálculos', 'Las fórmulas que multiplican y suman'],
            ['Resultados', 'La utilidad del próximo año'],
          ],
        },
      },
      { text: 'Regla número uno: **separa los supuestos de los cálculos**. Los datos que tecleas van en una sección de supuestos y las fórmulas solo apuntan a esas celdas. Un número fijo escondido dentro de una fórmula se llama **hardcode**.' },
      {
        ask: 'Andrea supone que las ventas crecerán 8 %. ¿Cómo lo pone en el modelo?',
        options: [
          { text: 'Escribe =B5*1.08 en cada celda de ventas', reply: 'Eso es un hardcode: nadie sabrá de dónde salió el 1.08, y si cambia hay que corregir celda por celda. Mejor una **celda de supuestos** etiquetada.' },
          { text: 'Pone 8 % en una celda de supuestos etiquetada y las fórmulas la usan', ok: true, reply: '¡Eso! Si mañana el jefe pide probar 6 %, Andrea cambia **una sola celda** y todo se actualiza.' },
          { text: 'Calcula a mano y pega los resultados', reply: 'Así el supuesto queda escondido y el modelo no se actualiza. Mejor una **celda de supuestos** y fórmulas que la usen.' },
        ],
      },
      {
        multi: {
          title: '¿Cuáles son buenas prácticas? Marca todas',
          items: [
            { text: 'Supuestos en un solo lugar, con etiqueta y su fuente', ok: true },
            { text: 'Un color para datos capturados y otro para fórmulas', ok: true },
            { text: 'Comprobaciones (checks) que avisen si algo no cuadra', ok: true },
            { text: 'Números fijos dentro de las fórmulas para ir más rápido', ok: false },
            { text: 'Mezclar pesos y miles sin decir cuál es cuál', ok: false },
          ],
          why: 'Supuestos claros, colores y checks hacen que cualquiera entienda y revise el modelo. Los hardcodes y las unidades revueltas esconden errores.',
        },
      },
      { tip: 'Un buen modelo se lee como receta: **supuestos** arriba y etiquetados, **fórmulas** que los usan y **checks** que avisan si algo falla.' },
    ],
    // ¿Cómo se conectan los estados?
    [
      { text: 'El modelo de Andrea proyecta tres estados: **resultados**, **balance** y **flujo de efectivo**. Se mueven juntos, como engranes ⚙️.' },
      { text: 'Primero se proyecta con **generadores** (drivers):\n📈 Ventas = ventas de hoy × (1 + crecimiento)\n🧾 Costos como **porcentaje de las ventas**\n📅 Cuentas por cobrar = ventas × días de cobro ÷ 365' },
      {
        calc: {
          question: 'Burbujas vende hoy $500,000 y crecerá 10 %. Su margen bruto es 40 % de las ventas, sus gastos de operación son $120,000, no tiene deuda y el impuesto ilustrativo es 30 %. ¿Cuál será la utilidad neta del próximo año?',
          answer: 70000,
          hint: 'Ventas: 500,000 × 1.10. Utilidad bruta: × 0.40. Resta gastos. Luego × 0.70.',
          why: 'Ventas 550,000; × 0.40 = 220,000; − 120,000 = 100,000 de utilidad de operación; × 0.70 = **$70,000**. Error común: aplicar el margen a las ventas de hoy (500,000) en vez de a las proyectadas.',
        },
      },
      {
        calc: {
          question: 'Burbujas venderá a crédito $730,000 a empresas (hoteles, gimnasios) y le pagan a 30 días. ¿Qué saldo de cuentas por cobrar proyecta Andrea al cierre del año?',
          answer: 60000,
          hint: 'Ventas × días ÷ 365: 730,000 × 30 ÷ 365.',
          why: '730,000 ÷ 365 = 2,000 por día; × 30 días = **$60,000**. Error común: dividir entre 12 meses en vez de usar días.',
        },
      },
      { text: 'Las conexiones clave:\n🔗 La **utilidad neta** se suma a las utilidades retenidas del balance (menos los dividendos que se reparten).\n🔁 La **depreciación** se resta en resultados, se vuelve a sumar en el flujo (no saca dinero) y baja el activo fijo.\n💵 El **efectivo final** del flujo es el efectivo del balance.\n✅ Un **check**: activos = pasivos + capital.' },
      {
        multi: {
          title: '¿Qué conexiones son correctas? Marca todas',
          items: [
            { text: 'La utilidad neta se suma a las utilidades retenidas', ok: true },
            { text: 'El efectivo final del flujo es el efectivo del balance', ok: true },
            { text: 'La depreciación se suma en el flujo y baja el activo fijo', ok: true },
            { text: 'Los dividendos se restan como gasto en resultados', ok: false },
            { text: 'Si las fórmulas están bien, no hace falta el check del balance', ok: false },
          ],
          why: 'Los dividendos **no son gasto**: se restan de las utilidades retenidas. Y el check del balance siempre va: si no da cero, hay un error de conexión.',
        },
      },
      { tip: 'Generadores primero (crecimiento, %, días). Luego conecta: utilidad → utilidades retenidas, efectivo del flujo → balance, y revisa el **check**.' },
    ],
    // ¿Y si cambian los supuestos?
    [
      {
        ask: 'El jefe pregunta "¿cuánto ganará la nueva sucursal?" y Andrea da un solo número. ¿Qué problema hay?',
        options: [
          { text: 'Da una falsa sensación de certeza', ok: true, reply: '¡Exacto! El futuro puede salir mejor o peor. El jefe también necesita saber **cuánto podría perder**.' },
          { text: 'Ninguno, un número es más claro', reply: 'Es claro, pero engaña: parece seguro y no lo es. Conviene mostrar qué pasa si los supuestos cambian.' },
          { text: 'Que el número es muy pequeño', reply: 'El tamaño no es el problema. Un solo número da una **falsa certeza**: no muestra cuánto se podría perder.' },
        ],
      },
      { text: 'Dos herramientas:\n🎭 **Escenarios:** base, optimista y pesimista; cada uno cambia **varios** supuestos juntos con una historia coherente.\n🔬 **Sensibilidad:** cambia **una** variable (o dos) y deja fijas las demás, para ver cuál mueve más el resultado.' },
      {
        sort: {
          title: '¿Escenario o sensibilidad?',
          buckets: ['Escenario', 'Sensibilidad'],
          items: [
            { text: 'Recesión: menos clientes y más días de cobro a la vez', bucket: 0, why: 'Cambia varios supuestos con una historia: escenario.' },
            { text: 'Probar el precio de $50 a $70, con todo lo demás igual', bucket: 1, why: 'Una sola variable, lo demás fijo: sensibilidad.' },
            { text: 'Caso optimista: más ventas y mejor margen', bucket: 0, why: 'Varios supuestos juntos: escenario.' },
            { text: 'Una tabla que cruza precio y volumen', bucket: 1, why: 'Dos variables en una tabla, el resto fijo: sensibilidad.' },
          ],
        },
      },
      {
        sim: {
          title: 'La sucursal: $20 de costo por carga y $25,000 de fijos al mes',
          inputs: [
            { key: 'p', label: 'Precio por carga', min: 50, max: 70, step: 5, value: 60 },
            { key: 'q', label: 'Cargas al mes', min: 800, max: 1200, step: 100, value: 1000 },
          ],
          outputs: [
            { label: 'Ventas', calc: (x) => x.p * x.q },
            { label: 'Utilidad del mes', calc: (x) => (x.p - 20) * x.q - 25000, main: true },
          ],
          goal: {
            text: 'Arma el **escenario pesimista**: baja precio y volumen hasta que la utilidad llegue a **$0 o menos**.',
            check: (x) => (x.p - 20) * x.q - 25000 <= 0,
            done: 'Con $50 y 800 cargas, la sucursal pierde $1,000 al mes. Eso también lo debe ver el jefe.',
          },
        },
      },
      {
        ask: 'Solo con bajar el precio de $60 a $50, la utilidad cae de $15,000 a $5,000. Solo con bajar a 800 cargas, cae a $7,000. ¿Qué supuesto es más crítico?',
        options: [
          { text: 'El precio', ok: true, reply: '¡Bien! Un cambio pequeño en el precio mueve mucho la utilidad. Conviene investigarlo más.' },
          { text: 'El volumen', reply: 'El volumen deja $7,000; el precio deja solo $5,000. Lo que más mueve el resultado es **el precio**.' },
          { text: 'Los dos pesan igual', reply: 'No pesan igual: con el precio la utilidad baja más ($5,000 contra $7,000). El más crítico es **el precio**.' },
        ],
      },
      { tip: 'Escenarios = varios supuestos con una historia. Sensibilidad = uno o dos a la vez. Ojo con las **referencias circulares** (intereses ↔ deuda ↔ efectivo): se evitan calculando intereses sobre el saldo inicial.' },
    ],
  ],
}
