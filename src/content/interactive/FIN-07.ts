import type { InteractiveLesson } from './types'

export const intFIN07: InteractiveLesson = {
  lessonId: 'FIN-07',
  sections: [
    // ¿A dónde vamos y con qué?
    [
      { text: 'Marisol tiene una fábrica de huaraches en León 👡. Sueña con abrir su propia tienda en dos años, pero cada mes el dinero "se le va".' },
      {
        ask: '¿Qué crees que necesita primero?',
        options: [
          { text: 'Un plan: cuánto dinero necesita, de dónde sale y en qué lo usa', ok: true, reply: '¡Eso! Decidirlo por adelantado es la **planeación financiera**.' },
          { text: 'Esperar a que sobre dinero algún mes', reply: 'Sin plan, el dinero casi nunca "sobra". Primero necesita **decidir por adelantado** cuánto necesita y de dónde saldrá.' },
          { text: 'Vender más, sin anotar nada', reply: 'Vender más ayuda, pero sin plan no sabrá si le alcanza para la tienda. Le falta **planear** cuánto necesita y de dónde saldrá.' },
        ],
      },
      { text: 'Planear es como un viaje 🚗: primero eliges el destino y luego calculas gasolina, casetas y hospedaje.' },
      {
        text: 'Hay dos horizontes:\n🔭 **Estratégica:** de 3 a 5 años, grandes decisiones (abrir la tienda).\n📅 **Operativa:** de meses a un año, cifras mes por mes. Ese documento con cifras es el **presupuesto**.',
      },
      {
        rush: {
          title: '¿Estratégica u operativa?',
          seconds: 30,
          labels: ['🔭 Estratégica', '📅 Operativa'],
          items: [
            { text: 'Abrir una tienda propia en dos años', ans: 0 },
            { text: 'Cuánto pagar de piel en marzo', ans: 1 },
            { text: 'Empezar a vender en otro estado', ans: 0 },
            { text: 'Ahorrar $10,000 cada mes este año', ans: 1 },
            { text: 'Cambiar de giro: hacer también bolsas', ans: 0 },
            { text: 'Sueldos de las costureras de junio', ans: 1 },
          ],
        },
      },
      { text: 'Un buen plan parte de **supuestos** claros (cuánto subirán ventas y costos) y se **revisa**: se compara lo real contra el plan y se corrige.' },
      {
        match: {
          title: 'Une cada palabra con su idea',
          pairs: [
            ['Supuestos', '"Creo que venderé 10% más este año"'],
            ['Revisión', 'Comparar lo real contra el plan y corregir'],
            ['Presupuesto', 'Las cifras del plan, mes por mes'],
            ['Planeación estratégica', 'Abrir la tienda en dos años'],
          ],
        },
      },
      { tip: 'Para la tienda (estrategia), el presupuesto de este año de Marisol debe incluir el **ahorro de cada mes** (operación).' },
    ],
    // ¿Por dónde empieza el presupuesto?
    [
      { text: 'Marisol arma su **presupuesto maestro**: el conjunto de todos sus presupuestos del año. Tiene dos bloques: el **operativo** y el **financiero**.' },
      {
        ask: '¿Con cuál presupuesto crees que se empieza?',
        options: [
          { text: 'Con el de ventas', ok: true, reply: '¡Sí! De cuánto vas a vender depende cuánto producir, comprar y a cuánta gente contratar.' },
          { text: 'Con el de efectivo', reply: 'El efectivo depende de lo que vendas y compres, así que va después. Siempre se empieza por **ventas**.' },
          { text: 'Con los estados financieros proforma', reply: 'Esos van al final: resumen todo lo demás. Se empieza por **ventas**.' },
        ],
      },
      {
        text: '⚙️ **Operativo** (el día a día): ventas, producción, compras, mano de obra y gastos.\n💰 **Financiero** (el efecto en dinero): efectivo, inversiones en maquinaria y estados **proforma** (estados proyectados, como si el futuro ya hubiera pasado).',
      },
      {
        sort: {
          title: '¿Operativo o financiero?',
          buckets: ['⚙️ Operativo', '💰 Financiero'],
          items: [
            { text: 'Pares de huaraches que se venderán', bucket: 0, why: 'Las ventas son el arranque del bloque operativo.' },
            { text: 'Compras de piel y suela', bucket: 0, why: 'Comprar material es parte de la operación diaria.' },
            { text: 'Gastos de venta', bucket: 0, why: 'Los gastos del día a día son operativos.' },
            { text: 'Efectivo que habrá cada mes', bucket: 1, why: 'Es el efecto en dinero: bloque financiero.' },
            { text: 'Compra de una máquina cosedora', bucket: 1, why: 'Es una inversión de capital: bloque financiero.' },
            { text: 'Balance general proforma del cierre', bucket: 1, why: 'Los estados proforma cierran el bloque financiero.' },
          ],
        },
      },
      {
        order: {
          title: 'Arma el presupuesto maestro en orden',
          steps: ['Presupuesto de ventas', 'Presupuesto de producción', 'Compras, mano de obra y gastos', 'Presupuesto de efectivo', 'Estados financieros proforma'],
          done: '¡Así se arma! Todo sale de las ventas.',
        },
      },
      { text: '¿Cuántos pares fabricar?\n**Producción = Ventas esperadas + Inventario final deseado − Inventario inicial.**\nLo que ya está en bodega se **resta**: ya está hecho.' },
      {
        calc: {
          question: 'Marisol espera vender 4,000 pares. Quiere cerrar con 500 en bodega y hoy tiene 300. ¿Cuántos pares debe producir?',
          answer: 4200,
          unit: 'pares',
          hint: 'Ventas + inventario final − inventario inicial: 4,000 + 500 − 300.',
          why: '4,000 + 500 = 4,500. Menos los 300 que ya tiene = **4,200 pares**. Si sumas los 300 en vez de restarlos, te da 4,800.',
        },
      },
    ],
    // ¿Alcanza el dinero cada mes?
    [
      { text: 'En junio Marisol vendió muchísimo... y aun así casi no le alcanza para pagar sueldos 😰.' },
      {
        ask: '¿Cómo puede pasar eso?',
        options: [
          { text: 'Vendió a crédito: parte del dinero llega después', ok: true, reply: '¡Exacto! **Vender no es cobrar.** Lo que vendió a crédito lo cobrará el mes siguiente.' },
          { text: 'Es imposible: si vendes, ya tienes el dinero', reply: 'Si vendes a crédito, el dinero llega después. **Vender no es cobrar.**' },
          { text: 'Porque vendió demasiado', reply: 'Vender mucho no es malo. El problema es que vendió **a crédito**: el dinero aún no llega.' },
        ],
      },
      { text: '**Cobros del mes** = % de contado × ventas de este mes + % a crédito × ventas del mes pasado.' },
      {
        calc: {
          question: 'Marisol vendió $100,000 en mayo y $120,000 en junio. Cobra 40% de contado y 60% al mes siguiente. ¿Cuánto cobra en junio?',
          answer: 108000,
          hint: '0.40 × 120,000 (de junio) + 0.60 × 100,000 (lo que quedó de mayo).',
          why: '0.40 × 120,000 = 48,000. 0.60 × 100,000 = 60,000. Total: **$108,000**, no los $120,000 que vendió.',
        },
      },
      {
        text: '📥 **Saldo final** = saldo inicial + cobros − pagos.\n🛟 Marisol quiere tener siempre un colchón: el **saldo mínimo**.\n🏦 Si el saldo final queda abajo: **financiamiento** = saldo mínimo − saldo final.',
      },
      {
        sim: {
          title: 'Julio: Marisol empieza con $20,000 y quiere un colchón de $25,000',
          inputs: [
            { key: 'c', label: 'Cobros del mes', min: 80000, max: 140000, step: 10000, value: 100000 },
            { key: 'p', label: 'Pagos del mes', min: 100000, max: 150000, step: 10000, value: 130000 },
          ],
          outputs: [
            { label: 'Saldo final antes de préstamo', calc: (x) => 20000 + x.c - x.p },
            { label: 'Préstamo necesario', calc: (x) => Math.max(0, 25000 - (20000 + x.c - x.p)), main: true },
          ],
          goal: {
            text: 'Encuentra una combinación en la que Marisol **no necesite préstamo**.',
            check: (x) => 20000 + x.c - x.p >= 25000,
            done: 'Cobrar más o pagar menos sube el saldo. Si aun así falta, conviene negociar el préstamo **antes** de que falte el dinero.',
          },
        },
      },
      { text: 'El presupuesto también sirve para **controlar**. **Variación** = real − presupuestado.\n✅ **Favorable:** ayuda a la utilidad (más ingreso o menos gasto).\n⚠️ **Desfavorable:** la reduce.' },
      {
        multi: {
          title: '¿Cuáles variaciones son favorables?',
          items: [
            { text: 'Ventas: plan $300,000, real $320,000', ok: true },
            { text: 'Piel: plan $50,000, real $45,000', ok: true },
            { text: 'Luz: plan $40,000, real $46,000', ok: false },
            { text: 'Ventas: plan $200,000, real $180,000', ok: false },
          ],
          why: 'Más venta o menos gasto ayuda a la utilidad: **favorable**. Gastar menos de lo planeado **no** es malo. La luz (+$6,000 de gasto) y las ventas bajas son desfavorables.',
        },
      },
    ],
  ],
}
