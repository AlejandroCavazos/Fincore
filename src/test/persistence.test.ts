import { beforeEach, describe, expect, it } from 'vitest'
import { __resetDbConnection, clearState, loadState, saveState } from '../lib/db'
import { exportState, importState, MAX_IMPORT_BYTES, validateState } from '../lib/backup'
import { awardXp, defaultState } from '../lib/progress'

describe('IndexedDB persistence (fake-indexeddb)', () => {
  beforeEach(async () => {
    await clearState()
    __resetDbConnection()
  })
  it('returns defaults when empty, then round-trips a saved state', async () => {
    const first = await loadState()
    expect(first.source).toBe('default')
    const s = awardXp({ ...defaultState(), settings: { ...defaultState().settings, onboarded: true, lang: 'en' } }, 'ex:A', 10, 'exercise')
    expect(await saveState(s)).toBe(true)
    __resetDbConnection() // simulate a reload
    const back = await loadState()
    expect(back.source).toBe('db')
    expect(back.state.settings.lang).toBe('en')
    expect(back.state.xpLedger['ex:A'].xp).toBe(10)
  })
})

describe('export / import validation', () => {
  it('exported files import back identically', () => {
    const s = awardXp(defaultState(), 'ex:A', 10, 'exercise')
    const r = importState(exportState(s))
    expect(r.ok).toBe(true)
    if (r.ok) expect(r.state).toEqual(s)
  })
  it('rejects invalid JSON, wrong headers, oversize files and corrupted fields', () => {
    expect(importState('not json').ok).toBe(false)
    expect(importState(JSON.stringify({ app: 'OTHER', format: 1, state: defaultState() })).ok).toBe(false)
    expect(importState('x'.repeat(MAX_IMPORT_BYTES + 1)).ok).toBe(false)
    const bad = { ...defaultState(), xpLedger: { 'ex:A': { xp: -5, at: 'x', reason: 'r' } } }
    expect(validateState(bad).ok).toBe(false)
    expect(validateState({ ...defaultState(), settings: { ...defaultState().settings, lang: 'fr' } }).ok).toBe(false)
  })
  it('blocks prototype-pollution keys', () => {
    const text = `{"app":"FINCORE","format":1,"exportedAt":"2026-01-01","state":${JSON.stringify(defaultState()).replace('"lessons":{}', '"lessons":{"__proto__":{"status":"completed","bestScore":1,"lastScore":1,"attempts":1}}')}}`
    const r = importState(text)
    expect(r.ok).toBe(false)
    expect(({} as Record<string, unknown>).status).toBeUndefined()
  })
})
