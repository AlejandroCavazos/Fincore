import type { InteractiveLesson } from './types'

export const intCOS14: InteractiveLesson = {
  lessonId: 'COS-14',
  sections: [
    // ¿Qué costos sí cuentan?
    [
      { text: 'Sofía tiene un taller de playeras 👕. Hace dos años compró una máquina de estampar en **$80,000**. Hoy piensa cambiarla por una más rápida.' },
      {
        ask: '¿Cuánto deben pesar esos $80,000 en su decisión?',
        options: [
          { text: 'Nada: ya se pagaron y no vuelven', ok: true, reply: '¡Bien! Es un **costo hundido**: se gastó decida lo que decida.' },
          { text: 'Mucho: ya invirtió tanto que no puede dejarla', reply: 'Es uno de los errores más comunes. Esos $80,000 no vuelven, cambie o no la máquina: **no deben pesar**.' },
          { text: 'Hay que sumarlos al costo de la nueva', reply: 'No: ya se pagaron. Solo cuentan los costos **que vienen** y que cambian según lo que elija.' },
        ],
      },
      { text: 'La regla:\n✅ **Relevante:** es futuro y cambia según lo que elijas.\n🕳️ **Hundido:** ya se pagó; nunca cuenta.\n🔁 **Costo de oportunidad:** lo que dejas de ganar por elegir otra opción. No sale en la contabilidad, pero **sí cuenta**.' },
      {
        sort: {
          title: 'Sofía decide si cambia la máquina. ¿Relevante o irrelevante?',
          buckets: ['Relevante', 'Irrelevante'],
          items: [
            { text: 'Los $80,000 que costó la máquina vieja', bucket: 1, why: 'Ya se pagó y no vuelve: es **hundido**.' },
            { text: 'El precio de la máquina nueva', bucket: 0, why: 'Es futuro y solo se paga si elige cambiarla.' },
            { text: 'La renta del taller, que se paga igual en ambos casos', bucket: 1, why: 'Es fija y no cambia con la decisión.' },
            { text: 'El ahorro de luz de la máquina nueva', bucket: 0, why: 'Es futuro y cambia según la opción.' },
            { text: 'Un estudio de mercado que ya pagó', bucket: 1, why: 'Hundido: ya se gastó.' },
            { text: 'La renta que le pagarían por el rincón que queda libre', bucket: 0, why: 'Es un **costo de oportunidad**: sí es relevante.' },
          ],
        },
      },
      {
        match: {
          title: 'Une cada costo con su significado',
          pairs: [
            ['Costo hundido', 'Ya pagado e irrecuperable'],
            ['Costo de oportunidad', 'Lo que dejas de ganar por elegir otra opción'],
            ['Costo evitable', 'Desaparece si eliges una opción'],
            ['Costo relevante', 'Futuro y diferente entre alternativas'],
          ],
        },
      },
      { tip: 'Pregunta clave: **¿este costo cambia según lo que elija, de aquí en adelante?** Si no, no cuenta.' },
    ],
    // ¿Acepto, hago, compro o cierro?
    [
      { text: 'Tres palabras clave:\n📈 **Costo variable:** crece con cada playera (tela, tinta).\n🏠 **Costo fijo:** lo pagas igual hagas 10 o 1,000 (renta).\n💵 **Margen de contribución:** lo que queda de la venta tras los variables.' },
      { text: 'Un hotel le pide a Sofía un **pedido especial** a un precio menor que el normal. Cada playera cuesta **$90 variables** y **$120** «con fijos». Sus máquinas tienen tiempo libre.' },
      {
        ask: 'Si el hotel paga **$100** por playera, ¿le conviene aceptar?',
        options: [
          { text: 'Sí: $100 cubre los $90 variables y la renta se paga igual', ok: true, reply: '¡Exacto! Con máquinas libres, cada playera suma $10. Los fijos se pagan de todos modos.' },
          { text: 'No: perdería $20 por playera', reply: 'Los $30 de fijos por playera se pagan acepte o no. Lo que cambia es solo el variable: gana **$10 por playera**.' },
          { text: 'Solo si paga $120 o más', reply: 'Con máquinas libres basta con cubrir los **variables** ($90). A $100 ya suma utilidad.' },
        ],
      },
      {
        sim: {
          title: 'Pedido especial de playeras',
          inputs: [
            { key: 'p', label: 'Precio que ofrece el cliente', min: 60, max: 150, step: 10, value: 80 },
            { key: 'q', label: 'Playeras del pedido', min: 100, max: 1000, step: 100, value: 500 },
          ],
          outputs: [
            { label: 'Margen por playera (precio − $90)', calc: (x) => x.p - 90 },
            { label: 'Efecto en la utilidad', calc: (x) => (x.p - 90) * x.q, main: true },
          ],
          goal: {
            text: 'Encuentra un pedido que **sume utilidad** al taller.',
            check: (x) => (x.p - 90) * x.q > 0,
            done: 'Con capacidad ociosa basta con que el precio cubra los **costos variables** (y los extras del pedido).',
          },
        },
      },
      {
        calc: {
          question: 'El hotel acepta pagar **$100** por **500** playeras, pero quiere un empaque especial de **$4** por pieza. ¿Cuánto **aumenta la utilidad** de Sofía?',
          answer: 3000,
          hint: '(precio − variable − extra) × playeras.',
          why: '(100 − 90 − 4) × 500 = 6 × 500 = **$3,000**. El empaque es un costo extra del pedido: sí cuenta.',
        },
      },
      {
        calc: {
          question: '**¿Hacer o comprar?** Sofía hace **1,000** etiquetas a **$30** variables c/u, y si las compra se ahorra **$8,000** de fijos (un ayudante). Un proveedor las vende a **$36** c/u. ¿Cuánto le cuesta **de más** hacerlas ella?',
          answer: 2000,
          hint: 'Hacer = 30 × 1,000 + 8,000. Comprar = 36 × 1,000. Resta.',
          why: 'Hacer: $30,000 + $8,000 = $38,000. Comprar: $36,000. Hacerlas cuesta **$2,000** más: conviene comprar, si el proveedor es bueno y puntual.',
        },
      },
      {
        ask: 'La línea de gorras de Sofía «muestra pérdida». Deja **$50,000** de margen de contribución y, si la cierra, solo se ahorra **$20,000** de fijos; la renta seguiría igual. ¿La cierra?',
        options: [
          { text: 'No: cerrarla bajaría la utilidad total en $30,000', ok: true, reply: '¡Exacto! Pierde $50,000 de margen y solo se ahorra $20,000: 20,000 − 50,000 = −$30,000.' },
          { text: 'Sí, porque muestra pérdida', reply: 'La pérdida viene de fijos que seguirán existiendo. Al cerrarla pierde $50,000 de margen y se ahorra solo $20,000: **baja $30,000**.' },
          { text: 'Da igual', reply: 'No da igual: el margen ($50,000) es mayor que lo que se ahorra ($20,000). Cerrarla **baja $30,000** la utilidad.' },
        ],
      },
      { tip: 'Cerrar una línea conviene solo si sus **fijos evitables** son mayores que su **margen de contribución**.' },
    ],
    // ¿Qué hacer si algo escasea?
    [
      { text: 'La máquina de estampar de Sofía solo tiene **100 horas** libres al mes ⏳. La **sudadera** deja **$120** de margen y usa **4 horas**; la **playera** deja **$50** y usa **1 hora**.' },
      {
        ask: '¿Qué estampa primero?',
        options: [
          { text: 'Playeras: dejan más dinero por cada hora de máquina', ok: true, reply: '¡Así es! Playera: $50 por hora. Sudadera: 120 ÷ 4 = $30 por hora.' },
          { text: 'Sudaderas: dejan más por pieza', reply: 'Por pieza sí, pero usan 4 horas. Por **hora de máquina** la playera deja $50 y la sudadera $30.' },
          { text: 'Mitad y mitad', reply: 'Repartir parejo deja dinero en la mesa. Primero va la que deja más **por hora**: la playera.' },
        ],
      },
      { text: 'Cuando algo escasea (horas de máquina, kilos, anaquel), gana el producto con más **margen por unidad del recurso escaso**. Se hace primero ese, hasta cubrir su demanda, y luego el siguiente.' },
      {
        calc: {
          question: 'Este mes Sofía puede vender como máximo **60 playeras** y **30 sudaderas**. Con sus **100 horas**, ¿cuál es el **margen total máximo**?',
          answer: 4200,
          hint: 'Primero 60 playeras (60 horas). Con las 40 horas que sobran, ¿cuántas sudaderas de 4 horas caben?',
          why: '60 playeras × $50 = $3,000 y usan 60 horas. Sobran 40 horas = 10 sudaderas × $120 = $1,200. Total **$4,200**. Si hiciera solo sudaderas: 25 × 120 = $3,000.',
        },
      },
      { text: '**¿Vender así o procesar más?** Compara solo el **ingreso extra** contra el **costo extra**. Lo que ya costó llegar a ese punto es hundido.' },
      {
        calc: {
          question: 'Sofía vende **200** playeras lisas a **$100**. Bordadas se venden a **$130**, con un costo adicional de **$20** c/u. ¿Cuánto **gana de más** si las borda?',
          answer: 2000,
          hint: '(precio después − precio actual − costo adicional) × unidades.',
          why: '(130 − 100 − 20) × 200 = **$2,000**. Lo que costó hacer la playera lisa no cuenta: se gasta igual.',
        },
      },
      {
        multi: {
          title: '¿Qué **factores cualitativos** debe revisar además de los números? Marca todos.',
          items: [
            { text: 'Calidad y puntualidad del proveedor', ok: true },
            { text: 'El efecto en clientes actuales si da precios bajos a otros', ok: true },
            { text: 'El ánimo del personal', ok: true },
            { text: 'Depender de un solo proveedor', ok: true },
            { text: 'Lo que ya se gastó en el pasado', ok: false },
          ],
          why: 'Lo ya gastado es hundido. Los demás no salen en el cálculo, pero pueden cambiar la decisión.',
        },
      },
    ],
  ],
}
