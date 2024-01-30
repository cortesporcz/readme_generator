// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter a title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: "What is your project's description?",
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter a description!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'installation',
    message: 'What are your installation instructions?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter any info on how to install!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'What is your usage information?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter any info for usage!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What License applies to your application?',
    choices: [
        'None',
        'Apache license 2.0',
        'Boost Software License 1.0',
        'MIT',
        'Mozilla Public License 2.0',
    ]        
},
{
    type: 'input',
    name: 'contribute',
    message: "What are your contribution guidelines?",
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter any how to contribute info!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'What are your test instructions?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter any how to test info!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'username',
    message: "What is your GitHub Username?",
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter a username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: "What is your email address?",
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter a email!');
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
