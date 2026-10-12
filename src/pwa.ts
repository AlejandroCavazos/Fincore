/** PWA helpers: service-worker registration and install prompt handling. */

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

let deferred: BeforeInstallPromptEvent | null = null
const listeners = new Set<() => void>()

export function registerServiceWorker() {
  if (typeof window === 'undefined') return
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferred = e as BeforeInstallPromptEvent
    listeners.forEach((l) => l())
  })
  window.addEventListener('appinstalled', () => {
    deferred = null
    listeners.forEach((l) => l())
  })
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return
  // When a new version takes control, reload once so the learner sees it (only if an older version was running).
  const hadController = !!navigator.serviceWorker.controller
  let reloaded = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || reloaded) return
    reloaded = true
    window.location.reload()
  })
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js', { scope: './', updateViaCache: 'none' })
      .then((reg) => {
        // Installed apps are often resumed instead of reopened: look for a new version when they come back.
        const check = () => {
          if (document.visibilityState === 'visible') reg.update().catch(() => {})
        }
        document.addEventListener('visibilitychange', check)
        window.addEventListener('focus', check)
      })
      .catch(() => {
        /* SW unsupported in this context (e.g. sandboxed preview); app keeps working online. */
      })
  })
}

export function canPromptInstall() {
  return !!deferred
}

export async function promptInstall(): Promise<'accepted' | 'dismissed' | 'unavailable'> {
  if (!deferred) return 'unavailable'
  await deferred.prompt()
  const r = await deferred.userChoice
  deferred = null
  listeners.forEach((l) => l())
  return r.outcome
}

export function onInstallAvailabilityChange(fn: () => void) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function isStandalone(): boolean {
  return window.matchMedia?.('(display-mode: standalone)').matches || (navigator as unknown as { standalone?: boolean }).standalone === true
}

export function isIos(): boolean {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}
