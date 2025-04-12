# SapphireDeals - UI and API Test Suite
## Overview
The SapphireDeals project includes a comprehensive test suite designed to validate both UI and API functionalities. This suite ensures the reliability of the application by running tests for various modules and generating detailed reports for analysis.
## Installation Guide
1. Install Dependencies: 

```bash
npm install
```

2. Install Playwright Browsers: 

```bash
npx playwright install
```

## Running Tests
1. Running Specific Tests
To run a specific test or set of tests, tag the desired tests with the @test tag. After tagging, execute the following command to run them:

```bash
npm run test
```
2. Running Regression and Sanity Test Suites
You can run predefined test suites by using the following commands:
- Run organization tests: 
```bash
npm run tag:organization
```
- Run admin tests: 
```bash
npm run tag:admin
```

- Run user tests: 
```bash
npm run tag:user
```

- Run regression tests: 
```bash
npm run tag:regression
```

- Run sanity tests: 
```bash
npm run tag:sanity
```


## Reporting
1. Generating Allure Report
Once the tests have completed, generate the Allure report by running:
```bash
npm run generate-report
```

2. Opening the Allure Report
To view the generated Allure report, use the following command:
```bash
npm run open-report
```
