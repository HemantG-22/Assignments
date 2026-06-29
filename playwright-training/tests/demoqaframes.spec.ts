import { test, expect, FrameLocator } from '@playwright/test';

test('DemoQA Frames Example', async ({ page }) => {

  // 1. Launch Application
  await page.goto('https://demoqa.com/frames');

  // Wait until page is loaded
  await page.waitForLoadState('networkidle');

  // 2. Locate Main Window Element
  const mainWindow = page.locator('.main-header');

  // Print Main Window Text
  const mainText = await mainWindow.innerText();
  console.log('Main Window Text :', mainText);

  // Store Frame in Variable
  const frame: FrameLocator = page.frameLocator('#frame1');

  // 3. Locate Frame Element
  const frameHeading = frame.locator('#sampleHeading');

  // Wait for Frame Element
  await expect(frameHeading).toBeVisible();

  // 4. Copy and Print Frame Text
  const frameText = await frameHeading.innerText();
  console.log('Frame Text :', frameText);

  // Validation
  await expect(mainWindow).toHaveText('Frames');
  await expect(frameHeading).toHaveText('This is a sample page');

});