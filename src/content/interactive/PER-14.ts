import type { InteractiveLesson } from './types'

export const intPER14: InteractiveLesson = {
  lessonId: 'PER-14',
  sections: [
    // ¿Qué hace tu AFORE?
    [
      { text: 'Iván tiene 26 años y es cajero en un súper 🛒. Le llega su estado de cuenta de la AFORE y se sorprende: **tiene dinero ahí aunque "nunca ahorró"**.' },
      {
        ask: '¿De dónde crees que salió ese dinero?',
        options: [
          { text: 'Solo de su sueldo', reply: 'No solo. Si estás dado de alta en el IMSS, aportan **tres partes**: tú, tu patrón y el gobierno.' },
          { text: 'De tres partes: él, su patrón y el gobierno', ok: true, reply: '¡Exacto! Las tres aportan a su cuenta individual para el retiro.' },
          { text: 'Es un regalo de la AFORE', reply: 'La AFORE no regala dinero: **administra** lo que aportan Iván, su patrón y el gobierno.' },
        ],
      },
      { text: 'La **AFORE** administra tu cuenta para el retiro y la invierte en fondos llamados **SIEFORES**. La **CONSAR** las regula y supervisa.' },
      {
        text: 'Tu cuenta tiene apartados:\n🧓 **RCV** (Retiro, Cesantía y Vejez): la base de tu pensión.\n🏠 **Vivienda:** la aportación al INFONAVIT; la AFORE solo la reporta.\n➕ **Voluntarias:** lo que tú decides agregar.',
      },
      {
        sort: {
          title: '¿A qué apartado va?',
          buckets: ['RCV', 'Vivienda', 'Voluntarias'],
          items: [
            { text: 'La cuota obligatoria del patrón para la pensión', bucket: 0, why: 'Las cuotas obligatorias para la pensión van a RCV.' },
            { text: 'La cuota social del gobierno', bucket: 0, why: 'Es parte de las aportaciones obligatorias: RCV.' },
            { text: 'La aportación que administra el INFONAVIT', bucket: 1, why: 'Es la subcuenta de vivienda; la AFORE solo la reporta.' },
            { text: '$300 que Iván deposita en una tienda', bucket: 2, why: 'Lo decidió él: aportación voluntaria.' },
            { text: 'Un ahorro extra domiciliado cada quincena', bucket: 2, why: 'Lo que tú agregas por decisión propia es voluntario.' },
          ],
        },
      },
      { text: 'Las SIEFORES son **generacionales**: tu dinero va a un fondo según tu año de nacimiento. Más riesgo de joven, más conservador cerca del retiro.' },
      {
        ask: 'Iván (26) y su tío (60) tienen la misma AFORE. ¿El dinero de quién se invierte con más riesgo?',
        options: [
          { text: 'El de Iván', ok: true, reply: '¡Sí! Le quedan muchos años para recuperarse de caídas, así que su fondo busca más crecimiento.' },
          { text: 'El de su tío', reply: 'Al revés: al tío le falta poco para retirarse, así que su fondo es **más conservador**. El de Iván lleva más riesgo.' },
          { text: 'Igual, porque es la misma AFORE', reply: 'Misma AFORE, pero **distinta SIEFORE** según el año de nacimiento. El de Iván lleva más riesgo.' },
        ],
      },
    ],
    // ¿De qué depende tu pensión?
    [
      { text: 'El tío de Iván empezó a trabajar en **1994**. Iván, en **2019**. Aunque los dos coticen en el IMSS, su pensión **se calcula distinto**.' },
      {
        text: '📅 Empezaste **antes del 1 de julio de 1997** → **Ley 73**: cuentan tus semanas cotizadas y tu salario promedio.\n📅 Empezaste **después** → **Ley 97**: cuenta el **saldo** de tu AFORE.',
      },
      {
        sort: {
          title: '¿Ley 73 o Ley 97?',
          buckets: ['Ley 73', 'Ley 97'],
          items: [
            { text: 'Empezó a cotizar en 1990', bucket: 0, why: 'Antes de julio de 1997: Ley 73.' },
            { text: 'Empezó a cotizar en 2008', bucket: 1, why: 'Después de julio de 1997: Ley 97.' },
            { text: 'Su pensión depende de semanas y salario promedio', bucket: 0, why: 'Esa es la lógica de la Ley 73.' },
            { text: 'Su pensión depende del saldo en su AFORE', bucket: 1, why: 'Esa es la lógica de la Ley 97.' },
            { text: 'Iván, que empezó en 2019', bucket: 1, why: 'Empezó después de 1997: Ley 97.' },
          ],
        },
      },
      {
        ask: 'Iván está en Ley 97. ¿Qué cambia más su pensión?',
        options: [
          { text: 'Cuánto se aporte, cuánto rinda y cuánto se cobre de comisiones', ok: true, reply: '¡Eso! En Ley 97 manda el saldo, así que lo que haga hoy cuenta directo.' },
          { text: 'Solo su salario de los últimos años', reply: 'Esa es la lógica de la Ley 73. En Ley 97 manda el **saldo acumulado** de su AFORE.' },
          { text: 'Nada: el gobierno lo decide cada año', reply: 'No. En Ley 97 depende del **saldo** de su cuenta: aportaciones, rendimiento y comisiones.' },
        ],
      },
      { text: 'La **tasa de reemplazo** dice qué parte de tu último sueldo cubre la pensión: **pensión ÷ sueldo × 100**.' },
      {
        calc: {
          question: 'Iván estima un sueldo final de $15,000 y una pensión de $6,000. ¿Cuál sería su tasa de reemplazo en %?',
          answer: 40,
          unit: '%',
          hint: '6,000 ÷ 15,000 × 100.',
          why: '6,000 ÷ 15,000 = 0.40 → **40 %**. Su pensión cubriría 40 % de su sueldo.',
        },
      },
      {
        calc: {
          question: 'Iván quiere una pensión del 70 % de su sueldo de $15,000. Si estima recibir $6,000, ¿cuánto le faltaría al mes?',
          answer: 4500,
          hint: 'Meta: 0.70 × 15,000. Luego réstale los $6,000.',
          why: 'Meta: 0.70 × 15,000 = $10,500. Brecha: 10,500 − 6,000 = **$4,500 al mes**. Esa brecha se cierra con ahorro voluntario.',
        },
      },
      { tip: 'Mientras más baja la tasa de reemplazo, más ahorro voluntario necesitas **desde hoy**.' },
    ],
    // ¿Cómo crece tu ahorro?
    [
      { text: 'Iván compara dos AFORE con **cifras de ejemplo** 🔍. Una cobra menos comisión; la otra rinde más.' },
      { text: 'La AFORE cobra una **comisión anual** (un % de tu saldo). Lo que importa es el **rendimiento neto**: lo que gana tu dinero **después** de la comisión.' },
      {
        ask: 'Ejemplo: AFORE A rinde 6 % y cobra 0.5 %. AFORE B rinde 7 % y cobra 0.6 %. ¿Cuál le deja más a Iván?',
        options: [
          { text: 'La A, porque cobra menos', reply: 'Cobra menos, pero rinde menos. Neto: A = 6 − 0.5 = 5.5 %; B = 7 − 0.6 = **6.4 %**. Gana la B.' },
          { text: 'La B, porque su rendimiento neto es mayor', ok: true, reply: '¡Bien! 7 − 0.6 = 6.4 % contra 6 − 0.5 = 5.5 %. Gana el mayor **rendimiento neto**.' },
          { text: 'Da igual, todas rinden lo mismo', reply: 'No rinden lo mismo. Resta la comisión al rendimiento: la B deja **6.4 %** y la A 5.5 %.' },
        ],
      },
      {
        calc: {
          question: 'Ejemplo: saldo de $200,000, rendimiento de 6.5 % y comisión de 0.5 %. ¿Cuánto gana Iván en pesos en el año, ya sin comisión?',
          answer: 12000,
          hint: 'Rendimiento neto: 6.5 % − 0.5 % = 6 %. Multiplica 0.06 × 200,000.',
          why: 'Comisión: 0.005 × 200,000 = $1,000. Neto: 6 %. Ganancia: 0.06 × 200,000 = **$12,000**. Ojo: 0.5 % en decimal es 0.005.',
        },
      },
      { text: 'Las **aportaciones voluntarias** cierran la brecha. Y con **interés compuesto**, tu dinero gana interés sobre el interés: **saldo × (1 + r)ⁿ**.' },
      {
        sim: {
          title: 'Iván deposita $20,000 una sola vez',
          inputs: [
            { key: 'r', label: 'Rendimiento neto anual de ejemplo (%)', min: 2, max: 8, step: 1, value: 4 },
            { key: 'n', label: 'Años invertido', min: 1, max: 35, step: 1, value: 5 },
          ],
          outputs: [
            { label: 'Saldo futuro', calc: (x) => 20000 * Math.pow(1 + x.r / 100, x.n), main: true },
            { label: 'Ganancia', calc: (x) => 20000 * Math.pow(1 + x.r / 100, x.n) - 20000 },
          ],
          goal: {
            text: 'Haz que esos $20,000 lleguen a **$60,000 o más** (el triple).',
            check: (x) => 20000 * Math.pow(1 + x.r / 100, x.n) >= 60000,
            done: 'El tiempo es tu gran aliado: empezar 10 años antes vale mucho más que aportar el doble al final.',
          },
        },
      },
      {
        calc: {
          question: 'Ejemplo: Iván deposita $30,000 con rendimiento neto de 5 % anual compuesto. ¿Cuánto tendrá en 2 años?',
          answer: 33075,
          hint: '1.05 × 1.05 = 1.1025. Multiplica por 30,000.',
          why: '30,000 × 1.1025 = **$33,075**. Con interés simple te daría $33,000: se pierden los $75 que gana el interés.',
        },
      },
      {
        multi: {
          title: '¿Qué ayuda a Iván a mejorar su retiro?',
          items: [
            { text: 'Hacer aportaciones voluntarias desde ahora', ok: true },
            { text: 'Comparar AFORE por rendimiento neto y cambiarse si le conviene', ok: true },
            { text: 'Registrar a sus beneficiarios y tener sus datos al día', ok: true },
            { text: 'Esperar a los 55 años para empezar a preocuparse', ok: false },
            { text: 'Hacer retiros por desempleo aunque tenga trabajo', ok: false },
          ],
          why: 'Aportar pronto aprovecha el interés compuesto y el rendimiento neto define cuánto crece. El retiro por desempleo es para quien está desempleado y **reduce tus semanas cotizadas**.',
        },
      },
    ],
  ],
}
