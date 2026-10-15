/**
 * Tiny spreadsheet engine for the lab's "Hoja" (Excel-like sheet).
 * Formulas start with "=" and support + − × ÷ ^ %, comparisons, cell references
 * (A1), ranges (A1:B5) and common functions with their Excel names in Spanish
 * and English. Arguments can be separated with "," or ";".
 */

export const SHEET_COLS = 8
export const SHEET_ROWS = 30
export type Cells = Record<string, string>
export type Value = number | string
export const colName = (i: number) => String.fromCharCode(65 + i)

const ERR = { ref: '#REF!', div: '#DIV/0!', name: '#NOMBRE?', cycle: '#CICLO!', value: '#VALOR!', num: '#NUM!' }
class SheetError extends Error {}
const fail = (code: string): never => {
  throw new SheetError(code)
}

type Tok = { t: 'num'; v: number } | { t: 'ref'; v: string } | { t: 'id'; v: string } | { t: 'op'; v: string } | { t: 'str'; v: string }

function tokenize(src: string): Tok[] {
  const out: Tok[] = []
  let i = 0
  while (i < src.length) {
    const ch = src[i]
    if (/\s/.test(ch)) {
      i++
      continue
    }
    const num = /^(\d+(\.\d*)?|\.\d+)/.exec(src.slice(i))
    if (num) {
      out.push({ t: 'num', v: Number(num[0]) })
      i += num[0].length
      continue
    }
    const word = /^[A-Za-zÁÉÍÓÚÑáéíóúñ_][A-Za-zÁÉÍÓÚÑáéíóúñ_0-9.]*/.exec(src.slice(i))
    if (word) {
      const w = word[0].toUpperCase()
      out.push(/^[A-Z]\d{1,3}$/.test(w) ? { t: 'ref', v: w } : { t: 'id', v: w })
      i += word[0].length
      continue
    }
    if (ch === '"') {
      const end = src.indexOf('"', i + 1)
      if (end < 0) fail(ERR.value)
      out.push({ t: 'str', v: src.slice(i + 1, end) })
      i = end + 1
      continue
    }
    const two = src.slice(i, i + 2)
    if (['<=', '>=', '<>'].includes(two)) {
      out.push({ t: 'op', v: two })
      i += 2
      continue
    }
    if ('+-*/^%(),;:<>=×÷'.includes(ch)) {
      out.push({ t: 'op', v: ch === '×' ? '*' : ch === '÷' ? '/' : ch === ';' ? ',' : ch })
      i++
      continue
    }
    fail(ERR.value)
  }
  return out
}

export function parseRef(ref: string): { c: number; r: number } | null {
  const m = /^([A-Z])(\d{1,3})$/.exec(ref.toUpperCase())
  if (!m) return null
  const c = m[1].charCodeAt(0) - 65
  const r = Number(m[2]) - 1
  return c < SHEET_COLS && r >= 0 && r < SHEET_ROWS ? { c, r } : null
}

type V = number | number[] | string

