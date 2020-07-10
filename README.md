# Monstercat QA Role Test

This is a test which is to be performed by candidates for the QA Role in the technology team at Monstercat.

## Preperation

 * Have [Git](https://git-scm.com/) installed on your local machine.
 * Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your local machine and are familiar with it.
 * Please use the latest version of [Chrome](https://www.google.com/chrome/) to assess the test.

## Project Setup

Please perform the following steps in your choice of terminal to setup the project.

```bash
git clone git@github.com:monstercat/qa-test-ui.git
cd qa-test-ui
npm i
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in Chrome to open the project.

## 2 Portion Test

This test contains 2 portions. The first is performed in person during the interview while the second half is a take home exam which you will be given 96 hours to complete.

### Part 1 - In Person

For the first portion of these test we would like you to install and run the project and start assessing the latest version of a new login page we have built. It is your responsibility to run through it to find any bugs and report them. 

During the live portion please do the following:

 * Record bugs you encounter into a Google Spreadsheet. Be as descriptive as possible, treat this as if it had the same functionality as other bug reporting software. Add as many columns as needed.
 * Use Chrome Developer Tools to debug and find issues in the code. Please make suggestions for fixes via bug report in the sheet.
 * If desired, provide a fix to the source code.
 * Talk us through your thought processes of how you are assessing the process. Include any methodologies, practices, and execptions you have thought of.
 * Take any notes of how you may create test cases for problems you encounter for future testing.
 
Please refer to the Application Expectations below to understand how the application should be behaving correctly.
 
### Part 2 - Take Home

Given that you have spent some time debugging and finding issues with our new software it would be a good idea to automate your job so you can speed up manual work in the future. From the notes you've gather beforehand please choose an automated test suite software that fits your needs and design a series of tests. Some suggestions include Selenium, Cypress, Saucelabs. If possible please include documentation with the tests you implement.

Once you have implemented your tests and are confident with them please send us an email with your work and a written up response to your implementation. Please include details about your approach, the decisions you made (and why), and what tests are included. You can send your work to tech@monstercat.com

## Application Expectations

This project includes a basic login page for a new piece of software we are building. The development team has just does it's first round of work on the sofware and it needs review. It is expected to work in the following details below.

 1. There is a login box that requires a user's email and password to proceed when they click the "Login" button.
 2. When a user is logged in and they access "/home" they should see the successful login page.
 3. There should be a functioning "Logout" button on the "/home" page.
 4. The server should be making calls to "/login", "/logout", and "/me" in accordance with the API spec we have designed.
 5. The user should not run into any issues or lost pages by means of natural interaction with the application.
 
