import type { InteractiveLesson } from './types'

export const intCOS09: InteractiveLesson = {
  lessonId: 'COS-09',
  sections: [
    // ¿Cuánto vender para no perder?
    [
      { text: 'Paty abrió una cafetería ☕. Vende cada taza a **$40**, cada una le cuesta **$16** y paga **$48,000** fijos al mes. ¿Cuántas tazas necesita para no perder?' },
      {
        ask: '¿Cómo lo calcularías?',
        options: [
          { text: 'Fijos ÷ lo que le deja cada taza ($24)', ok: true, reply: '¡Eso! Cada taza deja $24 de margen. Necesita juntar suficientes márgenes para pagar los $48,000.' },
          { text: 'Fijos ÷ el precio ($40)', reply: 'De los $40, $16 se van en la propia taza. Hay que dividir entre lo que **le deja**: $24.' },
          { text: 'No se puede saber', reply: 'Sí se puede: fijos ÷ lo que deja cada taza (precio − variable).' },
        ],
      },
      { text: 'Ese número es el **punto de equilibrio** (PE): ni ganas ni pierdes. Abajo pierdes; arriba ganas.\n📦 **PE en unidades = fijos ÷ margen por unidad**\n💵 **PE en pesos = fijos ÷ razón de margen** (margen ÷ precio)' },
      {
        calc: {
          question: '¿Cuál es el **PE** de Paty en tazas?',
          answer: 2000, unit: 'tazas',
          hint: '48,000 ÷ (40 − 16).',
          why: 'Margen: 40 − 16 = 24. PE = 48,000 ÷ 24 = **2,000 tazas**.',
        },
      },
      {
        calc: {
          question: 'Su razón de margen es **60 %** (24 ÷ 40). ¿Cuál es su **PE en pesos**?',
          answer: 80000,
          hint: '48,000 ÷ 0.60.',
          why: '48,000 ÷ 0.60 = **$80,000**. Comprobación: 2,000 tazas × $40 = $80,000 ✔',
        },
      },
      {
        ask: 'Si los fijos fueran **$10,000** y el margen **$30**: 10,000 ÷ 30 = 333.33. ¿Cuál es el PE real?',
        options: [
          { text: '333 unidades', reply: 'Con 333 te faltan unos pesos: 333 × 30 = 9,990. Todavía pierdes un poco. Son **334**.' },
          { text: '334 unidades', ok: true, reply: '¡Bien! Siempre se redondea **hacia arriba**: 334 × 30 = 10,020 ya cubre los fijos.' },
          { text: '333.33 unidades', reply: 'No se venden pedazos de taza. Redondea **hacia arriba**: 334.' },
        ],
      },
      { tip: 'Divide los fijos entre el **margen**, no entre el precio. Y si sale con decimales, redondea **hacia arriba**.' },
    ],
    // ¿Qué tan lejos estás de perder?
    [
      { text: 'Paty espera vender **2,500** tazas y su PE es **2,000**. La distancia entre las dos es su **margen de seguridad** 🛟: cuánto pueden caer sus ventas antes de perder.' },
      {
        calc: {
          question: '¿Cuál es su margen de seguridad en **tazas**?',
          answer: 500, unit: 'tazas',
          hint: 'ventas esperadas − PE.',
          why: '2,500 − 2,000 = **500 tazas**.',
        },
      },
      {
        calc: {
          question: 'Cada taza se vende a $40. ¿Cuánto es ese margen de seguridad en **pesos**?',
          answer: 20000,
          hint: '500 × 40.',
          why: '500 × $40 = **$20,000**.',
        },
      },
      {
        calc: {
          question: '¿Y en **porcentaje** de sus ventas?',
          answer: 20, unit: '%',
          hint: '500 ÷ 2,500 × 100. Se divide entre las **ventas**, no entre el PE.',
          why: '500 ÷ 2,500 = 0.20 → **20 %**: sus ventas pueden caer una quinta parte antes de perder.',
        },
      },
      { text: '¿Qué mueve el PE? Más fijos o más costo variable lo **suben**. Subir el precio lo **baja**. Vender más **no** lo mueve: solo cambia el margen de seguridad. Pruébalo:' },
      {
        sim: {
          title: 'Margen de seguridad de la cafetería ($48,000 de fijos)',
          inputs: [
            { key: 'p', label: 'Precio por taza', min: 30, max: 55, step: 1, value: 40 },
            { key: 'v', label: 'Costo variable por taza', min: 10, max: 25, step: 1, value: 16 },
            { key: 'q', label: 'Tazas que espera vender', min: 1500, max: 3500, step: 100, value: 2500 },
          ],
          outputs: [
            { label: 'PE en tazas', calc: (x) => Math.ceil(48000 / (x.p - x.v)) },
            { label: 'Margen de seguridad (tazas)', calc: (x) => x.q - Math.ceil(48000 / (x.p - x.v)) },
            { label: 'Margen de seguridad (%)', calc: (x) => ((x.q - Math.ceil(48000 / (x.p - x.v))) / x.q) * 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Sube el margen de seguridad a **30 % o más**.',
            check: (x) => (x.q - Math.ceil(48000 / (x.p - x.v))) / x.q >= 0.3,
            done: 'Fíjate: mover las **ventas esperadas** no cambia el PE, solo el margen de seguridad. El precio y el variable sí mueven el PE.',
          },
        },
      },
      {
        sort: {
          title: '¿Qué le pasa al punto de equilibrio?',
          buckets: ['Sube', 'Baja', 'No cambia'],
          items: [
            { text: 'Sube la renta del local', bucket: 0, why: 'Más fijos que cubrir: necesita vender más.' },
            { text: 'El café en grano sube de precio', bucket: 0, why: 'Sube el costo variable, baja el margen y el PE sube.' },
            { text: 'Paty sube el precio de la taza', bucket: 1, why: 'Crece el margen por taza: llega antes al PE.' },
            { text: 'Le bajan la comisión que paga por cada taza', bucket: 1, why: 'Menos variable, más margen: el PE baja.' },
            { text: 'Paga un anuncio de monto fijo', bucket: 0, why: 'Es un fijo más que cubrir: el PE sube.' },
            { text: 'Espera vender más tazas este mes', bucket: 2, why: 'El volumen esperado no cambia el PE: cambia el margen de seguridad.' },
          ],
        },
      },
      { tip: 'Margen de seguridad = ventas − PE. En % se divide entre las **ventas**. Si sale negativo, ya estás perdiendo.' },
    ],
    // ¿Y si vendes varios productos?
    [
      { text: 'Paty también vende pan 🥐. Por cada **café** vende **2 panes**: esa es su **mezcla de ventas**. El café deja **$24** de margen y cada pan **$8**. Sus fijos siguen en **$48,000**.' },
      { text: 'Truco: arma un **paquete** con la mezcla (1 café + 2 panes), saca su margen y divide los fijos entre él. Luego multiplicas por la mezcla.' },
      {
        calc: {
          question: '¿Cuánto margen deja el paquete de 1 café + 2 panes?',
          answer: 40,
          hint: '1 × 24 + 2 × 8.',
          why: '24 + 16 = **$40** por paquete.',
        },
      },
      {
        calc: {
          question: '¿Cuántos **paquetes** necesita vender para el PE?',
          answer: 1200, unit: 'paquetes',
          hint: 'fijos ÷ margen del paquete: 48,000 ÷ 40.',
          why: '48,000 ÷ 40 = **1,200 paquetes**.',
        },
      },
      {
        calc: {
          question: 'Entonces, ¿cuántos **panes** debe vender en el PE?',
          answer: 2400, unit: 'panes',
          hint: 'Cada paquete trae 2 panes.',
          why: '1,200 × 2 = **2,400 panes** (y 1,200 cafés). Comprobación: 1,200 × 24 + 2,400 × 8 = 28,800 + 19,200 = 48,000 ✔',
        },
      },
      {
        ask: 'Este mes la gente pide **más pan y menos café**, aunque las unidades totales son las mismas. ¿Qué pasa con el PE?',
        options: [
          { text: 'No cambia: vende las mismas unidades', reply: 'Importa **qué** se vende. El pan deja menos margen ($8 contra $24), así que el PE **sube**.' },
          { text: 'Sube: la mezcla se movió al producto de menor margen', ok: true, reply: '¡Exacto! El paquete deja menos margen, así que necesita vender más para cubrir los fijos.' },
          { text: 'Baja: el pan es más barato de hacer', reply: 'Lo que importa es el **margen**, y el pan deja $8 contra $24 del café. El PE **sube**.' },
        ],
      },
      { tip: 'Usa la proporción **exacta** en que se venden. No la inviertas ni repartas en partes iguales.' },
    ],
  ],
}
