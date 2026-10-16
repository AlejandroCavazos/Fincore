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
    if (await page.getByTestId('out-of-lives').isVisible().catch(() => false)) break
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
  // Plan Gratis: guessing usually runs out of the 5 lives before the end.
  await expect(page.getByTestId('attempt-score').or(page.getByTestId('out-of-lives'))).toBeVisible()
  await shot(page, '05-results')
  if (await page.getByTestId('out-of-lives').isVisible()) {
    await expect(page.getByTestId('lives').first()).toBeAttached()
    await expect(page.getByTestId('out-of-lives')).toContainText('guardamos tu avance')
    // Theory, calculators and tutor still work with 0 lives.
    await page.goto('./#/lesson/L1-01')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await page.goto('./#/calc')
    await expect(page.getByTestId('out-of-lives')).toHaveCount(0)
    // Recovery review: summary + 3 questions, costs nothing.
    await page.goto('./#/lives/recover?topic=L1-01')
    await expect(page.getByTestId('recover-question')).toHaveCount(3)
    await shot(page, '05b-recover')
  }

  await page.goto('./#/')
  const xpBefore = await page.getByTestId('total-xp').innerText()
  // wait for the debounced save, then reload
  await page.waitForTimeout(600)
  await page.reload()
  await expect(page.getByTestId('total-xp')).toHaveText(xpBefore)
  await expect(page).not.toHaveURL(/welcome/)
})

test('lives: counter, popover and Mis vidas', async ({ page }) => {
  await onboard(page)
  const heart = page.locator('[data-testid="lives"]:visible')
  await expect(heart).toHaveText('5/5')
  await heart.click()
  await expect(page.getByRole('dialog', { name: 'Tus vidas' })).toContainText('Vidas llenas')
  await expect(page.getByRole('dialog', { name: 'Tus vidas' })).toContainText('Plan Gratis: 5 vidas máximo, 1 cada 4 horas')
  await page.goto('./#/settings')
  await expect(page.getByTestId('my-lives')).toContainText('5 de 5 vidas')
  await expect(page.getByTestId('my-lives')).not.toContainText('Repasar para recuperar')
  await shot(page, '06-my-lives')
})

test('plans: normal prices, no savings or discounts', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/plans')
  await expect(page.locator('[data-plan="plus"]')).toContainText('$99 /mes')
  await expect(page.locator('[data-plan="pro"]')).toContainText('$199 /mes')
  await expect(page.locator('[data-plan="free"]')).toContainText('$0')
  await expect(page.locator('main')).not.toContainText(/Ahorr|fundador|%/)
  await shot(page, '07-plans-annual')
})

test('chat lesson: challenge first, replies and finish', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/settings')
  await page.getByRole('checkbox', { name: /Modo libre/ }).check()
  await page.goto('./#/lesson/L1-16?s=2')
  const chat = page.getByTestId('chat-lesson')
  await expect(chat).toBeVisible()
  // Answer every challenge (first option) until the finish button shows.
  for (let i = 0; i < 10; i++) {
    if (await page.getByTestId('chat-finish').isVisible()) break
    const opt = chat.locator('[data-testid="chat-ask"] button').first()
    await opt.waitFor({ timeout: 8000 }).catch(() => {})
    if (await opt.isVisible()) {
      if (i === 0) await shot(page, '09-chat-question')
      await opt.click()
    }
  }
  await expect(page.getByTestId('chat-finish')).toBeVisible({ timeout: 10000 })
  await shot(page, '09-chat-end')
  await page.getByTestId('chat-finish').click()
  await expect(page).toHaveURL(/s=3/)
})

