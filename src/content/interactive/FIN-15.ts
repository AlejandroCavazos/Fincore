import type { InteractiveLesson } from './types'

export const intFIN15: InteractiveLesson = {
  lessonId: 'FIN-15',
  sections: [
    // ¿Cómo se juntan dos empresas?
    [
      { text: 'Rafael tiene **La Espiga**, una cadena de panaderías en Puebla 🥖. Quiere crecer comprando **Pan del Valle**, otra cadena de la ciudad.' },
      {
        ask: 'Rafael compra las acciones de Pan del Valle, que sigue existiendo como su subsidiaria. ¿Qué operación es?',
        options: [
          { text: 'Una adquisición', ok: true, reply: '¡Sí! En una **adquisición**, la compradora toma el control de la **objetivo**, que puede seguir existiendo.' },
          { text: 'Una fusión', reply: 'En una **fusión**, al menos una empresa deja de existir porque se integra en la otra. Aquí Pan del Valle sigue viva: es una **adquisición**.' },
          { text: 'Un préstamo', reply: 'Rafael no presta dinero: toma el control comprando acciones. Es una **adquisición**.' },
        ],
      },
      { text: 'Según qué tan parecidos son los negocios:\n↔️ **Horizontal:** compiten en lo mismo (panadería compra panadería).\n↕️ **Vertical:** uno es proveedor o cliente del otro (panadería compra su molino de harina).\n🧩 **Conglomerado:** no tienen relación (panadería compra un hotel).' },
      {
        sort: {
          title: '¿Horizontal, vertical o conglomerado?',
          buckets: ['Horizontal', 'Vertical', 'Conglomerado'],
          items: [
            { text: 'Un banco se fusiona con otro banco', bucket: 0, why: 'Mismo giro, competidores: horizontal.' },
            { text: 'Una cervecera compra la fábrica que le hace las latas', bucket: 1, why: 'Es su proveedor: vertical.' },
            { text: 'Una cementera compra hoteles de playa', bucket: 2, why: 'Giros sin relación: conglomerado.' },
            { text: 'Un supermercado compra la empresa de camiones que le distribuye', bucket: 1, why: 'Es un eslabón de su cadena de suministro: vertical.' },
            { text: 'Una telefónica compra una empresa de alimentos', bucket: 2, why: 'Nada que ver entre sí: conglomerado.' },
          ],
        },
      },
      { text: 'También importa el **tono** y **qué** se compra. Una operación puede ser amistosa u hostil, y se pueden comprar las acciones o solo algunos activos.' },
      {
        match: {
          title: 'Une cada término con su idea',
          pairs: [
            ['Amistosa', 'Se negocia con el consejo de la objetivo'],
            ['Hostil', 'Va directo a los accionistas con una oferta pública'],
            ['Compra de acciones', 'Te quedas con todo, incluidas deudas ocultas'],
            ['Compra de activos', 'Eliges qué bienes compras'],
          ],
        },
      },
      { tip: 'La Espiga comprando Pan del Valle con acuerdo de su consejo es una adquisición **horizontal y amistosa**: busca escala y más clientes.' },
    ],
    // ¿Quién gana con la compra?
    [
      { text: 'Juntas, las dos panaderías pueden valer más que separadas: "1 + 1 = 3". Ese extra es la **sinergia** ✨.\n✂️ **De costos:** cerrar oficinas repetidas, comprar harina en más volumen.\n🛒 **De ingresos:** vender productos de una a los clientes de la otra.\nLas de costos suelen ser más fáciles de lograr.' },
      {
        rush: {
          title: '¿Sinergia de costos o de ingresos?',
          seconds: 30,
          labels: ['Costos', 'Ingresos'],
          items: [
            { text: 'Comprar harina juntas, en más volumen', ans: 0 },
            { text: 'Vender los pasteles de una en las tiendas de la otra', ans: 1 },
            { text: 'Cerrar una de las dos oficinas de contabilidad', ans: 0 },
            { text: 'Ofrecer el café de una a los clientes de la otra', ans: 1 },
            { text: 'Usar un solo camión de reparto en vez de dos', ans: 0 },
          ],
        },
      },
      { text: 'Para que los dueños de Pan del Valle acepten, Rafael paga más que su valor de mercado. Ese extra es la **prima de control**:\n💰 Prima % = (precio pagado − valor de mercado) ÷ valor de mercado × 100' },
      {
        calc: {
          question: 'La acción de Pan del Valle vale $50 y Rafael ofrece $60 por acción. ¿Qué porcentaje de prima ofrece?',
          answer: 20,
          unit: '%',
          hint: '(60 − 50) ÷ 50 × 100.',
          why: '60 − 50 = 10; 10 ÷ 50 = 0.20 → **20 %**. La base es el precio de mercado. Error común: dividir entre el precio ofrecido (10 ÷ 60).',
        },
      },
      { text: '¿Gana Rafael? Sus dueños ganan solo si **las sinergias son mayores que la prima**:\n📊 VPN de la compra = valor de la objetivo + sinergias − precio pagado\n(VPN = valor presente neto: lo que gana o pierde, en pesos de hoy)' },
      {
        calc: {
          question: 'Pan del Valle vale $8,000,000 sola, las sinergias valen $2,000,000 y Rafael paga $9,000,000. ¿Cuál es el VPN de la compra para Rafael?',
          answer: 1000000,
          hint: '8,000,000 + 2,000,000 − 9,000,000.',
          why: '8 + 2 − 9 = **$1,000,000**. La prima es $1,000,000 (se la lleva el vendedor) y Rafael se queda con otro $1,000,000. Juntos suman las sinergias: $2,000,000 es el valor total creado.',
        },
      },
      {
        sim: {
          title: 'Pan del Valle vale $10,000,000 sola y las sinergias valen $3,000,000',
          inputs: [{ key: 'p', label: 'Precio que paga Rafael', min: 10000000, max: 15000000, step: 500000, value: 14000000 }],
          outputs: [
            { label: 'Prima para el vendedor', calc: (x) => x.p - 10000000 },
            { label: 'VPN para Rafael', calc: (x) => 10000000 + 3000000 - x.p, main: true },
          ],
          goal: {
            text: 'Negocia un precio que deje a Rafael con **VPN positivo**.',
            check: (x) => 13000000 - x.p > 0,
            done: 'Mientras la prima sea menor que las sinergias ($3,000,000), Rafael gana. Si paga más, pierde aunque haya sinergias.',
          },
        },
      },
      {
        ask: 'Otra panadería compra a una rival con sinergias reales, pero paga una prima mayor que esas sinergias. ¿Qué pasa con sus dueños?',
        options: [
          { text: 'Pierden valor', ok: true, reply: '¡Exacto! VPN = sinergias − prima, y sale negativo. Es la **maldición del ganador**: pagar de más por ganar la compra.' },
          { text: 'Ganan, porque hay sinergias', reply: 'Tener sinergias no basta: si la prima es mayor, el VPN es negativo. **Pierden valor**.' },
          { text: 'Quedan igual', reply: 'No quedan igual: pagaron más extra (prima) del que ganan (sinergias). **Pierden valor**.' },
        ],
      },
    ],
    // ¿Cómo se paga una compra?
    [
      { text: 'Rafael ya tiene precio. Ahora sigue el **proceso**: búsqueda → acuerdo de confidencialidad → **carta de intención** (precio y condiciones preliminares) → **debida diligencia** (revisar a fondo finanzas, impuestos, contratos, juicios y asuntos laborales) → contrato definitivo → autorizaciones → cierre → **integración**.' },
      {
        order: {
          title: 'Arma el proceso de la compra',
          steps: ['Buscar a la empresa objetivo', 'Firmar la carta de intención', 'Hacer la debida diligencia', 'Firmar el contrato definitivo', 'Cerrar la operación', 'Integrar las dos empresas'],
          done: '¡Bien! Y la integración, al final, suele ser la parte más difícil.',
        },
      },
      { text: 'Rafael puede pagar de dos formas:\n💵 **En efectivo:** el vendedor recibe dinero seguro y Rafael asume todo el riesgo.\n📜 **En acciones:** el vendedor se vuelve socio y comparte el riesgo, pero los dueños actuales se **diluyen** (tienen un pedazo más chico).' },
      {
        sort: {
          title: '¿Pago en efectivo o en acciones?',
          buckets: ['Efectivo', 'Acciones'],
          items: [
            { text: 'El vendedor recibe dinero seguro', bucket: 0, why: 'Con efectivo, el vendedor se va con su dinero.' },
            { text: 'El vendedor se vuelve socio de Rafael', bucket: 1, why: 'Recibe acciones: ahora es socio.' },
            { text: 'El comprador asume todo el riesgo', bucket: 0, why: 'Si el negocio sale mal, solo pierde quien pagó en efectivo.' },
            { text: 'Los dueños actuales del comprador se diluyen', bucket: 1, why: 'Hay acciones nuevas, así que cada dueño tiene un pedazo más chico.' },
          ],
        },
      },
      { text: 'Si paga con acciones, se revisa la **UPA** (utilidad por acción). Si sube es **acreción**; si baja, **dilución**.\nRegla rápida sin sinergias: si el múltiplo P/U (precio ÷ utilidad) que pagas por la objetivo es **menor** que el P/U de tus acciones, la UPA sube.' },
      {
        ask: 'Las acciones de La Espiga valen 15 veces su utilidad. Rafael paga solo con acciones nuevas y compra Pan del Valle a 12 veces su utilidad. Sin sinergias, ¿qué pasa con su UPA?',
        options: [
          { text: 'Sube: es acretiva', ok: true, reply: '¡Exacto! Pagó 12 veces, menos que sus 15 veces: recibe más utilidad por cada acción que emite.' },
          { text: 'Baja: es dilutiva', reply: 'Sería dilutiva si pagara un P/U **mayor** que 15. Aquí paga 12, que es menor: **sube**.' },
          { text: 'Siempre baja al pagar con acciones', reply: 'No siempre. Depende de los múltiplos: si pagas un P/U menor que el tuyo (12 contra 15), la UPA **sube**.' },
        ],
      },
      { tip: 'Ojo: **acretiva no significa que cree valor**. Eso lo deciden las sinergias contra la prima.' },
    ],
  ],
}
