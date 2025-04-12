// pages/loginPage.js
class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = 'input[name="email"]';
      this.passwordField = 'input[name="password"]';
      this.submitButton = 'button[type="submit"]';
    }
  
    async navigate() {
      await this.page.goto( process.env.organizationPortalBaseUrl + '/sign-in'); 
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameField, username);
      await this.page.fill(this.passwordField, password);
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = LoginPage;
  