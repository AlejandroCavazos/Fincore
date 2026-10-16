import type { InteractiveLesson } from './types'

export const intCON15: InteractiveLesson = {
  lessonId: 'CON-15',
  sections: [
    // Mapa de certificaciones
    [
      { text: 'Tu título dice que estudiaste. Una **certificación** dice que además aprobaste un examen exigente y te mantienes al día 🎓.' },
      {
        match: {
          title: 'Une cada certificación con su enfoque',
          pairs: [
            ['CPC (IMCP, México)', 'Contaduría pública; se obtiene con el Examen Uniforme de Certificación'],
            ['CPA', 'Licencia de contador público de Estados Unidos'],
            ['ACCA', 'Certificación contable internacional de origen británico'],
            ['CMA', 'Contabilidad administrativa y costos'],
            ['CIA', 'Auditoría interna'],
          ],
        },
      },
      {
        ask: 'Carla quiere trabajar en el área de **costos** de una armadora de autos 🚗. ¿Cuál le encaja mejor?',
        options: [
          { text: 'CMA', ok: true, reply: '¡Sí! El CMA es de contabilidad administrativa y **gestión de costos**.' },
          { text: 'CIA', reply: 'El CIA es de **auditoría interna**. Para costos encaja mejor el **CMA**.' },
          { text: 'Ninguna, el título basta', reply: 'El título ayuda, pero una certificación como el **CMA** muestra que dominas costos.' },
        ],
      },
      { tip: 'La certificación **no es para siempre**: cada año hay que acreditar horas de **educación profesional continua** para conservarla.' },
    ],
    // Plan de estudio basado en el temario
    [
      { text: 'Diego va a presentar un examen 📚. No empieza leyendo al azar: sigue un plan.' },
      {
        order: {
          title: 'Ordena el plan de Diego',
          steps: [
            'Leer el temario oficial vigente con sus áreas y pesos',
            'Hacer un diagnóstico: un examen de práctica',
            'Repartir horas: más a las áreas de mucho peso y bajo puntaje',
            'Estudiar en bloques cortos, practicar preguntas tipo examen y repasar días después',
          ],
          done: 'Temario → diagnóstico → repartir horas → estudiar, practicar y repasar.',
        },
      },
      { text: 'Ahora arma tu calendario. **Horas por semana = horas totales ÷ semanas disponibles.**' },
      {
        sim: {
          title: 'Tu plan semanal',
          inputs: [
            { key: 'h', label: 'Horas totales que necesitas', min: 160, max: 320, step: 20, value: 240 },
            { key: 's', label: 'Semanas para el examen', min: 8, max: 24, step: 1, value: 10 },
          ],
          outputs: [{ label: 'Horas por semana', calc: (x) => Math.round((x.h / x.s) * 10) / 10, main: true }],
          goal: {
            text: 'Diego trabaja y solo puede estudiar **15 horas por semana o menos**. Ajusta el plan.',
            check: (x) => x.h / x.s <= 15,
            done: 'Con 240 horas y 16 semanas son 15 por semana, unas 2 horas diarias. Empezar antes alivia la carga.',
          },
        },
      },
      {
        calc: {
          question: 'Tu plan tiene **240 horas** y un área pesa **40 %** del examen. ¿Cuántas horas le tocan?',
          answer: 96, unit: 'horas',
          hint: '40 % = 0.40; multiplica.',
          why: '240 × 0.40 = **96 horas**. Si además sacaste bajo puntaje en esa área, conviene darle un poco más.',
        },
      },
      { tip: 'El temario es tu mapa: **lee la versión oficial vigente** antes de empezar.' },
    ],
    // Estrategia para el día del examen
    [
      { text: 'El tiempo también se administra ⏰. Calcula tu **ritmo** antes de empezar.' },
      {
        calc: {
          question: 'El examen dura **240 minutos**, dejas **30** para revisar y tiene **70 preguntas**. ¿Cuántos minutos por pregunta?',
          answer: 3, unit: 'minutos',
          hint: 'resta el margen y divide entre las preguntas.',
          why: '(240 − 30) ÷ 70 = **3 minutos** por pregunta.',
        },
      },
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
      { text: 'Recta final: ¿qué repasas? Mira **cuántos puntos pierdes**: peso × (100 % − aciertos).' },
      {
        ask: 'Área A pesa **30 %** y aciertas **50 %**. Área B pesa **25 %** y aciertas **60 %**. ¿Cuál priorizas?',
        options: [
          { text: 'Área A: pierdes 15 puntos', ok: true, reply: '¡Bien! A: 30 × 0.50 = **15**. B: 25 × 0.40 = **10**. A te quita más.' },
          { text: 'Área B: pierdes 10 puntos', reply: 'B te quita 25 × 0.40 = 10, pero A te quita 30 × 0.50 = **15**. Prioriza A.' },
          { text: 'Da igual, pesan casi lo mismo', reply: 'No da igual: A te quita **15** puntos y B solo **10**.' },
        ],
      },
      { tip: 'Repasa primero donde **más puntos se te escapan**, no donde te sientes más cómodo.' },
    ],
  ],
}
