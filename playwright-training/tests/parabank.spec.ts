//Locators Practics

import { test, expect } from '@playwright/test';

test('Test Register Link', async ({ page }) =>{

// Register link
const registerLink = page.getByRole('link', { name: 'Register' });

// Forgot Login Info link
const forgotLoginInfoLink = page.getByRole('link', { name: 'Forgot login info?' });

// Login button
const loginButton = page.getByRole('button', { name: 'Log In' });

//Username
const username = page.getByLabel('Username');

//Password 
const password = page.getByLabel('Password');

//Login
const login = page.getByText('Customer Login');

//ATM Services
const atmservices = page.getByRole('link',{name: 'ATM Services'});

//Withdraw Funds
const withdrawfund = page.getByRole('link', {name: 'Withdraw Funds'});

//Transfer Funds
const transferfund = page.getByRole('link', {name: 'Transfer Funds'});

//Check Balances
const checkbalances = page.getByRole('link',{name: 'Check Balances'});

//Make Deposits
const makedeposite = page.getByRole('link',{name: 'Make Deposits'});

//Bill Pay
const billpay = page.getByText('Bill Pay');

//Latest News
const news = page.getByText('Latest News');

//logo
const logo = page.getByAltText('ParaBank');

//Reopen
const reopen = page.getByRole('link',{name:'ParaBank Is Now Re-Opened'});

//Title
const title = page.getByTitle('Welcome');

//username
const newusername = page.getByTestId('username');

//XPATH Left Menu
const solutions = page.locator("//a[text()='Solutions']");
const aboutUs = page.locator("//a[text()='About Us']");
const services = page.locator("//a[text()='Services']");
const products = page.locator("//a[text()='Products']");
const locations = page.locator("//a[text()='Locations']");
const adminPage = page.locator("//a[text()='Admin Page']");

/*CSS Left Menu (Class Selector + Descendant Selector + 
Element Selector + :nth-child() Pseudo-Class Selector.)*/

const solutionsnew = page.locator('ul.leftmenu li:nth-child(1) a');
const aboutUsnew = page.locator('ul.leftmenu li:nth-child(2) a');
const servicesnew = page.locator('ul.leftmenu li:nth-child(3) a');
const productsnew = page.locator('ul.leftmenu li:nth-child(4) a');
const locationsnew = page.locator('ul.leftmenu li:nth-child(5) a');
const adminPagenew = page.locator('ul.leftmenu li:nth-child(6) a');

});
