# 🧪 Playwright CI UI Testing Project  
## Cloud Status Dashboard — End-to-End UI Validation with Evidence

---

## 📌 Project Overview

This project demonstrates a **production-grade UI testing pipeline** using **Playwright** and **GitHub Actions**, validating a cloud status dashboard that simulates AWS, Azure, and GCP service health.

The emphasis is not just on test execution, but on **verifiable proof**: HTML reports, trace replays, screenshots, and CI artifacts that reviewers can inspect.

---

## 🎯 Objectives

- Validate critical UI elements across browsers
- Run tests reliably in **CI (headless)**
- Capture **actionable evidence**, not just pass/fail results
- Demonstrate real-world QA workflow and discipline

---

## 🧰 Tools & Technologies

- **Playwright** (Chromium, Firefox, WebKit)
- **TypeScript**
- **GitHub Actions** (CI/CD)
- **HTML Reporter**
- **Trace Viewer**
- **Screenshots & Video Capture**

---

## 🧪 What Is Tested

### UI Validations
- Dashboard page loads successfully
- Cloud provider cards are present:
  - AWS
  - Azure
  - GCP
- Status indicators and timestamps render correctly
- User interaction updates status check results

### Cross-Browser Coverage
- Chromium
- Firefox
- WebKit (Safari equivalent)

---

## ⚙️ CI Pipeline Design

Every push to `main` triggers a GitHub Actions workflow that:

1. Installs dependencies and Playwright browsers  
2. Executes tests in **headless mode**  
3. Generates an **HTML report**  
4. Captures **traces, screenshots, and videos**  
5. Uploads artifacts **even if tests fail**

This ensures failures are **debuggable**, not silent.

---

## ✅ CI Validation Checklist (All Met)

### ✔ Tests Execute in CI
- GitHub Actions → **Actions → Playwright Tests**
- Chromium, Firefox, and WebKit executed headlessly

### ✔ HTML Report Generated
- Downloadable `playwright-report` artifact
- Includes step-by-step execution details

### ✔ Trace, Screenshot, and Video Evidence
- Trace viewer available per test
- DOM snapshots, action timeline, and network activity visible

### ✔ Artifacts Always Uploaded
- Reports uploaded using `if: always()` in workflow
- Evidence preserved on both pass and fail

---

## 📁 Evidence Stored in Repository

