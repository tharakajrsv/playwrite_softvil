// cucumber.js
module.exports = {
  default: `
    --require ./support/hooks.js
    --require ./support/world.js
    --require ./step_definitions/**/*.js
    --format pretty
    --format "allure-cucumberjs/reporter"
    --format-options '{"resultsDir": "./allure-results"}'
  `,
};
