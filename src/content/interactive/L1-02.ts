import type { InteractiveLesson } from './types'

export const intL102: InteractiveLesson = {
  lessonId: 'L1-02',
  sections: [
    // Origen de los registros contables
    [
      { text: 'Hace miles de años no había dinero, pero la gente ya necesitaba **llevar la cuenta**: cuántos costales de grano había, quién debía qué.' },
      {
        match: {
          title: '¿Cómo llevaban la cuenta?',
          pairs: [
            ['Mesopotamia', 'Fichas y tablillas de arcilla con marcas'],
            ['Egipto', 'Escribas que anotaban lo que entraba y salía de los graneros'],
            ['Mesoamérica', 'Tributos registrados en documentos pintados'],
          ],
        },
      },
      { tip: 'La idea de fondo no ha cambiado: **anotar lo que entra, lo que sale y quién debe a quién.**' },
    ],
    // Luca Pacioli y la partida doble
    [
      { text: 'En Italia, hace más de 500 años, los comerciantes de Venecia vendían a crédito y con socios. Necesitaban un método ordenado: la **partida doble**.' },
      {
        sort: {
          title: '¿Mito o realidad?',
          buckets: ['Mito', 'Realidad'],
          items: [
            { text: 'Luca Pacioli inventó la partida doble.', bucket: 0, why: 'Ya la usaban los comerciantes. Pacioli fue el primero en **explicarla en un libro impreso** (1494).' },
            { text: 'A Pacioli le dicen "padre de la contabilidad".', bucket: 1, why: 'Por difundir el método en su libro.' },
            { text: 'Partida doble: toda operación tiene dos lados.', bucket: 1, why: 'Si compras pan, recibes pan y entregas dinero. Siempre hay dos lados.' },
            { text: 'Pacioli era banquero.', bucket: 0, why: 'Era **fraile franciscano y matemático**.' },
          ],
        },
      },
      { tip: '**1494:** Pacioli publica la partida doble. Hoy se sigue usando en todo el mundo.' },
    ],
    // Evolución de la contabilidad moderna
    [
      { text: 'De las tablillas de arcilla a la nube. Ordena la historia:' },
      {
        order: {
          title: 'Línea del tiempo',
          steps: [
            'Fichas y tablillas para contar bienes y deudas',
            'Pacioli publica la partida doble (1494)',
            'Revolución Industrial: contabilidad de costos y auditoría',
            'Normas contables (NIF en México, IFRS en el mundo)',
            'Sistemas en la nube y facturas electrónicas',
          ],
          done: '¡Muy bien! Cada época agregó algo, pero la base sigue siendo la misma.',
        },
      },
      {
        ask: '¿Por qué surgieron las normas contables?',
        options: [
          { text: 'Para que todos presenten sus números igual', ok: true, reply: '¡Eso! Si cada empresa usa sus propias reglas, no se pueden comparar.' },
          { text: 'Para cobrar más impuestos', reply: 'No, eso es tema de las leyes fiscales. Las normas sirven para que los números **se puedan comparar**.' },
        ],
      },
    ],
  ],
}
