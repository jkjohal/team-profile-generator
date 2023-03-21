const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const template = require('./src/page-template');
const generatePage = require('./src/page-template');

const questions  = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID',
        message: "What is the employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType',
        message: "What is the employee type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the employee's school?"
        
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the employee's office number?"
        
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID',
        message: "What is the employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType',
        message: "What is the employee type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the employee's school?"
        
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the employee's office number?"
        
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID',
        message: "What is the employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType',
        message: "What is the employee type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the employee's school?"
        
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the employee's office number?"
        
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };


function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating HTML...');
      writeToFile('employee.html', generatePage({ ...inquirerResponses }));
    });
  }
  
init();
    
