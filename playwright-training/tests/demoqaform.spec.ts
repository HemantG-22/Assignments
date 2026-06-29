import { test, expect } from '@playwright/test';

test('DemoQA Practice Form', async ({ page }) => {

  // Launch Application
  await page.goto('https://demoqa.com/automation-practice-form');

  // Wait for page load
  // const pageloader = await page.locator('//h1[text()= "Practics Form"]');
  //await expect(pageloader).toBeVisible();
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
  await selectDOB(page, '1', 'February', '1991');
  //await selectDOB(page, "1" , "February" , "1991");

  // Subjects
  await selectSubject(page, 'Computer Science');
  await selectSubject(page, 'English');

  // Hobbies
  await hobbies(page, 'Sports'); // Sports
  await hobbies(page, 'Reading'); // Reading

  // Upload Photo
  await page.locator('#uploadPicture').setInputFiles('sample.jpg');

  // Submit
  await page.evaluate(() => {
  document.querySelector('#fixedban')?.remove();
  document.querySelector('footer')?.remove();
});

  await page.locator('#submit').scrollIntoViewIfNeeded();
  await page.locator('#submit').click();

  // Verification
  await expect(page.locator('#example-modal-sizes-title-lg'))
    .toHaveText('Thanks for submitting the form');
});

//==========================
// Function to Select DOB
//==========================
async function selectDOB(page: any, day: string, month: string, year: string): Promise<void>{
const dobinput = await page.locator('//input[@id="dateOfBirthInput"]');
await dobinput.click();

const monthDropdown = await page.locator('//select[@class="react-datepicker__month-select"]');
await monthDropdown.selectOption({ label: month});

const yearDropdown = await page.locator('//select[@class="react-datepicker__year-select"]');
await yearDropdown.selectOption({ label: year});

const dateField = page.locator(`//div[contains(@class,'react-datepicker__day') 
      and not(contains(@class,'outside-month'))
      and text()='${day}']`);
await dateField.click();
}

//==========================
// Function to Select Subject
//==========================
async function selectSubject(page: any, subject: string) {
await page.locator('#subjectsInput').fill(subject);
await page.keyboard.press('Enter');
}

//===========================
//Function for Select Hobbies
//
async function hobbies(page: any, hobby: string) {
  if (hobby === 'Sports') {
    await page.locator('label[for="hobbies-checkbox-1"]').click({ force: true });
  }
  if (hobby === 'Reading') {
    await page.locator('label[for="hobbies-checkbox-2"]').click({ force: true });
  }
  if (hobby === 'Music') {
    await page.locator('label[for="hobbies-checkbox-3"]').click({ force: true });
  }
}