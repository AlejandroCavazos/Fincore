import type { InteractiveLesson } from './types'

export const intFIN08: InteractiveLesson = {
  lessonId: 'FIN-08',
  sections: [
    // ¿Vale la pena gastar hoy?
    [
      { text: 'Don Beto tiene una panadería en Puebla 🥖. Su horno ya está viejo y además sueña con abrir una sucursal. El dinero no alcanza para todo.' },
      {
        ask: 'Comprar un horno nuevo, ¿qué es para Don Beto?',
        options: [
          { text: 'Gastar hoy esperando recibir más dinero en el futuro', ok: true, reply: '¡Exacto! Eso es un **proyecto de inversión**. Elegir los mejores proyectos se llama **presupuesto de capital**.' },
          { text: 'Un gasto que nunca regresa', reply: 'Si el horno hace más pan, el dinero regresa con el tiempo. Es un **proyecto de inversión**: gastar hoy para recibir más después.' },
          { text: 'Un préstamo del banco', reply: 'El préstamo sería una forma de pagarlo. El horno en sí es un **proyecto de inversión**: gastar hoy para recibir más después.' },
        ],
      },
      { text: 'Hay tres tipos de proyecto:\n🌱 **Expansión:** para crecer.\n🔧 **Reemplazo:** cambiar un equipo viejo.\n📋 **Obligatorio:** cumplir una norma ambiental o de seguridad.' },
      {
        match: {
          title: 'Une cada proyecto de Don Beto con su tipo',
          pairs: [
            ['Expansión', 'Abrir una sucursal en otra colonia'],
            ['Reemplazo', 'Cambiar el horno viejo por uno nuevo'],
            ['Obligatorio', 'Instalar equipo que pide una norma de seguridad'],
          ],
        },
      },
      { text: 'Además, los proyectos pueden ser **independientes** (aceptar uno no impide otro) o **mutuamente excluyentes** (si eliges uno, descartas el otro).' },
      {
        ask: 'En el local solo cabe **un** horno: de gas o eléctrico. Los dos salen rentables. ¿Puede aceptar ambos?',
        options: [
          { text: 'No: son mutuamente excluyentes, debe elegir uno', ok: true, reply: '¡Bien! Si eliges uno, descartas el otro, aunque los dos sean rentables.' },
          { text: 'Sí, si los dos son rentables', reply: 'Solo cabe uno. Son **mutuamente excluyentes**: elegir uno descarta el otro, aunque los dos sean rentables.' },
          { text: 'Sí, son independientes', reply: 'Serían independientes si aceptar uno no impidiera el otro. Aquí solo cabe uno: son **mutuamente excluyentes**.' },
        ],
      },
      {
        order: {
          title: 'Arma la vida de un proyecto',
          steps: ['Idea: detectar la oportunidad', 'Estimación: proyectar inversión y flujos', 'Evaluación: aplicar criterios para decidir', 'Seguimiento: comparar lo real con lo proyectado'],
          done: '¡Listo! Y el seguimiento no es opcional: así se aprende para el siguiente proyecto.',
        },
      },
    ],
    // ¿Qué dinero cuenta y cuál no?
    [
      { text: 'El año pasado Don Beto le pagó $8,000 a un ingeniero para revisar si el horno nuevo cabía. Ahora debe decidir si lo compra.' },
      {
        ask: '¿Debe contar esos $8,000 al evaluar el horno?',
        options: [
          { text: 'No: ya se gastaron, decida lo que decida', ok: true, reply: '¡Exacto! Es un **costo hundido**: no se recupera, así que no cambia la decisión.' },
          { text: 'Sí, como parte de la inversión', reply: 'Ese dinero ya salió y no regresa, compre o no el horno. Es un **costo hundido**: no se incluye.' },
          { text: 'Sí, como costo de oportunidad', reply: 'El costo de oportunidad es algo que **dejas de ganar** por el proyecto. Esto ya se gastó: es un **costo hundido** y no se incluye.' },
        ],
      },
      {
        text: 'Solo cuentan los **flujos incrementales**: el dinero que entra o sale **por hacer** el proyecto.\n❌ **Costo hundido:** ya se gastó. No cuenta.\n✅ **Costo de oportunidad:** lo que dejas de ganar, como la renta de un cuarto propio que ya no podrás rentar.\n✅ **Capital de trabajo extra** (más harina) y el efecto en otros productos.',
      },
      {
        sort: {
          title: '¿Cuenta para el horno nuevo?',
          buckets: ['✅ Sí cuenta', '❌ No cuenta'],
          items: [
            { text: 'Precio del horno nuevo', bucket: 0, why: 'Sale dinero solo si compra el horno.' },
            { text: 'Renta que deja de cobrar por usar su bodega para el horno', bucket: 0, why: 'Es un costo de oportunidad: lo deja de ganar por el proyecto.' },
            { text: 'Los $8,000 del ingeniero del año pasado', bucket: 1, why: 'Costo hundido: ya se gastó, decida lo que decida.' },
            { text: 'Harina y empaques extra para hornear más', bucket: 0, why: 'Es capital de trabajo adicional que pide el proyecto.' },
            { text: 'Sueldo del contador, que se paga igual con o sin horno', bucket: 1, why: 'No cambia por el proyecto: no es incremental.' },
            { text: 'Ventas de bolillo que bajan porque clientes prefieren el pan nuevo', bucket: 0, why: 'Es un efecto en otros productos: sí cuenta.' },
          ],
        },
      },
      {
        text: 'La **depreciación** no es salida de dinero, pero baja impuestos. Por eso el **flujo de efectivo operativo (FEO)** se calcula así:\n1️⃣ Utilidad de operación = ventas − costos − depreciación.\n2️⃣ Le quitas los impuestos.\n3️⃣ Le **sumas de vuelta** la depreciación.',
      },
      {
        calc: {
          question: 'El horno deja ventas extra de $300,000 al año, costos de $150,000 y depreciación de $50,000. ¿Cuál es la utilidad de operación?',
          answer: 100000,
          hint: 'Ventas − costos − depreciación: 300,000 − 150,000 − 50,000.',
          why: '300,000 − 150,000 − 50,000 = **$100,000**. La depreciación se resta aquí para calcular impuestos.',
        },
      },
      {
        calc: {
          question: 'Con impuestos de 30% (tasa de ejemplo) sobre esos $100,000, ¿cuál es el FEO anual del horno?',
          answer: 120000,
          hint: 'Impuestos: 100,000 × 0.30. Lo que queda, más la depreciación de $50,000.',
          why: 'Impuestos = 30,000. Quedan 70,000. Más 50,000 de depreciación = **$120,000**. Si olvidas sumarla, te da 70,000.',
        },
      },
      { tip: 'Pregunta clave: **¿este dinero entra o sale solo si acepto el proyecto?** Si sí, cuenta.' },
    ],
    // ¿En cuánto recupero mi dinero?
    [
      { text: 'El horno cuesta $200,000. Don Beto pregunta: "¿en cuánto tiempo lo recupero?" Eso es el **periodo de recuperación** (payback).' },
      {
        calc: {
          question: 'Si el horno deja $50,000 cada año, ¿en cuántos años recupera los $200,000?',
          answer: 4,
          unit: 'años',
          hint: 'Con flujos iguales: inversión ÷ flujo anual.',
          why: '200,000 ÷ 50,000 = **4 años**.',
        },
      },
      { text: 'Si los flujos son **distintos**, se acumulan año por año. Cuando falte poco: años completos + (lo que falta ÷ flujo del año siguiente).' },
      {
        calc: {
          question: 'Otro horno de $200,000 deja $60,000, $80,000 y $100,000 en los años 1, 2 y 3. ¿En cuántos años se recupera? (con un decimal)',
          answer: 2.6,
          unit: 'años',
          hint: 'Acumulado de 2 años: 60,000 + 80,000 = 140,000. Faltan 60,000. Divide entre el flujo del año 3.',
          why: 'Faltan 200,000 − 140,000 = 60,000. 60,000 ÷ 100,000 = 0.6. Total: 2 + 0.6 = **2.6 años**.',
        },
      },
      {
        sim: {
          title: 'Don Beto quiere recuperar su horno de $200,000 en 3 años o menos',
          inputs: [{ key: 'f', label: 'Flujo de efectivo cada año', min: 40000, max: 100000, step: 10000, value: 50000 }],
          outputs: [{ label: 'Periodo de recuperación', calc: (x) => Math.round((200000 / x.f) * 10) / 10, main: true, unit: 'años' }],
          goal: {
            text: 'Encuentra un flujo anual que recupere el horno en **3 años o menos**.',
            check: (x) => 200000 / x.f <= 3,
            done: 'Más flujo, menos años. Pero ese límite de 3 años lo puso Don Beto a su gusto: es **arbitrario**.',
          },
        },
      },
      {
        text: '👍 Es fácil y mide **liquidez y riesgo**: entre más rápido recuperas, menos tiempo estás expuesto.\n👎 **Ignora** los flujos después de recuperar.\n👎 No considera el **valor del dinero en el tiempo**.\n👎 El plazo máximo aceptable se fija de forma **arbitraria**.',
      },
      {
        multi: {
          title: '¿Cuáles son defectos del periodo de recuperación?',
          items: [
            { text: 'Ignora el dinero que llega después de recuperar', ok: true },
            { text: 'No considera el valor del dinero en el tiempo', ok: true },
            { text: 'El plazo máximo se fija a gusto de quien decide', ok: true },
            { text: 'Es muy difícil de calcular', ok: false },
            { text: 'No dice nada sobre liquidez', ok: false },
          ],
          why: 'Es fácil de calcular y sí habla de liquidez. Sus defectos: ignora flujos posteriores, no descuenta el dinero y el plazo límite es arbitrario.',
        },
      },
      { tip: 'Úsalo como **filtro**. Los criterios principales son el **VPN** y la **TIR**, que verás en los siguientes temas.' },
    ],
  ],
}
