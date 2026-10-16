import type { InteractiveLesson } from './types'

export const intCOS14: InteractiveLesson = {
  lessonId: 'COS-14',
  sections: [
    // Costos relevantes, hundidos y de oportunidad
    [
      { text: 'Un **costo relevante** es **futuro** y **cambia** según lo que elijas. Si será igual decidas lo que decidas, no ayuda a decidir.' },
      {
        sort: {
          title: 'La cafetería ☕ piensa cambiar su cafetera vieja. ¿Relevante o irrelevante?',
          buckets: ['Relevante', 'Irrelevante'],
          items: [
            { text: 'Lo que costó la cafetera vieja hace dos años', bucket: 1, why: 'Ya se pagó y no vuelve: es **hundido**.' },
            { text: 'El precio de la cafetera nueva', bucket: 0, why: 'Es futuro y solo se paga si eliges cambiarla.' },
            { text: 'La renta del local, que se paga igual en ambos casos', bucket: 1, why: 'Es fijo y no cambia con la decisión.' },
            { text: 'El ahorro de luz de la cafetera nueva', bucket: 0, why: 'Es futuro y cambia según la opción.' },
            { text: 'El estudio de mercado que ya se pagó', bucket: 1, why: 'Hundido: ya se gastó.' },
            { text: 'La renta que te pagarían si rentas el espacio libre', bucket: 0, why: 'Es un **costo de oportunidad**: sí es relevante.' },
          ],
        },
      },
      {
        ask: 'Pagaste **$15,000** por un curso de repostería 🧁 y dudas si abrir tu negocio. ¿Cuánto deben pesar esos $15,000 en tu decisión?',
        options: [
          { text: 'Mucho: ya invertí tanto que no puedo dejarlo', reply: 'Ese es uno de los errores más comunes. Esos $15,000 no vuelven decidas lo que decidas.' },
          { text: 'Nada: es un costo hundido', ok: true, reply: '¡Bien! Lo relevante son los ingresos y costos que vienen, y el sueldo al que renunciarías.' },
          { text: 'Hay que sumarlo al costo de abrir', reply: 'No: ya se pagó. Solo cuentan los costos **futuros** que cambian entre opciones.' },
        ],
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
      { tip: 'El costo de oportunidad **no aparece en la contabilidad**, pero sí es relevante.' },
    ],
    // Pedido especial, hacer o comprar y eliminar una línea
    [
      { text: '**Costo variable**: crece con cada pieza. **Costo fijo**: lo pagas igual hagas 10 o 1,000. **Margen de contribución**: lo que queda de la venta tras los variables.' },
      { text: 'Un taller de playeras 👕 tiene **máquinas libres**. Un cliente ofrece un pedido especial a menor precio. Cada playera cuesta **$90 variables** (y **$120** «con fijos»).' },
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
            done: 'Con capacidad ociosa, basta con que el precio cubra los **costos variables** (y extras del pedido). Los fijos se pagan de todos modos, así que $100 conviene aunque sea menos que $120.',
          },
        },
      },
      {
        calc: {
          question: '**Hacer o comprar:** fabricar 1,000 piezas cuesta **$30** variables c/u, y dejarías de pagar **$8,000** de fijos evitables si compras. El proveedor cobra **$36** c/u. ¿Cuánto te cuesta **de más** hacerlas tú en vez de comprarlas?',
          answer: 2000,
          hint: 'hacer = 30 × 1,000 + 8,000; comprar = 36 × 1,000. Resta.',
          why: 'Comprar: $36,000. Hacer: $30,000 + $8,000 = $38,000. Hacer cuesta **$2,000** más: conviene **comprar** (si la calidad y puntualidad del proveedor son buenas).',
        },
      },
      {
        ask: 'La línea de gorras muestra pérdida. Su margen de contribución es **$50,000** y sus fijos **evitables** son **$20,000**; el resto de sus fijos (renta, dirección) seguirían igual. ¿La eliminas?',
        options: [
          { text: 'Sí, muestra pérdida', reply: 'La pérdida viene de fijos generales que seguirán existiendo. Al eliminarla pierdes $50,000 de margen y solo te ahorras $20,000.' },
          { text: 'No: eliminarla bajaría la utilidad total en $30,000', ok: true, reply: '¡Exacto! Efecto de eliminar = fijos evitables − margen = 20,000 − 50,000 = −$30,000.' },
          { text: 'Da igual', reply: 'No da igual: el margen ($50,000) es mayor que lo que te ahorras ($20,000).' },
        ],
      },
      { tip: 'Eliminar una línea conviene solo si sus **fijos evitables** son mayores que su **margen de contribución**.' },
    ],
    // Recursos limitados y procesar más o vender
    [
      { text: 'Cuando un recurso es escaso (horas de horno, metros de anaquel), gana el producto con más **margen por unidad del recurso escaso**, no el de más margen por pieza.' },
      {
        calc: {
          question: 'El horno 🔥 está limitado. Un pastel deja **$240** de margen y usa **3 horas** de horno. ¿Cuánto margen deja **por hora** de horno?',
          answer: 80,
          hint: 'margen por pieza ÷ horas que usa.',
          why: '$240 ÷ 3 = **$80 por hora**.',
        },
      },
      {
        ask: 'Con el horno limitado: el pastel deja **$80 por hora** y las galletas **$120 por hora**. ¿Qué horneas primero?',
        options: [
          { text: 'Pasteles, porque dejan más por pieza', reply: 'Con un recurso escaso importa el margen **por hora de horno**, no por pieza.' },
          { text: 'Galletas, hasta cubrir su demanda; luego pasteles', ok: true, reply: '¡Así es! Primero el de mayor margen por unidad del recurso escaso, hasta cubrir su demanda, y luego el siguiente.' },
          { text: 'Mitad y mitad', reply: 'Repartir parejo deja dinero en la mesa. Prioriza el que deja más por hora.' },
        ],
      },
      {
        calc: {
          question: 'Una panadería vende **200** panes a **$10**. Si los rellena, los vende a **$16**, con un costo adicional de **$4** c/u. ¿Cuánto **gana de más** si los procesa?',
          answer: 400,
          hint: '(precio después − precio actual − costo adicional) × unidades.',
          why: '(16 − 10 − 4) × 200 = **$400**. Lo que costó hacer el pan hasta ese punto es hundido: no cuenta.',
        },
      },
      {
        multi: {
          title: '¿Qué **factores cualitativos** debes revisar además de los números? Marca todos.',
          items: [
            { text: 'Calidad y puntualidad del proveedor', ok: true },
            { text: 'El efecto en clientes actuales si das precios bajos a otros', ok: true },
            { text: 'El ánimo del personal', ok: true },
            { text: 'Depender de un solo proveedor', ok: true },
            { text: 'Lo que ya se gastó en el pasado', ok: false },
          ],
          why: 'Lo ya gastado es hundido. Los demás no salen en el cálculo, pero pueden cambiar la decisión.',
        },
      },
      { tip: 'Solo cuentan los **ingresos y costos futuros que cambian** entre alternativas, más el costo de oportunidad y los factores cualitativos.' },
    ],
  ],
}
