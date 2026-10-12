import type { L } from '../types'
import type { FinErrorCode } from './finance'

export const FIN_ERRORS: Record<FinErrorCode, L> = {
  MISSING_VALUE: { es: 'Faltan valores: completa todos los campos con números válidos.', en: 'Missing values: fill every field with valid numbers.' },
  NOT_FINITE: { es: 'Algún valor no es un número finito.', en: 'A value is not a finite number.' },
  INVALID_RATE: { es: 'Tasa inválida: debe ser mayor que −100 %.', en: 'Invalid rate: it must be greater than −100 %.' },
  INVALID_PERIODS: { es: 'Número de periodos inválido.', en: 'Invalid number of periods.' },
  DIVISION_BY_ZERO: { es: 'Operación no definida: implica una división entre cero.', en: 'Undefined operation: it implies division by zero.' },
  NEGATIVE_NOT_ALLOWED: { es: 'Este valor no puede ser negativo.', en: 'This value cannot be negative.' },
  INSUFFICIENT_FLOWS: { es: 'Flujos insuficientes: necesitas la inversión inicial y al menos un flujo futuro.', en: 'Insufficient flows: you need the initial investment and at least one future flow.' },
  NO_SIGN_CHANGE: {
    es: 'La TIR no existe: todos los flujos tienen el mismo signo, así que el VPN nunca es cero.',
    en: 'The IRR does not exist: every flow has the same sign, so NPV is never zero.',
  },
  IRR_NOT_FOUND: {
    es: 'No se encontró una TIR entre −99 % y 1,000 %: el VPN no cruza cero en ese rango. No se inventa un resultado.',
    en: 'No IRR found between −99 % and 1,000 %: NPV does not cross zero in that range. No result is invented.',
  },
  NEVER_RECOVERED: { es: 'La inversión no se recupera dentro del horizonte de flujos.', en: 'The investment is not recovered within the cash-flow horizon.' },
  GROWTH_GE_RATE: { es: 'El crecimiento perpetuo debe ser menor que la tasa de descuento (g < r); si no, el valor terminal no está definido.', en: 'Perpetual growth must be lower than the discount rate (g < r); otherwise terminal value is undefined.' },
  WEIGHTS_INVALID: { es: 'Ponderaciones o correlación fuera de rango.', en: 'Weights or correlation out of range.' },
  TAX_RATE_INVALID: { es: 'La tasa de impuestos debe estar entre 0 % y menos de 100 %.', en: 'Tax rate must be between 0 % and less than 100 %.' },
  PRICE_LE_VARIABLE_COST: {
    es: 'El precio debe ser mayor que el costo variable unitario: con margen de contribución ≤ 0 no existe punto de equilibrio.',
    en: 'Price must exceed unit variable cost: with contribution margin ≤ 0 there is no break-even point.',
  },
}
