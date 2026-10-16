import type { InteractiveLesson } from './types'

export const intL504: InteractiveLesson = {
  lessonId: 'L5-04',
  sections: [
    // El modelo de riesgo de auditoría
    [
      { text: 'Repaso integrador 🔎: **Sofía**, auditora junior, planea la auditoría de **Distribuidora La Norteña**. Empieza por la cuenta de **Clientes** (lo que le deben las tienditas).' },
      { text: 'Un error solo llega a los estados financieros si pasa **tres filtros**. Ponlos en orden:' },
      {
        order: {
          title: 'El camino de un error',
          steps: [
            'El error ocurre (riesgo inherente)',
            'Los controles de la empresa no lo atrapan (riesgo de control)',
            'El auditor tampoco lo encuentra (riesgo de detección)',
            'El error queda en los estados financieros y la opinión sale equivocada',
          ],
          done: 'RI y RC son de la empresa. El único que Sofía decide es el **RD**: cuánto revisar.',
        },
      },
      { text: 'La fórmula: **RA = RI × RC × RD**, así que **RD = RA ÷ (RI × RC)**. Mueve los riesgos y mira cuánto RD te puedes permitir.' },
      {
        sim: {
          title: 'Los tres filtros de Clientes',
          inputs: [
            { key: 'ra', label: 'Riesgo de auditoría aceptable RA (%)', min: 1, max: 10, step: 1, value: 5 },
            { key: 'ri', label: 'Riesgo inherente RI (%)', min: 40, max: 100, step: 10, value: 100 },
            { key: 'rc', label: 'Riesgo de control RC (%)', min: 20, max: 100, step: 10, value: 100 },
          ],
          outputs: [
            { label: 'Riesgo de error material RI × RC (%)', calc: (x) => (x.ri * x.rc) / 100 },
            { label: 'Riesgo de detección permitido RD (%)', calc: (x) => Math.min(100, (x.ra * 100) / ((x.ri * x.rc) / 100)), main: true },
          ],
          goal: {
            text: 'Sofía prueba los controles y salen buenos (baja el **RC**). Logra un **RD de 25% o más**: así necesita menos pruebas sustantivas.',
            check: (x) => (x.ra * 100) / ((x.ri * x.rc) / 100) >= 25,
            done: 'Mientras más bajo el RI × RC, más alto puede ser el RD y **menos** pruebas hacen falta. Con RC al 100%, el RD es bajísimo: a revisar mucho.',
          },
        },
      },
      {
        calc: {
          question: 'Para Clientes, Sofía fija **RA = 5%**, evalúa **RI = 50%** y **RC = 40%**. ¿Cuál es el **RD** planeado?',
          answer: 25,
          unit: '%',
          hint: 'Primero RI × RC en decimal, luego divide RA entre ese resultado.',
          why: '0.50 × 0.40 = 0.20. RD = 0.05 ÷ 0.20 = 0.25 → **25%**. Ojo: se divide, no se multiplican los tres.',
        },
      },
      {
        ask: 'En Inventarios, Sofía evalúa RI y RC **altos** y quiere un RA bajo. ¿Qué le toca hacer?',
        options: [
          { text: 'Pocas pruebas, porque la empresa ya tiene controles', reply: 'Si el RC es alto, esos controles no son confiables. No puede apoyarse en ellos.' },
          { text: 'Más pruebas sustantivas, más cerca del cierre y con muestras mayores', ok: true, reply: '¡Eso! RD planeado **bajo** = más trabajo de detalle (NIA 315 y NIA 330).' },
          { text: 'Bajar el riesgo inherente', reply: 'El auditor no puede cambiar el RI: es de la cuenta misma.' },
        ],
      },
      { tip: 'RI y RC **altos** → RD **bajo** → más pruebas. RI y RC **bajos** → RD más alto → menos pruebas.' },
    ],
    // Materialidad
    [
      { text: '¿Qué tan grande debe ser un error para que importe? Si tu recibo de nómina trae $5 de error no pasa nada; si trae $5,000, sí. Eso es la **materialidad** (NIA 320).' },
      { text: 'La Norteña tuvo una **utilidad antes de impuestos de $3,000,000**. Sofía usa como referencia un **5%** (es un rango ilustrativo, no una regla de la norma).' },
      {
        calc: {
          question: 'Paso 1: ¿cuál es la **materialidad global**?',
          answer: 150000,
          hint: 'Referencia × % de referencia.',
          why: '$3,000,000 × 0.05 = **$150,000**.',
        },
      },
      {
        calc: {
          question: 'Paso 2: Sofía usa **70%** para la materialidad de ejecución. ¿Cuánto es?',
          answer: 105000,
          hint: 'Se calcula sobre la materialidad **global**, no sobre la utilidad.',
          why: '$150,000 × 0.70 = **$105,000**. Es más baja para dejar margen a errores que no se detecten.',
        },
      },
      {
        calc: {
          question: 'Paso 3: el umbral de errores **claramente insignificantes** es el **5%**. ¿Cuánto es?',
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
        ask: 'Un compañero calculó la materialidad de ejecución así: $3,000,000 × 70%. ¿Qué hizo mal?',
        options: [
          { text: 'Nada, está perfecto', reply: 'Le salió $2,100,000: ¡más que la global! Algo no cuadra.' },
          { text: 'Usó la utilidad en lugar de la materialidad global', ok: true, reply: '¡Bien visto! Ejecución y umbral siempre salen de la **materialidad global**.' },
          { text: 'Debió sumar en lugar de multiplicar', reply: 'No, sí se multiplica. El problema es sobre qué cifra.' },
        ],
      },
      { tip: 'Siempre debe cumplirse: **umbral insignificante < materialidad de ejecución < materialidad global**.' },
    ],
    // Evidencia: suficiente y adecuada
    [
      { text: 'La NIA 500 pide evidencia **suficiente** (cantidad) y **adecuada** (calidad: relevante y confiable). Ojo: mucha evidencia mala **no** compensa.' },
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
      {
        ask: '¿Qué evidencia es **más confiable** sobre el saldo de un cliente?',
        options: [
          { text: 'Lo que dice el gerente de La Norteña de palabra', reply: 'Es interna y verbal: de las más débiles.' },
          { text: 'Una fotocopia del estado de cuenta interno', reply: 'Es interna y es copia: mejor el original y, aún mejor, algo externo.' },
          { text: 'La confirmación que el cliente le manda directo a Sofía', ok: true, reply: '¡Exacto! Externa, independiente y obtenida directo por el auditor (NIA 505).' },
        ],
      },
      {
        multi: {
          title: 'Marca las frases correctas sobre la evidencia',
          items: [
            { text: 'La evidencia documental pesa más que la verbal', ok: true },
            { text: 'El original pesa más que una copia', ok: true },
            { text: 'Juntar muchas copias malas compensa la mala calidad', ok: false },
            { text: 'La evidencia interna es más fuerte si los controles son eficaces', ok: true },
            { text: 'Lo que dice la empresa siempre vale más que lo de un tercero', ok: false },
          ],
          why: 'Externa > interna, directa > indirecta, documental > verbal, original > copia. Y la cantidad **no** arregla la mala calidad.',
        },
      },
      { tip: 'Suficiente = **cuánta**. Adecuada = **qué tan buena**. Necesitas las dos.' },
    ],
    // Tipos de procedimientos
    [
      { text: 'Sofía usa tres tipos de procedimientos. Ordénalos como suelen aparecer en la auditoría:' },
      {
        order: {
          title: 'El recorrido de Sofía',
          steps: [
            'Procedimientos de evaluación de riesgos: entender el negocio y preguntar',
            'Pruebas de controles: ver si los controles funcionan',
            'Pruebas sustantivas: buscar errores en saldos y transacciones',
            'Emitir la opinión',
          ],
          done: 'Primero **identificas** riesgos, luego **pruebas** controles y al final **buscas** errores.',
        },
      },
      {
        sort: {
          title: '¿Qué tipo de procedimiento es?',
          buckets: ['Evaluación de riesgos', 'Prueba de controles', 'Prueba sustantiva'],
          items: [
            { text: 'Platicar con el director para entender cómo vende La Norteña', bucket: 0, why: 'Entender el negocio sirve para identificar riesgos.' },
            { text: 'Revisar que 50 órdenes de pago tengan la firma de autorización', bucket: 1, why: 'Verifica si un control opera.' },
            { text: 'Revisar las facturas detrás de las ventas grandes de diciembre', bucket: 2, why: 'Prueba de detalle: busca errores en transacciones.' },
            { text: 'Analíticos preliminares: comparar las ventas contra el año pasado al planear', bucket: 0, why: 'Al planear, los analíticos ayudan a ver dónde hay riesgo.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el error en el ajuste propuesto',
          story: 'En su prueba sustantiva, Sofía halla una venta a crédito de **$120,000** que nunca salió del almacén. Como rebasa la materialidad de ejecución, propone cancelarla (sin IVA, para simplificar):',
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
