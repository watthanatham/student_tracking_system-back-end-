const db = require('../../../config/db.config')

class staffModel {
  constructor({ staff_username='', staff_password='', staff_id=0 }) {
    this.staff_id = staff_id
    this.staff_username = staff_username
    this.staff_password = staff_password
  }
}
staffModel.findStaffByUsername = async (payload) => {
  return new Promise ((resolve, reject) => {
    db.query('SELECT * FROM staff WHERE staff_username = ?', [payload.staff_username], (err, res) => {
      if(err) {
        reject('error')
      }
      resolve(res)
    })
    
  })
  
}
module.exports = staffModel