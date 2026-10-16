import type { InteractiveLesson } from './types'

export const intAUD06: InteractiveLesson = {
  lessonId: 'AUD-06',
  sections: [
    // ¿Qué es COSO y el cubo de control?
    [
      { text: '**COSO** es un comité de asociaciones profesionales de Estados Unidos que publicó el **Marco Integrado de Control Interno**. Es el más usado en el mundo, también en México. Su versión actualizada es de **2013**.' },
      { text: 'Control interno = las reglas y revisiones que una empresa pone para lograr lo que quiere sin sorpresas. COSO se dibuja como un **cubo** 🧊 con tres caras.' },
      {
        ask: '¿Qué hay en las tres caras del cubo COSO?',
        options: [
          { text: 'Activo, pasivo y capital', reply: 'Eso es la ecuación contable. El cubo habla de control interno.' },
          { text: 'Tres categorías de objetivos, cinco componentes y la estructura de la empresa', ok: true, reply: '¡Exacto! Objetivos en una cara, componentes en otra y entidad, división, unidad y función en la tercera.' },
          { text: 'Ventas, compras y nómina', reply: 'Esos son procesos. El cubo junta objetivos, componentes y niveles de la empresa.' },
        ],
      },
      { text: 'Las tres categorías de objetivos: **operativos** (usar bien los recursos), **de información** (reportes confiables) y **de cumplimiento** (seguir leyes). Clasifica las metas de un gimnasio 🏋️:' },
      {
        sort: {
          title: '¿Qué tipo de objetivo es?',
          buckets: ['Operativo', 'De información', 'De cumplimiento'],
          items: [
            { text: 'Cobrar todas las membresías', bucket: 0, why: 'Es usar bien los recursos y que no se escape dinero: operativo.' },
            { text: 'Reportar bien los ingresos del mes', bucket: 1, why: 'Se trata de que el reporte sea confiable: información.' },
            { text: 'Respetar la ley de protección de datos de los socios', bucket: 2, why: 'Es apegarse a una ley: cumplimiento.' },
            { text: 'Cuidar que no se roben las pesas y caminadoras', bucket: 0, why: 'Proteger activos entra en los objetivos operativos.' },
            { text: 'Que el reporte interno de asistencia llegue a tiempo y sin errores', bucket: 1, why: 'Los reportes pueden ser internos o no financieros y siguen siendo de información.' },
            { text: 'Cumplir las regulaciones que le aplican al local', bucket: 2, why: 'Apego a leyes y regulaciones: cumplimiento.' },
          ],
        },
      },
      { tip: 'El cubo dice que **los cinco componentes aplican a cada objetivo y a cada nivel** de la empresa.' },
    ],
    // Los cinco componentes
    [
      { text: 'COSO tiene **cinco componentes**. Míralos en un restaurante 🍽️ donde se robaban insumos.' },
      {
        match: {
          title: 'Une cada componente con lo que hizo el dueño',
          pairs: [
            ['Entorno de control', 'Despide a un gerente que maquillaba cortes de caja'],
            ['Evaluación de riesgos', 'Detecta que el robo de insumos es su mayor riesgo'],
            ['Actividades de control', 'Exige inventario diario de carnes'],
            ['Información y comunicación', 'El sistema manda un reporte de mermas cada noche'],
            ['Actividades de supervisión', 'Cada mes un contador externo revisa que el inventario diario sí se haga'],
          ],
        },
      },
      { text: 'Truco: **entorno** = tono desde arriba; **riesgos** = qué podría salir mal; **actividades** = qué hacemos para evitarlo; **información** = quién se entera; **supervisión** = ¿sigue funcionando?' },
      {
        sort: {
          title: 'Grupo Tacos Felices 🌮: ¿qué componente es?',
          buckets: ['Entorno de control', 'Evaluación de riesgos', 'Actividades de control', 'Información y comunicación', 'Supervisión'],
          items: [
            { text: 'El consejo aprueba un código de ética y lo cumple primero', bucket: 0, why: 'Integridad y valores desde arriba: entorno de control.' },
            { text: 'Analizan qué podría fallar al abrir una sucursal nueva', bucket: 1, why: 'Identificar lo que podría impedir el objetivo: evaluación de riesgos.' },
            { text: 'Los pagos grandes necesitan autorización del gerente', bucket: 2, why: 'Una autorización es una acción concreta que reduce un riesgo.' },
            { text: 'Hacen la conciliación bancaria cada mes', bucket: 2, why: 'Las conciliaciones son actividades de control.' },
            { text: 'Cada taquero recibe a tiempo la nueva política de descuentos', bucket: 3, why: 'La información correcta llega a la persona correcta a tiempo.' },
            { text: 'Cada trimestre revisan si los controles siguen funcionando y corrigen fallas', bucket: 4, why: 'Revisar que todo funcione y corregir deficiencias: supervisión.' },
          ],
        },
      },
      { tip: 'El **entorno de control** es la base: si la dirección no da el ejemplo, los demás componentes se caen.' },
    ],
    // 17 principios y control eficaz
    [
      { text: 'La versión 2013 baja los cinco componentes a **17 principios**, repartidos así: **5-4-3-3-2** (entorno, riesgos, actividades, información, supervisión).' },
      {
        calc: {
          question: '¿Cuántos principios suman **evaluación de riesgos** y **actividades de control** juntos?',
          answer: 7,
          unit: 'principios',
          hint: 'el reparto es 5-4-3-3-2, en el orden de los componentes.',
          why: 'Evaluación de riesgos tiene 4 y actividades de control 3: 4 + 3 = **7**.',
        },
      },
      {
        multi: {
          title: 'Según COSO, el control interno es eficaz cuando los componentes y principios… (marca todas)',
          items: [
            { text: 'Están presentes (existen en el diseño)', ok: true },
            { text: 'Funcionan (operan en la práctica)', ok: true },
            { text: 'Operan juntos, de forma integrada', ok: true },
            { text: 'Basta con que cuatro de cinco estén muy bien', ok: false },
            { text: 'Solo están escritos en un manual', ok: false },
          ],
          why: 'Presentes, funcionando y operando juntos. Si un componente tiene una **deficiencia grave**, el sistema no es eficaz aunque los demás estén bien.',
        },
      },
      {
        ask: 'Una empresa hace conciliaciones excelentes, pero su director ordena registrar **ventas falsas**. ¿Su control interno es eficaz?',
        options: [
          { text: 'Sí, porque las conciliaciones están muy bien', reply: 'Un componente con deficiencia grave basta para que no sea eficaz.' },
          { text: 'No: el entorno de control es deficiente', ok: true, reply: '¡Correcto! El tono desde arriba está roto, así que el sistema no puede considerarse eficaz.' },
          { text: 'Depende de cuántas ventas falsas sean', reply: 'El problema es la integridad de la dirección: eso es una deficiencia grave del entorno de control.' },
        ],
      },
      { tip: 'No confundas: **COSO ERM** es otro marco del mismo comité, sobre gestión de riesgos ligada a la estrategia. El de control interno se enfoca en lograr objetivos ya definidos.' },
    ],
  ],
}
