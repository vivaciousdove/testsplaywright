# 🧪 Playwright CI UI Testing — Cloud Status Dashboard

**TL;DR**
- Playwright UI tests running **headlessly in CI**
- **Cross-browser** coverage: Chromium, Firefox, WebKit
- **Evidence-first**: HTML report, traces, screenshots, videos
- GitHub Actions pipeline with **always-uploaded artifacts**

---

## 📌 Project Overview
This repository demonstrates a **production-style UI automation pipeline** using **Playwright** (origin: Microsoft, 2020) and **GitHub Actions** (CI/CD platform by GitHub).  
The system under test is a mock **Cloud Status Dashboard** (AWS, Azure, GCP) designed for deterministic, repeatable validation.

The focus is not just passing tests—**it’s verifiable proof** reviewers can inspect.

---

## 🎯 What This Proves
- I can design UI tests that **run reliably in CI**
- I capture **debuggable evidence** on pass *and* fail
- I understand **cross-browser risk**
- I treat QA as a **delivery system**, not a local script

---

## 🧰 Stack (What Each Tool Does)
- **Playwright**: Browser automation + assertions
- **TypeScript**: Typed test code for maintainability
- **GitHub Actions**: CI execution on every push
- **HTML Reporter**: Human-readable execution report
- **Trace Viewer**: Step-by-step replay for debugging

---

## 🧪 Test Coverage
- Page load and render validation
- Presence of cloud provider cards (AWS, Azure, GCP)
- Status indicators and timestamps
- User interaction and UI updates
- Cross-browser consistency

---

## ⚙️ CI Pipeline (How It Runs)
On every push to `main`, the workflow:
1. Installs dependencies and Playwright browsers  
2. Runs tests **headlessly** across all browsers  
3. Generates an **HTML report**  
4. Captures **traces, screenshots, and videos**  
5. Uploads artifacts **even if tests fail** (`if: always()`)

This mirrors how mature teams operate in production.

---

## ✅ Confirmation Checklist (All Met)
- ✔ Tests execute in CI (Chromium, Firefox, WebKit)
- ✔ HTML report generated and downloadable
- ✔ Traces/screenshots/videos captured
- ✔ Artifacts available on both pass and fail

---

## 📍 Where to See Proof (2 Clicks)
1. **Actions → Playwright Tests → Latest run**
2. Download **`playwright-report`** artifact  
   - Open `index.html` locally
   - Inspect steps, traces, screenshots, and videos

---

## 📁 Repo Evidence (Static Samples)
Committed examples for quick review:
- 📂 [`evidence/html-reports`](./evidence/html-reports)
- 📂 [`evidence/traces`](./evidence/traces)
- 📂 [`evidence/ui-screenshots`](./evidence/ui-screenshots)

---

## 🔗 System Under Test (SUT)
Live dashboard used for validation:  
https://vivaciousdove.github.io/cloud-status-dashboard/

---

## 🧑‍💻 Run Locally
```bash
npm ci
npx playwright install --with-deps
npx playwright test
npx playwright show-report

---
Open a specific trace:
npx playwright show-trace <path-to-trace.zip>

