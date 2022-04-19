const mysql = require('mysql')
const util = require('util')

const dbConn = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'informatics_result_system'
})
dbConn.connect(function (error) {
  if(error) throw error;
  console.log('Connected database')
})
dbConn.query = util.promisify(dbConn.query)
module.exports = dbConn;