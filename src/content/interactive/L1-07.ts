import type { InteractiveLesson } from './types'

export const intL107: InteractiveLesson = {
  lessonId: 'L1-07',
  sections: [
    // ¿Quién pone las reglas?
    [
      { text: 'Imagina un partido de futbol ⚽ donde cada equipo usa sus propias reglas. Nadie sabría quién ganó.' },
      {
        ask: 'Don Pepe y otra tiendita piden un préstamo. ¿Cómo puede el banco comparar sus números?',
        options: [
          { text: 'Si las dos siguen las mismas reglas', ok: true, reply: '¡Exacto! Con las mismas reglas, el banco compara y confía en los números.' },
          { text: 'Si cada una usa sus propias reglas', reply: 'Sería como el futbol con reglas distintas: imposible comparar. Hacen falta **las mismas reglas**.' },
          { text: 'No necesita reglas, solo ve el total', reply: 'Un total hecho con criterios distintos no se puede comparar. Hacen falta **las mismas reglas**.' },
        ],
      },
      {
        text: 'Esas reglas son las **NIF** (Normas de Información Financiera): dicen cómo registrar y presentar los números en México.\n🏛️ Las emite el **CINIF**, un organismo independiente.\n🌎 Buscan ser congruentes con las normas internacionales (**IFRS**).',
      },
      { text: 'Ojo: las NIF **no son leyes fiscales**. Los impuestos vienen de leyes como la del ISR y los cobra el **SAT**.' },
      {
        match: {
          title: 'Une cada nombre con lo que es',
          pairs: [
            ['NIF', 'Reglas para registrar y presentar números en México'],
            ['CINIF', 'Organismo que emite las NIF'],
            ['IFRS', 'Normas internacionales'],
            ['SAT', 'Aplica las reglas de impuestos'],
          ],
        },
      },
      {
        ask: 'Don Pepe sigue las NIF. ¿Su utilidad contable será siempre igual a la utilidad para impuestos?',
        options: [
          { text: 'No siempre', ok: true, reply: '¡Correcto! Las NIF y las leyes fiscales son reglas distintas, así que a veces no coinciden.' },
          { text: 'Sí, siempre', reply: 'No: las NIF no son leyes fiscales. Por eso la utilidad contable y la de impuestos **a veces no coinciden**.' },
          { text: 'Sí, porque el SAT emite las NIF', reply: 'Las NIF las emite el **CINIF**, no el SAT. Por eso las dos utilidades **a veces no coinciden**.' },
        ],
      },
    ],
    // Las ideas de fondo
    [
      { text: 'Don Pepe paga la colegiatura de su hijo con dinero de la tiendita 🏪.' },
      {
        ask: '¿Es un gasto de la tiendita?',
        options: [
          { text: 'No, es un retiro del dueño', ok: true, reply: '¡Bien! El negocio y Don Pepe son **distintos**. Lo de su hijo es personal.' },
          { text: 'Sí, porque salió de la caja', reply: 'Salió de la caja, pero no es del negocio: es **un retiro del dueño**. El negocio y Don Pepe son distintos.' },
          { text: 'Sí, si es poco dinero', reply: 'El monto no importa: lo personal no es gasto del negocio. Es **un retiro del dueño**.' },
        ],
      },
      {
        text: 'Esa es una **idea de fondo** (un **postulado**). Las NIF reconocen ocho. Empieza con estas:\n🧍 **Entidad económica:** el negocio es distinto de su dueño.\n⏩ **Negocio en marcha:** se supone que seguirá operando.\n⚖️ **Dualidad económica:** todo lo que tiene salió de algún lado (deudas o dueños).',
      },
      {
        sort: {
          title: '¿Qué idea aplica?',
          buckets: ['Entidad económica', 'Negocio en marcha', 'Dualidad económica'],
          items: [
            { text: 'La dueña de una estética paga con dinero del negocio la colegiatura de su hija. No es gasto de la estética.', bucket: 0, why: 'El negocio y la dueña son distintos: eso es un **retiro de la dueña**.' },
            { text: 'La tiendita compró una vitrina que durará 10 años, porque se espera que siga abierta.', bucket: 1, why: 'Se supone que el negocio **seguirá operando** en el futuro.' },
            { text: 'La camioneta de $300,000 se pagó con $100,000 del dueño y $200,000 de préstamo.', bucket: 2, why: 'Lo que tiene (activo) salió de los dueños y de las deudas: **dualidad**.' },
            { text: 'El coche personal del dueño no aparece en los números del negocio.', bucket: 0, why: 'Lo personal del dueño no es del negocio: **entidad económica**.' },
          ],
        },
      },
      { tip: 'Lo personal del dueño **no** va en los números del negocio.' },
    ],
    // ¿Cuándo se anota?
    [
      { text: 'Don Pepe le surte refrescos a un restaurante el **30 de junio**. Se los pagan el **10 de julio**. 🤔' },
      {
        ask: '¿En qué mes crees que va esa venta?',
        options: [
          { text: 'Junio, cuando entregó', ok: true, reply: '¡Bien pensado! La venta pasó en junio. En julio solo se anota que le pagaron.' },
          { text: 'Julio, cuando le pagan', reply: 'Cobrar solo mueve el efectivo. La venta **pasó en junio**, así que es de junio.' },
          { text: 'Mitad en junio y mitad en julio', reply: 'No se parte. La venta **pasó en junio**: ese es su mes.' },
        ],
      },
      {
        text: 'Es la **devengación contable**: se anota cuando la operación **ocurre**, no cuando se cobra o se paga.\n💰 **Ingreso:** cuando vendes o prestas el servicio.\n🧾 **Gasto:** cuando lo consumes o lo usas.',
      },
      {
        sort: {
          title: '¿De qué mes es?',
          buckets: ['Marzo', 'Abril'],
          items: [
            { text: 'Un taller repara un coche el **28 de marzo** y lo cobra el **5 de abril**. ¿De qué mes es el ingreso?', bucket: 0, why: 'El trabajo se hizo en marzo. En abril solo se registra que el cliente pagó.' },
            { text: 'Usas la luz en **marzo** y pagas el recibo en **abril**. ¿De qué mes es el gasto?', bucket: 0, why: 'El gasto es cuando se **consume**: marzo.' },
            { text: 'En **marzo** pagas por adelantado la renta de **abril**. ¿De qué mes es el gasto?', bucket: 1, why: 'Usas el local en abril, así que el gasto es de abril aunque pagues antes.' },
            { text: 'En **marzo** un cliente te paga por adelantado un servicio que harás en **abril**. ¿De qué mes es el ingreso?', bucket: 1, why: 'El ingreso es cuando prestas el servicio: abril.' },
          ],
        },
      },
      {
        calc: {
          question: 'En mayo Don Pepe vende $20,000: cobra $15,000 y $5,000 se los quedan a deber. También en mayo cobra $3,000 de ventas de abril. ¿Cuánto ingreso es de mayo?',
          answer: 20000,
          hint: 'Cuenta solo lo que **vendió** en mayo, lo haya cobrado o no.',
          why: 'Vendió en mayo 15,000 + 5,000 = **$20,000**. Los $3,000 son ventas de abril: en mayo solo entró ese efectivo.',
        },
      },
      { tip: '**Cobrar o pagar** solo mueve el efectivo. El ingreso o gasto es del mes en que **pasó**.' },
    ],
  ],
}
