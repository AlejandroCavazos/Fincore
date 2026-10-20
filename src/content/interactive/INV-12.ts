import type { InteractiveLesson } from './types'

export const intINV12: InteractiveLesson = {
  lessonId: 'INV-12',
  sections: [
    // ¿Cómo se lee una vela?
    [
      { text: 'Beto estudia ingeniería y tiene 21 años 🎧. En redes ve gráficas llenas de "velitas" verdes y rojas y quiere entenderlas.' },
      { text: 'Eso es **análisis técnico**: estudia el **precio y el volumen** en una gráfica para estimar hacia dónde es más probable que se mueva. Parte de una idea: ciertos patrones **se repiten** porque las emociones (miedo, euforia) se repiten.' },
      {
        ask: '¿Qué pregunta se hace el análisis técnico?',
        options: [
          { text: '¿Cómo se están comportando compradores y vendedores?', ok: true, reply: '¡Eso! No pregunta cuánto vale la empresa, sino cómo se mueve la gente en el precio.' },
          { text: '¿Cuánto vale realmente la empresa?', reply: 'Esa es la pregunta del **análisis fundamental**. El técnico mira **cómo se comportan compradores y vendedores**.' },
          { text: '¿Cuánto paga de dividendos?', reply: 'Eso no lo mira el técnico. Se fija en **cómo se comportan compradores y vendedores** en la gráfica.' },
        ],
      },
      { text: 'Cada **vela** resume un periodo con 4 precios: **apertura, máximo, mínimo y cierre**.\n🟩 Cierra arriba de donde abrió: **alcista**.\n🟥 Cierra abajo: **bajista**.\n📏 **Cuerpo** = distancia entre apertura y cierre. **Rango** = máximo − mínimo.' },
      {
        rush: {
          title: '¿Vela alcista o bajista?',
          seconds: 30,
          labels: ['Alcista 🟩', 'Bajista 🟥'],
          items: [
            { text: 'Abre $50, cierra $53', ans: 0 },
            { text: 'Abre $72, cierra $67', ans: 1 },
            { text: 'Abre $120, cierra $118', ans: 1 },
            { text: 'Abre $30, cierra $34', ans: 0 },
            { text: 'Abre $15, cierra $14', ans: 1 },
          ],
        },
      },
      {
        calc: {
          question: 'Una vela: apertura $40, máximo $45, mínimo $38 y cierre $44. ¿Cuánto mide su cuerpo?',
          answer: 4,
          hint: 'Cuerpo = distancia entre cierre y apertura: 44 − 40.',
          why: '44 − 40 = **$4**. Cierra arriba de donde abrió: es alcista. Si usas máximo y mínimo, sacas el rango, no el cuerpo.',
        },
      },
      {
        calc: {
          question: 'Con esa misma vela (máximo $45, mínimo $38), ¿cuál es su rango?',
          answer: 7,
          hint: 'Rango = máximo − mínimo.',
          why: '45 − 38 = **$7**. Las mechas llegan hasta el máximo y el mínimo.',
        },
      },
    ],
    // ¿Hacia dónde va el precio?
    [
      { text: 'Beto nota que una acción **rebotó tres veces** cerca de $80: cada vez que llegaba ahí, volvía a subir 📈.' },
      {
        ask: '¿Qué crees que pasa cerca de $80?',
        options: [
          { text: 'Aparecen compradores que frenan la caída', ok: true, reply: '¡Bien pensado! Ese nivel funciona como un **piso**: se llama **soporte**.' },
          { text: 'La empresa cambia de dueño', reply: 'No necesariamente. Lo que se ve es que ahí **aparecen compradores** y el precio deja de caer: un **soporte**.' },
          { text: 'Nada, es pura casualidad', reply: 'Puede pasar, pero cuando se repite, se lee como un **soporte**: ahí suelen aparecer compradores.' },
        ],
      },
      { text: 'Lo que dibuja el precio:\n🪜 **Tendencia alcista:** máximos y mínimos cada vez más altos.\n⬇️ **Tendencia bajista:** máximos y mínimos cada vez más bajos.\n🧱 **Soporte:** piso donde aparecieron compradores.\n🏠 **Resistencia:** techo donde aparecieron vendedores.' },
      {
        match: {
          title: 'Une cada descripción con su nombre',
          pairs: [
            ['Cada máximo y cada mínimo quedan más altos', 'Tendencia alcista'],
            ['Los máximos y los mínimos bajan cada vez', 'Tendencia bajista'],
            ['Rebota varias veces hacia arriba cerca de $80', 'Soporte'],
            ['Llega a $120 y ahí lo frenan los vendedores', 'Resistencia'],
            ['Se mueve de lado, sin dirección clara', 'Rango o lateral'],
          ],
        },
      },
      { text: 'El **volumen** (cuántos títulos se negociaron) confirma: una subida con mucho volumen muestra más convicción. Y si el precio rompe una resistencia con fuerza, a veces esa resistencia se vuelve el nuevo soporte.' },
      {
        ask: 'Un día la acción cae a $76, por debajo de su soporte de $80, con **volumen alto**. ¿Cómo se lee?',
        options: [
          { text: 'Como una señal de debilidad', ok: true, reply: '¡Exacto! Romper el piso con mucho volumen indica que los vendedores tienen fuerza.' },
          { text: 'Como garantía de que mañana sube', reply: 'Nada lo garantiza. Romper un soporte con volumen alto se lee como **señal de debilidad**.' },
          { text: 'El volumen no importa', reply: 'Sí importa: confirma el movimiento. Aquí se lee como **señal de debilidad**.' },
        ],
      },
      { tip: 'Soporte = piso 🧱, resistencia = techo 🏠. Son niveles donde **antes** reaccionó la gente; no son promesas.' },
    ],
    // Indicadores y cómo limitar pérdidas
    [
      { text: 'En un video, alguien grita: "¡La media cruzó, va a subir seguro!" 📢. Beto quiere saber qué es eso de "la media".' },
      { text: 'La **media móvil simple (SMA)** es el promedio de los últimos N cierres. Suaviza el ruido para ver la tendencia.\n**SMA = suma de los últimos N cierres ÷ N.**\nCuando una media corta cruza hacia arriba a una larga, muchos lo leen como señal alcista, pero **no es certeza**.' },
      {
        calc: {
          question: 'Los últimos 5 cierres de una acción fueron $10, $12, $11, $13 y $14. ¿Cuál es su media móvil de 5 días?',
          answer: 12,
          hint: 'Suma los 5 cierres y divide entre 5.',
          why: '10 + 12 + 11 + 13 + 14 = 60. 60 ÷ 5 = **$12**.',
        },
      },
      { text: 'El **RSI** va de 0 a 100 y compara la fuerza de las subidas con la de las bajadas recientes. Por convención:\n🔥 Arriba de 70: **sobrecompra** (subió muy rápido, podría corregir).\n🧊 Abajo de 30: **sobreventa**.\nEs solo una alerta, no una orden de comprar o vender.' },
      {
        sort: {
          title: '¿Qué zona marca el RSI?',
          buckets: ['Sobrecompra', 'Sobreventa', 'Ninguna'],
          items: [
            { text: 'RSI de 78', bucket: 0, why: 'Arriba de 70: sobrecompra. Podría corregir, pero no es orden de venta.' },
            { text: 'RSI de 25', bucket: 1, why: 'Abajo de 30: sobreventa.' },
            { text: 'RSI de 50', bucket: 2, why: 'Entre 30 y 70: ninguna de las dos.' },
            { text: 'RSI de 85', bucket: 0, why: 'Muy arriba de 70: sobrecompra.' },
            { text: 'RSI de 12', bucket: 1, why: 'Muy abajo de 30: sobreventa.' },
          ],
        },
      },
      {
        sim: {
          title: 'Stop loss: Beto compra acciones a $100',
          inputs: [
            { key: 'p', label: 'Pérdida máxima que acepta (%)', min: 2, max: 15, step: 1, value: 12 },
            { key: 'n', label: 'Número de acciones', min: 50, max: 200, step: 50, value: 150 },
          ],
          outputs: [
            { label: 'Precio del stop', calc: (x) => 100 - x.p },
            { label: 'Pérdida total si se activa', calc: (x) => -x.p * x.n, main: true },
          ],
          goal: {
            text: 'Las señales fallan seguido. Ajusta tu **stop loss** para que, si se activa, no pierdas **más de $500**.',
            check: (x) => x.p * x.n <= 500,
            done: 'El stop loss es una orden para vender si el precio cae a un nivel que definiste antes. Así limitas la pérdida.',
          },
        },
      },
      {
        calc: {
          question: 'Beto compra 50 acciones a $40 y saldrá si caen 10 %. ¿A qué precio pone su stop loss?',
          answer: 36,
          hint: 'Precio de compra × (1 − 0.10): 40 × 0.90.',
          why: '40 × 0.90 = **$36**. Si se activa, pierde unos $4 por acción: 4 × 50 = $200, salvo saltos bruscos de precio.',
        },
      },
    ],
  ],
}
