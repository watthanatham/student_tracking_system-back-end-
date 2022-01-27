
var dbCon = require('../../config/db.config')

var Subject = function(subject) {
  this.sub_id = subject.sub_id
  this.sub_code = subject.sub_code
  this.sub_name = subject.sub_name
  this.sub_credit = subject.sub_credit
  this.st_id = subject.st_id
  this.module_id = subject.module_id
}
// get all subjects
Subject.getAllSubjects = result => {
  dbCon.query('SELECT * FROM subjects', (err, res) => {
    if(err) {
      console.log('Error while fetching subjects', err)
      result(null, err)
    }else {
      console.log('Subjects fetched successfully')
      result(null, res)
    }
  })
}
module.exports = Subject
