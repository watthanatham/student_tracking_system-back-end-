
var dbCon = require('../../config/db.config')

var Subject = function(subject) {
  this.sub_id = subject.sub_id
  this.sub_code = subject.sub_code
  this.sub_name = subject.sub_name
  this.sub_credit = subject.sub_credit
  this.st_id = subject.st_id
  this.module_id = subject.module_id
}
// get all subjects
Subject.getAllSubjects = (result) => {
  dbCon.query('SELECT * FROM subjects', (err, res) => {
    if(err) {
      console.log('Error while fetching subjects', err)
      result(null, err)
    }else {
      console.log('Subjects fetched successfully')
      result(null, res)
    }
  })
}
// get subject by id 
Subject.getSubjectById = (id, result) => {
  dbCon.query('SELECT * FROM subjects WHERE sub_id=?', id, (err, res) => {
    if(err) {
      console.log('Error while fetching subject by id', err)
      result(null,err)
    }else {
      console.log('Subject fetched by id successfully')
      result(null,res)
    }
  })
}
// insert subject
Subject.createNewSubject = (subjectReqData, result) => {
  dbCon.query('INSERT INTO subjects SET ?', subjectReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null,err)
    }else {
      console.log('Insert new subject successfully')
      result(null, res)
    }
  })
}
// update subject
Subject.updateSubject = (id, subjectReqData, result) => {
  dbCon.query('UPDATE subjects SET sub_code=?, sub_name=?, sub_credit=?, st_id=?, module_id=? WHERE sub_id=?', [subjectReqData.sub_code,subjectReqData.sub_name,subjectReqData.sub_credit,subjectReqData.st_id,subjectReqData.module_id, id] , (err, res) => {
    if(err) {
      console.log('Error while update data')
      result(null, err)
    } else {
      console.log('Update subject successfully')
      result(null, res)
    }
  })
}
// delete subject
Subject.deleteSubject = (id, result) => {
  dbCon.query('DELETE FROM subjects WHERE sub_id=?', [id], (err, res) => {
    if(err) {
      console.log('Error while deleting subject')
      result(null, err)
    }else {
      console.log('Delete subject successfully')
      result(null, res)
    }
  })
}
module.exports = Subject
