// FINCORE — optional AI tutor proxy.
// The API key is read from the ANTHROPIC_API_KEY environment variable and never
// sent to the browser. Run: ANTHROPIC_API_KEY=... ALLOWED_ORIGIN=https://your.app node index.js
import http from 'node:http'
import Anthropic from '@anthropic-ai/sdk'

const PORT = Number(process.env.PORT || 8787)
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
const MODEL = process.env.TUTOR_MODEL || 'claude-opus-5-5'
const MAX_BODY = 32 * 1024
const MAX_MESSAGES = 12
const MAX_CHARS = 2000

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set. The tutor server will not start.')
  process.exit(1)
}

const client = new Anthropic()

const SYSTEM = (lang) => `You are FINCORE's accounting and finance tutor for learners in Mexico.
Reply in ${lang === 'en' ? 'English' : 'Spanish'}.
- Teach the procedure step by step; do not just give the final answer.
- Show every calculation explicitly so the learner can verify it with the app's calculators.
- Accounting standards: NIF (Mexico) and IFRS. Say which one applies when it matters.
- Tax topics: state the jurisdiction (Mexico, federal), that your knowledge has a cutoff date, and that rules (LISR, LIVA, CFF, RMF) must be verified against the DOF before applying them. Never present an unverified rule as current. This is education, not tax advice.
- Keep answers concise (under 250 words) and use plain text with **bold** only.`

// Simple in-memory rate limit: 20 requests per minute per IP.
const hits = new Map()
function limited(ip) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60_000)
  arr.push(now)
  hits.set(ip, arr)
  return arr.length > 20
}

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(JSON.stringify(body))
}

function validate(body) {
  if (!body || typeof body !== 'object') return 'invalid body'
  if (body.lang !== 'es' && body.lang !== 'en') return 'invalid lang'
  if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > MAX_MESSAGES) return 'invalid messages'
  for (const m of body.messages) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string' || !m.content.trim() || m.content.length > MAX_CHARS) return 'invalid message'
  }
  if (body.messages[body.messages.length - 1].role !== 'user') return 'last message must be from user'
  return null
}

// Merge consecutive same-role turns and make sure the list starts with a user turn.
function normalise(messages) {
  const out = []
  for (const m of messages) {
    const last = out[out.length - 1]
    if (last && last.role === m.role) last.content += '\n\n' + m.content
    else out.push({ role: m.role, content: m.content })
  }
  while (out.length && out[0].role !== 'user') out.shift()
  return out
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') return send(res, 204, {})
  if (req.method !== 'POST' || req.url !== '/tutor') return send(res, 404, { error: 'not found' })
  if (limited(req.socket.remoteAddress || '?')) return send(res, 429, { error: 'too many requests' })

  let raw = ''
  for await (const chunk of req) {
    raw += chunk
    if (raw.length > MAX_BODY) return send(res, 413, { error: 'body too large' })
  }
  let body
  try {
    body = JSON.parse(raw)
  } catch {
    return send(res, 400, { error: 'invalid JSON' })
  }
  const err = validate(body)
  if (err) return send(res, 400, { error: err })

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: SYSTEM(body.lang),
      messages: normalise(body.messages),
    })
    if (response.stop_reason === 'refusal') return send(res, 200, { text: body.lang === 'en' ? 'I cannot help with that request.' : 'No puedo ayudar con esa solicitud.' })
    const text = response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim()
    if (!text) return send(res, 502, { error: 'empty response' })
    return send(res, 200, { text })
  } catch (e) {
    console.error('tutor error', e?.status, e?.message)
    return send(res, 502, { error: 'upstream error' })
  }
})

server.listen(PORT, () => console.log(`FINCORE tutor proxy on :${PORT} (model ${MODEL}, origin ${ALLOWED_ORIGIN})`))
