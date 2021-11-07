//Import Primary Dependencies
const inq = require("inquirer")
const fs = require("fs")

// Import Template
const pageRender = require("./scripts/pageRender")

//Import classes
const Employee = require("./scripts/employee");
const Manager = require("./scripts/manager");
const Engineer = require("./scripts/engineer");
const Intern = require("./scripts/intern");

let employeeCards = '';

// Questions
// Flex position exists as the flex question that is role dependant. The message will be changed depending on the role chosen
const employeeInputs = [{
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
  },
  {
    type: 'input',
    message: '',
    name: 'flex'
  },
]

// Initializing the employee adding tool by requiring a role type
function addEmployeeInit() {
  inq
    .prompt([{
      type: 'list',
      message: 'What is the role of the Employee?',
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'role'
    }])
    .then(response => addEmployee(response.role))
    .catch(err => console.error(err))
}

// Chosen role type will then determine the flex question asked and which constuctor class is used.
function addEmployee(role) {
  let construct;
  if (role === "Manager") {
    employeeInputs[3].message = "Office number?";
    construct = Manager;
  } else if (role === "Engineer") {
    employeeInputs[3].message = "Github Username?";
    construct = Engineer;
  } else if (role === "Intern") {
    employeeInputs[3].message = "School?";
    construct = Intern;
  }
  inq
    .prompt(employeeInputs)
    .then(response => {
      const newEmployee = new construct(response.name, response.id, response.email, response.flex);
      return newEmployee;
    })
    //.then(response => console.log(response.renderCard()))
    .then(response => employeeCards = employeeCards + response.renderCard() )
    .then(data => addMoreEmployees())
}

function addMoreEmployees() {
  inq
    .prompt([{
      type: 'list',
      message: 'Add another employee?',
      choices: ['Yes', 'No'],
      name: 'addMore'
    }])
    .then(response => {
      if (response.addMore === 'Yes') {
        addEmployeeInit();
        return;
      } else {
        pageRender(employeeCards);
        return;
      }})
    .catch(err => console.error(err))
}

addEmployeeInit();
