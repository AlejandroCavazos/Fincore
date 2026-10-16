import type { InteractiveLesson } from './types'

export const intCON11: InteractiveLesson = {
  lessonId: 'CON-11',
  sections: [
    // ¿Qué la hace distinta?
    [
      { text: 'Un municipio 🏛️ no vende nada para ganar: da agua, alumbrado y seguridad con dinero que es **de todos**.' },
      {
        ask: 'Entonces, ¿cuál es la meta principal de su contabilidad?',
        options: [
          { text: 'Rendir cuentas: mostrar en qué se gastó cada peso', ok: true, reply: '¡Eso! **Rendir cuentas** es mostrar en qué se gastó y si se respetó lo autorizado.' },
          { text: 'Calcular cuánto ganó el municipio en el año', reply: 'No. Un ente público no busca **ganar dinero**; busca dar servicios y rendir cuentas.' },
          { text: 'Pagar menos impuestos', reply: 'No va por ahí. Su meta es **rendir cuentas** del dinero de todos.' },
        ],
      },
      { text: 'La gran diferencia es el **presupuesto**: en el gobierno no es una guía, es una orden que hay que respetar.' },
      {
        match: {
          title: 'Une cada pieza con lo que es',
          pairs: [
            ['Presupuesto público', 'Un mandato: el Congreso o el cabildo aprueba cuánto y en qué gastar'],
            ['Ley General de Contabilidad Gubernamental', 'La regla principal en México'],
            ['CONAC', 'Emite normas para que federación, estados y municipios registren igual'],
            ['NICSP (IPSAS)', 'Normas contables internacionales para el sector público'],
          ],
        },
      },
      { tip: 'Se registran **dos cosas a la vez**: el avance del presupuesto y lo que pasa con el patrimonio (bienes, deudas). Gracias a la armonización puedes comparar el alumbrado de dos municipios.' },
    ],
    // Momentos contables del egreso y del ingreso
    [
      { text: 'Cada peso del gasto pasa por **seis etapas** (momentos contables). Sigue las 5 patrullas de un municipio 🚓.' },
      {
        order: {
          title: 'Ordena los momentos del egreso',
          steps: [
            'Aprobado: el cabildo autoriza el gasto al inicio del año',
            'Modificado: el monto después de ampliaciones y reducciones',
            'Comprometido: se firma el contrato de las patrullas (marzo)',
            'Devengado: llegan las patrullas y nace la obligación de pagar (mayo)',
            'Ejercido: se autoriza la orden de pago',
            'Pagado: sale el dinero por transferencia (junio)',
          ],
          done: 'Aprobado → modificado → comprometido → devengado → ejercido → pagado. Del lado del ingreso son cuatro: estimado, modificado, devengado y recaudado.',
        },
      },
      { text: 'El **modificado** es el techo real: lo aprobado + **ampliaciones** (te dan más) − **reducciones** (te quitan). Como tu quincena con un bono o un descuento.' },
      {
        sim: {
          title: 'La partida de alumbrado',
          inputs: [
            { key: 'amp', label: 'Ampliaciones', min: 0, max: 300000, step: 50000, value: 0 },
            { key: 'red', label: 'Reducciones', min: 0, max: 200000, step: 50000, value: 100000 },
          ],
          outputs: [
            { label: 'Presupuesto modificado (aprobado $1,000,000)', calc: (x) => 1000000 + x.amp - x.red },
            { label: 'Disponible por comprometer (ya hay $900,000 comprometidos)', calc: (x) => 1000000 + x.amp - x.red - 900000, main: true },
          ],
          goal: {
            text: 'El municipio quiere firmar un contrato nuevo de luminarias por **$200,000**. Ajusta hasta tener **$200,000 o más** disponibles.',
            check: (x) => 1000000 + x.amp - x.red - 900000 >= 200000,
            done: 'Solo se puede comprometer lo que cabe en el techo. Disponible = modificado − comprometido.',
          },
        },
      },
      {
        calc: {
          question: 'Los proveedores ya entregaron **$600,000** (devengado) y el municipio ha pagado **$450,000**. ¿Cuánto les debe todavía?',
          answer: 150000,
          hint: 'devengado menos pagado.',
          why: '600,000 − 450,000 = **$150,000**. Es lo ya recibido que aún no se paga: una cuenta por pagar.',
        },
      },
      { tip: '**Comprometido** = el dinero queda apartado. **Devengado** = ya recibiste y ya debes. No los confundas.' },
    ],
    // Clasificadores, estados e información pública
    [
      { text: 'Para ordenar el gasto se usa el **clasificador por objeto del gasto**: todo se agrupa en **capítulos** con número.' },
      {
        match: {
          title: 'Une cada capítulo con lo que agrupa',
          pairs: [
            ['1000', 'Servicios personales: sueldos y prestaciones'],
            ['2000', 'Materiales y suministros: papelería, combustible'],
            ['3000', 'Servicios generales: luz, rentas, mantenimiento'],
            ['5000', 'Bienes muebles, inmuebles e intangibles: vehículos, computadoras'],
            ['6000', 'Inversión pública: obras como calles o puentes'],
          ],
        },
      },
      { text: 'Contrarreloj ⏱️: ¿en qué capítulo buscarías cada gasto en la información pública de tu municipio?' },
      {
        rush: {
          title: '¿2000 o 6000?',
          seconds: 30,
          labels: ['Capítulo 2000', 'Capítulo 6000'],
          items: [
            { text: 'Papelería de las oficinas', ans: 0 },
            { text: 'Pavimentar una calle', ans: 1 },
            { text: 'Gasolina de las patrullas', ans: 0 },
            { text: 'Construir un puente', ans: 1 },
            { text: 'Hojas y tóner para imprimir', ans: 0 },
            { text: 'Obra de un nuevo mercado', ans: 1 },
          ],
        },
      },
      { tip: 'Cada año todo se integra en la **Cuenta Pública**, que revisa el poder legislativo con apoyo de su órgano de auditoría.' },
    ],
  ],
}
