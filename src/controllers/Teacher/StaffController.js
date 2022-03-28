const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const StaffModel = require('../../models/Teacher/Staff')

exports.loginController = (req, res, next) => {
  const { staff_username='', staff_password } = req.body
  StaffModel.findStaffByUsername({ staff_username: staff_username })
    .then(async (row) => {
      if(row.length !== 0) {
        const hash = await bcrypt.hash(row[0].staff_password, 10)
        return bcrypt.compare(staff_password, hash)
          .then((result) => {
            if(!result) {
              res.status(401)
                .json({
                  message: 'Authentication failed'
                })
            } else {
              let jwtToken = jwt.sign({
                staff_username: row[0].staff_username,
                staff_id: row[0].staff_id
              },
              'create-authen-nodejs', {
                expiresIn: '1h'
              })
              console.log(jwtToken)
              res.status(200).json({
                token: jwtToken,
                expiresIn: 3600,
              })
            }
          }).catch((error) => {
            console.log(error)
            res.status(401)
              .json({
                message: 'Authentication failed',
                error: error
              })
          })
      } else {
        res.status(401)
        .json({
          message: 'Authentication failed'
        })
      }
    })
    .catch((error) => {
      res.status(500)
      .json({
        message: error
      })
    })
}