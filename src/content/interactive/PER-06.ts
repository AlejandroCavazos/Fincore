import type { InteractiveLesson } from './types'

export const intPER06: InteractiveLesson = {
  lessonId: 'PER-06',
  sections: [
    // ¿Qué es la inflación?
    [
      { text: 'Don Héctor, de 62 años, tiene una fonda 🍲. Hace un año su despensa semanal costaba **$2,000**. Hoy, los mismos productos cuestan **$2,100**.' },
      { text: 'Eso huele a **inflación**: un aumento **generalizado** (suben muchos productos, no uno) y **sostenido** (pasa a lo largo del tiempo) de los precios. Lo contrario se llama **deflación**.' },
      {
        ask: 'Esta semana el jitomate subió por una mala cosecha. ¿Eso es inflación?',
        options: [
          { text: 'No por sí solo: es un producto y una sola vez', ok: true, reply: '¡Exacto! Hay inflación cuando, en promedio, toda la canasta cuesta más con el tiempo.' },
          { text: 'Sí: cualquier aumento de precio es inflación', reply: 'Un solo producto que sube no basta. La inflación es **generalizada y sostenida**.' },
          { text: 'Sí, si sube más de $10', reply: 'No depende de cuántos pesos. La inflación es que suban **muchos** precios **a lo largo del tiempo**.' },
        ],
      },
      {
        sort: {
          title: '¿Es inflación o no?',
          buckets: ['Inflación', 'No es inflación'],
          items: [
            { text: 'Durante meses suben la comida, el transporte y la renta', bucket: 0, why: 'Muchos precios, a lo largo del tiempo: inflación.' },
            { text: 'El aguacate sube una semana por una helada', bucket: 1, why: 'Un solo producto, un momento: cambio de precio.' },
            { text: 'Una tienda pone todo en oferta', bucket: 1, why: 'Es una baja puntual de una tienda.' },
            { text: 'Mes tras mes, la canasta de la fonda cuesta más', bucket: 0, why: 'La canasta en promedio sube de forma continua: inflación.' },
            { text: 'A la ayudante de Don Héctor le suben el sueldo por un ascenso', bucket: 1, why: 'Un ascenso no es un cambio de precios.' },
          ],
        },
      },
      { text: '🧮 **Aumento** = precio nuevo − precio anterior.\n🧮 **Aumento %** = aumento ÷ precio anterior × 100.' },
      {
        calc: {
          question: 'La despensa de Don Héctor pasó de **$2,000** a **$2,100**. ¿Cuánto subió en porcentaje?',
          answer: 5,
          unit: '%',
          hint: 'Aumento: 2,100 − 2,000 = 100. Luego 100 ÷ 2,000 × 100.',
          why: '100 ÷ 2,000 × 100 = **5%**. Se divide entre el precio **anterior**, no entre el nuevo.',
        },
      },
      { tip: 'Una inflación **baja y estable** es lo que buscan los bancos centrales. En México, esa tarea le toca al **Banco de México**.' },
    ],
    // ¿Cómo se mide la inflación?
    [
      { text: '¿Cómo sabe todo el país cuánto subieron los precios? Con una **canasta gigante** 🧺 de cosas que compran los hogares.' },
      {
        ask: '¿Quién crees que publica ese índice en México?',
        options: [
          { text: 'El INEGI', ok: true, reply: '¡Sí! El INEGI publica el Índice Nacional de Precios al Consumidor.' },
          { text: 'La PROFECO', reply: 'La PROFECO vigila precios en tiendas, pero el índice lo publica el **INEGI**.' },
          { text: 'El SAT', reply: 'El SAT cobra impuestos. El índice de precios lo publica el **INEGI**.' },
        ],
      },
      { text: 'Se llama **INPC** (Índice Nacional de Precios al Consumidor). Registra los precios de cientos de bienes y servicios (comida, transporte, renta, educación) y los resume en **un número**. La inflación es su **cambio porcentual**.\n🧮 Inflación % = (índice final ÷ índice inicial − 1) × 100.' },
      {
        order: {
          title: 'Arma la cuenta de la inflación',
          steps: ['Divide el índice final entre el inicial', 'Al resultado réstale 1', 'Multiplica por 100'],
          done: '¡Listo! Así sacas el cambio porcentual del índice.',
        },
      },
      {
        calc: {
          question: 'Cifras de ejemplo: el índice pasa de **150** a **156**. ¿Cuál fue la inflación en porcentaje?',
          answer: 4,
          unit: '%',
          hint: '156 ÷ 150 = 1.04. Luego − 1 y × 100.',
          why: '156 ÷ 150 = 1.04. 1.04 − 1 = 0.04. × 100 = **4%**.',
        },
      },
      {
        ask: 'Don Héctor dice: "El índice subió 6 puntos, así que la inflación fue de 6%". ¿Tiene razón?',
        options: [
          { text: 'No: importa el cambio porcentual, que fue 4%', ok: true, reply: '¡Bien! Restar puntos no da el porcentaje. Lo que importa es cuánto **cambia en proporción**.' },
          { text: 'Sí: cada punto es un 1%', reply: 'Solo pasaría si el índice empezara en 100. Aquí empezó en 150: la inflación fue **4%**.' },
          { text: 'No: fue de 156%', reply: '156 es el nivel del índice, no su cambio. La inflación fue **4%**.' },
        ],
      },
      {
        match: {
          title: 'Une cada término',
          pairs: [
            ['INPC', 'La canasta que resume los precios en un número'],
            ['INEGI', 'Publica el INPC'],
            ['Banco de México', 'Busca una inflación baja y estable'],
            ['Deflación', 'Baja generalizada de los precios'],
          ],
        },
      },
    ],
    // ¿Cuánto compra tu dinero?
    [
      { text: 'Don Héctor guarda **$5,250** en efectivo en un cajón durante un año 💵. Ese año, la inflación (de ejemplo) es de **5%**.' },
      {
        ask: 'Al final del año, ¿qué pasó con su dinero?',
        options: [
          { text: 'Siguen siendo $5,250, pero compran menos', ok: true, reply: '¡Exacto! El número es igual, pero los precios subieron: perdió poder de compra.' },
          { text: 'Ahora compran más', reply: 'Al revés: con precios más altos, el mismo dinero **compra menos**.' },
          { text: 'Ahora hay menos billetes en el cajón', reply: 'Los billetes siguen ahí. Lo que baja es **lo que pueden comprar**.' },
        ],
      },
      { text: 'El **poder adquisitivo** es lo que puedes comprar con tu dinero.\n🔢 **Nominal:** el número que ves.\n🛒 **Real:** lo que ese dinero compra a precios de antes.\n🧮 Valor real = nominal ÷ (1 + inflación).' },
      {
        calc: {
          question: '¿Cuál es el valor real de los **$5,250** de Don Héctor, con **5%** de inflación?',
          answer: 5000,
          hint: '5% = 0.05. Divide: 5,250 ÷ 1.05.',
          why: '5,250 ÷ 1.05 = **$5,000**. Sigue teniendo $5,250, pero compran lo que antes compraban $5,000. Restar 5% directo (5,250 × 0.95) da una cifra cercana, pero no exacta.',
        },
      },
      { text: '¿Un aumento de sueldo te hace más rico? Compáralo con la inflación. Una forma rápida: **real ≈ aumento − inflación**.' },
      {
        sim: {
          title: 'El aumento de Marisol, la ayudante de la fonda',
          inputs: [
            { key: 'a', label: 'Aumento de sueldo (%)', min: 0, max: 10, step: 1, value: 3 },
            { key: 'i', label: 'Inflación del año, de ejemplo (%)', min: 2, max: 8, step: 1, value: 5 },
          ],
          outputs: [{ label: 'Cambio real aproximado', calc: (x) => x.a - x.i, main: true, unit: '%' }],
          goal: {
            text: 'Haz que el aumento **al menos iguale** a la inflación.',
            check: (x) => x.a - x.i >= 0,
            done: 'Si el sueldo sube menos que los precios, en realidad se puede comprar menos que antes.',
          },
        },
      },
      {
        multi: {
          title: '¿Qué ayuda a cuidar tu poder de compra?',
          items: [
            { text: 'Pedir aumentos que al menos igualen la inflación', ok: true },
            { text: 'Guardar el ahorro donde pueda ganar un rendimiento, no solo en efectivo', ok: true },
            { text: 'Actualizar el presupuesto cuando suben los precios', ok: true },
            { text: 'Comparar precios y marcas', ok: true },
            { text: 'Guardar todo en efectivo en un cajón', ok: false },
          ],
          why: 'El efectivo guardado no crece y la inflación le quita poder de compra cada año.',
        },
      },
    ],
  ],
}
