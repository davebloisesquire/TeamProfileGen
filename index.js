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

const internInputs = [ ...employeeInputs,
  {
    type: 'input',
    message: 'School name?',
    name: 'school'
  }
]

function addEmployeeInit() {
  inq
    .prompt([
      {
        type: 'list',
        message: 'What is the role of the Employee?',
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role'
      }
    ])
    .then(response => addEmployee(response.role))
    .catch(err => console.error(err))
}

function addEmployee(role) {
  let addInputs;
  if (role === "Manager") {
    addInputs = managerInputs;
  } else if (role === "Engineer") {
    addInputs = enginneerInputs;
  } else if (role === "Intern") {
    addInputs = internInputs;
  }
  inq
    .prompt(addInputs)
    .then(response => console.log(response))
}

function addMoreEmployees() {
  
}

addEmployeeInit();
