// Renders the PWA icons from the logo SVG with Playwright's Chromium.
// Usage: node scripts/make-icons.mjs
import { chromium } from '@playwright/test'
import { readFileSync } from 'node:fs'

const svg = readFileSync('public/favicon.svg', 'utf8')
const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')
const icon = (size, { maskable = false, rounded = true } = {}) => {
  // Maskable icons need the artwork inside the 80 % safe zone over a full-bleed background.
  const pad = maskable ? size * 0.14 : 0
  const s = size - pad * 2
  const body = rounded && !maskable ? inner : inner.replace('rx="16"', 'rx="0"')
  return `<html><body style="margin:0;background:transparent"><div style="width:${size}px;height:${size}px;background:${maskable || !rounded ? '#0b1731' : 'transparent'};display:grid;place-items:center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${s}" height="${s}">${body}</svg></div></body></html>`
}
const targets = [
  ['public/icons/icon-192.png', 192, {}],
  ['public/icons/icon-512.png', 512, {}],
  ['public/icons/maskable-512.png', 512, { maskable: true }],
  ['public/icons/apple-touch-icon.png', 180, { rounded: false }],
]
const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {})
const page = await browser.newPage()
for (const [file, size, opts] of targets) {
  await page.setViewportSize({ width: size, height: size })
  await page.setContent(icon(size, opts))
  await page.screenshot({ path: file, omitBackground: !opts.maskable && opts.rounded !== false, clip: { x: 0, y: 0, width: size, height: size } })
  console.log('wrote', file)
}
await browser.close()
