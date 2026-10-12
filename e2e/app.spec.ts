import { expect, test, type Page } from '@playwright/test'

async function onboard(page: Page) {
  await page.goto('./')
  await page.getByRole('button', { name: /Comenzar/ }).click()
  await page.getByRole('radio', { name: /Español/ }).click()
  await page.getByRole('button', { name: /Entrar a FINCORE/ }).click()
  await expect(page.getByTestId('total-xp')).toBeVisible()
}

const shot = (page: Page, name: string) => page.screenshot({ path: `test-results/screens/${test.info().project.name}-${name}.png`, fullPage: false })

test('onboarding, lesson completion, XP and persistence across reload', async ({ page }) => {
  await onboard(page)
  await shot(page, '01-dashboard')
  await expect(page.getByTestId('total-xp')).toContainText('0')

  await page.goto('./#/lesson/L1-01')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await shot(page, '02-lesson-theory')
  await page.goto('./#/lesson/L1-01?tab=practice')

  // Answer every exercise (first choice in each group) and check it.
  for (let i = 0; i < 20; i++) {
    const check = page.getByRole('button', { name: /^Comprobar$/ })
    if (!(await check.isVisible().catch(() => false))) break
    const card = page.locator('[data-exercise-id]')
    const groups = card.locator('[role="radiogroup"]')
    const n = await groups.count()
    for (let g = 0; g < n; g++) await groups.nth(g).locator('[role="radio"]').first().click()
    const boxes = card.locator('[role="checkbox"]')
    if (await boxes.count()) await boxes.first().click()
    for (const input of await card.locator('input[inputmode="decimal"]').all()) await input.fill('1')
    for (const sel of await card.locator('select').all()) await sel.selectOption({ index: 1 })
    if (i === 0) await shot(page, '03-exercise')
    await check.click()
    if (i === 0) await shot(page, '04-feedback')
    const next = page.getByRole('button', { name: /Continuar|Ver resultados/ })
    await next.click()
  }
  await expect(page.getByTestId('attempt-score')).toBeVisible()
  await shot(page, '05-results')

  await page.goto('./#/')
  const xpBefore = await page.getByTestId('total-xp').innerText()
  // wait for the debounced save, then reload
  await page.waitForTimeout(600)
  await page.reload()
  await expect(page.getByTestId('total-xp')).toHaveText(xpBefore)
  await expect(page).not.toHaveURL(/welcome/)
})

test('option order is stable within an attempt and survives reload', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/lesson/L1-01?tab=practice')
  const opts = page.locator('[data-option-id]')
  await expect(opts.first()).toBeVisible()
  const order = await opts.evaluateAll((els) => els.map((e) => e.getAttribute('data-option-id')))
  await opts.nth(1).click()
  expect(await opts.evaluateAll((els) => els.map((e) => e.getAttribute('data-option-id')))).toEqual(order)
  await page.waitForTimeout(600)
  await page.reload()
  await expect(opts.first()).toBeVisible()
  expect(await opts.evaluateAll((els) => els.map((e) => e.getAttribute('data-option-id')))).toEqual(order)
})

test('accounting lab: wrong balanced entry rejected, correct entry posts', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/lab')
  await expect(page.getByText(/aportación|capital/i).first()).toBeVisible()
  // TX01: capital contribution of $500,000 deposited in the bank.
  await page.getByLabel('Cuenta del renglón 1').selectOption('1102')
  await page.getByLabel('Importe del renglón 1').fill('500000')
  await page.getByLabel('Cuenta del renglón 2').selectOption('2201') // wrong account on purpose
  await page.getByRole('radiogroup', { name: 'Cargo o abono' }).nth(1).getByRole('radio', { name: 'Abono' }).click()
  await page.getByLabel('Importe del renglón 2').fill('500000')
  await expect(page.getByText('✓ Cuadra')).toBeVisible()
  await page.getByRole('button', { name: /^Comprobar$/ }).click()
  await expect(page.getByText('Cuenta no corresponde').first()).toBeVisible()
  await shot(page, '06-lab-wrong')
  await page.getByLabel('Cuenta del renglón 2').selectOption('3101')
  await page.getByRole('button', { name: /^Comprobar$/ }).click()
  await page.getByRole('button', { name: /Contabilizar/ }).click()
  await expect(page.getByText('Contabilizada').first()).toBeVisible()
  await shot(page, '07-lab-posted')
})

