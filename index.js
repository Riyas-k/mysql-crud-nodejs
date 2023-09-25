const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  try {
    connection.query("SELECT * FROM employee", (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching data from the database");
      } else {
        console.log(rows);
        res.send(rows);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
app.get("/employees/:id", (req, res) => {
  try {
    connection.query(
      "SELECT * FROM employee WHERE  id=?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error fetching data from the database");
        } else {
          console.log(rows);
          res.send(rows);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
app.delete("/employees/:id", (req, res) => {
  try {
    connection.query(
      "DELETE FROM employee WHERE  id=?",
      [req.params.id],
      (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error fetching data from the database");
        } else {
          console.log(rows);
          res.send(rows);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
app.post("/employees", (req, res) => {
  try {
    const emp = req.body;
    console.log(emp);
    const empData = [emp.name,emp.salary]
    connection.query(
      "INSERT INTO employee(name,salary) values(?)",
      [empData],
      (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error fetching data from the database");
        } else {
          console.log(rows);
          res.send(rows);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, (req, res) => {
  console.log("connection set");
});
