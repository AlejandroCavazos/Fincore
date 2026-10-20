import type { InteractiveLesson } from './types'

export const intL601: InteractiveLesson = {
  lessonId: 'L6-01',
  sections: [
    // ¿Para qué sirve una razón?
    [
      { text: 'Tomás es analista junior en un banco 🏦. Le llegan los números de la **Ferretería El Tornillo**: debe **$200,000**. ¿Eso es mucho o poco?' },
      {
        ask: '¿Qué necesita Tomás para saber si $200,000 de deuda es mucho?',
        options: [
          { text: 'Compararla con lo que tiene la ferretería', ok: true, reply: '¡Eso! Una cifra sola no dice mucho. Comparada con otra (lo que tiene, lo que vende) ya dice algo útil.' },
          { text: 'Nada: $200,000 siempre es mucho', reply: 'Para una tiendita sí, para una cadena grande no. Hay que **compararla con otra cifra**, como lo que tiene.' },
          { text: 'Saber el color del local', reply: 'Eso no dice nada de sus finanzas. Le sirve **comparar la deuda con lo que tiene** la ferretería.' },
        ],
      },
      { text: 'Eso es una **razón financiera**: dividir dos cifras de los estados financieros. Es como el «km por litro» de un coche 🚗: 40 litros no dice mucho, pero «12 km por litro» sí se puede comparar.' },
      {
        order: {
          title: 'Arma la definición',
          steps: ['Una razón financiera', 'divide dos cifras', 'de los estados financieros', 'para poder comparar entre años y empresas'],
          done: '¡Listo! Ya la puedes explicar con tus palabras.',
        },
      },
      { text: 'Una razón **no es buena ni mala por sí sola**. Tomás la mira contra:\n📈 su **tendencia** (¿mejora o empeora cada año?)\n🏭 el **promedio de la industria**\n🛒 el **tipo de negocio**: un súper opera con poca liquidez y eso es normal en su giro.' },
      {
        multi: {
          title: '¿Con qué compara Tomás una razón? Marca todo lo correcto',
          items: [
            { text: 'Con la misma razón de años anteriores', ok: true },
            { text: 'Con el promedio de su industria', ok: true },
            { text: 'Con lo normal en ese tipo de negocio', ok: true },
            { text: 'Con nada: el número solo ya dice si es bueno', ok: false },
          ],
          why: 'Una razón se interpreta con su **tendencia**, contra la **industria** y según el **giro** del negocio.',
        },
      },
      { tip: 'Razón = una cifra ÷ otra. Sirve para **comparar**, nunca se lee sola.' },
    ],
    // ¿Puede pagar lo que debe?
    [
      { text: 'El Tornillo pide un préstamo. Lo primero que revisa Tomás: **¿le alcanza para pagar lo que vence este año?** Eso es la **liquidez**.\n🟢 **Activo circulante:** lo que tienes o cobrarás en menos de un año (efectivo, clientes, inventarios).\n🔴 **Pasivo circulante:** lo que debes pagar en menos de un año.\n➗ **Razón circulante** = activo circulante ÷ pasivo circulante.' },
      {
        calc: {
          question: 'El Tornillo tiene activo circulante de $300,000 y pasivo circulante de $200,000. ¿Cuál es su razón circulante?',
          answer: 1.5,
          unit: 'veces',
          hint: 'Activo circulante ÷ pasivo circulante: 300,000 ÷ 200,000.',
          why: '300,000 ÷ 200,000 = **1.5 veces**: por cada $1 que debe a corto plazo tiene $1.50 para pagarlo.',
        },
      },
      { text: 'Pero los tornillos del almacén primero hay que **venderlos** para tener dinero. La **prueba ácida** quita los inventarios:\n(activo circulante − inventarios) ÷ pasivo circulante.' },
      {
        calc: {
          question: 'De esos $300,000, $100,000 son inventarios. El pasivo circulante es $200,000. ¿Cuál es su prueba ácida?',
          answer: 1,
          unit: 'veces',
          hint: 'Primero resta: 300,000 − 100,000. Luego divide entre 200,000.',
          why: '300,000 − 100,000 = 200,000; 200,000 ÷ 200,000 = **1 vez**. Si no restas los inventarios, te sale la razón circulante (1.5).',
        },
      },
      {
        ask: 'Otra ferretería tiene razón circulante de **6 veces**. ¿Es siempre una gran señal?',
        options: [
          { text: 'No: puede ser dinero ocioso o inventario que no se vende', ok: true, reply: '¡Bien! Menos de 1 es alerta, pero un número muy alto puede indicar **dinero parado** que no rinde.' },
          { text: 'Sí: entre más alta, siempre mejor', reply: 'No siempre. Una liquidez muy alta puede ser **dinero ocioso** o inventario lento. Se compara con la industria.' },
          { text: 'Sí, porque significa que no tiene deudas', reply: 'Tener 6 veces no quiere decir que no deba nada. Y tanto dinero quieto puede ser **dinero ocioso**.' },
        ],
      },
      { text: 'El **apalancamiento** mide cuánto se financia con **deuda** en vez de con dinero de los dueños. **Endeudamiento** = pasivo total ÷ activo total × 100.' },
      {
        calc: {
          question: 'El Tornillo tiene pasivo total de $600,000 y activo total de $1,000,000. ¿Cuál es su endeudamiento en %?',
          answer: 60,
          unit: '%',
          hint: 'Pasivo total ÷ activo total × 100: 600,000 ÷ 1,000,000 × 100.',
          why: '600,000 ÷ 1,000,000 = 0.60 → **60 %**: 60 centavos de cada peso de activos se pagaron con deuda. Ojo: pasivo ÷ capital es otra razón (deuda a capital).',
        },
      },
      {
        sort: {
          title: '¿Liquidez o apalancamiento?',
          buckets: ['Liquidez', 'Apalancamiento'],
          items: [
            { text: 'Razón circulante', bucket: 0, why: 'Mide si alcanza para pagar lo de corto plazo.' },
            { text: 'Prueba ácida', bucket: 0, why: 'Es liquidez sin contar los inventarios.' },
            { text: 'Endeudamiento (pasivo ÷ activo)', bucket: 1, why: 'Mide cuánto de lo que tiene se pagó con deuda.' },
            { text: 'Deuda a capital (pasivo ÷ capital)', bucket: 1, why: 'Compara la deuda con el dinero de los dueños.' },
            { text: 'Cobertura de intereses (EBIT ÷ intereses)', bucket: 1, why: 'Dice cuántas veces la utilidad de operación (EBIT) cubre los intereses de la deuda.' },
          ],
        },
      },
    ],
    // Ganar y aprovechar lo que tienes
    [
      { text: 'El Tornillo puede pagar. Ahora Tomás pregunta dos cosas: **¿cuánto gana?** (rentabilidad) y **¿qué tan bien usa lo que tiene?** (eficiencia).' },
      { text: '💰 **Margen neto** = utilidad neta ÷ ventas × 100.\n🏠 **ROA** = utilidad neta ÷ activo total × 100.\n👥 **ROE** = utilidad neta ÷ capital contable × 100 (el dinero de los dueños).' },
      {
        calc: {
          question: 'El Tornillo vendió $1,000,000 y su utilidad neta fue $50,000. ¿Cuál es su margen neto en %?',
          answer: 5,
          unit: '%',
          hint: 'Utilidad neta ÷ ventas × 100: 50,000 ÷ 1,000,000 × 100.',
          why: '50,000 ÷ 1,000,000 = 0.05 → **5 %**: de cada $100 vendidos le quedan $5 de ganancia.',
        },
      },
      { text: '⚙️ **Eficiencia:** rotación de activos (ventas ÷ activo total), rotación de inventarios (costo de ventas ÷ inventario) y **días de cobranza** = clientes ÷ ventas × 365.\n**Clientes** son ventas a crédito que aún no te pagan.' },
      {
        calc: {
          question: 'El Tornillo vende $3,650,000 al año y sus clientes le deben $730,000. ¿Cuántos días tarda en cobrar?',
          answer: 73,
          unit: 'días',
          hint: 'Clientes ÷ ventas × 365: 730,000 ÷ 3,650,000 = 0.2; luego × 365.',
          why: '0.2 × 365 = **73 días**. Si al revés divides ventas ÷ clientes, sale un número sin sentido.',
        },
      },
      {
        ask: 'Si El Tornillo da 30 días de crédito y tarda 73 en cobrar, ¿qué significa?',
        options: [
          { text: 'Cobra tarde: tiene su dinero atorado más tiempo', ok: true, reply: '¡Exacto! Menos días es mejor: cobras más rápido y tienes el dinero antes.' },
          { text: 'Va muy bien: más días es mejor', reply: 'Al revés: **menos días es mejor**. 73 contra 30 dice que cobra tarde.' },
          { text: 'No importa, cobrar no afecta al negocio', reply: 'Sí importa: mientras no cobra, ese dinero no lo puede usar. **Cobra tarde.**' },
        ],
      },
      {
        sort: {
          title: '¿Rentabilidad o eficiencia?',
          buckets: ['Rentabilidad (¿cuánto gano?)', 'Eficiencia (¿qué tan bien uso lo que tengo?)'],
          items: [
            { text: 'Margen neto', bucket: 0, why: 'Ganancia por cada peso vendido.' },
            { text: 'ROA', bucket: 0, why: 'Ganancia por cada peso de activos.' },
            { text: 'ROE', bucket: 0, why: 'Ganancia por cada peso de los dueños.' },
            { text: 'Rotación de inventarios', bucket: 1, why: 'Mide qué tan rápido se mueve el inventario.' },
            { text: 'Días de cobranza', bucket: 1, why: 'Mide qué tan rápido cobra.' },
            { text: 'Rotación de activos', bucket: 1, why: 'Cuánto vende por cada peso de activos.' },
          ],
        },
      },
      { tip: 'Ya tienes 4 familias: **liquidez** y **apalancamiento** (¿puede pagar?), **rentabilidad** y **eficiencia** (¿gana y usa bien lo suyo?).' },
    ],
    // ¿De dónde sale su ganancia?
    [
      { text: 'Un taquero 🌮 puede ganar de tres formas: mucho **por taco**, vendiendo **muchísimos tacos** con el mismo puesto, o con un puesto más grande **prestado**.' },
      { text: 'El **modelo DuPont** parte el ROE en esas tres palancas y las **multiplica**:\nROE = margen neto × rotación de activos × multiplicador de capital.\nMultiplicador = activo total ÷ capital: mide cuánta deuda usa.' },
      {
        match: {
          title: 'Une cada palanca con el taquero',
          pairs: [
            ['Margen neto', 'Gana mucho por cada taco'],
            ['Rotación de activos', 'Vende muchísimos tacos con el mismo puesto'],
            ['Multiplicador de capital', 'Agranda el puesto con dinero prestado'],
          ],
        },
      },
      {
        calc: {
          question: 'El Tornillo tiene margen neto de 5 %, rotación de activos de 2 veces y multiplicador de 2. ¿Cuál es su ROE en %?',
          answer: 20,
          unit: '%',
          hint: 'Multiplica, no sumes: 5 % × 2 × 2.',
          why: '5 % × 2 = 10 % (eso es el ROA). 10 % × 2 = **20 %**. Si sumas los factores (5 + 2 + 2) te sale un número sin sentido.',
        },
      },
      {
        sim: {
          title: 'Mueve las tres palancas de El Tornillo',
          inputs: [
            { key: 'm', label: 'Margen neto (%)', min: 2, max: 10, step: 1, value: 5 },
            { key: 'r', label: 'Rotación de activos (veces)', min: 1, max: 3, step: 0.5, value: 1.5 },
            { key: 'x', label: 'Multiplicador de capital (deuda)', min: 1, max: 3, step: 0.5, value: 2 },
          ],
          outputs: [
            { label: 'ROA', calc: (v) => v.m * v.r, unit: '%' },
            { label: 'ROE', calc: (v) => v.m * v.r * v.x, unit: '%', main: true },
          ],
          goal: {
            text: 'Llega a un **ROE de 20 % o más** con un multiplicador de **2 o menos** (sin abusar de la deuda).',
            check: (v) => v.m * v.r * v.x >= 20 && v.x <= 2,
            done: 'Lo lograste con margen o rotación, no solo con deuda. Más deuda sube el ROE, pero también el riesgo.',
          },
        },
      },
      {
        ask: 'Norte y Sur tienen el mismo ROA (10 %). Norte tiene ROE de 30 % y Sur de 12 %. ¿Por qué?',
        options: [
          { text: 'Norte usa mucha más deuda', ok: true, reply: '¡Sí! ROE = ROA × multiplicador. Norte: 30 ÷ 10 = 3; Sur: 12 ÷ 10 = 1.2. Más deuda: más ROE, pero **más riesgo**.' },
          { text: 'Norte tiene mayor margen', reply: 'Con el mismo ROA, la diferencia no viene del margen ni la rotación: viene del **multiplicador** (la deuda).' },
          { text: 'Norte tiene menos riesgo', reply: 'Al revés: su ROE alto viene de **más deuda**, y más deuda es más riesgo.' },
        ],
      },
      { tip: 'DuPont: ROE = margen × rotación × multiplicador. **Se multiplican, no se suman.** Si conoces ROE y ROA: multiplicador = ROE ÷ ROA.' },
    ],
  ],
}
