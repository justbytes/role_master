const mysql = require("mysql2");

const connectMysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "seeds"
});

connectMysql.connect(function (err) {
    if (err)
    console.log("Can't connect to database.");
});

module.exports = connectMysql;