test('calculators: NPV/IRR, break-even and validation', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/calc/project')
  await page.getByLabel(/Tasa de descuento/).fill('10')
  await page.getByRole('button', { name: 'Eliminar flujo 4' }).click()
  const flows = ['-1000', '300', '400', '500']
  for (let i = 0; i < flows.length; i++) await page.getByLabel(`Flujo del periodo ${i}`).fill(flows[i])
  await expect(page.getByTestId('npv-result')).toContainText('-$21.04')
  await expect(page.getByTestId('irr-result')).toContainText('8.90')
  await shot(page, '08-npv')

  await page.goto('./#/calc/breakeven')
  await page.getByLabel('Costos fijos totales').fill('120000')
  await page.getByLabel('Precio de venta unitario').fill('250')
  await page.getByLabel('Costo variable unitario').fill('150')
  await expect(page.getByTestId('be-units')).toContainText('1,200')
  await page.getByLabel('Costo variable unitario').fill('300')
  await expect(page.getByTestId('calc-error')).toBeVisible()
  await page.getByLabel('Costos fijos totales').fill('abc')
  await expect(page.getByText(/número válido|valid number/i).first()).toBeVisible()
  await shot(page, '09-breakeven-error')
})

test('every main screen renders without console errors; no horizontal overflow on mobile', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await onboard(page)
  const routes = ['/', '/courses', '/path/1', '/lesson/L4-04', '/practice', '/exams/1', '/tools', '/lab', '/calc/pv', '/calc/fv', '/calc/compound', '/calc/annuity', '/calc/project', '/calc/wacc', '/calc/breakeven', '/calc/ratios', '/invest', '/tutor', '/stats', '/settings']
  for (const r of routes) {
    await page.goto(`./#${r}`)
    await expect(page.locator('main h1').first()).toBeVisible()
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `horizontal overflow on ${r}`).toBeLessThanOrEqual(1)
    await shot(page, `screen${r.replace(/\//g, '_') || '_home'}`)
  }
  expect(errors).toEqual([])
})

test('tutor answers locally', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/tutor')
  await expect(page.getByText('Modo local (sin IA)')).toBeVisible()
  await page.getByLabel('Escribe tu pregunta').fill('VPN al 10% flujos: -1000, 300, 400, 500')
  await page.getByRole('button', { name: 'Enviar' }).click()
  await expect(page.getByTestId('tutor-msg').last()).toContainText('-$21.04')
  await shot(page, '10-tutor')
})

test('PWA: manifest and service worker are served', async ({ page, request }) => {
  const m = await request.get('./manifest.webmanifest')
  expect(m.ok()).toBe(true)
  const manifest = await m.json()
  expect(manifest.icons.length).toBeGreaterThanOrEqual(3)
  const sw = await request.get('./sw.js')
  expect(sw.ok()).toBe(true)
  await page.goto('./')
  const registered = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.ready
    return !!reg.active
  })
  expect(registered).toBe(true)
  // offline: reload with network disabled still renders the app shell
  await page.context().setOffline(true)
  await page.reload()
  await expect(page.locator('#root')).not.toBeEmpty()
  await page.context().setOffline(false)
})

test('keyboard: skip link, focus visible and answering with the keyboard', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/lesson/L1-01?tab=practice')
  await expect(page.locator('[data-option-id]').first()).toBeVisible()
  await page.keyboard.press('Tab')
  const first = await page.evaluate(() => document.activeElement?.textContent ?? '')
  expect(first).toMatch(/Saltar|Skip/)
  const opt = page.locator('[data-option-id]').first()
  await opt.focus()
  const outline = await opt.evaluate((el) => getComputedStyle(el).outlineStyle)
  expect(outline).not.toBe('none')
  await page.keyboard.press('Enter')
  await expect(opt).toHaveAttribute('aria-checked', 'true')
  await page.getByRole('button', { name: /^Comprobar$/ }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('button', { name: /Continuar/ })).toBeVisible()
})

test('import rejects an invalid backup file with a visible error', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/settings')
  await page.getByTestId('import-input').setInputFiles({ name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from('{"app":"OTHER"}') })
  await expect(page.getByRole('alert').or(page.getByText(/no es un respaldo|inválid|invalid/i)).first()).toBeVisible()
})
