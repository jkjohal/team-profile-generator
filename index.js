const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const questions  = [
    {
        type: 'input',
        name: 'employeeName1',
        message: "What is the first employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID1',
        message: "What is the first employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email1',
        message: "What is the first employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType1',
        message: "What is the first employee's type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github1',
        message: "What is the first employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school1',
        message: "What is the first employee's school?"
        
    },
    {
        type: 'input',
        name: 'office1',
        message: "What is the first employee's office number?"
        
    },
    {
        type: 'input',
        name: 'employeeName2',
        message: "What is the second employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID2',
        message: "What is the second employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email2',
        message: "What is the second employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType2',
        message: "What is the second employee's type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github2',
        message: "What is the second employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school2',
        message: "What is the second employee's school?"
        
    },
    {
        type: 'input',
        name: 'office2',
        message: "What is the second employee's office number?"
        
    },
    {
        type: 'input',
        name: 'employeeName3',
        message: "What is the third employee's name?"
        
    },
    {
        type: 'input',
        name: 'employeeID3',
        message: "What is the third employee's ID number?"
        
    },
    {
        type: 'input',
        name: 'email3',
        message: "What is the third employee's email address?"
        
    },
    {
        type: 'list',
        name: 'employeeType3',
        message: "What is the third employee's type?",
        choices: ["manager", 'engineer', 'intern']
        
    },
    {
        type: 'input',
        name: 'github3',
        message: "What is the third employee's github username?"
        
    },
    {
        type: 'input',
        name: 'school3',
        message: "What is the third employee's school?"
        
    },
    {
        type: 'input',
        name: 'office3',
        message: "What is the third employee's office number?"
        
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
    
