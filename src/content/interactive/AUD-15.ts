import type { InteractiveLesson } from './types'

export const intAUD15: InteractiveLesson = {
  lessonId: 'AUD-15',
  sections: [
    // ¿Qué dice el informe del auditor?
    [
      { text: '**Muebles Robles** 🪑 pide un préstamo. El banco le dice: «tráeme tus estados financieros **auditados**». Inés, la auditora, se pone a trabajar.' },
      {
        ask: '¿Qué le entrega Inés al terminar?',
        options: [
          { text: 'Un informe con su opinión sobre los estados financieros', ok: true, reply: '¡Eso! Todo el trabajo termina en un **informe** con una **opinión**.' },
          { text: 'Una garantía de que no hay ningún error', reply: 'El auditor da seguridad **razonable**, no absoluta. Entrega un **informe con su opinión**.' },
          { text: 'Los estados financieros hechos por ella', reply: 'Prepararlos le toca a la **administración** de la empresa. Inés entrega un **informe con su opinión**.' },
        ],
      },
      {
        ask: 'La opinión dice si los estados están presentados «**razonablemente**». ¿Qué significa?',
        options: [
          { text: 'Que están perfectos, sin un solo peso de error', reply: 'Razonable no es perfecto. Puede haber errores pequeños, pero **ninguno que cambie decisiones**.' },
          { text: 'Que no hay errores que cambiarían las decisiones de quien los lee', ok: true, reply: '¡Exacto! Puede haber errores pequeños, pero no unos que cambien decisiones.' },
          { text: 'Que el auditor los preparó', reply: 'Prepararlos es de la **administración**. Razonable = sin errores que **cambien decisiones**.' },
        ],
      },
      {
        text: 'El informe (NIA 700) va así:\n1️⃣ **Opinión** y su **fundamento**.\n2️⃣ Si aplican: **empresa en funcionamiento** y **cuestiones clave**.\n3️⃣ **Responsabilidades** de la administración y del auditor.\n4️⃣ **Firma**, lugar y **fecha**.',
      },
      {
        order: {
          title: 'Arma el informe de Inés',
          steps: [
            'Opinión',
            'Fundamento de la opinión',
            'Empresa en funcionamiento y cuestiones clave (cuando aplican)',
            'Responsabilidades de la administración y del auditor',
            'Firma, lugar y fecha',
          ],
          done: 'El banco va primero a la **opinión** y en dos minutos sabe qué tan confiables son las cifras.',
        },
      },
      { tip: 'La **fecha** importa: el auditor responde por lo que conoció hasta ese día.' },
    ],
    // ¿Qué calificación le toca?
    [
      { text: 'La opinión es la «calificación» 📝. Si todo es razonable, es **limpia**. Si no, Inés se pregunta: ¿es **incorrección** (algo mal registrado) o **limitación** (no hubo evidencia)? ¿Es **material** en un renglón o **generalizado** (afecta casi todo)?' },
      {
        text: '✅ Nada material → **limpia**.\n⚠️ Material, pero en un solo renglón → **con salvedades**.\n❌ Incorrección material y generalizada → **desfavorable**.\n🚫 Sin evidencia de casi nada → **abstención**.',
      },
      {
        match: {
          title: 'Une cada caso con su opinión',
          pairs: [
            ['La empresa corrigió todo y no queda nada material', 'Limpia (no modificada)'],
            ['No se pudo contar un almacén material; lo demás está bien', 'Con salvedades'],
            ['No consolida subsidiarias que son la mayor parte del negocio', 'Desfavorable (adversa)'],
            ['Un incendio destruyó casi todos los registros', 'Abstención de opinión'],
          ],
        },
      },
      {
        ask: 'Materialidad: $3,000,000. Muebles Robles no quiere corregir un inventario inflado por **$4,500,000**. Lo demás está bien. ¿Qué opinión?',
        options: [
          { text: 'Con salvedades', ok: true, reply: '¡Bien! Es material, pero solo afecta ese renglón: **con salvedades**.' },
          { text: 'Desfavorable', reply: 'La desfavorable es cuando el error es **generalizado**. Aquí es un solo renglón: **con salvedades**.' },
          { text: 'Abstención', reply: 'La abstención es por **falta de evidencia** en casi todo. Aquí sí hay evidencia: **con salvedades**.' },
        ],
      },
      { text: 'Un **párrafo de énfasis** (NIA 706) solo llama la atención sobre algo bien revelado en las notas. **No** cambia la opinión.' },
      {
        ask: 'Inés agrega un párrafo de énfasis sobre una demanda bien revelada. ¿Qué pasa con la opinión limpia?',
        options: [
          { text: 'Sigue siendo limpia', ok: true, reply: '¡Exacto! El énfasis **no** modifica la opinión. Confundirlo con una salvedad es un error frecuente.' },
          { text: 'Pasa a ser con salvedades', reply: 'Error frecuente: el énfasis solo destaca algo bien revelado. La opinión **sigue limpia**.' },
          { text: 'Pasa a ser abstención', reply: 'No: ni siquiera falta evidencia. La opinión **sigue limpia**.' },
        ],
      },
      {
        calc: {
          question: 'La **materialidad** es el monto de error que ya le importaría a un lector. Utilidad antes de impuestos de **$20,000,000** y el auditor elige **5%**. ¿Cuánto es?',
          answer: 1000000,
          hint: 'base × 0.05.',
          why: '$20,000,000 × 0.05 = **$1,000,000**.',
        },
      },
      {
        calc: {
          question: 'Con materialidad de **$1,000,000** quedan sin corregir **$400,000**, **$500,000** y **$250,000**. ¿Por cuánto la **rebasan** juntos?',
          answer: 150000,
          hint: 'suma los tres y réstale la materialidad.',
          why: '$400,000 + $500,000 + $250,000 = $1,150,000 − $1,000,000 = **$150,000**. Ninguno es material solo, pero **juntos sí**.',
        },
      },
    ],
    // Hallazgos que se entienden
    [
      { text: 'Ahora Inés hace **auditoría interna** en Muebles Robles 🔧. Su informe no da una opinión: comunica **hallazgos** para que se corrijan.' },
      {
        text: 'Un buen hallazgo tiene cinco partes:\n🔍 **Condición:** lo que encontraste.\n📏 **Criterio:** lo que debería ser.\n❓ **Causa:** por qué pasó.\n💸 **Efecto:** la consecuencia, en pesos si se puede.\n🛠️ **Recomendación:** qué hacer, atacando la causa.',
      },
      {
        match: {
          title: 'Hallazgo de reembolsos: une cada frase con su parte',
          pairs: [
            ['De 25 reembolsos revisados, 7 no tenían comprobante', 'Condición'],
            ['La política exige comprobante para todo reembolso', 'Criterio'],
            ['El sistema permite pagar sin adjuntar el comprobante', 'Causa'],
            ['Se pagaron $42,000 sin soporte', 'Efecto'],
            ['Configurar el sistema para que no pague sin comprobante', 'Recomendación'],
          ],
        },
      },
      {
        order: {
          title: 'Arma el hallazgo de notas de crédito',
          steps: [
            'De 40 notas de crédito revisadas, 12 no tenían autorización',
            'La política exige firma del gerente de ventas',
            'El sistema permite emitirlas sin aprobación',
            'Se dieron $380,000 en descuentos sin autorización',
            'Configurar la aprobación obligatoria en el sistema',
          ],
          done: 'Condición → criterio → causa → efecto → recomendación. ¡Lo armaste tú!',
        },
      },
      {
        ask: '¿Cuál condición está **mejor escrita**?',
        options: [
          { text: '«El irresponsable de tesorería volvió a hacer un desastre con los pagos»', reply: 'Suena a acusación y no tiene datos. El informe trata de **procesos**, no de culpar personas.' },
          { text: '«De 30 pagos a proveedores, 8 se hicieron sin orden de compra»', ok: true, reply: '¡Eso! Frase corta, datos verificables y sin adjetivos.' },
          { text: '«Hubo muchísimos pagos mal hechos»', reply: '«Muchísimos» no se puede verificar. Usa **números**.' },
        ],
      },
      {
        rush: {
          title: '¿Causa o efecto?',
          seconds: 35,
          labels: ['Causa', 'Efecto'],
          items: [
            { text: 'Tesorería no tiene acceso al módulo de compras', ans: 0 },
            { text: '$520,000 pagados sin autorización previa', ans: 1 },
            { text: 'El sistema no pide aprobación', ans: 0 },
            { text: 'Se otorgaron $380,000 en descuentos sin autorización', ans: 1 },
            { text: 'Una sola persona sin suplente', ans: 0 },
            { text: 'Riesgo de pagar facturas falsas', ans: 1 },
          ],
        },
      },
      { tip: 'Cada hallazgo lleva la **respuesta de la administración**: plan de acción con **responsable y fecha**, y auditoría le da seguimiento.' },
    ],
  ],
}
