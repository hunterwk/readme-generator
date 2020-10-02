//function to generate the markdown file
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const { Console } = require("console");
const licenses = [
    "Apache 2.0 License",
    "BSD 3-Clause License",
    "ISC License (ISC)",
    "The MIT License",
];

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
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
            name: "tests",
        },
        {
            type: "list",
            message: "Choose a license:",
            choices: licenses,
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
        const { title } = response;
        const { description } = response;
        const { install } = response;
        const { usage } = response;
        const { contribution } = response;
        const { tests } = response;
        const { license } = response;
        let badge;
        switch (license) {
            case "Apache 2.0 License":
                badge =
                    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "BSD 3-Clause License":
                badge =
                    "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "ISC License (ISC)":
                badge =
                    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
            case "The MIT License":
                badge =
                    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
        }
        const { github } = response;
        const { email } = response;


        let generateReadme =
            `
## ${response.title}

${badge}

- [Description](#description)
- [Installation Instructions](#Installation%20Instructions)
- [Usage Instructions](#Usage%20Instructions)
- [Contribution Guidelines](#Contribution%20Guidelines)
- [Testing Guidelines](#Testing%20Guidelines)
- [Questions?](#Questions?)

### Description
${response.description}
        
### Installation Instructions
${response.install}
        
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
