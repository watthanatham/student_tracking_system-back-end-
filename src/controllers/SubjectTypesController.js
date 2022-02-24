const SubjectTypesModel = require('../models/Subject_Type')

// get all subject types
exports.getAllTypes = (req, res) => {
  SubjectTypesModel.getAllTypes ((err, subject_type) => {
    console.log('Get all subject types sucessfully')
    if(err)
    res.send(err)
    console.log('Subject Types', subject_type)
    res.send(subject_type)
  })
}
exports.createNewType = (req, res) => {
  const sub_typeReqdata = new SubjectTypesModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill data all fields'})
  }else {
    console.log('Valid data')
    SubjectTypesModel.createNewType(sub_typeReqdata, (err, subject_type) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert type sucessfully', data: subject_type })
    })
  }
}
// Update subject_type
exports.updateSubjectType = (req, res) => {
  const sub_typeReqData = new SubjectTypesModel(req.body)
  console.log('subject req data update', sub_typeReqData)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    SubjectTypesModel.updateSubjectType(req.params.id, sub_typeReqData, (err, subject_type) => {
      if(err)
      res.send(err)
      res.json({ status : true, message: 'Update subject information successfully', data: subject_type})
    })
  }
}