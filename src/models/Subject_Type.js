var dbCon = require('../../config/db.config')

var Subject_Type = function(subject_type) {
  this.st_id = subject_type.st_id
  this.st_name = subject_type.st_name
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
// insert subject types