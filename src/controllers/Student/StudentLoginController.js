const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const StudentLoginModel = require('../../models/Student/StudentLogin')

exports.loginController = (req, res, next) => {
  const { username, password } = req.body
  // console.log(req.body)
  StudentLoginModel.findStudentbyUsername({ stu_username: username })
    .then(async (row) => {
      if(row.length !== 0) {
        const hash = await bcrypt.hash(row[0].stu_password, 10)
        return bcrypt.compare(password, hash)
        .then((result) => {
          if(!result) {
            res.status(401)
              .json({
                message: 'Authentication failed'
              })
          } else {
            let jwtToken = jwt.sign({
              id: row[0].stu_id,
              course_id: row[0].course_id,
              firstname: row[0].stu_firstname,
              lastname: row[0].stu_lastname,
              username: row[0].stu_username,
              type: 'student'
            },
            'create-authen-nodeks', {
              expiresIn: '1h'
            })
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