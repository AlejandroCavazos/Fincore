import type { InteractiveLesson } from './types'

export const intCON15: InteractiveLesson = {
  lessonId: 'CON-15',
  sections: [
    // ¿Qué certificación te conviene?
    [
      { text: 'Carla acaba de terminar contaduría 🎓. Su título dice que estudió. ¿Qué le daría además una **certificación**?' },
      {
        ask: '¿Qué crees que demuestra una certificación?',
        options: [
          { text: 'Que aprobaste un examen exigente y te mantienes al día', ok: true, reply: '¡Exacto! Es más que el título: un examen difícil y actualización constante.' },
          { text: 'Lo mismo que el título', reply: 'El título dice que estudiaste. La certificación dice que **aprobaste un examen exigente** y te mantienes al día.' },
          { text: 'Que ya no tienes que estudiar nunca', reply: 'Al revés: para conservarla hay que seguir estudiando cada año.' },
        ],
      },
      {
        text: 'Las más conocidas:\n🇲🇽 **CPC (IMCP):** contaduría pública; se obtiene con el Examen Uniforme de Certificación.\n🇺🇸 **CPA:** licencia de contador público de Estados Unidos.\n🇬🇧 **ACCA:** contable internacional, de origen británico.\n🏭 **CMA:** contabilidad administrativa y costos.\n🔎 **CIA:** auditoría interna.',
      },
      {
        sort: {
          title: '¿Cuál es su enfoque?',
          buckets: ['Contaduría pública general', 'Administrativa y costos', 'Auditoría interna'],
          items: [
            { text: 'CPC del IMCP', bucket: 0, why: 'Contaduría pública en México.' },
            { text: 'CPA', bucket: 0, why: 'Licencia de contador público de Estados Unidos.' },
            { text: 'ACCA', bucket: 0, why: 'Certificación contable general, internacional.' },
            { text: 'CMA', bucket: 1, why: 'Contabilidad administrativa y gestión de costos.' },
            { text: 'CIA', bucket: 2, why: 'Se enfoca en auditoría interna.' },
          ],
        },
      },
      {
        ask: 'A Carla le ofrecen entrar al área de **auditoría interna** de un corporativo. ¿Qué certificación le encaja?',
        options: [
          { text: 'CIA', ok: true, reply: '¡Sí! El CIA se enfoca justo en **auditoría interna**.' },
          { text: 'CMA', reply: 'El CMA es de **costos** y contabilidad administrativa. Para auditoría interna, el **CIA**.' },
          { text: 'ACCA', reply: 'El ACCA es contable general. Para auditoría interna encaja mejor el **CIA**.' },
        ],
      },
      {
        ask: 'Carla aprueba el CPC. ¿Ya es suyo para siempre?',
        options: [
          { text: 'No: cada año debe acreditar horas de educación continua', ok: true, reply: '¡Correcto! La certificación **no es para siempre**: se conserva con educación profesional continua.' },
          { text: 'Sí, ya lo aprobó', reply: 'No basta aprobar una vez: cada año debe acreditar horas de **educación profesional continua**.' },
          { text: 'Solo si vuelve a presentar el examen cada año', reply: 'No repite el examen; lo que pide es acreditar horas de **educación profesional continua** cada año.' },
        ],
      },
      { tip: 'Elige según tu meta: **costos** → CMA, **auditoría interna** → CIA, **contaduría pública** → CPC, CPA o ACCA.' },
    ],
    // Arma tu plan de estudio
    [
      {
        text: 'Carla va por su certificación 📚. No empieza leyendo al azar; sigue un plan:\n🗺️ Lee el **temario** oficial vigente: áreas y su **peso** (porcentaje de preguntas).\n🩺 Haz un **diagnóstico**: un examen de práctica.\n⏱️ Reparte horas: más a lo de **mucho peso y bajo puntaje**.\n🔁 Estudia en bloques cortos, practica preguntas tipo examen y repasa días después.',
      },
      {
        order: {
          title: 'Ordena el plan de Carla',
          steps: [
            'Leer el temario oficial vigente con sus áreas y pesos',
            'Hacer un diagnóstico: un examen de práctica',
            'Repartir horas según peso y puntaje',
            'Estudiar en bloques, practicar y repasar días después',
          ],
          done: 'Temario → diagnóstico → repartir horas → estudiar, practicar y repasar.',
        },
      },
      { text: '**Horas por semana = horas totales ÷ semanas.** Y para un área: **horas totales × su peso**.' },
      {
        sim: {
          title: 'El plan semanal de Carla',
          inputs: [
            { key: 'h', label: 'Horas totales que necesita', min: 160, max: 320, step: 20, value: 240 },
            { key: 's', label: 'Semanas para el examen', min: 8, max: 24, step: 1, value: 10 },
          ],
          outputs: [{ label: 'Horas por semana', calc: (x) => Math.round((x.h / x.s) * 10) / 10, main: true, unit: 'horas' }],
          goal: {
            text: 'Carla trabaja y solo puede estudiar **15 horas por semana o menos**. Ajusta el plan.',
            check: (x) => x.h / x.s <= 15,
            done: 'Con 240 horas y 16 semanas son 15 por semana, unas 2 horas diarias. Empezar antes alivia la carga.',
          },
        },
      },
      {
        calc: {
          question: 'El plan de Carla tiene **240 horas** y un área pesa **40 %** del examen. ¿Cuántas horas le tocan?',
          answer: 96, unit: 'horas',
          hint: '40 % = 0.40; multiplica 240 × 0.40.',
          why: '240 × 0.40 = **96 horas**. Si además sacó bajo puntaje en esa área, conviene darle un poco más.',
        },
      },
      {
        ask: '¿Cómo reparte Carla sus horas entre las áreas?',
        options: [
          { text: 'Según el peso de cada área en el temario', ok: true, reply: '¡Bien! Más horas a lo que más pesa, y un extra donde saca bajo puntaje.' },
          { text: 'Igual para todas', reply: 'Error común: si un área pesa 40 % y otra 20 %, no merecen las mismas horas. Reparte **según el peso**.' },
          { text: 'Más horas a lo que ya domina', reply: 'Al revés: más horas a lo de **mucho peso y bajo puntaje**.' },
        ],
      },
      { tip: 'El temario es tu mapa: **lee la versión oficial vigente** antes de empezar.' },
    ],
    // El día del examen
    [
      { text: 'Llegó el día ⏰. El tiempo también se administra: antes de empezar, Carla calcula su **ritmo** = (minutos − margen para revisar) ÷ preguntas.' },
      {
        calc: {
          question: 'El examen dura **240 minutos**, Carla deja **30** para revisar y tiene **70 preguntas**. ¿Cuántos minutos por pregunta?',
          answer: 3, unit: 'minutos',
          hint: 'Resta el margen y divide entre las preguntas.',
          why: '(240 − 30) ÷ 70 = **3 minutos** por pregunta.',
        },
      },
      { text: 'Trucos para el examen:\n🏃 Si una pregunta te atora, márcala y sigue.\n📖 En casos prácticos, lee **primero la pregunta** y luego los datos.\n📏 Revisa las unidades: pesos, %, años.\n❌ En opción múltiple, descarta primero lo claramente falso.' },
      {
        rush: {
          title: '¿Buena o mala idea el día del examen?',
          seconds: 30,
          labels: ['Buena idea', 'Mala idea'],
          items: [
            { text: 'Marcar la pregunta que te atora y seguir', ans: 0 },
            { text: 'Quedarte 20 minutos en una sola pregunta', ans: 1 },
            { text: 'En un caso práctico, leer primero la pregunta', ans: 0 },
            { text: 'Ignorar las unidades (pesos, %, años)', ans: 1 },
            { text: 'Descartar primero las opciones claramente falsas', ans: 0 },
            { text: 'Empezar sin calcular tu ritmo', ans: 1 },
          ],
        },
      },
      { text: 'Recta final: ¿qué repasar? Mira **cuántos puntos pierdes** en cada área: **peso × (100 % − tus aciertos)**.' },
      {
        ask: 'Área A pesa **30 %** y Carla acierta **50 %**. Área B pesa **25 %** y acierta **60 %**. ¿Cuál prioriza?',
        options: [
          { text: 'Área A: pierde 15 puntos', ok: true, reply: '¡Bien! A: 30 × 0.50 = **15**. B: 25 × 0.40 = **10**. A le quita más.' },
          { text: 'Área B: pierde 10 puntos', reply: 'B le quita 25 × 0.40 = 10, pero A le quita 30 × 0.50 = **15**. Prioriza A.' },
          { text: 'Da igual, pesan casi lo mismo', reply: 'No da igual: A le quita **15** puntos y B solo **10**.' },
        ],
      },
      { tip: 'Repasa primero donde **más puntos se te escapan**, no donde te sientes más cómodo.' },
    ],
  ],
}
