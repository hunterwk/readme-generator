//function to generate the markdown file
const fs = require("fs");


const data = {
    title: 'Hello World!',
    description: "it's a description",
}

function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    ${data.description}`
}