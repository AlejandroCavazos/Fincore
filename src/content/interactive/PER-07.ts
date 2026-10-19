import type { InteractiveLesson } from './types'

export const intPER07: InteractiveLesson = {
  lessonId: 'PER-07',
  sections: [
    // ¿Cuánto cuesta usar dinero ajeno?
    [
      { text: 'Ramón es mecánico 🔧. Su compadre le pide **$6,000 prestados** por unos meses y le ofrece pagarle "algo extra".' },
      {
        ask: 'Cuando tú ahorras en un banco, ¿por qué el banco te paga algo?',
        options: [
          { text: 'Porque usa tu dinero mientras lo tiene', ok: true, reply: '¡Eso! Ese pago se llama **interés**: es como la **renta del dinero**.' },
          { text: 'Porque te quiere regalar dinero', reply: 'No es un regalo. Te paga porque **usa tu dinero** durante un tiempo: eso es el **interés**.' },
          { text: 'Porque cobra comisiones', reply: 'Las comisiones las cobra el banco, no las paga. Te paga **interés** porque **usa tu dinero**.' },
        ],
      },
      {
        text: 'Para calcular el interés necesitas 3 datos:\n💰 **Capital (C):** lo que prestas o ahorras al inicio.\n📈 **Tasa (i):** el porcentaje por periodo, en decimal (15% = 0.15).\n⏳ **Tiempo (t):** cuántos periodos pasan.',
      },
      { text: 'En el **interés simple** se calcula **siempre sobre el capital inicial**: **I = C × i × t**. Ojo: tasa y tiempo en la **misma unidad** (meses con meses, años con años).' },
      {
        match: {
          title: 'Une cada letra con lo que significa',
          pairs: [
            ['C', 'Lo que Ramón presta al inicio'],
            ['i', 'La tasa por periodo, en decimal'],
            ['t', 'Cuántos meses o años pasan'],
            ['I', 'Los pesos extra que cobra'],
          ],
        },
      },
      {
        calc: {
          question: 'Ramón presta $6,000 al 2% mensual de interés simple por 5 meses. ¿Cuántos pesos de interés cobra?',
          answer: 600,
          hint: 'I = C × i × t = 6,000 × 0.02 × 5.',
          why: '6,000 × 0.02 = 120 al mes. Por 5 meses: 120 × 5 = **$600**. Si usas 2 en vez de 0.02, te sale 60,000.',
        },
      },
      {
        ask: 'Al final, ¿cuánto le regresa el compadre en total?',
        options: [
          { text: '$6,600', ok: true, reply: '¡Bien! Monto = capital + interés = 6,000 + 600 = **$6,600**.' },
          { text: '$600', reply: 'Eso es solo el **interés**. El total suma el capital: 6,000 + 600 = **$6,600**.' },
          { text: '$6,000', reply: 'Eso es lo que prestó. Falta sumar el interés: 6,000 + 600 = **$6,600**.' },
        ],
      },
      { tip: 'Escribe la tasa en decimal (15% = 0.15) y fíjate qué te piden: ¿solo el **interés** o el **monto total**?' },
    ],
    // Intereses que generan intereses
    [
      { text: 'Ramón ahorra **$10,000** al 10% anual por 3 años. Con interés simple tendría **$13,000**. Pero en el banco le dicen: "aquí es **compuesto**".' },
      {
        ask: '¿Cuánto crees que tendrá con interés compuesto?',
        options: [
          { text: 'Más de $13,000', ok: true, reply: '¡Sí! Tendrá **$13,310**. Ahora verás por qué.' },
          { text: 'Exactamente $13,000', reply: 'Eso pasa con el simple. Con el compuesto tendrá **$13,310**: un poco más.' },
          { text: 'Menos de $13,000', reply: 'Con la misma tasa, el compuesto da **más**: $13,310.' },
        ],
      },
      { text: 'En el **compuesto**, cada año los intereses **se suman al capital** (eso es **capitalizar**). El siguiente año ganas sobre un saldo más grande: es una **bola de nieve** ☃️.\nAño 1: 10,000 × 1.10 = $11,000\nAño 2: 11,000 × 1.10 = $12,100\nAño 3: 12,100 × 1.10 = **$13,310**' },
      {
        sort: {
          title: '¿Simple o compuesto?',
          buckets: ['Simple', 'Compuesto'],
          items: [
            { text: 'Se calcula siempre sobre el capital inicial', bucket: 0, why: 'Así funciona el simple: el capital no crece.' },
            { text: 'Los intereses se suman al capital', bucket: 1, why: 'Eso es capitalizar: lo hace el compuesto.' },
            { text: 'Gana $1,000, luego $1,000, luego $1,000', bucket: 0, why: 'Mismo interés en pesos cada año: es simple.' },
            { text: 'Gana $1,000, luego $1,100, luego $1,210', bucket: 1, why: 'El interés en pesos crece cada año: es compuesto. La tasa es la misma; el saldo es mayor.' },
          ],
        },
      },
      {
        sim: {
          title: 'La bola de nieve de Ramón',
          inputs: [
            { key: 'c', label: 'Lo que ahorra al inicio', min: 5000, max: 20000, step: 1000, value: 10000 },
            { key: 'r', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 1, value: 10 },
            { key: 'n', label: 'Años sin retirar', min: 1, max: 10, step: 1, value: 3 },
          ],
          outputs: [
            { label: 'Con interés simple', calc: (x) => Math.round(x.c * (1 + (x.r / 100) * x.n) * 100) / 100 },
            { label: 'Con interés compuesto', calc: (x) => Math.round(x.c * Math.pow(1 + x.r / 100, x.n) * 100) / 100, main: true },
            { label: 'Lo que gana de más el compuesto', calc: (x) => Math.round((x.c * Math.pow(1 + x.r / 100, x.n) - x.c * (1 + (x.r / 100) * x.n)) * 100) / 100 },
          ],
          goal: {
            text: 'Haz que el compuesto le gane al simple por **$2,000 o más**.',
            check: (x) => x.c * Math.pow(1 + x.r / 100, x.n) - x.c * (1 + (x.r / 100) * x.n) >= 2000,
            done: 'Más años y más tasa hacen crecer la bola de nieve cada vez más rápido.',
          },
        },
      },
      {
        calc: {
          question: 'Ramón deposita $8,000 al 10% anual compuesto y no retira nada en 2 años. ¿Cuánto tendrá?',
          answer: 9680,
          hint: 'Año 1: 8,000 × 1.10. Año 2: ese resultado × 1.10.',
          why: 'Año 1: 8,000 × 1.10 = 8,800. Año 2: 8,800 × 1.10 = **$9,680**. Con simple serían 9,600: el compuesto también cobra sobre los $800 del año 1.',
        },
      },
      {
        order: {
          title: 'Arma la fórmula del compuesto',
          steps: ['M =', 'C ×', '(1 + i)', 'elevado a n'],
          done: '¡Listo! **M = C × (1 + i)^n**: el capital se multiplica por (1 + tasa) tantas veces como periodos.',
        },
      },
      { tip: 'El compuesto juega **a tu favor** cuando ahorras muchos años y **en tu contra** cuando no pagas una deuda: los intereses no pagados también generan intereses.' },
    ],
    // ¿Cada cuánto crece tu dinero?
    [
      { text: 'Ramón ve un anuncio: "**12% anual capitalizable mensualmente**". Suena raro, pero es fácil.' },
      {
        ask: 'Si es 12% al año y se capitaliza cada mes, ¿qué tasa se aplica cada mes?',
        options: [
          { text: '1%', ok: true, reply: '¡Exacto! 12% ÷ 12 meses = **1% por mes**.' },
          { text: '12%', reply: 'Ese es el anual. Al capitalizar cada mes se divide: 12% ÷ 12 = **1%**.' },
          { text: '144%', reply: 'Se divide, no se multiplica: 12% ÷ 12 = **1%** al mes.' },
        ],
      },
      { text: 'Cambia **dos cosas** siempre:\n➗ Tasa por periodo = tasa anual ÷ m\n✖️ Periodos = años × m\n**m** = veces al año: mensual 12, trimestral 4, semestral 2, anual 1.' },
      {
        calc: {
          question: 'Ramón invierte al 18% anual capitalizable trimestralmente por 2 años. ¿Cuántos periodos (n) hay?',
          answer: 8,
          unit: 'periodos',
          hint: 'Trimestral: m = 4. Periodos = años × m.',
          why: '2 años × 4 trimestres = **8 periodos**. La tasa por periodo sería 18% ÷ 4 = 4.5%.',
        },
      },
      { text: 'Mientras más seguido se capitaliza, más crece: $10,000 al 12% anual por 1 año da $11,200 si es anual y **$11,268.25** si es mensual.' },
      { text: '⚡ **Regla del 72:** 72 ÷ tasa anual (como número, no decimal) ≈ años para **duplicar** tu dinero con compuesto. Al 8%: 72 ÷ 8 ≈ 9 años.' },
      {
        calc: {
          question: 'Con una tasa de ejemplo de 6% anual compuesto, ¿en cuántos años, más o menos, se duplica el dinero de Ramón?',
          answer: 12,
          unit: 'años',
          hint: 'Divide 72 entre 6 (no entre 0.06).',
          why: '72 ÷ 6 = **12 años**, aproximadamente. Si divides entre 0.06 te sale 1,200: la tasa va como número entero.',
        },
      },
      { tip: 'Ajusta **tasa y periodos juntos**. La regla del 72 es una **estimación**, no un cálculo exacto.' },
    ],
  ],
}
