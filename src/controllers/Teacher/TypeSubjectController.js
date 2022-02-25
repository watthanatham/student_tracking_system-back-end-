const TypeSubjectModel = require('../../models/Teacher/Type_Subject')

exports.getTypeSubject = (req, res) => {
  TypeSubjectModel.getTypeSubject ((err, type_subject) => {
    if(err)
    res.send(err)
    console.log(type_subject)
    res.send(type_subject)
  })
}