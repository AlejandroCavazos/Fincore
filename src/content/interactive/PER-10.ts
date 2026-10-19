import type { InteractiveLesson } from './types'

export const intPER10: InteractiveLesson = {
  lessonId: 'PER-10',
  sections: [
    // ¿Cuánto debes, de verdad?
    [
      { text: 'Martha es enfermera 🩺 y mamá de dos. Siempre dice que debe "como $15,000". Un domingo se sienta a hacer **la lista de sus deudas**.' },
      {
        ask: '¿Qué crees que descubre?',
        options: [
          { text: 'Que debe más de lo que creía', ok: true, reply: 'Así le pasa a mucha gente: ver el total por primera vez sorprende. Por eso la lista es el **primer paso**.' },
          { text: 'Que debe justo lo que pensaba', reply: 'Puede pasar, pero es raro. Lo común es descubrir que se debe **más** de lo que se creía.' },
          { text: 'Que ya no debe nada', reply: 'Ojalá. Sin anotar, casi siempre se debe **más** de lo que uno cree.' },
        ],
      },
      { text: 'Por cada deuda anota 4 cosas:\n🏦 **Acreedor:** a quién le debes.\n💰 **Saldo:** cuánto debes hoy.\n📈 **Tasa o CAT:** cuánto te cuesta.\n📅 **Pago mínimo** o mensualidad y fecha.' },
      {
        calc: {
          question: 'Martha anota sus saldos: tarjeta A $9,500, préstamo $12,000, tarjeta B $4,300 y tienda departamental $7,200. ¿Cuánto debe en total?',
          answer: 33000,
          hint: 'Suma los cuatro saldos.',
          why: '9,500 + 12,000 + 4,300 + 7,200 = **$33,000**. Más del doble de lo que creía.',
        },
      },
      { text: 'Hay deuda que puede **construir** algo (estudiar, tu casa, una herramienta que te da ingresos) y deuda que solo **financia consumo** (vacaciones, fiestas, ropa). La segunda es la primera a eliminar y no repetir.' },
      {
        sort: {
          title: '¿Construye o solo es consumo?',
          buckets: ['Puede construir', 'Solo consumo'],
          items: [
            { text: 'Curso de especialidad para ganar más en su trabajo', bucket: 0, why: 'Puede aumentar sus ingresos, si el pago es manejable.' },
            { text: 'Horno para vender pasteles los fines de semana', bucket: 0, why: 'Es una herramienta que le da ingresos.' },
            { text: 'Crédito para la casa donde vive', bucket: 0, why: 'Puede construir patrimonio.' },
            { text: 'Vacaciones con tarjeta que no pudo pagar al corte', bucket: 1, why: 'El viaje se acaba y la deuda se queda.' },
            { text: 'Celular nuevo a plazos solo por estrenar', bucket: 1, why: 'Ser caro no lo vuelve inversión: es consumo.' },
          ],
        },
      },
      {
        multi: {
          title: 'Marca las señales de alerta',
          items: [
            { text: 'Solo pagar el mínimo cada mes', ok: true },
            { text: 'Usar una tarjeta para pagar otra', ok: true },
            { text: 'Atrasarse seguido', ok: true },
            { text: 'Pagar el total de la tarjeta cada mes', ok: false },
          ],
          why: 'Pagar solo el mínimo, pagar una tarjeta con otra, atrasarse o ya no saber cuánto debes son **señales de alerta**. Pagar el total es un buen hábito.',
        },
      },
    ],
    // ¿Qué deuda pagas primero?
    [
      { text: 'Martha logró juntar **$1,500 extra al mes** para salir de deudas. ¿A cuál se los da?' },
      { text: 'La regla base: paga el **mínimo en todas** para no atrasarte y manda **todo el extra a una sola**. Cuando la liquidas, su pago se suma a la siguiente.' },
      { text: 'Hay dos métodos:\n🏔️ **Avalancha:** primero la de **tasa más alta**. Ahorra más intereses.\n⛄ **Bola de nieve:** primero la de **saldo más pequeño**. Liquidas una pronto y te motiva.' },
      {
        match: {
          title: 'Une cada idea',
          pairs: [
            ['Avalancha', 'Primero la deuda con la tasa más alta'],
            ['Bola de nieve', 'Primero la deuda con el saldo más pequeño'],
            ['Regla base', 'Mínimo en todas y el extra a una sola'],
          ],
        },
      },
      {
        ask: 'Tasas de ejemplo de Martha: tarjeta A $9,500 al 60%, tarjeta B $4,300 al 40%, préstamo $12,000 al 30%, departamental $7,200 al 55%. Con **avalancha**, ¿a cuál va el extra?',
        options: [
          { text: 'Tarjeta A, la del 60%', ok: true, reply: '¡Exacto! Es la más cara: eliminarla primero ahorra más intereses.' },
          { text: 'Tarjeta B, la de saldo más chico', reply: 'Ese sería el criterio de la **bola de nieve**. Avalancha va por la **tasa más alta**: tarjeta A.' },
          { text: 'El préstamo, porque es el más grande', reply: 'Ningún método empieza por el saldo más grande. Avalancha va por la **tasa más alta**: tarjeta A.' },
        ],
      },
      {
        order: {
          title: 'Ahora con bola de nieve: ordena qué paga primero',
          steps: ['Tarjeta B: $4,300', 'Departamental: $7,200', 'Tarjeta A: $9,500', 'Préstamo: $12,000'],
          done: 'De saldo más chico a más grande. Cada deuda liquidada libera su pago para la siguiente.',
        },
      },
      {
        rush: {
          title: '¿Avalancha o bola de nieve?',
          seconds: 30,
          labels: ['🏔️ Avalancha', '⛄ Bola de nieve'],
          items: [
            { text: 'Ataca la tasa más alta', ans: 0 },
            { text: 'Ataca el saldo más pequeño', ans: 1 },
            { text: 'Ahorra más intereses', ans: 0 },
            { text: 'Da victorias rápidas', ans: 1 },
            { text: 'Gana si una tarjeta cobra mucho más que las demás', ans: 0 },
            { text: 'Casi no cuesta extra si las tasas son parecidas', ans: 1 },
          ],
        },
      },
      { tip: 'El mejor método es **el que sí vas a sostener**.' },
    ],
    // Negociar sin caer en trampas
    [
      { text: 'Este mes a Martha no le alcanza para un pago. Y le llega un mensaje: "**¡Te borramos del Buró por $2,000!**" 📩' },
      {
        ask: '¿Qué le conviene hacer primero?',
        options: [
          { text: 'Hablar con el banco antes de atrasarse', ok: true, reply: '¡Bien! Antes del atraso es más fácil negociar. Y todo, **por escrito**.' },
          { text: 'Dejar de pagar y esperar', reply: 'Eso genera intereses moratorios y daña su historial. Mejor **hablar con el banco antes** de atrasarse.' },
          { text: 'Pagarle a quien promete borrarla del Buró', reply: 'Cuidado: nadie puede borrar legalmente un historial verdadero. Mejor **hablar con el banco antes** de atrasarse.' },
        ],
      },
      { text: '🤝 **Negociar:** pedir una **reestructura** (cambiar plazo o mensualidad) o un convenio, por escrito.\n🧩 **Consolidar:** un solo crédito más barato para pagar varias deudas caras. Un pago y, si el CAT es menor, menos intereses.' },
      { text: 'Para comparar el primer mes: **interés mensual ≈ saldo × tasa anual ÷ 12**. Ahorro = interés actual − interés con el nuevo crédito.' },
      {
        calc: {
          question: 'Martha debe $24,000 en una tarjeta al 60% anual (ejemplo). Le ofrecen consolidar al 24% anual sin comisiones. ¿Cuánto se ahorraría de interés el primer mes?',
          answer: 720,
          hint: 'Tarjeta: 24,000 × 0.60 ÷ 12. Préstamo: 24,000 × 0.24 ÷ 12. Resta.',
          why: 'Tarjeta: 24,000 × 0.05 = $1,200. Préstamo: 24,000 × 0.02 = $480. Ahorro: 1,200 − 480 = **$720** el primer mes.',
        },
      },
      {
        sort: {
          title: '¿Ayuda o trampa?',
          buckets: ['Ayuda', 'Trampa'],
          items: [
            { text: 'Pedir por escrito una reestructura', bucket: 0, why: 'Ajusta la deuda a lo que sí puede pagar.' },
            { text: 'Consolidar y dejar de usar las tarjetas liquidadas', bucket: 0, why: 'Así la consolidación sí funciona.' },
            { text: 'Consolidar y volver a llenar las tarjetas', bucket: 1, why: 'Termina con el doble de deuda.' },
            { text: 'Pedir prestado para pagar otra deuda sin plan', bucket: 1, why: 'Es la "bicicleta": la deuda solo se mueve y crece.' },
            { text: 'Pagar a una empresa que promete borrar tu Buró', bucket: 1, why: 'Nadie puede borrar legalmente un historial verdadero.' },
          ],
        },
      },
      {
        ask: 'Un atraso que **sí ocurrió**, ¿alguien lo puede borrar legalmente del Buró a cambio de una cuota?',
        options: [
          { text: 'No, nadie puede borrar un historial verdadero', ok: true, reply: '¡Correcto! Solo se puede pedir que **corrijan información equivocada**. Esas promesas suelen ser fraude.' },
          { text: 'Sí, si pagas la cuota', reply: 'No. Si el atraso es verdadero, **nadie puede borrarlo legalmente**. Mejor paga o negocia la deuda.' },
          { text: 'Sí, si cambias de banco', reply: 'Cambiar de banco no borra nada. Un atraso verdadero **no se puede borrar legalmente**.' },
        ],
      },
      { tip: 'Ojo con alargar mucho el plazo: la mensualidad baja, pero puedes pagar **más intereses en total**. Si un despacho de cobranza te amenaza o acosa, puedes quejarte ante la **CONDUSEF**.' },
    ],
  ],
}
