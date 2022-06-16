const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) {
    console.error(err);
    console.log("Unable to connect to database.");
    process.exit(1);
  }
});

module.exports = connection;
