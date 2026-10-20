import type { InteractiveLesson } from './types'

export const intINV18: InteractiveLesson = {
  lessonId: 'INV-18',
  sections: [
    // ¿Seguir al mercado o ganarle?
    [
      { text: 'Fernanda es enfermera, tiene 30 años y quiere invertir para su retiro 🩺. Su primo le aconseja: "sal cuando haya malas noticias y regresa cuando se calme".' },
      {
        ask: '¿Suele funcionar el consejo del primo?',
        options: [
          { text: 'No: quien sale suele perderse los mejores días', ok: true, reply: '¡Exacto! Los mejores días suelen llegar cerca de los peores. Quien sale tiende a regresar más caro y paga comisiones extra.' },
          { text: 'Sí, siempre mejora el rendimiento', reply: 'Nadie adivina siempre cuándo entrar y salir. Quien lo intenta suele **perderse los mejores días**.' },
          { text: 'Sí, si ve las noticias diario', reply: 'Ver noticias no permite adivinar el mercado. Suele **costar**: te pierdes los mejores días.' },
        ],
      },
      { text: '**Comprar y mantener**: invertir en activos diversificados y conservarlos por años, dejando que el **interés compuesto** trabaje (ganas sobre lo que ya ganaste). El gran enemigo es **vender por miedo** en el peor momento.' },
      { text: '🧺 **Pasiva:** compra un índice completo (por ejemplo, con un **ETF**, un fondo que cotiza en bolsa y replica el mercado) y acepta su rendimiento.\n🎯 **Activa:** intenta superar al índice eligiendo acciones o el momento de entrar y salir.\n📚 Muchos estudios muestran que, después de comisiones, la mayoría de los fondos activos no superan a su índice de forma constante a largo plazo.' },
      {
        sort: {
          title: '¿Pasiva o activa?',
          buckets: ['Pasiva', 'Activa'],
          items: [
            { text: 'Replicar un índice completo con bajo costo', bucket: 0, why: 'Copia al mercado: pasiva.' },
            { text: 'Elegir pocas acciones que un analista cree ganadoras', bucket: 1, why: 'Intenta superar al mercado: activa.' },
            { text: 'Entrar y salir buscando el mejor momento', bucket: 1, why: 'Intentar adivinar el mercado es gestión activa.' },
            { text: 'Comprar un ETF del mercado y no intentar superarlo', bucket: 0, why: 'Acepta el rendimiento del mercado: pasiva.' },
          ],
        },
      },
      { text: 'Las **comisiones** se componen igual que el rendimiento.\n🧮 **Valor final = monto × (1 + rendimiento neto)^años**\nEl "^años" quiere decir multiplicar el factor por sí mismo tantas veces como años.' },
      {
        sim: {
          title: '$100,000 con rendimiento de ejemplo de 8 % al año',
          inputs: [
            { key: 'n', label: 'Años invertidos', min: 5, max: 30, step: 5, value: 10 },
            { key: 'c', label: 'Comisión anual (%)', min: 0, max: 2, step: 0.5, value: 2 },
          ],
          outputs: [
            { label: 'Sin comisión', calc: (x) => 100000 * Math.pow(1.08, x.n) },
            { label: 'Con comisión', calc: (x) => 100000 * Math.pow(1.08 - x.c / 100, x.n) },
            { label: 'Lo que te cuesta la comisión', calc: (x) => 100000 * (Math.pow(1.08, x.n) - Math.pow(1.08 - x.c / 100, x.n)), main: true },
          ],
          goal: {
            text: 'Encuentra un caso en que la comisión le cueste a Fernanda **más de $100,000**.',
            check: (x) => 100000 * (Math.pow(1.08, x.n) - Math.pow(1.08 - x.c / 100, x.n)) > 100000,
            done: 'No solo pierdes la comisión: pierdes lo que ese dinero habría ganado. (Rendimientos de ejemplo, no garantizados).',
          },
        },
      },
      {
        calc: {
          question: '$50,000 por 15 años: al **8 %** llega a **$158,608** y al **6 %** (por comisiones) a **$119,828**. ¿Cuánto le costaron las comisiones?',
          answer: 38780,
          hint: '158,608 − 119,828.',
          why: '**$38,780**. Si lo calculas como 2 % × 15 años × 50,000 = $15,000, lo subestimas porque no compones la comisión.',
        },
      },
    ],
    // ¿Invertir lo mismo cada mes?
    [
      { text: 'Fernanda puede apartar **$1,200 al mes** de su sueldo. ¿Espera el "momento perfecto" o invierte cada mes?' },
      { text: '**Costo promedio**: invertir **la misma cantidad cada mes**, sin importar el precio.\n⬇️ Precio bajo: compras **más** unidades.\n⬆️ Precio alto: compras **menos**.\n🧮 Unidades del mes = aportación ÷ precio' },
      {
        calc: {
          question: 'En el mes 1, cada unidad del ETF cuesta **$60**. ¿Cuántas unidades compra Fernanda con $1,200?',
          answer: 20,
          unit: 'unidades',
          hint: '1,200 ÷ 60.',
          why: '1,200 ÷ 60 = **20 unidades**.',
        },
      },
      {
        calc: {
          question: 'En el mes 2 cuesta **$40** y en el mes 3, **$48**. ¿Cuántas unidades junta en total en los tres meses?',
          answer: 75,
          unit: 'unidades',
          hint: '1,200 ÷ 40 = 30; 1,200 ÷ 48 = 25. Suma 20 + 30 + 25.',
          why: '20 + 30 + 25 = **75 unidades**. Cuando estuvo barato, compró más.',
        },
      },
      {
        calc: {
          question: 'Invirtió $3,600 en total. **Costo promedio = total invertido ÷ unidades**. ¿Cuál es su costo promedio por unidad?',
          answer: 48,
          hint: '3,600 ÷ 75.',
          why: '3,600 ÷ 75 = **$48** por unidad.',
        },
      },
      {
        ask: 'El precio promedio de los tres meses fue (60 + 40 + 48) ÷ 3 ≈ $49.33. ¿Por qué su costo ($48) quedó abajo?',
        options: [
          { text: 'Compró más unidades cuando estaban baratas', ok: true, reply: '¡Exacto! Por eso el costo promedio queda debajo del precio promedio.' },
          { text: 'Por pura suerte', reply: 'No es suerte: con la misma cantidad, **compras más unidades cuando el precio baja**.' },
          { text: 'Porque el costo promedio es el promedio de los precios', reply: 'Ese es el error común. El costo promedio es **total invertido ÷ unidades**, y queda abajo porque compraste más barato.' },
        ],
      },
      { tip: 'Si ya tienes una suma grande, invertirla de una vez suele rendir más en promedio; el costo promedio reduce el arrepentimiento si el mercado cae justo después. Para quien ahorra de su sueldo, aportar cada mes es lo natural.' },
    ],
    // ¿Cómo armo mi plan?
    [
      { text: 'Fernanda tiene tres metas 🎯: **enganche en 7 años**, **universidad de su hija en 15** y **retiro en 30**.' },
      {
        ask: '¿Debería invertir para las tres con el mismo nivel de riesgo?',
        options: [
          { text: 'No: cada meta tiene su fecha y su riesgo adecuado', ok: true, reply: '¡Bien! Una meta lejana aguanta más riesgo que una cercana.' },
          { text: 'Sí: todo en lo que más rinda', reply: 'El enganche llega en 7 años; una caída fuerte cerca de esa fecha le dolería. **Cada meta tiene su horizonte y su riesgo**.' },
          { text: 'Sí: todo en lo más seguro', reply: 'Para el retiro en 30 años tiene tiempo de recuperarse de caídas. **Cada meta tiene su horizonte y su riesgo**.' },
        ],
      },
      { text: 'La estrategia de **ciclo de vida** (glide path) baja poco a poco la parte en **renta variable** (acciones) conforme se acerca la meta. De joven hay tiempo para recuperarse de caídas; cerca de la meta, una caída fuerte no tendría tiempo de revertirse. En México, las Afores ya aplican este enfoque por edad en sus fondos generacionales.' },
      {
        sim: {
          title: 'Ciclo de vida de ejemplo para el retiro de Fernanda',
          inputs: [{ key: 'e', label: 'Edad de Fernanda', min: 30, max: 60, step: 5, value: 30 }],
          outputs: [
            { label: 'Renta variable (acciones)', calc: (x) => 80 - ((x.e - 30) / 5) * 10, main: true, unit: '%' },
            { label: 'Instrumentos más estables', calc: (x) => 20 + ((x.e - 30) / 5) * 10, unit: '%' },
          ],
          goal: {
            text: 'Empieza con 80 % en acciones y baja unos 10 puntos cada cinco años. Avanza hasta que la renta variable sea **30 % o menos**.',
            check: (x) => 80 - ((x.e - 30) / 5) * 10 <= 30,
            done: 'A los 60 tendría cerca de **20 %**: así protege lo acumulado cuando ya no hay tiempo de recuperarse.',
          },
        },
      },
      {
        ask: 'Don Roberto, papá de Fernanda, tiene 58 años y se retira a los 63. Tiene **85 %** de su ahorro en acciones porque "subieron mucho". ¿Qué le conviene según el ciclo de vida?',
        options: [
          { text: 'Bajar poco a poco las acciones y subir instrumentos más estables', ok: true, reply: '¡Correcto! Con cinco años, una caída fuerte no tendría tiempo de recuperarse.' },
          { text: 'Subir a 100 % en acciones para aprovechar la racha', reply: 'Decidir por lo que subió hace poco es el error común. Cerca del retiro conviene **reducir poco a poco** la renta variable.' },
          { text: 'Vender todo y quedarse en efectivo sin rendimiento', reply: 'Pasar todo a efectivo pierde contra la inflación. El ciclo de vida **reduce gradualmente**, sin irse a cero.' },
        ],
      },
      { text: 'Estilos que se pueden combinar:\n💎 **Valor:** empresas baratas frente a lo que vale su negocio.\n🚀 **Crecimiento:** empresas que crecen rápido.\n💰 **Dividendos:** empresas que reparten utilidades con regularidad.' },
      {
        match: {
          title: 'Une cada estilo con su idea',
          pairs: [
            ['Valor', 'Cotiza por debajo de lo que vale su negocio'],
            ['Crecimiento', 'Sus ventas crecen más rápido que la economía'],
            ['Dividendos', 'Reparte utilidades cada año'],
            ['Indexada (pasiva)', 'Replica todo el mercado sin intentar superarlo'],
          ],
        },
      },
      {
        order: {
          title: 'Arma el plan de Fernanda',
          steps: ['Define metas con monto y fecha', 'Aporta en automático cada mes', 'Elige vehículos diversificados y de bajo costo', 'Reduce el riesgo conforme se acerca cada meta', 'Revisa una o dos veces al año, no cada día'],
          done: '¡Plan listo! Escrito, para no decidir con miedo cuando el mercado se ponga nervioso.',
        },
      },
    ],
  ],
}
