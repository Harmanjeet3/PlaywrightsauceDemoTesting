const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const {CartPage} = require('../pages/cartPage');
const {YourInfoPage} = require('../pages/yourInfoPage');
const {CheckoutOverviewPage} = require('../pages/checkoutOverviewPage');
const {CheckoutCompletePage} = require('../pages/checkoutComplete');

const confirmationMessage = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
    await loginPage.login();

    await inventoryPage.addSpecificItemToCart('backpack');

    await inventoryPage.openCart();
});

test('Complete checkout with valid details', async ({ page }) => {
  const cartPage = new CartPage(page);
  const yourInfoPage = new YourInfoPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);
  await cartPage.clickCheckout();

  

  // Your Information page
  await yourInfoPage.firstName.fill('Harmanjeet');
  await yourInfoPage.lastName.fill('Singh');
  await yourInfoPage.postalCode.fill('M2J2X9');
  await yourInfoPage.clickContinue();

  // Checkout Overview Page
  await checkoutOverviewPage.clickFinish();

  // Check out complete Page second one is important
  await expect(checkoutCompletePage.message).toContainText(confirmationMessage);
  
});
test.afterEach(async ({ page }) => {
  await page.close();
});
