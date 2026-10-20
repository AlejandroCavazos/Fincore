import type { InteractiveLesson } from './types'

export const intFIN17: InteractiveLesson = {
  lessonId: 'FIN-17',
  sections: [
    // ¿Falta efectivo o sobra deuda?
    [
      { text: 'Ingrid dirige las finanzas de **Rutas del Sol**, una empresa de autobuses turísticos 🚌. Un cliente grande se atrasó tres meses en pagar y este mes no alcanza para la nómina.' },
      {
        ask: '¿Rutas del Sol está quebrada?',
        options: [
          { text: 'No necesariamente: quizá solo le llegó tarde el efectivo', ok: true, reply: '¡Bien visto! No es lo mismo no tener efectivo **hoy** que no poder pagar **nunca**.' },
          { text: 'Sí, si no paga la nómina está quebrada', reply: 'No tan rápido. Si el negocio es sano y solo le pagaron tarde, es un problema temporal de **efectivo**, no de quiebra.' },
          { text: 'No, las empresas nunca quiebran', reply: 'Sí pueden quebrar. Pero aquí el problema puede ser solo que **el efectivo llegó tarde**.' },
        ],
      },
      { text: 'Dos problemas distintos:\n💧 **Liquidez:** el negocio es sano, pero el efectivo no llega a tiempo (como quedarse sin dinero a mitad de quincena).\n🧱 **Solvencia:** lo que debe es mayor que lo que la empresa vale o puede generar. Es más grave.' },
      {
        sort: {
          title: '¿Liquidez o solvencia?',
          buckets: ['Liquidez', 'Solvencia'],
          items: [
            { text: 'Tiene contratos rentables, pero un cliente le pagará hasta el próximo mes', bucket: 0, why: 'El negocio es sano; el efectivo solo llega tarde.' },
            { text: 'Debe mucho más de lo que el negocio podrá generar nunca', bucket: 1, why: 'La deuda supera lo que puede generar: solvencia.' },
            { text: 'Le falta para un pago de este mes, pero su valor supera con holgura su deuda', bucket: 0, why: 'Vale más que lo que debe: es liquidez. Basta con más plazo o un crédito puente.' },
            { text: 'Pierde dinero año tras año y su deuda ya vale más que la empresa', bucket: 1, why: 'Pérdidas recurrentes y deuda mayor que su valor: solvencia.' },
          ],
        },
      },
      { text: 'Los bancos vigilan dos razones:\n🏋️ **Deuda neta ÷ EBITDA:** cuántos años de EBITDA harían falta para pagar la deuda.\n🛡️ **Cobertura = EBIT ÷ intereses:** cuántas veces alcanza la utilidad de operación para pagar intereses.\nLos contratos ponen límites a esas razones: se llaman **covenants**.' },
      {
        calc: {
          question: 'Rutas del Sol tiene EBIT de $600,000 e intereses de $200,000 al año. ¿Cuántas veces cubre sus intereses?',
          answer: 3,
          unit: 'veces',
          hint: 'EBIT ÷ intereses: 600,000 ÷ 200,000.',
          why: '600,000 ÷ 200,000 = **3 veces**. Error común: dividir al revés (intereses ÷ EBIT).',
        },
      },
      {
        ask: 'Su contrato de crédito pide una cobertura **mínima de 4 veces**. ¿Qué pasa?',
        options: [
          { text: 'Incumple el covenant y el banco podría exigir el pago anticipado', ok: true, reply: '¡Exacto! 3 es menos que 4: rompió el límite y el banco puede pedir que pague antes.' },
          { text: 'Cumple, porque 3 veces es bastante', reply: 'El contrato pide **al menos 4**. Con 3, incumple y el banco podría exigir el pago anticipado.' },
          { text: 'No pasa nada, los covenants son solo sugerencias', reply: 'Son límites del contrato. Si se rompen, el banco puede **exigir el pago anticipado**.' },
        ],
      },
      {
        multi: {
          title: '¿Cuáles son señales de alerta? Marca todas',
          items: [
            { text: 'Pagos atrasados a proveedores', ok: true },
            { text: 'Usar siempre la línea de crédito hasta el tope', ok: true },
            { text: 'Pérdidas año tras año', ok: true },
            { text: 'Un vencimiento grande de deuda sin plan para refinanciarlo', ok: true },
            { text: 'Pagar a tiempo y tener efectivo de sobra', ok: false },
          ],
          why: 'Atrasos, crédito al tope, pérdidas recurrentes y vencimientos sin plan son señales de dificultad. Pagar a tiempo con efectivo de sobra es señal de salud.',
        },
      },
    ],
    // ¿Cómo se arregla sin juez?
    [
      { text: 'Rutas del Sol tiene deuda neta de $900,000 y EBITDA de $150,000: **6 veces**. Su covenant pide **máximo 4 veces**. Si el negocio es viable, lo más rápido y barato es negociar en privado con los acreedores 🤝.' },
      { text: 'Herramientas para arreglarlo:\n📅 **Refinanciar:** más plazo, periodo de gracia o menor tasa.\n✂️ **Quita:** el acreedor perdona parte del saldo.\n🔄 **Capitalización:** los acreedores cambian deuda por acciones.\n🏷️ Vender activos que no son clave, recortar costos o que los socios pongan **nuevo capital**.' },
      {
        match: {
          title: 'Une cada herramienta con su idea',
          pairs: [
            ['Refinanciar', 'Ampliar el plazo o dar un periodo de gracia'],
            ['Quita', 'El acreedor perdona parte de lo que se le debe'],
            ['Capitalización', 'El acreedor recibe acciones a cambio de deuda'],
            ['Nuevo capital', 'Los socios ponen más dinero'],
          ],
        },
      },
      {
        calc: {
          question: 'Con EBITDA de $150,000 y un máximo de 4 veces, ¿hasta cuánto debe bajar la deuda neta de Rutas del Sol?',
          answer: 600000,
          hint: '4 × 150,000.',
          why: '4 × 150,000 = **$600,000**. Tiene que bajar $300,000 de deuda: vendiendo activos, capitalizando deuda o combinando ambas.',
        },
      },
      { text: 'Ojo al vender un activo: baja la deuda, pero también se va el EBITDA que ese activo daba.\n🧮 Nueva razón = (deuda neta − dinero de la venta) ÷ (EBITDA − EBITDA del activo vendido)' },
      {
        calc: {
          question: 'Ingrid vende una terminal que no es clave en $300,000 y usa todo para pagar deuda. La terminal aportaba $30,000 de EBITDA. ¿Cuántas veces queda la deuda neta ÷ EBITDA?',
          answer: 5,
          unit: 'veces',
          hint: 'Deuda: 900,000 − 300,000. EBITDA: 150,000 − 30,000. Divide.',
          why: '600,000 ÷ 120,000 = **5 veces**. Mejoró desde 6, pero aún no llega a 4. Error común: olvidar el EBITDA perdido y calcular 600,000 ÷ 150,000 = 4.',
        },
      },
      {
        multi: {
          title: '¿Cuáles son herramientas legítimas? Marca todas',
          items: [
            { text: 'Ampliar el plazo de los créditos', ok: true },
            { text: 'Pactar una quita con el acreedor', ok: true },
            { text: 'Cambiar deuda por acciones', ok: true },
            { text: 'Vender activos que no son clave', ok: true },
            { text: 'Ocultar pasivos en los estados financieros para cumplir el covenant', ok: false },
            { text: 'Pagar un dividendo extraordinario antes de negociar con los bancos', ok: false },
          ],
          why: 'Ocultar pasivos es **fraude**. Y pagar dividendos cuando no alcanza para la deuda saca dinero que, en la práctica, es de los acreedores y destruye la confianza.',
        },
      },
      { tip: 'Los acreedores aceptan sacrificios (plazo, quita, acciones) cuando esperan **recuperar más así** que en una liquidación.' },
    ],
    // ¿Quién cobra primero?
    [
      { text: 'Si no hay acuerdo privado, entra un juez ⚖️. En México existe el **concurso mercantil**: primero una etapa de **conciliación** y, si fracasa, la **quiebra**, donde se venden los bienes para pagar. En Estados Unidos existe el **Capítulo 11**.' },
      {
        ask: 'En la etapa de conciliación, ¿qué se busca?',
        options: [
          { text: 'Un convenio con los acreedores para seguir operando', ok: true, reply: '¡Sí! Un conciliador ayuda a que la empresa y sus acreedores firmen un convenio.' },
          { text: 'Vender todos los bienes de inmediato', reply: 'Eso es la **quiebra**, que viene si la conciliación fracasa. Primero se busca un **convenio** para seguir operando.' },
          { text: 'Cerrar sin pagarle a nadie', reply: 'No: el proceso busca que los acreedores cobren. En conciliación se busca un **convenio** para seguir operando.' },
        ],
      },
      { text: 'Si se reparte lo que queda, hay un **orden de prelación** (quién cobra primero):\n1️⃣ Acreedores **con garantía** (como un banco con hipoteca), hasta el valor de su garantía.\n2️⃣ **Quirografarios:** sin garantía, como muchos proveedores.\n3️⃣ **Accionistas**, que normalmente reciben poco o nada.' },
      {
        sort: {
          title: '¿Con garantía o quirografario?',
          buckets: ['Con garantía', 'Quirografario'],
          items: [
            { text: 'Banco con hipoteca sobre la terminal de autobuses', bucket: 0, why: 'Tiene un bien que respalda su crédito: con garantía.' },
            { text: 'Proveedor de diésel que vendió sin garantía', bucket: 1, why: 'Sin garantía: quirografario.' },
            { text: 'Taller que le fió refacciones', bucket: 1, why: 'Solo tiene la factura, sin garantía: quirografario.' },
          ],
        },
      },
      {
        order: {
          title: 'Arma el orden de cobro',
          steps: ['Acreedores con garantía', 'Acreedores quirografarios', 'Accionistas'],
          done: '¡Eso! Los dueños cobran al final, solo si sobra algo.',
        },
      },
      {
        calc: {
          question: 'Los bienes de Rutas del Sol se venden en $800,000. La deuda con garantía es $500,000 y la quirografaria $1,200,000. ¿Qué porcentaje de su deuda recuperan los quirografarios?',
          answer: 25,
          unit: '%',
          hint: 'Primero cobran los de garantía: 800,000 − 500,000. Lo que sobra, ÷ 1,200,000 × 100.',
          why: 'Sobran 800,000 − 500,000 = 300,000; 300,000 ÷ 1,200,000 = 0.25 → **25 %**. Error común: repartir los $800,000 entre todos por igual, sin respetar el orden.',
        },
      },
      {
        ask: '¿Cuánto reciben los accionistas en ese caso?',
        options: [
          { text: '$0', ok: true, reply: '¡Exacto! Los quirografarios no cobraron completo, así que no sobra nada para los accionistas.' },
          { text: '$300,000', reply: 'Esos $300,000 son para los quirografarios, que cobran antes. A los accionistas les toca **$0**.' },
          { text: 'Lo mismo que invirtieron', reply: 'Los accionistas cobran al final y solo si sobra algo. Aquí no sobra: reciben **$0**.' },
        ],
      },
      { tip: 'Esto es simplificado: en la vida real hay créditos con trato especial, como los **laborales** y **fiscales**.' },
    ],
  ],
}
