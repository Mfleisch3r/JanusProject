# Amazon E2E Test Automation with Cypress

This repository contains a set of end-to-end (E2E) tests written in JavaScript using the Cypress framework for verifying specific functionalities of an Amazon product. The tests are designed to ensure the product can be added to the cart, searched by name/text, and searched by product ID (ASIN). The test suite uses the concept of page objects for better maintainability.

## Requirements

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Getting Started

To get started with the test suite, please follow the instructions below:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install the required dependencies:

   ```bash
   cd <repository_directory>
   npm install
   ```

3. Configure the test environment:

   - Set up your preferred browser as the default browser for running the tests.

4. Update the test configuration:

   - Locate the test configuration file (`cypress.json`) in the repository root.
   - Modify the necessary properties (e.g., base URL, credentials, timeouts) according to your testing environment.

## Running the Tests

To run the E2E tests using Cypress, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, where you can see the available test files and execute the tests interactively.

The tests will execute the specified E2E test cases against the selected product on [https://amazon.com](https://amazon.com). The test results will be displayed in the Cypress Test Runner, indicating whether each test passed or failed.

## Test Cases

The test cases included in this suite:

- Verify that the product(s) can be added to the cart.
- Search for the product by name/text and verify that the expected product is found.
- Search for the product by product ID (ASIN) and verify that the expected product is found.

## Timeboxing and Prioritization

To ensure adherence to the time constraints, I timeboxed my work to approximately 2 hours. Due to this time constraint I prioritized the tests based on their criticality and impact.

## Continuous Integration

The test suite can be seamlessly integrated into a continuous integration (CI) system to automate the execution of tests. Just configure your CI tool to execute the Cypress test command (`npx cypress run`) on a preferred CI workflow.
