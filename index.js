const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];



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
        // Licence should be a list of options based on a separate list and list of badges
        {
            type: 'checkbox',
            name: 'UserLicence',
            message: 'Which licence to use?',
            choices: [
              'a', 'n', 'c', 'd',
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
        // console.log(response.username);
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

        // literals for building a page elements
       // const mdUserTitle = `#${userTitle}`;
       // const mdUserDescription = `${userDescription}`;
       // const myLocation = `<p  style="color:red;">${userlocation}</p>`;
       // const myURL = `<a href=${userURL}> my Page</a>`;
const mdTemplate = `
licence badge

\
#  ${userTitle}

## Description

${userDescription}

## Table of Content
* [description](#Description)
* [installation instructions] (#Installation)
* [usage information] (#Usage)
* [contribution guidelines] (#Contributing)
* [test instructions](#Tests)

## Installation

${userInstallation}

## Usage

${userUsage}

## Licence

Licence description

## Contributing

${userContributing}

## Tests

${userTests}

## Questions

* Github link
* Contact email


`
        

       // // append whole HTML to a file
        fs.appendFile('generated_README.md', mdTemplate, (err) => {
            if (err) throw err;
        });
    }
    );


    // fro mhttps://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -- Add tp my README!
    const licenceMIT ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    const licenceGNUv3 = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

















// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


