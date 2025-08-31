const { test, expect,page } = require('@playwright/test');
 
export class YourInfoPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
  }

  async clickContinue() {
    
    await this.continueButton.click();
  }
    }
  