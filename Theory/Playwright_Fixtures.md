## Playwright Fixtures

### 1. ```beforeEach()```
Runs before every individual test. It's useful for setting up the test environment for each test, like opening a browser or initializing data.

Example: `Launching a new browser page before each test.`

### 2. ```afterEach()```
Runs after every individual test. It's typically used for cleanup tasks, such as closing the browser or clearing test data.

Example: `Closing the browser page after each test.`

### 3. ```beforeAll()```
Runs once before all tests in a file or test suite. It’s ideal for setup that is shared across multiple tests, like starting a database or server.

Example: `Starting the browser once before all tests run.`

### 4. ```afterAll()```
Runs once after all tests in a file or suite are done. This is useful for cleanup that only needs to happen once, like shutting down a server or database.

Example: `Closing the browser after all tests are done.`
