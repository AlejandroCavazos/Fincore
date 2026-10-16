import type { InteractiveLesson } from './types'

export const intAUD12: InteractiveLesson = {
  lessonId: 'AUD-12',
  sections: [
    // ¿Qué es la auditoría forense?
    [
      { text: '**Forense** viene de «foro», donde se hacían los juicios ⚖️. La auditoría forense **aclara hechos** que pueden terminar en un proceso legal: un desfalco, un soborno, un pleito entre socios.' },
      {
        ask: 'A diferencia de una auditoría de estados financieros, ¿cómo **empieza** una auditoría forense?',
        options: [
          { text: 'Por rutina, cada año, igual que la auditoría normal', reply: 'No: la forense no empieza por rutina.' },
          { text: 'Con una predicación: una base razonable para sospechar', ok: true, reply: '¡Bien! Por ejemplo, una denuncia, una alerta del sistema o una diferencia que no se explica.' },
          { text: 'Cuando un juez ya declaró culpable a alguien', reply: 'Al revés: la forense reúne hechos **antes**; el juez decide después.' },
        ],
      },
      {
        order: {
          title: 'Ordena los pasos de una investigación forense',
          steps: [
            'Planear: evaluar la predicación, definir alcance e hipótesis',
            'Reunir y preservar la evidencia',
            'Analizar: reconstruir los hechos y seguir el dinero',
            'Entrevistar, dejando al sospechoso al final',
            'Reportar hechos, sin opinar sobre culpabilidad',
          ],
          done: 'En las entrevistas se va, por lo general, de lo general a lo particular.',
        },
      },
      {
        sort: {
          title: '¿Puede ir en un informe forense?',
          buckets: ['Sí, es un hecho', 'No, es opinar sobre culpa'],
          items: [
            { text: '«Se identificaron 14 pagos por $820,000 a un proveedor»', bucket: 0, why: 'Es un dato documentado.' },
            { text: '«El jefe de compras robó»', bucket: 1, why: 'Declarar culpable le corresponde a un **juez**, no al auditor.' },
            { text: '«El domicilio del proveedor coincide con el del jefe de compras»', bucket: 0, why: 'Es un hecho que se puede comprobar.' },
            { text: '«Es obvio que el gerente es un ladrón»', bucket: 1, why: 'Es una acusación, no un hecho.' },
          ],
        },
      },
      { tip: 'El auditor forense **reporta hechos**; no declara culpable a nadie.' },
    ],
    // Cadena de custodia y evidencia digital
    [
      { text: 'La **cadena de custodia** es la «bitácora» de una prueba: demuestra que es **la misma** que se obtuvo y que **nadie la alteró**.' },
      {
        multi: {
          title: '¿Qué anota la cadena de custodia? Marca todas.',
          items: [
            { text: 'Quién recogió la prueba', ok: true },
            { text: 'Cuándo y dónde la recogió', ok: true },
            { text: 'Quién la ha tenido después', ok: true },
            { text: 'En qué condiciones se guardó', ok: true },
            { text: 'Quién es culpable', ok: false },
          ],
          why: 'Si hay huecos en ese registro, la otra parte puede alegar que la prueba fue manipulada y pierde valor.',
        },
      },
      {
        match: {
          title: 'Une cada término con su significado',
          pairs: [
            ['Copia forense', 'Imagen exacta, bit por bit, del original'],
            ['Hash', 'Huella digital matemática de un archivo'],
            ['Cadena de custodia', 'Registro de quién tuvo la prueba y cómo se guardó'],
            ['Predicación', 'Base razonable para sospechar'],
          ],
        },
      },
      {
        ask: 'Después de hacer la copia forense de una laptop, alguien cambia **un solo carácter** de un archivo. ¿Qué pasa?',
        options: [
          { text: 'Nada: un carácter no se nota', reply: 'Sí se nota: para eso sirve el hash.' },
          { text: 'El hash cambia y se descubre que hubo un cambio', ok: true, reply: '¡Exacto! Por eso se trabaja sobre la copia y se calcula su hash.' },
          { text: 'La copia se borra sola', reply: 'No se borra; simplemente el hash ya no coincide.' },
        ],
      },
      { tip: 'También importa **cómo** obtienes la prueba: respetando la ley, la privacidad y las políticas de la empresa. Si no, puede ser descartada.' },
    ],
    // Técnicas: datos, Benford y método de patrimonio
    [
      { text: 'El **análisis de datos** revisa toda la población buscando patrones raros. Una alerta no prueba fraude, pero dice **dónde buscar** 🔎.' },
      {
        spot: {
          title: 'Encuentra el pago sospechoso',
          story: 'Póliza de pagos a proveedores de Grupo Tacos Felices. Al cruzar datos, uno de los proveedores tiene **la misma cuenta bancaria que un empleado**:',
          lines: [
            { account: 'Proveedores · Papelería del Centro', side: 'D', amount: 18500 },
            { account: 'Proveedores · Servicios JR (cuenta = empleado de compras)', side: 'D', amount: 46000 },
            { account: 'Proveedores · Gas del Norte', side: 'D', amount: 9500 },
            { account: 'Bancos', side: 'C', amount: 74000 },
          ],
          wrong: 1,
          why: 'Un proveedor que comparte cuenta bancaria con un empleado es una señal de alerta. No prueba el fraude, pero hay que investigarlo.',
        },
      },
      {
        calc: {
          question: 'Se analizan **2,000** facturas. Según Benford, el **1** debería ser el primer dígito cerca del **30.1%** de las veces. ¿Cuántas facturas esperas que empiecen con 1?',
          answer: 602,
          unit: 'facturas',
          hint: 'total × 0.301.',
          why: '2,000 × 0.301 = **602** facturas. Si aparecen muchas menos o muchas más, conviene revisar. Una desviación es señal, no prueba.',
        },
      },
      { text: 'El **método de patrimonio**: si lo que la persona tiene creció más (sumando lo que gastó) que lo que gana, la diferencia queda **sin explicar**.' },
      {
        calc: {
          question: 'Patrimonio inicial **$600,000**, final **$950,000**, gastos del año **$150,000** e ingresos conocidos **$300,000**. ¿Cuánto ingreso queda **sin explicar**?',
          answer: 200000,
          hint: '(final − inicial) + gastos − ingresos conocidos.',
          why: '($950,000 − $600,000) + $150,000 − $300,000 = **$200,000**. Primero busca explicaciones legítimas (herencia, premio, venta de un bien).',
        },
      },
      { tip: 'Error común: **olvidar sumar los gastos de vida**. También se pagaron con algún ingreso.' },
    ],
  ],
}
