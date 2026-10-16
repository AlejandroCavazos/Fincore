import type { InteractiveLesson } from './types'

export const intL202: InteractiveLesson = {
  lessonId: 'L2-02',
  sections: [
    // Las tres actividades
    [
      { text: 'El **estado de flujos de efectivo** explica por qué subió o bajó el dinero. Es como tu estado de cuenta 💳 acomodado en **tres cajones**: operación, inversión y financiamiento.' },
      {
        sort: {
          title: '¿En qué cajón va cada movimiento de la cafetería?',
          buckets: ['Operación (día a día)', 'Inversión (cosas grandes)', 'Financiamiento (deudas y dueños)'],
          items: [
            { text: 'Cobro a clientes por cafés vendidos', bucket: 0, why: 'Es el negocio principal.' },
            { text: 'Pago a proveedores de café y leche', bucket: 0, why: 'Gasto del día a día.' },
            { text: 'Pago de sueldos a los baristas', bucket: 0, why: 'Pago a empleados: operación.' },
            { text: 'Compra de una cafetera industrial', bucket: 1, why: 'Activo de largo plazo.' },
            { text: 'Venta de un terreno', bucket: 1, why: 'Venta de un activo de largo plazo.' },
            { text: 'Préstamo recibido del banco', bucket: 2, why: 'Cambia la deuda.' },
            { text: 'La dueña aporta dinero', bucket: 2, why: 'Cambia el capital.' },
            { text: 'Dividendos pagados a los socios', bucket: 2, why: 'Sale dinero hacia los dueños.' },
          ],
        },
      },
      { text: 'Al final, los tres cajones explican el salto entre el efectivo inicial y el final.' },
      {
        calc: {
          question: 'Una panadería 🥐 empieza con **$40,000**. Operación **+$85,000**; inversión **−$60,000** (compra un horno); financiamiento **+$15,000** (préstamo). ¿Cuál es el **efectivo final**?',
          answer: 80000,
          hint: 'efectivo inicial + los tres flujos con su signo.',
          why: '85,000 − 60,000 + 15,000 = $40,000 de aumento. 40,000 + 40,000 = **$80,000**, que debe coincidir con Bancos del balance.',
        },
      },
      {
        ask: 'Un negocio tuvo **utilidad** este año, pero se quedó sin efectivo. ¿Es posible?',
        options: [
          { text: 'No, si hay utilidad hay dinero', reply: 'No siempre: hay ventas a crédito que aún no se cobran y compras grandes que se llevan el efectivo.' },
          { text: 'Sí: utilidad y efectivo no son lo mismo', ok: true, reply: '¡Exacto! Por eso existe este estado: muestra el dinero real que entró y salió.' },
        ],
      },
      { tip: 'En México lo regula la **NIF B-2** (internacional: IAS 7).' },
    ],
    // Método indirecto
    [
      { text: 'El **método indirecto** parte de la utilidad y la ajusta para llegar al efectivo. La regla fácil: si **el cliente te debe más**, ese dinero no llegó (resta); si **tú le debes más al proveedor**, el dinero sigue contigo (suma).' },
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
        sim: {
          title: 'El taller: utilidad $80,000 y depreciación $12,000',
          inputs: [
            { key: 'c', label: 'Cambio en clientes (+ aumentó, − bajó)', min: -20000, max: 20000, step: 1000, value: 9000 },
            { key: 'p', label: 'Cambio en proveedores (+ aumentó, − bajó)', min: -20000, max: 20000, step: 1000, value: -6000 },
          ],
          outputs: [{ label: 'Flujo de operación', calc: (x) => 80000 + 12000 - x.c + x.p, main: true }],
          goal: {
            text: 'Haz que el flujo de operación llegue a **$110,000 o más**.',
            check: (x) => 80000 + 12000 - x.c + x.p >= 110000,
            done: 'Cobrar más rápido (baja clientes) y pagar después (sube proveedores) dejan más efectivo en tu bolsillo.',
          },
        },
      },
      {
        calc: {
          question: 'Utilidad neta **$80,000**; depreciación **$12,000**; clientes aumentó **$9,000**; inventarios disminuyó **$4,000**; proveedores disminuyó **$6,000**. ¿Cuál es el **flujo de operación**?',
          answer: 81000,
          hint: 'suma depreciación, resta el aumento de clientes, suma la baja de inventarios, resta la baja de proveedores.',
          why: '80,000 + 12,000 − 9,000 + 4,000 − 6,000 = **$81,000**.',
        },
      },
      { tip: 'La **depreciación** se suma porque fue un gasto «en papel»: no salió ni un peso. (La NIF B-2 parte de la utilidad antes de impuestos; aquí partimos de la utilidad neta para simplificar.)' },
    ],
    // Estado de cambios en el capital contable
    [
      { text: 'El **estado de cambios en el capital contable** muestra, por cada parte del capital, con cuánto empezó, qué pasó en el año y con cuánto terminó.' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Capital social', 'El dinero que los socios pusieron para arrancar o crecer'],
            ['Utilidades retenidas', 'Ganancias de años anteriores que se quedaron en la empresa'],
            ['Dividendos', 'La parte de las ganancias que se reparte a los socios'],
            ['Aportaciones', 'Dinero nuevo que los socios meten en el año'],
          ],
        },
      },
      {
        calc: {
          question: 'Utilidades retenidas iniciales **$60,000**; utilidad neta **$35,000**; dividendos decretados **$15,000**. ¿Cuánto son las **utilidades retenidas finales**?',
          answer: 80000,
          hint: 'iniciales + utilidad neta − dividendos.',
          why: '60,000 + 35,000 − 15,000 = **$80,000**.',
        },
      },
      {
        spot: {
          title: 'Encuentra el error',
          story: 'Grupo Tacos Felices 🌮 paga **$15,000** de dividendos a sus socios. El auxiliar registra:',
          lines: [
            { account: 'Capital social', side: 'D', amount: 15000 },
            { account: 'Bancos', side: 'C', amount: 15000 },
          ],
          wrong: 0,
          why: 'Los dividendos reparten **ganancias**, así que salen de **Utilidades retenidas**, no del capital social.',
        },
      },
      {
        calc: {
          question: 'Capital social inicial **$200,000** y una aportación de **$30,000**. Utilidades retenidas finales **$80,000**. ¿Cuál es el **capital contable final**?',
          answer: 310000,
          hint: '(capital social inicial + aportaciones) + utilidades retenidas finales.',
          why: '200,000 + 30,000 = $230,000; 230,000 + 80,000 = **$310,000**.',
        },
      },
      { tip: 'Aportaciones → suben el **capital social**. Dividendos → bajan las **utilidades retenidas**. (NIF B-4)' },
    ],
  ],
}