const FUNCS: Record<string, (args: V[]) => V> = {}
const flat = (args: V[]) => args.flatMap((a) => (Array.isArray(a) ? a : typeof a === 'number' ? [a] : []))
const num = (a: V | undefined): number => {
  if (typeof a === 'number') return a
  if (Array.isArray(a) && a.length === 1) return a[0]
  return fail(ERR.value)
}
function alias(names: string[], f: (args: V[]) => V) {
  for (const n of names) FUNCS[n] = f
}
alias(['SUMA', 'SUM'], (a) => flat(a).reduce((s, x) => s + x, 0))
alias(['PROMEDIO', 'AVERAGE'], (a) => {
  const xs = flat(a)
  return xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : fail(ERR.div)
})
alias(['MIN'], (a) => (flat(a).length ? Math.min(...flat(a)) : 0))
alias(['MAX'], (a) => (flat(a).length ? Math.max(...flat(a)) : 0))
alias(['CONTAR', 'COUNT'], (a) => flat(a).length)
alias(['ABS'], (a) => Math.abs(num(a[0])))
alias(['REDONDEAR', 'ROUND'], (a) => {
  const d = a.length > 1 ? num(a[1]) : 0
  const p = 10 ** d
  return Math.round(num(a[0]) * p + Number.EPSILON) / p
})
alias(['SI', 'IF'], (a) => (num(a[0]) ? (a[1] ?? 1) : (a[2] ?? 0)))
// Time value of money (Excel sign convention: money you pay is negative).
alias(['PAGO', 'PMT'], (a) => {
  const [rate, n, pv, fv = 0, type = 0] = [num(a[0]), num(a[1]), num(a[2]), a[3] !== undefined ? num(a[3]) : 0, a[4] !== undefined ? num(a[4]) : 0]
  if (n === 0) return fail(ERR.num)
  if (rate === 0) return -(pv + fv) / n
  const f = (1 + rate) ** n
  return (-(pv * f + fv) * rate) / ((1 + rate * type) * (f - 1))
})
alias(['VA', 'PV'], (a) => {
  const [rate, n, pmt, fv = 0] = [num(a[0]), num(a[1]), num(a[2]), a[3] !== undefined ? num(a[3]) : 0]
  if (rate === 0) return -(pmt * n + fv)
  const f = (1 + rate) ** n
  return -(pmt * ((f - 1) / rate) + fv) / f
})
alias(['VF', 'FV'], (a) => {
  const [rate, n, pmt, pv = 0] = [num(a[0]), num(a[1]), num(a[2]), a[3] !== undefined ? num(a[3]) : 0]
  if (rate === 0) return -(pv + pmt * n)
  const f = (1 + rate) ** n
  return -(pv * f + pmt * ((f - 1) / rate))
})
alias(['VNA', 'NPV'], (a) => {
  const rate = num(a[0])
  return flat(a.slice(1)).reduce((s, x, i) => s + x / (1 + rate) ** (i + 1), 0)
})
alias(['TIR', 'IRR'], (a) => {
  const xs = flat(a)
  const npv = (r: number) => xs.reduce((s, x, i) => s + x / (1 + r) ** i, 0)
  let lo = -0.99
  let hi = 10
  if (npv(lo) * npv(hi) > 0) return fail(ERR.num)
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2
    if (npv(lo) * npv(mid) <= 0) hi = mid
    else lo = mid
  }
  return (lo + hi) / 2
})

export const FUNCTION_NAMES = Object.keys(FUNCS)

