import type { JournalLine, L } from '../types'
import { concept, costFormula, invoiceFormulas, totals, type Cfdi, type Concept, type Party, type PolicyType, type PracticeDoc } from './cfdi'

/**
 * "Tu Despacho": the learner runs a small accounting firm. Clients arrive with a
 * story, bring their documents (practice CFDIs, no fiscal validity) and a final
 * question. Doing it well earns stars, which bring referrals (new clients).
 * Amounts are round on purpose so beginners can follow them. Spanish only.
 */

export interface ClientDoc {
  /** What the client says when handing over the document. */
  say: string
  doc: PracticeDoc
  ok: string
  bad: string
}

export interface ClientCase {
  id: string
  emoji: string
  name: string
  business: string
  /** One line shown in the inbox. */
  problem: string
  intro: string[]
  /** Accounts offered in the selector (undefined = full catalog). */
  accounts?: string[]
  docs: ClientDoc[]
  final: {
    ask: string
    facts?: string
    options: { text: string; ok?: boolean; why: string }[]
    explain: string
    table: [string, number][]
    after?: string
  }
  review: { good: string; meh: string }
  /** Who the client recommends you to (next case id). */
  refers?: string
  fee: number
  needs?: { case?: string; paid?: boolean }
}

const PM = '601 General de Ley Personas Morales'
const PF = '612 Personas Físicas con Actividades Empresariales y Profesionales'
const PUBLIC: Party = { rfc: 'XAXX010101000', name: 'PUBLICO EN GENERAL', regime: '616 Sin obligaciones fiscales' }

let n = 0
const fakeUuid = (seed: string) => {
  n++
  const h = [...seed].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7 + n).toString(16).toUpperCase().padStart(8, '0')
  return `${h.slice(0, 8)}-D35C-4${h.slice(0, 3)}-A${h.slice(5, 8)}-${h}${h.slice(0, 4)}`
}

function cfdi(o: { id: string; direction: Cfdi['direction']; issuer: Party; receiver: Party; use: string; method: 'PUE' | 'PPD'; form: string; date: string; folio: number; concepts: Concept[] }): Cfdi {
  const t = totals(o.concepts)
  return {
    type: 'I',
    direction: o.direction,
    serie: o.direction === 'emitido' ? 'A' : 'F',
    folio: o.folio,
    date: o.date,
    uuid: fakeUuid(o.id),
    issuer: o.issuer,
    receiver: o.receiver,
    use: o.use,
    method: o.method,
    form: o.method === 'PPD' ? '99 Por definir' : o.form,
    concepts: o.concepts,
    subtotal: t.subtotal,
    discount: t.discount,
    iva: t.iva,
    retIsr: 0,
    retIva: 0,
    total: t.total,
  }
}

const L2 = (es: string): L => ({ es, en: es })
const line = (accountCode: string, side: 'D' | 'C', amount: number): JournalLine => ({ accountCode, side, amount })

function pdoc(id: string, level: PracticeDoc['level'], c: Cfdi, o: { title: string; story: string; extra?: string; policy: PolicyType; expected: JournalLine[]; hint: string; topics: string[]; cost?: { desc: string; qty: number; cost: number } }): PracticeDoc {
  return {
    id,
    level,
    title: L2(o.title),
    story: L2(o.story),
    ...(o.extra ? { extra: L2(o.extra) } : {}),
    cfdis: [c],
    policy: o.policy,
    expected: o.expected,
    hint: L2(o.hint),
    formulas: [...invoiceFormulas(c.concepts, totals(c.concepts)), ...(o.cost ? [costFormula([o.cost])] : [])],
    topics: o.topics,
  }
}

const BASIC = ['1101', '1102', '1104', '1108', '1109', '1203', '1205', '2101', '2104', '3101', '4101', '4102', '6102', '6103', '6104']