test('courses: area, topic and subtopics advance in order', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/courses')
  await page.locator('a[href="#/area/contabilidad"]').click()
  await expect(page.getByRole('heading', { level: 1, name: 'Contabilidad Financiera' })).toBeVisible()
  await shot(page, '10-area')
  await page.locator('a[href="#/lesson/L1-01"]').click()
  await expect(page.getByText(/0 de \d+ subtemas/)).toBeVisible()
  await shot(page, '11-topic')
  await page.getByText(/^Continuar$/i).click()
  await expect(page).toHaveURL(/s=0/)
  await shot(page, '12-subtopic')
  await page.getByTestId('view-toggle').click()
  await page.getByRole('button', { name: /Entendido, siguiente/ }).click()
  await expect(page).toHaveURL(/s=1/)
  await page.goto('./#/lesson/L1-01')
  await expect(page.getByText(/1 de \d+ subtemas/)).toBeVisible()
  await page.waitForTimeout(600)
  await page.reload()
  await expect(page.getByText(/1 de \d+ subtemas/)).toBeVisible()
  // A subtopic that is not open yet falls back to the topic overview.
  await page.goto('./#/lesson/L1-01?s=3')
  await expect(page.getByText(/1 de \d+ subtemas/)).toBeVisible()
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

test('accounting lab: practice CFDI, exam month and free-sheet project', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/lab')
  await expect(page.getByText(/Antes de empezar el nivel/)).toBeVisible()
  await page.getByRole('button', { name: 'Ya sé esto, empezar' }).click()
  await expect(page.getByTestId('cfdi').first()).toBeVisible()
  await expect(page.getByText(/Sin validez fiscal/i).first()).toBeVisible()
  // Wrong on purpose: an empty type and a single unbalanced line.
  await page.getByLabel('Cuenta del renglón 1').selectOption('1102')
  await page.getByLabel('Importe del renglón 1').fill('100')
  await page.getByRole('button', { name: /^Comprobar$/ }).click()
  await expect(page.getByText('Elige el tipo de póliza.')).toBeVisible()
  await page.getByRole('button', { name: /Ver solución/ }).click()
  await expect(page.getByText(/por qué se mueve cada cuenta/)).toBeVisible()
  await page.getByRole('button', { name: /¿Cómo se calculan los importes\?/ }).click()
  await page.getByRole('button', { name: /Ver el cálculo/ }).click()
  await shot(page, '06-lab-practice')
  await page.getByTestId('random-case').click()
  await expect(page.getByText(/por qué se mueve cada cuenta/)).toHaveCount(0)

  await page.getByRole('radio', { name: 'Examen' }).click()
  await page.getByRole('button', { name: /Empezar/ }).first().click()
  await expect(page.getByRole('button', { name: 'Documento 8' })).toBeVisible()
  await page.getByRole('button', { name: 'Documento 8' }).click()
  page.once('dialog', (d) => d.accept())
  await page.getByRole('button', { name: /Entregar examen/ }).first().click()
  await expect(page.getByTestId('exam-score')).toContainText('0%')
  await page.getByRole('radio', { name: 'Tus estados financieros' }).click()
  await expect(page.getByText('Balance General')).toBeVisible()
  await shot(page, '07-lab-exam')
  await page.getByRole('button', { name: 'Salir' }).click()

  await page.getByRole('radio', { name: 'Hoja libre' }).click()
  await page.getByLabel('Nombre del proyecto').fill('Mi cafetería')
  await page.getByRole('button', { name: /Crear proyecto/ }).click()
  await page.getByRole('radio', { name: /Ingreso/ }).click()
  await page.getByLabel('Concepto').fill('Aportación inicial')
  await page.getByLabel('Cuenta del renglón 1').selectOption('1102')
  await page.getByLabel('Importe del renglón 1').fill('50000')
  await page.getByLabel('Cuenta del renglón 3').selectOption('3101')
  await page.getByLabel('Importe del renglón 3').fill('50000')
  await page.getByRole('button', { name: /Guardar póliza/ }).click()
  await page.getByRole('radio', { name: 'Estados y razones' }).click()
  await expect(page.getByText(/Activo = Pasivo \+ Capital/)).toContainText('✓')
  await page.getByRole('radio', { name: 'Hoja', exact: true }).click()
  await page.getByRole('button', { name: 'Celda A1', exact: true }).click()
  await page.getByLabel('Contenido de la celda').fill('1000')
  await page.getByRole('button', { name: 'Celda A2', exact: true }).click()
  await page.getByLabel('Contenido de la celda').fill('=A1*16%')
  await page.getByLabel('Contenido de la celda').press('Enter')
  await expect(page.getByTestId('sheet-trace')).toContainText('160')
  await shot(page, '07b-lab-sheet')
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
  const routes = ['/', '/courses', '/area/contabilidad', '/area/finanzas', '/area/economia', '/lesson/L1-15', '/lesson/L1-16', '/lesson/L2-07', '/lesson/L5-06?s=1', '/lesson/L1-01?s=0', '/path/1', '/lesson/L4-04', '/practice', '/exams/1', '/tools', '/lab', '/calc/pv', '/calc/fv', '/calc/compound', '/calc/annuity', '/calc/project', '/calc/wacc', '/calc/breakeven', '/calc/ratios', '/invest', '/tutor', '/stats', '/settings', '/plans', '/account', '/legal/privacy', '/legal/cookies']
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

test('interactive lesson: simulator and find the error', async ({ page }) => {
  await onboard(page)
  await page.goto('./#/settings')
  await page.getByRole('checkbox', { name: /Modo libre/ }).check()
  await page.goto('./#/lesson/L1-05?s=1')
  await expect(page.getByTestId('interactive-lesson')).toBeVisible()
  await page.getByTestId('int-next').click()
  await expect(page.getByTestId('sim')).toBeVisible()
  await expect(page.getByTestId('int-next')).toHaveCount(0)
  await page.getByTestId('sim-v').fill('60000')
  await expect(page.getByTestId('sim-result')).toContainText('16,000')
  await shot(page, '10-simulator')
  await page.getByTestId('int-next').click()
  await expect(page.getByTestId('int-finish')).toBeVisible()

  await page.goto('./#/lesson/L1-10?s=1')
  await page.getByTestId('int-next').click()
  await page.getByTestId('int-next').click()
  await page.getByTestId('spot-line-0').click()
  await expect(page.getByTestId('spot-why')).toHaveCount(0)
  await page.getByTestId('spot-line-3').click()
  await expect(page.getByTestId('spot-why')).toBeVisible()
  await shot(page, '10-spot-error')
})

test('interactive games: every activity can be finished', async ({ page }) => {
  test.setTimeout(600000)
  await onboard(page)
  await page.goto('./#/settings')
  await page.getByRole('checkbox', { name: /Modo libre/ }).check()
  const shots: Record<string, string> = { 'L1-01:0': '11-order', 'L1-04:0': '11-sort', 'L1-07:0': '11-match', 'L1-06:1': '11-balance', 'L1-11:1': '12-tacct', 'L1-09:2': '12-entry', 'L1-08:1': '12-rush', 'L1-08:2': '12-calc', 'L1-12:0': '12-multi' }
  for (const [id, s] of [['L1-01', 0], ['L1-01', 1], ['L1-01', 2], ['L1-02', 0], ['L1-02', 1], ['L1-02', 2], ['L1-03', 0], ['L1-03', 2], ['L1-04', 0], ['L1-04', 1], ['L1-06', 1], ['L1-06', 2], ['L1-07', 0], ['L1-07', 1], ['L1-07', 2], ['L1-08', 0], ['L1-08', 1], ['L1-08', 2], ['L1-09', 0], ['L1-09', 1], ['L1-09', 2], ['L1-11', 0], ['L1-11', 1], ['L1-11', 2], ['L1-12', 0], ['L1-12', 1], ['L1-12', 2], ['L1-12', 3], ['L1-13', 0], ['L1-13', 2], ['L1-13', 3], ['L1-14', 0], ['L1-14', 1], ['L1-15', 0], ['L1-15', 1], ['L1-15', 2], ['L1-15', 3], ['CON-04', 0], ['CON-04', 1], ['CON-04', 2], ['CON-05', 0], ['CON-05', 1], ['CON-05', 2], ['CON-06', 0], ['CON-06', 1], ['CON-06', 2], ['CON-07', 0], ['CON-07', 1], ['CON-07', 2], ['CON-08', 0], ['CON-08', 1], ['CON-08', 2], ['CON-09', 0], ['CON-09', 1], ['CON-09', 2], ['CON-10', 0], ['CON-10', 1], ['CON-10', 2], ['CON-11', 0], ['CON-11', 1], ['CON-11', 2], ['CON-12', 0], ['CON-12', 1], ['CON-12', 2], ['CON-14', 0], ['CON-14', 1], ['CON-14', 2], ['CON-15', 0], ['CON-15', 1], ['CON-15', 2]] as const) {
    await page.goto(`./#/lesson/${id}?s=${s}`)
    await expect(page.getByTestId('interactive-lesson')).toBeVisible()
    let snapped = false
    for (let guard = 0; guard < 150; guard++) {
      if (await page.getByTestId('int-finish').isVisible()) break
      const sortNext = page.getByTestId('sort-next')
      const balNext = page.getByTestId('bal-next')
      if (await page.getByTestId('rush-start').isVisible()) await page.getByTestId('rush-start').click()
      else if (await page.getByTestId('rush-0').isVisible()) await page.getByTestId('rush-0').click()
      else if (await page.getByTestId('tacct-next').isVisible()) await page.getByTestId('tacct-next').click()
      else if (await page.locator('[data-testid="tacct-D"]:enabled').count()) await page.getByTestId('tacct-D').click()
      else if (await page.locator('[data-testid^="entry-"][data-testid$="-D"]:enabled').count()) await page.locator('[data-testid^="entry-"][data-testid$="-D"]:enabled').first().click()
      else if (await page.locator('[data-testid="calc-input"]:enabled').count()) {
        await page.getByTestId('calc-input').fill('1')
        await page.getByTestId('calc-check').click()
      } else if (await page.getByTestId('multi-check').isVisible()) {
        await page.getByTestId('multi-0').click()
        await page.getByTestId('multi-check').click()
      } else if (await sortNext.isVisible()) await sortNext.click()

      else if (await balNext.isVisible()) await balNext.click()
      else if (await page.locator('[data-testid="sort-bucket-0"]:enabled').count()) await page.getByTestId('sort-bucket-0').click()
      else if (await page.locator('[data-testid="bal-opt-0"]:enabled').count()) await page.getByTestId('bal-opt-0').click()
      else if (await page.locator('[data-testid^="order-step-"]').count()) {
        const n = await page.locator('[data-testid="order"] ol li').count()
        await page.getByTestId(`order-step-${n}`).click()
      } else if (await page.locator('[data-testid^="match-l-"]:enabled').count()) {
        const l = page.locator('[data-testid^="match-l-"]:enabled').first()
        const i = (await l.getAttribute('data-testid'))!.split('-').pop()
        await l.click()
        await page.getByTestId(`match-r-${i}`).click()
      } else if (await page.locator('[data-testid="int-ask"] button:enabled').count()) await page.locator('[data-testid="int-ask"] button:enabled').first().click()
      else if ((await page.locator('[data-testid="spot"]').count()) > (await page.locator('[data-testid="spot-why"]').count())) {
        const spot = page.locator('[data-testid="spot"]').last()
        const n = await spot.locator('[data-testid^="spot-line-"]').count()
        for (let k = 0; k < n && !(await spot.getByTestId('spot-why').isVisible()); k++) await spot.getByTestId(`spot-line-${k}`).click()
      }
      else if (await page.getByTestId('int-next').isVisible()) await page.getByTestId('int-next').click()
      else if ((await page.locator('[data-testid="sim"]').last().isVisible()) && !(await page.getByTestId('int-next').isVisible()) && !(await page.getByTestId('int-finish').isVisible())) {
        // Try every corner of the sliders until the goal is reached.
        const sliders = page.locator('[data-testid="sim"]').last().locator('input[type="range"]')
        const n = await sliders.count()
        for (let m = 0; m < 2 ** n; m++) {
          for (let k = 0; k < n; k++) {
            const el = sliders.nth(k)
            await el.fill((await el.getAttribute(m & (1 << k) ? 'max' : 'min'))!)
          }
          if ((await page.getByTestId('int-next').isVisible()) || (await page.getByTestId('int-finish').isVisible())) break
        }
      }
      const key = `${id}:${s}`
      if (!snapped && shots[key] && (await page.getByTestId(shots[key].slice(3)).isVisible())) {
        snapped = true
        await shot(page, shots[key])
      }
    }
    await expect(page.getByTestId('int-finish'), `${id} s=${s}`).toBeVisible()
  }
})
