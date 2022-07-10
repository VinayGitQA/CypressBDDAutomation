Cypress-BDD project
--------------------
This is a framework that uses POM to build a folder structure that supports BDD using Cucumber
-Test scenrios are written in the form of Gherkins language in a file format ".feature"
-Page object model(POM) design pattern is used to manage the webelements and corresponding functions 
-JSON report is generated at the end of execution, which is converted to html using a plugin.
-Project is Dockerized 


Folder Structure
-----------------
cypress
    integration
       scenarioFiles
       StepDef
    plugins
       index.js
    support
     pageobject
     util
     index.js
cypress.json
Dockerfile
package.json

Framework folder details
------------------------
1. integration : Following sub folders are present 
 a. scenarioFiles: This folder contains files with extenstion ".feature", each 
                 file contains scenarios written in Gherkin language, using keywords "Given, When, Then, And" 
                 Example:
                 Given a user has access to Google website
                 And searche for an Android phone
                 Then android phone detils are displayed

 b. StepDef: This folder contains .js files, that has a binding function that 
             hooks corresponding steps in feature files to cypress code.
2. support : this folder contains two sub folder "pageobject" and "util" 
a. pageobject: It contains folder called "locators" that contains cssSelectors in 
               as a ".js" file, each file has a name corresponding to the page name.
               It also contains folder "ui_methods" that has functions that uses the locators present in <page>.js file
b. util: It contains re-usable code written in the form of functions

Important files:
----------------

package.json : This file contains oproject details, dependency details
               and plugin configuation as shown below.

{
  "name": "cypress_bdd",
  "version": "1.0.0",
  "description": "BDD project using cypress and cucumber",
  "main": "index.js",
  "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/integration/StepDef",
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/report/cucumber-json",
      "fileSuffix": ".cucumber",
      "filePrefix": ""
    }
  },
  "devDependencies": {
    "cypress": "^9.5.2",
    "cypress-cucumber-preprocessor": "4.3.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vinay S C",
  "license": "ISC",
  "dependencies": {
    "multiple-cucumber-html-reporter": "^1.21.4"
  }
}

cypress.json : This folder contains cypress and test related configurations.

Dockerfile: This file has details of the docker configuration, that is used to build image and execute the scripts

 
How to execute ?:
---------------
1. Download the code to your local repository
2. Run below code to create Docker image 
    docker build -t cypress-bdd-image:1.1.0 .
3. Use Docker run command to execute the scenario as below
    To execute in chrome browser 
    ---------------------------
    docker run -i -v ${PWD}:/cypress_bdd_project -t cypress-bdd-image:1.1.0  -b chrome --spec cypress/integration/scenarioFiles/**.feature; node ./generatehtml.js
    
    To execute in Firefox browser
    -----------------------------
    docker run -i -v ${PWD}:/cypress_bdd_project -t cypress-bdd-image:1.1.0  -b firefox --spec cypress/integration/scenarioFiles/**.feature; node ./generatehtml.js

Note: There is a open issue on cypress failing to run test cases in Firefox, below
url proides more insight: https://github.com/cypress-io/cypress/issues/22086



Execution output:
----------------
following folders are created inside cypress folder after executoin

video : This folder contains a video of test execution in the compress format
report: This folder contains execution report in .json file format
htmlreport: This folder contains index.html file.
                