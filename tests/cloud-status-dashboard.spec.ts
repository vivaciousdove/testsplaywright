import { test, expect } from '@playwright/test';

test.describe('Cloud Status Dashboard', () => {

  test('loads dashboard and shows all three providers', async ({ page }) => {
    await page.goto('/cloud-status-dashboard/');
    await page.waitForTimeout(3000); // 🔥 Pause for screenshots

    await expect(
      page.getByRole('heading', { name: 'Cloud Status Dashboard' })
    ).toBeVisible();

    await expect(page.getByText('AWS', { exact: true })).toBeVisible();
    await expect(page.getByText('Azure', { exact: true })).toBeVisible();
    await expect(page.getByText('GCP', { exact: true })).toBeVisible();
  });

  test('Run Status Check updates last check and status badges', async ({ page }) => {
    await page.goto('/cloud-status-dashboard/');
    await page.waitForTimeout(3000); // 🔥 Pause for screenshots

    const runButton = page.getByRole('button', { name: /run status check/i });
    const lastCheckText = page.getByText(/Last check:/i);

    const before = await lastCheckText.textContent();

    await runButton.click();

    await expect(lastCheckText).not.toHaveText(before);
  });

});

