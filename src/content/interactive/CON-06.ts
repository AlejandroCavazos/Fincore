import type { InteractiveLesson } from './types'

export const intCON06: InteractiveLesson = {
  lessonId: 'CON-06',
  sections: [
    // Un idioma contable mundial
    [
      { text: 'Celulares Luna 📱 es una cadena mexicana que quiere dinero de inversionistas en Europa. Ellos tienen que **entender sus números**.' },
      {
        ask: '¿Qué necesita Celulares Luna para que la entiendan?',
        options: [
          { text: 'Normas que se lean igual en muchos países', ok: true, reply: '¡Eso! Un mismo "idioma contable" para todos.' },
          { text: 'Solo traducir sus reportes al inglés', reply: 'Traducir no basta: si las reglas son distintas, los números no se comparan. Necesita **normas comunes** a muchos países.' },
          { text: 'Que el SAT firme sus reportes', reply: 'El SAT no hace eso. Lo que necesita son **normas comunes** a muchos países.' },
        ],
      },
      { text: 'Esas normas son las **NIIF** (en inglés **IFRS**). Las emite el **IASB**, que forma parte de la **Fundación IFRS**. Las más antiguas se llaman **NIC** y siguen vigentes si no se han sustituido.' },
      {
        match: {
          title: 'Las siglas clave',
          pairs: [
            ['IASB', 'Consejo que emite las NIIF'],
            ['CINIF', 'Organismo que emite las NIF mexicanas'],
            ['NIC (IAS)', 'Las normas internacionales más antiguas'],
            ['CNBV', 'Comisión que pide NIIF a las empresas que cotizan en Bolsa'],
          ],
        },
      },
      { text: 'En México, en general, las empresas que **cotizan en la Bolsa** usan NIIF. Las privadas **pequeñas y medianas** suelen usar las **NIF**.' },
      {
        rush: {
          title: '¿NIIF o NIF?',
          seconds: 40,
          labels: ['NIIF', 'NIF'],
          items: [
            { text: 'Una cadena de autoservicio que cotiza en bolsa', ans: 0 },
            { text: 'La panadería de tu colonia con contabilidad formal', ans: 1 },
            { text: 'Las emite el IASB', ans: 0 },
            { text: 'Las emite el CINIF', ans: 1 },
            { text: 'En inglés se llaman IFRS', ans: 0 },
            { text: 'Se organizan en series A, B, C, D y E', ans: 1 },
            { text: 'Incluyen la NIC 2', ans: 0 },
            { text: 'Un taller mecánico familiar mediano', ans: 1 },
          ],
        },
      },
      {
        ask: 'Una tlapalería pequeña, ¿está obligada a usar NIIF?',
        options: [
          { text: 'No, normalmente usa las NIF mexicanas', ok: true, reply: '¡Correcto! Las NIIF se piden, en general, a las que **cotizan en Bolsa**.' },
          { text: 'Sí, todas las empresas de México', reply: 'No todas. En general se piden a las que **cotizan en Bolsa**; las pequeñas suelen usar **NIF**.' },
          { text: 'Sí, si vende en pesos', reply: 'La moneda no decide eso. Las pequeñas suelen usar **NIF**; las que cotizan en Bolsa, NIIF.' },
        ],
      },
    ],
    // Reglas con criterio, no recetas
    [
      { text: 'A Celulares Luna le quedaron celulares del modelo anterior. Ya nadie los quiere al precio de antes. ¿En cuánto los presenta?' },
      { text: 'Las NIIF se basan en **principios**, no en recetas: piden entender el fondo (la **sustancia**) de cada operación y usar juicio. Por eso las notas explican mucho.' },
      {
        match: {
          title: 'Cada norma y su tema',
          pairs: [
            ['NIIF 15', 'Ingresos de contratos con clientes'],
            ['NIIF 16', 'Arrendamientos (rentas de largo plazo)'],
            ['NIIF 9', 'Instrumentos financieros'],
            ['NIC 2', 'Inventarios'],
            ['NIC 16', 'Propiedades, planta y equipo'],
          ],
        },
      },
      {
        sort: {
          title: '¿Qué norma aplica?',
          buckets: ['NIIF 15: ingresos', 'NIIF 16: arrendamientos', 'NIC 2: inventarios'],
          items: [
            { text: 'Celulares Luna decide cuándo reconocer el ingreso de un plan de datos anual', bucket: 0, why: 'Es un ingreso de un contrato con clientes: NIIF 15.' },
            { text: 'Renta su bodega por 6 años', bucket: 1, why: 'Una renta de largo plazo: NIIF 16.' },
            { text: 'Compara el costo de sus celulares viejos con lo que espera recuperar', bucket: 2, why: 'Valuar inventario: NIC 2.' },
            { text: 'Elige entre PEPS y costo promedio', bucket: 2, why: 'Métodos de inventario: NIC 2.' },
            { text: 'Renta camionetas de reparto por 4 años', bucket: 1, why: 'Otra renta de largo plazo: NIIF 16.' },
            { text: 'Vende un celular con instalación de apps incluida y reparte el precio', bucket: 0, why: 'Repartir el precio entre promesas: NIIF 15.' },
          ],
        },
      },
      { text: 'Según la **NIC 2**, el inventario va al **menor** entre su costo y su **VNR** (valor neto de realización):\n💰 VNR = precio al que esperas venderlo − lo que cuesta venderlo.\n📉 Si el VNR es menor que el costo, la diferencia es una **baja de valor**.' },
      {
        sim: {
          title: 'Un celular viejo que costó $800',
          inputs: [
            { key: 'p', label: 'Precio al que esperas venderlo', min: 600, max: 1200, step: 50, value: 1000 },
            { key: 'g', label: 'Costos para venderlo (comisión, envío)', min: 0, max: 200, step: 25, value: 50 },
          ],
          outputs: [
            { label: 'VNR', calc: (x) => x.p - x.g },
            { label: 'Valor en el balance', calc: (x) => Math.min(800, x.p - x.g), main: true },
            { label: 'Baja de valor', calc: (x) => Math.max(0, 800 - (x.p - x.g)) },
          ],
          goal: {
            text: 'El modelo pasó de moda. Ajusta precio y costos hasta tener una **baja de valor de $100 o más**.',
            check: (x) => 800 - (x.p - x.g) >= 100,
            done: 'Si el VNR queda **debajo del costo**, el inventario se presenta al VNR y la diferencia es una baja de valor.',
          },
        },
      },
      {
        calc: {
          question: 'El lote de celulares viejos costó **$50,000**. Celulares Luna espera venderlo en **$46,000** y pagar **$2,000** de comisiones y envío. ¿De cuánto es la **baja de valor**?',
          answer: 6000,
          hint: 'Primero el VNR: 46,000 − 2,000. Luego costo − VNR.',
          why: 'VNR = 46,000 − 2,000 = 44,000. Baja = 50,000 − 44,000 = **$6,000**. El lote queda en el balance en $44,000.',
        },
      },
      {
        ask: '¿Qué método de inventarios **no** permite la NIC 2?',
        options: [
          { text: 'UEPS (últimas entradas, primeras salidas)', ok: true, reply: '¡Correcto! La NIC 2 **no permite UEPS**.' },
          { text: 'PEPS (primeras entradas, primeras salidas)', reply: 'PEPS sí se permite. El que no se permite es **UEPS**.' },
          { text: 'Costo promedio', reply: 'El costo promedio sí se permite. El prohibido es **UEPS**.' },
        ],
      },
    ],
    // ¿Cuándo cuenta una venta?
    [
      { text: 'Celulares Luna vende un paquete: **celular + un año de datos**. ¿Cuánto del precio es por el celular y cuánto por los datos?' },
      { text: 'La **NIIF 15** responde **cuándo y por cuánto** reconocer un ingreso, con cinco pasos. Sirven igual para una tienda que para una constructora.' },
      {
        order: {
          title: 'Ordena los cinco pasos',
          steps: [
            'Identificar el contrato con el cliente',
            'Identificar las obligaciones de desempeño',
            'Determinar el precio de la transacción',
            'Asignar el precio a cada obligación',
            'Reconocer el ingreso cuando se cumple cada obligación',
          ],
          done: 'Primero entiendes el trato y sus promesas; luego pones precio y lo repartes; al final reconoces el ingreso.',
        },
      },
      { text: 'Una **obligación de desempeño** es cada promesa distinta al cliente. En un paquete, el precio se **reparte** según lo que cobrarías por cada promesa por separado (**precio de venta independiente**).' },
      {
        multi: {
          title: '¿Cuáles son obligaciones de desempeño en el paquete?',
          items: [
            { text: 'Entregar el celular', ok: true },
            { text: 'Dar servicio de datos por un año', ok: true },
            { text: 'Cobrarle al cliente', ok: false },
          ],
          why: 'Las obligaciones son **promesas que tú cumples** al cliente: el celular y los datos. Cobrar es lo que hace el cliente por ti.',
        },
      },
      {
        calc: {
          question: 'El paquete cuesta **$900**. Por separado, el celular vale **$800** y los datos **$400**. ¿Cuánto ingreso le toca al **celular**?',
          answer: 600,
          hint: '900 × (800 ÷ 1,200).',
          why: 'Suma de precios por separado: 800 + 400 = 1,200. Celular: 900 × 800 ÷ 1,200 = **$600**. Datos: $300.',
        },
      },
      {
        calc: {
          question: 'Otro paquete: tableta + funda por **$2,700**. Por separado, la tableta vale **$2,400** y la funda **$600**. ¿Cuánto ingreso le toca a la **funda**?',
          answer: 540,
          hint: 'Suma los precios por separado (3,000) y luego 2,700 × (600 ÷ 3,000).',
          why: '2,700 × 600 ÷ 3,000 = **$540**. A la tableta le tocan $2,160. Juntos suman los $2,700 del paquete.',
        },
      },
      { tip: 'Un paquete se **reparte** según el precio por separado de cada promesa. Las partes siempre suman el precio del paquete.' },
    ],
  ],
}
