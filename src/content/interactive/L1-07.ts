import type { InteractiveLesson } from './types'

export const intL107: InteractiveLesson = {
  lessonId: 'L1-07',
  sections: [
    // Qué son las NIF
    [
      { text: 'Imagina un partido de futbol ⚽ donde cada equipo juega con sus propias reglas. Nadie sabría quién ganó.' },
      { text: 'Con los números de las empresas pasa igual. Las **NIF** (Normas de Información Financiera) son **las reglas del juego** de la contabilidad en México.' },
      {
        match: {
          title: 'Une cada nombre con lo que es',
          pairs: [
            ['NIF', 'Reglas para registrar y presentar números en México'],
            ['CINIF', 'Organismo que emite las NIF'],
            ['IFRS', 'Normas internacionales (con las que buscan ser congruentes las NIF)'],
            ['Serie A', 'El Marco Conceptual: las bases de las NIF'],
          ],
        },
      },
      {
        ask: '¿Las NIF dicen cuántos impuestos pagas?',
        options: [
          { text: 'No', ok: true, reply: '¡Correcto! Las NIF **no son leyes fiscales**. Los impuestos se rigen por las leyes fiscales.' },
          { text: 'Sí', reply: 'No. Las NIF son reglas contables; los impuestos vienen de las **leyes fiscales**.' },
        ],
      },
    ],
    // Postulados básicos
    [
      { text: 'Los **postulados** son las ideas de fondo de la contabilidad. Empieza con estos tres:' },
      { tip: '**Entidad económica:** el negocio es distinto de su dueño. **Negocio en marcha:** se supone que seguirá operando. **Dualidad económica:** todo lo que tiene salió de algún lado (deudas o dueños).' },
      {
        sort: {
          title: '¿Qué postulado aplica?',
          buckets: ['Entidad económica', 'Negocio en marcha', 'Dualidad económica'],
          items: [
            { text: 'Don Pepe paga la colegiatura de su hijo con dinero de la tiendita. No es gasto del negocio.', bucket: 0, why: 'El negocio y el dueño son distintos: eso es un **retiro del dueño**.' },
            { text: 'La tiendita compró una vitrina que durará 10 años, porque se espera que siga abierta.', bucket: 1, why: 'Se supone que el negocio **seguirá operando** en el futuro.' },
            { text: 'La camioneta de $300,000 se pagó con $100,000 del dueño y $200,000 de préstamo.', bucket: 2, why: 'Lo que tiene (activo) salió de los dueños y de las deudas: **dualidad**.' },
            { text: 'El coche personal del dueño no aparece en los números del negocio.', bucket: 0, why: 'Lo personal del dueño no es del negocio: **entidad económica**.' },
          ],
        },
      },
    ],
    // Devengación contable
    [
      { text: 'Pregunta clave: **¿cuándo se registra?** Cuando la operación **ocurre**, no cuando se cobra o se paga.' },
      {
        sort: {
          title: '¿De qué mes es?',
          buckets: ['Marzo', 'Abril'],
          items: [
            { text: 'Un taller repara un coche el **28 de marzo** y lo cobra el **5 de abril**. ¿De qué mes es el ingreso?', bucket: 0, why: 'El trabajo se hizo en marzo. En abril solo se registra que el cliente pagó.' },
            { text: 'Usas la luz en **marzo** y pagas el recibo en **abril**. ¿De qué mes es el gasto?', bucket: 0, why: 'El gasto es cuando se **consume**: marzo.' },
            { text: 'En **marzo** pagas por adelantado la renta de **abril**. ¿De qué mes es el gasto?', bucket: 1, why: 'Usas el local en abril, así que el gasto es de abril aunque pagues antes.' },
            { text: 'En **marzo** un cliente te paga por adelantado un servicio que harás en **abril**. ¿De qué mes es el ingreso?', bucket: 1, why: 'El ingreso es cuando prestas el servicio: abril. Mientras, es dinero que le debes al cliente en servicio.' },
          ],
        },
      },
      { tip: '**Cobrar o pagar** solo mueve el efectivo. El ingreso o gasto es del mes en que **pasó**.' },
    ],
  ],
}
