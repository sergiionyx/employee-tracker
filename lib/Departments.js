const db = require("../db/connection");

function Departments() {
  Departments.prototype.viewAllDepartments = function () {
    const sql = `Select * FROM departments`;

    db.promise()
      .query(sql)
      .then(([rows, fields]) => {
        let table = [];
        for (let row of rows) {
          let item = {
            department: row.name,
          };
          table.push(item);
        }
        console.table(" ");
        console.table(table);
      });
  };

  Departments.prototype.addDepartment = function (name) {
    const sql = `INSERT INTO departments (name)
                    VALUES(?)`;
    db.promise()
      .query(sql, name)
      .then(([rows, fields]) => {
        console.log(" ");
        console.log("Department added to table");
      });
  };
}

module.exports = {
  Departments,
};
