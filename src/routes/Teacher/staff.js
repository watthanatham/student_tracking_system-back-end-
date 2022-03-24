const express = require('express')
const router = express.Router()

const staffController = require('../../controllers/Teacher/StaffController')

// staff login
router.post('/login', staffController.loginController)

module.exports = router