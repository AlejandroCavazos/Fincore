import { describe, expect, it } from 'vitest'
import { adaptiveDifficulty, answer, checkGenerated, extractNumbers, findConcept, generateExercise } from '../lib/tutor'
import * as F from '../lib/finance'
import { seededRng } from '../lib/shuffle'
import { getLesson } from '../content'

describe('local tutor', () => {
  it('every concept links to an existing lesson', async () => {
    const { CONCEPTS } = await import('../lib/tutor')
    for (const c of CONCEPTS) if (c.lesson) expect(getLesson(c.lesson), c.id).toBeDefined()
  })
  it('finds concepts in Spanish and English, accent-insensitive', () => {
    expect(findConcept('explica la partida doble')?.id).toBe('double-entry')
    expect(findConcept('what is the accounting equation?')?.id).toBe('equation')
    expect(findConcept('que es la depreciacion')?.id).toBe('depreciation')
  })
  it('extracts signed numbers', () => {
    expect(extractNumbers('-1,000, 300, $400.5 y 12%')).toEqual([-1000, 300, 400.5, 12])
  })
  it('computes NPV with the verified function', () => {
    const r = answer('VPN al 10% flujos: -1000, 300, 400, 500', 'es')
    expect(r.text).toContain('-$21.04')
    expect(r.steps?.length).toBe(5)
  })
  it('reports multiple IRRs and refuses to invent an IRR', () => {
    expect(answer('TIR flujos: -100, 230, -132', 'es').text).toMatch(/varias TIR/)
    expect(answer('TIR flujos: 100, 200', 'es').text).not.toMatch(/TIR =/)
  })
  it('computes WACC from key=value pairs', () => {
    expect(answer('wacc E=600000 D=400000 Ke=15 Kd=11 T=30', 'es').text).toContain('12.08')
  })
  it('tax answers carry jurisdiction, date and a verification disclaimer', () => {
    const r = answer('¿Qué es el IVA acreditable?', 'es', { today: '2026-10-12' })
    expect(r.note).toMatch(/México/)
    expect(r.note).toMatch(/2026-10-12/)
    expect(r.note).toMatch(/DOF/)
  })
  it('generated exercises have code-verified answers', () => {
    const rng = seededRng(3)
    for (let i = 0; i < 50; i++) {
      const ex = generateExercise('npv', 2, 'es', rng)
      const flows = ex.prompt.match(/-?[\d,]+(?=,|\s\(t)/g)!.map((x) => Number(x.replace(/,/g, '')))
      const rate = Number(ex.prompt.match(/(\d+) %/)![1]) / 100
      const v = F.npv(rate, flows)
      expect(v.ok).toBe(true)
      if (v.ok) expect(Math.abs(v.value - ex.answer)).toBeLessThan(0.01)
      expect(checkGenerated(ex, String(ex.answer))).toBe(true)
      expect(checkGenerated(ex, String(ex.answer + 1000))).toBe(false)
    }
    for (const t of ['compound', 'breakeven', 'equation', 'wacc'] as const) {
      const ex = generateExercise(t, 3, 'en', rng)
      expect(checkGenerated(ex, String(ex.answer))).toBe(true)
    }
  })
  it('difficulty adapts to accuracy', () => {
    expect(adaptiveDifficulty([])).toBe(1)
    expect(adaptiveDifficulty([false, false, true])).toBe(1)
    expect(adaptiveDifficulty([true, true, false])).toBe(2)
    expect(adaptiveDifficulty([true, true, true, true])).toBe(3)
  })
  it('unknown questions get an honest fallback', () => {
    expect(answer('¿quién ganó el partido?', 'es').text).toMatch(/No encontré/)
  })
})