class Parser {
  i = 0
  toks: Tok[]
  get: (ref: string) => number
  constructor(toks: Tok[], get: (ref: string) => number) {
    this.toks = toks
    this.get = get
  }
  peek(v?: string) {
    const t = this.toks[this.i]
    return t && (v === undefined || (t.t === 'op' && t.v === v)) ? t : undefined
  }
  eat(v: string) {
    if (!this.peek(v)) fail(ERR.value)
    this.i++
  }
  parse(): V {
    const v = this.compare()
    if (this.i < this.toks.length) fail(ERR.value)
    return v
  }
  compare(): V {
    let a = this.add()
    for (;;) {
      const t = this.toks[this.i]
      if (!t || t.t !== 'op' || !['<', '>', '<=', '>=', '=', '<>'].includes(t.v)) return a
      this.i++
      const x = num(a)
      const y = num(this.add())
      a = Number({ '<': x < y, '>': x > y, '<=': x <= y, '>=': x >= y, '=': x === y, '<>': x !== y }[t.v])
    }
  }
  add(): V {
    let a = this.mul()
    while (this.peek('+') || this.peek('-')) {
      const op = (this.toks[this.i++] as { v: string }).v
      const b = num(this.mul())
      a = op === '+' ? num(a) + b : num(a) - b
    }
    return a
  }
  mul(): V {
    let a = this.pow()
    while (this.peek('*') || this.peek('/')) {
      const op = (this.toks[this.i++] as { v: string }).v
      const b = num(this.pow())
      if (op === '/' && b === 0) fail(ERR.div)
      a = op === '*' ? num(a) * b : num(a) / b
    }
    return a
  }
  pow(): V {
    const a = this.unary()
    if (this.peek('^')) {
      this.i++
      return num(a) ** num(this.pow())
    }
    return a
  }
  unary(): V {
    if (this.peek('-')) {
      this.i++
      return -num(this.unary())
    }
    if (this.peek('+')) {
      this.i++
      return this.unary()
    }
    let v = this.primary()
    while (this.peek('%')) {
      this.i++
      v = num(v) / 100
    }
    return v
  }
  primary(): V {
    const t = this.toks[this.i++]
    if (!t) return fail(ERR.value)
    if (t.t === 'num') return t.v
    if (t.t === 'str') return t.v
    if (t.t === 'ref') {
      if (this.peek(':')) {
        this.i++
        const end = this.toks[this.i++]
        if (!end || end.t !== 'ref') return fail(ERR.ref)
        return this.range(t.v, end.v)
      }
      if (!parseRef(t.v)) fail(ERR.ref)
      return this.get(t.v)
    }
    if (t.t === 'id') {
      const f = FUNCS[t.v]
      if (!f || !this.peek('(')) return fail(ERR.name)
      this.i++
      const args: V[] = []
      if (!this.peek(')')) {
        args.push(this.compare())
        while (this.peek(',')) {
          this.i++
          args.push(this.compare())
        }
      }
      this.eat(')')
      return f(args)
    }
    if (t.t === 'op' && t.v === '(') {
      const v = this.compare()
      this.eat(')')
      return v
    }
    return fail(ERR.value)
  }
  range(a: string, b: string): number[] {
    const p = parseRef(a)
    const q = parseRef(b)
    if (!p || !q) return fail(ERR.ref)
    const out: number[] = []
    for (let r = Math.min(p.r, q.r); r <= Math.max(p.r, q.r); r++)
      for (let c = Math.min(p.c, q.c); c <= Math.max(p.c, q.c); c++) out.push(this.get(`${colName(c)}${r + 1}`))
    return out
  }
}

/** Evaluates every non-empty cell. Text stays text; errors come back as Excel-style codes. */
export function evaluateSheet(cells: Cells): Record<string, Value> {
  const out: Record<string, Value> = {}
  const visiting = new Set<string>()
  const value = (ref: string): Value => {
    if (ref in out) return out[ref]
    const raw = (cells[ref] ?? '').trim()
    let v: Value
    if (raw === '') v = ''
    else if (!raw.startsWith('=')) {
      const n = Number(raw.replace(/[$,\s]/g, ''))
      v = raw.endsWith('%') && !Number.isNaN(Number(raw.slice(0, -1))) ? Number(raw.slice(0, -1)) / 100 : Number.isNaN(n) ? raw : n
    } else {
      if (visiting.has(ref)) return ERR.cycle
      visiting.add(ref)
      try {
        const r = new Parser(tokenize(raw.slice(1)), (x) => {
          const y = value(x)
          if (typeof y === 'number') return y
          if (y === '') return 0
          if (y.startsWith('#')) return fail(y)
          return fail(ERR.value)
        }).parse()
        v = Array.isArray(r) ? (r.length === 1 ? r[0] : fail(ERR.value)) : typeof r === 'number' && !Number.isFinite(r) ? ERR.num : r
      } catch (e) {
        v = e instanceof SheetError ? e.message : ERR.value
      }
      visiting.delete(ref)
    }
    out[ref] = v
    return v
  }
  for (const ref of Object.keys(cells)) value(ref)
  return out
}

