import type { InteractiveLesson } from './types'

export const intL101: InteractiveLesson = {
  lessonId: 'L1-01',
  sections: [
    // ¿Para qué sirve la contabilidad?
    [
      { text: 'Doña Rosa tiene una tiendita 🏪. Siempre hay clientes, pero a fin de mes **no sabe si ganó o perdió**.' },
      {
        ask: '¿Qué crees que le falta?',
        options: [
          { text: 'Vender más', reply: 'Ya vende bastante. Aunque vendiera el doble, seguiría sin saber si gana. Le falta **anotar lo que entra y sale**.' },
          { text: 'Anotar lo que entra y lo que sale', ok: true, reply: '¡Eso! Sin anotar, nadie sabe cómo va el negocio.' },
          { text: 'Abrir más tarde', reply: 'Eso no le dice si gana o pierde. Le falta **anotar lo que entra y sale**.' },
        ],
      },
      { text: 'Eso es la **contabilidad**: anotar, ordenar y resumir en dinero lo que pasa en un negocio.' },
      {
        text: 'Rosa lo hace en 4 pasos con su libreta:\n📝 **Registra:** anota cada venta y cada pago.\n🗂️ **Clasifica:** junta lo parecido.\n➕ **Resume:** saca el total del mes.\n📣 **Informa:** le enseña el resultado a quien decide.',
      },
      {
        match: {
          title: 'Une cada paso con lo que hizo Rosa',
          pairs: [
            ['Registrar', 'Anota: "vendí 3 refrescos"'],
            ['Clasificar', 'Junta todas las ventas en una lista'],
            ['Resumir', 'Suma: "este mes vendí $28,000"'],
            ['Informar', 'Le enseña el total a su hijo para decidir'],
          ],
        },
      },
      {
        ask: 'Con sus números en orden, ¿qué puede saber Rosa?',
        options: [
          { text: 'Si ganó o perdió en el mes', ok: true, reply: '¡Exacto! Y con eso decide si sube precios o si le alcanza para surtir.' },
          { text: 'Cuánto venderá el próximo año, seguro', reply: 'La contabilidad cuenta lo que **ya pasó**. Ayuda a planear, pero no adivina el futuro.' },
          { text: 'Cuánto le cobrará el SAT el próximo año, exacto', reply: 'Eso todavía no pasa, así que nadie lo sabe exacto. Lo que sí sabe es **si ganó o perdió**.' },
        ],
      },
      {
        order: {
          title: 'Arma la definición',
          steps: ['La contabilidad es', 'un sistema para anotar, ordenar y resumir', 'en dinero', 'lo que pasa en un negocio'],
          done: '¡La armaste tú! Ya puedes explicarla con tus palabras.',
        },
      },
    ],
    // El corte de caja
    [
      { text: 'Al cerrar, Rosa cuenta el dinero de la caja 💵. Pero ¿cómo sabe si **falta**? Primero calcula cuánto **debería** haber.' },
      { text: '**Debería haber** = lo que tenía al abrir + lo que entró − lo que salió.' },
      {
        calc: {
          question: 'Rosa abrió con $500, vendió $2,300 y pagó $1,050 al proveedor. ¿Cuánto debería haber en la caja?',
          answer: 1750,
          hint: 'Lo que tenía + lo que entró − lo que salió: 500 + 2,300 − 1,050.',
          why: '500 + 2,300 = 2,800. Menos 1,050 de lo que pagó = **$1,750**. Si olvidas los $500 del inicio, te da 1,250.',
        },
      },
      {
        ask: 'Rosa cuenta la caja y hay **$1,700**. ¿Qué pasó?',
        options: [
          { text: 'Faltan $50', ok: true, reply: '¡Bien! Debería haber $1,750 y hay $1,700: faltan $50. Ahora Rosa sabe que debe revisar.' },
          { text: 'Sobran $50', reply: 'Hay **menos** de lo que debería ($1,700 contra $1,750), así que **faltan** $50.' },
          { text: 'Todo cuadra', reply: 'No cuadra: debería haber $1,750 y hay $1,700. **Faltan** $50.' },
        ],
      },
      {
        sort: {
          title: '¿Falta, sobra o cuadra?',
          buckets: ['Falta', 'Sobra', 'Cuadra'],
          items: [
            { text: 'Debería haber $900 y hay $900', bucket: 2, why: 'Es lo mismo: todo cuadra.' },
            { text: 'Debería haber $1,200 y hay $1,150', bucket: 0, why: 'Hay $50 menos de lo que debería: falta.' },
            { text: 'Debería haber $600 y hay $650', bucket: 1, why: 'Hay $50 más de lo que debería: sobra. También hay que revisar por qué.' },
            { text: 'Debería haber $2,000 y hay $1,990', bucket: 0, why: 'Hay $10 menos: falta.' },
          ],
        },
      },
      { tip: 'Eso es **controlar**: los números te avisan cuando algo no cuadra. La contabilidad también sirve para **cumplir**, por ejemplo con los impuestos.' },
    ],
    // ¿Quién mira tus números?
    [
      { text: 'Los números de Rosa no solo los ve ella. Hay gente **dentro** del negocio y gente **fuera** que los necesita.' },
      {
        ask: 'Rosa pide un préstamo de $50,000. ¿Quién va a revisar sus números?',
        options: [
          { text: 'El banco', ok: true, reply: '¡Sí! El banco quiere saber si Rosa podrá pagarle.' },
          { text: 'Sus clientes', reply: 'Los clientes compran, no prestan. Quien revisa es **el banco**, para ver si le podrá pagar.' },
          { text: 'Nadie, el banco presta sin ver', reply: 'Ningún banco presta a ciegas. **El banco** revisa los números antes.' },
        ],
      },
      {
        sort: {
          title: '¿Está dentro o fuera?',
          buckets: ['Dentro (interno)', 'Fuera (externo)'],
          items: [
            { text: 'Doña Rosa, la dueña', bucket: 0, why: 'Ella dirige la tiendita desde dentro.' },
            { text: 'El banco que le prestaría', bucket: 1, why: 'Está fuera y revisa para decidir si presta.' },
            { text: 'Su encargado de compras', bucket: 0, why: 'Trabaja dentro y decide qué surtir.' },
            { text: 'El SAT', bucket: 1, why: 'Revisa desde fuera que se paguen bien los impuestos.' },
            { text: 'Un inversionista que quiere entrarle al negocio', bucket: 1, why: 'Todavía está fuera: revisa para decidir si pone su dinero.' },
          ],
        },
      },
      { tip: '**Dentro:** los que dirigen el negocio. **Fuera:** los que deciden desde afuera (bancos, proveedores, inversionistas, SAT).' },
      {
        ask: 'El proveedor de refrescos le fía a Rosa. ¿Para qué querría ver sus números?',
        options: [
          { text: 'Para saber si le podrá pagar', ok: true, reply: '¡Exacto! Antes de fiar más, quiere saber si Rosa le pagará.' },
          { text: 'Para cobrarle impuestos', reply: 'Eso le toca al SAT. El proveedor quiere saber **si le podrá pagar**.' },
          { text: 'Para decirle qué vender', reply: 'Eso lo decide Rosa. Al proveedor le importa **si le podrá pagar**.' },
        ],
      },
    ],
    // ¿Qué tipos de contabilidad hay?
    [
      { text: 'La contabilidad tiene "especialidades", como los doctores 🩺. Se ordenan de dos formas: **para qué** sirve y **quién** la lleva.' },
      {
        match: {
          title: '¿Para qué sirve? Une cada tipo',
          pairs: [
            ['Financiera', 'Reportes con reglas comunes (NIF) para bancos e inversionistas'],
            ['Administrativa', 'Saber qué producto deja más ganancia'],
            ['Fiscal', 'Calcular y pagar bien los impuestos'],
          ],
        },
      },
      {
        ask: 'Rosa quiere saber si le conviene más vender tortas o quesadillas. ¿Qué contabilidad le ayuda?',
        options: [
          { text: 'Administrativa', ok: true, reply: '¡Exacto! Es información a la medida para decidir **dentro** del negocio.' },
          { text: 'Fiscal', reply: 'La fiscal es para impuestos. Para decidir qué producto conviene, se usa la **administrativa**.' },
          { text: 'Financiera', reply: 'La financiera es para reportes hacia fuera. Para decidir qué vender, se usa la **administrativa**.' },
        ],
      },
      {
        sort: {
          title: '¿Quién la lleva?',
          buckets: ['Privada', 'Gubernamental', 'Sin fines de lucro'],
          items: [
            { text: 'Una tortillería', bucket: 0, why: 'Es un negocio privado: busca ganar dinero.' },
            { text: 'El municipio que cobra el predial', bucket: 1, why: 'Es gobierno: lleva contabilidad gubernamental.' },
            { text: 'Una fundación que da becas', bucket: 2, why: 'No busca ganar dinero, sino ayudar.' },
            { text: 'Una papelería', bucket: 0, why: 'Es un negocio privado.' },
            { text: 'El gobierno del estado', bucket: 1, why: 'Es gobierno: contabilidad gubernamental.' },
            { text: 'Una asociación que rescata perritos', bucket: 2, why: 'Su meta es ayudar, no ganar: sin fines de lucro.' },
          ],
        },
      },
      { tip: '**¿Para qué?** Financiera, administrativa y fiscal. **¿Quién la lleva?** Empresas privadas, gobierno u organizaciones sin fines de lucro.' },
    ],
  ],
}
