const mysql = require('mysql');
const { USER, PASSWORD, HOST, DB  } = process.env;

const config = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB,
};

const db = mysql.createPool(config);

// keep alive connection
setInterval(() => {
    db.query('SELECT 1');
}, 4500);

module.exports = db;