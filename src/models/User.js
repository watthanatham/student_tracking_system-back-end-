const db = require('../../config/db.config')

class staffModel {
  constructor({ staff_username='', staff_password='', staff_id=0 }) {
    this.staff_id = staff_id
    this.staff_username = staff_username
    this.staff_password = staff_password
  }
}
staffModel.findStaffByUsername = (staff_username) => {
  return db.execute('SELECT * FROM staff WHERE staff_username = ?', [staff_username])
}
module.exports = staffModel