import dotenv from 'dotenv';
import path from 'path';
 dotenv.config({ path: './ab.env' });

// Load environment variables from ab.env file in project root



export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.validUsername = process.env.USER_NAME;
    this.validPassword = process.env.PASSWORD;
  }

// Navigate to Base URL , and perform login
  async login() {
    

    await this.page.goto('/');
    await this.usernameInput.fill(this.validUsername);
    await this.passwordInput.fill(this.validPassword);
    await this.loginButton.click();
  }
}

  


  
