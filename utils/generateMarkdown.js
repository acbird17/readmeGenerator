// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return "";
  }
  if (license == "GNU") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }
  if (license == "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  return `https://opensource.org/licenses/MIT`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let md =
    renderLicenseBadge(data.license) +
    `
  # ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}
## Image
 
 <img src="./${data.image}" width="250px"></img>
 
## License
<a href="` +
    renderLicenseLink(data.license) +
    `">${data.license} </a>
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
You can contact me by email at ${data.email} or on Github at ${data.github}.
  
    `;
  return md;
}

module.exports = generateMarkdown;
