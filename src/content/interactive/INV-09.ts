import type { InteractiveLesson } from './types'

export const intINV09: InteractiveLesson = {
  lessonId: 'INV-09',
  sections: [
    // ¿Qué es una FIBRA?
    [
      { text: 'Doña Carmen tiene 58 años y un taller de costura en Guadalajara 🧵. Sueña con cobrar rentas de bodegas, pero una bodega cuesta millones.' },
      {
        ask: '¿Cómo podría tener una parte de muchas bodegas con solo unos miles de pesos?',
        options: [
          { text: 'Juntando su dinero con el de muchos en un fideicomiso que compra inmuebles', ok: true, reply: '¡Exacto! Eso es una **FIBRA**: muchos inversionistas juntos tienen una parte de decenas de inmuebles.' },
          { text: 'Pidiendo un crédito hipotecario para una bodega', reply: 'Así tendría una sola bodega y una deuda grande. Con una **FIBRA** tiene una parte de muchas con poco dinero.' },
          { text: 'Comprando un departamento en preventa', reply: 'Eso también cuesta mucho y es un solo inmueble. La **FIBRA** junta el dinero de muchos para comprar muchos inmuebles.' },
        ],
      },
      { text: '**FIBRA** = Fideicomiso de Inversión en Bienes Raíces. Un **fideicomiso** es un contrato en el que se entregan bienes o dinero a una institución para que los administre con un fin. Aquí el fin es **comprar, rentar y administrar inmuebles**: naves industriales, centros comerciales, oficinas, hoteles.' },
      { text: 'Para juntar el dinero, la FIBRA emite **CBFIs** (certificados) que cotizan en bolsa. Con ellos no eres dueño de un local en particular: tienes derecho a una parte de los resultados de **todo el conjunto**. En otros países se llama **REIT**.' },
      {
        ask: 'Carmen compra CBFIs de una FIBRA de centros comerciales. ¿Puede poner su taller en uno de los locales?',
        options: [
          { text: 'No: tiene una parte de los resultados de todo el conjunto, no un local', ok: true, reply: '¡Bien! El CBFI no la hace dueña de un local específico, sino de una parte de los resultados de **todos** los inmuebles.' },
          { text: 'Sí, puede escoger el local que quiera', reply: 'No funciona así. El CBFI da derecho a una parte de los resultados de **todo el conjunto**, no a un local.' },
          { text: 'Sí, pero solo los fines de semana', reply: 'Tampoco. Con CBFIs no usas ni rentas un local tú misma: tienes parte de los resultados de **todo el conjunto**.' },
        ],
      },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['FIBRA', 'Fideicomiso que compra, renta y administra inmuebles'],
            ['Fideicomiso', 'Contrato para que una institución administre bienes con un fin'],
            ['CBFI', 'Certificado de la FIBRA que cotiza en bolsa'],
            ['REIT', 'Nombre de algo parecido en otros países'],
          ],
        },
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['Una FIBRA es un fideicomiso', 'que compra, renta y administra inmuebles', 'y emite certificados (CBFIs)', 'que cotizan en bolsa'],
          done: '¡La armaste tú! Así se explica una FIBRA en una frase.',
        },
      },
    ],
    // ¿Cómo te paga una FIBRA?
    [
      { text: 'La FIBRA cobra **rentas** a sus inquilinos, paga gastos e intereses y reparte buena parte de lo que queda a quienes tienen CBFIs. Esos pagos se llaman **distribuciones** y suelen ser cada trimestre 📅.' },
      {
        order: {
          title: 'Ordena el camino del dinero hasta Carmen',
          steps: ['Los inquilinos pagan su renta', 'La FIBRA paga gastos e intereses', 'Reparte buena parte de lo que queda', 'Carmen recibe su distribución'],
          done: 'Así llega el dinero de las rentas al bolsillo de Carmen.',
        },
      },
      { text: '**Rendimiento por distribución** = distribuciones de 12 meses ÷ precio del CBFI × 100.\nEjemplo: un CBFI de $20 que reparte $1.60 al año rinde 8 %.' },
      {
        calc: {
          question: 'El CBFI de una FIBRA de ejemplo cuesta $30 y pagó cuatro distribuciones de $0.45 en el año. ¿Qué porcentaje rinde por distribuciones?',
          answer: 6,
          unit: '%',
          hint: 'Primero el total del año: 4 × 0.45. Luego divide entre 30 y multiplica por 100.',
          why: '4 × 0.45 = $1.80 al año. 1.80 ÷ 30 = 0.06; × 100 = **6 %**. Si usas una sola distribución, te da 1.5 %.',
        },
      },
      { text: 'Otros dos datos clave:\n🏢 **Ocupación** = m² rentados ÷ m² totales × 100.\n💰 **Ingreso mensual** = m² rentados × renta por m² al mes.' },
      {
        calc: {
          question: 'Una FIBRA de ejemplo tiene 50,000 m² de bodegas y 40,000 m² rentados. ¿Cuál es su tasa de ocupación en porcentaje?',
          answer: 80,
          unit: '%',
          hint: '40,000 ÷ 50,000 × 100.',
          why: '40,000 ÷ 50,000 = 0.8; × 100 = **80 %**. Una quinta parte de sus bodegas está vacía.',
        },
      },
      {
        sim: {
          title: 'Una FIBRA de ejemplo con 100,000 m² de bodegas',
          inputs: [
            { key: 'r', label: 'm² rentados', min: 60000, max: 100000, step: 5000, value: 70000 },
            { key: 'p', label: 'Renta por m² al mes', min: 100, max: 160, step: 10, value: 120 },
          ],
          outputs: [
            { label: 'Ocupación', calc: (x) => (x.r / 100000) * 100, unit: '%' },
            { label: 'Ingreso mensual por rentas', calc: (x) => x.r * x.p, main: true },
          ],
          goal: {
            text: 'Llega a **90 % o más de ocupación** y a **$13,000,000 o más** de ingreso al mes.',
            check: (x) => x.r >= 90000 && x.r * x.p >= 13000000,
            done: 'Más m² rentados y mejor renta = más ingreso. Si la ocupación baja, bajan las rentas que se pueden repartir.',
          },
        },
      },
      { tip: 'Tu rendimiento total = **distribuciones + cambio de precio** del CBFI. El precio puede subir o bajar, y las cifras de ejemplo **no están garantizadas**.' },
    ],
    // ¿FIBRA o comprar un departamento?
    [
      { text: 'Al sobrino de Carmen se le ocurre otra idea: "¿Y si mejor compras un departamento para rentarlo?" 🏠' },
      {
        ask: 'Si un día Carmen necesita su dinero rápido, ¿qué puede vender antes?',
        options: [
          { text: 'Sus CBFIs, en bolsa, en días hábiles', ok: true, reply: '¡Sí! Los CBFIs se venden en bolsa. Un departamento puede tardar **meses** en venderse.' },
          { text: 'El departamento, en un par de días', reply: 'Vender un inmueble suele tardar **meses** de trámites. Los CBFIs se venden en bolsa en días hábiles.' },
          { text: 'Los dos tardan lo mismo', reply: 'No. Los CBFIs se venden en bolsa en días hábiles; un departamento, en **meses**.' },
        ],
      },
      {
        sort: {
          title: '¿FIBRA o departamento propio?',
          buckets: ['FIBRA', 'Departamento propio'],
          items: [
            { text: 'Empiezas con el precio de un CBFI', bucket: 0, why: 'El mínimo es el precio de un certificado.' },
            { text: 'Necesitas cientos de miles o millones', bucket: 1, why: 'Un inmueble completo cuesta mucho.' },
            { text: 'Tu dinero queda en muchos inmuebles e inquilinos', bucket: 0, why: 'La FIBRA reparte el dinero entre muchos inmuebles.' },
            { text: 'Tú decides a quién rentar', bucket: 1, why: 'Con tu propio inmueble tienes el control.' },
            { text: 'Venderlo toma meses de trámites', bucket: 1, why: 'Un inmueble es lento de vender.' },
            { text: 'La administración la hacen profesionales', bucket: 0, why: 'En la FIBRA decide su administración.' },
          ],
        },
      },
      { text: 'Pero las FIBRAs tienen riesgos propios:\n📉 El precio se mueve cada día con el mercado.\n🏦 Si **suben las tasas de interés**, otras inversiones se vuelven más atractivas y su deuda se encarece.\n🎯 Pueden concentrarse en un solo sector o región.\n💵 Si cobran rentas en dólares, hay **riesgo cambiario**.' },
      {
        ask: 'Durante meses suben las tasas y los CETES pagan bastante más que antes. ¿Qué es más probable con el precio de los CBFIs?',
        options: [
          { text: 'Tiende a bajar', ok: true, reply: '¡Bien! La deuda de la FIBRA se encarece y otras inversiones compiten con sus distribuciones.' },
          { text: 'Sube, porque las tasas altas ayudan a los inmuebles', reply: 'Al revés: con tasas altas su deuda cuesta más y otras inversiones atraen más. El precio **tiende a bajar**.' },
          { text: 'No cambia, porque las rentas están firmadas', reply: 'Las rentas pueden seguir, pero el precio en bolsa sí se mueve: con tasas altas **tiende a bajar**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué riesgos tiene una FIBRA? Marca todos',
          items: [
            { text: 'Su precio se mueve cada día con el mercado', ok: true },
            { text: 'Le afecta que suban las tasas de interés', ok: true },
            { text: 'Puede concentrarse en un solo sector o región', ok: true },
            { text: 'Riesgo cambiario si cobra rentas en dólares', ok: true },
            { text: 'Ninguno: el precio del certificado nunca baja', ok: false },
          ],
          why: 'Todas son riesgos reales menos la última: el precio del CBFI **sí puede bajar**.',
        },
      },
      { tip: 'Ejemplo: si una FIBRA de oficinas pierde inquilinos porque más gente trabaja a distancia, baja su ocupación, bajan sus distribuciones y probablemente su precio.' },
    ],
  ],
}
