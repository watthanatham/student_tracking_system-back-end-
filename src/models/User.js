
var dbConn = require('../../config/db.config')

var User = function(user) {
  this.id = user.id
  this.username = user.username
  this.password = user.password
}
// get all Users
User.getAllUsers = (result) => {
  dbConn.query('SELECT * FROM user', (err, res )=> {
    if(err) {
      console.log('Error while fetching users', err)
      result(null,err)
    }else {
      console.log('User fetched sucessfully');
      result(null,res)
    }
  })
}
//get user by id
User.getUserByID = (id, result) => {
  dbConn.query('SELECT * FROM user WHERE id=?', id, (err, res)=> {
    if(err) {
      console.log('Error while fetching user by id', err)
      result(null,err)
    }else {
      console.log('User fetched by id sucessfully');
      result(null,res)
    }
  })
}
// add user
User.createNewUser = (userReqData, result) => {
  dbConn.query('INSERT INTO user SET ?', userReqData, (err, res) => {
    if(err) {
      console.log('Error while inserting data')
      result(null, err)
    }else {
      console.log('Insert user data completed')
      result(null, res)
    }
  })
}
// update user
User.updateUser = (id, userReqData, result) => {
  dbConn.query('UPDATE user SET username=?, password=? WHERE id = ?', [userReqData.username,userReqData.password, id] , (err, res) => {
    if(err) {
      console.log('Error while update data');
      result(null, err)
    }else {
      console.log('Update user data successfully');
      result(null, res)
    }
  })
}
// delete user
User.deleteUser = (id, result) => {
  dbConn.query('DELETE FROM user WHERE id=?', [id], (err, res) => {
    if(err){
      console.log('Error while deleting user');
      result(null, err)
    }else {
      console.log('Delete user successfully')
      result(null, res)
    }
  })
}
module.exports = User