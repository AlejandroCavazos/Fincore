import type { InteractiveLesson } from './types'

const SUBE_AC = 'Sube el activo y sube el capital'
const BAJA_AC = 'Bajan el activo y el capital'
const SUBE_AP = 'Sube el activo y sube el pasivo'
const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'

export const intL304: InteractiveLesson = {
  lessonId: 'L3-04',
  sections: [
    // Presupuesto maestro, estático y flexible
    [
      { text: 'Repaso integrador 👕: **Uniformes Aguja de Oro**, el taller de don Beto, hace uniformes escolares. Todo su plan del año es el **presupuesto maestro**, y empieza por lo que espera vender.' },
      {
        order: {
          title: 'Ordena cómo se arma el presupuesto maestro',
          steps: [
            'Presupuesto de ventas',
            'Presupuesto de producción',
            'Compras de materiales, mano de obra y CIF',
            'Gastos de operación',
            'Flujo de efectivo',
            'Estados financieros proyectados',
          ],
          done: 'Todo parte de las **ventas**: el volumen esperado manda en la producción, las compras, el efectivo y los estados proyectados.',
        },
      },
      { text: 'Don Beto planeó **1,000 uniformes** con costo variable de **$90** cada uno y fijos de **$60,000**. Al final hizo **1,200** y gastó **$177,000**.' },
      {
        calc: {
          question: '¿Cuánto es el **presupuesto flexible** (lo que debió gastar para 1,200 uniformes)?',
          answer: 168000,
          hint: 'CVu × volumen **real** + fijos.',
          why: '90 × 1,200 + 60,000 = 108,000 + 60,000 = **$168,000**. El estático (1,000 uniformes) era $150,000.',
        },
      },
      {
        calc: {
          question: '¿De cuánto es la **variación** contra el presupuesto flexible?',
          answer: 9000,
          hint: 'costo real − presupuesto flexible.',
          why: '177,000 − 168,000 = **$9,000 desfavorable**: eso sí es gastar de más.',
        },
      },
      {
        ask: 'El gerente compara $177,000 contra el estático de $150,000 y grita: «¡$27,000 de sobregasto!». ¿Qué le dices?',
        options: [
          { text: 'Mezcla el efecto de producir más con el de gastar de más; contra el flexible el sobregasto real es $9,000', ok: true, reply: '¡Exacto! $18,000 se explican porque hizo 200 uniformes más. Solo $9,000 son falta de control.' },
          { text: 'Tiene razón: el plan era $150,000', reply: 'El plan era para 1,000 uniformes. Con 1,200 es normal gastar más.' },
          { text: 'No hubo sobregasto, porque vendió más', reply: 'Aun ajustando al volumen real, gastó $9,000 más de lo que debía.' },
        ],
      },
      { tip: 'Como la fiesta que pasó de 20 a 30 invitados: el **flexible** te dice cuánto **debiste** gastar con el volumen real.' },
    ],
    // Variaciones de precio y cantidad
    [
      { text: 'El estándar de don Beto: **2.5 m de tela a $60** por uniforme. Hizo **1,200 uniformes** y usó **3,100 m** que compró a **$56** el metro.' },
      {
        ask: '¿Cuántos metros **permitía** el estándar para 1,200 uniformes?',
        options: [
          { text: '3,000 m', ok: true, reply: '¡Bien! 2.5 × 1,200 = 3,000 m. Se usaron 100 m de más.' },
          { text: '3,100 m', reply: 'Esos son los metros **reales** usados. El permitido sale del estándar × producción real.' },
          { text: '2,500 m', reply: 'Eso sería con 1,000 uniformes. Usa la producción **real**: 1,200.' },
        ],
      },
      {
        calc: {
          question: '¿De cuánto es la **variación de precio**? (escribe el monto sin signo)',
          answer: 12400,
          hint: '(precio real − precio estándar) × metros reales.',
          why: '(56 − 60) × 3,100 = −$12,400: **$12,400 favorable**, porque pagó menos por metro.',
        },
      },
      {
        calc: {
          question: '¿De cuánto es la **variación de cantidad**?',
          answer: 6000,
          hint: '(metros reales − metros permitidos) × precio estándar.',
          why: '(3,100 − 3,000) × 60 = **$6,000 desfavorable**: usó más tela de la permitida. Total: −12,400 + 6,000 = $6,400 favorable.',
        },
      },
      {
        sort: {
          title: '¿Favorable o desfavorable?',
          buckets: ['Favorable (F)', 'Desfavorable (D)'],
          items: [
            { text: 'Se pagó la tela más barata que el estándar', bucket: 0, why: 'El costo real quedó abajo del estándar.' },
            { text: 'Se usaron más metros de los permitidos', bucket: 1, why: 'Más cantidad = más costo que el estándar.' },
            { text: 'Las costureras cobraron una tarifa mayor a la estándar', bucket: 1, why: 'Variación de tarifa de mano de obra: costo real mayor.' },
            { text: 'Se terminaron los uniformes en menos horas de las permitidas', bucket: 0, why: 'Variación de eficiencia de mano de obra: se usó menos.' },
          ],
        },
      },
      {
        ask: 'La tela salió barata, pero era de baja calidad y hubo mermas. ¿Qué suele verse?',
        options: [
          { text: 'Precio favorable y cantidad desfavorable', ok: true, reply: '¡Eso! Las variaciones se relacionan: ahorras en precio y lo pierdes en desperdicio.' },
          { text: 'Las dos favorables', reply: 'Las mermas hacen que uses más tela: la cantidad sale desfavorable.' },
          { text: 'Precio desfavorable y cantidad favorable', reply: 'Al revés: pagaste menos por metro, pero usaste más metros.' },
        ],
      },
      { tip: '**Precio** = (PR − PE) × CR. **Cantidad** = (CR − CE permitida) × PE. Real mayor que estándar = **D**.' },
    ],
    // Costos relevantes
    [
      { text: 'Don Beto decide si deja de hacer mochilas. Un costo es **relevante** si es **futuro** y **cambia** entre las opciones. Lo **hundido** ya se gastó: no cuenta.' },
      {
        rush: {
          title: '¿Relevante o no relevante?',
          seconds: 40,
          labels: ['Relevante', 'No relevante'],
          items: [
            { text: 'Estudio de mercado de mochilas que ya pagó', ans: 1 },
            { text: 'Tela que tendría que comprar el próximo mes para las mochilas', ans: 0 },
            { text: 'Renta que podría cobrar si presta el espacio a otro taller', ans: 0 },
            { text: 'Parte de la renta del taller que le «tocaba» a las mochilas y se pagará igual', ans: 1 },
            { text: 'Seguro de la máquina de mochilas que cancela si deja de fabricarlas', ans: 0 },
            { text: 'Máquina que ya compró el año pasado', ans: 1 },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Un costo hundido nunca es relevante', ok: true },
            { text: 'Un costo fijo evitable sí es relevante', ok: true },
            { text: 'El costo de oportunidad es relevante aunque no se registre en contabilidad', ok: true },
            { text: 'Todo costo fijo asignado es relevante', ok: false },
          ],
          why: 'Cuenta lo que es **futuro** y **diferente** entre opciones: fijos evitables y costo de oportunidad sí; hundidos y fijos asignados que no desaparecen, no.',
        },
      },
      {
        ask: 'Ya pagaste **$150** por un boleto de cine y la película es mala. ¿Qué papel juegan esos $150 al decidir si te quedas?',
        options: [
          { text: 'Ninguno: son hundidos, se gastaron te quedes o te vayas', ok: true, reply: '¡Exacto! Decide con lo que ganas **de aquí en adelante**.' },
          { text: 'Debes quedarte para «recuperarlos»', reply: 'Quedarte no te los devuelve. Se gastaron pase lo que pase.' },
          { text: 'Son costo de oportunidad', reply: 'No: el costo de oportunidad es lo que dejas de ganar al elegir. Los $150 ya se fueron.' },
        ],
      },
      { tip: 'Pregunta mágica: **¿este costo cambia según lo que elija, de aquí en adelante?** Si no, no cuenta.' },
    ],
    // Fabricar o comprar y pedidos especiales
    [
      { text: 'Don Beto necesita **4,000 escudos bordados**. Hacerlos le cuesta **$18** variables cada uno más **$12,000** de fijos evitables, y si deja de bordar podría rentar ese espacio en **$8,000**.' },
      {
        calc: {
          question: '¿Cuál es el **costo relevante de fabricar** los escudos?',
          answer: 92000,
          hint: 'unidades × CV + fijos evitables + costo de oportunidad.',
          why: '4,000 × 18 + 12,000 + 8,000 = 72,000 + 20,000 = **$92,000**.',
        },
      },
      {
        ask: 'Un proveedor se los vende en **$22** cada uno ($88,000 en total). ¿Qué conviene?',
        options: [
          { text: 'Comprar: ahorra $4,000', ok: true, reply: '¡Bien! 92,000 − 88,000 = $4,000 a favor de comprar.' },
          { text: 'Fabricar: $18 es menos que $22', reply: 'Comparar solo el variable olvida los fijos evitables y la renta que dejaría de cobrar.' },
          { text: 'Da igual, cuestan lo mismo', reply: 'Fabricar cuesta $92,000 y comprar $88,000: no es lo mismo.' },
        ],
      },
      {
        calc: {
          question: 'Pedido especial: una escuela pide **500 uniformes a $130**. El CV es **$90** y el bordado especial cuesta **$8,000**. Hay capacidad ociosa. ¿Cuál es la **utilidad incremental**?',
          answer: 12000,
          hint: 'unidades × (precio − CV) − costos específicos. Los fijos de siempre no cambian.',
          why: '500 × (130 − 90) − 8,000 = 20,000 − 8,000 = **$12,000** → conviene aceptar. Los $60,000 de fijos se pagan igual: no se prorratean al pedido.',
        },
      },
      { text: 'Acepta el pedido. Mira cómo se mueve la balanza de Aguja de Oro con cada paso.' },
      {
        balance: {
          title: 'El pedido de la escuela en la balanza',
          start: { a: 500000, p: 150000, c: 350000 },
          ops: [
            { story: 'Compra tela **a crédito** por **$20,000** para el pedido.', options: [{ text: SUBE_AP, ok: true }, { text: SUBE_AC }, { text: CAMBIO }], d: { a: 20000, p: 20000, c: 0 }, why: 'Entra inventario (activo) y nace una deuda con el proveedor (pasivo).' },
            { story: 'Entrega y vende los 500 uniformes **a crédito** en **$65,000**.', options: [{ text: CAMBIO }, { text: SUBE_AC, ok: true }, { text: SUBE_AP }], d: { a: 65000, p: 0, c: 65000 }, why: 'Sube Clientes (activo) y la venta, un ingreso, aumenta el capital.' },
            { story: 'Registra el costo del pedido: **$53,000** salen de inventarios.', options: [{ text: BAJA_AC, ok: true }, { text: CAMBIO }, { text: SUBE_AP }], d: { a: -53000, p: 0, c: -53000 }, why: 'Baja el inventario (activo) y el costo de ventas reduce el capital.' },
            { story: 'La escuela paga los **$65,000**.', options: [{ text: SUBE_AC }, { text: BAJA_AC }, { text: CAMBIO, ok: true }], d: { a: 0, p: 0, c: 0 }, why: 'Sube el efectivo y baja Clientes por lo mismo.' },
          ],
        },
      },
      { tip: 'Pedido especial con capacidad ociosa: acepta si el precio supera el **costo incremental**. Sin capacidad ociosa, suma el margen de las ventas que perderías.' },
    ],
  ],
}
