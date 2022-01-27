const mysql = require('mysql')

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
module.exports = dbConn;