import type { InteractiveLesson } from './types'

export const intINV15: InteractiveLesson = {
  lessonId: 'INV-15',
  sections: [
    // Bitcoin: dinero con tope
    [
      { text: 'Ximena es diseñadora freelance en Guadalajara 🎨. Un cliente de fuera le pregunta si acepta **bitcoin**. Ella no sabe bien qué es.' },
      { text: '**Bitcoin** nació en 2009 con un documento firmado con el seudónimo Satoshi Nakamoto. Es dinero digital que pasa entre personas **sin banco**; la red entera verifica que nadie gaste dos veces lo mismo.' },
      { text: '⛏️ **Mineros:** validan bloques con **prueba de trabajo**: compiten resolviendo un problema que gasta mucha energía y el ganador recibe bitcoins nuevos.\n🔒 **Escasez:** nunca existirán más de **21 millones**.\n✂️ **Halving:** cada cuatro años, aproximadamente, la recompensa baja a la mitad.' },
      {
        ask: '¿Quién decide cuántos bitcoins puede haber?',
        options: [
          { text: 'Las reglas del protocolo: máximo 21 millones', ok: true, reply: '¡Exacto! Está escrito en su protocolo, no lo decide nadie cada año.' },
          { text: 'Un banco central, cada año', reply: 'Ningún banco central controla bitcoin. Su protocolo fija un máximo de **21 millones**.' },
          { text: 'Nadie: no tiene límite', reply: 'Bitcoin sí tiene tope: **21 millones**. (El ether, en cambio, no tiene un tope fijo).' },
        ],
      },
      { text: 'No necesitas un bitcoin entero. La unidad mínima es el **satoshi**: 1 BTC = **100,000,000** satoshis (cien millones).\n🧮 BTC = monto ÷ precio de un BTC\n🧮 Satoshis = BTC × 100,000,000' },
      {
        order: {
          title: 'Arma el cálculo de cuántos satoshis compras',
          steps: ['Si hay comisión, réstala del monto', 'Divide el monto entre el precio de un BTC', 'Multiplica esos BTC por 100,000,000', 'Ya tienes tus satoshis'],
          done: '¡Listo! Cuidado: son **cien millones**, no un millón.',
        },
      },
      {
        calc: {
          question: 'Ximena invierte **$800** a un precio hipotético de **$2,000,000** por BTC, sin comisión. ¿Cuántos satoshis recibe?',
          answer: 40000,
          unit: 'satoshis',
          hint: '800 ÷ 2,000,000 = 0.0004 BTC. Luego × 100,000,000.',
          why: '0.0004 × 100,000,000 = **40,000 satoshis**. Si multiplicas por un millón, te faltan dos ceros (400).',
        },
      },
      { tip: 'Algunos le dicen "oro digital" por su escasez, pero su precio es **mucho más volátil** que el del oro.' },
    ],
    // ¿Qué hace distinto a Ethereum?
    [
      {
        ask: 'En una máquina de refrescos metes la moneda correcta y el refresco sale solo 🥤. ¿Qué idea de Ethereum se parece a eso?',
        options: [
          { text: 'Programas que se ejecutan solos al cumplirse una condición', ok: true, reply: '¡Eso! Se llaman **contratos inteligentes**.' },
          { text: 'Un banco que revisa cada operación', reply: 'Justo al revés: nadie interviene. Son **contratos inteligentes** que se ejecutan solos.' },
          { text: 'Monedas que se imprimen en papel', reply: 'No hay papel. La idea es que un programa se ejecuta solo, como la máquina: **contratos inteligentes**.' },
        ],
      },
      { text: '**Ethereum** (2015) no solo mueve una moneda: permite programar **contratos inteligentes**. Su moneda nativa es el **ether (ETH)**. Sobre Ethereum funcionan tokens, NFT, stablecoins y finanzas descentralizadas (**DeFi**).' },
      { text: '⛽ **Gas:** cada operación consume trabajo de cómputo. La comisión se paga en ETH y **sube cuando la red está congestionada**.\n🤝 **Prueba de participación (desde 2022):** validan quienes bloquean (**stakean**) ETH como garantía; si hacen trampa, pierden parte. Gasta mucho menos energía.\n♾️ El ETH **no tiene un tope fijo** de unidades.' },
      {
        sort: {
          title: '¿Bitcoin o Ethereum?',
          buckets: ['Bitcoin', 'Ethereum'],
          items: [
            { text: 'Usa prueba de trabajo y tiene halvings', bucket: 0, why: 'Mineros y halving: Bitcoin.' },
            { text: 'Ejecuta contratos inteligentes', bucket: 1, why: 'Esa es la gran idea de Ethereum.' },
            { text: 'Su unidad mínima es el satoshi', bucket: 0, why: 'El satoshi es de Bitcoin.' },
            { text: 'Cambió a prueba de participación en 2022', bucket: 1, why: 'Fue Ethereum, no Bitcoin.' },
            { text: 'Tope de 21 millones de unidades', bucket: 0, why: 'Bitcoin tiene tope; el ETH no.' },
            { text: 'Cobra comisiones en gas', bucket: 1, why: 'El gas es la medida de cómputo de Ethereum.' },
          ],
        },
      },
      {
        ask: 'Ximena manda ETH en hora pico y la comisión le sale más cara que ayer. ¿Por qué?',
        options: [
          { text: 'La red estaba congestionada y el gas subió', ok: true, reply: '¡Correcto! El precio del gas sube cuando muchos quieren usar la red al mismo tiempo.' },
          { text: 'Ethereum cobra más los lunes', reply: 'No depende del día. Sube cuando la red está **congestionada**.' },
          { text: 'Porque ya no hay más ETH', reply: 'El ETH no tiene tope fijo. La comisión subió porque la red estaba **congestionada**.' },
        ],
      },
      {
        calc: {
          question: 'Una operación usa **50,000** unidades de gas a **8 gwei** (1 gwei = 0.000000001 ETH). Con el ETH a **$40,000** (hipotético), ¿cuántos pesos paga de comisión?',
          answer: 16,
          hint: '50,000 × 8 = 400,000 gwei = 0.0004 ETH. Luego × 40,000.',
          why: '400,000 gwei = 0.0004 ETH. × $40,000 = **$16**. Si olvidas pasar de gwei a ETH, sale una comisión absurda.',
        },
      },
      { tip: '**Bitcoin:** dinero escaso con prueba de trabajo. **Ethereum:** una plataforma programable con gas y prueba de participación.' },
    ],
    // ¿Estable significa sin riesgo?
    [
      { text: 'Un cliente le paga a Ximena en **stablecoins** que "valen 1 dólar" 💵. ¿Siempre valdrán eso?' },
      {
        ask: '¿Una stablecoin puede dejar de valer 1 dólar?',
        options: [
          { text: 'Sí, si falla lo que la respalda', ok: true, reply: '¡Exacto! Su estabilidad depende de **cómo se respalda**.' },
          { text: 'No: su nombre lo garantiza', reply: 'El nombre no garantiza nada. Si el respaldo falla, **puede perder su valor**.' },
          { text: 'No: es igual que un depósito en el banco', reply: 'No es un depósito bancario sin riesgo. Depende de que su **respaldo** exista y funcione.' },
        ],
      },
      { text: 'Tres diseños:\n🏦 **Respaldada por reservas:** el emisor guarda dólares, bonos de corto plazo u otros activos por cada moneda. Dependes de que existan y sean líquidas.\n🔐 **Respaldada por cripto:** depositas **más** valor en cripto del que recibes (**sobrecolateralización**). Si el colateral cae mucho, se liquida.\n🤖 **Algorítmica:** reglas automáticas con poco o ningún respaldo.' },
      {
        match: {
          title: 'Une cada término con su idea',
          pairs: [
            ['Reservas', 'El emisor guarda dólares o bonos de corto plazo'],
            ['Sobrecolateralización', 'Depositas más valor en cripto del que recibes'],
            ['Algorítmica', 'Reglas automáticas con poco o ningún respaldo'],
            ['Perder la paridad (depeg)', 'Cuando deja de valer 1 dólar'],
          ],
        },
      },
      { text: 'En 2022 una stablecoin algorítmica muy grande (TerraUSD) colapsó en días y casi perdió todo su valor.\n🧮 **Máximo de stablecoins = colateral ÷ razón mínima**\n🧮 **Razón de colateral = colateral ÷ deuda × 100**' },
      {
        calc: {
          question: 'Un protocolo pide una razón mínima de **150 %**. Ximena deposita ETH por **$15,000** (ejemplo). ¿Cuántas stablecoins puede recibir como máximo?',
          answer: 10000,
          unit: 'stablecoins',
          hint: '15,000 ÷ 1.5.',
          why: '15,000 ÷ 1.5 = **10,000**. Si multiplicas en lugar de dividir, te da 22,500: al revés.',
        },
      },
      {
        sim: {
          title: 'Colateral de $15,000 en ETH, mínimo 150 %',
          inputs: [
            { key: 'd', label: 'Stablecoins que pide', min: 2000, max: 10000, step: 1000, value: 10000 },
            { key: 'c', label: 'Caída del ETH (%)', min: 0, max: 50, step: 5, value: 20 },
          ],
          outputs: [
            { label: 'Colateral después de la caída', calc: (x) => 15000 * (1 - x.c / 100) },
            { label: 'Razón de colateral', calc: (x) => Math.round(((15000 * (1 - x.c / 100)) / x.d) * 1000) / 10, main: true, unit: '%' },
          ],
          goal: {
            text: 'Pide las stablecoins necesarias para que, aunque el ETH caiga **30 % o más**, la razón siga en **150 % o más**.',
            check: (x) => x.c >= 30 && (15000 * (1 - x.c / 100)) / x.d >= 1.5,
            done: 'Mientras más arriba del mínimo estés, más caída aguantas. Pedir el máximo te deja **sin margen de seguridad**.',
          },
        },
      },
      { tip: '**Estable no es lo mismo que sin riesgo.** Antes de usar una stablecoin, pregunta cómo se respalda.' },
    ],
  ],
}
