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
        message: "What is the engineer's github username?"
        
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
        
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?"
        
    },

]