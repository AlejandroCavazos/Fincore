import { useEffect, useState } from 'react'

export interface Route {
  path: string
  segments: string[]
  query: URLSearchParams
}

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '') || '/'
  const [p, q = ''] = raw.split('?')
  const path = p.startsWith('/') ? p : `/${p}`
  return { path, segments: path.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(q) }
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const on = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

export function navigate(path: string) {
  const target = `#${path.startsWith('/') ? path : `/${path}`}`
  if (window.location.hash === target) return
  window.location.hash = target
}

export function goBack(fallback = '/') {
  if (window.history.length > 1) window.history.back()
  else navigate(fallback)
}
