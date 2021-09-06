//Import Primary Dependencies
const inq = require("inquirer")

//Import classes
const Employee = require("./scripts/employee");
const Manager = require("./scripts/manager");
const Engineer = require("./scripts/engineer");
const Intern = require("./scripts/intern");

//Questions
const employeeInputs = [
  {
    type: 'input',
    message: 'Name?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Employee ID?',
    name: 'id'
  },
  {
    type: 'input',
    message: 'Email?',
    name: 'email'
  }
]
const managerInputs = [ ...employeeInputs,
  {
    type: 'input',
    message: 'Office Number?',
    name: 'officeNumber'
  }
]

const enginneerInputs = [ ...employeeInputs,
  {
    type: 'input',
    message: 'GitHub Username?',
    name: 'github'
  }
]

function addEmployee(role) {
  
  inq
    .prompt(managerInputs)
    .then(response => console.log(response.initial))
}

addEmployee();
