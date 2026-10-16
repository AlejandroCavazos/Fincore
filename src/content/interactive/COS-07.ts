import type { InteractiveLesson } from './types'

export const intCOS07: InteractiveLesson = {
  lessonId: 'COS-07',
  sections: [
    // Fijos y variables: en total y por unidad
    [
      { text: 'En la tortillería 🫓, si haces el doble de kilos gastas el doble de masa: es un costo **variable**. La renta es igual vendas 100 o 1,000 kilos: es un costo **fijo**.' },
      { text: 'Lo curioso pasa **por kilo**. La renta es de **$12,000** al mes y la masa cuesta **$9** por kilo. Mueve la producción:' },
      {
        sim: {
          title: 'La renta repartida entre los kilos',
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
        rush: {
          title: 'Si produces más kilos, ¿qué pasa?',
          seconds: 35,
          labels: ['Cambia', 'No cambia'],
          items: [
            { text: 'La masa total del mes', ans: 0 },
            { text: 'La masa por cada kilo', ans: 1 },
            { text: 'La renta total del mes', ans: 1 },
            { text: 'La renta por cada kilo', ans: 0 },
            { text: 'El empaque total del mes', ans: 0 },
            { text: 'El sueldo fijo del encargado, en total', ans: 1 },
          ],
        },
      },
      {
        ask: 'Las ventas crecen tanto que necesitas **un segundo local**. ¿Qué pasa con la renta?',
        options: [
          { text: 'Nada: la renta es fija y nunca cambia', reply: 'Es fija solo **dentro del rango relevante**. Con un segundo local te saliste de él.' },
          { text: 'Sube: te saliste del rango relevante', ok: true, reply: '¡Así es! El rango relevante es el volumen que tu capacidad actual alcanza. Fuera de él, los fijos cambian.' },
          { text: 'Se vuelve un costo variable', reply: 'No se vuelve variable: da un salto y luego vuelve a quedarse fija en el nuevo rango.' },
        ],
      },
      { tip: 'Variable: cambia **en total**, igual **por unidad**. Fijo: igual **en total**, baja **por unidad** al producir más.' },
    ],
    // Costos mixtos y el método de punto alto y punto bajo
    [
      { text: 'Algunos costos son **mixtos**: parte fija y parte variable, como el recibo de luz. Otros son **escalonados**: se quedan fijos un tramo y luego saltan.' },
      {
        sort: {
          title: '¿Qué tipo de costo es?',
          buckets: ['Fijo', 'Variable', 'Mixto', 'Escalonado'],
          items: [
            { text: 'Renta del local', bucket: 0, why: 'Se paga igual aunque produzcas más o menos.' },
            { text: 'Masa por cada kilo de tortilla', bucket: 1, why: 'Sube y baja en proporción a lo que produces.' },
            { text: 'Recibo de luz: cargo fijo más lo que consumes', bucket: 2, why: 'Tiene una parte fija y otra que depende del consumo.' },
            { text: 'Un supervisor más por cada 10 operarios', bucket: 3, why: 'Se queda igual un tramo y luego salta.' },
            { text: 'Empaque de cada pieza vendida', bucket: 1, why: 'Cada pieza lleva su empaque: es variable.' },
          ],
        },
      },
      { text: 'Para separar un costo mixto usa el **punto alto y punto bajo**: la diferencia de costo entre esos dos meses solo puede venir de la parte variable.' },
      {
        order: {
          title: 'Ordena los pasos del punto alto y punto bajo',
          steps: [
            'Elegir el mes de mayor actividad y el de menor actividad',
            'Restar los costos: costo alto − costo bajo',
            'Dividir esa diferencia entre la diferencia de actividad (eso es cv)',
            'Sacar el fijo: costo alto − cv × actividad alta',
            'Comprobar con el mes bajo',
          ],
          done: 'Ojo: los meses se eligen por **actividad**, no por costo.',
        },
      },
      { text: 'El taller de Grupo Tacos Felices 🔧 gastó **$31,000** en un mes con **900 horas** y **$18,500** en un mes con **400 horas**.' },
      {
        calc: {
          question: '¿Cuál es el **costo variable por hora** (cv)?',
          answer: 25,
          hint: '(costo alto − costo bajo) ÷ (horas altas − horas bajas).',
          why: '(31,000 − 18,500) ÷ (900 − 400) = 12,500 ÷ 500 = **$25 por hora**.',
        },
      },
      {
        calc: {
          question: 'Con cv = $25, ¿cuál es la **parte fija** del mes (CF)?',
          answer: 8500,
          hint: 'costo alto − cv × actividad alta.',
          why: '31,000 − 900 × 25 = 31,000 − 22,500 = **$8,500**. Comprobación: 8,500 + 400 × 25 = 18,500 ✔',
        },
      },
      { tip: 'Es un método **rápido pero aproximado**: solo usa dos meses. Si uno fue raro (una descompostura, un día festivo), el resultado se distorsiona.' },
    ],
    // La ecuación del costo total y la estructura de costos
    [
      { text: 'Con la parte fija y el cv armas la **ecuación del costo total**: Costo total = CF + cv × Q. Te sirve para proyectar el próximo mes.' },
      {
        calc: {
          question: 'El taller tiene CF = **$8,500** y cv = **$25** por hora. Si espera **600 horas**, ¿cuál será su **costo total**?',
          answer: 23500,
          hint: 'CF + cv × Q. Los fijos se suman una sola vez.',
          why: '8,500 + 25 × 600 = 8,500 + 15,000 = **$23,500** en el mes.',
        },
      },
      {
        sim: {
          title: 'Costo por pieza en la panadería 🥐',
          inputs: [
            { key: 'f', label: 'Costos fijos del mes (CF)', min: 4000, max: 12000, step: 1000, value: 8000 },
            { key: 'v', label: 'Costo variable por pieza (cv)', min: 4, max: 10, step: 1, value: 6 },
            { key: 'q', label: 'Piezas del mes (Q)', min: 1000, max: 5000, step: 500, value: 2000 },
          ],
          outputs: [
            { label: 'Costo total', calc: (x) => x.f + x.v * x.q },
            { label: 'Fijo por pieza', calc: (x) => x.f / x.q },
            { label: 'Costo por pieza', calc: (x) => x.f / x.q + x.v, main: true },
          ],
          goal: {
            text: 'Baja el costo por pieza a **$8 o menos**.',
            check: (x) => x.f / x.q + x.v <= 8,
            done: 'Costo unitario = CF ÷ Q + cv. Producir más reparte los fijos; bajar el cv ayuda en cada pieza.',
          },
        },
      },
      {
        multi: {
          title: 'Sobre la estructura de costos, ¿qué es cierto? Marca todas.',
          items: [
            { text: 'Una fábrica automatizada tiene muchos costos fijos', ok: true },
            { text: 'Con muchos fijos ganas mucho cuando vendes bastante', ok: true },
            { text: 'Con muchos fijos sufres más cuando las ventas caen', ok: true },
            { text: 'Un revendedor por catálogo arriesga menos, pero cada venta le deja menos', ok: true },
            { text: 'En la ecuación, los fijos se multiplican por las unidades', ok: false },
          ],
          why: 'La **estructura de costos** es la proporción de fijos y variables. Más fijos = más ganancia en las buenas y más riesgo en las malas. Y los fijos se suman **una sola vez** por periodo.',
        },
      },
      { tip: '**Costo total = CF + cv × Q** y **costo unitario = CF ÷ Q + cv**.' },
    ],
  ],
}
