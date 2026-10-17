import type { InteractiveLesson } from './types'

export const intCOS11: InteractiveLesson = {
  lessonId: 'COS-11',
  sections: [
    // Números para decidir adentro
    [
      { text: 'Lupita tiene 3 taquerías 🌮. Su banco le pide estados financieros cada año. Pero ella quiere saber **cada lunes** qué sucursal deja más.' },
      {
        ask: '¿Qué contabilidad le da ese reporte de cada lunes?',
        options: [
          { text: 'La administrativa', ok: true, reply: '¡Eso! Es información para decidir **adentro** del negocio.' },
          { text: 'La financiera', reply: 'La financiera hace estados generales para los de **afuera**, como el banco. El reporte de cada lunes es **administrativa**.' },
          { text: 'La fiscal', reply: 'La fiscal es para los impuestos. Para decidir qué sucursal conviene, se usa la **administrativa**.' },
        ],
      },
      { text: '👥 **Para quién:** administrativa → adentro; financiera → afuera.\n📏 **Reglas:** administrativa → el formato que más ayude; financiera → NIF obligatorias.\n🔮 **Tiempo:** administrativa → pasado y futuro; financiera → sobre todo pasado.\n🔍 **Detalle:** administrativa → por sucursal o producto; financiera → la empresa entera.' },
      {
        sort: {
          title: '¿Administrativa o financiera?',
          buckets: ['Administrativa', 'Financiera'],
          items: [
            { text: 'Reporte semanal de ventas por sucursal para Lupita', bucket: 0, why: 'Es para uso interno y por sucursal.' },
            { text: 'Estados financieros anuales que pide el banco', bucket: 1, why: 'Son para un usuario externo.' },
            { text: 'Proyección de ventas del próximo año', bucket: 0, why: 'Mira al futuro: típico de la administrativa.' },
            { text: 'Debe seguir las NIF', bucket: 1, why: 'La administrativa no está obligada a seguir las NIF.' },
            { text: 'Usa el formato que más ayude a decidir', bucket: 0, why: 'Como es interna, tiene formato libre.' },
            { text: 'Presenta a la empresa en conjunto', bucket: 1, why: 'Así trabaja la financiera.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Cuáles son reportes de contabilidad administrativa? Marca todos.',
          items: [
            { text: 'Costo de cada taco para fijar precios', ok: true },
            { text: 'Presupuesto de gastos del próximo trimestre', ok: true },
            { text: 'Margen por sucursal', ok: true },
            { text: 'Estados financieros anuales para el banco', ok: false },
          ],
          why: 'Los tres primeros son internos, por producto o sucursal, o miran al futuro. Los estados anuales para el banco son de la **financiera**.',
        },
      },
      { tip: 'Administrativa: **adentro**, formato libre, futuro, por partes. Financiera: **afuera**, NIF, empresa entera.' },
    ],
    // Planear, controlar y decidir
    [
      { text: 'Lupita usa sus números para tres cosas 🎯:\n📝 **Planear:** fijar metas y cómo lograrlas.\n🔎 **Controlar:** comparar lo real con lo planeado y corregir a tiempo.\n🤔 **Decidir:** elegir entre alternativas.' },
      {
        match: {
          title: 'Une cada palabra con lo que hace Lupita',
          pairs: [
            ['Planear', 'Fijar la meta de vender 9,000 tacos al mes'],
            ['Controlar', 'Revisar cada semana cuánto vendió y cuánto gastó en carne'],
            ['Decidir', 'Evaluar si abrir también en la noche'],
          ],
        },
      },
      {
        sort: {
          title: '¿Planear, controlar o decidir?',
          buckets: ['Planear', 'Controlar', 'Decidir'],
          items: [
            { text: 'Hacer el presupuesto del próximo año', bucket: 0, why: 'Fijar metas y cómo lograrlas es planear.' },
            { text: 'Cada viernes, comparar el gas gastado en cada sucursal contra lo presupuestado', bucket: 1, why: 'Comparar real contra plan y pedir explicaciones es controlar.' },
            { text: 'Elegir entre comprar o rentar un trompo nuevo', bucket: 2, why: 'Elegir entre alternativas es decidir.' },
            { text: 'Fijar cuánto debe vender cada sucursal', bucket: 0, why: 'Es fijar una meta: planear.' },
            { text: 'Corregir a tiempo un gasto que se salió del plan', bucket: 1, why: 'Corregir a tiempo es controlar.' },
          ],
        },
      },
      {
        ask: 'En empresas medianas y grandes, ¿quién suele coordinar estos reportes internos?',
        options: [
          { text: 'El contralor', ok: true, reply: '¡Así es! Diseña los reportes internos, cuida los costos y apoya a la dirección. En un negocio pequeño lo hace el dueño o su contador.' },
          { text: 'El banco', reply: 'El banco está afuera. Adentro, quien coordina los reportes internos es el **contralor**.' },
          { text: 'Los clientes', reply: 'Los clientes no ven los reportes internos. Los coordina el **contralor**.' },
        ],
      },
      { tip: 'Planear = **metas**. Controlar = **comparar y corregir**. Decidir = **elegir**.' },
    ],
    // ¿Cuánto cuesta cada producto?
    [
      { text: 'Lupita también embotella su salsa 🌶️. La duda: los fijos de la fábrica (renta de la nave, sueldo del supervisor), ¿se reparten entre los frascos o se restan completos en el mes?' },
      { text: '🧱 **Costeo absorbente:** cada frasco carga sus variables **y** su parte de los fijos de fábrica. Es el que piden los estados para terceros.\n⚡ **Costeo directo:** cada frasco solo carga sus variables; los fijos de fábrica se restan completos en el mes.\nEn los dos, los gastos de operación se restan completos.' },
      {
        calc: {
          question: 'Hizo **5,000** frascos. Variable: **$20** por frasco. Fijos de fábrica: **$25,000**. ¿Cuál es el costo por frasco con **costeo absorbente**?',
          answer: 25,
          hint: 'variable + fijos ÷ frascos producidos: 20 + 25,000 ÷ 5,000.',
          why: '25,000 ÷ 5,000 = $5 de fijo por frasco. 20 + 5 = **$25**.',
        },
      },
      {
        calc: {
          question: 'Vendió **4,000** frascos a **$50**. Gastos fijos de operación: **$10,000**. ¿Cuál es la utilidad con **costeo directo**?',
          answer: 85000,
          hint: '4,000 × (50 − 20) − 25,000 − 10,000.',
          why: 'Margen: 4,000 × 30 = 120,000. Menos todos los fijos (25,000 + 10,000) = **$85,000**.',
        },
      },
      {
        calc: {
          question: '¿Y la utilidad con **costeo absorbente**?',
          answer: 90000,
          hint: '4,000 × (50 − 25) − 10,000.',
          why: '4,000 × 25 = 100,000. Menos 10,000 de operación = **$90,000**.',
        },
      },
      { text: '¿Por qué $5,000 más? Quedaron **1,000** frascos en bodega, cada uno con **$5** de fijos «guardados». Si produces más de lo que vendes, el absorbente muestra **más utilidad**.' },
      {
        calc: {
          question: 'Otro mes: fijos de fábrica **$30,000**, produjo **6,000** frascos y vendió **4,800**. ¿Por cuánto supera la utilidad absorbente a la directa?',
          answer: 6000,
          hint: 'Fijo por frasco = 30,000 ÷ 6,000. Luego × frascos que quedaron (6,000 − 4,800).',
          why: '30,000 ÷ 6,000 = $5 por frasco. Quedaron 1,200 frascos: 1,200 × 5 = **$6,000**.',
        },
      },
      { tip: 'Producción = ventas → las dos utilidades son **iguales**. Produces más de lo que vendes → gana el **absorbente**. Vendes más de lo que produces → gana el **directo**.' },
    ],
  ],
}
