// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
    type: 'input',
    name: 'github',
    message: 'Please provide you GiHub Repository Username',
    validate: githubInput => {
        if (githubInput) {
            return true;}
        else {
        console.log('Please provide your GiHub Repository Username to continue!');
        return false;}  
        }
    },

    {
    type: 'input',
    name: 'email',
    message: 'Please provide your e-mail address:',
    validate: emailInput => {
        if (emailInput) {
            return true;}
        else {
        console.log('Please provide your GiHub user name to continue!');
            return false;}  
        }
    },
    
    {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter your Project title:',
    validate: projectTitleInput => {
        if (projectTitleInput) {
            return true;}
        else {
        console.log('Please provide your Project Title to continue!');
                return false;}  
        }
    },

    {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter project description:',
    validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
            return true;}
        else {
        console.log('Please enter description of your Project!');
                return false;}  
        }
    },

    {
    type: 'input',
    name: 'projectInstallation',
    message: 'Enter installation instructions for your project:',
    validate: installationInstructions => {
        if (installationInstructions) {
            return true;}
        else {
        console.log('Please enter installation instructions!');
                return false;}  
        }
    },     

    {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter usage information of your project:',
    validate: usageInformationInput => {
        if (usageInformationInput) {
            return true;}
        else {
        console.log('Please enter Usage Information!');
                return false;}  
        }
    }, 

    {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Enter Contribution Guidelines:',
    validate: contributionGuidelinesInput => {
        if (contributionGuidelinesInput) {
            return true;}
        else {
        console.log('Please enter Contribution Guidelines!');
                return false;}  
        }
    },           

    {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter Test Instructions:',
    validate: testInstructionsInput => {
        if (testInstructionsInput) {
            return true;}
        else {
        console.log('Please enter Test Instructions!');
                return false;}  
        }
    },         

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) throw new Error(err);
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
