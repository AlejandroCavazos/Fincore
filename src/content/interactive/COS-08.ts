import type { InteractiveLesson } from './types'

export const intCOS08: InteractiveLesson = {
  lessonId: 'COS-08',
  sections: [
    // El margen de contribución
    [
      { text: 'El **margen de contribución** es lo que te queda de cada venta después de pagar sus costos **variables**. Ese dinero **contribuye** primero a cubrir los fijos y, después, se vuelve utilidad.' },
      {
        sort: {
          title: 'La cafetería vende frappés 🥤. ¿Se resta para el margen de contribución?',
          buckets: ['Sí: es variable', 'No: es fijo'],
          items: [
            { text: 'Leche y hielo de cada frappé', bucket: 0, why: 'Cada frappé los lleva: costo variable.' },
            { text: 'Renta del local', bucket: 1, why: 'Es igual vendas lo que vendas: los fijos se restan después, del total.' },
            { text: 'Vaso y popote', bucket: 0, why: 'Uno por frappé: variable.' },
            { text: 'Sueldo fijo del encargado', bucket: 1, why: 'Es fijo: no entra en el margen de contribución.' },
            { text: 'Comisión por cada venta en una app de entregas', bucket: 0, why: 'Se paga por cada venta: variable.' },
          ],
        },
      },
      {
        calc: {
          question: 'El frappé se vende en **$55** y sus costos variables son **$22**. ¿Cuál es el **margen de contribución por unidad**?',
          answer: 33,
          hint: 'precio − costo variable por unidad.',
          why: '55 − 22 = **$33** por frappé para cubrir fijos y ganar.',
        },
      },
      {
        calc: {
          question: '¿Cuál es la **razón de margen de contribución**, en %?',
          answer: 60, unit: '%',
          hint: 'margen unitario ÷ precio × 100.',
          why: '33 ÷ 55 = 0.60 → **60 %**. De cada $100 vendidos, $60 van a cubrir fijos y generar utilidad.',
        },
      },
      {
        ask: 'Un compañero calcula el margen así: precio − costo variable − **renta**. ¿Qué opinas?',
        options: [
          { text: 'Está bien: hay que restar todo', reply: 'El margen de contribución solo resta los **variables**. Los fijos se restan después, del total.' },
          { text: 'Está mal: la renta es fija y se resta después', ok: true, reply: '¡Correcto! Primero el margen (solo variables); luego, del margen total, restas los fijos.' },
          { text: 'Está mal: debió dividir entre el costo variable', reply: 'No. La razón se calcula sobre el **precio**, y el error aquí es restar un fijo.' },
        ],
      },
      { tip: 'MC unitario = **precio − cv**. MC total = MC unitario × unidades. Razón MC = MC unitario ÷ **precio**.' },
    ],
    // La ecuación CVU y la utilidad meta
    [
      { text: 'El modelo **CVU** (costo-volumen-utilidad) cabe en una línea: **Utilidad = (Precio − cv) × Q − CF**.' },
      { text: 'Un puesto de tortas 🥪 tiene **$42,000** de fijos al mes y quiere ganar **$28,000**. Prueba precio, costo y ventas:' },
      {
        sim: {
          title: 'Utilidad meta del puesto de tortas',
          inputs: [
            { key: 'p', label: 'Precio por torta', min: 40, max: 80, step: 5, value: 60 },
            { key: 'v', label: 'Costo variable por torta', min: 15, max: 35, step: 5, value: 25 },
            { key: 'q', label: 'Tortas vendidas al mes', min: 1000, max: 3000, step: 100, value: 1500 },
          ],
          outputs: [
            { label: 'Margen por torta', calc: (x) => x.p - x.v },
            { label: 'Margen total', calc: (x) => (x.p - x.v) * x.q },
            { label: 'Utilidad de operación', calc: (x) => (x.p - x.v) * x.q - 42000, main: true },
          ],
          goal: {
            text: 'Llega a una utilidad de **$28,000 o más**.',
            check: (x) => (x.p - x.v) * x.q - 42000 >= 28000,
            done: 'Con $60 de precio y $25 de cv (margen $35) necesitas (42,000 + 28,000) ÷ 35 = **2,000 tortas**.',
          },
        },
      },
      {
        calc: {
          question: 'El frappé deja **$33** de margen. Los fijos son **$33,000** y quieren ganar **$16,500**. ¿Cuántos frappés deben vender?',
          answer: 1500, unit: 'frappés',
          hint: '(CF + utilidad meta) ÷ MC unitario.',
          why: '(33,000 + 16,500) ÷ 33 = 49,500 ÷ 33 = **1,500 frappés**.',
        },
      },
      {
        calc: {
          question: 'Con la misma meta y una razón MC de **60 %**, ¿cuántos **pesos de venta** necesitan?',
          answer: 82500,
          hint: '(CF + utilidad meta) ÷ razón en decimal (0.60).',
          why: '49,500 ÷ 0.60 = **$82,500**. Comprobación: 1,500 frappés × $55 = $82,500 ✔',
        },
      },
      {
        multi: {
          title: '¿Qué supone el modelo CVU? Marca todas.',
          items: [
            { text: 'El precio por unidad no cambia', ok: true },
            { text: 'El costo variable por unidad no cambia', ok: true },
            { text: 'Los fijos son constantes dentro del rango relevante', ok: true },
            { text: 'Lo que se produce se vende', ok: true },
            { text: 'Es una verdad absoluta que nunca falla', ok: false },
          ],
          why: 'Son **simplificaciones útiles**, no verdades absolutas. Si algo de eso cambia, recalcula.',
        },
      },
      { tip: 'Unidades meta = **(CF + utilidad meta) ÷ MC unitario**. Si sale con decimales, redondea hacia arriba.' },
    ],
    // Escenarios de qué pasa si y apalancamiento operativo
    [
      { text: 'Antes de bajar un precio o pagar un anuncio, haz la cuenta en papel. Recalcula la utilidad con **todos** los datos nuevos y compara.' },
      {
        rush: {
          title: 'Nevería 🍦: hoy vende 800 conos con margen de $24 y fijos de $12,000 (gana $7,200). ¿Conviene?',
          seconds: 60,
          labels: ['Conviene', 'No conviene'],
          items: [
            { text: 'Anuncio fijo de $3,000 y vende 1,000 conos', ans: 0 },
            { text: 'Anuncio fijo de $3,000 y vende 850 conos', ans: 1 },
            { text: 'Proveedor que sube el margen a $26, mismos 800 conos', ans: 0 },
            { text: 'Bajar el precio: margen de $20 y vende 900 conos', ans: 1 },
            { text: 'Bajar el precio: margen de $20 y vende 1,000 conos', ans: 0 },
            { text: 'La renta sube $1,000 y vende lo mismo', ans: 1 },
          ],
        },
      },
      { text: 'El **grado de apalancamiento operativo** (GAO) es como una lupa 🔍: como los fijos no cambian, cualquier cambio en ventas se nota más grande en la utilidad.' },
      {
        calc: {
          question: 'Un negocio tiene margen de contribución total de **$60,000** y utilidad de operación de **$20,000**. ¿Cuál es su **GAO**?',
          answer: 3, unit: 'veces',
          hint: 'MC total ÷ utilidad de operación.',
          why: '60,000 ÷ 20,000 = **3**. Un cambio en ventas se multiplica por 3 en la utilidad.',
        },
      },
      {
        ask: 'Con ese GAO de **3**, las ventas **bajan 10 %**. ¿Qué pasa con la utilidad?',
        options: [
          { text: 'Baja 10 %', reply: 'Eso sería sin lupa. Con GAO de 3, el efecto se multiplica por 3.' },
          { text: 'Baja más o menos 30 %', ok: true, reply: '¡Eso! 3 × 10 % = 30 %. La lupa funciona en las buenas **y en las malas**.' },
          { text: 'Sube 30 %', reply: 'Si las ventas bajan, la utilidad también baja, y más fuerte.' },
        ],
      },
      { tip: 'GAO = **MC total ÷ utilidad** (no ventas ÷ utilidad). Un GAO alto suele venir de muchos fijos: más ganancia en las buenas, más riesgo en las malas.' },
    ],
  ],
}
