const inquirer = require('inquirer');
const db = require("./db");


function mainQuestions() {
  inquirer
    .prompt([
      {
      type: "list",
      name: "choice",
      choices: [
        {
          name: "View all Employees",
          value: "view_employees"
        },
        {
          name: "View all Employees by Department",
          value: "view_employees_by_department"
        },
        {
          name: "View all Employees by Manager",
          value: "view_employees_by_manager"
        },
        {
          name: "Add Employee",
          value: "add_employees"
        },
        {
          name: "View all Employees",
          value: "view_employyes"
        },
      ]}
    ])
  }

  mainQuestions();
