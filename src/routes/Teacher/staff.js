const express = require('express')
const router = express.Router()

const staffController = require('../../controllers/Teacher/StaffController')

// get all staff
router.get('/', staffController.getAllStaff)
// get staff by id
router.get('/:id', staffController.getStaffById)
// insert new staff 
router.post('/', staffController.insertNewStaff)
// import staff
router.post('/import', staffController.insertNewStaffImport)
// update staff
router.put('/:id', staffController.updateStaff)
// delete staff 
router.delete('/:id', staffController.deleteStaff)

module.exports = router