exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    
    this.checkoutButton = '[data-test="checkout"]';
   
  
  }

  
  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
};
