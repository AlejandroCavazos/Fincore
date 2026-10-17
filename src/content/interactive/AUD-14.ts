import type { InteractiveLesson } from './types'

export const intAUD14: InteractiveLesson = {
  lessonId: 'AUD-14',
  sections: [
    // ¿Cómo se cumplen las reglas?
    [
      { text: '**Monedita** es una fintech que presta dinero por app 📱. Su dueña, Ana, se entera de que multaron a otra empresa por no cumplir una regla.' },
      {
        ask: '¿Qué crees que es **cumplimiento** (compliance)?',
        options: [
          { text: 'Respetar leyes, reglas de las autoridades, contratos y las políticas propias', ok: true, reply: '¡Eso! Es asegurarse de que la empresa respeta **todas** sus obligaciones.' },
          { text: 'Solo pagar los impuestos a tiempo', reply: 'Los impuestos son una parte. Cumplimiento abarca **leyes, reglas, contratos y políticas propias**.' },
          { text: 'Llegar a las metas de ventas', reply: 'Eso es desempeño. Cumplimiento es respetar las **obligaciones**: leyes, reglas, contratos y políticas.' },
        ],
      },
      {
        text: 'Un **programa de cumplimiento** no es un manual en un cajón. Se arma así:\n📋 Inventario de obligaciones: qué reglas te aplican.\n⚠️ Evaluar dónde es más probable fallar.\n🔒 Poner controles y capacitar.\n👀 Vigilar siempre y mejorar.',
      },
      {
        order: {
          title: 'Ordena cómo arma Ana su programa',
          steps: [
            'Hacer el inventario de obligaciones',
            'Evaluar los riesgos de incumplimiento',
            'Poner controles y dar capacitación',
            'Vigilar de forma continua y mejorar',
          ],
          done: 'Para cada obligación: **un dueño, sus controles y una fecha de revisión**.',
        },
      },
      {
        ask: '¿Qué necesita el **oficial de cumplimiento** de Monedita para hacer bien su trabajo?',
        options: [
          { text: 'Depender del área de ventas para no estorbar', reply: 'Así perdería independencia frente a quienes debe vigilar. Necesita **autoridad, recursos y reporte directo al consejo**.' },
          { text: 'Autoridad, independencia, recursos y reporte directo al consejo o al comité de auditoría', ok: true, reply: '¡Exacto! Es la lógica que describen normas como la ISO 37301.' },
          { text: 'Solo un buen manual impreso', reply: 'Un manual solo no basta: hacen falta **autoridad, recursos y vigilancia**.' },
        ],
      },
      {
        multi: {
          title: '¿Qué forma parte de un programa de cumplimiento? Marca todas.',
          items: [
            { text: 'Compromiso de la dirección', ok: true },
            { text: 'Políticas, controles y capacitación según el riesgo de cada área', ok: true },
            { text: 'Canal de denuncia, investigación y consecuencias disciplinarias', ok: true },
            { text: 'Seguimiento a cambios en las reglas', ok: true },
            { text: 'Revisarlo una sola vez y guardarlo', ok: false },
          ],
          why: 'El cumplimiento es continuo: monitoreo, pruebas y mejora, porque las reglas cambian.',
        },
      },
    ],
    // ¿Quién cuida cada riesgo?
    [
      { text: 'Ana quiere saber **quién cuida cada riesgo** en Monedita. Para eso usa el **modelo de las tres líneas** del IIA 🧱.' },
      {
        text: '🏛️ **Órgano de gobierno** (el consejo): fija la dirección y supervisa.\n1️⃣ **Primera línea:** las áreas que operan. Son dueñas del riesgo.\n2️⃣ **Segunda línea:** riesgos y cumplimiento. Vigilan, asesoran y retan.\n3️⃣ **Tercera línea:** auditoría interna. Revisa de forma independiente.',
      },
      {
        ask: 'El ejecutivo de Monedita pide identificación a cada cliente nuevo. ¿Qué línea es?',
        options: [
          { text: 'Primera línea', ok: true, reply: '¡Bien! Opera el control día a día: es dueño del riesgo.' },
          { text: 'Segunda línea', reply: 'La segunda línea diseña métodos y vigila. Quien pide la identificación **opera**: es **primera línea**.' },
          { text: 'Tercera línea', reply: 'La tercera es auditoría interna, que evalúa desde fuera. Quien opera el control es **primera línea**.' },
        ],
      },
      {
        sort: {
          title: '¿Qué línea es en Monedita?',
          buckets: ['Primera línea', 'Segunda línea', 'Tercera línea'],
          items: [
            { text: 'El gerente de crédito aprueba préstamos dentro de sus límites', bucket: 0, why: 'Opera y es dueño del riesgo: **primera línea**.' },
            { text: 'Cumplimiento diseña la metodología contra lavado de dinero', bucket: 1, why: 'Función especializada: **segunda línea**.' },
            { text: 'Riesgos vigila los indicadores y avisa cuando pasan a rojo', bucket: 1, why: 'Vigila y reta: **segunda línea**.' },
            { text: 'Auditoría interna informa al comité si el programa funciona', bucket: 2, why: 'Aseguramiento independiente: **tercera línea**.' },
            { text: 'El área de cobranza llama a clientes atrasados', bucket: 0, why: 'Opera día a día: **primera línea**.' },
          ],
        },
      },
      {
        ask: 'Para ahorrar, el director pide que **auditoría interna** diseñe y opere los controles, y luego los evalúe. ¿Qué problema hay?',
        options: [
          { text: 'Ninguno: así ahorran gente', reply: 'Sí hay problema: se estaría auditando a sí misma y perdería su **independencia**.' },
          { text: 'Se estaría auditando a sí misma y perdería su independencia', ok: true, reply: '¡Bien! La tercera línea no debe diseñar ni operar lo que luego evaluará.' },
          { text: 'Que eso le toca al consejo', reply: 'El consejo supervisa, pero no opera controles. El problema es la **independencia** de auditoría.' },
        ],
      },
      { tip: 'Primera línea **opera**, segunda **vigila y reta**, tercera **revisa de forma independiente**, y el consejo **supervisa**.' },
    ],
    // ¿Cuánto riesgo aceptamos?
    [
      { text: 'El consejo de Monedita dice: «aceptamos riesgo **bajo** en lavado de dinero» y «máximo **2%** de expedientes incompletos». ¿Son lo mismo? 🤔' },
      { text: 'La primera frase es el **apetito de riesgo**: cuánto riesgo acepta la empresa. La segunda es la **tolerancia**: el margen concreto en una métrica.' },
      {
        ask: 'Otra regla del consejo: «máximo **1%** de reportes entregados tarde». ¿Qué es?',
        options: [
          { text: 'Tolerancia', ok: true, reply: '¡Sí! Es un margen concreto en una métrica: **tolerancia**.' },
          { text: 'Apetito de riesgo', reply: 'El apetito es la idea general («riesgo bajo»). Un número concreto en una métrica es **tolerancia**.' },
          { text: 'Riesgo inherente', reply: 'El riesgo inherente es el que habría sin controles. Un margen en una métrica es **tolerancia**.' },
        ],
      },
      { text: 'Para probar, Ana toma una muestra y cuenta las **excepciones** (casos que no cumplen).\n**Tasa de excepción** = excepciones ÷ revisados × 100.' },
      {
        calc: {
          question: 'Ana revisa **120** expedientes y **6** están incompletos. ¿Cuál es la **tasa de excepción**?',
          answer: 5,
          unit: '%',
          hint: 'casos que no cumplen ÷ casos revisados × 100.',
          why: '6 ÷ 120 = 0.05 → **5%**. La tasa de cumplimiento es 100 − 5 = **95%**.',
        },
      },
      {
        calc: {
          question: 'La tasa salió **5%** y la tolerancia es **2%**. ¿Por cuántos **puntos porcentuales** se rebasó?',
          answer: 3,
          unit: 'puntos porcentuales',
          hint: 'resta, no dividas: tasa − tolerancia.',
          why: '5 − 2 = **3 puntos porcentuales** por encima: hay que buscar la causa, corregir y reportar.',
        },
      },
      { text: '**Riesgo inherente:** el que habría sin ningún control. **Riesgo residual:** lo que queda después de los controles.\nResidual = inherente × (1 − efectividad del control).' },
      {
        sim: {
          title: 'El paraguas con agujeros ☂️',
          inputs: [
            { key: 'i', label: 'Riesgo inherente (escala 1 a 25)', min: 1, max: 25, step: 1, value: 20 },
            { key: 'e', label: 'Efectividad del control (%)', min: 0, max: 90, step: 10, value: 30 },
          ],
          outputs: [
            { label: 'Parte que el control no cubre (%)', calc: (x) => 100 - x.e, unit: '%' },
            { label: 'Riesgo residual', calc: (x) => Math.round(x.i * (100 - x.e)) / 100, main: true, unit: 'puntos' },
          ],
          goal: {
            text: 'El apetito máximo es **8**. Mejora los controles hasta que el riesgo residual quede en **8 o menos**.',
            check: (x) => x.i * (100 - x.e) <= 800,
            done: 'Si multiplicas por la efectividad, obtienes lo que el control **quita**, no lo que **queda**. Ejemplo: 16 × (1 − 0.75) = **4**.',
          },
        },
      },
    ],
  ],
}
