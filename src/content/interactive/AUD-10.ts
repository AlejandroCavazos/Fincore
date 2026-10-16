import type { InteractiveLesson } from './types'

export const intAUD10: InteractiveLesson = {
  lessonId: 'AUD-10',
  sections: [
    // ¿Qué es un ERP y por qué importa al auditor?
    [
      { text: 'Un **ERP** (planeación de recursos empresariales) junta en **una sola base de datos** compras, almacén, ventas, cobranza, nómina y contabilidad. Lo que captura el almacén lo ve al instante contabilidad, sin volver a capturarlo.' },
      { text: 'Las operaciones fluyen por **ciclos** completos. Arma el ciclo **compra-pago** de un taller 🔧:' },
      {
        order: {
          title: 'Ordena el ciclo compra-pago',
          steps: ['Pedido (orden de compra)', 'Recepción en almacén', 'Factura del proveedor', 'Pago'],
          done: 'Y el de **venta-cobro** es igual de lógico: pedido, entrega, factura, cobro. Muchos asientos salen **automáticos**.',
        },
      },
      {
        ask: '¿Cuál es la gran **ventaja** del ERP para el auditor?',
        options: [
          { text: 'Ya no tiene que entender el sistema', reply: 'Al contrario: hay que entender **cómo está configurado**.' },
          { text: 'Puede analizar el 100% de las transacciones, no solo una muestra', ok: true, reply: '¡Eso! Como todo está en una base de datos, puede revisarlo todo.' },
          { text: 'Los errores ya no existen', reply: 'Existen, y un error de configuración se repite en miles de operaciones.' },
        ],
      },
      {
        ask: 'Alguien configuró mal el **descuento máximo** en el ERP de una tiendita de ropa 👕. ¿Qué puede pasar?',
        options: [
          { text: 'Solo una venta sale mal', reply: 'El sistema aplica la misma regla a todas: el error se repite.' },
          { text: 'Todas las ventas del año podrían salir con descuentos indebidos', ok: true, reply: '¡Correcto! Ese es el gran riesgo: un error de configuración se multiplica.' },
        ],
      },
      { tip: 'Con un ERP ya no basta revisar pólizas: hay que revisar **cómo está configurado** el sistema.' },
    ],
    // Controles de aplicación y datos maestros
    [
      { text: 'Los **controles de aplicación** son reglas dentro del ERP que revisan cada transacción. El más famoso es el **cotejo de tres vías**: orden de compra, recepción y factura deben coincidir para liberar el pago.' },
      {
        calc: {
          question: 'Orden: **300 piezas a $25**. Al almacén llegan **280**. El proveedor factura **$7,500**. ¿Cuánto es el **monto pagable**?',
          answer: 7000,
          hint: 'cantidad recibida × precio de la orden.',
          why: '280 × $25 = **$7,000**. La diferencia de $500 queda bloqueada hasta que haya nota de crédito o llegue lo que falta.',
        },
      },
      {
        calc: {
          question: 'Orden: **50 mesas a $400**, con tolerancia de **2%**. ¿Cuál es la factura **más alta** que el ERP acepta sin bloquear?',
          answer: 20400,
          hint: 'calcula el valor de la orden y súmale el 2% de ese valor.',
          why: '50 × $400 = $20,000. 0.02 × $20,000 = $400. $20,000 + $400 = **$20,400**.',
        },
      },
      {
        multi: {
          title: '¿Cuáles son controles de aplicación? Marca todas.',
          items: [
            { text: 'Bloqueo de facturas duplicadas (mismo proveedor, folio y monto)', ok: true },
            { text: 'Validar que el RFC tenga formato válido', ok: true },
            { text: 'Límites de crédito y de descuento por cliente', ok: true },
            { text: 'Cotejo de tres vías', ok: true },
            { text: 'Que todos usen la misma contraseña para ir más rápido', ok: false },
          ],
          why: 'Todas son reglas que revisan cada transacción, menos la contraseña compartida, que es un riesgo de acceso.',
        },
      },
      { text: 'Los **datos maestros** son la información fija que usan todas las transacciones: proveedores, clientes, empleados, precios.' },
      {
        ask: 'El auditor cruza las cuentas bancarias de proveedores con las de empleados y encuentra **una coincidencia**. ¿Qué hace?',
        options: [
          { text: 'Nada, puede ser casualidad', reply: 'Si alguien cambió la cuenta de un proveedor por la suya, **todos los pagos** se desvían. Hay que investigar.' },
          { text: 'La investiga: podría desviar pagos', ok: true, reply: '¡Bien! Un cambio indebido en datos maestros es peligroso. Por eso la bitácora de cambios la revisa alguien independiente.' },
        ],
      },
      { tip: 'Un control **automático** bien configurado y protegido funciona igual siempre: se prueba con **pocas transacciones** por variante.' },
    ],
    // Roles, accesos y segregación de funciones
    [
      { text: 'En el ERP cada usuario tiene **roles** con permisos. **Segregación de funciones** = que una sola persona no controle todos los pasos de una operación sensible, porque podría cometer y ocultar un error o fraude.' },
      {
        multi: {
          title: 'Revisa los accesos de Grupo Tacos Felices 🌮: ¿qué es un problema? Marca todos.',
          items: [
            { text: 'Pedro puede crear proveedores y también emitir pagos', ok: true },
            { text: 'El usuario «almacen1» lo usan tres personas', ok: true },
            { text: 'Cinco personas son superusuarios permanentes con acceso total', ok: true },
            { text: 'Ana solo puede capturar pedidos', ok: false },
            { text: 'Un superusuario temporal, vigilado, para un cambio puntual', ok: false },
          ],
          why: 'Crear proveedores y pagar es una combinación incompatible; un usuario genérico no deja saber quién hizo qué; y los superusuarios deben ser **pocos, temporales y vigilados**.',
        },
      },
      { text: 'El auditor usa una **matriz de conflictos** y cuenta quién tiene combinaciones prohibidas. De **300** usuarios activos, **15** tienen conflicto (5%).' },
      {
        sim: {
          title: 'Limpia los conflictos',
          inputs: [{ key: 'q', label: 'Usuarios a los que les quitas permisos', min: 0, max: 15, step: 1, value: 0 }],
          outputs: [
            { label: 'Usuarios que siguen con conflicto', calc: (x) => 15 - x.q },
            { label: '% usuarios con conflicto', calc: (x) => ((15 - x.q) / 300) * 100, main: true },
          ],
          goal: {
            text: 'Baja el porcentaje a **1% o menos**.',
            check: (x) => ((15 - x.q) / 300) * 100 <= 1,
            done: 'Se divide siempre entre **todos los usuarios activos**. Los que queden necesitan un control compensatorio documentado.',
          },
        },
      },
      {
        ask: 'En una tiendita solo hay **dos empleados** y no se pueden separar todas las funciones. ¿Qué se hace?',
        options: [
          { text: 'Se ignora el conflicto', reply: 'No: el riesgo sigue ahí. Se debe atender de alguna forma.' },
          { text: 'Se mitiga con un control compensatorio, como una revisión mensual independiente', ok: true, reply: '¡Exacto! Si no se puede eliminar, se **mitiga**.' },
          { text: 'Se le da acceso total a los dos', reply: 'Eso empeora el problema.' },
        ],
      },
      { tip: 'Los conflictos se **eliminan** quitando permisos o, si el equipo es pequeño, se **mitigan** con un control compensatorio.' },
    ],
  ],
}
