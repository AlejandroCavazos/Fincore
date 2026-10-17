import type { InteractiveLesson } from './types'

const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'
const SUBE_AP = 'Sube el activo y sube el pasivo'
const SUBE_AC = 'Sube el activo y sube el capital'
const BAJAN = 'Bajan el activo y el pasivo'

const pepsCosto = (n: number) => (n <= 10 ? n * 100 : 1000 + (n - 10) * 120)

export const intCON04: InteractiveLesson = {
  lessonId: 'CON-04',
  sections: [
    // La capa básica: anotar y cuadrar
    [
      { text: 'Lupita abrió una paletería 🍦. Quiere un préstamo y el banco le pide **sus números**.' },
      {
        ask: '¿Para quién hace sus reportes la **contabilidad financiera**?',
        options: [
          { text: 'Para gente de fuera: bancos, socios, inversionistas', ok: true, reply: '¡Eso! Son reportes para quienes deciden desde **fuera** del negocio.' },
          { text: 'Solo para Lupita', reply: 'Lupita también los usa, pero la financiera se hace para gente de **fuera**: bancos, socios, inversionistas.' },
          { text: 'Solo para calcular impuestos', reply: 'Eso es la contabilidad fiscal. La financiera es para gente de **fuera**: bancos, socios, inversionistas.' },
        ],
      },
      {
        text: 'Se aprende en **tres capas**, como las mates:\n🧮 **Básica:** las sumas.\n📐 **Intermedia:** las ecuaciones.\n🚀 **Avanzada:** el cálculo.',
      },
      { text: 'La **básica** es el lenguaje: **Activo = Pasivo + Capital**, el **cargo** (lado izquierdo) y el **abono** (lado derecho).' },
      {
        balance: {
          title: 'La paletería de Lupita',
          start: { a: 50000, p: 10000, c: 40000 },
          ops: [
            { story: 'Compra un congelador de **$15,000** en efectivo.', options: [{ text: CAMBIO, ok: true }, { text: SUBE_AP }, { text: BAJAN }], d: { a: 0, p: 0, c: 0 }, why: 'Sube Mobiliario y equipo y baja Caja por lo mismo. El total de activos no cambia.' },
            { story: 'Compra fruta y leche **a crédito** por **$4,000**.', options: [{ text: SUBE_AC }, { text: SUBE_AP, ok: true }, { text: CAMBIO }], d: { a: 4000, p: 4000, c: 0 }, why: 'Entra mercancía (activo) y queda a deber (pasivo).' },
            { story: 'Paga **$3,000** al proveedor.', options: [{ text: BAJAN, ok: true }, { text: CAMBIO }, { text: SUBE_AP }], d: { a: -3000, p: -3000, c: 0 }, why: 'Sale dinero y baja la deuda: bajan los dos lados.' },
          ],
        },
      },
      {
        entry: {
          title: 'Anota la compra del congelador',
          story: 'La paletería compra un congelador de **$15,000** y paga en efectivo.',
          lines: [
            { account: 'Mobiliario y equipo', side: 'D', amount: 15000, why: 'Un activo que sube se carga.' },
            { account: 'Caja', side: 'C', amount: 15000, why: 'Sale efectivo: el activo baja con abono.' },
          ],
        },
      },
      { tip: 'Capa básica: que **cada operación quede anotada y cuadrada**.' },
    ],
    // La capa intermedia: ¿cuánto vale?
    [
      { text: 'Lupita tenía 10 cajas de paletas que le costaron **$100** cada una. Luego compró 10 más a **$120**. Vende 12. ¿Cuánto le costaron?' },
      { text: 'En la capa **intermedia** ya no basta con anotar: decides **cuánto vale** cada cosa. Eso se llama **valuación**.' },
      {
        match: {
          title: 'Temas de la capa intermedia',
          pairs: [
            ['PEPS', 'Primeras entradas, primeras salidas'],
            ['Depreciación', 'El desgaste de máquinas y edificios'],
            ['Estimación de incobrables', 'Clientes que tal vez no paguen'],
            ['Provisiones', 'Deudas de monto incierto, como garantías'],
          ],
        },
      },
      {
        sim: {
          title: 'Vende cajas con PEPS (salen primero las viejas)',
          inputs: [{ key: 'n', label: 'Cajas vendidas', min: 1, max: 20, step: 1, value: 5 }],
          outputs: [
            { label: 'Costo de ventas (PEPS)', calc: (x) => pepsCosto(x.n), main: true },
            { label: 'Inventario final', calc: (x) => 2200 - pepsCosto(x.n) },
          ],
          goal: {
            text: 'Vende cajas hasta que el costo de ventas llegue a **$1,500 o más**.',
            check: (x) => pepsCosto(x.n) >= 1500,
            done: 'Al pasar de 10 cajas ya salen las de $120: cada una cuesta más.',
          },
        },
      },
      {
        calc: {
          question: 'Lupita vende **12** cajas. Con PEPS, ¿cuál es el **costo de ventas**?',
          answer: 1240,
          hint: 'Primero las 10 de $100, luego 2 de $120.',
          why: '10 × $100 = $1,000 y 2 × $120 = $240. Total: **$1,240**.',
        },
      },
      {
        calc: {
          question: 'Después de vender 12, ¿cuánto vale el **inventario final** de Lupita?',
          answer: 960,
          hint: 'Quedan 20 − 12 = 8 cajas. ¿De qué lote son?',
          why: 'Las de $100 ya salieron todas. Quedan 8 cajas de $120: 8 × $120 = **$960**. Comprueba: $1,240 + $960 = $2,200, todo lo que compró.',
        },
      },
      {
        ask: '¿Qué distingue a la capa intermedia de la básica?',
        options: [
          { text: 'Que valúa con detalle cada activo y pasivo', ok: true, reply: '¡Exacto! La intermedia decide **cuánto vale** cada partida.' },
          { text: 'Que ya no usa cargos y abonos', reply: 'Los cargos y abonos se siguen usando siempre. Lo nuevo es **valuar** cada partida con detalle.' },
          { text: 'Que solo sirve para impuestos', reply: 'No: sigue siendo contabilidad financiera. Lo nuevo es **valuar** cada partida con detalle.' },
        ],
      },
    ],
    // La capa avanzada: casos grandes
    [
      { text: 'A Lupita le va muy bien: compra máquinas a un proveedor de Estados Unidos 🇺🇸 y abre otra empresa. Ya no es un caso sencillo.' },
      {
        text: 'La capa **avanzada** ve casos así:\n🏢 **Grupos** de empresas que se presentan como una sola.\n🤝 **Fusiones y adquisiciones** (comprar otra empresa).\n💵 Operaciones en **moneda extranjera**.\n📄 **Instrumentos financieros** y **arrendamientos** largos.',
      },
      {
        sort: {
          title: '¿Qué capa es?',
          buckets: ['Básica', 'Intermedia', 'Avanzada'],
          items: [
            { text: 'Registrar con cargo y abono una venta de contado', bucket: 0, why: 'Anotar compras y ventas es la capa básica.' },
            { text: 'Calcular la estimación de incobrables', bucket: 1, why: 'Valuar las cuentas por cobrar es capa intermedia.' },
            { text: 'Presentar un grupo de empresas como una sola', bucket: 2, why: 'Eso es consolidación: capa avanzada.' },
            { text: 'Aplicar Activo = Pasivo + Capital', bucket: 0, why: 'La ecuación es el lenguaje de la capa básica.' },
            { text: 'Costear el inventario con PEPS', bucket: 1, why: 'Métodos de inventario: capa intermedia.' },
            { text: 'Registrar la compra de otra empresa', bucket: 2, why: 'Adquisiciones: capa avanzada.' },
            { text: 'Pagar a un proveedor en dólares', bucket: 2, why: 'Moneda extranjera: capa avanzada.' },
          ],
        },
      },
      { text: 'Si debes **dólares**, la deuda se anota en pesos con el **tipo de cambio** del día. Si al pagar el dólar está **más caro**, pagas más pesos: **pérdida cambiaria**. Si está **más barato**: **utilidad cambiaria**.' },
      {
        sim: {
          title: 'Tu deuda en dólares, anotada a $18.00',
          inputs: [
            { key: 'u', label: 'Dólares que debes (USD)', min: 500, max: 5000, step: 500, value: 1000 },
            { key: 't', label: 'Tipo de cambio el día que pagas', min: 17, max: 19.5, step: 0.25, value: 18 },
          ],
          outputs: [
            { label: 'Pesos que entregas', calc: (x) => x.u * x.t },
            { label: 'Pérdida cambiaria', calc: (x) => Math.max(0, x.u * (x.t - 18)) },
            { label: 'Utilidad cambiaria', calc: (x) => Math.max(0, x.u * (18 - x.t)), main: true },
          ],
          goal: {
            text: 'Busca una combinación que te dé una **utilidad cambiaria de $500 o más**.',
            check: (x) => x.u * (18 - x.t) >= 500,
            done: 'Si al pagar el dólar está más barato que cuando anotaste la deuda, pagas menos pesos: **utilidad cambiaria**.',
          },
        },
      },
      {
        ask: 'Lupita debe USD 1,000 anotados a $18.00. Paga con el dólar a **$18.50**. ¿Qué pasa?',
        options: [
          { text: 'Pérdida cambiaria de $500', ok: true, reply: '¡Bien! Entrega $18,500 en vez de $18,000: pierde **$500**.' },
          { text: 'Utilidad cambiaria de $500', reply: 'Al revés: el dólar está más caro, así que paga **más** pesos. Es pérdida.' },
          { text: 'No pasa nada, es la misma deuda', reply: 'Debe los mismos dólares, pero en pesos paga $500 más: es una **pérdida cambiaria**.' },
        ],
      },
      {
        calc: {
          question: 'Lupita anota una deuda de **USD 2,000** con el dólar a **$17.00** (dato de ejemplo). La paga con el dólar a **$17.50**. ¿De cuánto es la **pérdida cambiaria**?',
          answer: 1000,
          hint: 'Dólares × (tipo de cambio al pagar − tipo de cambio al anotar).',
          why: '2,000 × (17.50 − 17.00) = 2,000 × 0.50 = **$1,000**. Anotó $34,000 y pagó $35,000.',
        },
      },
      { tip: 'Cada capa usa todo lo de la anterior: **no se salta ninguna**.' },
    ],
  ],
}
