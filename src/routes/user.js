const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserController')

// get all user
router.get('/', userController.getUserList)
// get user by id
router.get('/:id', userController.getUserByID)
// create new user
router.post('/', userController.crateNewUser)
// update user by id
router.put('/:id', userController.updateUser)
// delete user by id
router.delete('/:id', userController.deleteUser)

module.exports = router