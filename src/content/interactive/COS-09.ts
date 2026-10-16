import type { InteractiveLesson } from './types'

export const intCOS09: InteractiveLesson = {
  lessonId: 'COS-09',
  sections: [
    // Qué es y cómo se calcula
    [
      { text: 'El **punto de equilibrio** (PE) es donde tus ventas cubren **exactamente** todos los costos: ni ganas ni pierdes. Abajo pierdes; arriba ganas.' },
      { text: 'Cada unidad deja un margen. Solo necesitas juntar suficientes márgenes para pagar los fijos.' },
      {
        order: {
          title: 'Ordena los pasos para sacar el PE en unidades',
          steps: [
            'Calcular el margen por unidad: precio − costo variable',
            'Dividir los costos fijos entre ese margen',
            'Si sale con decimales, redondear hacia arriba',
            'Comprobar: unidades × margen ya cubre los fijos',
          ],
          done: 'PE unidades = **CF ÷ (Precio − cv)**.',
        },
      },
      {
        calc: {
          question: 'Un autolavado 🚗 cobra **$120**, cada lavado le cuesta **$40** en jabón, agua y comisión, y sus fijos son **$36,000** al mes. ¿Cuántos lavados son su **PE**?',
          answer: 450,
          hint: 'CF ÷ (precio − cv).',
          why: 'Margen: 120 − 40 = 80. PE = 36,000 ÷ 80 = **450 lavados** (450 × $120 = $54,000 de ventas).',
        },
      },
      {
        calc: {
          question: 'Una papelería ✏️ vende cientos de artículos con una razón MC promedio de **30 %** y fijos de **$24,000**. ¿Cuál es su **PE en pesos**?',
          answer: 80000,
          hint: 'CF ÷ razón en decimal (0.30).',
          why: '24,000 ÷ 0.30 = **$80,000**. Comprobación: 80,000 × 0.30 = 24,000, justo los fijos.',
        },
      },
      {
        ask: 'Los fijos son **$10,000** y el margen es **$30**: 10,000 ÷ 30 = 333.33. ¿Cuál es el PE real?',
        options: [
          { text: '333 unidades', reply: 'Con 333 te faltan unos pesos: 333 × 30 = 9,990. Todavía pierdes un poco.' },
          { text: '334 unidades', ok: true, reply: '¡Bien! Siempre se redondea **hacia arriba**: 334 × 30 = 10,020 ya cubre los fijos.' },
          { text: '333.33 unidades', reply: 'No se venden pedazos de unidad. Redondea **hacia arriba**.' },
        ],
      },
      { tip: 'Error común: dividir los fijos entre el **precio**. Se dividen entre el **margen**, porque cada unidad también tiene costo variable.' },
    ],
    // Margen de seguridad y qué mueve el punto de equilibrio
    [
      { text: 'El **margen de seguridad** es cuánto pueden caer tus ventas antes de llegar a pérdidas: la distancia entre lo que vendes y el PE.' },
      { text: 'La cafetería ☕ tiene **$54,000** de fijos al mes. Mueve precio, costo y ventas esperadas:' },
      {
        sim: {
          title: 'Margen de seguridad de la cafetería',
          inputs: [
            { key: 'p', label: 'Precio por taza', min: 35, max: 60, step: 1, value: 45 },
            { key: 'v', label: 'Costo variable por taza', min: 12, max: 25, step: 1, value: 18 },
            { key: 'q', label: 'Tazas que espera vender', min: 1500, max: 3500, step: 100, value: 2600 },
          ],
          outputs: [
            { label: 'PE en tazas', calc: (x) => Math.ceil(54000 / (x.p - x.v)) },
            { label: 'Margen de seguridad (tazas)', calc: (x) => x.q - Math.ceil(54000 / (x.p - x.v)) },
            { label: 'Margen de seguridad (%)', calc: (x) => ((x.q - Math.ceil(54000 / (x.p - x.v))) / x.q) * 100, main: true },
          ],
          goal: {
            text: 'Sube el margen de seguridad a **30 % o más**.',
            check: (x) => (x.q - Math.ceil(54000 / (x.p - x.v))) / x.q >= 0.3,
            done: 'Fíjate: mover las **ventas esperadas** no cambia el PE, solo el margen de seguridad. El precio y el cv sí mueven el PE.',
          },
        },
      },
      {
        sort: {
          title: '¿Qué le pasa al punto de equilibrio?',
          buckets: ['El PE sube', 'El PE baja', 'El PE no cambia'],
          items: [
            { text: 'Sube la renta del local', bucket: 0, why: 'Más fijos que cubrir: necesitas vender más.' },
            { text: 'El café en grano sube de precio', bucket: 0, why: 'Sube el costo variable, baja el margen y el PE sube.' },
            { text: 'Subes el precio de la taza', bucket: 1, why: 'Crece el margen por taza: llegas antes al PE.' },
            { text: 'Negocias una renta más barata', bucket: 1, why: 'Menos fijos: el PE baja.' },
            { text: 'Esperas vender más tazas este mes', bucket: 2, why: 'El volumen esperado no cambia el PE: cambia el margen de seguridad.' },
          ],
        },
      },
      {
        calc: {
          question: 'Un salón de uñas 💅 planea **300 servicios** y su PE es **225**. ¿Cuál es su **margen de seguridad en %**?',
          answer: 25,
          hint: '(ventas − PE) ÷ **ventas** × 100.',
          why: '300 − 225 = 75 servicios. 75 ÷ 300 = 0.25 → **25 %**: sus ventas pueden caer una cuarta parte antes de perder.',
        },
      },
      { tip: 'MS % = (ventas − PE) ÷ **ventas** × 100. No dividas entre el PE. Si sale negativo, ya estás perdiendo.' },
    ],
    // Punto de equilibrio con varios productos
    [
      { text: 'Casi nadie vende un solo producto. Se usa la **mezcla de ventas**: la proporción en que normalmente se venden.' },
      { text: '**Grupo Tacos Felices** 🌮 vende **3 tacos** por cada **agua**. Cada taco deja **$12** de margen y cada agua **$9**. Sus fijos son **$27,000**.' },
      {
        calc: {
          question: 'Arma un **paquete** con la mezcla (3 tacos + 1 agua). ¿Cuánto margen deja el paquete?',
          answer: 45,
          hint: 'suma unidades en la mezcla × margen de cada producto.',
          why: '3 × 12 + 1 × 9 = 36 + 9 = **$45** por paquete.',
        },
      },
      {
        calc: {
          question: '¿Cuántos **paquetes** necesitan vender para el PE?',
          answer: 600,
          hint: 'fijos ÷ margen del paquete.',
          why: '27,000 ÷ 45 = **600 paquetes**: 600 × 3 = 1,800 tacos y 600 aguas. Comprobación: 1,800 × 12 + 600 × 9 = 21,600 + 5,400 = 27,000 ✔',
        },
      },
      {
        ask: 'Este mes la gente pide **más aguas y menos tacos**, aunque las unidades totales son las mismas. ¿Qué pasa con el PE?',
        options: [
          { text: 'No cambia: venden las mismas unidades', reply: 'Las unidades totales no bastan: importa **qué** se vende. El agua deja menos margen.' },
          { text: 'Sube: la mezcla se movió al producto de menor margen', ok: true, reply: '¡Exacto! El paquete deja menos margen, así que necesitan vender más para cubrir los fijos.' },
          { text: 'Baja: el agua es más barata de hacer', reply: 'Lo que importa es el **margen**, y el agua deja $9 contra $12 del taco. El PE sube.' },
        ],
      },
      { tip: 'Usa exactamente la proporción en que se venden. Ni la inviertas ni repartas en partes iguales.' },
    ],
  ],
}
