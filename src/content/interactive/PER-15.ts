import type { InteractiveLesson } from './types'

export const intPER15: InteractiveLesson = {
  lessonId: 'PER-15',
  sections: [
    // ¿Cuánto es realmente tuyo?
    [
      { text: 'Ana tiene 38 años, es maestra y tiene dos hijos 👩‍🏫. Su hermano le dice: "Ganas $25,000 al mes, ¡eres rica!". Pero ¿cuánto **tiene** de verdad?' },
      { text: 'Un **plan financiero** responde tres cosas: **dónde estás**, **a dónde vas** y **cómo llegas**. Empieza con tu **balance personal**: lo que tienes y lo que debes.' },
      {
        sort: {
          title: '¿Qué es cada cosa para Ana?',
          buckets: ['Activo (lo tiene)', 'Pasivo (lo debe)', 'No va: es ingreso del mes'],
          items: [
            { text: 'Su cuenta de ahorro', bucket: 0, why: 'Es dinero que ya tiene: activo.' },
            { text: 'Su AFORE', bucket: 0, why: 'Es un saldo que le pertenece: activo.' },
            { text: 'El saldo de su tarjeta de crédito', bucket: 1, why: 'Es algo que debe: pasivo.' },
            { text: 'Su sueldo de $25,000', bucket: 2, why: 'Es lo que gana en el mes, no algo que ya tiene guardado.' },
            { text: 'Su crédito del auto', bucket: 1, why: 'Lo debe: pasivo.' },
            { text: 'Su auto', bucket: 0, why: 'Lo tiene y vale dinero: activo.' },
          ],
        },
      },
      {
        order: {
          title: 'Arma la fórmula',
          steps: ['Patrimonio neto =', 'lo que tienes (activos)', 'menos', 'lo que debes (pasivos)'],
          done: '¡Eso! Es lo que realmente sería tuyo si pagaras todas tus deudas.',
        },
      },
      {
        calc: {
          question: 'Ana tiene ahorro $40,000, AFORE $150,000 y un auto de $120,000. Debe $20,000 de tarjeta y $70,000 del auto. Gana $25,000 al mes. ¿Cuál es su patrimonio neto?',
          answer: 220000,
          hint: 'Activos: 40,000 + 150,000 + 120,000. Pasivos: 20,000 + 70,000. El sueldo no entra.',
          why: 'Activos $310,000 − pasivos $90,000 = **$220,000**. Si sumas el sueldo te da 245,000: el sueldo es ingreso del mes, no un activo.',
        },
      },
      {
        ask: 'Si el patrimonio neto de alguien sale **negativo**, ¿qué significa?',
        options: [
          { text: 'Que debe más de lo que tiene', ok: true, reply: '¡Exacto! La meta es que el patrimonio neto sea positivo y **crezca año con año**.' },
          { text: 'Que gana poco', reply: 'No mide cuánto ganas. Negativo significa que **debe más de lo que tiene**.' },
          { text: 'Que hizo mal la suma, nunca sale negativo', reply: 'Sí puede salir negativo: pasa cuando **debes más de lo que tienes**.' },
        ],
      },
      { tip: 'Haz tu balance una vez al año. Si tu patrimonio neto **crece**, vas por buen camino.' },
    ],
    // Metas con cifra y fecha
    [
      {
        ask: 'Ana quiere ahorrar. ¿Cuál meta está mejor escrita?',
        options: [
          { text: '"Ahorrar para un coche"', reply: 'Le falta cifra y fecha. Mejor: **"juntar $120,000 de enganche en 30 meses"**.' },
          { text: '"Juntar $120,000 de enganche en 30 meses"', ok: true, reply: '¡Sí! Es concreta, medible y con fecha: ya la puedes convertir en un ahorro mensual.' },
          { text: '"Ahorrar lo más que pueda"', reply: 'Así nunca sabes si vas bien. Una buena meta tiene **cifra y fecha**.' },
        ],
      },
      { text: 'Ordena tus metas por plazo:\n⚡ **Corto:** menos de 1 año.\n🛤️ **Mediano:** de 1 a 5 años.\n🏔️ **Largo:** más de 5 años.' },
      {
        sort: {
          title: '¿De qué plazo es cada meta de Ana?',
          buckets: ['Corto', 'Mediano', 'Largo'],
          items: [
            { text: 'Los útiles escolares de agosto, en 3 meses', bucket: 0, why: 'Menos de un año: corto plazo.' },
            { text: 'El enganche de una casa en 3 años', bucket: 1, why: 'Entre 1 y 5 años: mediano plazo.' },
            { text: 'Complementar su pensión, en 25 años', bucket: 2, why: 'Más de 5 años: largo plazo.' },
            { text: 'La universidad de su hija, que hoy tiene 5 años', bucket: 2, why: 'Faltan más de 10 años: largo plazo.' },
            { text: 'Cambiar de auto dentro de 2 años', bucket: 1, why: 'Entre 1 y 5 años: mediano plazo.' },
            { text: 'Los regalos de este diciembre', bucket: 0, why: 'Menos de un año: corto plazo.' },
          ],
        },
      },
      { text: 'Para saber cuánto ahorrar al mes: **(meta − lo que ya tienes) ÷ meses que faltan**.' },
      {
        calc: {
          question: 'Ana quiere $48,000 para cambiar estufa y refri en 16 meses. Ya tiene $8,000 apartados. ¿Cuánto debe ahorrar al mes?',
          answer: 2500,
          hint: 'Falta 48,000 − 8,000. Divide entre 16.',
          why: 'Falta $40,000. 40,000 ÷ 16 = **$2,500 al mes**. Si olvidas lo que ya tiene, te sale $3,000.',
        },
      },
      {
        sim: {
          title: 'Ana ya tiene $6,000 para un enganche de $60,000',
          inputs: [
            { key: 'a', label: 'Ahorro al mes', min: 1000, max: 5000, step: 500, value: 1500 },
            { key: 'm', label: 'Meses ahorrando', min: 6, max: 36, step: 6, value: 12 },
          ],
          outputs: [
            { label: 'Lleva juntado', calc: (x) => 6000 + x.a * x.m, main: true },
            { label: 'Le falta', calc: (x) => Math.max(0, 60000 - (6000 + x.a * x.m)) },
          ],
          goal: {
            text: 'Llega a la meta de **$60,000**.',
            check: (x) => 6000 + x.a * x.m >= 60000,
            done: 'Más ahorro al mes o más meses: tú eliges. Para metas lejanas, conviene invertir para que no se lo coma la inflación.',
          },
        },
      },
      { tip: 'Revisa tu plan **una vez al año** o cuando cambie tu vida: un trabajo nuevo, un hijo, una mudanza.' },
    ],
    // ¿Qué pasa con tus bienes?
    [
      { text: 'El papá de una amiga de Ana falleció **sin testamento**. Su familia lleva meses en trámites y discusiones 😟.' },
      {
        ask: '¿Qué le habría ahorrado ese problema a la familia?',
        options: [
          { text: 'Un testamento ante notario', ok: true, reply: '¡Eso! Deja claro quién recibe cada bien y quién cuida a los hijos menores.' },
          { text: 'Una nota escrita en una servilleta', reply: 'Una nota informal puede no tener validez. Lo que protege es un **testamento**, normalmente ante notario.' },
          { text: 'Nada, la familia se pone de acuerdo sola', reply: 'Sin reglas claras suelen venir conflictos. Por eso existe el **testamento**.' },
        ],
      },
      { text: 'Sin testamento, la familia sigue un **juicio sucesorio intestamentario**: más lento, más caro y con más pleitos. En septiembre hay campañas como el **Mes del Testamento**.' },
      { text: 'Ojo: algunas cosas se entregan **directo al beneficiario** que tú designes: **cuentas bancarias, seguros de vida y tu AFORE**.' },
      {
        rush: {
          title: '¿Se define en el testamento o con el beneficiario?',
          seconds: 30,
          labels: ['📜 Testamento', '👤 Beneficiario'],
          items: [
            { text: 'El seguro de vida', ans: 1 },
            { text: 'La casa', ans: 0 },
            { text: 'La AFORE', ans: 1 },
            { text: 'Quién será tutor de los hijos menores', ans: 0 },
            { text: 'La cuenta bancaria', ans: 1 },
            { text: 'Un terreno', ans: 0 },
          ],
        },
      },
      {
        ask: 'Ana se divorció, pero en su seguro de vida sigue como beneficiaria su expareja. Si Ana falta, ¿a quién le pagan?',
        options: [
          { text: 'A sus hijos, porque así lo dice su testamento', reply: 'El seguro se paga a quien aparece como **beneficiario**, aunque el testamento diga otra cosa de los demás bienes.' },
          { text: 'A su expareja, que sigue como beneficiaria', ok: true, reply: 'Así es. Por eso hay que **actualizar beneficiarios** cada vez que cambia tu familia.' },
          { text: 'A nadie, se queda la aseguradora', reply: 'Se paga a quien esté registrado como **beneficiario**: en este caso, la expareja.' },
        ],
      },
      {
        multi: {
          title: 'El plan de Ana para proteger a su familia',
          items: [
            { text: 'Hacer testamento y actualizarlo cuando cambie su familia', ok: true },
            { text: 'Designar beneficiarios en cuentas, seguros y AFORE', ok: true },
            { text: 'Guardar en un lugar conocido la lista de cuentas y pólizas', ok: true },
            { text: 'Esconder sus documentos para que nadie los encuentre', ok: false },
            { text: 'Suponer que el testamento cambia solo a los beneficiarios', ok: false },
          ],
          why: 'Testamento al día, beneficiarios registrados y documentos localizables. El testamento **no** cambia a los beneficiarios de cuentas, seguros ni AFORE.',
        },
      },
      { tip: 'Primero **protege** tu patrimonio (seguros, testamento, beneficiarios); luego búscale crecer.' },
    ],
  ],
}
