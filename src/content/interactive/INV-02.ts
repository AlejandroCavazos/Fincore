import type { InteractiveLesson } from './types'

export const intINV02: InteractiveLesson = {
  lessonId: 'INV-02',
  sections: [
    // ¿Quién une ahorro y préstamo?
    [
      { text: 'Don Ernesto, de 58 años, tiene una taquería 🌮 y **$50,000 ahorrados** en el banco. Su vecina Lucía necesita un préstamo para abrir su estética 💇. No se conocen.' },
      {
        ask: '¿Cómo puede el ahorro de Ernesto ayudar a Lucía?',
        options: [
          { text: 'El banco usa parte de los depósitos para prestarle a Lucía', ok: true, reply: '¡Exacto! El banco es el puente entre quien ahorra y quien necesita dinero.' },
          { text: 'El banco imprime billetes nuevos para Lucía', reply: 'Los bancos no imprimen billetes. Lo que hacen es **prestar parte de los depósitos** de gente como Ernesto.' },
          { text: 'No puede: solo Ernesto toca su dinero', reply: 'Su dinero sigue siendo suyo, pero el banco usa parte de los depósitos para **prestar** a otros, como Lucía.' },
        ],
      },
      { text: 'A ese puente se le llama **intermediación**. El banco le paga un interés a Ernesto y le cobra uno **mayor** a Lucía.' },
      {
        order: {
          title: 'Sigue el camino del dinero',
          steps: ['Ernesto deposita su ahorro', 'El banco junta los depósitos de mucha gente', 'El banco le presta a Lucía', 'Lucía paga el préstamo con interés', 'El banco le paga un interés a Ernesto'],
          done: '¡Así se mueve! El **sistema financiero** conecta a quien le sobra dinero con quien le falta.',
        },
      },
      { text: 'El sistema tiene 4 piezas:\n🏛️ **Autoridades:** hacen reglas y vigilan (como la SHCP o la CNBV).\n🏦 **Intermediarios:** bancos, casas de bolsa, aseguradoras, afores.\n📊 **Mercados:** las bolsas de valores.\n👥 **Usuarios:** tú, las familias, las empresas, el gobierno.' },
      {
        sort: {
          title: '¿Qué pieza es?',
          buckets: ['Autoridad', 'Intermediario', 'Usuario'],
          items: [
            { text: 'El banco de Ernesto', bucket: 1, why: 'Recibe depósitos y presta: es intermediario.' },
            { text: 'La CNBV', bucket: 0, why: 'Vigila a bancos y casas de bolsa: es autoridad.' },
            { text: 'Lucía, que pide un préstamo', bucket: 2, why: 'Usa el sistema para conseguir dinero: es usuaria.' },
            { text: 'Una afore', bucket: 1, why: 'Invierte el ahorro para el retiro de la gente: es intermediario.' },
            { text: 'Don Ernesto, que ahorra', bucket: 2, why: 'Usa el sistema para guardar y hacer crecer su dinero: es usuario.' },
            { text: 'Una casa de bolsa', bucket: 1, why: 'Compra y vende valores para sus clientes: es intermediario.' },
          ],
        },
      },
      { tip: 'El **sistema financiero** junta autoridades, intermediarios, mercados y reglas para llevar el dinero de quien ahorra a quien lo necesita.' },
    ],
    // ¿Quién vigila a los bancos?
    [
      { text: 'Ernesto revisa su tarjeta y ve un **cargo que no reconoce** 😟. El banco no le resuelve. ¿A quién acude?' },
      {
        ask: 'Adivina: ¿quién recibe las quejas de los usuarios?',
        options: [
          { text: 'La CONDUSEF', ok: true, reply: '¡Sí! La CONDUSEF defiende a los usuarios: recibe quejas, orienta y publica información para comparar productos.' },
          { text: 'El Banco de México', reply: 'Banxico cuida que la inflación sea baja. Las quejas de usuarios van a la **CONDUSEF**.' },
          { text: 'La CONSAR', reply: 'La CONSAR regula las afores. Las quejas de usuarios van a la **CONDUSEF**.' },
        ],
      },
      { text: 'Cada autoridad tiene su tarea:\n👑 **SHCP:** encabeza el sistema.\n🪙 **Banxico:** cuida el poder de compra del peso (inflación baja).\n🏦 **CNBV:** bancos, casas de bolsa y fondos de inversión.\n☂️ **CNSF:** aseguradoras y afianzadoras.\n👵 **CONSAR:** afores.\n🙋 **CONDUSEF:** defiende a los usuarios.' },
      {
        match: {
          title: 'Une cada autoridad con lo que vigila',
          pairs: [
            ['CNBV', 'Bancos y casas de bolsa'],
            ['CNSF', 'Aseguradoras'],
            ['CONSAR', 'Afores y ahorro para el retiro'],
            ['CONDUSEF', 'Quejas y orientación de usuarios'],
            ['Banxico', 'Inflación baja y estable'],
          ],
        },
      },
      {
        rush: {
          title: '¿Le toca a la CNBV o a la CONDUSEF?',
          seconds: 30,
          labels: ['CNBV', 'CONDUSEF'],
          items: [
            { text: 'Supervisar al banco de Ernesto', ans: 0 },
            { text: 'Recibir la queja por el cargo raro', ans: 1 },
            { text: 'Supervisar una operadora de fondos de inversión', ans: 0 },
            { text: 'Publicar info para comparar comisiones de tarjetas', ans: 1 },
            { text: 'Vigilar una casa de bolsa', ans: 0 },
            { text: 'Orientar a un usuario con dudas', ans: 1 },
          ],
        },
      },
      {
        ask: 'Ernesto quiere contratar un seguro para su camioneta. ¿Quién supervisa a la aseguradora?',
        options: [
          { text: 'La CNSF', ok: true, reply: '¡Bien! La CNSF supervisa aseguradoras y afianzadoras.' },
          { text: 'La CNBV', reply: 'La CNBV vigila bancos y valores. Las aseguradoras las supervisa la **CNSF**.' },
          { text: 'La CONSAR', reply: 'La CONSAR es para afores. Las aseguradoras las supervisa la **CNSF**.' },
        ],
      },
    ],
    // ¿Está protegido tu dinero?
    [
      { text: 'A Ernesto le preocupa: "¿Y si mi banco quiebra?" 😰 Tiene ahorros en **dos bancos**.' },
      { text: '🛡️ El **IPAB** protege los **depósitos bancarios** hasta **400,000 UDIS por persona y por banco** (las UDIS suben con la inflación).\n📄 Los **valores** en una casa de bolsa no tienen ese seguro: están en custodia a tu nombre y su valor depende del mercado.' },
      {
        calc: {
          question: 'Ernesto tiene 500,000 UDIS en el banco A y 200,000 UDIS en el banco B. Con el límite de 400,000 UDIS por banco, ¿cuántas UDIS quedan protegidas en total?',
          answer: 600000,
          unit: 'UDIS',
          hint: 'En cada banco cuenta lo menor entre lo que tiene y 400,000. Luego suma los dos bancos.',
          why: 'Banco A: solo 400,000 (el límite). Banco B: 200,000 (está debajo del límite). Total: **600,000 UDIS**. Quedan 100,000 sin cobertura en el banco A.',
        },
      },
      {
        ask: '¿Cuántas UDIS de Ernesto quedarían **sin** cobertura?',
        options: [
          { text: '100,000 UDIS', ok: true, reply: '¡Exacto! En el banco A tiene 500,000 y se protegen 400,000: sobran 100,000.' },
          { text: '300,000 UDIS', reply: 'El límite es **por banco**. Solo el banco A pasa del límite: 500,000 − 400,000 = **100,000**.' },
          { text: 'Ninguna', reply: 'El banco A pasa del límite: 500,000 − 400,000 = **100,000** sin cobertura.' },
        ],
      },
      {
        multi: {
          title: '¿Cuáles son intermediarios? Marca todos',
          items: [
            { text: 'Un banco', ok: true },
            { text: 'Una casa de bolsa', ok: true },
            { text: 'Una afore', ok: true },
            { text: 'La CONDUSEF', ok: false },
            { text: 'La CNBV', ok: false },
          ],
          why: 'Bancos, casas de bolsa y afores tratan directo con tu dinero: son **intermediarios**. La CONDUSEF y la CNBV son **autoridades**.',
        },
      },
      {
        ask: 'Por mensaje invitan a Ernesto a un "club de inversión" que promete **10% mensual**. No dicen qué institución es. ¿Qué hace?',
        options: [
          { text: 'Verifica en los registros de las autoridades si está autorizado', ok: true, reply: '¡Eso! Si no aparece en ningún registro, no es parte del sistema financiero regulado.' },
          { text: 'Mete poquito para probar', reply: 'Aunque sea poco, podría perderlo. Antes de dar un peso, **verifica que esté autorizado y supervisado**.' },
          { text: 'Confía porque a un amigo ya le pagaron', reply: 'Que a alguien le paguen al inicio no prueba nada. Primero **verifica en los registros de las autoridades**.' },
        ],
      },
      {
        order: {
          title: 'Arma la regla práctica',
          steps: ['Antes de entregar tu dinero,', 'verifica que la entidad', 'esté autorizada', 'y supervisada'],
          done: '¡Listo! Esa regla te cuida de los "clubes" que prometen mucho.',
        },
      },
    ],
  ],
}
