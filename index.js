// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
    },
    {
      type: 'email',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter Project Title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description about the project',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'what command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'what does the user need to know about contributing the repo?',
    },
   
    {
        type: 'list',
        name: 'license',
        message: 'choose license:',
        choices:['Apache 2.0','Boost','CCO','Elipse','GNU', 'ISC','MIT', 'Unlicense', 'No license needed']
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./output/${fileName}`,generateMarkdown(data))
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('README.md',answers);
    }).then(()=>console.log('The README file is generated in output folder'))
    .catch((err)=>console.error(err));;
}

// Function call to initialize app
init();
