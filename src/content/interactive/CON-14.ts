import type { InteractiveLesson } from './types'

export const intCON14: InteractiveLesson = {
  lessonId: 'CON-14',
  sections: [
    // ¿Qué es un reporte ESG?
    [
      { text: '**ESG** = ambiental (E), social (S) y gobierno corporativo (G). Cuenta lo que los estados financieros no muestran: agua, energía, trato a la gente y quién vigila por dentro.' },
      {
        sort: {
          title: '¿Es E, S o G?',
          buckets: ['E: ambiental', 'S: social', 'G: gobierno'],
          items: [
            { text: 'Litros de agua que usa la planta', bucket: 0, why: 'Agua: ambiental.' },
            { text: 'Accidentes de trabajo en el año', bucket: 1, why: 'Seguridad laboral: social.' },
            { text: 'Cómo se forma el consejo de administración', bucket: 2, why: 'Consejo: gobierno corporativo.' },
            { text: 'Toneladas de residuos', bucket: 0, why: 'Residuos: ambiental.' },
            { text: 'Programas con la comunidad vecina', bucket: 1, why: 'Comunidad: social.' },
            { text: 'Política anticorrupción', bucket: 2, why: 'Ética y anticorrupción: gobierno.' },
          ],
        },
      },
      { text: 'Una embotelladora anuncia «somos 100 % sustentables» 🌱… solo porque cambió los focos de sus oficinas.' },
      {
        ask: '¿Cómo se llama eso?',
        options: [
          { text: 'Greenwashing o «lavado verde»', ok: true, reply: '¡Exacto! Presumir logros exagerados o sin pruebas, sin medir el agua ni las emisiones de sus plantas.' },
          { text: 'Doble materialidad', reply: 'No. Eso es otra idea (la verás en el siguiente tema). Aquí es **greenwashing**: presumir sin pruebas.' },
          { text: 'Un buen reporte ESG', reply: 'No: un reporte serio **mide** y prueba. Esto es **greenwashing**.' },
        ],
      },
      { tip: 'Inversionistas, bancos, clientes y la comunidad leen estos datos. Por eso deben ser **tan confiables como los financieros**.' },
    ],
    // Marcos y normas principales
    [
      { text: 'Hay varios «manuales» para reportar. Une cada uno con lo que hace.' },
      {
        match: {
          title: 'Marcos y normas',
          pairs: [
            ['Estándares GRI', 'Impactos de la empresa en las personas y el planeta'],
            ['IFRS S1 (ISSB)', 'Requisitos generales de sostenibilidad'],
            ['IFRS S2 (ISSB)', 'Información sobre el clima'],
            ['NIS (CINIF)', 'Normas de sostenibilidad emitidas en México'],
            ['Doble materialidad', 'Usar la materialidad financiera y la de impacto'],
          ],
        },
      },
      { text: 'Las normas del ISSB retoman los **cuatro pilares** de las recomendaciones TCFD.' },
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
          why: 'Gobernanza, estrategia, gestión de riesgos y métricas y objetivos.',
        },
      },
      { tip: '**Materialidad financiera**: cómo un tema afecta el dinero de la empresa. **De impacto**: cómo la empresa afecta al entorno. Para una minera, el agua importa en los dos sentidos.' },
    ],
    // Métricas: emisiones de gases de efecto invernadero
    [
      { text: 'Una fábrica 🏭 mide sus emisiones en **tCO₂e** (toneladas de CO₂ equivalente) y las separa en **alcances**.' },
      {
        sort: {
          title: '¿Qué alcance es?',
          buckets: ['Alcance 1', 'Alcance 2', 'Alcance 3'],
          items: [
            { text: 'Gas que quema la caldera de la fábrica', bucket: 0, why: 'Fuente propia, emisión directa: alcance 1.' },
            { text: 'Electricidad que compra la fábrica', bucket: 1, why: 'Electricidad comprada: alcance 2.' },
            { text: 'Vuelos de negocio del gerente', bucket: 2, why: 'Viajes de negocio: alcance 3.' },
            { text: 'Gasolina de los camiones de la empresa', bucket: 0, why: 'Vehículos propios: alcance 1.' },
            { text: 'Traslado de los empleados a la planta', bucket: 2, why: 'Parte de la cadena: alcance 3.' },
            { text: 'Clientes usando los productos', bucket: 2, why: 'Uso de tus productos: alcance 3.' },
          ],
        },
      },
      { text: 'Se calcula: **dato de actividad × factor de emisión ÷ 1,000**. Prueba con la luz de la fábrica (factor ilustrativo de 0.5 kg CO₂e por kWh).' },
      {
        sim: {
          title: 'Bajar el alcance 2',
          inputs: [
            { key: 'kwh', label: 'kWh comprados al año', min: 60000, max: 200000, step: 20000, value: 200000 },
          ],
          outputs: [
            { label: 'Emisiones de alcance 2 (tCO₂e)', calc: (x) => (x.kwh * 0.5) / 1000, main: true },
          ],
          goal: {
            text: 'La meta es emitir **50 tCO₂e o menos**. ¿Cuánta luz puede comprar como máximo?',
            check: (x) => (x.kwh * 0.5) / 1000 <= 50,
            done: '100,000 kWh × 0.5 ÷ 1,000 = 50 t. Menos kWh comprados, menos alcance 2.',
          },
        },
      },
      {
        calc: {
          question: 'La fábrica emitió **120 tCO₂e** y vendió **$40,000,000** (40 millones). ¿Cuál es su **intensidad** (t por millón vendido)?',
          answer: 3,
          hint: 'emisiones entre ventas escritas en millones.',
          why: '120 ÷ 40 = **3 tCO₂e por millón**. La intensidad permite comparar empresas de distinto tamaño.',
        },
      },
      { tip: 'Lo ideal es que un **tercero independiente verifique** los datos, igual que un auditor revisa los estados financieros.' },
    ],
  ],
}
