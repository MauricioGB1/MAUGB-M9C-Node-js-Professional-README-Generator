// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badgeLicense = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLicense}-green.svg)](${renderLicenseLink(license)})
  `
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let mylicenseLink = license.toLowerCase().replace(" ","-");
  return `https://choosealicense.com/licenses/${mylicenseLink}/.`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "no license") {
    return " ";
  } else {
    return `

## License
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

${info.projectMotivation}

${info.projectSolving}

${info.projectWhy}

${info.projectLearning}

${renderLicenseSection(licenseSelection)}


## Installation
${info.projectInstallation}



## Usage
${info.usageInformation}



## Credits
${info.projectCredits}



## Contribution
${info.contributionGuidelines}


## Testing
${info.testInstructions}

## For Additional Questions, please contact:
${info.githubUser}

${info.emailUser}

`;
}

module.exports = generateMarkdown;

