const StudentModel = require('../models/Student')

// get all student
exports.getAllStudent = (req, res) => {
    StudentModel.getAllStudent((err, student) => {
        console.log('Get all student successfully')
        if(err)
        res.send(err)
        console.log('Student', student)
        res.send(student)
    })
}
exports.getStudentById = (req, res) => {
    StudentModel.getStudentById(req.params.id, (err, student) => {
      console.log('Get student by id successfully')
      if(err)
      res.send(err)
      console.log('Student', student);
      res.send(student)
  })
}
exports.insertNewStudent = (req, res) => {
  console.log('Req student data', req.body)
  const studentReqData = new StudentModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill data all fields'})
  }else {
    console.log('Valid data')
    StudentModel.insertNewStudent(studentReqData, (err, student) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert student completed', data: student })
    })
  }
}
exports.updateStudent = (req, res) => {
  const studentReqData = new StudentModel(req.body)
  console.log('student req data update', studentReqData)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    StudentModel.updateStudent(req.params.id, studentReqData, (err, student) => {
      if(err)
      res.send(err)
      res.json({ status : true, message: 'Update student information completed', data: student })
    })
  }
}
exports.deleteStudent = (req, res) => {
  StudentModel.deleteStudent(req.params.id, (err, student) => {
    if(err)
    res.send(err)
    res.json({ success: true, message: 'Deleted student success'})
  })
}