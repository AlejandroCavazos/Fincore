import type { InteractiveLesson } from './types'

export const intINV16: InteractiveLesson = {
  lessonId: 'INV-16',
  sections: [
    // ¿Cómo funciona una blockchain?
    [
      { text: 'Rodrigo es analista junior en una casa de bolsa 📊. En una junta dicen: "vamos a usar blockchain". Él asiente… pero no sabe bien qué es.' },
      { text: 'Una **blockchain** es un **registro distribuido**: muchas computadoras (**nodos**) tienen copia del mismo libro de cuentas. Las operaciones se agrupan en **bloques**.' },
      { text: '🔗 Cada bloque guarda el **hash** del anterior. Un hash es una **huella digital**: un código corto que cambia por completo si alteras un solo dato.\n🤝 Los nodos deciden qué bloque sigue con un **mecanismo de consenso** (prueba de trabajo, de participación u otros).' },
      {
        ask: 'Alguien cambia en secreto un bloque viejo. ¿Qué pasa?',
        options: [
          { text: 'Su huella cambia, rompe los bloques siguientes y la mayoría de la red no lo acepta', ok: true, reply: '¡Exacto! Tendría que rehacer todos los bloques siguientes y convencer a la mayoría. Por eso es casi **inalterable**.' },
          { text: 'Un banco central lo corrige', reply: 'No hay banco central detrás. La protección viene del **diseño**: hashes encadenados y consenso.' },
          { text: 'Nada: el cambio se acepta', reply: 'Su copia ya no coincide con las demás y se detecta de inmediato. La red **no lo acepta**.' },
        ],
      },
      {
        order: {
          title: 'Arma cómo se agrega un bloque',
          steps: ['Se juntan varias operaciones en un bloque', 'El bloque guarda el hash del bloque anterior', 'Los nodos se ponen de acuerdo (consenso)', 'El bloque se encadena y todas las copias se actualizan'],
          done: '¡Eso es! Cada bloque queda amarrado al anterior por su huella.',
        },
      },
      { text: 'Dos grandes tipos:\n🌍 **Pública:** cualquiera participa y ve las operaciones (como Bitcoin o Ethereum).\n🔐 **Permisionada:** solo entran participantes autorizados, como un grupo de bancos. Gana privacidad y control, pero pierde apertura.' },
      {
        sort: {
          title: '¿Pública o permisionada?',
          buckets: ['Pública', 'Permisionada'],
          items: [
            { text: 'Cualquier persona puede descargar el software y validar', bucket: 0, why: 'Abierta a todos: pública.' },
            { text: 'Solo cinco bancos autorizados registran operaciones', bucket: 1, why: 'Participantes autorizados: permisionada.' },
            { text: 'Todas las operaciones son visibles para el mundo', bucket: 0, why: 'Transparencia total: pública.' },
            { text: 'Un operador decide quién entra y qué ve cada quien', bucket: 1, why: 'Acceso controlado: permisionada.' },
          ],
        },
      },
    ],
    // ¿Qué es tokenizar un activo?
    [
      {
        ask: 'Un local comercial vale **$8,000,000**. ¿Cómo podría Rodrigo ser dueño de una parte con solo **$6,000**?',
        options: [
          { text: 'Dividiendo el local en tokens y comprando unos cuantos', ok: true, reply: '¡Eso! Se llama **tokenizar**.' },
          { text: 'Es imposible: tendría que comprarlo completo', reply: 'Con tokens el local se divide en fracciones pequeñas. Se llama **tokenizar**.' },
          { text: 'Pidiendo un crédito por 8 millones', reply: 'No hace falta. El local se puede dividir en tokens y él compra solo unos cuantos: **tokenizar**.' },
        ],
      },
      { text: '**Tokenizar** es representar un activo real (un bono, un inmueble, una parte de un fondo) como un token en una blockchain. Se divide en fracciones, se transfiere a cualquier hora y hay un solo registro de dueños.' },
      { text: '🧮 Precio por token = valor del activo ÷ total de tokens\n🧮 Tus tokens = tu inversión ÷ precio por token\n🧮 Tu renta = tus tokens × (renta total ÷ total de tokens)' },
      {
        calc: {
          question: 'El local de **$8,000,000** se divide en **400,000** tokens. ¿Cuánto cuesta cada token?',
          answer: 20,
          hint: '8,000,000 ÷ 400,000.',
          why: '8,000,000 ÷ 400,000 = **$20** por token.',
        },
      },
      {
        calc: {
          question: 'Rodrigo invierte **$6,000**. ¿Cuántos tokens compra?',
          answer: 300,
          unit: 'tokens',
          hint: '6,000 ÷ 20.',
          why: '6,000 ÷ 20 = **300 tokens**.',
        },
      },
      {
        calc: {
          question: 'El local reparte **$560,000** de rentas netas al año entre todos los tokens. ¿Cuánto le toca a Rodrigo al año?',
          answer: 420,
          hint: 'Renta por token: 560,000 ÷ 400,000 = 1.40. Luego × 300.',
          why: '1.40 × 300 = **$420** al año. Divide la renta entre el **total** de tokens, no entre los tuyos.',
        },
      },
      { text: 'Hoy la **liquidación** (el intercambio final de dinero y títulos) tarda en muchos mercados uno o dos días hábiles. Con **entrega contra pago (DvP) atómica**, título y dinero cambian de manos **al mismo instante, o no cambia ninguno**. Y los **contratos inteligentes** pagan cupones o rentas solos.' },
      {
        ask: 'Una casa de bolsa vende bonos tokenizados a un fondo con DvP atómica. Al liquidar, el fondo **no tiene** el dinero completo. ¿Qué pasa?',
        options: [
          { text: 'No se ejecuta nada: ni salen los bonos ni sale el dinero', ok: true, reply: '¡Correcto! O se cumplen los dos lados juntos, o ninguno. Así nadie entrega sin cobrar.' },
          { text: 'Se entregan los bonos y el fondo queda debiendo', reply: 'Eso es justo lo que evita la DvP atómica: **o todo o nada**.' },
          { text: 'Se entrega la mitad de los bonos', reply: 'No hay medias tintas: con DvP atómica **no se ejecuta nada** si falta un lado.' },
        ],
      },
    ],
    // ¿Qué no resuelve la blockchain?
    [
      { text: 'A Rodrigo le ofrecen tokens de un local que "paga rentas cada mes" 🏬. Suena moderno… pero ¿qué podría salir mal?' },
      {
        ask: 'Si un dato está en la blockchain, ¿es verdad?',
        options: [
          { text: 'No: la blockchain evita que se altere, no que sea falso', ok: true, reply: '¡Exacto! Si alguien registra un local que no existe, queda registrado falsamente para siempre.' },
          { text: 'Sí: la blockchain lo verifica todo', reply: 'Garantiza que el registro **no se altere después**, no que lo registrado sea cierto.' },
          { text: 'Sí, si muchas computadoras lo copian', reply: 'Muchas copias de un dato falso siguen siendo falsas. Inalterable **no** es lo mismo que verdadero.' },
        ],
      },
      { text: 'Los servicios que traen datos del mundo real a la cadena se llaman **oráculos**, y son un punto débil. Otros riesgos:\n🐞 **Errores de código:** pueden vaciar millones y no hay botón de deshacer.\n🐢 **Escalabilidad:** algunas redes procesan pocas operaciones por segundo.\n👀 **Privacidad:** en redes públicas todos ven las operaciones.\n⚖️ **Marco legal:** la ley debe reconocer tu derecho sobre el activo.' },
      { text: 'Y algo clave: tokenizado **no** significa líquido. Si nadie quiere comprar tu fracción, no podrás venderla, aunque transferirla tarde segundos.' },
      {
        match: {
          title: 'Une cada riesgo con lo que le pasó a alguien',
          pairs: [
            ['Dato falso (oráculo)', 'Se registró un local que no existe'],
            ['Error de código', 'Una falla del contrato inteligente vació los fondos'],
            ['Liquidez', 'Nadie quiere comprar su fracción del edificio'],
            ['Marco legal', 'La ley no reconoce su derecho sobre el local'],
            ['Privacidad', 'En la red pública todos ven sus operaciones'],
          ],
        },
      },
      {
        multi: {
          title: '¿Qué beneficios **reales** puede dar tokenizar? Marca todos',
          items: [
            { text: 'Dividir activos caros en fracciones accesibles', ok: true },
            { text: 'Garantizar que siempre habrá comprador para tu token', ok: false },
            { text: 'Automatizar pagos de cupones o rentas', ok: true },
            { text: 'Liquidar más rápido y con menos riesgo de contraparte', ok: true },
            { text: 'Eliminar el riesgo de que el activo pierda valor', ok: false },
          ],
          why: 'Fraccionar, automatizar pagos y agilizar la liquidación son beneficios reales. Pero tokenizar **no crea compradores** ni quita el riesgo de que el activo baje de valor.',
        },
      },
      { tip: 'Antes de invertir en un token pregunta: ¿quién verifica que el activo existe? ¿Qué ley protege mi derecho? ¿Quién compraría mi token si quiero salir?' },
    ],
  ],
}
