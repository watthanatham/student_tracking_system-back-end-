var dbCon = require('../../../config/db.config')

var Type_Subject = function(type_subject) {
  this.sub_id = Type_Subject.sub_id
  this.sub_name_thai = Type_Subject.sub_name_thai
  this.sub_credit = Type_Subject.sub_credit
  this.st_id = Type_Subject.st_id
  this.st_name = Type_Subject.st_name
}
// get all types
Type_Subject.getTypeSubject = (id, result) => {
  dbCon.query('SELECT sub_id, sub_name_thai, sub_credit, st_name FROM subject INNER JOIN subject_type ON subject.st_id = subject_type.st_id AND subject_type.course_id AND subject.course_id=?', id,(err, res) => {
    if(err) {
      console.log('Error while fetching subject types.', err)
      result(null, err)
    }else {
      console.log('Subject types fetched successfully.')
      result(null, res)
    }
  })
}
module.exports = Type_Subject