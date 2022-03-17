var dbCon = require('../../../config/db.config')

var StudycheckM = function(studycheckmodule) {
  this.module_id = this.studycheckmodule.module_id
  this.module_credit = this.studycheckmodule.module_credit
}
// get module result for student
// fix id don't forget to fixed id
StudycheckM.getModuleResult = (result) => {
  dbCon.query('SELECT module.module_id, module.module_credit, SUM(subject.sub_credit) FROM student_result INNER JOIN subject ON student_result.sub_id = subject.sub_id INNER JOIN module ON subject.module_id = module.module_id WHERE student_result.stu_id = 61160045 GROUP BY module.module_id ORDER BY module.module_id', (err, res) => {
    if(err) {
      console.log('Error while fetching result', err)
      result(null, err)
    }else {
      console.log('Result fetched successfully')
      result(null, res)
    }
  })
} 

module.exports = StudycheckM