const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
    // Step 1: Navigate to login page
    await loginPage.login();
    
});

test('Add two specific products to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  // Add Specific Items to Cart
  await inventoryPage.addSpecificItemToCart('backpack');
  await inventoryPage.addSpecificItemToCart('bike-light');

  // Step 2: Verify cart badge 
  await expect(inventoryPage.cartBadge).toContainText('6');
});




test.afterEach(async ({ page }) => {
  await page.close();
});


