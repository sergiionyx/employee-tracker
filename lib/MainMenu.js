const inquirer = require("inquirer");
const { Departments } = require("./Departments");
const { Roles } = require("./Roles");
const { Employees } = require("./Employees");

function MainMenu() {
  MainMenu.prototype.start = function () {
    inquirer
      .prompt({
        type: "list",
        name: "main",
        message: "Please choose on of the following options",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee",
        ],
      })
      .then(({ main }) => {
        if (main === "view all departments") {
          new Departments().viewAllDepartments();
          this.start();
        } else if (main === "view all roles") {
          new Roles().viewRoles();
          this.start();
        } else if (main === "view all employees") {
          new Employees().viewAllEmployees();
          this.start();
        } else if (main === "add a department") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "title",
                message: `What is the department title?`,
              },
            ])
            .then(({ title }) => {
              new Departments().addDepartment(title);
              this.start();
            });
        } else if (main === "add a role") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "title",
                message: `What is the role title?`,
              },
              {
                type: "input",
                name: "salary",
                message: `What is the role's salary?`,
              },
              {
                type: "input",
                name: "department_id",
                message: `What is the role's department id`,
              },
            ])
            .then(({ title, salary, department_id }) => {
              new Roles().addRole(title, salary, department_id);
              this.start();
            });
        } else if (main === "add an employee") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "first_name",
                message: `What is the employee's first name?`,
              },
              {
                type: "input",
                name: "last_name",
                message: `What is the employee's last name?`,
              },
              {
                type: "input",
                name: "role_id",
                message: `What is the employee's role id`,
              },
              {
                type: "input",
                name: "manager_id",
                message: `What is the employee's manager id`,
              },
            ])
            .then(({ first_name, last_name, role_id, manager_id }) => {
              new Employees().addEmployee(
                first_name,
                last_name,
                role_id,
                manager_id
              );
              this.start();
            });
        } else if (main === "update an employee") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "id",
                message: `What is the employee's id?`,
              },
              {
                type: "input",
                name: "role_id",
                message: `What is the employee's new role id?`,
              },
            ])
            .then(({ id, role_id }) => {
              new Employees().updateEmployeeRole(role_id, id);
              this.start();
            });
        }
      });
  };
}

module.exports = { MainMenu };
