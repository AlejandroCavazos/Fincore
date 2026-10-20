import type { InteractiveLesson } from './types'

/** Pérdida esperada de un crédito de ejemplo de $1,000,000: PD × (1 − recuperación) × saldo. */
const el = (pd: number, rec: number) => (pd / 100) * (1 - rec / 100) * 1000000

export const intCUA12: InteractiveLesson = {
  lessonId: 'CUA-12',
  sections: [
    // Cuando los precios se mueven
    [
      { text: 'Paola es gerente de riesgos de una financiera popular de ejemplo 🏢. Su director le pide un mapa: "¿por dónde podemos perder dinero?". Empieza por el **riesgo de mercado**: perder porque cambian los precios del mercado.' },
      { text: 'Tiene 4 fuentes principales:\n📈 **Tasas de interés**\n💱 **Tipo de cambio**\n📊 **Precios de acciones**\n🛢️ **Materias primas**: petróleo, maíz, metales.' },
      {
        ask: 'La financiera tiene bonos que ya compró. Si las tasas del mercado **suben**, ¿qué crees que pasa con el precio de esos bonos?',
        options: [
          { text: 'Baja', ok: true, reply: '¡Exacto! Si salen bonos nuevos que pagan más, nadie paga lo mismo por el bono viejo que paga menos. Es un sube y baja.' },
          { text: 'Sube', reply: 'Es al revés: con bonos nuevos que pagan más, el bono viejo vale **menos**. Tasas arriba, precio abajo.' },
          { text: 'No cambia', reply: 'Sí cambia: si los nuevos pagan más, el bono viejo vale **menos**.' },
        ],
      },
      { text: 'La **duración modificada** dice en qué % aproximado cambia el precio por cada punto de tasa:\n**Cambio ≈ − duración × cambio de tasa × valor**\nEl cambio de tasa va en decimal: 1 punto = 0.01; medio punto = 0.005.' },
      {
        calc: {
          question: 'Paola tiene bonos por **$5,000,000** con duración modificada de **3**. Las tasas suben **1 punto**. ¿Cuánto pierde aproximadamente?',
          answer: 150000,
          hint: '3 × 0.01 × 5,000,000.',
          why: '3 × 0.01 = 0.03 (3%), y 0.03 × 5,000,000 = **$150,000** de pérdida. Si usas 1 en vez de 0.01, la pérdida sale mayor que todo el portafolio.',
        },
      },
      {
        ask: 'Con la misma duración de 3, ¿qué pasa si las tasas **bajan** 1 punto?',
        options: [
          { text: 'Gana unos $150,000', ok: true, reply: '¡Bien! El signo cambia: tasas abajo, precio arriba. Es una aproximación que funciona bien para cambios pequeños.' },
          { text: 'Pierde $150,000 también', reply: 'El signo se voltea: si las tasas **bajan**, el precio **sube**. Gana unos $150,000.' },
          { text: 'No pasa nada', reply: 'Los bonos son sensibles en los dos sentidos: si las tasas bajan, **gana** unos $150,000.' },
        ],
      },
      { tip: 'El riesgo de mercado se resume con el **VaR** y se completa con **pruebas de estrés**: ¿qué pasa si el peso se deprecia 20% de golpe?' },
    ],
    // Cuando alguien no te paga
    [
      { text: 'La financiera de Paola presta a pequeños negocios 🏪. Si un cliente **no paga**, pierde: eso es **riesgo de crédito**. También pierde si el deudor **empeora** (por ejemplo, le bajan la calificación) y su deuda vale menos.' },
      { text: 'Se mide con 3 piezas:\n🎲 **PD:** probabilidad de que no pague en el periodo.\n💔 **LGD:** % que se pierde si no paga. **LGD = 1 − recuperación.**\n💰 **EAD:** cuánto te debe al momento del impago.\n**Pérdida esperada (EL) = PD × LGD × EAD**' },
      {
        match: {
          title: 'Une cada sigla con su idea',
          pairs: [
            ['PD', 'Qué tan probable es que no pague'],
            ['LGD', 'Lo que NO se recupera si no paga'],
            ['EAD', 'Cuánto debe al momento del impago'],
            ['EL', 'Lo que en promedio se pierde'],
          ],
        },
      },
      {
        calc: {
          question: 'Con la garantía, Paola recupera **25%** si el cliente no paga. ¿Cuál es la LGD, en %?',
          answer: 75,
          unit: '%',
          hint: '100% − 25%.',
          why: '1 − 0.25 = 0.75 = **75%**. La LGD es lo que **no** se recupera; usar el 25% sería confundirla con la recuperación.',
        },
      },
      {
        calc: {
          question: 'Ese crédito tiene saldo de **$400,000**, PD de **5%** y LGD de **75%**. ¿Cuál es la pérdida esperada?',
          answer: 15000,
          hint: '0.05 × 0.75 × 400,000.',
          why: '0.05 × 0.75 = 0.0375, y × 400,000 = **$15,000**.',
        },
      },
      {
        sim: {
          title: 'Crédito de ejemplo de $1,000,000',
          inputs: [
            { key: 'pd', label: 'Probabilidad de que no pague, PD (%)', min: 1, max: 6, step: 1, value: 5 },
            { key: 'rec', label: 'Recuperación con garantía (%)', min: 0, max: 60, step: 10, value: 0 },
          ],
          outputs: [
            { label: 'LGD', calc: (x) => 100 - x.rec, unit: '%' },
            { label: 'Pérdida esperada', calc: (x) => el(x.pd, x.rec), main: true },
          ],
          goal: {
            text: 'Baja la pérdida esperada a **$12,000 o menos**.',
            check: (x) => el(x.pd, x.rec) <= 12000,
            done: 'Clientes que pagan mejor (PD baja) y buenas garantías (más recuperación) bajan la pérdida esperada.',
          },
        },
      },
      {
        ask: 'La pérdida esperada es un costo normal del negocio. ¿Con qué se cubre?',
        options: [
          { text: 'Con reservas y con la tasa que se cobra', ok: true, reply: '¡Exacto! El **capital** queda para la pérdida **no esperada**: la que pasa del promedio en un año malo.' },
          { text: 'Principalmente con el capital', reply: 'El capital es para la pérdida **no esperada**. La esperada se cubre con **reservas** (estimaciones preventivas) y con la tasa.' },
          { text: 'No se cubre: se espera que no pase', reply: 'Se espera que **sí** pase en promedio; por eso se cubre con **reservas** y con la tasa que se cobra.' },
        ],
      },
      { tip: 'Prestar mucho a pocos deudores o a un solo sector **aumenta** el riesgo de crédito.' },
    ],
    // ¿Puedes vender o pagar a tiempo?
    [
      { text: 'Última pieza del mapa de Paola: el **riesgo de liquidez** 💧. Tiene dos caras:\n🏷️ **De mercado:** no poder vender rápido sin castigar el precio (un bono poco operado, un terreno).\n💸 **De fondeo:** no tener efectivo para pagar a tiempo, aunque el negocio sea rentable.' },
      {
        ask: 'Una empresa vende mucho, pero casi todo a crédito, y el viernes no le alcanza para la nómina. ¿Qué cara es?',
        options: [
          { text: 'Liquidez de fondeo', ok: true, reply: '¡Sí! Es rentable, pero no tiene el efectivo **a tiempo** para pagar.' },
          { text: 'Liquidez de mercado', reply: 'No está intentando vender un activo. Le falta efectivo para pagar a tiempo: **liquidez de fondeo**.' },
          { text: 'Riesgo de mercado', reply: 'No cambió ningún precio del mercado. Le falta efectivo para pagar a tiempo: **liquidez de fondeo**.' },
        ],
      },
      { text: 'Una medida sencilla de liquidez de mercado es el diferencial **compra-venta**:\n🙋 **Bid:** el precio al que alguien te compra.\n🙋‍♀️ **Ask:** el precio al que alguien te vende.\nVender ya, frente al precio medio, cuesta cerca de **medio diferencial** por título.' },
      {
        calc: {
          question: 'Paola debe vender **10,000** títulos. Bid $19.90 y ask $20.10. ¿Cuánto cuesta venderlos ya, frente al precio medio?',
          answer: 1000,
          hint: 'Diferencial: 20.10 − 19.90 = 0.20. Toma la mitad y multiplica por 10,000.',
          why: 'Precio medio $20.00; vendes al bid, $0.10 menos. 10,000 × 0.10 = **$1,000**. Con el diferencial completo te daría el doble.',
        },
      },
      { text: 'Los tres riesgos **se contagian**: una caída fuerte de precios trae **llamadas de margen** (piden depositar más efectivo), eso obliga a vender activos poco líquidos con descuento, y los deudores se debilitan.' },
      {
        order: {
          title: 'Arma el contagio',
          steps: ['Los precios caen fuerte (mercado)', 'Llegan llamadas de margen que piden efectivo (fondeo)', 'Se venden activos poco líquidos con descuento (liquidez de mercado)', 'Los deudores se debilitan (crédito)'],
          done: '¡Eso! Por eso los riesgos se miran juntos, no por separado.',
        },
      },
      {
        sort: {
          title: '¿Qué riesgo es?',
          buckets: ['Mercado', 'Crédito', 'Liquidez'],
          items: [
            { text: 'Caen los precios de las acciones que tienes', bucket: 0, why: 'Cambió un precio del mercado.' },
            { text: 'Un negocio deja de pagar su préstamo', bucket: 1, why: 'Alguien no te paga: crédito.' },
            { text: 'Un terreno que no se vende sin rebajarlo mucho', bucket: 2, why: 'No puedes vender rápido sin castigar el precio: liquidez de mercado.' },
            { text: 'Sube el precio del petróleo', bucket: 0, why: 'Materias primas: riesgo de mercado.' },
            { text: 'Le bajan la calificación a una empresa que te debe', bucket: 1, why: 'Empeoró el deudor: su origen es la capacidad de pago, así que es crédito.' },
            { text: 'No hay efectivo para pagarle a tiempo a un proveedor', bucket: 2, why: 'Falta efectivo a tiempo: liquidez de fondeo.' },
          ],
        },
      },
      { tip: 'Mercado: cambian los precios. Crédito: no te pagan. Liquidez: no puedes vender o pagar a tiempo.' },
    ],
  ],
}
