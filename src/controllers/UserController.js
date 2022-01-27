const UserModel = require('../models/User')

// get all user 
exports.getUserList = (req, res)=> {
  //console.log('Get user successfully')
  UserModel.getAllUsers((err, user) => {
    console.log('Get user success fully')
    if(err)
    res.send(err)
    console.log('Users', user)
    res.send(user)   
  })
}

// get user by id
exports.getUserByID = (req, res) => {
  //console.log('get user by id')
  UserModel.getUserByID(req.params.id, (err, user) => {
    if(err)
    res.send(err)
    console.log('Users', user)
    res.send(user)  
  })
}

// add user
exports.crateNewUser = (req, res) => {
  console.log('req data',req.body)
  const userReqData = new UserModel(req.body)
  // check null data
  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    UserModel.createNewUser(userReqData, (err, user) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Insert user completed', data: user })
      }) 
  }
}

// update user
exports.updateUser = (req, res) => {
  const userReqData = new UserModel(req.body)
  console.log('user reqData update', userReqData)
  // check null data
  if(req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({success: false, message: 'Please fill all fields'})
  }else {
    console.log('Valid data')
    UserModel.updateUser(req.params.id, userReqData, (err, user) => {
      if(err)
      res.send(err)
      res.json({ status: true, message: 'Update user completed', data: user })
      }) 
  }
}

// delete user
exports.deleteUser = (req, res) => {
  UserModel.deleteUser(req.params.id, (err, user) => {
    if(err)
    res.send(err)
    res.json({ success: true, message: 'Deleted user successfully'})
  })
}