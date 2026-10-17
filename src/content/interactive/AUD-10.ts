import type { InteractiveLesson } from './types'

export const intAUD10: InteractiveLesson = {
  lessonId: 'AUD-10',
  sections: [
    // ¿Un solo sistema para todo?
    [
      { text: 'En Ferretería El Tornillo 🔩, el almacén anotaba lo que llegaba en su hoja, y contabilidad lo volvía a capturar en la suya.' },
      {
        ask: '¿Qué le ayudaría a El Tornillo?',
        options: [
          { text: 'Un sistema donde el dato se captura una vez y todos lo ven', ok: true, reply: '¡Eso es un **ERP**! Lo que registra el almacén lo ve al instante contabilidad.' },
          { text: 'Contratar a otra persona para capturar', reply: 'Seguiría capturando dos veces. Lo que ayuda es un sistema donde el dato se captura **una vez** y todos lo ven: un **ERP**.' },
          { text: 'Que cada área tenga más hojas', reply: 'Más hojas, más doble captura. Lo que ayuda es **un solo sistema** para todos: un **ERP**.' },
        ],
      },
      { text: 'Un **ERP** junta en **una sola base de datos** compras, almacén, ventas, cobranza, nómina y contabilidad. Las operaciones fluyen por **ciclos** completos y muchos asientos salen **automáticos**.' },
      {
        order: {
          title: 'Ordena el ciclo compra-pago',
          steps: ['Pedido (orden de compra)', 'Recepción en almacén', 'Factura del proveedor', 'Pago'],
          done: 'El de **venta-cobro** es igual de lógico: pedido, entrega, factura, cobro.',
        },
      },
      {
        ask: '¿Cuál es la gran **ventaja** del ERP para el auditor?',
        options: [
          { text: 'Puede analizar el 100% de las transacciones, no solo una muestra', ok: true, reply: '¡Eso! Como todo está en una base de datos, puede revisarlo todo.' },
          { text: 'Ya no tiene que entender el sistema', reply: 'Al contrario: hay que entender **cómo está configurado**. La ventaja es que puede analizar el **100%** de las operaciones.' },
          { text: 'Los errores ya no existen', reply: 'Existen. La ventaja es que puede analizar el **100%** de las operaciones.' },
        ],
      },
      {
        ask: 'Alguien configuró mal el **descuento máximo** en el ERP de El Tornillo. ¿Qué puede pasar?',
        options: [
          { text: 'Todas las ventas del año podrían salir con descuentos indebidos', ok: true, reply: '¡Correcto! Ese es el gran riesgo: un error de configuración se repite en miles de operaciones.' },
          { text: 'Solo una venta sale mal', reply: 'El sistema aplica la misma regla a todas: el error se **repite** en todas las ventas.' },
          { text: 'Nada, el ERP corrige solo sus errores', reply: 'El ERP hace lo que le configuran. Si la regla está mal, el error se **repite** en todas las ventas.' },
        ],
      },
      { tip: 'Con un ERP ya no basta revisar pólizas: hay que revisar **cómo está configurado** el sistema.' },
    ],
    // ¿Qué reglas revisan cada operación?
    [
      { text: 'Los **controles de aplicación** son reglas dentro del ERP que revisan cada operación. El más famoso es el **cotejo de tres vías**: la **orden de compra**, la **recepción** y la **factura** deben coincidir para liberar el pago.' },
      {
        calc: {
          question: 'El Tornillo pide **300 brochas a $25**. Al almacén llegan **280**. El proveedor factura **$7,500**. ¿Cuánto puede liberar el ERP?',
          answer: 7000,
          hint: 'Lo que **llegó** × el precio de la orden.',
          why: '280 × $25 = **$7,000**. Los otros $500 no coinciden con lo recibido: sin la recepción se pagaría mercancía que nunca llegó.',
        },
      },
      {
        calc: {
          question: 'Orden: **50 escaleras a $400**. El ERP acepta facturas hasta **2%** arriba de la orden. ¿Cuál es la factura **más alta** que acepta sin bloquear?',
          answer: 20400,
          hint: 'Valor de la orden + 2% de ese valor.',
          why: '50 × $400 = $20,000. 0.02 × $20,000 = $400. $20,000 + $400 = **$20,400**. Sacar el 2% solo del precio unitario es el error típico.',
        },
      },
      { text: 'Un control **automático** bien configurado, que nadie puede cambiar sin autorización, funciona igual siempre. Eso lo aseguran los **controles generales de TI**.' },
      {
        ask: 'El auditor prueba el bloqueo con una factura dentro y otra fuera de la tolerancia, y funciona. Los controles de TI fueron buenos todo el año. ¿Necesita revisar 500 facturas más?',
        options: [
          { text: 'No: basta con pocas operaciones por cada caso', ok: true, reply: '¡Bien! Si nadie pudo cambiar la regla, el sistema hizo lo mismo todo el año.' },
          { text: 'Sí, siempre hace falta una muestra grande', reply: 'Para un control automático protegido, basta con **pocas operaciones** por cada caso: el sistema hace siempre lo mismo.' },
          { text: 'Sí, aunque los controles de TI hayan fallado da igual', reply: 'Al revés: la condición es que los controles de TI **funcionen**. Si funcionan, bastan **pocas operaciones**.' },
        ],
      },
      { text: 'Los **datos maestros** son la información fija que usan todas las operaciones: proveedores, clientes, empleados, precios. Si alguien cambia la cuenta bancaria de un proveedor por la suya, **todos** los pagos se desvían.' },
      {
        multi: {
          title: 'Revisas el catálogo de proveedores de El Tornillo. ¿Qué es señal de alerta? Marca todas.',
          items: [
            { text: 'Un proveedor con la misma cuenta bancaria que un empleado', ok: true },
            { text: 'Dos proveedores dados de alta con el mismo RFC', ok: true },
            { text: 'Un proveedor sin RFC ni domicilio que recibió pagos', ok: true },
            { text: 'Un proveedor con años de relación, contrato vigente y facturas consistentes', ok: false },
            { text: 'Un proveedor dado de alta con solicitud y aprobación completas', ok: false },
          ],
          why: 'Cuenta compartida con un empleado sugiere un proveedor falso; RFC repetido permite pagar dos veces; sin datos básicos no se puede verificar. Los otros dos tienen todo en orden.',
        },
      },
    ],
    // ¿Quién puede hacer qué?
    [
      { text: 'En el ERP de El Tornillo, Pedro puede **dar de alta proveedores** y también **emitir pagos**.' },
      {
        ask: '¿Qué podría hacer Pedro con esos dos permisos?',
        options: [
          { text: 'Crear un proveedor falso y pagarle', ok: true, reply: '¡Exacto! Podría cometer un fraude y ocultarlo él solo.' },
          { text: 'Nada malo, así trabaja más rápido', reply: 'Con los dos permisos podría **crear un proveedor falso y pagarle**, sin que nadie lo note.' },
          { text: 'Solo equivocarse en un RFC', reply: 'Lo grave es que podría **crear un proveedor falso y pagarle**.' },
        ],
      },
      { text: '**Segregación de funciones:** una sola persona no debe controlar todos los pasos de una operación sensible. El auditor usa una **matriz de conflictos**: la lista de permisos que no deben ir juntos.' },
      {
        sort: {
          title: '¿Conflicto o combinación aceptable?',
          buckets: ['Conflicto', 'Aceptable'],
          items: [
            { text: 'Crear órdenes de compra y aprobar esas mismas órdenes', bucket: 0, why: 'Compraría sin que nadie lo revise.' },
            { text: 'Modificar sueldos y pagar la nómina', bucket: 0, why: 'Podría subirse el sueldo y pagárselo.' },
            { text: 'Consultar reportes de ventas y consultar existencias', bucket: 1, why: 'Solo consulta: no puede cometer ni ocultar nada.' },
            { text: 'Capturar pedidos de venta y consultar existencias', bucket: 1, why: 'Consultar junto a una función no permite ocultar un fraude.' },
            { text: 'Dar de alta proveedores y emitir pagos', bucket: 0, why: 'El caso de Pedro: proveedor falso.' },
          ],
        },
      },
      { text: 'Grupo El Tornillo tiene **300** usuarios y **15** con conflicto (5%). Los conflictos se **eliminan** quitando permisos; los que quedan necesitan un **control compensatorio**.' },
      {
        sim: {
          title: 'Limpia los conflictos',
          inputs: [{ key: 'q', label: 'Usuarios a los que les quitas permisos', min: 0, max: 15, step: 1, value: 0 }],
          outputs: [
            { label: 'Usuarios que siguen con conflicto', calc: (x) => 15 - x.q },
            { label: '% usuarios con conflicto', calc: (x) => ((15 - x.q) / 300) * 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Baja el porcentaje a **1% o menos**.',
            check: (x) => ((15 - x.q) / 300) * 100 <= 1,
            done: 'Se divide siempre entre **todos los usuarios activos**. Los que queden necesitan un control compensatorio documentado.',
          },
        },
      },
      {
        ask: 'Una sucursal tiene solo **dos empleados** y no se pueden separar todas las funciones. ¿Qué se hace?',
        options: [
          { text: 'Un control compensatorio, como una revisión mensual independiente', ok: true, reply: '¡Exacto! Si no se puede eliminar, se **mitiga**.' },
          { text: 'Se ignora el conflicto', reply: 'El riesgo sigue ahí. Si no se puede eliminar, se **mitiga** con un control compensatorio.' },
          { text: 'Se les da acceso total a los dos', reply: 'Eso empeora el problema. Se **mitiga** con un control compensatorio.' },
        ],
      },
      { tip: 'Ojo también con los **usuarios genéricos** («almacen1», no se sabe quién hizo qué) y los **superusuarios**: pocos, temporales y vigilados.' },
    ],
  ],
}
