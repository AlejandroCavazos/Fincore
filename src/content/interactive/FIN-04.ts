import type { InteractiveLesson } from './types'

export const intFIN04: InteractiveLesson = {
  lessonId: 'FIN-04',
  sections: [
    // Cuatro reportes, cuatro preguntas
    [
      { text: 'Paola es analista junior 👩‍💼. Su jefa le pasa los **estados financieros** de **Dulces La Abeja**, una fábrica de dulces, y le pregunta: "¿Podrá pagar su deuda?".' },
      { text: 'Los **estados financieros** resumen la vida económica de una empresa. Cuatro importan más:\n📸 **Situación financiera** (balance): una "foto" en una fecha: activos, pasivos y capital contable.\n🎬 **Resultados:** una "película" del periodo: ingresos, costos, gastos y utilidad o pérdida.\n💸 **Flujos de efectivo:** de dónde vino y a dónde fue el dinero.\n👥 **Cambios en el capital contable:** por qué cambió la parte de los dueños.' },
      {
        match: {
          title: 'Une cada estado con su pregunta',
          pairs: [
            ['Situación financiera', '¿Qué tengo y qué debo hoy?'],
            ['Resultados', '¿Gané o perdí en el periodo?'],
            ['Flujos de efectivo', '¿De dónde vino y a dónde fue el dinero?'],
            ['Cambios en el capital contable', '¿Por qué cambió la parte de los dueños?'],
          ],
        },
      },
      {
        sort: {
          title: '¿Dónde busca Paola cada dato?',
          buckets: ['Situación financiera', 'Resultados', 'Flujos de efectivo'],
          items: [
            { text: '¿Cuánto debe la fábrica al 31 de diciembre?', bucket: 0, why: 'Lo que debe en una fecha está en la "foto": el balance.' },
            { text: '¿Cuánto ganó o perdió en el año?', bucket: 1, why: 'La utilidad del periodo está en el estado de resultados.' },
            { text: '¿Cuánto dinero usó para comprar maquinaria?', bucket: 2, why: 'El dinero que salió para invertir está en el flujo de efectivo.' },
            { text: '¿Cuánto inventario tiene al cierre?', bucket: 0, why: 'Lo que tiene en una fecha está en el balance.' },
            { text: '¿Cuál fue el costo de los dulces vendidos?', bucket: 1, why: 'Costos del periodo: estado de resultados.' },
          ],
        },
      },
      {
        ask: 'Paola quiere saber si la fábrica podrá pagar su deuda bancaria del próximo mes. ¿Por dónde empieza?',
        options: [
          { text: 'Por el balance y el flujo de efectivo', ok: true, reply: '¡Bien! Ahí ve cuánto debe y cuánto dinero entra y sale de verdad.' },
          { text: 'Solo por la utilidad del año', reply: 'La utilidad no dice cuánto debe ni cuánto efectivo tiene. Empieza por el **balance y el flujo de efectivo**.' },
          { text: 'Por el estado de cambios en el capital', reply: 'Ese explica la parte de los dueños. Para pagar deudas, mira el **balance y el flujo de efectivo**.' },
        ],
      },
    ],
    // ¿En qué se va cada peso?
    [
      {
        ask: 'Dulces La Abeja vendió **$800,000** y el costo de los dulces vendidos fue **$520,000**. De cada peso vendido, ¿cuánto se va en costo?',
        options: [
          { text: '65 centavos', ok: true, reply: '¡Exacto! 520,000 ÷ 800,000 = 0.65. De cada peso, 65 centavos se van en costo.' },
          { text: '52 centavos', reply: 'Hay que dividir entre las ventas: 520,000 ÷ 800,000 = **65 centavos**.' },
          { text: '35 centavos', reply: 'Eso es lo que **queda** después del costo. Lo que se va en costo es **65 centavos**.' },
        ],
      },
      { text: 'Eso es **análisis vertical**: cada partida ÷ una **base del mismo estado y periodo**. En resultados la base son las **ventas** (100 %); en el balance, el **activo total** (100 %). El resultado se llama **porcentaje integral**.' },
      {
        calc: {
          question: 'La utilidad bruta es 800,000 − 520,000 = $280,000. ¿Qué porcentaje de las ventas representa?',
          answer: 35,
          unit: '%',
          hint: '280,000 ÷ 800,000 × 100.',
          why: '280,000 ÷ 800,000 = 0.35 = **35 %**. De cada peso vendido quedan 35 centavos para cubrir gastos.',
        },
      },
      {
        calc: {
          question: 'En el balance, el activo total es **$400,000** y los inventarios **$80,000**. ¿Qué porcentaje del activo son los inventarios?',
          answer: 20,
          unit: '%',
          hint: 'En el balance la base es el activo total: 80,000 ÷ 400,000 × 100.',
          why: '80,000 ÷ 400,000 = 0.20 = **20 %** del activo total.',
        },
      },
      {
        multi: {
          title: '¿Para qué sirve el análisis vertical? Marca todo lo cierto',
          items: [
            { text: 'Ver la estructura: qué parte de cada peso se va en costo, gastos y utilidad', ok: true },
            { text: 'Comparar empresas de tamaños distintos', ok: true },
            { text: 'Ver cuánto creció una partida de un año a otro', ok: false },
            { text: 'Comparar cada partida contra una base del mismo periodo', ok: true },
          ],
          why: 'Vertical = **mismo periodo, todo contra una base**. Comparar una partida entre años es otro análisis: el **horizontal**.',
        },
      },
      { tip: 'Como todo queda en porcentajes, el análisis vertical deja comparar una dulcería pequeña con una fábrica grande.' },
    ],
    // ¿Qué creció más rápido?
    [
      { text: 'Ahora Paola compara **este año contra el pasado** 📅:\n📈 Ventas: $400,000 → $460,000\n💸 Gastos de operación: $80,000 → $100,000' },
      { text: 'Eso es **análisis horizontal**: la **misma partida en dos o más periodos**. Variación % = (año nuevo − año anterior) ÷ año anterior × 100.' },
      {
        calc: {
          question: '¿En qué porcentaje crecieron las ventas?',
          answer: 15,
          unit: '%',
          hint: '(460,000 − 400,000) ÷ 400,000 × 100.',
          why: '60,000 ÷ 400,000 = 0.15 = **15 %**. Los gastos crecieron 20,000 ÷ 80,000 = **25 %**.',
        },
      },
      {
        ask: 'Ventas +15 % y gastos +25 %. ¿Qué concluye Paola?',
        options: [
          { text: 'Los gastos crecen más rápido: hay que revisar en qué se gasta', ok: true, reply: '¡Eso! Si los gastos corren más que las ventas, el margen se está comiendo.' },
          { text: 'Todo bien, porque las ventas subieron', reply: 'Subieron, pero los gastos subieron **más rápido**. Conviene revisar en qué se gasta.' },
          { text: 'La fábrica debe cerrar', reply: 'Es demasiado. Los números **generan preguntas**: aquí, revisar los gastos.' },
        ],
      },
      {
        rush: {
          title: '¿Vertical u horizontal?',
          seconds: 30,
          labels: ['📊 Vertical', '📅 Horizontal'],
          items: [
            { text: 'Costo de ventas como % de las ventas del año', ans: 0 },
            { text: 'Ventas del año pasado contra este año', ans: 1 },
            { text: 'Inventario como % del activo total', ans: 0 },
            { text: 'Cuánto crecieron los clientes de un año a otro', ans: 1 },
            { text: 'La misma partida en varios años', ans: 1 },
            { text: 'Cada partida contra una base del mismo periodo', ans: 0 },
          ],
        },
      },
      {
        ask: 'Otro cliente de Paola: ventas **+10 %** y cuentas por cobrar **+40 %**. ¿Qué sugiere?',
        options: [
          { text: 'Que los clientes están pagando más lento', ok: true, reply: '¡Bien visto! Si lo que te deben crece mucho más que las ventas, cobran más lento o se dio crédito con poco control.' },
          { text: 'Que debe subir precios', reply: 'Los números no hablan de precios. Lo que se ve es que **los clientes están pagando más lento**.' },
          { text: 'Nada, las ventas crecieron', reply: 'Crecer en ventas no basta: las cuentas por cobrar corren 4 veces más rápido. **Los clientes pagan más lento**.' },
        ],
      },
      { tip: 'Lo valioso es **comparar ritmos**. Los números no dan la respuesta final: **generan preguntas** que hay que investigar.' },
    ],
  ],
}
