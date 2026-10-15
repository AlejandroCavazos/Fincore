import { describe, expect, it } from 'vitest'
import { mergeLives, mergeStates } from '../lib/merge'
import { defaultState, type AppState } from '../lib/progress'
import * as L from '../lib/lives/service'

const st = (f: (s: AppState) => void) => {
  const s = defaultState()
  f(s)
  return s
}

describe('account sync: merging two devices', () => {
  it('keeps completed lessons, best scores, XP and streak days from both', () => {
    const a = st((s) => {
      s.lessons['L1-01'] = { status: 'completed', bestScore: 0.9, lastScore: 0.9, attempts: 1, completedAt: '2026-10-10T00:00:00Z' }
      s.xpLedger['ex:A'] = { xp: 10, at: '2026-10-10T00:00:00Z', reason: 'ex' }
      s.activity = ['2026-10-10']
    })
    const b = st((s) => {
      s.lessons['L1-01'] = { status: 'in_progress', bestScore: 0.5, lastScore: 0.95, attempts: 3 }
      s.lessons['L1-02'] = { status: 'completed', bestScore: 1, lastScore: 1, attempts: 1 }
      s.xpLedger['ex:B'] = { xp: 20, at: '2026-10-11T00:00:00Z', reason: 'ex' }
      s.activity = ['2026-10-11']
    })
    const m = mergeStates(a, b)
    expect(m.lessons['L1-01']).toMatchObject({ status: 'completed', bestScore: 0.9, attempts: 3 })
    expect(m.lessons['L1-02'].status).toBe('completed')
    expect(Object.keys(m.xpLedger).sort()).toEqual(['ex:A', 'ex:B'])
    expect(m.activity).toEqual(['2026-10-10', '2026-10-11'])
    // Merging twice changes nothing (no duplicated XP or answers).
    expect(mergeStates(m, b)).toEqual(m)
  })
  it('keeps this device settings and unions lab projects', () => {
    const a = st((s) => {
      s.settings.theme = 'dark'
      s.labx.projects = [{ id: 'p1', name: 'A', createdAt: 'x', entries: [], sheet: {} }]
    })
    const b = st((s) => {
      s.labx.projects = [{ id: 'p2', name: 'B', createdAt: 'y', entries: [], sheet: {} }]
    })
    const m = mergeStates(a, b)
    expect(m.settings.theme).toBe('dark')
    expect(m.labx.projects.map((p) => p.id).sort()).toEqual(['p1', 'p2'])
  })
  it('lives: latest device wins but daily reviews never reset by switching browsers', () => {
    const t = new Date('2026-10-15T15:00:00Z')
    let a = L.initialState('free', t)
    a = L.finishRecovery(L.spend(L.spend(a, 'quiz', {}, t).s, 'quiz', {}, t).s, 3, {}, t).s // used 1 review
    let b = L.initialState('free', new Date(t.getTime() + 60_000))
    b = L.spend(b, 'quiz', {}, new Date(t.getTime() + 60_000)).s
    const m = mergeLives(a, b)!
    expect(m.lives).toBe(b.lives)
    expect(m.daily.recovered).toBe(1)
    expect(mergeLives(null, b)).toBe(b)
  })
})
