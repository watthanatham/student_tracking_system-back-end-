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

module.exports = Model_Subject