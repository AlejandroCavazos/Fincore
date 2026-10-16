import type { InteractiveLesson } from './types'

export const intAUD01: InteractiveLesson = {
  lessonId: 'AUD-01',
  sections: [
    // ¿Qué es auditar y para qué sirve?
    [
      { text: '**Auditar** es revisar algo de forma **independiente**, juntando **evidencia** (pruebas), para opinar si cumple una regla.' },
      { text: 'Una distribuidora de abarrotes pide un crédito al banco 🏦. El banco no conoce a los dueños, así que llega Laura, auditora de un despacho.' },
      {
        match: {
          title: 'Une cada parte con lo que hace',
          pairs: [
            ['Administración', 'Prepara la información y responde por ella'],
            ['Auditor', 'Reúne evidencia y opina de forma independiente'],
            ['Usuarios', 'Confían en la opinión para tomar decisiones'],
            ['Criterio', 'La regla contra la que se compara: normas, leyes o políticas'],
          ],
        },
      },
      {
        ask: 'El dueño de la distribuidora le dice a Laura: «Mejor hazme tú los estados financieros y luego los auditas». ¿Qué debe responder?',
        options: [
          { text: 'Que sí, así ahorran tiempo', reply: 'No: estaría revisando **su propio trabajo**. Su opinión ya no valdría.' },
          { text: 'Que no: la administración prepara la información y ella solo la revisa', ok: true, reply: '¡Exacto! El auditor **no prepara** la información; si lo hiciera, se revisaría a sí mismo.' },
          { text: 'Que sí, si el banco está de acuerdo', reply: 'No depende del banco. El auditor no prepara lo que audita.' },
        ],
      },
      {
        ask: '¿Por qué el banco confía más en unos estados financieros **auditados**?',
        options: [
          { text: 'Porque alguien que no los preparó los revisó', ok: true, reply: 'Eso es. Quien prepara puede querer que se vean mejor; el auditor reduce esa desconfianza.' },
          { text: 'Porque el auditor garantiza que la empresa pagará', reply: 'No: el auditor opina sobre la información, no garantiza pagos.' },
          { text: 'Porque los hizo un banco', reply: 'No: los prepara la administración y los revisa el auditor.' },
        ],
      },
      { tip: 'Tres partes: **administración** prepara, **auditor** revisa y opina, **usuarios** deciden.' },
    ],
    // Tipos de auditoría
    [
      { text: 'Las auditorías cambian según **quién** las hace y **qué** revisan. Piensa en una cadena de farmacias 💊.' },
      {
        sort: {
          title: '¿Qué tipo de auditoría es?',
          buckets: ['Externa de estados financieros', 'Interna', 'Cumplimiento', 'Operacional'],
          items: [
            { text: 'Un despacho ajeno opina si los estados financieros anuales están bien presentados', bucket: 0, why: 'Contador público independiente que opina para terceros: externa.' },
            { text: 'Un área de la propia empresa, que reporta al comité de auditoría, revisa riesgos y controles', bucket: 1, why: 'Es parte de la organización: interna.' },
            { text: 'Se revisa si la empresa respeta las cláusulas de un contrato de renta', bucket: 2, why: '¿Se siguen leyes, contratos o políticas? Cumplimiento.' },
            { text: 'Se mide cuántos días tarda reabastecer una sucursal', bucket: 3, why: '¿El proceso es eficiente? Operacional.' },
            { text: 'Se revisa si las sucursales siguen la política interna de cobro con tarjeta', bucket: 2, why: 'Seguir una política es cumplimiento.' },
            { text: 'Se evalúa si surtir un pedido tarda demasiado', bucket: 3, why: 'Eficiencia y eficacia de un proceso: operacional.' },
          ],
        },
      },
      {
        ask: 'Un órgano de fiscalización revisa cómo un municipio gastó dinero público. ¿Qué auditoría es?',
        options: [
          { text: 'Fiscal', reply: 'La fiscal revisa el cumplimiento de **impuestos**. Aquí se trata de recursos públicos.' },
          { text: 'Gubernamental', ok: true, reply: '¡Bien! La auditoría **gubernamental** revisa el uso de recursos públicos.' },
          { text: 'Interna', reply: 'No: la hace un órgano de fiscalización, no un área del propio municipio.' },
        ],
      },
      { tip: 'La **fiscal** mira impuestos; en México existe el dictamen fiscal de un contador público, y sus reglas cambian con el tiempo.' },
    ],
    // Seguridad razonable, independencia y escepticismo
    [
      { text: 'La auditoría da **seguridad razonable**: mucha confianza, pero **no absoluta**. Se usan muestras y juicio, no se revisa cada peso.' },
      { text: 'Lo que da valor a la opinión es la **independencia**. Estas son sus amenazas:' },
      {
        sort: {
          title: '¿Qué amenaza a la independencia?',
          buckets: ['Interés propio', 'Autorrevisión', 'Familiaridad', 'Intimidación'],
          items: [
            { text: 'Casi todo lo que cobra el despacho viene de un solo cliente', bucket: 0, why: 'Depender de sus honorarios: interés propio.' },
            { text: 'El auditor revisa unos estados que él mismo preparó', bucket: 1, why: 'Revisar tu propio trabajo: autorrevisión.' },
            { text: 'El socio lleva muchos años de amistad con el director', bucket: 2, why: 'La confianza excesiva: familiaridad.' },
            { text: '«Si no firmas como quiero, cambio de auditor»', bucket: 3, why: 'Es una amenaza: intimidación.' },
          ],
        },
      },
      {
        calc: {
          question: 'Un despacho cobra **$1,500,000** al año. La distribuidora le paga **$300,000**. ¿Qué **porcentaje** de sus ingresos viene de ese cliente?',
          answer: 20,
          unit: '%',
          hint: 'honorarios del cliente ÷ honorarios totales × 100.',
          why: '300,000 ÷ 1,500,000 = 0.20 → **20 %**. Entre más alto, más fuerte la amenaza de **interés propio**. No hay un número mágico: se evalúa con juicio.',
        },
      },
      {
        multi: {
          title: '¿Qué es cierto? Marca todas.',
          items: [
            { text: 'Un fraude bien escondido con documentos falsos puede no detectarse', ok: true },
            { text: 'Ante una amenaza, el auditor aplica salvaguardas o se retira', ok: true },
            { text: 'Ser escéptico es pedir evidencia, no creer todo de palabra', ok: true },
            { text: 'La auditoría da seguridad absoluta', ok: false },
            { text: 'Ser escéptico es suponer que la administración es deshonesta', ok: false },
          ],
          why: 'La seguridad es **razonable**, no absoluta. El **escepticismo** es una mente inquisitiva: ni desconfiar de todo ni creer sin evidencia.',
        },
      },
      { tip: 'Si el gerente dice «ese cliente ya pagó», el auditor escéptico pide el **estado de cuenta** donde aparece el depósito.' },
    ],
  ],
}
