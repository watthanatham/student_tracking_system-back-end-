const TypeSubjectModel = require('../../models/Teacher/Type_Subject')

exports.getTypeSubject = (req, res) => {
  TypeSubjectModel.getTypeSubject (req.params.id, (err, type_subject) => {
    if(err)
    res.send(err)
    console.log(type_subject)
    res.send(type_subject)
  })
}