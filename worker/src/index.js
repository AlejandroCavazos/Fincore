// FINCORE — AI tutor proxy on Cloudflare Workers.
// The Anthropic API key lives only in the Worker secret ANTHROPIC_API_KEY; the browser never sees it.
import Anthropic from '@anthropic-ai/sdk'

const MAX_BODY = 32 * 1024
const MAX_MESSAGES = 12
const MAX_CHARS = 2000
const PER_MINUTE = 15

const SYSTEM = (lang, today) => `You are the tutor inside FINCORE, an academy app for accounting and finance learners in Mexico.
Reply in ${lang === 'en' ? 'English' : 'Spanish'}. Today is ${today}.
- You may answer general questions on any topic, but your specialty is accounting (NIF and IFRS), cost accounting, corporate finance, Mexican tax, audit and investing; relate answers to these when it helps.
- Teach the procedure step by step instead of only giving the final answer. Show calculations explicitly so the learner can check them with FINCORE's calculators.
- For tax questions: state the jurisdiction (Mexico, federal unless stated), that your knowledge has a cutoff date, and that rules (LISR, LIVA, CFF, RMF) must be verified against the DOF before applying them. Never present an unverified rule as current. This is education, not tax, legal or investment advice.
- If you are not sure of a fact, say so.
- Keep answers under 300 words. Use plain text; **bold** is the only formatting the app renders.`

// Best-effort per-isolate rate limit (Cloudflare may run several isolates).
const hits = new Map()
function limited(ip) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60_000)
  arr.push(now)
  hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return arr.length > PER_MINUTE
}

function cors(origin, env) {
  const allowed = String(env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean)
  const ok = origin && allowed.includes(origin)
  return {
    ok,
    headers: {
      ...(ok ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' } : {}),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  }
}

const json = (status, body, headers) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...headers } })

export function validate(body) {
  if (!body || typeof body !== 'object') return 'invalid body'
  if (body.lang !== 'es' && body.lang !== 'en') return 'invalid lang'
  if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > MAX_MESSAGES) return 'invalid messages'
  for (const m of body.messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string' || !m.content.trim() || m.content.length > MAX_CHARS) return 'invalid message'
  }
  if (body.messages[body.messages.length - 1].role !== 'user') return 'last message must be from user'
  return null
}

// Merge consecutive same-role turns and make sure the conversation starts with the user.
export function normalise(messages) {
  const out = []
  for (const m of messages) {
    const last = out[out.length - 1]
    if (last && last.role === m.role) last.content += '\n\n' + m.content
    else out.push({ role: m.role, content: m.content })
  }
  while (out.length && out[0].role !== 'user') out.shift()
  return out
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const { ok: originOk, headers } = cors(request.headers.get('Origin'), env)
    if (request.method === 'OPTIONS') return new Response(null, { status: originOk ? 204 : 403, headers })
    if (url.pathname === '/health') return json(200, { ok: true, configured: !!env.ANTHROPIC_API_KEY }, headers)
    if (request.method !== 'POST' || url.pathname !== '/tutor') return json(404, { error: 'not found' }, headers)
    if (!originOk) return json(403, { error: 'origin not allowed' }, headers)
    if (!env.ANTHROPIC_API_KEY) return json(503, { error: 'tutor not configured' }, headers)
    if (limited(request.headers.get('CF-Connecting-IP') || '?')) return json(429, { error: 'too many requests' }, headers)

    const raw = await request.text()
    if (raw.length > MAX_BODY) return json(413, { error: 'body too large' }, headers)
    let body
    try {
      body = JSON.parse(raw)
    } catch {
      return json(400, { error: 'invalid JSON' }, headers)
    }
    const err = validate(body)
    if (err) return json(400, { error: err }, headers)

    try {
      const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })
      const response = await client.messages.create({
        model: env.TUTOR_MODEL || 'claude-opus-5-5',
        max_tokens: 2000,
        system: SYSTEM(body.lang, new Date().toISOString().slice(0, 10)),
        messages: normalise(body.messages),
      })
      if (response.stop_reason === 'refusal') return json(200, { text: body.lang === 'en' ? 'I cannot help with that request.' : 'No puedo ayudar con esa solicitud.' }, headers)
      const text = response.content
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('\n')
        .trim()
      if (!text) return json(502, { error: 'empty response' }, headers)
      return json(200, { text }, headers)
    } catch (e) {
      console.error('tutor error', e?.status, e?.message)
      return json(502, { error: 'upstream error' }, headers)
    }
  },
}
