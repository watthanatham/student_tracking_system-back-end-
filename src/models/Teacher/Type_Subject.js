var dbCon = require('../../../config/db.config')

var Type_Subject = function(type_subject) {
  this.sub_code = Type_Subject.sub_code
  this.sub_name_thai = Type_Subject.sub_name_thai
  this.sub_credit = Type_Subject.sub_credit
  this.st_id = Type_Subject.st_id
}
// get all types
Type_Subject.getTypeSubject = (result) => {
  dbCon.query('SELECT sub_code, sub_name_thai, sub_credit, st_name FROM  subject INNER JOIN subject_type ON subject.st_id = subject_type.st_id', (err, res) => {
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