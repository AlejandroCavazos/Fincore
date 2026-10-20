import type { InteractiveLesson } from './types'

export const intINV01: InteractiveLesson = {
  lessonId: 'INV-01',
  sections: [
    // ¿Guardar o poner a trabajar?
    [
      { text: 'Vale tiene 24 años y es diseñadora freelance 🎨. Juntó **$10,000** y los guarda en una caja de zapatos. "Ahí están seguros", piensa.' },
      {
        ask: 'Si los precios suben en un año, ¿qué pasa con los $10,000 de la caja?',
        options: [
          { text: 'Siguen siendo $10,000, pero alcanzan para menos cosas', ok: true, reply: '¡Exacto! Los billetes son los mismos, pero todo cuesta más. A eso se le llama **perder poder de compra**.' },
          { text: 'Crecen solos un poquito', reply: 'En una caja el dinero no crece: siguen siendo $10,000. Y como los precios suben, **alcanzan para menos**.' },
          { text: 'No pasa nada, valen igual', reply: 'Siguen siendo $10,000, pero si la torta pasa de $50 a $53, compras menos. El dinero quieto **pierde poder de compra**.' },
        ],
      },
      { text: '🐷 **Ahorrar:** apartar una parte de lo que ganas en vez de gastarla.\n🌱 **Invertir:** poner ese ahorro en algo que pueda **generar más dinero**.\n📈 **Inflación:** los precios suben con el tiempo.' },
      {
        sort: {
          title: '¿Vale ahorra o invierte?',
          buckets: ['Ahorra', 'Invierte'],
          items: [
            { text: 'Guarda $500 cada mes en un sobre', bucket: 0, why: 'Aparta dinero, pero no lo pone a generar más.' },
            { text: 'Le presta su dinero al gobierno a cambio de un pago', bucket: 1, why: 'Ese dinero puede generar más: es invertir.' },
            { text: 'Compra una parte de una empresa', bucket: 1, why: 'Si a la empresa le va bien, su parte puede valer más: es invertir.' },
            { text: 'Deja de comprarse unos tenis para juntar dinero', bucket: 0, why: 'Deja de gastar para apartar: es ahorrar.' },
            { text: 'Compra un cuarto para rentarlo', bucket: 1, why: 'La renta le genera más dinero: es invertir.' },
          ],
        },
      },
      {
        sim: {
          title: 'Los $10,000 de Vale en un año',
          inputs: [
            { key: 'r', label: 'Lo que paga su inversión al año (%) (ejemplo)', min: 0, max: 10, step: 1, value: 0 },
            { key: 'i', label: 'Lo que suben los precios al año (%) (ejemplo)', min: 0, max: 10, step: 1, value: 4 },
          ],
          outputs: [
            { label: 'Dinero de Vale en un año', calc: (x) => 10000 * (1 + x.r / 100) },
            { label: 'Lo que costará lo que hoy compra con $10,000', calc: (x) => 10000 * (1 + x.i / 100) },
            { label: 'Le sobra (o le falta) para comprar lo mismo', calc: (x) => 10000 * (1 + x.r / 100) - 10000 * (1 + x.i / 100), main: true },
          ],
          goal: {
            text: 'Haz que Vale pueda comprar **más** que hoy: que le **sobre** dinero.',
            check: (x) => x.r > x.i,
            done: 'Solo gana poder de compra si su dinero crece **más rápido que los precios**. Son cifras de ejemplo, ningún rendimiento está garantizado.',
          },
        },
      },
      {
        ask: 'Vale todavía no tiene dinero para emergencias. ¿Qué hace primero?',
        options: [
          { text: 'Arma un fondo para emergencias', ok: true, reply: '¡Bien! Primero el colchón para imprevistos. Después invierte lo que **no necesitará pronto**.' },
          { text: 'Invierte todo de una vez', reply: 'Si se le descompone la compu, tendría que sacar su inversión a mal momento. Primero va el **fondo para emergencias**.' },
          { text: 'Nada, invertir no es para ella', reply: 'Invertir no es solo para ricos. Pero el orden importa: primero un **fondo para emergencias**, luego invertir.' },
        ],
      },
      { tip: '**Ahorrar** es apartar. **Invertir** es poner ese ahorro a generar más. Sin invertir, la inflación se come tu poder de compra.' },
    ],
    // ¿Qué mirar antes de invertir?
    [
      { text: 'Un conocido le escribe a Vale: "Te pago **20% al mes**, sin riesgo, ¡rápido!" 🤑 Antes de contestar, Vale revisa 4 cosas que toda inversión tiene.' },
      {
        match: {
          title: 'Une cada rasgo con su pregunta',
          pairs: [
            ['Rendimiento', '¿Cuánto gano?'],
            ['Riesgo', '¿Qué tan seguro es ese resultado?'],
            ['Liquidez', '¿Qué tan rápido lo vuelvo efectivo?'],
            ['Plazo', '¿Cuánto tiempo lo dejo invertido?'],
          ],
        },
      },
      {
        ask: '"Puedo retirar mi dinero el mismo día, sin castigo." ¿Qué rasgo describe?',
        options: [
          { text: 'Liquidez', ok: true, reply: '¡Sí! Muy líquido = lo vuelves efectivo rápido y sin perder valor. Un terreno, en cambio, puede tardar meses en venderse.' },
          { text: 'Rendimiento', reply: 'El rendimiento es cuánto ganas. Sacar el dinero rápido es **liquidez**.' },
          { text: 'Plazo', reply: 'El plazo es cuánto tiempo **planeas** dejarlo. Poder sacarlo rápido es **liquidez**.' },
        ],
      },
      { text: '⚖️ La regla de oro: nadie te paga más "porque sí". Si esperas ganar más, también aceptas más riesgo.' },
      {
        order: {
          title: 'Arma la regla de oro',
          steps: ['A mayor', 'rendimiento esperado,', 'mayor', 'riesgo'],
          done: '¡Eso! Por eso "mucho, rápido y sin riesgo" no cuadra.',
        },
      },
      {
        rush: {
          title: '¿Suena normal o a fraude?',
          seconds: 30,
          labels: ['Suena normal', 'Señal de fraude'],
          items: [
            { text: '"Gana 20% al mes sin ningún riesgo"', ans: 1 },
            { text: '"Paga más, pero tu dinero puede bajar"', ans: 0 },
            { text: '"Duplica tu dinero en una semana, garantizado"', ans: 1 },
            { text: '"Paga poco, pero es de bajo riesgo"', ans: 0 },
            { text: '"Ganancias altas, rápidas y seguras"', ans: 1 },
          ],
        },
      },
      {
        ask: 'Vale necesita **$15,000 en 6 meses** para el enganche de una moto. ¿Dónde los pone?',
        options: [
          { text: 'En algo de bajo riesgo que termine antes de 6 meses', ok: true, reply: '¡Exacto! Su plazo es corto: no puede arriesgarse a que baje justo cuando lo necesite.' },
          { text: 'En acciones de una empresa nueva que pueden subir o caer mucho', reply: 'Podrían caer justo antes del enganche. Para un plazo corto conviene algo de **bajo riesgo que venza a tiempo**.' },
          { text: 'En el "20% al mes" del conocido', reply: 'Alto, rápido y sin riesgo es **señal de fraude**. Mejor algo de bajo riesgo que venza antes de 6 meses.' },
        ],
      },
    ],
    // ¿Cuánto ganaste de verdad?
    [
      { text: 'Hace un año Vale compró acciones (ejemplo) por **$4,000**. Hoy valen **$4,500** y además le pagaron **$100** de dividendos 💸.' },
      { text: '📏 **Rendimiento** = (lo que vale hoy − lo que pagó + lo que le pagaron en el camino) ÷ lo que pagó.' },
      {
        calc: {
          question: '¿Cuál fue el rendimiento total de Vale en el año, en porcentaje?',
          answer: 15,
          unit: '%',
          hint: '4,500 − 4,000 = 500. Súmale los 100 de dividendos y divide entre 4,000.',
          why: '500 + 100 = 600. 600 ÷ 4,000 = 0.15 → **15%**. Si olvidas los dividendos te da 12.5%.',
        },
      },
      { text: 'Ese 15% es el **rendimiento nominal**, el que ves en tu estado de cuenta. El **real** le quita la inflación: dice si de verdad compras más.\n⚡ Rápido: real ≈ nominal − inflación.' },
      {
        calc: {
          question: 'Otra inversión de Vale pagó 9% y los precios subieron 4% (cifras de ejemplo). ¿Cuál es su rendimiento real aproximado, en porcentaje?',
          answer: 5,
          unit: '%',
          hint: 'Resta: nominal − inflación.',
          why: '9% − 4% = **5%**. La fórmula exacta, (1.09 ÷ 1.04) − 1, da un poco menos: 4.81%.',
        },
      },
      {
        ask: 'La resta rápida y la fórmula exacta (que divide) dan casi lo mismo. ¿Cuál da un poco **más**?',
        options: [
          { text: 'La resta rápida', ok: true, reply: '¡Bien! La resta exagera un poquito. Con 12% y 4%: la resta da 8% y la exacta 7.69%.' },
          { text: 'La fórmula exacta', reply: 'Al revés: la exacta da un poco menos. Con 12% y 4%: exacta 7.69%, resta 8%. La **resta** exagera.' },
          { text: 'Siempre dan exactamente igual', reply: 'Casi, pero no igual. Con 12% y 4%: resta 8%, exacta 7.69%. La **resta** da un poco más.' },
        ],
      },
      {
        sim: {
          title: 'Interés compuesto: ganar sobre lo ganado',
          inputs: [
            { key: 't', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 1, value: 5 },
            { key: 'n', label: 'Años reinvirtiendo todo', min: 1, max: 10, step: 1, value: 3 },
          ],
          outputs: [
            { label: 'Lo que pone al inicio', calc: () => 10000 },
            { label: 'Lo que tendría al final', calc: (x) => 10000 * (1 + x.t / 100) ** x.n, main: true },
          ],
          goal: {
            text: 'Haz que los **$10,000** de Vale lleguen a **$15,000 o más**.',
            check: (x) => 10000 * (1 + x.t / 100) ** x.n >= 15000,
            done: 'Más tiempo o más tasa hacen crecer la bola de nieve ⛄. Son tasas de ejemplo: ningún rendimiento está garantizado.',
          },
        },
      },
      { tip: '**Nominal:** lo que te pagaron. **Real:** lo que creció tu poder de compra. **Compuesto:** el segundo año ganas también sobre lo del primero.' },
    ],
  ],
}
