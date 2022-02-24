const express = require('express')
const router = express.Router()

const studentResultController = require('../controllers/StudentResultController')

// get all result
router.get('/', studentResultController.getAllStudentResult)
// get by id
router.get('/:id', studentResultController.getStudentResultById)
// insert new student result 
router.post('/', studentResultController.insertStudentResult)
// update student result 
router.put('/:id', studentResultController.updateStudentResult)
// delete student result 
router.delete('/:id', studentResultController.deleteStudentResult)

module.exports = router