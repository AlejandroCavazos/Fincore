import type { InteractiveLesson } from './types'

export const intINV10: InteractiveLesson = {
  lessonId: 'INV-10',
  sections: [
    // ¿Cómo repartes tu dinero?
    [
      { text: 'Iván tiene 27 años y es diseñador freelance 🎨: hay meses buenos y meses flojos. Ahorra para dos cosas: cambiar su compu **en 1 año** y su retiro **en 30 años**.' },
      {
        ask: 'El dinero de la compu lo necesita en 1 año. ¿Lo pondría en acciones?',
        options: [
          { text: 'No: mejor deuda de corto plazo, fácil de sacar', ok: true, reply: '¡Bien! Dinero que necesitas pronto no debería estar en acciones: podrían caer justo cuando lo ocupas.' },
          { text: 'Sí, todo en acciones', reply: 'Las acciones pueden caer justo cuando necesite el dinero. Para 1 año conviene más **deuda de corto plazo**.' },
          { text: 'Sí, en una sola acción para ganar rápido', reply: 'Es más riesgo y menos tiempo para recuperarse. Para 1 año conviene **deuda de corto plazo**.' },
        ],
      },
      { text: 'Tu **portafolio** es el conjunto de tus inversiones. La **asignación de activos** es decidir qué % pones en cada tipo (por ejemplo 60 % renta variable, 30 % deuda y 10 % FIBRAs). Depende de:\n🎯 **Objetivo:** para qué es el dinero.\n⏳ **Horizonte:** cuándo lo necesitas.\n😬 **Tolerancia al riesgo:** cuánto aguantas ver caer tu saldo sin vender por miedo.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Objetivo', 'Para qué es el dinero'],
            ['Horizonte', 'Cuándo lo vas a necesitar'],
            ['Tolerancia al riesgo', 'Cuánto aguantas ver caer tu saldo'],
            ['Asignación de activos', 'Qué % pones en cada tipo de inversión'],
          ],
        },
      },
      {
        sort: {
          title: '¿Hacia dónde se inclina cada caso?',
          buckets: ['Más deuda de corto plazo', 'Puede llevar más renta variable'],
          items: [
            { text: 'Dinero de Iván para la compu en 1 año', bucket: 0, why: 'Horizonte corto: más deuda de corto plazo y liquidez.' },
            { text: 'El retiro de Iván en 30 años', bucket: 1, why: 'Horizonte largo: hay tiempo para aguantar caídas.' },
            { text: 'Enganche de una casa en 2 años', bucket: 0, why: 'Lo necesitas pronto: más deuda de corto plazo.' },
            { text: 'Alguien que vende por miedo si su saldo cae', bucket: 0, why: 'Baja tolerancia al riesgo: menos peso en activos volátiles.' },
            { text: 'Alguien a 25 años de su meta que aguanta caídas', bucket: 1, why: 'Horizonte largo y tolerancia alta.' },
          ],
        },
      },
      { tip: 'Escribe tu **asignación objetivo**. Es tu brújula cuando el mercado se mueve.' },
    ],
    // ¿Por qué no todo junto?
    [
      { text: 'Un amigo de Iván tiene todo en acciones de **tres bancos mexicanos**. "Ya estoy diversificado", presume 😎.' },
      {
        ask: '¿Está bien diversificado?',
        options: [
          { text: 'No mucho: los tres bancos se mueven casi igual', ok: true, reply: '¡Exacto! Si algo le pega a los bancos, le pega a los tres a la vez.' },
          { text: 'Sí, son tres empresas distintas', reply: 'Son distintas, pero del mismo sector y país: se mueven **casi igual**. Eso no diversifica mucho.' },
          { text: 'Sí, porque los bancos nunca caen', reply: 'Cualquier acción puede caer. Y como los tres se mueven **casi igual**, no está muy diversificado.' },
        ],
      },
      { text: '**Diversificar** es repartir tu dinero entre inversiones que **no se mueven igual**, para que si una cae, otras compensen. Puedes repartir por tipo de activo, sector, región y moneda. Qué tanto suben y bajan juntas se llama **correlación**.' },
      {
        sim: {
          title: 'Iván tiene $100,000. ¿Cuánto pesa su empresa más grande?',
          inputs: [{ key: 'w', label: 'Peso de una sola empresa (%)', min: 5, max: 80, step: 5, value: 60 }],
          outputs: [
            { label: 'Lo que le queda si esa empresa quiebra', calc: (x) => 100000 - 1000 * x.w },
            { label: 'Golpe si esa empresa quiebra', calc: (x) => -1000 * x.w, main: true },
          ],
          goal: {
            text: 'Haz que la quiebra de una sola empresa no le quite **más de $10,000**.',
            check: (x) => 1000 * x.w <= 10000,
            done: 'Si una empresa pesa poco, su quiebra es un golpe pequeño. Si pesa 60 %, es enorme.',
          },
        },
      },
      { text: 'Diversificar reduce el **riesgo específico**: lo que le pasa a una sola empresa o sector (un fraude, una huelga). Pero **no elimina el riesgo de mercado**: lo que afecta a casi todo (una recesión, un alza general de tasas).' },
      {
        sort: {
          title: '¿Qué tipo de riesgo es?',
          buckets: ['Específico (baja al diversificar)', 'De mercado (no se elimina)'],
          items: [
            { text: 'Fraude contable en una sola empresa', bucket: 0, why: 'Le pasa a una empresa: diversificar reduce el golpe.' },
            { text: 'La economía entra en recesión', bucket: 1, why: 'Afecta a casi todo: no se elimina diversificando.' },
            { text: 'Huelga en la planta de una cementera', bucket: 0, why: 'Es de una sola empresa: riesgo específico.' },
            { text: 'Alza general de tasas de interés', bucket: 1, why: 'Le pega a casi todo el mercado.' },
            { text: 'Una crisis global hace caer casi todas las bolsas', bucket: 1, why: 'Es riesgo de mercado.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué ayudaría a diversificar al amigo de los tres bancos? Marca todas',
          items: [
            { text: 'Un ETF de un índice amplio', ok: true },
            { text: 'Un ETF de acciones de otros países', ok: true },
            { text: 'Algo de deuda gubernamental', ok: true },
            { text: 'Un cuarto banco mexicano', ok: false },
            { text: 'Poner todo en el banco que más subió', ok: false },
          ],
          why: 'Sirve agregar cosas que se mueven distinto: otros sectores, otros países, deuda. Otro banco mexicano se mueve casi igual que los que ya tiene.',
        },
      },
    ],
    // ¿Cómo regresas a tu plan?
    [
      {
        ask: 'Iván tiene 80 % en deuda que rinde 6 % y 20 % en acciones que rinden 16 % (ejemplo). ¿Cuánto rinde su portafolio?',
        options: [
          { text: '11 %', reply: 'Ese es el promedio simple. Pero hay **más dinero en deuda**: 0.8 × 6 + 0.2 × 16 = **8 %**.' },
          { text: '8 %', ok: true, reply: '¡Bien! Cada inversión cuenta según su peso: 0.8 × 6 = 4.8 y 0.2 × 16 = 3.2. Suma: **8 %**.' },
          { text: '22 %', reply: 'No se suman los rendimientos. Se pondera por peso: 0.8 × 6 + 0.2 × 16 = **8 %**.' },
        ],
      },
      { text: '**Rendimiento del portafolio** = suma de (peso de cada activo × su rendimiento). No es el promedio simple.' },
      {
        calc: {
          question: 'Un portafolio de ejemplo: 60 % acciones que rinden 10 %, 30 % deuda que rinde 6 % y 10 % FIBRAs que rinden 2 %. ¿Cuál es su rendimiento ponderado en porcentaje?',
          answer: 8,
          unit: '%',
          hint: '0.6 × 10 + 0.3 × 6 + 0.1 × 2.',
          why: '0.6 × 10 = 6; 0.3 × 6 = 1.8; 0.1 × 2 = 0.2. Suma: 6 + 1.8 + 0.2 = **8 %**.',
        },
      },
      { text: 'Con el tiempo, lo que más sube ocupa más espacio y te alejas de tu plan (con más riesgo del que elegiste). **Rebalancear** es vender un poco de lo que creció de más y comprar de lo que quedó abajo. Se hace cada cierto tiempo (por ejemplo, una vez al año) o cuando un peso se sale de un margen (por ejemplo, ±5 puntos).' },
      {
        order: {
          title: 'Arma los pasos para rebalancear',
          steps: ['Suma el valor total de hoy', 'Multiplica el total por el % objetivo', 'Compara con lo que tienes en cada activo', 'Vende lo que sobra y compra lo que falta'],
          done: '¡Eso! Con estos pasos vuelves a tu plan.',
        },
      },
      {
        calc: {
          question: 'El plan de Iván es 50 % acciones y 50 % deuda. Hoy tiene $70,000 en acciones y $50,000 en deuda. ¿Cuántos pesos de acciones debe vender?',
          answer: 10000,
          hint: 'Total: 70,000 + 50,000. Objetivo en acciones: 50 % del total. Resta lo que tiene menos el objetivo.',
          why: 'Total: $120,000. 50 % = $60,000. Tiene $70,000 en acciones: vende 70,000 − 60,000 = **$10,000**.',
        },
      },
      {
        ask: 'Con esos $10,000 compra deuda. ¿Cuánto queda en deuda?',
        options: [
          { text: '$60,000', ok: true, reply: '¡Bien! 50,000 + 10,000 = $60,000, que es el 50 % de $120,000. Volvió a su plan.' },
          { text: '$50,000', reply: 'Faltó sumar lo que compró: 50,000 + 10,000 = **$60,000**.' },
          { text: '$40,000', reply: 'Al comprar deuda, la deuda **sube**: 50,000 + 10,000 = **$60,000**.' },
        ],
      },
      { tip: 'Los rendimientos de ejemplo **no están garantizados**. Rebalancear sirve para que tu riesgo siga siendo el que elegiste.' },
    ],
  ],
}
