const mysql = require('mysql');
const { USER, PASSWORD, HOST, DB  } = process.env;

const db = mysql.createConnection(`mysql://${USER}:${PASSWORD}@${HOST}/${DB}`);

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('successfully connected to database as id: ' + db.threadId);
});

// keep alive connection
setInterval(() => {
    db.query('SELECT 1');
}, 4500);

module.exports = db;