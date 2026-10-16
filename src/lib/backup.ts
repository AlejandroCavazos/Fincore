import { defaultState, STATE_VERSION, type AppState } from './progress'

export const MAX_IMPORT_BYTES = 5 * 1024 * 1024

type V = { ok: true; state: AppState } | { ok: false; errors: string[] }

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === 'object' && x !== null && !Array.isArray(x)
const isStr = (x: unknown): x is string => typeof x === 'string'
const isNum = (x: unknown): x is number => typeof x === 'number' && Number.isFinite(x)
const isBool = (x: unknown): x is boolean => typeof x === 'boolean'
const isDay = (x: unknown) => isStr(x) && /^\d{4}-\d{2}-\d{2}$/.test(x)
const isIso = (x: unknown) => isStr(x) && !Number.isNaN(Date.parse(x))
const SAFE_KEY = /^[\w.:|-]{1,200}$/

/**
 * Strict structural validation of a persisted / imported state. Unknown keys are
 * dropped, every known field is type-checked and keys are restricted to a safe
 * alphabet (prevents prototype pollution via "__proto__" etc.).
 */
export function validateState(input: unknown): V {
  const errors: string[] = []
  if (!isObj(input)) return { ok: false, errors: ['root: not an object'] }
  const d = defaultState()
  const out: AppState = d

  if (!isNum(input.version) || input.version < 1 || input.version > STATE_VERSION) errors.push('version: unsupported')

  const st = input.settings
  if (!isObj(st)) errors.push('settings: missing')
  else {
    if (st.lang !== 'es' && st.lang !== 'en') errors.push('settings.lang: invalid')
    else out.settings.lang = st.lang
    if (st.theme !== 'light' && st.theme !== 'dark' && st.theme !== 'system') errors.push('settings.theme: invalid')
    else out.settings.theme = st.theme
    if (!isBool(st.onboarded)) errors.push('settings.onboarded: invalid')
    else out.settings.onboarded = st.onboarded
    if (st.freeMode !== undefined) {
      if (!isBool(st.freeMode)) errors.push('settings.freeMode: invalid')
      else out.settings.freeMode = st.freeMode
    }
    if (st.dailyGoalXp !== undefined) {
      if (!isNum(st.dailyGoalXp) || st.dailyGoalXp < 10 || st.dailyGoalXp > 1000) errors.push('settings.dailyGoalXp: invalid')
      else out.settings.dailyGoalXp = st.dailyGoalXp
    }
  }

  const rec = <T>(name: string, v: unknown, item: (x: unknown) => T | null): Record<string, T> => {
    const r: Record<string, T> = Object.create(null)
    if (v === undefined) return {}
    if (!isObj(v)) {
      errors.push(`${name}: not an object`)
      return {}
    }
    for (const [k, x] of Object.entries(v)) {
      if (!SAFE_KEY.test(k) || k === '__proto__' || k === 'constructor' || k === 'prototype') {
        errors.push(`${name}: unsafe key`)
        continue
      }
      const parsed = item(x)
      if (parsed === null) errors.push(`${name}.${k}: invalid`)
      else r[k] = parsed
    }
    return { ...r }
  }

  out.xpLedger = rec('xpLedger', input.xpLedger, (x) =>
    isObj(x) && isNum(x.xp) && x.xp >= 0 && x.xp <= 1000 && isIso(x.at) && isStr(x.reason) ? { xp: x.xp, at: x.at as string, reason: x.reason } : null,
  )
  out.lessons = rec('lessons', input.lessons, (x) =>
    isObj(x) && (x.status === 'in_progress' || x.status === 'completed') && isNum(x.bestScore) && x.bestScore >= 0 && x.bestScore <= 1 && isNum(x.attempts)
      ? {
          status: x.status,
          bestScore: x.bestScore,
          lastScore: isNum(x.lastScore) ? x.lastScore : x.bestScore,
          attempts: x.attempts,
          completedAt: isIso(x.completedAt) ? (x.completedAt as string) : undefined,
          theoryRead: isBool(x.theoryRead) ? x.theoryRead : undefined,
        }
      : null,
  )
  out.srs = rec('srs', input.srs, (x) =>
    isObj(x) && isNum(x.ease) && isNum(x.interval) && isNum(x.reps) && isNum(x.lapses) && isDay(x.due)
      ? { ease: x.ease, interval: x.interval, reps: x.reps, lapses: x.lapses, due: x.due as string }
      : null,
  )
  out.achievements = rec('achievements', input.achievements, (x) => (isIso(x) ? (x as string) : null))
  out.attempts = rec('attempts', input.attempts, (x) =>
    isObj(x) && isStr(x.id) && isStr(x.key) && Array.isArray(x.exerciseIds) && x.exerciseIds.every(isStr) && isObj(x.orders) && isNum(x.index) && isObj(x.responses) && isIso(x.startedAt)
      ? (x as unknown as AppState['attempts'][string])
      : null,
  )

  if (input.answers !== undefined) {
    if (!Array.isArray(input.answers)) errors.push('answers: not an array')
    else
      out.answers = input.answers
        .filter((a) => isObj(a) && isStr(a.exerciseId) && isStr(a.attemptId) && isBool(a.correct) && isNum(a.score) && isIso(a.at) && (a.mode === 'lesson' || a.mode === 'review' || a.mode === 'exam'))
        .slice(-2000) as AppState['answers']
  }
  if (input.activity !== undefined) {
    if (!Array.isArray(input.activity) || !input.activity.every(isDay)) errors.push('activity: invalid')
    else out.activity = [...new Set(input.activity as string[])].sort()
  }
  const lab = input.lab
  if (lab !== undefined) {
    if (!isObj(lab) || !Array.isArray(lab.journal)) errors.push('lab: invalid')
    else {
      const okEntry = (e: unknown) =>
        isObj(e) && isStr(e.id) && isObj(e.description) && Array.isArray(e.lines) && e.lines.every((l) => isObj(l) && isStr(l.accountCode) && (l.side === 'D' || l.side === 'C') && isNum(l.amount) && l.amount > 0)
      if (!lab.journal.every(okEntry)) errors.push('lab.journal: invalid entry')
      else out.lab.journal = lab.journal as AppState['lab']['journal']
      out.lab.solved = rec('lab.solved', lab.solved, (x) => (isIso(x) ? (x as string) : null))
    }
  }
  const lx = input.labx
  if (lx !== undefined) {
    if (!isObj(lx)) errors.push('labx: invalid')
    else {
      out.labx.practice = rec('labx.practice', lx.practice, (x) => (isObj(x) && isNum(x.done) && isNum(x.correct) ? { done: x.done, correct: x.correct } : null))
      out.labx.exams = rec('labx.exams', lx.exams, (x) =>
        isObj(x) && isNum(x.best) && isNum(x.tries) && (x.passedAt === undefined || isIso(x.passedAt)) ? { best: x.best, tries: x.tries, ...(x.passedAt ? { passedAt: x.passedAt as string } : {}) } : null,
      )
      const okLine = (l: unknown) => isObj(l) && isStr(l.accountCode) && (l.side === 'D' || l.side === 'C') && isNum(l.amount) && l.amount > 0
      const okEntry = (e: unknown) => isObj(e) && isStr(e.id) && isStr(e.date) && isObj(e.description) && (e.kind === 'I' || e.kind === 'E' || e.kind === 'D') && Array.isArray(e.lines) && e.lines.every(okLine)
      const okProject = (p: unknown) => isObj(p) && isStr(p.id) && isStr(p.name) && isIso(p.createdAt) && Array.isArray(p.entries) && p.entries.every(okEntry) && (p.sheet === undefined || isObj(p.sheet))
      if (isObj(lx.despacho)) {
        const d = lx.despacho
        out.labx.despacho = {
          ...(isStr(d.name) && d.name.length <= 60 ? { name: d.name } : {}),
          cases: rec('labx.despacho', d.cases ?? {}, (x) => (isObj(x) && isNum(x.stars) && isIso(x.at) ? { stars: x.stars, at: x.at as string } : null)),
        }
      }
      if (lx.projects !== undefined) {
        if (!Array.isArray(lx.projects) || !lx.projects.every(okProject)) errors.push('labx.projects: invalid')
        else
          out.labx.projects = (lx.projects as AppState['labx']['projects']).map((p) => ({
            ...p,
            sheet: rec('labx.sheet', p.sheet ?? {}, (x) => (isStr(x) && x.length <= 500 ? x : null)),
          }))
      }
    }
  }
  const fr = input.fraud
  if (fr !== undefined) {
    if (!isObj(fr) || !isNum(fr.bestScore)) errors.push('fraud: invalid')
    else {
      out.fraud.bestScore = Math.max(0, Math.min(1, fr.bestScore))
      out.fraud.cases = rec('fraud.cases', fr.cases, (x) => (isObj(x) && isNum(x.score) && isIso(x.at) ? { score: x.score, at: x.at as string } : null))
    }
  }
  out.exams = rec('exams', input.exams, (x) =>
    Array.isArray(x) && x.every((r) => isObj(r) && isNum(r.score) && isIso(r.at) && isBool(r.passed)) ? (x as AppState['exams'][string]) : null,
  )
  out.subtopics = rec('subtopics', input.subtopics, (x) => (isIso(x) ? (x as string) : null))
  if (isObj(input.tutor) && isNum(input.tutor.messages)) out.tutor.messages = input.tutor.messages

  return errors.length ? { ok: false, errors } : { ok: true, state: out }
}

export interface ExportFile {
  app: 'FINCORE'
  format: 1
  exportedAt: string
  state: AppState
}

export function exportState(state: AppState): string {
  const file: ExportFile = { app: 'FINCORE', format: 1, exportedAt: new Date().toISOString(), state }
  return JSON.stringify(file, null, 2)
}

export function importState(text: string): V {
  if (text.length > MAX_IMPORT_BYTES) return { ok: false, errors: ['file: too large'] }
  let parsed: unknown
  try {
    parsed = JSON.parse(text)
  } catch {
    return { ok: false, errors: ['file: invalid JSON'] }
  }
  if (!isObj(parsed) || parsed.app !== 'FINCORE' || parsed.format !== 1) return { ok: false, errors: ['file: not a FINCORE backup'] }
  return validateState(parsed.state)
}
