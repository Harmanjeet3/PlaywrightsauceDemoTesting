const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
    
    await loginPage.login();
});
test('Sort Products', async ({ page }) => {
 
  const inventoryPage = new InventoryPage(page);

   // Sort products by price (low to high)
   await inventoryPage.sortByLabel('Price (low to high)');
  // Get the inventory prices array
  const prices = await inventoryPage.InventoryPricesArray(page);
  
  // Check if the array is in ascending order
  const isAscending = prices.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
          console.log('Prices:', prices);
  await expect(isAscending).toBeTruthy();
});
test('Sort Products Descending', async ({ page }) => {
 
  const inventoryPage = new InventoryPage(page);

   // Sort products by price (high to low)
   await inventoryPage.sortByLabel('Price (high to low)');
  // Get the inventory prices array
  const prices = await inventoryPage.InventoryPricesArray(page);

  // Check if the array is in descending order
  const isDescending = prices.every((val, i, arr) => i === 0 || arr[i - 1] >= val);
          console.log('Prices:', prices);
  await expect(isDescending).toBeTruthy();
});

test.afterEach(async ({ page }) => {
  await page.close();
});