// ───────────── Cliente 1: Doña Lupe ─────────────
const LUPE: Party = { rfc: 'GALU700312KJ4', name: 'GUADALUPE GARCIA LUNA', regime: PF }
const lupeSale = cfdi({ id: 'lupe1', direction: 'emitido', issuer: LUPE, receiver: PUBLIC, use: 'S01 Sin efectos fiscales', method: 'PUE', form: '01 Efectivo', date: '2026-10-31', folio: 31, concepts: [concept(1, 'ACT Actividad', 'Venta de comidas del mes', 40000, 'iva16')] })
const lupeRent = cfdi({ id: 'lupe2', direction: 'recibido', issuer: { rfc: 'IME150420PL3', name: 'INMOBILIARIA DEL MERCADO', regime: PM }, receiver: LUPE, use: 'G03 Gastos en general', method: 'PUE', form: '03 Transferencia electrónica de fondos', date: '2026-10-05', folio: 4512, concepts: [concept(1, 'E48 Servicio', 'Renta del local 14, octubre', 8000, 'iva16')] })
const lupePower = cfdi({ id: 'lupe3', direction: 'recibido', issuer: { rfc: 'ENE160222PL1', name: 'ENERGIA Y SERVICIOS DEL NORTE', regime: PM }, receiver: LUPE, use: 'G03 Gastos en general', method: 'PUE', form: '03 Transferencia electrónica de fondos', date: '2026-10-20', folio: 88120, concepts: [concept(1, 'E48 Servicio', 'Suministro de energía eléctrica', 3000, 'iva16')] })

// ───────────── Cliente 2: Don Chuy ─────────────
const CHUY: Party = { rfc: 'MERJ650808QW1', name: 'JESUS MENDOZA RIOS', regime: PF }
const chuySale = cfdi({ id: 'chuy1', direction: 'emitido', issuer: CHUY, receiver: { rfc: 'CUN190611AB2', name: 'CICLISMO URBANO DEL NORTE', regime: PM }, use: 'G03 Gastos en general', method: 'PUE', form: '03 Transferencia electrónica de fondos', date: '2026-10-12', folio: 120, concepts: [concept(12, 'E48 Servicio', 'Mantenimiento completo de bicicleta', 1500, 'iva16')] })
const chuyPc = cfdi({ id: 'chuy2', direction: 'recibido', issuer: { rfc: 'TEC170418CV2', name: 'TECNOLOGIA Y COMPUTO', regime: PM }, receiver: CHUY, use: 'I04 Equipo de cómputo y accesorios', method: 'PUE', form: '03 Transferencia electrónica de fondos', date: '2026-10-15', folio: 9031, concepts: [concept(1, 'H87 Pieza', 'Computadora portátil', 15000, 'iva16')] })
const chuyParts = cfdi({ id: 'chuy3', direction: 'recibido', issuer: { rfc: 'RCB180215QP8', name: 'REFACCIONES CICLISTAS DEL BAJIO', regime: PM }, receiver: CHUY, use: 'G01 Adquisición de mercancías', method: 'PUE', form: '01 Efectivo', date: '2026-10-22', folio: 3377, concepts: [concept(20, 'H87 Pieza', 'Cámara para llanta rodado 26', 150, 'iva16')] })

// ───────────── Cliente 3: Karla ─────────────
const KARLA: Party = { rfc: 'SOKA950214MN7', name: 'KARLA SOTO AGUILAR', regime: PF }
const karlaBuy = cfdi({ id: 'karla1', direction: 'recibido', issuer: { rfc: 'TER200910RT6', name: 'TERMOS Y VASOS DEL NORTE', regime: PM }, receiver: KARLA, use: 'G01 Adquisición de mercancías', method: 'PPD', form: '99 Por definir', date: '2026-10-03', folio: 7710, concepts: [concept(50, 'H87 Pieza', 'Termo de acero 500 ml', 200, 'iva16')] })
const karlaSale = cfdi({ id: 'karla2', direction: 'emitido', issuer: KARLA, receiver: { rfc: 'CGR210604HT9', name: 'CAFETERIA EL GRANO', regime: PM }, use: 'G01 Adquisición de mercancías', method: 'PPD', form: '99 Por definir', date: '2026-10-18', folio: 45, concepts: [concept(30, 'H87 Pieza', 'Termo de acero 500 ml con logo', 400, 'iva16')] })
const karlaAds = cfdi({ id: 'karla3', direction: 'recibido', issuer: { rfc: 'PUB180130ZX5', name: 'PUBLICIDAD CREATIVA', regime: PM }, receiver: KARLA, use: 'G03 Gastos en general', method: 'PUE', form: '03 Transferencia electrónica de fondos', date: '2026-10-25', folio: 2201, concepts: [concept(1, 'E48 Servicio', 'Campaña de anuncios en redes sociales', 2500, 'iva16')] })

