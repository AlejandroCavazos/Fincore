import type { InteractiveLesson } from './types'

export const intL104: InteractiveLesson = {
  lessonId: 'L1-04',
  sections: [
    // Conceptos y clasificación
    [
      { text: 'Todo negocio se resume en 3 palabras. Apréndelas así:' },
      { tip: '**Activo:** lo que el negocio **tiene** y le sirve (dinero, mercancía, equipo, lo que le deben). **Pasivo:** lo que el negocio **debe**. **Capital:** lo que es **de los dueños**.' },
      {
        sort: {
          title: 'Clasifica lo de un taller mecánico 🔧',
          buckets: ['Activo', 'Pasivo', 'Capital'],
          items: [
            { text: 'Herramientas y elevadores', bucket: 0, why: 'El taller las tiene y le sirven para trabajar.' },
            { text: 'Lo que debe a la refaccionaria', bucket: 1, why: 'Es una deuda: tendrá que pagarla.' },
            { text: 'El dinero que el dueño puso para abrir', bucket: 2, why: 'Es la parte del dueño: su aportación.' },
            { text: 'Lo que un cliente le debe al taller', bucket: 0, why: 'Es un **derecho de cobro**: dinero que va a entrar. Es activo.' },
            { text: 'Sueldos que aún no paga', bucket: 1, why: 'Es una obligación pendiente: pasivo.' },
            { text: 'Ganancias que el dueño dejó en el negocio', bucket: 2, why: 'Lo ganado y no repartido es de los dueños: capital.' },
          ],
        },
      },
    ],
    // Ejemplos de empresas
    [
      { text: 'Ahora una cafetería ☕. Ojo, aquí viene una trampa muy común.' },
      {
        ask: '¿Cuál de estos **NO** es activo de la cafetería?',
        options: [
          { text: 'La deuda del préstamo del banco', ok: true, reply: '¡Bien visto! El **dinero** que llegó del préstamo sí es activo, pero la **obligación de devolverlo** es pasivo.' },
          { text: 'La cafetera', reply: 'La cafetera sí es activo: la tiene y le sirve. El que **no** es activo es la deuda del préstamo: esa es pasivo.' },
          { text: 'El café y la leche en bodega', reply: 'Eso es inventario, un activo. El que **no** es activo es la deuda del préstamo.' },
          { text: 'El dinero en la caja', reply: 'El efectivo es el activo más claro. El que **no** es activo es la deuda del préstamo.' },
        ],
      },
      {
        ask: 'La tiendita compra un refrigerador y queda a deber al proveedor. ¿Qué tiene ahora?',
        options: [
          { text: 'Un activo nuevo y un pasivo nuevo', ok: true, reply: '¡Eso! El refrigerador es activo y lo que debe es pasivo.' },
          { text: 'Solo un activo nuevo', reply: 'Falta algo: si quedó a deber, también nació un **pasivo**.' },
        ],
      },
      { tip: 'Un préstamo trae dos cosas: **dinero** (activo) y **deuda** (pasivo). Nunca es "solo activo".' },
    ],
    // Patrimonio de una entidad
    [
      { text: 'Lo que de verdad es de los dueños se calcula así: **lo que tiene menos lo que debe**.' },
      {
        sim: {
          title: '¿Cuánto vale para los dueños?',
          inputs: [
            { key: 'a', label: 'Activos (lo que tiene)', min: 0, max: 150000, step: 5000, value: 50000 },
            { key: 'p', label: 'Pasivos (lo que debe)', min: 0, max: 100000, step: 5000, value: 30000 },
          ],
          outputs: [{ label: 'Capital contable (activos − pasivos)', calc: (x) => x.a - x.p, main: true }],
          goal: {
            text: 'Haz que el capital de la cafetería llegue a **$60,000 o más**.',
            check: (x) => x.a - x.p >= 60000,
            done: '¡Listo! El capital sube si el negocio tiene más o si debe menos.',
          },
        },
      },
      {
        ask: 'La dueña tiene un coche personal de $150,000. ¿Es activo de la cafetería?',
        options: [
          { text: 'No', ok: true, reply: '¡Correcto! El negocio es una **entidad separada** de su dueña. Sus cosas personales no cuentan.' },
          { text: 'Sí', reply: 'No. El negocio es una **entidad separada**: la casa, el coche y las deudas personales de la dueña no son del negocio.' },
        ],
      },
    ],
  ],
}
