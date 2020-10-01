//function to generate the markdown file
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer")
//const {Console} = require("console";)


const data = {
    title: 'Hello World!',
    description: "it's a description",
    installation: "how to install",
    usage: "what to use this for",
    contributing: "contribution guidelines",
    tests: "test instructions",
    license: "MIT probably",
    github: "github username",
    email: "email",

}

function generateMarkdown(data) {
    return `# ${data.title}
    (LICENSE BADGE HERE)
    ## Description
    ${data.description}
    
    ## Installation Instructions
    ${data.installation}
    
    ## Usage Instructions
    ${data.usage}

    ## Contribution Guidelines
    ${data.contributing}
    
    ## Questions?
    ${data.github}
    or email me at ${data.email}
    
    `
}