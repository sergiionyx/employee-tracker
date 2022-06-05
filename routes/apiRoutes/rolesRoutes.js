const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// Get all roles
router.get("/roles", async (req, res) => {
  const sql = `SELECT roles.*, departments.name
                      AS department_name
                      FROM roles
                      LEFT JOIN departments
                      ON roles.department_id = departments.id`;
  db.promise()
    .query(sql)
    .then(([rows, fields]) => {
      res.json({
        message: "success",
        data: rows,
      });
    });
});

// Create a new role
router.post("/roles", async ({ body }, res) => {
  const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department_id];
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
