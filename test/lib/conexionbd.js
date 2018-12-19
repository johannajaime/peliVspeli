var mysql = require('mysql')

if (process.env.NODE_ENV === 'test') {
 require('dotenv').config({ path: `${__dirname}/.env.test` })
}
else {
 require('dotenv').config()
}

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});

module.exports = connection;