[![Playwright Tests](https://github.com/vivaciousdove/testsplaywright/actions/workflows/playwright.yml/badge.svg)](https://github.com/vivaciousdove/testsplaywright/actions)

# Playwright Cloud Status Dashboard Tests

A small Playwright project I built to practice UI automation, cross-browser testing, and running automated tests through GitHub Actions.

The tests run against a live Cloud Status Dashboard hosted on GitHub Pages.

## What It Tests

The suite currently checks that:

- The dashboard loads successfully
- AWS, Azure, and GCP are displayed
- Running a status check updates the last-check timestamp

Each scenario runs in:

- Chromium
- Firefox
- WebKit

That gives the current suite **6 test executions across 3 browsers**.

## Tools

- **Playwright** — UI automation and assertions
- **TypeScript** — test code
- **GitHub Actions** — automated test execution
- **GitHub Pages** — hosts the application being tested

## CI

GitHub Actions runs the Playwright suite on:

- Push to `main`
- Pull requests into `main`
- Manual workflow runs

The workflow installs the dependencies and Playwright browsers, runs the cross-browser tests, and uploads the Playwright report and test results.

Failure evidence can include screenshots, videos, and traces based on the Playwright configuration.

## Test Evidence

The repository includes a few sample screenshots under `evidence/`.

GitHub Actions also keeps the Playwright report and test results as workflow artifacts so failed runs can be investigated without relying only on console output.

## Run Locally

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

Open the latest HTML report with:

```bash
npx playwright show-report
```

## System Under Test

The automated tests run against the live Cloud Status Dashboard:

https://vivaciousdove.github.io/cloud-status-dashboard/
