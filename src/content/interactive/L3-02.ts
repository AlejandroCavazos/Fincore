import type { InteractiveLesson } from './types'

export const intL302: InteractiveLesson = {
  lessonId: 'L3-02',
  sections: [
    // ¿Cuánto costó este pedido?
    [
      { text: '**Paletas Polo Norte** 🍦 acepta pedidos a la medida. Hoy entregó paletas para una boda, y cada pedido es distinto.' },
      {
        ask: '¿Cómo sabe cuánto le costó **ese** pedido?',
        options: [
          { text: 'Llevando una ficha con los costos de ese pedido', ok: true, reply: '¡Eso! Se llama **hoja de costos por orden**: una ficha por pedido.' },
          { text: 'Dividiendo lo del mes entre todos los pedidos por igual', reply: 'Cada pedido es distinto: unos llevan más fruta y más horas. Hace falta **una ficha por pedido**.' },
          { text: 'Esperando a fin de año', reply: 'Para cobrarle al cliente necesita saberlo ya. Lleva **una ficha por pedido**.' },
        ],
      },
      { text: 'En la ficha:\n🍓 **MPD** y 👩‍🍳 **MOD** se cargan directo a la orden.\n🏭 Los **CIF** se **aplican** con una tasa fijada al inicio del año: CIF presupuestados ÷ horas presupuestadas.\nPolo Norte espera **$360,000** de CIF y **12,000 horas** de MOD.' },
      {
        calc: {
          question: '¿Cuál es la **tasa de CIF** por hora de MOD?',
          answer: 30,
          hint: 'CIF presupuestados ÷ horas presupuestadas.',
          why: '360,000 ÷ 12,000 = **$30 por hora** de MOD.',
        },
      },
      {
        calc: {
          question: 'La orden de la boda usa MPD **$6,000** y MOD **$4,500** en **150 horas**. ¿Cuánto **cuesta en total**?',
          answer: 15000,
          hint: 'CIF aplicados = 30 × 150 horas. Luego MPD + MOD + CIF.',
          why: 'CIF = 30 × 150 = $4,500. Total = 6,000 + 4,500 + 4,500 = **$15,000**. Ojo: la tasa va con **horas**, no con pesos de MOD.',
        },
      },
      {
        entry: {
          title: 'Polo Norte entrega la orden de la boda',
          story: 'La vende a crédito en **$21,000**. Su costo es **$15,000**. Registra la venta y la salida del inventario.',
          lines: [
            { account: 'Clientes', side: 'D', amount: 21000, why: 'El cliente queda a deber: sube un activo, se carga.' },
            { account: 'Ventas', side: 'C', amount: 21000, why: 'Es un ingreso: se abona.' },
            { account: 'Costo de ventas', side: 'D', amount: 15000, why: 'El costo de la orden pasa a gasto: se carga.' },
            { account: 'Inventarios', side: 'C', amount: 15000, why: 'Las paletas salen del almacén: baja un activo, se abona.' },
          ],
        },
      },
      {
        ask: 'Al cierre, los CIF reales fueron **$372,000** y se aplicaron **$360,000**. ¿Qué pasó?',
        options: [
          { text: 'Se aplicó de menos (subaplicación) $12,000; se ajusta, normalmente contra el costo de ventas', ok: true, reply: '¡Bien! Se aplicó menos de lo real y la diferencia se ajusta.' },
          { text: 'Se aplicó de más (sobreaplicación) $12,000', reply: 'Sobreaplicar sería aplicar **más** de lo real. Aquí se aplicó **menos**: es subaplicación.' },
          { text: 'No pasa nada: la tasa ya estaba fijada', reply: 'La tasa sirve para cotizar a tiempo, pero al final la diferencia contra lo real **sí se ajusta**.' },
        ],
      },
      { tip: 'Costo de la orden = **MPD + MOD + tasa × horas reales** de la orden.' },
    ],
    // ¿Y las paletas a medias?
    [
      { text: 'La línea de paletas de limón 🍋 trabaja **todos los días** haciendo paletas iguales. Al cierre del mes quedan algunas **a medio hacer**.' },
      {
        ask: 'Tienes **2 vasos llenos a la mitad** 🥛. ¿A cuántos vasos llenos equivalen?',
        options: [
          { text: 'A 1 vaso lleno', ok: true, reply: '¡Exacto! Esa es la idea de las **unidades equivalentes**.' },
          { text: 'A 2 vasos llenos', reply: 'Cada uno está a la mitad: 2 × ½ = **1 vaso lleno**.' },
          { text: 'A ninguno', reply: 'Sí tienen líquido: 2 mitades juntas llenan **1 vaso**.' },
        ],
      },
      { text: 'En producción continua, los costos se juntan **por proceso** y se dividen entre las unidades. Lo que va a medias se cuenta en **unidades equivalentes (UE)**:\nUE = terminadas + en proceso × % de avance.\nMateriales y conversión (MOD + CIF) llevan UE **separadas**: el material entra completo al inicio y el trabajo avanza poco a poco.' },
      {
        sim: {
          title: 'Unidades equivalentes de conversión',
          inputs: [
            { key: 'p', label: 'Paletas en proceso al cierre', min: 0, max: 4000, step: 500, value: 2000 },
            { key: 'a', label: '% de avance de conversión', min: 0, max: 100, step: 5, value: 25 },
          ],
          outputs: [
            { label: 'Paletas terminadas', calc: () => 8000 },
            { label: 'UE de conversión', calc: (x) => 8000 + (x.p * x.a) / 100, main: true },
          ],
          goal: {
            text: 'Con **8,000 terminadas**, logra **11,000 UE** de conversión o más.',
            check: (x) => 8000 + (x.p * x.a) / 100 >= 11000,
            done: 'Más avance o más paletas en proceso = más UE.',
          },
        },
      },
      {
        ask: 'Terminó **8,000** paletas y quedan **2,000** en proceso con **100 %** de materiales y **25 %** de conversión. ¿Cuántas UE hay de cada una?',
        options: [
          { text: 'Materiales 10,000; conversión 8,500', ok: true, reply: '¡Exacto! 8,000 + 2,000 × 100 % = 10,000 y 8,000 + 2,000 × 25 % = 8,500.' },
          { text: 'Materiales 10,000; conversión 10,000', reply: 'El trabajo apenas va al 25 %: solo cuentan 500 UE de las 2,000. Conversión = **8,500**.' },
          { text: 'Materiales 8,500; conversión 8,500', reply: 'El material entró completo: las 2,000 en proceso cuentan al 100 %. Materiales = **10,000**.' },
        ],
      },
      {
        calc: {
          question: 'Costos de conversión del mes: **$68,000**. Con **8,500 UE**, ¿cuánto cuesta cada UE de conversión?',
          answer: 8,
          hint: 'costo del elemento ÷ sus UE.',
          why: '68,000 ÷ 8,500 = **$8 por UE**.',
        },
      },
      {
        calc: {
          question: 'Materiales cuestan **$12 por UE** y conversión **$8 por UE**. ¿Cuánto vale el **inventario final** en proceso (2,000 al 100 % de materiales y 25 % de conversión)?',
          answer: 28000,
          hint: 'materiales: 2,000 × 12; conversión: 500 UE × 8.',
          why: '2,000 × 12 + 500 × 8 = 24,000 + 4,000 = **$28,000**. Las 8,000 terminadas se transfieren a 8,000 × (12 + 8) = $160,000.',
        },
      },
      { tip: '**UE = terminadas + en proceso × % de avance**, una cuenta para materiales y otra para conversión.' },
    ],
    // ¿Quién paga los gastos compartidos?
    [
      {
        ask: 'Cenas con 4 amigos 🍽️. Ellos piden carne y tú solo un refresco. ¿Es justo dividir la cuenta en partes iguales?',
        options: [
          { text: 'No: cada quien debería pagar lo que consumió', ok: true, reply: '¡Eso! Esa es justo la idea del costeo **ABC**.' },
          { text: 'Sí: así es más fácil', reply: 'Es más fácil, pero pagarías por la carne de otros. Lo justo es pagar **según lo que consumes**.' },
          { text: 'Da igual: el total es el mismo', reply: 'El total sí es igual, pero se reparte mal. Lo justo es pagar **según lo que consumes**.' },
        ],
      },
      { text: 'Lo tradicional reparte los CIF con **una sola tasa** (horas de MOD u horas máquina). **ABC** los separa en **actividades**, cada una con su **inductor**: lo que hace que esa actividad cueste más. Cada producto paga según lo que usa.' },
      {
        match: {
          title: 'Une cada actividad con su inductor de costo',
          pairs: [
            ['Preparación de máquinas', 'Número de preparaciones'],
            ['Inspección de calidad', 'Número de inspecciones'],
            ['Maquinado', 'Horas máquina'],
          ],
        },
      },
      { text: 'Polo Norte: preparación **$75,000** (30 preparaciones) y maquinado **$150,000** (6,000 horas máquina). La paleta **gourmet** (1,000 piezas) usa **24 preparaciones** y **1,000 horas**.' },
      {
        calc: {
          question: '¿Cuál es la tasa de **preparación** por cada preparación?',
          answer: 2500,
          hint: 'costo de la actividad ÷ total del inductor.',
          why: '75,000 ÷ 30 = **$2,500 por preparación**. Maquinado: 150,000 ÷ 6,000 = $25 por hora.',
        },
      },
      {
        calc: {
          question: 'Con ABC, ¿cuántos CIF le tocan a **cada paleta gourmet**?',
          answer: 85,
          hint: '(24 × 2,500 + 1,000 × 25) ÷ 1,000 piezas.',
          why: '24 × 2,500 + 1,000 × 25 = 60,000 + 25,000 = $85,000 ÷ 1,000 = **$85 por paleta**.',
        },
      },
      {
        ask: 'Con una **tasa única** (225,000 ÷ 6,000 = $37.50 por hora) la gourmet recibía **$37.50** de CIF por pieza. Con ABC recibe **$85**. ¿Qué pasaba?',
        options: [
          { text: 'La gourmet parecía más barata de lo que era (subcosteada)', ok: true, reply: '¡Eso! La tasa única subcostea lo complejo y de poco volumen, y sobrecostea lo de mucho volumen.' },
          { text: 'La gourmet parecía más cara de lo que era (sobrecosteada)', reply: 'Al revés: con tasa única se le cargaba **menos** de lo que de verdad usa.' },
          { text: 'Da igual: los CIF totales son los mismos', reply: 'El total sí es igual ($225,000), pero se reparte mal, y eso engaña al fijar precios.' },
        ],
      },
    ],
    // ¿Qué sistema me conviene?
    [
      { text: 'Ya conoces tres sistemas:\n📝 **Órdenes:** cada pedido es distinto; una ficha por orden.\n🏭 **Procesos:** producto igual y continuo; costo por proceso y UE.\n🎯 **ABC:** varias tasas por actividad para repartir los CIF.' },
      {
        sort: {
          title: '¿Órdenes o procesos?',
          buckets: ['Órdenes', 'Procesos'],
          items: [
            { text: 'Imprenta de invitaciones distintas para cada cliente', bucket: 0, why: 'Cada pedido es distinto: hoja de costos por orden.' },
            { text: 'Línea diaria de paletas de limón', bucket: 1, why: 'Producción continua de artículos iguales.' },
            { text: 'Constructora de casas', bucket: 0, why: 'Cada obra es única.' },
            { text: 'Fábrica de refrescos', bucket: 1, why: 'Producto igual, costo por departamento.' },
            { text: 'Mueblería a la medida', bucket: 0, why: 'Se fabrica a pedido.' },
            { text: 'Planta de cemento', bucket: 1, why: 'Producción continua y homogénea.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Qué es cierto sobre ABC? Marca todas.',
          items: [
            { text: 'Se puede combinar con órdenes o con procesos', ok: true },
            { text: 'Es más preciso, pero más costoso de mantener', ok: true },
            { text: 'Conviene cuando los CIF pesan mucho y hay productos muy distintos', ok: true },
            { text: 'Reparte todos los CIF con una sola base', ok: false },
          ],
          why: 'ABC usa **varias tasas**, una por actividad. Responde **cómo repartir los CIF**, no cómo se produce, por eso se combina con órdenes o procesos.',
        },
      },
      {
        spot: {
          title: '¿Cuál está mal?',
          story: 'Polo Norte vende a crédito otra orden en **$26,000**. La orden costó **$18,000**. El auxiliar registra:',
          lines: [
            { account: 'Clientes', side: 'D', amount: 26000 },
            { account: 'Ventas', side: 'C', amount: 26000 },
            { account: 'Costo de ventas', side: 'D', amount: 18000 },
            { account: 'Inventarios', side: 'D', amount: 18000 },
          ],
          wrong: 3,
          why: 'Las paletas **salen** del almacén: el inventario baja, así que se **abona**. Con dos cargos la póliza ni siquiera cuadra.',
        },
      },
      { tip: '**Órdenes** y **procesos** dicen cómo se produce. **ABC** dice cómo se reparten los CIF.' },
    ],
  ],
}
