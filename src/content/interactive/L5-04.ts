import type { InteractiveLesson } from './types'

export const intL504: InteractiveLesson = {
  lessonId: 'L5-04',
  sections: [
    // ¿Cómo se cuela un error?
    [
      { text: 'Repaso integrador 🔎: **Sofía** planea la auditoría de **La Norteña**. Empieza por **Clientes** (lo que le deben las tienditas). Su miedo: que un error se le **cuele** 🕳️.' },
      {
        text: 'Un error llega a los estados financieros solo si pasa tres filtros:\n1️⃣ Ocurre (**riesgo inherente**, RI).\n2️⃣ Los controles de la empresa no lo atrapan (**riesgo de control**, RC).\n3️⃣ El auditor tampoco lo encuentra (**riesgo de detección**, RD).',
      },
      {
        ask: '¿Cuál de los tres puede decidir Sofía?',
        options: [
          { text: 'El riesgo de detección', ok: true, reply: '¡Sí! Ella decide cuánto revisar. RI y RC son de la empresa.' },
          { text: 'El riesgo inherente', reply: 'El RI es de la cuenta misma; Sofía no lo cambia. Ella decide el **riesgo de detección**: cuánto revisar.' },
          { text: 'El riesgo de control', reply: 'Los controles son de la empresa. Sofía decide el **riesgo de detección**: cuánto revisar.' },
        ],
      },
      { text: 'La fórmula: **RA = RI × RC × RD**, donde RA es el riesgo de auditoría que acepta. Despejando: **RD = RA ÷ (RI × RC)**.' },
      {
        sim: {
          title: 'Los tres filtros de Clientes',
          inputs: [
            { key: 'ra', label: 'Riesgo de auditoría aceptable RA (%)', min: 1, max: 10, step: 1, value: 5 },
            { key: 'ri', label: 'Riesgo inherente RI (%)', min: 40, max: 100, step: 10, value: 100 },
            { key: 'rc', label: 'Riesgo de control RC (%)', min: 20, max: 100, step: 10, value: 100 },
          ],
          outputs: [
            { label: 'Riesgo de error material RI × RC (%)', calc: (x) => (x.ri * x.rc) / 100, unit: '%' },
            { label: 'Riesgo de detección permitido RD (%)', calc: (x) => Math.min(100, (x.ra * 100) / ((x.ri * x.rc) / 100)), main: true, unit: '%' },
          ],
          goal: {
            text: 'Sofía prueba los controles y salen buenos (baja el **RC**). Logra un **RD de 25% o más**: así necesita menos pruebas sustantivas.',
            check: (x) => (x.ra * 100) / ((x.ri * x.rc) / 100) >= 25,
            done: 'Mientras más bajo el RI × RC, más alto puede ser el RD y **menos** pruebas hacen falta.',
          },
        },
      },
      {
        calc: {
          question: 'Sofía fija **RA = 5%**, evalúa **RI = 50%** y **RC = 40%**. ¿Cuál es el **RD** planeado?',
          answer: 25,
          unit: '%',
          hint: 'Primero RI × RC en decimal, luego divide RA entre ese resultado.',
          why: '0.50 × 0.40 = 0.20. RD = 0.05 ÷ 0.20 = 0.25 → **25%**. Ojo: se divide, no se multiplican los tres.',
        },
      },
      {
        ask: 'Tras probar los controles, Sofía sube el **RC** de bajo a alto. Con el mismo RA, ¿qué le toca hacer?',
        options: [
          { text: 'Menos pruebas, porque la empresa ya tiene controles', reply: 'Si el RC es alto, esos controles no son confiables. El RD baja y toca **revisar más**.' },
          { text: 'Más pruebas sustantivas, más cerca del cierre y con muestras mayores', ok: true, reply: '¡Eso! RD planeado **bajo** = más trabajo de detalle (NIA 315 y NIA 330).' },
          { text: 'Subir la materialidad para compensar', reply: 'La materialidad no se mueve para tapar riesgo. Lo que cambia es el RD: **más pruebas**.' },
        ],
      },
      { tip: 'RI y RC **altos** → RD **bajo** → más pruebas. RI y RC **bajos** → RD más alto → menos pruebas.' },
    ],
    // ¿Qué error sí importa?
    [
      { text: 'Si tu recibo de nómina trae $5 de error, no pasa nada. Si trae $5,000, sí 😬. Eso es la **materialidad** (NIA 320): el error que ya cambiaría decisiones.' },
      {
        text: 'Sofía calcula tres números (los % son ilustrativos, no reglas de la norma):\n🎯 **Materialidad global** = referencia × % (por ejemplo, 5% de la utilidad antes de impuestos).\n🛡️ **De ejecución:** más baja, un % de la global.\n🪶 **Umbral insignificante:** un % pequeño de la global.',
      },
      {
        calc: {
          question: 'La Norteña tuvo **utilidad antes de impuestos de $3,000,000**. Con **5%**, ¿cuál es la **materialidad global**?',
          answer: 150000,
          hint: 'Referencia × % de referencia.',
          why: '$3,000,000 × 0.05 = **$150,000**.',
        },
      },
      {
        calc: {
          question: 'Sofía usa **70%** para la materialidad de ejecución. ¿Cuánto es?',
          answer: 105000,
          hint: 'Se calcula sobre la materialidad **global**, no sobre la utilidad.',
          why: '$150,000 × 0.70 = **$105,000**. Es más baja para dejar margen a errores que no se detecten.',
        },
      },
      {
        calc: {
          question: 'El umbral de errores **claramente insignificantes** es el **5%** de la global. ¿Cuánto es?',
          answer: 7500,
          hint: 'También sobre la materialidad global.',
          why: '$150,000 × 0.05 = **$7,500**. Revisa el orden: $7,500 < $105,000 < $150,000. ✅',
        },
      },
      {
        sort: {
          title: 'Errores que encontró Sofía (umbral $7,500)',
          buckets: ['Claramente insignificante: no se acumula', 'Se acumula para evaluarlo'],
          items: [
            { text: 'Factura de papelería registrada dos veces por $1,200', bucket: 0, why: 'Está debajo del umbral de $7,500.' },
            { text: 'Venta de $40,000 registrada en el año equivocado', bucket: 1, why: 'Rebasa el umbral: se anota en la lista de errores.' },
            { text: 'Gasto de $6,000 en la cuenta equivocada', bucket: 0, why: 'Menor a $7,500: claramente insignificante.' },
            { text: 'Descuento a clientes de $18,000 que no se registró', bucket: 1, why: 'Rebasa el umbral: se acumula con los demás.' },
          ],
        },
      },
      {
        ask: 'Un compañero calculó la de ejecución así: $3,000,000 × 70%. ¿Qué hizo mal?',
        options: [
          { text: 'Nada, está perfecto', reply: 'Le salió $2,100,000: ¡más que la global! Usó la utilidad en lugar de la **materialidad global**.' },
          { text: 'Usó la utilidad en lugar de la materialidad global', ok: true, reply: '¡Bien visto! Ejecución y umbral siempre salen de la **materialidad global**.' },
          { text: 'Debió sumar en lugar de multiplicar', reply: 'Sí se multiplica. El problema es la cifra: debió usar la **materialidad global**.' },
        ],
      },
      { tip: 'Siempre: **umbral insignificante < materialidad de ejecución < materialidad global**.' },
    ],
    // ¿Qué prueba vale más?
    [
      { text: 'Sofía quiere saber cuánto le debe una tiendita a La Norteña. Tiene varias pruebas a la mano 🤔.' },
      {
        ask: '¿A cuál le cree **más**?',
        options: [
          { text: 'A lo que dice el gerente de La Norteña de palabra', reply: 'Es interna y verbal: de las más débiles. Pesa más la **confirmación** que la tiendita le manda directo.' },
          { text: 'A una fotocopia del estado de cuenta interno', reply: 'Es interna y es copia. Pesa más la **confirmación** externa que llega directo a Sofía.' },
          { text: 'A la confirmación que la tiendita le manda directo a Sofía', ok: true, reply: '¡Exacto! Externa, independiente y obtenida directo por el auditor (NIA 505).' },
        ],
      },
      {
        text: 'La NIA 500 pide evidencia **suficiente** (cantidad) y **adecuada** (calidad). Mucha evidencia mala **no** compensa.\nPesa más: externa > interna · directa > indirecta · documental > verbal · original > copia.',
      },
      {
        multi: {
          title: 'Marca las evidencias MÁS confiables',
          items: [
            { text: 'Confirmación de saldo que el banco envía directo a Sofía', ok: true },
            { text: 'Lo que dice de palabra el gerente de ventas', ok: false },
            { text: 'La depreciación recalculada por la propia Sofía', ok: true },
            { text: 'Fotocopia de un contrato que da el cliente', ok: false },
            { text: 'Contrato original firmado que Sofía inspecciona', ok: true },
          ],
          why: 'Externa, obtenida directo por el auditor y original pesa más. Lo verbal y las copias pesan menos, y juntar más de lo mismo **no** arregla la mala calidad.',
        },
      },
      { text: 'Para conseguir evidencia, Sofía puede **inspeccionar** documentos, **observar**, pedir **confirmación externa**, **recalcular** o **indagar** (preguntar).' },
      {
        match: {
          title: 'Une cada procedimiento con lo que hace Sofía',
          pairs: [
            ['Inspección', 'Revisar facturas y contratos de La Norteña'],
            ['Observación', 'Ver cómo el almacén cuenta el inventario'],
            ['Confirmación externa', 'Pedir a una tiendita que responda directo cuánto debe'],
            ['Recálculo', 'Volver a hacer la suma de la depreciación'],
            ['Indagación', 'Preguntarle al gerente de crédito'],
          ],
        },
      },
      { tip: 'Suficiente = **cuánta**. Adecuada = **qué tan buena**. Necesitas las dos.' },
    ],
    // Tres tipos de revisión
    [
      { text: 'Sofía ya tiene su plan. Ahora usa **tres tipos de revisión**, cada uno con su propósito 🧭.' },
      {
        text: '🧭 **Evaluación de riesgos:** entender el negocio y preguntar, para ver dónde hay riesgo.\n🔒 **Pruebas de controles:** ver si un control funciona.\n🔎 **Pruebas sustantivas:** buscar errores en saldos y transacciones.',
      },
      {
        order: {
          title: 'El recorrido de Sofía',
          steps: [
            'Evaluación de riesgos: entender el negocio',
            'Pruebas de controles: ver si funcionan',
            'Pruebas sustantivas: buscar errores en saldos',
            'Emitir la opinión',
          ],
          done: 'Primero **identificas** riesgos, luego **pruebas** controles y al final **buscas** errores.',
        },
      },
      {
        sort: {
          title: '¿Qué tipo de revisión es?',
          buckets: ['Evaluación de riesgos', 'Prueba de controles', 'Prueba sustantiva'],
          items: [
            { text: 'Preguntar al director qué cambió en el negocio este año', bucket: 0, why: 'Entender el negocio sirve para identificar riesgos.' },
            { text: 'Revisar que las órdenes de compra tengan la firma de autorización', bucket: 1, why: 'Verifica si un control opera.' },
            { text: 'Enviar confirmaciones de saldo a las tienditas', bucket: 2, why: 'Busca errores en el saldo de Clientes.' },
            { text: 'Rehacer la conciliación bancaria para ver si el control opera', bucket: 1, why: 'Reejecutar un control es probarlo.' },
            { text: 'Cotejar ventas registradas contra remisiones y CFDI', bucket: 2, why: 'Prueba de detalle sobre transacciones.' },
            { text: 'Comparar márgenes contra el año pasado al planear', bucket: 0, why: 'Al planear, los analíticos ayudan a ver dónde hay riesgo.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el error en el ajuste propuesto',
          story: 'En su prueba sustantiva, Sofía halla una venta a crédito de **$120,000** que nunca salió del almacén. Propone cancelarla (sin IVA, para simplificar):',
          lines: [
            { account: 'Ventas', side: 'D', amount: 120000 },
            { account: 'Clientes', side: 'D', amount: 120000 },
          ],
          wrong: 1,
          why: 'Para cancelar la venta se hace lo contrario: Ventas se **carga** y Clientes se **abona**, porque esa cuenta por cobrar no existe.',
        },
      },
      { tip: 'Evaluación de riesgos **identifica**; pruebas de controles **verifican** controles; pruebas sustantivas **detectan** errores materiales.' },
    ],
  ],
}
