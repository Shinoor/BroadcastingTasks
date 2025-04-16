Playwright vs Cypress
# Playwright pros:
. Faster
. JS/TS, Python, Java, C#
. Free parallel execution
. Can handle multiple tabs
. More comfortable transition
. Better with iFrame
. More comfortable transition from Selenium

# Cypress pros:
. Faster scripting (less code)
. Better auto-wait mechanism
. Clear documentation
. Better test runner (time machine)
. Dashboard service
Both of the framework are very powerful and you can't geta wrong choice if choose either
of the framework, it just different architecture, slightly different cababilities.

#
I used Plawright for the task.
After downloaded the folder on our local machine

# Configure Development Environment
. Node.js
. Git
.IDE (Visual Studio Code)
. Playwright extention for VS Code

# Installations
. clone from GitHub account provided
. Alternatively: a zip folder has been sent via email, on zip the folder on the local machine

# Dependencies
. To install the dependencies
>> npm install

. If error occour
>> npm install --force 

# Run Test on command line
. To run test
>> npx playwright test

. To run test on specific browser
>> npx playwright test --project=chromium

. To run a particular test spec, provide the name of the test
>> npx playwright test soundsTest.spec.ts --project=chromium

. To run test headed
>> npx playwright test soundsTest.spec.ts --project=chromium --headed

. To run a paticular test title, provide with the title of the test. example:
>> npx playwright test -g "todo application login" --project=chromium --headed

# Cucumber Framework
. To run test
>> npm test

. To run a specific test, provide the name of the test in the cucumber.json file under require. for example
>>  "require": ["tests/steps/*soundsPage.Steps.ts",]
