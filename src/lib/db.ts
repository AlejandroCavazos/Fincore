import { openDB, type IDBPDatabase } from 'idb'
import { defaultState, type AppState } from './progress'
import { validateState } from './backup'

const DB_NAME = 'fincore'
const DB_VERSION = 1
const STORE = 'kv'
const KEY = 'state'

let dbPromise: Promise<IDBPDatabase> | null = null

function db(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(d) {
        if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE)
      },
    })
  }
  return dbPromise
}

export function isIndexedDbAvailable(): boolean {
  try {
    return typeof indexedDB !== 'undefined' && indexedDB !== null
  } catch {
    return false
  }
}

/** Loads the persisted state. Corrupt or invalid data falls back to defaults (never throws). */
export async function loadState(): Promise<{ state: AppState; source: 'db' | 'default'; error?: string }> {
  if (!isIndexedDbAvailable()) return { state: defaultState(), source: 'default', error: 'indexeddb-unavailable' }
  try {
    const raw = await (await db()).get(STORE, KEY)
    if (raw === undefined) return { state: defaultState(), source: 'default' }
    const v = validateState(raw)
    if (!v.ok) return { state: defaultState(), source: 'default', error: v.errors.join('; ') }
    return { state: v.state, source: 'db' }
  } catch (e) {
    return { state: defaultState(), source: 'default', error: String(e) }
  }
}

export async function saveState(state: AppState): Promise<boolean> {
  if (!isIndexedDbAvailable()) return false
  try {
    await (await db()).put(STORE, state, KEY)
    return true
  } catch {
    return false
  }
}

export async function clearState(): Promise<void> {
  if (!isIndexedDbAvailable()) return
  await (await db()).delete(STORE, KEY)
}

/** Test helper: forget the cached connection. */
export function __resetDbConnection() {
  dbPromise = null
}
