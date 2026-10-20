import type { InteractiveLesson } from './types'

export const intFIN16: InteractiveLesson = {
  lessonId: 'FIN-16',
  sections: [
    // ¿Cuántos pesos cuesta un dólar?
    [
      { text: 'Valeria hace salsas en Jalisco 🌶️ y las vende en Texas: **cobra en dólares**. El **tipo de cambio** es el precio de un dólar en pesos: si está en 18, necesitas $18 para comprar un dólar.' },
      {
        ask: 'El dólar pasa de 18 a 20 pesos. ¿Qué le pasó al peso?',
        options: [
          { text: 'Se depreció (perdió valor)', ok: true, reply: '¡Eso! Ahora necesitas más pesos para un dólar: el peso vale menos.' },
          { text: 'Se apreció (ganó valor)', reply: 'El número subió, pero eso significa que cada dólar cuesta **más** pesos. El peso **se depreció**.' },
          { text: 'Nada, el peso sigue igual', reply: 'Si ahora pagas $20 en vez de $18 por un dólar, el peso **se depreció**: vale menos.' },
        ],
      },
      {
        rush: {
          title: '¿El peso se depreció o se apreció?',
          seconds: 30,
          labels: ['Se depreció', 'Se apreció'],
          items: [
            { text: 'De 18 a 20 pesos por dólar', ans: 0 },
            { text: 'De 20 a 18 pesos por dólar', ans: 1 },
            { text: 'De 19 a 21 pesos por dólar', ans: 0 },
            { text: 'De 21 a 19.50 pesos por dólar', ans: 1 },
            { text: 'De 17 a 17.80 pesos por dólar', ans: 0 },
          ],
        },
      },
      { text: '¿A quién le conviene un **peso depreciado**?\n✅ Al **exportador**: sus dólares se vuelven más pesos (como Valeria).\n✅ Al turismo extranjero.\n❌ Al **importador** y a quien debe en dólares: necesitan más pesos para pagar.' },
      {
        sort: {
          title: 'El peso se deprecia. ¿Gana o pierde?',
          buckets: ['Gana', 'Pierde'],
          items: [
            { text: 'Valeria, que cobra en dólares sus salsas', bucket: 0, why: 'Cada dólar que cobra le da más pesos.' },
            { text: 'Una fábrica que importa maquinaria pagada en dólares', bucket: 1, why: 'Necesita más pesos para pagar lo mismo.' },
            { text: 'Una empresa con deuda en dólares', bucket: 1, why: 'Su deuda, medida en pesos, se hace más grande.' },
            { text: 'Un hotel que recibe turistas extranjeros', bucket: 0, why: 'Para los turistas, México sale más barato.' },
          ],
        },
      },
      { text: 'Dos precios del dólar:\n⚡ **Spot:** el de hoy, para entrega inmediata.\n📆 **Forward:** un precio que pactas **hoy** para comprar o vender dólares en una fecha futura.' },
      {
        calc: {
          question: 'Valeria pacta hoy con su banco comprar USD 5,000 dentro de tres meses a un forward de 18.50 pesos por dólar (de ejemplo). ¿Cuántos pesos pagará, pase lo que pase con el spot?',
          answer: 92500,
          hint: 'Dólares × forward: 5,000 × 18.50.',
          why: '5,000 × 18.50 = **$92,500**. El forward fija el precio: aunque el spot suba o baje, ella paga eso.',
        },
      },
    ],
    // ¿Qué conecta tasas y dólar?
    [
      {
        ask: 'El banco le ofrece a Valeria el dólar a un año **más caro** que hoy. ¿Por qué crees?',
        options: [
          { text: 'Porque el banco adivina que subirá', reply: 'No es una predicción. El forward refleja la **diferencia de tasas de interés** entre pesos y dólares.' },
          { text: 'Por la diferencia de tasas de interés entre pesos y dólares', ok: true, reply: '¡Bien pensado! Eso dice la **paridad de tasas de interés**.' },
          { text: 'Porque cobra una comisión escondida', reply: 'El precio a plazo sale de una regla: la **diferencia de tasas de interés** entre pesos y dólares.' },
        ],
      },
      { text: 'Una **paridad** es una regla que conecta el tipo de cambio con otra cosa. La **paridad de tasas de interés cubierta** dice que no puedes ganar dinero gratis ahorrando en el país con tasa más alta y cubriéndote con un forward.\n🧮 Forward = spot × (1 + tasa en pesos) ÷ (1 + tasa en dólares)' },
      {
        order: {
          title: 'Arma la fórmula del forward (pesos por dólar)',
          steps: ['Forward =', 'spot', '× (1 + tasa en pesos)', '÷ (1 + tasa en dólares)'],
          done: '¡Eso! Los pesos van arriba y los dólares abajo, igual que en "pesos por dólar".',
        },
      },
      {
        sim: {
          title: 'Spot de 20 pesos por dólar (tasas de ejemplo)',
          inputs: [
            { key: 'm', label: 'Tasa en pesos (%)', min: 2, max: 12, step: 1, value: 3 },
            { key: 'u', label: 'Tasa en dólares (%)', min: 2, max: 8, step: 1, value: 5 },
          ],
          outputs: [
            { label: 'Spot', calc: () => 20, unit: 'pesos por dólar' },
            { label: 'Forward a un año', calc: (x) => (20 * (1 + x.m / 100)) / (1 + x.u / 100), main: true, unit: 'pesos por dólar' },
          ],
          goal: {
            text: 'Haz que el forward quede **por encima del spot** (más de 20).',
            check: (x) => (20 * (1 + x.m / 100)) / (1 + x.u / 100) > 20,
            done: 'Cuando la tasa en pesos es mayor que en dólares, el forward es mayor que el spot.',
          },
        },
      },
      {
        calc: {
          question: 'Spot de 21 pesos por dólar, tasa a un año en pesos 10 % y en dólares 5 % (datos de ejemplo). ¿Cuál es el forward a un año, en pesos por dólar?',
          answer: 22,
          unit: 'pesos por dólar',
          hint: '21 × 1.10 = 23.10. Divide entre 1.05.',
          why: '21 × 1.10 = 23.10; 23.10 ÷ 1.05 = **22**. Error común: invertir las tasas (21 × 1.05 ÷ 1.10), que daría un peso más fuerte a plazo.',
        },
      },
      { text: 'Otra regla, para el largo plazo: la **paridad del poder de compra**. Si en México los precios suben más rápido que en Estados Unidos, el peso tiende a **depreciarse**, porque con él compras menos. A corto plazo puede fallar mucho.' },
      {
        ask: 'Por años, la inflación en México es mayor que en Estados Unidos. Según el poder de compra, ¿qué tiende a pasar con el peso?',
        options: [
          { text: 'Tiende a depreciarse', ok: true, reply: '¡Sí! Con más inflación, cada peso compra menos y, a largo plazo, vale menos contra el dólar.' },
          { text: 'Tiende a apreciarse', reply: 'Al revés: con más inflación, el peso compra menos y **tiende a depreciarse**.' },
          { text: 'No cambia nada', reply: 'La regla dice que el tipo de cambio se ajusta por la diferencia de inflaciones: el peso **tiende a depreciarse**.' },
        ],
      },
      { tip: 'El forward más caro que el spot **no es una predicción**: es el resultado de la diferencia de tasas.' },
    ],
    // ¿Cómo protegerte del dólar?
    [
      { text: 'Valeria cobrará USD 10,000 en 90 días. Si el peso se aprecia mientras tanto, recibirá menos pesos 😬. Eso es **riesgo cambiario**.' },
      { text: 'Hay tres tipos:\n🧾 **Transacción:** un cobro o pago pendiente en otra moneda.\n📊 **Traducción:** al pasar a pesos los estados de una filial extranjera.\n🌎 **Económico:** a largo plazo, el tipo de cambio cambia tu competitividad, aunque no tengas operaciones en dólares.' },
      {
        sort: {
          title: '¿Qué riesgo cambiario es?',
          buckets: ['Transacción', 'Traducción', 'Económico'],
          items: [
            { text: 'Una factura de un proveedor en dólares que se pagará en 60 días', bucket: 0, why: 'Pago pendiente en otra moneda: transacción.' },
            { text: 'Pasar a pesos el balance de la filial en Texas al cierre', bucket: 1, why: 'Convertir estados de una filial: traducción.' },
            { text: 'Un zapatero local pierde clientes porque un peso fuerte abarata los zapatos importados', bucket: 2, why: 'No tiene facturas en dólares, pero pierde competitividad: económico.' },
            { text: 'Los USD 10,000 que Valeria cobrará en 90 días', bucket: 0, why: 'Cobro pendiente en dólares: transacción.' },
            { text: 'Un hotel recibe menos turistas por años porque el peso sigue caro', bucket: 2, why: 'Efecto de largo plazo en sus ventas: económico.' },
          ],
        },
      },
      { text: 'Para cubrirse hay varias herramientas. Cubrirse **no es para ganar más**: es para **quitar incertidumbre**.' },
      {
        match: {
          title: 'Une cada cobertura con su idea',
          pairs: [
            ['Forward', 'Precio fijo, a la medida, pactado con un banco'],
            ['Futuro', 'Como un forward, pero estandarizado y en bolsa'],
            ['Opción', 'Pagas una prima por el derecho, no la obligación, de cambiar a un precio'],
            ['Cobertura natural', 'Tener ingresos y gastos en la misma moneda'],
          ],
        },
      },
      {
        calc: {
          question: 'Valeria pacta un forward para vender sus USD 10,000 a 19.00 pesos por dólar (de ejemplo). ¿Cuántos pesos recibirá con la cobertura?',
          answer: 190000,
          hint: '10,000 × 19.00.',
          why: '10,000 × 19 = **$190,000** seguros, pase lo que pase con el spot.',
        },
      },
      {
        ask: 'Al vencimiento, el spot terminó en 18.50. ¿Le convino cubrirse?',
        options: [
          { text: 'Sí: recibió $5,000 más que sin cobertura', ok: true, reply: '¡Exacto! Sin cobertura serían 10,000 × 18.50 = $185,000. Con el forward recibió $190,000: $5,000 más.' },
          { text: 'No: perdió $5,000', reply: 'Al revés. Sin cobertura recibiría $185,000; con el forward, $190,000. **Ganó $5,000** al cubrirse.' },
          { text: 'Quedó igual', reply: 'No quedó igual: $190,000 con forward contra $185,000 sin cobertura. **$5,000 a favor** de cubrirse.' },
        ],
      },
      { tip: 'Si el spot hubiera subido, Valeria habría dejado de ganar algo. Aun así, el forward le dio un **ingreso seguro**: esa es su función.' },
    ],
  ],
}
