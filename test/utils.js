const execSQL = require('exec-sql');
const path = require('path');
require('dotenv').config({path: `${__dirname}/../.env.test`});

module.exports.cleanDB = function(done) {
  execSQL.connect({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  });
  console.log("Database selected: ",process.env.DB_NAME);
  execSQL.executeFile(path.join(__dirname, '../dbscripts/create-test-db.sql'), function(err) {
    execSQL.disconnect();
    if (err) {
      console.log('************ ATENCION ************');
      console.log(' Error while cleaning test DB:', err)
    }
    done();
  });
};
