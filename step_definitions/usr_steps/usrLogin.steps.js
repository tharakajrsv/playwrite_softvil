const { Given, When, Then } = require('@cucumber/cucumber');
const OrgLoginPage = require('../../pages/organization/orgLoginPage');

Given('User is on the User login page', async function () {
  
  await this.orgPageObjects.orgLoginPage.navigate();
});

When('User enters valid credentials for the User portal', async function () {
  await this.orgPageObjects.orgLoginPage.login(process.env.organizationPortalUsername, process.env.organizationPortalPassword);
});

Then('User should be redirected to the User dashboard', async function () {
//   const url = await this.page.url();
//   if (!url.includes('sales')) {
//     throw new Error('Not redirected to the dashboard');
//   }
});
