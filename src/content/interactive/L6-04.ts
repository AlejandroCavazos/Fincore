import type { InteractiveLesson } from './types'

export const intL604: InteractiveLesson = {
  lessonId: 'L6-04',
  sections: [
    // ¿Por qué comprar otra empresa?
    [
      { text: 'Rodrigo tiene **Cafés Altura** ☕, 10 cafeterías. Le ofrecen comprar **Café Nube**, una cadena vecina. ¿Le conviene?' },
      {
        ask: '¿Cuándo crea valor una compra?',
        options: [
          { text: 'Cuando juntas valen más que separadas, y eso supera lo que pagas de más', ok: true, reply: '¡Exacto! Juntas deben valer más (1 + 1 > 2) y ese extra debe ser mayor que la **prima** que pagas.' },
          { text: 'Siempre que la empresa crezca', reply: 'Crecer no basta: si pagas de más, pierdes. Crea valor si juntas valen más **y** eso supera la prima pagada.' },
          { text: 'Cuando pagas lo más posible para cerrar rápido', reply: 'Pagar de más destruye valor. Lo que importa es que el extra de juntarse supere la **prima**.' },
        ],
      },
      { text: 'Ese extra se llama **sinergia** (1 + 1 da más de 2):\n✂️ **De costos:** quitar lo duplicado, comprar más barato por volumen.\n📈 **De ingresos:** vender más (venta cruzada, nuevos canales).\n🏦 **Financieras:** pedir prestado más barato.\nLas de costos suelen ser **más confiables**.' },
      {
        sort: {
          title: '¿Qué tipo de sinergia es?',
          buckets: ['Costos', 'Ingresos', 'Financiera'],
          items: [
            { text: 'Cerrar una de las dos oficinas centrales', bucket: 0, why: 'Elimina algo duplicado: ahorro de costos.' },
            { text: 'Comprar café en grano más barato por volumen', bucket: 0, why: 'Escala en compras: ahorro de costos.' },
            { text: 'Vender los pasteles de Nube en las cafeterías de Altura', bucket: 1, why: 'Venta cruzada: más ingresos.' },
            { text: 'Llegar a otra ciudad con los locales de Nube', bucket: 1, why: 'Nuevo canal: más ingresos.' },
            { text: 'Conseguir una tasa de interés menor por ser más grandes', bucket: 2, why: 'Mejores condiciones de deuda: sinergia financiera.' },
          ],
        },
      },
      { text: '🧮 **Valor creado** = (valor juntas − valor de Altura − valor de Nube) − prima pagada.\nLa **prima** es lo que se paga por encima del valor de la empresa comprada.' },
      {
        calc: {
          question: 'Juntas valen $1,000 millones; Altura sola $600 millones y Nube sola $300 millones. Rodrigo paga una prima de $50 millones. ¿Cuánto valor crea? (en millones)',
          answer: 50,
          unit: 'millones',
          hint: 'Sinergias: 1,000 − 600 − 300 = 100. Luego resta la prima.',
          why: '100 − 50 = **$50 millones** de valor creado para los accionistas de Altura.',
        },
      },
      {
        ask: 'Si Rodrigo pagara una prima de $130 millones con esas mismas sinergias de $100 millones, ¿qué pasaría?',
        options: [
          { text: 'Pierde $30 millones: el valor se va a los vendedores', ok: true, reply: '¡Bien! 100 − 130 = −30. Pagó de más y el valor se fue a los dueños de Nube.' },
          { text: 'Gana $230 millones', reply: 'La prima se **resta**, no se suma: 100 − 130 = **−30**. Pierde.' },
          { text: 'Da igual, la compra ya se hizo', reply: 'No da igual: 100 − 130 = **−30 millones**. Pagó más de lo que la unión aporta.' },
        ],
      },
    ],
    // ¿Cada acción gana más o menos?
    [
      { text: 'Altura pagará a Nube con **acciones nuevas**. Es como repartir una pizza 🍕: entran más comensales. ¿La pizza crece más que la gente?' },
      { text: '🍕 **UPA** (utilidad por acción) = utilidad neta ÷ acciones.\n⬆️ **Acretiva:** la UPA del comprador sube después de la compra.\n⬇️ **Dilutiva:** la UPA baja.\n**Pro forma** = «como si la compra ya hubiera ocurrido».' },
      {
        order: {
          title: 'Arma el cálculo de la UPA pro forma',
          steps: ['Acciones nuevas = precio pagado ÷ precio de la acción', 'Suma las utilidades de las dos empresas', 'Suma las acciones de antes más las nuevas', 'Divide utilidad total ÷ acciones totales', 'Compara con la UPA de antes'],
          done: '¡Así se hace! El error común es olvidar sumar las acciones nuevas.',
        },
      },
      {
        calc: {
          question: 'Altura gana $20 millones con 10 millones de acciones (UPA $2) y su acción vale $40. Paga $80 millones por Nube (que gana $10 millones) con acciones nuevas a $40. Sin sinergias, ¿cuál es la UPA pro forma?',
          answer: 2.5,
          hint: 'Acciones nuevas: 80 ÷ 40 = 2 millones. Utilidad: 20 + 10 = 30. Acciones: 10 + 2 = 12. Divide 30 ÷ 12.',
          why: '30 ÷ 12 = **$2.50**. Sube de $2.00 a $2.50: +25 %, es **acretiva**.',
        },
      },
      { text: '⚡ **Regla rápida** (pago 100 % con acciones, sin sinergias): si el P/E del comprador es **mayor** que el P/E que paga, es acretiva; si es **menor**, dilutiva.\nAquí: Altura 40 ÷ 2 = 20x; paga 80 ÷ 10 = 8x. 20 > 8 → acretiva ✅' },
      {
        rush: {
          title: '¿Acretiva o dilutiva?',
          seconds: 30,
          labels: ['⬆️ Acretiva', '⬇️ Dilutiva'],
          items: [
            { text: 'P/E del comprador 20x, paga 15x', ans: 0 },
            { text: 'P/E del comprador 10x, paga 14x', ans: 1 },
            { text: 'P/E del comprador 18x, paga 12x', ans: 0 },
            { text: 'P/E del comprador 12x, paga 25x', ans: 1 },
            { text: 'P/E del comprador 25x, paga 9x', ans: 0 },
            { text: 'P/E del comprador 8x, paga 11x', ans: 1 },
          ],
        },
      },
      {
        ask: 'La compra de Nube es acretiva. ¿Eso garantiza que Rodrigo creó valor?',
        options: [
          { text: 'No: es un indicador contable de corto plazo', ok: true, reply: '¡Eso! La acreción mira la UPA de hoy. El valor depende de que las sinergias superen la prima.' },
          { text: 'Sí, siempre', reply: 'No siempre. La acreción es un **indicador contable de corto plazo**; no garantiza crear valor.' },
          { text: 'Sí, si la UPA sube al menos 1 %', reply: 'Ningún porcentaje lo garantiza. La acreción es **contable y de corto plazo**.' },
        ],
      },
    ],
    // Comprar una empresa con deuda
    [
      { text: 'Años después, un **fondo de capital privado** quiere comprar Cafés Altura. Pondrá poco dinero propio y pedirá **mucha deuda**. Eso es un **LBO** (leveraged buyout).' },
      { text: '🏢 Es como comprar un departamento para rentar con hipoteca: pones un **enganche** (el capital del fondo), la **renta paga la deuda** y al vender, lo que queda después de liquidar el crédito es tuyo.' },
      {
        multi: {
          title: '¿Qué hace a Cafés Altura buena candidata para un LBO? Marca todo lo que aplique',
          items: [
            { text: 'Flujos de efectivo estables y predecibles', ok: true },
            { text: 'Necesita poco CapEx (poca inversión en equipo)', ok: true },
            { text: 'Tiene poca deuda antes de la compra', ok: true },
            { text: 'Ventas muy volátiles que suben y bajan mucho', ok: false },
            { text: 'Grandes inversiones en investigación sin ingresos seguros', ok: false },
          ],
          why: 'La deuda se paga con los flujos de la empresa: se necesitan **flujos estables, poco CapEx y poca deuda previa**.',
        },
      },
      { text: '📏 **MOIC** = capital a la salida ÷ capital invertido: cuántas veces recupera el fondo su dinero.\n💵 Capital invertido = precio de entrada − deuda inicial.\n🏁 Capital a la salida = valor de venta − deuda que aún falta pagar.' },
      {
        calc: {
          question: 'Altura gana un EBITDA de $50 millones y el fondo la compra a 6x. Pide prestado el 60 % del precio. ¿Cuánto capital pone el fondo? (en millones)',
          answer: 120,
          unit: 'millones',
          hint: 'Precio: 6 × 50 = 300. Deuda: 60 % de 300 = 180. Capital = precio − deuda.',
          why: '300 − 180 = **$120 millones** de capital del fondo.',
        },
      },
      {
        sim: {
          title: 'El fondo compró en $800 millones (EBITDA 100 × 8x) con $480 de deuda: puso $320 millones',
          inputs: [
            { key: 'e', label: 'EBITDA al vender (millones)', min: 100, max: 150, step: 10, value: 110 },
            { key: 'm', label: 'Múltiplo de salida (veces)', min: 6, max: 9, step: 1, value: 7 },
            { key: 'd', label: 'Deuda que aún falta pagar (millones)', min: 200, max: 480, step: 40, value: 400 },
          ],
          outputs: [
            { label: 'Valor de venta (millones)', calc: (v) => v.e * v.m, unit: 'millones' },
            { label: 'Capital a la salida (millones)', calc: (v) => v.e * v.m - v.d, unit: 'millones' },
            { label: 'MOIC', calc: (v) => Math.round(((v.e * v.m - v.d) / 320) * 100) / 100, unit: 'veces', main: true },
          ],
          goal: {
            text: 'Consigue un **MOIC de 2 veces o más** (el fondo duplica su dinero). Ejemplo, no es rendimiento garantizado.',
            check: (v) => v.e * v.m - v.d >= 640,
            done: 'Las tres fuentes del rendimiento: **crecer el EBITDA**, **pagar deuda** y vender a un **múltiplo mayor**.',
          },
        },
      },
      {
        ask: 'Un fondo puso $100 millones y al vender recibe $300 millones. ¿Cuál es su MOIC?',
        options: [
          { text: '3 veces', ok: true, reply: '¡Sí! 300 ÷ 100 = **3x**. Ojo: el MOIC no dice si tardó 2 o 10 años; para eso está la **TIR**, el rendimiento anual equivalente.' },
          { text: '2 veces', reply: 'Eso es solo la ganancia (200 ÷ 100). El MOIC es el total: 300 ÷ 100 = **3x**.' },
          { text: '200 veces', reply: '200 es la ganancia en millones. El MOIC divide: 300 ÷ 100 = **3x**.' },
        ],
      },
    ],
  ],
}
