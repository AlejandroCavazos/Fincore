import type { InteractiveLesson } from './types'

export const intINV06: InteractiveLesson = {
  lessonId: 'INV-06',
  sections: [
    // ¿Qué trae un bono por dentro?
    [
      { text: 'Don Ramiro, maestro jubilado de 63 años 👴, quiere pagos que sepa de antemano. Su nieta le dice: "Mira los **bonos**".' },
      {
        ask: 'Cuando Ramiro compra un bono, ¿qué está haciendo?',
        options: [
          { text: 'Prestándole dinero al emisor', ok: true, reply: '¡Exacto! A cambio, el emisor (gobierno o empresa) le paga intereses y le devuelve su dinero en una fecha fija.' },
          { text: 'Volviéndose socio de la empresa', reply: 'Eso pasa con las **acciones**. Con un bono **le prestas** dinero al emisor.' },
          { text: 'Comprando dólares', reply: 'Eso es comprar divisas. Con un bono **le prestas** dinero al emisor.' },
        ],
      },
      {
        match: {
          title: 'Las partes de un bono',
          pairs: [
            ['Valor nominal', 'Lo que te devuelven al final'],
            ['Tasa cupón', 'El % anual del valor nominal que te pagan de interés'],
            ['Periodicidad', 'Cada cuánto te pagan el cupón'],
            ['Vencimiento', 'La fecha en que te devuelven el valor nominal'],
          ],
        },
      },
      { text: '🧮 **Cupón anual** = valor nominal × tasa cupón.\nSi paga cada seis meses, divide entre 2.\n**Total de cupones** = pago por periodo × número de pagos.' },
      {
        calc: {
          question: 'Ramiro compra un bono de $1,000 con cupón de 6% anual, pagado cada seis meses. ¿Cuánto recibe cada semestre?',
          answer: 30,
          hint: '1,000 × 0.06 = 60 al año. Divide entre 2 pagos.',
          why: '1,000 × 0.06 = $60 al año. 60 ÷ 2 = **$30** cada semestre.',
        },
      },
      {
        calc: {
          question: 'El bono vence en 3 años. ¿Cuánto suma en total lo que recibe de cupones?',
          answer: 180,
          hint: '2 pagos al año × 3 años = 6 pagos de $30.',
          why: '6 × 30 = **$180** de cupones, más los $1,000 que le devuelven al final.',
        },
      },
      {
        ask: 'Ramiro dice: "Renta fija quiere decir que no tiene riesgo". ¿Tiene razón?',
        options: [
          { text: 'No: "fija" es que los pagos se definen desde el inicio', ok: true, reply: '¡Bien! Los pagos están definidos desde la emisión, pero **sí** hay riesgos (los verás más adelante).' },
          { text: 'Sí: si es fija, no puede pasar nada', reply: 'No. "Fija" quiere decir que **los pagos se definen desde el inicio**, no que no haya riesgo.' },
          { text: 'No: "fija" es que su precio nunca cambia', reply: 'Su precio en el mercado sí cambia. "Fija" quiere decir que **los pagos se definen desde el inicio**.' },
        ],
      },
    ],
    // Tasas suben, precio baja
    [
      { text: 'Ramiro tiene un bono de **$100** que paga cupón de **8%**. De pronto salen bonos nuevos parecidos que pagan **10%** (tasas de ejemplo) 📢.' },
      {
        ask: 'Si Ramiro quiere vender su bono hoy, ¿qué pasa con su precio?',
        options: [
          { text: 'Baja: nadie paga $100 por 8% si hay bonos de 10%', ok: true, reply: '¡Exacto! Tendrá que venderlo más barato para que al comprador le rinda lo mismo.' },
          { text: 'Sube, porque las tasas subieron', reply: 'Es al revés: si las tasas suben, los bonos que ya existen **bajan** de precio.' },
          { text: 'Su cupón sube solo a 10%', reply: 'El cupón de su bono es fijo: sigue en 8%. Lo que se ajusta es el **precio, que baja**.' },
        ],
      },
      { text: '🎢 Regla del sube y baja: **tasas suben → precio del bono baja**, y al revés. Entre **más largo el plazo**, más fuerte el efecto.' },
      {
        sim: {
          title: 'El bono de $100 con cupón de 8% de Ramiro',
          inputs: [
            { key: 'y', label: 'Tasa que hoy exige el mercado (%) (ejemplo)', min: 4, max: 12, step: 1, value: 8 },
            { key: 'n', label: 'Años que le faltan', min: 1, max: 5, step: 1, value: 2 },
          ],
          outputs: [
            { label: 'Cupón anual', calc: () => 8 },
            {
              label: 'Precio del bono hoy',
              calc: (x) => {
                const r = x.y / 100
                let p = 100 / (1 + r) ** x.n
                for (let k = 1; k <= x.n; k++) p += 8 / (1 + r) ** k
                return Math.round(p * 100) / 100
              },
              main: true,
              unit: 'pesos',
            },
          ],
          goal: {
            text: 'Haz que el bono valga **menos de $97** hoy.',
            check: (x) => {
              const r = x.y / 100
              let p = 100 / (1 + r) ** x.n
              for (let k = 1; k <= x.n; k++) p += 8 / (1 + r) ** k
              return p < 97
            },
            done: 'Sube la tasa del mercado y el precio baja. Con más años, baja todavía más.',
          },
        },
      },
      { text: 'Con el mismo valor nominal de $100:\n⚖️ Precio $100 → **a la par**.\n⬇️ Menos de $100 → **bajo par**.\n⬆️ Más de $100 → **sobre par**.' },
      {
        sort: {
          title: '¿A la par, bajo par o sobre par?',
          buckets: ['A la par', 'Bajo par', 'Sobre par'],
          items: [
            { text: 'Valor nominal $100, precio $100', bucket: 0, why: 'Precio igual al valor nominal: a la par.' },
            { text: 'Valor nominal $100, precio $95', bucket: 1, why: 'Precio menor al valor nominal: bajo par.' },
            { text: 'Valor nominal $100, precio $104', bucket: 2, why: 'Precio mayor al valor nominal: sobre par.' },
            { text: 'Valor nominal $1,000, precio $980', bucket: 1, why: 'Vale menos que $1,000: bajo par.' },
          ],
        },
      },
      { text: '📏 **Rendimiento corriente** = cupón anual ÷ precio. Dice cuánto te rinde el cupón sobre lo que **pagaste**.' },
      {
        calc: {
          question: 'Un bono paga cupón de $9 al año y Ramiro lo compra en $90. ¿Cuál es su rendimiento corriente, en porcentaje?',
          answer: 10,
          unit: '%',
          hint: 'Cupón anual ÷ precio: 9 ÷ 90.',
          why: '9 ÷ 90 = 0.10 → **10%**. Se divide entre el **precio**, no entre el valor nominal.',
        },
      },
    ],
    // ¿Qué puede salir mal?
    [
      { text: 'Ramiro compara dos bonos a 3 años: uno de una **empresa grande y sólida** y otro de una **empresa pequeña con muchas deudas** 🏢🏚️.' },
      {
        ask: '¿Cuál tendrá que ofrecer una tasa más alta?',
        options: [
          { text: 'La empresa pequeña con muchas deudas', ok: true, reply: '¡Exacto! Ese extra es el **pago por el riesgo** de que no cumpla, no un regalo.' },
          { text: 'La empresa grande y sólida', reply: 'La sólida inspira confianza y no necesita pagar tanto. La **pequeña con deudas** paga más por su riesgo.' },
          { text: 'Las dos pagan igual, son bonos a 3 años', reply: 'Mismo plazo, distinto riesgo. La **pequeña con deudas** debe pagar más.' },
        ],
      },
      { text: 'Cuatro riesgos de la renta fija:\n💳 **Crédito:** que el emisor no pague completo o a tiempo.\n📈 **Tasa:** suben las tasas y baja el precio si vendes antes.\n🎈 **Inflación:** los pagos fijos compran menos.\n🚪 **Liquidez:** no encontrar comprador rápido a buen precio.' },
      {
        match: {
          title: 'Une cada situación con su riesgo',
          pairs: [
            ['La empresa retrasa el pago de cupones', 'Riesgo de crédito'],
            ['Suben las tasas y tu bono vale menos hoy', 'Riesgo de tasa'],
            ['Todo sube y tus cupones alcanzan para menos', 'Riesgo de inflación'],
            ['Quieres vender y casi nadie compra', 'Riesgo de liquidez'],
          ],
        },
      },
      { text: 'Para el riesgo de crédito están las **calificaciones crediticias**, de **agencias calificadoras**. Usan letras: **AAA** = emisor muy capaz de pagar. Mientras más baja la letra, más riesgo.' },
      {
        multi: {
          title: '¿Qué es cierto de las calificaciones? Marca todas',
          items: [
            { text: 'Miden la capacidad de pago del emisor', ok: true },
            { text: 'Con peor calificación, el emisor suele pagar más tasa', ok: true },
            { text: 'Pueden cambiar durante la vida del bono', ok: true },
            { text: 'Una AAA garantiza que nunca dejará de pagar', ok: false },
          ],
          why: 'Miden capacidad de pago y pueden cambiar. Una calificación alta **no es garantía**: indica poco riesgo, no cero.',
        },
      },
      {
        order: {
          title: 'Arma la regla',
          steps: ['Mientras más baja la calificación,', 'más riesgo de que no pague,', 'y más alta la tasa', 'que el emisor debe ofrecer'],
          done: '¡Eso! La tasa extra es el pago por aguantar más riesgo.',
        },
      },
    ],
  ],
}
