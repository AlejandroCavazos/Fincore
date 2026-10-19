import type { InteractiveLesson } from './types'

export const intPER08: InteractiveLesson = {
  lessonId: 'PER-08',
  sections: [
    // ¿Qué es pedir crédito?
    [
      { text: 'Toño tiene 23 años y reparte comida en moto 🛵. Unas semanas gana mucho y otras poco. Se le descompone la moto y la tienda le dice: "llévese una nueva **en abonos**".' },
      {
        ask: '¿Qué le están ofreciendo a Toño?',
        options: [
          { text: 'Un crédito: se la prestan hoy y la paga después', ok: true, reply: '¡Eso! Y normalmente pagará **intereses** y a veces **comisiones**.' },
          { text: 'Un regalo de la tienda', reply: 'No es regalo: tendrá que pagarla después, casi siempre con intereses. Es un **crédito**.' },
          { text: 'Un descuento', reply: 'No baja el precio: le dejan pagarlo después. Eso es un **crédito**.' },
        ],
      },
      { text: 'En un **crédito**, el **acreedor** te presta dinero o te deja comprar ahora, y tú, el **deudor**, te comprometes a pagar después.' },
      { text: 'Hay dos tipos:\n🔁 **Revolvente:** una línea que usas, pagas y vuelves a usar (tarjeta del banco o de tienda departamental).\n➡️ **No revolvente:** una cantidad fija que pagas en mensualidades hasta terminar (personal, nómina, auto, casa).' },
      {
        sort: {
          title: '¿Revolvente o no revolvente?',
          buckets: ['Revolvente', 'No revolvente'],
          items: [
            { text: 'Tarjeta de crédito del banco', bucket: 0, why: 'Usas, pagas y vuelves a usar la línea.' },
            { text: 'Tarjeta de una tienda departamental', bucket: 0, why: 'Aunque sea de una tienda, también es crédito revolvente.' },
            { text: 'Préstamo para la moto en 24 mensualidades', bucket: 1, why: 'Monto fijo que se paga hasta terminar.' },
            { text: 'Crédito hipotecario para una casa', bucket: 1, why: 'Monto fijo en mensualidades: no revolvente.' },
            { text: 'Préstamo de nómina', bucket: 1, why: 'Te dan una cantidad fija y se descuenta hasta liquidarla.' },
          ],
        },
      },
      { text: 'Cómo pagas queda registrado en una **sociedad de información crediticia** (en México, por ejemplo, el Buró de Crédito). Es tu **historial crediticio**.' },
      {
        ask: 'Toño paga puntual sus abonos durante dos años. ¿Qué gana?',
        options: [
          { text: 'Un buen historial que le abre puertas', ok: true, reply: '¡Sí! Después suele conseguir otros créditos con mejores condiciones.' },
          { text: 'Que le regalen la moto', reply: 'La moto la paga él. Lo que gana es un **buen historial** que le abre puertas.' },
          { text: 'Nada, a nadie le importa', reply: 'Sí importa: las instituciones revisan tu **historial** antes de prestarte.' },
        ],
      },
    ],
    // ¿Cómo funciona tu tarjeta?
    [
      { text: 'Toño saca su primera tarjeta 💳 con **límite de $15,000**: lo máximo que puede deber. **Crédito disponible = límite − saldo que debes.**' },
      {
        calc: {
          question: 'Toño debe $4,500 en su tarjeta de límite $15,000. ¿Cuánto crédito disponible le queda?',
          answer: 10500,
          hint: 'Límite − saldo: 15,000 − 4,500.',
          why: '15,000 − 4,500 = **$10,500**. Ojo: es dinero prestado, no dinero extra.',
        },
      },
      { text: 'Cada mes hay dos fechas:\n📅 **Fecha de corte:** el banco cierra el periodo y suma tus compras en el **estado de cuenta**.\n⏰ **Fecha límite de pago:** días después; es el último día para pagar sin atraso.' },
      {
        rush: {
          title: '¿Fecha de corte o fecha límite?',
          seconds: 30,
          labels: ['📅 Corte', '⏰ Límite de pago'],
          items: [
            { text: 'El banco cierra el periodo', ans: 0 },
            { text: 'Último día para pagar sin atraso', ans: 1 },
            { text: 'Se suman tus compras en el estado de cuenta', ans: 0 },
            { text: 'Si pagas después, caes en atraso', ans: 1 },
            { text: 'Lo que compras después aparece en el siguiente estado de cuenta', ans: 0 },
            { text: 'Llega unos días después del cierre', ans: 1 },
          ],
        },
      },
      {
        order: {
          title: 'Ordena el mes de la tarjeta de Toño',
          steps: ['Toño compra con la tarjeta', 'Llega la fecha de corte', 'Revisa su estado de cuenta', 'Paga antes de la fecha límite'],
          done: '¡Así va el ciclo! Primero el corte, luego el pago.',
        },
      },
      { text: 'Tu estado de cuenta trae dos pagos:\n🟡 **Pago mínimo:** evita el atraso, pero lo que dejas sigue generando intereses.\n🟢 **Pago para no generar intereses:** cubre todo el periodo. Quien lo paga es **totalero**.' },
      {
        ask: 'Este mes Toño ganó poco y paga solo el **mínimo**. ¿Qué pasa?',
        options: [
          { text: 'No cae en atraso, pero el resto genera intereses', ok: true, reply: '¡Exacto! Estar al corriente **no** es lo mismo que no pagar intereses.' },
          { text: 'No le cobran intereses', reply: 'El mínimo solo evita el atraso. Lo que no pagó **sí genera intereses**.' },
          { text: 'Le cancelan la tarjeta', reply: 'Con el mínimo no cae en atraso. Pero el saldo que deja **genera intereses**.' },
        ],
      },
      { tip: 'Para no pagar intereses, cubre el **pago para no generar intereses** antes de la **fecha límite**.' },
    ],
    // Meses sin intereses sin sustos
    [
      { text: 'Toño quiere un celular de **$7,200 a 6 meses sin intereses (MSI)** 📱 para tomar más pedidos.' },
      {
        ask: 'El día que lo compra, ¿cuánto ocupa de su límite?',
        options: [
          { text: 'Los $7,200 completos', ok: true, reply: '¡Sí! La compra completa **ocupa el límite** y se libera conforme paga.' },
          { text: 'Solo $1,200, una mensualidad', reply: 'Paga $1,200 al mes, pero el límite se ocupa por **los $7,200 completos** desde el primer día.' },
          { text: 'Nada, porque es sin intereses', reply: 'Sin intereses no significa sin deuda: ocupa **los $7,200** del límite.' },
        ],
      },
      { text: 'Con **MSI** divides la compra en partes iguales y no pagas intereses **si pagas cada mensualidad a tiempo**. Cada mensualidad se suma a tus demás pagos del mes.' },
      {
        calc: {
          question: 'El límite de Toño es $20,000 y ya debe $3,000. Compra el celular de $7,200 a 6 MSI. ¿Cuánto crédito disponible le queda?',
          answer: 9800,
          hint: 'A MSI la compra resta completa: 20,000 − 3,000 − 7,200.',
          why: '20,000 − 3,000 − 7,200 = **$9,800**. Si restas solo la mensualidad (1,200) te sale 15,800, y eso no es lo que tiene libre.',
        },
      },
      { text: '**Pago para no generar intereses** = mensualidades MSI del periodo + compras normales del periodo.\nEj.: 7,200 ÷ 6 = $1,200 + $2,100 de súper = **$3,300**.' },
      {
        sim: {
          title: 'El pago del mes de Toño',
          inputs: [
            { key: 'p', label: 'Precio de la compra a MSI', min: 3600, max: 18000, step: 3600, value: 7200 },
            { key: 'm', label: 'Número de meses sin intereses', min: 3, max: 12, step: 3, value: 6 },
            { key: 'n', label: 'Compras normales del mes', min: 1000, max: 6000, step: 500, value: 3500 },
          ],
          outputs: [
            { label: 'Mensualidad MSI', calc: (x) => x.p / x.m },
            { label: 'Pago para no generar intereses', calc: (x) => x.p / x.m + x.n, main: true },
          ],
          goal: {
            text: 'Toño puede pagar **$3,000 al mes**. Haz que el pago para no generar intereses quepa ahí.',
            check: (x) => x.p / x.m + x.n <= 3000,
            done: 'Las mensualidades se suman a tus otras compras: usa MSI solo si todo cabe en tu presupuesto.',
          },
        },
      },
      {
        multi: {
          title: 'Marca los hábitos que cuidan a Toño',
          items: [
            { text: 'Pagar el total para no generar intereses antes de la fecha límite', ok: true },
            { text: 'Sacar efectivo con la tarjeta cuando falte dinero', ok: false },
            { text: 'Comprar a MSI solo si las mensualidades caben en su presupuesto', ok: true },
            { text: 'Revisar su estado de cuenta cada mes', ok: true },
            { text: 'Usar todo el límite porque ya se lo autorizaron', ok: false },
          ],
          why: 'Sacar efectivo suele cobrar comisión e intereses desde ese día, y usar todo el límite lo deja sin margen. La tarjeta **no es dinero extra: es dinero prestado**.',
        },
      },
    ],
  ],
}
