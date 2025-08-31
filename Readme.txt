# Playwright Test Automation 
## Introduction  

This automation framework has been designed to validate critical flows of the **SauceDemo e-commerce application**, while ensuring scalability, maintainability, and code quality.  

The project uses **Playwright with Page Object Model (POM)**, with different `.js` classes representing different pages. Tests are executed **in parallel** to improve execution speed.  

---

## Framework Features  
- **Page Object Model (POM):** Each page has a separate class to keep locators and actions modular.  
- **Parallel Execution:** All 4 tests run in parallel by default.  
- **Retry Mechanism:** If a test fails, Playwright retries it **up to 2 times**.  
- **Video Recording:** On retry attempts, Playwright records video for debugging.  
- **Environment Config:** Credentials  are externalized.  
- **Reporting:** Execution generates an **HTML report** (`index.html`).  

---

## Test Scenarios Implemented  
1. **Login Test**  login.spec.js
   - Login with valid credentials.  
   - Verify successful navigation to the inventory page.  

2. **Add to Cart Test**  addTOCart.spec.js
   - Add two specific products to the cart.  
   - Verify the cart badge shows the correct item count.  

3. **Checkout Flow Test**  login.spec.js
   - Complete checkout with valid details.  
   - Verify order confirmation message.  

4. **Product Sorting Test**  sortProducts.js
   - Sort products by *Price (low to high)*.  
   - Verify prices appear in ascending order.  

---

## How to View the Report  
1. After test execution, Playwright generates an HTML report.  
2. Run the following command to open it in your browser:  

   ```bash
   npx playwright show-report
   ```  

   OR open `playwright-report/index.html` directly.  

- Note: Each new test run **overwrites the previous report** unless you archive it manually.  
---There are fours spec.js files in tests folder have 4 test cases 
---For each test class there are hooks to login and close the browser 
---There are 7 .js classes to store locators and methods for each page 
---There is ab.env file that has User credentials for log in 
---Base URL is stored in .config.js file and used as '/' in the solution
---Settings for Parallisation , report type , video recording , retry attemsts are stored in .config.js
---POM is used as architech design so that each loactor and method can be reused , maintain easily and make code scalable 

Commonly used commands to run the tests through terminal 
-npx playwright test  --project="Chromium" --headed
-npx playwright show-report

