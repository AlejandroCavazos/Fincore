import type { InteractiveLesson } from './types'

export const intCON07: InteractiveLesson = {
  lessonId: 'CON-07',
  sections: [
    // ¿Foto o película?
    [
      { text: 'Doña Güera tiene una tortillería 🌽 y pide un crédito. El banco le dice: "Tráigame sus **estados financieros**". ¿Cuáles son?' },
      {
        text: 'Como un chequeo médico con varios estudios 🩺, son varios reportes que juntos dan el diagnóstico:\n📸 El **balance** (estado de situación financiera) es una **foto en una fecha**.\n🎬 Resultados, cambios en el capital y flujos de efectivo son una **película de un periodo**.',
      },
      {
        sort: {
          title: '¿Foto o película?',
          buckets: ['En una fecha (foto)', 'Por un periodo (película)'],
          items: [
            { text: 'Estado de situación financiera (balance general)', bucket: 0, why: 'Muestra lo que se tiene y se debe en un día.' },
            { text: 'Estado de resultado integral', bucket: 1, why: 'Junta ingresos y gastos de todo el periodo.' },
            { text: 'Estado de cambios en el capital contable', bucket: 1, why: 'Muestra cómo cambió el capital durante el periodo.' },
            { text: 'Estado de flujos de efectivo', bucket: 1, why: 'Cuenta el dinero que entró y salió en el periodo.' },
            { text: '"Al 31 de diciembre"', bucket: 0, why: 'Una sola fecha: va en el balance.' },
            { text: '"Del 1 de enero al 31 de diciembre"', bucket: 1, why: 'Un periodo: va en el estado de resultados.' },
          ],
        },
      },
      {
        match: {
          title: '¿Qué estado responde la pregunta?',
          pairs: [
            ['¿Qué tengo y qué debo hoy?', 'Situación financiera'],
            ['¿Gané o perdí este año?', 'Resultado integral'],
            ['¿Cómo cambió lo de los dueños?', 'Cambios en el capital contable'],
            ['¿De dónde vino y a dónde fue el dinero?', 'Flujos de efectivo'],
          ],
        },
      },
      { text: 'Junto a los números van las **notas**: explican políticas, detalles y riesgos.' },
      {
        ask: '¿Puede Doña Güera entregar sus estados **sin notas**?',
        options: [
          { text: 'No: las notas son parte de los estados', ok: true, reply: '¡Así es! Sin notas, los números quedan **incompletos**.' },
          { text: 'Sí, las notas son un anexo opcional', reply: 'Las notas **sí** forman parte de los estados. Sin ellas, los números quedan incompletos.' },
          { text: 'Sí, solo si el banco no las pide', reply: 'No depende de quién las pida: las notas **siempre** forman parte de los estados.' },
        ],
      },
      { tip: '**Foto:** el balance. **Película:** resultados, cambios en el capital y flujos. Las **notas** van con todos.' },
    ],
    // ¿Ganó o perdió el negocio?
    [
      { text: 'Cierre del año en la tortillería. Doña Güera tiene la **balanza de comprobación** ajustada: la lista de todas sus cuentas con su saldo final.' },
      { text: 'Cada cuenta se va a su estado:\n📸 Activos, pasivos y capital → **balance**.\n🎬 Ingresos, costos y gastos → **estado de resultados**.' },
      {
        sort: {
          title: '¿A qué estado va cada cuenta?',
          buckets: ['Balance', 'Estado de resultados'],
          items: [
            { text: 'Bancos', bucket: 0, why: 'Es un activo: va al balance.' },
            { text: 'Ventas', bucket: 1, why: 'Es un ingreso: va a resultados.' },
            { text: 'Proveedores', bucket: 0, why: 'Es un pasivo: va al balance.' },
            { text: 'Costo de ventas', bucket: 1, why: 'Es un costo: va a resultados.' },
            { text: 'Depreciación acumulada', bucket: 0, why: 'Resta al valor de la máquina, que es un activo: va al balance.' },
            { text: 'Gasto por depreciación', bucket: 1, why: 'Es un gasto del año: va a resultados.' },
            { text: 'Ingreso por intereses', bucket: 1, why: 'Es un ingreso: va a resultados.' },
          ],
        },
      },
      {
        order: {
          title: 'Arma el estado de resultados: ordena los niveles',
          steps: ['Ventas netas (ventas − devoluciones)', 'Utilidad bruta (− costo de ventas)', 'Utilidad de operación (− gastos de operación)', 'Utilidad antes de impuestos (− gastos financieros)', 'Utilidad neta (− impuestos)'],
          done: 'Se resta **por niveles** para ver dónde se gana o se pierde: en el costo, en los gastos o en la deuda.',
        },
      },
      {
        sim: {
          title: 'Los niveles de la tortillería',
          inputs: [
            { key: 'v', label: 'Ventas netas', min: 50000, max: 150000, step: 10000, value: 100000 },
            { key: 'c', label: 'Costo de ventas', min: 30000, max: 90000, step: 5000, value: 60000 },
            { key: 'g', label: 'Gastos de operación', min: 10000, max: 40000, step: 5000, value: 25000 },
          ],
          outputs: [
            { label: 'Utilidad bruta', calc: (x) => x.v - x.c },
            { label: 'Utilidad de operación', calc: (x) => x.v - x.c - x.g, main: true },
          ],
          goal: {
            text: 'Lleva la **utilidad de operación** a **$40,000 o más**.',
            check: (x) => x.v - x.c - x.g >= 40000,
            done: 'Ves de inmediato si el problema está en el **costo** del producto o en los **gastos**.',
          },
        },
      },
      {
        calc: {
          question: 'La tortillería vendió **$120,000**, le devolvieron **$10,000** y su costo de ventas fue **$60,000**. ¿Cuál es la **utilidad bruta**?',
          answer: 50000,
          hint: 'Primero ventas netas: 120,000 − 10,000. Luego resta el costo de ventas.',
          why: 'Ventas netas: 120,000 − 10,000 = 110,000. Utilidad bruta: 110,000 − 60,000 = **$50,000**.',
        },
      },
      {
        calc: {
          question: 'Utilidad de operación **$30,000**, gastos financieros **$5,000** e impuestos **$7,500**. ¿Cuál es la **utilidad neta**?',
          answer: 17500,
          hint: 'Primero resta los gastos financieros, luego los impuestos.',
          why: '30,000 − 5,000 = 25,000 antes de impuestos. 25,000 − 7,500 = **$17,500** de utilidad neta.',
        },
      },
    ],
    // Corto plazo y dinero real
    [
      { text: 'La tortillería ganó bien este año... pero se quedó **sin dinero en la caja** 😰.' },
      {
        ask: '¿Cómo puede pasar eso?',
        options: [
          { text: 'Vendió mucho a crédito y aún no le pagan', ok: true, reply: '¡Eso! La venta cuenta como utilidad, pero el dinero **todavía no llega**. Ganar no es lo mismo que tener efectivo.' },
          { text: 'Seguro la contabilidad está mal', reply: 'Puede estar bien hecha. Si vendió a crédito, ganó "en papel" pero el dinero **aún no llega**.' },
          { text: 'Es imposible: si ganas, tienes el dinero', reply: 'Sí es posible: si vendes a crédito, ganas pero el dinero **aún no llega**.' },
        ],
      },
      { text: 'En el balance se separa lo **circulante** (se cobra, vende o paga dentro de un año o del ciclo normal) de lo **no circulante** (largo plazo). Así el banco ve si puede pagar sus deudas próximas.' },
      {
        sort: {
          title: 'Las cuentas de la tortillería',
          buckets: ['Circulante', 'No circulante'],
          items: [
            { text: 'Bancos', bucket: 0, why: 'Dinero disponible ya.' },
            { text: 'Clientes que pagan en 30 días', bucket: 0, why: 'Se cobra en menos de un año.' },
            { text: 'Edificio de la tortillería', bucket: 1, why: 'Se usa muchos años: largo plazo.' },
            { text: 'Maíz y harina en inventario', bucket: 0, why: 'Se usan y venden pronto.' },
            { text: 'Préstamo bancario a 5 años', bucket: 1, why: 'Se paga en más de un año.' },
            { text: 'Proveedores a 15 días', bucket: 0, why: 'Deuda de corto plazo.' },
          ],
        },
      },
      {
        text: 'El **método indirecto** convierte la utilidad en efectivo de operación. Partes de la utilidad neta, **sumas** la depreciación (gasto sin salida de dinero) y ajustas:\n⬆️ Activo circulante sube → **resta**.\n⬇️ Activo circulante baja → **suma**.\n⬆️ Pasivo circulante sube → **suma**.\n⬇️ Pasivo circulante baja → **resta**.',
      },
      {
        rush: {
          title: '¿Se suma o se resta a la utilidad?',
          seconds: 40,
          labels: ['Se suma', 'Se resta'],
          items: [
            { text: 'Depreciación del año', ans: 0 },
            { text: 'Aumentaron los clientes', ans: 1 },
            { text: 'Bajaron los clientes', ans: 0 },
            { text: 'Aumentaron los inventarios', ans: 1 },
            { text: 'Aumentaron los proveedores', ans: 0 },
            { text: 'Bajaron los proveedores', ans: 1 },
            { text: 'Bajaron los inventarios', ans: 0 },
          ],
        },
      },
      {
        calc: {
          question: 'Utilidad neta **$40,000**, depreciación **$5,000**, aumento en inventarios **$6,000**, disminución en clientes **$4,000** y disminución en proveedores **$3,000**. ¿Cuál es el **flujo de operación**?',
          answer: 40000,
          hint: 'Suma depreciación y la baja de clientes; resta el aumento de inventarios y la baja de proveedores.',
          why: '40,000 + 5,000 − 6,000 + 4,000 − 3,000 = **$40,000**.',
        },
      },
      { tip: 'El flujo de efectivo separa el dinero en **operación** (día a día), **inversión** (activos de largo plazo) y **financiamiento** (préstamos y aportaciones). Lo que calculaste es el de operación.' },
    ],
  ],
}
