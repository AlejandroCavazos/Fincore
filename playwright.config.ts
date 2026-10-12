import { defineConfig, devices } from '@playwright/test'

// Uses Chromium only. PW_CHROMIUM lets CI/containers point at a preinstalled browser.
const executablePath = process.env.PW_CHROMIUM || undefined

export default defineConfig({
  testDir: './e2e',
  outputDir: './test-results',
  timeout: 60_000,
  fullyParallel: false,
  reporter: [['list'], ['json', { outputFile: 'test-results/e2e.json' }]],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
    launchOptions: { executablePath },
  },
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: true,
    timeout: 60_000,
  },
  projects: [
    // iPhone 14 viewport, touch and user agent, rendered by Chromium (not real Safari/WebKit).
    { name: 'mobile-iphone-viewport', use: { ...devices['iPhone 14'], browserName: 'chromium', defaultBrowserType: 'chromium' } as never },
    { name: 'android-pixel', use: { ...devices['Pixel 7'] } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1366, height: 860 } } },
  ],
})
