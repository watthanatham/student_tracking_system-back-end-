const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const StaffModel = require('../../models/Teacher/Staff')

exports.loginController = (req, res, next) => {
  const { username, password } = req.body
  StaffModel.findStaffByUsername({ staff_username: username })
    .then(async (row) => {
      if(row.length !== 0) {
        const hash = await bcrypt.hash(row[0].staff_password, 10)
        return bcrypt.compare(password, hash)
          .then((result) => {
            if(!result) {
              res.status(401)
                .json({
                  message: 'Authentication failed'
                })
            } else {
              let jwtToken = jwt.sign({
                firstname: row[0].staff_firstname,
                lastname: row[0].staff_lastname,
                username: row[0].staff_username,
                id: row[0].staff_id,
                type: 'staff'

              },
              'create-authen-nodejs', {
                expiresIn: '1h'
              })
              // console.log('staff login success')
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