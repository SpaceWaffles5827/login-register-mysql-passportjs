const mysql = require('mysql');


const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "!zzJack5827",
    database: "trends"
});
  
module.exports = db;
