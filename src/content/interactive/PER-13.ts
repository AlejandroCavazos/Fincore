import type { InteractiveLesson } from './types'

export const intPER13: InteractiveLesson = {
  lessonId: 'PER-13',
  sections: [
    // ¿Para qué sirve un seguro?
    [
      { text: 'Marisol tiene 34 años, es enfermera y mamá de dos 👩‍⚕️. Su vecina necesitó una cirugía de **$300,000** y tuvo que vender su coche para pagarla.' },
      {
        ask: '¿Cómo podría Marisol protegerse de un gasto así?',
        options: [
          { text: 'Juntar $300,000 este mes, por si acaso', reply: 'Casi nadie puede juntar tanto de golpe. La salida es **pagar un poco cada mes a una aseguradora** para que ella cubra el golpe grande.' },
          { text: 'Pagar un poco cada mes a una aseguradora', ok: true, reply: '¡Eso es un seguro! Pagas una cantidad fija y, si pasa lo malo, la aseguradora paga según lo pactado.' },
          { text: 'Confiar en que a ella no le pasará', reply: 'Nadie sabe si le pasará. Con un **seguro**, si pasa, la aseguradora paga la pérdida según lo pactado.' },
        ],
      },
      { text: 'Funciona porque **muchas personas pagan un poco** y solo a unas pocas les pasa el accidente. Así **transfieres** el riesgo a la aseguradora.' },
      {
        text: 'Las palabras clave:\n💳 **Prima:** lo que pagas por estar protegido.\n📄 **Póliza:** el contrato con las reglas.\n🚨 **Siniestro:** cuando pasa lo cubierto.\n🔝 **Suma asegurada:** lo máximo que pagará la aseguradora.',
      },
      {
        match: {
          title: 'Une cada palabra con su significado',
          pairs: [
            ['Prima', 'Lo que Marisol paga cada mes'],
            ['Póliza', 'El contrato que firmó'],
            ['Siniestro', 'El día que su hijo se accidenta'],
            ['Suma asegurada', 'El tope que pagará la aseguradora'],
          ],
        },
      },
      { text: 'Regla práctica: asegura lo que **no podrías pagar tú solo**. Lo pequeño y frecuente se cubre mejor con tu **fondo de emergencia**.' },
      {
        sort: {
          title: '¿Seguro o fondo de emergencia?',
          buckets: ['Conviene un seguro', 'Lo cubre el fondo de emergencia'],
          items: [
            { text: 'Una hospitalización de varios días', bucket: 0, why: 'Puede costar muchísimo: es justo lo que conviene asegurar.' },
            { text: 'Un celular de $4,000', bucket: 1, why: 'Es un gasto que puedes absorber: quizá no vale la pena asegurarlo.' },
            { text: 'Un choque grave con el auto', bucket: 0, why: 'Podría hundir tus finanzas: mejor transferir el riesgo.' },
            { text: 'Unos lentes rotos de $1,500', bucket: 1, why: 'Pequeño y frecuente: tu fondo de emergencia lo cubre.' },
            { text: 'Una cirugía de $300,000', bucket: 0, why: 'Casi nadie la puede pagar de su bolsa: se asegura.' },
          ],
        },
      },
      { tip: 'Antes de firmar, lee las **exclusiones**: lo que la póliza **no** cubre.' },
    ],
    // ¿Qué parte pagas tú?
    [
      { text: 'El hijo de Marisol se fractura el brazo 🩼. La cuenta del hospital es de **$40,000**. Su póliza tiene **deducible de $8,000** y **coaseguro de 10 %**.' },
      {
        ask: '¿Crees que el seguro paga los $40,000 completos?',
        options: [
          { text: 'Sí, para eso es el seguro', reply: 'Casi ningún seguro paga el 100 %. Marisol paga **una parte fija primero** y **un porcentaje de lo que queda**.' },
          { text: 'No: ella paga una parte primero y un % del resto', ok: true, reply: '¡Bien! Esas dos partes se llaman **deducible** y **coaseguro**.' },
          { text: 'No, el seguro no paga nada', reply: 'Sí paga, pero no todo. Marisol cubre el **deducible** y el **coaseguro**; el resto lo paga la aseguradora.' },
        ],
      },
      {
        text: '🔹 **Deducible:** cantidad fija que pagas tú primero.\n🔹 **Coaseguro:** un % de **lo que queda** después del deducible.\n🔹 Lo demás lo paga la aseguradora.',
      },
      {
        order: {
          title: 'Arma el cálculo en orden',
          steps: ['Resta el deducible a la cuenta', 'Saca el coaseguro de lo que queda', 'Suma deducible + coaseguro: eso pagas tú', 'El resto lo paga la aseguradora'],
          done: '¡Listo! Con estos 4 pasos sacas cualquier cuenta de hospital.',
        },
      },
      {
        calc: {
          question: 'Cuenta de $40,000, deducible de $8,000 y coaseguro de 10 %. ¿Cuánto paga Marisol en total?',
          answer: 11200,
          hint: 'Queda 40,000 − 8,000 = 32,000. Coaseguro: 10 % de 32,000. Súmale el deducible.',
          why: 'Coaseguro: 0.10 × 32,000 = $3,200. Marisol paga 8,000 + 3,200 = **$11,200** y la aseguradora $28,800. Ojo: el 10 % va sobre lo que queda, no sobre los $40,000.',
        },
      },
      {
        sim: {
          title: 'Compara pólizas para una cuenta de $60,000',
          inputs: [
            { key: 'd', label: 'Deducible', min: 5000, max: 20000, step: 1000, value: 15000 },
            { key: 'c', label: 'Coaseguro (%)', min: 5, max: 20, step: 5, value: 20 },
          ],
          outputs: [
            { label: 'Coaseguro en pesos', calc: (x) => (x.c / 100) * (60000 - x.d) },
            { label: 'Pagas tú', calc: (x) => x.d + (x.c / 100) * (60000 - x.d), main: true },
            { label: 'Paga la aseguradora', calc: (x) => 60000 - (x.d + (x.c / 100) * (60000 - x.d)) },
          ],
          goal: {
            text: 'Encuentra una póliza en la que tú pagues **$12,000 o menos**.',
            check: (x) => x.d + (x.c / 100) * (60000 - x.d) <= 12000,
            done: 'Deducible y coaseguro bajos = pagas menos si pasa algo. Pero esas pólizas **suelen tener prima más alta**.',
          },
        },
      },
      {
        ask: 'Póliza A: la prima más baja, pero deducible altísimo. Póliza B: prima un poco mayor y deducible bajo. ¿La A siempre es mejor?',
        options: [
          { text: 'Sí, siempre gana la prima más baja', reply: 'No siempre. Una prima baja puede esconder deducible alto, más exclusiones o una suma asegurada baja. Compara **lo que pagarías en un siniestro real**.' },
          { text: 'No: hay que comparar lo que pagarías si pasa algo', ok: true, reply: '¡Exacto! Pagas menos cada año con la A, pero mucho más el día que la necesitas.' },
          { text: 'Da igual, todas las pólizas son iguales', reply: 'No lo son: dos pólizas con la misma prima pueden tener sumas aseguradas muy distintas. **Compara** antes de elegir.' },
        ],
      },
      { tip: '**Pagas tú = deducible + coaseguro.** El coaseguro se calcula sobre lo que queda después del deducible.' },
    ],
    // ¿Qué seguro necesitas?
    [
      {
        text: 'Marisol revisa qué seguros le hacen falta:\n🏥 **Gastos médicos mayores:** enfermedades y accidentes graves.\n🕊️ **Vida:** deja dinero a sus hijos si ella falta.\n🚗 **Auto:** daños a otros, a su coche y robo.\n🏠 **Hogar:** daños a la casa y a lo que hay dentro.',
      },
      {
        match: {
          title: '¿Qué seguro cubre cada caso?',
          pairs: [
            ['Gastos médicos mayores', 'Una apendicitis con cirugía'],
            ['Vida', 'Que falte quien mantiene a la familia'],
            ['Auto', 'Le roban la camioneta en la calle'],
            ['Hogar', 'Una fuga de agua daña pisos y muebles'],
          ],
        },
      },
      {
        rush: {
          title: '¿Médicos o auto? ¡Rápido!',
          seconds: 30,
          labels: ['🏥 Gastos médicos', '🚗 Auto'],
          items: [
            { text: 'Un tratamiento largo contra el cáncer', ans: 0 },
            { text: 'Golpear por detrás a otro coche', ans: 1 },
            { text: 'Una hospitalización por un accidente grave', ans: 0 },
            { text: 'El robo total del coche', ans: 1 },
            { text: 'Daños que le haces a otra persona al manejar', ans: 1 },
            { text: 'Una cirugía de rodilla', ans: 0 },
          ],
        },
      },
      { text: '¿Cuánto seguro de vida? **Gastos del año × años a cubrir + deudas − ahorros.** Si nadie depende de tu ingreso, quizá no lo necesitas todavía.' },
      {
        calc: {
          question: 'La familia de Marisol gasta $180,000 al año. Quiere cubrir 5 años, debe $100,000 y tiene $60,000 ahorrados. ¿Qué suma asegurada de vida necesita?',
          answer: 940000,
          hint: '180,000 × 5, más 100,000, menos 60,000.',
          why: 'Gastos: 180,000 × 5 = 900,000. Más deudas: 1,000,000. Menos ahorros: **$940,000**. Error común: olvidar restar los ahorros o usar solo un año de gastos.',
        },
      },
      {
        multi: {
          title: 'Antes de firmar, ¿qué debe revisar Marisol?',
          items: [
            { text: 'Coberturas y exclusiones', ok: true },
            { text: 'Periodos de espera', ok: true },
            { text: 'Cómo trata la póliza las preexistencias, declarándolas con honestidad', ok: true },
            { text: 'Solo la prima: lo demás es letra chica', ok: false },
            { text: 'Nada: firmar rápido para que no suba el precio', ok: false },
          ],
          why: 'Hay que ver coberturas, exclusiones, **periodos de espera** (tiempo antes de que cubra ciertas enfermedades) y **preexistencias** (lo que ya tenías). Mirar solo la prima te puede dejar sin cobertura cuando más la necesitas.',
        },
      },
      { tip: 'En México, la **CNSF** supervisa a las aseguradoras y la **CONDUSEF** atiende quejas de usuarios.' },
    ],
  ],
}
