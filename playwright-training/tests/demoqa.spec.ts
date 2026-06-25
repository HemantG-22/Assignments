import { test, expect } from '@playwright/test';

test('DemoQA Practice Form', async ({ page }) => {

  // Launch Application
  await page.goto('https://demoqa.com/automation-practice-form');

  // Wait for page load
  await page.waitForLoadState('load');

  // First Name and Last Name
  await page.locator('#firstName').fill('Hemant');
  await page.locator('#lastName').fill('Gandhre');

  // Email
  await page.locator('#userEmail').fill('hemant@gmail.com');

  // Gender - Male
  await page.locator('label[for="gender-radio-1"]').click();

  // Mobile Number
  await page.locator('#userNumber').fill('9876543210');

  // Date of Birth - 1 Feb 1991
  await page.locator('#dateOfBirthInput').click();
  await page.locator('.react-datepicker__year-select').selectOption('1991');
  await page.locator('.react-datepicker__month-select').selectOption('1');
  await page.locator('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)').click();

  // Subjects
  await page.locator('#subjectsInput').fill('Computer Science');
  await page.keyboard.press('Enter');

  await page.locator('#subjectsInput').fill('English');
  await page.keyboard.press('Enter');

  // Hobbies
  await page.locator('label[for="hobbies-checkbox-1"]').click(); // Sports
  await page.locator('label[for="hobbies-checkbox-2"]').click(); // Reading

  // Upload Photo
  await page.locator('#uploadPicture').setInputFiles('sample.jpg');

  // Submit
  await page.locator('#submit').click();

  // Verification
  await expect(page.locator('#example-modal-sizes-title-lg'))
    .toHaveText('Thanks for submitting the form');
});