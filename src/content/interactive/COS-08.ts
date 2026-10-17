import type { InteractiveLesson } from './types'

export const intCOS08: InteractiveLesson = {
  lessonId: 'COS-08',
  sections: [
    // ¿Cuánto te deja cada venta?
    [
      { text: 'Sofi vende frappés 🥤 a **$55**. Cada uno lleva **$22** de leche, hielo y vaso. Y cada mes paga la renta.' },
      {
        ask: '¿Sofi gana $55 con cada frappé?',
        options: [
          { text: 'No: primero paga lo que lleva el frappé', ok: true, reply: '¡Exacto! De los $55, $22 se van en lo que lleva. Le quedan $33.' },
          { text: 'Sí, $55 completos', reply: 'Cada frappé lleva leche, hielo y vaso ($22). Le quedan **$33**, no $55.' },
          { text: 'Sí, porque la renta ya la pagó', reply: 'Aunque la renta esté pagada, cada frappé lleva $22 de ingredientes y vaso. Le quedan **$33**.' },
        ],
      },
      { text: 'Eso que queda es el **margen de contribución**: precio − costos **variables**. Ese dinero **contribuye** primero a pagar los fijos (la renta) y, cuando ya los cubrió, es utilidad.' },
      {
        sort: {
          title: '¿Se resta para sacar el margen de contribución?',
          buckets: ['Sí: es variable', 'No: es fijo'],
          items: [
            { text: 'Leche y hielo de cada frappé', bucket: 0, why: 'Cada frappé los lleva: costo variable.' },
            { text: 'Renta del local', bucket: 1, why: 'Es igual venda lo que venda: los fijos se restan después, del total.' },
            { text: 'Vaso y popote', bucket: 0, why: 'Uno por frappé: variable.' },
            { text: 'Sueldo fijo de la ayudante', bucket: 1, why: 'Es fijo: no entra en el margen de contribución.' },
            { text: 'Comisión por cada venta en una app de entregas', bucket: 0, why: 'Se paga por cada venta: variable.' },
          ],
        },
      },
      {
        calc: {
          question: 'Si Sofi vende **1,000** frappés con margen de **$33**, ¿cuál es su **margen de contribución total**?',
          answer: 33000,
          hint: 'margen por unidad × unidades vendidas.',
          why: '33 × 1,000 = **$33,000** para pagar fijos y ganar.',
        },
      },
      {
        calc: {
          question: 'También se ve como porcentaje del precio: margen ÷ precio. ¿Cuál es la **razón de margen** del frappé, en %?',
          answer: 60, unit: '%',
          hint: '33 ÷ 55 × 100.',
          why: '33 ÷ 55 = 0.60 → **60 %**. De cada $100 vendidos, $60 van a cubrir fijos y generar utilidad.',
        },
      },
      {
        ask: 'Un amigo de Sofi saca el margen así: precio − costo variable − **renta**. ¿Qué opinas?',
        options: [
          { text: 'Está bien: hay que restar todo', reply: 'El margen de contribución solo resta los **variables**. La renta es fija y se resta después, del total.' },
          { text: 'Está mal: la renta es fija y se resta después', ok: true, reply: '¡Correcto! Primero el margen (solo variables); luego, del margen total, restas los fijos.' },
          { text: 'Está mal: debió dividir entre el costo variable', reply: 'No hay que dividir. El error es restar la renta: el margen solo resta los **variables**.' },
        ],
      },
      { tip: 'Margen por unidad = **precio − variable**. Margen total = margen × unidades. Razón = margen ÷ **precio**.' },
    ],
    // ¿Cuánto vender para ganar tanto?
    [
      { text: 'Sofi paga **$33,000** de fijos al mes. Su negocio cabe en una línea 👇' },
      { text: '🧮 **Utilidad = margen por unidad × unidades − fijos**\n🎯 **Unidades para una meta = (fijos + meta) ÷ margen por unidad**\n💵 **Ventas en pesos para la meta = (fijos + meta) ÷ razón de margen**' },
      {
        calc: {
          question: 'Este mes Sofi vendió **1,200** frappés con margen de **$33**. ¿Cuál fue su **utilidad**?',
          answer: 6600,
          hint: '33 × 1,200 − 33,000.',
          why: '33 × 1,200 = 39,600. Menos 33,000 de fijos = **$6,600**.',
        },
      },
      {
        calc: {
          question: 'Sofi quiere ganar **$16,500** al mes. ¿Cuántos frappés debe vender?',
          answer: 1500, unit: 'frappés',
          hint: '(33,000 + 16,500) ÷ 33.',
          why: '(33,000 + 16,500) ÷ 33 = 49,500 ÷ 33 = **1,500 frappés**.',
        },
      },
      {
        calc: {
          question: 'Con la misma meta y razón de margen de **60 %**, ¿cuántos **pesos** debe vender?',
          answer: 82500,
          hint: '49,500 ÷ 0.60.',
          why: '49,500 ÷ 0.60 = **$82,500**. Comprobación: 1,500 frappés × $55 = $82,500 ✔',
        },
      },
      {
        sim: {
          title: 'Sofi solo puede hacer 1,200 frappés al mes',
          inputs: [
            { key: 'p', label: 'Precio por frappé', min: 45, max: 70, step: 5, value: 55 },
            { key: 'v', label: 'Costo variable por frappé', min: 15, max: 30, step: 1, value: 22 },
            { key: 'q', label: 'Frappés vendidos al mes (máximo 1,200)', min: 800, max: 1200, step: 100, value: 1000 },
          ],
          outputs: [
            { label: 'Margen por frappé', calc: (x) => x.p - x.v },
            { label: 'Margen total', calc: (x) => (x.p - x.v) * x.q },
            { label: 'Utilidad', calc: (x) => (x.p - x.v) * x.q - 33000, main: true },
          ],
          goal: {
            text: 'Llega a **$16,500 o más** de utilidad vendiendo **1,200 frappés o menos**.',
            check: (x) => x.q <= 1200 && (x.p - x.v) * x.q - 33000 >= 16500,
            done: 'Si no puedes vender más, sube el margen: mejor precio o menor costo variable.',
          },
        },
      },
      { tip: 'Si las unidades salen con decimales, redondea **hacia arriba**. El modelo supone que precio, variable por unidad y fijos no cambian.' },
    ],
    // ¿Te conviene bajar el precio?
    [
      { text: 'Sofi vende **1,500** frappés con margen de **$33** y fijos de **$33,000**: gana **$16,500**. Piensa bajar el precio $5 para vender más. Antes de hacerlo, haz la cuenta en papel ✏️.' },
      {
        calc: {
          question: 'Si baja $5, el margen queda en **$28**, y espera vender **1,800**. ¿Cuál sería su **utilidad**?',
          answer: 17400,
          hint: 'nuevo margen × nuevas unidades − fijos: 28 × 1,800 − 33,000.',
          why: '28 × 1,800 = 50,400. Menos 33,000 = **$17,400**. Sube de $16,500 a $17,400: sí le conviene.',
        },
      },
      {
        rush: {
          title: 'Hoy gana $16,500 (1,500 frappés, margen $33, fijos $33,000). ¿Conviene?',
          seconds: 60,
          labels: ['Conviene', 'No conviene'],
          items: [
            { text: 'Anuncio fijo de $3,000 y vende 1,600', ans: 0 },
            { text: 'Anuncio fijo de $3,000 y vende 1,550', ans: 1 },
            { text: 'Proveedor más barato: margen de $35, mismos 1,500', ans: 0 },
            { text: 'Baja el precio: margen de $28 y vende 1,700', ans: 1 },
            { text: 'Baja el precio: margen de $28 y vende 2,000', ans: 0 },
            { text: 'La renta sube $1,000 y vende lo mismo', ans: 1 },
          ],
        },
      },
      { text: 'El **grado de apalancamiento operativo** (GAO) es como una lupa 🔍: como los fijos no cambian, un cambio en ventas se nota más grande en la utilidad.\n**GAO = margen total ÷ utilidad**' },
      {
        calc: {
          question: 'Con 1,500 frappés, Sofi tiene margen total de **$49,500** y utilidad de **$16,500**. ¿Cuál es su **GAO**?',
          answer: 3, unit: 'veces',
          hint: 'margen total ÷ utilidad.',
          why: '49,500 ÷ 16,500 = **3**. Un cambio en ventas se multiplica por 3 en la utilidad.',
        },
      },
      {
        ask: 'Con GAO de **3**, las ventas de Sofi **bajan 10 %**. ¿Qué pasa con su utilidad?',
        options: [
          { text: 'Baja 10 %', reply: 'Eso sería sin lupa. Con GAO de 3, el efecto se multiplica por 3: baja **30 %**.' },
          { text: 'Baja más o menos 30 %', ok: true, reply: '¡Eso! 3 × 10 % = 30 %. La lupa funciona en las buenas **y en las malas**.' },
          { text: 'Sube 30 %', reply: 'Si las ventas bajan, la utilidad también baja, y más fuerte: **30 %**.' },
        ],
      },
      { tip: 'Antes de decidir, recalcula la utilidad con **todos** los datos nuevos y compara. Muchos fijos = GAO alto: más ganancia en las buenas, más riesgo en las malas.' },
    ],
  ],
}
