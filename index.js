const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -- Add tp my README!
const licenceMIT ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const licenceGNUv3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const licenceBSD3 = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

// array of questions for user
const questions = [

];


// A list of questions to ask. Answers could be omitted
inquirer
    .prompt([
        {
            type: 'input',
            message: 'The title of project',
            name: 'userTitle',
        },
        {
            type: 'input',
            message: 'Description of project',
            name: 'userDescription',
        },
        {
            type: 'input',
            message: 'Installation steps',
            name: 'userInstallation',
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'userUsage',
        },
      
        {
            type: 'checkbox',
            name: 'UserLicence',
            message: 'Which licence to use?',
            choices: [
              'MIT', 'GNU GPL v3', 'BSD 3-Clause License', 'No licence please',
            ],
          },
        {
            type: 'input',
            message: 'Contributing',
            name: 'userContributing',
        },
        {
            type: 'input',
            message: 'Tests',
            name: 'userTests',
        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'userGitHub',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'userEmail',
        },


    ])
    .then((response) => {
        
        // destructure response object   
        const {
            userTitle,
            userDescription,
            userInstallation,
            userUsage,
            userLicence,
            userContributing,
            userTests,
            userGitHub,
            userEmail,
            
        } = response;

        // user selected licence
       let licenceChoice = response.UserLicence[0];
       let licenceBadge 
      // get corresponding badge
         switch(licenceChoice) {
                case "MIT":
                    licenceBadge =  licenceMIT;
                    debugger
                  break;
                case "GNU GPL v3":
                    licenceBadge =licenceGNUv3;
                  break;
                 case "BSD 3-Clause License":
                    licenceBadge =licenceBSD3;
                break;
                default:
                    licenceBadge ="No licence selected";
                 
              } 

const mdTemplate = `

 ${licenceBadge}

\
#  ${userTitle}

## Description

${userDescription}

## Table of Content
* [description](#description)
* [installation instructions](#installation)
* [usage information](#usage)
* [contribution guidelines](#contributing)
* [test instructions](#tests)

## Installation

${userInstallation}

## Usage

${userUsage}

## Licence

this project is covered by licence: ${licenceChoice}

## Contributing

${userContributing}

## Tests

${userTests}

## Questions

* Please visit my [Github](https://github.com/${userGitHub})
* Please contact me via [email](mailto:${userEmail}) if you have any additional questions


`
        

       // // append whole HTML to a file
        fs.appendFile('generated_README.md', mdTemplate, (err) => {
            if (err) throw err;
        });
    }
    );


    
   
















// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


