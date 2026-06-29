import { test, expect } from '@playwright/test';

test('DemoQA Alerts Handling', async ({ page }) => {

  // Launch Application
  await page.goto('https://demoqa.com/alerts');

  // Wait for page to load
  await page.waitForLoadState('load');

  // Handle all alerts
  page.on('dialog', async (dialog) => {

    console.log('==============================');
    console.log('Alert Type :', dialog.type());
    console.log('Alert Text :', dialog.message());

    if (dialog.type() === 'alert') {
      // Information Alert
      await dialog.accept();
    }
    else if (dialog.type() === 'confirm') {
      // Confirmation Alert
      await dialog.dismiss();
    }
    else if (dialog.type() === 'prompt') {
      // Prompt Alert
      await dialog.accept('Hemant');
    }
  });

  // 1. Information Alert
  await page.locator('#alertButton').click();

  // 2. Confirmation Alert
  await page.locator('#confirmButton').click();

  // Verify Cancel message
  await expect(page.locator('#confirmResult'))
    .toHaveText('You selected Cancel');

  // 3. Prompt Alert
  await page.locator('#promtButton').click();

  // Verify entered text
  await expect(page.locator('#promptResult'))
    .toHaveText('You entered Hemant');

});