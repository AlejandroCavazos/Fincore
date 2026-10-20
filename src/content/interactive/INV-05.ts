import type { InteractiveLesson } from './types'

export const intINV05: InteractiveLesson = {
  lessonId: 'INV-05',
  sections: [
    // ¿Prestarle dinero al gobierno?
    [
      { text: 'Itzel tiene 20 años, estudia enfermería 🩺 y juntó **$1,000** de su beca. Una amiga le dice: "Compra CETES". Itzel no sabe qué es eso.' },
      {
        ask: 'Cuando Itzel compra CETES, ¿a quién le presta su dinero?',
        options: [
          { text: 'Al Gobierno Federal', ok: true, reply: '¡Exacto! Los CETES son deuda del Gobierno Federal a corto plazo. Por eso se consideran de **menor riesgo en pesos** en México.' },
          { text: 'A un banco', reply: 'Puede comprarlos **a través** de un banco, pero quien recibe el préstamo es el **Gobierno Federal**.' },
          { text: 'A una empresa', reply: 'Las empresas emiten otra deuda. Los CETES los emite el **Gobierno Federal**.' },
        ],
      },
      { text: '🔟 Cada CETE vale **$10** al vencer.\n🏷️ Se compran **a descuento**: pagas menos de $10 hoy.\n🚫 No pagan intereses en el camino (cupones).\n📅 Plazos comunes: **28, 91, 182 y 364 días**.' },
      {
        order: {
          title: 'Arma cómo gana Itzel',
          steps: ['Compra el CETE por menos de $10', 'Espera a que termine el plazo', 'Recibe $10 por cada CETE', 'La diferencia es su ganancia'],
          done: '¡Así funciona "a descuento"! No hay cupones: la ganancia viene de comprar barato y recibir $10.',
        },
      },
      { text: 'Se colocan en **subastas**, donde el **Banco de México** actúa como agente del gobierno. Itzel puede comprar con poco dinero en bancos, casas de bolsa o **Cetesdirecto**, el programa del gobierno.' },
      {
        rush: {
          title: '¿Cierto o falso sobre los CETES?',
          seconds: 30,
          labels: ['Cierto', 'Falso'],
          items: [
            { text: 'Al vencer, cada CETE paga $10', ans: 0 },
            { text: 'Pagan un cupón cada mes', ans: 1 },
            { text: 'Los emite el Gobierno Federal', ans: 0 },
            { text: 'Un plazo común es 91 días', ans: 0 },
            { text: 'Los compras por más de $10', ans: 1 },
            { text: 'Necesitas millones para comprar', ans: 1 },
          ],
        },
      },
    ],
    // ¿Cuánto pagas por un CETE?
    [
      { text: 'Itzel compra **100 CETES** a **$9.90** cada uno (precio de ejemplo) 🧾.' },
      {
        calc: {
          question: '¿Cuánto invierte Itzel hoy?',
          answer: 990,
          hint: 'Títulos × precio: 100 × 9.90.',
          why: '100 × 9.90 = **$990**.',
        },
      },
      {
        calc: {
          question: 'Al vencer recibe $10 por cada CETE. ¿Cuánto gana Itzel (antes de impuestos)?',
          answer: 10,
          hint: 'Lo que recibe (100 × 10) menos lo que invirtió (990).',
          why: '100 × 10 = 1,000. 1,000 − 990 = **$10** de ganancia en el plazo.',
        },
      },
      {
        ask: 'Para saber su **rendimiento del periodo**, ¿qué divide Itzel?',
        options: [
          { text: 'Ganancia ÷ inversión: 10 ÷ 990', ok: true, reply: '¡Bien! 10 ÷ 990 ≈ 0.0101 → **1.01%** en el plazo. Se divide entre lo que **puso**.' },
          { text: 'Ganancia ÷ lo que recibe: 10 ÷ 1,000', reply: 'Casi: se divide entre lo que **invirtió**, no entre lo que recibe. 10 ÷ 990 ≈ 1.01%.' },
          { text: 'Inversión ÷ ganancia: 990 ÷ 10', reply: 'Al revés. Es **ganancia ÷ inversión**: 10 ÷ 990 ≈ 1.01%.' },
        ],
      },
      { text: 'El precio de hoy es la cantidad que, sumándole los intereses del plazo, llega justo a $10. La tasa es anual y usa años de 360 días.' },
      {
        sim: {
          title: '¿Cuánto cuestan 1,000 CETES hoy?',
          inputs: [
            { key: 't', label: 'Tasa anual de ejemplo (%)', min: 2, max: 12, step: 1, value: 5 },
            { key: 'd', label: 'Días del plazo (de 28 en 28)', min: 28, max: 364, step: 28, value: 28 },
          ],
          outputs: [
            { label: 'Recibirás al vencer', calc: () => 10000 },
            { label: 'Pagas hoy por 1,000 CETES', calc: (x) => 10000 / (1 + (x.t / 100) * (x.d / 360)), main: true },
          ],
          goal: {
            text: 'Haz que 1,000 CETES cuesten **$9,500 o menos** hoy.',
            check: (x) => 10000 / (1 + (x.t / 100) * (x.d / 360)) <= 9500,
            done: 'Más tasa o más días → **precio más bajo** hoy. Son tasas de ejemplo.',
          },
        },
      },
      {
        ask: 'Dos CETES a 91 días: uno con tasa de 7% y otro de 9% (de ejemplo). ¿Cuál cuesta **menos** hoy?',
        options: [
          { text: 'El de 9%', ok: true, reply: '¡Exacto! Con el mismo plazo, a mayor tasa, menor precio hoy.' },
          { text: 'El de 7%', reply: 'Al revés: con el mismo plazo, **a mayor tasa, menor precio**. El de 9% cuesta menos.' },
          { text: 'Cuestan lo mismo, los dos pagan $10', reply: 'Los dos pagan $10 al final, pero el de mayor tasa se compra **más barato** hoy: el de 9%.' },
        ],
      },
    ],
    // ¿Y si la inflación sube?
    [
      { text: 'La tía de Itzel invertirá a **5 años**. Le preocupa que la inflación suba y se coma su ganancia 😬. Los CETES son de corto plazo; para plazos largos el gobierno tiene otros bonos.' },
      { text: '📌 **Bonos M:** tasa **fija**, pagan un **cupón** (interés) cada seis meses, a varios años.\n🛡️ **Udibonos:** en **UDIS**, que suben con la inflación: se ajustan por inflación.\n🌊 **Bondes:** tasa **variable**, sigue una tasa de referencia del mercado.' },
      {
        match: {
          title: 'Une cada bono del gobierno con lo que lo distingue',
          pairs: [
            ['CETES', 'Se compran a descuento, sin cupones'],
            ['Bonos M', 'Cupón fijo cada seis meses'],
            ['Udibonos', 'Se ajustan con la inflación'],
            ['Bondes', 'Su interés cambia con una tasa de referencia'],
          ],
        },
      },
      {
        sort: {
          title: '¿Corto o largo plazo?',
          buckets: ['Corto plazo', 'Largo plazo'],
          items: [
            { text: 'CETES a 28 días', bucket: 0, why: 'Plazos de 28 a 364 días: corto plazo.' },
            { text: 'Bono M a varios años', bucket: 1, why: 'Paga cupones por años: largo plazo.' },
            { text: 'CETES a 364 días', bucket: 0, why: 'Un año o menos: sigue siendo corto plazo.' },
            { text: 'Udibono', bucket: 1, why: 'Es de los bonos para plazos más largos.' },
          ],
        },
      },
      {
        ask: '¿Qué bono atiende mejor la preocupación de la tía?',
        options: [
          { text: 'Udibonos', ok: true, reply: '¡Eso! Al estar en UDIS, su valor y sus cupones **se ajustan por inflación**.' },
          { text: 'Bonos M de tasa fija', reply: 'Su cupón fijo **pierde poder de compra** si la inflación sube mucho. Mejor **Udibonos**.' },
          { text: 'CETES a 28 días sin reinvertir', reply: 'Son de muy corto plazo y ella invierte a 5 años. Para cuidarse de la inflación, **Udibonos**.' },
        ],
      },
      { tip: '**CETES:** corto, a descuento. **Bonos M:** largo, tasa fija. **Udibonos:** protegen de la inflación. **Bondes:** tasa variable.' },
    ],
  ],
}
