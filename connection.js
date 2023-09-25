const mysql = require("mysql2");
const myConnection = mysql.createConnection({
  host: "localhost",
  user: "sammy",
  password: "your_password_here",
  database: "employee",
});

myConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected");
  }
});

module.exports = myConnection;
