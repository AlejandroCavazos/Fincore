import type { InteractiveLesson } from './types'

const pv = (p: number, n: number, r: number) => (p * (1 - Math.pow(1 + r / 100, -n))) / (r / 100)

export const intL206: InteractiveLesson = {
  lessonId: 'L2-06',
  sections: [
    // Rentar también es deber
    [
      { text: 'Tacos Felices 🌮 firma la renta de un local por **4 años**. Antes, solo anotaba la renta de cada mes como gasto.' },
      {
        ask: 'Si ya firmó por 4 años, ¿ya tiene una deuda?',
        options: [
          { text: 'Sí: ya se comprometió a pagar todas las rentas', ok: true, reply: '¡Eso! Por eso la norma pide anotarla desde el inicio.' },
          { text: 'No: solo debe la renta de este mes', reply: 'Ya firmó: está obligado a pagar **todas** las rentas. Esa es su deuda.' },
          { text: 'Solo si se atrasa', reply: 'No depende de atrasarse: al firmar ya se comprometió a **todas** las rentas.' },
        ],
      },
      { text: 'Quien renta (**arrendatario**) anota dos cosas (NIF D-5 / IFRS 16):\n📍 **Activo por derecho de uso:** su derecho a usar el local\n🧾 **Pasivo por arrendamiento:** la deuda por las rentas\nAmbos al **valor presente** de los pagos: un peso de dentro de 3 años vale menos que uno hoy.' },
      {
        sim: {
          title: 'El local de Tacos Felices',
          inputs: [
            { key: 'p', label: 'Renta al final de cada año', min: 10000, max: 40000, step: 5000, value: 20000 },
            { key: 'n', label: 'Años del contrato', min: 2, max: 10, step: 1, value: 5 },
            { key: 'r', label: 'Tasa anual (%)', min: 2, max: 12, step: 1, value: 6 },
          ],
          outputs: [
            { label: 'Suma simple de las rentas', calc: (x) => x.p * x.n },
            { label: 'Pasivo inicial (valor presente)', calc: (x) => pv(x.p, x.n, x.r), main: true },
          ],
          goal: {
            text: 'Haz que la suma simple supere al pasivo por **$30,000 o más**.',
            check: (x) => x.p * x.n - pv(x.p, x.n, x.r) >= 30000,
            done: 'Más años y más tasa: los pagos futuros valen menos hoy. Por eso la deuda no es la suma simple.',
          },
        },
      },
      { text: 'Hay dos **exenciones** opcionales: rentas de **corto plazo** (12 meses o menos) y de **activos de bajo valor**. Esas pueden ir directo a gasto, en línea recta.' },
      {
        sort: {
          title: '¿Va al balance o puede ir a gasto?',
          buckets: ['Activo y pasivo en el balance', 'Puede ir a gasto (exención)'],
          items: [
            { text: 'Local por 4 años', bucket: 0, why: 'Largo y no es de bajo valor: activo y pasivo.' },
            { text: 'Bodega por 8 meses', bucket: 1, why: 'Corto plazo (12 meses o menos): puede ir a gasto.' },
            { text: 'Una impresora pequeña de bajo valor', bucket: 1, why: 'Activo de bajo valor: puede usar la exención.' },
            { text: 'Camión de reparto por 3 años', bucket: 0, why: 'Más de 12 meses y no es de bajo valor: va al balance.' },
            { text: 'Oficinas por 5 años', bucket: 0, why: 'Largo plazo: derecho de uso y pasivo.' },
          ],
        },
      },
      { tip: 'Renta larga → **activo por derecho de uso** + **pasivo por arrendamiento**, al valor presente. Corto plazo o bajo valor → puede ir a gasto.' },
    ],
    // ¿Cómo baja la deuda de renta?
    [
      { text: 'Pasa el primer año en el local. Cada año:\n📈 La deuda **cobra interés**: saldo × tasa\n💵 El **pago** baja la deuda\n📉 El activo se **deprecia**: activo ÷ plazo (en línea recta)' },
      {
        tacct: {
          title: 'La deuda del local durante el año 1',
          account: 'Pasivo por arrendamiento',
          moves: [
            { story: 'Firma: valor presente de las rentas **$100,000**.', side: 'C', amount: 100000, why: 'Nace la deuda: un pasivo aumenta con abono.' },
            { story: 'Al cierre, el interés: 100,000 × 10 % = **$10,000**.', side: 'C', amount: 10000, why: 'El interés hace crecer la deuda: abono.' },
            { story: 'Paga la renta del año: **$30,000**.', side: 'D', amount: 30000, why: 'El pago reduce la deuda: cargo. Saldo: 100,000 + 10,000 − 30,000 = $80,000.' },
          ],
        },
      },
      {
        calc: {
          question: 'Tacos Felices renta una vitrina. Pasivo inicial **$50,000**, tasa **8 %**, pago del año **$15,000**. ¿Cuánto se debe al **final del año**?',
          answer: 39000,
          hint: 'Interés = saldo × tasa; luego saldo + interés − pago.',
          why: 'Interés = 4,000. 50,000 + 4,000 − 15,000 = **$39,000**. Error común: restar el pago sin sumar antes el interés (35,000).',
        },
      },
      {
        calc: {
          question: 'El activo por derecho de uso de esa vitrina es **$50,000** y el contrato dura **4 años**. ¿Cuánto es la **depreciación anual**?',
          answer: 12500,
          hint: 'Activo ÷ años del plazo.',
          why: '50,000 ÷ 4 = **$12,500** por año.',
        },
      },
      {
        ask: 'Con este modelo, ¿qué ve Tacos Felices en su **estado de resultados** por el local?',
        options: [
          { text: 'Un gasto de renta', reply: 'Ya no: en lugar de renta aparecen **intereses** y **depreciación**.' },
          { text: 'Gasto por intereses y gasto por depreciación', ok: true, reply: '¡Eso! Intereses por la deuda y depreciación por el activo.' },
          { text: 'Nada: todo queda en el balance', reply: 'Cada año sí pasan gastos a resultados: **intereses** y **depreciación**.' },
        ],
      },
      { tip: 'Pasivo final = saldo + interés − pago. Depreciación = activo ÷ plazo.' },
    ],
    // ¿Quién manda en otra empresa?
    [
      { text: 'Tacos Felices compra parte de una tortillería. Si **manda** sobre ella, es la **controladora** y la tortillería, su **subsidiaria**. Juntas presentan sus números como un solo negocio: eso es **consolidar**.' },
      {
        ask: 'Tacos Felices tiene el **45 %** de los votos, pero un contrato le da derecho a dirigir lo importante. ¿Manda?',
        options: [
          { text: 'Sí: lo que importa es quién decide', ok: true, reply: '¡Bien! Puede haber control con menos del 50 % por acuerdos o contratos.' },
          { text: 'No: necesita más del 50 %', reply: 'Más del 50 % **normalmente** da control, pero no siempre. Con un contrato que le da la dirección, **sí manda**.' },
          { text: 'Solo con el 100 %', reply: 'No hace falta el 100 %. Importa quién **decide** de verdad.' },
        ],
      },
      { text: 'Hay **control** con 3 cosas juntas:\n🎛️ **Poder** sobre lo importante de la otra empresa\n📈 **Rendimientos variables:** gana o pierde con ella\n🔗 **Capacidad** de usar ese poder para afectar esos rendimientos' },
      { text: 'Sin control:\n🤝 **Influencia significativa** (participa en políticas, sin mandar) → **asociada**, método de participación\n⚖️ **Control conjunto** (todo se decide entre dos) → **negocio conjunto**' },
      {
        sort: {
          title: '¿Qué es cada inversión?',
          buckets: ['Subsidiaria (se consolida)', 'Asociada', 'Negocio conjunto'],
          items: [
            { text: 'Tortillería: 60 % de los votos y nombra a la mayoría del consejo', bucket: 0, why: 'Tiene poder y lo usa: control.' },
            { text: 'Salsería: 25 % y un consejero, participa en políticas', bucket: 1, why: 'Influye sin mandar: asociada.' },
            { text: 'Food truck: 50 % con otro socio, todo por unanimidad', bucket: 2, why: 'Control compartido: negocio conjunto.' },
            { text: 'Cafetería: 45 % más un contrato para dirigirla', bucket: 0, why: 'El contrato le da el poder: subsidiaria.' },
            { text: 'Panadería: 30 %, sin dirigir, pero influye en políticas', bucket: 1, why: 'Influencia significativa: asociada.' },
          ],
        },
      },
      { tip: 'No cuentes solo acciones: pregunta **¿quién decide de verdad?** Control → consolidas (NIF B-8 / IFRS 10).' },
    ],
    // El grupo como un solo negocio
    [
      { text: 'Consolidar es presentar al grupo como **una sola entidad**. Como en una familia: si tu hermano te debe $500, la familia no es más rica 👨‍👩‍👧.' },
      { text: 'Se suma renglón por renglón y luego se **eliminan** las operaciones entre ellas:\n🔁 Lo que se deben (por cobrar y por pagar)\n🔁 Lo que se venden y compran entre sí\n**Saldo consolidado = controladora + subsidiaria − intercompañía**' },
      {
        ask: 'Tacos Felices le vendió **$20,000** a crédito a su tortillería. Al consolidar, ¿qué eliminas?',
        options: [
          { text: 'El cliente de uno y el proveedor del otro', ok: true, reply: '¡Exacto! Elimina los **dos lados**: por cobrar y por pagar.' },
          { text: 'Solo el cliente de Tacos Felices', reply: 'Error clásico: si quitas un lado, el otro queda inflado. Elimina **los dos**.' },
          { text: 'Nada, ya está facturado', reply: 'El grupo no puede deberse a sí mismo: elimina **los dos lados**.' },
        ],
      },
      {
        calc: {
          question: 'Clientes: Tacos Felices **$200,000** (incluye **$20,000** que le debe la tortillería) y tortillería **$70,000**. ¿Cuánto es **Clientes consolidado**?',
          answer: 250000,
          hint: 'Suma los dos y resta lo que se deben entre ellas.',
          why: '200,000 + 70,000 − 20,000 = **$250,000**.',
        },
      },
      {
        calc: {
          question: 'Proveedores: Tacos Felices **$90,000** y tortillería **$60,000** (incluye los **$20,000** que le debe a Tacos Felices). ¿Cuánto es **Proveedores consolidado**?',
          answer: 130000,
          hint: 'Mismo truco: suma y resta lo intercompañía.',
          why: '90,000 + 60,000 − 20,000 = **$130,000**.',
        },
      },
      {
        calc: {
          question: 'Ventas: Tacos Felices **$500,000** (incluye **$80,000** vendidos a la tortillería) y tortillería **$300,000**, todo a terceros. ¿Cuánto son las **ventas consolidadas**?',
          answer: 720000,
          hint: 'El grupo no se vende a sí mismo: quita los $80,000.',
          why: '500,000 + 300,000 − 80,000 = **$720,000**.',
        },
      },
      { tip: 'Primero **sumas**, luego **eliminas** los dos lados. La parte de la subsidiaria que es de otros socios va como **participación no controladora**.' },
    ],
  ],
}
