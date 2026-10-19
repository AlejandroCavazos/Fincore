import type { InteractiveLesson } from './types'

export const intPER01: InteractiveLesson = {
  lessonId: 'PER-01',
  sections: [
    // ¿Cómo se compraba sin dinero?
    [
      { text: 'Yaretzi, de 16 años, hace pulseras 📿. Imagina que vive hace muchos siglos, cuando **no había dinero**. Ella quiere pescado.' },
      {
        ask: 'El pescador no necesita pulseras. ¿Qué pasa?',
        options: [
          { text: 'No hay trato', ok: true, reply: '¡Así es! Sin dinero, cada quien cambia cosa por cosa. Si el otro no quiere lo que tú tienes, no hay trato.' },
          { text: 'El pescador tiene que aceptarlas', reply: 'Nadie lo obliga. Si no quiere pulseras, **no hay trato**: ese es el gran problema de cambiar cosa por cosa.' },
          { text: 'Yaretzi le paga con monedas', reply: 'En esta historia todavía no hay monedas. Solo puede cambiar cosa por cosa, y si él no quiere pulseras, **no hay trato**.' },
        ],
      },
      { text: 'Cambiar una cosa por otra se llama **trueque**. Solo funciona si los dos quieren lo que el otro tiene, **al mismo tiempo**: la **doble coincidencia de necesidades**.' },
      {
        sort: {
          title: '¿Hay trato o no hay trato?',
          buckets: ['Hay trato', 'No hay trato'],
          items: [
            { text: 'Yaretzi quiere maíz y el campesino quiere pulseras', bucket: 0, why: 'Los dos quieren lo que el otro tiene: hay doble coincidencia.' },
            { text: 'Yaretzi quiere sandalias, pero el sandalero solo quiere sal', bucket: 1, why: 'Él no quiere pulseras: falta la doble coincidencia.' },
            { text: 'Yaretzi quiere una gallina y su dueña no necesita nada hoy', bucket: 1, why: 'La dueña no quiere nada a cambio en ese momento: no hay trato.' },
            { text: 'Una tejedora quiere pulseras y Yaretzi quiere una manta', bucket: 0, why: 'Cada una quiere lo que la otra ofrece: hay trato.' },
          ],
        },
      },
      { text: 'Había más problemas: ¿cuántos jitomates vale una gallina? 🐔 No había una medida común, y muchas cosas no se pueden partir ni guardar.' },
      { text: 'La solución: elegir un bien que **todos aceptaran**, el **dinero mercancía**. En Mesoamérica se usaron **semillas de cacao** y **mantas de algodón**.' },
      {
        order: {
          title: 'Arma cómo consigue Yaretzi su pescado',
          steps: ['Vende sus pulseras a quien sí las quiere', 'Le pagan con semillas de cacao', 'Con ese cacao paga el pescado'],
          done: '¡Eso! El cacao sirve de puente: ya no hace falta la doble coincidencia.',
        },
      },
      { tip: '**Trueque:** cosa por cosa. **Doble coincidencia:** los dos deben querer lo del otro. **Dinero mercancía:** un bien con valor propio que todos aceptan.' },
    ],
    // ¿Por qué un billete vale?
    [
      { text: 'Con el tiempo se usaron el oro y la plata, porque duran y se pueden dividir. Luego llegaron las **monedas** 🪙: metal con un sello que garantizaba su peso y pureza.' },
      {
        ask: 'Cargar mucho metal era pesado y riesgoso. ¿Qué crees que apareció después?',
        options: [
          { text: 'Los billetes de papel', ok: true, reply: '¡Sí! Al principio eran papeles que se podían cambiar por metal guardado en otro lugar. China fue de los primeros en usarlos.' },
          { text: 'Las tarjetas y el celular', reply: 'Eso llegó mucho después. Primero aparecieron los **billetes**, papeles que se cambiaban por metal guardado.' },
          { text: 'Se regresó al trueque', reply: 'No hizo falta volver atrás. Aparecieron los **billetes**: papeles fáciles de cargar.' },
        ],
      },
      { text: 'Hoy casi todo el dinero es **fiduciario**: vale porque la gente **confía** en él y la ley obliga a aceptarlo. En México lo emite el **Banco de México (Banxico)**. Y mucho ya es **digital** 📱: vive en cuentas y se mueve con tarjeta o transferencia.' },
      {
        ask: 'Yaretzi tiene un billete de $200. ¿De dónde sale su valor?',
        options: [
          { text: 'Del papel y la tinta', reply: 'El papel vale muy poco. Su valor viene de la **confianza** de la gente y de que **la ley obliga a aceptarlo**.' },
          { text: 'De la confianza y de que la ley obliga a aceptarlo', ok: true, reply: '¡Exacto! Eso es el dinero fiduciario.' },
          { text: 'De que lo cambias por oro en el banco', reply: 'Hoy los billetes no están respaldados por oro. Valen por **confianza** y porque **la ley** obliga a aceptarlos.' },
        ],
      },
      { text: 'Dato curioso: en 1993 México quitó tres ceros a su moneda. **$1,000 antiguos = $1 nuevo peso**. Para convertir, **divide entre 1,000**. El valor no cambió, solo la forma de escribirlo.' },
      {
        calc: {
          question: 'La abuela de Yaretzi guardó billetes antiguos que suman **$80,000**. ¿A cuántos nuevos pesos equivalían?',
          answer: 80,
          hint: 'Divide entre 1,000 (quita tres ceros): 80,000 ÷ 1,000.',
          why: '80,000 ÷ 1,000 = **$80** nuevos pesos. Si multiplicas en lugar de dividir, el número crece, y al pasar a nuevos pesos siempre se hace más chico.',
        },
      },
      {
        match: {
          title: 'Une cada etapa del dinero',
          pairs: [
            ['Trueque', 'Cambias una cosa por otra'],
            ['Dinero mercancía', 'Semillas de cacao o mantas de algodón'],
            ['Moneda', 'Metal con sello de peso y pureza'],
            ['Billete fiduciario', 'Papel que vale por confianza y por ley'],
            ['Dinero digital', 'Saldo en tu cuenta que mueves con el celular'],
          ],
        },
      },
    ],
    // ¿Para qué sirve el dinero?
    [
      { text: 'Hoy Yaretzi vende sus pulseras en el tianguis a **$45**. El dinero le sirve de tres formas:\n🤝 **Medio de cambio:** lo das a cambio de algo.\n📏 **Unidad de cuenta:** todos los precios en pesos, para comparar.\n🐷 **Depósito de valor:** lo guardas hoy y lo usas después.' },
      {
        sort: {
          title: '¿Qué función del dinero usa Yaretzi?',
          buckets: ['Medio de cambio', 'Unidad de cuenta', 'Depósito de valor'],
          items: [
            { text: 'Paga $30 por un agua fresca', bucket: 0, why: 'Da dinero a cambio de algo: medio de cambio.' },
            { text: 'Transfiere $200 a su proveedora de hilos', bucket: 0, why: 'Aunque no haya billetes, paga por algo: el dinero digital también es medio de cambio.' },
            { text: 'Pone una etiqueta de $45 a cada pulsera', bucket: 1, why: 'Expresa el valor en pesos: unidad de cuenta.' },
            { text: 'Compara el precio de dos rollos de hilo', bucket: 1, why: 'Puede comparar porque todo está en la misma medida: unidad de cuenta.' },
            { text: 'Guarda $300 en su alcancía para diciembre', bucket: 2, why: 'Lo guarda para usarlo después: depósito de valor.' },
          ],
        },
      },
      {
        ask: 'En otro puesto, pulseras parecidas cuestan $50. Yaretzi lo ve y deja las suyas en $45. ¿Qué función usó?',
        options: [
          { text: 'Unidad de cuenta', ok: true, reply: '¡Bien! Pudo comparar porque los dos precios están en pesos.' },
          { text: 'Medio de cambio', reply: 'Todavía no paga ni cobra nada. Solo **compara precios en pesos**: unidad de cuenta.' },
          { text: 'Depósito de valor', reply: 'No está guardando dinero. Está **comparando precios en pesos**: unidad de cuenta.' },
        ],
      },
      { text: 'Para cumplir esas funciones, el buen dinero es **aceptado**, **durable**, **divisible**, **portátil**, **homogéneo** (cada peso vale lo mismo) y **difícil de falsificar**.' },
      {
        multi: {
          title: 'Yaretzi y sus amigos inventan un dinero para su escuela. ¿Qué necesita? Marca todo lo que aplica',
          items: [
            { text: 'Que dure y no se eche a perder', ok: true },
            { text: 'Que se pueda partir en cantidades pequeñas', ok: true },
            { text: 'Que todos lo acepten como pago', ok: true },
            { text: 'Que pese mucho, para que nadie lo robe', ok: false },
            { text: 'Que cualquiera lo pueda hacer en su casa', ok: false },
          ],
          why: 'Debe ser durable, divisible, aceptado, portátil y difícil de copiar. Si pesa mucho no es portátil, y si cualquiera lo fabrica, pierde su valor.',
        },
      },
      { tip: 'El dinero es un depósito de valor **imperfecto**: si los precios suben, el mismo billete compra menos. Lo verás en la lección de inflación.' },
    ],
  ],
}
