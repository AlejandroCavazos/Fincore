import type { InteractiveLesson } from './types'

export const intCON06: InteractiveLesson = {
  lessonId: 'CON-06',
  sections: [
    // Un idioma contable para todo el mundo
    [
      { text: 'Si una empresa mexicana quiere dinero de inversionistas en Europa, ellos deben entender sus números. Para eso están las **NIIF** (en inglés, **IFRS**): un idioma contable para muchos países 🌍.' },
      {
        match: {
          title: 'Las siglas clave',
          pairs: [
            ['IASB', 'Consejo que emite las NIIF'],
            ['Fundación IFRS', 'La organización de la que forma parte el IASB'],
            ['NIC (IAS)', 'Las normas más antiguas, vigentes si no se han sustituido'],
            ['CNBV', 'Comisión que pide NIIF a las empresas que cotizan en Bolsa'],
          ],
        },
      },
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
      { tip: 'En México, en general: **cotiza en Bolsa → NIIF**; empresa privada pequeña o mediana → normalmente **NIF**.' },
    ],
    // Normas clave y su enfoque
    [
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
      { text: 'Según la NIC 2, el inventario va al **menor** entre su costo y su **valor neto de realización** (VNR): lo que esperas cobrar al venderlo, menos lo que cuesta venderlo. Una tienda de ropa 👕 compró una chamarra en **$800**.' },
      {
        sim: {
          title: 'La chamarra que ya no se vende',
          inputs: [
            { key: 'p', label: 'Precio al que esperas venderla', min: 600, max: 1200, step: 50, value: 1000 },
            { key: 'g', label: 'Costos para venderla (comisión, envío)', min: 0, max: 200, step: 25, value: 50 },
          ],
          outputs: [
            { label: 'VNR', calc: (x) => x.p - x.g },
            { label: 'Valor en el balance', calc: (x) => Math.min(800, x.p - x.g), main: true },
            { label: 'Baja de valor', calc: (x) => Math.max(0, 800 - (x.p - x.g)) },
          ],
          goal: {
            text: 'La chamarra pasó de moda. Ajusta precio y costos hasta tener una **baja de valor de $100 o más**.',
            check: (x) => 800 - (x.p - x.g) >= 100,
            done: 'Si el VNR queda **debajo del costo**, el inventario se presenta al VNR y la diferencia es una baja de valor.',
          },
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
      { tip: 'NIC 2: inventario al **menor** entre costo y VNR. Nunca por encima de lo que de verdad vas a recuperar.' },
    ],
    // NIIF 15: el modelo de cinco pasos
    [
      { text: 'La NIIF 15 responde **cuándo y por cuánto** reconocer un ingreso, con cinco pasos. Sirven igual para una tienda que para una constructora.' },
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
      { text: 'Una **obligación de desempeño** es cada promesa distinta al cliente. Una tienda de celulares 📱 vende un paquete: celular + un año de datos.' },
      {
        multi: {
          title: '¿Cuáles son obligaciones de desempeño distintas en este paquete?',
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
          why: 'Suma de precios independientes: 800 + 400 = 1,200. Celular: 900 × 800 ÷ 1,200 = **$600**. Datos: $300.',
        },
      },
      { tip: 'Un paquete se **reparte** según el precio de venta independiente de cada promesa.' },
    ],
  ],
}