/** Ready-made formulas offered by the "Fórmulas" button, with a plain explanation. */
export const SHEET_FORMULAS: { name: [string, string]; formula: string; help: [string, string] }[] = [
  { name: ['Sumar una columna', 'Sum a column'], formula: '=SUMA(A1:A10)', help: ['Suma todos los números de A1 a A10.', 'Adds every number from A1 to A10.'] },
  { name: ['Promedio', 'Average'], formula: '=PROMEDIO(A1:A10)', help: ['Suma los números y divide entre cuántos son.', 'Adds the numbers and divides by how many there are.'] },
  { name: ['IVA de un precio', 'VAT of a price'], formula: '=A1*16%', help: ['Si A1 es el precio sin IVA, esto da el IVA al 16%.', 'If A1 is the price before VAT, this is the 16% VAT.'] },
  { name: ['Precio con IVA', 'Price with VAT'], formula: '=A1*1.16', help: ['Precio sin IVA × 1.16 = precio con IVA incluido.', 'Price before VAT × 1.16 = price including VAT.'] },
  { name: ['Quitar el IVA a un precio', 'Remove VAT from a price'], formula: '=A1/1.16', help: ['Si A1 ya incluye IVA, esto da el precio sin IVA.', 'If A1 includes VAT, this gives the price before VAT.'] },
  { name: ['Margen de ganancia', 'Profit margin'], formula: '=(A1-B1)/A1', help: ['A1 = precio de venta, B1 = costo. Da qué parte del precio es ganancia (formato %).', 'A1 = price, B1 = cost. The share of the price that is profit.'] },
  { name: ['Variación entre dos meses', 'Change between two months'], formula: '=(B1-A1)/A1', help: ['A1 = mes anterior, B1 = mes actual. Da cuánto subió o bajó en %.', 'A1 = previous, B1 = current. The % change.'] },
  { name: ['Pago mensual de un préstamo', 'Monthly loan payment'], formula: '=PAGO(A1/12,B1,-C1)', help: ['A1 = tasa anual (ej. 18%), B1 = número de meses, C1 = monto prestado. El signo − es porque Excel pone en negativo el dinero que sale.', 'A1 = annual rate, B1 = months, C1 = loan amount.'] },
  { name: ['Valor futuro de un ahorro', 'Future value of savings'], formula: '=VF(A1/12,B1,-C1)', help: ['A1 = tasa anual, B1 = meses, C1 = lo que ahorras cada mes.', 'A1 = annual rate, B1 = months, C1 = monthly saving.'] },
  { name: ['Valor presente neto (VPN)', 'Net present value (NPV)'], formula: '=VNA(A1,B2:B6)+B1', help: ['A1 = tasa, B1 = inversión inicial en negativo, B2:B6 = flujos de cada año.', 'A1 = rate, B1 = initial investment (negative), B2:B6 = yearly flows.'] },
  { name: ['Tasa interna de retorno (TIR)', 'Internal rate of return (IRR)'], formula: '=TIR(B1:B6)', help: ['B1 = inversión en negativo y B2:B6 los flujos. Da la tasa a la que el VPN es cero.', 'B1 = investment (negative), B2:B6 the flows.'] },
  { name: ['Punto de equilibrio (unidades)', 'Break-even (units)'], formula: '=A1/(B1-C1)', help: ['A1 = costos fijos, B1 = precio por unidad, C1 = costo variable por unidad.', 'A1 = fixed costs, B1 = price, C1 = variable cost per unit.'] },
  { name: ['Depreciación anual (línea recta)', 'Annual depreciation (straight line)'], formula: '=(A1-B1)/C1', help: ['A1 = costo del bien, B1 = valor de rescate, C1 = años de vida útil.', 'A1 = cost, B1 = salvage value, C1 = useful life in years.'] },
  { name: ['Redondear a 2 decimales', 'Round to 2 decimals'], formula: '=REDONDEAR(A1,2)', help: ['Deja el número con 2 decimales, como en las facturas.', 'Rounds to 2 decimals.'] },
]
