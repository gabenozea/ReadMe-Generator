const fs = require("fs");
const util = require("utils");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

// array of questions for user
function askQuestions () {}

return inquirer.prompt( [
{
     type: "input",

     name: "project_name",

     prompt: "Project title"
},

{
    type: "input",

    name: "project_description",

    prompt: "Project description"

},

{
    type: "input",

    name: "table_of_contents",

    prompt: "Display table of contents here"
},

{
    type: "input",

    name: "install",

    prompt: "Put installation information here"
},

{
    type: "input",

    name: "project_usage",

    prompt: "Put usage information here."
},

{
    type: "input",

    name: "license",

    prompt: "Display project licensces."
},

{
    type: "input",

    name: "contributions",

    prompt: "Put the information of any contributions here."
},

{
    type: "input",

    name: "tests",

    prompt: "Describe the tests you put into the project here."
},

{
    type: "input",

    name: "tests",

    prompt: "Describe the tests you put into the project here."
},

{
    type: "input",

    name: "questions",

    prompt: "Display contact information here."
},

])

// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync("README.md", data);
}

// function to initialize program
function init() {
    function init() {
        askQuestions ()
        .then(function (answers) {
          writeToFile(markdown(answers));
        })
      }
}

// function call to initialize program
init;
