const db = require('../../../config/db.config')

class studentLogin {
  constructor({ stu_username='', stu_password='', stu_id=0}) {
    this.stu_id = stu_id
    this.stu_username = stu_username
    this.stu_password = stu_password
  }
}
studentLogin.findStudentbyUsername = async (payload) => {
  return new Promise ((resolve, reject) => {
    db.query('SELECT * FROM student WHERE stu_username = ?', [payload.stu_username], (err, res) => {
      if(err) {
        reject('error')
      }
      resolve(res)
    })
  })
}
module.exports = studentLogin