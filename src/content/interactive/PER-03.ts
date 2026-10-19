import type { InteractiveLesson } from './types'

export const intPER03: InteractiveLesson = {
  lessonId: 'PER-03',
  sections: [
    // ¿Cuándo entra y sale tu dinero?
    [
      { text: 'Tomás, de 24 años, es repartidor 🛵. Cobra **$6,000 el día 15** y **$6,000 el día 30**. Su renta de **$4,000** vence el **día 1**.' },
      {
        ask: 'En el mes gana $12,000 y gasta $11,000. ¿Puede quedarse sin dinero algún día?',
        options: [
          { text: 'Sí, si se gasta la quincena antes de que venza la renta', ok: true, reply: '¡Exacto! En el mes le alcanza, pero las fechas no coinciden. Importa **cuándo** entra y sale el dinero.' },
          { text: 'No, le sobran $1,000', reply: 'En el mes sí le sobran, pero si el día 1 ya se gastó la quincena, ese día **no tiene** para la renta. Importa **cuándo**.' },
          { text: 'No, eso solo pasa a quien gana poco', reply: 'Le puede pasar a cualquiera: si cobras después de cuando pagas, te falta dinero unos días. Importa **cuándo**.' },
        ],
      },
      { text: 'El **flujo de efectivo** es lo que **entra** y lo que **sale**. Tener el dinero, pero no cuando lo necesitas, es un problema de **liquidez**.\n🧮 **Saldo final** = saldo inicial + entradas − salidas.' },
      {
        calc: {
          question: 'Tomás empieza el mes con **$500**, cobra dos quincenas de **$6,000** y sus salidas suman **$11,300**. ¿Con cuánto termina?',
          answer: 1200,
          hint: '500 + (6,000 × 2) − 11,300.',
          why: 'Entradas: 6,000 × 2 = $12,000. Saldo: 500 + 12,000 − 11,300 = **$1,200**. Si olvidas el saldo inicial, te da 700.',
        },
      },
      {
        sim: {
          title: 'El mes de Tomás (renta $4,000 y transporte $1,500 fijos)',
          inputs: [
            { key: 'i', label: 'Saldo inicial ($)', min: 0, max: 1000, step: 100, value: 300 },
            { key: 'c', label: 'Comida del mes ($)', min: 2500, max: 4500, step: 250, value: 4000 },
            { key: 's', label: 'Salidas y antojos ($)', min: 500, max: 3000, step: 250, value: 2500 },
          ],
          outputs: [
            { label: 'Entradas (2 quincenas)', calc: () => 12000 },
            { label: 'Salidas', calc: (x) => 4000 + 1500 + x.c + x.s },
            { label: 'Saldo final', calc: (x) => x.i + 12000 - (4000 + 1500 + x.c + x.s), main: true },
          ],
          goal: {
            text: 'Haz que Tomás termine el mes con **$1,500 o más**.',
            check: (x) => x.i + 12000 - (4000 + 1500 + x.c + x.s) >= 1500,
            done: 'Recortar antojos o cuidar la comida le deja colchón. Si el saldo fuera negativo, tendría que recortar o pedir prestado.',
          },
        },
      },
      { tip: 'Cuenta **cuánto** entra y sale, pero también **cuándo**. Ese desfase se resuelve con un calendario de pagos (lo verás en la lección 3).' },
    ],
    // ¿En qué se te va?
    [
      { text: 'Tomás siente que el dinero "se le va como agua" 💧. Decide **anotar todo** durante un mes.' },
      {
        multi: {
          title: '¿Qué debe anotar de cada gasto?',
          items: [
            { text: 'La fecha', ok: true },
            { text: 'El concepto (en qué fue)', ok: true },
            { text: 'El monto', ok: true },
            { text: 'La forma de pago', ok: true },
            { text: 'Solo los gastos grandes', ok: false },
          ],
          why: 'Fecha, concepto, monto y forma de pago. Y **todo**, incluso lo pequeño y lo pagado con tarjeta: ahí se esconden las fugas.',
        },
      },
      {
        ask: 'Tomás compra un refresco de $25 cada día. ¿Cuánto crees que suma en 30 días?',
        options: [
          { text: '$250', reply: 'Se queda corto: 25 × 30 = **$750**. Por eso lo pequeño engaña.' },
          { text: '$750', ok: true, reply: '¡Sí! 25 × 30 = $750. Un gasto que casi no se nota.' },
          { text: '$75', reply: 'Mucho más: 25 × 30 = **$750** en un mes.' },
        ],
      },
      { text: 'Esos son los **gastos hormiga** 🐜: pequeños y frecuentes (un café, un refresco, comisiones, apps que no usas). Uno solo no pesa; juntos suman miles al año.\n🧮 **Gasto** = precio × veces por semana × semanas.' },
      {
        calc: {
          question: 'Tomás compra unas papas de **$20**, **5 días** a la semana. ¿Cuánto gasta en un año de **52 semanas**?',
          answer: 5200,
          hint: 'Por semana: 20 × 5. Luego × 52.',
          why: '20 × 5 = $100 por semana. 100 × 52 = **$5,200** al año. Si multiplicas por 7 días, cuentas días en que no compra.',
        },
      },
      {
        sort: {
          title: '¿Es gasto hormiga?',
          buckets: ['Gasto hormiga', 'No es hormiga'],
          items: [
            { text: 'Un café de $35 casi todos los días', bucket: 0, why: 'Pequeño y frecuente: hormiga.' },
            { text: 'Una app de música que no abre hace meses', bucket: 0, why: 'Se cobra sola y no la usa: fuga clásica.' },
            { text: 'La comisión por sacar del cajero de otro banco cada semana', bucket: 0, why: 'Las comisiones pequeñas y repetidas también son hormiga.' },
            { text: 'La renta mensual', bucket: 1, why: 'Es grande, fija y la tiene en la mira: no es hormiga.' },
            { text: 'El servicio de su moto cada seis meses', bucket: 1, why: 'No es pequeño ni frecuente: es un gasto planeado.' },
          ],
        },
      },
      { tip: 'La meta no es prohibirte todo, sino decidir **a propósito** en qué gastas. Agrupa por categorías y revisa cada semana.' },
    ],
    // ¿Cómo apartar antes de gastar?
    [
      { text: 'Día 1. A Tomás le falta para la renta 😬: se gastó la quincena del 15 en otras cosas.' },
      {
        ask: '¿Qué le ayuda más a Tomás?',
        options: [
          { text: 'Apartar la mitad de la renta en cada quincena', ok: true, reply: '¡Eso! $4,000 ÷ 2 = $2,000 de cada quincena, en un sobre o cuenta solo para la renta.' },
          { text: 'Pedir prestado cada mes y pagarlo después', reply: 'Pedir cada mes genera costos y no arregla el desfase. Mejor **apartar la mitad de la renta en cada quincena**.' },
          { text: 'Pagar la renta con lo que sobre', reply: 'Justo eso le está fallando: casi nunca sobra. Mejor **apartar la mitad en cada quincena**.' },
        ],
      },
      { text: '📅 **Calendario de pagos:** la fecha de cada ingreso y de cada pago fijo. Así apartas lo de cada compromiso en la quincena correcta y no pagas recargos.\n🧮 **Apartado por quincena** = pago mensual ÷ 2.' },
      { text: '💰 **Págate primero:** separa tu ahorro **el mismo día que cobras**, antes de gastar en otra cosa. Si esperas a ver "lo que sobre", casi nunca sobra.' },
      {
        order: {
          title: 'Arma la quincena de Tomás',
          steps: ['Anota en su calendario cuándo cobra y cuándo paga', 'El día 15 le depositan su quincena', 'Ese mismo día separa su ahorro y la mitad de la renta', 'Usa lo que queda libre en el día a día'],
          done: '¡Así! Primero lo comprometido y el ahorro; después, lo demás.',
        },
      },
      {
        calc: {
          question: 'Tomás cobra **$6,000**, aparta la mitad de su renta de **$4,000** y ahorra **$300**. ¿Cuánto le queda libre para la quincena?',
          answer: 3700,
          hint: 'Apartado: 4,000 ÷ 2. Luego 6,000 − apartado − ahorro.',
          why: '4,000 ÷ 2 = $2,000. 6,000 − 2,000 − 300 = **$3,700**. Ese es el dinero que sí puede gastar.',
        },
      },
      { tip: 'Separa el dinero **por propósito**: un sobre o cuenta para gastos fijos, otro para el día a día y otro para tu ahorro.' },
    ],
  ],
}
