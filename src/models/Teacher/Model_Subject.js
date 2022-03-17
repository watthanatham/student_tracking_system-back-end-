var dbCon = require('../../../config/db.config')

var Model_Subject = function(model_subject) {
  this.sub_id = Model_Subject.sub_id
  this.sub_name_thai = Model_Subject.sub_name_thai
  this.module_id = Model_Subject.module_id
}
// get all types
Model_Subject.getModule = (id, result) => {
  dbCon.query('SELECT sub_id, sub_name_thai, module_name FROM subject INNER JOIN module ON subject.module_id = module.module_id AND subject.course_id=? AND module.course_id', id,(err, res) => {
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

module.exports = Model_Subject