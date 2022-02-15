const SubjectTypesModel = require('../models/Subject_Type')

// get all subject types
exports.getAllTypes = (req, res) => {
  SubjectTypesModel.getAllTypes((err, subject_type) => {
    console.log('Get all subject types sucessfully')
    if(err)
    res.send(err)
    console.log('Subject Types', subject_type)
    res.send(subject_type)
  })
}