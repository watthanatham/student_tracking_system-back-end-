const SubjectModel = require('../models/Subject')

// get all subjects
exports.getAllSubjects = (req, res)=> {
  //console.log('Get user successfully')
  SubjectModel.getAllSubjects((err, subject) => {
    console.log('Get all subjects success fully')
    if(err)
    res.send(err)
    console.log('Subjects', subject)
    res.send(subject)   
  })
}