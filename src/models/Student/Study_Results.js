var dbCon = require('../../../config/db.config')

var Study_Results = function(type_subject) {
  this.sub_code = Study_Results.sub_code
  this.sub_credit = Study_Results.sub_credit
  this.sr_grade = Study_Results.sr_grade
}
// get all types
Study_Results.getStudyResult = (st_id, stu_id ,result) => {
  dbCon.query('SELECT a.sub_id, a.sub_credit, b.sr_grade FROM subject AS a, student_result AS b WHERE a.sub_id = b.sub_id AND a.st_id = ? AND b.stu_id = ?', [st_id, stu_id],(err, res) => {
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