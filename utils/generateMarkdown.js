// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'no license'){
  return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
  `;
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
     `;
} else {
  return ' ';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "no license") {
    return  `
    ## [License](#table-ofcontents)

    This Application uses the following license:

    ${renderLicenseLink(license)}
    `;  
  } else {
    return " ";
  }
};


// TODO: Create a function to generate markdown for README
//  return `# ${data.title}

function generateMarkdown(data) {
  const {github, licenseChoice, ...info} = data;

return `
# ${info.projectTitle}


## Table of Contents
- [Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)

## Project Description
${info.projectDescription}


${renderLicenseSection(info.license)}

## Installation
${info.projectInstallation}

## Usage
${info.usageInformation}

## Contribution
${info.contributionGuidelines}

## Testing
${info.testInstructions}

`;
}

module.exports = generateMarkdown;

