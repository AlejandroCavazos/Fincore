import type { InteractiveLesson } from './types'

export const intAUD05: InteractiveLesson = {
  lessonId: 'AUD-05',
  sections: [
    // ¿Qué es el control interno?
    [
      { text: 'El **control interno** no es un manual en un cajón: es lo que **toda la gente** hace a diario para que la empresa opere bien, tenga información confiable y cumpla leyes.' },
      { text: 'Primero piensas en el **riesgo** (lo que podría salir mal) y luego en el **control** (la acción que lo reduce). Ejemplo: una cafetería ☕.' },
      {
        sort: {
          title: '¿Riesgo o control?',
          buckets: ['Riesgo', 'Control'],
          items: [
            { text: 'Que el cajero se quede con efectivo', bucket: 0, why: 'Es algo que podría salir mal.' },
            { text: 'Registrar cada venta en la caja', bucket: 1, why: 'Es una acción que reduce el riesgo.' },
            { text: 'Que otra persona cuente el efectivo al cierre contra el reporte', bucket: 1, why: 'Acción concreta: control.' },
            { text: 'Que se pierda café del almacén', bucket: 0, why: 'Algo que podría pasar: riesgo.' },
            { text: 'Guardar el café con llave', bucket: 1, why: 'Resguardo físico: control.' },
          ],
        },
      },
      {
        multi: {
          title: '¿Por qué el control interno no da seguridad absoluta? Marca todas.',
          items: [
            { text: 'Las personas se equivocan o se cansan', ok: true },
            { text: 'Dos empleados se ponen de acuerdo para saltarse un control (colusión)', ok: true },
            { text: 'Un directivo lo ignora (elusión por la dirección)', ok: true },
            { text: 'Algunos controles cuestan más de lo que protegen', ok: true },
            { text: 'Porque solo lo aplica el área de contabilidad', ok: false },
          ],
          why: 'Por esas limitaciones da **seguridad razonable**. Y lo hacen personas de todos los niveles, no solo contabilidad.',
        },
      },
      { tip: 'Un control no debe costar más que el beneficio que da.' },
    ],
    // Tipos de controles y controles clave
    [
      { text: 'Según **cuándo** actúa, un control es preventivo (antes), detectivo (después) o correctivo (repara).' },
      {
        sort: {
          title: '¿Qué tipo de control es?',
          buckets: ['Preventivo', 'Detectivo', 'Correctivo'],
          items: [
            { text: 'Pedir dos firmas para un pago grande', bucket: 0, why: 'Evita el error antes de que pase.' },
            { text: 'Conciliación bancaria mensual', bucket: 1, why: 'Descubre el error después.' },
            { text: 'Restaurar datos desde un respaldo', bucket: 2, why: 'Repara el daño.' },
            { text: 'El sistema bloquea una factura duplicada', bucket: 0, why: 'Impide el error antes de registrarse.' },
            { text: 'Conteo físico periódico del almacén', bucket: 1, why: 'Encuentra faltantes después de que ocurrieron.' },
          ],
        },
      },
      {
        rush: {
          title: '¿Manual o automático?',
          seconds: 35,
          labels: ['Manual', 'Automático'],
          items: [
            { text: 'El gerente firma la orden de compra', ans: 0 },
            { text: 'El sistema no deja capturar una factura duplicada', ans: 1 },
            { text: 'La encargada cuenta la caja al cierre', ans: 0 },
            { text: 'El sistema numera solo las notas de venta', ans: 1 },
            { text: 'El almacenista revisa la nota pagada antes de entregar', ans: 0 },
          ],
        },
      },
      { text: 'El control más importante en una pyme: **segregación de funciones**. Separar **autorizar**, **registrar** y **custodiar**.' },
      {
        ask: 'En una tienda de materiales 🧱, Don Pepe autoriza descuentos, **cobra** y **entrega** la mercancía. ¿Cuál es el problema?',
        options: [
          { text: 'Ninguno, así atienden más rápido', reply: 'Rápido sí, pero podría regalar material a un conocido sin que nadie lo note.' },
          { text: 'Una sola persona autoriza, registra y custodia: puede cometer y esconder un robo', ok: true, reply: '¡Eso! Lo sano: vendedor autoriza, cajero cobra y registra, almacenista entrega.' },
          { text: 'Que no usa documentos prenumerados', reply: 'Ayudaría, pero el problema de fondo es que **una persona hace las tres funciones**.' },
        ],
      },
      { tip: 'Otros controles clave: autorizaciones con límites, conciliaciones, resguardo físico, documentos prenumerados y conteos físicos.' },
    ],
    // Diseño, operación y deficiencias
    [
      { text: 'Un control se evalúa en dos pasos: **diseño** (¿si funcionara, reduciría el riesgo?) y **operación** (¿de verdad se aplica siempre?).' },
      {
        order: {
          title: 'Ordena cómo se prueba que un control opera',
          steps: [
            'Fijar de antemano la tasa tolerable',
            'Revisar una muestra de casos',
            'Contar las desviaciones (veces que el control no se aplicó)',
            'Calcular la tasa de desviación',
            'Comparar con la tasa tolerable y concluir',
          ],
          done: 'Si la tasa de desviación rebasa la tolerable, el control **no es confiable**.',
        },
      },
      {
        calc: {
          question: 'De **75** órdenes de compra revisadas, **6** no tienen la firma del gerente. ¿Cuál es la **tasa de desviación**?',
          answer: 8,
          unit: '%',
          hint: 'desviaciones ÷ todos los casos revisados × 100.',
          why: '6 ÷ 75 = 0.08 → **8 %**. Divide entre **todos** los revisados, no solo los correctos.',
        },
      },
      {
        ask: 'La tasa tolerable era **5 %** y salió **8 %**. ¿Qué concluye el auditor?',
        options: [
          { text: 'El control es confiable', reply: '8 % rebasa el 5 % tolerable: **no** es confiable.' },
          { text: 'El control no es confiable y hace más pruebas sustantivas', ok: true, reply: '¡Correcto! No se apoya en el control y busca errores directo en las cifras.' },
          { text: 'Repite la muestra hasta que salga menos de 5 %', reply: 'No: eso sería maquillar el resultado.' },
        ],
      },
      {
        ask: 'Un manual dice que el gerente firma cada pago, pero en la práctica casi nunca lo hace. ¿Qué hay?',
        options: [
          { text: 'Un control bien diseñado que no opera: deficiencia de control', ok: true, reply: '¡Bien! Puede verse perfecto en el papel y no aplicarse. Eso es una **deficiencia**.' },
          { text: 'Nada: el control existe en el manual', reply: 'No basta con estar escrito; tiene que **aplicarse**.' },
          { text: 'Un control mal diseñado', reply: 'El diseño está bien; lo que falla es la **operación**.' },
        ],
      },
      { tip: 'Las **deficiencias significativas** se comunican por escrito al gobierno de la entidad.' },
    ],
  ],
}
