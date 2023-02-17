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
            username,
            userlocation,
            userURL
        } = response;

        // literals for building a page elements
        const myHeader = `<h1>${username}</h1>`;
        const myLocation = `<p  style="color:red;">${userlocation}</p>`;
        const myURL = `<a href=${userURL}> my Page</a>`;

        

        // append whole HTML to a file
        fs.appendFile('index.html', stringHTML, (err) => {
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


