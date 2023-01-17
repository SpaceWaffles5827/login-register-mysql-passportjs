const mysql = require('mysql');


const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "password",
    database: "userTest"
});
  
module.exports = db;
