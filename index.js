// TODO: Include packages needed for this application
// Installed inquirer@8.2.4 packages to run this program

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    
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
        name: 'projectMotivation',
        message: 'Please provide your What was your motivation for this project:',
        validate: emailInput => {
            if (emailInput) {
                return true;}
            else {
            console.log('Please provide your What was your motivation for this project!');
                return false;}  
            }
        },

        {
            type: 'input',
            name: 'projectSolving',
            message: 'Please provide your what does this project solves?',
            validate: githubInput => {
                if (githubInput) {
                    return true;}
                else {
                console.log('Please provide your what does this project solves?');
                return false;}  
                }
            },
        
            {
                type: 'input',
                name: 'projectWhy',
                message: 'Please provide your why did you build this project?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;}
                    else {
                    console.log('Please provide your why did you build this project?');
                    return false;}  
                    }
                },

            {
                type: 'input',
                name: 'projectLearning',
                message: 'Please provide your what did you learn?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;}
                    else {
                    console.log('Please provide your what did you learn?');
                    return false;}  
                    }
                },

    {
        type: 'list',
        name: 'licenseSelection',
        message: 'Please Select the License that you like to use for your project [ISC, Apache 2.0, MIT, GPL 3.0, no license]:',
        choices: ['ISC', 'Apache 2.0', 'MIT', 'GPL 3.0', 'no license']
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
        name: 'projectCredits',
        message: 'Enter usage Credits of your project:',
        validate: usageInformationInput => {
            if (usageInformationInput) {
                return true;}
            else {
            console.log('Please enter Credits Information!');
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

    {
        type: 'input',
        name: 'emailUser',
        message: 'Enter your e-mail address:',
        validate: testInstructionsInput => {
            if (testInstructionsInput) {
                return true;}
            else {
            console.log('Please enter your e-mail address!');
                    return false;}  
            }
        },    

        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter your GitHub Address:',
            validate: testInstructionsInput => {
                if (testInstructionsInput) {
                    return true;}
                else {
                console.log('Please enter your GitHub Address!');
                        return false;}  
                }
            },    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) throw new Error(err);
        console.log("Readme File Sucess! Review results on readme.md!")
    })
};



// TODO: Create a function to initialize app
function init() {

    console.log(` Professional Readme Generator Program!
    Please Provide the required information answer each of the questions`);

    inquirer.prompt(questions)
    .then(readmeData => {
        writeToFile("./results/readme.md", generateMarkdown(readmeData))
    })
};

// Function call to initialize app
init();
