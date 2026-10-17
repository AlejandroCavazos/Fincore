import type { InteractiveLesson } from './types'

export const intL202: InteractiveLesson = {
  lessonId: 'L2-02',
  sections: [
    // ¿Por dónde entró y salió?
    [
      { text: 'Marta tiene una panadería 🥐. Su estado de resultados dice que **ganó**, pero su cuenta del banco está casi vacía.' },
      {
        ask: '¿Cómo puede pasar eso?',
        options: [
          { text: 'Vendió a crédito y compró un horno: utilidad no es efectivo', ok: true, reply: '¡Eso! Hay ventas que aún no se cobran y compras grandes que se llevan el dinero.' },
          { text: 'Seguro el banco se equivocó', reply: 'No hace falta un error: la utilidad y el efectivo **no son lo mismo**. Ventas a crédito o compras grandes los separan.' },
          { text: 'Es imposible: si hay utilidad, hay dinero', reply: 'Sí es posible: un negocio puede ganar y quedarse sin efectivo. Por eso existe el estado de flujos.' },
        ],
      },
      { text: 'El **estado de flujos de efectivo** explica por qué subió o bajó el dinero, en tres cajones:\n🔄 **Operación:** el día a día (cobros, sueldos, proveedores)\n🏗️ **Inversión:** comprar o vender cosas grandes (hornos, terrenos)\n🏦 **Financiamiento:** préstamos y dinero de los dueños' },
      {
        sort: {
          title: '¿En qué cajón va cada movimiento?',
          buckets: ['Operación', 'Inversión', 'Financiamiento'],
          items: [
            { text: 'Cobro a clientes por pan vendido', bucket: 0, why: 'Es el negocio principal.' },
            { text: 'Pago de sueldos a los panaderos', bucket: 0, why: 'Pago a empleados: día a día.' },
            { text: 'Compra de un horno industrial', bucket: 1, why: 'Es un activo de largo plazo.' },
            { text: 'Venta de un terreno', bucket: 1, why: 'Trae dinero, pero no es el negocio principal: es venta de un activo de largo plazo.' },
            { text: 'Préstamo recibido del banco', bucket: 2, why: 'Cambia la deuda.' },
            { text: 'Dividendos pagados a los socios', bucket: 2, why: 'Sale dinero hacia los dueños.' },
          ],
        },
      },
      { text: 'Al final, los tres cajones explican el salto del dinero:\n**Efectivo final = efectivo inicial + operación + inversión + financiamiento**' },
      {
        calc: {
          question: 'Marta empieza con **$40,000**. Operación **+$85,000**; inversión **−$60,000** (compra un horno); financiamiento **+$15,000** (préstamo). ¿Cuál es el **efectivo final**?',
          answer: 80000,
          hint: 'Efectivo inicial + los tres flujos con su signo.',
          why: '85,000 − 60,000 + 15,000 = $40,000 de aumento. 40,000 + 40,000 = **$80,000**.',
        },
      },
      { tip: 'Utilidad ≠ efectivo. Este estado muestra el **dinero real** que entró y salió (NIF B-2).' },
    ],
    // De utilidad a efectivo
    [
      { text: 'Marta ganó **$80,000** «en papel». ¿Cuánto efectivo generó de verdad su día a día? El **método indirecto** parte de la utilidad y la ajusta.' },
      { text: 'Las reglas:\n➕ **Depreciación:** fue gasto «en papel», no salió dinero\n➖ **Clientes subió:** ese dinero aún no llega\n➕ **Proveedores subió:** no has pagado, el dinero sigue contigo\n🔁 Si un activo **baja**, suma; si un pasivo **baja**, resta' },
      {
        ask: 'Los **inventarios** de Marta **bajaron** $4,000. ¿Qué haces con eso?',
        options: [
          { text: 'Lo sumo', ok: true, reply: '¡Bien! Un activo que baja libera efectivo, así que **suma**.' },
          { text: 'Lo resto', reply: 'Se resta cuando el activo **sube**. Si baja, libera efectivo y **suma**.' },
          { text: 'No cuenta', reply: 'Sí cuenta: es capital de trabajo. Un activo que baja **suma**.' },
        ],
      },
      {
        rush: {
          title: '¿Suma o resta al flujo de operación?',
          seconds: 40,
          labels: ['Suma', 'Resta'],
          items: [
            { text: 'Depreciación del año', ans: 0 },
            { text: 'Clientes aumentó', ans: 1 },
            { text: 'Proveedores aumentó', ans: 0 },
            { text: 'Inventarios aumentó', ans: 1 },
            { text: 'Inventarios disminuyó', ans: 0 },
            { text: 'Proveedores disminuyó', ans: 1 },
            { text: 'Clientes disminuyó', ans: 0 },
          ],
        },
      },
      {
        calc: {
          question: 'Utilidad neta **$80,000**; depreciación **$12,000**; clientes aumentó **$9,000**; inventarios disminuyó **$4,000**; proveedores disminuyó **$6,000**. ¿Cuál es el **flujo de operación**?',
          answer: 81000,
          hint: 'Suma la depreciación, resta el aumento de clientes, suma la baja de inventarios, resta la baja de proveedores.',
          why: '80,000 + 12,000 − 9,000 + 4,000 − 6,000 = **$81,000**.',
        },
      },
      { tip: 'La depreciación se suma porque **no salió dinero**, no porque «genere» efectivo. (La NIF B-2 parte de la utilidad antes de impuestos; aquí usamos la utilidad neta para simplificar.)' },
    ],
    // ¿Cómo cambió lo de los dueños?
    [
      { text: 'Marta y su socio pusieron dinero, ganaron y se repartieron una parte. ¿Cómo quedó lo de los dueños? Lo cuenta el **estado de cambios en el capital contable**: con cuánto empezó, qué pasó y con cuánto terminó.' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Capital social', 'El dinero que los socios pusieron para arrancar o crecer'],
            ['Aportaciones', 'Dinero nuevo que los socios meten en el año'],
            ['Utilidades retenidas', 'Ganancias que se quedaron en la empresa'],
            ['Dividendos', 'La parte de las ganancias que se reparte a los socios'],
          ],
        },
      },
      { text: 'Dos reglas:\n🧱 **Capital social** final = inicial + aportaciones − reembolsos\n💰 **Utilidades retenidas** finales = iniciales + utilidad neta − dividendos\nLos dividendos salen de las **utilidades retenidas**, no del capital social.' },
      {
        calc: {
          question: 'Utilidades retenidas iniciales **$60,000**; utilidad neta **$35,000**; dividendos decretados **$15,000**. ¿Cuánto son las **utilidades retenidas finales**?',
          answer: 80000,
          hint: 'Iniciales + utilidad neta − dividendos.',
          why: '60,000 + 35,000 − 15,000 = **$80,000**.',
        },
      },
      {
        calc: {
          question: 'Capital social inicial **$200,000** y una aportación de **$30,000**. Utilidades retenidas finales **$80,000**. ¿Cuál es el **capital contable final**?',
          answer: 310000,
          hint: '(Capital social inicial + aportación) + utilidades retenidas finales.',
          why: '200,000 + 30,000 = 230,000; 230,000 + 80,000 = **$310,000**. Error común: restar los dividendos al capital social.',
        },
      },
      {
        ask: '¿Cuál de estos movimientos **no** aparece en el estado de cambios en el capital?',
        options: [
          { text: 'Compra de harina a crédito', ok: true, reply: '¡Exacto! Sube un activo (inventario) y un pasivo (proveedores); el capital no cambia.' },
          { text: 'Aportación de los socios', reply: 'Esa sí aparece: sube el capital social. Lo que no aparece es la **compra a crédito**, que no toca el capital.' },
          { text: 'Dividendos decretados', reply: 'Esos sí aparecen: bajan las utilidades retenidas. Lo que no aparece es la **compra a crédito**.' },
          { text: 'Utilidad del año', reply: 'Esa sí aparece: sube las utilidades retenidas. Lo que no aparece es la **compra a crédito**.' },
        ],
      },
      { tip: 'Aportaciones → **capital social**. Utilidad y dividendos → **utilidades retenidas**. (NIF B-4)' },
    ],
  ],
}
