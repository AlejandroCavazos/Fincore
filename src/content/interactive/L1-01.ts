import type { InteractiveLesson } from './types'

export const intL101: InteractiveLesson = {
  lessonId: 'L1-01',
  sections: [
    // Concepto, objetivos e importancia
    [
      { text: 'Doña Rosa tiene una tiendita 🏪. Vende mucho, pero a fin de mes no sabe si ganó o perdió. ¿Por qué? **Nadie anotó nada.**' },
      { text: 'La **contabilidad** es eso que le falta: anotar, ordenar y resumir en dinero todo lo que pasa en un negocio.' },
      {
        order: {
          title: 'Lo que hace la contabilidad',
          steps: [
            '**Registrar:** anotar cada venta, compra y pago',
            '**Clasificar:** juntar lo parecido (todas las ventas, toda la renta)',
            '**Resumir:** sacar totales en un reporte',
            '**Informar:** darle el reporte a quien decide',
          ],
          done: 'Así es: primero se anota, luego se ordena, se resume y al final se informa.',
        },
      },
      {
        ask: 'Con sus números en orden, ¿qué puede saber Doña Rosa?',
        options: [
          { text: 'Si ganó o perdió en el mes', ok: true, reply: '¡Eso! Y con eso decide si sube precios, si contrata o si le alcanza para surtir.' },
          { text: 'Cuánto venderá el próximo año, seguro', reply: 'La contabilidad cuenta lo que **ya pasó**. Ayuda a planear, pero no adivina el futuro. Lo que sí sabe es **si ganó o perdió**.' },
        ],
      },
      { tip: 'Sin números confiables decides **a ciegas**. La contabilidad convierte lo que pasa en el negocio en **información** para decidir.' },
    ],
    // Usuarios de la información financiera
    [
      { text: 'Los reportes de Doña Rosa no solo los lee ella. Hay gente **dentro** del negocio y gente **fuera** que los necesita.' },
      {
        sort: {
          title: '¿Está dentro o fuera?',
          buckets: ['Usuario interno', 'Usuario externo'],
          items: [
            { text: 'Doña Rosa, la dueña', bucket: 0, why: 'Ella dirige la tiendita desde dentro.' },
            { text: 'El banco que le prestaría $50,000', bucket: 1, why: 'Está fuera y revisa los números para decidir si presta.' },
            { text: 'Su encargado de compras', bucket: 0, why: 'Trabaja dentro y decide qué surtir.' },
            { text: 'El SAT', bucket: 1, why: 'Es la autoridad de impuestos: revisa desde fuera que se paguen bien.' },
            { text: 'El proveedor de refrescos que le fía', bucket: 1, why: 'Está fuera y quiere saber si le van a pagar.' },
          ],
        },
      },
      { tip: '**Internos:** dirigen el negocio (dueños, gerentes). **Externos:** deciden desde fuera (bancos, proveedores, inversionistas, SAT).' },
    ],
    // Tipos de contabilidad
    [
      { text: 'Según **para qué** se usa la información, la contabilidad tiene "especialidades", como los doctores.' },
      {
        match: {
          title: 'Une cada tipo con su trabajo',
          pairs: [
            ['Financiera', 'Reportes generales con reglas comunes (NIF) para bancos e inversionistas'],
            ['Administrativa', 'Cuánto cuesta hacer un pastel y qué producto deja más'],
            ['Fiscal', 'Calcular y pagar bien los impuestos'],
            ['Gubernamental', 'Ingresos y gastos del gobierno'],
          ],
        },
      },
      {
        ask: 'Doña Rosa quiere saber si le conviene más vender tortas o quesadillas. ¿Qué contabilidad le ayuda?',
        options: [
          { text: 'Administrativa', ok: true, reply: '¡Exacto! Es información a la medida para decidir **dentro** del negocio.' },
          { text: 'Fiscal', reply: 'La fiscal es para impuestos. Para decidir qué producto conviene, se usa la **administrativa** (o de costos).' },
          { text: 'Gubernamental', reply: 'Esa es para el gobierno. Para decidir qué vender, se usa la **administrativa**.' },
        ],
      },
    ],
  ],
}
