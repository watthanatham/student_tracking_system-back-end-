const SubjectModel = require('../../models/Teacher/Subject')

// get all subjects
exports.getAllSubjects = (req, res) => {
  SubjectModel.getAllSubjects(req.params.id, (err, subject) => {
    console.log('Get all subjects successfully')
    if(err)
    res.send(err)
    console.log('Subjects', subject)
    res.send(subject)   
  })
}
exports.getSubjectById = (req, res) => {
  SubjectModel.getSubjectById(req.params.id, (err, subject) => {
    console.log('Get subject by id successfully')
    if(err)
    res.send(err)
    console.log('Subject', subject);
    res.send(subject)
  })
}
exports.createNewSubject = (req, res) => {
  console.log('Req subject data', req.body)
  const subjectReqData = new SubjectModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    SubjectModel.createNewSubject(subjectReqData, (err, subject) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert subject completed', data: subject })
    })
  }
}
exports.importNewSubject = (req, res) => {
  console.log('Req subject data', req.body)
  // const subjectReqData = new SubjectModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    SubjectModel.importNewSubject(req.body, (err, subject) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert subject completed', data: subject })
    })
  }
}
// update subject
exports.updateSubject = (req, res) => {
  const subjectReqData = new SubjectModel(req.body)
  console.log('subject req data update', subjectReqData)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    SubjectModel.updateSubject(req.params.id, subjectReqData, (err, subject) => {
      if(err)
      res.send(err)
      res.json({ status : true, message: 'Update subject information successfully', data: subject})
    })
  }
}

// delelte subject
exports.deleteSubject = (req, res) => {
  SubjectModel.deleteSubject(req.params.id, (err, subject) => {
    if(err)
    res.send(err)
    res.json({ success: true, message: 'Deleted subject successfully'})
  })
}