import type { InteractiveLesson } from './types'

export const intAUD12: InteractiveLesson = {
  lessonId: 'AUD-12',
  sections: [
    // ¿Qué hace un auditor forense?
    [
      { text: 'A Constructora Peña 🏗️ le llega una denuncia: el jefe de compras le estaría pagando de más a un proveedor que **vive en su misma casa**.' },
      {
        ask: '¿Qué debe hacer primero la empresa?',
        options: [
          { text: 'Ver si hay una base razonable para sospechar e investigar', ok: true, reply: '¡Bien! Esa base se llama **predicación**: una denuncia, una alerta o una diferencia sin explicar.' },
          { text: 'Despedirlo de inmediato', reply: 'Primero hay que **aclarar los hechos**. Se revisa si hay base razonable para sospechar y se investiga.' },
          { text: 'Esperar la auditoría de fin de año', reply: 'Esa auditoría busca errores importantes con muestras, no este caso. Aquí se investiga el **asunto concreto**.' },
        ],
      },
      { text: '**Forense** viene de «foro», donde se hacían los juicios ⚖️. La **auditoría forense** aclara hechos que pueden llegar a un proceso legal. No empieza por rutina: empieza por una **predicación**.' },
      { text: 'Sus pasos:\n🗺️ **Planear:** alcance e hipótesis.\n🗃️ **Reunir y cuidar** la evidencia.\n🔎 **Analizar** y entrevistar: seguir el dinero.\n📄 **Reportar** hechos.' },
      {
        order: {
          title: 'Ordena la investigación en Constructora Peña',
          steps: [
            'Evaluar la denuncia y definir qué se va a probar',
            'Reunir y resguardar facturas, correos y contratos',
            'Cruzar pagos y entrevistar, dejando al sospechoso al final',
            'Escribir el informe con los hechos',
          ],
          done: 'En las entrevistas se va, por lo general, de lo general a lo particular.',
        },
      },
      { text: 'El auditor forense **reporta hechos**; **no declara culpable** a nadie. Eso lo decide un **juez**.' },
      {
        sort: {
          title: '¿Puede ir en el informe?',
          buckets: ['Sí, es un hecho', 'No, es declarar culpa'],
          items: [
            { text: '«Se identificaron 14 pagos por $820,000 a un proveedor»', bucket: 0, why: 'Es un dato documentado.' },
            { text: '«El jefe de compras robó»', bucket: 1, why: 'Declarar culpable le toca a un **juez**, no al auditor.' },
            { text: '«El domicilio del proveedor coincide con el del jefe de compras»', bucket: 0, why: 'Es un hecho que se puede comprobar.' },
            { text: '«Es obvio que el gerente es un ladrón»', bucket: 1, why: 'Es una acusación, no un hecho.' },
          ],
        },
      },
    ],
    // ¿Cómo cuidar una prueba?
    [
      { text: 'El equipo recoge la laptop del jefe de compras y los contratos del proveedor. En un juicio, la otra parte dirá: «¡Esa prueba la cambiaron!»' },
      {
        ask: '¿Cómo demuestras que nadie la cambió?',
        options: [
          { text: 'Con un registro de quién la tuvo, cuándo y cómo se guardó', ok: true, reply: '¡Eso es la **cadena de custodia**!' },
          { text: 'Con la palabra del auditor', reply: 'La palabra no basta. Se necesita un **registro** de quién tuvo la prueba, cuándo y cómo se guardó.' },
          { text: 'Con una foto del jefe de compras', reply: 'La foto no dice nada de la prueba. Se necesita un **registro** de quién la tuvo, cuándo y cómo se guardó.' },
        ],
      },
      { text: 'La **cadena de custodia** demuestra que la prueba es **la misma** que se obtuvo y que **nadie la alteró**. Si tiene huecos, la prueba puede perder valor.' },
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
          why: 'Registra el camino de la prueba. La culpa no va ahí: la decide un juez.',
        },
      },
      { text: 'Con evidencia **digital** no se toca el original: se hace una **copia forense** (exacta, bit por bit) y se calcula su **hash**, una huella digital matemática del archivo.' },
      {
        ask: 'Después de la copia forense, alguien cambia **un solo carácter** de un archivo. ¿Qué pasa?',
        options: [
          { text: 'El hash cambia y se nota', ok: true, reply: '¡Exacto! Por eso se trabaja sobre la copia y se calcula su hash.' },
          { text: 'Nada: un carácter no se nota', reply: 'Sí se nota: con un solo carácter distinto, el **hash cambia**.' },
          { text: 'La copia se borra sola', reply: 'No se borra; el **hash** ya no coincide y se nota el cambio.' },
        ],
      },
      {
        ask: 'Antes de revisar la laptop del jefe de compras, ¿qué confirma el equipo?',
        options: [
          { text: 'Con el área legal: que la laptop es de la empresa y la política lo permite', ok: true, reply: '¡Bien! Una prueba obtenida de forma ilícita puede ser descartada.' },
          { text: 'Nada, la prueba vale igual', reply: 'Importa **cómo** se obtiene: respetando la ley, la privacidad y las políticas. Si no, puede ser descartada.' },
          { text: 'Solo que el jefe no esté en la oficina', reply: 'Lo que importa es que sea **legal**: que la laptop sea de la empresa y la política lo permita.' },
        ],
      },
    ],
    // ¿Cómo se rastrea el dinero?
    [
      { text: 'El equipo revisa **todos** los pagos de Constructora Peña buscando patrones raros: pagos duplicados, proveedores con el domicilio o la cuenta de un empleado, montos **justo por debajo** del límite de autorización. Una alerta no prueba fraude: dice **dónde buscar** 🔎.' },
      {
        sort: {
          title: '¿Bandera roja o normal?',
          buckets: ['Bandera roja', 'Normal'],
          items: [
            { text: 'La misma factura (proveedor, folio y monto) pagada dos veces', bucket: 0, why: 'Pago duplicado: hay que revisarlo.' },
            { text: 'Muchos pagos de $49,900 cuando el director autoriza desde $50,000', bucket: 0, why: 'Parecen hechos para esquivar la autorización.' },
            { text: 'La renta mensual, siempre igual a lo que dice el contrato', bucket: 1, why: 'Una renta fija se repite por naturaleza.' },
            { text: 'Un pago aprobado conforme a la política y con soporte completo', bucket: 1, why: 'Todo en orden.' },
          ],
        },
      },
      {
        spot: {
          title: 'Encuentra el pago sospechoso',
          story: 'Pagos a proveedores de Constructora Peña. Al cruzar datos, uno tiene **la misma cuenta bancaria que un empleado**:',
          lines: [
            { account: 'Proveedores · Cementos del Valle', side: 'D', amount: 18500 },
            { account: 'Proveedores · Servicios JR (cuenta = empleado de compras)', side: 'D', amount: 46000 },
            { account: 'Proveedores · Gas del Norte', side: 'D', amount: 9500 },
            { account: 'Bancos', side: 'C', amount: 74000 },
          ],
          wrong: 1,
          why: 'Un proveedor que comparte cuenta bancaria con un empleado es una señal de alerta. No prueba el fraude, pero hay que investigarlo.',
        },
      },
      { text: '**Ley de Benford:** en muchas cifras reales (facturas, pagos), el primer dígito **1** aparece cerca del **30.1%** de las veces y el 9 solo cerca del 4.6%. Quien inventa cifras las reparte «parejo».' },
      {
        calc: {
          question: 'Se analizan **3,000** facturas. ¿Cuántas esperas que empiecen con **1**?',
          answer: 903,
          unit: 'facturas',
          hint: '3,000 × 0.301.',
          why: '3,000 × 0.301 = **903**. Suponer que todos los dígitos salen igual (3,000 ÷ 9 ≈ 333) es el error típico. Una desviación es señal, no prueba.',
        },
      },
      { text: '**Método de patrimonio:** si lo que la persona tiene creció más (sumando lo que gastó) que lo que gana, la diferencia queda **sin explicar**.' },
      {
        calc: {
          question: 'El jefe de compras: patrimonio inicial **$600,000**, final **$950,000**, gastos del año **$150,000** e ingresos conocidos **$300,000**. ¿Cuánto queda **sin explicar**?',
          answer: 200000,
          hint: '(final − inicial) + gastos − ingresos conocidos.',
          why: '($950,000 − $600,000) + $150,000 − $300,000 = **$200,000**. Olvidar sumar los gastos de vida es el error típico: también se pagaron con algún ingreso.',
        },
      },
    ],
  ],
}
