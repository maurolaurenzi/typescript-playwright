# Max user validations

A TypeScript + Playwright test script that validates that users are able to perform some of their most common operations on https://play.max.com (former HBO Max) through the UI. This test automation project implements the Page Object Model (POM) design pattern, dividing the project into page objects (test/pages) and test cases (test/specs). Validations include:

- User is able to add a film to their watchlist and then remove it
- User is able to see the details of a film

## Dependencies

In order to run the test cases, you must have NodeJS preinstalled:

- NodeJS: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

- Once you have NodeJS installed in your machine, you can install the rest of the dependencies by opening a terminal, going to the root project's directory and running: `npm i`

## How to Run

1. Clone the repository and navigate to the project directory.
2. Make sure you have all the dependencies installed.
3. Create an .env file (`touch .env`) in the root project's directory and add the `USERNAME` and `PASSWORD` variables to it, then save it.
4. Run the command `npx playwright test`.
5. The test results should be displayed in the terminal after execution.
6. You can also run `npx playwright show-report` to see a detailed html doc containing each test case execution result and a recording.

## Notes

- You can watch a demo of the tests execution [here](https://vimeo.com/938859782?share=copy).
- You can run the tests in headless mode by editing the `headless: false` variable inside defineConfig.use in the playwright.config.ts file
- Given that Playwright doesn't mantain a browser's context between different test cases or hooks, we cannot use a before hook for logging into the app once and then running the tests. The workaround was to create an `auth.setup.ts` file inside the tests folder and then use it in the playwright.config.ts. For more info: https://playwright.dev/docs/auth
