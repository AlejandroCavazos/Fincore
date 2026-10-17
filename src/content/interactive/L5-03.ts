import type { InteractiveLesson } from './types'

export const intL503: InteractiveLesson = {
  lessonId: 'L5-03',
  sections: [
    // ¿Qué hace un auditor?
    [
      { text: 'Repaso integrador 🔎: **Sofía** entra como auditora junior a un despacho. Su primer cliente es **Distribuidora La Norteña**, que surte abarrotes a tienditas.' },
      {
        ask: '¿Para qué crees que La Norteña contrata a un auditor externo?',
        options: [
          { text: 'Para que diga si se puede confiar en sus números', ok: true, reply: '¡Eso! Es como el mecánico independiente que revisa un auto usado antes de que lo compres.' },
          { text: 'Para que le prepare sus estados financieros', reply: 'Prepararlos le toca a la **administración**. El auditor dice si se puede **confiar** en ellos.' },
          { text: 'Para garantizar que no hay ningún fraude', reply: 'No puede garantizarlo: da seguridad **razonable**, no absoluta. Dice si se puede **confiar** en los números.' },
        ],
      },
      { text: 'El auditor busca **seguridad razonable** (alta, pero no absoluta) de que no hay **errores materiales**, y al final da una **opinión**. Sigue las **NIA**.' },
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
        ask: 'El gerente le dice a Sofía: «Como ustedes nos auditan, ya no necesitamos controles». ¿Qué le contestas?',
        options: [
          { text: 'Tiene razón: la auditoría reemplaza los controles', reply: 'No. La auditoría **no sustituye** al control interno: mantenerlo es de la administración.' },
          { text: 'La auditoría no sustituye al control interno; mantenerlo es de la administración', ok: true, reply: '¡Exacto! La empresa cuida sus controles; el auditor da su opinión.' },
          { text: 'La auditoría garantiza que nunca habrá errores', reply: 'No. Da seguridad **razonable**, no absoluta, y no sustituye al control interno.' },
        ],
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['Una auditoría financiera busca', 'seguridad razonable', 'de que los estados financieros no tienen errores materiales', 'y termina en una opinión'],
          done: '¡La armaste tú! Ya puedes explicar qué hace un auditor.',
        },
      },
    ],
    // La calificación final del auditor
    [
      { text: 'Al final, Sofía firma su **opinión** sobre La Norteña. Es como la calificación de un examen 📝.' },
      {
        text: 'Depende de dos preguntas: ¿el problema es **material**? ¿Es **generalizado** (toca muchas partes, no solo una cuenta)?\n✅ Nada material → **limpia**.\n⚠️ Material en una sola cuenta → **con salvedades**.\n❌ Errores materiales y generalizados → **desfavorable**.\n🚫 Sin evidencia y efectos generalizados → **abstención**.',
      },
      {
        match: {
          title: 'Une cada caso con su opinión',
          pairs: [
            ['Todo está razonablemente presentado', 'Limpia (no modificada)'],
            ['Inventario inflado por un monto material; lo demás está bien', 'Con salvedades'],
            ['Errores materiales en ventas, clientes, inventarios y gastos', 'Desfavorable'],
            ['No dejaron ver casi ningún papel y el efecto podría estar en todo', 'Abstención'],
          ],
        },
      },
      {
        ask: 'Sofía no pudo contar el inventario de **una** bodega. Es material, pero lo demás está bien. ¿Qué opinión es?',
        options: [
          { text: 'Abstención de opinión', reply: 'La abstención es cuando el problema es **generalizado**. Aquí es una sola parte: **con salvedades**.' },
          { text: 'Con salvedades', ok: true, reply: '¡Bien! Limitación material, pero **no generalizada**.' },
          { text: 'Desfavorable', reply: 'La desfavorable es por **errores** materiales y generalizados. Aquí faltó evidencia de una parte: **con salvedades**.' },
        ],
      },
      {
        ask: 'Ahora los errores materiales aparecen en **casi todas** las cuentas y la empresa no los corrige. ¿Qué opinión es?',
        options: [
          { text: 'Desfavorable', ok: true, reply: '¡Exacto! Materiales **y** generalizados: desfavorable.' },
          { text: 'Con salvedades', reply: 'Con salvedades es cuando el problema está en **una** parte. Aquí está en casi todo: **desfavorable**.' },
          { text: 'Limpia', reply: 'Hay errores materiales sin corregir, así que no puede ser limpia. Como son generalizados: **desfavorable**.' },
        ],
      },
      { tip: 'Limpia → NIA 700. Modificadas (salvedades, desfavorable, abstención) → NIA 705. La llave: **¿material?** y **¿generalizado?**' },
    ],
    // Las cinco piezas del control
    [
      { text: 'Antes de revisar números, Sofía quiere entender **cómo se controla** La Norteña 🧩.' },
      {
        ask: '¿Quién crees que hace el control interno de una empresa?',
        options: [
          { text: 'Solo el auditor externo', reply: 'El auditor lo evalúa, pero no lo hace. Lo hacen **el consejo, la administración y el personal**.' },
          { text: 'El consejo, la administración y el personal', ok: true, reply: '¡Así es! Según COSO, es un proceso de toda la empresa.' },
          { text: 'Solo el área de contabilidad', reply: 'Se queda corto: participan **el consejo, la administración y todo el personal**.' },
        ],
      },
      {
        text: 'Sofía usa el marco **COSO 2013**. Tiene cinco componentes:\n🎩 **Entorno de control:** el tono de la dirección.\n⚠️ **Evaluación de riesgos:** qué podría salir mal.\n🔒 **Actividades de control:** autorizar, conciliar, separar tareas.\n📨 **Información y comunicación.**\n👀 **Actividades de supervisión:** vigilar que los controles sí se hagan.',
      },
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
            { text: 'Maximización de utilidades', ok: false },
            { text: 'Actividades de supervisión', ok: true },
          ],
          why: 'Los cinco son: entorno de control, evaluación de riesgos, actividades de control, información y comunicación, y supervisión. La opinión es del auditor y ganar más no es un componente.',
        },
      },
      { tip: 'COSO = **5 componentes**. Empieza por el **entorno** (el tono desde arriba) y termina con la **supervisión**.' },
    ],
    // Que nadie haga todo solo
    [
      { text: 'En La Norteña, Beto **cobra** a las tienditas, **guarda** el efectivo y además **registra** los cobros 🤔.' },
      {
        ask: '¿Qué problema ve Sofía?',
        options: [
          { text: 'Ninguno, así se ahorra personal', reply: 'Se ahorra, pero Beto podría quedarse con dinero y borrar la huella en los registros.' },
          { text: 'Una sola persona junta funciones que deberían estar separadas', ok: true, reply: '¡Exacto! Quien guarda el dinero no debe ser quien lo registra.' },
          { text: 'Que Beto debería también autorizar los pagos', reply: 'Eso lo empeora: juntaría todavía más funciones en una sola persona.' },
        ],
      },
      { text: 'La **segregación de funciones** separa cuatro tareas: **autorizar, custodiar, registrar y conciliar**. Si alguien junta dos, puede cometer un error y esconderlo.' },
      {
        ask: 'Además, Beto autoriza las notas de crédito a clientes. ¿Cuál es la mejor medida?',
        options: [
          { text: 'Que firme una carta de confidencialidad', reply: 'Una carta no quita la oportunidad. Lo que sirve es **separar** la custodia, el registro y la autorización.' },
          { text: 'Separar la custodia del registro y que otra persona autorice las notas de crédito', ok: true, reply: '¡Bien! Cada tarea en manos distintas: nadie puede cometer y esconder un error solo.' },
          { text: 'Contratar una auditoría cada cinco años', reply: 'Es muy de vez en cuando y no corrige el problema. Hay que **separar las tareas**.' },
        ],
      },
      { text: 'Hay dos tipos de controles:\n🛑 **Preventivos:** evitan el problema (contraseñas, límites de autorización, segregación).\n🔦 **Detectivos:** lo descubren después (conciliaciones, arqueos, conteos físicos).' },
      {
        rush: {
          title: '¿Preventivo o detectivo?',
          seconds: 40,
          labels: ['Preventivo', 'Detectivo'],
          items: [
            { text: 'Contraseña para entrar al sistema de pagos', ans: 0 },
            { text: 'Conciliación bancaria del mes revisada por un supervisor', ans: 1 },
            { text: 'Pagos mayores a cierto monto los autoriza el director', ans: 0 },
            { text: 'Arqueo sorpresa de la caja chica', ans: 1 },
            { text: 'Separar quién cobra y quién registra', ans: 0 },
            { text: 'Conteo físico del inventario contra registros', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Sofía hace un **arqueo** (cuenta la caja chica). Fondo fijo **$5,000**; comprobantes **$3,200**; efectivo contado **$1,650**. ¿De cuánto es la diferencia?',
          answer: 150,
          hint: 'Fondo fijo − (comprobantes + efectivo).',
          why: '$3,200 + $1,650 = $4,850. $5,000 − $4,850 = **$150 de faltante**. Se investiga y se documenta.',
        },
      },
      { tip: 'Un buen sistema combina **preventivos** (evitan) y **detectivos** (descubren después), y nunca deja todo en una sola persona.' },
    ],
  ],
}
