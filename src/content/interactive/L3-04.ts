import type { InteractiveLesson } from './types'

const SUBE_AC = 'Sube el activo y sube el capital'
const BAJA_AC = 'Bajan el activo y el capital'
const SUBE_AP = 'Sube el activo y sube el pasivo'
const CAMBIO = 'Un activo sube y otro baja (el total no cambia)'

export const intL304: InteractiveLesson = {
  lessonId: 'L3-04',
  sections: [
    // ¿Cuánto debiste gastar?
    [
      { text: 'Don Beto tiene **Uniformes Aguja de Oro** 👕, un taller de uniformes escolares. Antes de empezar el año hace su plan de gastos.' },
      {
        ask: 'Para una fiesta planeaste **$2,000** de comida para **20** invitados, pero llegaron **30** y gastaste $2,800. ¿Gastaste de más?',
        options: [
          { text: 'No necesariamente: con 30 invitados es normal gastar más', ok: true, reply: '¡Eso! Hay que comparar contra lo que **debías** gastar para 30, no para 20.' },
          { text: 'Sí: $800 de más', reply: 'Ese plan era para 20. Con 30 invitados es normal gastar más: compara contra lo que **debías** gastar para 30.' },
          { text: 'No, porque la fiesta salió bien', reply: 'Que saliera bien no dice si gastaste de más. Compara contra lo que **debías** gastar para 30 invitados.' },
        ],
      },
      { text: 'El **presupuesto maestro** junta todos los planes y empieza por las **ventas**.\n📌 **Estático:** hecho para un solo volumen, el planeado.\n🔄 **Flexible:** costo variable × volumen **real** + fijos. Dice cuánto **debiste** gastar.' },
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
      { text: 'Don Beto planeó **1,000 uniformes** con costo variable de **$90** cada uno y fijos de **$60,000** (estático: $150,000). Al final hizo **1,200** y gastó **$177,000**.' },
      {
        calc: {
          question: '¿Cuánto es el **presupuesto flexible** (lo que debió gastar para 1,200 uniformes)?',
          answer: 168000,
          hint: '90 × volumen **real** + fijos.',
          why: '90 × 1,200 + 60,000 = 108,000 + 60,000 = **$168,000**.',
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
          { text: 'Mezcla el efecto de producir más con el de gastar de más; el sobregasto real es $9,000', ok: true, reply: '¡Exacto! $18,000 se explican porque hizo 200 uniformes más. Solo $9,000 son falta de control.' },
          { text: 'Tiene razón: el plan era $150,000', reply: 'El plan era para 1,000 uniformes. Contra el flexible (1,200 uniformes) el sobregasto real es **$9,000**.' },
          { text: 'No hubo sobregasto, porque hizo más uniformes', reply: 'Aun ajustando al volumen real, gastó **$9,000** más de lo que debía.' },
        ],
      },
    ],
    // ¿Pagaste más o usaste más?
    [
      { text: 'Para cada uniforme, don Beto espera usar **2.5 m de tela a $60** el metro (su **estándar**). Este mes hizo **1,200 uniformes** y usó **3,100 m** que compró a **$56**.' },
      { text: 'La diferencia contra el estándar se parte en dos:\n💲 **Precio:** (precio real − precio estándar) × metros reales.\n📏 **Cantidad:** (metros reales − metros permitidos) × precio estándar.\nSi lo real cuesta **más** que el estándar es **desfavorable (D)**; si cuesta menos, **favorable (F)**.' },
      {
        ask: '¿Cuántos metros **permitía** el estándar para 1,200 uniformes?',
        options: [
          { text: '3,000 m', ok: true, reply: '¡Bien! 2.5 × 1,200 = 3,000 m. Se usaron 100 m de más.' },
          { text: '3,100 m', reply: 'Esos son los metros **reales**. Los permitidos salen del estándar × producción real: 2.5 × 1,200 = **3,000 m**.' },
          { text: '2,500 m', reply: 'Eso sería con 1,000 uniformes. Usa la producción **real**: 2.5 × 1,200 = **3,000 m**.' },
        ],
      },
      {
        calc: {
          question: '¿De cuánto es la **variación de precio**? (escribe el monto sin signo)',
          answer: 12400,
          hint: '(56 − 60) × 3,100.',
          why: '(56 − 60) × 3,100 = −$12,400: **$12,400 favorable**, porque pagó menos por metro.',
        },
      },
      {
        calc: {
          question: '¿De cuánto es la **variación de cantidad**?',
          answer: 6000,
          hint: '(3,100 − 3,000) × 60.',
          why: '(3,100 − 3,000) × 60 = **$6,000 desfavorable**: usó más tela de la permitida. Total: −12,400 + 6,000 = −$6,400, o sea **$6,400 favorable**.',
        },
      },
      {
        sort: {
          title: '¿Favorable o desfavorable?',
          buckets: ['Favorable (F)', 'Desfavorable (D)'],
          items: [
            { text: 'Se pagó la tela más barata que el estándar', bucket: 0, why: 'El costo real quedó abajo del estándar.' },
            { text: 'Se usaron más metros de los permitidos', bucket: 1, why: 'Más cantidad = más costo que el estándar.' },
            { text: 'Las costureras cobraron una tarifa mayor a la estándar', bucket: 1, why: 'Es la variación de tarifa de mano de obra: costo real mayor.' },
            { text: 'Se terminaron los uniformes en menos horas de las permitidas', bucket: 0, why: 'Es la variación de eficiencia de mano de obra: se usó menos.' },
          ],
        },
      },
      {
        ask: 'La tela salió barata, pero era de baja calidad y se desperdició mucha. ¿Qué suele verse?',
        options: [
          { text: 'Precio favorable y cantidad desfavorable', ok: true, reply: '¡Eso! Las variaciones se relacionan: ahorras en precio y lo pierdes en desperdicio.' },
          { text: 'Las dos favorables', reply: 'El desperdicio hace que uses más tela: la cantidad sale **desfavorable**.' },
          { text: 'Precio desfavorable y cantidad favorable', reply: 'Al revés: pagaste menos por metro (**F**), pero usaste más metros (**D**).' },
        ],
      },
    ],
    // ¿Lo ya gastado cuenta?
    [
      {
        ask: 'Ya pagaste **$150** por un boleto de cine 🎬 y la película es mala. ¿Qué papel juegan esos $150 al decidir si te quedas?',
        options: [
          { text: 'Ninguno: se gastaron te quedes o te vayas', ok: true, reply: '¡Exacto! Es un **costo hundido**. Decide con lo que ganas **de aquí en adelante**.' },
          { text: 'Debes quedarte para «recuperarlos»', reply: 'Quedarte no te los devuelve: se gastaron pase lo que pase. **No deben pesar**.' },
          { text: 'Son costo de oportunidad', reply: 'No: el costo de oportunidad es lo que **dejas de ganar** al elegir. Los $150 ya se fueron: son **hundidos**.' },
        ],
      },
      { text: 'Un costo es **relevante** si es **futuro** y **cambia** entre las opciones:\n🕳️ **Hundidos:** nunca cuentan.\n🏢 **Fijos asignados que no desaparecen:** no cuentan.\n✂️ **Fijos evitables:** sí cuentan.\n🔁 **Costo de oportunidad:** sí cuenta, aunque no se registre.' },
      {
        rush: {
          title: 'Don Beto piensa dejar de hacer mochilas. ¿Relevante o no?',
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
          title: 'Don Beto piensa cambiar su máquina de coser por una nueva. Marca lo **relevante**.',
          items: [
            { text: 'Lo que le pagarían hoy por la máquina vieja', ok: true },
            { text: 'El precio de la máquina nueva', ok: true },
            { text: 'Lo que ahorraría al año en luz y reparaciones con la nueva', ok: true },
            { text: 'Lo que costó la vieja menos su depreciación (valor en libros)', ok: false },
            { text: 'La parte de la renta general que le asignan y no cambia', ok: false },
          ],
          why: 'Cuenta lo **futuro** que cambia: el precio de venta de hoy, el de la nueva y los ahorros. El valor en libros sale de lo que ya se pagó (hundido) y la renta asignada no cambia.',
        },
      },
      { tip: 'Pregunta clave: **¿este costo cambia según lo que elija, de aquí en adelante?** Si no, no cuenta.' },
    ],
    // ¿Hacerlo, comprarlo o aceptar el pedido?
    [
      { text: 'Don Beto necesita **4,000 escudos bordados**. Hacerlos le cuesta **$18** variables cada uno. Un proveedor los vende a **$22**.' },
      {
        ask: '¿Ya puede decidir que le conviene hacerlos?',
        options: [
          { text: 'Todavía no: le falta sumar los fijos que se ahorraría y lo que dejaría de ganar con ese espacio', ok: true, reply: '¡Bien! Si deja de bordar se ahorra **$12,000** de fijos y podría rentar el espacio en **$8,000**.' },
          { text: 'Sí: $18 es menos que $22', reply: 'Comparar solo el variable es un error común. Faltan los fijos que se ahorraría y la renta que dejaría de cobrar.' },
          { text: 'Sí: siempre conviene hacerlo uno mismo', reply: 'No siempre. Hay que sumar los fijos evitables y el costo de oportunidad antes de decidir.' },
        ],
      },
      {
        calc: {
          question: 'Si deja de bordar se ahorra **$12,000** de fijos y renta el espacio en **$8,000**. ¿Cuál es el **costo relevante de fabricar** los 4,000 escudos?',
          answer: 92000,
          hint: 'unidades × variable + fijos evitables + costo de oportunidad.',
          why: '4,000 × 18 + 12,000 + 8,000 = 72,000 + 20,000 = **$92,000**.',
        },
      },
      {
        ask: 'Comprar los 4,000 escudos a $22 cuesta **$88,000**. ¿Qué conviene?',
        options: [
          { text: 'Comprar: ahorra $4,000', ok: true, reply: '¡Bien! 92,000 − 88,000 = $4,000 a favor de comprar.' },
          { text: 'Fabricar: $18 es menos que $22', reply: 'Fabricar cuesta $92,000 contando fijos evitables y renta perdida. Comprar cuesta $88,000: conviene **comprar**.' },
          { text: 'Da igual, cuestan lo mismo', reply: 'Fabricar cuesta $92,000 y comprar $88,000: conviene **comprar** y ahorra $4,000.' },
        ],
      },
      {
        calc: {
          question: '**Pedido especial:** una escuela pide **500 uniformes a $130**. El variable es **$90** y el bordado especial cuesta **$8,000** en total. Hay capacidad ociosa. ¿Cuánto **cambia la utilidad**?',
          answer: 12000,
          hint: 'unidades × (precio − variable) − costos del pedido. Los fijos de siempre no cambian.',
          why: '500 × (130 − 90) − 8,000 = 20,000 − 8,000 = **$12,000** más: conviene aceptar. Los $60,000 de fijos se pagan igual: no se reparten al pedido.',
        },
      },
      {
        balance: {
          title: 'Don Beto acepta el pedido: mira la balanza',
          start: { a: 500000, p: 150000, c: 350000 },
          ops: [
            { story: 'Compra tela **a crédito** por **$20,000** para el pedido.', options: [{ text: SUBE_AP, ok: true }, { text: SUBE_AC }, { text: CAMBIO }], d: { a: 20000, p: 20000, c: 0 }, why: 'Entra inventario (activo) y nace una deuda con el proveedor (pasivo).' },
            { story: 'Entrega y vende los 500 uniformes **a crédito** en **$65,000**.', options: [{ text: CAMBIO }, { text: SUBE_AC, ok: true }, { text: SUBE_AP }], d: { a: 65000, p: 0, c: 65000 }, why: 'Sube Clientes (activo) y la venta, un ingreso, aumenta el capital.' },
            { story: 'Registra el costo del pedido: **$53,000** salen de inventarios.', options: [{ text: BAJA_AC, ok: true }, { text: CAMBIO }, { text: SUBE_AP }], d: { a: -53000, p: 0, c: -53000 }, why: 'Baja el inventario (activo) y el costo de ventas reduce el capital.' },
            { story: 'La escuela paga los **$65,000**.', options: [{ text: SUBE_AC }, { text: BAJA_AC }, { text: CAMBIO, ok: true }], d: { a: 0, p: 0, c: 0 }, why: 'Sube el efectivo y baja Clientes por lo mismo.' },
          ],
        },
      },
      { tip: 'Pedido especial con capacidad ociosa: acepta si el precio supera el **costo extra** del pedido. Sin capacidad ociosa, suma el margen de las ventas que perderías.' },
    ],
  ],
}
