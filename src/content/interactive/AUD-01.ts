import type { InteractiveLesson } from './types'

export const intAUD01: InteractiveLesson = {
  lessonId: 'AUD-01',
  sections: [
    // ¿Para qué sirve auditar?
    [
      { text: 'Una panadería de Toluca 🥖 pide al banco un crédito de $2 millones. El banco **no conoce** a los dueños.' },
      {
        ask: '¿Qué le daría más confianza al banco?',
        options: [
          { text: 'Que los dueños juren que sus números están bien', reply: 'Quien prepara los números puede querer que se vean mejor. Al banco le sirve que **alguien independiente** los revise.' },
          { text: 'Que alguien independiente revise sus números', ok: true, reply: '¡Eso! Alguien que no los preparó los revisa para que otros puedan confiar.' },
          { text: 'Que la panadería tenga muchos clientes', reply: 'Eso ayuda, pero el banco no puede revisar todo solo. Le sirve que **alguien independiente** revise los números.' },
        ],
      },
      { text: 'Eso es **auditar**: revisar de forma **independiente**, juntando **evidencia** (pruebas), para opinar si algo cumple una regla.' },
      { text: 'Laura, auditora de un despacho, entra al caso. Hay tres partes:\n🧁 **Administración:** los dueños preparan los números y responden por ellos.\n🔍 **Auditor:** Laura revisa y da su opinión.\n🏦 **Usuarios:** el banco usa esa opinión para decidir.' },
      {
        match: {
          title: 'Une cada parte con lo que hace',
          pairs: [
            ['Administración', 'Prepara la información y responde por ella'],
            ['Auditor', 'Reúne evidencia y opina de forma independiente'],
            ['Usuarios', 'Usan la opinión para decidir'],
          ],
        },
      },
      {
        ask: 'El dueño le dice a Laura: «Mejor hazme tú los estados financieros y luego los auditas». ¿Qué responde?',
        options: [
          { text: 'Que sí, así ahorran tiempo', reply: 'Estaría revisando **su propio trabajo** y su opinión ya no valdría. Los prepara la **administración**.' },
          { text: 'Que no: la administración los prepara y ella solo los revisa', ok: true, reply: '¡Exacto! El auditor **no prepara** lo que audita.' },
          { text: 'Que sí, si el banco está de acuerdo', reply: 'No depende del banco. La **administración** prepara las cifras y el auditor las revisa.' },
        ],
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['Auditar es', 'revisar de forma independiente', 'reuniendo evidencia', 'para opinar si algo cumple un criterio'],
          done: '¡La armaste tú! El criterio puede ser una norma contable, una ley o una política interna.',
        },
      },
    ],
    // ¿Qué tipos de auditoría hay?
    [
      { text: 'Laura ahora atiende a una cadena de farmacias 💊. Ahí trabajan **varios tipos** de auditores a la vez.' },
      { text: 'Cambian según **quién** audita y **qué** revisa:\n🏢 **Externa de estados financieros:** un contador independiente opina si los estados están bien presentados.\n🏠 **Interna:** un área de la propia empresa revisa riesgos, controles y procesos.\n📜 **Cumplimiento:** ¿se siguen leyes, contratos o políticas?\n⚙️ **Operacional:** ¿el proceso es eficiente y eficaz?' },
      {
        ask: '¿A quién le reporta la auditoría **interna**?',
        options: [
          { text: 'Al consejo o a un comité de auditoría', ok: true, reply: '¡Bien! Es un área de la propia empresa que reporta al consejo o a un comité de auditoría.' },
          { text: 'Al banco', reply: 'El banco es un usuario externo. La interna reporta **al consejo o a un comité de auditoría**.' },
          { text: 'A nadie, trabaja sola', reply: 'Sí reporta: **al consejo o a un comité de auditoría**.' },
        ],
      },
      {
        sort: {
          title: '¿Qué tipo de auditoría es?',
          buckets: ['Externa de estados financieros', 'Cumplimiento', 'Operacional'],
          items: [
            { text: 'Un despacho ajeno opina si los estados anuales de las farmacias están bien presentados', bucket: 0, why: 'Contador independiente que opina sobre los estados: externa.' },
            { text: 'Se revisa si una sucursal respeta su contrato de renta', bucket: 1, why: '¿Se cumple un contrato? Cumplimiento.' },
            { text: 'Se mide cuántos días tarda reabastecer una sucursal', bucket: 2, why: '¿Qué tan eficiente es el proceso? Operacional.' },
            { text: 'Se verifica que la planta cumpla los permisos que le pide la ley', bucket: 1, why: 'Seguir una ley: cumplimiento.' },
            { text: 'Se evalúa si compras usa bien su presupuesto y su personal', bucket: 2, why: 'Uso eficiente de recursos: operacional.' },
            { text: 'Un contador ajeno da su opinión anual para los accionistas', bucket: 0, why: 'Opinión independiente sobre los estados: externa.' },
          ],
        },
      },
      { text: 'Hay dos más:\n🧾 **Fiscal:** revisa que se cumpla con los impuestos.\n🏛️ **Gubernamental:** órganos de fiscalización revisan el uso de recursos públicos.' },
      {
        ask: 'Un órgano de fiscalización revisa cómo un municipio gastó dinero público. ¿Qué auditoría es?',
        options: [
          { text: 'Fiscal', reply: 'La fiscal revisa **impuestos**. Aquí se trata de recursos públicos: es **gubernamental**.' },
          { text: 'Gubernamental', ok: true, reply: '¡Bien! La gubernamental revisa el uso de recursos públicos.' },
          { text: 'Interna', reply: 'La hace un órgano de fiscalización, no un área del propio municipio: es **gubernamental**.' },
        ],
      },
      { tip: 'En México existe el **dictamen fiscal** de un contador público; sus reglas cambian con el tiempo.' },
    ],
    // Confianza alta, pero no total
    [
      { text: 'Laura no revisa cada peso de la panadería: usa **muestras** y **juicio** 🎯.' },
      {
        ask: 'Si la auditoría está bien hecha, ¿garantiza que no hay ningún error ni fraude?',
        options: [
          { text: 'Sí, al 100 %', reply: 'No: un fraude bien escondido con documentos falsos puede no detectarse. Da **seguridad razonable**.' },
          { text: 'No: da seguridad razonable, alta pero no absoluta', ok: true, reply: '¡Exacto! Mucha confianza, pero nunca absoluta.' },
          { text: 'Sí, si el auditor revisa con cuidado', reply: 'Aun con cuidado se usan muestras y juicio. La seguridad es **razonable**, no absoluta.' },
        ],
      },
      { text: 'Lo que da valor a la opinión es la **independencia**. La amenazan:\n💰 **Interés propio:** depender mucho de lo que paga un cliente.\n🪞 **Autorrevisión:** auditar algo que uno mismo preparó.\n🤝 **Familiaridad:** años de amistad con el director.\n😠 **Intimidación:** «si no firmas como quiero, cambio de auditor».' },
      {
        multi: {
          title: '¿Qué amenaza la independencia de Laura? Marca todas.',
          items: [
            { text: 'Su socio lleva 15 años con el cliente y es compadre del director', ok: true },
            { text: 'Su despacho llevó la contabilidad del año que audita', ok: true },
            { text: 'El director amenaza con cambiar de auditor si la opinión no es limpia', ok: true },
            { text: 'Laura pide al banco que le confirme directo los saldos', ok: false },
          ],
          why: 'Familiaridad, autorrevisión e intimidación. Pedir confirmación al banco es **buscar evidencia**, no una amenaza. Ante una amenaza, el auditor aplica salvaguardas o se retira.',
        },
      },
      { text: 'Laura también es **escéptica**: tiene una mente inquisitiva. No supone que la administración miente, pero **no cree nada sin evidencia**.' },
      {
        ask: 'El contador le dice: «Ese cliente de $380,000 ya pagó en enero, no hace falta revisarlo». ¿Qué hace Laura?',
        options: [
          { text: 'Le cree, él conoce a sus clientes', reply: 'Creer sin evidencia no es escepticismo. Laura pide el **estado de cuenta** donde aparece el depósito.' },
          { text: 'Pide el estado de cuenta de enero y busca el depósito', ok: true, reply: '¡Eso es escepticismo! Ni desconfía de todo ni cree sin evidencia.' },
          { text: 'Lo acusa de fraude', reply: 'Escepticismo no es suponer que mienten. Laura pide **evidencia**: el estado de cuenta.' },
        ],
      },
      { tip: 'Seguridad **razonable**, auditor **independiente** y actitud **escéptica**: eso hace que la opinión valga.' },
    ],
  ],
}
