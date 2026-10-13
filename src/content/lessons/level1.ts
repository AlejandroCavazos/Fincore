import type { Exercise, Lesson } from '../../types'
import * as a from './n1/partA'
import * as b from './n1/partB'
import * as c from './n1/partC'

/**
 * FINCORE — Contabilidad Financiera, Nivel 1: Introducción a la contabilidad.
 * Temario v2.0 (15 temas en 4 unidades). Jurisdicción: México (NIF).
 */
export const lessons: Lesson[] = [...a.lessons, ...b.lessons, ...c.lessons]
export const exercises: Exercise[] = [...a.exercises, ...b.exercises, ...c.exercises]