export const CASES: ClientCase[] = [
  {
    id: 'lupe',
    emoji: '👩‍🍳',
    name: 'Doña Lupe',
    business: 'Fonda "La Sazón de Lupe"',
    problem: 'Vende mucho, pero a fin de mes nunca le alcanza.',
    intro: [
      '¡Buenas! Me dijeron que usted es contador. 🙏',
      'Tengo mi fonda desde hace 3 años. Siempre hay gente… pero a fin de mes nunca me alcanza.',
      'Le traigo mis papeles de octubre. ¿Me dice si de verdad gano algo?',
    ],
    accounts: BASIC,
    docs: [
      {
        say: 'Esta es la factura de todo lo que vendí en el mes. Todo me lo pagaron en efectivo. 💵',
        doc: pdoc('lupe-1', 'basico', lupeSale, {
          title: 'La venta del mes',
          story: 'Lupe emitió esta factura por las comidas que vendió en octubre. Se la pagaron en efectivo.',
          policy: 'I',
          expected: [line('1101', 'D', 46400), line('4101', 'C', 40000), line('2104', 'C', 6400)],
          hint: 'Entró dinero en efectivo: Caja. La venta es lo que cobró **sin IVA**. El IVA se lo cobró al cliente, pero es del SAT: va a IVA trasladado, que es una deuda.',
          topics: ['L1-16', 'L1-09', 'FIS-06'],
        }),
        ok: '¿O sea que de los $46,400 no todo es mío? 😮 ¡Yo los contaba completitos!',
        bad: 'Uy, contador, ¿seguro? Revíselo otra vez, no me vaya a salir con una multa. 😟',
      },
      {
        say: 'Y esta es la renta del local. La pagué por transferencia.',
        doc: pdoc('lupe-2', 'basico', lupeRent, {
          title: 'La renta del local',
          story: 'Lupe recibió esta factura por la renta del local y la pagó por transferencia.',
          policy: 'E',
          expected: [line('6102', 'D', 8000), line('1109', 'D', 1280), line('1102', 'C', 9280)],
          hint: 'La renta es un gasto. Salió dinero del banco. El IVA que pagó en la renta lo puede restar del IVA que cobró: es IVA acreditable.',
          topics: ['L1-16', 'L1-05', 'FIS-06'],
        }),
        ok: '¡Ah, mire! Entonces el IVA de la renta me ayuda. 👍',
        bad: 'Hmm, eso no se ve bien. ¿La renta no es un gasto? 🤔',
      },
      {
        say: 'La luz. Con tanta estufa y refrigerador, sale cara. 😅',
        doc: pdoc('lupe-3', 'basico', lupePower, {
          title: 'El recibo de luz',
          story: 'Lupe pagó la luz del local por transferencia y le llegó esta factura.',
          policy: 'E',
          expected: [line('6103', 'D', 3000), line('1109', 'D', 480), line('1102', 'C', 3480)],
          hint: 'Es un gasto del negocio (se consume). Sale dinero del banco y el IVA pagado es acreditable.',
          topics: ['L1-16', 'L1-05'],
        }),
        ok: 'Perfecto. Ya casi terminamos, ¿verdad?',
        bad: '¿Seguro que así va? La luz ya la pagué. 🤔',
      },
    ],
    final: {
      ask: 'Entonces, contador… ¿cuánto gané este mes?',
      facts: 'Dato: los ingredientes del mes costaron $22,000 (ya registrados, sin IVA).',
      options: [
        { text: '$7,000', ok: true, why: 'Ventas sin IVA menos ingredientes, renta y luz (todo sin IVA).' },
        { text: '$11,640', why: 'Así contarías el IVA como si fuera de Lupe. El IVA no es ganancia: se le paga al SAT.' },
        { text: '$18,000', why: 'Te faltó restar la renta y la luz.' },
        { text: '$46,400', why: 'Eso es todo lo que entró a la caja, no lo que ganó.' },
      ],
      explain: 'La utilidad sale de las ventas **sin IVA** menos los costos y gastos **sin IVA**.',
      table: [
        ['Ventas', 40000],
        ['Ingredientes', -22000],
        ['Renta', -8000],
        ['Luz', -3000],
        ['Utilidad del mes', 7000],
      ],
      after: 'Además: Lupe cobró $6,400 de IVA y pagó $1,760 (renta y luz). La diferencia, **$4,640**, se la tiene que pagar al SAT. Ese dinero nunca fue suyo, y por eso "no le alcanzaba".',
    },
    review: {
      good: '¡Con razón! Yo contaba los $46,400 como míos. Ahora sé que gano $7,000 y que debo apartar lo del SAT. Le voy a decir a mi compadre Chuy, el del taller de bicis, que venga con usted. 🙌',
      meh: 'Gracias, contador. Me costó entenderle, pero ya sé que el IVA no es mío. Le voy a pasar su número a mi compadre Chuy.',
    },
    refers: 'chuy',
    fee: 1500,
  },
  {
    id: 'chuy',
    emoji: '🚲',
    name: 'Don Chuy',
    business: 'Taller de bicis "Rueda Libre"',
    problem: 'Compró una computadora y su sobrino dice que perdió dinero.',
    intro: [
      'Qué tal, me mandó Lupe. 👋',
      'Este mes me compré una computadora de $15,000 para llevar las citas del taller.',
      'Mi sobrino dice que entonces este mes perdí dinero. ¿Es cierto? 😩',
    ],
    accounts: BASIC,
    docs: [
      {
        say: 'Primero lo bueno: le di mantenimiento a 12 bicis de una empresa de rentas. Me pagaron por transferencia.',
        doc: pdoc('chuy-1', 'basico', chuySale, {
          title: 'Mantenimiento a 12 bicicletas',
          story: 'Don Chuy emitió esta factura por un servicio y se la pagaron por transferencia.',
          policy: 'I',
          expected: [line('1102', 'D', 20880), line('4102', 'C', 18000), line('2104', 'C', 2880)],
          hint: 'Es un **servicio**, no venta de mercancía: va a Ingresos por servicios. Entró al banco. El IVA cobrado es del SAT.',
          topics: ['L1-16', 'L1-09', 'FIS-06'],
        }),
        ok: '¡Eso! Buen mes de chamba. 💪',
        bad: 'Mmm, yo no vendí bicis, yo las arreglé. ¿Eso cambia algo? 🤔',
      },
      {
        say: 'Esta es la famosa computadora. 💻',
        doc: pdoc('chuy-2', 'basico', chuyPc, {
          title: 'La computadora del taller',
          story: 'Don Chuy compró una computadora para usarla en el taller (no para venderla) y la pagó por transferencia.',
          policy: 'E',
          expected: [line('1205', 'D', 15000), line('1109', 'D', 2400), line('1102', 'C', 17400)],
          hint: 'No es gasto ni mercancía: es un bien que usará varios años. Va a Equipo de cómputo (activo fijo).',
          topics: ['L1-16', 'L1-04', 'CON-08'],
        }),
        ok: '¿Entonces la compu no es gasto? ¡Ja! Mi sobrino estaba mal. 😄',
        bad: 'Mi sobrino también dijo eso… ¿seguro? 😬',
      },
      {
        say: 'Y estas cámaras de llanta son para venderlas a los clientes. Las pagué en efectivo.',
        doc: pdoc('chuy-3', 'basico', chuyParts, {
          title: 'Refacciones para vender',
          story: 'Don Chuy compró 20 cámaras de llanta para revenderlas y las pagó en efectivo.',
          policy: 'E',
          expected: [line('1108', 'D', 3000), line('1109', 'D', 480), line('1101', 'C', 3480)],
          hint: 'Son para **revender**: entran a Inventarios. Se vuelven costo hasta que las venda. Salió dinero de Caja.',
          topics: ['L1-16', 'L1-09'],
        }),
        ok: 'Va. Ahora sí, la pregunta del millón…',
        bad: 'Esas todavía no las vendo, eh. Siguen en mi bodega. 📦',
      },
    ],
    final: {
      ask: 'Entonces, ¿la computadora hizo que este mes perdiera dinero?',
      options: [
        { text: 'No. Es un activo: cambió dinero por una computadora que sigue siendo suya.', ok: true, why: 'Salió dinero, pero no se perdió: ahora tiene un bien que le sirve varios años.' },
        { text: 'Sí, porque salió dinero del banco.', why: 'Que salga dinero no siempre es un gasto. A veces cambias dinero por algo que sigue siendo tuyo.' },
        { text: 'Sí, los $17,400 son gasto de octubre.', why: 'Así la registrarías como gasto, pero es un activo fijo (Equipo de cómputo).' },
        { text: 'No, porque el SAT le regresa todo.', why: 'Solo el IVA se puede acreditar; la computadora la pagó él.' },
      ],
      explain: 'Las cámaras siguen en la bodega (Inventarios) y la computadora es un activo. Ninguna de las dos es gasto de octubre.',
      table: [
        ['Ingresos por servicios', 18000],
        ['Gastos del mes', 0],
        ['Utilidad del mes', 18000],
      ],
      after: 'La computadora se irá volviendo gasto **poco a poco**, mes con mes, mientras la use. A eso se le llama **depreciación** (lo ves en el tema de activo fijo). En este ejemplo no hubo otros gastos, por eso la utilidad sale tan alta.',
    },
    review: {
      good: '¡Ya le enseñé a mi sobrino! 😂 Le pasé su número a Karla, la muchacha que vende termos por internet. Anda bien preocupada.',
      meh: 'Gracias, contador. Ya me quedó claro que la compu no es pérdida. Le pasé su número a Karla, la de los termos.',
    },
    refers: 'karla',
    fee: 2500,
    needs: { case: 'lupe' },
  },
  {
    id: 'karla',
    emoji: '👩‍💻',
    name: 'Karla',
    business: 'Tienda en línea "Karlita Store"',
    problem: 'Vende un montón, pero su cuenta del banco está casi vacía.',
    intro: [
      'Hola!! Me pasó tu contacto Don Chuy 😊',
      'Vendo termos personalizados por internet. Este mes vendí un montón…',
      '…pero mi cuenta del banco está casi vacía. 😭 ¿Dónde está mi dinero?',
    ],
    docs: [
      {
        say: 'Primero compré 50 termos. Mi proveedor me dio crédito, le pago el próximo mes.',
        doc: pdoc('karla-1', 'intermedio', karlaBuy, {
          title: 'Compra de termos a crédito',
          story: 'Karla compró 50 termos para revender. La factura es PPD: los paga después.',
          policy: 'D',
          expected: [line('1108', 'D', 10000), line('1112', 'D', 1600), line('2101', 'C', 11600)],
          hint: 'PPD = todavía no paga. Le debe al proveedor (Proveedores). Como no ha pagado, el IVA va a **IVA pendiente de acreditar**. No se movió dinero: póliza de Diario.',
          topics: ['L1-09', 'FIS-06'],
        }),
        ok: 'Ok ok, entonces todavía le debo al proveedor. 📝',
        bad: 'Pero todavía no le pago nada… ¿por qué sale dinero? 🤔',
      },
      {
        say: 'Y luego le vendí 30 termos con logo a una cafetería. ¡Mi venta más grande! Me paga en 30 días.',
        doc: pdoc('karla-2', 'intermedio', karlaSale, {
          title: 'Venta a crédito a una cafetería',
          story: 'Karla vendió 30 termos a crédito. La factura es PPD: la cafetería le pagará después.',
          extra: 'Dato de su almacén: cada termo le costó $200. Registra también la salida del almacén (costo de ventas).',
          policy: 'D',
          expected: [line('1104', 'D', 13920), line('4101', 'C', 12000), line('2110', 'C', 1920), line('5101', 'D', 6000), line('1108', 'C', 6000)],
          hint: 'PPD = aún no le pagan: la cafetería le debe (Clientes) y el IVA todavía no lo cobra (IVA trasladado no cobrado). Además salen 30 termos: Costo de ventas contra Inventarios.',
          topics: ['L1-09', 'L1-10', 'FIS-06'],
          cost: { desc: 'Termo de acero 500 ml', qty: 30, cost: 200 },
        }),
        ok: '¡Ahhh! Entonces vendí, pero el dinero todavía no llega. 😳',
        bad: '¿Seguro? La cafetería todavía no me paga nada. 🤔',
      },
      {
        say: 'Ah, y pagué anuncios en redes para vender más. Esto sí lo pagué por transferencia.',
        doc: pdoc('karla-3', 'intermedio', karlaAds, {
          title: 'Anuncios en redes sociales',
          story: 'Karla pagó una campaña de anuncios por transferencia.',
          policy: 'E',
          expected: [line('6104', 'D', 2500), line('1109', 'D', 400), line('1102', 'C', 2900)],
          hint: 'Es un gasto de publicidad. Salió dinero del banco y, como sí lo pagó, el IVA es acreditable.',
          topics: ['L1-16', 'L1-05'],
        }),
        ok: 'Listo. Ahora sí dime… 🙏',
        bad: 'Mmm, los anuncios ya los pagué. ¿Así va? 🤔',
      },
    ],
    final: {
      ask: '¿Entonces dónde está mi dinero? ¿Estoy perdiendo?',
      options: [
        { text: 'Sí ganas, pero la cafetería todavía te debe y otra parte está en termos guardados.', ok: true, why: 'Tienes utilidad, pero no la has cobrado.' },
        { text: 'Estás perdiendo: el negocio no deja.', why: 'Las ventas son mayores que el costo y los gastos: sí hay utilidad.' },
        { text: 'Se lo llevó el SAT.', why: 'Todavía no le pagas IVA al SAT por esta venta, porque no la has cobrado.' },
        { text: 'Está en la cuenta de Ventas.', why: 'Ventas no es dinero: es lo que vendiste. El dinero estaría en Bancos o Caja.' },
      ],
      explain: 'Ganar no es lo mismo que tener dinero. Karla vendió, pero **todavía no cobra**.',
      table: [
        ['Ventas', 12000],
        ['Costo de ventas', -6000],
        ['Publicidad', -2500],
        ['Utilidad del mes', 3500],
      ],
      after: 'La cafetería le debe **$13,920** (Clientes) y le quedan 20 termos en bodega (**$4,000** en Inventarios). Y ella le debe **$11,600** al proveedor. Cobrar a tiempo es tan importante como vender.',
    },
    review: {
      good: '¡Hoy mismo le cobro a la cafetería! 💸 Ya entendí la diferencia entre vender y cobrar. Te voy a recomendar con todas mis amigas emprendedoras. 💖',
      meh: 'Gracias!! Me costó, pero ya sé que vender no es lo mismo que cobrar. Te recomiendo.',
    },
    fee: 4000,
    needs: { case: 'chuy', paid: true },
  },
]

/** Clients shown as "coming soon" so the learner sees the firm can grow. */
export const SOON = [{ emoji: '🏨', name: 'Hotel Las Palmas', problem: 'Nómina de 12 empleados y un préstamo del banco.', stars: 7 }]

export const MAX_STARS = CASES.length * 3

export function rankOf(stars: number): string {
  if (stars >= MAX_STARS) return 'Despacho estrella'
  if (stars >= 6) return 'Despacho recomendado'
  if (stars >= 3) return 'Despacho de barrio'
  return 'Despacho recién abierto'
}

/** 0 mistakes → 3 stars, 1–2 → 2, more → 1. */
export const starsFor = (mistakes: number) => (mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1)
