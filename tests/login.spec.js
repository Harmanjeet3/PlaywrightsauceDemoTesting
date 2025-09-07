const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test('Login Test with valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  // Step 1: Login with valid Credentials

  await page.goto('/');
  await loginPage.usernameInput.fill(loginPage.validUsername);
  await loginPage.passwordInput.fill(loginPage.validPassword);
  await loginPage.loginButton.click();

  // Step 2: Assert for URL after login
  await expect(page).toHaveURL(inventoryPage.InventoryPageURL);
  
   });
test('Login Test with invalid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  // Step 1: Login with valid Credentials

  await page.goto('/');
  await loginPage.usernameInput.fill("asdsa");
  await loginPage.passwordInput.fill("invalidPassword");
  await loginPage.loginButton.click();

  // Step 2: Assert for URL after login
  //await expect(page).toHaveURL(inventoryPage.InventoryPageURL);
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
   });
test.afterEach(async ({ page }) => {
  //await page.close();
});
