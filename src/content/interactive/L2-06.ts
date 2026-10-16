import type { InteractiveLesson } from './types'

const pv = (p: number, n: number, r: number) => (p * (1 - Math.pow(1 + r / 100, -n))) / (r / 100)

export const intL206: InteractiveLesson = {
  lessonId: 'L2-06',
  sections: [
    // Arrendamientos: modelo del arrendatario
    [
      { text: 'La cafetería renta un local por 4 años ☕. Ya se comprometió a pagar todas esas rentas, así que anota una **deuda** (pasivo por arrendamiento) y el **derecho a usar el local** (activo por derecho de uso).' },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Arrendatario', 'Quien renta y usa el bien'],
            ['Activo por derecho de uso', 'Tu derecho a usar el bien rentado'],
            ['Pasivo por arrendamiento', 'La deuda por las rentas que faltan'],
            ['Valor presente', 'Lo que valen hoy pagos que harás en el futuro'],
            ['Tasa incremental de financiamiento', 'La tasa que te cobraría un banco por un préstamo parecido'],
          ],
        },
      },
      { text: 'La deuda **no** es la suma simple de las rentas: un peso de dentro de 3 años vale menos que un peso hoy. Juega con los datos:' },
      {
        sim: {
          title: 'El local de la cafetería',
          inputs: [
            { key: 'p', label: 'Renta al final de cada año', min: 10000, max: 40000, step: 5000, value: 20000 },
            { key: 'n', label: 'Años del contrato', min: 2, max: 10, step: 1, value: 5 },
            { key: 'r', label: 'Tasa anual (%)', min: 2, max: 12, step: 1, value: 6 },
          ],
          outputs: [
            { label: 'Suma simple de las rentas', calc: (x) => x.p * x.n },
            { label: 'Pasivo inicial (valor presente)', calc: (x) => pv(x.p, x.n, x.r), main: true },
            { label: 'Diferencia', calc: (x) => x.p * x.n - pv(x.p, x.n, x.r) },
          ],
          goal: {
            text: 'Haz que la diferencia entre la suma simple y el pasivo sea de **$30,000 o más**.',
            check: (x) => x.p * x.n - pv(x.p, x.n, x.r) >= 30000,
            done: 'Más años y una tasa más alta hacen que los pagos futuros valgan menos hoy. Con $20,000 por 5 años al 6 % el pasivo es **$84,247.28**, no $100,000.',
          },
        },
      },
      {
        sort: {
          title: '¿Va al balance o puede ir directo a gasto?',
          buckets: ['Activo y pasivo en el balance', 'Puede ir a gasto (exención)'],
          items: [
            { text: 'Renta de un local por 4 años', bucket: 0, why: 'Es un arrendamiento largo de un bien importante: se reconocen activo y pasivo.' },
            { text: 'Renta de una bodega por 8 meses', bucket: 1, why: 'Es de **corto plazo** (12 meses o menos): la exención permite gasto en línea recta.' },
            { text: 'Renta de una impresora pequeña de bajo valor', bucket: 1, why: 'Es un **activo de bajo valor**: puede usarse la exención.' },
            { text: 'Renta de un camión de reparto por 3 años', bucket: 0, why: 'Más de 12 meses y no es de bajo valor: va al balance.' },
          ],
        },
      },
      { tip: 'Pasivo inicial = **valor presente de los pagos**, con la tasa implícita o, si no se puede saber, la tasa incremental. El activo parte de ese mismo importe.' },
    ],
    // Medición posterior
    [
      { text: 'Después, la deuda **cobra interés** (saldo × tasa) y baja con cada pago. El activo se **deprecia**, normalmente en línea recta durante el plazo.' },
      {
        tacct: {
          title: 'La deuda del taller durante el año 1',
          account: 'Pasivo por arrendamiento',
          moves: [
            { story: 'Firma el contrato: valor presente de las rentas **$100,000**.', side: 'C', amount: 100000, why: 'Nace la deuda: un pasivo aumenta con abono.' },
            { story: 'Al cierre se reconoce el interés: 100,000 × 10 % = **$10,000**.', side: 'C', amount: 10000, why: 'El interés hace crecer la deuda: abono.' },
            { story: 'Paga la renta del año: **$30,000**.', side: 'D', amount: 30000, why: 'El pago reduce la deuda: cargo. Saldo final: 100,000 + 10,000 − 30,000 = $80,000.' },
          ],
        },
      },
      {
        calc: {
          question: 'La tiendita renta una vitrina refrigerada. Pasivo inicial **$50,000**, tasa **8 %**, pago del año **$15,000**. ¿Cuánto se debe al final del año?',
          answer: 39000,
          hint: 'primero interés = saldo × tasa; luego saldo + interés − pago.',
          why: 'Interés = 50,000 × 0.08 = 4,000. Pasivo final = 50,000 + 4,000 − 15,000 = **$39,000**. Solo $11,000 del pago bajó la deuda; el resto cubrió intereses.',
        },
      },
      {
        entry: {
          title: 'Registra los gastos del año 1 del taller',
          story: 'Activo por derecho de uso de **$100,000** a 5 años (depreciación **$20,000**) e interés del año de **$10,000**.',
          lines: [
            { account: 'Gasto por intereses', side: 'D', amount: 10000, why: 'Es el costo del financiamiento del año: gasto, se carga.' },
            { account: 'Gasto por depreciación', side: 'D', amount: 20000, why: '100,000 ÷ 5 años = 20,000: gasto, se carga.' },
            { account: 'Pasivo por arrendamiento', side: 'C', amount: 10000, why: 'El interés aumenta la deuda: abono.' },
            { account: 'Depreciación acumulada del activo por derecho de uso', side: 'C', amount: 20000, why: 'Baja el valor del activo: la depreciación acumulada se abona.' },
          ],
        },
      },
      {
        ask: 'Con este modelo, ¿qué ve el taller en su **estado de resultados** por el local rentado?',
        options: [
          { text: 'Un gasto de renta por $30,000', reply: 'Antes así era, pero ahora el arrendatario reconoce activo y pasivo, así que el gasto se divide en otros dos.' },
          { text: 'Gasto por intereses y gasto por depreciación', ok: true, reply: '¡Eso! En lugar de renta aparecen **intereses** (de la deuda) y **depreciación** (del activo).' },
          { text: 'Nada: todo queda en el balance', reply: 'El balance tiene el activo y el pasivo, pero cada año sí pasan gastos al estado de resultados.' },
        ],
      },
      { tip: 'Interés = saldo × tasa. Pasivo final = saldo + interés − pago. Depreciación = activo ÷ plazo (o la vida útil, si es menor).' },
    ],
    // Control y consolidación
    [
      { text: 'Cuando **Grupo Tacos Felices** 🌮 (la **controladora**) manda sobre otra empresa (la **subsidiaria**), presenta sus números como un solo negocio: eso es **consolidar**.' },
      {
        multi: {
          title: '¿Qué elementos forman el control? Marca todos.',
          items: [
            { text: 'Poder sobre las actividades relevantes de la otra empresa', ok: true },
            { text: 'Exposición o derecho a rendimientos variables', ok: true },
            { text: 'Capacidad de usar ese poder para afectar esos rendimientos', ok: true },
            { text: 'Tener siempre el 100 % de las acciones', ok: false },
            { text: 'Que las dos empresas estén en la misma ciudad', ok: false },
          ],
          why: 'Control = **poder + rendimientos variables + capacidad de usar el poder**. Normalmente da más del 50 % de los votos, pero importa la realidad.',
        },
      },
      {
        sort: {
          title: '¿Qué es cada inversión de Grupo Tacos Felices?',
          buckets: ['Subsidiaria (se consolida)', 'Asociada (método de participación)', 'Negocio conjunto'],
          items: [
            { text: 'Tortillería: 90 % de los votos y decide todo', bucket: 0, why: 'Tiene poder y lo usa: control.' },
            { text: 'Salsería: 30 % y un lugar en el consejo, pero no manda', bucket: 1, why: 'Influye sin controlar: influencia significativa.' },
            { text: 'Food truck: 50 % con otro socio y todo se decide entre los dos', bucket: 2, why: 'Control **conjunto**: negocio conjunto.' },
            { text: 'Cafetería: 40 %, pero un acuerdo le da la mayoría del consejo', bucket: 0, why: 'Puede haber control con menos del 50 % por acuerdos o derechos contractuales.' },
          ],
        },
      },
      {
        match: {
          title: 'Une cada caso con su norma',
          pairs: [
            ['Consolidar subsidiarias', 'NIF B-8 / IFRS 10'],
            ['Método de participación en asociadas', 'NIF C-7 / IAS 28'],
          ],
        },
      },
      { tip: 'No cuentes solo acciones: pregunta **¿quién decide de verdad?** Control → consolidas. Influencia significativa → método de participación.' },
    ],
    // Eliminaciones intercompañía
    [
      { text: 'Consolidar es presentar al grupo como **una sola entidad**. Se suma renglón por renglón y luego se **elimina** lo que pasó entre ellas. Como en una familia: si tu hermano te debe $500, la familia no es más rica.' },
      {
        order: {
          title: 'Ordena los pasos para consolidar',
          steps: [
            'Juntar los estados de la controladora y de la subsidiaria',
            'Sumar renglón por renglón',
            'Eliminar lo de dentro del grupo: inversión contra capital, saldos, ventas y compras, utilidades no realizadas',
            'Mostrar aparte la participación no controladora',
            'Presentar al grupo como una sola entidad económica',
          ],
          done: 'Primero **sumas**, luego **eliminas**, y la parte de otros socios va como **participación no controladora**.',
        },
      },
      {
        calc: {
          question: 'Clientes: controladora **$200,000** (incluye **$20,000** que le debe la subsidiaria) y subsidiaria **$70,000**. ¿Cuánto es Clientes consolidado?',
          answer: 250000,
          hint: 'suma los dos renglones y resta lo que se deben entre ellas.',
          why: '200,000 + 70,000 − 20,000 = **$250,000**. Y los proveedores de la subsidiaria también bajan esos $20,000.',
        },
      },
      {
        spot: {
          title: 'Encuentra el error en la eliminación',
          story: 'La controladora le vendió a crédito **$35,000** a la subsidiaria y aún no se cobra. El contador elimina la venta y los saldos entre ellas:',
          lines: [
            { account: 'Ventas', side: 'D', amount: 35000 },
            { account: 'Costo de ventas', side: 'C', amount: 35000 },
            { account: 'Proveedores', side: 'C', amount: 35000 },
            { account: 'Clientes', side: 'C', amount: 35000 },
          ],
          wrong: 2,
          why: 'Proveedores es un pasivo (saldo en el haber); para quitarlo se **carga**, no se abona. Así se eliminan los dos lados: clientes y proveedores.',
        },
      },
      { tip: 'Error clásico: eliminar solo un lado. Si una empresa tiene la cuenta **por cobrar**, la otra tiene la **por pagar**: elimina las dos.' },
    ],
  ],
}
