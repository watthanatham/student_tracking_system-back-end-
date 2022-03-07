var dbCon = require('../../../config/db.config')

var Staff = function(staff) {
  this.staff_id = staff.staff_id
  this.staff_username = staff.staff_username
  this.staff_password = this.staff_password
}

//get all staff
Staff.getAllStaff = (result) => {
  dbCon.query('SELECT * FROM staff', (err, res) => {
    if(err) {
      console.log('Error while fetching staff', err)
      result(null, err)
    }else {
      console.log('Staff fetched success')
      result(null, res)
    }
  })
}
Staff.getStaffById = (id, result) => {
  dbCon.query('SELECT * FROM staff WHERE staff_id=?', id, (err, res) => {
    if(err) {
        console.log('Error while fetching staff by id', err)
        result(null,err)
    }else {
        console.log('Staff fetched by id successfully')
        result(null,res)
    }
  })
}
// insert staff 
Staff.insertNewStaff = (staffReqData, result) => {
  dbCon.query('INSERT INTO staff SET ?', staffReqData, (err, res) => {
      if(err) {
          console.log('Error while inserting data')
          result(null, err)
      }else {
          console.log('Insert new staff successfully')
          result(null, res)
      }
  })
}

Staff.insertNewStaffImport = (staffReqData, result) => {
  dbCon.query('INSERT INTO staff (staff_username, staff_password) VALUES ?', [staffReqData], (err, res) => {
      if(err) {
          console.log('Error while inserting data')
          result(null, err)
      }else {
          console.log('Insert new staff successfully')
          result(null, res)
      }
  })
}
// update staff
Staff.updateStaff = (id, staffReqData, result) => {
  dbCon.query('UPDATE staff SET staff_username=?, staff_password=? WHERE staff_id=?', [staffReqData.staff_username, staffReqData.staff_password, id], (err, res) => {
      if(err) {
          console.log('Error while update data')
          result(null, err)
      }else {
          console.log('Update staff success')
          result(null, res)
      }
  })
}
// delete staff
Staff.deleteStaff = (id, result) => {
  dbCon.query('DELETE FROM staff WHERE staff_id=?', [id], (err, res) => {
      if(err) {
          console.log('Error while deleting staff')
          result(null, err)
      }else {
          console.log('Delete staff success')
          result(null, res)
      }
  })
}
module.exports = Staff
