var dbCon = require('../../../config/db.config')

var Model_Subject = function(model_subject) {
  this.module_id = model_subject.module_id
  this.course_id = model_subject.course_id
  this.module_name = model_subject.module_name
  this.module_credit = model_subject.module_credit
}
// get all types
Model_Subject.getModule = (course_id, module_id, result) => {
  dbCon.query('SELECT a.sub_id, a.sub_name_thai, a.sub_credit FROM subject AS a WHERE a.module_id = ? AND a.course_id = ?', [module_id, course_id],(err, res) => {
    if(err) {
      console.log('Error while fetching subject types.', err)
      result(null, err)
    }else {
      console.log('Subject types fetched successfully.')
      result(null, res)
    }
  })
}
Model_Subject.getModuleinForm = (id, result) => {
  dbCon.query('SELECT module_id as value, module_name as text FROM module WHERE course_id=?', id, (err, res) => {
    if(err) {
      console.log('Error getting subject type')
      result(null,err)
    }else {
      console.log('Get subject type in form success')
      result(null, res)
    }
  })
}
Model_Subject.createNewModule = (moduleReqdata, result) => {
  dbCon.query('INSERT INTO module SET ?', moduleReqdata, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null, err)
    }else {
      console.log('Insert new type success')
      result(null, res)
    }
  })
}
Model_Subject.InspectModule = (course_id, moudule_id, result) => {
  dbCon.query('SELECT a.sub_id,a.sub_name_thai, substring(cast(b.stu_id as varchar(8)),1,2) AS series, sum(case !F when sr_grade then 0 else 1 end) AS pass, (COUNT(b.stu_id)-sum(case F when sr_grade then 0 else 1 end)) AS fail FROM subject AS a INNER JOIN student_result AS b ON a.sub_id=b.sub_id INNER JOIN student AS c ON c.stu_id=b.stu_id WHERE substring(cast(b.stu_id as varchar(8)),1,2) = 63 GROUP BY a.sub_id, substring(cast(b.stu_id as varchar(8)),1,2)')
}

module.exports = Model_Subject