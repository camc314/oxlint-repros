import { expect, test } from '@playwright/test';

test('testing oxlint with playwright', async ({ page }) => {
  const thisOneDoesLintAsExpected = () => new Promise((resolve, _reject) => resolve('value'));
  thisOneDoesLintAsExpected();

  expect(
    await page.locator(`input[value="foo"]`),
  ).not.toBeVisible();
});