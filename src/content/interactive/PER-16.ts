import type { InteractiveLesson } from './types'

export const intPER16: InteractiveLesson = {
  lessonId: 'PER-16',
  sections: [
    // ¿Te piden tu código?
    [
      { text: 'Rafa tiene 19 años, estudia en la universidad y acaba de sacar su primera tarjeta de débito 🎓. Hoy le llega un SMS: **"Tu cuenta fue bloqueada, entra aquí"**, con un enlace raro.' },
      {
        ask: '¿Qué debería hacer Rafa?',
        options: [
          { text: 'Abrir el enlace solo para ver qué es', reply: 'Mejor no: ese enlace puede llevarlo a una página falsa. Lo seguro es **no abrirlo** y llamar él al número oficial.' },
          { text: 'No abrirlo y llamar al número del reverso de su tarjeta', ok: true, reply: '¡Perfecto! Así habla con su banco de verdad, no con quien mandó el mensaje.' },
          { text: 'Responder el SMS con sus datos para desbloquearla', reply: 'Eso es justo lo que busca el estafador. **No respondas**: llama tú al número oficial.' },
        ],
      },
      { text: '🔒 Regla de oro: tu banco **nunca** te pedirá tu **NIP**, tu contraseña completa ni los **códigos** que te llegan por SMS o la app. Si te los piden, es fraude.' },
      {
        text: 'Se hacen pasar por tu banco, una paquetería o un familiar:\n📧 **Phishing:** correo o página falsa.\n💬 **Smishing:** SMS o WhatsApp.\n📞 **Vishing:** llamada.',
      },
      {
        sort: {
          title: '¿Qué tipo de engaño es?',
          buckets: ['Phishing', 'Smishing', 'Vishing'],
          items: [
            { text: 'Un correo con el logo del banco te pide "actualizar tus datos" en una página', bucket: 0, why: 'Correo y página falsa: phishing.' },
            { text: 'Un SMS: "tu paquete está retenido, paga aquí"', bucket: 1, why: 'Llega por SMS: smishing.' },
            { text: 'Te llaman "del área de seguridad" y te piden tu NIP', bucket: 2, why: 'Es una llamada: vishing.' },
            { text: 'Un WhatsApp: "Mamá, cambié de número, deposítame urgente"', bucket: 1, why: 'Llega por mensajería: smishing.' },
            { text: 'Una página idéntica a la de tu banco donde te piden la contraseña', bucket: 0, why: 'Página falsa: phishing.' },
          ],
        },
      },
      {
        ask: 'Le llaman a Rafa "del banco". Saben su nombre y los 4 últimos dígitos de su tarjeta, y le piden el código que le acaba de llegar "para cancelar un cargo". ¿Qué hace?',
        options: [
          { text: 'Dictar el código, porque conocen sus datos', reply: 'Esos datos se filtran fácil y no prueban nada. El banco **nunca** pide códigos. Cuelga y llama tú al número oficial.' },
          { text: 'Colgar y llamar él al número del reverso de su tarjeta', ok: true, reply: '¡Bien! Ese código sirve para **autorizar** una operación, no para cancelarla.' },
          { text: 'Dar solo la mitad del código, por si acaso', reply: 'Ni la mitad. Cualquier parte del código ayuda al estafador. **Cuelga y llama tú** al número oficial.' },
        ],
      },
      {
        multi: {
          title: '¿Cuáles son señales de alerta?',
          items: [
            { text: '"Tienes 10 minutos o se bloquea tu cuenta"', ok: true },
            { text: 'Te piden tu NIP o un código de SMS', ok: true },
            { text: 'Un enlace o número que no es el oficial', ok: true },
            { text: '"Tu primo está detenido, deposita ya"', ok: true },
            { text: 'Tú llamas al número impreso en tu tarjeta', ok: false },
          ],
          why: 'Urgencia, datos secretos, enlaces no oficiales y presión emocional son señales clásicas. Llamar **tú** al número oficial es la forma segura de verificar.',
        },
      },
      { tip: 'También existen el **robo de identidad**, el **SIM swapping** (duplican tu chip para recibir tus códigos) y la **clonación de tarjetas**.' },
    ],
    // ¿Ganancia segura y enorme?
    [
      { text: 'Un amigo invita a Rafa a un "club de trading con inteligencia artificial" 🤖: **10 % mensual garantizado** y un bono por cada amigo que meta.' },
      {
        ask: '¿Cómo crees que logra pagar tanto?',
        options: [
          { text: 'Tiene un negocio buenísimo y secreto', reply: 'Si fuera real, podría explicarlo claro. Lo típico es que **pague a los primeros con el dinero de los que entran después**.' },
          { text: 'Paga a los primeros con el dinero de los nuevos', ok: true, reply: 'Eso es una **pirámide** o esquema Ponzi. Cuando deja de entrar gente, se cae y la mayoría pierde.' },
          { text: 'El gobierno respalda esas ganancias', reply: 'Nadie garantiza ganancias altas sin riesgo. Lo más probable: **paga con el dinero de los nuevos**.' },
        ],
      },
      { text: 'Una pirámide **no tiene un negocio real**. Mientras entra gente nueva parece funcionar; cuando deja de entrar, **se derrumba**.' },
      {
        text: '🚩 Señales:\n💰 Rendimiento **garantizado** muy alto.\n👥 Bonos por **reclutar**.\n🌫️ Explicaciones vagas ("criptos secretas").\n⏰ Prisa por invertir y empresa **no registrada**.',
      },
      {
        sim: {
          title: 'Convierte la promesa mensual a un año',
          inputs: [{ key: 't', label: 'Rendimiento prometido al mes (%)', min: 1, max: 15, step: 1, value: 2 }],
          outputs: [
            { label: 'Al año (simple)', calc: (x) => x.t * 12, unit: '%', main: true },
            { label: 'Al año (compuesto)', calc: (x) => (Math.pow(1 + x.t / 100, 12) - 1) * 100, unit: '%' },
          ],
          goal: {
            text: 'Busca desde qué promesa mensual ya serían **100 % o más al año** (simple).',
            check: (x) => x.t * 12 >= 100,
            done: 'Una cifra "chiquita" al mes es enorme al año. Si además la **garantizan**, trátalo como fraude.',
          },
        },
      },
      {
        calc: {
          question: 'Le prometen a Rafa 12 % mensual simple sobre $5,000 durante 12 meses. ¿Cuántos pesos de interés le prometen?',
          answer: 7200,
          hint: 'Un mes: 5,000 × 0.12. Luego por 12 meses.',
          why: 'Un mes: $600. Doce meses: 600 × 12 = **$7,200**, más de lo que invierte, "sin riesgo". Si solo calculas un mes ($600), no suena exagerado: siempre llévalo a un año.',
        },
      },
      {
        rush: {
          title: '¿Sospechoso o sensato?',
          seconds: 30,
          labels: ['🚩 Sospechoso', '✅ Sensato'],
          items: [
            { text: '"Ganancia alta garantizada, cero riesgo"', ans: 0 },
            { text: 'Verificar que la empresa esté registrada ante las autoridades', ans: 1 },
            { text: '"Gana más por cada amigo que invites"', ans: 0 },
            { text: '"A mayor rendimiento, mayor riesgo"', ans: 1 },
            { text: '"Ya me pagó 3 meses, así que es seguro"', ans: 0 },
            { text: '"Invierte hoy o pierdes tu lugar"', ans: 0 },
          ],
        },
      },
      { tip: 'Las pirámides **pagan puntual al principio** para ganar tu confianza. Los primeros pagos no prueban que el negocio sea real.' },
    ],
    // Préstamos trampa y cómo reaccionar
    [
      { text: 'Una mañana, Rafa ve en su app **tres compras en línea que no hizo**: $3,200 en su tarjeta de débito 😰.' },
      {
        ask: '¿Qué debe hacer primero?',
        options: [
          { text: 'Esperar al estado de cuenta para confirmar', reply: 'Esperar deja que sigan los cargos. Primero **llama al banco y bloquea** la tarjeta.' },
          { text: 'Llamar a su banco para bloquear la tarjeta', ok: true, reply: '¡Bien! Bloquear frena más cargos. Después viene la aclaración.' },
          { text: 'Ir directo a la CONDUSEF sin avisar al banco', reply: 'La reclamación normalmente **empieza en el banco**. La CONDUSEF entra si el banco no te resuelve.' },
        ],
      },
      {
        order: {
          title: 'Ordena lo que hace Rafa',
          steps: ['Llama al banco y bloquea tarjetas y cuentas', 'Cambia sus contraseñas', 'Presenta la aclaración por los cargos que no reconoce', 'Si no le resuelven, acude a la CONDUSEF y denuncia'],
          done: 'Y en cada paso, **guarda capturas, números y folios**.',
        },
      },
      { text: 'Otra trampa: **apps de préstamo fraudulentas** ("montadeudas"). Prestan poco, cobran mucho, piden ver tus contactos y fotos, y si no pagas te **amenazan**. Antes de pedir, **verifica** el registro en el **SIPRES** de la CONDUSEF.' },
      { text: 'Y nunca prestes tu cuenta para "recibir un depósito de un conocido": podrías volverte una **cuenta mula** que mueve dinero de fraudes.' },
      {
        match: {
          title: 'Une cada término',
          pairs: [
            ['Montadeudas', 'App que presta y amenaza con exhibirte'],
            ['SIPRES', 'Registro de la CONDUSEF para verificar a quien presta'],
            ['Cuenta mula', 'Cuenta prestada que mueve dinero de fraudes'],
            ['Aclaración', 'Reclamo al banco por un cargo que no hiciste'],
          ],
        },
      },
      {
        ask: 'En redes le ofrecen a Rafa $1,000 por dejar que usen su tarjeta de débito una semana. ¿Qué hace?',
        options: [
          { text: 'Acepta, es dinero fácil', reply: 'Es una trampa: su cuenta podría mover dinero de fraudes y meterlo en **problemas legales**.' },
          { text: 'Rechaza: lo usarían como cuenta mula', ok: true, reply: '¡Exacto! Nadie paga por "usar tu tarjeta" por algo bueno.' },
          { text: 'Acepta, pero solo por un día', reply: 'Un día basta para mover dinero de fraudes. **Rechaza**: es una cuenta mula.' },
        ],
      },
    ],
  ],
}
