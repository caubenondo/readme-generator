// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter Project Title: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter Project Description: ',
    },
    {
      type: 'input',
      name: 'install-instruction',
      message: 'Enter Install Instruction:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter Usage:',
    },
    {
      type: 'input',
      name: 'constributors',
      message: 'Enter Constributors: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter Tests: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose license:',
        choices:['MIT','Tasdf','aswdfasd']
    }
    
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./output/${fileName}`,generateMarkdown(data))
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('readme.md',answers);
    }).then(()=>console.log('successful'))
    .catch((err)=>console.error(err));;
}

// Function call to initialize app
init();
