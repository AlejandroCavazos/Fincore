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

import { allChats } from '../content/chats'
import { getLesson } from '../content'

describe('chat lessons', () => {
  it('have one script per theory section and every challenge has one right answer', () => {
    for (const c of allChats()) {
      const l = getLesson(c.lessonId)!
      expect(c.sections).toHaveLength(l.theory.length)
      for (const sec of c.sections) {
        expect(sec.length).toBeGreaterThan(2)
        for (const st of sec) if ('ask' in st) expect(st.options.filter((o) => o.ok)).toHaveLength(1)
      }
    }
  })
})

import { allInteractive } from '../content/interactive'

describe('interactive lessons', () => {
  for (const it2 of allInteractive()) {
    it(`${it2.lessonId} matches the lesson and every challenge is solvable`, () => {
      const lesson = getLesson(it2.lessonId)!
      expect(it2.sections.length).toBe(lesson.theory.length)
      for (const sec of it2.sections) {
        for (const b of sec ?? []) {
          if ('ask' in b) expect(b.options.filter((o) => o.ok).length).toBe(1)
          if ('spot' in b) {
            const s = b.spot
            expect(s.wrong).toBeGreaterThanOrEqual(0)
            expect(s.wrong).toBeLessThan(s.lines.length)
          }
          if ('sort' in b) for (const x of b.sort.items) expect(b.sort.buckets[x.bucket]).toBeTruthy()
          if ('order' in b) expect(b.order.steps.length).toBeGreaterThanOrEqual(3)
          if ('match' in b) expect(new Set(b.match.pairs.map((p) => p[0])).size).toBe(b.match.pairs.length)
          if ('balance' in b)
            for (const o of b.balance.ops) {
              expect(o.options.filter((x) => x.ok).length).toBe(1)
              expect(o.d.a).toBe(o.d.p + o.d.c)
            }
          if ('sim' in b && b.sim.goal) {
            const start = Object.fromEntries(b.sim.inputs.map((i) => [i.key, i.value]))
            // Some corner of the sliders must reach the goal.
            const ins = b.sim.inputs
            const corners = Array.from({ length: 2 ** ins.length }, (_, m) => Object.fromEntries(ins.map((i, k) => [i.key, m & (1 << k) ? i.max : i.min])))
            expect(corners.some((c) => b.sim.goal!.check(c))).toBe(true)
            expect(b.sim.goal.check(start)).toBe(false)
          }
        }
      }
    })
  }
})
