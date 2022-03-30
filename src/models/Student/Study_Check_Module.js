var dbCon = require('../../../config/db.config')

var StudycheckM = function(studycheckmodule) {
  this.module_id = this.studycheckmodule.module_id
  this.module_credit = this.studycheckmodule.module_credit
}
// get module result for student
// fix id don't forget to fixed id
StudycheckM.getModuleOverview = (stu_id, result) => {
  dbCon.query('SELECT c.module_name, c.module_credit, SUM(b.sub_credit) as student_get FROM student_result AS a INNER JOIN subject AS b ON a.sub_id = b.sub_id INNER JOIN module AS c ON b.module_id = c.module_id WHERE a.stu_id = ? GROUP BY c.module_id ORDER BY c.module_id', [stu_id],(err, res) => {
    if(err) {
      console.log('Error while fetching result', err)
      result(null, err)
    }else {
      console.log('Result fetched successfully')
      result(null, res)
    }
  })
}
StudycheckM.getResultSubjectbyModule = (module_id, stu_id, result) => {
  dbCon.query('SELECT a.sub_id, a.sub_credit, b.sr_grade FROM subject AS a, student_result As b WHERE a.sub_id = b.sub_id AND a.module_id = ? AND b.stu_id = ?', [module_id, stu_id], (err, res) => {
    if(err) {
      console.log('Error while fetching student result')
      result(null, err)
    }else {
      console.log('Result fetched successfully')
      result(null, res)
    }
  })
}

module.exports = StudycheckM