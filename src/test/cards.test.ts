import { describe, expect, it } from 'vitest'
import { LESSONS, exercisesOfLesson } from '../content'
import { buildCards, cardsEnabled, splitLead } from '../lib/cards'

const pilot = LESSONS.filter(cardsEnabled)

describe('theory cards', () => {
  it('pilot covers Contabilidad Nivel 1', () => {
    expect(pilot.length).toBeGreaterThanOrEqual(16)
  })
  it('splits a paragraph into a short key idea and the rest, never cutting bold text', () => {
    expect(splitLead('Una **cuenta** es un cajón. Hay muchos cajones. Y más.')).toEqual(['Una **cuenta** es un cajón. Hay muchos cajones.', 'Y más.'])
    expect(splitLead('Primero **esto. Luego** aquello. Fin.')).toEqual(['Primero **esto. Luego** aquello.', 'Fin.'])
    expect(splitLead('Sin punto final')).toEqual(['Sin punto final', ''])
  })
  it('loses no theory text and keeps every card short to read', () => {
    for (const l of pilot)
      l.theory.forEach((sec, i) => {
        const cards = buildCards(l, i, exercisesOfLesson(l))
        const shown = cards.flatMap((c) => (c.kind === 'title' ? [c.lead?.es ?? ''] : c.kind === 'idea' ? [c.text.es, c.more?.es ?? ''] : [])).join(' ')
        for (const p of sec.body) for (const word of p.es.split(/\s+/).slice(0, 3)) expect(shown, `${l.id}:${i}`).toContain(word)
        const firstSight = cards.filter((c) => c.kind === 'idea').map((c) => (c.kind === 'idea' ? c.text.es.length : 0))
        expect(Math.max(0, ...firstSight), `${l.id}:${i}`).toBeLessThan(700)
      })
  })
  it('adds quick one-tap questions from the topic and key points at the end', () => {
    const l = pilot[0]
    const all = l.theory.flatMap((_, i) => buildCards(l, i, exercisesOfLesson(l)))
    const checks = all.filter((c) => c.kind === 'check')
    expect(checks.length).toBeGreaterThan(0)
    for (const c of checks) if (c.kind === 'check') expect(['mcq', 'truefalse']).toContain(c.exercise.kind)
    expect(buildCards(l, l.theory.length - 1, exercisesOfLesson(l)).at(-1)?.kind).toBe('keypoints')
  })
})
