const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs")
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile) 
// array of questions for user
function askQuestions () {

return inquirer.prompt( [
{
     type: "input",

     name: "title",

     prompt: "Project title"
},

{
    type: "input",

    name: "description",

    prompt: "Project description"

},

{
    type: "input",

    name: "table_of_contents",

    prompt: "Display table of contents here"
},

{
    type: "input",

    name: "installation",

    prompt: "Put installation information here"
},

{
    type: "input",

    name: "usage",

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

{ 
    type: "input",

    name: "email",

    prompt: "Display email information here."
},
{
    type: "input",

    name: "username",

    prompt: "Display GitHub profile username here"
    
}

])

}
 
// function to write README file
function writeToFile(data) {
    writeFileAsync("README.md", data);
}

// function to initialize program
function init() {
        askQuestions ()
        .then(function (answers) {
          writeToFile(markdown(answers));
        })
}

// function call to initialize program
init();
