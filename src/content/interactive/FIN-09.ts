import type { InteractiveLesson } from './types'

export const intFIN09: InteractiveLesson = {
  lessonId: 'FIN-09',
  sections: [
    // ¿Vale igual un peso mañana?
    [
      { text: 'Paola tiene una cafetería en Guadalajara ☕. Un cliente le debe $1,000 y le dice: "¿te pago hoy o dentro de un año?"' },
      {
        ask: '¿Qué le conviene más a Paola?',
        options: [
          { text: 'Que le pague hoy', ok: true, reply: '¡Sí! Un peso hoy vale más: hoy lo puede invertir, y el futuro es incierto.' },
          { text: 'Dentro de un año, es lo mismo', reply: 'No es lo mismo: si lo recibe hoy, lo puede invertir, y además el futuro es incierto. **Hoy vale más.**' },
          { text: 'Dentro de un año, porque vale más', reply: 'Es al revés: el peso de hoy vale más, porque hoy ya lo puede invertir y el futuro es incierto.' },
        ],
      },
      { text: 'Para comparar, todo se pasa a **pesos de hoy** con una **tasa de descuento**: el rendimiento mínimo que se exige por el riesgo. También se llama **costo de capital** o **TREMA** (tasa de rendimiento mínima aceptable).' },
      { text: '**Valor presente (VP)** = flujo futuro ÷ (1 + k)ᵗ\n🔢 **k:** la tasa, en decimal (10% = 0.10).\n📆 **t:** años que faltan.\nEjemplo: $11,000 en un año al 10% → 11,000 ÷ 1.10 = **$10,000 de hoy**.' },
      {
        calc: {
          question: 'Paola recibirá $12,100 dentro de 2 años. Con una tasa de 10% (de ejemplo), ¿cuánto valen hoy?',
          answer: 10000,
          hint: '(1.10)² = 1.10 × 1.10 = 1.21. Divide 12,100 entre 1.21.',
          why: '1.10 × 1.10 = 1.21. 12,100 ÷ 1.21 = **$10,000**. Si divides solo entre 1.10, olvidas que son dos años.',
        },
      },
      {
        match: {
          title: 'Une cada letra de la fórmula',
          pairs: [
            ['VP', 'Cuánto vale hoy un dinero futuro'],
            ['FE', 'Flujo: el dinero que llegará en el futuro'],
            ['k', 'Tasa de descuento: rendimiento exigido'],
            ['t', 'Año en que llega el flujo'],
          ],
        },
      },
      { tip: 'Entre **más lejos** llega el dinero o **más alta** la tasa, **menos vale hoy**.' },
    ],
    // ¿Crea o destruye valor?
    [
      { text: 'Paola quiere una máquina de espresso nueva. El **valor presente neto (VPN)** le dice si conviene: pasa cada flujo a pesos de hoy, los suma y **resta la inversión**.' },
      {
        order: {
          title: 'Arma el cálculo del VPN',
          steps: ['Calcula (1 + k) elevado a cada año', 'Divide cada flujo entre el factor de su año', 'Suma todos los valores presentes', 'Resta la inversión inicial'],
          done: '¡Eso es el VPN! Cada año lleva su propio exponente.',
        },
      },
      {
        calc: {
          question: 'La máquina cuesta $18,000 y dejará $11,000 en el año 1 y $12,100 en el año 2. Con tasa de 10% (de ejemplo), ¿cuál es el VPN?',
          answer: 2000,
          hint: '11,000 ÷ 1.10 = 10,000. 12,100 ÷ 1.21 = 10,000. Súmalos y resta 18,000.',
          why: '10,000 + 10,000 = 20,000 de hoy. Menos 18,000 = **$2,000**. Si sumas sin descontar: 23,100 − 18,000 = 5,100, y eso está mal.',
        },
      },
      { text: '¿Cómo se lee?\n✅ **VPN positivo:** paga la tasa exigida **y además** deja un extra. Crea valor: aceptar.\n⚖️ **VPN = 0:** gana **justo** la tasa exigida.\n❌ **VPN negativo:** no alcanza a pagar la tasa. Rechazar.' },
      {
        sort: {
          title: '¿Qué dice cada VPN?',
          buckets: ['✅ Crea valor', '⚖️ Justo lo exigido', '❌ No alcanza'],
          items: [
            { text: 'VPN de $2,000', bucket: 0, why: 'Positivo: paga la tasa y deja $2,000 extra de hoy.' },
            { text: 'VPN de −$1,500', bucket: 2, why: 'Negativo: no paga la tasa exigida.' },
            { text: 'VPN de $0', bucket: 1, why: 'Cero: gana justo la tasa exigida, sin extra.' },
            { text: 'VPN de $45,000', bucket: 0, why: 'Positivo: crea valor.' },
            { text: 'VPN de −$300', bucket: 2, why: 'Aunque sea poco, negativo significa que no alcanza la tasa.' },
          ],
        },
      },
      {
        ask: 'Si la máquina costara $20,000, el VPN al 10% daría **exactamente cero**. ¿Qué significa?',
        options: [
          { text: 'Rinde justo el 10% exigido, sin valor extra', ok: true, reply: '¡Exacto! VPN = 0 no es perder: gana **justo** lo que Paola exige.' },
          { text: 'Que rinde 0% al año', reply: 'Cero es el **VPN**, no el rendimiento. Con VPN = 0, el proyecto rinde **justo el 10%** exigido.' },
          { text: 'Que pierde dinero y hay que rechazarla', reply: 'No pierde: recupera la inversión y paga el **10% exigido**, pero no deja extra.' },
        ],
      },
    ],
    // ¿Cuál proyecto elijo?
    [
      { text: 'Paola tiene un local libre y tres ideas para usarlo. Solo puede elegir **una**.' },
      { text: '🔀 **Independientes:** acepta todos los de VPN positivo (si hay dinero).\n🎯 **Mutuamente excluyentes:** elige el de **mayor VPN**, el que más riqueza agrega en pesos de hoy.' },
      {
        ask: 'Brunch: VPN $30,000. Pastelería: VPN $50,000. Librería-café: VPN −$4,000. ¿Cuál elige?',
        options: [
          { text: 'La pastelería', ok: true, reply: '¡Bien! Es la de mayor VPN: la que más valor agrega.' },
          { text: 'El brunch y la pastelería', reply: 'Solo cabe una en el local: son excluyentes. Se elige la de **mayor VPN**: la pastelería.' },
          { text: 'Ninguna, porque una es negativa', reply: 'La negativa se descarta, pero las otras crean valor. Se elige la de **mayor VPN**: la pastelería.' },
        ],
      },
      { text: 'Ojo: el VPN depende de la tasa. **Si la tasa sube, el VPN baja**, porque el dinero futuro vale menos hoy.' },
      {
        sim: {
          title: 'Máquina de $18,000 que deja $11,000 y $12,100',
          inputs: [{ key: 'k', label: 'Tasa de descuento (%)', min: 0, max: 30, step: 2, value: 10 }],
          outputs: [
            { label: 'Valor de hoy de los flujos', calc: (x) => Math.round(11000 / (1 + x.k / 100) + 12100 / (1 + x.k / 100) ** 2) },
            { label: 'VPN', calc: (x) => Math.round(11000 / (1 + x.k / 100) + 12100 / (1 + x.k / 100) ** 2 - 18000), main: true },
          ],
          goal: {
            text: 'Sube la tasa hasta que el VPN **deje de ser positivo**.',
            check: (x) => 11000 / (1 + x.k / 100) + 12100 / (1 + x.k / 100) ** 2 - 18000 <= 0,
            done: 'Con una tasa muy alta, la misma máquina ya no conviene. Por eso elegir bien la tasa importa tanto.',
          },
        },
      },
      {
        multi: {
          title: '¿Qué es cierto del VPN?',
          items: [
            { text: 'Si la tasa sube, el VPN baja', ok: true },
            { text: 'Entre opciones excluyentes, gana la de mayor VPN', ok: true },
            { text: 'Depende de estimaciones: conviene probar escenarios', ok: true },
            { text: 'Se pueden sumar flujos de años distintos sin descontar', ok: false },
          ],
          why: 'Sumar sin descontar mezcla pesos de distintos años. Y como los flujos son estimaciones, conviene probar un escenario pesimista, uno base y uno optimista.',
        },
      },
      { tip: 'Si en el escenario **pesimista** el VPN sigue positivo, el proyecto es más sólido.' },
    ],
  ],
}
