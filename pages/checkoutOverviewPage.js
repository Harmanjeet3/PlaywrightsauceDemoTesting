const { test, expect,page } = require('@playwright/test');

export class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    
    
    this.finishButton = page.locator('[data-test="finish"]');
    
  }

  async clickFinish() {
    await this.finishButton.click();
  }
}

  