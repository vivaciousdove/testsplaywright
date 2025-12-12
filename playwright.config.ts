import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Always generate an HTML report folder that CI can upload
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    baseURL: 'https://vivaciousdove.github.io/cloud-status-dashboard/',
    headless: true,          // CI-safe (no display needed)
    slowMo: 0,               // CI should be fast/stable
    trace: 'on-first-retry', // great portfolio evidence
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});

