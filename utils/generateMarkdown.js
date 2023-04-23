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

  if (license === "no license") {
    return " ";
  } else {
    return `
    ### License
    ${license}
    ${renderLicenseBadge(license)}`
  }
};
    




// TODO: Create a function to generate markdown for README
//  return `# ${data.title}

function generateMarkdown(data) {
  const {github, licenseSelection, ...info} = data;

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
${renderLicenseSection(licenseSelection)}


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

