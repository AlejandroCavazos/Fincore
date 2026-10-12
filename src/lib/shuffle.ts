/**
 * Randomness utilities.
 *
 * Option order is produced with the Fisher–Yates (Knuth) shuffle. By default the
 * random source is `crypto.getRandomValues` (unbiased integer sampling); tests can
 * inject a seeded generator for reproducibility.
 */

/** Returns a float in [0, 1). */
export type Rng = () => number

/** Cryptographically strong RNG (falls back to Math.random where crypto is absent). */
export const cryptoRng: Rng = () => {
  const c = globalThis.crypto
  if (c && typeof c.getRandomValues === 'function') {
    const buf = new Uint32Array(1)
    c.getRandomValues(buf)
    return buf[0] / 4294967296
  }
  return Math.random()
}

/** Deterministic PRNG (mulberry32) for reproducible datasets and tests. */
export function seededRng(seed: number): Rng {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Uniform integer in [0, maxExclusive). */
export function randomInt(maxExclusive: number, rng: Rng = cryptoRng): number {
  return Math.floor(rng() * maxExclusive)
}

/**
 * Fisher–Yates shuffle. Returns a NEW array; the input is never mutated.
 * Every permutation is equally likely given a uniform rng.
 */
export function fisherYates<T>(items: readonly T[], rng: Rng = cryptoRng): T[] {
  const a = items.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1, rng)
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

/** Random id for attempts (not security-sensitive). */
export function randomId(prefix = ''): string {
  const n = Math.floor(cryptoRng() * 2 ** 32).toString(36)
  const m = Math.floor(cryptoRng() * 2 ** 32).toString(36)
  return `${prefix}${Date.now().toString(36)}${n}${m}`
}
