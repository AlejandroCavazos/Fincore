import type { InteractiveLesson } from './types'

export const intCON11: InteractiveLesson = {
  lessonId: 'CON-11',
  sections: [
    // ¿Por qué el gobierno es distinto?
    [
      { text: 'Lucía trabaja en la tesorería de su municipio 🏛️. El municipio no vende nada para ganar: da agua, alumbrado y seguridad con dinero que es **de todos**.' },
      {
        ask: 'Entonces, ¿cuál crees que es la meta principal de su contabilidad?',
        options: [
          { text: 'Rendir cuentas: mostrar en qué se gastó cada peso', ok: true, reply: '¡Eso! **Rendir cuentas** es mostrar en qué se gastó y si se respetó lo autorizado.' },
          { text: 'Calcular cuánto ganó el municipio en el año', reply: 'Un ente público no busca **ganar dinero**; busca dar servicios y **rendir cuentas**.' },
          { text: 'Pagar menos impuestos', reply: 'No va por ahí. Su meta es **rendir cuentas** del dinero de todos.' },
        ],
      },
      { text: 'La gran diferencia es el **presupuesto**. En una empresa es una guía; en el gobierno es un **mandato**: el Congreso o el cabildo aprueba cuánto y en qué gastar. Por eso Lucía registra **dos cosas a la vez**: el avance del presupuesto y lo que pasa con el patrimonio (bienes, deudas).' },
      {
        match: {
          title: 'Une cada pieza con lo que es',
          pairs: [
            ['Presupuesto público', 'Un mandato aprobado por el Congreso o el cabildo'],
            ['Ley General de Contabilidad Gubernamental', 'La regla principal en México'],
            ['CONAC', 'Emite normas para que federación, estados y municipios registren igual'],
            ['NICSP (IPSAS)', 'Normas contables internacionales para el sector público'],
          ],
        },
      },
      {
        multi: {
          title: '¿Qué describe la contabilidad de Lucía? Marca todas.',
          items: [
            { text: 'Busca rendir cuentas del dinero público', ok: true },
            { text: 'Registra a la vez el presupuesto y el patrimonio', ok: true },
            { text: 'Sigue normas armonizadas para registrar igual que otros municipios', ok: true },
            { text: 'Su meta es que el municipio tenga la mayor utilidad', ok: false },
            { text: 'Cada municipio usa las reglas que quiere', ok: false },
          ],
          why: 'Rendir cuentas, registrar presupuesto y patrimonio, y seguir normas **armonizadas**. No busca utilidad, y no cada quien hace sus reglas.',
        },
      },
      { tip: 'Gracias a la armonización puedes comparar el gasto en alumbrado de **dos municipios distintos**.' },
    ],
    // Las etapas de cada peso
    [
      { text: 'Lucía va a comprar **5 patrullas** 🚓. Cada peso del gasto pasa por **seis etapas**, llamadas **momentos contables**.' },
      {
        text: 'Primero el "techo": **aprobado** (lo que autorizó el cabildo) y **modificado** (con cambios). Luego:\n📝 **Comprometido:** se firma el contrato; el dinero queda apartado.\n🚚 **Devengado:** llegan las patrullas y nace la obligación de pagar.\n✅ **Ejercido:** se autoriza la orden de pago.\n💸 **Pagado:** sale el dinero.',
      },
      {
        order: {
          title: 'Ordena los momentos del egreso',
          steps: [
            'Aprobado: el cabildo autoriza el gasto',
            'Modificado: el monto tras ampliaciones y reducciones',
            'Comprometido: se firma el contrato (marzo)',
            'Devengado: llegan las patrullas (mayo)',
            'Ejercido: se autoriza la orden de pago',
            'Pagado: sale la transferencia (junio)',
          ],
          done: 'Del lado del ingreso son cuatro: estimado, modificado, devengado (nace el derecho a cobrar) y recaudado.',
        },
      },
      {
        ask: 'Hoy llegan las patrullas, pero todavía no se pagan. ¿Qué momento registra Lucía?',
        options: [
          { text: 'Devengado', ok: true, reply: '¡Bien! Ya se recibieron: nace la obligación de pagar.' },
          { text: 'Comprometido', reply: 'Ese fue en marzo, al **firmar** el contrato. Hoy que llegan es **devengado**.' },
          { text: 'Pagado', reply: 'Aún no sale el dinero. Al recibir las patrullas es **devengado**.' },
        ],
      },
      { text: '**Modificado = aprobado + ampliaciones − reducciones.** Como tu quincena: un bono es ampliación y un descuento, reducción. Lo que queda libre es **disponible = modificado − comprometido**.' },
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
            text: 'Lucía quiere firmar un contrato de luminarias por **$200,000**. Ajusta hasta tener **$200,000 o más** disponibles.',
            check: (x) => 1000000 + x.amp - x.red - 900000 >= 200000,
            done: 'Solo se puede comprometer lo que cabe en el techo. Disponible = modificado − comprometido.',
          },
        },
      },
      {
        calc: {
          question: 'Los proveedores ya entregaron **$600,000** (devengado) y Lucía ha pagado **$450,000**. ¿Cuánto les debe todavía?',
          answer: 150000,
          hint: 'Devengado menos pagado.',
          why: '600,000 − 450,000 = **$150,000**. Es lo ya recibido que aún no se paga.',
        },
      },
      { tip: '**Comprometido** = firmaste y el dinero queda apartado. **Devengado** = ya recibiste y ya debes.' },
    ],
    // ¿En qué se gastó?
    [
      { text: 'Un vecino le pregunta a Lucía: "¿Cuánto gastó el municipio en papelería?" 🤔 Para responder rápido, el gasto se ordena con el **clasificador por objeto del gasto**: todo va en **capítulos** con número.' },
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
      {
        sort: {
          title: '¿1000, 3000 o 5000?',
          buckets: ['1000 Servicios personales', '3000 Servicios generales', '5000 Bienes muebles'],
          items: [
            { text: 'Sueldos de los policías', bucket: 0, why: 'Sueldos: servicios personales.' },
            { text: 'Recibo de luz del palacio municipal', bucket: 1, why: 'Luz: servicios generales.' },
            { text: 'Computadoras para la tesorería', bucket: 2, why: 'Computadoras: bienes muebles.' },
            { text: 'Renta de un local para atender vecinos', bucket: 1, why: 'Rentas: servicios generales.' },
            { text: 'Las 5 patrullas', bucket: 2, why: 'Vehículos: bienes muebles.' },
            { text: 'Prestaciones de los trabajadores', bucket: 0, why: 'Prestaciones: servicios personales.' },
          ],
        },
      },
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
      { text: 'Lucía también prepara **estados contables** (como el estado de situación financiera) y **estados presupuestarios**. Cada año todo se integra en la **Cuenta Pública**.' },
      {
        ask: '¿Quién revisa la Cuenta Pública?',
        options: [
          { text: 'El poder legislativo, con apoyo de su órgano de auditoría', ok: true, reply: '¡Correcto! Así se cierra el ciclo de **rendir cuentas**.' },
          { text: 'La propia tesorería que la preparó', reply: 'Nadie debe revisarse solo. La revisa el **poder legislativo**, con apoyo de su órgano de auditoría.' },
          { text: 'Nadie, solo se publica', reply: 'Sí se revisa: lo hace el **poder legislativo**, con apoyo de su órgano de auditoría.' },
        ],
      },
      { tip: '¿Papelería? Busca el capítulo **2000**. ¿Calles y puentes? El **6000**. ¿Sueldos? El **1000**.' },
    ],
  ],
}
