import type { InteractiveLesson } from './types'

export const intCON09: InteractiveLesson = {
  lessonId: 'CON-09',
  sections: [
    // Control: quién manda en el grupo
    [
      { text: '**Grupo Tacos Felices** 🌮 es la empresa «mamá» (**controladora**). Tiene empresas «hijas» (**subsidiarias**): una hace tortillas y otra reparte.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Controladora', 'La empresa que manda en el grupo'],
            ['Subsidiaria', 'La empresa controlada por otra'],
            ['Asociada', 'Empresa donde solo tienes influencia significativa'],
            ['Método de participación', 'La inversión va en un solo renglón que sube o baja con tu parte de las utilidades'],
          ],
        },
      },
      { text: 'Controlas una empresa cuando **decides** cómo se maneja y te va bien o mal según le vaya a ella. Lo usual es más del 50% de los votos, pero importa la realidad.' },
      {
        sort: {
          title: '¿Qué es cada inversión de Grupo Tacos Felices?',
          buckets: ['Subsidiaria (se consolida)', 'Asociada (método de participación)', 'Inversión financiera'],
          items: [
            { text: 'Tortillería: tiene 85% de las acciones y mayoría en el consejo', bucket: 0, why: 'Tiene el poder de decidir: hay control.' },
            { text: 'Salsas del Norte: tiene 30% y un consejero', bucket: 1, why: 'Puede opinar e influir, pero no manda: influencia significativa.' },
            { text: 'Unas pocas acciones de una empresa en la bolsa', bucket: 2, why: 'Ni control ni influencia: inversión financiera.' },
            { text: 'Repartidora: tiene 100% de las acciones', bucket: 0, why: 'Decide todo: control.' },
          ],
        },
      },
      {
        ask: 'Grupo Tacos Felices tiene solo el **45%** de una cafetería, pero por un acuerdo nombra a la mayoría del consejo y decide todo cómo se maneja. ¿Qué es?',
        options: [
          { text: 'Asociada, porque tiene menos del 50%', reply: 'El 50% es lo usual, pero **no siempre**. Si de verdad decide todo, tiene control.' },
          { text: 'Subsidiaria: hay control y se consolida', ok: true, reply: '¡Bien visto! Importa la **realidad**, no solo el porcentaje: tiene poder y lo usa.' },
          { text: 'Inversión financiera', reply: 'No: decide cómo se maneja la cafetería. Eso es mucho más que una simple inversión.' },
        ],
      },
      { tip: 'Control → **consolidas**. Influencia significativa (en general desde el 20% de los votos) → **método de participación**.' },
    ],
    // Sumar y eliminar: el grupo como una sola empresa
    [
      { text: 'Consolidar es presentar al grupo **como si fuera una sola empresa**. Primero sumas; luego quitas lo que pasó **dentro** del grupo.' },
      {
        order: {
          title: 'Ordena los pasos para consolidar',
          steps: [
            'Juntar los estados financieros de la controladora y de sus subsidiarias',
            'Sumar renglón por renglón: caja con caja, ventas con ventas',
            'Eliminar ventas, compras, cuentas por cobrar y por pagar entre ellas',
            'Eliminar la inversión de la controladora contra el capital de la subsidiaria',
            'Presentar al grupo como una sola empresa',
          ],
          done: 'Primero **sumar**, después **eliminar**. Así nada se cuenta dos veces.',
        },
      },
      {
        rush: {
          title: '¿Se elimina al consolidar?',
          seconds: 40,
          labels: ['Se elimina', 'Se queda'],
          items: [
            { text: 'La tortillería le vende tortillas a la controladora', ans: 0 },
            { text: 'La controladora le vende tacos a un cliente en la calle', ans: 1 },
            { text: 'La controladora le presta dinero a la repartidora', ans: 0 },
            { text: 'Un banco le presta dinero a la repartidora', ans: 1 },
            { text: 'La repartidora le cobra el flete a la controladora', ans: 0 },
            { text: 'Sueldos pagados a los taqueros', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Clientes: controladora **$300,000** y subsidiaria **$120,000**. De eso, **$40,000** se los debe la controladora a la subsidiaria. ¿Cuánto es **Clientes consolidado**?',
          answer: 380000,
          hint: 'suma los dos y quita lo que se deben entre ellas.',
          why: '$300,000 + $120,000 − $40,000 = **$380,000**. Una empresa no puede deberse a sí misma.',
        },
      },
      {
        spot: {
          title: 'Encuentra el error en la eliminación',
          story: 'La tortillería le vendió a crédito **$40,000** a la controladora y aún no se paga. El contador elimina la venta y las cuentas entre ellas:',
          lines: [
            { account: 'Ventas', side: 'D', amount: 40000 },
            { account: 'Costo de ventas', side: 'C', amount: 40000 },
            { account: 'Proveedores', side: 'D', amount: 40000 },
            { account: 'Clientes', side: 'D', amount: 40000 },
          ],
          wrong: 3,
          why: 'Para quitar un saldo se hace lo contrario de su lado normal. Clientes es un activo (saldo en el debe), así que se elimina con **abono**, no con cargo.',
        },
      },
      { tip: 'Si dentro del grupo hubo venta, compra, préstamo o cobro, **se elimina**. Con terceros, **se queda**.' },
    ],
    // Participación no controladora y crédito mercantil
    [
      { text: 'Si la controladora tiene el 80% de una hija, igual suma el **100%** de sus activos y pasivos, porque los controla todos. El 20% de otros socios es la **participación no controladora**.' },
      {
        calc: {
          question: 'Grupo Tacos Felices tiene el **75%** de la tortillería. El capital de la tortillería es **$800,000**. ¿Cuánto es la **participación no controladora**?',
          answer: 200000,
          hint: 'los otros socios tienen 100% − 75%.',
          why: '25% × $800,000 = **$200,000**. Se muestra por separado dentro del capital contable consolidado.',
        },
      },
      { text: 'Si la controladora paga **más** que el valor razonable de su parte de los activos netos, la diferencia es el **crédito mercantil**: lo que pagó por marca, clientes y equipo humano.' },
      {
        sim: {
          title: 'Comprando el 80% de una taquería',
          inputs: [
            { key: 'p', label: 'Precio pagado por el 80%', min: 200000, max: 800000, step: 50000, value: 300000 },
            { key: 'v', label: 'Activos netos a valor razonable (100%)', min: 300000, max: 700000, step: 50000, value: 500000 },
          ],
          outputs: [
            { label: 'Tu parte de los activos netos (80%)', calc: (x) => x.v * 0.8 },
            { label: 'Crédito mercantil', calc: (x) => Math.max(0, x.p - x.v * 0.8), main: true },
          ],
          goal: {
            text: 'Ajusta los datos hasta que haya un **crédito mercantil de $100,000 o más**.',
            check: (x) => x.p - x.v * 0.8 >= 100000,
            done: 'Crédito mercantil = precio pagado − tu parte de los activos netos a valor razonable. Paga lo que no aparece por separado: marca, clientes, equipo humano.',
          },
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Se consolida el 100% de los activos y pasivos de la subsidiaria', ok: true },
            { text: 'La participación no controladora va dentro del capital contable consolidado', ok: true },
            { text: 'El crédito mercantil se revisa cada año por deterioro', ok: true },
            { text: 'Con 80% solo se suma el 80% de cada activo', ok: false },
            { text: 'El crédito mercantil se amortiza cada año', ok: false },
          ],
          why: 'Se suma todo lo que se controla (100%), la parte de otros socios va aparte en el capital, y el crédito mercantil **no se amortiza**: se revisa cada año por deterioro.',
        },
      },
      { tip: 'Participación no controladora = % de otros socios × capital de la subsidiaria.' },
    ],
  ],
}
