var dbCon = require('../../../config/db.config')

var Type_Subject = function(type_subject) {
  this.sub_id = Type_Subject.sub_id
  this.sub_name_thai = Type_Subject.sub_name_thai
  this.sub_credit = Type_Subject.sub_credit
  this.st_id = Type_Subject.st_id
  this.st_name = Type_Subject.st_name
}
// get all types
Type_Subject.getTypeSubject = (course_id, st_id, result) => {
  dbCon.query('SELECT a.sub_id, a.sub_name_thai, a.sub_credit FROM subject AS a INNER JOIN subject_type AS b ON a.st_id = b.st_id AND b.course_id AND a.course_id = ? AND b.st_id = ?', [course_id, st_id],(err, res) => {
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