# HelloBetter-WebdriverIO

Test automation framework for test application using WebdriverIO-CucumberBDD

## Tech Stack

* Webdriver IO: v6.0
* Cucumber : v6.0
* Selenium: v6.17

## Steps to install and executed

Below are the steps to have the repo ready for execution

* Clone the above repository using the command ```git clone git@github.com:geekyPiyush/HelloBetter-WebdriverIO.git``` 
* Once cloned, goto the folder /HelloBetter-WebdriverIO and run command ```npm install```
Wait for dependencies to download under node_modules folder
* All done from setup now :) 

Executing tests

* There is just 1 feature file having one scenario outline with 2 examples.
  ** 3 entries for morning
  ** 3 entries for evening
  
* The code supports execution in German or English locale.

* Run the below command to get the tests executed

```npm test --locale=de``` - would run and validate the tests in DE locale

```npm test --locale=en``` - would run and validate the tests in EN locale

**Note: Provide --locale param for test cases to run in CLI. I have kept it mandatory for tests to run**

## Post execution

Once the test cases have executed cucumber reports would be generated and path would be provided in the run end

The reports can be opened manually in any browser or can be opened automatically once test execution is done.

You can control the launch of reports via parameter ```launchReport``` under onPrepare method of ```wdio.conf.js```
