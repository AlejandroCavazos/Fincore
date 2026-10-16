import type { InteractiveLesson } from './types'

export const intAUD13: InteractiveLesson = {
  lessonId: 'AUD-13',
  sections: [
    // Por qué ocurre el fraude: el triángulo y sus tipos
    [
      { text: 'El **fraude** es un engaño **a propósito** para obtener un beneficio indebido. El **error** es sin querer. Por eso el fraude casi siempre se esconde.' },
      {
        rush: {
          title: '¿Fraude o error?',
          seconds: 35,
          labels: ['Fraude', 'Error'],
          items: [
            { text: 'La cajera se queda con $500 y rompe el ticket', ans: 0 },
            { text: 'El auxiliar teclea $1,500 en vez de $15,000 por prisa', ans: 1 },
            { text: 'El gerente infla las ventas para alcanzar su bono', ans: 0 },
            { text: 'Se registra una factura en el mes equivocado por descuido', ans: 1 },
            { text: 'Un empleado cobra gastos de viaje que nunca hizo', ans: 0 },
            { text: 'Se suma mal una columna sin darse cuenta', ans: 1 },
          ],
        },
      },
      { text: 'El **triángulo del fraude** dice que una persona honesta puede caer cuando se juntan tres cosas.' },
      {
        sort: {
          title: 'Una cajera de una tiendita: ¿qué lado del triángulo es?',
          buckets: ['Presión', 'Oportunidad', 'Racionalización'],
          items: [
            { text: 'Tiene deudas con una casa de empeño', bucket: 0, why: 'Una necesidad personal: **presión**.' },
            { text: 'Nadie cuenta su caja al cierre', bucket: 1, why: 'Un control débil: **oportunidad**.' },
            { text: 'Piensa: «la empresa me debe, mi sueldo es injusto»', bucket: 2, why: 'Una excusa moral: **racionalización**.' },
            { text: 'Le pusieron una meta de ventas imposible', bucket: 0, why: 'Un incentivo fuerte: **presión**.' },
            { text: 'Se dice: «lo voy a devolver»', bucket: 2, why: 'Se justifica a sí misma: **racionalización**.' },
            { text: 'Ella sola registra, cobra y guarda el efectivo', bucket: 1, why: 'Nadie la revisa: **oportunidad**.' },
          ],
        },
      },
      {
        ask: '¿En cuál lado del triángulo puede actuar **más** la empresa?',
        options: [
          { text: 'Presión', reply: 'La empresa casi nunca controla las deudas o problemas personales.' },
          { text: 'Oportunidad', ok: true, reply: '¡Sí! Con controles cierras el hueco. Si el gerente cuenta la caja cada noche frente a ella, desaparece la oportunidad.' },
          { text: 'Racionalización', reply: 'Lo que alguien se dice a sí mismo es difícil de controlar.' },
        ],
      },
      { tip: 'Fraude ocupacional: **apropiación indebida de activos**, **corrupción** y **fraude en estados financieros**.' },
    ],
    // Prevención: cerrar la puerta antes del robo
    [
      { text: 'Prevenir es más barato que investigar. Todo empieza con el **tono desde arriba**: si la dirección actúa con integridad, el personal entiende que el fraude no se tolera.' },
      {
        match: {
          title: 'Une cada medida con para qué sirve',
          pairs: [
            ['Segregación de funciones', 'Separar autorizar, registrar y custodiar'],
            ['Vacaciones obligatorias', 'Que otra persona «atienda» el puesto unos días'],
            ['Canal de denuncia', 'Avisar de forma confidencial lo que ves raro'],
            ['Colusión', 'Dos o más se ponen de acuerdo para saltarse un control'],
            ['Tono desde arriba', 'La dirección da el ejemplo de integridad'],
          ],
        },
      },
      {
        ask: 'En una constructora, **el mismo empleado** da de alta proveedores y libera las transferencias. ¿Qué conviene hacer?',
        options: [
          { text: 'Comprar un sistema caro de inmediato', reply: 'No hace falta: el riesgo bajó sin comprar ningún sistema.' },
          { text: 'Separar las dos tareas y que otra persona valide el RFC y la cuenta del proveedor nuevo', ok: true, reply: '¡Bien! Quien da de alta a un proveedor no debe poder pagarle. Así baja el riesgo de proveedores fantasma.' },
          { text: 'Pedirle que firme una carta prometiendo no robar', reply: 'El código de ética ayuda, pero aquí el hueco es la falta de separación de funciones.' },
        ],
      },
      {
        multi: {
          title: '¿Qué medidas ayudan a prevenir el fraude? Marca todas.',
          items: [
            { text: 'Código de ética firmado y capacitación', ok: true },
            { text: 'Política clara de conflictos de interés', ok: true },
            { text: 'Rotación de puestos sensibles', ok: true },
            { text: 'Revisar antecedentes al contratar y al dar de alta proveedores', ok: true },
            { text: 'Que una sola persona haga todo para ahorrar tiempo', ok: false },
            { text: 'Avisar con meses de anticipación cada revisión', ok: false },
          ],
          why: 'Las revisiones **sorpresa** disuaden: el miedo a ser descubierto también previene. Y concentrar todo en una persona abre la **oportunidad**.',
        },
      },
      { tip: 'Ningún control es perfecto: con **colusión** se puede saltar la segregación de funciones. Por eso se combina con canal de denuncia y revisiones sorpresa.' },
    ],
    // Detección: señales de alerta y análisis de datos
    [
      { text: 'Una **señal de alerta** (red flag) no prueba fraude, pero pide revisar más 🚩.' },
      {
        sort: {
          title: '¿Señal de alerta o algo normal?',
          buckets: ['Señal de alerta', 'Normal'],
          items: [
            { text: 'Un empleado que nunca toma vacaciones', bucket: 0, why: 'Muchos fraudes necesitan que la misma persona los «atienda» todos los días.' },
            { text: 'Asientos contables registrados un domingo en la noche', bucket: 0, why: 'Horario raro: vale la pena revisar.' },
            { text: 'Un proveedor con la misma cuenta bancaria que un trabajador', bucket: 0, why: 'Posible proveedor fantasma.' },
            { text: 'Un gasto con factura, orden de compra y autorización', bucket: 1, why: 'Tiene su soporte completo.' },
            { text: 'Estilo de vida muy superior a su sueldo', bucket: 0, why: 'No cuadra con lo que gana.' },
            { text: 'La nómina se paga cada quincena como siempre', bucket: 1, why: 'Es la rutina normal.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el pago duplicado',
          story: 'Póliza de pagos de la cafetería ☕. La prueba de **pagos duplicados** busca mismo proveedor, mismo monto y misma factura:',
          lines: [
            { account: 'Proveedores · Lácteos La Vaquita, fact. A-315', side: 'D', amount: 12600 },
            { account: 'Proveedores · Café de Altura, fact. 889', side: 'D', amount: 8400 },
            { account: 'Proveedores · Lácteos La Vaquita, fact. A-315', side: 'D', amount: 12600 },
            { account: 'Bancos', side: 'C', amount: 33600 },
          ],
          wrong: 2,
          why: 'La misma factura A-315 se pagó **dos veces**. Primero se confirma a mano: a veces hay una explicación válida (falso positivo).',
        },
      },
      { text: 'El sistema marca **40** pagos como posibles duplicados. Al revisarlos, **24** son duplicados reales de **$5,000** en promedio.' },
      {
        calc: {
          question: '¿Cuál es la **pérdida confirmada**?',
          answer: 120000,
          hint: 'duplicados reales × monto promedio.',
          why: '24 × $5,000 = **$120,000** pagados de más.',
        },
      },
      {
        calc: {
          question: 'Con los mismos datos (40 marcados, 24 reales), ¿cuál es la **tasa de confirmación**?',
          answer: 60,
          unit: '%',
          hint: 'duplicados reales ÷ casos marcados × 100.',
          why: '24 ÷ 40 = 0.60 → **60%**. Divide entre los **casos marcados**, no entre todos los pagos del año.',
        },
      },
      { tip: 'Las **denuncias** suelen ser la forma más común de descubrir un fraude, según estudios como los de la ACFE. Un buen canal de denuncia también detecta.' },
    ],
  ],
}
