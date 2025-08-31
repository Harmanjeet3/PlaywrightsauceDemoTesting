
const { test, expect,page } = require('@playwright/test');
 
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.InventoryPageURL = 'https://www.saucedemo.com/inventory.html';
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

// Method to extract, process, and print all inventory item prices
async InventoryPricesArray() {
  // Get all price elements
  const priceElements = await this.page.locator('.inventory_item_price').allTextContents();
  // Remove '$', convert to float, then to int, and collect in array
  const prices = priceElements.map(text => parseFloat(text.replace('$', '')));
  return prices;
}
async addSpecificItemToCart(itemName) {
  const itemLocator = this.page.locator(`[data-test="add-to-cart-sauce-labs-${itemName}"]`);
  await itemLocator.click();
   
}
async sortByLabel(labelText) {
    // uses the label to select option
    await this.sortDropdown.selectOption({ label: labelText });
  }

  async openCart() {
    await this.cartLink.click();
  }
}

