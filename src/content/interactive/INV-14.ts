import type { InteractiveLesson } from './types'

export const intINV14: InteractiveLesson = {
  lessonId: 'INV-14',
  sections: [
    // ¿Dónde vive tu cripto?
    [
      { text: 'Diego tiene 22 años y trabaja en una cafetería ☕. Ve muchos videos de cripto. Antes de poner un peso, quiere entender **qué es** y **cómo se guarda**.' },
      { text: 'Un **criptoactivo** es un registro de valor digital en una **blockchain**: un libro de cuentas compartido por miles de computadoras. No lo emite un banco: las reglas están en el software y se protegen con **criptografía** (matemáticas para cifrar y firmar).' },
      { text: 'Para usarlo necesitas una **billetera** (wallet) con dos llaves:\n🔓 **Clave pública:** como tu CLABE. La compartes para recibir.\n🔑 **Clave privada:** como el NIP y la firma juntos. Quien la tiene mueve tus fondos. Si la pierdes, **nadie la recupera**.' },
      {
        ask: 'Alguien de "soporte" le escribe a Diego y le pide su **frase de recuperación** para "verificar su cuenta". ¿Qué hace?',
        options: [
          { text: 'No la da: con ella cualquiera mueve sus fondos', ok: true, reply: '¡Bien! Nadie legítimo te pide tu clave privada ni tu frase de recuperación.' },
          { text: 'La da, porque es soporte técnico', reply: 'Con esa frase cualquiera puede vaciar su billetera. **Nadie legítimo** la pide.' },
          { text: 'Le da solo la mitad', reply: 'Ni la mitad: es como dar parte de tu NIP. La frase **no se comparte con nadie**.' },
        ],
      },
      { text: 'Hay dos formas de custodia:\n🏢 **Plataforma (exchange):** la empresa guarda tus claves. Es cómodo, pero dependes de que no quiebre ni la hackeen.\n🧳 **Autocustodia:** tú guardas la clave (por ejemplo, en una billetera física). No dependes de nadie, pero un descuido es irreversible.' },
      {
        sort: {
          title: '¿Plataforma o autocustodia?',
          buckets: ['Plataforma', 'Autocustodia'],
          items: [
            { text: 'La empresa guarda tus claves', bucket: 0, why: 'Así funciona una plataforma de intercambio.' },
            { text: 'Si la empresa congela retiros, tienes que esperar', bucket: 0, why: 'Dependes de que la plataforma cumpla.' },
            { text: 'Si pierdes tu frase de recuperación, pierdes todo', bucket: 1, why: 'En autocustodia nadie te la puede recuperar.' },
            { text: 'Guardas la clave en una billetera física', bucket: 1, why: 'Tú tienes la clave: autocustodia.' },
            { text: 'Dependes de que no la hackeen ni quiebre', bucket: 0, why: 'Ese riesgo es de la plataforma que guarda tus claves.' },
          ],
        },
      },
      {
        ask: 'Iván, amigo de Diego, dejó todo su cripto en una plataforma. Un día suspende los retiros por problemas financieros. ¿Qué riesgo le tocó?',
        options: [
          { text: 'De custodia o contraparte: dependía de que la plataforma cumpliera', ok: true, reply: '¡Exacto! La plataforma controlaba sus claves; si falla, Iván depende de ella.' },
          { text: 'Perder su clave privada', reply: 'Eso pasa en autocustodia. Aquí la plataforma guardaba las claves: es riesgo de **custodia o contraparte**.' },
          { text: 'Ninguno: la blockchain garantiza que siempre puede retirar', reply: 'La blockchain no protege contra los problemas de un intermediario. Es riesgo de **custodia o contraparte**.' },
        ],
      },
    ],
    // ¿Todo lo digital es cripto?
    [
      {
        ask: 'Un banco central emite pesos digitales. ¿Eso es cripto?',
        options: [
          { text: 'No: es dinero oficial en forma digital', ok: true, reply: '¡Bien! Se llama **CBDC** (moneda digital de banco central) y **no es cripto**.' },
          { text: 'Sí: todo dinero digital es cripto', reply: 'No todo lo digital es cripto. Si lo emite un banco central, es **dinero oficial digital** (CBDC).' },
          { text: 'Sí, porque se usa por internet', reply: 'Usar internet no lo vuelve cripto. Lo emite un banco central: es una **CBDC**, dinero oficial.' },
        ],
      },
      { text: 'No todo lo digital es igual:\n🪙 **Criptomoneda nativa:** la moneda propia de su red (como bitcoin o ether).\n🎟️ **Token:** se crea sobre otra red y representa algo: un acceso, un voto o un derecho.\n💵 **Stablecoin:** busca valer siempre lo mismo que una moneda, como el dólar.\n🖼️ **NFT:** único, como un boleto con asiento numerado.' },
      {
        match: {
          title: 'Une cada tipo con su ejemplo',
          pairs: [
            ['Criptomoneda nativa', 'La moneda propia de una red, que paga a quienes validan bloques'],
            ['Stablecoin', 'Un token que busca valer siempre 1 dólar'],
            ['NFT', 'Un boleto digital único con asiento numerado'],
            ['CBDC', 'Pesos digitales emitidos por un banco central'],
            ['Token', 'Un acceso a un servicio creado sobre otra red'],
          ],
        },
      },
      { text: 'En México, la **Ley Fintech** los llama **activos virtuales** y aclara que **no son moneda de curso legal**: nadie está obligado a aceptarlos como pago, a diferencia del peso.' },
      {
        ask: 'Diego quiere pagar sus tacos con cripto 🌮 y el taquero no acepta. ¿Puede negarse?',
        options: [
          { text: 'Sí: no es moneda de curso legal', ok: true, reply: '¡Correcto! Puede aceptarlo si quiere, pero **no está obligado**. La moneda de curso legal es el peso.' },
          { text: 'No: el cripto es moneda de curso legal', reply: 'En México los criptoactivos son **activos virtuales**, no moneda de curso legal. El taquero puede negarse.' },
          { text: 'No, si es bitcoin', reply: 'Ningún criptoactivo es moneda de curso legal en México. El taquero **puede negarse**.' },
        ],
      },
      { tip: 'Que algo sea legal de **tener** no lo hace moneda de **curso legal**. Y la CBDC es dinero oficial: no es cripto.' },
    ],
    // ¿Cuánto arriesgar en cripto?
    [
      { text: 'Diego ya tiene **$40,000** invertidos (ejemplo). Un video le dice que el cripto "solo sube" 🚀.' },
      {
        ask: '¿Por qué el precio de la mayoría de los criptoactivos se mueve tanto?',
        options: [
          { text: 'No generan flujos: su precio depende de cuánta gente los quiera', ok: true, reply: '¡Eso! Sin dividendos ni intereses, el precio depende de la demanda. Por eso son muy **volátiles**.' },
          { text: 'Porque un banco central fija su precio', reply: 'Ningún banco central los emite. Su precio depende de **cuánta gente los quiera** usar o comprar.' },
          { text: 'No se mueven: solo suben', reply: 'Caídas de **más de la mitad** de su valor han ocurrido varias veces en su historia.' },
        ],
      },
      { text: 'Además hay **fraudes** frecuentes: rendimientos fijos altísimos, pirámides que pagan con el dinero de los nuevos, proyectos que desaparecen con los fondos y perfiles falsos que piden tus claves.' },
      {
        multi: {
          title: 'A Diego le ofrecen la plataforma "FuturoMax". Marca las señales de alerta',
          items: [
            { text: 'Rendimiento garantizado de 15 % mensual', ok: true },
            { text: 'Te pide tu frase de recuperación para activar tu cuenta', ok: true },
            { text: 'Te pagan bonos por cada persona que invites', ok: true },
            { text: 'Te advierte que el precio puede bajar y puedes perder', ok: false },
            { text: 'Te presionan a depositar hoy porque "la oferta se acaba"', ok: true },
          ],
          why: 'Rendimiento garantizado altísimo, pedir tu frase, bonos por reclutar y presión de tiempo son señales clásicas de fraude o pirámide. Advertir que puedes perder es lo que haría una plataforma seria.',
        },
      },
      { text: 'Tu mejor herramienta: el **tamaño de la posición**. Pon solo un porcentaje pequeño que podrías perder sin cambiar tus planes.\n🧮 Monto en cripto = portafolio × peso\n📉 Pérdida = monto × caída\n📊 Efecto en todo el portafolio = peso × caída' },
      {
        calc: {
          question: 'Diego pone **5 %** de sus $40,000 en cripto. ¿Cuántos pesos son?',
          answer: 2000,
          hint: '40,000 × 0.05.',
          why: '40,000 × 5 % = **$2,000**.',
        },
      },
      {
        calc: {
          question: 'Luego el cripto cae **60 %** y lo demás no cambia. ¿Cuánto baja **todo** su portafolio, en porcentaje?',
          answer: 3,
          unit: '%',
          hint: 'Pérdida: 2,000 × 0.60 = 1,200. Luego 1,200 ÷ 40,000 × 100. O directo: 5 % × 60 %.',
          why: '1,200 ÷ 40,000 = 0.03 → **3 %**, no 60 %. El peso pequeño limita el daño.',
        },
      },
      {
        sim: {
          title: '¿Cuánto le pega una caída a Diego?',
          inputs: [
            { key: 'w', label: 'Peso en cripto (% del portafolio)', min: 1, max: 30, step: 1, value: 20 },
            { key: 'c', label: 'Caída del cripto (%)', min: 10, max: 80, step: 10, value: 60 },
          ],
          outputs: [
            { label: 'Pérdida en pesos', calc: (x) => 40000 * (x.w / 100) * (x.c / 100) },
            { label: 'Baja de todo el portafolio', calc: (x) => Math.round(x.w * x.c) / 100, main: true, unit: '%' },
          ],
          goal: {
            text: 'Ajusta el peso para que, aunque el cripto caiga **60 % o más**, Diego no pierda más de **3 %** del total.',
            check: (x) => x.c >= 60 && (x.w * x.c) / 100 <= 3,
            done: 'Al revés también sirve: si no quieres perder más de 3 % con una caída de 60 %, el peso máximo es 3 % ÷ 60 % = **5 %**.',
          },
        },
      },
    ],
  ],
}
