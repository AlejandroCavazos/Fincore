import type { InteractiveLesson } from './types'

export const intAUD13: InteractiveLesson = {
  lessonId: 'AUD-13',
  sections: [
    // ¿Por qué alguien comete fraude?
    [
      { text: 'En el **Café La Esquina** ☕ un día faltan $500 en la caja de Lucía. Don Beto, el dueño, se pregunta: ¿fue un descuido o fue **a propósito**?' },
      {
        ask: '¿Qué separa un **error** de un **fraude**?',
        options: [
          { text: 'La intención: el fraude se hace a propósito', ok: true, reply: '¡Eso! El error es sin querer. El fraude es un engaño **a propósito** para sacar provecho, y casi siempre se esconde.' },
          { text: 'El monto: arriba de cierta cantidad es fraude', reply: 'Un fraude puede ser chico y un error puede ser grande. Lo que cambia es la **intención**.' },
          { text: 'Quién lo descubre', reply: 'No importa quién lo encuentre. La diferencia es la **intención**: el fraude se hace a propósito.' },
        ],
      },
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
      {
        text: 'El **triángulo del fraude**: una persona honesta puede caer cuando se juntan tres cosas.\n😰 **Presión:** una deuda o una meta imposible.\n🚪 **Oportunidad:** un control débil que nadie revisa.\n🗣️ **Racionalización:** una excusa como «lo voy a devolver».',
      },
      {
        sort: {
          title: 'Lucía, la cajera: ¿qué lado del triángulo es?',
          buckets: ['Presión', 'Oportunidad', 'Racionalización'],
          items: [
            { text: 'Tiene deudas con una casa de empeño', bucket: 0, why: 'Una necesidad personal: **presión**.' },
            { text: 'Nadie cuenta su caja al cierre', bucket: 1, why: 'Un control débil: **oportunidad**.' },
            { text: 'Piensa: «el café me debe, mi sueldo es injusto»', bucket: 2, why: 'Una excusa moral: **racionalización**.' },
            { text: 'Le pusieron una meta de ventas imposible', bucket: 0, why: 'Un incentivo fuerte: **presión**.' },
            { text: 'Se dice: «solo lo tomo prestado y lo regreso en la quincena»', bucket: 2, why: 'Se justifica a sí misma: **racionalización**.' },
            { text: 'Ella sola cobra, registra y deposita, y nadie lo concilia', bucket: 1, why: 'Nadie la revisa: **oportunidad**.' },
          ],
        },
      },
      {
        ask: '¿En cuál lado del triángulo puede actuar **más** Don Beto?',
        options: [
          { text: 'Presión', reply: 'Don Beto casi no puede controlar las deudas de Lucía. Donde sí actúa es en la **oportunidad**.' },
          { text: 'Oportunidad', ok: true, reply: '¡Sí! Con controles cierra el hueco. Si cuenta la caja cada noche frente a ella, desaparece la oportunidad.' },
          { text: 'Racionalización', reply: 'Lo que alguien se dice a sí mismo es difícil de controlar. Donde sí actúa es en la **oportunidad**.' },
        ],
      },
      { tip: '**Presión + oportunidad + racionalización.** La empresa actúa sobre todo en la **oportunidad**. Dentro de una empresa, el fraude puede ser robo de activos, corrupción o maquillar los estados financieros.' },
    ],
    // Cerrarle la puerta al fraude
    [
      { text: 'En el café, Toño da de alta a los proveedores **y también** les paga. Un día aparece un pago a un proveedor que nadie conoce 🤔.' },
      {
        ask: '¿Qué le conviene hacer a Don Beto?',
        options: [
          { text: 'Comprar un sistema caro de inmediato', reply: 'No hace falta gastar: basta con **separar las tareas** para que quien da de alta no pueda pagar.' },
          { text: 'Separar las dos tareas y que otra persona valide el RFC y la cuenta del proveedor nuevo', ok: true, reply: '¡Bien! Quien da de alta a un proveedor no debe poder pagarle. Así baja el riesgo de proveedores fantasma.' },
          { text: 'Pedirle a Toño que firme una carta prometiendo no robar', reply: 'Un código de ética ayuda, pero aquí el hueco es que una sola persona hace todo. Hay que **separar las tareas**.' },
        ],
      },
      {
        text: 'Prevenir es más barato que investigar. Las medidas clave:\n🎩 **Tono desde arriba:** el dueño da el ejemplo de integridad.\n✂️ **Segregación de funciones:** autorizar, registrar y custodiar por separado.\n🏖️ **Vacaciones obligatorias:** otra persona atiende el puesto unos días.\n📣 **Canal de denuncia:** avisar en confidencia lo que ves raro.',
      },
      {
        match: {
          title: 'Une cada medida con lo que hace en el café',
          pairs: [
            ['Tono desde arriba', 'Don Beto actúa con integridad y no hace excepciones'],
            ['Segregación de funciones', 'Uno da de alta proveedores y otro les paga'],
            ['Vacaciones obligatorias', 'Lucía descansa y otra persona cuenta su caja'],
            ['Canal de denuncia', 'Un buzón confidencial para avisar algo raro'],
          ],
        },
      },
      { text: 'Pero ningún control es perfecto: si dos o más personas se ponen de acuerdo (**colusión**), pueden saltarse la segregación.' },
      {
        ask: 'Don Beto ya separó funciones. ¿El riesgo de fraude en pagos quedó en **cero**?',
        options: [
          { text: 'Sí, ya quedó eliminado por completo', reply: 'Baja mucho, pero no desaparece: con **colusión** dos personas pueden saltarse la separación.' },
          { text: 'No: con colusión se puede saltar, por eso se suman denuncias y revisiones sorpresa', ok: true, reply: '¡Exacto! Ningún control es perfecto. Por eso se combina con un canal de denuncia y revisiones sorpresa.' },
          { text: 'No, porque separar funciones no sirve de nada', reply: 'Sí sirve: quita la oportunidad a una sola persona. Solo que no llega a cero por la **colusión**.' },
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
      { tip: 'Prevenir = quitar la **oportunidad**. Segregación, vacaciones y rotación ayudan; denuncias y revisiones sorpresa cubren la **colusión**.' },
    ],
    // ¿Cómo se descubre un fraude?
    [
      { text: 'Don Beto recibe un mensaje anónimo: «revisa los pagos de lácteos» 📩.' },
      {
        ask: '¿Cuál suele ser la forma **más común** de descubrir un fraude?',
        options: [
          { text: 'Las denuncias de empleados, clientes o proveedores', ok: true, reply: '¡Sí! Según estudios como los de la ACFE, las denuncias suelen descubrir más fraudes que la auditoría. Un buen canal de denuncia también detecta.' },
          { text: 'La auditoría', reply: 'Ayuda mucho, pero según estudios como los de la ACFE, las **denuncias** suelen ser la forma más común.' },
          { text: 'La suerte', reply: 'No depende de la suerte: según estudios como los de la ACFE, las **denuncias** suelen ser la forma más común.' },
        ],
      },
      { text: 'Una **señal de alerta** 🚩 no prueba fraude, pero pide revisar más. Ejemplo: un **empleado fantasma**, alguien que cobra en la nómina pero no trabaja.' },
      {
        sort: {
          title: 'Nómina del café: ¿señal de alerta o algo normal?',
          buckets: ['Señal de alerta', 'Normal'],
          items: [
            { text: 'Dos empleados distintos cobran en la misma cuenta bancaria', bucket: 0, why: 'Puede ser un **empleado fantasma**: alguien cobra dos sueldos.' },
            { text: 'Un empleado sin registros de entrada, vacaciones ni incapacidades en todo el año', bucket: 0, why: 'Parece que nunca vino: posible **empleado fantasma**.' },
            { text: 'Un empleado dado de baja siguió cobrando tres quincenas', bucket: 0, why: 'Ya no trabaja ahí y sigue recibiendo dinero.' },
            { text: 'Un aumento aprobado por escrito por Don Beto', bucket: 1, why: 'Tiene autorización por escrito: es normal.' },
            { text: 'Un empleado que nunca toma vacaciones', bucket: 0, why: 'Muchos fraudes necesitan que la misma persona los «atienda» todos los días.' },
            { text: 'Un barista que tomó sus vacaciones completas en diciembre', bucket: 1, why: 'Tomar vacaciones es sano: otra persona cubre su puesto.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el pago duplicado',
          story: 'El **análisis de datos** revisa el 100% de los pagos. Busca mismo proveedor, mismo monto y misma factura:',
          lines: [
            { account: 'Proveedores · Lácteos La Vaquita, fact. A-315', side: 'D', amount: 12600 },
            { account: 'Proveedores · Café de Altura, fact. 889', side: 'D', amount: 8400 },
            { account: 'Proveedores · Lácteos La Vaquita, fact. A-315', side: 'D', amount: 12600 },
            { account: 'Bancos', side: 'C', amount: 33600 },
          ],
          wrong: 2,
          why: 'La misma factura A-315 se pagó **dos veces**. Igual se confirma a mano: a veces hay una explicación válida.',
        },
      },
      { text: 'El sistema marca **40** pagos como posibles duplicados. **24** son reales, de **$5,000** en promedio. Los otros **16** tenían explicación: son **falsos positivos**.' },
      {
        calc: {
          question: '¿Cuál es la **pérdida confirmada**?',
          answer: 120000,
          hint: 'duplicados reales × monto promedio.',
          why: '24 × $5,000 = **$120,000** pagados de más. Los 16 falsos positivos no cuentan.',
        },
      },
      {
        calc: {
          question: 'Con 40 marcados y 24 reales, ¿cuál es la **tasa de confirmación**?',
          answer: 60,
          unit: '%',
          hint: 'duplicados reales ÷ casos marcados × 100.',
          why: '24 ÷ 40 = 0.60 → **60%**. Divide entre los **casos marcados**, no entre todos los pagos del año.',
        },
      },
    ],
  ],
}
