const express = require('express')
const router = express.Router()

const studentloginController = require('../../controllers/Student/StudentLoginController')

// student login
router.post('/', studentloginController.loginController)

module.exports = router