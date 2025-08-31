const { test, expect,page } = require('@playwright/test');

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    
    
    
    this.message = page.locator('[data-test="complete-text"]');
  }

 
}

  