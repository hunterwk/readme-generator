//function to generate the markdown file
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const {Console} = require("console");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your title?",
            name: "title",
        },
        {
            type: "input",
            message: "Enter your description:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter installation instructions:",
            name: "install",
        },
        {
            type: "input",
            message: "How can you use this app?",
            name: "usage",
        },
        {
            type: "input",
            message: "Define contribution guidelines:",
            name: "contribution",
        },
        {
            type: "input",
            message: "Define testing instructions:",
            name: "tests" ,
        },
        {
            type: "input",
            message: "Which license would you like to use?",
            name: "license",
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "github",
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email",
        }


    ])
    .then((response) => {
        const {title} = response;
        const {description} = response;
        const {install} = response;
        const {usage} = response;
        const {contribution} = response;
        const {tests} = response;
        const {license} = response;
        const {github} = response;
        const {email} = response;


        let generateReadme = 
        `
        ## ${response.title}

        (LICENSE BADGE HERE)

        - [Description](#description)
        - [Installation Instructions](#Installation%20Instructions)
        - [Usage Instructions](#Usage%20Instructions)
        - [Contribution Guidelines](#Contribution%20Guidelines)
        - [Testing Guidelines](#Testing%20Guidelines)
        - [Questions?](#Questions?)

        ### Description
        ${response.description}
        
        ### Installation Instructions
        ${response.installation}
        
        ### Usage Instructions
        ${response.usage}
    
        ### Contribution Guidelines
        ${response.contribution}

        ### Testing Guidelines
        ${response.tests}
        
        ### Questions?
        ${response.github}
        or email me at ${response.email}
        
        `

        writeFileAsync('./Generated/README.MD', generateReadme);
    })
    .then(() => console.log("file made successfully!"));
 