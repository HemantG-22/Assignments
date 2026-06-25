import { test, expect } from '@playwright/test';

test('Parabank End-to-End Validation', async ({ page }) => {

    // 1. Launch application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // 2. Verify application logo is displayed
    const logo = page.locator('.logo');
    await expect(logo).toBeVisible();

    // 3. Verify application caption displayed
    const caption = page.locator('.caption');
    await expect(caption).toHaveText('Experience the difference');

    // 4. Enter invalid username
    await page.locator('input[name="username"]').fill('InvalidUser');

    // 5. Enter empty password
    await page.locator('input[name="password"]').fill('');

    // 6. Click on login button
    await page.locator('input[value="Log In"]').click();

    // 7. Verify error message
    const errorMsg = page.locator('.error');
    await expect(errorMsg).toContainText(
        'Please enter a username and password.'
    );

    // 8. Click on Admin Page link
    await page.getByRole('link', { name: 'Admin Page' }).click();

    // 9. Select SOAP from access mode radio button
    const soapRadio = page.locator('input[value="soap"]');
    await soapRadio.check();
    await expect(soapRadio).toBeChecked();

    // 10. Scroll to dropdown
    const endpointDropdown = page.locator('select[name="wsdl"]');
    await expect(endpointDropdown).toBeVisible();

    // 11. Select Web Service from dropdown
    await endpointDropdown.selectOption({ label: 'Web Service' });

    // Verify selection
    await expect(endpointDropdown).toHaveValue('ws');

    // 12. Click on Submit button
    await page.getByRole('button', { name: 'Submit' }).click();

    // 13. Verify submission success message
    const successMessage = page.locator('#rightPanel');
    await expect(successMessage).toContainText(
        'Settings saved successfully'
    );

    // 14. Click on Services page link
    await page.getByRole('link', { name: 'Services' }).click();

    // 15. Wait for Services page
    await page.waitForLoadState('networkidle');

    // 16. Scroll down till Bookstore Services table
    const table = page.locator('table').nth(0); // Update index if needed
    await table.scrollIntoViewIfNeeded();

    // 17. Get total rows of Bookstore Services table
    const rows = table.locator('tr');
    const rowCount = await rows.count();

    // 18. Get total columns of Bookstore Services table
    const columnCount = await rows.first().locator('th,td').count();

    console.log(`Total Rows: ${rowCount}`);
    console.log(`Total Columns: ${columnCount}`);

    // 19. Print table data row-wise and column-wise
    console.log('===== TABLE DATA =====');

    for (let i = 0; i < rowCount; i++) {
    const cells = rows.nth(i).locator('th,td');
    const cellCount = await cells.count();

        let rowData: string[] = [];

        for (let j = 0; j < cellCount; j++) {
            const cellText = await cells.nth(j).innerText();
            rowData.push(cellText.trim());

            console.log(
                `Row ${i + 1}, Column ${j + 1}: ${cellText.trim()}`
            );
        }

        console.log(`Row ${i + 1} Data: ${rowData.join(' | ')}`);
    }
});