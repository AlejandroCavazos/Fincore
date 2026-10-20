import type { InteractiveLesson } from './types'

export const intINV04: InteractiveLesson = {
  lessonId: 'INV-04',
  sections: [
    // ¿Corto o largo plazo?
    [
      { text: 'Martha, de 41 años, tiene una papelería ✏️ y dos metas: comprar mercancía de regreso a clases **en 3 meses** y juntar para su retiro **en 25 años**.' },
      {
        ask: '¿Le conviene poner el dinero de las dos metas en el mismo tipo de inversión?',
        options: [
          { text: 'No, depende de cuándo necesita cada dinero', ok: true, reply: '¡Exacto! El **plazo** decide. Por eso los mercados se dividen en corto y largo plazo.' },
          { text: 'Sí, lo que más pague sirve para todo', reply: 'Lo que más paga suele subir y bajar más. Para dinero que necesita en 3 meses eso es peligroso: **depende del plazo**.' },
          { text: 'Sí, lo más seguro sirve para todo', reply: 'Para el retiro, lo muy seguro crece poco. **Depende de cuándo** necesita cada dinero.' },
        ],
      },
      { text: '⏱️ **Mercado de dinero:** deuda de **un año o menos**. Alta liquidez, bajo riesgo, rendimiento modesto.\n🏗️ **Mercado de capitales:** **acciones** y deuda a **más de un año**. Más riesgo y más potencial.' },
      {
        rush: {
          title: '¿Mercado de dinero o de capitales?',
          seconds: 30,
          labels: ['De dinero', 'De capitales'],
          items: [
            { text: 'CETES a 28 días', ans: 0 },
            { text: 'Acciones de una empresa en bolsa', ans: 1 },
            { text: 'Pagaré bancario a 91 días', ans: 0 },
            { text: 'Bono de una empresa a 10 años', ans: 1 },
            { text: 'Deuda de una empresa a 60 días', ans: 0 },
            { text: 'Bono del gobierno a 20 años', ans: 1 },
          ],
        },
      },
      {
        match: {
          title: 'Ojo con los nombres: une cada uno',
          pairs: [
            ['Mercado de dinero', 'Deuda a un año o menos'],
            ['Mercado de capitales', 'Acciones y deuda a más de un año'],
            ['Mercado de deuda', 'Todos los bonos, cortos y largos'],
            ['Mercado accionario', 'Las acciones'],
          ],
        },
      },
      { tip: 'La idea clave: **corto plazo y liquidez** contra **largo plazo y crecimiento**.' },
    ],
    // ¿Dónde estacionar dinero poco tiempo?
    [
      { text: 'Martha tiene **$36,000** para la mercancía. Los necesita en 3 meses, así que busca algo del mercado de dinero 🅿️.' },
      { text: 'Tres opciones comunes:\n🇲🇽 **CETES:** deuda del gobierno federal a corto plazo.\n🏦 **Pagaré bancario:** un banco te paga un interés fijo por prestarle a un plazo, como 28 o 91 días.\n🏢 **Papel comercial:** deuda de corto plazo de empresas.' },
      {
        sort: {
          title: '¿A quién le presta Martha?',
          buckets: ['Al gobierno', 'A un banco', 'A una empresa'],
          items: [
            { text: 'Compra CETES', bucket: 0, why: 'Los CETES los emite el gobierno federal.' },
            { text: 'Contrata un pagaré a 91 días', bucket: 1, why: 'El pagaré es de un banco.' },
            { text: 'Compra papel comercial a 60 días', bucket: 2, why: 'El papel comercial es deuda de empresas.' },
          ],
        },
      },
      { text: 'Aquí el interés suele ser **simple** (solo sobre lo que pusiste) y con años de **360 días**. En palabras: capital por tasa anual, por la parte del año que dura (días ÷ 360).' },
      {
        order: {
          title: 'Arma la fórmula del interés',
          steps: ['Interés =', 'Capital', '× Tasa anual', '× Días del plazo', '÷ 360'],
          done: '¡Armada! Así se calcula el interés de un pagaré o de otros instrumentos del mercado de dinero.',
        },
      },
      {
        calc: {
          question: 'Martha mete $36,000 en un pagaré a 91 días con tasa anual de ejemplo de 10%. ¿Cuánto interés gana?',
          answer: 910,
          hint: '36,000 × 0.10 = 3,600. Luego × 91 ÷ 360.',
          why: '36,000 × 0.10 = 3,600 al año. 3,600 × 91 ÷ 360 = **$910** por esos 91 días (antes de impuestos).',
        },
      },
      {
        ask: 'Otra operación del mercado de dinero es el **reporto**. ¿Cómo gana ahí Martha?',
        options: [
          { text: 'Compra títulos y se los recompran pronto a un precio mayor', ok: true, reply: '¡Exacto! La diferencia de precio es su ganancia. Se usa mucho para invertir a muy pocos días.' },
          { text: 'Se vuelve socia de la empresa', reply: 'Eso es comprar acciones. En un reporto **le recompran los títulos a un precio mayor** en una fecha cercana.' },
          { text: 'Le pagan un cupón cada seis meses por años', reply: 'Eso suena a un bono de largo plazo. En un reporto **le recompran los títulos pronto a un precio mayor**.' },
        ],
      },
    ],
    // ¿Cuál le conviene a tu meta?
    [
      { text: 'Ahora el retiro de Martha 👵. Ese dinero no lo tocará en **25 años**.' },
      { text: '📈 Con **acciones** te vuelves socio: ganas si la empresa crece y pierdes si le va mal.\n📜 Con **bonos de largo plazo** prestas a varios años a cambio de intereses.\nAmbos pueden subir y bajar de precio en el camino.' },
      {
        multi: {
          title: '¿Qué es cierto de las acciones? Marca todas',
          items: [
            { text: 'Te vuelves socio de la empresa', ok: true },
            { text: 'Ganas si la empresa crece', ok: true },
            { text: 'Puedes perder si a la empresa le va mal', ok: true },
            { text: 'Su precio nunca baja', ok: false },
          ],
          why: 'Eres socio: ganas si le va bien y pierdes si le va mal. Su precio **sí** sube y baja.',
        },
      },
      {
        sort: {
          title: '¿Qué mercado va con cada meta?',
          buckets: ['Mercado de dinero', 'Mercado de capitales'],
          items: [
            { text: 'Fondo para emergencias', bucket: 0, why: 'Lo puedes necesitar ya: liquidez y estabilidad.' },
            { text: 'Inscripción de su hija en 4 meses', bucket: 0, why: 'Meta en meses: mercado de dinero.' },
            { text: 'Retiro dentro de 25 años', bucket: 1, why: 'Mucho tiempo para aguantar subidas y bajadas.' },
            { text: 'Mercancía para dentro de 2 meses', bucket: 0, why: 'Plazo corto: no conviene arriesgarlo.' },
            { text: 'Universidad de su hijo de 2 años', bucket: 1, why: 'Faltan muchos años: puede buscar más crecimiento.' },
          ],
        },
      },
      {
        ask: '¿Por qué tiene sentido el mercado de capitales para la mayor parte del retiro de Martha?',
        options: [
          { text: 'Tiene más potencial de crecer por encima de la inflación a largo plazo', ok: true, reply: '¡Bien! Con altibajos, pero con 25 años por delante hay tiempo de aguantarlos.' },
          { text: 'Porque nunca baja', reply: 'Sí baja, a veces mucho. Conviene por su **mayor potencial de crecer por encima de la inflación** a largo plazo.' },
          { text: 'Porque es más líquido que un pagaré', reply: 'El pagaré es más líquido. Conviene por su **mayor potencial de crecer por encima de la inflación** a largo plazo.' },
        ],
      },
      { tip: '**Meses** → mercado de dinero. **Muchos años** → el mercado de capitales tiene más potencial, con altibajos. Ningún rendimiento está garantizado.' },
    ],
  ],
}
