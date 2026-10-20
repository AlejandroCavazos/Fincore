import type { InteractiveLesson } from './types'

export const intFIN10: InteractiveLesson = {
  lessonId: 'FIN-10',
  sections: [
    // ¿Cuánto rinde mi proyecto?
    [
      { text: 'Ramiro cultiva aguacate en Uruapan 🥑. Invierte $40,000 en cajas y una báscula, y en un año recibe $46,000 extra.' },
      {
        ask: '¿Cuánto rindió su inversión en ese año?',
        options: [
          { text: '15%', ok: true, reply: '¡Bien! Ganó 6,000 sobre 40,000 invertidos: 6,000 ÷ 40,000 = 0.15 = **15%**.' },
          { text: '46%', reply: 'Recibió $46,000, pero puso $40,000. La ganancia es 6,000, y 6,000 ÷ 40,000 = **15%**.' },
          { text: '13%', reply: 'Eso sale si divides 6,000 entre lo **recibido** (46,000). Se mide sobre lo **invertido**: 6,000 ÷ 40,000 = **15%**.' },
        ],
      },
      { text: 'Ese 15% es la **tasa interna de retorno (TIR)**: el rendimiento anual que da el proyecto por sí mismo. Es la tasa con la que el **VPN queda exactamente en cero**.' },
      { text: 'Se llama "interna" porque solo depende de los flujos del proyecto.\n**La regla:**\n✅ TIR **mayor** que el costo de capital → aceptar.\n❌ TIR **menor** → rechazar.' },
      {
        rush: {
          title: '¿Ramiro acepta o rechaza?',
          seconds: 30,
          labels: ['✅ Aceptar', '❌ Rechazar'],
          items: [
            { text: 'TIR 15%, costo de capital 11%', ans: 0 },
            { text: 'TIR 8%, costo de capital 12%', ans: 1 },
            { text: 'TIR 14%, costo de capital 11%', ans: 0 },
            { text: 'TIR 9%, costo de capital 10%', ans: 1 },
            { text: 'TIR 20%, costo de capital 13%', ans: 0 },
            { text: 'TIR 11%, costo de capital 15%', ans: 1 },
          ],
        },
      },
      { tip: 'La TIR es fácil de comparar porque sale en porcentaje: "este proyecto rinde 15%". Recuerda que son rendimientos **estimados**, no garantizados.' },
    ],
    // ¿Cómo encuentro la TIR?
    [
      { text: 'Con **un solo flujo a un año** es sencillo:\n**TIR = flujo final ÷ inversión − 1**' },
      {
        calc: {
          question: 'Ramiro invierte $60,000 en fertilizante y en un año recibe $66,000 extra. ¿Cuál es la TIR, en porcentaje?',
          answer: 10,
          unit: '%',
          hint: '66,000 ÷ 60,000 = 1.10. Réstale 1.',
          why: '66,000 ÷ 60,000 = 1.10. 1.10 − 1 = 0.10 = **10%**.',
        },
      },
      { text: 'Si el cobro llega **a los 2 años**, hay que sacar raíz cuadrada para tener la tasa **anual**.\nEjemplo: 72,000 ÷ 50,000 = 1.44. √1.44 = 1.20. Menos 1 = **20% anual**. (44% sería de los dos años juntos.)' },
      {
        order: {
          title: 'Arma la TIR de un cobro a 2 años',
          steps: ['Divide el flujo final entre la inversión', 'Saca la raíz cuadrada del resultado', 'Réstale 1', 'Multiplica por 100 para tenerlo en %'],
          done: '¡Perfecto! Sin la raíz tendrías el rendimiento de los dos años juntos, no el anual.',
        },
      },
      {
        calc: {
          question: 'Ramiro compra un terreno en $40,000 y lo vende en $48,400 a los 2 años, sin otros flujos. ¿Cuál es la TIR anual, en porcentaje?',
          answer: 10,
          unit: '%',
          hint: '48,400 ÷ 40,000 = 1.21. ¿Qué número por sí mismo da 1.21?',
          why: '48,400 ÷ 40,000 = 1.21. √1.21 = 1.10. 1.10 − 1 = **10% anual**. Sin la raíz te daría 21%, que es de los dos años.',
        },
      },
      { text: 'Con **varios flujos** no hay fórmula directa: se busca por **prueba y error**.\n📈 VPN positivo → sube la tasa.\n📉 VPN negativo → bájala.\nEn la práctica se usa la función TIR de una hoja de cálculo.' },
      {
        sim: {
          title: 'Ramiro invierte $100,000 y recibe $55,000 y $60,500 en 2 años',
          inputs: [{ key: 'r', label: 'Tasa que pruebas (%)', min: 10, max: 25, step: 1, value: 18 }],
          outputs: [{ label: 'VPN con esa tasa', calc: (x) => Math.round(-100000 + 55000 / (1 + x.r / 100) + 60500 / (1 + x.r / 100) ** 2), main: true }],
          goal: {
            text: 'Prueba tasas hasta que el VPN quede en **cero**: esa es la TIR.',
            check: (x) => Math.abs(-100000 + 55000 / (1 + x.r / 100) + 60500 / (1 + x.r / 100) ** 2) < 1,
            done: '¡La encontraste! Con 10%: 55,000 ÷ 1.10 = 50,000 y 60,500 ÷ 1.21 = 50,000. VPN = 0, así que la **TIR es 10%**.',
          },
        },
      },
    ],
    // ¿Cuándo no confiar en la TIR?
    [
      { text: 'Ramiro solo puede elegir **una** opción (costo de capital de 12%, de ejemplo):\n🧺 **Chica:** cuesta $10,000, TIR 50%, VPN de unos $3,400.\n🏭 **Grande:** cuesta $1,000,000, TIR 20%, VPN de unos $71,400.' },
      {
        ask: '¿Cuál le conviene?',
        options: [
          { text: 'La grande: agrega más valor en pesos de hoy', ok: true, reply: '¡Eso! La TIR mide **porcentaje**, no pesos. Entre excluyentes, si TIR y VPN se contradicen, **manda el VPN**.' },
          { text: 'La chica: su TIR es más alta', reply: '50% de $10,000 es poca riqueza junto a 20% de $1,000,000. Entre excluyentes **manda el VPN**: la grande.' },
          { text: 'Ninguna: TIR y VPN se contradicen', reply: 'Las dos crean valor. Cuando se contradicen entre excluyentes, se decide con el **VPN**: la grande.' },
        ],
      },
      {
        text: 'Las trampas de la TIR:\n📏 **Escala:** mide %, no pesos.\n🔀 **Signos que cambian más de una vez** (invertir, cobrar y al final pagar un gran costo de cierre): puede haber **varias TIR** o ninguna.\n🔁 **Reinversión:** supone reinvertir a la misma TIR. La **TIRM** corrige esto reinvirtiendo al costo de capital.',
      },
      {
        sort: {
          title: '¿La TIR es confiable con estos flujos?',
          buckets: ['👍 Una sola TIR', '⚠️ Cuidado: varias TIR'],
          items: [
            { text: '−100, +40, +40, +40', bucket: 0, why: 'El signo cambia una sola vez: flujo convencional.' },
            { text: '−100, +60, +60, −50 (costo de cierre)', bucket: 1, why: 'El signo cambia dos veces: puede haber varias TIR.' },
            { text: '−50, +30, −20, +60', bucket: 1, why: 'El signo cambia varias veces: la TIR no sirve para decidir.' },
            { text: '−80, +100', bucket: 0, why: 'Un solo cambio de signo: una TIR.' },
            { text: 'Mina: inversión, años de ganancia y gran cierre al final', bucket: 1, why: 'El gran costo de cierre cambia otra vez el signo: cuidado.' },
          ],
        },
      },
      {
        match: {
          title: 'Une cada trampa con su remedio',
          pairs: [
            ['Problema de escala', 'Entre excluyentes, decide con el VPN'],
            ['Varios cambios de signo', 'No uses la TIR para decidir'],
            ['Supuesto de reinversión', 'Usa la TIRM, que reinvierte al costo de capital'],
          ],
        },
      },
      { tip: 'Una TIR de 40% suena genial, pero rara vez hay otras inversiones que también rindan 40% para reinvertir.' },
    ],
  ],
}
