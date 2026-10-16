import type { InteractiveLesson } from './types'

export const intL503: InteractiveLesson = {
  lessonId: 'L5-03',
  sections: [
    // ¿Qué es una auditoría financiera?
    [
      { text: 'Repaso integrador 🔎: **Sofía** entra como auditora junior a un despacho contable. Su primer cliente es **Distribuidora La Norteña**, que surte abarrotes a tienditas.' },
      { text: 'Una auditoría es la revisión de un **experto externo** que dice si puedes creerle a los números. Como el mecánico que revisa un auto usado antes de que lo compres.' },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Material', 'Tan grande o importante que puede cambiar la decisión de quien lee los números'],
            ['Seguridad razonable', 'Confianza alta, pero no absoluta'],
            ['Opinión', 'Lo que el auditor dice al final sobre los estados financieros'],
            ['NIA', 'Normas Internacionales de Auditoría, las reglas del trabajo del auditor'],
          ],
        },
      },
      {
        sort: {
          title: '¿De quién es la responsabilidad en La Norteña?',
          buckets: ['De la administración', 'Del auditor'],
          items: [
            { text: 'Preparar los estados financieros', bucket: 0, why: 'Los números son de la empresa: los prepara la administración.' },
            { text: 'Diseñar y mantener el control interno', bucket: 0, why: 'El control interno es de la empresa, no del auditor.' },
            { text: 'Emitir una opinión sobre los estados financieros', bucket: 1, why: 'Eso es justo lo que hace el auditor.' },
            { text: 'Obtener seguridad razonable de que no hay errores materiales', bucket: 1, why: 'Es el objetivo del examen del auditor.' },
          ],
        },
      },
      {
        ask: 'El gerente de La Norteña le dice a Sofía: «Como ustedes nos auditan, ya no necesitamos controles». ¿Qué le contestas?',
        options: [
          { text: 'Tiene razón: la auditoría reemplaza los controles', reply: 'No. La auditoría **no sustituye** al control interno de la empresa.' },
          { text: 'La auditoría no sustituye al control interno; mantenerlo es responsabilidad de la administración', ok: true, reply: '¡Exacto! La empresa cuida sus controles; el auditor da su opinión.' },
          { text: 'La auditoría garantiza que nunca habrá errores', reply: 'No. Da seguridad **razonable**: alta, pero no absoluta.' },
        ],
      },
      { tip: 'Auditoría = examen independiente → **seguridad razonable** → **opinión**. Se rige por las NIA (por ejemplo la NIA 200).' },
    ],
    // Tipos de opinión
    [
      { text: 'Al final, el auditor firma su **opinión**. Depende de dos preguntas: **¿el problema es material?** y **¿es generalizado?** (toca muchas partes, no solo una cuenta).' },
      {
        sort: {
          title: '¿Qué opinión le toca a cada caso?',
          buckets: ['Limpia (no modificada)', 'Con salvedades', 'Desfavorable', 'Abstención'],
          items: [
            { text: 'Todo está razonablemente presentado', bucket: 0, why: 'Sin problemas materiales: opinión limpia.' },
            { text: 'Un error material, pero solo en la cuenta de inventarios', bucket: 1, why: 'Material, pero no generalizado: con salvedades.' },
            { text: 'Errores materiales en ventas, clientes, inventarios y gastos', bucket: 2, why: 'Materiales y generalizados: desfavorable.' },
            { text: 'La empresa no dejó ver casi ningún papel y el efecto podría estar en todo', bucket: 3, why: 'Sin evidencia suficiente y con efectos materiales y generalizados: abstención.' },
          ],
        },
      },
      {
        ask: 'Sofía no pudo contar el inventario de **una** bodega. Ese inventario es material, pero el resto de los estados está bien. ¿Qué opinión es?',
        options: [
          { text: 'Abstención de opinión', reply: 'La abstención es cuando el problema es **generalizado**. Aquí es una sola parte.' },
          { text: 'Con salvedades', ok: true, reply: '¡Bien! Limitación al alcance material, pero **no generalizada**.' },
          { text: 'Desfavorable', reply: 'La desfavorable es por **errores** materiales y generalizados. Aquí faltó evidencia de una sola parte.' },
        ],
      },
      { tip: 'Limpia → NIA 700. Modificadas (salvedades, desfavorable, abstención) → NIA 705. La llave es: **¿material?** y **¿generalizado?**' },
    ],
    // Control interno: el marco COSO 2013
    [
      { text: 'Antes de revisar números, Sofía entiende **cómo se controla** La Norteña. Para eso usa el marco **COSO 2013**: cinco componentes y 17 principios.' },
      {
        match: {
          title: 'Une cada componente con lo que vio Sofía',
          pairs: [
            ['Entorno de control', 'El director pide honestidad y da el ejemplo'],
            ['Evaluación de riesgos', 'Se preguntan qué podría salir mal con los créditos a tienditas'],
            ['Actividades de control', 'Conciliar el banco y pedir autorización para pagar'],
            ['Información y comunicación', 'Cada quien recibe a tiempo los reportes que necesita'],
            ['Actividades de supervisión', 'Un jefe revisa cada mes que los controles sí se hagan'],
          ],
        },
      },
      {
        multi: {
          title: 'Marca todos los que SÍ son componentes de COSO',
          items: [
            { text: 'Entorno de control', ok: true },
            { text: 'Evaluación de riesgos', ok: true },
            { text: 'Opinión del auditor', ok: false },
            { text: 'Información y comunicación', ok: true },
            { text: 'Materialidad', ok: false },
            { text: 'Actividades de supervisión', ok: true },
          ],
          why: 'Los cinco son: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, y supervisión. La opinión y la materialidad son cosas del auditor.',
        },
      },
      {
        ask: 'Según COSO, ¿quién lleva a cabo el control interno?',
        options: [
          { text: 'Solo el auditor externo', reply: 'No. El auditor lo evalúa, pero no lo hace.' },
          { text: 'El consejo, la administración y el personal', ok: true, reply: '¡Así es! Es un proceso de toda la empresa.' },
          { text: 'Solo el área de contabilidad', reply: 'Se queda corto: participan el consejo, la administración y todo el personal.' },
        ],
      },
      { tip: 'COSO = **5 componentes**. Truco: empieza por el **entorno** (el tono desde arriba) y termina con la **supervisión**.' },
    ],
    // Segregación de funciones y tipos de control
    [
      { text: 'Hay cuatro funciones que **no** deben estar en una sola persona: **autorizar, custodiar, registrar y conciliar**. Si alguien junta dos, puede cometer un error y esconderlo.' },
      {
        ask: 'En La Norteña, Beto **cobra** a las tienditas, **guarda** el efectivo y además **registra** los cobros. ¿Qué problema ve Sofía?',
        options: [
          { text: 'Ninguno, así se ahorra personal', reply: 'Se ahorra, pero Beto podría quedarse con dinero y borrar la huella en los registros.' },
          { text: 'Falta segregación: custodia y registro están en la misma persona', ok: true, reply: '¡Exacto! Quien guarda el dinero no debe ser quien lo registra.' },
          { text: 'Que Beto debería también autorizar los pagos', reply: 'Eso lo empeora: juntaría todavía más funciones.' },
        ],
      },
      {
        rush: {
          title: '¿Preventivo o detectivo?',
          seconds: 40,
          labels: ['Preventivo', 'Detectivo'],
          items: [
            { text: 'Contraseña para entrar al sistema de pagos', ans: 0 },
            { text: 'Conciliación bancaria del mes', ans: 1 },
            { text: 'Límite: pagos mayores a cierto monto los autoriza el director', ans: 0 },
            { text: 'Arqueo sorpresa de la caja chica', ans: 1 },
            { text: 'Separar quién cobra y quién registra', ans: 0 },
            { text: 'Conteo físico del inventario', ans: 1 },
          ],
        },
      },
      { text: 'Sofía hace un **arqueo** (contar la caja chica). Fondo fijo **$5,000**; comprobantes autorizados **$3,200**; efectivo contado **$1,650**.' },
      {
        calc: {
          question: '¿De cuánto es la **diferencia** de la caja chica?',
          answer: 150,
          hint: 'Fondo fijo − (comprobantes + efectivo).',
          why: '$3,200 + $1,650 = $4,850. $5,000 − $4,850 = **$150 de faltante** (positiva = faltante).',
        },
      },
      {
        entry: {
          title: 'Reembolso de la caja chica',
          story: 'La Norteña repone la caja con un pago del banco por los gastos comprobados (**$3,200**) y carga el faltante (**$150**) al cajero responsable. Así el fondo vuelve a quedar en $5,000.',
          lines: [
            { account: 'Gastos generales', side: 'D', amount: 3200, why: 'Los gastos comprobados se reconocen: se cargan.' },
            { account: 'Deudores diversos', side: 'D', amount: 150, why: 'El cajero queda a deber el faltante: sube un activo, se carga.' },
            { account: 'Bancos', side: 'C', amount: 3350, why: 'Sale dinero del banco para reponer la caja: se abona.' },
          ],
        },
      },
      { text: 'Ahora prueba un control: revisa **50** órdenes de pago y **4** no tienen la firma de autorización. La tasa tolerable es **5%**.' },
      {
        calc: {
          question: '¿Cuál es la **tasa de desviación**?',
          answer: 8,
          unit: '%',
          hint: 'Casos con falla ÷ tamaño de la muestra × 100.',
          why: '4 ÷ 50 = 0.08 × 100 = **8%**. Como 8% > 5%, el control **no** opera eficazmente y Sofía hará más pruebas sustantivas.',
        },
      },
      { tip: 'Un buen sistema combina **preventivos** (evitan) y **detectivos** (descubren después). Cualquier diferencia en un arqueo se investiga y se documenta.' },
    ],
  ],
}
