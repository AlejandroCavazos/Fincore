import type { InteractiveLesson } from './types'

export const intCOS07: InteractiveLesson = {
  lessonId: 'COS-07',
  sections: [
    // ¿Qué gasto sube y cuál no?
    [
      { text: 'Lalo tiene una tortillería 🫓. Este mes hizo el doble de kilos, pero el recibo de la renta llegó **igualito**.' },
      {
        ask: 'Si Lalo hace el doble de kilos, ¿qué gasto se duplica?',
        options: [
          { text: 'La masa', ok: true, reply: '¡Eso! Cada kilo lleva su masa: el doble de kilos, el doble de masa.' },
          { text: 'La renta del local', reply: 'La renta es la misma si vende 100 o 1,000 kilos. Lo que se duplica es **la masa**.' },
          { text: 'El sueldo fijo del encargado', reply: 'Ese sueldo se paga igual aunque hagan más kilos. Lo que se duplica es **la masa**.' },
        ],
      },
      { text: '📈 **Variable:** el total sube y baja con lo que produces (la masa).\n📌 **Fijo:** el total se queda igual (la renta).\nPero **por kilo** pasa al revés. Mueve la producción:' },
      {
        sim: {
          title: 'La renta de $12,000 repartida entre los kilos',
          inputs: [{ key: 'q', label: 'Kilos producidos en el mes', min: 2000, max: 8000, step: 500, value: 3000 }],
          outputs: [
            { label: 'Renta total (fijo)', calc: () => 12000 },
            { label: 'Renta por kilo', calc: (x) => 12000 / x.q },
            { label: 'Masa por kilo (variable)', calc: () => 9 },
            { label: 'Costo por kilo', calc: (x) => 12000 / x.q + 9, main: true },
          ],
          goal: {
            text: 'Produce lo suficiente para que la renta por kilo baje a **$2.50 o menos**.',
            check: (x) => 12000 / x.q <= 2.5,
            done: 'La renta total no se movió: sigue en $12,000. Lo que baja es la parte que le toca a **cada kilo**.',
          },
        },
      },
      {
        ask: 'Lalo pasa de 4,000 a 8,000 kilos. ¿Qué le pasa a la **renta por kilo**?',
        options: [
          { text: 'Se reduce a la mitad', ok: true, reply: '¡Bien! $12,000 ÷ 4,000 = $3; $12,000 ÷ 8,000 = $1.50. La misma renta entre el doble de kilos.' },
          { text: 'Se duplica', reply: 'La renta total no cambia y ahora se reparte entre más kilos, así que **baja a la mitad**: de $3 a $1.50.' },
          { text: 'No cambia', reply: 'La renta **total** no cambia, pero **por kilo** sí: de $3 baja a $1.50, la mitad.' },
        ],
      },
      {
        rush: {
          title: 'Si Lalo produce más kilos, ¿qué pasa?',
          seconds: 35,
          labels: ['Cambia', 'No cambia'],
          items: [
            { text: 'La masa total del mes', ans: 0 },
            { text: 'La masa por cada kilo', ans: 1 },
            { text: 'La renta total del mes', ans: 1 },
            { text: 'La renta por cada kilo', ans: 0 },
            { text: 'El papel para envolver, total del mes', ans: 0 },
            { text: 'El sueldo fijo del encargado, en total', ans: 1 },
          ],
        },
      },
      {
        ask: 'Las ventas crecen tanto que Lalo necesita **un segundo local**. ¿Qué pasa con la renta?',
        options: [
          { text: 'Nada: la renta es fija y nunca cambia', reply: 'Es fija solo **dentro del rango relevante**: el volumen que alcanza con lo que ya tiene. Con un segundo local se salió de él y la renta sube.' },
          { text: 'Sube: se salió del rango relevante', ok: true, reply: '¡Así es! El rango relevante es el volumen que tu capacidad actual alcanza. Fuera de él, los fijos cambian.' },
          { text: 'Se vuelve un costo variable', reply: 'No se vuelve variable: da un salto y luego vuelve a quedarse fija en el nuevo rango.' },
        ],
      },
      { tip: 'Variable: cambia **en total**, igual **por unidad**. Fijo: igual **en total** (dentro del rango relevante), baja **por unidad** al producir más.' },
    ],
    // ¿Fijo, variable o las dos?
    [
      { text: 'El recibo de luz de Lalo 💡 trae un **cargo fijo** y además **lo que consume**. No es ni fijo ni variable: es **mixto**, tiene las dos partes.' },
      {
        sort: {
          title: '¿Qué tipo de costo es?',
          buckets: ['Fijo', 'Variable', 'Mixto'],
          items: [
            { text: 'Renta del local', bucket: 0, why: 'Se paga igual aunque produzca más o menos.' },
            { text: 'Masa de cada kilo de tortilla', bucket: 1, why: 'Sube y baja en proporción a lo que produce.' },
            { text: 'Recibo de luz: cargo fijo más lo que consume', bucket: 2, why: 'Tiene una parte fija y otra que depende del consumo.' },
            { text: 'Sueldo mensual del encargado', bucket: 0, why: 'Es el mismo cada mes, haga muchos o pocos kilos.' },
            { text: 'Comisión de $2 por cada kilo que vende el repartidor', bucket: 1, why: 'Se paga por cada kilo: es variable.' },
            { text: 'Teléfono: plan base más minutos extra', bucket: 2, why: 'Una parte fija (el plan) y otra que cambia (los minutos).' },
          ],
        },
      },
      {
        ask: 'Hay costos que se quedan fijos un tramo y luego **saltan**, como contratar un supervisor más por cada 10 operarios. ¿Cómo se llaman?',
        options: [
          { text: 'Escalonados', ok: true, reply: '¡Eso! Suben "por escalones": fijos un tramo y luego un salto.' },
          { text: 'Variables', reply: 'Un variable sube con cada unidad. Este se queda fijo un tramo y luego salta: es **escalonado**.' },
          { text: 'Mixtos', reply: 'El mixto tiene una parte fija y una variable al mismo tiempo. Este sube a saltos: es **escalonado**.' },
        ],
      },
      { text: 'Para separar un mixto usa el **punto alto y punto bajo**: tomas el mes de **más** actividad y el de **menos**. La diferencia de costo entre ellos solo puede venir de la parte variable.' },
      {
        order: {
          title: 'Ordena los pasos',
          steps: [
            'Elegir el mes de mayor actividad y el de menor actividad',
            'Restar los costos: costo alto − costo bajo',
            'Dividir esa diferencia entre la diferencia de actividad (eso es el variable por unidad)',
            'Sacar el fijo: costo alto − variable por unidad × actividad alta',
          ],
          done: 'Ojo: los meses se eligen por **actividad**, no por costo.',
        },
      },
      {
        calc: {
          question: 'Luz de Lalo: en el mes de **5,000 kilos** pagó **$14,000**; en el de **3,000 kilos**, **$10,000**. ¿Cuál es el **costo variable por kilo**?',
          answer: 2,
          hint: '(costo alto − costo bajo) ÷ (kilos altos − kilos bajos).',
          why: '(14,000 − 10,000) ÷ (5,000 − 3,000) = 4,000 ÷ 2,000 = **$2 por kilo**.',
        },
      },
      {
        calc: {
          question: 'Con $2 por kilo, ¿cuál es la **parte fija** del recibo de luz al mes?',
          answer: 4000,
          hint: 'costo alto − variable por kilo × kilos altos.',
          why: '14,000 − 2 × 5,000 = 14,000 − 10,000 = **$4,000**. Comprobación con el mes bajo: 4,000 + 2 × 3,000 = 10,000 ✔',
        },
      },
      { tip: 'Es un método **rápido pero aproximado**: solo usa dos meses. Si uno fue raro (una descompostura, un día festivo), el resultado se distorsiona.' },
    ],
    // ¿Cuánto gastarás el próximo mes?
    [
      { text: 'Lalo quiere saber cuánto pagará de luz el próximo mes 🔮. Ya tiene las dos piezas: **$4,000 fijos** y **$2 por kilo**.' },
      { text: '🧮 **Costo total = fijos + variable por unidad × unidades**\n🔍 **Costo por unidad = costo total ÷ unidades**\nLos fijos se suman **una sola vez**.' },
      {
        calc: {
          question: 'Lalo espera hacer **4,500 kilos**. ¿Cuánto pagará de **luz** en el mes?',
          answer: 13000,
          hint: 'fijos + variable por kilo × kilos: 4,000 + 2 × 4,500.',
          why: '4,000 + 2 × 4,500 = 4,000 + 9,000 = **$13,000**.',
        },
      },
      {
        calc: {
          question: 'Toda la tortillería tiene **$30,000** de fijos al mes y **$9** de variable por kilo. Si hace **5,000 kilos**, ¿cuál es el **costo por kilo**?',
          answer: 15,
          hint: 'Primero el costo total (30,000 + 9 × 5,000) y luego divídelo entre 5,000.',
          why: 'Total: 30,000 + 45,000 = $75,000. Por kilo: 75,000 ÷ 5,000 = **$15**. Si olvidas los fijos, te da solo $9.',
        },
      },
      {
        sim: {
          title: 'Costo por kilo en la tortillería',
          inputs: [
            { key: 'f', label: 'Costos fijos del mes', min: 20000, max: 40000, step: 5000, value: 30000 },
            { key: 'v', label: 'Costo variable por kilo', min: 6, max: 12, step: 1, value: 9 },
            { key: 'q', label: 'Kilos del mes', min: 2000, max: 8000, step: 500, value: 3000 },
          ],
          outputs: [
            { label: 'Costo total', calc: (x) => x.f + x.v * x.q },
            { label: 'Fijo por kilo', calc: (x) => x.f / x.q },
            { label: 'Costo por kilo', calc: (x) => x.f / x.q + x.v, main: true },
          ],
          goal: {
            text: 'Baja el costo por kilo a **$14 o menos**.',
            check: (x) => x.f / x.q + x.v <= 14,
            done: 'Producir más reparte los fijos entre más kilos; bajar el variable ayuda en cada kilo.',
          },
        },
      },
      { text: 'La **estructura de costos** es cuánto pesan los fijos y cuánto los variables. Una fábrica automatizada tiene muchos fijos; un revendedor por catálogo, casi puros variables.' },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Con muchos fijos ganas mucho cuando vendes bastante', ok: true },
            { text: 'Con muchos fijos sufres más cuando las ventas caen', ok: true },
            { text: 'Con muchos variables arriesgas menos, pero cada venta te deja menos', ok: true },
            { text: 'En la ecuación, los fijos se multiplican por las unidades', ok: false },
          ],
          why: 'Más fijos = más ganancia en las buenas y más riesgo en las malas. Y los fijos se suman **una sola vez** por periodo.',
        },
      },
      { tip: '**Costo total = fijos + variable × unidades.** **Costo por unidad = total ÷ unidades.**' },
    ],
  ],
}
