const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const cTable = require("console.table");

router.get("/employees", (req, res) => {
  const sql = `SELECT employees.*, roles.title
    AS title
    FROM employees
    LEFT JOIN roles
    ON employees.role_id = roles.id`;
  db.promise()
    .query(sql)
    .then(([rows, fields]) => {
      res.json({
        message: "success",
        data: rows,
      });
    });
});

router.post("/employees", ({ body }, res) => {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                      VALUES (?, ?, ?, ?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];
  db.promise()
    .query(sql, params)
    .then(([rows, fields]) => {
      res.json({
        message: "success",
        data: body,
      });
    });
});

module.exports = router;
