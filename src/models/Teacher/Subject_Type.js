var dbCon = require('../../../config/db.config')

var Subject_Type = function(subject_type) {
  this.st_id = subject_type.st_id
  this.st_name = subject_type.st_name
  this.st_credit = subject_type.st_credit
}
// get all types
Subject_Type.getAllTypes = (result) => {
  dbCon.query('SELECT * FROM subject_type', (err, res) => {
    if(err) {
      console.log('Error while fetching subject types.', err)
      result(null, err)
    }else {
      console.log('Subject types fetched successfully.')
      result(null, res)
    }
  })
}
Subject_Type.createNewType = (sub_typeReqdata, result) => {
  dbCon.query('INSERT INTO subject_type SET ?', sub_typeReqdata, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null, err)
    }else {
      console.log('Insert new type successfully')
      result(null, res)
    }
  })
}
// insert subject types
// update subject_type
Subject_Type.updateSubjectType = (id, sub_typeReqdata, result) => {
  dbCon.query('UPDATE subject_type SET st_credit=? WHERE st_id=?', [sub_typeReqdata.st_credit, id], (err, res) => {
    if(err) {
      console.log('Error while update data')
      result(null, err)
    } else {
      console.log('Update subject_type successfully')
      result(null, res)
    }
  })
}
module.exports = Subject_Type