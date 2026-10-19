import type { InteractiveLesson } from './types'

export const intPER02: InteractiveLesson = {
  lessonId: 'PER-02',
  sections: [
    // ¿Qué es saber de dinero?
    [
      { text: 'Elena es enfermera y vive con su hija Sofi, de 8 años 👩‍⚕️. Gana lo mismo que su compañero Raúl. Al año, ella tiene un colchón de ahorro y él vive con angustia.' },
      {
        ask: '¿Qué crees que hace diferente Elena?',
        options: [
          { text: 'Anota sus gastos, compara precios y guarda algo cada quincena', ok: true, reply: '¡Eso! Con el mismo ingreso, sus hábitos hacen la diferencia.' },
          { text: 'Gana más, pero no lo dice', reply: 'Ganan lo mismo. La diferencia está en **cómo decide**: anota, compara y guarda.' },
          { text: 'Invierte en la bolsa de valores', reply: 'No hace falta. Invertir es solo un tema. Lo que cambia todo son sus **hábitos**: anotar, comparar y guardar.' },
        ],
      },
      { text: 'Eso es la **educación financiera**: conocimientos, habilidades y actitudes que te ayudan a decidir bien con tu dinero. No basta con saber: hay que **actuar** cada día.' },
      {
        match: {
          title: 'Une cada parte con lo que hace Elena',
          pairs: [
            ['Conocimiento', 'Entiende qué es un crédito y qué es la inflación'],
            ['Habilidad', 'Sabe hacer cuentas y comparar dos opciones'],
            ['Actitud', 'Piensa en el futuro de Sofi, no solo en hoy'],
            ['Comportamiento', 'Anota sus gastos cada noche, como hábito'],
          ],
        },
      },
      {
        ask: 'Raúl dice: "Eso es para los que ganan mucho". ¿Tiene razón?',
        options: [
          { text: 'No: quien tiene poco margen es quien más gana al decidir bien', ok: true, reply: '¡Exacto! Un mal crédito o una compra impulsiva pesan más cuando el dinero es justo.' },
          { text: 'Sí: con poco dinero no hay nada que decidir', reply: 'Al contrario: con poco dinero **cada decisión pesa más**. Por eso sirve a todos.' },
          { text: 'Sí: con un sueldo alto el dinero siempre alcanza', reply: 'Sin hábitos, el gasto crece al ritmo del ingreso. Sirve a todos, y más a quien tiene **poco margen**.' },
        ],
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['La educación financiera es', 'tener conocimientos, habilidades y actitudes', 'para decidir bien con tu dinero', 'y convertirlo en hábitos'],
          done: '¡La armaste tú! Saber, saber hacer y querer hacer.',
        },
      },
    ],
    // ¿Lo necesito o lo quiero?
    [
      { text: 'Elena cobra su quincena. En su lista hay renta, medicinas... y un celular nuevo que le encantó 📱.' },
      { text: '🏠 **Necesidad:** indispensable para vivir o trabajar (comida, vivienda, transporte, medicinas).\n🎁 **Deseo:** te gusta, pero puedes posponerlo o sustituirlo.\nLos dos valen, pero las necesidades van primero.' },
      {
        rush: {
          title: '¿Necesidad o deseo?',
          seconds: 30,
          labels: ['🏠 Necesidad', '🎁 Deseo'],
          items: [
            { text: 'Renta del departamento', ans: 0 },
            { text: 'Cambiar su celular, que funciona bien, por el más nuevo', ans: 1 },
            { text: 'Medicina recetada para Sofi', ans: 0 },
            { text: 'Una segunda plataforma de streaming', ans: 1 },
            { text: 'Pasajes para ir al hospital donde trabaja', ans: 0 },
            { text: 'Tenis de marca cuando los suyos aún sirven', ans: 1 },
            { text: 'La despensa básica', ans: 0 },
          ],
        },
      },
      { text: 'El dinero es **limitado**: cada vez que eliges algo, renuncias a otra cosa. Lo que dejas de tener se llama **costo de oportunidad**. También puede ser tiempo o tranquilidad.' },
      {
        ask: 'Elena tiene $1,500 extra. Si los gasta en un concierto, ¿cuál es su costo de oportunidad?',
        options: [
          { text: 'Los zapatos escolares que Sofi necesitaba', ok: true, reply: '¡Sí! Es lo que deja de tener por elegir el concierto.' },
          { text: 'El precio del boleto', reply: 'Eso es lo que paga. El costo de oportunidad es **lo que deja de tener**: los zapatos de Sofi.' },
          { text: 'Nada, porque el concierto le gusta', reply: 'Que le guste no borra la renuncia. Siempre hay algo que dejas: aquí, **los zapatos de Sofi**.' },
        ],
      },
      { tip: 'Antes de gastar, pregúntate: **"¿Qué dejo de hacer con este dinero?"**' },
    ],
    // Metas claras y compras informadas
    [
      { text: 'Elena dice: "Quiero ahorrar". Pero así no sabe **cuánto** ni **para cuándo** 🤔.' },
      {
        ask: '¿Cuál de estas es una meta clara?',
        options: [
          { text: 'Juntar $6,000 para uniforme y útiles de Sofi antes de agosto', ok: true, reply: '¡Eso! Tiene monto, propósito y fecha.' },
          { text: 'Quiero ahorrar más', reply: 'No dice cuánto ni cuándo. Una meta clara tiene **monto y fecha**, como "$6,000 antes de agosto".' },
          { text: 'Algún día tener mucho dinero', reply: '"Mucho" y "algún día" no se pueden medir. Le falta **monto y fecha**.' },
        ],
      },
      { text: 'Una buena meta es **concreta, medible, alcanzable, relevante y con fecha** (meta SMART). Y antes de comprar, sé consumidora informada: compara el **costo total**, no solo el pago.\n🧮 **Costo total a plazos** = pago × número de pagos.' },
      {
        calc: {
          question: 'Un refrigerador cuesta **$7,000** de contado o **10 pagos mensuales de $820**. ¿Cuánto pagaría Elena **de más** a plazos?',
          answer: 1200,
          hint: 'Primero el total: 820 × 10. Luego réstale el precio de contado.',
          why: '820 × 10 = $8,200. Menos 7,000 = **$1,200** de más. Si respondes 8,200, ese es el total, no la diferencia.',
        },
      },
      {
        multi: {
          title: 'Elena va a abrir una tarjeta. ¿Qué hace una consumidora informada?',
          items: [
            { text: 'Lee el contrato y las comisiones antes de firmar', ok: true },
            { text: 'Compara el costo total entre varias opciones', ok: true },
            { text: 'Pregunta lo que no entiende', ok: true },
            { text: 'Le dice su NIP al asesor para que le ayude', ok: false },
            { text: 'Firma rápido porque la mensualidad es baja', ok: false },
          ],
          why: 'Leer, comparar y preguntar son hábitos sanos. El NIP, las contraseñas y los códigos **nunca** se comparten, y una mensualidad baja puede esconder un costo total alto.',
        },
      },
      {
        ask: 'Le cobran a Elena una comisión que nunca aceptó y en la sucursal no le resuelven. ¿A quién puede acudir?',
        options: [
          { text: 'A la CONDUSEF', ok: true, reply: '¡Bien! La CONDUSEF orienta y defiende a los usuarios de servicios financieros.' },
          { text: 'Al INEGI', reply: 'El INEGI hace estadísticas. Quien orienta y defiende a los usuarios es la **CONDUSEF**.' },
          { text: 'A nadie: el banco tiene la última palabra', reply: 'Sí hay a quién acudir: la **CONDUSEF** atiende quejas contra instituciones financieras.' },
        ],
      },
    ],
  ],
}
