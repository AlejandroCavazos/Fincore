import type { InteractiveLesson } from './types'

export const intPER17: InteractiveLesson = {
  lessonId: 'PER-17',
  sections: [
    // ¿Decides siempre con la cabeza?
    [
      { text: 'Mateo tiene 29 años y reparte comida por apps 🛵. Unas semanas gana bien y otras no tanto. Él cree que decide su dinero "con la cabeza fría".' },
      {
        ask: 'Piensa rápido: ¿qué se siente más fuerte?',
        options: [
          { text: 'Perder $1,000', ok: true, reply: '¡A casi todos nos pasa! En experimentos clásicos, perder duele **aproximadamente el doble** de lo que alegra ganar lo mismo.' },
          { text: 'Ganar $1,000', reply: 'Curiosamente no: a la mayoría **le duele más perder**, aproximadamente el doble. Se llama aversión a las pérdidas.' },
          { text: 'Se sienten igual', reply: 'Parecería lógico, pero no: **perder duele más**, aproximadamente el doble.' },
        ],
      },
      { text: 'Las **finanzas conductuales** estudian cómo decidimos en la vida real: con emociones, prisa y **atajos mentales**. Si un atajo nos lleva a errores repetidos, es un **sesgo**.' },
      {
        text: 'Los sesgos más comunes:\n⏰ **Del presente:** el hoy pesa demasiado.\n😣 **Aversión a las pérdidas:** evitar perder a toda costa.\n⚓ **Anclaje:** el primer número te guía.\n🐑 **Manada:** hacer lo que hacen todos.\n😎 **Exceso de confianza:** creer que sabes más.',
      },
      {
        match: {
          title: 'Une cada sesgo con lo que hizo Mateo',
          pairs: [
            ['Sesgo del presente', 'Pospone otra vez el ahorro: "hoy hay otras prioridades"'],
            ['Aversión a las pérdidas', 'No vende una acción que cae, "para no perder"'],
            ['Anclaje', 'Compra la pantalla porque el precio tachado era más alto'],
            ['Efecto manada', 'Invierte en lo que todos en su chat compraron'],
          ],
        },
      },
      {
        rush: {
          title: '¿Presente o manada?',
          seconds: 30,
          labels: ['⏰ Presente', '🐑 Manada'],
          items: [
            { text: 'Pedir un préstamo para viajar ya en vez de ahorrar unos meses', ans: 0 },
            { text: 'Comprar una cripto porque todos en la oficina lo hicieron', ans: 1 },
            { text: 'Posponer cada mes el ahorro para el retiro', ans: 0 },
            { text: 'Entrar a la inversión de moda sin entenderla', ans: 1 },
            { text: 'Comprar hoy unos tenis a meses y pagar intereses', ans: 0 },
            { text: 'Seguir el consejo del grupo de WhatsApp sin revisar', ans: 1 },
          ],
        },
      },
      { tip: 'No somos calculadoras. Ponerle nombre a un sesgo es el primer paso para que no te gane.' },
    ],
    // Trampas que te cuestan dinero
    [
      { text: 'Mateo guarda **$12,000 "para la moto"** en una cuenta que paga 5 % al año. Y al mismo tiempo debe **$12,000 en su tarjeta** al 40 % (cifras de ejemplo). Su fondo de emergencia está aparte.' },
      {
        ask: '¿Qué le conviene a Mateo?',
        options: [
          { text: 'Dejar todo igual: ese dinero es "de la moto"', reply: 'Esa etiqueta le cuesta caro: gana 5 % pero paga 40 %. **Un peso es un peso**: le conviene liquidar la tarjeta.' },
          { text: 'Usar ese ahorro para liquidar la tarjeta', ok: true, reply: '¡Bien! Deja de pagar 40 % por guardar dinero que solo gana 5 %.' },
          { text: 'Pedir otro préstamo para la moto', reply: 'Eso sumaría más deuda. Lo que le conviene es **liquidar la tarjeta** con el ahorro.' },
        ],
      },
      { text: 'Eso es la **contabilidad mental**: tratar el dinero distinto según su "etiqueta". Costo de mantener ambos: **deuda × su tasa − ahorro × su tasa**.' },
      {
        calc: {
          question: '¿Cuánto le cuesta a Mateo en un año tener $12,000 ahorrados al 5 % y $12,000 de deuda al 40 %?',
          answer: 4200,
          hint: 'Paga 12,000 × 0.40. Gana 12,000 × 0.05. Resta.',
          why: 'Paga $4,800 y gana $600: costo neto **$4,200 al año**. Error común: responder solo los $4,800 de intereses.',
        },
      },
      { text: '⚓ **Anclaje:** "antes $12,000, hoy $7,999". El precio tachado hace que la oferta parezca buena aunque no la necesites.\n🐑 **Manada:** entras a una inversión de moda sin entenderla, muchas veces cuando ya está cara.' },
      {
        ask: 'Mateo quiere un celular de hasta $8,000. El vendedor le enseña primero uno de $25,000 y luego uno de $15,000, "¡una ganga!". ¿Qué pasa?',
        options: [
          { text: 'Es anclaje: debe comparar con su presupuesto de $8,000', ok: true, reply: '¡Exacto! El de $25,000 es el ancla. Su referencia debe ser **su propio presupuesto**.' },
          { text: 'Es efecto manada: debe ver qué compran sus amigos', reply: 'Aquí no siguen a nadie: el primer precio **ancla** su decisión. Debe compararlo con su presupuesto.' },
          { text: 'Es una ganga de verdad: se ahorra $10,000', reply: 'Solo "ahorra" frente al ancla. Frente a su presupuesto de $8,000 se pasa por $7,000. Es **anclaje**.' },
        ],
      },
      {
        sort: {
          title: '¿Qué trampa es?',
          buckets: ['Contabilidad mental', 'Anclaje', 'Manada'],
          items: [
            { text: 'Gastarse el aguinaldo como "dinero extra" teniendo deudas', bucket: 0, why: 'La etiqueta "extra" cambia cómo lo usa: contabilidad mental.' },
            { text: 'Comprar porque "antes costaba el doble"', bucket: 1, why: 'El precio anterior es el ancla.' },
            { text: 'Invertir en lo que está de moda porque todos hablan de eso', bucket: 2, why: 'Sigue a los demás: efecto manada.' },
            { text: 'Guardar ahorro al 5 % "para el viaje" mientras debe al 40 %', bucket: 0, why: 'La etiqueta "viaje" le cuesta: contabilidad mental.' },
            { text: 'Sentir que $15,000 es barato después de ver uno de $25,000', bucket: 1, why: 'El primer número lo ancló.' },
          ],
        },
      },
    ],
    // Hábitos que trabajan por ti
    [
      { text: 'Cada quincena Mateo dice: "Ahora sí ahorro". Y cada quincena se le va 💸.' },
      {
        ask: '¿Qué crees que le falla?',
        options: [
          { text: 'No tiene disciplina', reply: 'No es falta de carácter: **la fuerza de voluntad se cansa** a todos. Funciona mejor diseñar el entorno.' },
          { text: 'Depende solo de su fuerza de voluntad', ok: true, reply: '¡Eso! La voluntad se agota. Mejor que el ahorro pase **solo**, sin decidirlo cada vez.' },
          { text: 'Gana muy poco para ahorrar', reply: 'Aun con poco se puede. El problema es que depende de la **fuerza de voluntad**, que se cansa.' },
        ],
      },
      { text: '👉 Un **empujón** (nudge) es un cambio pequeño que facilita la buena decisión sin prohibir nada.\n💸 **Págate primero:** el día de pago, una transferencia automática manda un % a tu ahorro.\n⏳ **Regla de 24 horas** antes de una compra no planeada.' },
      {
        multi: {
          title: '¿Cuáles son buenos empujones para Mateo?',
          items: [
            { text: 'Transferencia automática al ahorro el día de pago', ok: true },
            { text: 'Borrar la tarjeta guardada en las apps de compras', ok: true },
            { text: 'Ponerle nombre y foto a su meta de ahorro', ok: true },
            { text: 'Activar compras con un clic en todas las tiendas', ok: false },
            { text: 'Revisar su saldo solo una vez al año', ok: false },
          ],
          why: 'Automatizar hace del ahorro la opción por defecto, quitar la tarjeta guardada frena el gasto impulsivo y nombrar la meta motiva. Comprar con un clic empuja **en contra**.',
        },
      },
      {
        order: {
          title: 'Arma el hábito de Mateo',
          steps: ['Señal: le cae el depósito de la quincena', 'Rutina: sale la transferencia automática a su ahorro', 'Recompensa: ve crecer su meta en la app'],
          done: 'Señal, rutina y recompensa: así se forma un hábito.',
        },
      },
      {
        sim: {
          title: 'El ahorro de Mateo en un año',
          inputs: [
            { key: 's', label: 'Lo que gana en el mes', min: 8000, max: 24000, step: 1000, value: 12000 },
            { key: 'p', label: 'Se aparta el día de pago (%)', min: 0, max: 20, step: 5, value: 5 },
            { key: 'v', label: 'Refrescos de $30 que deja al mes', min: 0, max: 22, step: 2, value: 0 },
          ],
          outputs: [
            { label: 'Ahorro automático al mes', calc: (x) => (x.s * x.p) / 100 },
            { label: 'Ahorro por refrescos al mes', calc: (x) => 30 * x.v },
            { label: 'Ahorro en 12 meses', calc: (x) => ((x.s * x.p) / 100 + 30 * x.v) * 12, main: true },
          ],
          goal: {
            text: 'Logra **$30,000 o más** de ahorro en el año.',
            check: (x) => ((x.s * x.p) / 100 + 30 * x.v) * 12 >= 30000,
            done: 'Aunque su ingreso cambie, un **% fijo** se ajusta solo: en meses flojos aparta menos, en los buenos más.',
          },
        },
      },
      {
        calc: {
          question: 'Supón que Mateo gana $20,000 cada mes y aparta 10 % el día de pago. Además deja un refresco de $25 en 20 días de trabajo al mes. ¿Cuánto ahorra en 12 meses?',
          answer: 30000,
          hint: 'Automático: 20,000 × 0.10. Refresco: 25 × 20. Suma y multiplica por 12.',
          why: '2,000 + 500 = $2,500 al mes; × 12 = **$30,000**. Error común: multiplicar el refresco por 30 días o anualizar solo una parte.',
        },
      },
      { tip: 'No dependas de la fuerza de voluntad: **automatiza** lo bueno y pon **fricción** a lo impulsivo.' },
    ],
  ],
}
