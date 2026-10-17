import type { InteractiveLesson } from './types'

export const intL104: InteractiveLesson = {
  lessonId: 'L1-04',
  sections: [
    // Las 3 palabras del negocio
    [
      { text: 'Don Beto tiene un taller mecánico 🔧. Un amigo le pregunta: "¿Cuánto vale tu taller?" Y Beto no sabe qué contestar.' },
      {
        ask: '¿Qué necesita saber Beto primero?',
        options: [
          { text: 'Lo que el taller tiene y lo que debe', ok: true, reply: '¡Eso! Con esas dos cosas sabrá cuánto es de verdad suyo.' },
          { text: 'Cuántos coches arregló hoy', reply: 'Eso habla de su trabajo del día, no de lo que vale. Necesita saber **lo que tiene y lo que debe**.' },
          { text: 'Cuánto vale su casa', reply: 'La casa es de Beto, no del taller. Necesita saber lo que el **taller** tiene y debe.' },
        ],
      },
      {
        text: 'Todo negocio se resume en 3 palabras:\n🧰 **Activo:** lo que **tiene** y le traerá beneficio (dinero, herramientas, lo que le deben).\n💳 **Pasivo:** lo que **debe** y tendrá que pagar.\n👤 **Capital:** lo que es **del dueño** (lo que puso + las ganancias que dejó).',
      },
      {
        sort: {
          title: 'Clasifica lo del taller de Beto',
          buckets: ['Activo', 'Pasivo', 'Capital'],
          items: [
            { text: 'Herramientas y elevadores', bucket: 0, why: 'El taller las tiene y le sirven para trabajar.' },
            { text: 'Lo que debe a la refaccionaria', bucket: 1, why: 'Es una deuda: tendrá que pagarla.' },
            { text: 'El dinero que Beto puso para abrir', bucket: 2, why: 'Es la parte del dueño: su aportación.' },
            { text: 'Lo que un cliente le debe al taller', bucket: 0, why: 'Es un **derecho de cobro**: dinero que va a entrar. Es activo.' },
            { text: 'Sueldos que aún no paga', bucket: 1, why: 'Es una obligación pendiente: pasivo.' },
            { text: 'Ganancias que Beto dejó en el negocio', bucket: 2, why: 'Lo ganado y no repartido es del dueño: capital.' },
          ],
        },
      },
      {
        text: 'Además, se separan por **plazo**:\n⚡ **Circulante:** se cobra, vende, usa o paga en **un año o menos** (caja, clientes, mercancía).\n🏢 **No circulante:** dura o se paga en **más de un año** (local, camioneta, equipo de cómputo).',
      },
      {
        sort: {
          title: 'Activos de Beto: ¿corto o largo plazo?',
          buckets: ['Circulante', 'No circulante'],
          items: [
            { text: 'Dinero en la cuenta del banco', bucket: 0, why: 'Se puede usar ya: circulante.' },
            { text: 'Elevador que usará muchos años', bucket: 1, why: 'Dura más de un año: no circulante.' },
            { text: 'Lo que un cliente le pagará el próximo mes', bucket: 0, why: 'Se cobra en menos de un año: circulante.' },
            { text: 'La grúa del taller', bucket: 1, why: 'Un vehículo dura varios años: no circulante.' },
            { text: 'Refacciones para vender esta semana', bucket: 0, why: 'Se venden pronto: circulante.' },
            { text: 'La computadora de la oficina', bucket: 1, why: 'El equipo de cómputo se usa varios años: no circulante.' },
          ],
        },
      },
    ],
    // ¿Un préstamo es activo?
    [
      { text: 'Beto pide **$50,000** prestados al banco 🏦 para comprar otro elevador. El dinero ya está en su cuenta.' },
      {
        ask: '¿Ese préstamo es un activo del taller?',
        options: [
          { text: 'Trae dos cosas: dinero (activo) y deuda (pasivo)', ok: true, reply: '¡Exacto! El **dinero** que llegó es activo; la **obligación de devolverlo** es pasivo. Aparecen al mismo tiempo.' },
          { text: 'Sí, porque ahora tiene más dinero', reply: 'Trampa muy común. El dinero sí es activo, pero **la deuda** con el banco es pasivo.' },
          { text: 'No, el préstamo no cambia nada', reply: 'Sí cambia: entra dinero (activo) y nace una deuda (pasivo).' },
        ],
      },
      { tip: 'Un préstamo trae dos cosas: **dinero** (activo) y **deuda** (pasivo). Nunca es "solo activo".' },
      {
        ask: 'Beto compra una compresora y queda a deber a la tienda. ¿Qué nace?',
        options: [
          { text: 'Un activo y un pasivo', ok: true, reply: '¡Eso! La compresora es activo y lo que debe es pasivo.' },
          { text: 'Solo un activo', reply: 'Falta algo: si quedó a deber, también nació un **pasivo**.' },
          { text: 'Solo un pasivo', reply: 'Falta algo: la compresora la **tiene** y le sirve, así que también es un **activo**.' },
        ],
      },
      {
        rush: {
          title: '¿Activo o pasivo?',
          seconds: 30,
          labels: ['Activo', 'Pasivo'],
          items: [
            { text: 'El dinero del préstamo en el banco', ans: 0 },
            { text: 'Lo que Beto debe al banco', ans: 1 },
            { text: 'Los elevadores', ans: 0 },
            { text: 'Sueldos por pagar', ans: 1 },
            { text: 'Lo que le debe un cliente', ans: 0 },
            { text: 'La deuda con la refaccionaria', ans: 1 },
            { text: 'Refacciones en bodega', ans: 0 },
          ],
        },
      },
    ],
    // ¿Cuánto es de los dueños?
    [
      { text: 'Ahora sí, Beto puede contestar. Lo que de verdad es suyo se llama **capital contable**:\n🟰 **Activos − Pasivos**' },
      {
        sim: {
          title: '¿Cuánto vale para el dueño?',
          inputs: [
            { key: 'a', label: 'Activos (lo que tiene)', min: 0, max: 150000, step: 5000, value: 50000 },
            { key: 'p', label: 'Pasivos (lo que debe)', min: 0, max: 100000, step: 5000, value: 30000 },
          ],
          outputs: [{ label: 'Capital contable (activos − pasivos)', calc: (x) => x.a - x.p, main: true }],
          goal: {
            text: 'Haz que el capital del taller llegue a **$60,000 o más**.',
            check: (x) => x.a - x.p >= 60000,
            done: '¡Listo! El capital sube si el negocio tiene más o si debe menos. Si sale negativo, debe más de lo que tiene: alerta.',
          },
        },
      },
      {
        ask: 'Beto tiene un coche personal para pasear con su familia. Nunca lo usa en el taller. ¿Es activo del taller?',
        options: [
          { text: 'No, el taller es una entidad separada', ok: true, reply: '¡Correcto! Las cosas personales de Beto no cuentan como del negocio.' },
          { text: 'Sí, todo lo del dueño es del negocio', reply: 'No. El negocio es una **entidad separada**: el coche, la casa y las deudas personales de Beto no son del taller.' },
          { text: 'Sí, pero como pasivo', reply: 'No es deuda del taller ni es suyo. El negocio es una **entidad separada** de su dueño.' },
        ],
      },
      {
        order: {
          title: 'Ordena los pasos para sacar el capital',
          steps: ['Separa lo personal del dueño', 'Suma todos los activos', 'Suma todos los pasivos', 'Resta: activos − pasivos'],
          done: '¡Así se hace! Primero lo personal fuera, luego sumas y al final restas.',
        },
      },
      {
        calc: {
          question: 'El taller tiene herramientas por **$40,000**, refacciones por **$15,000** y **$25,000** en el banco. Debe **$12,000** a la refaccionaria y **$18,000** al banco. Beto además tiene un coche personal de $150,000. ¿Cuál es el capital contable del taller?',
          answer: 50000,
          hint: 'Activos: 40,000 + 15,000 + 25,000. Pasivos: 12,000 + 18,000. El coche personal no cuenta.',
          why: 'Activos = **$80,000**. Pasivos = **$30,000**. Capital = 80,000 − 30,000 = **$50,000**. Si sumaste el coche, te salió 200,000.',
        },
      },
    ],
  ],
}
