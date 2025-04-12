const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const orgPageObjects = require("../pages/orgPageObjects"); // Import the centralized setup
const allure = require("allure-cucumberjs");
require("dotenv").config();
let browser, context, page;

// Set default timeout
setDefaultTimeout(60 * 1000); // 60 seconds timeout

// Hook before each scenario
Before(async function () {
  // Launch the browser and create a new context and page for each test
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  // Store page in the "this" object to be used in step definitions
  this.page = page;
  this.orgPageObjects = orgPageObjects.createPages(this.page);
});

// Hook after each scenario step
After(async function ({ result }) {
  if (result.status !== "passed") {
    const screenshot = await this.page.screenshot();
    await allure.createAttachment("Screenshot", screenshot, "image/png");
  }
});

// Hook after each scenario
After(async function () {
  await browser.close();
});
