import { test, expect } from '@playwright/test';

test.describe('Cloud Status Dashboard', () => {
  test('loads dashboard and shows all three providers', async ({ page }) => {
    await page.goto('/cloud-status-dashboard/');

    await expect(
      page.getByRole('heading', { name: 'Cloud Status Dashboard' })
    ).toBeVisible();

    await expect(page.getByText('AWS', { exact: true })).toBeVisible();
    await expect(page.getByText('Azure', { exact: true })).toBeVisible();
    await expect(page.getByText('GCP', { exact: true })).toBeVisible();
  });

  test('Run Status Check updates the last check timestamp', async ({ page }) => {
    await page.goto('/cloud-status-dashboard/');

    const runButton = page.getByRole('button', { name: /run status check/i });
    const lastCheckText = page.getByText(/Last check:/i);

    // Capture the timestamp before running a new status check.
    const before = await lastCheckText.textContent();

    await runButton.click();

    // The displayed timestamp should change after the status check runs.
    await expect(lastCheckText).not.toHaveText(before ?? '');
  });
});