var dbCon = require('../../../config/db.config')

var Study_Results = function(type_subject) {
  this.sub_code = Study_Results.sub_code
  this.sub_credit = Study_Results.sub_credit
  this.sr_grade = Study_Results.sr_grade
}
// get all types
Study_Results.getStudyResult = (result) => {
  dbCon.query('SELECT sub_code,  sub_credit, sr_grade FROM  subject INNER JOIN student_result ON subject.sub_id = student_result.sub_id', (err, res) => {
    if(err) {
      console.log('Error while fetching subject types.', err)
      result(null, err)
    }else {
      console.log('Subject types fetched successfully.')
      result(null, res)
    }
  })
}
module.exports = Study_Results