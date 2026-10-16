import type { InteractiveLesson } from './types'

export const intAUD15: InteractiveLesson = {
  lessonId: 'AUD-15',
  sections: [
    // El informe del auditor independiente
    [
      { text: 'Cuando un despacho audita los estados financieros, termina con un **informe** que trae una **opinión**: ¿están presentados **razonablemente**, en todos los aspectos materiales?' },
      {
        ask: '¿Qué significa que los estados financieros estén presentados «**razonablemente**»?',
        options: [
          { text: 'Que están perfectos, sin un solo peso de error', reply: 'No: razonable no es perfecto. El auditor da seguridad razonable, no absoluta.' },
          { text: 'Que no hay errores que cambiarían las decisiones de quien los lee', ok: true, reply: '¡Exacto! Puede haber errores pequeños, pero no unos que cambien decisiones.' },
          { text: 'Que el auditor los preparó', reply: 'Prepararlos es responsabilidad de la **administración**, no del auditor.' },
        ],
      },
      {
        order: {
          title: 'Ordena las partes del informe según la NIA 700',
          steps: [
            'Opinión',
            'Fundamento de la opinión',
            'Empresa en funcionamiento (cuando aplica)',
            'Cuestiones clave de la auditoría (cuando aplican)',
            'Responsabilidades de la administración y del auditor',
            'Firma del socio, lugar y fecha',
          ],
          done: 'El lector va primero a la **opinión** y en dos minutos sabe qué tan confiables son las cifras.',
        },
      },
      {
        match: {
          title: 'Une cada NIA con su tema',
          pairs: [
            ['NIA 700', 'Cómo se arma el informe y se forma la opinión'],
            ['NIA 570', 'Empresa en funcionamiento'],
            ['NIA 701', 'Cuestiones clave de la auditoría'],
            ['NIA 705', 'Opiniones modificadas'],
            ['NIA 706', 'Párrafo de énfasis'],
          ],
        },
      },
      { tip: 'La **fecha** importa: el auditor responde por lo que conoció hasta ese día.' },
    ],
    // Tipos de opinión: limpia o modificada
    [
      { text: 'La opinión es la «calificación» 📝. Para elegirla te preguntas: ¿es una **incorrección** (algo mal registrado) o una **limitación** (no hubo evidencia)? ¿Y es **material** o además **generalizada** (afecta casi todo)?' },
      {
        sort: {
          title: '¿Qué opinión le toca?',
          buckets: ['Limpia (no modificada)', 'Con salvedades', 'Desfavorable (adversa)', 'Abstención de opinión'],
          items: [
            { text: 'Todo es razonable y no hay problemas materiales', bucket: 0, why: 'Sin problemas materiales: opinión **limpia**.' },
            { text: 'No reconocen una provisión material por una demanda; afecta solo ese renglón y la utilidad', bucket: 1, why: 'Incorrección material, **no** generalizada: **con salvedades**.' },
            { text: 'Errores materiales en casi toda la contabilidad', bucket: 2, why: 'Incorrección material **y** generalizada: **desfavorable**.' },
            { text: 'No pudo obtener evidencia de un solo renglón material', bucket: 1, why: 'Limitación material, no generalizada: **con salvedades**.' },
            { text: 'No pudo obtener evidencia de casi nada de los estados financieros', bucket: 3, why: 'Limitación material y generalizada: **abstención**.' },
            { text: 'Todo razonable, con un párrafo de énfasis sobre un desastre natural bien revelado en notas', bucket: 0, why: 'El párrafo de énfasis **no** modifica la opinión.' },
          ],
        },
      },
      { text: 'La **materialidad** es el monto de error a partir del cual a un lector ya le importaría. Por ejemplo, 5% de la utilidad antes de impuestos.' },
      {
        calc: {
          question: 'Utilidad antes de impuestos de **$20,000,000** y el auditor elige **5%**. ¿Cuál es la **materialidad**?',
          answer: 1000000,
          hint: 'base × 0.05.',
          why: '$20,000,000 × 0.05 = **$1,000,000**.',
        },
      },
      {
        calc: {
          question: 'Con esa materialidad de **$1,000,000**, quedan sin corregir tres errores: **$400,000**, **$500,000** y **$250,000**. ¿Por cuánto **rebasan** la materialidad juntos?',
          answer: 150000,
          hint: 'suma los tres y réstale la materialidad.',
          why: '$400,000 + $500,000 + $250,000 = $1,150,000 − $1,000,000 = **$150,000**. Ninguno es material solo, pero **juntos sí**.',
        },
      },
      { tip: 'Siempre evalúa la **suma** de las incorrecciones no corregidas, no cada una por separado.' },
    ],
    // Informes de auditoría interna: hallazgos que se entienden
    [
      { text: 'El informe de **auditoría interna** no opina sobre estados financieros: comunica **hallazgos** para que se corrijan. Un buen hallazgo tiene cinco partes.' },
      {
        sort: {
          title: 'Hallazgo en el taller 🔧: ¿qué parte es cada frase?',
          buckets: ['Condición', 'Criterio', 'Causa', 'Efecto', 'Recomendación'],
          items: [
            { text: 'De 25 reembolsos de gastos revisados, 7 no tenían comprobante', bucket: 0, why: 'Es lo que encontraste, con datos: **condición**.' },
            { text: 'La política exige comprobante para todo reembolso', bucket: 1, why: 'Es lo que debería ser: **criterio**.' },
            { text: 'El sistema permite pagar el reembolso sin adjuntar el comprobante', bucket: 2, why: 'Explica por qué pasó: **causa**.' },
            { text: 'Se pagaron $42,000 sin soporte', bucket: 3, why: 'La consecuencia en pesos: **efecto**.' },
            { text: 'Configurar el sistema para que no pague sin comprobante', bucket: 4, why: 'Ataca la causa: **recomendación**.' },
          ],
        },
      },
      {
        ask: '¿Cuál condición está **mejor escrita**?',
        options: [
          { text: '«El irresponsable de tesorería volvió a hacer un desastre con los pagos»', reply: 'Suena a acusación y no tiene datos. El informe trata de procesos, no de culpar personas.' },
          { text: '«De 30 pagos a proveedores, 8 se hicieron sin orden de compra»', ok: true, reply: '¡Eso! Frase corta, datos verificables y sin adjetivos.' },
          { text: '«Hubo muchísimos pagos mal hechos»', reply: '«Muchísimos» no se puede verificar. Usa números.' },
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
            { text: 'Falta de capacitación del personal', ans: 0 },
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
