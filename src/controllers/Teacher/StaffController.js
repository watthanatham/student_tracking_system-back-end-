const StaffModel =require('../../models/Teacher/Staff')

//get all staff
exports.getAllStaff = (req, res) =>  {
  StaffModel.getAllStaff((err, staff) => {
    console.log('Get all staff successfully')
    if(err)
    res.send(err)
    console.log('Staff', staff)
    res.send(staff)
  })
}
exports.getStaffById = (req, res) => {
  StaffModel.getStaffById(req.params.id, (err, staff) => {
    console.log('Get staff by id success')
    if(err)
    res.send(err)
    console.log('Staff', staff)
    res.send(staff)
  })
}
exports.insertNewStaff = (req, res) => {
  console.log('Req staff data', req.body)
  const staffReqData = new StaffModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill data all fields'})
  }else {
    console.log('Valid data')
    StaffModel.insertNewStaff(staffReqData, (err, staff) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert staff completed', data: staff })
    })
  }
}
exports.insertNewStaffImport = (req, res) => {
  console.log('Req staff data', req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill data all fields'})
  }else {
    console.log('Valid data')
    StaffModel.insertNewStaffImport(req.body, (err, staff) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert staff completed', data: staff })
    })
  }
}
exports.updateStaff = (req, res) => {
  const staffReqData = new StaffModel(req.body)

  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    StaffModel.updateStaff(req.params.id, staffReqData, (err, staff) => {
      if(err)
      res.send(err)
      res.json({ status : true, message: 'Update staff information completed', data: staff })
    })
  }
}
exports.deleteStaff = (req, res) => {
  StaffModel.deleteStaff(req.params.id, (err, staff) => {
    if(err)
    res.send(err)
    res.json({ success: true, message: 'Deleted staff success'})
  })
}