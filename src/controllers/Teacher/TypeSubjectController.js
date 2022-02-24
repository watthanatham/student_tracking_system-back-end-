const TypeSubjectModel = require('../../models/Teacher/Type_Subject')

// get all subject types
exports.getAllTypesubject = (req, res) => {
  TypeSubjectModel.getAllTypesubject ((err, subject_type) => {
    console.log('Get all subject types sucessfully')
    if(err)
    res.send(err)
    console.log('Subject Types', subject_type)
    res.send(subject_type)
  })
}