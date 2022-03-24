const express = require('express')
const router = express.Router()

const staffController = require('../../controllers/Teacher/StaffController')

// get all staff
router.post('/login', staffController.loginController)

module.exports = router