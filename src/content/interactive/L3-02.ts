import type { InteractiveLesson } from './types'

export const intL302: InteractiveLesson = {
  lessonId: 'L3-02',
  sections: [
    // Costeo por órdenes de producción
    [
      { text: 'Repaso integrador 🍦: **Paletas Polo Norte** hace paletas en línea todos los días, y además acepta **pedidos a la medida** para fiestas. Cada pedido lleva su propia **hoja de costos por orden**.' },
      { text: 'Los CIF reales se conocen hasta el cierre, así que al inicio del año fija una **tasa predeterminada**: espera **$360,000** de CIF y **12,000 horas** de MOD.' },
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
          question: 'La orden #15 (paletas para una boda) usa MPD **$6,000** y MOD **$4,500** en **150 horas**. ¿Cuántos **CIF se aplican**?',
          answer: 4500,
          hint: 'tasa × horas de la orden (no × pesos de MOD).',
          why: '30 × 150 = **$4,500**. La tasa es «por hora», así que va con horas, no con los $4,500 de MOD.',
        },
      },
      {
        calc: {
          question: '¿Cuánto **cuesta en total** la orden #15?',
          answer: 15000,
          hint: 'MPD + MOD + CIF aplicados.',
          why: '6,000 + 4,500 + 4,500 = **$15,000**.',
        },
      },
      {
        entry: {
          title: 'Polo Norte entrega la orden #15',
          story: 'Vende la orden a crédito en **$21,000**. Su costo acumulado es **$15,000**. Registra la venta y la salida del inventario.',
          lines: [
            { account: 'Clientes', side: 'D', amount: 21000, why: 'El cliente te queda a deber: sube un activo, se carga.' },
            { account: 'Ventas', side: 'C', amount: 21000, why: 'Es un ingreso: se abona.' },
            { account: 'Costo de ventas', side: 'D', amount: 15000, why: 'El costo de la orden pasa a gasto: se carga.' },
            { account: 'Inventarios', side: 'C', amount: 15000, why: 'Las paletas salen del almacén: baja un activo, se abona.' },
          ],
        },
      },
      {
        ask: 'Al cierre, los CIF reales fueron **$372,000** y se aplicaron **$360,000**. ¿Qué pasó?',
        options: [
          { text: 'Hubo **subaplicación** de $12,000 y se ajusta, normalmente contra el costo de ventas', ok: true, reply: '¡Bien! Se aplicó menos de lo real. La diferencia se ajusta, normalmente contra el costo de ventas.' },
          { text: 'Hubo **sobreaplicación** de $12,000', reply: 'Sobreaplicar sería aplicar **más** de lo real. Aquí se aplicó menos.' },
          { text: 'No pasa nada: la tasa ya estaba fijada', reply: 'La tasa sirve para cotizar, pero al final la diferencia contra lo real **sí se ajusta**.' },
        ],
      },
      { tip: 'Costo de la orden = **MPD + MOD + tasa × base real** de la orden.' },
    ],
    // Costeo por procesos y unidades equivalentes
    [
      { text: 'La línea diaria de paletas de limón es producción **continua** de artículos iguales: los costos se juntan por proceso y se dividen entre las unidades.' },
      { text: 'Al cierre hay paletas a medio hacer. Se convierten a **unidades equivalentes (UE)**: dos vasos a la mitad = un vaso lleno 🥛.' },
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
            done: 'UE = terminadas + en proceso × % de avance. Más avance o más piezas en proceso = más UE.',
          },
        },
      },
      {
        ask: 'Polo Norte terminó **8,000** paletas y quedan **2,000** en proceso con **100%** de materiales y **25%** de conversión. ¿Cuántas UE hay de cada una?',
        options: [
          { text: 'Materiales 10,000; conversión 8,500', ok: true, reply: '¡Exacto! 8,000 + 2,000 × 100% = 10,000 y 8,000 + 2,000 × 25% = 8,500.' },
          { text: 'Materiales 10,000; conversión 10,000', reply: 'El trabajo apenas va al 25%: solo cuentan 500 UE de las 2,000 en proceso.' },
          { text: 'Materiales 8,500; conversión 8,500', reply: 'El material se puso completo al inicio: las 2,000 en proceso cuentan al 100%.' },
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
          question: 'Materiales cuestan **$12 por UE** y conversión **$8 por UE**. ¿Cuánto vale el **inventario final** en proceso (2,000 al 100% de materiales y 25% de conversión)?',
          answer: 28000,
          hint: 'usa las UE en proceso, no las piezas físicas, para la conversión.',
          why: '2,000 × 12 + 500 × 8 = 24,000 + 4,000 = **$28,000**. Las 8,000 terminadas se transfieren a 8,000 × 20 = $160,000.',
        },
      },
      { tip: 'Materiales y conversión llevan **UE separadas**: el material entra completo al inicio y el trabajo avanza poco a poco.' },
    ],
    // Costeo basado en actividades (ABC)
    [
      { text: 'Polo Norte hace dos paletas: la **de agua** (mucho volumen, fácil) y la **gourmet** (poco volumen, muchas preparaciones de máquina). Con una sola tasa, ¿quién paga de más?' },
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
      { text: 'Datos: preparación **$75,000** (30 preparaciones) y maquinado **$150,000** (6,000 horas máquina). La gourmet (1,000 piezas) usa **24 preparaciones** y **1,000 horas**.' },
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
        ask: 'Con una **tasa única** (225,000 ÷ 6,000 = $37.50 por hora) la gourmet recibía solo **$37.50** de CIF por pieza. Con ABC recibe **$85**. ¿Qué pasaba?',
        options: [
          { text: 'La gourmet estaba **subcosteada**: parecía más barata de lo que era', ok: true, reply: '¡Eso! La tasa única subcostea lo complejo y de bajo volumen, y sobrecostea lo de alto volumen.' },
          { text: 'La gourmet estaba sobrecosteada', reply: 'Al revés: con tasa única se le cargaba **menos** de lo que de verdad consume.' },
          { text: 'Da igual: los CIF totales son los mismos', reply: 'El total sí es igual ($225,000), pero se reparte mal entre productos, y eso engaña al fijar precios.' },
        ],
      },
      { tip: 'ABC es como pagar la cuenta del restaurante **según lo que pidió cada quien**, no en partes iguales.' },
    ],
    // Cómo elegir el sistema
    [
      { text: 'Órdenes y procesos dicen **cómo se produce**. ABC dice **cómo se reparten los CIF**, así que se puede combinar con cualquiera.' },
      {
        sort: {
          title: '¿Órdenes o procesos?',
          buckets: ['Órdenes', 'Procesos'],
          items: [
            { text: 'Paletas personalizadas para una boda', bucket: 0, why: 'Cada pedido es distinto: hoja de costos por orden.' },
            { text: 'Línea diaria de paletas de limón', bucket: 1, why: 'Producción continua de artículos iguales.' },
            { text: 'Constructora de casas', bucket: 0, why: 'Cada obra es única.' },
            { text: 'Fábrica de refrescos', bucket: 1, why: 'Producto homogéneo, costo por departamento.' },
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
            { text: 'Es más preciso pero más costoso de mantener', ok: true },
            { text: 'Conviene cuando los CIF pesan mucho y hay productos muy distintos', ok: true },
            { text: 'Sustituye por completo al costeo por procesos', ok: false },
          ],
          why: 'ABC responde **cómo asignar los CIF**, no cómo se produce. Vale la pena cuando los CIF son grandes y la mezcla es diversa.',
        },
      },
      {
        spot: {
          title: '¿Cuál está mal?',
          story: 'Polo Norte vende a crédito la orden #22 en **$26,000**. La orden costó **$18,000**. El auxiliar registra:',
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
      { tip: 'Órdenes: producto único. Procesos: producto igual y UE. ABC: varias tasas por actividad.' },
    ],
  ],
}
