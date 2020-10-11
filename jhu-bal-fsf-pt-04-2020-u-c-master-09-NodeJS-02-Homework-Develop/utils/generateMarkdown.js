// function to generate markdown for README
function generateMarkdown(answers) {
let licenseBadge;

 if (answers.license[0] === "Apache 2") {
  licenseBadge = "![Apache 2](https://img.shields.io/badge/license-Apache%202-9cf)";
} else if (answers.license[0] === "MIT") {
  licenseBadge = "![MIT](https://img.shields.io/badge/license-MIT-9cf)";
} else if (answers.license[0] === "GPL") {
  licenseBadge = "![GPL](https://img.shields.io/badge/license-GPL-9cf)";
} else {
  licenseBadge = "";
};
console.log (answers)
return `

# ${answers.title}
${licenseBadge}

# Description
${answers.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
## Installation 
${answers.installation}
## Usage
${answers.usage}
## Licenses 
This application is covered under ${answers.license}.
## Contributions
${answers.contributions}
## Tests
${answers.tests}
## Questions
Questions about this application can be directed towards <${answers.email}>.
Other works can be found at <https://github.com/${answers.username}>.
`

}
module.exports = generateMarkdown;
