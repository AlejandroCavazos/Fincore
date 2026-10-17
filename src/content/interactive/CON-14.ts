import type { InteractiveLesson } from './types'

export const intCON14: InteractiveLesson = {
  lessonId: 'CON-14',
  sections: [
    // Lo que el dinero no muestra
    [
      { text: 'Sofía es contadora de una fábrica de muebles 🪑. Un banco le pide, además de sus estados financieros, datos de **agua, energía y trato a la gente**.' },
      {
        ask: '¿Por qué crees que el banco quiere esos datos?',
        options: [
          { text: 'Porque un riesgo como una sequía puede afectar el dinero de la fábrica', ok: true, reply: '¡Eso! Bancos e inversionistas quieren saber si un riesgo (una sequía, una nueva ley ambiental) puede pegarle al negocio.' },
          { text: 'Por curiosidad, no cambia nada', reply: 'Sí cambia: un riesgo ambiental o social puede **afectar el dinero** de la empresa, y el banco quiere saberlo.' },
          { text: 'Para cobrarle más impuestos', reply: 'El banco no cobra impuestos. Quiere saber si un riesgo puede **afectar el dinero** de la fábrica.' },
        ],
      },
      { text: 'Eso es un **reporte ESG** (o de sostenibilidad):\n🌱 **E, ambiental:** energía, emisiones, agua, residuos.\n🤝 **S, social:** seguridad laboral, diversidad, derechos humanos, comunidad.\n🏛️ **G, gobierno corporativo:** consejo de administración, ética, anticorrupción, pago a directivos.' },
      {
        sort: {
          title: '¿Es E, S o G?',
          buckets: ['E: ambiental', 'S: social', 'G: gobierno'],
          items: [
            { text: 'Litros de agua que usa la fábrica', bucket: 0, why: 'Agua: ambiental.' },
            { text: 'Accidentes de trabajo en el año', bucket: 1, why: 'Seguridad laboral: social.' },
            { text: 'Cuántos consejeros son independientes', bucket: 2, why: 'Consejo de administración: gobierno.' },
            { text: 'Toneladas de residuos', bucket: 0, why: 'Residuos: ambiental.' },
            { text: 'Política anticorrupción', bucket: 2, why: 'Ética y anticorrupción: gobierno.' },
            { text: 'Programas con la comunidad vecina', bucket: 1, why: 'Comunidad: social.' },
            { text: 'Bono de directivos ligado a metas de sostenibilidad', bucket: 2, why: 'Pago a directivos: gobierno.' },
          ],
        },
      },
      { text: 'Una embotelladora anuncia «somos 100 % sustentables» 🌱… solo porque cambió los focos de sus oficinas, sin medir el agua ni las emisiones de sus plantas.' },
      {
        ask: '¿Cómo se llama eso?',
        options: [
          { text: 'Greenwashing o «lavado verde»', ok: true, reply: '¡Exacto! Presumir logros ambientales exagerados o **sin pruebas**.' },
          { text: 'Un buen reporte ESG', reply: 'Un reporte serio **mide** y prueba. Presumir sin pruebas es **greenwashing**.' },
          { text: 'Gobierno corporativo', reply: 'Eso es la G de ESG. Presumir logros sin pruebas se llama **greenwashing**.' },
        ],
      },
      { tip: 'Por eso el área contable participa: los datos ESG deben ser **tan confiables como los financieros**.' },
    ],
    // Las reglas para reportarlo
    [
      { text: 'Sofía no inventa el formato: hay varios «manuales» para reportar 📘.\n🌍 **GRI:** impactos en las personas y el planeta.\n📏 **ISSB:** emitió en 2023 la **IFRS S1** (requisitos generales) y la **IFRS S2** (el **clima**), pensadas para inversionistas.\n🇲🇽 **CINIF:** emitió en México las **NIS**.' },
      {
        match: {
          title: 'Une cada norma con lo que cubre',
          pairs: [
            ['Estándares GRI', 'Impactos de la empresa en las personas y el planeta'],
            ['IFRS S1 (ISSB)', 'Requisitos generales de sostenibilidad'],
            ['IFRS S2 (ISSB)', 'Información sobre el clima'],
            ['NIS (CINIF)', 'Normas de sostenibilidad emitidas en México'],
          ],
        },
      },
      {
        ask: 'Un inversionista quiere saber cómo el **clima** puede afectar a la fábrica. ¿Qué norma revisa Sofía?',
        options: [
          { text: 'IFRS S2', ok: true, reply: '¡Bien! La **IFRS S2** trata la información relacionada con el clima.' },
          { text: 'IFRS S1', reply: 'La S1 da los requisitos **generales**. La del clima es la **IFRS S2**.' },
          { text: 'Ninguna, el clima no se reporta', reply: 'Sí se reporta: justo para eso existe la **IFRS S2**.' },
        ],
      },
      { text: 'Las normas del ISSB se ordenan en **cuatro pilares**: gobernanza, estrategia, gestión de riesgos, y métricas y objetivos.' },
      {
        multi: {
          title: 'Marca los cuatro pilares',
          items: [
            { text: 'Gobernanza', ok: true },
            { text: 'Estrategia', ok: true },
            { text: 'Gestión de riesgos', ok: true },
            { text: 'Métricas y objetivos', ok: true },
            { text: 'Publicidad', ok: false },
            { text: 'Precio de la acción', ok: false },
          ],
          why: 'Gobernanza, estrategia, gestión de riesgos, y métricas y objetivos.',
        },
      },
      { tip: '**Doble materialidad:** mirar cómo un tema afecta el dinero de la empresa (financiera) y cómo la empresa afecta al entorno (de impacto).' },
    ],
    // ¿Cuánto contamina tu empresa?
    [
      { text: 'Sofía mide las emisiones de la fábrica 🏭 en **tCO₂e** (toneladas de CO₂ equivalente) y las separa en **alcances**:\n🔥 **Alcance 1:** directas, de fuentes propias (caldera, camiones).\n⚡ **Alcance 2:** la **electricidad** que compras.\n✈️ **Alcance 3:** el resto de la cadena (viajes, traslado de empleados, proveedores, clientes).' },
      {
        sort: {
          title: '¿Qué alcance es?',
          buckets: ['Alcance 1', 'Alcance 2', 'Alcance 3'],
          items: [
            { text: 'Gas que quema la caldera de la fábrica', bucket: 0, why: 'Fuente propia, emisión directa: alcance 1.' },
            { text: 'Electricidad que compra la fábrica', bucket: 1, why: 'Electricidad comprada: alcance 2.' },
            { text: 'Vuelos de negocio de los vendedores', bucket: 2, why: 'Viajes de negocio: alcance 3.' },
            { text: 'Diésel de los camiones de reparto propios', bucket: 0, why: 'Vehículos propios: alcance 1.' },
            { text: 'Traslado de los empleados a la planta', bucket: 2, why: 'Parte de la cadena: alcance 3.' },
            { text: 'Producción de la madera que le venden', bucket: 2, why: 'La hacen sus proveedores: alcance 3.' },
          ],
        },
      },
      { text: 'Se calcula: **dato de actividad × factor de emisión**. Si el factor está en kg, divide entre **1,000** para tener toneladas.' },
      {
        calc: {
          question: 'Los camiones de la fábrica usaron **10,000 litros** de diésel. Con un factor ilustrativo de **2.7 kg CO₂e por litro**, ¿cuántas toneladas de alcance 1 emitió?',
          answer: 27, unit: 'tCO₂e',
          hint: '10,000 × 2.7 da kilos; divide entre 1,000.',
          why: '10,000 × 2.7 = 27,000 kg = **27 tCO₂e**.',
        },
      },
      {
        sim: {
          title: 'Bajar el alcance 2',
          inputs: [
            { key: 'kwh', label: 'kWh comprados al año', min: 60000, max: 200000, step: 20000, value: 200000 },
          ],
          outputs: [
            { label: 'Emisiones de alcance 2 (tCO₂e)', calc: (x) => (x.kwh * 0.5) / 1000, main: true, unit: 'tCO₂e' },
          ],
          goal: {
            text: 'Con un factor ilustrativo de 0.5 kg por kWh, la meta es emitir **50 tCO₂e o menos**. ¿Cuánta luz puede comprar?',
            check: (x) => (x.kwh * 0.5) / 1000 <= 50,
            done: '100,000 kWh × 0.5 ÷ 1,000 = 50 t. Menos kWh comprados, menos alcance 2.',
          },
        },
      },
      {
        calc: {
          question: 'Ese año la fábrica emitió **27 t** de alcance 1 y **50 t** de alcance 2. ¿Cuánto suman?',
          answer: 77, unit: 'tCO₂e',
          hint: 'Suma los dos alcances.',
          why: '27 + 50 = **77 tCO₂e**. Para comparar con otras empresas se usa la **intensidad**: emisiones entre ventas.',
        },
      },
      { tip: 'Lo ideal es que un **tercero independiente verifique** los datos, igual que un auditor revisa los estados financieros.' },
    ],
  ],
}
