
var dbCon = require('../../../config/db.config')

var Subject = function(subject) {
  this.sub_id = subject.sub_id
  this.sub_name_thai = subject.sub_name_thai
  this.sub_name_eng = subject.sub_name_eng
  this.sub_credit = subject.sub_credit
  this.st_id = subject.st_id
  this.module_id = subject.module_id
  this.course_id = subject.course_id
}
// get all subjects
Subject.getAllSubjects = (id, result) => {
  dbCon.query('SELECT a.sub_id, a.sub_name_thai, a.sub_name_eng, a.sub_credit, c.st_name, b.module_name FROM subject AS a INNER JOIN module AS b ON a.module_id = b.module_id INNER JOIN subject_type AS c ON a.st_id = c.st_id WHERE a.course_id = ?', id,(err, res) => {
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
  dbCon.query('SELECT a.sub_id, a.sub_name_thai, a.sub_name_eng, a.sub_credit, a.st_id, c.st_name, a.module_id, b.module_name FROM subject a INNER JOIN module b ON a.module_id = b.module_id INNER JOIN subject_type c ON a.st_id = c.st_id WHERE a.sub_id=?', id, (err, res) => {
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
  dbCon.query('INSERT INTO subject SET ?', subjectReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null,err)
    }else {
      console.log('Insert new subject successfully')
      result(null, res)
    }
  })
}
// import
Subject.importNewSubject = (subjectReqData, result) => {
  console.log(subjectReqData)
  dbCon.query('INSERT INTO subject (sub_id, st_id, module_id, course_id, sub_name_thai, sub_name_eng, sub_credit) VALUES ?', [subjectReqData], (err, res) => {
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
  console.log(subjectReqData)
  dbCon.query('UPDATE subject SET sub_name_thai=?, sub_name_eng=?, sub_credit=?, st_id=?, module_id=? WHERE sub_id=?', [subjectReqData.sub_name_thai,subjectReqData.sub_name_eng,subjectReqData.sub_credit,subjectReqData.st_id,subjectReqData.module_id, id] , (err, res) => {
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
  dbCon.query('DELETE FROM subject WHERE sub_id=?', [id], (err, res) => {
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
